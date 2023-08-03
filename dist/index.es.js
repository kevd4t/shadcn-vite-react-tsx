import * as $ from "react";
import P, { useCallback as ae, forwardRef as D, Children as Fe, isValidElement as Et, createElement as h, cloneElement as dn, Fragment as ht, createContext as Te, useContext as He, useState as B, useEffect as z, useRef as I, useMemo as Je, useLayoutEffect as Qo, useReducer as Jo } from "react";
import * as cd from "react-dom";
import es, { flushSync as Er, createPortal as ts } from "react-dom";
var w = { exports: {} }, xn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qa;
function ld() {
  if (qa)
    return xn;
  qa = 1;
  var e = P, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, l) {
    var d, u = {}, f = null, p = null;
    l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (d in c)
      r.call(c, d) && !a.hasOwnProperty(d) && (u[d] = c[d]);
    if (s && s.defaultProps)
      for (d in c = s.defaultProps, c)
        u[d] === void 0 && (u[d] = c[d]);
    return { $$typeof: t, type: s, key: f, ref: p, props: u, _owner: o.current };
  }
  return xn.Fragment = n, xn.jsx = i, xn.jsxs = i, xn;
}
var yn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Za;
function ud() {
  return Za || (Za = 1, process.env.NODE_ENV !== "production" && function() {
    var e = P, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, m = "@@iterator";
    function g(x) {
      if (x === null || typeof x != "object")
        return null;
      var M = v && x[v] || x[m];
      return typeof M == "function" ? M : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(x) {
      {
        for (var M = arguments.length, j = new Array(M > 1 ? M - 1 : 0), re = 1; re < M; re++)
          j[re - 1] = arguments[re];
        C("error", x, j);
      }
    }
    function C(x, M, j) {
      {
        var re = b.ReactDebugCurrentFrame, me = re.getStackAddendum();
        me !== "" && (M += "%s", j = j.concat([me]));
        var $e = j.map(function(de) {
          return String(de);
        });
        $e.unshift("Warning: " + M), Function.prototype.apply.call(console[x], console, $e);
      }
    }
    var E = !1, N = !1, O = !1, T = !1, k = !1, L;
    L = Symbol.for("react.module.reference");
    function q(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === r || x === a || k || x === o || x === l || x === d || T || x === p || E || N || O || typeof x == "object" && x !== null && (x.$$typeof === f || x.$$typeof === u || x.$$typeof === i || x.$$typeof === s || x.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === L || x.getModuleId !== void 0));
    }
    function K(x, M, j) {
      var re = x.displayName;
      if (re)
        return re;
      var me = M.displayName || M.name || "";
      return me !== "" ? j + "(" + me + ")" : j;
    }
    function H(x) {
      return x.displayName || "Context";
    }
    function Z(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case s:
            var M = x;
            return H(M) + ".Consumer";
          case i:
            var j = x;
            return H(j._context) + ".Provider";
          case c:
            return K(x, x.render, "ForwardRef");
          case u:
            var re = x.displayName || null;
            return re !== null ? re : Z(x.type) || "Memo";
          case f: {
            var me = x, $e = me._payload, de = me._init;
            try {
              return Z(de($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, V = 0, G, F, A, S, W, X, Y;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function ve() {
      {
        if (V === 0) {
          G = console.log, F = console.info, A = console.warn, S = console.error, W = console.group, X = console.groupCollapsed, Y = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        V++;
      }
    }
    function we() {
      {
        if (V--, V === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, x, {
              value: G
            }),
            info: Q({}, x, {
              value: F
            }),
            warn: Q({}, x, {
              value: A
            }),
            error: Q({}, x, {
              value: S
            }),
            group: Q({}, x, {
              value: W
            }),
            groupCollapsed: Q({}, x, {
              value: X
            }),
            groupEnd: Q({}, x, {
              value: Y
            })
          });
        }
        V < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = b.ReactCurrentDispatcher, J;
    function se(x, M, j) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (me) {
            var re = me.stack.trim().match(/\n( *(at )?)/);
            J = re && re[1] || "";
          }
        return `
` + J + x;
      }
    }
    var ge = !1, fe;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new he();
    }
    function pe(x, M) {
      if (!x || ge)
        return "";
      {
        var j = fe.get(x);
        if (j !== void 0)
          return j;
      }
      var re;
      ge = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = Ee.current, Ee.current = null, ve();
      try {
        if (M) {
          var de = function() {
            throw Error();
          };
          if (Object.defineProperty(de.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(de, []);
            } catch (ct) {
              re = ct;
            }
            Reflect.construct(x, [], de);
          } else {
            try {
              de.call();
            } catch (ct) {
              re = ct;
            }
            x.call(de.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ct) {
            re = ct;
          }
          x();
        }
      } catch (ct) {
        if (ct && re && typeof ct.stack == "string") {
          for (var ce = ct.stack.split(`
`), Me = re.stack.split(`
`), _e = ce.length - 1, Se = Me.length - 1; _e >= 1 && Se >= 0 && ce[_e] !== Me[Se]; )
            Se--;
          for (; _e >= 1 && Se >= 0; _e--, Se--)
            if (ce[_e] !== Me[Se]) {
              if (_e !== 1 || Se !== 1)
                do
                  if (_e--, Se--, Se < 0 || ce[_e] !== Me[Se]) {
                    var ze = `
` + ce[_e].replace(" at new ", " at ");
                    return x.displayName && ze.includes("<anonymous>") && (ze = ze.replace("<anonymous>", x.displayName)), typeof x == "function" && fe.set(x, ze), ze;
                  }
                while (_e >= 1 && Se >= 0);
              break;
            }
        }
      } finally {
        ge = !1, Ee.current = $e, we(), Error.prepareStackTrace = me;
      }
      var Gt = x ? x.displayName || x.name : "", Xa = Gt ? se(Gt) : "";
      return typeof x == "function" && fe.set(x, Xa), Xa;
    }
    function Oe(x, M, j) {
      return pe(x, !1);
    }
    function De(x) {
      var M = x.prototype;
      return !!(M && M.isReactComponent);
    }
    function nt(x, M, j) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return pe(x, De(x));
      if (typeof x == "string")
        return se(x);
      switch (x) {
        case l:
          return se("Suspense");
        case d:
          return se("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case c:
            return Oe(x.render);
          case u:
            return nt(x.type, M, j);
          case f: {
            var re = x, me = re._payload, $e = re._init;
            try {
              return nt($e(me), M, j);
            } catch {
            }
          }
        }
      return "";
    }
    var rt = Object.prototype.hasOwnProperty, yt = {}, Jn = b.ReactDebugCurrentFrame;
    function Ht(x) {
      if (x) {
        var M = x._owner, j = nt(x.type, x._source, M ? M.type : null);
        Jn.setExtraStackFrame(j);
      } else
        Jn.setExtraStackFrame(null);
    }
    function Vt(x, M, j, re, me) {
      {
        var $e = Function.call.bind(rt);
        for (var de in x)
          if ($e(x, de)) {
            var ce = void 0;
            try {
              if (typeof x[de] != "function") {
                var Me = Error((re || "React class") + ": " + j + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Me.name = "Invariant Violation", Me;
              }
              ce = x[de](M, de, re, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_e) {
              ce = _e;
            }
            ce && !(ce instanceof Error) && (Ht(me), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", j, de, typeof ce), Ht(null)), ce instanceof Error && !(ce.message in yt) && (yt[ce.message] = !0, Ht(me), y("Failed %s type: %s", j, ce.message), Ht(null));
          }
      }
    }
    var Bu = Array.isArray;
    function eo(x) {
      return Bu(x);
    }
    function Hu(x) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, j = M && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return j;
      }
    }
    function Vu(x) {
      try {
        return Wa(x), !1;
      } catch {
        return !0;
      }
    }
    function Wa(x) {
      return "" + x;
    }
    function ja(x) {
      if (Vu(x))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hu(x)), Wa(x);
    }
    var $n = b.ReactCurrentOwner, zu = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ua, Ya, to;
    to = {};
    function Gu(x) {
      if (rt.call(x, "ref")) {
        var M = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Ku(x) {
      if (rt.call(x, "key")) {
        var M = Object.getOwnPropertyDescriptor(x, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Xu(x, M) {
      if (typeof x.ref == "string" && $n.current && M && $n.current.stateNode !== M) {
        var j = Z($n.current.type);
        to[j] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z($n.current.type), x.ref), to[j] = !0);
      }
    }
    function qu(x, M) {
      {
        var j = function() {
          Ua || (Ua = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        j.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: j,
          configurable: !0
        });
      }
    }
    function Zu(x, M) {
      {
        var j = function() {
          Ya || (Ya = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        j.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: j,
          configurable: !0
        });
      }
    }
    var Qu = function(x, M, j, re, me, $e, de) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: M,
        ref: j,
        props: de,
        // Record the component responsible for creating this element.
        _owner: $e
      };
      return ce._store = {}, Object.defineProperty(ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.defineProperty(ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function Ju(x, M, j, re, me) {
      {
        var $e, de = {}, ce = null, Me = null;
        j !== void 0 && (ja(j), ce = "" + j), Ku(M) && (ja(M.key), ce = "" + M.key), Gu(M) && (Me = M.ref, Xu(M, me));
        for ($e in M)
          rt.call(M, $e) && !zu.hasOwnProperty($e) && (de[$e] = M[$e]);
        if (x && x.defaultProps) {
          var _e = x.defaultProps;
          for ($e in _e)
            de[$e] === void 0 && (de[$e] = _e[$e]);
        }
        if (ce || Me) {
          var Se = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          ce && qu(de, Se), Me && Zu(de, Se);
        }
        return Qu(x, ce, Me, me, re, $n.current, de);
      }
    }
    var no = b.ReactCurrentOwner, Ba = b.ReactDebugCurrentFrame;
    function zt(x) {
      if (x) {
        var M = x._owner, j = nt(x.type, x._source, M ? M.type : null);
        Ba.setExtraStackFrame(j);
      } else
        Ba.setExtraStackFrame(null);
    }
    var ro;
    ro = !1;
    function oo(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function Ha() {
      {
        if (no.current) {
          var x = Z(no.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function ed(x) {
      {
        if (x !== void 0) {
          var M = x.fileName.replace(/^.*[\\\/]/, ""), j = x.lineNumber;
          return `

Check your code at ` + M + ":" + j + ".";
        }
        return "";
      }
    }
    var Va = {};
    function td(x) {
      {
        var M = Ha();
        if (!M) {
          var j = typeof x == "string" ? x : x.displayName || x.name;
          j && (M = `

Check the top-level render call using <` + j + ">.");
        }
        return M;
      }
    }
    function za(x, M) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var j = td(M);
        if (Va[j])
          return;
        Va[j] = !0;
        var re = "";
        x && x._owner && x._owner !== no.current && (re = " It was passed a child from " + Z(x._owner.type) + "."), zt(x), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, re), zt(null);
      }
    }
    function Ga(x, M) {
      {
        if (typeof x != "object")
          return;
        if (eo(x))
          for (var j = 0; j < x.length; j++) {
            var re = x[j];
            oo(re) && za(re, M);
          }
        else if (oo(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var me = g(x);
          if (typeof me == "function" && me !== x.entries)
            for (var $e = me.call(x), de; !(de = $e.next()).done; )
              oo(de.value) && za(de.value, M);
        }
      }
    }
    function nd(x) {
      {
        var M = x.type;
        if (M == null || typeof M == "string")
          return;
        var j;
        if (typeof M == "function")
          j = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === u))
          j = M.propTypes;
        else
          return;
        if (j) {
          var re = Z(M);
          Vt(j, x.props, "prop", re, x);
        } else if (M.PropTypes !== void 0 && !ro) {
          ro = !0;
          var me = Z(M);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rd(x) {
      {
        for (var M = Object.keys(x.props), j = 0; j < M.length; j++) {
          var re = M[j];
          if (re !== "children" && re !== "key") {
            zt(x), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), zt(null);
            break;
          }
        }
        x.ref !== null && (zt(x), y("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    function Ka(x, M, j, re, me, $e) {
      {
        var de = q(x);
        if (!de) {
          var ce = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Me = ed(me);
          Me ? ce += Me : ce += Ha();
          var _e;
          x === null ? _e = "null" : eo(x) ? _e = "array" : x !== void 0 && x.$$typeof === t ? (_e = "<" + (Z(x.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : _e = typeof x, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _e, ce);
        }
        var Se = Ju(x, M, j, me, $e);
        if (Se == null)
          return Se;
        if (de) {
          var ze = M.children;
          if (ze !== void 0)
            if (re)
              if (eo(ze)) {
                for (var Gt = 0; Gt < ze.length; Gt++)
                  Ga(ze[Gt], x);
                Object.freeze && Object.freeze(ze);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ga(ze, x);
        }
        return x === r ? rd(Se) : nd(Se), Se;
      }
    }
    function od(x, M, j) {
      return Ka(x, M, j, !0);
    }
    function ad(x, M, j) {
      return Ka(x, M, j, !1);
    }
    var id = ad, sd = od;
    yn.Fragment = r, yn.jsx = id, yn.jsxs = sd;
  }()), yn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ld() : e.exports = ud();
})(w);
function _() {
  return _ = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _.apply(this, arguments);
}
function dd(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Pr(...e) {
  return (t) => e.forEach(
    (n) => dd(n, t)
  );
}
function ue(...e) {
  return ae(Pr(...e), e);
}
const ot = /* @__PURE__ */ D((e, t) => {
  const { children: n, ...r } = e, o = Fe.toArray(n), a = o.find(fd);
  if (a) {
    const i = a.props.children, s = o.map((c) => c === a ? Fe.count(i) > 1 ? Fe.only(null) : /* @__PURE__ */ Et(i) ? i.props.children : null : c);
    return /* @__PURE__ */ h(Po, _({}, r, {
      ref: t
    }), /* @__PURE__ */ Et(i) ? /* @__PURE__ */ dn(i, void 0, s) : null);
  }
  return /* @__PURE__ */ h(Po, _({}, r, {
    ref: t
  }), n);
});
ot.displayName = "Slot";
const Po = /* @__PURE__ */ D((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Et(n) ? /* @__PURE__ */ dn(n, {
    ...pd(r, n.props),
    ref: t ? Pr(t, n.ref) : n.ref
  }) : Fe.count(n) > 1 ? Fe.only(null) : null;
});
Po.displayName = "SlotClone";
const ns = ({ children: e }) => /* @__PURE__ */ h(ht, null, e);
function fd(e) {
  return /* @__PURE__ */ Et(e) && e.type === ns;
}
function pd(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      a(...s), o(...s);
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...a
    } : r === "className" && (n[r] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function rs(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = rs(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function os() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = rs(e)) && (r && (r += " "), r += t);
  return r;
}
const Qa = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Ja = os, Dr = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return Ja(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((l) => {
    const d = n == null ? void 0 : n[l], u = a == null ? void 0 : a[l];
    if (d === null)
      return null;
    const f = Qa(d) || Qa(u);
    return o[l][f];
  }), s = n && Object.entries(n).reduce((l, d) => {
    let [u, f] = d;
    return f === void 0 || (l[u] = f), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, d) => {
    let { class: u, className: f, ...p } = d;
    return Object.entries(p).every((v) => {
      let [m, g] = v;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...s
      }[m]) : {
        ...a,
        ...s
      }[m] === g;
    }) ? [
      ...l,
      u,
      f
    ] : l;
  }, []);
  return Ja(e, i, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
function md() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = as(t)) && (r && (r += " "), r += n);
  return r;
}
function as(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = as(e[r])) && (n && (n += " "), n += t);
  return n;
}
var ea = "-";
function vd(e) {
  var t = gd(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(s) {
    var c = s.split(ea);
    return c[0] === "" && c.length !== 1 && c.shift(), is(c, t) || hd(s);
  }
  function i(s, c) {
    var l = n[s] || [];
    return c && o[s] ? [].concat(l, o[s]) : l;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: i
  };
}
function is(e, t) {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? is(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(ea);
    return (i = t.validators.find(function(s) {
      var c = s.validator;
      return c(a);
    })) == null ? void 0 : i.classGroupId;
  }
}
var ei = /^\[(.+)\]$/;
function hd(e) {
  if (ei.test(e)) {
    var t = ei.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function gd(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = $d(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var i = a[0], s = a[1];
    Do(s, r, i, t);
  }), r;
}
function Do(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : ti(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (bd(o)) {
        Do(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(function(i) {
      var s = i[0], c = i[1];
      Do(c, ti(t, s), n, r);
    });
  });
}
function ti(e, t) {
  var n = e;
  return t.split(ea).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function bd(e) {
  return e.isThemeGetter;
}
function $d(e, t) {
  return t ? e.map(function(n) {
    var r = n[0], o = n[1], a = o.map(function(i) {
      return typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(function(s) {
        var c = s[0], l = s[1];
        return [t + c, l];
      })) : i;
    });
    return [r, a];
  }) : e;
}
function xd(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(a, i) {
    n.set(a, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(i) {
      var s = n.get(i);
      if (s !== void 0)
        return s;
      if ((s = r.get(i)) !== void 0)
        return o(i, s), s;
    },
    set: function(i, s) {
      n.has(i) ? n.set(i, s) : o(i, s);
    }
  };
}
var ss = "!";
function yd(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], o = t.length;
  return function(i) {
    for (var s = [], c = 0, l = 0, d, u = 0; u < i.length; u++) {
      var f = i[u];
      if (c === 0) {
        if (f === r && (n || i.slice(u, u + o) === t)) {
          s.push(i.slice(l, u)), l = u + o;
          continue;
        }
        if (f === "/") {
          d = u;
          continue;
        }
      }
      f === "[" ? c++ : f === "]" && c--;
    }
    var p = s.length === 0 ? i : i.substring(l), v = p.startsWith(ss), m = v ? p.substring(1) : p, g = d && d > l ? d - l : void 0;
    return {
      modifiers: s,
      hasImportantModifier: v,
      baseClassName: m,
      maybePostfixModifierPosition: g
    };
  };
}
function wd(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function Cd(e) {
  return {
    cache: xd(e.cacheSize),
    splitModifiers: yd(e),
    ...vd(e)
  };
}
var _d = /\s+/;
function Sd(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(_d).map(function(i) {
    var s = n(i), c = s.modifiers, l = s.hasImportantModifier, d = s.baseClassName, u = s.maybePostfixModifierPosition, f = r(u ? d.substring(0, u) : d), p = Boolean(u);
    if (!f) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (f = r(d), !f)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      p = !1;
    }
    var v = wd(c).join(":"), m = l ? v + ss : v;
    return {
      isTailwindClass: !0,
      modifierId: m,
      classGroupId: f,
      originalClassName: i,
      hasPostfixModifier: p
    };
  }).reverse().filter(function(i) {
    if (!i.isTailwindClass)
      return !0;
    var s = i.modifierId, c = i.classGroupId, l = i.hasPostfixModifier, d = s + c;
    return a.has(d) ? !1 : (a.add(d), o(c, l).forEach(function(u) {
      return a.add(s + u);
    }), !0);
  }).reverse().map(function(i) {
    return i.originalClassName;
  }).join(" ");
}
function Ed() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, i = s;
  function s(l) {
    var d = t[0], u = t.slice(1), f = u.reduce(function(p, v) {
      return v(p);
    }, d());
    return r = Cd(f), o = r.cache.get, a = r.cache.set, i = c, c(l);
  }
  function c(l) {
    var d = o(l);
    if (d)
      return d;
    var u = Sd(l, r);
    return a(l, u), u;
  }
  return function() {
    return i(md.apply(null, arguments));
  };
}
function xe(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var cs = /^\[(?:([a-z-]+):)?(.+)\]$/i, Pd = /^\d+\/\d+$/, Dd = /* @__PURE__ */ new Set(["px", "full", "screen"]), Nd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Od = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Md = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Ze(e) {
  return kt(e) || Dd.has(e) || Pd.test(e) || No(e);
}
function No(e) {
  return Wt(e, "length", Fd);
}
function Td(e) {
  return Wt(e, "size", ls);
}
function Rd(e) {
  return Wt(e, "position", ls);
}
function kd(e) {
  return Wt(e, "url", Ld);
}
function er(e) {
  return Wt(e, "number", kt);
}
function kt(e) {
  return !Number.isNaN(Number(e));
}
function Ad(e) {
  return e.endsWith("%") && kt(e.slice(0, -1));
}
function wn(e) {
  return ni(e) || Wt(e, "number", ni);
}
function le(e) {
  return cs.test(e);
}
function Cn() {
  return !0;
}
function wt(e) {
  return Nd.test(e);
}
function Id(e) {
  return Wt(e, "", Wd);
}
function Wt(e, t, n) {
  var r = cs.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function Fd(e) {
  return Od.test(e);
}
function ls() {
  return !1;
}
function Ld(e) {
  return e.startsWith("url(");
}
function ni(e) {
  return Number.isInteger(Number(e));
}
function Wd(e) {
  return Md.test(e);
}
function jd() {
  var e = xe("colors"), t = xe("spacing"), n = xe("blur"), r = xe("brightness"), o = xe("borderColor"), a = xe("borderRadius"), i = xe("borderSpacing"), s = xe("borderWidth"), c = xe("contrast"), l = xe("grayscale"), d = xe("hueRotate"), u = xe("invert"), f = xe("gap"), p = xe("gradientColorStops"), v = xe("gradientColorStopPositions"), m = xe("inset"), g = xe("margin"), b = xe("opacity"), y = xe("padding"), C = xe("saturate"), E = xe("scale"), N = xe("sepia"), O = xe("skew"), T = xe("space"), k = xe("translate"), L = function() {
    return ["auto", "contain", "none"];
  }, q = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, K = function() {
    return ["auto", le, t];
  }, H = function() {
    return [le, t];
  }, Z = function() {
    return ["", Ze];
  }, Q = function() {
    return ["auto", kt, le];
  }, V = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, G = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, F = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, A = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, S = function() {
    return ["", "0", le];
  }, W = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, X = function() {
    return [kt, er];
  }, Y = function() {
    return [kt, le];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Cn],
      spacing: [Ze],
      blur: ["none", "", wt, le],
      brightness: X(),
      borderColor: [e],
      borderRadius: ["none", "", "full", wt, le],
      borderSpacing: H(),
      borderWidth: Z(),
      contrast: X(),
      grayscale: S(),
      hueRotate: Y(),
      invert: S(),
      gap: H(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ad, No],
      inset: K(),
      margin: K(),
      opacity: X(),
      padding: H(),
      saturate: X(),
      scale: X(),
      sepia: S(),
      skew: Y(),
      space: H(),
      translate: H()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", le]
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
        columns: [wt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": W()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": W()
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
        object: [].concat(V(), [le])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: q()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": q()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": q()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
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
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
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
        z: ["auto", wn]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: K()
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
        flex: ["1", "auto", "initial", "none", le]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: S()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: S()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", wn]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Cn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", wn]
        }, le]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Cn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [wn]
        }, le]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Q()
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
        "auto-cols": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(A())
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
        content: ["normal"].concat(A(), ["baseline"])
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
        "place-content": [].concat(A(), ["baseline"])
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
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [T]
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
        "space-y": [T]
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
        w: ["auto", "min", "max", "fit", le, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", le, Ze]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [wt]
        }, wt, le]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [le, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", le, Ze]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [le, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", wt, No]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", er]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Cn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", le]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", kt, er]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", le, Ze]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", le]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", le]
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
        "placeholder-opacity": [b]
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
        "text-opacity": [b]
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
        decoration: [].concat(G(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ze]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", le, Ze]
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
        indent: H()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le]
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
        content: ["none", le]
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
        "bg-opacity": [b]
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
        bg: [].concat(V(), [Rd])
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
        bg: ["auto", "cover", "contain", Td]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, kd]
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
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(G(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
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
        "divide-y": [s]
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
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: G()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(G())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [le, Ze]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ze]
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
        ring: Z()
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
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ze]
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
        shadow: ["", "inner", "none", wt, Id]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Cn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": F()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": F()
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
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", wt, le]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [N]
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
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [N]
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
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", le]
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
        ease: ["linear", "in", "out", "in-out", le]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", le]
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [wn, le]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [k]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [k]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [O]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [O]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", le]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le]
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
        "scroll-m": H()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": H()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": H()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": H()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": H()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": H()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": H()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": H()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": H()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": H()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": H()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": H()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": H()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": H()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": H()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": H()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": H()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": H()
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
        "will-change": ["auto", "scroll", "contents", "transform", le]
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
        stroke: [Ze, er]
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
var Ud = /* @__PURE__ */ Ed(jd);
function R(...e) {
  return Ud(os(e));
}
const On = Dr(
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
), Yd = $.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => {
    const i = r ? ot : "button";
    return /* @__PURE__ */ w.exports.jsx(
      i,
      {
        className: R(On({ variant: t, size: n, className: e })),
        ref: a,
        ...o
      }
    );
  }
);
Yd.displayName = "Button";
var Bd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Hd = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vd = (e, t) => {
  const n = D(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: i, children: s, ...c }, l) => h(
      "svg",
      {
        ref: l,
        ...Bd,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: i ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${Hd(e)}`,
        ...c
      },
      [
        ...t.map(([d, u]) => h(d, u)),
        ...(Array.isArray(s) ? s : [s]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
var gt = Vd;
const Nr = gt("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), zd = gt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), Gd = gt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), ta = gt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), us = gt("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), ri = gt("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4"
    }
  ],
  [
    "path",
    {
      d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
      key: "1jreej"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]), oi = gt("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), Kd = gt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), ds = gt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ao(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
function _n(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", o;
    if (r === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[i] || e.formattingValues[a];
    } else {
      var s = e.defaultWidth, c = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[c] || e.values[s];
    }
    var l = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[l];
  };
}
function Sn(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? qd(s, function(u) {
      return u.test(i);
    }) : Xd(s, function(u) {
      return u.test(i);
    }), l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
    var d = t.slice(i.length);
    return {
      value: l,
      rest: d
    };
  };
}
function Xd(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function qd(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Zd(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var o = r[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    var i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    var s = t.slice(o.length);
    return {
      value: i,
      rest: s
    };
  };
}
function rn(e) {
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function Pe(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function ee(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function ie(e) {
  ee(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || rn(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Ge(e, t) {
  ee(2, arguments);
  var n = ie(e), r = Pe(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function at(e, t) {
  ee(2, arguments);
  var n = ie(e), r = Pe(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var i = a.getDate();
  return o >= i ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function Qd(e, t) {
  ee(2, arguments);
  var n = ie(e).getTime(), r = Pe(t);
  return new Date(n + r);
}
var Jd = {};
function Ot() {
  return Jd;
}
function it(e, t) {
  var n, r, o, a, i, s, c, l;
  ee(1, arguments);
  var d = Ot(), u = Pe((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : d.weekStartsOn) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ie(e), p = f.getDay(), v = (p < u ? 7 : 0) + p - u;
  return f.setDate(f.getDate() - v), f.setHours(0, 0, 0, 0), f;
}
function It(e) {
  return ee(1, arguments), it(e, {
    weekStartsOn: 1
  });
}
function ef(e) {
  ee(1, arguments);
  var t = ie(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = It(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var i = It(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function tf(e) {
  ee(1, arguments);
  var t = ef(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = It(n);
  return r;
}
function Mn(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function on(e) {
  ee(1, arguments);
  var t = ie(e);
  return t.setHours(0, 0, 0, 0), t;
}
var nf = 864e5;
function dt(e, t) {
  ee(2, arguments);
  var n = on(e), r = on(t), o = n.getTime() - Mn(n), a = r.getTime() - Mn(r);
  return Math.round((o - a) / nf);
}
function Oo(e, t) {
  ee(2, arguments);
  var n = Pe(t), r = n * 7;
  return Ge(e, r);
}
function rf(e, t) {
  ee(2, arguments);
  var n = Pe(t);
  return at(e, n * 12);
}
function of(e) {
  ee(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (rn(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = ie(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function af(e) {
  ee(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (rn(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = ie(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || new Date(NaN);
}
function Ie(e, t) {
  ee(2, arguments);
  var n = on(e), r = on(t);
  return n.getTime() === r.getTime();
}
function na(e) {
  return ee(1, arguments), e instanceof Date || rn(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function sf(e) {
  if (ee(1, arguments), !na(e) && typeof e != "number")
    return !1;
  var t = ie(e);
  return !isNaN(Number(t));
}
function Tn(e, t) {
  ee(2, arguments);
  var n = ie(e), r = ie(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var cf = 6048e5;
function lf(e, t, n) {
  ee(2, arguments);
  var r = it(e, n), o = it(t, n), a = r.getTime() - Mn(r), i = o.getTime() - Mn(o);
  return Math.round((a - i) / cf);
}
function ra(e) {
  ee(1, arguments);
  var t = ie(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Le(e) {
  ee(1, arguments);
  var t = ie(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function uf(e) {
  ee(1, arguments);
  var t = ie(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function oa(e, t) {
  var n, r, o, a, i, s, c, l;
  ee(1, arguments);
  var d = Ot(), u = Pe((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : d.weekStartsOn) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ie(e), p = f.getDay(), v = (p < u ? -7 : 0) + 6 - (p - u);
  return f.setDate(f.getDate() + v), f.setHours(23, 59, 59, 999), f;
}
function fs(e) {
  return ee(1, arguments), oa(e, {
    weekStartsOn: 1
  });
}
function df(e, t) {
  ee(2, arguments);
  var n = Pe(t);
  return Qd(e, -n);
}
var ff = 864e5;
function pf(e) {
  ee(1, arguments);
  var t = ie(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / ff) + 1;
}
function vr(e) {
  ee(1, arguments);
  var t = 1, n = ie(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function ps(e) {
  ee(1, arguments);
  var t = ie(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = vr(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var i = vr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function mf(e) {
  ee(1, arguments);
  var t = ps(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = vr(n);
  return r;
}
var vf = 6048e5;
function hf(e) {
  ee(1, arguments);
  var t = ie(e), n = vr(t).getTime() - mf(t).getTime();
  return Math.round(n / vf) + 1;
}
function hr(e, t) {
  var n, r, o, a, i, s, c, l;
  ee(1, arguments);
  var d = Ot(), u = Pe((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : d.weekStartsOn) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ie(e), p = f.getUTCDay(), v = (p < u ? 7 : 0) + p - u;
  return f.setUTCDate(f.getUTCDate() - v), f.setUTCHours(0, 0, 0, 0), f;
}
function ms(e, t) {
  var n, r, o, a, i, s, c, l;
  ee(1, arguments);
  var d = ie(e), u = d.getUTCFullYear(), f = Ot(), p = Pe((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = new Date(0);
  v.setUTCFullYear(u + 1, 0, p), v.setUTCHours(0, 0, 0, 0);
  var m = hr(v, t), g = new Date(0);
  g.setUTCFullYear(u, 0, p), g.setUTCHours(0, 0, 0, 0);
  var b = hr(g, t);
  return d.getTime() >= m.getTime() ? u + 1 : d.getTime() >= b.getTime() ? u : u - 1;
}
function gf(e, t) {
  var n, r, o, a, i, s, c, l;
  ee(1, arguments);
  var d = Ot(), u = Pe((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = ms(e, t), p = new Date(0);
  p.setUTCFullYear(f, 0, u), p.setUTCHours(0, 0, 0, 0);
  var v = hr(p, t);
  return v;
}
var bf = 6048e5;
function $f(e, t) {
  ee(1, arguments);
  var n = ie(e), r = hr(n, t).getTime() - gf(n, t).getTime();
  return Math.round(r / bf) + 1;
}
function be(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var xf = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return be(n === "yy" ? o % 100 : o, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : be(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return be(t.getUTCDate(), n.length);
  },
  // AM or PM
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, n) {
    return be(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return be(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return be(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return be(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, o = t.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return be(a, n.length);
  }
};
const Ct = xf;
var Kt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, yf = {
  // Era
  G: function(t, n, r) {
    var o = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(o, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(o, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(o, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, n, r) {
    if (n === "yo") {
      var o = t.getUTCFullYear(), a = o > 0 ? o : 1 - o;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return Ct.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = ms(t, o), i = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var s = i % 100;
      return be(s, 2);
    }
    return n === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : be(i, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = ps(t);
    return be(r, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return be(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return be(o, 2);
      case "Qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(o);
      case "qq":
        return be(o, 2);
      case "qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return Ct.M(t, n);
      case "Mo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(o + 1);
      case "LL":
        return be(o + 1, 2);
      case "Lo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, n, r, o) {
    var a = $f(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : be(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = hf(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : be(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Ct.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = pf(t);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : be(o, n.length);
  },
  // Day of week
  E: function(t, n, r) {
    var o = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, n, r, o) {
    var a = t.getUTCDay(), i = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(i);
      case "ee":
        return be(i, 2);
      case "eo":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, n, r, o) {
    var a = t.getUTCDay(), i = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(i);
      case "cc":
        return be(i, n.length);
      case "co":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, n, r) {
    var o = t.getUTCDay(), a = o === 0 ? 7 : o;
    switch (n) {
      case "i":
        return String(a);
      case "ii":
        return be(a, n.length);
      case "io":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, n, r) {
    var o = t.getUTCHours(), a = o / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, n, r) {
    var o = t.getUTCHours(), a;
    switch (o === 12 ? a = Kt.noon : o === 0 ? a = Kt.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, n, r) {
    var o = t.getUTCHours(), a;
    switch (o >= 17 ? a = Kt.evening : o >= 12 ? a = Kt.afternoon : o >= 4 ? a = Kt.morning : a = Kt.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, n, r) {
    if (n === "ho") {
      var o = t.getUTCHours() % 12;
      return o === 0 && (o = 12), r.ordinalNumber(o, {
        unit: "hour"
      });
    }
    return Ct.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Ct.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var o = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : be(o, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : be(o, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Ct.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Ct.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Ct.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (n) {
      case "X":
        return ii(i);
      case "XXXX":
      case "XX":
        return Tt(i);
      case "XXXXX":
      case "XXX":
      default:
        return Tt(i, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return ii(i);
      case "xxxx":
      case "xx":
        return Tt(i);
      case "xxxxx":
      case "xxx":
      default:
        return Tt(i, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ai(i, ":");
      case "OOOO":
      default:
        return "GMT" + Tt(i, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ai(i, ":");
      case "zzzz":
      default:
        return "GMT" + Tt(i, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, o) {
    var a = o._originalDate || t, i = Math.floor(a.getTime() / 1e3);
    return be(i, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, o) {
    var a = o._originalDate || t, i = a.getTime();
    return be(i, n.length);
  }
};
function ai(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var i = t || "";
  return n + String(o) + i + be(a, 2);
}
function ii(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + be(Math.abs(e) / 60, 2);
  }
  return Tt(e, t);
}
function Tt(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = be(Math.floor(o / 60), 2), i = be(o % 60, 2);
  return r + a + n + i;
}
const wf = yf;
var si = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, vs = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, Cf = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return si(t, n);
  var i;
  switch (o) {
    case "P":
      i = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      i = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      i = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      i = n.dateTime({
        width: "full"
      });
      break;
  }
  return i.replace("{{date}}", si(o, n)).replace("{{time}}", vs(a, n));
}, _f = {
  p: vs,
  P: Cf
};
const Sf = _f;
var Ef = ["D", "DD"], Pf = ["YY", "YYYY"];
function Df(e) {
  return Ef.indexOf(e) !== -1;
}
function Nf(e) {
  return Pf.indexOf(e) !== -1;
}
function ci(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Of = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Mf = function(t, n, r) {
  var o, a = Of[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const Tf = Mf;
var Rf = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, kf = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Af = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, If = {
  date: ao({
    formats: Rf,
    defaultWidth: "full"
  }),
  time: ao({
    formats: kf,
    defaultWidth: "full"
  }),
  dateTime: ao({
    formats: Af,
    defaultWidth: "full"
  })
};
const Ff = If;
var Lf = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Wf = function(t, n, r, o) {
  return Lf[t];
};
const jf = Wf;
var Uf = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Yf = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Bf = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Hf = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Vf = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, zf = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Gf = function(t, n) {
  var r = Number(t), o = r % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Kf = {
  ordinalNumber: Gf,
  era: _n({
    values: Uf,
    defaultWidth: "wide"
  }),
  quarter: _n({
    values: Yf,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: _n({
    values: Bf,
    defaultWidth: "wide"
  }),
  day: _n({
    values: Hf,
    defaultWidth: "wide"
  }),
  dayPeriod: _n({
    values: Vf,
    defaultWidth: "wide",
    formattingValues: zf,
    defaultFormattingWidth: "wide"
  })
};
const Xf = Kf;
var qf = /^(\d+)(th|st|nd|rd)?/i, Zf = /\d+/i, Qf = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Jf = {
  any: [/^b/i, /^(a|c)/i]
}, ep = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, tp = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, np = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, rp = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, op = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ap = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ip = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, sp = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, cp = {
  ordinalNumber: Zd({
    matchPattern: qf,
    parsePattern: Zf,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Sn({
    matchPatterns: Qf,
    defaultMatchWidth: "wide",
    parsePatterns: Jf,
    defaultParseWidth: "any"
  }),
  quarter: Sn({
    matchPatterns: ep,
    defaultMatchWidth: "wide",
    parsePatterns: tp,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Sn({
    matchPatterns: np,
    defaultMatchWidth: "wide",
    parsePatterns: rp,
    defaultParseWidth: "any"
  }),
  day: Sn({
    matchPatterns: op,
    defaultMatchWidth: "wide",
    parsePatterns: ap,
    defaultParseWidth: "any"
  }),
  dayPeriod: Sn({
    matchPatterns: ip,
    defaultMatchWidth: "any",
    parsePatterns: sp,
    defaultParseWidth: "any"
  })
};
const lp = cp;
var up = {
  code: "en-US",
  formatDistance: Tf,
  formatLong: Ff,
  formatRelative: jf,
  localize: Xf,
  match: lp,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const hs = up;
var dp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, fp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, pp = /^'([^]*?)'?$/, mp = /''/g, vp = /[a-zA-Z]/;
function jt(e, t, n) {
  var r, o, a, i, s, c, l, d, u, f, p, v, m, g, b, y, C, E;
  ee(2, arguments);
  var N = String(t), O = Ot(), T = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : O.locale) !== null && r !== void 0 ? r : hs, k = Pe((a = (i = (s = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && s !== void 0 ? s : O.firstWeekContainsDate) !== null && i !== void 0 ? i : (u = O.locale) === null || u === void 0 || (f = u.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(k >= 1 && k <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var L = Pe((p = (v = (m = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (b = n.locale) === null || b === void 0 || (y = b.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && m !== void 0 ? m : O.weekStartsOn) !== null && v !== void 0 ? v : (C = O.locale) === null || C === void 0 || (E = C.options) === null || E === void 0 ? void 0 : E.weekStartsOn) !== null && p !== void 0 ? p : 0);
  if (!(L >= 0 && L <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!T.localize)
    throw new RangeError("locale must contain localize property");
  if (!T.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var q = ie(e);
  if (!sf(q))
    throw new RangeError("Invalid time value");
  var K = Mn(q), H = df(q, K), Z = {
    firstWeekContainsDate: k,
    weekStartsOn: L,
    locale: T,
    _originalDate: q
  }, Q = N.match(fp).map(function(V) {
    var G = V[0];
    if (G === "p" || G === "P") {
      var F = Sf[G];
      return F(V, T.formatLong);
    }
    return V;
  }).join("").match(dp).map(function(V) {
    if (V === "''")
      return "'";
    var G = V[0];
    if (G === "'")
      return hp(V);
    var F = wf[G];
    if (F)
      return !(n != null && n.useAdditionalWeekYearTokens) && Nf(V) && ci(V, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Df(V) && ci(V, t, String(e)), F(H, V, T.localize, Z);
    if (G.match(vp))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + G + "`");
    return V;
  }).join("");
  return Q;
}
function hp(e) {
  var t = e.match(pp);
  return t ? t[1].replace(mp, "'") : e;
}
function gp(e) {
  ee(1, arguments);
  var t = ie(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var bp = 6048e5;
function $p(e) {
  ee(1, arguments);
  var t = ie(e), n = It(t).getTime() - tf(t).getTime();
  return Math.round(n / bp) + 1;
}
function xp(e) {
  ee(1, arguments);
  var t = ie(e), n = t.getTime();
  return n;
}
function yp(e) {
  return ee(1, arguments), Math.floor(xp(e) / 1e3);
}
function wp(e, t) {
  var n, r, o, a, i, s, c, l;
  ee(1, arguments);
  var d = ie(e), u = d.getFullYear(), f = Ot(), p = Pe((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = new Date(0);
  v.setFullYear(u + 1, 0, p), v.setHours(0, 0, 0, 0);
  var m = it(v, t), g = new Date(0);
  g.setFullYear(u, 0, p), g.setHours(0, 0, 0, 0);
  var b = it(g, t);
  return d.getTime() >= m.getTime() ? u + 1 : d.getTime() >= b.getTime() ? u : u - 1;
}
function Cp(e, t) {
  var n, r, o, a, i, s, c, l;
  ee(1, arguments);
  var d = Ot(), u = Pe((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = wp(e, t), p = new Date(0);
  p.setFullYear(f, 0, u), p.setHours(0, 0, 0, 0);
  var v = it(p, t);
  return v;
}
var _p = 6048e5;
function Sp(e, t) {
  ee(1, arguments);
  var n = ie(e), r = it(n, t).getTime() - Cp(n, t).getTime();
  return Math.round(r / _p) + 1;
}
function Ep(e) {
  ee(1, arguments);
  var t = ie(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Pp(e, t) {
  return ee(1, arguments), lf(Ep(e), Le(e), t) + 1;
}
function gs(e, t) {
  ee(2, arguments);
  var n = ie(e), r = ie(t);
  return n.getTime() > r.getTime();
}
function bs(e, t) {
  ee(2, arguments);
  var n = ie(e), r = ie(t);
  return n.getTime() < r.getTime();
}
function aa(e, t) {
  ee(2, arguments);
  var n = ie(e), r = ie(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Dp(e, t) {
  ee(2, arguments);
  var n = ie(e), r = ie(t);
  return n.getFullYear() === r.getFullYear();
}
function li(e, t) {
  ee(2, arguments);
  var n = Pe(t);
  return Ge(e, -n);
}
function io(e, t) {
  ee(2, arguments);
  var n = ie(e), r = Pe(t), o = n.getFullYear(), a = n.getDate(), i = new Date(0);
  i.setFullYear(o, r, 15), i.setHours(0, 0, 0, 0);
  var s = gp(i);
  return n.setMonth(r, Math.min(a, s)), n;
}
function ui(e, t) {
  ee(2, arguments);
  var n = ie(e), r = Pe(t);
  return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(r), n);
}
var ne = function() {
  return ne = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ne.apply(this, arguments);
};
function Np(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function $s(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Ln(e) {
  return e.mode === "multiple";
}
function Wn(e) {
  return e.mode === "range";
}
function Or(e) {
  return e.mode === "single";
}
var Op = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function Mp(e, t) {
  return jt(e, "LLLL y", t);
}
function Tp(e, t) {
  return jt(e, "d", t);
}
function Rp(e, t) {
  return jt(e, "LLLL", t);
}
function kp(e) {
  return "".concat(e);
}
function Ap(e, t) {
  return jt(e, "cccccc", t);
}
function Ip(e, t) {
  return jt(e, "yyyy", t);
}
var Fp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Mp,
  formatDay: Tp,
  formatMonthCaption: Rp,
  formatWeekNumber: kp,
  formatWeekdayName: Ap,
  formatYearCaption: Ip
}), Lp = function(e, t, n) {
  return jt(e, "do MMMM (EEEE)", n);
}, Wp = function() {
  return "Month: ";
}, jp = function() {
  return "Go to next month";
}, Up = function() {
  return "Go to previous month";
}, Yp = function(e, t) {
  return jt(e, "cccc", t);
}, Bp = function(e) {
  return "Week n. ".concat(e);
}, Hp = function() {
  return "Year: ";
}, Vp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Lp,
  labelMonthDropdown: Wp,
  labelNext: jp,
  labelPrevious: Up,
  labelWeekNumber: Bp,
  labelWeekday: Yp,
  labelYearDropdown: Hp
});
function zp() {
  var e = "buttons", t = Op, n = hs, r = {}, o = {}, a = 1, i = {}, s = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Fp,
    labels: Vp,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function Gp(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return r ? a = Le(r) : t && (a = new Date(t, 0, 1)), o ? i = ra(o) : n && (i = new Date(n, 11, 31)), {
    fromDate: a ? on(a) : void 0,
    toDate: i ? on(i) : void 0
  };
}
var xs = Te(void 0);
function Kp(e) {
  var t, n = e.initialProps, r = zp(), o = Gp(n), a = o.fromDate, i = o.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var c;
  (Or(n) || Ln(n) || Wn(n)) && (c = n.onSelect);
  var l = ne(ne(ne({}, r), n), { captionLayout: s, classNames: ne(ne({}, r.classNames), n.classNames), components: ne({}, n.components), formatters: ne(ne({}, r.formatters), n.formatters), fromDate: a, labels: ne(ne({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: ne(ne({}, r.modifiers), n.modifiers), modifiersClassNames: ne(ne({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: ne(ne({}, r.styles), n.styles), toDate: i });
  return P.createElement(xs.Provider, { value: l }, e.children);
}
function ye() {
  var e = He(xs);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function ys(e) {
  var t = ye(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return P.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function Xp(e) {
  return P.createElement(
    "svg",
    ne({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    P.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function ws(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, c = e.style, l = ye(), d = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Xp;
  return P.createElement(
    "div",
    { className: s, style: c },
    P.createElement("span", { className: l.classNames.vhidden }, e["aria-label"]),
    P.createElement("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r }, a),
    P.createElement(
      "div",
      { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true" },
      i,
      P.createElement(d, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })
    )
  );
}
function qp(e) {
  var t, n = ye(), r = n.fromDate, o = n.toDate, a = n.styles, i = n.locale, s = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return P.createElement(P.Fragment, null);
  if (!o)
    return P.createElement(P.Fragment, null);
  var u = [];
  if (Dp(r, o))
    for (var f = Le(r), p = r.getMonth(); p <= o.getMonth(); p++)
      u.push(io(f, p));
  else
    for (var f = Le(new Date()), p = 0; p <= 11; p++)
      u.push(io(f, p));
  var v = function(g) {
    var b = Number(g.target.value), y = io(Le(e.displayMonth), b);
    e.onChange(y);
  }, m = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : ws;
  return P.createElement(m, { name: "months", "aria-label": d(), className: c.dropdown_month, style: a.dropdown_month, onChange: v, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }) }, u.map(function(g) {
    return P.createElement("option", { key: g.getMonth(), value: g.getMonth() }, s(g, { locale: i }));
  }));
}
function Zp(e) {
  var t, n = e.displayMonth, r = ye(), o = r.fromDate, a = r.toDate, i = r.locale, s = r.styles, c = r.classNames, l = r.components, d = r.formatters.formatYearCaption, u = r.labels.labelYearDropdown, f = [];
  if (!o)
    return P.createElement(P.Fragment, null);
  if (!a)
    return P.createElement(P.Fragment, null);
  for (var p = o.getFullYear(), v = a.getFullYear(), m = p; m <= v; m++)
    f.push(ui(uf(new Date()), m));
  var g = function(y) {
    var C = ui(Le(n), Number(y.target.value));
    e.onChange(C);
  }, b = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : ws;
  return P.createElement(b, { name: "years", "aria-label": u(), className: c.dropdown_year, style: s.dropdown_year, onChange: g, value: n.getFullYear(), caption: d(n, { locale: i }) }, f.map(function(y) {
    return P.createElement("option", { key: y.getFullYear(), value: y.getFullYear() }, d(y, { locale: i }));
  }));
}
function Qp(e, t) {
  var n = B(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function Jp(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, c = s === void 0 ? 1 : s;
  if (a && Tn(a, o) < 0) {
    var l = -1 * (c - 1);
    o = at(a, l);
  }
  return i && Tn(o, i) < 0 && (o = i), Le(o);
}
function em() {
  var e = ye(), t = Jp(e), n = Qp(t, e.month), r = n[0], o = n[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var c = Le(i);
      o(c), (s = e.onMonthChange) === null || s === void 0 || s.call(e, c);
    }
  };
  return [r, a];
}
function tm(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Le(e), a = Le(at(o, r)), i = Tn(a, o), s = [], c = 0; c < i; c++) {
    var l = at(o, c);
    s.push(l);
  }
  return n && (s = s.reverse()), s;
}
function nm(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = Le(e);
    if (!n)
      return at(s, i);
    var c = Tn(n, e);
    if (!(c < a))
      return at(s, i);
  }
}
function rm(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = Le(e);
    if (!n)
      return at(s, -i);
    var c = Tn(s, n);
    if (!(c <= 0))
      return at(s, -i);
  }
}
var Cs = Te(void 0);
function om(e) {
  var t = ye(), n = em(), r = n[0], o = n[1], a = tm(r, t), i = nm(r, t), s = rm(r, t), c = function(u) {
    return a.some(function(f) {
      return aa(u, f);
    });
  }, l = function(u, f) {
    c(u) || (f && bs(u, f) ? o(at(u, 1 + t.numberOfMonths * -1)) : o(u));
  }, d = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: c
  };
  return P.createElement(Cs.Provider, { value: d }, e.children);
}
function jn() {
  var e = He(Cs);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function di(e) {
  var t, n = ye(), r = n.classNames, o = n.styles, a = n.components, i = jn().goToMonth, s = function(d) {
    i(d);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : ys, l = P.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return P.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    P.createElement("div", { className: r.vhidden }, l),
    P.createElement(qp, { onChange: s, displayMonth: e.displayMonth }),
    P.createElement(Zp, { onChange: s, displayMonth: e.displayMonth })
  );
}
function am(e) {
  return P.createElement(
    "svg",
    ne({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    P.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function im(e) {
  return P.createElement(
    "svg",
    ne({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    P.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var gr = D(function(e, t) {
  var n = ye(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = ne(ne({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), P.createElement("button", ne({}, e, { ref: t, type: "button", className: i, style: s }));
});
function sm(e) {
  var t, n, r = ye(), o = r.dir, a = r.locale, i = r.classNames, s = r.styles, c = r.labels, l = c.labelPrevious, d = c.labelNext, u = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return P.createElement(P.Fragment, null);
  var f = l(e.previousMonth, { locale: a }), p = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), v = d(e.nextMonth, { locale: a }), m = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), g = (t = u == null ? void 0 : u.IconRight) !== null && t !== void 0 ? t : im, b = (n = u == null ? void 0 : u.IconLeft) !== null && n !== void 0 ? n : am;
  return P.createElement(
    "div",
    { className: i.nav, style: s.nav },
    !e.hidePrevious && P.createElement(gr, { name: "previous-month", "aria-label": f, className: p, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? P.createElement(g, { className: i.nav_icon, style: s.nav_icon }) : P.createElement(b, { className: i.nav_icon, style: s.nav_icon })),
    !e.hideNext && P.createElement(gr, { name: "next-month", "aria-label": v, className: m, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? P.createElement(b, { className: i.nav_icon, style: s.nav_icon }) : P.createElement(g, { className: i.nav_icon, style: s.nav_icon }))
  );
}
function fi(e) {
  var t = ye().numberOfMonths, n = jn(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, i = n.displayMonths, s = i.findIndex(function(v) {
    return aa(e.displayMonth, v);
  }), c = s === 0, l = s === i.length - 1, d = t > 1 && (c || !l), u = t > 1 && (l || !c), f = function() {
    r && a(r);
  }, p = function() {
    o && a(o);
  };
  return P.createElement(sm, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: u, nextMonth: o, previousMonth: r, onPreviousClick: f, onNextClick: p });
}
function cm(e) {
  var t, n = ye(), r = n.classNames, o = n.disableNavigation, a = n.styles, i = n.captionLayout, s = n.components, c = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : ys, l;
  return o ? l = P.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? l = P.createElement(di, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? l = P.createElement(
    P.Fragment,
    null,
    P.createElement(di, { displayMonth: e.displayMonth, id: e.id }),
    P.createElement(fi, { displayMonth: e.displayMonth, id: e.id })
  ) : l = P.createElement(
    P.Fragment,
    null,
    P.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    P.createElement(fi, { displayMonth: e.displayMonth, id: e.id })
  ), P.createElement("div", { className: r.caption, style: a.caption }, l);
}
function lm(e) {
  var t = ye(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? P.createElement(
    "tfoot",
    { className: o, style: r.tfoot },
    P.createElement(
      "tr",
      null,
      P.createElement("td", { colSpan: 8 }, n)
    )
  ) : P.createElement(P.Fragment, null);
}
function um(e, t, n) {
  for (var r = n ? It(new Date()) : it(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var i = Ge(r, a);
    o.push(i);
  }
  return o;
}
function dm() {
  var e = ye(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = um(o, a, i);
  return P.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && P.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(d, u) {
      return P.createElement("th", { key: u, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(d, { locale: o }) }, s(d, { locale: o }));
    })
  );
}
function fm() {
  var e, t = ye(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : dm;
  return P.createElement(
    "thead",
    { style: r.head, className: n.head },
    P.createElement(a, null)
  );
}
function pm(e) {
  var t = ye(), n = t.locale, r = t.formatters.formatDay;
  return P.createElement(P.Fragment, null, r(e.date, { locale: n }));
}
var ia = Te(void 0);
function mm(e) {
  if (!Ln(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return P.createElement(ia.Provider, { value: t }, e.children);
  }
  return P.createElement(vm, { initialProps: e.initialProps, children: e.children });
}
function vm(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, i = function(l, d, u) {
    var f, p;
    (f = t.onDayClick) === null || f === void 0 || f.call(t, l, d, u);
    var v = Boolean(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!v) {
      var m = Boolean(!d.selected && a && (r == null ? void 0 : r.length) === a);
      if (!m) {
        var g = r ? $s([], r, !0) : [];
        if (d.selected) {
          var b = g.findIndex(function(y) {
            return Ie(l, y);
          });
          g.splice(b, 1);
        } else
          g.push(l);
        (p = t.onSelect) === null || p === void 0 || p.call(t, g, l, d, u);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(l) {
    var d = a && r.length > a - 1, u = r.some(function(f) {
      return Ie(f, l);
    });
    return Boolean(d && !u);
  });
  var c = {
    selected: r,
    onDayClick: i,
    modifiers: s
  };
  return P.createElement(ia.Provider, { value: c }, n);
}
function sa() {
  var e = He(ia);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function hm(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Ie(r, e))
    return { from: r, to: e };
  if (!o && bs(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Ie(o, e) && Ie(r, e))) {
    if (Ie(o, e))
      return { from: o, to: void 0 };
    if (!Ie(r, e))
      return gs(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var ca = Te(void 0);
function gm(e) {
  if (!Wn(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return P.createElement(ca.Provider, { value: t }, e.children);
  }
  return P.createElement(bm, { initialProps: e.initialProps, children: e.children });
}
function bm(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, i = o.to, s = t.min, c = t.max, l = function(p, v, m) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, p, v, m);
    var y = hm(p, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, y, p, v, m);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a && (d.range_start = [a], i ? (d.range_end = [i], Ie(a, i) || (d.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : d.range_end = [a]), s && (a && !i && d.disabled.push({
    after: li(a, s - 1),
    before: Ge(a, s - 1)
  }), a && i && d.disabled.push({
    after: a,
    before: Ge(a, s - 1)
  })), c && (a && !i && (d.disabled.push({
    before: Ge(a, -c + 1)
  }), d.disabled.push({
    after: Ge(a, c - 1)
  })), a && i)) {
    var u = dt(i, a) + 1, f = c - u;
    d.disabled.push({
      before: li(a, f)
    }), d.disabled.push({
      after: Ge(i, f)
    });
  }
  return P.createElement(ca.Provider, { value: { selected: r, onDayClick: l, modifiers: d } }, n);
}
function la() {
  var e = He(ca);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function pr(e) {
  return Array.isArray(e) ? $s([], e, !0) : e !== void 0 ? [e] : [];
}
function $m(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = pr(o);
  }), t;
}
var et;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(et || (et = {}));
var xm = et.Selected, lt = et.Disabled, ym = et.Hidden, wm = et.Today, so = et.RangeEnd, co = et.RangeMiddle, lo = et.RangeStart, Cm = et.Outside;
function _m(e, t, n) {
  var r, o = (r = {}, r[xm] = pr(e.selected), r[lt] = pr(e.disabled), r[ym] = pr(e.hidden), r[wm] = [e.today], r[so] = [], r[co] = [], r[lo] = [], r[Cm] = [], r);
  return e.fromDate && o[lt].push({ before: e.fromDate }), e.toDate && o[lt].push({ after: e.toDate }), Ln(e) ? o[lt] = o[lt].concat(t.modifiers[lt]) : Wn(e) && (o[lt] = o[lt].concat(n.modifiers[lt]), o[lo] = n.modifiers[lo], o[co] = n.modifiers[co], o[so] = n.modifiers[so]), o;
}
var _s = Te(void 0);
function Sm(e) {
  var t = ye(), n = sa(), r = la(), o = _m(t, n, r), a = $m(t.modifiers), i = ne(ne({}, o), a);
  return P.createElement(_s.Provider, { value: i }, e.children);
}
function Ss() {
  var e = He(_s);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Em(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function Pm(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function Dm(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function Nm(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function Om(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function Mm(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Ie(r, e))
    return !0;
  if (!o)
    return !1;
  var a = dt(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var i = dt(e, r) >= 0 && dt(o, e) >= 0;
  return i;
}
function Tm(e) {
  return na(e);
}
function Rm(e) {
  return Array.isArray(e) && e.every(na);
}
function km(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (Tm(n))
      return Ie(e, n);
    if (Rm(n))
      return n.includes(e);
    if (Pm(n))
      return Mm(e, n);
    if (Om(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Em(n)) {
      var r = dt(n.before, e), o = dt(n.after, e), a = r > 0, i = o < 0, s = gs(n.before, n.after);
      return s ? i && a : a || i;
    }
    return Dm(n) ? dt(e, n.after) > 0 : Nm(n) ? dt(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function ua(e, t, n) {
  var r = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return km(e, s) && a.push(i), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !aa(e, n) && (o.outside = !0), o;
}
function Am(e, t) {
  for (var n = Le(e[0]), r = ra(e[e.length - 1]), o, a, i = n; i <= r; ) {
    var s = ua(i, t), c = !s.disabled && !s.hidden;
    if (!c) {
      i = Ge(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), o || (o = i), i = Ge(i, 1);
  }
  return a || o;
}
var Im = 365;
function Es(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, c = o.weekStartsOn, l = o.fromDate, d = o.toDate, u = o.locale, f = {
    day: Ge,
    week: Oo,
    month: at,
    year: rf,
    startOfWeek: function(g) {
      return o.ISOWeek ? It(g) : it(g, { locale: u, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? fs(g) : oa(g, { locale: u, weekStartsOn: c });
    }
  }, p = f[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? p = of([l, p]) : r === "after" && d && (p = af([d, p]));
  var v = !0;
  if (a) {
    var m = ua(p, a);
    v = !m.disabled && !m.hidden;
  }
  return v ? p : s.count > Im ? s.lastFocused : Es(p, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: ne(ne({}, s), { count: s.count + 1 })
  });
}
var Ps = Te(void 0);
function Fm(e) {
  var t = jn(), n = Ss(), r = B(), o = r[0], a = r[1], i = B(), s = i[0], c = i[1], l = Am(t.displayMonths, n), d = o ?? (s && t.isDateDisplayed(s)) ? s : l, u = function() {
    c(o), a(void 0);
  }, f = function(g) {
    a(g);
  }, p = ye(), v = function(g, b) {
    if (o) {
      var y = Es(o, {
        moveBy: g,
        direction: b,
        context: p,
        modifiers: n
      });
      Ie(o, y) || (t.goToDate(y, o), f(y));
    }
  }, m = {
    focusedDay: o,
    focusTarget: d,
    blur: u,
    focus: f,
    focusDayAfter: function() {
      return v("day", "after");
    },
    focusDayBefore: function() {
      return v("day", "before");
    },
    focusWeekAfter: function() {
      return v("week", "after");
    },
    focusWeekBefore: function() {
      return v("week", "before");
    },
    focusMonthBefore: function() {
      return v("month", "before");
    },
    focusMonthAfter: function() {
      return v("month", "after");
    },
    focusYearBefore: function() {
      return v("year", "before");
    },
    focusYearAfter: function() {
      return v("year", "after");
    },
    focusStartOfWeek: function() {
      return v("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return v("endOfWeek", "after");
    }
  };
  return P.createElement(Ps.Provider, { value: m }, e.children);
}
function da() {
  var e = He(Ps);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Lm(e, t) {
  var n = Ss(), r = ua(e, n, t);
  return r;
}
var fa = Te(void 0);
function Wm(e) {
  if (!Or(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return P.createElement(fa.Provider, { value: t }, e.children);
  }
  return P.createElement(jm, { initialProps: e.initialProps, children: e.children });
}
function jm(e) {
  var t = e.initialProps, n = e.children, r = function(a, i, s) {
    var c, l, d;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, i, s), i.selected && !t.required) {
      (l = t.onSelect) === null || l === void 0 || l.call(t, void 0, a, i, s);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, a, a, i, s);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return P.createElement(fa.Provider, { value: o }, n);
}
function Ds() {
  var e = He(fa);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function Um(e, t) {
  var n = ye(), r = Ds(), o = sa(), a = la(), i = da(), s = i.focusDayAfter, c = i.focusDayBefore, l = i.focusWeekAfter, d = i.focusWeekBefore, u = i.blur, f = i.focus, p = i.focusMonthBefore, v = i.focusMonthAfter, m = i.focusYearBefore, g = i.focusYearAfter, b = i.focusStartOfWeek, y = i.focusEndOfWeek, C = function(F) {
    var A, S, W, X;
    Or(n) ? (A = r.onDayClick) === null || A === void 0 || A.call(r, e, t, F) : Ln(n) ? (S = o.onDayClick) === null || S === void 0 || S.call(o, e, t, F) : Wn(n) ? (W = a.onDayClick) === null || W === void 0 || W.call(a, e, t, F) : (X = n.onDayClick) === null || X === void 0 || X.call(n, e, t, F);
  }, E = function(F) {
    var A;
    f(e), (A = n.onDayFocus) === null || A === void 0 || A.call(n, e, t, F);
  }, N = function(F) {
    var A;
    u(), (A = n.onDayBlur) === null || A === void 0 || A.call(n, e, t, F);
  }, O = function(F) {
    var A;
    (A = n.onDayMouseEnter) === null || A === void 0 || A.call(n, e, t, F);
  }, T = function(F) {
    var A;
    (A = n.onDayMouseLeave) === null || A === void 0 || A.call(n, e, t, F);
  }, k = function(F) {
    var A;
    (A = n.onDayPointerEnter) === null || A === void 0 || A.call(n, e, t, F);
  }, L = function(F) {
    var A;
    (A = n.onDayPointerLeave) === null || A === void 0 || A.call(n, e, t, F);
  }, q = function(F) {
    var A;
    (A = n.onDayTouchCancel) === null || A === void 0 || A.call(n, e, t, F);
  }, K = function(F) {
    var A;
    (A = n.onDayTouchEnd) === null || A === void 0 || A.call(n, e, t, F);
  }, H = function(F) {
    var A;
    (A = n.onDayTouchMove) === null || A === void 0 || A.call(n, e, t, F);
  }, Z = function(F) {
    var A;
    (A = n.onDayTouchStart) === null || A === void 0 || A.call(n, e, t, F);
  }, Q = function(F) {
    var A;
    (A = n.onDayKeyUp) === null || A === void 0 || A.call(n, e, t, F);
  }, V = function(F) {
    var A;
    switch (F.key) {
      case "ArrowLeft":
        F.preventDefault(), F.stopPropagation(), n.dir === "rtl" ? s() : c();
        break;
      case "ArrowRight":
        F.preventDefault(), F.stopPropagation(), n.dir === "rtl" ? c() : s();
        break;
      case "ArrowDown":
        F.preventDefault(), F.stopPropagation(), l();
        break;
      case "ArrowUp":
        F.preventDefault(), F.stopPropagation(), d();
        break;
      case "PageUp":
        F.preventDefault(), F.stopPropagation(), F.shiftKey ? m() : p();
        break;
      case "PageDown":
        F.preventDefault(), F.stopPropagation(), F.shiftKey ? g() : v();
        break;
      case "Home":
        F.preventDefault(), F.stopPropagation(), b();
        break;
      case "End":
        F.preventDefault(), F.stopPropagation(), y();
        break;
    }
    (A = n.onDayKeyDown) === null || A === void 0 || A.call(n, e, t, F);
  }, G = {
    onClick: C,
    onFocus: E,
    onBlur: N,
    onKeyDown: V,
    onKeyUp: Q,
    onMouseEnter: O,
    onMouseLeave: T,
    onPointerEnter: k,
    onPointerLeave: L,
    onTouchCancel: q,
    onTouchEnd: K,
    onTouchMove: H,
    onTouchStart: Z
  };
  return G;
}
function Ym() {
  var e = ye(), t = Ds(), n = sa(), r = la(), o = Or(e) ? t.selected : Ln(e) ? n.selected : Wn(e) ? r.selected : void 0;
  return o;
}
function Bm(e) {
  return Object.values(et).includes(e);
}
function Hm(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (Bm(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function Vm(e, t) {
  var n = ne({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = ne(ne({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function zm(e, t, n) {
  var r, o, a, i = ye(), s = da(), c = Lm(e, t), l = Um(e, c), d = Ym(), u = Boolean(i.onDayClick || i.mode !== "default");
  z(function() {
    var O;
    c.outside || s.focusedDay && u && Ie(s.focusedDay, e) && ((O = n.current) === null || O === void 0 || O.focus());
  }, [
    s.focusedDay,
    e,
    n,
    u,
    c.outside
  ]);
  var f = Hm(i, c).join(" "), p = Vm(i, c), v = Boolean(c.outside && !i.showOutsideDays || c.hidden), m = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : pm, g = P.createElement(m, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: p,
    className: f,
    children: g,
    role: "gridcell"
  }, y = s.focusTarget && Ie(s.focusTarget, e) && !c.outside, C = s.focusedDay && Ie(s.focusedDay, e), E = ne(ne(ne({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = C || y ? 0 : -1, r)), l), N = {
    isButton: u,
    isHidden: v,
    activeModifiers: c,
    selectedDays: d,
    buttonProps: E,
    divProps: b
  };
  return N;
}
function Gm(e) {
  var t = I(null), n = zm(e.date, e.displayMonth, t);
  return n.isHidden ? P.createElement("div", { role: "gridcell" }) : n.isButton ? P.createElement(gr, ne({ name: "day", ref: t }, n.buttonProps)) : P.createElement("div", ne({}, n.divProps));
}
function Km(e) {
  var t = e.number, n = e.dates, r = ye(), o = r.onWeekNumberClick, a = r.styles, i = r.classNames, s = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, d = l(Number(t), { locale: s });
  if (!o)
    return P.createElement("span", { className: i.weeknumber, style: a.weeknumber }, d);
  var u = c(Number(t), { locale: s }), f = function(p) {
    o(t, n, p);
  };
  return P.createElement(gr, { name: "week-number", "aria-label": u, className: i.weeknumber, style: a.weeknumber, onClick: f }, d);
}
function Xm(e) {
  var t, n, r = ye(), o = r.styles, a = r.classNames, i = r.showWeekNumber, s = r.components, c = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : Gm, l = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : Km, d;
  return i && (d = P.createElement(
    "td",
    { className: a.cell, style: o.cell },
    P.createElement(l, { number: e.weekNumber, dates: e.dates })
  )), P.createElement(
    "tr",
    { className: a.row, style: o.row },
    d,
    e.dates.map(function(u) {
      return P.createElement(
        "td",
        { className: a.cell, style: o.cell, key: yp(u), role: "presentation" },
        P.createElement(c, { displayMonth: e.displayMonth, date: u })
      );
    })
  );
}
function pi(e, t, n) {
  for (var r = n != null && n.ISOWeek ? fs(t) : oa(t, n), o = n != null && n.ISOWeek ? It(e) : it(e, n), a = dt(r, o), i = [], s = 0; s <= a; s++)
    i.push(Ge(o, s));
  var c = i.reduce(function(l, d) {
    var u = n != null && n.ISOWeek ? $p(d) : Sp(d, n), f = l.find(function(p) {
      return p.weekNumber === u;
    });
    return f ? (f.dates.push(d), l) : (l.push({
      weekNumber: u,
      dates: [d]
    }), l);
  }, []);
  return c;
}
function qm(e, t) {
  var n = pi(Le(e), ra(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Pp(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], i = Oo(a, 6 - r), s = pi(Oo(a, 1), i, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function Zm(e) {
  var t, n, r, o = ye(), a = o.locale, i = o.classNames, s = o.styles, c = o.hideHead, l = o.fixedWeeks, d = o.components, u = o.weekStartsOn, f = o.firstWeekContainsDate, p = o.ISOWeek, v = qm(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: p,
    locale: a,
    weekStartsOn: u,
    firstWeekContainsDate: f
  }), m = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : fm, g = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : Xm, b = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : lm;
  return P.createElement(
    "table",
    { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && P.createElement(m, null),
    P.createElement("tbody", { className: i.tbody, style: s.tbody, role: "rowgroup" }, v.map(function(y) {
      return P.createElement(g, { displayMonth: e.displayMonth, key: y.weekNumber, dates: y.dates, weekNumber: y.weekNumber });
    })),
    P.createElement(b, { displayMonth: e.displayMonth })
  );
}
function Qm() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Jm = Qm() ? $.useLayoutEffect : $.useEffect, uo = !1, ev = 0;
function mi() {
  return "react-day-picker-".concat(++ev);
}
function tv(e) {
  var t, n = e ?? (uo ? mi() : null), r = $.useState(n), o = r[0], a = r[1];
  return Jm(function() {
    o === null && a(mi());
  }, []), $.useEffect(function() {
    uo === !1 && (uo = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function nv(e) {
  var t, n, r = ye(), o = r.dir, a = r.classNames, i = r.styles, s = r.components, c = jn().displayMonths, l = tv(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, u = [a.month], f = i.month, p = e.displayIndex === 0, v = e.displayIndex === c.length - 1, m = !p && !v;
  o === "rtl" && (t = [p, v], v = t[0], p = t[1]), p && (u.push(a.caption_start), f = ne(ne({}, f), i.caption_start)), v && (u.push(a.caption_end), f = ne(ne({}, f), i.caption_end)), m && (u.push(a.caption_between), f = ne(ne({}, f), i.caption_between));
  var g = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : cm;
  return P.createElement(
    "div",
    { key: e.displayIndex, className: u.join(" "), style: f },
    P.createElement(g, { id: l, displayMonth: e.displayMonth }),
    P.createElement(Zm, { id: d, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function rv(e) {
  var t = e.initialProps, n = ye(), r = da(), o = jn(), a = B(!1), i = a[0], s = a[1];
  z(function() {
    n.initialFocus && r.focusTarget && (i || (r.focus(r.focusTarget), s(!0)));
  }, [
    n.initialFocus,
    i,
    r.focus,
    r.focusTarget,
    r
  ]);
  var c = [n.classNames.root, n.className];
  n.numberOfMonths > 1 && c.push(n.classNames.multiple_months), n.showWeekNumber && c.push(n.classNames.with_weeknumber);
  var l = ne(ne({}, n.styles.root), n.style), d = Object.keys(t).filter(function(u) {
    return u.startsWith("data-");
  }).reduce(function(u, f) {
    var p;
    return ne(ne({}, u), (p = {}, p[f] = t[f], p));
  }, {});
  return P.createElement(
    "div",
    ne({ className: c.join(" "), style: l, dir: n.dir, id: n.id }, d),
    P.createElement("div", { className: n.classNames.months, style: n.styles.months }, o.displayMonths.map(function(u, f) {
      return P.createElement(nv, { key: f, displayIndex: f, displayMonth: u });
    }))
  );
}
function ov(e) {
  var t = e.children, n = Np(e, ["children"]);
  return P.createElement(
    Kp,
    { initialProps: n },
    P.createElement(
      om,
      null,
      P.createElement(
        Wm,
        { initialProps: n },
        P.createElement(
          mm,
          { initialProps: n },
          P.createElement(
            gm,
            { initialProps: n },
            P.createElement(
              Sm,
              null,
              P.createElement(Fm, null, t)
            )
          )
        )
      )
    )
  );
}
function av(e) {
  return P.createElement(
    ov,
    ne({}, e),
    P.createElement(rv, { initialProps: e })
  );
}
function iv({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ w.exports.jsx(
    av,
    {
      showOutsideDays: n,
      className: R("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: R(
          On({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: R(
          On({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: ({ ...o }) => /* @__PURE__ */ w.exports.jsx(Gd, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ w.exports.jsx(ta, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
iv.displayName = "Calendar";
function sv(e, t) {
  const n = /* @__PURE__ */ Te(t);
  function r(a) {
    const { children: i, ...s } = a, c = Je(
      () => s,
      Object.values(s)
    );
    return /* @__PURE__ */ h(n.Provider, {
      value: c
    }, i);
  }
  function o(a) {
    const i = He(n);
    if (i)
      return i;
    if (t !== void 0)
      return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [
    r,
    o
  ];
}
function Ve(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = /* @__PURE__ */ Te(i), c = n.length;
    n = [
      ...n,
      i
    ];
    function l(u) {
      const { scope: f, children: p, ...v } = u, m = (f == null ? void 0 : f[e][c]) || s, g = Je(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ h(m.Provider, {
        value: g
      }, p);
    }
    function d(u, f) {
      const p = (f == null ? void 0 : f[e][c]) || s, v = He(p);
      if (v)
        return v;
      if (i !== void 0)
        return i;
      throw new Error(`\`${u}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [
      l,
      d
    ];
  }
  const o = () => {
    const a = n.map((i) => /* @__PURE__ */ Te(i));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || a;
      return Je(
        () => ({
          [`__scope${e}`]: {
            ...s,
            [e]: c
          }
        }),
        [
          s,
          c
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    cv(o, ...t)
  ];
}
function cv(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const i = r.reduce((s, { useScope: c, scopeName: l }) => {
        const u = c(a)[`__scope${l}`];
        return {
          ...s,
          ...u
        };
      }, {});
      return Je(
        () => ({
          [`__scope${t.scopeName}`]: i
        }),
        [
          i
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Ce(e) {
  const t = I(e);
  return z(() => {
    t.current = e;
  }), Je(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const Be = Boolean(globalThis == null ? void 0 : globalThis.document) ? Qo : () => {
}, lv = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], oe = lv.reduce((e, t) => {
  const n = /* @__PURE__ */ D((r, o) => {
    const { asChild: a, ...i } = r, s = a ? ot : t;
    return z(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ h(s, _({}, i, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Ns(e, t) {
  e && Er(
    () => e.dispatchEvent(t)
  );
}
const Os = "Avatar", [uv, C1] = Ve(Os), [dv, Ms] = uv(Os), fv = /* @__PURE__ */ D((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = B("idle");
  return /* @__PURE__ */ h(dv, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ h(oe.span, _({}, r, {
    ref: t
  })));
}), pv = "AvatarImage", mv = /* @__PURE__ */ D((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, i = Ms(pv, n), s = gv(r), c = Ce((l) => {
    o(l), i.onImageLoadingStatusChange(l);
  });
  return Be(() => {
    s !== "idle" && c(s);
  }, [
    s,
    c
  ]), s === "loaded" ? /* @__PURE__ */ h(oe.img, _({}, a, {
    ref: t,
    src: r
  })) : null;
}), vv = "AvatarFallback", hv = /* @__PURE__ */ D((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = Ms(vv, n), [i, s] = B(r === void 0);
  return z(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => s(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ h(oe.span, _({}, o, {
    ref: t
  })) : null;
});
function gv(e) {
  const [t, n] = B("idle");
  return z(() => {
    if (!e) {
      n("error");
      return;
    }
    let r = !0;
    const o = new window.Image(), a = (i) => () => {
      r && n(i);
    };
    return n("loading"), o.onload = a("loaded"), o.onerror = a("error"), o.src = e, () => {
      r = !1;
    };
  }, [
    e
  ]), t;
}
const Ts = fv, Rs = mv, ks = hv, bv = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Ts,
  {
    ref: n,
    className: R(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
bv.displayName = Ts.displayName;
const $v = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Rs,
  {
    ref: n,
    className: R("aspect-square h-full w-full", e),
    ...t
  }
));
$v.displayName = Rs.displayName;
const xv = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  ks,
  {
    ref: n,
    className: R(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
xv.displayName = ks.displayName;
const yv = Dr(
  "inline-flex select-none justify-center items-center border rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: (
          // 'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground',
          "bg-primary border-transparent text-primary-foreground"
        ),
        secondary: "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive: "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
        outline: "text-foreground",
        red: "bg-red-200 border-2 border-red-600 text-red-600",
        success: "bg-green-100 border-2 border-green-500 text-green-500"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function _1({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ w.exports.jsx("div", { className: R(yv({ variant: t }), e), ...n });
}
function U(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function pa(e) {
  const t = e + "CollectionProvider", [n, r] = Ve(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), i = (p) => {
    const { scope: v, children: m } = p, g = P.useRef(null), b = P.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ P.createElement(o, {
      scope: v,
      itemMap: b,
      collectionRef: g
    }, m);
  }, s = e + "CollectionSlot", c = /* @__PURE__ */ P.forwardRef((p, v) => {
    const { scope: m, children: g } = p, b = a(s, m), y = ue(v, b.collectionRef);
    return /* @__PURE__ */ P.createElement(ot, {
      ref: y
    }, g);
  }), l = e + "CollectionItemSlot", d = "data-radix-collection-item", u = /* @__PURE__ */ P.forwardRef((p, v) => {
    const { scope: m, children: g, ...b } = p, y = P.useRef(null), C = ue(v, y), E = a(l, m);
    return P.useEffect(() => (E.itemMap.set(y, {
      ref: y,
      ...b
    }), () => void E.itemMap.delete(y))), /* @__PURE__ */ P.createElement(ot, {
      [d]: "",
      ref: C
    }, g);
  });
  function f(p) {
    const v = a(e + "CollectionConsumer", p);
    return P.useCallback(() => {
      const g = v.collectionRef.current;
      if (!g)
        return [];
      const b = Array.from(g.querySelectorAll(`[${d}]`));
      return Array.from(v.itemMap.values()).sort(
        (E, N) => b.indexOf(E.ref.current) - b.indexOf(N.ref.current)
      );
    }, [
      v.collectionRef,
      v.itemMap
    ]);
  }
  return [
    {
      Provider: i,
      Slot: c,
      ItemSlot: u
    },
    f,
    r
  ];
}
const wv = /* @__PURE__ */ Te(void 0);
function Mr(e) {
  const t = He(wv);
  return e || t || "ltr";
}
function Cv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ce(e);
  z(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Mo = "dismissableLayer.update", _v = "dismissableLayer.pointerDownOutside", Sv = "dismissableLayer.focusOutside";
let vi;
const Ev = /* @__PURE__ */ Te({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Tr = /* @__PURE__ */ D((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: i, onInteractOutside: s, onDismiss: c, ...l } = e, d = He(Ev), [u, f] = B(null), p = (n = u == null ? void 0 : u.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, v] = B({}), m = ue(
    t,
    (k) => f(k)
  ), g = Array.from(d.layers), [b] = [
    ...d.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = g.indexOf(b), C = u ? g.indexOf(u) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, N = C >= y, O = Pv((k) => {
    const L = k.target, q = [
      ...d.branches
    ].some(
      (K) => K.contains(L)
    );
    !N || q || (a == null || a(k), s == null || s(k), k.defaultPrevented || c == null || c());
  }, p), T = Dv((k) => {
    const L = k.target;
    [
      ...d.branches
    ].some(
      (K) => K.contains(L)
    ) || (i == null || i(k), s == null || s(k), k.defaultPrevented || c == null || c());
  }, p);
  return Cv((k) => {
    C === d.layers.size - 1 && (o == null || o(k), !k.defaultPrevented && c && (k.preventDefault(), c()));
  }, p), z(() => {
    if (u)
      return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (vi = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), hi(), () => {
        r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = vi);
      };
  }, [
    u,
    p,
    r,
    d
  ]), z(() => () => {
    u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), hi());
  }, [
    u,
    d
  ]), z(() => {
    const k = () => v({});
    return document.addEventListener(Mo, k), () => document.removeEventListener(Mo, k);
  }, []), /* @__PURE__ */ h(oe.div, _({}, l, {
    ref: m,
    style: {
      pointerEvents: E ? N ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: U(e.onFocusCapture, T.onFocusCapture),
    onBlurCapture: U(e.onBlurCapture, T.onBlurCapture),
    onPointerDownCapture: U(e.onPointerDownCapture, O.onPointerDownCapture)
  }));
});
function Pv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ce(e), r = I(!1), o = I(() => {
  });
  return z(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          As(_v, n, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
          once: !0
        })) : l();
      }
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Dv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ce(e), r = I(!1);
  return z(() => {
    const o = (a) => {
      a.target && !r.current && As(Sv, n, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function hi() {
  const e = new CustomEvent(Mo);
  document.dispatchEvent(e);
}
function As(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Ns(o, a) : o.dispatchEvent(a);
}
let fo = 0;
function Rr() {
  z(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : gi()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : gi()), fo++, () => {
      fo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), fo--;
    };
  }, []);
}
function gi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const po = "focusScope.autoFocusOnMount", mo = "focusScope.autoFocusOnUnmount", bi = {
  bubbles: !1,
  cancelable: !0
}, kr = /* @__PURE__ */ D((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...i } = e, [s, c] = B(null), l = Ce(o), d = Ce(a), u = I(null), f = ue(
    t,
    (m) => c(m)
  ), p = I({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  z(() => {
    if (r) {
      let m = function(C) {
        if (p.paused || !s)
          return;
        const E = C.target;
        s.contains(E) ? u.current = E : _t(u.current, {
          select: !0
        });
      }, g = function(C) {
        if (p.paused || !s)
          return;
        const E = C.relatedTarget;
        E !== null && (s.contains(E) || _t(u.current, {
          select: !0
        }));
      }, b = function(C) {
        const E = document.activeElement;
        for (const N of C)
          N.removedNodes.length > 0 && (s != null && s.contains(E) || _t(s));
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", g);
      const y = new MutationObserver(b);
      return s && y.observe(s, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", g), y.disconnect();
      };
    }
  }, [
    r,
    s,
    p.paused
  ]), z(() => {
    if (s) {
      xi.add(p);
      const m = document.activeElement;
      if (!s.contains(m)) {
        const b = new CustomEvent(po, bi);
        s.addEventListener(po, l), s.dispatchEvent(b), b.defaultPrevented || (Nv(kv(Is(s)), {
          select: !0
        }), document.activeElement === m && _t(s));
      }
      return () => {
        s.removeEventListener(po, l), setTimeout(() => {
          const b = new CustomEvent(mo, bi);
          s.addEventListener(mo, d), s.dispatchEvent(b), b.defaultPrevented || _t(m ?? document.body, {
            select: !0
          }), s.removeEventListener(mo, d), xi.remove(p);
        }, 0);
      };
    }
  }, [
    s,
    l,
    d,
    p
  ]);
  const v = ae((m) => {
    if (!n && !r || p.paused)
      return;
    const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, b = document.activeElement;
    if (g && b) {
      const y = m.currentTarget, [C, E] = Ov(y);
      C && E ? !m.shiftKey && b === E ? (m.preventDefault(), n && _t(C, {
        select: !0
      })) : m.shiftKey && b === C && (m.preventDefault(), n && _t(E, {
        select: !0
      })) : b === y && m.preventDefault();
    }
  }, [
    n,
    r,
    p.paused
  ]);
  return /* @__PURE__ */ h(oe.div, _({
    tabIndex: -1
  }, i, {
    ref: f,
    onKeyDown: v
  }));
});
function Nv(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (_t(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Ov(e) {
  const t = Is(e), n = $i(t, e), r = $i(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Is(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function $i(e, t) {
  for (const n of e)
    if (!Mv(n, {
      upTo: t
    }))
      return n;
}
function Mv(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function Tv(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function _t(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Tv(e) && t && e.select();
  }
}
const xi = Rv();
function Rv() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = yi(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = yi(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function yi(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function kv(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Av = $["useId".toString()] || (() => {
});
let Iv = 0;
function Ke(e) {
  const [t, n] = $.useState(Av());
  return Be(() => {
    e || n(
      (r) => r ?? String(Iv++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Fv = ["top", "right", "bottom", "left"], Pt = Math.min, Ue = Math.max, br = Math.round, tr = Math.floor, Dt = (e) => ({
  x: e,
  y: e
}), Lv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Wv = {
  start: "end",
  end: "start"
};
function To(e, t, n) {
  return Ue(e, Pt(t, n));
}
function ft(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pt(e) {
  return e.split("-")[0];
}
function fn(e) {
  return e.split("-")[1];
}
function ma(e) {
  return e === "x" ? "y" : "x";
}
function va(e) {
  return e === "y" ? "height" : "width";
}
function pn(e) {
  return ["top", "bottom"].includes(pt(e)) ? "y" : "x";
}
function ha(e) {
  return ma(pn(e));
}
function jv(e, t, n) {
  n === void 0 && (n = !1);
  const r = fn(e), o = ha(e), a = va(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = $r(i)), [i, $r(i)];
}
function Uv(e) {
  const t = $r(e);
  return [Ro(e), t, Ro(t)];
}
function Ro(e) {
  return e.replace(/start|end/g, (t) => Wv[t]);
}
function Yv(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function Bv(e, t, n, r) {
  const o = fn(e);
  let a = Yv(pt(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Ro)))), a;
}
function $r(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Lv[t]);
}
function Hv(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Fs(e) {
  return typeof e != "number" ? Hv(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function xr(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function wi(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = pn(t), i = ha(t), s = va(i), c = pt(t), l = a === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (fn(t)) {
    case "start":
      p[i] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      p[i] += f * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const Vv = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: u
  } = wi(l, r, c), f = r, p = {}, v = 0;
  for (let m = 0; m < s.length; m++) {
    const {
      name: g,
      fn: b
    } = s[m], {
      x: y,
      y: C,
      data: E,
      reset: N
    } = await b({
      x: d,
      y: u,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: p,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (d = y ?? d, u = C ?? u, p = {
      ...p,
      [g]: {
        ...p[g],
        ...E
      }
    }, N && v <= 50) {
      v++, typeof N == "object" && (N.placement && (f = N.placement), N.rects && (l = N.rects === !0 ? await i.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : N.rects), {
        x: d,
        y: u
      } = wi(l, f, c)), m = -1;
      continue;
    }
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: o,
    middlewareData: p
  };
};
async function Rn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = ft(t, e), v = Fs(p), g = s[f ? u === "floating" ? "reference" : "floating" : u], b = xr(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: c
  })), y = u === "floating" ? {
    ...i.floating,
    x: r,
    y: o
  } : i.reference, C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), E = await (a.isElement == null ? void 0 : a.isElement(C)) ? await (a.getScale == null ? void 0 : a.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = xr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: y,
    offsetParent: C,
    strategy: c
  }) : y);
  return {
    top: (b.top - N.top + v.top) / E.y,
    bottom: (N.bottom - b.bottom + v.bottom) / E.y,
    left: (b.left - N.left + v.left) / E.x,
    right: (N.right - b.right + v.right) / E.x
  };
}
const Ci = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s
    } = t, {
      element: c,
      padding: l = 0
    } = ft(e, t) || {};
    if (c == null)
      return {};
    const d = Fs(l), u = {
      x: n,
      y: r
    }, f = ha(o), p = va(f), v = await i.getDimensions(c), m = f === "y", g = m ? "top" : "left", b = m ? "bottom" : "right", y = m ? "clientHeight" : "clientWidth", C = a.reference[p] + a.reference[f] - u[f] - a.floating[p], E = u[f] - a.reference[f], N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let O = N ? N[y] : 0;
    (!O || !await (i.isElement == null ? void 0 : i.isElement(N))) && (O = s.floating[y] || a.floating[p]);
    const T = C / 2 - E / 2, k = O / 2 - v[p] / 2 - 1, L = Pt(d[g], k), q = Pt(d[b], k), K = L, H = O - v[p] - q, Z = O / 2 - v[p] / 2 + T, Q = To(K, Z, H), G = fn(o) != null && Z != Q && a.reference[p] / 2 - (Z < K ? L : q) - v[p] / 2 < 0 ? Z < K ? K - Z : H - Z : 0;
    return {
      [f]: u[f] - G,
      data: {
        [f]: Q,
        centerOffset: Z - Q + G
      }
    };
  }
}), zv = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: r,
        middlewareData: o,
        rects: a,
        initialPlacement: i,
        platform: s,
        elements: c
      } = t, {
        mainAxis: l = !0,
        crossAxis: d = !0,
        fallbackPlacements: u,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: v = !0,
        ...m
      } = ft(e, t), g = pt(r), b = pt(i) === i, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), C = u || (b || !v ? [$r(i)] : Uv(i));
      !u && p !== "none" && C.push(...Bv(i, v, p, y));
      const E = [i, ...C], N = await Rn(t, m), O = [];
      let T = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && O.push(N[g]), d) {
        const K = jv(r, a, y);
        O.push(N[K[0]], N[K[1]]);
      }
      if (T = [...T, {
        placement: r,
        overflows: O
      }], !O.every((K) => K <= 0)) {
        var k, L;
        const K = (((k = o.flip) == null ? void 0 : k.index) || 0) + 1, H = E[K];
        if (H)
          return {
            data: {
              index: K,
              overflows: T
            },
            reset: {
              placement: H
            }
          };
        let Z = (L = T.filter((Q) => Q.overflows[0] <= 0).sort((Q, V) => Q.overflows[1] - V.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!Z)
          switch (f) {
            case "bestFit": {
              var q;
              const Q = (q = T.map((V) => [V.placement, V.overflows.filter((G) => G > 0).reduce((G, F) => G + F, 0)]).sort((V, G) => V[1] - G[1])[0]) == null ? void 0 : q[0];
              Q && (Z = Q);
              break;
            }
            case "initialPlacement":
              Z = i;
              break;
          }
        if (r !== Z)
          return {
            reset: {
              placement: Z
            }
          };
      }
      return {};
    }
  };
};
function _i(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Si(e) {
  return Fv.some((t) => e[t] >= 0);
}
const Gv = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = ft(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Rn(t, {
            ...o,
            elementContext: "reference"
          }), i = _i(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Si(i)
            }
          };
        }
        case "escaped": {
          const a = await Rn(t, {
            ...o,
            altBoundary: !0
          }), i = _i(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Si(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Kv(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = pt(n), s = fn(n), c = pn(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, d = a && c ? -1 : 1, u = ft(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: v
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return s && typeof v == "number" && (p = s === "end" ? v * -1 : v), c ? {
    x: p * d,
    y: f * l
  } : {
    x: f * l,
    y: p * d
  };
}
const Xv = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await Kv(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, qv = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (g) => {
            let {
              x: b,
              y
            } = g;
            return {
              x: b,
              y
            };
          }
        },
        ...c
      } = ft(e, t), l = {
        x: n,
        y: r
      }, d = await Rn(t, c), u = pn(pt(o)), f = ma(u);
      let p = l[f], v = l[u];
      if (a) {
        const g = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", y = p + d[g], C = p - d[b];
        p = To(y, p, C);
      }
      if (i) {
        const g = u === "y" ? "top" : "left", b = u === "y" ? "bottom" : "right", y = v + d[g], C = v - d[b];
        v = To(y, v, C);
      }
      const m = s.fn({
        ...t,
        [f]: p,
        [u]: v
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r
        }
      };
    }
  };
}, Zv = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = ft(e, t), d = {
        x: n,
        y: r
      }, u = pn(o), f = ma(u);
      let p = d[f], v = d[u];
      const m = ft(s, t), g = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (c) {
        const C = f === "y" ? "height" : "width", E = a.reference[f] - a.floating[C] + g.mainAxis, N = a.reference[f] + a.reference[C] - g.mainAxis;
        p < E ? p = E : p > N && (p = N);
      }
      if (l) {
        var b, y;
        const C = f === "y" ? "width" : "height", E = ["top", "left"].includes(pt(o)), N = a.reference[u] - a.floating[C] + (E && ((b = i.offset) == null ? void 0 : b[u]) || 0) + (E ? 0 : g.crossAxis), O = a.reference[u] + a.reference[C] + (E ? 0 : ((y = i.offset) == null ? void 0 : y[u]) || 0) - (E ? g.crossAxis : 0);
        v < N ? v = N : v > O && (v = O);
      }
      return {
        [f]: p,
        [u]: v
      };
    }
  };
}, Qv = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: a
      } = t, {
        apply: i = () => {
        },
        ...s
      } = ft(e, t), c = await Rn(t, s), l = pt(n), d = fn(n), u = pn(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let v, m;
      l === "top" || l === "bottom" ? (v = l, m = d === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = l, v = d === "end" ? "top" : "bottom");
      const g = p - c[v], b = f - c[m], y = !t.middlewareData.shift;
      let C = g, E = b;
      if (u) {
        const O = f - c.left - c.right;
        E = d || y ? Pt(b, O) : O;
      } else {
        const O = p - c.top - c.bottom;
        C = d || y ? Pt(g, O) : O;
      }
      if (y && !d) {
        const O = Ue(c.left, 0), T = Ue(c.right, 0), k = Ue(c.top, 0), L = Ue(c.bottom, 0);
        u ? E = f - 2 * (O !== 0 || T !== 0 ? O + T : Ue(c.left, c.right)) : C = p - 2 * (k !== 0 || L !== 0 ? k + L : Ue(c.top, c.bottom));
      }
      await i({
        ...t,
        availableWidth: E,
        availableHeight: C
      });
      const N = await o.getDimensions(a.floating);
      return f !== N.width || p !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Nt(e) {
  return Ls(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ye(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function bt(e) {
  var t;
  return (t = (Ls(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ls(e) {
  return e instanceof Node || e instanceof Ye(e).Node;
}
function mt(e) {
  return e instanceof Element || e instanceof Ye(e).Element;
}
function st(e) {
  return e instanceof HTMLElement || e instanceof Ye(e).HTMLElement;
}
function Ei(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ye(e).ShadowRoot;
}
function Un(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Xe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Jv(e) {
  return ["table", "td", "th"].includes(Nt(e));
}
function ga(e) {
  const t = ba(), n = Xe(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function eh(e) {
  let t = an(e);
  for (; st(t) && !Ar(t); ) {
    if (ga(t))
      return t;
    t = an(t);
  }
  return null;
}
function ba() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ar(e) {
  return ["html", "body", "#document"].includes(Nt(e));
}
function Xe(e) {
  return Ye(e).getComputedStyle(e);
}
function Ir(e) {
  return mt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function an(e) {
  if (Nt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ei(e) && e.host || // Fallback.
    bt(e)
  );
  return Ei(t) ? t.host : t;
}
function Ws(e) {
  const t = an(e);
  return Ar(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : st(t) && Un(t) ? t : Ws(t);
}
function yr(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Ws(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ye(r);
  return o ? t.concat(a, a.visualViewport || [], Un(r) ? r : []) : t.concat(r, yr(r));
}
function js(e) {
  const t = Xe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = st(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = br(n) !== a || br(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function $a(e) {
  return mt(e) ? e : e.contextElement;
}
function tn(e) {
  const t = $a(e);
  if (!st(t))
    return Dt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = js(t);
  let i = (a ? br(n.width) : n.width) / r, s = (a ? br(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const th = /* @__PURE__ */ Dt(0);
function Us(e) {
  const t = Ye(e);
  return !ba() || !t.visualViewport ? th : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function nh(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ye(e) ? !1 : t;
}
function Ft(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = $a(e);
  let i = Dt(1);
  t && (r ? mt(r) && (i = tn(r)) : i = tn(e));
  const s = nh(a, n, r) ? Us(a) : Dt(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, d = o.width / i.x, u = o.height / i.y;
  if (a) {
    const f = Ye(a), p = r && mt(r) ? Ye(r) : r;
    let v = f.frameElement;
    for (; v && r && p !== f; ) {
      const m = tn(v), g = v.getBoundingClientRect(), b = Xe(v), y = g.left + (v.clientLeft + parseFloat(b.paddingLeft)) * m.x, C = g.top + (v.clientTop + parseFloat(b.paddingTop)) * m.y;
      c *= m.x, l *= m.y, d *= m.x, u *= m.y, c += y, l += C, v = Ye(v).frameElement;
    }
  }
  return xr({
    width: d,
    height: u,
    x: c,
    y: l
  });
}
function rh(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = st(n), a = bt(n);
  if (n === a)
    return t;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = Dt(1);
  const c = Dt(0);
  if ((o || !o && r !== "fixed") && ((Nt(n) !== "body" || Un(a)) && (i = Ir(n)), st(n))) {
    const l = Ft(n);
    s = tn(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - i.scrollLeft * s.x + c.x,
    y: t.y * s.y - i.scrollTop * s.y + c.y
  };
}
function oh(e) {
  return Array.from(e.getClientRects());
}
function Ys(e) {
  return Ft(bt(e)).left + Ir(e).scrollLeft;
}
function ah(e) {
  const t = bt(e), n = Ir(e), r = e.ownerDocument.body, o = Ue(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ue(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Ys(e);
  const s = -n.scrollTop;
  return Xe(r).direction === "rtl" && (i += Ue(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function ih(e, t) {
  const n = Ye(e), r = bt(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = ba();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function sh(e, t) {
  const n = Ft(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = st(e) ? tn(e) : Dt(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Pi(e, t, n) {
  let r;
  if (t === "viewport")
    r = ih(e, n);
  else if (t === "document")
    r = ah(bt(e));
  else if (mt(t))
    r = sh(t, n);
  else {
    const o = Us(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return xr(r);
}
function Bs(e, t) {
  const n = an(e);
  return n === t || !mt(n) || Ar(n) ? !1 : Xe(n).position === "fixed" || Bs(n, t);
}
function ch(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = yr(e).filter((s) => mt(s) && Nt(s) !== "body"), o = null;
  const a = Xe(e).position === "fixed";
  let i = a ? an(e) : e;
  for (; mt(i) && !Ar(i); ) {
    const s = Xe(i), c = ga(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Un(i) && !c && Bs(e, i)) ? r = r.filter((d) => d !== i) : o = s, i = an(i);
  }
  return t.set(e, r), r;
}
function lh(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? ch(t, this._c) : [].concat(n), r], s = i[0], c = i.reduce((l, d) => {
    const u = Pi(t, d, o);
    return l.top = Ue(u.top, l.top), l.right = Pt(u.right, l.right), l.bottom = Pt(u.bottom, l.bottom), l.left = Ue(u.left, l.left), l;
  }, Pi(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function uh(e) {
  return js(e);
}
function dh(e, t, n) {
  const r = st(t), o = bt(t), a = n === "fixed", i = Ft(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Dt(0);
  if (r || !r && !a)
    if ((Nt(t) !== "body" || Un(o)) && (s = Ir(t)), r) {
      const l = Ft(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = Ys(o));
  return {
    x: i.left + s.scrollLeft - c.x,
    y: i.top + s.scrollTop - c.y,
    width: i.width,
    height: i.height
  };
}
function Di(e, t) {
  return !st(e) || Xe(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Hs(e, t) {
  const n = Ye(e);
  if (!st(e))
    return n;
  let r = Di(e, t);
  for (; r && Jv(r) && Xe(r).position === "static"; )
    r = Di(r, t);
  return r && (Nt(r) === "html" || Nt(r) === "body" && Xe(r).position === "static" && !ga(r)) ? n : r || eh(e) || n;
}
const fh = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Hs, a = this.getDimensions;
  return {
    reference: dh(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function ph(e) {
  return Xe(e).direction === "rtl";
}
const mh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: rh,
  getDocumentElement: bt,
  getClippingRect: lh,
  getOffsetParent: Hs,
  getElementRects: fh,
  getClientRects: oh,
  getDimensions: uh,
  getScale: tn,
  isElement: mt,
  isRTL: ph
};
function vh(e, t) {
  let n = null, r;
  const o = bt(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), a();
    const {
      left: l,
      top: d,
      width: u,
      height: f
    } = e.getBoundingClientRect();
    if (s || t(), !u || !f)
      return;
    const p = tr(d), v = tr(o.clientWidth - (l + u)), m = tr(o.clientHeight - (d + f)), g = tr(l), y = {
      rootMargin: -p + "px " + -v + "px " + -m + "px " + -g + "px",
      threshold: Ue(0, Pt(1, c)) || 1
    };
    let C = !0;
    function E(N) {
      const O = N[0].intersectionRatio;
      if (O !== c) {
        if (!C)
          return i();
        O ? i(!1, O) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 100);
      }
      C = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, y);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function hh(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = $a(e), d = o || a ? [...l ? yr(l) : [], ...yr(t)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const u = l && s ? vh(l, n) : null;
  let f = -1, p = null;
  i && (p = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let v, m = c ? Ft(e) : null;
  c && g();
  function g() {
    const b = Ft(e);
    m && (b.x !== m.x || b.y !== m.y || b.width !== m.width || b.height !== m.height) && n(), m = b, v = requestAnimationFrame(g);
  }
  return n(), () => {
    d.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), u && u(), p && p.disconnect(), p = null, c && cancelAnimationFrame(v);
  };
}
const gh = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: mh,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Vv(e, t, {
    ...o,
    platform: a
  });
}, bh = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Ci({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ci({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var mr = typeof document < "u" ? Qo : z;
function wr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!wr(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !wr(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Vs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ni(e, t) {
  const n = Vs(e);
  return Math.round(t * n) / n;
}
function Oi(e) {
  const t = $.useRef(e);
  return mr(() => {
    t.current = e;
  }), t;
}
function $h(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = e, [d, u] = $.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = $.useState(r);
  wr(f, r) || p(r);
  const [v, m] = $.useState(null), [g, b] = $.useState(null), y = $.useCallback((G) => {
    G != O.current && (O.current = G, m(G));
  }, [m]), C = $.useCallback((G) => {
    G !== T.current && (T.current = G, b(G));
  }, [b]), E = a || v, N = i || g, O = $.useRef(null), T = $.useRef(null), k = $.useRef(d), L = Oi(c), q = Oi(o), K = $.useCallback(() => {
    if (!O.current || !T.current)
      return;
    const G = {
      placement: t,
      strategy: n,
      middleware: f
    };
    q.current && (G.platform = q.current), gh(O.current, T.current, G).then((F) => {
      const A = {
        ...F,
        isPositioned: !0
      };
      H.current && !wr(k.current, A) && (k.current = A, cd.flushSync(() => {
        u(A);
      }));
    });
  }, [f, t, n, q]);
  mr(() => {
    l === !1 && k.current.isPositioned && (k.current.isPositioned = !1, u((G) => ({
      ...G,
      isPositioned: !1
    })));
  }, [l]);
  const H = $.useRef(!1);
  mr(() => (H.current = !0, () => {
    H.current = !1;
  }), []), mr(() => {
    if (E && (O.current = E), N && (T.current = N), E && N) {
      if (L.current)
        return L.current(E, N, K);
      K();
    }
  }, [E, N, K, L]);
  const Z = $.useMemo(() => ({
    reference: O,
    floating: T,
    setReference: y,
    setFloating: C
  }), [y, C]), Q = $.useMemo(() => ({
    reference: E,
    floating: N
  }), [E, N]), V = $.useMemo(() => {
    const G = {
      position: n,
      left: 0,
      top: 0
    };
    if (!Q.floating)
      return G;
    const F = Ni(Q.floating, d.x), A = Ni(Q.floating, d.y);
    return s ? {
      ...G,
      transform: "translate(" + F + "px, " + A + "px)",
      ...Vs(Q.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: A
    };
  }, [n, s, Q.floating, d.x, d.y]);
  return $.useMemo(() => ({
    ...d,
    update: K,
    refs: Z,
    elements: Q,
    floatingStyles: V
  }), [d, K, Z, Q, V]);
}
function zs(e) {
  const [t, n] = B(void 0);
  return Be(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          i = l.inlineSize, s = l.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({
          width: i,
          height: s
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const Gs = "Popper", [Ks, mn] = Ve(Gs), [xh, Xs] = Ks(Gs), yh = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = B(null);
  return /* @__PURE__ */ h(xh, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, wh = "PopperAnchor", Ch = /* @__PURE__ */ D((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Xs(wh, n), i = I(null), s = ue(t, i);
  return z(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || i.current);
  }), r ? null : /* @__PURE__ */ h(oe.div, _({}, o, {
    ref: s
  }));
}), qs = "PopperContent", [_h, S1] = Ks(qs), Sh = /* @__PURE__ */ D((e, t) => {
  var n, r, o, a, i, s, c, l;
  const { __scopePopper: d, side: u = "bottom", sideOffset: f = 0, align: p = "center", alignOffset: v = 0, arrowPadding: m = 0, collisionBoundary: g = [], collisionPadding: b = 0, sticky: y = "partial", hideWhenDetached: C = !1, avoidCollisions: E = !0, onPlaced: N, ...O } = e, T = Xs(qs, d), [k, L] = B(null), q = ue(
    t,
    (De) => L(De)
  ), [K, H] = B(null), Z = zs(K), Q = (n = Z == null ? void 0 : Z.width) !== null && n !== void 0 ? n : 0, V = (r = Z == null ? void 0 : Z.height) !== null && r !== void 0 ? r : 0, G = u + (p !== "center" ? "-" + p : ""), F = typeof b == "number" ? b : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...b
  }, A = Array.isArray(g) ? g : [
    g
  ], S = A.length > 0, W = {
    padding: F,
    boundary: A.filter(Eh),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: S
  }, { refs: X, floatingStyles: Y, placement: te, isPositioned: ve, middlewareData: we } = $h({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: G,
    whileElementsMounted: hh,
    elements: {
      reference: T.anchor
    },
    middleware: [
      Xv({
        mainAxis: f + V,
        alignmentAxis: v
      }),
      E && qv({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? Zv() : void 0,
        ...W
      }),
      E && zv({
        ...W
      }),
      Qv({
        ...W,
        apply: ({ elements: De, rects: nt, availableWidth: rt, availableHeight: yt }) => {
          const { width: Jn, height: Ht } = nt.reference, Vt = De.floating.style;
          Vt.setProperty("--radix-popper-available-width", `${rt}px`), Vt.setProperty("--radix-popper-available-height", `${yt}px`), Vt.setProperty("--radix-popper-anchor-width", `${Jn}px`), Vt.setProperty("--radix-popper-anchor-height", `${Ht}px`);
        }
      }),
      K && bh({
        element: K,
        padding: m
      }),
      Ph({
        arrowWidth: Q,
        arrowHeight: V
      }),
      C && Gv({
        strategy: "referenceHidden"
      })
    ]
  }), [Ee, J] = Zs(te), se = Ce(N);
  Be(() => {
    ve && (se == null || se());
  }, [
    ve,
    se
  ]);
  const ge = (o = we.arrow) === null || o === void 0 ? void 0 : o.x, fe = (a = we.arrow) === null || a === void 0 ? void 0 : a.y, he = ((i = we.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !== 0, [pe, Oe] = B();
  return Be(() => {
    k && Oe(window.getComputedStyle(k).zIndex);
  }, [
    k
  ]), /* @__PURE__ */ h("div", {
    ref: X.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...Y,
      transform: ve ? Y.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: pe,
      ["--radix-popper-transform-origin"]: [
        (s = we.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (c = we.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ h(_h, {
    scope: d,
    placedSide: Ee,
    onArrowChange: H,
    arrowX: ge,
    arrowY: fe,
    shouldHideArrow: he
  }, /* @__PURE__ */ h(oe.div, _({
    "data-side": Ee,
    "data-align": J
  }, O, {
    ref: q,
    style: {
      ...O.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: ve ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = we.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function Eh(e) {
  return e !== null;
}
const Ph = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, i;
    const { placement: s, rects: c, middlewareData: l } = t, u = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, f = u ? 0 : e.arrowWidth, p = u ? 0 : e.arrowHeight, [v, m] = Zs(s), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[m], b = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + f / 2, y = ((a = (i = l.arrow) === null || i === void 0 ? void 0 : i.y) !== null && a !== void 0 ? a : 0) + p / 2;
    let C = "", E = "";
    return v === "bottom" ? (C = u ? g : `${b}px`, E = `${-p}px`) : v === "top" ? (C = u ? g : `${b}px`, E = `${c.floating.height + p}px`) : v === "right" ? (C = `${-p}px`, E = u ? g : `${y}px`) : v === "left" && (C = `${c.floating.width + p}px`, E = u ? g : `${y}px`), {
      data: {
        x: C,
        y: E
      }
    };
  }
});
function Zs(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Fr = yh, xa = Ch, ya = Sh, Lr = /* @__PURE__ */ D((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ es.createPortal(/* @__PURE__ */ h(oe.div, _({}, o, {
    ref: t
  })), r) : null;
});
function Dh(e, t) {
  return Jo((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Re = (e) => {
  const { present: t, children: n } = e, r = Nh(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Fe.only(n), a = ue(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ dn(o, {
    ref: a
  }) : null;
};
Re.displayName = "Presence";
function Nh(e) {
  const [t, n] = B(), r = I({}), o = I(e), a = I("none"), i = e ? "mounted" : "unmounted", [s, c] = Dh(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return z(() => {
    const l = nr(r.current);
    a.current = s === "mounted" ? l : "none";
  }, [
    s
  ]), Be(() => {
    const l = r.current, d = o.current;
    if (d !== e) {
      const f = a.current, p = nr(l);
      e ? c("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(d && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), Be(() => {
    if (t) {
      const l = (u) => {
        const p = nr(r.current).includes(u.animationName);
        u.target === t && p && Er(
          () => c("ANIMATION_END")
        );
      }, d = (u) => {
        u.target === t && (a.current = nr(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(s),
    ref: ae((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function nr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function vt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Oh({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : r, s = Ce(n), c = ae((l) => {
    if (a) {
      const u = typeof l == "function" ? l(e) : l;
      u !== e && s(u);
    } else
      o(l);
  }, [
    a,
    e,
    o,
    s
  ]);
  return [
    i,
    c
  ];
}
function Oh({ defaultProp: e, onChange: t }) {
  const n = B(e), [r] = n, o = I(r), a = Ce(t);
  return z(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const vo = "rovingFocusGroup.onEntryFocus", Mh = {
  bubbles: !1,
  cancelable: !0
}, wa = "RovingFocusGroup", [ko, Qs, Th] = pa(wa), [Rh, Js] = Ve(wa, [
  Th
]), [kh, Ah] = Rh(wa), Ih = /* @__PURE__ */ D((e, t) => /* @__PURE__ */ h(ko.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ h(ko.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ h(Fh, _({}, e, {
  ref: t
}))))), Fh = /* @__PURE__ */ D((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: c, onEntryFocus: l, ...d } = e, u = I(null), f = ue(t, u), p = Mr(a), [v = null, m] = vt({
    prop: i,
    defaultProp: s,
    onChange: c
  }), [g, b] = B(!1), y = Ce(l), C = Qs(n), E = I(!1), [N, O] = B(0);
  return z(() => {
    const T = u.current;
    if (T)
      return T.addEventListener(vo, y), () => T.removeEventListener(vo, y);
  }, [
    y
  ]), /* @__PURE__ */ h(kh, {
    scope: n,
    orientation: r,
    dir: p,
    loop: o,
    currentTabStopId: v,
    onItemFocus: ae(
      (T) => m(T),
      [
        m
      ]
    ),
    onItemShiftTab: ae(
      () => b(!0),
      []
    ),
    onFocusableItemAdd: ae(
      () => O(
        (T) => T + 1
      ),
      []
    ),
    onFocusableItemRemove: ae(
      () => O(
        (T) => T - 1
      ),
      []
    )
  }, /* @__PURE__ */ h(oe.div, _({
    tabIndex: g || N === 0 ? -1 : 0,
    "data-orientation": r
  }, d, {
    ref: f,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: U(e.onMouseDown, () => {
      E.current = !0;
    }),
    onFocus: U(e.onFocus, (T) => {
      const k = !E.current;
      if (T.target === T.currentTarget && k && !g) {
        const L = new CustomEvent(vo, Mh);
        if (T.currentTarget.dispatchEvent(L), !L.defaultPrevented) {
          const q = C().filter(
            (V) => V.focusable
          ), K = q.find(
            (V) => V.active
          ), H = q.find(
            (V) => V.id === v
          ), Q = [
            K,
            H,
            ...q
          ].filter(Boolean).map(
            (V) => V.ref.current
          );
          ec(Q);
        }
      }
      E.current = !1;
    }),
    onBlur: U(
      e.onBlur,
      () => b(!1)
    )
  })));
}), Lh = "RovingFocusGroupItem", Wh = /* @__PURE__ */ D((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...i } = e, s = Ke(), c = a || s, l = Ah(Lh, n), d = l.currentTabStopId === c, u = Qs(n), { onFocusableItemAdd: f, onFocusableItemRemove: p } = l;
  return z(() => {
    if (r)
      return f(), () => p();
  }, [
    r,
    f,
    p
  ]), /* @__PURE__ */ h(ko.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ h(oe.span, _({
    tabIndex: d ? 0 : -1,
    "data-orientation": l.orientation
  }, i, {
    ref: t,
    onMouseDown: U(e.onMouseDown, (v) => {
      r ? l.onItemFocus(c) : v.preventDefault();
    }),
    onFocus: U(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: U(e.onKeyDown, (v) => {
      if (v.key === "Tab" && v.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (v.target !== v.currentTarget)
        return;
      const m = Yh(v, l.orientation, l.dir);
      if (m !== void 0) {
        v.preventDefault();
        let b = u().filter(
          (y) => y.focusable
        ).map(
          (y) => y.ref.current
        );
        if (m === "last")
          b.reverse();
        else if (m === "prev" || m === "next") {
          m === "prev" && b.reverse();
          const y = b.indexOf(v.currentTarget);
          b = l.loop ? Bh(b, y + 1) : b.slice(y + 1);
        }
        setTimeout(
          () => ec(b)
        );
      }
    })
  })));
}), jh = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Uh(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Yh(e, t, n) {
  const r = Uh(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return jh[r];
}
function ec(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Bh(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Hh = Ih, Vh = Wh;
var zh = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Xt = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), or = {}, ho = 0, tc = function(e) {
  return e && (e.host || tc(e.parentNode));
}, Gh = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = tc(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, Kh = function(e, t, n, r) {
  var o = Gh(t, Array.isArray(e) ? e : [e]);
  or[n] || (or[n] = /* @__PURE__ */ new WeakMap());
  var a = or[n], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(u) {
    !u || s.has(u) || (s.add(u), l(u.parentNode));
  };
  o.forEach(l);
  var d = function(u) {
    !u || c.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (s.has(f))
        d(f);
      else {
        var p = f.getAttribute(r), v = p !== null && p !== "false", m = (Xt.get(f) || 0) + 1, g = (a.get(f) || 0) + 1;
        Xt.set(f, m), a.set(f, g), i.push(f), m === 1 && v && rr.set(f, !0), g === 1 && f.setAttribute(n, "true"), v || f.setAttribute(r, "true");
      }
    });
  };
  return d(t), s.clear(), ho++, function() {
    i.forEach(function(u) {
      var f = Xt.get(u) - 1, p = a.get(u) - 1;
      Xt.set(u, f), a.set(u, p), f || (rr.has(u) || u.removeAttribute(r), rr.delete(u)), p || u.removeAttribute(n);
    }), ho--, ho || (Xt = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), or = {});
  };
}, Yn = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || zh(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Kh(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ne = function() {
  return Ne = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ne.apply(this, arguments);
};
function Ca(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function nc(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Dn = "right-scroll-bar-position", Nn = "width-before-scroll-bar", Xh = "with-scroll-bars-hidden", qh = "--removed-body-scroll-bar-size";
function Zh(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Qh(e, t) {
  var n = B(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function rc(e, t) {
  return Qh(t || null, function(n) {
    return e.forEach(function(r) {
      return Zh(r, n);
    });
  });
}
function Jh(e) {
  return e;
}
function eg(e, t) {
  t === void 0 && (t = Jh);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), i = n;
      }
      var c = function() {
        var d = i;
        i = [], d.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(d) {
          i.push(d), l();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return o;
}
function oc(e) {
  e === void 0 && (e = {});
  var t = eg(null);
  return t.options = Ne({ async: !0, ssr: !1 }, e), t;
}
var ac = function(e) {
  var t = e.sideCar, n = Ca(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return $.createElement(r, Ne({}, n));
};
ac.isSideCarExport = !0;
function ic(e, t) {
  return e.useMedium(t), ac;
}
var sc = oc(), go = function() {
}, Wr = $.forwardRef(function(e, t) {
  var n = $.useRef(null), r = $.useState({
    onScrollCapture: go,
    onWheelCapture: go,
    onTouchMoveCapture: go
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, u = e.shards, f = e.sideCar, p = e.noIsolation, v = e.inert, m = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = Ca(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), C = f, E = rc([n, t]), N = Ne(Ne({}, y), o);
  return $.createElement(
    $.Fragment,
    null,
    d && $.createElement(C, { sideCar: sc, removeScrollBar: l, shards: u, noIsolation: p, inert: v, setCallbacks: a, allowPinchZoom: !!m, lockRef: n }),
    i ? $.cloneElement($.Children.only(s), Ne(Ne({}, N), { ref: E })) : $.createElement(b, Ne({}, N, { className: c, ref: E }), s)
  );
});
Wr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Wr.classNames = {
  fullWidth: Nn,
  zeroRight: Dn
};
var Mi, tg = function() {
  if (Mi)
    return Mi;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ng() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = tg();
  return t && e.setAttribute("nonce", t), e;
}
function rg(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function og(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ag = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ng()) && (rg(t, n), og(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ig = function() {
  var e = ag();
  return function(t, n) {
    $.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, _a = function() {
  var e = ig(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, sg = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, bo = function(e) {
  return parseInt(e || "", 10) || 0;
}, cg = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [bo(n), bo(r), bo(o)];
}, lg = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return sg;
  var t = cg(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, ug = _a(), dg = function(e, t, n, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Xh, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Dn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Nn, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Dn, " .").concat(Dn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Nn, " .").concat(Nn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(qh, ": ").concat(s, `px;
  }
`);
}, cc = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = $.useMemo(function() {
    return lg(o);
  }, [o]);
  return $.createElement(ug, { styles: dg(a, !t, o, n ? "" : "!important") });
}, Ao = !1;
if (typeof window < "u")
  try {
    var ar = Object.defineProperty({}, "passive", {
      get: function() {
        return Ao = !0, !0;
      }
    });
    window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
  } catch {
    Ao = !1;
  }
var qt = Ao ? { passive: !1 } : !1, fg = function(e) {
  return e.tagName === "TEXTAREA";
}, lc = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !fg(e) && n[t] === "visible")
  );
}, pg = function(e) {
  return lc(e, "overflowY");
}, mg = function(e) {
  return lc(e, "overflowX");
}, Ti = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = uc(e, n);
    if (r) {
      var o = dc(e, n), a = o[1], i = o[2];
      if (a > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, vg = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, hg = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, uc = function(e, t) {
  return e === "v" ? pg(t) : mg(t);
}, dc = function(e, t) {
  return e === "v" ? vg(t) : hg(t);
}, gg = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, bg = function(e, t, n, r, o) {
  var a = gg(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, c = t.contains(s), l = !1, d = i > 0, u = 0, f = 0;
  do {
    var p = dc(e, s), v = p[0], m = p[1], g = p[2], b = m - g - a * v;
    (v || b) && uc(e, s) && (u += b, f += v), s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (d && (o && u === 0 || !o && i > u) || !d && (o && f === 0 || !o && -i > f)) && (l = !0), l;
}, ir = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ri = function(e) {
  return [e.deltaX, e.deltaY];
}, ki = function(e) {
  return e && "current" in e ? e.current : e;
}, $g = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, xg = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, yg = 0, Zt = [];
function wg(e) {
  var t = $.useRef([]), n = $.useRef([0, 0]), r = $.useRef(), o = $.useState(yg++)[0], a = $.useState(function() {
    return _a();
  })[0], i = $.useRef(e);
  $.useEffect(function() {
    i.current = e;
  }, [e]), $.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = nc([e.lockRef.current], (e.shards || []).map(ki), !0).filter(Boolean);
      return m.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = $.useCallback(function(m, g) {
    if ("touches" in m && m.touches.length === 2)
      return !i.current.allowPinchZoom;
    var b = ir(m), y = n.current, C = "deltaX" in m ? m.deltaX : y[0] - b[0], E = "deltaY" in m ? m.deltaY : y[1] - b[1], N, O = m.target, T = Math.abs(C) > Math.abs(E) ? "h" : "v";
    if ("touches" in m && T === "h" && O.type === "range")
      return !1;
    var k = Ti(T, O);
    if (!k)
      return !0;
    if (k ? N = T : (N = T === "v" ? "h" : "v", k = Ti(T, O)), !k)
      return !1;
    if (!r.current && "changedTouches" in m && (C || E) && (r.current = N), !N)
      return !0;
    var L = r.current || N;
    return bg(L, g, m, L === "h" ? C : E, !0);
  }, []), c = $.useCallback(function(m) {
    var g = m;
    if (!(!Zt.length || Zt[Zt.length - 1] !== a)) {
      var b = "deltaY" in g ? Ri(g) : ir(g), y = t.current.filter(function(N) {
        return N.name === g.type && N.target === g.target && $g(N.delta, b);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var C = (i.current.shards || []).map(ki).filter(Boolean).filter(function(N) {
          return N.contains(g.target);
        }), E = C.length > 0 ? s(g, C[0]) : !i.current.noIsolation;
        E && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = $.useCallback(function(m, g, b, y) {
    var C = { name: m, delta: g, target: b, should: y };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== C;
      });
    }, 1);
  }, []), d = $.useCallback(function(m) {
    n.current = ir(m), r.current = void 0;
  }, []), u = $.useCallback(function(m) {
    l(m.type, Ri(m), m.target, s(m, e.lockRef.current));
  }, []), f = $.useCallback(function(m) {
    l(m.type, ir(m), m.target, s(m, e.lockRef.current));
  }, []);
  $.useEffect(function() {
    return Zt.push(a), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, qt), document.addEventListener("touchmove", c, qt), document.addEventListener("touchstart", d, qt), function() {
      Zt = Zt.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", c, qt), document.removeEventListener("touchmove", c, qt), document.removeEventListener("touchstart", d, qt);
    };
  }, []);
  var p = e.removeScrollBar, v = e.inert;
  return $.createElement(
    $.Fragment,
    null,
    v ? $.createElement(a, { styles: xg(o) }) : null,
    p ? $.createElement(cc, { gapMode: "margin" }) : null
  );
}
const Cg = ic(sc, wg);
var fc = $.forwardRef(function(e, t) {
  return $.createElement(Wr, Ne({}, e, { ref: t, sideCar: Cg }));
});
fc.classNames = Wr.classNames;
const jr = fc, Io = [
  "Enter",
  " "
], _g = [
  "ArrowDown",
  "PageUp",
  "Home"
], pc = [
  "ArrowUp",
  "PageDown",
  "End"
], Sg = [
  ..._g,
  ...pc
], Eg = {
  ltr: [
    ...Io,
    "ArrowRight"
  ],
  rtl: [
    ...Io,
    "ArrowLeft"
  ]
}, Pg = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Ur = "Menu", [kn, Dg, Ng] = pa(Ur), [Ut, Yr] = Ve(Ur, [
  Ng,
  mn,
  Js
]), Br = mn(), mc = Js(), [vc, Mt] = Ut(Ur), [Og, Bn] = Ut(Ur), Mg = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = Br(t), [c, l] = B(null), d = I(!1), u = Ce(a), f = Mr(o);
  return z(() => {
    const p = () => {
      d.current = !0, document.addEventListener("pointerdown", v, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", v, {
        capture: !0,
        once: !0
      });
    }, v = () => d.current = !1;
    return document.addEventListener("keydown", p, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", p, {
        capture: !0
      }), document.removeEventListener("pointerdown", v, {
        capture: !0
      }), document.removeEventListener("pointermove", v, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ h(Fr, s, /* @__PURE__ */ h(vc, {
    scope: t,
    open: n,
    onOpenChange: u,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ h(Og, {
    scope: t,
    onClose: ae(
      () => u(!1),
      [
        u
      ]
    ),
    isUsingKeyboardRef: d,
    dir: f,
    modal: i
  }, r)));
}, hc = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Br(n);
  return /* @__PURE__ */ h(xa, _({}, o, r, {
    ref: t
  }));
}), gc = "MenuPortal", [Tg, bc] = Ut(gc, {
  forceMount: void 0
}), Rg = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Mt(gc, t);
  return /* @__PURE__ */ h(Tg, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ h(Re, {
    present: n || a.open
  }, /* @__PURE__ */ h(Lr, {
    asChild: !0,
    container: o
  }, r)));
}, Qe = "MenuContent", [kg, Sa] = Ut(Qe), Ag = /* @__PURE__ */ D((e, t) => {
  const n = bc(Qe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Mt(Qe, e.__scopeMenu), i = Bn(Qe, e.__scopeMenu);
  return /* @__PURE__ */ h(kn.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(Re, {
    present: r || a.open
  }, /* @__PURE__ */ h(kn.Slot, {
    scope: e.__scopeMenu
  }, i.modal ? /* @__PURE__ */ h(Ig, _({}, o, {
    ref: t
  })) : /* @__PURE__ */ h(Fg, _({}, o, {
    ref: t
  })))));
}), Ig = /* @__PURE__ */ D((e, t) => {
  const n = Mt(Qe, e.__scopeMenu), r = I(null), o = ue(t, r);
  return z(() => {
    const a = r.current;
    if (a)
      return Yn(a);
  }, []), /* @__PURE__ */ h(Ea, _({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: U(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Fg = /* @__PURE__ */ D((e, t) => {
  const n = Mt(Qe, e.__scopeMenu);
  return /* @__PURE__ */ h(Ea, _({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Ea = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: i, disableOutsidePointerEvents: s, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: d, onFocusOutside: u, onInteractOutside: f, onDismiss: p, disableOutsideScroll: v, ...m } = e, g = Mt(Qe, n), b = Bn(Qe, n), y = Br(n), C = mc(n), E = Dg(n), [N, O] = B(null), T = I(null), k = ue(t, T, g.onContentChange), L = I(0), q = I(""), K = I(0), H = I(null), Z = I("right"), Q = I(0), V = v ? jr : ht, G = v ? {
    as: ot,
    allowPinchZoom: !0
  } : void 0, F = (S) => {
    var W, X;
    const Y = q.current + S, te = E().filter(
      (ge) => !ge.disabled
    ), ve = document.activeElement, we = (W = te.find(
      (ge) => ge.ref.current === ve
    )) === null || W === void 0 ? void 0 : W.textValue, Ee = te.map(
      (ge) => ge.textValue
    ), J = nb(Ee, Y, we), se = (X = te.find(
      (ge) => ge.textValue === J
    )) === null || X === void 0 ? void 0 : X.ref.current;
    (function ge(fe) {
      q.current = fe, window.clearTimeout(L.current), fe !== "" && (L.current = window.setTimeout(
        () => ge(""),
        1e3
      ));
    })(Y), se && setTimeout(
      () => se.focus()
    );
  };
  z(() => () => window.clearTimeout(L.current), []), Rr();
  const A = ae((S) => {
    var W, X;
    return Z.current === ((W = H.current) === null || W === void 0 ? void 0 : W.side) && ob(S, (X = H.current) === null || X === void 0 ? void 0 : X.area);
  }, []);
  return /* @__PURE__ */ h(kg, {
    scope: n,
    searchRef: q,
    onItemEnter: ae((S) => {
      A(S) && S.preventDefault();
    }, [
      A
    ]),
    onItemLeave: ae((S) => {
      var W;
      A(S) || ((W = T.current) === null || W === void 0 || W.focus(), O(null));
    }, [
      A
    ]),
    onTriggerLeave: ae((S) => {
      A(S) && S.preventDefault();
    }, [
      A
    ]),
    pointerGraceTimerRef: K,
    onPointerGraceIntentChange: ae((S) => {
      H.current = S;
    }, [])
  }, /* @__PURE__ */ h(V, G, /* @__PURE__ */ h(kr, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: U(a, (S) => {
      var W;
      S.preventDefault(), (W = T.current) === null || W === void 0 || W.focus();
    }),
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ h(Tr, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onEscapeKeyDown: l,
    onPointerDownOutside: d,
    onFocusOutside: u,
    onInteractOutside: f,
    onDismiss: p
  }, /* @__PURE__ */ h(Hh, _({
    asChild: !0
  }, C, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: N,
    onCurrentTabStopIdChange: O,
    onEntryFocus: U(c, (S) => {
      b.isUsingKeyboardRef.current || S.preventDefault();
    })
  }), /* @__PURE__ */ h(ya, _({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": Sc(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, y, m, {
    ref: k,
    style: {
      outline: "none",
      ...m.style
    },
    onKeyDown: U(m.onKeyDown, (S) => {
      const X = S.target.closest("[data-radix-menu-content]") === S.currentTarget, Y = S.ctrlKey || S.altKey || S.metaKey, te = S.key.length === 1;
      X && (S.key === "Tab" && S.preventDefault(), !Y && te && F(S.key));
      const ve = T.current;
      if (S.target !== ve || !Sg.includes(S.key))
        return;
      S.preventDefault();
      const Ee = E().filter(
        (J) => !J.disabled
      ).map(
        (J) => J.ref.current
      );
      pc.includes(S.key) && Ee.reverse(), eb(Ee);
    }),
    onBlur: U(e.onBlur, (S) => {
      S.currentTarget.contains(S.target) || (window.clearTimeout(L.current), q.current = "");
    }),
    onPointerMove: U(e.onPointerMove, An((S) => {
      const W = S.target, X = Q.current !== S.clientX;
      if (S.currentTarget.contains(W) && X) {
        const Y = S.clientX > Q.current ? "right" : "left";
        Z.current = Y, Q.current = S.clientX;
      }
    }))
  })))))));
}), $c = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ h(oe.div, _({
    role: "group"
  }, r, {
    ref: t
  }));
}), Lg = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ h(oe.div, _({}, r, {
    ref: t
  }));
}), Fo = "MenuItem", Ai = "menu.itemSelect", Pa = /* @__PURE__ */ D((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = I(null), i = Bn(Fo, e.__scopeMenu), s = Sa(Fo, e.__scopeMenu), c = ue(t, a), l = I(!1), d = () => {
    const u = a.current;
    if (!n && u) {
      const f = new CustomEvent(Ai, {
        bubbles: !0,
        cancelable: !0
      });
      u.addEventListener(
        Ai,
        (p) => r == null ? void 0 : r(p),
        {
          once: !0
        }
      ), Ns(u, f), f.defaultPrevented ? l.current = !1 : i.onClose();
    }
  };
  return /* @__PURE__ */ h(xc, _({}, o, {
    ref: c,
    disabled: n,
    onClick: U(e.onClick, d),
    onPointerDown: (u) => {
      var f;
      (f = e.onPointerDown) === null || f === void 0 || f.call(e, u), l.current = !0;
    },
    onPointerUp: U(e.onPointerUp, (u) => {
      var f;
      l.current || (f = u.currentTarget) === null || f === void 0 || f.click();
    }),
    onKeyDown: U(e.onKeyDown, (u) => {
      const f = s.searchRef.current !== "";
      n || f && u.key === " " || Io.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
    })
  }));
}), xc = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, i = Sa(Fo, n), s = mc(n), c = I(null), l = ue(t, c), [d, u] = B(!1), [f, p] = B("");
  return z(() => {
    const v = c.current;
    if (v) {
      var m;
      p(((m = v.textContent) !== null && m !== void 0 ? m : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ h(kn.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? f
  }, /* @__PURE__ */ h(Vh, _({
    asChild: !0
  }, s, {
    focusable: !r
  }), /* @__PURE__ */ h(oe.div, _({
    role: "menuitem",
    "data-highlighted": d ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: U(e.onPointerMove, An((v) => {
      r ? i.onItemLeave(v) : (i.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus());
    })),
    onPointerLeave: U(e.onPointerLeave, An(
      (v) => i.onItemLeave(v)
    )),
    onFocus: U(
      e.onFocus,
      () => u(!0)
    ),
    onBlur: U(
      e.onBlur,
      () => u(!1)
    )
  }))));
}), Wg = /* @__PURE__ */ D((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ h(wc, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ h(Pa, _({
    role: "menuitemcheckbox",
    "aria-checked": Cr(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Da(n),
    onSelect: U(
      o.onSelect,
      () => r == null ? void 0 : r(Cr(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), jg = "MenuRadioGroup", [Ug, Yg] = Ut(jg, {
  value: void 0,
  onValueChange: () => {
  }
}), Bg = /* @__PURE__ */ D((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = Ce(r);
  return /* @__PURE__ */ h(Ug, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ h($c, _({}, o, {
    ref: t
  })));
}), Hg = "MenuRadioItem", Vg = /* @__PURE__ */ D((e, t) => {
  const { value: n, ...r } = e, o = Yg(Hg, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ h(wc, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ h(Pa, _({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Da(a),
    onSelect: U(r.onSelect, () => {
      var i;
      return (i = o.onValueChange) === null || i === void 0 ? void 0 : i.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), yc = "MenuItemIndicator", [wc, zg] = Ut(yc, {
  checked: !1
}), Gg = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = zg(yc, n);
  return /* @__PURE__ */ h(Re, {
    present: r || Cr(a.checked) || a.checked === !0
  }, /* @__PURE__ */ h(oe.span, _({}, o, {
    ref: t,
    "data-state": Da(a.checked)
  })));
}), Kg = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ h(oe.div, _({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), Cc = "MenuSub", [Xg, _c] = Ut(Cc), qg = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Mt(Cc, t), i = Br(t), [s, c] = B(null), [l, d] = B(null), u = Ce(o);
  return z(() => (a.open === !1 && u(!1), () => u(!1)), [
    a.open,
    u
  ]), /* @__PURE__ */ h(Fr, i, /* @__PURE__ */ h(vc, {
    scope: t,
    open: r,
    onOpenChange: u,
    content: l,
    onContentChange: d
  }, /* @__PURE__ */ h(Xg, {
    scope: t,
    contentId: Ke(),
    triggerId: Ke(),
    trigger: s,
    onTriggerChange: c
  }, n)));
}, sr = "MenuSubTrigger", Zg = /* @__PURE__ */ D((e, t) => {
  const n = Mt(sr, e.__scopeMenu), r = Bn(sr, e.__scopeMenu), o = _c(sr, e.__scopeMenu), a = Sa(sr, e.__scopeMenu), i = I(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, d = ae(() => {
    i.current && window.clearTimeout(i.current), i.current = null;
  }, []);
  return z(
    () => d,
    [
      d
    ]
  ), z(() => {
    const u = s.current;
    return () => {
      window.clearTimeout(u), c(null);
    };
  }, [
    s,
    c
  ]), /* @__PURE__ */ h(hc, _({
    asChild: !0
  }, l), /* @__PURE__ */ h(xc, _({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": Sc(n.open)
  }, e, {
    ref: Pr(t, o.onTriggerChange),
    onClick: (u) => {
      var f;
      (f = e.onClick) === null || f === void 0 || f.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: U(e.onPointerMove, An((u) => {
      a.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
        n.onOpenChange(!0), d();
      }, 100));
    })),
    onPointerLeave: U(e.onPointerLeave, An((u) => {
      var f;
      d();
      const p = (f = n.content) === null || f === void 0 ? void 0 : f.getBoundingClientRect();
      if (p) {
        var v;
        const m = (v = n.content) === null || v === void 0 ? void 0 : v.dataset.side, g = m === "right", b = g ? -5 : 5, y = p[g ? "left" : "right"], C = p[g ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: u.clientX + b,
              y: u.clientY
            },
            {
              x: y,
              y: p.top
            },
            {
              x: C,
              y: p.top
            },
            {
              x: C,
              y: p.bottom
            },
            {
              x: y,
              y: p.bottom
            }
          ],
          side: m
        }), window.clearTimeout(s.current), s.current = window.setTimeout(
          () => a.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (a.onTriggerLeave(u), u.defaultPrevented)
          return;
        a.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: U(e.onKeyDown, (u) => {
      const f = a.searchRef.current !== "";
      if (!(e.disabled || f && u.key === " ") && Eg[r.dir].includes(u.key)) {
        var p;
        n.onOpenChange(!0), (p = n.content) === null || p === void 0 || p.focus(), u.preventDefault();
      }
    })
  })));
}), Qg = "MenuSubContent", Jg = /* @__PURE__ */ D((e, t) => {
  const n = bc(Qe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Mt(Qe, e.__scopeMenu), i = Bn(Qe, e.__scopeMenu), s = _c(Qg, e.__scopeMenu), c = I(null), l = ue(t, c);
  return /* @__PURE__ */ h(kn.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(Re, {
    present: r || a.open
  }, /* @__PURE__ */ h(kn.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(Ea, _({
    id: s.contentId,
    "aria-labelledby": s.triggerId
  }, o, {
    ref: l,
    align: "start",
    side: i.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    trapFocus: !1,
    onOpenAutoFocus: (d) => {
      var u;
      i.isUsingKeyboardRef.current && ((u = c.current) === null || u === void 0 || u.focus()), d.preventDefault();
    },
    onCloseAutoFocus: (d) => d.preventDefault(),
    onFocusOutside: U(e.onFocusOutside, (d) => {
      d.target !== s.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: U(e.onEscapeKeyDown, (d) => {
      i.onClose(), d.preventDefault();
    }),
    onKeyDown: U(e.onKeyDown, (d) => {
      const u = d.currentTarget.contains(d.target), f = Pg[i.dir].includes(d.key);
      if (u && f) {
        var p;
        a.onOpenChange(!1), (p = s.trigger) === null || p === void 0 || p.focus(), d.preventDefault();
      }
    })
  })))));
});
function Sc(e) {
  return e ? "open" : "closed";
}
function Cr(e) {
  return e === "indeterminate";
}
function Da(e) {
  return Cr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function eb(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function tb(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function nb(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = tb(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter(
    (l) => l !== n
  ));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function rb(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, d = t[i].y;
    c > r != d > r && n < (l - s) * (r - c) / (d - c) + s && (o = !o);
  }
  return o;
}
function ob(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return rb(n, t);
}
function An(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Ec = Mg, Pc = hc, Dc = Rg, Nc = Ag, Oc = $c, Mc = Lg, Tc = Pa, Rc = Wg, kc = Bg, Ac = Vg, Ic = Gg, Fc = Kg, Lc = qg, Wc = Zg, jc = Jg, Uc = "ContextMenu", [ab, E1] = Ve(Uc, [
  Yr
]), ke = Yr(), [ib, Yc] = ab(Uc), sb = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [i, s] = B(!1), c = ke(t), l = Ce(r), d = ae((u) => {
    s(u), l(u);
  }, [
    l
  ]);
  return /* @__PURE__ */ h(ib, {
    scope: t,
    open: i,
    onOpenChange: d,
    modal: a
  }, /* @__PURE__ */ h(Ec, _({}, c, {
    dir: o,
    open: i,
    onOpenChange: d,
    modal: a
  }), n));
}, cb = "ContextMenuTrigger", lb = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = Yc(cb, n), i = ke(n), s = I({
    x: 0,
    y: 0
  }), c = I({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...s.current
    })
  }), l = I(0), d = ae(
    () => window.clearTimeout(l.current),
    []
  ), u = (f) => {
    s.current = {
      x: f.clientX,
      y: f.clientY
    }, a.onOpenChange(!0);
  };
  return z(
    () => d,
    [
      d
    ]
  ), z(
    () => void (r && d()),
    [
      r,
      d
    ]
  ), /* @__PURE__ */ h(ht, null, /* @__PURE__ */ h(Pc, _({}, i, {
    virtualRef: c
  })), /* @__PURE__ */ h(oe.span, _({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0
  }, o, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: r ? e.onContextMenu : U(e.onContextMenu, (f) => {
      d(), u(f), f.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : U(e.onPointerDown, cr((f) => {
      d(), l.current = window.setTimeout(
        () => u(f),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : U(e.onPointerMove, cr(d)),
    onPointerCancel: r ? e.onPointerCancel : U(e.onPointerCancel, cr(d)),
    onPointerUp: r ? e.onPointerUp : U(e.onPointerUp, cr(d))
  })));
}), ub = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = ke(t);
  return /* @__PURE__ */ h(Dc, _({}, r, n));
}, db = "ContextMenuContent", fb = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Yc(db, n), a = ke(n), i = I(!1);
  return /* @__PURE__ */ h(Nc, _({}, a, r, {
    ref: t,
    side: "right",
    sideOffset: 2,
    align: "start",
    onCloseAutoFocus: (s) => {
      var c;
      (c = e.onCloseAutoFocus) === null || c === void 0 || c.call(e, s), !s.defaultPrevented && i.current && s.preventDefault(), i.current = !1;
    },
    onInteractOutside: (s) => {
      var c;
      (c = e.onInteractOutside) === null || c === void 0 || c.call(e, s), !s.defaultPrevented && !o.modal && (i.current = !0);
    },
    style: {
      ...e.style,
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), pb = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ h(Oc, _({}, o, r, {
    ref: t
  }));
}), mb = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ h(Mc, _({}, o, r, {
    ref: t
  }));
}), vb = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ h(Tc, _({}, o, r, {
    ref: t
  }));
}), hb = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ h(Rc, _({}, o, r, {
    ref: t
  }));
}), gb = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ h(kc, _({}, o, r, {
    ref: t
  }));
}), bb = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ h(Ac, _({}, o, r, {
    ref: t
  }));
}), $b = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ h(Ic, _({}, o, r, {
    ref: t
  }));
}), xb = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ h(Fc, _({}, o, r, {
    ref: t
  }));
}), yb = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, i = ke(t), [s, c] = vt({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ h(Lc, _({}, i, {
    open: s,
    onOpenChange: c
  }), n);
}, wb = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ h(Wc, _({}, o, r, {
    ref: t
  }));
}), Cb = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ h(jc, _({}, o, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
function cr(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const _b = sb, Sb = lb, Bc = ub, Hc = fb, Eb = pb, Vc = mb, zc = vb, Gc = hb, Pb = gb, Kc = bb, Xc = $b, qc = xb, Db = yb, Zc = wb, Qc = Cb, P1 = _b, D1 = Sb, N1 = Eb, O1 = Bc, M1 = Db, T1 = Pb, Nb = $.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ w.exports.jsxs(
  Zc,
  {
    ref: o,
    className: R(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ w.exports.jsx(ta, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Nb.displayName = Zc.displayName;
const Ob = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Qc,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
Ob.displayName = Qc.displayName;
const Mb = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(Bc, { children: /* @__PURE__ */ w.exports.jsx(
  Hc,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
Mb.displayName = Hc.displayName;
const Tb = $.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ w.exports.jsx(
  zc,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Tb.displayName = zc.displayName;
const Rb = $.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ w.exports.jsxs(
  Gc,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ w.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ w.exports.jsx(Xc, { children: /* @__PURE__ */ w.exports.jsx(Nr, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Rb.displayName = Gc.displayName;
const kb = $.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ w.exports.jsxs(
  Kc,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ w.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ w.exports.jsx(Xc, { children: /* @__PURE__ */ w.exports.jsx(us, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
kb.displayName = Kc.displayName;
const Ab = $.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ w.exports.jsx(
  Vc,
  {
    ref: r,
    className: R(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Ab.displayName = Vc.displayName;
const Ib = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  qc,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
Ib.displayName = qc.displayName;
const Fb = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w.exports.jsx(
  "span",
  {
    className: R(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
Fb.displayName = "ContextMenuShortcut";
var Lb = (e) => e.type === "checkbox", Wb = (e) => e instanceof Date, Jc = (e) => e == null;
const jb = (e) => typeof e == "object";
var vn = (e) => !Jc(e) && !Array.isArray(e) && jb(e) && !Wb(e), Ub = (e) => vn(e) && e.target ? Lb(e.target) ? e.target.checked : e.target.value : e, Yb = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Bb = (e, t) => e.has(Yb(t)), Hb = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return vn(t) && t.hasOwnProperty("isPrototypeOf");
}, Vb = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Na(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Vb && (e instanceof Blob || e instanceof FileList)) && (n || vn(e)))
    if (t = n ? [] : {}, !n && !Hb(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Na(e[r]));
  else
    return e;
  return t;
}
var el = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Lo = (e) => e === void 0, je = (e, t, n) => {
  if (!t || !vn(e))
    return n;
  const r = el(t.split(/[,[\].]+?/)).reduce((o, a) => Jc(o) ? o : o[a], e);
  return Lo(r) || r === e ? Lo(e[t]) ? n : e[t] : r;
};
const Ii = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Wo = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, tl = P.createContext(null), Hr = () => P.useContext(tl), zb = (e) => {
  const { children: t, ...n } = e;
  return P.createElement(tl.Provider, { value: n }, t);
};
var Gb = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const i = a;
        return t._proxyFormState[i] !== Wo.all && (t._proxyFormState[i] = !r || Wo.all), n && (n[i] = !0), e[i];
      }
    });
  return o;
}, Kb = (e) => vn(e) && !Object.keys(e).length, Xb = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Kb(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((i) => t[i] === (!r || Wo.all));
}, qb = (e) => Array.isArray(e) ? e : [e], nl = (e, t, n) => n && t ? e === t : !e || !t || e === t || qb(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function rl(e) {
  const t = P.useRef(e);
  t.current = e, P.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function Zb(e) {
  const t = Hr(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [i, s] = P.useState(n._formState), c = P.useRef(!0), l = P.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = P.useRef(o);
  return d.current = o, rl({
    disabled: r,
    next: (u) => c.current && nl(d.current, u.name, a) && Xb(u, l.current, n._updateFormState) && s({
      ...n._formState,
      ...u
    }),
    subject: n._subjects.state
  }), P.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Gb(i, n, l.current, !1);
}
var Qb = (e) => typeof e == "string", Jb = (e, t, n, r, o) => Qb(e) ? (r && t.watch.add(e), je(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), je(n, a))) : (r && (t.watchAll = !0), n);
function e0(e) {
  const t = Hr(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: i } = e || {}, s = P.useRef(r);
  s.current = r, rl({
    disabled: a,
    subject: n._subjects.values,
    next: (d) => {
      nl(s.current, d.name, i) && l(Na(Jb(s.current, n._names, d.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = P.useState(n._getWatch(r, o));
  return P.useEffect(() => n._removeUnmounted()), c;
}
var t0 = (e) => /^\w*$/.test(e), n0 = (e) => el(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Fi(e, t, n) {
  let r = -1;
  const o = t0(t) ? [t] : n0(t), a = o.length, i = a - 1;
  for (; ++r < a; ) {
    const s = o[r];
    let c = n;
    if (r !== i) {
      const l = e[s];
      c = vn(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    e[s] = c, e = e[s];
  }
  return e;
}
function r0(e) {
  const t = Hr(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = Bb(r._names.array, n), i = e0({
    control: r,
    name: n,
    defaultValue: je(r._formValues, n, je(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), s = Zb({
    control: r,
    name: n
  }), c = P.useRef(r.register(n, {
    ...e.rules,
    value: i
  }));
  return c.current = r.register(n, e.rules), P.useEffect(() => {
    const l = r._options.shouldUnregister || o, d = (u, f) => {
      const p = je(r._fields, u);
      p && (p._f.mount = f);
    };
    if (d(n, !0), l) {
      const u = Na(je(r._options.defaultValues, n));
      Fi(r._defaultValues, n, u), Lo(je(r._formValues, n)) && Fi(r._formValues, n, u);
    }
    return () => {
      (a ? l && !r._state.action : l) ? r.unregister(n) : d(n, !1);
    };
  }, [n, r, a, o]), {
    field: {
      name: n,
      value: i,
      onChange: P.useCallback((l) => c.current.onChange({
        target: {
          value: Ub(l),
          name: n
        },
        type: Ii.CHANGE
      }), [n]),
      onBlur: P.useCallback(() => c.current.onBlur({
        target: {
          value: je(r._formValues, n),
          name: n
        },
        type: Ii.BLUR
      }), [n, r]),
      ref: (l) => {
        const d = je(r._fields, n);
        d && l && (d._f.ref = {
          focus: () => l.focus(),
          select: () => l.select(),
          setCustomValidity: (u) => l.setCustomValidity(u),
          reportValidity: () => l.reportValidity()
        });
      }
    },
    formState: s,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!je(s.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!je(s.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!je(s.touchedFields, n)
      },
      error: {
        enumerable: !0,
        get: () => je(s.errors, n)
      }
    })
  };
}
const o0 = (e) => e.render(r0(e)), a0 = /* @__PURE__ */ D((e, t) => /* @__PURE__ */ h(oe.label, _({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), ol = a0, i0 = Dr(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), _r = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  ol,
  {
    ref: n,
    className: R(i0(), e),
    ...t
  }
));
_r.displayName = ol.displayName;
const R1 = zb, al = $.createContext(
  {}
), k1 = ({
  ...e
}) => /* @__PURE__ */ w.exports.jsx(al.Provider, { value: { name: e.name }, children: /* @__PURE__ */ w.exports.jsx(o0, { ...e }) }), Vr = () => {
  const e = $.useContext(al), t = $.useContext(il), { getFieldState: n, formState: r } = Hr(), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, il = $.createContext(
  {}
), s0 = $.forwardRef(({ className: e, ...t }, n) => {
  const r = $.useId();
  return /* @__PURE__ */ w.exports.jsx(il.Provider, { value: { id: r }, children: /* @__PURE__ */ w.exports.jsx("div", { ref: n, className: R("space-y-2", e), ...t }) });
});
s0.displayName = "FormItem";
const c0 = $.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Vr();
  return /* @__PURE__ */ w.exports.jsx(
    _r,
    {
      ref: n,
      className: R(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
c0.displayName = "FormLabel";
const l0 = $.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Vr();
  return /* @__PURE__ */ w.exports.jsx(
    ot,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
l0.displayName = "FormControl";
const u0 = $.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Vr();
  return /* @__PURE__ */ w.exports.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: R("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
u0.displayName = "FormDescription";
const d0 = $.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Vr(), i = o ? String(o == null ? void 0 : o.message) : t;
  return i ? /* @__PURE__ */ w.exports.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: R("text-sm font-medium text-destructive", e),
      ...n,
      children: i
    }
  ) : null;
});
d0.displayName = "FormMessage";
const sl = "Dialog", [cl, ll] = Ve(sl), [f0, tt] = cl(sl), p0 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: i = !0 } = e, s = I(null), c = I(null), [l = !1, d] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ h(f0, {
    scope: t,
    triggerRef: s,
    contentRef: c,
    contentId: Ke(),
    titleId: Ke(),
    descriptionId: Ke(),
    open: l,
    onOpenChange: d,
    onOpenToggle: ae(
      () => d(
        (u) => !u
      ),
      [
        d
      ]
    ),
    modal: i
  }, n);
}, m0 = "DialogTrigger", v0 = /* @__PURE__ */ D((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = tt(m0, n), a = ue(t, o.triggerRef);
  return /* @__PURE__ */ h(oe.button, _({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Oa(o.open)
  }, r, {
    ref: a,
    onClick: U(e.onClick, o.onOpenToggle)
  }));
}), ul = "DialogPortal", [h0, dl] = cl(ul, {
  forceMount: void 0
}), g0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = tt(ul, t);
  return /* @__PURE__ */ h(h0, {
    scope: t,
    forceMount: n
  }, Fe.map(
    r,
    (i) => /* @__PURE__ */ h(Re, {
      present: n || a.open
    }, /* @__PURE__ */ h(Lr, {
      asChild: !0,
      container: o
    }, i))
  ));
}, jo = "DialogOverlay", b0 = /* @__PURE__ */ D((e, t) => {
  const n = dl(jo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = tt(jo, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ h(Re, {
    present: r || a.open
  }, /* @__PURE__ */ h($0, _({}, o, {
    ref: t
  }))) : null;
}), $0 = /* @__PURE__ */ D((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = tt(jo, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ h(jr, {
      as: ot,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ h(oe.div, _({
      "data-state": Oa(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), sn = "DialogContent", x0 = /* @__PURE__ */ D((e, t) => {
  const n = dl(sn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = tt(sn, e.__scopeDialog);
  return /* @__PURE__ */ h(Re, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ h(y0, _({}, o, {
    ref: t
  })) : /* @__PURE__ */ h(w0, _({}, o, {
    ref: t
  })));
}), y0 = /* @__PURE__ */ D((e, t) => {
  const n = tt(sn, e.__scopeDialog), r = I(null), o = ue(t, n.contentRef, r);
  return z(() => {
    const a = r.current;
    if (a)
      return Yn(a);
  }, []), /* @__PURE__ */ h(fl, _({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: U(e.onCloseAutoFocus, (a) => {
      var i;
      a.preventDefault(), (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: U(e.onPointerDownOutside, (a) => {
      const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
      (i.button === 2 || s) && a.preventDefault();
    }),
    onFocusOutside: U(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), w0 = /* @__PURE__ */ D((e, t) => {
  const n = tt(sn, e.__scopeDialog), r = I(!1), o = I(!1);
  return /* @__PURE__ */ h(fl, _({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, a), !a.defaultPrevented) {
        var s;
        r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var i, s;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = a.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), fl = /* @__PURE__ */ D((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = tt(sn, n), c = I(null), l = ue(t, c);
  return Rr(), /* @__PURE__ */ h(ht, null, /* @__PURE__ */ h(kr, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ h(Tr, _({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": Oa(s.open)
  }, i, {
    ref: l,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
}), pl = "DialogTitle", C0 = /* @__PURE__ */ D((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = tt(pl, n);
  return /* @__PURE__ */ h(oe.h2, _({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), _0 = "DialogDescription", S0 = /* @__PURE__ */ D((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = tt(_0, n);
  return /* @__PURE__ */ h(oe.p, _({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), E0 = "DialogClose", P0 = /* @__PURE__ */ D((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = tt(E0, n);
  return /* @__PURE__ */ h(oe.button, _({
    type: "button"
  }, r, {
    ref: t,
    onClick: U(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function Oa(e) {
  return e ? "open" : "closed";
}
const D0 = "DialogTitleWarning", [N0, A1] = sv(D0, {
  contentName: sn,
  titleName: pl,
  docsSlug: "dialog"
}), Ma = p0, Ta = v0, Hn = g0, Vn = b0, zn = x0, Gn = C0, Kn = S0, Xn = P0, O0 = Ma, I1 = Ta, ml = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ w.exports.jsx(Hn, { className: R(e), ...n, children: /* @__PURE__ */ w.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
ml.displayName = Hn.displayName;
const vl = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Vn,
  {
    ref: n,
    className: R(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      e
    ),
    ...t
  }
));
vl.displayName = Vn.displayName;
const hl = $.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ w.exports.jsxs(ml, { children: [
  /* @__PURE__ */ w.exports.jsx(vl, {}),
  /* @__PURE__ */ w.exports.jsxs(
    zn,
    {
      ref: r,
      className: R(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        e
      ),
      ...n,
      children: [
        t,
        !n["aria-modal"] && /* @__PURE__ */ w.exports.jsxs(Xn, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ w.exports.jsx(ds, { className: "h-4 w-4" }),
          /* @__PURE__ */ w.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
hl.displayName = zn.displayName;
const M0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
M0.displayName = "DialogHeader";
const T0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
T0.displayName = "DialogFooter";
const R0 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Gn,
  {
    ref: n,
    className: R(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
R0.displayName = Gn.displayName;
const k0 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Kn,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
k0.displayName = Kn.displayName;
const Pn = $.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ w.exports.jsx(
    "input",
    {
      type: t,
      className: R(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Pn.displayName = "InputUI";
const F1 = ({ children: e, id: t, register: n, messageErrors: r = null, label: o, classNameContainer: a, inputErrors: i = {}, ...s }) => {
  var d, u;
  const [c, l] = B(!1);
  return s.type === "password" ? /* @__PURE__ */ w.exports.jsxs("div", { className: R("w-full", a), children: [
    o && /* @__PURE__ */ w.exports.jsxs(_r, { htmlFor: t, children: [
      o,
      " "
    ] }),
    r && t && !s.readOnly ? r[t] && /* @__PURE__ */ w.exports.jsxs("span", { className: "text-sm text-red-500", children: [
      "* ",
      (d = r[t]) == null ? void 0 : d.message
    ] }) : null,
    /* @__PURE__ */ w.exports.jsx("div", { className: "my-2" }),
    n ? /* @__PURE__ */ w.exports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ w.exports.jsx(
        Pn,
        {
          ...s,
          ...n(t, i),
          className: R("pr-14", s.className),
          type: c ? "text" : "password"
        }
      ),
      /* @__PURE__ */ w.exports.jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => l((f) => !f),
          className: "absolute right-4 mr-0.5 top-2",
          children: c ? /* @__PURE__ */ w.exports.jsx(ri, {}) : /* @__PURE__ */ w.exports.jsx(oi, {})
        }
      )
    ] }) : /* @__PURE__ */ w.exports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ w.exports.jsx(
        Pn,
        {
          ...s,
          className: R("pr-14", s.className),
          type: c ? "text" : "password"
        }
      ),
      /* @__PURE__ */ w.exports.jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => l((f) => !f),
          className: "absolute right-4 mr-0.5 top-2",
          children: c ? /* @__PURE__ */ w.exports.jsx(ri, {}) : /* @__PURE__ */ w.exports.jsx(oi, {})
        }
      )
    ] })
  ] }) : /* @__PURE__ */ w.exports.jsxs("div", { className: R("w-full", a), children: [
    o && /* @__PURE__ */ w.exports.jsxs(_r, { htmlFor: t, children: [
      o,
      " "
    ] }),
    r && t && !s.readOnly ? r[t] && /* @__PURE__ */ w.exports.jsxs("span", { className: "text-sm text-red-500", children: [
      "* ",
      (u = r[t]) == null ? void 0 : u.message
    ] }) : null,
    /* @__PURE__ */ w.exports.jsx("div", { className: "my-2" }),
    n ? /* @__PURE__ */ w.exports.jsx(Pn, { ...n(t, i), ...s }) : /* @__PURE__ */ w.exports.jsx(Pn, { ...s })
  ] });
}, gl = "Popover", [bl, L1] = Ve(gl, [
  mn
]), Ra = mn(), [A0, hn] = bl(gl), I0 = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: i = !1 } = e, s = Ra(t), c = I(null), [l, d] = B(!1), [u = !1, f] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ h(Fr, s, /* @__PURE__ */ h(A0, {
    scope: t,
    contentId: Ke(),
    triggerRef: c,
    open: u,
    onOpenChange: f,
    onOpenToggle: ae(
      () => f(
        (p) => !p
      ),
      [
        f
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: ae(
      () => d(!0),
      []
    ),
    onCustomAnchorRemove: ae(
      () => d(!1),
      []
    ),
    modal: i
  }, n));
}, F0 = "PopoverTrigger", L0 = /* @__PURE__ */ D((e, t) => {
  const { __scopePopover: n, ...r } = e, o = hn(F0, n), a = Ra(n), i = ue(t, o.triggerRef), s = /* @__PURE__ */ h(oe.button, _({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": yl(o.open)
  }, r, {
    ref: i,
    onClick: U(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? s : /* @__PURE__ */ h(xa, _({
    asChild: !0
  }, a), s);
}), $l = "PopoverPortal", [W0, j0] = bl($l, {
  forceMount: void 0
}), U0 = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = hn($l, t);
  return /* @__PURE__ */ h(W0, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ h(Re, {
    present: n || a.open
  }, /* @__PURE__ */ h(Lr, {
    asChild: !0,
    container: o
  }, r)));
}, In = "PopoverContent", Y0 = /* @__PURE__ */ D((e, t) => {
  const n = j0(In, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = hn(In, e.__scopePopover);
  return /* @__PURE__ */ h(Re, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ h(B0, _({}, o, {
    ref: t
  })) : /* @__PURE__ */ h(H0, _({}, o, {
    ref: t
  })));
}), B0 = /* @__PURE__ */ D((e, t) => {
  const n = hn(In, e.__scopePopover), r = I(null), o = ue(t, r), a = I(!1);
  return z(() => {
    const i = r.current;
    if (i)
      return Yn(i);
  }, []), /* @__PURE__ */ h(jr, {
    as: ot,
    allowPinchZoom: !0
  }, /* @__PURE__ */ h(xl, _({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: U(e.onCloseAutoFocus, (i) => {
      var s;
      i.preventDefault(), a.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: U(e.onPointerDownOutside, (i) => {
      const s = i.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, l = s.button === 2 || c;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: U(
      e.onFocusOutside,
      (i) => i.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), H0 = /* @__PURE__ */ D((e, t) => {
  const n = hn(In, e.__scopePopover), r = I(!1), o = I(!1);
  return /* @__PURE__ */ h(xl, _({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, a), !a.defaultPrevented) {
        var s;
        r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var i, s;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = a.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), xl = /* @__PURE__ */ D((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: i, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: d, ...u } = e, f = hn(In, n), p = Ra(n);
  return Rr(), /* @__PURE__ */ h(kr, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ h(Tr, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onInteractOutside: d,
    onEscapeKeyDown: s,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => f.onOpenChange(!1)
  }, /* @__PURE__ */ h(ya, _({
    "data-state": yl(f.open),
    role: "dialog",
    id: f.contentId
  }, p, u, {
    ref: t,
    style: {
      ...u.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function yl(e) {
  return e ? "open" : "closed";
}
const V0 = I0, z0 = L0, G0 = U0, wl = Y0, W1 = V0, j1 = z0, K0 = $.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ w.exports.jsx(G0, { children: /* @__PURE__ */ w.exports.jsx(
  wl,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: R(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
K0.displayName = wl.displayName;
const X0 = $.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
    "textarea",
    {
      className: R(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
X0.displayName = "TextareaUI";
function Uo(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Cl(e) {
  const t = I({
    value: e,
    previous: e
  });
  return Je(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const q0 = /* @__PURE__ */ D((e, t) => /* @__PURE__ */ h(oe.span, _({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), Z0 = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], Q0 = [
  " ",
  "Enter"
], zr = "Select", [Gr, ka, J0] = pa(zr), [gn, U1] = Ve(zr, [
  J0,
  mn
]), Aa = mn(), [e$, Yt] = gn(zr), [t$, n$] = gn(zr), r$ = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: i, defaultValue: s, onValueChange: c, dir: l, name: d, autoComplete: u, disabled: f, required: p } = e, v = Aa(t), [m, g] = B(null), [b, y] = B(null), [C, E] = B(!1), N = Mr(l), [O = !1, T] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [k, L] = vt({
    prop: i,
    defaultProp: s,
    onChange: c
  }), q = I(null), K = m ? Boolean(m.closest("form")) : !0, [H, Z] = B(/* @__PURE__ */ new Set()), Q = Array.from(H).map(
    (V) => V.props.value
  ).join(";");
  return /* @__PURE__ */ h(Fr, v, /* @__PURE__ */ h(e$, {
    required: p,
    scope: t,
    trigger: m,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: y,
    valueNodeHasChildren: C,
    onValueNodeHasChildrenChange: E,
    contentId: Ke(),
    value: k,
    onValueChange: L,
    open: O,
    onOpenChange: T,
    dir: N,
    triggerPointerDownPosRef: q,
    disabled: f
  }, /* @__PURE__ */ h(Gr.Provider, {
    scope: t
  }, /* @__PURE__ */ h(t$, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: ae((V) => {
      Z(
        (G) => new Set(G).add(V)
      );
    }, []),
    onNativeOptionRemove: ae((V) => {
      Z((G) => {
        const F = new Set(G);
        return F.delete(V), F;
      });
    }, [])
  }, n)), K ? /* @__PURE__ */ h(El, {
    key: Q,
    "aria-hidden": !0,
    required: p,
    tabIndex: -1,
    name: d,
    autoComplete: u,
    value: k,
    onChange: (V) => L(V.target.value),
    disabled: f
  }, k === void 0 ? /* @__PURE__ */ h("option", {
    value: ""
  }) : null, Array.from(H)) : null));
}, o$ = "SelectTrigger", a$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Aa(n), i = Yt(o$, n), s = i.disabled || r, c = ue(t, i.onTriggerChange), l = ka(n), [d, u, f] = Pl((v) => {
    const m = l().filter(
      (y) => !y.disabled
    ), g = m.find(
      (y) => y.value === i.value
    ), b = Dl(m, v, g);
    b !== void 0 && i.onValueChange(b.value);
  }), p = () => {
    s || (i.onOpenChange(!0), f());
  };
  return /* @__PURE__ */ h(xa, _({
    asChild: !0
  }, a), /* @__PURE__ */ h(oe.button, _({
    type: "button",
    role: "combobox",
    "aria-controls": i.contentId,
    "aria-expanded": i.open,
    "aria-required": i.required,
    "aria-autocomplete": "none",
    dir: i.dir,
    "data-state": i.open ? "open" : "closed",
    disabled: s,
    "data-disabled": s ? "" : void 0,
    "data-placeholder": i.value === void 0 ? "" : void 0
  }, o, {
    ref: c,
    onClick: U(o.onClick, (v) => {
      v.currentTarget.focus();
    }),
    onPointerDown: U(o.onPointerDown, (v) => {
      const m = v.target;
      m.hasPointerCapture(v.pointerId) && m.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && (p(), i.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      }, v.preventDefault());
    }),
    onKeyDown: U(o.onKeyDown, (v) => {
      const m = d.current !== "";
      !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && u(v.key), !(m && v.key === " ") && Z0.includes(v.key) && (p(), v.preventDefault());
    })
  })));
}), i$ = "SelectValue", s$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: i, ...s } = e, c = Yt(i$, n), { onValueNodeHasChildrenChange: l } = c, d = a !== void 0, u = ue(t, c.onValueNodeChange);
  return Be(() => {
    l(d);
  }, [
    l,
    d
  ]), /* @__PURE__ */ h(oe.span, _({}, s, {
    ref: u,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && i !== void 0 ? i : a);
}), c$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ h(oe.span, _({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), l$ = (e) => /* @__PURE__ */ h(Lr, _({
  asChild: !0
}, e)), cn = "SelectContent", u$ = /* @__PURE__ */ D((e, t) => {
  const n = Yt(cn, e.__scopeSelect), [r, o] = B();
  if (Be(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ ts(/* @__PURE__ */ h(_l, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ h(Gr.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ h("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ h(d$, _({}, e, {
    ref: t
  }));
}), ut = 10, [_l, Kr] = gn(cn), d$ = /* @__PURE__ */ D((e, t) => {
  const {
    __scopeSelect: n,
    position: r = "item-aligned",
    onCloseAutoFocus: o,
    onEscapeKeyDown: a,
    onPointerDownOutside: i,
    side: s,
    sideOffset: c,
    align: l,
    alignOffset: d,
    arrowPadding: u,
    collisionBoundary: f,
    collisionPadding: p,
    sticky: v,
    hideWhenDetached: m,
    avoidCollisions: g,
    //
    ...b
  } = e, y = Yt(cn, n), [C, E] = B(null), [N, O] = B(null), T = ue(
    t,
    (J) => E(J)
  ), [k, L] = B(null), [q, K] = B(null), H = ka(n), [Z, Q] = B(!1), V = I(!1);
  z(() => {
    if (C)
      return Yn(C);
  }, [
    C
  ]), Rr();
  const G = ae((J) => {
    const [se, ...ge] = H().map(
      (pe) => pe.ref.current
    ), [fe] = ge.slice(-1), he = document.activeElement;
    for (const pe of J)
      if (pe === he || (pe == null || pe.scrollIntoView({
        block: "nearest"
      }), pe === se && N && (N.scrollTop = 0), pe === fe && N && (N.scrollTop = N.scrollHeight), pe == null || pe.focus(), document.activeElement !== he))
        return;
  }, [
    H,
    N
  ]), F = ae(
    () => G([
      k,
      C
    ]),
    [
      G,
      k,
      C
    ]
  );
  z(() => {
    Z && F();
  }, [
    Z,
    F
  ]);
  const { onOpenChange: A, triggerPointerDownPosRef: S } = y;
  z(() => {
    if (C) {
      let J = {
        x: 0,
        y: 0
      };
      const se = (fe) => {
        var he, pe, Oe, De;
        J = {
          x: Math.abs(Math.round(fe.pageX) - ((he = (pe = S.current) === null || pe === void 0 ? void 0 : pe.x) !== null && he !== void 0 ? he : 0)),
          y: Math.abs(Math.round(fe.pageY) - ((Oe = (De = S.current) === null || De === void 0 ? void 0 : De.y) !== null && Oe !== void 0 ? Oe : 0))
        };
      }, ge = (fe) => {
        J.x <= 10 && J.y <= 10 ? fe.preventDefault() : C.contains(fe.target) || A(!1), document.removeEventListener("pointermove", se), S.current = null;
      };
      return S.current !== null && (document.addEventListener("pointermove", se), document.addEventListener("pointerup", ge, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", se), document.removeEventListener("pointerup", ge, {
          capture: !0
        });
      };
    }
  }, [
    C,
    A,
    S
  ]), z(() => {
    const J = () => A(!1);
    return window.addEventListener("blur", J), window.addEventListener("resize", J), () => {
      window.removeEventListener("blur", J), window.removeEventListener("resize", J);
    };
  }, [
    A
  ]);
  const [W, X] = Pl((J) => {
    const se = H().filter(
      (he) => !he.disabled
    ), ge = se.find(
      (he) => he.ref.current === document.activeElement
    ), fe = Dl(se, J, ge);
    fe && setTimeout(
      () => fe.ref.current.focus()
    );
  }), Y = ae((J, se, ge) => {
    const fe = !V.current && !ge;
    (y.value !== void 0 && y.value === se || fe) && (L(J), fe && (V.current = !0));
  }, [
    y.value
  ]), te = ae(
    () => C == null ? void 0 : C.focus(),
    [
      C
    ]
  ), ve = ae((J, se, ge) => {
    const fe = !V.current && !ge;
    (y.value !== void 0 && y.value === se || fe) && K(J);
  }, [
    y.value
  ]), we = r === "popper" ? Li : f$, Ee = we === Li ? {
    side: s,
    sideOffset: c,
    align: l,
    alignOffset: d,
    arrowPadding: u,
    collisionBoundary: f,
    collisionPadding: p,
    sticky: v,
    hideWhenDetached: m,
    avoidCollisions: g
  } : {};
  return /* @__PURE__ */ h(_l, {
    scope: n,
    content: C,
    viewport: N,
    onViewportChange: O,
    itemRefCallback: Y,
    selectedItem: k,
    onItemLeave: te,
    itemTextRefCallback: ve,
    focusSelectedItem: F,
    selectedItemText: q,
    position: r,
    isPositioned: Z,
    searchRef: W
  }, /* @__PURE__ */ h(jr, {
    as: ot,
    allowPinchZoom: !0
  }, /* @__PURE__ */ h(kr, {
    asChild: !0,
    trapped: y.open,
    onMountAutoFocus: (J) => {
      J.preventDefault();
    },
    onUnmountAutoFocus: U(o, (J) => {
      var se;
      (se = y.trigger) === null || se === void 0 || se.focus({
        preventScroll: !0
      }), J.preventDefault();
    })
  }, /* @__PURE__ */ h(Tr, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: i,
    onFocusOutside: (J) => J.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ h(we, _({
    role: "listbox",
    id: y.contentId,
    "data-state": y.open ? "open" : "closed",
    dir: y.dir,
    onContextMenu: (J) => J.preventDefault()
  }, b, Ee, {
    onPlaced: () => Q(!0),
    ref: T,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...b.style
    },
    onKeyDown: U(b.onKeyDown, (J) => {
      const se = J.ctrlKey || J.altKey || J.metaKey;
      if (J.key === "Tab" && J.preventDefault(), !se && J.key.length === 1 && X(J.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(J.key)) {
        let fe = H().filter(
          (he) => !he.disabled
        ).map(
          (he) => he.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(J.key) && (fe = fe.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(J.key)) {
          const he = J.target, pe = fe.indexOf(he);
          fe = fe.slice(pe + 1);
        }
        setTimeout(
          () => G(fe)
        ), J.preventDefault();
      }
    })
  }))))));
}), f$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Yt(cn, n), i = Kr(cn, n), [s, c] = B(null), [l, d] = B(null), u = ue(
    t,
    (T) => d(T)
  ), f = ka(n), p = I(!1), v = I(!0), { viewport: m, selectedItem: g, selectedItemText: b, focusSelectedItem: y } = i, C = ae(() => {
    if (a.trigger && a.valueNode && s && l && m && g && b) {
      const T = a.trigger.getBoundingClientRect(), k = l.getBoundingClientRect(), L = a.valueNode.getBoundingClientRect(), q = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const he = q.left - k.left, pe = L.left - he, Oe = T.left - pe, De = T.width + Oe, nt = Math.max(De, k.width), rt = window.innerWidth - ut, yt = Uo(pe, [
          ut,
          rt - nt
        ]);
        s.style.minWidth = De + "px", s.style.left = yt + "px";
      } else {
        const he = k.right - q.right, pe = window.innerWidth - L.right - he, Oe = window.innerWidth - T.right - pe, De = T.width + Oe, nt = Math.max(De, k.width), rt = window.innerWidth - ut, yt = Uo(pe, [
          ut,
          rt - nt
        ]);
        s.style.minWidth = De + "px", s.style.right = yt + "px";
      }
      const K = f(), H = window.innerHeight - ut * 2, Z = m.scrollHeight, Q = window.getComputedStyle(l), V = parseInt(Q.borderTopWidth, 10), G = parseInt(Q.paddingTop, 10), F = parseInt(Q.borderBottomWidth, 10), A = parseInt(Q.paddingBottom, 10), S = V + G + Z + A + F, W = Math.min(g.offsetHeight * 5, S), X = window.getComputedStyle(m), Y = parseInt(X.paddingTop, 10), te = parseInt(X.paddingBottom, 10), ve = T.top + T.height / 2 - ut, we = H - ve, Ee = g.offsetHeight / 2, J = g.offsetTop + Ee, se = V + G + J, ge = S - se;
      if (se <= ve) {
        const he = g === K[K.length - 1].ref.current;
        s.style.bottom = "0px";
        const pe = l.clientHeight - m.offsetTop - m.offsetHeight, Oe = Math.max(we, Ee + (he ? te : 0) + pe + F), De = se + Oe;
        s.style.height = De + "px";
      } else {
        const he = g === K[0].ref.current;
        s.style.top = "0px";
        const Oe = Math.max(ve, V + m.offsetTop + (he ? Y : 0) + Ee) + ge;
        s.style.height = Oe + "px", m.scrollTop = se - ve + m.offsetTop;
      }
      s.style.margin = `${ut}px 0`, s.style.minHeight = W + "px", s.style.maxHeight = H + "px", r == null || r(), requestAnimationFrame(
        () => p.current = !0
      );
    }
  }, [
    f,
    a.trigger,
    a.valueNode,
    s,
    l,
    m,
    g,
    b,
    a.dir,
    r
  ]);
  Be(
    () => C(),
    [
      C
    ]
  );
  const [E, N] = B();
  Be(() => {
    l && N(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const O = ae((T) => {
    T && v.current === !0 && (C(), y == null || y(), v.current = !1);
  }, [
    C,
    y
  ]);
  return /* @__PURE__ */ h(p$, {
    scope: n,
    contentWrapper: s,
    shouldExpandOnScrollRef: p,
    onScrollButtonChange: O
  }, /* @__PURE__ */ h("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: E
    }
  }, /* @__PURE__ */ h(oe.div, _({}, o, {
    ref: u,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), Li = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = ut, ...a } = e, i = Aa(n);
  return /* @__PURE__ */ h(ya, _({}, i, a, {
    ref: t,
    align: r,
    collisionPadding: o,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...a.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), [p$, m$] = gn(cn, {}), Wi = "SelectViewport", v$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Kr(Wi, n), a = m$(Wi, n), i = ue(t, o.onViewportChange), s = I(0);
  return /* @__PURE__ */ h(ht, null, /* @__PURE__ */ h("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ h(Gr.Slot, {
    scope: n
  }, /* @__PURE__ */ h(oe.div, _({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, r, {
    ref: i,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...r.style
    },
    onScroll: U(r.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: u } = a;
      if (u != null && u.current && d) {
        const f = Math.abs(s.current - l.scrollTop);
        if (f > 0) {
          const p = window.innerHeight - ut * 2, v = parseFloat(d.style.minHeight), m = parseFloat(d.style.height), g = Math.max(v, m);
          if (g < p) {
            const b = g + f, y = Math.min(p, b), C = b - y;
            d.style.height = y + "px", d.style.bottom === "0px" && (l.scrollTop = C > 0 ? C : 0, d.style.justifyContent = "flex-end");
          }
        }
      }
      s.current = l.scrollTop;
    })
  }))));
}), h$ = "SelectGroup", [g$, b$] = gn(h$), $$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Ke();
  return /* @__PURE__ */ h(g$, {
    scope: n,
    id: o
  }, /* @__PURE__ */ h(oe.div, _({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), x$ = "SelectLabel", y$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = b$(x$, n);
  return /* @__PURE__ */ h(oe.div, _({
    id: o.id
  }, r, {
    ref: t
  }));
}), Yo = "SelectItem", [w$, Sl] = gn(Yo), C$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...i } = e, s = Yt(Yo, n), c = Kr(Yo, n), l = s.value === r, [d, u] = B(a ?? ""), [f, p] = B(!1), v = ue(t, (b) => {
    var y;
    return (y = c.itemRefCallback) === null || y === void 0 ? void 0 : y.call(c, b, r, o);
  }), m = Ke(), g = () => {
    o || (s.onValueChange(r), s.onOpenChange(!1));
  };
  return /* @__PURE__ */ h(w$, {
    scope: n,
    value: r,
    disabled: o,
    textId: m,
    isSelected: l,
    onItemTextChange: ae((b) => {
      u((y) => {
        var C;
        return y || ((C = b == null ? void 0 : b.textContent) !== null && C !== void 0 ? C : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ h(Gr.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: d
  }, /* @__PURE__ */ h(oe.div, _({
    role: "option",
    "aria-labelledby": m,
    "data-highlighted": f ? "" : void 0,
    "aria-selected": l && f,
    "data-state": l ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, i, {
    ref: v,
    onFocus: U(
      i.onFocus,
      () => p(!0)
    ),
    onBlur: U(
      i.onBlur,
      () => p(!1)
    ),
    onPointerUp: U(i.onPointerUp, g),
    onPointerMove: U(i.onPointerMove, (b) => {
      if (o) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      } else
        b.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: U(i.onPointerLeave, (b) => {
      if (b.currentTarget === document.activeElement) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      }
    }),
    onKeyDown: U(i.onKeyDown, (b) => {
      var y;
      ((y = c.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && b.key === " " || (Q0.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), lr = "SelectItemText", _$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, i = Yt(lr, n), s = Kr(lr, n), c = Sl(lr, n), l = n$(lr, n), [d, u] = B(null), f = ue(
    t,
    (b) => u(b),
    c.onItemTextChange,
    (b) => {
      var y;
      return (y = s.itemTextRefCallback) === null || y === void 0 ? void 0 : y.call(s, b, c.value, c.disabled);
    }
  ), p = d == null ? void 0 : d.textContent, v = Je(
    () => /* @__PURE__ */ h("option", {
      key: c.value,
      value: c.value,
      disabled: c.disabled
    }, p),
    [
      c.disabled,
      c.value,
      p
    ]
  ), { onNativeOptionAdd: m, onNativeOptionRemove: g } = l;
  return Be(() => (m(v), () => g(v)), [
    m,
    g,
    v
  ]), /* @__PURE__ */ h(ht, null, /* @__PURE__ */ h(oe.span, _({
    id: c.textId
  }, a, {
    ref: f
  })), c.isSelected && i.valueNode && !i.valueNodeHasChildren ? /* @__PURE__ */ ts(a.children, i.valueNode) : null);
}), S$ = "SelectItemIndicator", E$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return Sl(S$, n).isSelected ? /* @__PURE__ */ h(oe.span, _({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), P$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ h(oe.div, _({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), El = /* @__PURE__ */ D((e, t) => {
  const { value: n, ...r } = e, o = I(null), a = ue(t, o), i = Cl(n);
  return z(() => {
    const s = o.current, c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(c, "value").set;
    if (i !== n && d) {
      const u = new Event("change", {
        bubbles: !0
      });
      d.call(s, n), s.dispatchEvent(u);
    }
  }, [
    i,
    n
  ]), /* @__PURE__ */ h(q0, {
    asChild: !0
  }, /* @__PURE__ */ h("select", _({}, r, {
    ref: a,
    defaultValue: n
  })));
});
El.displayName = "BubbleSelect";
function Pl(e) {
  const t = Ce(e), n = I(""), r = I(0), o = ae((i) => {
    const s = n.current + i;
    t(s), function c(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(s);
  }, [
    t
  ]), a = ae(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return z(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function Dl(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = D$(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter(
    (l) => l !== n
  ));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function D$(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const N$ = r$, Nl = a$, O$ = s$, M$ = c$, T$ = l$, Ol = u$, R$ = v$, k$ = $$, Ml = y$, Tl = C$, A$ = _$, I$ = E$, Rl = P$, Y1 = N$, B1 = k$, H1 = O$, F$ = $.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ w.exports.jsxs(
  Nl,
  {
    ref: r,
    className: R(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ w.exports.jsx(M$, { asChild: !0, children: /* @__PURE__ */ w.exports.jsx(zd, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
F$.displayName = Nl.displayName;
const L$ = $.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ w.exports.jsx(T$, { children: /* @__PURE__ */ w.exports.jsx(
  Ol,
  {
    ref: o,
    className: R(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ w.exports.jsx(
      R$,
      {
        className: R(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
L$.displayName = Ol.displayName;
const W$ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Ml,
  {
    ref: n,
    className: R("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
W$.displayName = Ml.displayName;
const j$ = $.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ w.exports.jsxs(
  Tl,
  {
    ref: r,
    className: R(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ w.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ w.exports.jsx(I$, { children: /* @__PURE__ */ w.exports.jsx(Nr, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ w.exports.jsx(A$, { children: t })
    ]
  }
));
j$.displayName = Tl.displayName;
const U$ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Rl,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
U$.displayName = Rl.displayName;
const Y$ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  "div",
  {
    ref: n,
    className: R(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Y$.displayName = "Card";
const B$ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  "div",
  {
    ref: n,
    className: R("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
B$.displayName = "CardHeader";
const H$ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  "h3",
  {
    ref: n,
    className: R(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
H$.displayName = "CardTitle";
const V$ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  "p",
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
V$.displayName = "CardDescription";
const z$ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx("div", { ref: n, className: R("p-6 pt-0", e), ...t }));
z$.displayName = "CardContent";
const G$ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  "div",
  {
    ref: n,
    className: R(" flex items-center p-6 pt-0", e),
    ...t
  }
));
G$.displayName = "CardFooter";
const kl = "Checkbox", [K$, V1] = Ve(kl), [X$, q$] = K$(kl), Z$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: i, disabled: s, value: c = "on", onCheckedChange: l, ...d } = e, [u, f] = B(null), p = ue(
    t,
    (C) => f(C)
  ), v = I(!1), m = u ? Boolean(u.closest("form")) : !0, [g = !1, b] = vt({
    prop: o,
    defaultProp: a,
    onChange: l
  }), y = I(g);
  return z(() => {
    const C = u == null ? void 0 : u.form;
    if (C) {
      const E = () => b(y.current);
      return C.addEventListener("reset", E), () => C.removeEventListener("reset", E);
    }
  }, [
    u,
    b
  ]), /* @__PURE__ */ h(X$, {
    scope: n,
    state: g,
    disabled: s
  }, /* @__PURE__ */ h(oe.button, _({
    type: "button",
    role: "checkbox",
    "aria-checked": At(g) ? "mixed" : g,
    "aria-required": i,
    "data-state": Al(g),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: c
  }, d, {
    ref: p,
    onKeyDown: U(e.onKeyDown, (C) => {
      C.key === "Enter" && C.preventDefault();
    }),
    onClick: U(e.onClick, (C) => {
      b(
        (E) => At(E) ? !0 : !E
      ), m && (v.current = C.isPropagationStopped(), v.current || C.stopPropagation());
    })
  })), m && /* @__PURE__ */ h(ex, {
    control: u,
    bubbles: !v.current,
    name: r,
    value: c,
    checked: g,
    required: i,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), Q$ = "CheckboxIndicator", J$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = q$(Q$, n);
  return /* @__PURE__ */ h(Re, {
    present: r || At(a.state) || a.state === !0
  }, /* @__PURE__ */ h(oe.span, _({
    "data-state": Al(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), ex = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = I(null), i = Cl(n), s = zs(t);
  return z(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== n && u) {
      const f = new Event("click", {
        bubbles: r
      });
      c.indeterminate = At(n), u.call(c, At(n) ? !1 : n), c.dispatchEvent(f);
    }
  }, [
    i,
    n,
    r
  ]), /* @__PURE__ */ h("input", _({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: At(n) ? !1 : n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...s,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function At(e) {
  return e === "indeterminate";
}
function Al(e) {
  return At(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Il = Z$, tx = J$, nx = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Il,
  {
    ref: n,
    className: R(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ w.exports.jsx(
      tx,
      {
        className: R("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ w.exports.jsx(Nr, { className: "h-4 w-4" })
      }
    )
  }
));
nx.displayName = Il.displayName;
const Fl = "DropdownMenu", [rx, z1] = Ve(Fl, [
  Yr
]), Ae = Yr(), [ox, Ll] = rx(Fl), ax = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: i, modal: s = !0 } = e, c = Ae(t), l = I(null), [d = !1, u] = vt({
    prop: o,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ h(ox, {
    scope: t,
    triggerId: Ke(),
    triggerRef: l,
    contentId: Ke(),
    open: d,
    onOpenChange: u,
    onOpenToggle: ae(
      () => u(
        (f) => !f
      ),
      [
        u
      ]
    ),
    modal: s
  }, /* @__PURE__ */ h(Ec, _({}, c, {
    open: d,
    onOpenChange: u,
    dir: r,
    modal: s
  }), n));
}, ix = "DropdownMenuTrigger", sx = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Ll(ix, n), i = Ae(n);
  return /* @__PURE__ */ h(Pc, _({
    asChild: !0
  }, i), /* @__PURE__ */ h(oe.button, _({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: Pr(t, a.triggerRef),
    onPointerDown: U(e.onPointerDown, (s) => {
      !r && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
    }),
    onKeyDown: U(e.onKeyDown, (s) => {
      r || ([
        "Enter",
        " "
      ].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(s.key) && s.preventDefault());
    })
  })));
}), cx = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Ae(t);
  return /* @__PURE__ */ h(Dc, _({}, r, n));
}, lx = "DropdownMenuContent", ux = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ll(lx, n), a = Ae(n), i = I(!1);
  return /* @__PURE__ */ h(Nc, _({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: U(e.onCloseAutoFocus, (s) => {
      var c;
      i.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), i.current = !1, s.preventDefault();
    }),
    onInteractOutside: U(e.onInteractOutside, (s) => {
      const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || l;
      (!o.modal || d) && (i.current = !0);
    }),
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), dx = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Oc, _({}, o, r, {
    ref: t
  }));
}), fx = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Mc, _({}, o, r, {
    ref: t
  }));
}), px = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Tc, _({}, o, r, {
    ref: t
  }));
}), mx = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Rc, _({}, o, r, {
    ref: t
  }));
}), vx = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(kc, _({}, o, r, {
    ref: t
  }));
}), hx = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Ac, _({}, o, r, {
    ref: t
  }));
}), gx = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Ic, _({}, o, r, {
    ref: t
  }));
}), bx = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Fc, _({}, o, r, {
    ref: t
  }));
}), $x = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = Ae(t), [s = !1, c] = vt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ h(Lc, _({}, i, {
    open: s,
    onOpenChange: c
  }), n);
}, xx = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Wc, _({}, o, r, {
    ref: t
  }));
}), yx = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(jc, _({}, o, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), wx = ax, Cx = sx, Wl = cx, jl = ux, _x = dx, Ul = fx, Yl = px, Bl = mx, Sx = vx, Hl = hx, Vl = gx, zl = bx, Ex = $x, Gl = xx, Kl = yx, G1 = wx, K1 = Cx, X1 = _x, q1 = Wl, Z1 = Ex, Q1 = Sx, Px = $.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ w.exports.jsxs(
  Gl,
  {
    ref: o,
    className: R(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ w.exports.jsx(ta, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Px.displayName = Gl.displayName;
const Dx = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Kl,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
Dx.displayName = Kl.displayName;
const Nx = $.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ w.exports.jsx(Wl, { children: /* @__PURE__ */ w.exports.jsx(
  jl,
  {
    ref: r,
    sideOffset: t,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Nx.displayName = jl.displayName;
const Ox = $.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ w.exports.jsx(
  Yl,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Ox.displayName = Yl.displayName;
const Mx = $.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ w.exports.jsxs(
  Bl,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ w.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ w.exports.jsx(Vl, { children: /* @__PURE__ */ w.exports.jsx(Nr, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Mx.displayName = Bl.displayName;
const Tx = $.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ w.exports.jsxs(
  Hl,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ w.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ w.exports.jsx(Vl, { children: /* @__PURE__ */ w.exports.jsx(us, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Tx.displayName = Hl.displayName;
const Rx = $.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ w.exports.jsx(
  Ul,
  {
    ref: r,
    className: R(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Rx.displayName = Ul.displayName;
const kx = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  zl,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
kx.displayName = zl.displayName;
const Ax = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w.exports.jsx(
  "span",
  {
    className: R("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
Ax.displayName = "DropdownMenuShortcut";
const Bo = "horizontal", Ix = [
  "horizontal",
  "vertical"
], Xl = /* @__PURE__ */ D((e, t) => {
  const { decorative: n, orientation: r = Bo, ...o } = e, a = ql(r) ? r : Bo, s = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ h(oe.div, _({
    "data-orientation": a
  }, s, o, {
    ref: t
  }));
});
Xl.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !ql(r) ? new Error(Fx(o, n)) : null;
  }
};
function Fx(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Bo}\`.`;
}
function ql(e) {
  return Ix.includes(e);
}
const Zl = Xl, Lx = $.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ w.exports.jsx(
    Zl,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: R(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
Lx.displayName = Zl.displayName;
function nn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Wx(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ql(...e) {
  return (t) => e.forEach(
    (n) => Wx(n, t)
  );
}
function qn(...e) {
  return ae(Ql(...e), e);
}
function jx(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = /* @__PURE__ */ Te(i), c = n.length;
    n = [
      ...n,
      i
    ];
    function l(u) {
      const { scope: f, children: p, ...v } = u, m = (f == null ? void 0 : f[e][c]) || s, g = Je(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ h(m.Provider, {
        value: g
      }, p);
    }
    function d(u, f) {
      const p = (f == null ? void 0 : f[e][c]) || s, v = He(p);
      if (v)
        return v;
      if (i !== void 0)
        return i;
      throw new Error(`\`${u}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [
      l,
      d
    ];
  }
  const o = () => {
    const a = n.map((i) => /* @__PURE__ */ Te(i));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || a;
      return Je(
        () => ({
          [`__scope${e}`]: {
            ...s,
            [e]: c
          }
        }),
        [
          s,
          c
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    Ux(o, ...t)
  ];
}
function Ux(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const i = r.reduce((s, { useScope: c, scopeName: l }) => {
        const u = c(a)[`__scope${l}`];
        return {
          ...s,
          ...u
        };
      }, {});
      return Je(
        () => ({
          [`__scope${t.scopeName}`]: i
        }),
        [
          i
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const Ho = Boolean(globalThis == null ? void 0 : globalThis.document) ? Qo : () => {
}, Yx = $["useId".toString()] || (() => {
});
let Bx = 0;
function $o(e) {
  const [t, n] = $.useState(Yx());
  return Ho(() => {
    e || n(
      (r) => r ?? String(Bx++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function Lt(e) {
  const t = I(e);
  return z(() => {
    t.current = e;
  }), Je(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Hx({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Vx({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : r, s = Lt(n), c = ae((l) => {
    if (a) {
      const u = typeof l == "function" ? l(e) : l;
      u !== e && s(u);
    } else
      o(l);
  }, [
    a,
    e,
    o,
    s
  ]);
  return [
    i,
    c
  ];
}
function Vx({ defaultProp: e, onChange: t }) {
  const n = B(e), [r] = n, o = I(r), a = Lt(t);
  return z(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Ia = /* @__PURE__ */ D((e, t) => {
  const { children: n, ...r } = e, o = Fe.toArray(n), a = o.find(Gx);
  if (a) {
    const i = a.props.children, s = o.map((c) => c === a ? Fe.count(i) > 1 ? Fe.only(null) : /* @__PURE__ */ Et(i) ? i.props.children : null : c);
    return /* @__PURE__ */ h(Vo, _({}, r, {
      ref: t
    }), /* @__PURE__ */ Et(i) ? /* @__PURE__ */ dn(i, void 0, s) : null);
  }
  return /* @__PURE__ */ h(Vo, _({}, r, {
    ref: t
  }), n);
});
Ia.displayName = "Slot";
const Vo = /* @__PURE__ */ D((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Et(n) ? /* @__PURE__ */ dn(n, {
    ...Kx(r, n.props),
    ref: Ql(t, n.ref)
  }) : Fe.count(n) > 1 ? Fe.only(null) : null;
});
Vo.displayName = "SlotClone";
const zx = ({ children: e }) => /* @__PURE__ */ h(ht, null, e);
function Gx(e) {
  return /* @__PURE__ */ Et(e) && e.type === zx;
}
function Kx(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? n[r] = (...s) => {
      a == null || a(...s), o == null || o(...s);
    } : r === "style" ? n[r] = {
      ...o,
      ...a
    } : r === "className" && (n[r] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const Xx = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Xr = Xx.reduce((e, t) => {
  const n = /* @__PURE__ */ D((r, o) => {
    const { asChild: a, ...i } = r, s = a ? Ia : t;
    return z(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ h(s, _({}, i, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function qx(e, t) {
  e && Er(
    () => e.dispatchEvent(t)
  );
}
function Zx(e) {
  const t = Lt(e);
  z(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const zo = "dismissableLayer.update", Qx = "dismissableLayer.pointerDownOutside", Jx = "dismissableLayer.focusOutside";
let ji;
const ey = /* @__PURE__ */ Te({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ty = /* @__PURE__ */ D((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: i, onDismiss: s, ...c } = e, l = He(ey), [d, u] = B(null), [, f] = B({}), p = qn(
    t,
    (O) => u(O)
  ), v = Array.from(l.layers), [m] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = v.indexOf(m), b = d ? v.indexOf(d) : -1, y = l.layersWithOutsidePointerEventsDisabled.size > 0, C = b >= g, E = ny((O) => {
    const T = O.target, k = [
      ...l.branches
    ].some(
      (L) => L.contains(T)
    );
    !C || k || (o == null || o(O), i == null || i(O), O.defaultPrevented || s == null || s());
  }), N = ry((O) => {
    const T = O.target;
    [
      ...l.branches
    ].some(
      (L) => L.contains(T)
    ) || (a == null || a(O), i == null || i(O), O.defaultPrevented || s == null || s());
  });
  return Zx((O) => {
    b === l.layers.size - 1 && (r == null || r(O), !O.defaultPrevented && s && (O.preventDefault(), s()));
  }), z(() => {
    if (d)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (ji = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), Ui(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = ji);
      };
  }, [
    d,
    n,
    l
  ]), z(() => () => {
    d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), Ui());
  }, [
    d,
    l
  ]), z(() => {
    const O = () => f({});
    return document.addEventListener(zo, O), () => document.removeEventListener(zo, O);
  }, []), /* @__PURE__ */ h(Xr.div, _({}, c, {
    ref: p,
    style: {
      pointerEvents: y ? C ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: nn(e.onFocusCapture, N.onFocusCapture),
    onBlurCapture: nn(e.onBlurCapture, N.onBlurCapture),
    onPointerDownCapture: nn(e.onPointerDownCapture, E.onPointerDownCapture)
  }));
});
function ny(e) {
  const t = Lt(e), n = I(!1), r = I(() => {
  });
  return z(() => {
    const o = (i) => {
      if (i.target && !n.current) {
        let c = function() {
          Jl(Qx, t, s, {
            discrete: !0
          });
        };
        const s = {
          originalEvent: i
        };
        i.pointerType === "touch" ? (document.removeEventListener("click", r.current), r.current = c, document.addEventListener("click", r.current, {
          once: !0
        })) : c();
      }
      n.current = !1;
    }, a = window.setTimeout(() => {
      document.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(a), document.removeEventListener("pointerdown", o), document.removeEventListener("click", r.current);
    };
  }, [
    t
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function ry(e) {
  const t = Lt(e), n = I(!1);
  return z(() => {
    const r = (o) => {
      o.target && !n.current && Jl(Jx, t, {
        originalEvent: o
      }, {
        discrete: !1
      });
    };
    return document.addEventListener("focusin", r), () => document.removeEventListener("focusin", r);
  }, [
    t
  ]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Ui() {
  const e = new CustomEvent(zo);
  document.dispatchEvent(e);
}
function Jl(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? qx(o, a) : o.dispatchEvent(a);
}
const xo = "focusScope.autoFocusOnMount", yo = "focusScope.autoFocusOnUnmount", Yi = {
  bubbles: !1,
  cancelable: !0
}, oy = /* @__PURE__ */ D((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...i } = e, [s, c] = B(null), l = Lt(o), d = Lt(a), u = I(null), f = qn(
    t,
    (m) => c(m)
  ), p = I({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  z(() => {
    if (r) {
      let m = function(b) {
        if (p.paused || !s)
          return;
        const y = b.target;
        s.contains(y) ? u.current = y : Rt(u.current, {
          select: !0
        });
      }, g = function(b) {
        p.paused || !s || s.contains(b.relatedTarget) || Rt(u.current, {
          select: !0
        });
      };
      return document.addEventListener("focusin", m), document.addEventListener("focusout", g), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", g);
      };
    }
  }, [
    r,
    s,
    p.paused
  ]), z(() => {
    if (s) {
      Hi.add(p);
      const m = document.activeElement;
      if (!s.contains(m)) {
        const b = new CustomEvent(xo, Yi);
        s.addEventListener(xo, l), s.dispatchEvent(b), b.defaultPrevented || (ay(uy(eu(s)), {
          select: !0
        }), document.activeElement === m && Rt(s));
      }
      return () => {
        s.removeEventListener(xo, l), setTimeout(() => {
          const b = new CustomEvent(yo, Yi);
          s.addEventListener(yo, d), s.dispatchEvent(b), b.defaultPrevented || Rt(m ?? document.body, {
            select: !0
          }), s.removeEventListener(yo, d), Hi.remove(p);
        }, 0);
      };
    }
  }, [
    s,
    l,
    d,
    p
  ]);
  const v = ae((m) => {
    if (!n && !r || p.paused)
      return;
    const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, b = document.activeElement;
    if (g && b) {
      const y = m.currentTarget, [C, E] = iy(y);
      C && E ? !m.shiftKey && b === E ? (m.preventDefault(), n && Rt(C, {
        select: !0
      })) : m.shiftKey && b === C && (m.preventDefault(), n && Rt(E, {
        select: !0
      })) : b === y && m.preventDefault();
    }
  }, [
    n,
    r,
    p.paused
  ]);
  return /* @__PURE__ */ h(Xr.div, _({
    tabIndex: -1
  }, i, {
    ref: f,
    onKeyDown: v
  }));
});
function ay(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Rt(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function iy(e) {
  const t = eu(e), n = Bi(t, e), r = Bi(t.reverse(), e);
  return [
    n,
    r
  ];
}
function eu(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Bi(e, t) {
  for (const n of e)
    if (!sy(n, {
      upTo: t
    }))
      return n;
}
function sy(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function cy(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Rt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && cy(e) && t && e.select();
  }
}
const Hi = ly();
function ly() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Vi(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Vi(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Vi(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function uy(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const dy = /* @__PURE__ */ D((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ es.createPortal(/* @__PURE__ */ h(Xr.div, _({}, o, {
    ref: t
  })), r) : null;
});
function fy(e, t) {
  return Jo((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const qr = (e) => {
  const { present: t, children: n } = e, r = py(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Fe.only(n), a = qn(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ dn(o, {
    ref: a
  }) : null;
};
qr.displayName = "Presence";
function py(e) {
  const [t, n] = B(), r = I({}), o = I(e), a = I("none"), i = e ? "mounted" : "unmounted", [s, c] = fy(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return z(() => {
    const l = ur(r.current);
    a.current = s === "mounted" ? l : "none";
  }, [
    s
  ]), Ho(() => {
    const l = r.current, d = o.current;
    if (d !== e) {
      const f = a.current, p = ur(l);
      e ? c("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(d && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), Ho(() => {
    if (t) {
      const l = (u) => {
        const p = ur(r.current).includes(u.animationName);
        u.target === t && p && Er(
          () => c("ANIMATION_END")
        );
      }, d = (u) => {
        u.target === t && (a.current = ur(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(s),
    ref: ae((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function ur(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let wo = 0;
function my() {
  z(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : zi()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : zi()), wo++, () => {
      wo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), wo--;
    };
  }, []);
}
function zi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var tu = oc(), Co = function() {
}, Zr = $.forwardRef(function(e, t) {
  var n = $.useRef(null), r = $.useState({
    onScrollCapture: Co,
    onWheelCapture: Co,
    onTouchMoveCapture: Co
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, u = e.shards, f = e.sideCar, p = e.noIsolation, v = e.inert, m = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = Ca(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), C = f, E = rc([n, t]), N = Ne(Ne({}, y), o);
  return $.createElement(
    $.Fragment,
    null,
    d && $.createElement(C, { sideCar: tu, removeScrollBar: l, shards: u, noIsolation: p, inert: v, setCallbacks: a, allowPinchZoom: !!m, lockRef: n }),
    i ? $.cloneElement($.Children.only(s), Ne(Ne({}, N), { ref: E })) : $.createElement(b, Ne({}, N, { className: c, ref: E }), s)
  );
});
Zr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Zr.classNames = {
  fullWidth: Nn,
  zeroRight: Dn
};
var Go = !1;
if (typeof window < "u")
  try {
    var dr = Object.defineProperty({}, "passive", {
      get: function() {
        return Go = !0, !0;
      }
    });
    window.addEventListener("test", dr, dr), window.removeEventListener("test", dr, dr);
  } catch {
    Go = !1;
  }
var Qt = Go ? { passive: !1 } : !1, vy = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, hy = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, Gi = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = nu(e, n);
    if (r) {
      var o = ru(e, n), a = o[1], i = o[2];
      if (a > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, gy = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, by = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, nu = function(e, t) {
  return e === "v" ? vy(t) : hy(t);
}, ru = function(e, t) {
  return e === "v" ? gy(t) : by(t);
}, $y = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, xy = function(e, t, n, r, o) {
  var a = $y(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, c = t.contains(s), l = !1, d = i > 0, u = 0, f = 0;
  do {
    var p = ru(e, s), v = p[0], m = p[1], g = p[2], b = m - g - a * v;
    (v || b) && nu(e, s) && (u += b, f += v), s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (d && (o && u === 0 || !o && i > u) || !d && (o && f === 0 || !o && -i > f)) && (l = !0), l;
}, fr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ki = function(e) {
  return [e.deltaX, e.deltaY];
}, Xi = function(e) {
  return e && "current" in e ? e.current : e;
}, yy = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, wy = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Cy = 0, Jt = [];
function _y(e) {
  var t = $.useRef([]), n = $.useRef([0, 0]), r = $.useRef(), o = $.useState(Cy++)[0], a = $.useState(function() {
    return _a();
  })[0], i = $.useRef(e);
  $.useEffect(function() {
    i.current = e;
  }, [e]), $.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = nc([e.lockRef.current], (e.shards || []).map(Xi), !0).filter(Boolean);
      return m.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = $.useCallback(function(m, g) {
    if ("touches" in m && m.touches.length === 2)
      return !i.current.allowPinchZoom;
    var b = fr(m), y = n.current, C = "deltaX" in m ? m.deltaX : y[0] - b[0], E = "deltaY" in m ? m.deltaY : y[1] - b[1], N, O = m.target, T = Math.abs(C) > Math.abs(E) ? "h" : "v";
    if ("touches" in m && T === "h" && O.type === "range")
      return !1;
    var k = Gi(T, O);
    if (!k)
      return !0;
    if (k ? N = T : (N = T === "v" ? "h" : "v", k = Gi(T, O)), !k)
      return !1;
    if (!r.current && "changedTouches" in m && (C || E) && (r.current = N), !N)
      return !0;
    var L = r.current || N;
    return xy(L, g, m, L === "h" ? C : E, !0);
  }, []), c = $.useCallback(function(m) {
    var g = m;
    if (!(!Jt.length || Jt[Jt.length - 1] !== a)) {
      var b = "deltaY" in g ? Ki(g) : fr(g), y = t.current.filter(function(N) {
        return N.name === g.type && N.target === g.target && yy(N.delta, b);
      })[0];
      if (y && y.should) {
        g.preventDefault();
        return;
      }
      if (!y) {
        var C = (i.current.shards || []).map(Xi).filter(Boolean).filter(function(N) {
          return N.contains(g.target);
        }), E = C.length > 0 ? s(g, C[0]) : !i.current.noIsolation;
        E && g.preventDefault();
      }
    }
  }, []), l = $.useCallback(function(m, g, b, y) {
    var C = { name: m, delta: g, target: b, should: y };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== C;
      });
    }, 1);
  }, []), d = $.useCallback(function(m) {
    n.current = fr(m), r.current = void 0;
  }, []), u = $.useCallback(function(m) {
    l(m.type, Ki(m), m.target, s(m, e.lockRef.current));
  }, []), f = $.useCallback(function(m) {
    l(m.type, fr(m), m.target, s(m, e.lockRef.current));
  }, []);
  $.useEffect(function() {
    return Jt.push(a), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, Qt), document.addEventListener("touchmove", c, Qt), document.addEventListener("touchstart", d, Qt), function() {
      Jt = Jt.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", c, Qt), document.removeEventListener("touchmove", c, Qt), document.removeEventListener("touchstart", d, Qt);
    };
  }, []);
  var p = e.removeScrollBar, v = e.inert;
  return $.createElement(
    $.Fragment,
    null,
    v ? $.createElement(a, { styles: wy(o) }) : null,
    p ? $.createElement(cc, { gapMode: "margin" }) : null
  );
}
const Sy = ic(tu, _y);
var ou = $.forwardRef(function(e, t) {
  return $.createElement(Zr, Ne({}, e, { ref: t, sideCar: Sy }));
});
ou.classNames = Zr.classNames;
const Ey = ou, au = "Dialog", [iu, J1] = jx(au), [Py, Bt] = iu(au), Dy = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: i = !0 } = e, s = I(null), c = I(null), [l = !1, d] = Hx({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ h(Py, {
    scope: t,
    triggerRef: s,
    contentRef: c,
    contentId: $o(),
    titleId: $o(),
    descriptionId: $o(),
    open: l,
    onOpenChange: d,
    onOpenToggle: ae(
      () => d(
        (u) => !u
      ),
      [
        d
      ]
    ),
    modal: i
  }, n);
}, su = "DialogPortal", [Ny, cu] = iu(su, {
  forceMount: void 0
}), Oy = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Bt(su, t);
  return /* @__PURE__ */ h(Ny, {
    scope: t,
    forceMount: n
  }, Fe.map(
    r,
    (i) => /* @__PURE__ */ h(qr, {
      present: n || a.open
    }, /* @__PURE__ */ h(dy, {
      asChild: !0,
      container: o
    }, i))
  ));
}, Ko = "DialogOverlay", My = /* @__PURE__ */ D((e, t) => {
  const n = cu(Ko, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Bt(Ko, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ h(qr, {
    present: r || a.open
  }, /* @__PURE__ */ h(Ty, _({}, o, {
    ref: t
  }))) : null;
}), Ty = /* @__PURE__ */ D((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Bt(Ko, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ h(Ey, {
      as: Ia,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ h(Xr.div, _({
      "data-state": uu(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Fn = "DialogContent", Ry = /* @__PURE__ */ D((e, t) => {
  const n = cu(Fn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Bt(Fn, e.__scopeDialog);
  return /* @__PURE__ */ h(qr, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ h(ky, _({}, o, {
    ref: t
  })) : /* @__PURE__ */ h(Ay, _({}, o, {
    ref: t
  })));
}), ky = /* @__PURE__ */ D((e, t) => {
  const n = Bt(Fn, e.__scopeDialog), r = I(null), o = qn(t, n.contentRef, r);
  return z(() => {
    const a = r.current;
    if (a)
      return Yn(a);
  }, []), /* @__PURE__ */ h(lu, _({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: nn(e.onCloseAutoFocus, (a) => {
      var i;
      a.preventDefault(), (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: nn(e.onPointerDownOutside, (a) => {
      const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
      (i.button === 2 || s) && a.preventDefault();
    }),
    onFocusOutside: nn(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), Ay = /* @__PURE__ */ D((e, t) => {
  const n = Bt(Fn, e.__scopeDialog), r = I(!1);
  return /* @__PURE__ */ h(lu, _({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (o) => {
      var a;
      if ((a = e.onCloseAutoFocus) === null || a === void 0 || a.call(e, o), !o.defaultPrevented) {
        var i;
        r.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus(), o.preventDefault();
      }
      r.current = !1;
    },
    onInteractOutside: (o) => {
      var a, i;
      (a = e.onInteractOutside) === null || a === void 0 || a.call(e, o), o.defaultPrevented || (r.current = !0);
      const s = o.target;
      ((i = n.triggerRef.current) === null || i === void 0 ? void 0 : i.contains(s)) && o.preventDefault();
    }
  }));
}), lu = /* @__PURE__ */ D((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = Bt(Fn, n), c = I(null), l = qn(t, c);
  return my(), /* @__PURE__ */ h(ht, null, /* @__PURE__ */ h(oy, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ h(ty, _({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": uu(s.open)
  }, i, {
    ref: l,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
});
function uu(e) {
  return e ? "open" : "closed";
}
const Iy = Dy, Fy = Oy, Ly = My, Wy = Ry;
var qi = 1, jy = 0.9, Uy = 0.3, _o = 0.1, Yy = 0, So = 0.999, By = 0.9999, Hy = 0.99, Zi = /[\\\/\-_+.# \t"@\[\(\{&]/, Vy = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function Xo(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? qi : Hy;
  for (var i = r.charAt(a), s = n.indexOf(i, o), c = 0, l, d, u; s >= 0; )
    l = Xo(e, t, n, r, s + 1, a + 1), l > c && (s === o ? l *= qi : Zi.test(e.charAt(s - 1)) ? (l *= jy, u = e.slice(o, s - 1).match(Vy), u && o > 0 && (l *= Math.pow(So, u.length))) : Zi.test(e.slice(o, s - 1)) ? (l *= Yy, o > 0 && (l *= Math.pow(So, s - o))) : (l *= Uy, o > 0 && (l *= Math.pow(So, s - o))), e.charAt(s) !== t.charAt(a) && (l *= By)), l < _o && n.charAt(s - 1) === r.charAt(a + 1) && n.charAt(s - 1) !== r.charAt(a) && (d = Xo(e, t, n, r, s + 1, a + 2), d * _o > l && (l = d * _o)), l > c && (c = l), s = n.indexOf(i, s + 1);
  return c;
}
function zy(e, t) {
  return Xo(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var Gy = zy, Ky = '[cmdk-list-sizer=""]', En = '[cmdk-group=""]', Eo = '[cmdk-group-items=""]', Xy = '[cmdk-group-heading=""]', du = '[cmdk-item=""]', Qi = `${du}:not([aria-disabled="true"])`, qo = "cmdk-item-select", St = "data-value", qy = (e, t) => Gy(e, t), fu = $.createContext(void 0), Zn = () => $.useContext(fu), pu = $.createContext(void 0), Fa = () => $.useContext(pu), mu = $.createContext(void 0), vu = $.forwardRef((e, t) => {
  let n = $.useRef(null), r = en(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = en(() => /* @__PURE__ */ new Set()), a = en(() => /* @__PURE__ */ new Map()), i = en(() => /* @__PURE__ */ new Map()), s = en(() => /* @__PURE__ */ new Set()), c = hu(e), { label: l, children: d, value: u, onValueChange: f, filter: p, shouldFilter: v, ...m } = e, g = $.useId(), b = $.useId(), y = $.useId(), C = sw();
  bn(() => {
    if (u !== void 0) {
      let S = u.trim().toLowerCase();
      r.current.value = S, C(6, q), E.emit();
    }
  }, [u]);
  let E = $.useMemo(() => ({ subscribe: (S) => (s.current.add(S), () => s.current.delete(S)), snapshot: () => r.current, setState: (S, W, X) => {
    var Y, te, ve;
    if (!Object.is(r.current[S], W)) {
      if (r.current[S] = W, S === "search")
        L(), T(), C(1, k);
      else if (S === "value")
        if (((Y = c.current) == null ? void 0 : Y.value) !== void 0) {
          (ve = (te = c.current).onValueChange) == null || ve.call(te, W);
          return;
        } else
          X || C(5, q);
      E.emit();
    }
  }, emit: () => {
    s.current.forEach((S) => S());
  } }), []), N = $.useMemo(() => ({ value: (S, W) => {
    W !== i.current.get(S) && (i.current.set(S, W), r.current.filtered.items.set(S, O(W)), C(2, () => {
      T(), E.emit();
    }));
  }, item: (S, W) => (o.current.add(S), W && (a.current.has(W) ? a.current.get(W).add(S) : a.current.set(W, /* @__PURE__ */ new Set([S]))), C(3, () => {
    L(), T(), r.current.value || k(), E.emit();
  }), () => {
    i.current.delete(S), o.current.delete(S), r.current.filtered.items.delete(S), C(4, () => {
      L(), k(), E.emit();
    });
  }), group: (S) => (a.current.has(S) || a.current.set(S, /* @__PURE__ */ new Set()), () => {
    i.current.delete(S), a.current.delete(S);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: y, labelId: b }), []);
  function O(S) {
    var W;
    let X = ((W = c.current) == null ? void 0 : W.filter) ?? qy;
    return S ? X(S, r.current.search) : 0;
  }
  function T() {
    if (!n.current || !r.current.search || c.current.shouldFilter === !1)
      return;
    let S = r.current.filtered.items, W = [];
    r.current.filtered.groups.forEach((Y) => {
      let te = a.current.get(Y), ve = 0;
      te.forEach((we) => {
        let Ee = S.get(we);
        ve = Math.max(Ee, ve);
      }), W.push([Y, ve]);
    });
    let X = n.current.querySelector(Ky);
    H().sort((Y, te) => {
      let ve = Y.getAttribute(St), we = te.getAttribute(St);
      return (S.get(we) ?? 0) - (S.get(ve) ?? 0);
    }).forEach((Y) => {
      let te = Y.closest(Eo);
      te ? te.appendChild(Y.parentElement === te ? Y : Y.closest(`${Eo} > *`)) : X.appendChild(Y.parentElement === X ? Y : Y.closest(`${Eo} > *`));
    }), W.sort((Y, te) => te[1] - Y[1]).forEach((Y) => {
      let te = n.current.querySelector(`${En}[${St}="${Y[0]}"]`);
      te == null || te.parentElement.appendChild(te);
    });
  }
  function k() {
    let S = H().find((X) => !X.ariaDisabled), W = S == null ? void 0 : S.getAttribute(St);
    E.setState("value", W || void 0);
  }
  function L() {
    if (!r.current.search || c.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let S = 0;
    for (let W of o.current) {
      let X = i.current.get(W), Y = O(X);
      r.current.filtered.items.set(W, Y), Y > 0 && S++;
    }
    for (let [W, X] of a.current)
      for (let Y of X)
        if (r.current.filtered.items.get(Y) > 0) {
          r.current.filtered.groups.add(W);
          break;
        }
    r.current.filtered.count = S;
  }
  function q() {
    var S, W, X;
    let Y = K();
    Y && (((S = Y.parentElement) == null ? void 0 : S.firstChild) === Y && ((X = (W = Y.closest(En)) == null ? void 0 : W.querySelector(Xy)) == null || X.scrollIntoView({ block: "nearest" })), Y.scrollIntoView({ block: "nearest" }));
  }
  function K() {
    return n.current.querySelector(`${du}[aria-selected="true"]`);
  }
  function H() {
    return Array.from(n.current.querySelectorAll(Qi));
  }
  function Z(S) {
    let W = H()[S];
    W && E.setState("value", W.getAttribute(St));
  }
  function Q(S) {
    var W;
    let X = K(), Y = H(), te = Y.findIndex((we) => we === X), ve = Y[te + S];
    (W = c.current) != null && W.loop && (ve = te + S < 0 ? Y[Y.length - 1] : te + S === Y.length ? Y[0] : Y[te + S]), ve && E.setState("value", ve.getAttribute(St));
  }
  function V(S) {
    let W = K(), X = W == null ? void 0 : W.closest(En), Y;
    for (; X && !Y; )
      X = S > 0 ? aw(X, En) : iw(X, En), Y = X == null ? void 0 : X.querySelector(Qi);
    Y ? E.setState("value", Y.getAttribute(St)) : Q(S);
  }
  let G = () => Z(H().length - 1), F = (S) => {
    S.preventDefault(), S.metaKey ? G() : S.altKey ? V(1) : Q(1);
  }, A = (S) => {
    S.preventDefault(), S.metaKey ? Z(0) : S.altKey ? V(-1) : Q(-1);
  };
  return $.createElement("div", { ref: Qn([n, t]), ...m, "cmdk-root": "", onKeyDown: (S) => {
    var W;
    if ((W = m.onKeyDown) == null || W.call(m, S), !S.defaultPrevented)
      switch (S.key) {
        case "n":
        case "j": {
          S.ctrlKey && F(S);
          break;
        }
        case "ArrowDown": {
          F(S);
          break;
        }
        case "p":
        case "k": {
          S.ctrlKey && A(S);
          break;
        }
        case "ArrowUp": {
          A(S);
          break;
        }
        case "Home": {
          S.preventDefault(), Z(0);
          break;
        }
        case "End": {
          S.preventDefault(), G();
          break;
        }
        case "Enter": {
          S.preventDefault();
          let X = K();
          if (X) {
            let Y = new Event(qo);
            X.dispatchEvent(Y);
          }
        }
      }
  } }, $.createElement("label", { "cmdk-label": "", htmlFor: N.inputId, id: N.labelId, style: cw }, l), $.createElement(pu.Provider, { value: E }, $.createElement(fu.Provider, { value: N }, d)));
}), Zy = $.forwardRef((e, t) => {
  let n = $.useId(), r = $.useRef(null), o = $.useContext(mu), a = Zn(), i = hu(e);
  bn(() => a.item(n, o), []);
  let s = gu(n, r, [e.value, e.children, r]), c = Fa(), l = ln((b) => b.value && b.value === s.current), d = ln((b) => a.filter() === !1 ? !0 : b.search ? b.filtered.items.get(n) > 0 : !0);
  $.useEffect(() => {
    let b = r.current;
    if (!(!b || e.disabled))
      return b.addEventListener(qo, u), () => b.removeEventListener(qo, u);
  }, [d, e.onSelect, e.disabled]);
  function u() {
    var b, y;
    (y = (b = i.current).onSelect) == null || y.call(b, s.current);
  }
  function f() {
    c.setState("value", s.current, !0);
  }
  if (!d)
    return null;
  let { disabled: p, value: v, onSelect: m, ...g } = e;
  return $.createElement("div", { ref: Qn([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": p || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: p ? void 0 : f, onClick: p ? void 0 : u }, e.children);
}), Qy = $.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = $.useId(), i = $.useRef(null), s = $.useRef(null), c = $.useId(), l = Zn(), d = ln((f) => l.filter() === !1 ? !0 : f.search ? f.filtered.groups.has(a) : !0);
  bn(() => l.group(a), []), gu(a, i, [e.value, e.heading, s]);
  let u = $.createElement(mu.Provider, { value: a }, r);
  return $.createElement("div", { ref: Qn([i, t]), ...o, "cmdk-group": "", role: "presentation", hidden: d ? void 0 : !0 }, n && $.createElement("div", { ref: s, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), $.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, u));
}), Jy = $.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = $.useRef(null), a = ln((i) => !i.search);
  return !n && !a ? null : $.createElement("div", { ref: Qn([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), ew = $.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Fa(), i = ln((c) => c.search), s = Zn();
  return $.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), $.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": s.listId, "aria-labelledby": s.labelId, id: s.inputId, type: "text", value: o ? e.value : i, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), tw = $.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = $.useRef(null), a = $.useRef(null), i = Zn();
  return $.useEffect(() => {
    if (a.current && o.current) {
      let s = a.current, c = o.current, l, d = new ResizeObserver(() => {
        l = requestAnimationFrame(() => {
          let u = s.getBoundingClientRect().height;
          c.style.setProperty("--cmdk-list-height", u.toFixed(1) + "px");
        });
      });
      return d.observe(s), () => {
        cancelAnimationFrame(l), d.unobserve(s);
      };
    }
  }, []), $.createElement("div", { ref: Qn([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: i.listId, "aria-labelledby": i.inputId }, $.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), nw = $.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return $.createElement(Iy, { open: n, onOpenChange: r }, $.createElement(Fy, { container: o }, $.createElement(Ly, { "cmdk-overlay": "" }), $.createElement(Wy, { "aria-label": e.label, "cmdk-dialog": "" }, $.createElement(vu, { ref: t, ...a }))));
}), rw = $.forwardRef((e, t) => {
  let n = $.useRef(!0), r = ln((o) => o.filtered.count === 0);
  return $.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : $.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), ow = $.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return $.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, $.createElement("div", { "aria-hidden": !0 }, r));
}), We = Object.assign(vu, { List: tw, Item: Zy, Input: ew, Group: Qy, Separator: Jy, Dialog: nw, Empty: rw, Loading: ow });
function aw(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function iw(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function hu(e) {
  let t = $.useRef(e);
  return bn(() => {
    t.current = e;
  }), t;
}
var bn = typeof window > "u" ? $.useEffect : $.useLayoutEffect;
function en(e) {
  let t = $.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Qn(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function ln(e) {
  let t = Fa(), n = () => e(t.snapshot());
  return $.useSyncExternalStore(t.subscribe, n, n);
}
function gu(e, t, n) {
  let r = $.useRef(), o = Zn();
  return bn(() => {
    var a;
    let i = (() => {
      var s;
      for (let c of n) {
        if (typeof c == "string")
          return c.trim().toLowerCase();
        if (typeof c == "object" && "current" in c && c.current)
          return (s = c.current.textContent) == null ? void 0 : s.trim().toLowerCase();
      }
    })();
    o.value(e, i), (a = t.current) == null || a.setAttribute(St, i), r.current = i;
  }), r;
}
var sw = () => {
  let [e, t] = $.useState(), n = en(() => /* @__PURE__ */ new Map());
  return bn(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, cw = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const bu = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  We,
  {
    ref: n,
    className: R(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
bu.displayName = We.displayName;
const eC = ({ children: e, ...t }) => /* @__PURE__ */ w.exports.jsx(O0, { ...t, children: /* @__PURE__ */ w.exports.jsx(hl, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ w.exports.jsx(bu, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), lw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ w.exports.jsx(Kd, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ w.exports.jsx(
    We.Input,
    {
      ref: n,
      className: R(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
lw.displayName = We.Input.displayName;
const uw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  We.List,
  {
    ref: n,
    className: R("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
uw.displayName = We.List.displayName;
const dw = $.forwardRef((e, t) => /* @__PURE__ */ w.exports.jsx(
  We.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
dw.displayName = We.Empty.displayName;
const fw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  We.Group,
  {
    ref: n,
    className: R(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
fw.displayName = We.Group.displayName;
const pw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  We.Separator,
  {
    ref: n,
    className: R("-mx-1 h-px bg-border", e),
    ...t
  }
));
pw.displayName = We.Separator.displayName;
const mw = $.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ w.exports.jsx(
  We.Item,
  {
    ref: r,
    onClick: t,
    className: R(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n
  }
));
mw.displayName = We.Item.displayName;
const vw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w.exports.jsx(
  "span",
  {
    className: R(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
vw.displayName = "CommandShortcut";
const hw = /* @__PURE__ */ D((e, t) => {
  const { ratio: n = 1, style: r, ...o } = e;
  return /* @__PURE__ */ h("div", {
    style: {
      // ensures inner element is contained
      position: "relative",
      // ensures padding bottom trick maths works
      width: "100%",
      paddingBottom: `${100 / n}%`
    },
    "data-radix-aspect-ratio-wrapper": ""
  }, /* @__PURE__ */ h(oe.div, _({}, o, {
    ref: t,
    style: {
      ...r,
      // ensures children expand in ratio
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  })));
}), gw = hw, tC = gw;
function bw(e, t) {
  return Jo((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const $u = "ScrollArea", [xu, nC] = Ve($u), [$w, qe] = xu($u), xw = /* @__PURE__ */ D((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...i } = e, [s, c] = B(null), [l, d] = B(null), [u, f] = B(null), [p, v] = B(null), [m, g] = B(null), [b, y] = B(0), [C, E] = B(0), [N, O] = B(!1), [T, k] = B(!1), L = ue(
    t,
    (K) => c(K)
  ), q = Mr(o);
  return /* @__PURE__ */ h($w, {
    scope: n,
    type: r,
    dir: q,
    scrollHideDelay: a,
    scrollArea: s,
    viewport: l,
    onViewportChange: d,
    content: u,
    onContentChange: f,
    scrollbarX: p,
    onScrollbarXChange: v,
    scrollbarXEnabled: N,
    onScrollbarXEnabledChange: O,
    scrollbarY: m,
    onScrollbarYChange: g,
    scrollbarYEnabled: T,
    onScrollbarYEnabledChange: k,
    onCornerWidthChange: y,
    onCornerHeightChange: E
  }, /* @__PURE__ */ h(oe.div, _({
    dir: q
  }, i, {
    ref: L,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: b + "px",
      ["--radix-scroll-area-corner-height"]: C + "px",
      ...e.style
    }
  })));
}), yw = "ScrollAreaViewport", ww = /* @__PURE__ */ D((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = qe(yw, n), i = I(null), s = ue(t, i, a.onViewportChange);
  return /* @__PURE__ */ h(ht, null, /* @__PURE__ */ h("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ h(oe.div, _({
    "data-radix-scroll-area-viewport": ""
  }, o, {
    ref: s,
    style: {
      /**
      * We don't support `visible` because the intention is to have at least one scrollbar
      * if this component is used and `visible` will behave like `auto` in that case
      * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
      *
      * We don't handle `auto` because the intention is for the native implementation
      * to be hidden if using this component. We just want to ensure the node is scrollable
      * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
      * the browser from having to work out whether to render native scrollbars or not,
      * we tell it to with the intention of hiding them in CSS.
      */
      overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
      ...e.style
    }
  }), /* @__PURE__ */ h("div", {
    ref: a.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, r)));
}), $t = "ScrollAreaScrollbar", yu = /* @__PURE__ */ D((e, t) => {
  const { forceMount: n, ...r } = e, o = qe($t, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
  return z(() => (s ? a(!0) : i(!0), () => {
    s ? a(!1) : i(!1);
  }), [
    s,
    a,
    i
  ]), o.type === "hover" ? /* @__PURE__ */ h(Cw, _({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ h(_w, _({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ h(wu, _({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ h(La, _({}, r, {
    ref: t
  })) : null;
}), Cw = /* @__PURE__ */ D((e, t) => {
  const { forceMount: n, ...r } = e, o = qe($t, e.__scopeScrollArea), [a, i] = B(!1);
  return z(() => {
    const s = o.scrollArea;
    let c = 0;
    if (s) {
      const l = () => {
        window.clearTimeout(c), i(!0);
      }, d = () => {
        c = window.setTimeout(
          () => i(!1),
          o.scrollHideDelay
        );
      };
      return s.addEventListener("pointerenter", l), s.addEventListener("pointerleave", d), () => {
        window.clearTimeout(c), s.removeEventListener("pointerenter", l), s.removeEventListener("pointerleave", d);
      };
    }
  }, [
    o.scrollArea,
    o.scrollHideDelay
  ]), /* @__PURE__ */ h(Re, {
    present: n || a
  }, /* @__PURE__ */ h(wu, _({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), _w = /* @__PURE__ */ D((e, t) => {
  const { forceMount: n, ...r } = e, o = qe($t, e.__scopeScrollArea), a = e.orientation === "horizontal", i = Jr(
    () => c("SCROLL_END"),
    100
  ), [s, c] = bw("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return z(() => {
    if (s === "idle") {
      const l = window.setTimeout(
        () => c("HIDE"),
        o.scrollHideDelay
      );
      return () => window.clearTimeout(l);
    }
  }, [
    s,
    o.scrollHideDelay,
    c
  ]), z(() => {
    const l = o.viewport, d = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let u = l[d];
      const f = () => {
        const p = l[d];
        u !== p && (c("SCROLL"), i()), u = p;
      };
      return l.addEventListener("scroll", f), () => l.removeEventListener("scroll", f);
    }
  }, [
    o.viewport,
    a,
    c,
    i
  ]), /* @__PURE__ */ h(Re, {
    present: n || s !== "hidden"
  }, /* @__PURE__ */ h(La, _({
    "data-state": s === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: U(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: U(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), wu = /* @__PURE__ */ D((e, t) => {
  const n = qe($t, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, i] = B(!1), s = e.orientation === "horizontal", c = Jr(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(s ? l : d);
    }
  }, 10);
  return un(n.viewport, c), un(n.content, c), /* @__PURE__ */ h(Re, {
    present: r || a
  }, /* @__PURE__ */ h(La, _({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), La = /* @__PURE__ */ D((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = qe($t, e.__scopeScrollArea), a = I(null), i = I(0), [s, c] = B({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = Eu(s.viewport, s.content), d = {
    ...r,
    sizes: s,
    onSizesChange: c,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (f) => a.current = f,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (f) => i.current = f
  };
  function u(f, p) {
    return Tw(f, i.current, s, p);
  }
  return n === "horizontal" ? /* @__PURE__ */ h(Sw, _({}, d, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const f = o.viewport.scrollLeft, p = Ji(f, s, o.dir);
        a.current.style.transform = `translate3d(${p}px, 0, 0)`;
      }
    },
    onWheelScroll: (f) => {
      o.viewport && (o.viewport.scrollLeft = f);
    },
    onDragScroll: (f) => {
      o.viewport && (o.viewport.scrollLeft = u(f, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ h(Ew, _({}, d, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const f = o.viewport.scrollTop, p = Ji(f, s);
        a.current.style.transform = `translate3d(0, ${p}px, 0)`;
      }
    },
    onWheelScroll: (f) => {
      o.viewport && (o.viewport.scrollTop = f);
    },
    onDragScroll: (f) => {
      o.viewport && (o.viewport.scrollTop = u(f));
    }
  })) : null;
}), Sw = /* @__PURE__ */ D((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = qe($t, e.__scopeScrollArea), [i, s] = B(), c = I(null), l = ue(t, c, a.onScrollbarXChange);
  return z(() => {
    c.current && s(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ h(_u, _({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: Qr(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
    onDragScroll: (d) => e.onDragScroll(d.x),
    onWheelScroll: (d, u) => {
      if (a.viewport) {
        const f = a.viewport.scrollLeft + d.deltaX;
        e.onWheelScroll(f), Du(f, u) && d.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && i && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: Sr(i.paddingLeft),
          paddingEnd: Sr(i.paddingRight)
        }
      });
    }
  }));
}), Ew = /* @__PURE__ */ D((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = qe($t, e.__scopeScrollArea), [i, s] = B(), c = I(null), l = ue(t, c, a.onScrollbarYChange);
  return z(() => {
    c.current && s(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ h(_u, _({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: Qr(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
    onDragScroll: (d) => e.onDragScroll(d.y),
    onWheelScroll: (d, u) => {
      if (a.viewport) {
        const f = a.viewport.scrollTop + d.deltaY;
        e.onWheelScroll(f), Du(f, u) && d.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && i && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: Sr(i.paddingTop),
          paddingEnd: Sr(i.paddingBottom)
        }
      });
    }
  }));
}), [Pw, Cu] = xu($t), _u = /* @__PURE__ */ D((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: i, onThumbPointerDown: s, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: d, onResize: u, ...f } = e, p = qe($t, n), [v, m] = B(null), g = ue(
    t,
    (L) => m(L)
  ), b = I(null), y = I(""), C = p.viewport, E = r.content - r.viewport, N = Ce(d), O = Ce(c), T = Jr(u, 10);
  function k(L) {
    if (b.current) {
      const q = L.clientX - b.current.left, K = L.clientY - b.current.top;
      l({
        x: q,
        y: K
      });
    }
  }
  return z(() => {
    const L = (q) => {
      const K = q.target;
      (v == null ? void 0 : v.contains(K)) && N(q, E);
    };
    return document.addEventListener("wheel", L, {
      passive: !1
    }), () => document.removeEventListener("wheel", L, {
      passive: !1
    });
  }, [
    C,
    v,
    E,
    N
  ]), z(O, [
    r,
    O
  ]), un(v, T), un(p.content, T), /* @__PURE__ */ h(Pw, {
    scope: n,
    scrollbar: v,
    hasThumb: o,
    onThumbChange: Ce(a),
    onThumbPointerUp: Ce(i),
    onThumbPositionChange: O,
    onThumbPointerDown: Ce(s)
  }, /* @__PURE__ */ h(oe.div, _({}, f, {
    ref: g,
    style: {
      position: "absolute",
      ...f.style
    },
    onPointerDown: U(e.onPointerDown, (L) => {
      L.button === 0 && (L.target.setPointerCapture(L.pointerId), b.current = v.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", k(L));
    }),
    onPointerMove: U(e.onPointerMove, k),
    onPointerUp: U(e.onPointerUp, (L) => {
      const q = L.target;
      q.hasPointerCapture(L.pointerId) && q.releasePointerCapture(L.pointerId), document.body.style.webkitUserSelect = y.current, b.current = null;
    })
  })));
}), Zo = "ScrollAreaThumb", Dw = /* @__PURE__ */ D((e, t) => {
  const { forceMount: n, ...r } = e, o = Cu(Zo, e.__scopeScrollArea);
  return /* @__PURE__ */ h(Re, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ h(Nw, _({
    ref: t
  }, r)));
}), Nw = /* @__PURE__ */ D((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = qe(Zo, n), i = Cu(Zo, n), { onThumbPositionChange: s } = i, c = ue(
    t,
    (u) => i.onThumbChange(u)
  ), l = I(), d = Jr(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return z(() => {
    const u = a.viewport;
    if (u) {
      const f = () => {
        if (d(), !l.current) {
          const p = Rw(u, s);
          l.current = p, s();
        }
      };
      return s(), u.addEventListener("scroll", f), () => u.removeEventListener("scroll", f);
    }
  }, [
    a.viewport,
    d,
    s
  ]), /* @__PURE__ */ h(oe.div, _({
    "data-state": i.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: U(e.onPointerDownCapture, (u) => {
      const p = u.target.getBoundingClientRect(), v = u.clientX - p.left, m = u.clientY - p.top;
      i.onThumbPointerDown({
        x: v,
        y: m
      });
    }),
    onPointerUp: U(e.onPointerUp, i.onThumbPointerUp)
  }));
}), Su = "ScrollAreaCorner", Ow = /* @__PURE__ */ D((e, t) => {
  const n = qe(Su, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ h(Mw, _({}, e, {
    ref: t
  })) : null;
}), Mw = /* @__PURE__ */ D((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = qe(Su, n), [a, i] = B(0), [s, c] = B(0), l = Boolean(a && s);
  return un(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) === null || d === void 0 ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), un(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) === null || d === void 0 ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), i(u);
  }), l ? /* @__PURE__ */ h(oe.div, _({}, r, {
    ref: t,
    style: {
      width: a,
      height: s,
      position: "absolute",
      right: o.dir === "ltr" ? 0 : void 0,
      left: o.dir === "rtl" ? 0 : void 0,
      bottom: 0,
      ...e.style
    }
  })) : null;
});
function Sr(e) {
  return e ? parseInt(e, 10) : 0;
}
function Eu(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Qr(e) {
  const t = Eu(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Tw(e, t, n, r = "ltr") {
  const o = Qr(n), a = o / 2, i = t || a, s = o - i, c = n.scrollbar.paddingStart + i, l = n.scrollbar.size - n.scrollbar.paddingEnd - s, d = n.content - n.viewport, u = r === "ltr" ? [
    0,
    d
  ] : [
    d * -1,
    0
  ];
  return Pu([
    c,
    l
  ], u)(e);
}
function Ji(e, t, n = "ltr") {
  const r = Qr(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - r, c = n === "ltr" ? [
    0,
    i
  ] : [
    i * -1,
    0
  ], l = Uo(e, c);
  return Pu([
    0,
    i
  ], [
    0,
    s
  ])(l);
}
function Pu(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Du(e, t) {
  return e > 0 && e < t;
}
const Rw = (e, t = () => {
}) => {
  let n = {
    left: e.scrollLeft,
    top: e.scrollTop
  }, r = 0;
  return function o() {
    const a = {
      left: e.scrollLeft,
      top: e.scrollTop
    }, i = n.left !== a.left, s = n.top !== a.top;
    (i || s) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function Jr(e, t) {
  const n = Ce(e), r = I(0);
  return z(
    () => () => window.clearTimeout(r.current),
    []
  ), ae(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function un(e, t) {
  const n = Ce(t);
  Be(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [
    e,
    n
  ]);
}
const Nu = xw, kw = ww, Aw = Ow, Iw = $.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ w.exports.jsxs(
  Nu,
  {
    ref: r,
    className: R("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ w.exports.jsx(kw, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ w.exports.jsx(Ou, {}),
      /* @__PURE__ */ w.exports.jsx(Aw, {})
    ]
  }
));
Iw.displayName = Nu.displayName;
const Ou = $.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ w.exports.jsx(
  yu,
  {
    ref: r,
    orientation: t,
    className: R(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ w.exports.jsx(Dw, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Ou.displayName = yu.displayName;
const rC = Ma, oC = Ta, aC = Xn, Mu = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w.exports.jsx(Hn, { className: R(e), ...t });
Mu.displayName = Hn.displayName;
const Tu = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Vn,
  {
    className: R(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Tu.displayName = Vn.displayName;
const Fw = Dr(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), Lw = $.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ w.exports.jsxs(Mu, { children: [
  /* @__PURE__ */ w.exports.jsx(Tu, {}),
  /* @__PURE__ */ w.exports.jsxs(
    zn,
    {
      ref: o,
      className: R(Fw({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ w.exports.jsxs(Xn, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ w.exports.jsx(ds, { className: "h-4 w-4" }),
          /* @__PURE__ */ w.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Lw.displayName = zn.displayName;
const Ww = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Ww.displayName = "SheetHeader";
const jw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
jw.displayName = "SheetFooter";
const Uw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Gn,
  {
    ref: n,
    className: R("text-lg font-semibold text-foreground", e),
    ...t
  }
));
Uw.displayName = Gn.displayName;
const Yw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Kn,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
Yw.displayName = Kn.displayName;
const Bw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ w.exports.jsx(
  "table",
  {
    ref: n,
    className: R("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Bw.displayName = "TableUI";
const Hw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx("thead", { ref: n, className: R("[&_tr]:border-b", e), ...t }));
Hw.displayName = "TableHeader";
const Vw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  "tbody",
  {
    ref: n,
    className: R("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Vw.displayName = "TableBody";
const zw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: R("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
zw.displayName = "TableFooter";
const Gw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  "tr",
  {
    ref: n,
    className: R(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Gw.displayName = "TableRow";
const Kw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  "th",
  {
    ref: n,
    className: R(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
Kw.displayName = "TableHead";
const Xw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  "td",
  {
    ref: n,
    className: R("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
Xw.displayName = "TableCell";
const qw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  "caption",
  {
    ref: n,
    className: R("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
qw.displayName = "TableCaption";
const Zw = "AlertDialog", [Qw, iC] = Ve(Zw, [
  ll
]), xt = ll(), Jw = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = xt(t);
  return /* @__PURE__ */ h(Ma, _({}, r, n, {
    modal: !0
  }));
}, e1 = /* @__PURE__ */ D((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = xt(n);
  return /* @__PURE__ */ h(Ta, _({}, o, r, {
    ref: t
  }));
}), t1 = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = xt(t);
  return /* @__PURE__ */ h(Hn, _({}, r, n));
}, n1 = /* @__PURE__ */ D((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = xt(n);
  return /* @__PURE__ */ h(Vn, _({}, o, r, {
    ref: t
  }));
}), Ru = "AlertDialogContent", [r1, o1] = Qw(Ru), a1 = /* @__PURE__ */ D((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = xt(n), i = I(null), s = ue(t, i), c = I(null);
  return /* @__PURE__ */ h(N0, {
    contentName: Ru,
    titleName: i1,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ h(r1, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ h(zn, _({
    role: "alertdialog"
  }, a, o, {
    ref: s,
    onOpenAutoFocus: U(o.onOpenAutoFocus, (l) => {
      var d;
      l.preventDefault(), (d = c.current) === null || d === void 0 || d.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ h(ns, null, r), !1)));
}), i1 = "AlertDialogTitle", s1 = /* @__PURE__ */ D((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = xt(n);
  return /* @__PURE__ */ h(Gn, _({}, o, r, {
    ref: t
  }));
}), c1 = /* @__PURE__ */ D((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = xt(n);
  return /* @__PURE__ */ h(Kn, _({}, o, r, {
    ref: t
  }));
}), l1 = /* @__PURE__ */ D((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = xt(n);
  return /* @__PURE__ */ h(Xn, _({}, o, r, {
    ref: t
  }));
}), u1 = "AlertDialogCancel", d1 = /* @__PURE__ */ D((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = o1(u1, n), a = xt(n), i = ue(t, o);
  return /* @__PURE__ */ h(Xn, _({}, a, r, {
    ref: i
  }));
}), f1 = Jw, p1 = e1, ku = t1, Au = n1, Iu = a1, Fu = l1, Lu = d1, Wu = s1, ju = c1, sC = f1, cC = p1, Uu = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w.exports.jsx(ku, { className: R(e), ...t });
Uu.displayName = ku.displayName;
const Yu = $.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ w.exports.jsx(
  Au,
  {
    className: R(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
Yu.displayName = Au.displayName;
const m1 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsxs(Uu, { children: [
  /* @__PURE__ */ w.exports.jsx(Yu, {}),
  /* @__PURE__ */ w.exports.jsx(
    Iu,
    {
      ref: n,
      className: R(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        e
      ),
      ...t
    }
  )
] }));
m1.displayName = Iu.displayName;
const v1 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
v1.displayName = "AlertDialogHeader";
const h1 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
h1.displayName = "AlertDialogFooter";
const g1 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Wu,
  {
    ref: n,
    className: R("text-lg font-semibold", e),
    ...t
  }
));
g1.displayName = Wu.displayName;
const b1 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  ju,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
b1.displayName = ju.displayName;
const $1 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Fu,
  {
    ref: n,
    className: R(On(), e),
    ...t
  }
));
$1.displayName = Fu.displayName;
const x1 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.exports.jsx(
  Lu,
  {
    ref: n,
    className: R(
      On({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
x1.displayName = Lu.displayName;
function lC({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ w.exports.jsx(
    "div",
    {
      className: R("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
export {
  sC as AlertDialog,
  $1 as AlertDialogAction,
  x1 as AlertDialogCancel,
  m1 as AlertDialogContent,
  b1 as AlertDialogDescription,
  h1 as AlertDialogFooter,
  v1 as AlertDialogHeader,
  g1 as AlertDialogTitle,
  cC as AlertDialogTrigger,
  tC as AspectRatio,
  bv as Avatar,
  xv as AvatarFallback,
  $v as AvatarImage,
  _1 as Badge,
  Yd as Button,
  iv as Calendar,
  Y$ as Card,
  z$ as CardContent,
  V$ as CardDescription,
  G$ as CardFooter,
  B$ as CardHeader,
  H$ as CardTitle,
  nx as Checkbox,
  bu as Command,
  eC as CommandDialog,
  dw as CommandEmpty,
  fw as CommandGroup,
  lw as CommandInput,
  mw as CommandItem,
  uw as CommandList,
  pw as CommandSeparator,
  vw as CommandShortcut,
  P1 as ContextMenu,
  Rb as ContextMenuCheckboxItem,
  Mb as ContextMenuContent,
  N1 as ContextMenuGroup,
  Tb as ContextMenuItem,
  Ab as ContextMenuLabel,
  O1 as ContextMenuPortal,
  T1 as ContextMenuRadioGroup,
  kb as ContextMenuRadioItem,
  Ib as ContextMenuSeparator,
  Fb as ContextMenuShortcut,
  M1 as ContextMenuSub,
  Ob as ContextMenuSubContent,
  Nb as ContextMenuSubTrigger,
  D1 as ContextMenuTrigger,
  O0 as Dialog,
  hl as DialogContent,
  k0 as DialogDescription,
  T0 as DialogFooter,
  M0 as DialogHeader,
  R0 as DialogTitle,
  I1 as DialogTrigger,
  G1 as DropdownMenu,
  Mx as DropdownMenuCheckboxItem,
  Nx as DropdownMenuContent,
  X1 as DropdownMenuGroup,
  Ox as DropdownMenuItem,
  Rx as DropdownMenuLabel,
  q1 as DropdownMenuPortal,
  Q1 as DropdownMenuRadioGroup,
  Tx as DropdownMenuRadioItem,
  kx as DropdownMenuSeparator,
  Ax as DropdownMenuShortcut,
  Z1 as DropdownMenuSub,
  Dx as DropdownMenuSubContent,
  Px as DropdownMenuSubTrigger,
  K1 as DropdownMenuTrigger,
  R1 as Form,
  l0 as FormControl,
  u0 as FormDescription,
  k1 as FormField,
  s0 as FormItem,
  c0 as FormLabel,
  d0 as FormMessage,
  F1 as Input,
  _r as Label,
  W1 as Popover,
  K0 as PopoverContent,
  j1 as PopoverTrigger,
  Iw as ScrollArea,
  Ou as ScrollBar,
  Y1 as Select,
  L$ as SelectContent,
  B1 as SelectGroup,
  j$ as SelectItem,
  W$ as SelectLabel,
  U$ as SelectSeparator,
  F$ as SelectTrigger,
  H1 as SelectValue,
  Lx as Separator,
  rC as Sheet,
  aC as SheetClose,
  Lw as SheetContent,
  Yw as SheetDescription,
  jw as SheetFooter,
  Ww as SheetHeader,
  Uw as SheetTitle,
  oC as SheetTrigger,
  lC as Skeleton,
  Vw as TableBody,
  qw as TableCaption,
  Xw as TableCell,
  zw as TableFooter,
  Kw as TableHead,
  Hw as TableHeader,
  Gw as TableRow,
  Bw as TableUI,
  X0 as TextareaUI,
  yv as badgeVariants,
  On as buttonVariants,
  Vr as useFormField
};
//# sourceMappingURL=index.es.js.map
