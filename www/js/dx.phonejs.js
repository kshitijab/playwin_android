/*! 
 * DevExpress PhoneJS
 * Version: 13.1.6
 * Build date: Aug 13, 2013
 *
 * Copyright (c) 2012 - 2013 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: http://phonejs.devexpress.com/EULA
 */
"use strict";
window.DevExpress || (function(n, t, i) {
    (function(n) {
        if (n = n.split("."), n[0] < 1 || n[0] === 1 && n[1] < 8) throw Error("Your version of jQuery is too old. Please upgrade jQuery to 1.8.0 or later.");
    })(n.fn.jquery);
    var r = function() {
            var i = function(n, t, i) {
                    return function() {
                        var r = this.callBase;
                        this.callBase = n[t];
                        try {
                            return i.apply(this, arguments)
                        } finally {
                            this.callBase = r
                        }
                    }
                },
                r = function(n) {
                    var t = function() {};
                    return t.prototype = n.prototype, new t
                },
                t = function() {},
                u = function(t) {
                    var r = this,
                        u;
                    return t ? (u = n.map(t, function(n, t) {
                        return t
                    }), n.each(["toString", "toLocaleString", "valueOf"], function() {
                        t[this] && u.push(this)
                    }), n.each(u, function() {
                        var u = n.isFunction(r.prototype[this]) && n.isFunction(t[this]);
                        r.prototype[this] = u ? i(r.parent.prototype, this, t[this]) : t[this]
                    }), r) : r
                },
                f = function() {
                    var t = this;
                    return n.each(arguments, function() {
                        this.ctor && t._includedCtors.push(this.ctor);
                        for (var n in this)
                            if (n !== "ctor") {
                                if (n in t.prototype) throw Error("Member name collision: " + n);
                                t.prototype[n] = this[n]
                            }
                    }), t
                },
                e = function(n) {
                    return this.parent === n ? !0 : !this.parent || !this.parent.subclassOf ? !1 : this.parent.subclassOf(n)
                };
            return t.inherit = function(t) {
                var i = function() {
                    if (!this || this.constructor !== i) throw Error("A class must be instantiated using the 'new' keyword");
                    var t = this,
                        r = t.ctor;
                    r && r.apply(t, arguments), n.each(t.constructor._includedCtors, function() {
                        this.call(t)
                    })
                };
                return i.prototype = r(this), i.inherit = this.inherit, i.redefine = u, i.include = f, i.subclassOf = e, i.parent = this, i._includedCtors = this._includedCtors ? this._includedCtors.slice(0) : [], i.prototype.constructor = i, i.redefine(t), i
            }, t
        }(),
        u = function() {
            var t = [],
                r = !1,
                u = function() {
                    while (t.length) {
                        var e = t.shift(),
                            f = e();
                        if (f !== i) {
                            if (f.then) {
                                r = !0, n.when(f).always(u);
                                return
                            }
                            throw Error();
                        }
                    }
                    r = !1
                };
            return function(n) {
                t.push(n), r || u()
            }
        }(),
        f = function() {
            var t = document.createElement("a"),
                i = ["protocol", "hostname", "port", "pathname", "search", "hash"],
                r = function(n) {
                    return n.charAt(0) !== "/" && (n = "/" + n), n
                };
            return function(u) {
                t.href = u;
                var f = {};
                return n.each(i, function() {
                    f[this] = t[this]
                }), f.pathname = r(f.pathname), f
            }
        }();
    t.DevExpress = t.DevExpress || {};
    var e = function(t) {
            var i = n.Deferred();
            return setTimeout(function() {
                i.resolve(t())
            }, 60), i
        },
        o = function() {
            var t = [];
            return {
                add: function(n) {
                    t.push(n)
                },
                remove: function(i) {
                    var r = n.inArray(i, t);
                    r !== -1 && t.splice(r, 1)
                },
                fire: function() {
                    var n = t.pop(),
                        i = !!n;
                    return i && n(), i
                }
            }
        }(),
        s = function() {
            var n = null;
            return function(t) {
                return arguments.length && (n = t), n
            }
        }();
    n.extend(t.DevExpress, {
        abstract: function() {
            throw Error("Not implemented");
        },
        Class: r,
        enqueue: u,
        enqueueAsync: e,
        parseUrl: f,
        backButtonCallback: o,
        overlayTargetContainer: s
    })
}(jQuery, this), function(n, t, i) {
    var e = function(n) {
            return n === i || n === null ? "" : String(n)
        },
        r = function(n) {
            return e(n).charAt(0).toUpperCase() + n.substr(1)
        },
        u = function(n) {
            return e(n).replace(/([a-z\d])([A-Z])/g, "$1 $2").split(/[\s_-]+/)
        },
        f = function(t) {
            return n.map(u(t), function(n) {
                return n.toLowerCase()
            }).join("-")
        },
        o = function(n) {
            return f(n).replace(/-/g, "_")
        },
        s = function(t, i) {
            return n.map(u(t), function(n, t) {
                return n = n.toLowerCase(), (i || t > 0) && (n = r(n)), n
            }).join("")
        },
        h = function(n) {
            return r(f(n).replace(/-/g, " "))
        },
        c = function(t) {
            return n.map(u(t), function(n) {
                return r(n.toLowerCase())
            }).join(" ")
        };
    t.inflector = {
        dasherize: f,
        camelize: s,
        humanize: h,
        titleize: c,
        underscore: o
    }
}(jQuery, DevExpress), function(n, t, i) {
    var f = ["", "Webkit", "Moz", "O", "ms"],
        e = document.createElement("dx").style,
        o = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            msTransition: "MsTransitionEnd",
            transition: "transitionend"
        },
        u = function(n) {
            var i, u, r;
            for (n = t.inflector.camelize(n, !0), i = 0, u = f.length; i < u; i++)
                if (r = f[i] + n, r in e) return r
        },
        r = function(n) {
            return !!u(n)
        };
    t.support = {
        touch: "ontouchstart" in i,
        transform3d: r("perspective"),
        transition: r("transition"),
        transitionEndEventName: o[u("transition")],
        animation: r("animation"),
        winJS: "WinJS" in i,
        styleProp: u,
        supportProp: r
    }
}(jQuery, DevExpress, this), function(n, t) {
    var f = /(webkit)[ \/]([\w.]+)/,
        e = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        o = /(msie) ([\w.]+)/,
        s = /(mozilla)(?:.*? rv:([\w.]+))?/,
        u = navigator.userAgent.toLowerCase(),
        h = function() {
            var n = {},
                t = f.exec(u) || e.exec(u) || o.exec(u) || u.indexOf("compatible") < 0 && s.exec(u) || [],
                i = t[1],
                r = t[2];
            return i && (n[i] = !0, n.version = r), n
        }();
    t.browser = h
}(jQuery, DevExpress, this), function(n, t, i) {
    var a = /left|right/,
        v = /top|bottom/,
        o = /fit|flip/,
        f = function(n) {
            switch (typeof n) {
                case "string":
                    return n.split(/\s+/, 2);
                case "object":
                    return [n.x || n.h, n.y || n.v];
                case "number":
                    return [n];
                default:
                    return n
            }
        },
        s = function(t) {
            var i = {
                    h: "center",
                    v: "center"
                },
                r = f(t);
            return r && n.each(r, function() {
                var n = String(this).toLowerCase();
                a.test(n) ? i.h = n : v.test(n) && (i.v = n)
            }), i
        },
        y = function(n) {
            var t = f(n),
                i = parseInt(t && t[0], 10),
                r = parseInt(t && t[1], 10);
            return isFinite(i) || (i = 0), isFinite(r) || (r = i), {
                h: i,
                v: r
            }
        },
        p = function(n) {
            var t = f(n),
                i = String(t && t[0]).toLowerCase(),
                r = String(t && t[1]).toLowerCase();
            return o.test(i) || (i = "none"), o.test(r) || (r = i), {
                h: i,
                v: r
            }
        },
        h = function(n) {
            switch (n) {
                case "center":
                    return .5;
                case "right":
                case "bottom":
                    return 1;
                default:
                    return 0
            }
        },
        c = function(n) {
            switch (n) {
                case "left":
                    return "right";
                case "right":
                    return "left";
                case "top":
                    return "bottom";
                case "bottom":
                    return "top";
                default:
                    return n
            }
        },
        e = function(n) {
            n.myLocation = n.atLocation + h(n.atAlign) * n.atSize - h(n.myAlign) * n.mySize + n.offset
        },
        r = {
            fit: function(n, t) {
                n.myLocation > t.max && (n.myLocation = t.max), n.myLocation < t.min && (n.myLocation = t.min)
            },
            flip: function(t, i) {
                if ((t.myAlign !== "center" || t.atAlign !== "center") && (t.myLocation < i.min || t.myLocation > i.max)) {
                    var r = n.extend({}, t, {
                        myAlign: c(t.myAlign),
                        atAlign: c(t.atAlign),
                        offset: -t.offset
                    });
                    e(r), (r.myLocation >= i.min && r.myLocation <= i.max || r.myLocation > t.myLocation) && (t.myLocation = r.myLocation)
                }
            }
        },
        u, w = function(f, o) {
            var v = n(f),
                w, b;
            if (!o) return v.offset();
            var k = s(o.my),
                d = s(o.at),
                h = o.of || window,
                g = y(o.offset),
                nt = p(o.collision),
                c = {
                    mySize: v.outerWidth(),
                    myAlign: k.h,
                    atAlign: d.h,
                    offset: g.h,
                    collision: nt.h
                },
                a = {
                    mySize: v.outerHeight(),
                    myAlign: k.v,
                    atAlign: d.v,
                    offset: g.v,
                    collision: nt.v
                };
            h.preventDefault ? (c.atLocation = h.pageX, a.atLocation = h.pageY, c.atSize = 0, a.atSize = 0) : (h = n(h), n.isWindow(h[0]) ? (c.atLocation = h.scrollLeft(), a.atLocation = h.scrollTop(), c.atSize = h.width(), a.atSize = h.height()) : h[0].nodeType === 9 ? (c.atLocation = 0, a.atLocation = 0, c.atSize = h.width(), a.atSize = h.height()) : (w = h.offset(), c.atLocation = w.left, a.atLocation = w.top, c.atSize = h.outerWidth(), a.atSize = h.outerHeight())), e(c), e(a), b = function() {
                var r = n(window),
                    f = r.scrollLeft(),
                    e = r.scrollTop();
                u === i && (u = l());
                var o = document.width > document.documentElement.clientWidth,
                    s = document.height > document.documentElement.clientHeight,
                    h = t.support.touch ? document.documentElement.clientWidth / (s ? window.innerWidth - u : window.innerWidth) : 1,
                    v = t.support.touch ? document.documentElement.clientHeight / (o ? window.innerHeight - u : window.innerHeight) : 1;
                return {
                    h: {
                        min: f,
                        max: f + r.width() / h - c.mySize
                    },
                    v: {
                        min: e,
                        max: e + r.height() / v - a.mySize
                    }
                }
            }(), r[c.collision] && r[c.collision](c, b.h), r[a.collision] && r[a.collision](a, b.v), v.offset({
                left: Math.round(c.myLocation),
                top: Math.round(a.myLocation)
            })
        },
        l;
    t.position = w, l = function() {
        var t = n("<div>").css({
                width: 100,
                height: 100,
                overflow: "scroll",
                position: "absolute",
                top: -9999
            }).appendTo(n("body")),
            i = t.get(0).offsetWidth - t.get(0).clientWidth;
        return t.remove(), i
    }
}(jQuery, DevExpress), function(n, t) {
    var r = {},
        u = function(t, i) {
            if (n.isPlainObject(t)) {
                n.each(t, u);
                return
            }
            r[t] = i
        },
        e = function() {
            var i = n.makeArray(arguments);
            n.each(i, function() {
                delete r[this]
            })
        },
        f;
    u({
        func: {
            execute: function(t) {
                n.isFunction(t.action) && (t.result = t.action.apply(t.context, t.args), t.handled = !0)
            }
        },
        url: {
            execute: function(n) {
                typeof n.action == "string" && n.action.charAt(0) !== "#" && (document.location = n.action)
            }
        },
        hash: {
            execute: function(n) {
                typeof n.action == "string" && n.action.charAt(0) === "#" && (document.location.hash = n.action)
            }
        }
    }), f = t.Class.inherit({
        ctor: function(t, i) {
            i = i || {}, this._action = t || n.noop, this._context = i.context || window, this._beforeExecute = i.beforeExecute || n.noop, this._afterExecute = i.afterExecute || n.noop, this._component = i.component, this._allowedForGesture = !!i.allowedForGesture
        },
        execute: function() {
            var n = {
                    action: this._action,
                    args: Array.prototype.slice.call(arguments),
                    context: this._context,
                    component: this._component,
                    canceled: !1,
                    handled: !1,
                    allowedForGesture: this._allowedForGesture
                },
                t;
            if (this._validateAction(n)) return (this._beforeExecute.call(this._context, n), n.canceled) ? void 0 : (t = this._executeAction(n), this._afterExecute.call(this._context, n), t)
        },
        _validateAction: function(t) {
            return n.each(r, function(n, i) {
                return i.validate && i.validate(t), t.canceled ? !1 : void 0
            }), !t.canceled
        },
        _executeAction: function(t) {
            var i;
            return n.each(r, function(n, r) {
                return r.execute && r.execute(t), t.handled ? (i = t.result, !1) : void 0
            }), i
        }
    }), n.extend(t, {
        registerActionExecutor: u,
        unregisterActionExecutor: e,
        Action: f
    })
}(jQuery, DevExpress), function(n, t, i) {
    function it() {}
    var rt = Math.PI,
        ut = Math.LN10,
        ft = Math.cos,
        et = Math.sin,
        c = Math.abs,
        ot = Math.log,
        st = Math.floor,
        ht = Math.ceil,
        ct = Math.max,
        nr = Math.min,
        l = window.isNaN,
        p = window.Number,
        lt = window.NaN,
        f = ["millisecond", "second", "minute", "hour", "day", "week", "month", "quarter", "year"],
        at = function(n) {
            return n !== null && n !== i
        },
        e = function(t) {
            return n.type(t) === "string"
        },
        o = function(t) {
            return n.isNumeric(t)
        },
        a = function(t) {
            return n.type(t) === "object"
        },
        vt = function(t) {
            return n.type(t) === "array"
        },
        w = function(t) {
            return n.type(t) === "date"
        },
        yt = function(t) {
            return n.type(t) === "function"
        },
        r = function(n) {
            switch (n) {
                case "millisecond":
                    return 1;
                case "second":
                    return r("millisecond") * 1e3;
                case "minute":
                    return r("second") * 60;
                case "hour":
                    return r("minute") * 60;
                case "day":
                    return r("hour") * 24;
                case "week":
                    return r("day") * 7;
                case "month":
                    return r("day") * 30;
                case "quarter":
                    return r("month") * 3;
                case "year":
                    return r("day") * 365;
                default:
                    return 0
            }
        },
        s = function(n, t) {
            return r(n) * t
        },
        pt = function(n) {
            for (var t, i, f = ["millisecond", "second", "minute", "hour", "day", "month", "year"], e = {}, u = f.length - 1; u >= 0; u--) i = f[u], t = Math.floor(n / r(i)), t > 0 && (e[i + "s"] = t, n -= s(i, t));
            return e
        },
        wt = function(t) {
            var i = 0;
            return a(t) && n.each(t, function(n, t) {
                i += s(n.substr(0, n.length - 1), t)
            }), e(t) && (i = s(t, 1)), i
        },
        bt = function(t, i) {
            var r, u = 0;
            return r = {
                year: t.getFullYear() !== i.getFullYear(),
                month: t.getMonth() !== i.getMonth(),
                day: t.getDate() !== i.getDate(),
                hour: t.getHours() !== i.getHours(),
                minute: t.getMinutes() !== i.getMinutes(),
                second: t.getSeconds() !== i.getSeconds()
            }, n.each(r, function(n, t) {
                t && u++
            }), r.count = u, r
        },
        v = function(n) {
            var t, i;
            return o(n) ? (t = n.toFixed(20), i = t.indexOf("."), t.substr(i + 1, t.length - i + 1)) : ""
        },
        kt = function(n) {
            var i = v(n),
                t;
            if (i)
                for (t = 0; t < i.length; t++)
                    if (i.charAt(t) !== "0") return t + 1;
            return 0
        },
        u = function(n, t, i) {
            return n + (i ? -1 : 1) * t
        },
        b = function(n) {
            return o(n) && n.toString().indexOf("e") !== -1
        },
        dt = function(n, t, i) {
            var r = null,
                f;
            return w(n) ? (f = e(t) ? g(t.toLowerCase()) : t, r = new Date(n.getTime()), f.years && r.setFullYear(u(r.getFullYear(), f.years, i)), f.quarters && r.setMonth(u(r.getMonth(), 3 * f.quarters, i)), f.months && r.setMonth(u(r.getMonth(), f.months, i)), f.weeks && r.setDate(u(r.getDate(), 7 * f.weeks, i)), f.days && r.setDate(u(r.getDate(), f.days, i)), f.hours && r.setHours(u(r.getHours(), f.hours, i)), f.minutes && r.setMinutes(u(r.getMinutes(), f.minutes, i)), f.seconds && r.setSeconds(u(r.getSeconds(), f.seconds, i)), f.milliseconds && r.setMilliseconds(u(n.getMilliseconds(), f.milliseconds, i))) : r = u(n, t, i), r
        },
        k = function(t) {
            var r = -1,
                i;
            return e(t) ? t : a(t) ? (n.each(t, function(n, t) {
                for (i = 0; i < f.length; i++) t && (n === f[i] + "s" || n === f[i]) && r < i && (r = i)
            }), f[r]) : ""
        },
        gt = function(n, i) {
            var r, u, f = k(i);
            switch (f) {
                case "second":
                    n.setMilliseconds(0);
                    break;
                case "minute":
                    n.setSeconds(0, 0);
                    break;
                case "hour":
                    n.setMinutes(0, 0, 0);
                    break;
                case "year":
                    n.setMonth(0);
                case "month":
                    n.setDate(1);
                case "day":
                    n.setHours(0, 0, 0, 0);
                    break;
                case "week":
                    r = n.getDate(), n.getDay() !== 0 && (r += 7 - n.getDay()), n.setDate(r), n.setHours(0, 0, 0, 0);
                    break;
                case "quarter":
                    u = t.formatHelper.getFirstQuarterMonth(n.getMonth()), n.getMonth() !== u && n.setMonth(u), n.setDate(1), n.setHours(0, 0, 0, 0)
            }
        },
        y = function(n, t) {
            if (o(n)) return b(n) ? p(n.toExponential(t)) : p(n.toFixed(t))
        },
        d = function(n) {
            var t, i = n.toString(),
                r = i.indexOf(".");
            return r !== -1 ? (t = i.substring(r + 1), t.length) : 0
        },
        ni = function(n, t, i) {
            var r = d(n),
                u = d(t);
            return y(i, r < u ? u : r)
        },
        ti = function(n) {
            var i = v(n),
                r, t;
            if (i)
                for (t = 1; t <= i.length; t++)
                    if (r = y(n, t), r !== 0 && i[t - 2] && i[t - 1] && i[t - 2] === i[t - 1]) return r;
            return n
        },
        g = function(n) {
            var t = {};
            switch (n) {
                case "year":
                    t.years = 1;
                    break;
                case "month":
                    t.months = 1;
                    break;
                case "quarter":
                    t.months = 3;
                    break;
                case "week":
                    t.days = 7;
                    break;
                case "day":
                    t.days = 1;
                    break;
                case "hour":
                    t.hours = 1;
                    break;
                case "minute":
                    t.minutes = 1;
                    break;
                case "second":
                    t.seconds = 1;
                    break;
                case "millisecond":
                    t.milliseconds = 1
            }
            return t
        },
        ii = function(n) {
            return (n % 360 + 360) % 360
        },
        ri = function(n) {
            return 90 - n
        },
        nt = function(n) {
            return rt * n / 180
        },
        ui = function(n) {
            var t = nt(n);
            return {
                cos: ft(t),
                sin: et(t)
            }
        },
        fi = 1e-14,
        h = function(n) {
            var t = c(n),
                i;
            return l(t) ? lt : t > 0 ? (t = ot(t) / ut, i = ht(t), i - t < fi ? i : st(t)) : 0
        },
        ei = function(n, t, i) {
            var u = ct(h(n), h(t)),
                r = -h(c(t - n) / i),
                f;
            return !l(u) && !l(r) ? (c(u) <= 4 ? (f = "fixedPoint", r < 0 && (r = 0), r > 4 && (r = 4)) : (f = "exponential", r += u - 1, r > 3 && (r = 3)), {
                format: f,
                precision: r
            }) : null
        },
        oi = function(t) {
            var i = n(window),
                r, u = function() {
                    var n = i.width(),
                        u = i.height();
                    clearTimeout(r), r = setTimeout(function() {
                        i.width() === n && i.height() === u && t()
                    }, 100)
                };
            return u.stop = function() {
                return clearTimeout(r), this
            }, u
        },
        si = function() {
            var n = function() {
                    window.console && arguments[0] && console.info(arguments[0])
                },
                t = function() {
                    window.console && arguments[0] && console.warn(arguments[0])
                },
                i = function() {
                    window.console && arguments[0] && console.error(arguments[0])
                };
            return {
                info: n,
                warn: t,
                error: i
            }
        }(),
        hi = function() {
            function n(n, t) {
                if (!n) throw new Error(t);
            }

            function t(t, r) {
                n(t !== null && t !== i, r)
            }
            return {
                assert: n,
                assertParam: t
            }
        }(),
        ci = function() {
            var t, r = n.Callbacks(),
                i = n(window),
                u = function() {
                    return [i.width(), i.height()].join()
                },
                f = function() {
                    var n = u();
                    n !== t && (t = n, r.fire())
                };
            i.on("resize", f);
            return t = u(), r
        }(),
        li = function(t) {
            var i = n("<div />");
            return window.WinJS ? WinJS.Utilities.setInnerHTMLUnsafe(i.get(0), t) : i.append(t), i.contents()
        },
        ai = 1,
        vi = 1,
        yi = function() {
            return "DevExpress_" + ai++
        },
        pi = function() {
            return "DevExpressPattern_" + vi++
        },
        wi = function(n, i, r) {
            var u, e, h;
            n = n || {};
            var o = {},
                s = "data-dx-",
                f = i.get(0).attributes;
            for (u = 0; u < f.length; u++) e = f[u].name, e.indexOf(s) === 0 && (h = t.inflector.camelize(e.substr(s.length)), o[h] = f[u].value);
            return tt(n, o, r)
        },
        tt = function(n, t, i) {
            var r, u;
            n = n || {};
            for (r in t) t.hasOwnProperty(r) && (u = t[r], r in n && !i || (n[r] = u));
            return n
        },
        bi = function(t, i, r) {
            var u = window;
            n(document).on(t, r, i)
        },
        ki = function(t) {
            var i = window;
            n(document).off(t)
        },
        di = function(n) {
            return it.prototype = n, new it
        },
        gi = function(t, i) {
            var r = n.Deferred(),
                u = i || this;
            return setTimeout(function() {
                var i = t.call(u);
                i && i.done && n.isFunction(i.done) ? i.done(function() {
                    r.resolveWith(u)
                }) : r.resolveWith(u)
            }, 0), r.promise()
        };
    t.utils = {
        dateUnitIntervals: f,
        isDefined: at,
        isString: e,
        isNumber: o,
        isObject: a,
        isArray: vt,
        isDate: w,
        isFunction: yt,
        normalizeAngle: ii,
        convertAngleToRendererSpace: ri,
        degreesToRadians: nt,
        getCosAndSin: ui,
        getDecimalOrder: h,
        getAppropriateFormat: ei,
        getFraction: v,
        adjustValue: ti,
        convertMillisecondsToDateUnits: pt,
        convertDateTickIntervalToMilliseconds: wt,
        convertDateUnitToMilliseconds: s,
        getDateUnitInterval: k,
        getDatesDifferences: bt,
        correctDateWithUnitBeginning: gt,
        roundValue: y,
        isExponential: b,
        applyPrecisionByMinDelta: ni,
        getSignificantDigitPosition: kt,
        addInterval: dt,
        getDateIntervalByString: g,
        logger: si,
        debug: hi,
        createResizeHandler: oi,
        windowResizeCallbacks: ci,
        createMarkupFromString: li,
        getNextClipId: yi,
        getNextPatternId: pi,
        extendFromDataAttributes: wi,
        extendFromObject: tt,
        subscribeEventToDocument: bi,
        unsubscribeEventFromDocument: ki,
        clone: di,
        executeAsync: gi
    }
}(jQuery, DevExpress), function(n, t, i) {
    var u = t.support,
        e = /matrix(3d)?\((.+?)\)/,
        o = /translate(?:3d)?\((.+?)\)/,
        s = function(n) {
            var t, i, f;
            return u.transform3d ? (f = r(n), t = {
                left: f.x,
                top: f.y
            }) : (i = n.position(), t = {
                left: i.left,
                top: i.top
            }), t
        },
        h = function(n, t) {
            if (!u.transform3d) {
                n.css(t);
                return
            }
            var e = r(n),
                o = t.left,
                s = t.top;
            o !== i && (e.x = o), s !== i && (e.y = s), n.css("transform", f(e))
        },
        r = function(n) {
            var i = n.css("transform"),
                t = i.match(e),
                r = t && t[1];
            return t ? (t = t[2].split(","), r === "3d" ? t = t.slice(12, 15) : (t.push(0), t = t.slice(4, 7))) : t = [0, 0, 0], {
                x: parseFloat(t[0]),
                y: parseFloat(t[1]),
                z: parseFloat(t[2])
            }
        },
        c = function(n) {
            var t = n.match(o);
            if (t && t[1]) return t = t[1].split(","), t = {
                x: parseFloat(t[0]),
                y: parseFloat(t[1]),
                z: parseFloat(t[2])
            }
        },
        f = function(n) {
            return "translate3d(" + (n.x || 0) + "px, " + (n.y || 0) + "px, " + (n.z || 0) + "px)"
        };
    t.translator = {
        move: h,
        locate: s,
        parseTranslate: c,
        getTranslate: r,
        getTranslateCss: f
    }
}(jQuery, DevExpress), function(n, t, i) {
    function l(n) {
        if (n = n || window.navigator.userAgent, /iP(hone|od|ad)/.test(n)) {
            var t = n.match(/OS (\d+)_(\d+)_?(\d+)?/);
            return [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3] || 0, 10)]
        }
    }
    var s = {
            iPhone: "iPhone",
            iPhone5: "iPhone 5",
            iPad: "iPad",
            iPadMini: "iPad Mini",
            androidPhone: "Android Mobile",
            androidTablet: "Android",
            win8: "MSAppHost",
            win8Phone: "Windows Phone 8",
            msSurface: "MSIE ARM Tablet PC",
            desktop: "desktop"
        },
        u = {
            phone: !1,
            tablet: !1,
            android: !1,
            ios: !1,
            win8: !1
        },
        h = n.extend(u, {
            platform: "desktop"
        }),
        f = function(t) {
            var e = /ipad/i.test(t),
                u = /iphone|ipod/i.test(t),
                i = /android|silk-accelerated/i.test(t),
                r = /windows phone 8|wpdesktop/i.test(t),
                o = /msie(.*)arm(.*)tablet\spc/i.test(t),
                f = /msapphost/i.test(t) || r || o;
            if (!e && !u && !i && !f && !r && !o) return n.extend({}, h);
            var s = u || i && /mobile/i.test(t) || r,
                l = !s && !f && !r,
                c = i ? "android" : f ? "win8" : "ios";
            return {
                phone: s,
                tablet: l,
                android: i,
                ios: e || u,
                win8: c === "win8",
                platform: c
            }
        },
        e = function(n) {
            var t;
            if (n) {
                if (t = s[n], !t) throw Error("Unknown device");
            } else t = navigator.userAgent;
            return f(t)
        },
        c = function(n) {
            n = n || window.navigator.userAgent;
            var t = /Android (\d\.\d(?:\.\d)?)/.exec(n);
            if (t && t.length === 2) return t[1]
        },
        r, o = function() {
            return window.sessionStorage && (sessionStorage.getItem("dx-force-device") || sessionStorage.getItem("dx-simulator-device"))
        },
        a = function() {
            var n = i;
            return window.top["dx-force-device"] && (n = window.top["dx-force-device"]), n
        },
        v = function(t) {
            if (t) r = n.isPlainObject(t) ? n.extend(u, t) : e(t);
            else {
                if (!r) {
                    var f = i;
                    try {
                        f = a()
                    } catch (s) {
                        f = o()
                    } finally {
                        f || (f = o())
                    }
                    r = e(f)
                }
                return r
            }
        };
    t.devices = {
        androidVersion: c,
        iosVersion: l,
        current: v,
        fromUA: function() {
            return f(navigator.userAgent)
        }
    }
}(jQuery, DevExpress), function(n, t, i) {
    var f = t.translator,
        e = t.support,
        o = e.transitionEndEventName + ".dxFX",
        w = /cubic-bezier\((\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\)/,
        s = "dxSimulatedTransitionTimeoutKey",
        u = "dxAnimData",
        r = "transform",
        l = "backfaceVisibility",
        b = 1e3 / 60,
        a = {
            animate: function(t, i) {
                var r = n.Deferred(),
                    u = n.Deferred(),
                    e = n.Deferred();
                t.one(o, function() {
                    u.reject()
                });
                return t.data(s, setTimeout(function() {
                    e.reject()
                }, i.duration + i.delay)), n.when(u, e).fail(n.proxy(function() {
                    this._cleanup(t), r.resolveWith(t, [i, t])
                }, this)), f.getTranslate(t), t.css({
                    transitionProperty: "all",
                    transitionDelay: i.delay + "ms",
                    transitionDuration: i.duration + "ms",
                    transitionTimingFunction: i.easing
                }), y(t, i.to), i.duration || t.trigger(o), r.promise()
            },
            _cleanup: function(n) {
                n.css("transition", "none").off(o);
                var t = n.data(s);
                clearTimeout(t), n.removeData(s)
            },
            stop: function(t, i) {
                var r = t.data(u);
                r && (i ? t.trigger(o) : (n.each(r.to, function(n) {
                    t.css(n, t.css(n))
                }), this._cleanup(t)))
            }
        },
        k = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n) {
                window.setTimeout(n, b)
            }
        }(),
        h = {
            animate: function(t, e) {
                var h = n.Deferred(),
                    s = t.data(u),
                    o = this;
                return s ? (n.each(e.to, function(n) {
                    e.from[n] === i && (e.from[n] = o._normalizeValue(t.css(n)))
                }), e.to[r] && (e.from[r] = o._parseTransform(e.from[r]), e.to[r] = o._parseTransform(e.to[r])), s.frameAnimation = {
                    to: e.to,
                    from: e.from,
                    currentValue: e.from,
                    easing: nt(e.easing),
                    duration: e.duration,
                    startTime: (new Date).valueOf(),
                    finish: function() {
                        this.currentValue = this.to, this.draw(), h.resolve()
                    },
                    draw: function() {
                        var i = n.extend({}, this.currentValue);
                        i[r] && (i[r] = n.map(i[r], function(n, t) {
                            return t === "translate" ? f.getTranslateCss(n) : t === "scale" ? "scale(" + n + ")" : t.substr(0, t.length - 1) === "rotate" ? t + "(" + n + "deg)" : void 0
                        }).join(" ")), t.css(i)
                    }
                }, e.delay ? (s.frameAnimation.startTime += e.delay, s.frameAnimation.delayTimeout = setTimeout(function() {
                    o._animationStep(t)
                }, e.delay)) : o._animationStep(t), h.promise()) : h.reject().promise()
            },
            _parseTransform: function(t) {
                var i = {};
                return n.each(t.match(/(\w|\d)+\([^\)]*\)\s*/g), function(n, t) {
                    var e = f.parseTranslate(t),
                        u = t.match(/scale\((.+?)\)/),
                        r = t.match(/(rotate.)\((.+)deg\)/);
                    e && (i.translate = e), u && u[1] && (i.scale = parseFloat(u[1])), r && r[1] && (i[r[1]] = parseFloat(r[2]))
                }), i
            },
            stop: function(n, t) {
                var r = n.data(u),
                    i = r && r.frameAnimation;
                i && (clearTimeout(i.delayTimeout), t && i.finish())
            },
            _animationStep: function(t) {
                var f = t.data(u),
                    i = f && f.frameAnimation,
                    r;
                if (i) {
                    if (r = (new Date).valueOf(), r >= i.startTime + i.duration) {
                        i.finish();
                        return
                    }
                    i.currentValue = this._calcStepValue(i, r - i.startTime), i.draw(), k(n.proxy(function() {
                        this._animationStep(t)
                    }, this))
                }
            },
            _calcStepValue: function(t, i) {
                var r = function(u, f) {
                    var e = n.isArray(f) ? [] : {},
                        o = function(r) {
                            var e = i / t.duration,
                                o = i,
                                s = 1 * u[r],
                                h = f[r] - u[r],
                                c = t.duration;
                            return n.easing[t.easing](e, o, s, h, c)
                        };
                    return n.each(f, function(n, t) {
                        if (typeof t == "string" && parseFloat(t, 10) === !1) return !0;
                        e[n] = typeof t == "object" ? r(u[n], t) : o(n)
                    }), e
                };
                return r(t.from, t.to)
            },
            _normalizeValue: function(n) {
                var t = parseFloat(n, 10);
                return t === !1 ? n : t
            }
        },
        d = {
            transition: e.transition ? a : h,
            frame: h
        },
        c = function(n) {
            return d[n && n.strategy || "transition"]
        },
        g = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
            "ease-in": "cubic-bezier(0.42, 0, 1, 1)",
            "ease-out": "cubic-bezier(0, 0, 0.58, 1)",
            "ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)"
        },
        nt = function(t) {
            var i, r, u;
            return (t = g[t] || t, i = t.match(w), !i) ? "linear" : (i = i.slice(1, 5), n.each(i, function(n, t) {
                i[n] = parseFloat(t)
            }), r = "cubicbezier_" + i.join("_").replace(/\./g, "p"), n.isFunction(n.easing[r]) || (u = function(n, t, i, r) {
                var u = 3 * n,
                    f = 3 * (i - n) - u,
                    o = 1 - u - f,
                    e = 3 * t,
                    s = 3 * (r - t) - e,
                    h = 1 - e - s,
                    c = function(n) {
                        return n * (u + n * (f + n * o))
                    },
                    l = function(n) {
                        return n * (e + n * (s + n * h))
                    },
                    a = function(n) {
                        for (var t = n, r = 0, i; r < 14;) {
                            if (i = c(t) - n, Math.abs(i) < .001) break;
                            t = t - i / v(t), r++
                        }
                        return t
                    },
                    v = function(n) {
                        return u + n * (2 * f + n * 3 * o)
                    };
                return function(n) {
                    return l(a(n))
                }
            }, n.easing[r] = function(n, t, r, f, e) {
                return f * u(i[0], i[1], i[2], i[3])(t / e) + r
            }), r)
        },
        tt = {
            setup: function() {}
        },
        it = {
            setup: function(n, t) {
                var i = c(t);
                e.transform3d && (i === a || i === h) && (this._setupConfig(n, t.from), this._setupConfig(n, t.to))
            },
            _setupConfig: function(n, t) {
                var u = f.getTranslate(n),
                    e = t.left,
                    o = t.top;
                e !== i && (u.x = e, delete t.left), o !== i && (u.y = o, delete t.top), t[r] = f.getTranslateCss(u)
            }
        },
        rt = {
            setup: function(t, i) {
                var r = i.from,
                    u = n.isPlainObject(r) ? t.css("opacity") : String(r),
                    f = String(i.to);
                i.from = {
                    opacity: u
                }, i.to = {
                    opacity: f
                }
            }
        },
        ut = {
            setup: function(n, t) {
                if (e.transform3d) {
                    var i = t.from,
                        u = t.to,
                        f = "opacity" in i ? i.opacity : n.css("opacity"),
                        o = "opacity" in u ? u.opacity : 1,
                        s = "scale" in i ? i.scale : 0,
                        h = "scale" in u ? u.scale : 1;
                    t.from = {
                        opacity: f
                    }, t.from[r] = this._getCssTransform(s), t.to = {
                        opacity: o
                    }, t.to[r] = this._getCssTransform(h)
                }
            },
            _getCssTransform: function(n) {
                return "scale(" + n + ")"
            }
        },
        ft = {
            DIRECTIONS: ["left", "right", "top", "bottom"],
            setup: function(n, t) {
                if (e.transform3d) {
                    var u = t.from,
                        i = t.to,
                        o = this._normalizeDirection(i.direction),
                        f = this._getDirectionFactor(o),
                        s = this._getAxis(o),
                        h = "rotate" in u ? u.rotate : -f * 180,
                        c = "rotate" in i ? i.rotate : f * 180,
                        a = "scale" in u ? u.scale : f === 1 ? 1 : .8,
                        v = "scale" in i ? i.scale : f === 1 ? .8 : 1;
                    t.from[r] = this._getCssTransform(s, h, a), t.from[l] = "hidden", t.to[r] = this._getCssTransform(s, c, v), t.to[l] = "hidden"
                }
            },
            _normalizeDirection: function(t) {
                var i = n.inArray(this.DIRECTIONS);
                return i !== -1 ? t : "left"
            },
            _getAxis: function(n) {
                return n === "left" || n === "right" ? "Y" : n === "top" || n === "bottom" ? "X" : void 0
            },
            _getDirectionFactor: function(n) {
                return n === "left" || n === "top" ? -1 : n === "right" || n === "bottom" ? 1 : void 0
            },
            _getCssTransform: function(n, t, i) {
                return "rotate" + n + "(" + t + "deg) scale(" + i + ")"
            }
        },
        v = {
            none: tt,
            slide: it,
            fade: rt,
            pop: ut,
            flip: ft
        },
        et = function(n) {
            var t = v[n];
            if (!t) throw Error('Unknown animation type "' + n + '"');
            return t
        },
        ot = {
            type: "none",
            from: {},
            to: {},
            duration: 400,
            complete: n.noop,
            easing: "ease",
            delay: 0
        },
        st = function(t, i) {
            var r = n(t);
            return i = n.extend(!0, {}, ot, i), et(i.type).setup(r, i), p(r), y(r, i.from), ht(r, i).done(i.complete)
        },
        y = function(t, i) {
            n.each(i, function(n, i) {
                t.css(n, i)
            })
        },
        ht = function(i, r) {
            var f = n.Deferred();
            return i.data(u, r), t.fx.off && (r.duration = 0), c(r).animate(i, r).done(function() {
                i.removeData(u), f.resolveWith(this, [i, r])
            }), f.promise()
        },
        ct = function(n) {
            return !!n.data(u)
        },
        p = function(t, i) {
            var r = n(t);
            c(r.data(u)).stop(r, i), r.removeData(u)
        };
    t.fx = {
        off: !1,
        animationTypes: v,
        animate: st,
        animating: ct,
        stop: p
    }
}(jQuery, DevExpress), function(n, t) {
    function e(n) {
        return /^(localhost$|127\.)/i.test(n)
    }
    var r = window.location,
        u = "dxproxy.devexpress.com:8000",
        f = r.protocol === "ms-appx:",
        o = r.host === u,
        s = e(r.hostname),
        h = function() {
            return r.pathname.split("/")[1]
        },
        c = function(n) {
            var i = t.parseUrl(n);
            return e(i.hostname) ? "http://" + u + "/" + h() + "_" + i.port + i.pathname + i.search : n
        },
        l = t.EndpointSelector = function(n) {
            this.config = n
        };
    l.prototype = {
        urlFor: function(n) {
            var t = this.config[n];
            if (!t) throw Error("Unknown endpoint key");
            return o ? c(t.local) : t.production && (f && !Debug.debuggerEnabled || !f && !s) ? t.production : t.local
        }
    }
}(jQuery, DevExpress), function(n, t, i) {
    var r = t.utils,
        f, u;
    t.NumericFormat = {
        currency: "C",
        fixedpoint: "N",
        exponential: "",
        percent: "P",
        decimal: "D"
    }, t.LargeNumberFormatPostfixes = {
        1: "K",
        2: "M",
        3: "B",
        4: "T"
    }, f = 4, u = 10, t.LargeNumberFormatPowers = {
        largenumber: "auto",
        thousands: 1,
        millions: 2,
        billions: 3,
        trillions: 4
    }, t.DateTimeFormat = {
        longdate: "D",
        longtime: "T",
        monthandday: "M",
        monthandyear: "Y",
        quarterandyear: "qq",
        shortdate: "d",
        shorttime: "t",
        millisecond: "fff",
        second: "T",
        minute: "t",
        hour: "t",
        day: "dd",
        week: "dd",
        month: "MMMM",
        quarter: "qq",
        year: "yyyy",
        longdatelongtime: "D",
        shortdateshorttime: "d"
    }, t.formatHelper = {
        romanDigits: ["I", "II", "III", "IV"],
        _addFormatSeparator: function(n, t) {
            var i = " ";
            return t ? n + i + t : n
        },
        _getDateTimeFormatPattern: function(n) {
            return Globalize.findClosestCulture().calendar.patterns[t.DateTimeFormat[n.toLowerCase()]]
        },
        _isDateFormatContains: function(i) {
            var r = !1;
            return n.each(t.DateTimeFormat, function(n) {
                return r = n === i.toLowerCase(), !r
            }), r
        },
        getQuarter: function(n) {
            return Math.floor(n / 3)
        },
        getQuarterString: function(n, t) {
            var i = "",
                r = this.getQuarter(n.getMonth());
            switch (t) {
                case "q":
                    i = this.romanDigits[r];
                    break;
                case "qq":
                    i = "Q" + this.romanDigits[r];
                    break;
                case "Q":
                    i = (r + 1).toString();
                    break;
                case "QQ":
                    i = "Q" + (r + 1).toString()
            }
            return i
        },
        getFirstQuarterMonth: function(n) {
            return this.getQuarter(n) * 3
        },
        _formatCustomString: function(n, t) {
            for (var f = /qq|q|QQ|Q/g, i, u = "", r = 0; r < t.length;) i = f.exec(t), (!i || i.index > r) && (u += Globalize.format(n, t.substring(r, i ? i.index : t.length))), i ? (u += this.getQuarterString(n, i[0]), r = i.index + i[0].length) : r = t.length;
            return u
        },
        _parseNumberFormatString: function(i) {
            var u, r = {};
            if (i && typeof i == "string") return u = i.toLowerCase().split(" "), n.each(u, function(n, i) {
                i in t.NumericFormat ? r.formatType = i : i in t.LargeNumberFormatPowers && (r.power = t.LargeNumberFormatPowers[i])
            }), r.power && !r.formatType && (r.formatType = "fixedpoint"), r.formatType ? r : void 0
        },
        _calculateNumberPower: function(n, t, r, u) {
            var f = Math.abs(n),
                e = 0;
            if (f > 1)
                while (f && f >= t && (u === i || e < u)) e++, f = f / t;
            else if (f > 0 && f < 1)
                while (f < 1 && (r === i || e > r)) e--, f = f * t;
            return e
        },
        _getNumberByPower: function(n, t, i) {
            for (var r = n; t > 0;) r = r / i, t--;
            while (t < 0) r = r * i, t++;
            return r
        },
        _formatNumber: function(n, i, r) {
            var u;
            return i.power === "auto" && (i.power = this._calculateNumberPower(n, 1e3, 0, f)), i.power && (n = this._getNumberByPower(n, i.power, 1e3)), u = t.LargeNumberFormatPostfixes[i.power] || "", this._formatNumberCore(n, i.formatType, r) + u
        },
        _formatNumberExponential: function(n, t) {
            var r = this._calculateNumberPower(n, u),
                f = this._getNumberByPower(n, r, u),
                e;
            return t = t === i ? 1 : t, f.toFixed(t || 0) >= u && (r++, f = f / u), e = (r >= 0 ? "+" : "") + r.toString(), this._formatNumberCore(f, "fixedpoint", t) + "E" + e
        },
        _formatNumberCore: function(n, i, u) {
            return i === "exponential" ? this._formatNumberExponential(n, u) : Globalize.format(n, t.NumericFormat[i] + (r.isNumber(u) ? u : 0))
        },
        _formatDate: function(n, i) {
            var u = t.DateTimeFormat[i.toLowerCase()];
            return (i = i.toLowerCase(), i === "quarterandyear" && (u = this.getQuarterString(n, u) + " yyyy"), i === "quarter") ? this.getQuarterString(n, u) : i === "longdatelongtime" ? this._formatDate(n, "longdate") + " " + this._formatDate(n, "longtime") : i === "shortdateshorttime" ? this._formatDate(n, "shortDate") + " " + this._formatDate(n, "shortTime") : Globalize.format(n, u)
        },
        format: function(n, t, i) {
            if (t && t.format) {
                if (t.dateType) return this._formatDateEx(n, t);
                if (r.isNumber(n) && isFinite(n)) return this._formatNumberEx(n, t)
            }
            return this._format(n, t, i)
        },
        _format: function(n, t, i) {
            var u;
            return !r.isString(t) || t === "" || !r.isNumber(n) && !r.isDate(n) ? r.isDefined(n) ? n.toString() : "" : (u = this._parseNumberFormatString(t), r.isNumber(n) && u) ? this._formatNumber(n, u, i) : r.isDate(n) && this._isDateFormatContains(t) ? this._formatDate(n, t) : !u && !this._isDateFormatContains(t) ? this._formatCustomString(n, t) : void 0
        },
        _formatNumberEx: function(n, i) {
            var a = this,
                v = t.NumericFormat[i.format.toLowerCase()],
                f = Globalize.culture().numberFormat,
                w = i.currencyCulture && Globalize.cultures[i.currencyCulture] ? Globalize.cultures[i.currencyCulture].numberFormat.currency : f.currency,
                b = f.percent,
                c = a._getUnitFormatSettings(n, i),
                k = c.unit,
                y = c.precision,
                nt = c.showTrailingZeros,
                tt = c.includeGroupSeparator,
                it = f[","],
                rt = f["."],
                r, l, o, u, d = /n|\$|-|%/g,
                e = "",
                s, p, g, h;
            n = a._applyUnitToValue(n, k), r = Math.abs(n), l = n < 0;
            switch (v) {
                case "D":
                    if (o = "n", r = Math[l ? "ceil" : "floor"](r), y > 0) {
                        for (s = "" + r, p = s.length; p < y; p += 1) s = "0" + s;
                        r = s
                    }
                    l && (r = "-" + r);
                    break;
                case "N":
                    u = f;
                case "C":
                    u = u || w;
                case "P":
                    u = u || b, o = l ? u.pattern[0] : u.pattern[1] || "n", r = Globalize.format(r * (v === "P" ? 100 : 1), "N" + y), nt || (r = a._excludeTrailingZeros(r, rt)), tt || (r = r.replace(new RegExp("\\" + it, "g"), ""));
                    break;
                default:
                    throw "Illegal numeric format: '" + v + "'";
            }
            for (;;)
                if (g = d.lastIndex, h = d.exec(o), e += o.slice(g, h ? h.index : o.length), h) switch (h[0]) {
                    case "-":
                        /[1-9]/.test(r) && (e += f["-"]);
                        break;
                    case "$":
                        e += w.symbol;
                        break;
                    case "%":
                        e += b.symbol;
                        break;
                    case "n":
                        e += r + k
                } else break;
            return (i.plus && n > 0 ? "+" : "") + e
        },
        _excludeTrailingZeros: function(n, t) {
            var u = n.indexOf(t),
                r, i;
            if (u < 0) return n;
            for (r = n.length, i = r - 1; i >= u && (n[i] === "0" || i === u); i--) r--;
            return n.substring(0, r)
        },
        _getUnitFormatSettings: function(n, t) {
            var e = t.unit || "",
                u = t.precision || 0,
                h = t.includeGroupSeparator || !1,
                s = t.showTrailingZeros === i ? !0 : t.showTrailingZeros,
                f = t.significantDigits || 1,
                r, o;
            if (e.toLowerCase() === "auto")
                if (s = !1, r = Math.abs(n), f < 1 && (f = 1), r >= 1e9 ? (e = "B", r /= 1e9) : r >= 1e6 ? (e = "M", r /= 1e6) : r >= 1e3 ? (e = "K", r /= 1e3) : e = "", r == 0) u = 0;
                else if (r < 1)
                for (u = f, o = Math.pow(10, -f); r < o;) o /= 10, u++;
            else u = r >= 100 ? f - 3 : r >= 10 ? f - 2 : f - 1;
            return u < 0 && (u = 0), {
                unit: e,
                precision: u,
                showTrailingZeros: s,
                includeGroupSeparator: h
            }
        },
        _applyUnitToValue: function(n, t) {
            return t == "B" ? n.toFixed(1) / 1e9 : t == "M" ? n / 1e6 : t == "K" ? n / 1e3 : n
        },
        _formatDateEx: function(t, r) {
            var f = this,
                l = "Q",
                c = r.format,
                u = r.dateType,
                h = Globalize.culture().calendars.standard,
                o = i,
                s, e;
            if (c = c.toLowerCase(), u !== "num" || c === "dayofweek") switch (c) {
                case "monthyear":
                    return f._formatDate(t, "monthandyear");
                case "quarteryear":
                    return f.getQuarterString(t, "QQ") + " " + t.getFullYear();
                case "daymonthyear":
                    return f._formatDate(t, u + "Date");
                case "datehour":
                    return o = new Date(t.getTime()), o.setMinutes(0), e = u === "timeOnly" ? "" : f._formatDate(t, u + "Date"), u === "timeOnly" ? f._formatDate(o, "shorttime") : e + " " + f._formatDate(o, "shorttime");
                case "datehourminute":
                    return e = u === "timeOnly" ? "" : f._formatDate(t, u + "Date"), u === "timeOnly" ? f._formatDate(t, "shorttime") : e + " " + f._formatDate(t, "shorttime");
                case "datehourminutesecond":
                    return e = u === "timeOnly" ? "" : f._formatDate(t, u + "Date"), u === "timeOnly" ? f._formatDate(t, "longtime") : e + " " + f._formatDate(t, "longtime");
                case "year":
                    return e = t.toString(), u === "abbr" ? e.slice(2, 4) : e;
                case "quarter":
                    return l + t.toString();
                case "month":
                    return s = t - 1, u === "abbr" ? h.months.namesAbbr[s] : h.months.names[s];
                case "hour":
                    return u === "long" ? (o = new Date, o.setHours(t), o.setMinutes(0), f._formatDate(o, "shorttime")) : t.toString();
                case "dayofweek":
                    return s = n.inArray(t, ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]), u !== "num" ? u === "abbr" ? h.days.namesAbbr[s] : h.days.names[s] : ((s - h.firstDay + 1 + 7) % 8).toString();
                default:
                    return t.toString()
            } else return t.toString()
        },
        getTimeFormat: function(n) {
            return n ? this._getDateTimeFormatPattern("longtime") : this._getDateTimeFormatPattern("shorttime")
        },
        getDateFormatByDifferences: function(n) {
            var i = "";
            return (n.millisecond && (i = t.DateTimeFormat.millisecond), (n.hour || n.minute || n.second) && (i = this._addFormatSeparator(this.getTimeFormat(n.second), i)), n.year && n.month && n.day) ? this._addFormatSeparator(this._getDateTimeFormatPattern("shortdate"), i) : n.year && n.month ? t.DateTimeFormat.monthandyear : n.year ? t.DateTimeFormat.year : n.month && n.day ? this._addFormatSeparator(this._getDateTimeFormatPattern("monthandday"), i) : n.month ? t.DateTimeFormat.month : n.day ? this._addFormatSeparator("dddd, dd", i) : i
        },
        getDateFormatByTicks: function(n) {
            var f, t, u, i, e;
            if (n.length > 1)
                for (t = r.getDatesDifferences(n[0], n[1]), i = 1; i < n.length - 1; i++) u = r.getDatesDifferences(n[i], n[i + 1]), t.count < u.count && (t = u);
            else t = {
                year: !0,
                month: !0,
                day: !0,
                hour: n[0].getHours() > 0,
                minute: n[0].getMinutes() > 0,
                second: n[0].getSeconds() > 0
            };
            return f = this.getDateFormatByDifferences(t)
        },
        getDateFormatByTickInterval: function(n, t, i) {
            var e, u, f, s = {
                    quarter: "month",
                    week: "day"
                },
                o = function(n, t, i) {
                    switch (t) {
                        case "year":
                            n.month = i;
                        case "quarter":
                        case "month":
                            n.day = i;
                        case "week":
                        case "day":
                            n.hour = i;
                        case "hour":
                            n.minute = i;
                        case "minute":
                            n.second = i;
                        case "second":
                            n.millisecond = i
                    }
                },
                h = function(n, t, i) {
                    !i.getMilliseconds() && i.getSeconds() ? i.getSeconds() - t.getSeconds() == 1 && (n.millisecond = !0, n.second = !1) : !i.getSeconds() && i.getMinutes() ? i.getMinutes() - t.getMinutes() == 1 && (n.second = !0, n.minute = !1) : !i.getMinutes() && i.getHours() ? i.getHours() - t.getHours() == 1 && (n.minute = !0, n.hour = !1) : !i.getHours() && i.getDate() > 1 ? i.getDate() - t.getDate() == 1 && (n.hour = !0, n.day = !1) : i.getDate() === 1 && i.getMonth() ? i.getMonth() - t.getMonth() == 1 && (n.day = !0, n.month = !1) : !i.getMonth() && i.getFullYear() && i.getFullYear() - t.getFullYear() == 1 && (n.month = !0, n.year = !1)
                };
            return i = r.isString(i) ? i.toLowerCase() : i, u = r.getDatesDifferences(n, t), n !== t && h(u, n > t ? t : n, n > t ? n : t), f = r.getDateUnitInterval(u), o(u, f, !0), f = r.getDateUnitInterval(i || "second"), o(u, f, !1), u[s[f] || f] = !0, e = this.getDateFormatByDifferences(u)
        }
    }
}(jQuery, DevExpress), function(n, t) {
    var r = t.Class;
    t.Color = r.inherit(function() {
        var f = function(n) {
                this.baseColor = n, this.decode()
            },
            t = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "00ffff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000000",
                blanchedalmond: "ffebcd",
                blue: "0000ff",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "00ffff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dodgerblue: "1e90ff",
                feldspar: "d19275",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "ff00ff",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgrey: "d3d3d3",
                lightgreen: "90ee90",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslateblue: "8470ff",
                lightslategray: "778899",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "00ff00",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "ff00ff",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370d8",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "d87093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                red: "ff0000",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                violetred: "d02090",
                wheat: "f5deb3",
                white: "ffffff",
                whitesmoke: "f5f5f5",
                yellow: "ffff00",
                yellowgreen: "9acd32"
            },
            i = [{
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                process: function(n) {
                    return [parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10)]
                }
            }, {
                re: /^(\w{2})(\w{2})(\w{2})$/,
                process: function(n) {
                    return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
                }
            }, {
                re: /^(\w{1})(\w{1})(\w{1})$/,
                process: function(n) {
                    return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
                }
            }],
            e = function() {
                var r = this.baseColor,
                    f, u, s, o, e;
                r.charAt(0) === "#" && (r = r.substr(1, 6)), r = r.toLowerCase(), r = r.replace(/ /g, "");
                for (f in t) t.hasOwnProperty(f) && r === f && (r = t[f]);
                for (u = 0; u < i.length; u++)
                    if (s = i[u].re, o = s.exec(r), o) {
                        e = i[u].process(o), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0;
                        break
                    }
                this.r = n(this.r), this.g = n(this.g), this.b = n(this.b)
            },
            n = function(n) {
                return n < 0 || isNaN(n) ? 0 : n > 255 ? 255 : n
            },
            r = function(n) {
                var t = n.toString(16);
                return t.length === 1 ? "0" + t : t
            },
            u = function(n, t, i) {
                return "#" + r(n) + r(t) + r(i)
            },
            o = function() {
                return u(this.r, this.g, this.b)
            },
            s = function(t) {
                return t = t || 10, u(n(this.r + t), n(this.g + t), n(this.b + t))
            },
            h = function(t) {
                return t = t || 10, u(n(this.r - t), n(this.g - t), n(this.b - t))
            };
        return {
            ctor: f,
            highlight: s,
            darken: h,
            decode: e,
            toHex: o
        }
    }())
}(jQuery, DevExpress), function(n, t, i) {
    var o = !!window.ko,
        s = function(n) {
            return n.replace(/\[/g, ".").replace(/\]/g, "")
        },
        u = function(n) {
            return o ? ko.utils.unwrapObservable(n) : n
        },
        h = function(n) {
            return o && ko.isObservable(n)
        },
        c = function(n, t, i) {
            var r = n[t];
            h(r) ? r(i) : n[t] = i
        },
        f = function(t) {
            if (arguments.length > 1 && (t = n.makeArray(arguments)), !t || t === "this") return function(n) {
                return n
            };
            if (n.isFunction(t)) return t;
            if (n.isArray(t)) return a(t);
            t = s(t);
            var i = t.split(".");
            return function(t, r) {
                r = r || {};
                var f = u(t);
                return n.each(i, function() {
                    if (!f) return !1;
                    var t = u(f[this]);
                    n.isFunction(t) && !r.functionsAsIs && (t = t.call(f)), f = t
                }), f
            }
        },
        a = function(t) {
            var r = {};
            return n.each(t, function() {
                    r[this] = f(this)
                }),
                function(t) {
                    var u = {};
                    return n.each(r, function(n) {
                        var o = this(t),
                            f, e, s, r;
                        if (o !== i) {
                            for (f = u, e = n.split("."), s = e.length - 1, r = 0; r < s; r++) f = f[e[r]] = {};
                            f[e[r]] = o
                        }
                    }), u
                }
        },
        v = function(t) {
            if (!t || t === "this") throw Error("Cannot assign to self");
            t = s(t);
            var e = t.lastIndexOf("."),
                o = f(t.substr(0, e)),
                r = t.substr(1 + e);
            return function(t, f, e) {
                e = e || {};
                var l = o(t, {
                        functionsAsIs: e.functionsAsIs
                    }),
                    s = l[r];
                e.functionsAsIs || !n.isFunction(s) || h(s) ? (s = u(s), e.merge && n.isPlainObject(f) && (s === i || n.isPlainObject(s)) ? (s || c(l, r, {}), n.extend(!0, u(l[r]), f)) : c(l, r, f)) : l[r](f)
            }
        },
        y = function(n) {
            return [n[0], n.length < 3 ? "=" : n[1].toLowerCase(), n.length < 2 ? !0 : n[n.length - 1]]
        },
        p = function(t) {
            return n.isArray(t) || (t = [t]), n.map(t, function(t) {
                return {
                    selector: n.isFunction(t) || typeof t == "string" ? t : t.field || t.selector,
                    desc: !!(t.desc || String(t.dir).charAt(0).toLowerCase() === "d")
                }
            })
        },
        l = t.Class.inherit({
            ctor: function(n) {
                n && (n = String(n)), this._value = this._normalize(n || this._generate())
            },
            _normalize: function(n) {
                for (n = n.replace(/[^a-f0-9]/ig, "").toLowerCase(); n.length < 32;) n += "0";
                return [n.substr(0, 8), n.substr(8, 4), n.substr(12, 4), n.substr(16, 4), n.substr(20)].join("-")
            },
            _generate: function() {
                for (var t = "", n = 0; n < 32; n++) t += Math.round(Math.random() * 16).toString(16);
                return t
            },
            toString: function() {
                return this._value
            },
            valueOf: function() {
                return this._value
            },
            toJSON: function() {
                return this._value
            }
        }),
        r = function(n, t) {
            return n instanceof Date ? n.getTime() : n instanceof l ? n.valueOf() : !t && typeof n == "string" ? n.toLowerCase() : n
        },
        w = function(t, i, u) {
            var e, o, f;
            if (n.isArray(t)) {
                for (e = n.map(i, function(n, t) {
                        return t
                    }), f = 0; f < e.length; f++)
                    if (o = e[f], r(i[o], !0) != r(u[o], !0)) return !1;
                return !0
            }
            return r(i, !0) == r(u, !0)
        },
        b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        k = function(t) {
            var r, i;
            for (n.isArray(t) || (t = d(String(t))), r = "", i = 0; i < t.length; i += 3) {
                var e = t[i],
                    u = t[i + 1],
                    f = t[i + 2];
                r += n.map([e >> 2, (e & 3) << 4 | u >> 4, isNaN(u) ? 64 : (u & 15) << 2 | f >> 6, isNaN(f) ? 64 : f & 63], function(n) {
                    return b.charAt(n)
                }).join("")
            }
            return r
        },
        d = function(n) {
            for (var i = [], t, r = 0; r < n.length; r++) t = n.charCodeAt(r), t < 128 ? i.push(t) : t < 2048 ? i.push(192 + (t >> 6), 128 + (t & 63)) : t < 65536 ? i.push(224 + (t >> 12), 128 + (t >> 6 & 63), 128 + (t & 63)) : t < 2097152 && i.push(240 + (t >> 18), 128 + (t >> 12 & 63), 128 + (t >> 6 & 63), 128 + (t & 63));
            return i
        },
        g = function() {
            var n = {
                    timeout: "Network connection timeout",
                    error: "Unspecified network error",
                    parsererror: "Unexpected server response"
                },
                t = function(t) {
                    var i = n[t];
                    return i ? i : t
                };
            return function(n, i) {
                return n.status < 400 ? t(i) : n.statusText
            }
        }(),
        e = t.data = {
            utils: {
                compileGetter: f,
                compileSetter: v,
                normalizeBinaryCriterion: y,
                normalizeSortingInfo: p,
                toComparable: r,
                keysEqual: w,
                errorMessageFromXhr: g
            },
            Guid: l,
            base64_encode: k,
            queryImpl: {},
            queryAdapters: {},
            query: function() {
                var t = n.isArray(arguments[0]) ? "array" : "remote";
                return e.queryImpl[t].apply(this, arguments)
            },
            errorHandler: null,
            _handleError: function(n) {
                e.errorHandler && e.errorHandler(n)
            }
        }
}(jQuery, DevExpress), function(n, t, i) {
    var a = t.Class,
        u = t.data,
        c = u.queryImpl,
        f = u.utils.compileGetter,
        r = u.utils.toComparable,
        e = a.inherit({
            toArray: function() {
                var n = [];
                for (this.reset(); this.next();) n.push(this.current());
                return n
            },
            countable: function() {
                return !1
            }
        }),
        o = e.inherit({
            ctor: function(n) {
                this.array = n, this.index = -1
            },
            next: function() {
                return this.index + 1 < this.array.length ? (this.index++, !0) : !1
            },
            current: function() {
                return this.array[this.index]
            },
            reset: function() {
                this.index = -1
            },
            toArray: function() {
                return this.array.slice(0)
            },
            countable: function() {
                return !0
            },
            count: function() {
                return this.array.length
            }
        }),
        s = e.inherit({
            ctor: function(n) {
                this.iter = n
            },
            next: function() {
                return this.iter.next()
            },
            current: function() {
                return this.iter.current()
            },
            reset: function() {
                return this.iter.reset()
            }
        }),
        h = e.inherit({
            ctor: function(n, t, i) {
                this.iter = n, this.rules = [{
                    getter: t,
                    desc: i
                }]
            },
            thenBy: function(n, t) {
                var i = new h(this.sortedIter || this.iter, n, t);
                return this.sortedIter || (i.rules = this.rules.concat(i.rules)), i
            },
            next: function() {
                return this._ensureSorted(), this.sortedIter.next()
            },
            current: function() {
                return this._ensureSorted(), this.sortedIter.current()
            },
            reset: function() {
                delete this.sortedIter
            },
            countable: function() {
                return this.sortedIter || this.iter.countable()
            },
            count: function() {
                return this.sortedIter ? this.sortedIter.count() : this.iter.count()
            },
            _ensureSorted: function() {
                this.sortedIter || (n.each(this.rules, function() {
                    this.getter = f(this.getter)
                }), this.sortedIter = new o(this.iter.toArray().sort(n.proxy(this._compare, this))))
            },
            _compare: function(n, t) {
                var i, s;
                if (n === t) return 0;
                for (i = 0, s = this.rules.length; i < s; i++) {
                    var e = this.rules[i],
                        u = r(e.getter(n)),
                        o = r(e.getter(t)),
                        f = e.desc ? -1 : 1;
                    if (u < o) return -f;
                    if (u > o) return f;
                    if (u !== o) return u ? f : -f
                }
                return 0
            }
        }),
        l = function() {
            var e = function(t) {
                    var u = [],
                        i = ["return function(d) { return "],
                        f = 0,
                        r = !1;
                    return n.each(t, function() {
                        n.isArray(this) || n.isFunction(this) ? (r && i.push(" && "), u.push(l(this)), i.push("op[", f, "](d)"), f++, r = !0) : (i.push(/and|&/i.test(this) ? " && " : " || "), r = !1)
                    }), i.push(" }"), new Function("op", i.join(""))(u)
                },
                i = function(n) {
                    return t.utils.isDefined(n) ? n.toString() : ""
                },
                o = function(n) {
                    n = u.utils.normalizeBinaryCriterion(n);
                    var e = f(n[0]),
                        o = n[1],
                        t = n[2];
                    t = r(t);
                    switch (o.toLowerCase()) {
                        case "=":
                            return function(n) {
                                return r(e(n)) == t
                            };
                        case "<>":
                            return function(n) {
                                return r(e(n)) != t
                            };
                        case ">":
                            return function(n) {
                                return r(e(n)) > t
                            };
                        case "<":
                            return function(n) {
                                return r(e(n)) < t
                            };
                        case ">=":
                            return function(n) {
                                return r(e(n)) >= t
                            };
                        case "<=":
                            return function(n) {
                                return r(e(n)) <= t
                            };
                        case "startswith":
                            return function(n) {
                                return r(i(e(n))).indexOf(t) === 0
                            };
                        case "endswith":
                            return function(n) {
                                var u = r(i(e(n)));
                                return u.lastIndexOf(t) === u.length - i(t).length
                            };
                        case "contains":
                            return function(n) {
                                return r(i(e(n))).indexOf(t) > -1
                            };
                        case "notcontains":
                            return function(n) {
                                return r(i(e(n))).indexOf(t) === -1
                            }
                    }
                };
            return function(t) {
                return n.isFunction(t) ? t : n.isArray(t[0]) ? e(t) : o(t)
            }
        }(),
        v = s.inherit({
            ctor: function(n, t) {
                this.callBase(n), this.criteria = l(t)
            },
            next: function() {
                while (this.iter.next())
                    if (this.criteria(this.current())) return !0;
                return !1
            }
        }),
        y = e.inherit({
            ctor: function(n, t) {
                this.iter = n, this.getter = t
            },
            next: function() {
                return this._ensureGrouped(), this.groupedIter.next()
            },
            current: function() {
                return this._ensureGrouped(), this.groupedIter.current()
            },
            reset: function() {
                delete this.groupedIter
            },
            countable: function() {
                return !!this.groupedIter
            },
            count: function() {
                return this.groupedIter.count()
            },
            _ensureGrouped: function() {
                var r, t;
                if (!this.groupedIter) {
                    var i = {},
                        e = [],
                        u = this.iter,
                        s = f(this.getter);
                    for (u.reset(); u.next();) r = u.current(), t = s(r), t in i ? i[t].push(r) : (i[t] = [r], e.push(t));
                    this.groupedIter = new o(n.map(e, function(n) {
                        return {
                            key: n,
                            items: i[n]
                        }
                    }))
                }
            }
        }),
        p = s.inherit({
            ctor: function(n, t) {
                this.callBase(n), this.getter = f(t)
            },
            current: function() {
                return this.getter(this.callBase())
            },
            countable: function() {
                return this.iter.countable()
            },
            count: function() {
                return this.iter.count()
            }
        }),
        w = s.inherit({
            ctor: function(n, t, i) {
                this.callBase(n), this.skip = Math.max(0, t), this.take = Math.max(0, i), this.pos = 0
            },
            next: function() {
                if (this.pos >= this.skip + this.take) return !1;
                while (this.pos < this.skip && this.iter.next()) this.pos++;
                return this.pos++, this.iter.next()
            },
            reset: function() {
                this.callBase(), this.pos = 0
            },
            countable: function() {
                return this.iter.countable()
            },
            count: function() {
                return Math.min(this.iter.count() - this.skip, this.take)
            }
        });
    c.array = function(t, r) {
        r = r || {}, t instanceof e || (t = new o(t));
        var b = function(n) {
                var t = r.errorHandler;
                t && t(n), u._handleError(n)
            },
            s = function(r, u, f) {
                var o = n.Deferred().fail(b),
                    e;
                try {
                    for (t.reset(), arguments.length < 2 && (u = arguments[0], r = t.next() ? t.current() : i), e = r; t.next();) e = u(e, t.current());
                    o.resolve(f ? f(e) : e)
                } catch (s) {
                    o.reject(s)
                }
                return o.promise()
            },
            k = function(i) {
                return n.isFunction(i) || n.isArray(i) || (i = n.makeArray(arguments)), l(new p(t, i))
            },
            a = function(n) {
                return k(f(n))
            },
            l = function(n) {
                return c.array(n, r)
            };
        return {
            toArray: function() {
                return t.toArray()
            },
            enumerate: function() {
                var i = n.Deferred().fail(b);
                try {
                    i.resolve(t.toArray())
                } catch (r) {
                    i.reject(r)
                }
                return i.promise()
            },
            sortBy: function(n, i) {
                return l(new h(t, n, i))
            },
            thenBy: function(n, i) {
                if (t instanceof h) return l(t.thenBy(n, i));
                throw Error();
            },
            filter: function(i) {
                return n.isArray(i) || (i = n.makeArray(arguments)), l(new v(t, i))
            },
            slice: function(n, r) {
                return r === i && (r = Number.MAX_VALUE), l(new w(t, n, r))
            },
            select: k,
            groupBy: function(n, i) {
                return l(new y(t, n, i))
            },
            aggregate: s,
            count: function() {
                if (t.countable()) {
                    var i = n.Deferred().fail(b);
                    try {
                        i.resolve(t.count())
                    } catch (r) {
                        i.reject(r)
                    }
                    return i.promise()
                }
                return s(0, function(n) {
                    return 1 + n
                })
            },
            sum: function(n) {
                return n ? a(n).sum() : s(0, function(n, t) {
                    return n + t
                })
            },
            min: function(n) {
                return n ? a(n).min() : s(function(n, t) {
                    return t < n ? t : n
                })
            },
            max: function(n) {
                return n ? a(n).max() : s(function(n, t) {
                    return t > n ? t : n
                })
            },
            avg: function(n) {
                if (n) return a(n).avg();
                var t = 0;
                return s(0, function(n, i) {
                    return t++, n + i
                }, function(n) {
                    return t ? n / t : i
                })
            }
        }
    }
}(jQuery, DevExpress), function(n, t) {
    var r = t.data,
        u = r.queryImpl;
    u.remote = function(t, i, f) {
        f = f || [], i = i || {};
        var o = function(n, t) {
                return {
                    name: n,
                    args: t
                }
            },
            s = function(e) {
                var o = n.Deferred(),
                    h, c, s, l, a = function(n) {
                        var t = i.errorHandler;
                        t && t(n), r._handleError(n), o.reject(n)
                    };
                try {
                    for (h = i.adapter || "odata", n.isFunction(h) || (h = r.queryAdapters[h]), c = h(i), s = [].concat(f).concat(e); s.length;) {
                        if (l = s[0], String(l.name) !== "enumerate" && (!c[l.name] || c[l.name].apply(c, l.args) === !1)) break;
                        s.shift()
                    }
                    c.exec(t).done(function(t) {
                        if (s.length) {
                            var r = u.array(t, {
                                errorHandler: i.errorHandler
                            });
                            n.each(s, function() {
                                r = r[this.name].apply(r, this.args)
                            }), r.done(n.proxy(o.resolve, o)).fail(n.proxy(o.reject, o))
                        } else o.resolve(t)
                    }).fail(a)
                } catch (v) {
                    a(v)
                }
                return o.promise()
            },
            e = {};
        return n.each(["sortBy", "thenBy", "filter", "slice", "select", "groupBy"], function() {
            var n = this;
            e[n] = function() {
                return u.remote(t, i, f.concat(o(n, arguments)))
            }
        }), n.each(["count", "min", "max", "sum", "avg", "aggregate", "enumerate"], function() {
            var n = this;
            e[n] = function() {
                return s.call(this, o(n, arguments))
            }
        }), e
    }
}(jQuery, DevExpress), function(n, t, i) {
    var u = t.data,
        o = u.Guid,
        h = "application/json;odata=verbose",
        l = function(t, i) {
            var u;
            t = n.extend({
                method: "get",
                url: "",
                params: {},
                payload: null,
                headers: {}
            }, t), i = i || {}, u = i.beforeSend, u && u(t);
            var o = (t.method || "get").toLowerCase(),
                r = o === "get",
                f = r && i.jsonp,
                s = n.extend({}, t.params),
                c = r ? s : JSON.stringify(t.payload),
                l = !r && n.param(s),
                e = t.url,
                a = !r && h;
            return l && (e += (e.indexOf("?") > -1 ? "&" : "?") + l), f && (c.$format = "json"), {
                url: e,
                data: c,
                dataType: f ? "jsonp" : "json",
                jsonp: f && "$callback",
                type: o,
                timeout: 3e4,
                headers: t.headers,
                contentType: a,
                accepts: {
                    json: [h, "text/plain"].join()
                },
                xhrFields: {
                    withCredentials: i.withCredentials
                }
            }
        },
        s = function(t, i) {
            var r = n.Deferred();
            return n.ajax(l(t, i)).always(function(t, u) {
                var f = y(t, u),
                    e = f.error,
                    o = f.data,
                    h = f.nextUrl;
                e ? r.reject(e) : i.countOnly ? r.resolve(f.count) : h ? s({
                    url: h
                }, i).fail(n.proxy(r.reject, r)).done(function(n) {
                    r.resolve(o.concat(n))
                }) : r.resolve(o)
            }), r.promise()
        },
        a = function(n) {
            var t, i = n;
            for (("message" in n) && (t = n.message.value ? n.message.value : n.message); i = i.innererror || i.internalexception;)
                if (t = i.message, i.internalexception && t.indexOf("inner exception") === -1) break;
            return t
        },
        v = function(t, i) {
            var o;
            if (i === "nocontent") return null;
            var r = 200,
                f = "Unknown error",
                s, e = t;
            if (i !== "success") {
                r = t.status, f = u.utils.errorMessageFromXhr(t, i);
                try {
                    e = n.parseJSON(t.responseText)
                } catch (h) {}
            }
            return (o = e && e.error, o) ? (f = a(o) || f, r === 200 && (r = 500), e.error.code && (r = Number(e.error.code)), n.extend(Error(f), {
                httpStatus: r,
                errorDetails: o
            })) : r !== 200 ? n.extend(Error(f), {
                httpStatus: r
            }) : void 0
        },
        y = function(t, i) {
            var u = v(t, i),
                r;
            return u ? {
                error: u
            } : n.isPlainObject(t) ? (r = t.d, !r) ? {
                error: Error("Malformed or unsupported JSON response received")
            } : (r = r.results || r, c(r), {
                data: r,
                nextUrl: t.d.__next,
                count: t.d.__count
            }) : {
                data: t
            }
        },
        f = t.Class.inherit({
            ctor: function(n) {
                this._value = n
            },
            valueOf: function() {
                return this._value
            }
        }),
        p = function() {
            var n = function(n) {
                return n = String(n), n.length < 2 && (n = "0" + n), n
            };
            return function(t) {
                var i = ["datetime'", t.getUTCFullYear(), "-", n(t.getUTCMonth() + 1), "-", n(t.getUTCDate())];
                return (t.getUTCHours() || t.getUTCMinutes() || t.getUTCSeconds() || t.getUTCMilliseconds()) && (i.push("T", n(t.getUTCHours()), ":", n(t.getUTCMinutes()), ":", n(t.getUTCSeconds())), t.getUTCMilliseconds() && i.push(".", t.getUTCMilliseconds())), i.push("'"), i.join("")
            }
        }(),
        r = function(n) {
            return n.replace(/\./g, "/")
        },
        e = function(n) {
            return n instanceof Date ? p(n) : n instanceof o ? "guid'" + n + "'" : n instanceof f ? n.valueOf() : typeof n == "string" ? "'" + n.replace(/'/g, "''") + "'" : String(n)
        },
        w = function(t) {
            if (n.isPlainObject(t)) {
                var i = [];
                return n.each(t, function(n, t) {
                    i.push(r(n) + "=" + e(t))
                }), i.join()
            }
            return e(t)
        },
        c = function(t) {
            n.each(t, function(n, i) {
                if (i !== null && typeof i == "object") c(i);
                else if (typeof i == "string") {
                    var r = i.match(/^\/Date\((-?\d+)((\+|-)?(\d+)?)\)\/$/);
                    r && (t[n] = new Date(Number(r[1]) + r[2] * 6e4))
                }
            })
        },
        b = {
            String: function(n) {
                return n + ""
            },
            Int32: function(n) {
                return ~~n
            },
            Int64: function(n) {
                return n instanceof f ? n : new f(n + "L")
            },
            Guid: function(n) {
                return n instanceof o ? n : new o(n)
            }
        },
        k = function() {
            var t = function(n) {
                    return function(t, i, r) {
                        r.push(t, " ", n, " ", i)
                    }
                },
                i = function(n, t) {
                    return function(i, r, u) {
                        t ? u.push(n, "(", r, ",", i, ")") : u.push(n, "(", i, ",", r, ")")
                    }
                },
                o = {
                    "=": t("eq"),
                    "<>": t("ne"),
                    ">": t("gt"),
                    ">=": t("ge"),
                    "<": t("lt"),
                    "<=": t("le"),
                    startswith: i("startswith"),
                    endswith: i("endswith"),
                    contains: i("substringof", !0),
                    notcontains: i("not substringof", !0)
                },
                s = function(n, t) {
                    n = u.utils.normalizeBinaryCriterion(n), o[n[1]](r(n[0]), e(n[2]), t)
                },
                h = function(t, i) {
                    var r = !1;
                    n.each(t, function() {
                        n.isArray(this) ? (r && i.push(" and "), i.push("("), f(this, i), i.push(")"), r = !0) : (i.push(/and|&/i.test(this) ? " and " : " or "), r = !1)
                    })
                },
                f = function(t, i) {
                    n.isArray(t[0]) ? h(t, i) : s(t, i)
                };
            return function(n) {
                var t = [];
                return f(n, t), t.join("")
            }
        }(),
        d = function(t) {
            var e = [],
                u = [],
                f, o, h, c, l = function() {
                    return o || h !== i
                },
                a = function(n, t, i) {
                    if (l() || typeof n != "string") return !1;
                    i && (e = []);
                    var u = r(n);
                    t && (u += " desc"), e.push(u)
                },
                v = function() {
                    var u = {};
                    return t.expand && n.each(n.makeArray(t.expand), function() {
                        u[r(this)] = 1
                    }), f && n.each(f, function() {
                        var n = this.split(".");
                        n.length < 2 || (n.pop(), u[r(n.join("."))] = 1)
                    }), n.map(u, function(n, t) {
                        return t
                    }).join() || i
                },
                y = function() {
                    var n = {};
                    return c || (e.length && (n.$orderby = e.join(",")), o && (n.$skip = o), h !== i && (n.$top = h), f && (n.$select = r(f.join())), n.$expand = v()), u.length && (n.$filter = k(u.length < 2 ? u[0] : u)), c && (n.$inlinecount = "allpages", n.$top = 0), n
                };
            return {
                exec: function(i) {
                    return s({
                        url: i,
                        params: n.extend(y(), t && t.params)
                    }, {
                        beforeSend: t.beforeSend,
                        jsonp: t.jsonp,
                        withCredentials: t.withCredentials,
                        countOnly: c
                    })
                },
                sortBy: function(n, t) {
                    return a(n, t, !0)
                },
                thenBy: function(n, t) {
                    return a(n, t, !1)
                },
                slice: function(n, t) {
                    if (l()) return !1;
                    o = n, h = t
                },
                filter: function(t) {
                    if (l() || n.isFunction(t)) return !1;
                    n.isArray(t) || (t = n.makeArray(arguments)), u.length && u.push("and"), u.push(t)
                },
                select: function(t) {
                    if (f || n.isFunction(t)) return !1;
                    n.isArray(t) || (t = n.makeArray(arguments)), f = t
                },
                count: function() {
                    c = !0
                }
            }
        };
    n.extend(!0, u, {
        EdmLiteral: f,
        utils: {
            odata: {
                sendRequest: s,
                serializePropName: r,
                serializeValue: e,
                serializeKey: w,
                keyConverters: b
            }
        },
        queryAdapters: {
            odata: d
        }
    })
}(jQuery, DevExpress), function(n, t) {
    var o = t.Class,
        r = t.abstract,
        u = t.data,
        f = u.utils.normalizeSortingInfo,
        s = ["loading", "loaded", "modifying", "modified", "inserting", "inserted", "updating", "updated", "removing", "removed"],
        e = function(t, i) {
            return t = t.groupBy(i[0].selector), i.length > 1 && (t = t.select(function(t) {
                return n.extend({}, t, {
                    items: e(u.query(t.items), i.slice(1)).toArray()
                })
            })), t
        };
    u.Store = o.inherit({
        ctor: function(t) {
            var i = this;
            t = t || {}, n.each(s, function() {
                var r = i[this] = n.Callbacks();
                this in t && r.add(t[this])
            }), this._key = t.key, this._keyGetter = u.utils.compileGetter(this._key), this._errorHandler = t.errorHandler
        },
        customLoadOptions: function() {
            return null
        },
        key: function() {
            return this._key
        },
        keyOf: function(n) {
            return this._keyGetter(n)
        },
        _requireKey: function() {
            if (!this._key) throw Error("Key expression is required for this operation");
        },
        load: function(n) {
            var t = this;
            return n = n || {}, this.loading.fire(n), this._loadImpl(n).done(function(n) {
                t.loaded.fire(n)
            })
        },
        _loadImpl: function(t) {
            var o = t.filter,
                u = t.sort,
                s = t.select,
                r = t.group,
                h = t.skip,
                c = t.take,
                i = this.createQuery(t);
            return o && (i = i.filter(o)), r && (r = f(r)), u && (u = f(u), r && (u = r.concat(u)), n.each(u, function(n) {
                i = i[n ? "thenBy" : "sortBy"](this.selector, this.desc)
            })), r && (i = e(i, r)), (c || h) && (i = i.slice(h || 0, c)), s && (i = i.select(s)), i.enumerate()
        },
        createQuery: r,
        byKey: function(n, t) {
            return this._addFailHandlers(this._byKeyImpl(n, t))
        },
        _byKeyImpl: r,
        insert: function(n) {
            var t = this;
            return t.modifying.fire(), t.inserting.fire(n), t._addFailHandlers(t._insertImpl(n).done(function(n, i) {
                t.inserted.fire(n, i), t.modified.fire()
            }))
        },
        _insertImpl: r,
        update: function(n, t) {
            var i = this;
            return i.modifying.fire(), i.updating.fire(n, t), i._addFailHandlers(i._updateImpl(n, t).done(function(n, t) {
                i.updated.fire(n, t), i.modified.fire()
            }))
        },
        _updateImpl: r,
        remove: function(n) {
            var t = this;
            return t.modifying.fire(), t.removing.fire(n), t._addFailHandlers(t._removeImpl(n).done(function(n) {
                t.removed.fire(n), t.modified.fire()
            }))
        },
        _removeImpl: r,
        _addFailHandlers: function(n) {
            return n.fail(this._errorHandler, u._handleError)
        }
    })
}(jQuery, DevExpress), function(n, t, i) {
    var r = t.data,
        e = r.Guid,
        u = function() {
            var i = n.Deferred();
            return i.resolve.apply(i, arguments).promise()
        },
        f = function() {
            var i = n.Deferred();
            return i.reject.apply(i, arguments).promise()
        };
    r.ArrayStore = r.Store.inherit({
        ctor: function(t) {
            t = n.isArray(t) ? {
                data: t
            } : t || {}, this.callBase(t), this._array = t.data || []
        },
        createQuery: function() {
            return r.query(this._array, {
                errorHandler: this._errorHandler
            })
        },
        _byKeyImpl: function(n) {
            return u(this._array[this._indexByKey(n)])
        },
        _insertImpl: function(t) {
            var s = this.key(),
                r, o = {};
            if (n.extend(o, t), s) {
                if (r = this.keyOf(o), r === i || typeof r == "object" && n.isEmptyObject(r)) {
                    if (n.isArray(s)) throw Error("Compound keys cannot be auto-generated");
                    r = o[s] = String(new e)
                } else if (this._array[this._indexByKey(r)] !== i) return f(Error("Attempt to insert an item with the duplicate key"))
            } else r = o;
            return this._array.push(o), u(t, r)
        },
        _updateImpl: function(t, i) {
            var r, e;
            if (this.key()) {
                if (e = this._indexByKey(t), e < 0) return f(Error("Data item not found"));
                r = this._array[e]
            } else r = t;
            return n.extend(!0, r, i), u(t, i)
        },
        _removeImpl: function(n) {
            var t = this._indexByKey(n);
            return t > -1 && this._array.splice(t, 1), u(n)
        },
        _indexByKey: function(n) {
            for (var t = 0, i = this._array.length; t < i; t++)
                if (r.utils.keysEqual(this.key(), this._keyGetter(this._array[t]), n)) return t;
            return -1
        }
    })
}(jQuery, DevExpress), function(n, t) {
    var f = t.Class,
        r = t.abstract,
        u = t.data,
        e = f.inherit({
            ctor: function(t, i) {
                var u, f, r;
                if (this._store = t, this._dirty = !1, u = this._immediate = i.immediate, f = Math.max(100, i.flushInterval || 1e4), !u) {
                    r = n.proxy(this.save, this), setInterval(r, f);
                    n(window).on("beforeunload", r);
                    window.cordova && document.addEventListener("pause", r, !1)
                }
            },
            notifyChanged: function() {
                this._dirty = !0, this._immediate && this.save()
            },
            load: function() {
                this._store._array = this._loadImpl(), this._dirty = !1
            },
            save: function() {
                this._dirty && (this._saveImpl(this._store._array), this._dirty = !1)
            },
            _loadImpl: r,
            _saveImpl: r
        }),
        o = e.inherit({
            ctor: function(n, t) {
                this.callBase(n, t);
                var i = t.name;
                if (!i) throw Error("Name is required");
                this._key = "dx-data-localStore-" + i
            },
            _loadImpl: function() {
                var n = localStorage.getItem(this._key);
                return n ? JSON.parse(n) : []
            },
            _saveImpl: function(n) {
                n.length ? localStorage.setItem(this._key, JSON.stringify(n)) : localStorage.removeItem(this._key)
            }
        }),
        s = {
            dom: o
        };
    u.LocalStore = u.ArrayStore.inherit({
        ctor: function(n) {
            n = typeof n == "string" ? {
                name: n
            } : n || {}, this.callBase(n), this._backend = new s[n.backend || "dom"](this, n), this._backend.load()
        },
        clear: function() {
            this._array = [], this._backend.notifyChanged()
        },
        _insertImpl: function(t) {
            var i = this._backend;
            return this.callBase(t).done(n.proxy(i.notifyChanged, i))
        },
        _updateImpl: function(t, i) {
            var r = this._backend;
            return this.callBase(t, i).done(n.proxy(r.notifyChanged, r))
        },
        _removeImpl: function(t) {
            var i = this._backend;
            return this.callBase(t).done(n.proxy(i.notifyChanged, i))
        }
    })
}(jQuery, DevExpress), function(n, t) {
    var h = t.Class,
        r = t.data,
        u = r.utils.odata,
        f = function(t) {
            if (!t) return t;
            var i = {};
            return n.each(t, function(n, t) {
                i[n] = u.serializeValue(t)
            }), i
        },
        e = function(n, t) {
            var i = u.keyConverters[n];
            if (!i) throw Error("Unknown key type: " + n);
            return i(t)
        },
        o = {
            _extractServiceOptions: function(n) {
                n = n || {}, this._url = String(n.url).replace(/\/+$/, ""), this._beforeSend = n.beforeSend, this._jsonp = n.jsonp, this._withCredentials = n.withCredentials
            },
            _sendRequest: function(n, t, i, r) {
                return u.sendRequest({
                    url: n,
                    method: t,
                    params: i || {},
                    payload: r
                }, {
                    beforeSend: this._beforeSend,
                    jsonp: this._jsonp,
                    withCredentials: this._withCredentials
                })
            }
        },
        s = r.Store.inherit({
            ctor: function(n) {
                this.callBase(n), this._extractServiceOptions(n), this._name = n.name, this._keyType = n.keyType
            },
            customLoadOptions: function() {
                return ["expand", "customQueryParams"]
            },
            _byKeyImpl: function(t, i) {
                var r = {};
                return i && i.expand && (r.$expand = n.map(n.makeArray(i.expand), u.serializePropName).join()), this._sendRequest(this._byKeyUrl(t), "GET", r)
            },
            createQuery: function(n) {
                return n = n || {}, r.query(this._url, {
                    beforeSend: this._beforeSend,
                    errorHandler: this._errorHandler,
                    jsonp: this._jsonp,
                    withCredentials: this._withCredentials,
                    params: f(n.customQueryParams),
                    expand: n.expand
                })
            },
            _insertImpl: function(t) {
                this._requireKey();
                var r = this,
                    i = n.Deferred();
                return n.when(this._sendRequest(this._url, "POST", null, t)).done(function(n) {
                    i.resolve(t, r._keyGetter(n))
                }).fail(n.proxy(i.reject, i)), i.promise()
            },
            _updateImpl: function(t, i) {
                var r = n.Deferred();
                return n.when(this._sendRequest(this._byKeyUrl(t), "MERGE", null, i)).done(function() {
                    r.resolve(t, i)
                }).fail(n.proxy(r.reject, r)), r.promise()
            },
            _removeImpl: function(t) {
                var i = n.Deferred();
                return n.when(this._sendRequest(this._byKeyUrl(t), "DELETE")).done(function() {
                    i.resolve(t)
                }).fail(n.proxy(i.reject, i)), i.promise()
            },
            _byKeyUrl: function(t) {
                var i = this._keyType;
                return n.isPlainObject(i) ? n.each(i, function(n, i) {
                    t[n] = e(i, t[n])
                }) : i && (t = e(i, t)), this._url + "(" + encodeURIComponent(u.serializeKey(t)) + ")"
            }
        }).include(o),
        c = h.inherit({
            ctor: function(t) {
                var i = this;
                i._extractServiceOptions(t), i._errorHandler = t.errorHandler, n.each(t.entities || [], function(r, u) {
                    i[r] = new s(n.extend({}, t, {
                        url: i._url + "/" + encodeURIComponent(u.name || r)
                    }, u))
                })
            },
            get: function(n, t) {
                return this.invoke(n, t, "GET")
            },
            invoke: function(t, i, u) {
                u = u || "POST";
                var e = n.Deferred();
                return n.when(this._sendRequest(this._url + "/" + encodeURIComponent(t), u, f(i))).done(function(n) {
                    n && t in n && (n = n[t]), e.resolve(n)
                }).fail([this._errorHandler, r._handleError, n.proxy(e.reject, e)]), e.promise()
            },
            objectLink: function(n, t) {
                var i = this[n];
                if (!i) throw Error("Unknown entity name or alias: " + n);
                return {
                    __metadata: {
                        uri: i._byKeyUrl(t)
                    }
                }
            }
        }).include(o);
    n.extend(r, {
        ODataStore: s,
        ODataContext: c
    })
}(jQuery, DevExpress), function(n, t) {
    function r(n) {
        return function(t, i) {
            t && t.getResponseHeader ? n.reject(Error(u.utils.errorMessageFromXhr(t, i))) : n.reject.apply(n, arguments)
        }
    }

    function f(n) {
        return "_customize" + t.inflector.camelize(n, !0)
    }

    function e(n) {
        return "_" + n + "Path"
    }
    var u = t.data;
    u.RestStore = u.Store.inherit({
        ctor: function(t) {
            var i = this;
            i.callBase(t), t = t || {}, i._url = String(t.url).replace(/\/+$/, ""), i._jsonp = t.jsonp, i._withCredentials = t.withCredentials, n.each(["Load", "Insert", "Update", "Remove", "ByKey", "Operation"], function() {
                var n = t["customize" + this];
                n && (i[f(this)] = n)
            }), n.each(["load", "insert", "update", "remove", "byKey"], function() {
                var n = t[this + "Path"];
                n && (i[e(this)] = n)
            })
        },
        _loadImpl: function(t) {
            var i = n.Deferred(),
                u = {
                    url: this._formatUrlNoKey("load"),
                    type: "GET"
                };
            return n.when(this._createAjax(u, "load", t)).done(n.proxy(i.resolve, i)).fail(r(i)), this._addFailHandlers(i.promise())
        },
        createQuery: function() {
            throw Error("Not supported");
        },
        _insertImpl: function(t) {
            var i = n.Deferred(),
                u = this,
                f = {
                    url: this._formatUrlNoKey("insert"),
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify(t)
                };
            return n.when(this._createAjax(f, "insert")).done(function(n) {
                i.resolve(t, u.key() && u._keyGetter(n))
            }).fail(r(i)), i.promise()
        },
        _updateImpl: function(t, i) {
            var u = n.Deferred(),
                f = {
                    url: this._formatUrlWithKey("update", t),
                    type: "PUT",
                    contentType: "application/json",
                    data: JSON.stringify(i)
                };
            return n.when(this._createAjax(f, "update")).done(function() {
                u.resolve(t, i)
            }).fail(r(u)), u.promise()
        },
        _removeImpl: function(t) {
            var i = n.Deferred(),
                u = {
                    url: this._formatUrlWithKey("remove", t),
                    type: "DELETE"
                };
            return n.when(this._createAjax(u, "remove")).done(function() {
                i.resolve(t)
            }).fail(r(i)), i.promise()
        },
        _byKeyImpl: function(t) {
            var i = n.Deferred(),
                u = {
                    url: this._formatUrlWithKey("byKey", t),
                    type: "GET"
                };
            return n.when(this._createAjax(u, "byKey")).done(function(n) {
                i.resolve(n)
            }).fail(r(i)), i.promise()
        },
        _createAjax: function(t, i, r) {
            function o(n) {
                return "done" in n && "fail" in n
            }
            var e, u;
            if (this._jsonp && t.type === "GET" ? t.dataType = "jsonp" : n.extend(!0, t, {
                    xhrFields: {
                        withCredentials: this._withCredentials
                    }
                }), e = this[f("operation")], e && (u = e(t, i, r), u)) {
                if (o(u)) return u;
                t = u
            }
            if (e = this[f(i)], e && (u = e(t, r), u)) {
                if (o(u)) return u;
                t = u
            }
            return n.ajax(t)
        },
        _formatUrlNoKey: function(t) {
            var r = this._url,
                i = this[e(t)];
            return i ? n.isFunction(i) ? i(r) : r + "/" + i : r
        },
        _formatUrlWithKey: function(t, i) {
            var u = this._url,
                r = this[e(t)];
            return r ? n.isFunction(r) ? r(u, i) : u + "/" + r + "/" + encodeURIComponent(i) : u + "/" + encodeURIComponent(i)
        }
    })
}(jQuery, DevExpress), function(n, t) {
    var r = t.data;
    r.SimpleStore = r.Store.inherit({
        ctor: function(n) {
            var t = this;
            t.callBase(n), n = n || {}, t.changed = n.changed, t.userLoadCallback = n.load, t.userLookupCallback = n.lookup
        },
        _loadImpl: function(t) {
            var r, i;
            if (!this.userLoadCallback) throw new Error("Load callback was not defined");
            return r = {
                refresh: t.refresh
            }, r.searchString = t.searchString, i = this.userLoadCallback(r), i || (i = (new n.Deferred).resolve([])), n.isArray(i) && (i = (new n.Deferred).resolve(i)), i
        },
        lookup: function(t, i, r) {
            if (!this.userLookupCallback) throw new Error("Lookup callback was not defined");
            var u = this.userLookupCallback(t, i, r);
            return n.isArray(u) && (u = u[0]), u || (u = (new n.Deferred).resolve([])), u.done || (u = (new n.Deferred).resolve(u)), u
        }
    })
}(jQuery, DevExpress), function(n, t, i) {
    var r = t.data,
        c = t.Class,
        s = "__key__",
        l = n.Deferred().resolve([]).promise(),
        f = c.inherit({
            ctor: function(t) {
                t = t || {};
                var u = t.store;
                n.isArray(u) && (u = new r.ArrayStore(u)), this._store = u, this._storeLoadOptions = this._extractLoadOptions(t), this._mapFunc = t.map, this._postProcessFunc = t.postProcess, this._pageIndex = 0, this._pageSize = t.pageSize !== i ? t.pageSize : 20, this._items = [], this._updateMode = t.updateMode || "item", this._isLoaded = !1, this._preferSync = t._preferSync, this._paginate = t.paginate, this._paginate === i && (this._paginate = !this._isGrouped()), this._isLastPage = !this._paginate, this.changed = n.Callbacks(), this.loadError = n.Callbacks(), u.updated.add(this._storeUpdatedHandler = n.proxy(this._handleStoreUpdated, this)), u.inserted.add(this._storeInsertedHandler = n.proxy(this._handleStoreInserted, this)), u.removed.add(this._storeRemovedHandler = n.proxy(this._handleStoreRemoved, this)), this._customizeFilters = n.Callbacks()
            },
            dispose: function() {
                this.changed.empty(), this.loadError.empty(), this._store.updated.remove(this._storeUpdatedHandler), delete this._storeUpdatedHandler, this._store.inserted.remove(this._storeInsertedHandler), delete this._storeInsertedHandler, this._store.removed.remove(this._storeRemovedHandler), delete this._storeRemovedHandler, delete this._store, this._disposed = !0
            },
            _extractLoadOptions: function(t) {
                var r = {},
                    i = ["sort", "filter", "select", "group"],
                    u = this._store.customLoadOptions();
                return u && (i = i.concat(u)), n.each(i, function() {
                    r[this] = t[this]
                }), r
            },
            loadOptions: function() {
                return this._storeLoadOptions
            },
            _accessStoreLoadOption: function(n, t) {
                var i = this._storeLoadOptions;
                if (arguments.length < 2) return i[n];
                i[n] = t, this.reload()
            },
            filter: function(t) {
                if (!arguments.length) return this._accessStoreLoadOption("filter");
                t && !n.isArray(t) && (t = n.makeArray(arguments)), this._accessStoreLoadOption("filter", t)
            },
            clearFilter: function() {
                this.filter(null)
            },
            sortBy: function(n) {
                arguments.length > 1 && (n = {
                    selector: arguments[0],
                    desc: arguments[1]
                }), this._accessStoreLoadOption("sort", n)
            },
            clearSort: function() {
                this.sortBy(null)
            },
            store: function() {
                return this._store
            },
            key: function() {
                return this._store && this._store.key()
            },
            _isGrouped: function() {
                return !!this._storeLoadOptions.group
            },
            _assignPageIndex: function(n) {
                this._pageIndex !== n && (this._pageIndex = n, this.load())
            },
            reload: function(n) {
                return this._pageIndex = 0, this._isLastPage = !this._paginate, this._loadCore(n)
            },
            load: function(n) {
                return this._loadCore(n)
            },
            isLoaded: function() {
                return this._isLoaded
            },
            lookup: function(t) {
                var r = new n.Deferred,
                    i = this,
                    f = t.key,
                    u;
                return t.lookupExpression = t.lookupExpression || i.key(), this._store.lookup ? this._store.lookup(f).done(function(n) {
                    if (!i._disposed) {
                        var t = i._transformLoadedData(n);
                        r.resolve(t[0])
                    }
                }) : t.lookupExpression && t.lookupExpression === i.key() ? this._loadSingleByKey(f).done(function(n) {
                    r.resolve(n)
                }) : (u = i._store.toDataSource(), u.load({
                    searchString: f,
                    searchMethod: "=",
                    searchField: t.lookupExpression,
                    silent: !0
                }).done(function() {
                    if (!i._disposed) {
                        var n = u.items(),
                            t = i._transformLoadedData(n);
                        r.resolve(t[0])
                    }
                }).always(function() {
                    u.dispose()
                })), r
            },
            nextPage: function(t) {
                if (t = t === i ? !0 : t, this._isLastPage) return l;
                this._pageIndex++;
                var r = {
                    append: t
                };
                return n.extend(r, this._searchCondition), this._loadCore(r)
            },
            _loadCore: function(r) {
                var h;
                r = r || {};
                var f = this,
                    o = n.Deferred(),
                    c = f.loadError,
                    e = n.extend(!0, {}, f._storeLoadOptions),
                    s;
                return !this.userDataSource && (r.searchField || e.searchFilter) && (e.filter && !n.isArray(e.filter[0]) && (e.filter = [e.filter]), e.filter = e.filter || [], s = r.searchField ? [r.searchField, r.searchMethod || "contains", r.searchString] : e.searchFilter, e.filter.push(s), f._storeLoadOptions.searchFilter = s), this._paginate && f._pageSize && n.extend(e, {
                    skip: f._pageIndex * f._pageSize,
                    take: f._pageSize
                }), n.extend(e, {
                    refresh: !f._paginate || f._pageIndex === 0,
                    searchString: r.searchString
                }), h = function() {
                    return f._disposed ? i : n.when(f._store.load(e)).done(function(n) {
                        var i = function() {
                            if (!f._disposed) {
                                var t = f._items;
                                n = f._transformLoadedData(n), r.append || t.splice(0, t.length), t.push.apply(t, n), (!n.length || !f._paginate || f._pageSize && n.length < f._pageSize) && (f._isLastPage = !0), f._isLoaded = !0, r.silent || f.changed.fire(), o.resolve(n)
                            }
                        };
                        f._preferSync ? i() : t.utils.executeAsync(i)
                    }).fail(n.proxy(o.reject, o))
                }, u.locked() ? u.addTask(h) : h(), o.promise().fail(n.proxy(c.fire, c))
            },
            _loadSingleByKey: function(t) {
                var i = this,
                    r = n.Deferred();
                return i._disposed || n.when(i._store.byKey(t)).done(function(n) {
                    if (!i._disposed) {
                        var t = i._transformLoadedData(n);
                        r.resolve(t[0])
                    }
                }), r.promise()
            },
            _transformLoadedData: function(t) {
                var i = this,
                    r;
                return r = n.map(n.makeArray(t), function(t, r) {
                    var f = i._store.keyOf(t),
                        u;
                    return u = i._mapFunc ? i._mapFunc(t, r) : typeof t == "object" ? n.extend({}, t) : t, typeof t == "object" && (u[s] = f), u
                }), i._postProcessFunc && (r = i._postProcessFunc(r)), r
            },
            _localIndexByKey: function(n) {
                for (var i = this._items, f = i.length, e = this._store.key(), u, t = 0; t < f; t++)
                    if (u = i[t][s], r.utils.keysEqual(e, u, n)) return t;
                return -1
            },
            _handleStoreUpdated: function(n) {
                var t = this,
                    i;
                switch (t._updateMode) {
                    case "full":
                        this.reload();
                        break;
                    case "item":
                        if (t._isGrouped()) return;
                        if (i = this._localIndexByKey(n), i < 0) return;
                        t._loadSingleByKey(n).done(function(n) {
                            t._items.splice(i, 1, n), t.changed.fire()
                        })
                }
            },
            _handleStoreInserted: function(n, t) {
                var i = this;
                switch (i._updateMode) {
                    case "full":
                        i.reload();
                        break;
                    case "item":
                        if (i._isGrouped()) return;
                        i._loadSingleByKey(t).done(function(n) {
                            i._items.push(n), i.changed.fire()
                        })
                }
            },
            _handleStoreRemoved: function(n) {
                var t = this,
                    i;
                switch (t._updateMode) {
                    case "full":
                        t.reload();
                        break;
                    case "item":
                        if (t._isGrouped()) return;
                        if (i = this._localIndexByKey(n), i < 0) return;
                        t._items.splice(i, 1), t.changed.fire()
                }
            }
        }),
        e = f.inherit({
            items: function() {
                return this._items
            },
            pageIndex: function(n) {
                if (n === i) return this._pageIndex;
                this._assignPageIndex(n)
            },
            isLastPage: function() {
                return this._isLastPage
            }
        }),
        o = f.inherit({
            ctor: function(n, t) {
                this.callBase(n, t);
                var i = ko.observable();
                this.changed.add(function() {
                    i.notifySubscribers()
                }), this.items = ko.computed(function() {
                    return i(), this._items
                }, this), this.pageIndex = ko.computed({
                    read: function() {
                        return i(), this._pageIndex
                    },
                    write: function(n) {
                        this._assignPageIndex(n)
                    }
                }, this), this.isLastPage = ko.computed(function() {
                    return i(), this._isLastPage
                }, this)
            },
            dispose: function() {
                this.callBase(), this.items.dispose(), this.pageIndex.dispose(), this.isLastPage.dispose()
            }
        }),
        h, u;
    r.Store.redefine({
        toDataSource: function(t, i) {
            var r;
            if (t = n.extend({
                    store: this
                }, t), n.isFunction(i)) r = new i(t);
            else switch (i) {
                case "simple":
                    r = new e(t);
                    break;
                default:
                    r = new o(t)
            }
            return r && this.changed && n.isFunction(this.changed.add) && this.changed.add(function() {
                r.reload()
            }), t.userDataSource && (r.userDataSource = t.userDataSource), r
        }
    }), h = function(n) {
        var i = window.ko ? o : e;
        return new t.data.SimpleStore(n).toDataSource({
            pageSize: null,
            userDataSource: !0
        }, i)
    }, u = new function() {
        var r = [],
            i = 0,
            u = function() {
                i++
            },
            f = function() {
                i--, i < 1 && (n.each(r, function() {
                    t.enqueue(this)
                }), r = [])
            };
        return {
            obtain: u,
            release: f,
            locked: function() {
                return i > 0
            },
            addTask: function(n) {
                r.push(n)
            }
        }
    }, n.extend(!0, r, {
        DataSource: f,
        KoDataSource: o,
        SimpleDataSource: e,
        createDataSource: h,
        utils: {
            DataSourceLoadLock: u
        }
    })
}(jQuery, DevExpress), DevExpress.social = {}, function(n, t, i) {
    var ut = t.social,
        r = window.location,
        ft = window.navigator,
        p = window.encodeURIComponent,
        et = window.decodeURIComponent,
        o = ft.standalone,
        s = !1,
        y;
    if (window.cordova) n(document).on("deviceready", function() {
        s = !0
    });
    var w = "dx-facebook-access-token",
        h = "dx-facebook-step1",
        c = "dx-facebook-step2",
        u = null,
        b = null,
        k = n.Callbacks(),
        f, d = function() {
            return !!u
        },
        ot = function() {
            return {
                accessToken: u,
                expiresIn: u ? b : 0
            }
        },
        l = ut.Facebook = {
            loginRedirectUrl: "FacebookLoginCallback.html",
            connectionChanged: k,
            isConnected: d,
            getAccessTokenObject: ot,
            jsonp: !1
        },
        st = function(n, t) {
            t = t || {}, f = s ? "https://www.facebook.com/connect/login_success.html" : ht();
            var u = (t.permissions || []).join(),
                i = "https://www.facebook.com/dialog/oauth?display=popup&client_id=" + n + "&redirect_uri=" + p(f) + "&scope=" + p(u) + "&response_type=token";
            o && e(h, r.href), s ? lt(i) : ct(i)
        },
        ht = function() {
            var n = r.pathname.split(/\//g);
            return n.pop(), n.push(l.loginRedirectUrl), r.protocol + "//" + r.host + n.join("/")
        },
        ct = function(n) {
            var t = 512,
                i = 320,
                r = (screen.width - t) / 2,
                u = (screen.height - i) / 2;
            window.open(n, null, "width=" + t + ",height=" + i + ",toolbar=0,scrollbars=0,status=0,resizable=0,menuBar=0,left=" + r + ",top=" + u)
        },
        lt = function(n) {
            var t = window.open(n, "_blank");
            t.addEventListener("exit", function() {
                f = null
            }), t.addEventListener("loadstop", function(n) {
                var i = unescape(n.url);
                i.indexOf(f) === 0 && (t.close(), a(i))
            })
        },
        at = function() {
            var n = window.opener;
            o ? (e(c, r.href), r.href = v(h)) : n && n.DevExpress && (n.DevExpress.social.Facebook._processLoginRedirectUrl(r.href), window.close())
        },
        a = function(n) {
            var t = vt(n);
            b = t.expires_in, g(t.access_token), f = null
        },
        vt = function(t) {
            var r = t.split("#")[1],
                u, i;
            return r ? (u = r.split(/&/g), i = {}, n.each(u, function() {
                var t = this.split("=");
                i[t[0]] = et(t[1])
            }), i) : {}
        },
        yt = function() {
            g(null)
        },
        g = function(n) {
            n !== u && (u = n, e(w, n), k.fire(!!n))
        },
        nt = function(t, r, f) {
            if (!d()) throw Error("Not connected");
            typeof r != "string" && (f = r, r = i), r = (r || "get").toLowerCase();
            var e = n.Deferred(),
                o = arguments;
            return n.ajax({
                url: "https://graph.facebook.com/" + t,
                type: r,
                data: n.extend({
                    access_token: u
                }, f),
                dataType: l.jsonp && r === "get" ? "jsonp" : "json"
            }).done(function(n) {
                n = n || tt(), n.error ? e.reject(n.error) : e.resolve(n)
            }).fail(function(i) {
                var u, s;
                try {
                    if (u = n.parseJSON(i.responseText), s = o[3] || 0, s++ < 3 && u.error.code == 190 && u.error.error_subcode == 466) {
                        setTimeout(function() {
                            nt(t, r, f, s).done(function(n) {
                                e.resolve(n)
                            }).fail(function(n) {
                                e.reject(n)
                            })
                        }, 500);
                        return
                    }
                } catch (h) {
                    u = tt()
                }
                e.reject(u.error)
            }), e.promise()
        },
        tt = function() {
            return {
                error: {
                    message: "Unknown error"
                }
            }
        },
        it = function() {
            if (!rt()) throw Error("HTML5 sessionStorage or jQuery.cookie plugin is required");
        },
        rt = function() {
            return !!(n.cookie || window.sessionStorage)
        },
        e = function(t, i) {
            it(), i = JSON.stringify(i), window.sessionStorage ? i === null ? sess.removeItem(t) : sessionStorage.setItem(t, i) : n.cookie(t, i)
        },
        v = function(t) {
            it();
            try {
                return JSON.parse(window.sessionStorage ? sessionStorage.getItem(t) : n.cookie(t))
            } catch (i) {
                return null
            }
        };
    rt() && (u = v(w)), o && (y = v(c), y && (a(y), e(h, null), e(c, null))), n.extend(l, {
        login: st,
        logout: yt,
        handleLoginRedirect: at,
        _processLoginRedirectUrl: a,
        api: nt
    })
}(jQuery, DevExpress), function(n, t) {
    var r = t.ui = {},
        o = function(i) {
            var e, r;
            i = n.extend({}, i);
            var u = i.allowZoom,
                f = i.allowPan,
                o = "meta[name=viewport]";
            if (n(o).length || n("<meta />").attr("name", "viewport").appendTo("head"), e = ["width=device-width"], r = [], u ? r.push("pinch-zoom") : e.push("initial-scale=1.0", "maximum-scale=1.0"), f && r.push("pan-x", "pan-y"), f || u ? n("html").css("-ms-overflow-style", "-ms-autohiding-scrollbar") : n("html, body").css("overflow", "hidden"), n(o).attr("content", e.join()), n("html").css("-ms-touch-action", r.join(" ") || "none"), t.support.touch) n(document).on("touchmove", function(n) {
                var t = n.originalEvent.touches.length;
                (!f && t === 1 || !u && t > 1) && n.preventDefault()
            });
            navigator.userAgent.match(/IEMobile\/10\.0/) && (n(document.head).append(n("<style/>").text("@-ms-viewport{ width:auto!important; user-zoom: fixed; max-zoom: 1; min-zoom: 1; }")), n(window).bind("load resize", function() {
                var r = 44,
                    u = 21,
                    f = 72,
                    i = "Notify" in window.external,
                    e = i ? r : 0,
                    o = i ? u : f,
                    s = n(window).width() < n(window).height() ? Math.round(screen.availHeight * (document.body.clientWidth / screen.availWidth)) - o : Math.round(screen.availWidth * (document.body.clientHeight / screen.availHeight)) - e;
                document.body.style.setProperty("min-height", s + "px", "important")
            }))
        },
        f = t.devices.fromUA(),
        s = function() {
            var n = window.pageYOffset
        },
        h = function() {
            var i = 60,
                r = f.phone,
                u = !navigator.standalone && /safari/i.test(navigator.userAgent),
                e = function() {
                    window.scrollTo(0, 1)
                },
                t = function(n) {
                    return n.is(":input")
                };
            return function(f) {
                var o, h = n(f.target),
                    s = n(document.activeElement),
                    c = f.type === "touchstart";
                if (c) {
                    if (t(h)) return;
                    t(s) && s.blur()
                } else if (t(s)) return;
                r && u && (o = n(window).height() + i, n(document.body).height() !== o && n(document.body).height(o)), e()
            }
        }(),
        e, u;
    if (f.ios && t.devices.iosVersion()[0] < 7) {
        n(window).on("load resize touchstart", h);
        n(function() {
            n(document.body).on("focusout", s)
        })
    }
    e = t.Class.inherit({
        getTemplateClass: function() {
            return u
        },
        supportDefaultTemplate: function() {
            return !1
        },
        getDefaultTemplate: function() {
            return null
        }
    }), u = t.Class.inherit({
        ctor: function(t) {
            this._template = this._element = n(t)
        },
        render: function(n) {
            return n.append(this._template), this._template
        }
    }), t.registerActionExecutor({
        designMode: {
            validate: function(n) {
                !t.designMode || n.context instanceof r.dxScrollable || n.context instanceof r.dxScrollView || (n.canceled = !0)
            }
        },
        gesture: {
            validate: function(t) {
                var f = t.args,
                    i = t.context,
                    e = f.length && f[0].component,
                    u = r.gestureUtils.recentGestureOwner();
                !r.gestureUtils.hasRecent() || t.allowedForGesture || n.isFunction(i) && u instanceof i || u === i || u === e || (t.canceled = !0)
            }
        },
        disabled: {
            validate: function(n) {
                if (n.args.length) {
                    var t = n.args[0].element;
                    t && t.is(".dx-state-disabled, .dx-state-disabled *") && (n.canceled = !0)
                }
            }
        },
        disabledCollectionContainerWidgetItem: {
            validate: function(n) {
                if (n.args.length) {
                    var t = n.args[0].itemElement;
                    t && t.is(".dx-state-disabled *") && (n.canceled = !0)
                }
            }
        }
    }), n.extend(r, {
        TemplateProvider: e,
        Template: u,
        initViewport: o
    })
}(jQuery, DevExpress), function(n, t) {
    var u = t.ui,
        o = {
            text: "Ok",
            clickAction: function() {
                return !0
            }
        },
        r = "dx-dialog",
        s = r + "-root",
        h = r + "-content",
        c = r + "-message",
        l = r + "-buttons",
        a = r + "-button",
        f = function(i) {
            function g() {
                return f.show(), e.promise()
            }

            function p(n) {
                f.hide().done(function() {
                    f._element().remove()
                }), e.resolve(v || n)
            }
            var w = this,
                v, e;
            if (!u.dxPopup) throw new Error("DevExpress.ui.dxPopup required.");
            e = n.Deferred(), i = n.extend(u.optionsByDevice(t.devices.current(), "dxDialog"), i);
            var b = n(".dx-viewport"),
                k = n("<div/>").addClass(r).appendTo(b),
                d = n("<div/>").addClass(c).html(String(i.message)),
                y = n("<div/>").addClass(l),
                f = k.dxPopup({
                    title: i.title || w.title,
                    height: "auto",
                    width: function() {
                        var r = n(window).height() > n(window).width(),
                            t = (r ? "p" : "l") + "Width";
                        return i.hasOwnProperty(t) ? i[t] : i.width
                    }
                }).data("dxPopup");
            return n.each(i.buttons || [o], function() {
                var i = n("<div/>").addClass(a).appendTo(y),
                    r = new t.Action(this.clickAction, {
                        context: f
                    });
                i.dxButton(n.extend(this, {
                    clickAction: function() {
                        v = r.execute(arguments), p()
                    }
                }))
            }), f._element().addClass(s), f.content().addClass(h).append(d).append(y), {
                show: g,
                hide: p
            }
        },
        e = function(t, i) {
            var r, u = n.isPlainObject(t) ? t : {
                title: i,
                message: t
            };
            return r = f(u), r.show()
        },
        v = function(t, i) {
            var r, u = n.isPlainObject(t) ? t : {
                title: i,
                message: t,
                buttons: [{
                    text: "Yes",
                    clickAction: function() {
                        return !0
                    }
                }, {
                    text: "No",
                    clickAction: function() {
                        return !1
                    }
                }]
            };
            return r = f(u), r.show()
        },
        y = function(i, r, f) {
            var s, o = n.isPlainObject(i) ? i : {
                message: i
            };
            if (!u.dxToast) {
                e(o.message);
                return
            }
            r && (o.type = r), f && (o.displayTime = f), s = n("<div/>").appendTo(n(".dx-viewport")).dxToast(o).data("dxToast"), s.option("hiddenAction", function() {
                this._element().remove(), new t.Action(o.hiddenAction, {
                    context: this
                }).execute(arguments)
            }), s.show()
        };
    n.extend(u, {
        notify: y,
        dialog: {
            custom: f,
            alert: e,
            confirm: v
        }
    })
}(jQuery, DevExpress), function(n, t, i) {
    var r = window.ko,
        h, g;
    if (r) {
        (function(n) {
            if (n = n.split("."), n[0] < 2 || n[0] == 2 && n[1] < 2) throw Error("Your version of KnockoutJS is too old. Please upgrade KnockoutJS to 2.2.0 or later.");
        })(r.version);
        var e = t.ui,
            y = t.inflector,
            o = "data-bind",
            p = "unknown",
            tt = "_",
            c = "dxKoLocks",
            l = "M2O",
            a = "O2M",
            w = "dxKoCreation",
            s = r.bindingProvider.instance,
            b = r.jsonExpressionRewriting.parseObjectLiteral,
            v = n("<div><\/div>"),
            it = function(n) {
                return n in e && e[n].subclassOf && e[n].subclassOf(e.Component)
            },
            k = function(n) {
                return n.replace(/^['"]|['"]$/g, "")
            },
            d = function(t) {
                var i;
                if (t = n(t), i = t.attr(o), i) {
                    var f = b(i),
                        r = [],
                        u = !1;
                    n.each(f, function() {
                        var n = k(this.key),
                            i = "data-" + y.underscore(n);
                        it(n) && !t.attr(i) ? (u = !0, t.attr(i, this.value), r.push({
                            key: n,
                            value: "true"
                        })) : r.push(this)
                    }), u && t.attr(o, n.map(r, function(n) {
                        return n.key + ": " + n.value
                    }).join(", "))
                }
            },
            rt = {
                _original: s,
                nodeHasBindings: function(n) {
                    return s.nodeHasBindings(n)
                },
                getBindings: function(n, t) {
                    return d(n), s.getBindings(n, t)
                }
            },
            ut = function() {
                var n = {},
                    t = function(t) {
                        return n[t] || 0
                    };
                return {
                    obtain: function(i) {
                        n[i] = t(i) + 1
                    },
                    release: function(i) {
                        var r = t(i);
                        r === 1 ? delete n[i] : n[i] = r - 1
                    },
                    locked: function(n) {
                        return t(n) > 0
                    }
                }
            },
            ft = function(t) {
                var i = function(i) {
                    var f = n.trim(i.attr("data-" + y.underscore(t))),
                        r, u;
                    return f.charAt(0) === "{" ? (r = b(f), u = r[0], u && p in u && (r = n.trim(u[p]))) : r = f, r === "" && (r = []), r
                };
                r.bindingHandlers[t] = {
                    init: function(u) {
                        var f = n(u),
                            y = i(f),
                            h = {},
                            p = {},
                            b = function(n, t) {
                                v.attr(o, n + ":" + t);
                                try {
                                    return s.getBindings(v[0], r.contextFor(u))[n]
                                } finally {
                                    v.removeAttr(o)
                                }
                            },
                            d = function(n, i) {
                                var e = f.data(t),
                                    u = f.data(c),
                                    o = r.utils.unwrapObservable(i);
                                if (e) {
                                    if (u.locked(a)) return;
                                    u.obtain(l);
                                    try {
                                        e.option(n, o)
                                    } finally {
                                        u.release(l)
                                    }
                                } else h[n] = o, r.isWriteableObservable(i) && (p[n] = i)
                            },
                            g = function(n, t) {
                                if (n in p) {
                                    var r = this._$element,
                                        i = r.data(c);
                                    if (!i.locked(l)) {
                                        i.obtain(a);
                                        try {
                                            p[n](t)
                                        } finally {
                                            i.release(a)
                                        }
                                    }
                                }
                            };
                        return r.utils.domNodeDisposal.addDisposeCallback(u, function() {
                            n.each(f.data("dxComponents") || [], function(n, t) {
                                f.data(t)._dispose()
                            })
                        }), typeof y == "string" ? r.computed(function() {
                            var i = f.data(t);
                            i && i.beginUpdate(), n.each(r.utils.unwrapObservable(b(tt, y)), d), i && i.endUpdate()
                        }, null, {
                            disposeWhenNodeIsRemoved: u
                        }) : n.each(y, function() {
                            var t = k(n.trim(this.key)),
                                i = n.trim(this.value);
                            r.computed(function() {
                                var n = b(t, i);
                                d(t, n)
                            }, null, {
                                disposeWhenNodeIsRemoved: u
                            })
                        }), h && (f.data(w, !0), f[t](h), h = null, f.data(c, new ut), f.data(t).optionChanged.add(g)), {
                            controlsDescendantBindings: e[t].subclassOf(e.Widget)
                        }
                    }
                }
            };
        r.bindingProvider.instance = rt, h = e.Template.inherit({
            ctor: function(t) {
                this.callBase.apply(this, arguments), this._template = n("<div />").append(t), this._cleanTemplateElement(), this._registerKoTemplate()
            },
            _cleanTemplateElement: function() {
                this._element.each(function() {
                    r.cleanNode(this)
                })
            },
            _registerKoTemplate: function() {
                var n = this._template.get(0);
                new r.templateSources.anonymousTemplate(n).nodes(n)
            },
            render: function(t, u) {
                var e;
                u = u !== i ? u : r.dataFor(t.get(0)) || {};
                var o = r.contextFor(t[0]),
                    s = o ? o.createChildContext(u) : u,
                    f = n("<div />").appendTo(t);
                return r.renderTemplate(this._template.get(0), s, null, f.get(0)), e = f.contents(), t.append(e), f.remove(), e
            }
        }), g = e.TemplateProvider.inherit({
            getTemplateClass: function(n) {
                return this._createdWithKo(n) ? h : this.callBase(n)
            },
            supportDefaultTemplate: function(n) {
                return this._createdWithKo(n) ? !0 : this.callBase(n)
            },
            getDefaultTemplate: function(n) {
                if (this._createdWithKo(n)) return nt(n.NAME)
            },
            _createdWithKo: function(n) {
                return !!n._element().data(w)
            }
        }), r.bindingHandlers.dxAction = {
            update: function(i, u, f, e) {
                var o = n(i),
                    s = r.utils.unwrapObservable(u()),
                    h = new t.Action(s, {
                        context: i
                    });
                o.off(".dxActionBinding").on("click.dxActionBinding", function() {
                    h.execute({
                        element: o,
                        model: e,
                        evaluate: function(n) {
                            var u = e,
                                f;
                            return n.length > 0 && n[0] === "$" && (u = r.contextFor(i)), f = t.data.utils.compileGetter(n), f(u)
                        }
                    })
                })
            }
        };
        var nt = function() {
                var i = {};
                return function(r) {
                    if (u[r] || (r = "base"), !i[r]) {
                        var e = u[r](),
                            f = t.utils.createMarkupFromString(e);
                        f.each(function() {
                            d(n(this))
                        }), i[r] = new h(f)
                    }
                    return i[r]
                }
            }(),
            f = function(t, r, u) {
                u = u === i ? !0 : u;
                var f = n.map(r, function(n, t) {
                    return t + ":" + n
                }).join(",");
                return "<" + t + ' data-bind="' + f + '">' + (u ? "<\/" + t + ">" : "")
            },
            et = {
                visible: "$data.visible === undefined || $data.visible",
                css: "{ 'dx-state-disabled': $data.disabled }"
            },
            u = {
                base: function() {
                    var n = [f("div", et, !1)],
                        t = f("div", {
                            html: "html"
                        }),
                        i = f("div", {
                            text: "text"
                        }),
                        r = f("div", {
                            html: "String($data)"
                        });
                    return n.push("<!-- ko if: $data.html -->", t, "<!-- /ko -->", "<!-- ko if: !$data.html && $data.text -->", i, "<!-- /ko -->", "<!-- ko ifnot: $.isPlainObject($data) -->", r, "<!-- /ko -->", "<\/div>"), n.join("")
                }
            };
        u.dxList = function() {
            var n = u.base(),
                t = f("div", {
                    html: "key"
                });
            return n = [n.substring(0, n.length - 6), "<!-- ko if: $data.key -->" + t + "<!-- /ko -->", "<\/div>"], n.join("")
        }, u.dxToolbar = function() {
            var i = u.base();
            return i = [i.substring(0, i.length - 6), "<!-- ko if: $data.widget -->"], n.each(["button", "tabs", "dropDownMenu"], function() {
                var r = t.inflector.camelize(["dx", "-", this].join("")),
                    n = {};
                n[r] = "$data.options", i.push("<!-- ko if: $data.widget === '", this, "' -->", f("div", n), "<!-- /ko -->")
            }), i.push("<!-- /ko -->"), i.join("")
        }, u.dxGallery = function() {
            var n = u.base(),
                t = f("div", {
                    html: "String($data)"
                }),
                i = f("img", {
                    attr: "{ src: String($data) }"
                }, !1);
            return n = n.replace(t, i)
        }, u.dxTabs = function() {
            var n = u.base(),
                t = f("div", {
                    text: "text"
                }),
                i = f("span", {
                    attr: "{ 'class': 'dx-icon-' + $data.icon }",
                    css: "{ 'dx-icon': true }"
                }),
                r = f("img", {
                    attr: "{ src: $data.iconSrc }",
                    css: "{ 'dx-icon': true }"
                }, !1),
                e = "<!-- ko if: $data.icon -->" + i + "<!-- /ko --><!-- ko if: !$data.icon && $data.iconSrc -->" + r + '<!-- /ko --><span class="dx-tab-text" data-bind="text: $data.text"><\/span>';
            return n = n.replace("<!-- ko if: !$data.html && $data.text -->", "<!-- ko if: !$data.html && ($data.text || $data.icon || $data.iconSrc) -->").replace(t, e)
        }, u.dxActionSheet = function() {
            return f("div", {
                dxButton: "{ text: $data.text, clickAction: $data.clickAction, type: $data.type, disabled: !!$data.disabled }"
            })
        }, u.dxNavBar = u.dxTabs, n.extend(e, {
            registerComponentKoBinding: ft,
            TemplateProvider: g,
            Template: h,
            defaultTemplate: nt
        })
    }
}(jQuery, DevExpress), function(n, t, i) {
    var u = t.ui,
        f = t.support,
        r = f.touch,
        e = 400,
        o = function() {
            var u = null,
                o = n.Callbacks(),
                f, s = function(n) {
                    f = n || this, clearTimeout(u), u = null, o.fire()
                },
                h = function(n) {
                    u || n && f !== n || (u = setTimeout(function() {
                        f = i, u = null
                    }, e))
                },
                c = function(n) {
                    n && f !== n || (f = i, clearTimeout(u), u = null)
                },
                l = function() {
                    return f
                },
                a = function() {
                    return !!f
                },
                v = /^4\.0/.test(t.devices.androidVersion()) && navigator.userAgent.indexOf("Chrome") === -1,
                y = function() {
                    r && (v ? p() : document.activeElement && document.activeElement.blur())
                },
                p = function() {
                    var t = n("<input>").addClass("dx-hidden-input").appendTo("body");
                    setTimeout(function() {
                        t.focus(), setTimeout(function() {
                            t.hide(), t.remove()
                        }, 100)
                    }, 100)
                },
                w = function(n) {
                    r && n.preventDefault()
                },
                b = function(t) {
                    return n(t.target).is("input, textarea, select")
                };
            return {
                gestureStartCallbacks: o,
                preventHangingCursor: y,
                preventNativeElastic: w,
                needSkipEvent: b,
                notifyStart: s,
                notifyEnd: h,
                hasRecent: a,
                recentGestureOwner: l,
                forget: c
            }
        }();
    u.gestureUtils = o
}(jQuery, DevExpress), function(n, t) {
    var r = t.data,
        u = "_dataSourceOptions",
        e = "_handleDataSourceChanged",
        f = "_handleDataSourceLoadError";
    t.ui.DataHelperMixin = {
        ctor: function() {
            this.disposing.add(function() {
                this._disposeDataSource()
            })
        },
        _initDataSource: function() {
            var i = this,
                o = i.option("dataSource"),
                s, h = u in this ? this[u]() : {},
                c = i._dataSourceType ? i._dataSourceType() : r.SimpleDataSource;
            if (i._disposeDataSource(), o) {
                if (n.isArray(o)) s = new r.ArrayStore(o).toDataSource(h, c);
                else if (n.isPlainObject(o))
                    if ("load" in o) s = r.createDataSource(o);
                    else {
                        if (!o.store && !t.designMode) throw Error("Please specify 'load' function for the dataSource");
                        s = new c(n.extend(!0, {}, h, o))
                    }
                else if (o instanceof r.DataSource) i._sharedDataSource = !0, s = o;
                else if (o instanceof r.Store) s = o.toDataSource(h, c);
                else throw Error("Invalid dataSource option");
                i._dataSource = s, s.changed.add(i._dataSourceChangedHandler = function() {
                    i._dataSourceLoading = !1, i[e](s.items())
                }), f in i && s.loadError.add(i._dataSourceLoadErrorHandler = n.proxy(i[f], i))
            }
        },
        _loadDataSource: function() {
            var n = this._dataSource;
            n && (n.isLoaded() ? this._dataSourceChangedHandler() : (this._dataSourceLoading = !0, n.load()))
        },
        _disposeDataSource: function() {
            this._dataSource && (this._sharedDataSource ? (delete this._sharedDataSource, this._dataSource.changed.remove(this._dataSourceChangedHandler), this._dataSource.loadError.remove(this._dataSourceLoadErrorHandler)) : this._dataSource.dispose(), delete this._dataSource, delete this._dataSourceChangedHandler, delete this._dataSourceLoadErrorHandler)
        }
    }
}(jQuery, DevExpress), function(n, t) {
    var o = t.ui,
        s = o.gestureUtils,
        r = t.Class.inherit({
            EVENT_SOURCES_REGEX: {
                mouse: /^mouse/i,
                touch: /^touch/i,
                keyboard: /^key/i
            },
            EVENTS: {
                click: "click",
                start: "touchstart mousedown",
                move: "touchmove mousemove",
                end: "touchend mouseup",
                cancel: "touchcancel",
                wheel: "mousewheel"
            },
            ctor: function(n) {
                this._namespace = n
            },
            eventSource: function(t) {
                var i = "other";
                return n.each(this.EVENT_SOURCES_REGEX, function(n) {
                    if (this.test(t.type)) return i = n, !1
                }), i
            },
            isMouseEvent: function(n) {
                return this.eventSource(n) === "mouse"
            },
            isTouchEvent: function(n) {
                return this.eventSource(n) === "touch"
            },
            isKeyboardEvent: function() {
                return this.eventSource(e) === "keyboard"
            },
            eventName: function(t) {
                var r = this,
                    i = this.EVENTS[t] || t;
                return i = i.split(/\s+/g), n.each(i, function(n, t) {
                    i[n] = t + "." + r._namespace
                }), i.join(" ")
            },
            eventX: function(n) {
                return this.isMouseEvent(n) ? n.pageX : this.isTouchEvent(n) ? n.originalEvent.touches[0].pageX : void 0
            },
            eventY: function(n) {
                return this.isMouseEvent(n) ? n.pageY : this.isTouchEvent(n) ? n.originalEvent.touches[0].pageY : void 0
            },
            eventData: function(n) {
                if (this.isMouseEvent(n)) return {
                    x: n.pageX,
                    y: n.pageY,
                    time: n.timeStamp
                };
                if (this.isTouchEvent(n)) {
                    var t = (n.changedTouches || n.originalEvent.changedTouches)[0];
                    return {
                        x: t.pageX,
                        y: t.pageY,
                        time: n.timeStamp
                    }
                }
            },
            eventDelta: function(n, t) {
                return {
                    x: t.x - n.x,
                    y: t.y - n.y,
                    time: t.time - n.time || 1
                }
            },
            hasTouches: function(n) {
                return this.isMouseEvent(n) ? 0 : this.isTouchEvent(n) ? n.originalEvent.touches.length : void 0
            },
            needSkipEvent: function(n) {
                return this.isMouseEvent(n) ? s.needSkipEvent(n) || n.which > 1 : this.isTouchEvent(n) ? (n.changedTouches || n.originalEvent.changedTouches).length !== 1 : void 0
            }
        }),
        h = 400,
        u = !1,
        f = null;
    t.registerActionExecutor("ignoreMouseAfterTouch", {
        validate: function(t) {
            var i = t.args[0];
            (i && i.jQueryEvent && (i = i.jQueryEvent), i instanceof n.Event) && (r.prototype.isTouchEvent(i) ? (u = !0, clearTimeout(f), f = setTimeout(function() {
                u = !1
            }, h)) : r.prototype.isMouseEvent(i) && u && (t.canceled = !0))
        }
    }), t.ui.EventHelper = r
}(jQuery, DevExpress), function(n, t) {
    var e = "dxSpecialEvents",
        f = e + "HoldTimer",
        u = new t.ui.EventHelper(e),
        s = u.eventName("start"),
        h = u.eventName("end"),
        v = u.eventName("cancel"),
        c = n.event,
        l = c.special,
        y = l["dx:hold"] = {
            HOLD_TIMEOUT: 750,
            setup: function(t) {
                var r = this,
                    i = n(r),
                    u = function(u) {
                        i.data(f) || i.data(f, setTimeout(function() {
                            i.removeData(f), c.dispatch.call(r, n.Event("dx:hold", {
                                target: u.target
                            }))
                        }, t && "timeout" in t ? t.timeout : y.HOLD_TIMEOUT))
                    },
                    e = function() {
                        clearTimeout(i.data(f)), i.removeData(f)
                    };
                i.on(s + ".dxHold", u).on(h + ".dxHold", e)
            },
            teardown: function() {
                var t = n(this);
                clearTimeout(t.data(f)), t.removeData(f).off(".dxHold")
            }
        },
        p = 600,
        o = !1,
        a = null,
        r = l["dx:click"] = {
            TOUCH_BOUNDARY: 10,
            _trackingClick: !1,
            _skipNextClick: !1,
            _$target: null,
            _startX: 0,
            _startY: 0,
            _touchWasMoved: function(n) {
                var t = u.eventData(n),
                    i = r.TOUCH_BOUNDARY;
                return Math.abs(t.x - r._startX) > i || Math.abs(t.y - r._startY) > i
            },
            _handleStart: function(t) {
                if (!u.isMouseEvent(t)) {
                    var i = t.originalEvent.targetTouches,
                        f = i[0];
                    i.length > 1 || (r._trackingClick = !0, r._$target = n(t.target), r._startX = f.pageX, r._startY = f.pageY)
                }
            },
            _handleClick: function(t) {
                r._skipNextClick || (t.type = "dx:click", n(t.currentTarget).trigger(t)), r._skipNextClick = !1
            },
            _handleEnd: function(n) {
                (u.isTouchEvent(n) ? (o = !0, clearTimeout(a), a = setTimeout(function() {
                    o = !1
                }, p)) : u.isMouseEvent(n) && o && (r._skipNextClick = !0), u.isMouseEvent(n)) || (r._touchWasMoved(n) && (r._trackingClick = !1, r._$target = null), r._trackingClick) && (r._trackingClick = !1, r._$target.trigger("dx:click"))
            },
            _handleCancel: function() {
                r._trackingClick = !1, r._$target = null
            },
            setup: function() {
                n(this).on(["click", e, "dxClick"].join("."), n.proxy(r._handleClick, this)).on(s + ".dxClick", n.proxy(r._handleStart, this)).on(h + ".dxClick", n.proxy(r._handleEnd, this)).on(v + ".dxClick", n.proxy(r._handleCancel, this))
            },
            teardown: function() {
                n(this).off(".dxClick")
            }
        }
}(jQuery, DevExpress), function(n, t, i) {
    function o(t, i) {
        t.each(function() {
            var t = this.getElementsByTagName ? this.getElementsByTagName("*") : [],
                r, u;
            for (i && (t = jQuery.merge([this], t)), r = 0;
                (u = t[r]) != null; r++) n.each(y(u), function() {
                this._dispose()
            }), e && ko.cleanNode(u)
        })
    }
    var f = "dxComponents",
        e = !!window.ko,
        r = t.ui,
        u = t.data.utils,
        l = "dx-state-disabled",
        a = t.Class.inherit({
            NAME: null,
            _defaultOptions: function() {
                return {
                    disabled: !1
                }
            },
            ctor: function(i, u) {
                this._$element = n(i), this._element().data(this.NAME, this), this._element().data(f) || this._element().data(f, []), this._element().data(f).push(this.NAME), this._options = {}, this._updateLockCount = 0, this._requireRefresh = !1, this._eventHelper = new r.EventHelper(this.NAME), this.optionChanged = n.Callbacks(), this.disposing = n.Callbacks(), this.beginUpdate();
                try {
                    var e = t.devices.current(),
                        o = r.optionsByDevice(e, this.NAME) || {},
                        s = n.extend(this._defaultOptions(), o);
                    this.option(s), this._initOptions(u || {})
                } finally {
                    this.endUpdate()
                }
            },
            _initOptions: function(n) {
                this.option(n)
            },
            _optionValuesEqual: function(n, t, i) {
                return (t = u.toComparable(t, !0), i = u.toComparable(i, !0), t === null || typeof t != "object") ? t === i : !1
            },
            _init: n.noop,
            _render: function() {
                this._renderDisabledState()
            },
            _clean: n.noop,
            _invalidate: function() {
                this._requireRefresh = !0
            },
            _refresh: function() {
                this._clean(), this._render()
            },
            _dispose: function() {
                this._clean(), this.optionChanged.empty(), this.disposing.fireWith(this).empty()
            },
            _renderDisabledState: function() {
                this._element().toggleClass(l, this.option("disabled"))
            },
            _createAction: function(i, r) {
                var u = this,
                    f, e, o;
                return r = n.extend({}, r), f = r.element || u._element(), e = u._modelByElement(f), r.context = e || u, r.component = u, o = new t.Action(i, r),
                    function(t) {
                        return n.isPlainObject(t) || (t = {
                            actionValue: t
                        }), o.execute.call(o, n.extend(t, {
                            component: u,
                            element: f,
                            model: e
                        }))
                    }
            },
            _createActionByOption: function(n, t) {
                if (typeof n != "string") throw Error("Option name type is unexpected");
                return this._createAction(this.option(n), t)
            },
            _modelByElement: function(n) {
                if (e && n.length) return ko.dataFor(n.get(0))
            },
            _optionChanged: function(n) {
                n === "disabled" ? this._renderDisabledState() : this._invalidate()
            },
            _element: function() {
                return this._$element
            },
            instance: function() {
                return this
            },
            beginUpdate: function() {
                this._updateLockCount++
            },
            endUpdate: function() {
                if (this._updateLockCount--, !this._updateLockCount)
                    if (this._initializing || this._initialized) this._requireRefresh && (this._requireRefresh = !1, this._refresh());
                    else {
                        this._initializing = !0;
                        try {
                            this._init()
                        } finally {
                            this._initializing = !1, this._initialized = !0
                        }
                        this._render()
                    }
            },
            option: function(t) {
                var i = this,
                    r = t,
                    f = arguments[1];
                if (arguments.length < 2 && n.type(r) !== "object") return u.compileGetter(r)(i._options, {
                    functionsAsIs: !0
                });
                typeof r == "string" && (t = {}, t[r] = f), i.beginUpdate();
                try {
                    n.each(t, function(n, t) {
                        var r = u.compileGetter(n)(i._options, {
                                functionsAsIs: !0
                            }),
                            f;
                        i._optionValuesEqual(n, r, t) || (u.compileSetter(n)(i._options, t, {
                            functionsAsIs: !0,
                            merge: !0
                        }), f = n.split(/[.\[]/)[0], i._initialized && (i.optionChanged.fireWith(i, [f, t, r]), i._optionChanged(f, t, r)))
                    })
                } finally {
                    i.endUpdate()
                }
            }
        }),
        v = function(t, u) {
            r[t] = u, u.prototype.NAME = t, n.fn[t] = function(r) {
                var s = typeof r == "string",
                    f = this,
                    e, o;
                return s ? (e = r, o = n.makeArray(arguments).slice(1), this.each(function() {
                    var r = n(this).data(t),
                        s, u;
                    if (!r) throw Error("Component " + t + " has not been initialized on this element");
                    return s = r[e], u = s.apply(r, o), u !== i ? (f = u, !1) : void 0
                })) : this.each(function() {
                    var i = n(this).data(t);
                    i ? i.option(r) : new u(this, r)
                }), f
            }, e && r.registerComponentKoBinding(t)
        },
        y = function(t) {
            t = n(t);
            var i = t.data(f);
            return i ? n.map(i, function(n) {
                return t.data(n)
            }) : []
        },
        p = n.fn.empty,
        s, h, c;
    n.fn.empty = function() {
        return o(this, !1), p.apply(this, arguments)
    }, s = n.fn.remove, n.fn.remove = function(n, t) {
        if (!t) {
            var i = this;
            n && (i = i.filter(n)), o(i, !0)
        }
        return s.call(this, n, t)
    }, h = n.fn.html, n.fn.html = function(n) {
        return typeof n == "string" && o(this, !1), h.apply(this, arguments)
    }, c = n.parseHTML, n.parseHTML = function() {
        return c.apply(this, arguments) || []
    }, n.extend(r, {
        registerComponent: v,
        Component: a
    })
}(jQuery, DevExpress), function(n, t, i) {
    var u = t.ui,
        l = "UIFeedback",
        f = "dx-feedback",
        h = "dx-state-active",
        a = "dx-state-disabled",
        v = "dx-state-invisible",
        y = 30,
        p = 400,
        r, e = new u.EventHelper(l),
        o = !1;
    u.feedback = {
        lock: function() {
            o = !0
        },
        unlock: function() {
            window.setTimeout(function() {
                o = !1
            }, 0)
        }
    }, u.Widget = u.Component.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                visible: !0,
                activeStateEnabled: !0,
                width: i,
                height: i,
                clickAction: null
            })
        },
        _init: function() {
            this.callBase(), this._feedbackShowTimeout = y
        },
        _render: function() {
            this.callBase(), this._element().addClass("dx-widget"), this._toggleVisibility(this.option("visible")), this._refreshFeedback(), this._renderDimensions(), this._renderClick()
        },
        _dispose: function() {
            this._clearTimers(), r && r.closest(this._element()).length && (r = null), this.callBase()
        },
        _clean: function() {
            this.callBase(), this._element().empty()
        },
        _clearTimers: function() {
            clearTimeout(this._feedbackHideTimer), clearTimeout(this._feedbackShowTimer)
        },
        _toggleVisibility: function(n) {
            this._element().toggleClass(v, !n)
        },
        _renderDimensions: function() {
            var n = this.option("width"),
                t = this.option("height");
            this._element().width(n), this._element().height(t)
        },
        _refreshFeedback: function() {
            this._feedbackDisabled() ? (this._feedbackOff(), this._element().removeClass(f)) : this._element().addClass(f)
        },
        _renderClick: function() {
            var n = this._eventHelper.eventName("click");
            this._element().off(n).on(n, this._createActionByOption("clickAction"))
        },
        _feedbackDisabled: function() {
            return !this.option("activeStateEnabled") || this.option("disabled")
        },
        _feedbackOn: function(t, i) {
            this._feedbackDisabled() || o || (this._clearTimers(), i ? this._feedbackShow(t) : this._feedbackShowTimer = window.setTimeout(n.proxy(this._feedbackShow, this, t), this._feedbackShowTimeout), this._saveActiveElement())
        },
        _feedbackShow: function(t) {
            var i = this._element();
            this._activeStateUnit && (i = n(t).closest(this._activeStateUnit)), i.hasClass(a) || i.addClass(h)
        },
        _saveActiveElement: function() {
            r = this._element()
        },
        _feedbackOff: function(t, i) {
            this._clearTimers(), i ? this._feedbackHide() : this._feedbackHideTimer = window.setTimeout(n.proxy(this._feedbackHide, this), p)
        },
        _feedbackHide: function() {
            var n = this._element();
            this._activeStateUnit && (n = n.find(this._activeStateUnit)), n.removeClass(h), this._clearActiveElement()
        },
        _clearActiveElement: function() {
            var i = this._element().get(0),
                t = r && r.get(0);
            t && (t === i || n.contains(i, t)) && (r = null)
        },
        _optionChanged: function(n, t) {
            switch (n) {
                case "disabled":
                    this.callBase.apply(this, arguments);
                case "activeStateEnabled":
                    this._refreshFeedback();
                    break;
                case "visible":
                    this._toggleVisibility(t);
                    break;
                case "width":
                case "height":
                    this._renderDimensions();
                    break;
                case "clickAction":
                    this._renderClick();
                    break;
                default:
                    this.callBase.apply(this, arguments)
            }
        }
    });
    var w = function(t, i) {
            if (!e.needSkipEvent(t)) {
                r && s(r)._feedbackOff(!1, !0);
                var o = n(t.target).closest("." + f),
                    u;
                o.length && (u = s(o), u._feedbackOn(t.target, i), i && u._feedbackOff())
            }
        },
        c = function(n) {
            r && s(r)._feedbackOff(n)
        },
        s = function(t) {
            var i;
            return n.each(t.data("dxComponents"), function(n, r) {
                if (u[r].subclassOf(u.Widget)) return i = t.data(r), !1
            }), i
        };
    n(function() {
        var i = new t.Action(w);
        n(document).on(e.eventName("start"), function(n) {
            i.execute(n)
        }).on(e.eventName("end") + " " + e.eventName("cancel"), function(u) {
            var e = r && n(u.target).closest("." + f).get(0) === r.get(0);
            !t.ui.gestureUtils.hasRecent() && e && i.execute(u, !0), c()
        });
        u.gestureUtils.gestureStartCallbacks.add(function() {
            c(!0)
        })
    })
}(jQuery, DevExpress), function(n, t) {
    var r = t.ui,
        u = "template",
        f = function(t) {
            var i = t.data("options");
            return n.trim(i).charAt(0) !== "{" && (i = "{" + i + "}"), new Function("return " + i)().dxTemplate
        },
        e = r.Widget.inherit({
            _init: function() {
                this.callBase(), this._templateProvider = new r.TemplateProvider, this._initTemplates()
            },
            _clean: n.noop,
            _initTemplates: function() {
                var t = {},
                    i = this._templateProvider.getTemplateClass(this),
                    r = this._element().children("[data-options]");
                r.length ? r.each(function(r, u) {
                    u = n(u);
                    var e = f(u);
                    if (!e.name) throw Error("Template name was not specified");
                    t[e.name] = new i(u.get(0))
                }) : t[u] = new i(this._element().contents()), this._templates = t
            },
            _getTemplate: function(n) {
                var t = this._aquireTemplate.apply(this, arguments);
                if (!t && this._templateProvider.supportDefaultTemplate(this) && (t = this._templateProvider.getDefaultTemplate(this), !t)) throw Error('Template "' + n + '" was not found and no default template specified!');
                return t
            },
            _aquireTemplate: function(t) {
                return n.isFunction(t) && (t = t.apply(this, n.makeArray(arguments).slice(1))), this._templates[t]
            }
        });
    r.ContainerWidget = e
}(jQuery, DevExpress), function(n, t, i) {
    var r = t.ui,
        u = r.ContainerWidget.inherit({
            _defaultOptions: function() {
                return n.extend(this.callBase(), {
                    items: [],
                    itemTemplate: "item",
                    itemRender: null,
                    itemClickAction: null,
                    itemRenderedAction: null,
                    noDataText: "" /*No data to display*/ ,
                    dataSource: null
                })
            },
            _init: function() {
                this.callBase(), this._initDataSource(), this._loadDataSource()
            },
            _optionChanged: function(n, t, i) {
                switch (n) {
                    case "dataSource":
                        this._clean(), this._initDataSource(), this._loadDataSource();
                        return;
                    case "noDataText":
                        this._renderEmptyMessage();
                        return;
                    case "itemRenderedAction":
                        return;
                    default:
                        this.callBase(n, t, i)
                }
            },
            _clean: function() {
                this._itemContainer().empty()
            },
            _handleDataSourceChanged: function(n) {
                this.option("items", n), this._renderEmptyMessage()
            },
            _itemContainer: function() {
                return this._element()
            },
            _itemClass: t.abstract,
            _itemSelector: function() {
                return "." + this._itemClass()
            },
            _itemDataKey: t.abstract,
            _items: function() {
                return this._itemContainer().find(this._itemSelector())
            },
            _render: function() {
                this.callBase(), this._attachClickEvent(), this._renderItems()
            },
            _renderEmptyMessage: function() {
                var i = this.option("noDataText"),
                    t = this._element().find(".dx-empty-message"),
                    r = this.option("items"),
                    u = r && r.length;
                !i || u || this._dataSourceLoading ? t.remove() : (t.length || (t = n("<div />").addClass("dx-empty-message").appendTo(this._itemContainer())), t.text(i))
            },
            _attachClickEvent: function() {
                var t = this,
                    i = t._itemSelector();
                t._itemContainer().off("." + t.NAME, i).on(t._eventHelper.eventName("click"), i, n.proxy(t._handleItemClick, t))
            },
            _handleItemClick: function(n) {
                this._handleItemEvent(n, "itemClickAction")
            },
            _renderItems: function() {
                var t = this.option("items") || [];
                t.length ? n.each(t, n.proxy(this._renderItem, this)) : this._renderEmptyMessage()
            },
            _renderItem: function(n, t, i) {
                i = i || this._itemContainer();
                var f = this.option("itemRender"),
                    o = this.option("itemTemplate"),
                    e = this._getTemplate(t.template || o, n, t),
                    r, u = {
                        index: n,
                        item: t,
                        container: i
                    };
                return r = f ? this._createItemByRenderer(f, u) : e ? this._createItemByTemplate(e, u) : this._createItemByRenderer(this._itemRenderDefault, u), r.addClass(this._itemClass()).data(this._itemDataKey(), t), this._createActionByOption("itemRenderedAction", {
                    element: this._element(),
                    allowedForGesture: !0
                })({
                    itemElement: r,
                    itemData: t
                }), r
            },
            _createItemByRenderer: function(t, i) {
                var r = n("<div />").appendTo(i.container),
                    u = t.call(this, i.item, i.index, r);
                return u && r[0] !== u[0] && r.append(u), r
            },
            _createItemByTemplate: function(n, t) {
                return n.render(t.container, t.item)
            },
            _itemRenderDefault: function(t, r, u) {
                n.isPlainObject(t) ? (t.visible === i || t.visible || u.hide(), t.disabled && u.addClass("dx-state-disabled"), t.text && u.text(t.text), t.html && u.html(t.html)) : u.html(String(t))
            },
            _handleItemEvent: function(t, i, r) {
                var u = n(t.target).closest(this._itemSelector()),
                    f = this._createActionByOption(i, {
                        element: this._element()
                    }),
                    e = n.extend({
                        itemElement: u,
                        itemData: u.data(this._itemDataKey()),
                        jQueryEvent: t
                    }, r);
                return f(e)
            }
        }).include(r.DataHelperMixin);
    r.CollectionContainerWidget = u
}(jQuery, DevExpress), function(n, t) {
    t.ui.optionsByDevice = function(n, t) {
        var i, r;
        if (t === "dxScrollView") return (i = {}, navigator.appName === "Microsoft Internet Explorer" && (i.animationStrategy = "transition"), n.platform === "desktop") ? (i.scrollByContent = !1, i.showScrollbar = !1, i) : (n.platform === "win8" && (i.animationStrategy = "transition"), i);
        if (t === "dxScrollable") return (r = {}, navigator.appName === "Microsoft Internet Explorer" && (r.animationStrategy = "transition"), n.platform === "desktop") ? (r.scrollByContent = !1, r.showScrollbar = !1, r) : (n.platform === "win8" && (r.animationStrategy = "transition"), r);
        if (t === "dxList" && n.platform === "desktop") return {
            scrollingEnabled: !1,
            showScrollbar: !1,
            autoPagingEnabled: !1,
            showNextButton: !0
        };
        if (t === "dxPopup" && n.platform === "win8" && !n.phone) return {
            width: "60%",
            height: "auto"
        };
        if (t === "dxDialog") {
            if (n.platform === "ios") return {
                width: 276
            };
            if (n.platform === "win8" && !n.phone) return {
                width: "60%"
            };
            if (n.platform === "android") return {
                lWidth: "60%",
                pWidth: "80%"
            }
        }
        if (t === "dxLookup") {
            if (n.platform === "android") return {
                hideCancelButton: !1
            };
            if (n.platform === "win8" && n.phone) return {
                hideCancelButton: !0,
                fullScreen: !0
            };
            if (n.platform === "ios" && n.phone) return {
                fullScreen: !0
            }
        }
        if (t === "dxLoadIndicator" && (navigator.appName === "Microsoft Internet Explorer" || navigator.appName === "MSAppHost/1.0")) return {
            viaImage: !0
        }
    }
}(jQuery, DevExpress));
DevExpress.MOD_WIDGETS || (function(n, t) {
    var s = t.ui,
        f = s.gestureUtils,
        p = "dxSwipeable",
        nt = "dx-swipeable",
        h = 0,
        k = 1,
        w = 2,
        tt = 300,
        it = 5,
        r, e = h,
        c, d, rt, l, a, v, g, y, u = new s.EventHelper(p),
        o = function() {
            r = null, e = h, f.gestureStartCallbacks.remove(o)
        },
        ut = function(t) {
            for (var i = n(t.target), r; i.length;) {
                if (r = n(i).data(p), r) return r;
                i = i.parent()
            }
        },
        ft = function(t) {
            return n(t).width()
        },
        et = function(n) {
            if (!u.needSkipEvent(n) && !(e > h) && (r = ut(n), r)) {
                if (c = u.eventX(n), d = u.eventY(n), rt = n.timeStamp, y = 0, e = k, u.isMouseEvent(n)) {
                    var t = document.activeElement;
                    t && t !== document.body && t.blur && t.blur(), n.preventDefault()
                }
                f.gestureStartCallbacks.add(o)
            }
        },
        ot = function(n) {
            r && e !== h && (f.preventNativeElastic(n), e === k && st(n), e === w && ht(n))
        },
        st = function(n) {
            var i = u.eventX(n) - c,
                s = u.eventY(n) - d,
                t;
            if (i || s) {
                if (Math.abs(s) >= Math.abs(i) || u.needSkipEvent(n)) {
                    o();
                    return
                }
                if (f.gestureStartCallbacks.remove(o), f.preventHangingCursor(), f.notifyStart(r), t = r._fireStart({
                        jQueryEvent: n
                    }), t.cancel) {
                    r._fireCancel({
                        jQueryEvent: n
                    }), f.notifyEnd(r), o();
                    return
                }
                l = t.maxLeftOffset, a = t.maxRightOffset, e = w
            }
        },
        ht = function(n) {
            v = u.eventX(n);
            var i = v - c,
                t = i / r.itemWidthFunc();
            t = b(t, r.option("elastic")), n.timeStamp - y > tt && (y = n.timeStamp, g = u.eventX(n)), r._fireUpdate({
                offset: t,
                jQueryEvent: n
            })
        },
        ct = function(n) {
            if ((window.tinyHippos || !u.hasTouches(n)) && r) {
                if (e !== w) {
                    o();
                    return
                }
                var s = (v - c) / r.itemWidthFunc(),
                    h = it * Math.abs(v - g) >= n.timeStamp - y,
                    t = s,
                    i = lt(s, h);
                t = b(t, r.option("elastic")), i = b(i, !1), r._fireEnd({
                    offset: t,
                    targetOffset: i,
                    jQueryEvent: n
                }), f.notifyEnd(), o()
            }
        },
        b = function(n, t) {
            return n < -l ? t ? (-2 * l + n) / 3 : -l : n > a ? t ? (2 * a + n) / 3 : a : n
        },
        lt = function(n, t) {
            var i;
            return t ? (i = Math.ceil(Math.abs(n)), n < 0 && (i = -i)) : i = Math.round(n), i
        };
    s.registerComponent(p, s.Component.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                elastic: !0,
                itemWidthFunc: ft,
                startAction: null,
                updateAction: null,
                endAction: null,
                cancelAction: null
            })
        },
        _render: function() {
            this.callBase(), this._createEventActions(), this._element().addClass(nt)
        },
        _createEventActions: function() {
            this._startAction = this._createActionByOption("startAction"), this._updateAction = this._createActionByOption("updateAction"), this._endAction = this._createActionByOption("endAction"), this._cancelAction = this._createActionByOption("cancelAction")
        },
        _dispose: function() {
            this.callBase(), r === this && (f.forget(this), o())
        },
        itemWidthFunc: function() {
            return this.option("itemWidthFunc")(this._element())
        },
        _fireStart: function(t) {
            return t = n.extend(t, {
                element: r._element()[0],
                maxLeftOffset: Number.POSITIVE_INFINITY,
                maxRightOffset: Number.POSITIVE_INFINITY,
                cancel: !1
            }), this._startAction(t), t
        },
        _fireCancel: function(t) {
            this._cancelAction(n.extend(t, {
                element: r._element()[0]
            }))
        },
        _fireUpdate: function(t) {
            this._updateAction(n.extend(t, {
                element: r._element()[0]
            }))
        },
        _fireEnd: function(t) {
            this._endAction(n.extend(t, {
                element: r._element()[0]
            }))
        }
    })), n(function() {
        var i = new t.Action(et, {
                context: s.dxSwipeable
            }),
            r = new t.Action(ot, {
                context: s.dxSwipeable
            }),
            f = new t.Action(ct, {
                context: s.dxSwipeable
            });
        n(document).on(u.eventName("start"), n.proxy(i.execute, i)).on(u.eventName("move"), n.proxy(r.execute, r)).on(u.eventName("end") + " " + u.eventName("cancel"), n.proxy(f.execute, f))
    })
}(jQuery, DevExpress), function(n, t, i) {
    var f = t.ui,
        r = f.gestureUtils,
        y = f.feedback,
        e = t.fx,
        l = t.translator,
        a = "mousewheel" in n.event.special,
        o = Math,
        u = o.abs,
        d = "dxScrollable",
        g = "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
        p = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        w = {
            normal: {
                duration: 2500,
                easing: g
            },
            bounceIn: {
                duration: 400,
                easing: p
            },
            bounceOut: {
                duration: 100,
                easing: p
            }
        },
        b = "dx-scrollable-content",
        nt = "dx-scrollable-container",
        s = "dx-scrollable-scrollbar",
        tt = "dx-scrollable-scroll",
        it = .9,
        rt = 300,
        ut = 1e3,
        ft = 15,
        et = 100,
        ot = 200,
        st = 100,
        ht = 400,
        vt = 2500,
        ct = .2,
        yt = 400,
        lt = .05,
        k = .5,
        h = 70,
        at = 20,
        c = function(n, t, i) {
            return n < t ? !1 : n <= i
        },
        v = function(n, t, i) {
            return n < t ? t : n > i ? i : n
        };
    f.registerComponent("dxScrollbar", f.Widget.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                direction: "vertical"
            })
        },
        _init: function() {
            this.callBase();
            this._element().on("touchmove", function(n) {
                n.preventDefault()
            });
            this._blinkTimeout = null, this._contentSize = 0, this._containerSize = 0
        },
        _render: function() {
            this.callBase(), this._element().addClass(s), this._scroll = n("<div />").addClass(tt).css("opacity", 0).appendTo(this._element()), this._setDirection()
        },
        _setDirection: function() {
            this._directionHelper = this.option("direction") === "horizontal" ? {
                offsetProp: "left",
                sizeMethod: "width"
            } : {
                offsetProp: "top",
                sizeMethod: "height"
            }, this._element().toggleClass(s + "-vertical", this.option("direction") === "vertical"), this._element().toggleClass(s + "-horizontal", this.option("direction") === "horizontal")
        },
        _calcScrollOffset: function(n) {
            return -n / this._contentSize * this._containerSize
        },
        _dispose: function() {
            clearTimeout(this._blinkTimeout), this.callBase()
        },
        _optionChanged: function(n) {
            n === "direction" && this._setDirection(), this.callBase.apply(this, arguments)
        },
        update: function(n, t) {
            this._contentSize = n, this._containerSize = t, this._element()[this._directionHelper.sizeMethod](t);
            var i = n > t ? t * t / n : t;
            this._scroll[this._directionHelper.sizeMethod](o.max(i, ft))
        },
        animate: function(t, i) {
            var r = n.Deferred();
            return i = n.extend({
                to: {}
            }, i), i.to[this._directionHelper.offsetProp] = this._calcScrollOffset(t), e.animate(this._scroll, i).done(function() {
                r.resolveWith(this)
            }), r.promise()
        },
        arrange: function(n) {
            var t = {};
            t[this._directionHelper.offsetProp] = this._calcScrollOffset(n), l.move(this._scroll, t)
        },
        toggle: function(t, i) {
            var r = n.Deferred(),
                u = it * !!t;
            return (clearTimeout(this._blinkTimeout), this.stop(), !i || !this.option("visible") || this.option("disabled")) ? (this._scroll.css("opacity", u), r.resolveWith(this).promise()) : (e.animate(this._scroll, {
                to: {
                    opacity: u
                },
                duration: rt
            }).done(function() {
                r.resolveWith(this)
            }), r.promise())
        },
        blink: function(t) {
            var i = this,
                r = n.Deferred(),
                u, f = n.Deferred();
            return u = i.toggle(!0, t), i._blinkTimeout = setTimeout(function() {
                i.toggle(!1, t).done(function() {
                    f.resolve()
                })
            }, ut), n.when(u, f).then(function() {
                r.resolveWith(i)
            }), r.promise()
        },
        scrollElement: function() {
            return this._scroll
        },
        stop: function(n) {
            e.stop(this._scroll, n)
        }
    })), f.registerComponent(d, f.Component.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                animationEnabled: !0,
                inertiaEnabled: !0,
                scrollByContent: !0,
                scrollByThumb: !1,
                showScrollbar: !0,
                bounceEnabled: !0,
                direction: "vertical",
                startAction: null,
                scrollAction: null,
                stopAction: null,
                endAction: null,
                inertiaAction: null,
                animationStrategy: "frame"
            })
        },
        _init: function() {
            this.callBase(), this._allowUpdate = !0, this._lastEventData = null, this._prevEventData = null, this._contentOffset = {
                top: 0,
                left: 0
            }, this._contentSize = {
                width: 0,
                height: 0
            }, this._containerSize = {
                width: 0,
                height: 0
            }, this._nowScrolling = !1, this._movingScrollbar = i, this._lastMoveEvent = i, this._createActions()
        },
        _createActions: function() {
            this._handleStartAction = this._wrapHandler(this._handleStart), this._handleFirstMoveAction = this._wrapHandler(this._handleFirstMove), this._handleMoveAction = this._wrapHandler(this._handleMove), this._handleEndAction = this._wrapHandler(this._handleEnd), this._handleWheelAction = this._wrapHandler(this._handleWheel), this._handleNativeScrollAction = this._wrapHandler(this._handleNativeScroll)
        },
        _wrapHandler: function(n) {
            var i = new t.Action(n, {
                context: this
            });
            return function() {
                i.execute.apply(i, arguments)
            }
        },
        _render: function() {
            var i, r, t;
            this.callBase(), i = n("<div />").dxScrollbar({
                direction: "horizontal"
            }), r = n("<div />").dxScrollbar({
                direction: "vertical"
            }), this._scrollbars = {
                x: i.data("dxScrollbar"),
                y: r.data("dxScrollbar")
            }, this._content = n("<div />").addClass(b), this._container = this._content.wrap(n("<div />").addClass(nt)).parent().append(i).append(r), this._directionChanged(), this._scrollbarsEnabling(), this._scrollByChanged(), t = this._element(), t.addClass("dx-scrollable"), navigator.platform.indexOf("Mac") > -1 && DevExpress.browser.webkit || t.addClass("dx-scrollable-customizable-scrollbars"), this._content.append(t.contents()), this._container.appendTo(t), this._afterRender()
        },
        _refresh: function() {
            this._detachStartHandlers(), this._attachStartHandlers()
        },
        _directionChanged: function() {
            n.inArray(this.option("direction"), ["vertical", "horizontal", "both"]) < 0 && this.option("direction", "vertical"), this._content.toggleClass(b + "-horizontal", this.option("direction") !== "vertical")
        },
        _scrollbarsEnabling: function() {
            this._scrollbars.x.option("visible", this.option("showScrollbar") && !this.option("disabled") && this.option("direction") !== "vertical"), this._scrollbars.y.option("visible", this.option("showScrollbar") && !this.option("disabled") && this.option("direction") !== "horizontal")
        },
        _scrollByChanged: function() {
            var t = n([this._scrollbars.x.scrollElement().get(0), this._scrollbars.y.scrollElement().get(0)]);
            this._startTarget = this.option("scrollByContent") ? this._container : t, t.css("cursor", this.option("scrollByThumb") ? "pointer" : "auto")
        },
        _afterRender: function() {
            this._afterRenderHandler()
        },
        _afterRenderHandler: function() {
            this._createEventActions(), this._updateIfResized(!1), this._attachStartHandlers(), this._toggleWindowResizeHandler(!0), this._scrollbarInitAction()
        },
        _scrollbarInitAction: function() {
            this.option("scrollByThumb") ? (this._scrollbars.x.toggle(!0), this._scrollbars.y.toggle(!0)) : (this._scrollbars.x.blink(this.option("animationEnabled")), this._scrollbars.y.blink(this.option("animationEnabled")))
        },
        _createEventActions: function() {
            this._startAction = this._createActionByOption("startAction"), this._inertiaAction = this._createActionByOption("inertiaAction"), this._scrollAction = this._createActionByOption("scrollAction"), this._stopAction = this._createActionByOption("stopAction"), this._endAction = this._createActionByOption("endAction")
        },
        _attachStartHandlers: function() {
            var n = this._eventHelper;
            this._startTarget.on(n.eventName("start"), this._handleStartAction);
            this._container.on(n.eventName("scroll"), this._handleNativeScrollAction);
            if (a) this._container.on(n.eventName("wheel"), this._handleWheelAction)
        },
        _detachStartHandlers: function() {
            var n = this._eventHelper;
            this._startTarget.off(n.eventName("start"), this._handleStartAction), this._container.off(n.eventName("scroll"), this._handleNativeScrollAction), a && this._container.off(n.eventName("wheel"), this._handleWheelAction)
        },
        _handleStart: function(n) {
            var i = this._eventHelper,
                t;
            (this._currentEvent = n, this.option("disabled") || i.needSkipEvent(n)) || (i.isMouseEvent(n) && (t = document.activeElement, t && t !== document.body && t.blur && t.blur(), n.preventDefault()), this._fixDirection(n.target), this._lastEventData = this._prevEventData = i.eventData(n), this._stopScrolling(), this._updateIfResized(!0), this._toggleGestureStartCallback(!0), this._attachScrollHandlers())
        },
        _toggleWindowResizeHandler: function(i) {
            this._windowResizeCallback || (this._windowResizeCallback = n.proxy(this.update, this)), t.utils.windowResizeCallbacks[i ? "add" : "remove"](this._windowResizeCallback)
        },
        _toggleGestureStartCallback: function(t) {
            this._gestureStartCallback || (this._gestureStartCallback = n.proxy(this._detachScrollHandlers, this)), r.gestureStartCallbacks[t ? "add" : "remove"](this._gestureStartCallback)
        },
        _updateIfResized: function(n) {
            this._allowUpdate && !this.option("disabled") && this._resized() && this.update(n)
        },
        _resized: function() {
            return this._sizeChanged("width") || this._sizeChanged("height")
        },
        _sizeChanged: function(n) {
            var t = this._content[n](),
                i = this._container[n]();
            return t ? t !== this._contentSize[n] || i !== this._containerSize[n] : !1
        },
        _fixDirection: function(t) {
            var r = n(t).parent("." + s).data("dxScrollbar");
            this._movingScrollbar = this.option("scrollByThumb") && r ? r.option("direction") : i
        },
        _stopScrolling: function(n) {
            e.animating(this._content) && (e.stop(this._content, n), n || (this._contentOffset = l.locate(this._content)), this._fireScrollStop()), this._scrollbars.x.stop(n), this._scrollbars.y.stop(n)
        },
        _attachScrollHandlers: function() {
            var t = this._eventHelper;
            n(document).on(t.eventName("move") + ".dxFirstmove", this._handleFirstMoveAction).on(t.eventName("end"), this._handleEndAction);
            if (t.eventName("cancel")) n(document).on(t.eventName("cancel"), this._handleEndAction)
        },
        _detachScrollHandlers: function() {
            var t = this._eventHelper;
            n(document).off(t.eventName("move"), this._actiontMove).off(t.eventName("end"), this._handleEndAction), t.eventName("cancel") && n(document).off(t.eventName("cancel"), this._handleEndAction), this._toggleGestureStartCallback(!1)
        },
        _handleFirstMove: function(t) {
            this._currentEvent = t;
            var f = this._eventHelper,
                e = f.eventData(t),
                r = f.eventDelta(this._lastEventData, e);
            if ((this._allowUpdate = !1, u(r.x) + u(r.y) !== 0) && (n(document).off(f.eventName("move") + ".dxFirstmove", this._handleFirstMoveAction), !this._skipEventByDirection(r))) {
                r = this._ignoreLockedDirection(r), this._lastMoveEvent = i, this._processMove(), this._nowScrolling = !0, this._startGesture(t), this._prevEventData = this._lastEventData, this._lastEventData = e, this._fireScrollStart(), this._scrollbars.x.toggle(!0), this._scrollbars.y.toggle(!0), this._moveContent(r);
                n(document).on(f.eventName("move"), this._handleMoveAction)
            }
        },
        _skipEventByDirection: function(n) {
            return this._movingScrollbar ? !1 : this.option("direction") === "vertical" && u(n.x) >= u(n.y) ? !0 : this.option("direction") === "horizontal" && u(n.x) <= u(n.y)
        },
        _ignoreLockedDirection: function(n) {
            return (this.option("direction") === "vertical" || this._movingScrollbar === "vertical") && (n.x = 0), (this.option("direction") === "horizontal" || this._movingScrollbar === "horizontal") && (n.y = 0), n
        },
        _startGesture: function(n) {
            r.preventHangingCursor(), r.preventNativeElastic(n), this._toggleGestureStartCallback(!1), r.notifyStart(this), y.lock()
        },
        _processMove: function(t) {
            this._lastMoveEvent && this._handleLastMoveEvent(), t ? clearTimeout(this._processMoveTimer) : this._processMoveTimer = setTimeout(n.proxy(this._processMove, this), at)
        },
        _handleMove: function(n) {
            this._lastMoveEvent = n, r.preventNativeElastic(n)
        },
        _handleLastMoveEvent: function() {
            var n = this._eventHelper,
                r = n.eventData(this._lastMoveEvent),
                t = n.eventDelta(this._lastEventData, r),
                u;
            this._currentEvent = this._lastMoveEvent, this._lastMoveEvent = i, t = this._ignoreLockedDirection(t), this._moveContent(t), u = n.eventDelta(this._prevEventData, this._lastEventData).time, u > ot && (this._prevEventData = this._lastEventData), this._lastEventData = r
        },
        _handleEnd: function(n) {
            if (this._processMove(!0), this._currentEvent = n, this._detachScrollHandlers(), !this._nowScrolling) {
                this._bounceContent();
                return
            }
            this._nowScrolling = !1, this._scrollContent(this._inertionOffset(n), !0, !this._inBounds())
        },
        _inertionOffset: function(t) {
            var r = this._eventHelper,
                i = r.eventDelta(this._prevEventData, this._lastEventData),
                f = r.eventData(t),
                e = r.eventDelta(this._lastEventData, f).time,
                u = n.extend({}, this._contentOffset);
            return this.option("inertiaEnabled") && e < st && (i = this._ignoreLockedDirection(i), u.left += this._inertionDistance(i.x, i.time), u.top += this._inertionDistance(i.y, i.time)), u
        },
        _inertionDistance: function(n, t) {
            var r = this._movingScrollbar ? -1 : 1,
                n = n * r,
                i = n / t || 0,
                f = u(i) > ct;
            return i * (f ? ht : 0)
        },
        _handleWheel: function(t, i) {
            if (this._currentEvent = t, !this.option("disabled") && this.option("direction") !== "horizontal") {
                if (a) {
                    this._allowUpdate = !1, this._stopScrolling(), this._updateIfResized(!0), this._scrollbars.x.toggle(!0), this._scrollbars.y.toggle(!0);
                    var r = n.extend({}, this._contentOffset);
                    r.top = this._contentOffset.top + i * et, this._scrollContent(r, !1)
                }
                t.preventDefault()
            }
        },
        _handleNativeScroll: function(n) {
            var t = {
                    top: this._container.get(0).scrollTop,
                    left: this._container.get(0).scrollLeft
                },
                i;
            this._refreshSizes(), i = this._minLimit(), this._scrollAction({
                jQueryEvent: n,
                scrollOffset: t,
                reachedLeft: t.left === 0,
                reachedRight: t.left === -i.left,
                reachedTop: t.top === 0,
                reachedBottom: t.top === -i.top
            })
        },
        _refreshSizes: function() {
            this._contentSize = {
                width: this._content.width(),
                height: this._content.height()
            }, this._containerSize = {
                width: this._container.width(),
                height: this._container.height()
            }
        },
        _moveContent: function(n) {
            n = this._movingScrollbar ? {
                x: -n.x * this._content.width() / this._container.width(),
                y: -n.y * this._content.height() / this._container.height()
            } : {
                x: n.x * (this._inBounds() || k),
                y: n.y * (this._inBounds() || k)
            }, this._contentOffset.left += n.x, this._contentOffset.top += n.y, this.option("bounceEnabled") || (this._contentOffset = this._limitedOffset()), this._arrangeContent()
        },
        _scrollContent: function(n, t, i, r) {
            if (t = this.option("animationEnabled") && t && (this._inBounds() || i), n = this._calcOffset(n), this._contentOffset.left === n.left && this._contentOffset.top === n.top) return this._scrollComplete(r);
            this._contentOffset = n, this.option("bounceEnabled") || (this._contentOffset = this._limitedOffset()), i || this._fireInertia();
            var u = this._inBounds() ? i ? "bounceIn" : "normal" : "bounceOut";
            return t ? this._animateContent(u, r) : (this._arrangeContent(r), this._scrollComplete(r))
        },
        _calcOffset: function(n) {
            var i = this._minLimit(),
                r = this._maxLimit(),
                t = this._contentOffset,
                u = n - t;
            return {
                left: this._offsetByDirection(t.left, n.left, i.left, r.left),
                top: this._offsetByDirection(t.top, n.top, i.top, r.top)
            }
        },
        _arrangeContent: function(n) {
            l.move(this._content, this._contentOffset), this._arrangeScrollbars(this._contentOffset), this._fireScroll(n)
        },
        _animateContent: function(t, i) {
            var r = this,
                u = n.Deferred(),
                f = n.Deferred(),
                o, s = {
                    type: "slide",
                    strategy: r.option("animationStrategy"),
                    duration: w[t].duration,
                    easing: w[t].easing
                };
            return e.animate(r._content, n.extend({
                to: n.extend({}, r._contentOffset),
                complete: function() {
                    r._animationComplete(i).done(function() {
                        f.resolve()
                    })
                }
            }, s)), o = r._animateScrollbars(r._contentOffset, s), n.when(f, o).then(function() {
                u.resolveWith(r)
            }), u.promise()
        },
        _animationComplete: function(n) {
            return this._fireScroll(n), this._scrollComplete(n)
        },
        _scrollComplete: function(n) {
            return this._fireScrollStop(n), this._inBounds() && this._fireScrollEnd(n), this._bounceContent(n)
        },
        _bounceContent: function(t) {
            return this._inBounds() ? (this.option("scrollByThumb") || (this._scrollbars.x.toggle(!1, this.option("animationEnabled")), this._scrollbars.y.toggle(!1, this.option("animationEnabled"))), y.unlock(), r.notifyEnd(this), this._allowUpdate = !0, n.Deferred().resolveWith(this).promise()) : this._scrollContent(this._limitedOffset(), !0, !0, t)
        },
        _arrangeScrollbars: function(n) {
            this._scrollbars.x.arrange(n.left), this._scrollbars.y.arrange(n.top)
        },
        _animateScrollbars: function(t, i) {
            return n.when(this._scrollbars.x.animate(t.left, i), this._scrollbars.y.animate(t.top, i))
        },
        _inBounds: function() {
            return (this.option("direction") === "vertical" || c(this._contentOffset.left, this._minLimit().left, this._maxLimit().left)) && (this.option("direction") === "horizontal" || c(this._contentOffset.top, this._minLimit().top, this._maxLimit().top))
        },
        _offsetByDirection: function(n, t, i, r) {
            var u = t - n;
            return c(t, i, r) || (t = n + u * lt, c(t, i - h, r + h) && (t = v(n + u, i - h, r + h))), t
        },
        _limitedOffset: function() {
            return {
                left: v(this._contentOffset.left, this._minLimit().left, this._maxLimit().left),
                top: v(this._contentOffset.top, this._minLimit().top, this._maxLimit().top)
            }
        },
        _maxLimit: function() {
            return {
                left: 0,
                top: 0
            }
        },
        _minLimit: function() {
            return {
                left: o.min(this._containerSize.width - this._contentSize.width, 0),
                top: o.min(this._containerSize.height - this._contentSize.height, 0)
            }
        },
        _fireScrollStart: function() {
            this._startAction(this._createEventArgs())
        },
        _fireInertia: function() {
            this._inertiaAction(this._createEventArgs())
        },
        _fireScroll: function(t) {
            this._scrollAction(n.extend(this._createEventArgs(), {
                updating: t
            }))
        },
        _fireScrollStop: function(t) {
            this._stopAction(n.extend(this._createEventArgs(), {
                updating: t
            }))
        },
        _fireScrollEnd: function(t) {
            this._endAction(n.extend(this._createEventArgs(), {
                updating: t
            }))
        },
        _createEventArgs: function() {
            return {
                jQueryEvent: this._currentEvent,
                scrollOffset: {
                    top: -this._contentOffset.top,
                    left: -this._contentOffset.left
                },
                reachedLeft: this._reachedLeft(),
                reachedRight: this._reachedRight(),
                reachedTop: this._reachedTop(),
                reachedBottom: this._reachedBottom()
            }
        },
        _reachedLeft: function() {
            return this._contentOffset.left >= this._maxLimit().left
        },
        _reachedTop: function() {
            return this._contentOffset.top >= this._maxLimit().top
        },
        _reachedRight: function() {
            var n = this._minLimit();
            return n.left && this._contentOffset.left <= n.left
        },
        _reachedBottom: function() {
            var n = this._minLimit();
            return n.top && this._contentOffset.top <= n.top
        },
        _dispose: function() {
            r.forget(this), clearTimeout(this._processMoveTimer), this._detachStartHandlers(), this._detachScrollHandlers(), this._toggleWindowResizeHandler(!1), this.callBase()
        },
        _optionChanged: function(n) {
            switch (n) {
                case "showScrollbar":
                    this._scrollbarsEnabling();
                    break;
                case "direction":
                    this._directionChanged();
                    break;
                case "disabled":
                    this.option("disabled") || (this._stopScrolling(), this.update(!0)), this._scrollbarsEnabling();
                    break;
                case "scrollByContent":
                case "scrollByThumb":
                    this._detachStartHandlers(), this._scrollByChanged(), this._scrollbarInitAction();
                    break;
                case "startAction":
                case "scrollAction":
                case "stopAction":
                case "endAction":
                case "inertiaAction":
                    this._createEventActions()
            }
            this.callBase.apply(this, arguments)
        },
        _normalizeDistance: function(t) {
            return n.isPlainObject(t) ? t : this.option("direction") === "horizontal" ? {
                x: t
            } : {
                y: t
            }
        },
        _positionToOffset: function(n) {
            var t = {};
            return n.x !== i && (t.left = -n.x), n.y !== i && (t.top = -n.y), t
        },
        _startScroll: function() {
            this._stopScrolling(), this._updateIfResized(!0), this._allowUpdate = !1, this._fireScrollStart()
        },
        _updateScrollbars: function(n, t) {
            this._scrollbars.x.option("disabled", n.width <= t.width), this._scrollbars.x.update(n.width, t.width), this._scrollbars.y.option("disabled", n.height <= t.height), this._scrollbars.y.update(n.height, t.height)
        },
        _update: function(t) {
            return this._inBounds() ? (this._arrangeScrollbars(this._limitedOffset()), n.Deferred().resolveWith(this).promise()) : (this._scrollbars.x.toggle(!0), this._scrollbars.y.toggle(!0), this._scrollContent(this._limitedOffset(), t, t, !0))
        },
        update: function(i) {
            return this.option("disabled") ? n.Deferred().resolveWith(this).promise() : t.utils.executeAsync(function() {
                return this._refreshSizes(), this._updateScrollbars(this._contentSize, this._containerSize), this._update(i)
            }, this)
        },
        content: function() {
            return this._content
        },
        scrollTo: function(t, i) {
            var r;
            return this._startScroll(), r = n.extend({}, this._contentOffset), t = this._normalizeDistance(t), this._scrollContent(this._positionToOffset(t), i)
        },
        scrollBy: function(n, t) {
            var i;
            return this._startScroll(), n = this._normalizeDistance(n), i = {
                left: this._contentOffset.left - ~~n.x,
                top: this._contentOffset.top - ~~n.y
            }, this._scrollContent(i, t)
        },
        scrollPos: function(t) {
            this._stopScrolling(), t = this._normalizeDistance(t), n.extend(this._contentOffset, this._positionToOffset(t)), this._arrangeContent()
        },
        stop: function(n) {
            return this._stopScrolling(n), this._bounceContent()
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var e = t.ui,
        u = "dx-scrollview",
        h = "dx-scrollview-content",
        c = u + "-top-pocket",
        l = u + "-bottom-pocket",
        y = u + "-indicator",
        f = u + "-scrollbottom",
        g = f + "-image",
        a = f + "-text",
        v = f + "-loading",
        nt = f + "-end",
        y = f + "-indicator",
        r = u + "-pull-down",
        p = r + "-container",
        w = r + "-image",
        b = r + "-text",
        o = r + "-loading",
        s = r + "-ready",
        k = r + "-indicator",
        d = 500;
    e.registerComponent("dxScrollView", e.dxScrollable.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                pullDownAction: null,
                reachBottomAction: null,
                updateAction: null
            })
        },
        _init: function() {
            var t, i, u;
            this.callBase(), this._topPocket = n("<div/>").addClass(c), this._bottomPocket = n("<div/>").addClass(l), this._pullDown = n("<div/>").addClass(r).appendTo(this._topPocket), t = n("<div />").addClass(p).appendTo(this._pullDown), n("<div />").addClass(w).appendTo(t), i = n("<div>").dxLoadIndicator(), n("<div>").addClass(k).append(i).appendTo(t), this._pullDownText = n("<div />").addClass(b).text("Pull down to refresh...").appendTo(this._pullDown), this._scrollBottom = n("<div/>").addClass(f).addClass(v).appendTo(this._bottomPocket), u = n("<div>").dxLoadIndicator(), n("<div>").addClass(y).append(u).appendTo(this._scrollBottom), this._scrollBottomText = n("<div>Loading...<\/div>").addClass(a).appendTo(this._scrollBottom), this._considerTopPocket = !1, this._considerBottomPocket = !1, this._startPullDown = !1, this._pullDownInProcess = !1, this._scrollBottomInProcess = !1, this._preventScrollBottom = !1, this._freezed = !1, this._releaseTimer = null, this._pullDownLoadingState = !1, this._refreshPullDown(), this._refreshReachBottom()
        },
        _render: function() {
            this.callBase(), this._element().addClass(u), this._scrollViewContent = this._content.wrapInner(n("<div />").addClass(h)).children().before(this._topPocket).after(this._bottomPocket), this._afterRenderHandler()
        },
        _optionChanged: function(n) {
            this.callBase.apply(this, arguments), n === "pullDownAction" ? this._refreshPullDown() : n === "reachBottomAction" && this._refreshReachBottom(), this.update()
        },
        _refreshPullDown: function() {
            this._hasPullDown = !!this.option("pullDownAction") && this.option("direction") === "vertical" && !this.option("disabled"), this._pullDown.toggle(this._hasPullDown), this._topPocketHeight = this._hasPullDown ? this._getHeight(this._topPocket) : 0
        },
        _refreshReachBottom: function() {
            this._hasScrollBottom = !!this.option("reachBottomAction") && this.option("direction") === "vertical" && !this.option("disabled"), this._scrollBottom.toggle(this._hasScrollBottom), this._bottomPocketHeight = this._hasScrollBottom ? this._getHeight(this._bottomPocket) : 0
        },
        _afterRender: function() {},
        _getHeight: function(t) {
            var i = n("[class*=dx-theme-]"),
                r = n("<div/>").css({
                    visibility: "hidden",
                    position: "fixed",
                    right: -9999,
                    width: t.width()
                }).appendTo(i.length ? i : "body"),
                u = t.clone().appendTo(r).show(),
                f = u.height();
            return r.remove(), f
        },
        _toggleScrollBottomState: function(n) {
            this._hasScrollBottom && (this._bottomPocketHeight = n ? 0 : this._getHeight(this._bottomPocket), this._scrollBottom.toggle(!n))
        },
        _togglePullDownState: function(n) {
            this._pullDownLoadingState = !1, this._pullDown.removeClass(o).toggleClass(s, n), this._pullDownText.text(n ? "Release to refresh..." : "Pull down to refresh...")
        },
        _setPullDownInProcess: function() {
            this._pullDownLoadingState = !0, this._pullDown.removeClass(s).addClass(o), this._pullDownText.text("Refreshing...")
        },
        _fireScroll: function(n) {
            (this.callBase(n), n) || (this._handlePullDownScroll(), this._handleScrollBottomScroll())
        },
        _fireScrollStop: function(n) {
            if (this.callBase(n), n) {
                if (this._reachedPocketTop()) return;
                this._togglePullDownState(!1);
                return
            }
            this._handlePullDownStop(), this._handleScrollBottomStop()
        },
        _fireScrollEnd: function(n) {
            this.callBase(n), this._handlePullDownEnd()
        },
        _handlePullDownScroll: function() {
            if (this._hasPullDown && !this._pullDownInProcess && !this._startPullDown) {
                var n = this._reachedPocketTop();
                (this._considerTopPocket !== n || this._pullDownLoadingState) && (this._considerTopPocket = n, this._togglePullDownState(n))
            }
        },
        _handleScrollBottomScroll: function() {
            !this._hasScrollBottom || this._scrollBottomInProcess || this._preventScrollBottom || (this._considerBottomPocket = this._reachedPocketBottom())
        },
        _handlePullDownStop: function() {
            this._pullDownInProcess || this._hasPullDown && this._reachedPocketTop() && (this._startPullDown = !0, this._freezed = !0, this._setPullDownInProcess())
        },
        _handleScrollBottomStop: function() {
            this._scrollBottomInProcess || this._preventScrollBottom || this._hasScrollBottom && this._reachedPocketBottom() && this._fireScrollBottom()
        },
        _handlePullDownEnd: function() {
            this._startPullDown && this._firePullDown()
        },
        _runReleaseTimer: function() {
            this._releaseTimerDeferred = n.Deferred(), this._releaseTimer = setTimeout(n.proxy(function() {
                this._releaseTimer = null, this._needToRelease && this._doRelease().done(function() {
                    this._releaseTimerDeferred.resolve(this)
                })
            }, this), d)
        },
        _firePullDown: function() {
            this._runReleaseTimer(), this._pullDownInProcess = !0, this._createActionByOption("pullDownAction")(this)
        },
        _fireScrollBottom: function() {
            this.update(!0), this._freezed = !0, this._scrollBottomInProcess = !0, this._createActionByOption("reachBottomAction")(this)
        },
        _reachedPocketTop: function() {
            return this._contentOffset.top >= 0
        },
        _reachedPocketBottom: function() {
            var n = this._containerSize.height - this._contentSize.height;
            return n && this._contentOffset.top < n
        },
        _maxLimit: function() {
            return this._considerTopPocket ? this.callBase() : {
                left: 0,
                top: -this._topPocketHeight
            }
        },
        _minLimit: function() {
            var t = this.callBase(),
                n;
            return this._containerSize.height > this._heightWithoutPockets() ? this._maxLimit() : (n = this._containerSize.height - this._contentSize.height, this._considerBottomPocket && this._hasScrollBottom || (n += this._bottomPocketHeight), t.top = n, t)
        },
        _heightWithoutPockets: function() {
            var n = this._contentSize.height;
            return this._considerTopPocket || (n -= this._topPocketHeight), this._considerBottomPocket || (n -= this._bottomPocketHeight), n
        },
        _updateScrollbars: function(n, t) {
            var i = {
                width: this._scrollViewContent.width(),
                height: this._scrollViewContent.height()
            };
            this.callBase(i, t)
        },
        _arrangeScrollbars: function(n) {
            this._scrollbars.x.arrange(n.left), this._scrollbars.y.arrange(n.top + this._topPocketHeight)
        },
        _animateScrollbars: function(n, t) {
            this._scrollbars.x.animate(n.left, t), this._scrollbars.y.animate(n.top + this._topPocketHeight, t)
        },
        _handleStart: function(n) {
            this._freezed || this.callBase(n)
        },
        _doRelease: function() {
            return this._stopScrolling(), this._needToRelease = !1, this._toggleScrollBottomState(this._preventScrollBottom), this._startPullDown = !1, this._pullDownInProcess = !1, this._scrollBottomInProcess = !1, this._considerTopPocket = !1, this._considerBottomPocket = !1, this._freezed = !1, this.update(!0)
        },
        _dispose: function() {
            clearTimeout(this._releaseTimer), this.callBase()
        },
        update: function(t) {
            var i;
            return i = this._freezed || this.option("disabled") ? n.Deferred().resolveWith(this).promise() : this.callBase(t), i.done(function() {
                this.option("updateAction") && this._createActionByOption("updateAction")(this)
            }), i
        },
        content: function() {
            return this._scrollViewContent
        },
        isFull: function() {
            var n = this._scrollViewContent.height();
            return !n || n >= this._containerSize.height
        },
        release: function(n) {
            return (this._preventScrollBottom = !!n, this._releaseTimer) ? (this._needToRelease = !0, this._releaseTimerDeferred.promise()) : t.utils.executeAsync(this._doRelease, this)
        },
        toggleLoading: function(n) {
            this._scrollBottom.toggle((!this._hasPullDown || !this._preventScrollBottom) && (this._hasScrollBottom || n))
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var r = t.ui,
        f = "dx-button",
        e = "dx-button-content",
        u = ".dx-button-content",
        o = "dx-button-text",
        s = ".dx-button-text",
        h = "dx-button-back-arrow",
        c = "dx-icon",
        l = ".dx-icon";
    r.registerComponent("dxButton", r.Widget.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                type: "normal",
                text: "",
                icon: "",
                iconSrc: ""
            })
        },
        _render: function() {
            this.callBase(), this._element().addClass(f).append(n("<div />").addClass(e)), this._renderIcon(), this._renderType(), this._renderText()
        },
        _renderIcon: function() {
            var f = this._element().find(u),
                i = f.find(l),
                t = this.option("icon"),
                r = this.option("iconSrc");
            (i.remove(), this.option("type") !== "back" || t || (t = "back"), t || r) && (t ? i = n("<span />").addClass("dx-icon-" + t) : r && (i = n("<img />").attr("src", r)), f.prepend(i.addClass(c)))
        },
        _renderType: function() {
            var t = this.option("type");
            t && this._element().addClass("dx-button-" + t), t === "back" && this._element().prepend(n("<span />").addClass(h))
        },
        _renderText: function() {
            var i = this.option("text"),
                r = this._element().find(u),
                f = this.option("type") === "back",
                t = r.find(s);
            if (!i && !f) {
                t.remove();
                return
            }
            t.length || (t = n("<span />").addClass(o).appendTo(r)), t.text(i || "Back")
        },
        _optionChanged: function(n) {
            switch (n) {
                case "type":
                case "icon":
                case "iconSrc":
                    this._renderType(), this._renderIcon();
                    break;
                case "text":
                    this._renderText();
                    break;
                default:
                    this.callBase.apply(this, arguments)
            }
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var r = t.ui,
        u = "dx-checkbox",
        f = "dx-checkbox-icon",
        e = "dx-checkbox-checked";
    r.registerComponent("dxCheckBox", r.Widget.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                checked: !1
            })
        },
        _render: function() {
            this.callBase(), this._element().addClass(u), n("<span />").addClass(f).appendTo(this._element()), this._renderValue()
        },
        _renderClick: function() {
            var t = this._eventHelper.eventName("click");
            this._element().off(t).on(t, n.proxy(this._handleClick, this))
        },
        _handleClick: function() {
            var n = this;
            this._createActionByOption("clickAction", {
                beforeExecute: function() {
                    n.option("checked", !n.option("checked"))
                }
            })()
        },
        _renderValue: function() {
            this._element().toggleClass(e, Boolean(this.option("checked")))
        },
        _refresh: function() {
            this._renderValue()
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var u = t.ui,
        f = t.fx,
        r = "dx-switch",
        e = r + "-wrapper",
        o = r + "-inner",
        s = r + "-handle",
        h = r + "-on-value",
        c = r + "-on",
        l = r + "-off",
        a = 50,
        v = 100;
    u.registerComponent("dxSwitch", u.Widget.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                onText: "ON",
                offText: "OFF",
                value: !1
            })
        },
        _init: function() {
            this.callBase(), this._animating = !1, this._animationDuration = v
        },
        _render: function() {
            var u = this,
                t = this._element(),
                i;
            this._switchInner = n("<div />").addClass(o).append(n("<div />").addClass(s)), this._labelOn = n("<div />").addClass(c).prependTo(this._switchInner), this._labelOff = n("<div />").addClass(l).appendTo(this._switchInner), i = n("<div />").addClass(e).append(this._switchInner), t.addClass(r).append(i), this._marginBound = parseInt(t.find("." + e).css("margin-right")) || a, t.dxSwipeable({
                elastic: !1,
                startAction: n.proxy(this._handleSwipeStart, this),
                updateAction: n.proxy(this._handleSwipeUpdate, this),
                endAction: n.proxy(this._handleSwipeEnd, this),
                itemWidthFunc: function() {
                    return u._marginBound + 1
                }
            }), this._renderValue(), this._renderLabels(), this.callBase()
        },
        _renderPosition: function(n, t) {
            var i = n ? 1 : 0;
            this._switchInner.css("marginLeft", this._marginBound * (i + t - 1))
        },
        _validateValue: function() {
            var n = this.option("value");
            typeof n != "boolean" && (this._options.value = !!n)
        },
        _renderClick: function() {
            this.callBase();
            var t = this._eventHelper.eventName("click"),
                i = this._createAction(n.proxy(this._handleClick, this));
            this._element().on(t, function(n) {
                i({
                    jQueryEvent: n
                })
            })
        },
        _handleClick: function(n) {
            var t = n.component,
                i, r;
            t._animating || t._swiping || (t._animating = !0, i = t.option("value"), r = !i, f.animate(this._switchInner, {
                from: {
                    marginLeft: (Number(i) - 1) * this._marginBound
                },
                to: {
                    marginLeft: (Number(r) - 1) * this._marginBound
                },
                duration: t._animationDuration,
                complete: function() {
                    t._animating = !1, t.option("value", r)
                }
            }))
        },
        _handleSwipeStart: function(n) {
            var t = this.option("value");
            n.maxLeftOffset = t ? 1 : 0, n.maxRightOffset = t ? 0 : 1, this._swiping = !0
        },
        _handleSwipeUpdate: function(n) {
            this._renderPosition(this.option("value"), n.offset)
        },
        _handleSwipeEnd: function(n) {
            var t = this;
            f.animate(this._switchInner, {
                to: {
                    marginLeft: this._marginBound * (t.option("value") + n.targetOffset - 1)
                },
                duration: t._animationDuration,
                complete: function() {
                    t._swiping = !1;
                    var i = t.option("value") + n.targetOffset;
                    t.option("value", Boolean(i))
                }
            })
        },
        _renderValue: function() {
            this._validateValue();
            var n = this.option("value");
            this._renderPosition(n, 0), this._element().toggleClass(h, n)
        },
        _renderLabels: function() {
            this._labelOn.text(this.option("onText")), this._labelOff.text(this.option("offText"))
        },
        _optionChanged: function(n, t, i) {
            switch (n) {
                case "value":
                    this._renderValue();
                    break;
                case "onText":
                case "offText":
                    this._renderLabels();
                    break;
                default:
                    this.callBase(n, t, i)
            }
        },
        _feedbackOff: function(n) {
            n || this.callBase.apply(this, arguments)
        }
    }))
}(jQuery, DevExpress), function(n, t, i) {
    var r = t.ui,
        s = "dx-editbox",
        u = "dx-editbox-input",
        h = "." + u,
        c = "dx-editbox-border",
        f = "dx-placeholder",
        e = ["focusIn", "focusOut", "keyDown", "keyPress", "keyUp", "change"],
        o = function() {
            var n = document.createElement("input");
            return "placeholder" in n
        }();
    r.registerComponent("dxEditBox", r.Widget.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                value: "",
                valueUpdateEvent: "change",
                valueUpdateAction: null,
                placeholder: "",
                readOnly: !1,
                focusInAction: null,
                focusOutAction: null,
                keyDownAction: null,
                keyPressAction: null,
                keyUpAction: null,
                changeAction: null,
                mode: "text"
            })
        },
        _input: function() {
            return this._element().find(h)
        },
        _render: function() {
            this._element().addClass(s), this._renderInput(), this._renderInputType(), this._renderValue(), this._renderProps(), this._renderPlaceholder(), this._renderEvents(), this._renderEnterKeyAction(), this.callBase()
        },
        _renderInput: function() {
            this._element().append(n("<input />").addClass(u)).append(n("<div />").addClass(c))
        },
        _renderValue: function() {
            this._input().val() !== this.option("value") && this._input().val(this.option("value"))
        },
        _renderProps: function() {
            this._input().prop({
                placeholder: this.option("placeholder"),
                readOnly: this.option("readOnly"),
                disabled: this.option("disabled")
            })
        },
        _renderPlaceholder: function() {
            if (!o) {
                var t = this,
                    u = t.option("placeholder"),
                    i = t._input(),
                    r = n("<div />").addClass(f).addClass("dx-hide").attr("data-dx_placeholder", u),
                    e = t._eventHelper.eventName("start");
                r.on(e, function() {
                    i.focus()
                });
                i.wrap(r).on("focus.dxEditBox focusin.dxEditBox", function() {
                    t._setStatePlaceholder.call(t, !0)
                }).on("blur.dxEditBox focusout.dxEditBox", function() {
                    t._setStatePlaceholder.call(t, !1)
                });
                t._setStatePlaceholder()
            }
        },
        _renderEvents: function() {
            var t = this,
                i = t._input(),
                r = t._eventHelper;
            n.each(e, function(n, u) {
                var f = r.eventName(u.toLowerCase()),
                    e = t._createActionByOption(u + "Action");
                i.off(f).on(f, function(n) {
                    e({
                        jQueryEvent: n
                    })
                })
            }), t._renderValueUpdateEvent()
        },
        _renderValueUpdateEvent: function() {
            var t = this._eventHelper.eventName(this.option("valueUpdateEvent"));
            this._input().off("." + this.NAME, this._handleValueChange).on(t, n.proxy(this._handleValueChange, this));
            this._changeAction = this._createActionByOption("valueUpdateAction")
        },
        _setStatePlaceholder: function(n) {
            if (!o) {
                var t = this._input(),
                    r = t.parent("." + f);
                n === i && (t.val() || t.prop("disabled") || !t.prop("placeholder") || (n = !1)), t.val() && (n = !0), r.toggleClass("dx-hide", n)
            }
        },
        _handleValueChange: function() {
            this.option("value", this._input().val())
        },
        _renderEnterKeyAction: function() {
            if (this.option("enterKeyAction")) {
                this._enterKeyAction = this._createActionByOption("enterKeyAction");
                this._input().on("keydown.enterKey.dxEditBox", n.proxy(this._onKeyDownHandler, this))
            } else this._input().off("keydown.enterKey.dxEditBox"), this._enterKeyAction = i
        },
        _onKeyDownHandler: function(n) {
            n.which === 13 && this._enterKeyAction()
        },
        _renderDisabledState: function() {
            this.callBase(), this._renderProps()
        },
        _optionChanged: function(t, i) {
            if (n.inArray(t.replace("Action", ""), e) > -1) {
                this._renderEvents();
                return
            }
            switch (t) {
                case "value":
                    this._renderValue(), this._setStatePlaceholder(), this._changeAction(i);
                    break;
                case "valueUpdateEvent":
                case "valueUpdateAction":
                    this._renderValueUpdateEvent();
                    break;
                case "readOnly":
                    this._renderProps();
                    break;
                case "mode":
                    this._renderInputType();
                    break;
                case "enterKeyAction":
                    this._renderEnterKeyAction();
                    break;
                default:
                    this.callBase.apply(this, arguments)
            }
        },
        _renderInputType: function() {
            var n = this._input();
            try {
                n.prop("type", this.option("mode"))
            } catch (t) {
                n.prop("type", "text")
            }
        },
        focus: function() {
            this._input().trigger("focus")
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var r = t.ui,
        u = "dx-textbox",
        f = [8, 9, 13, 33, 34, 35, 36, 37, 38, 39, 40, 46];
    r.registerComponent("dxTextBox", r.dxEditBox.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                mode: "text",
                maxLength: null,
                enterKeyAction: null
            })
        },
        _render: function() {
            if (this.callBase(), this._element().addClass(u), this._isAndroid()) this._input().on(this._eventHelper.eventName("keydown"), n.proxy(this._onKeyDownAndroidHandler, this)).on(this._eventHelper.eventName("change"), n.proxy(this._onChangeAndroidHandler, this))
        },
        _renderProps: function() {
            if (this.callBase(), !this._isAndroid()) {
                var n = this.option("maxLength");
                n > 0 && this._input().prop("maxLength", n)
            }
        },
        _optionChanged: function(n) {
            switch (n) {
                case "maxLength":
                    this._renderProps();
                    break;
                default:
                    this.callBase.apply(this, arguments)
            }
        },
        _onKeyDownAndroidHandler: function(t) {
            var r = this.option("maxLength"),
                i, u;
            return r ? (i = n(t.target), u = t.keyCode, this._cutOffExtraChar(i), i.val().length < r || n.inArray(u, f) !== -1 || window.getSelection().toString() !== "") : !0
        },
        _onChangeAndroidHandler: function(t) {
            var i = n(t.target);
            this.option("maxLength") && this._cutOffExtraChar(i)
        },
        _cutOffExtraChar: function(n) {
            var t = this.option("maxLength"),
                i = n.val();
            i.length > t && n.val(i.substr(0, t))
        },
        _isAndroid: function() {
            var n = window.navigator.userAgent,
                i = t.devices.androidVersion(n);
            return i && /^(2\.|4\.0|4\.1)/.test(i) && n.indexOf("Chrome") === -1
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var r = t.ui,
        u = "dx-textarea",
        f = "dx-editbox-input",
        e = "dx-editbox-border";
    r.registerComponent("dxTextArea", r.dxEditBox.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                cols: 20,
                rows: 2
            })
        },
        _render: function() {
            this.callBase(), this._element().addClass(u)
        },
        _renderInput: function() {
            this._element().append(n("<textarea>").addClass(f)).append(n("<div />").addClass(e))
        },
        _renderInputType: n.noop,
        _renderProps: function() {
            this.callBase(), this._input().prop({
                rows: this.option("rows"),
                cols: this.option("cols")
            })
        },
        _renderDimensions: function() {
            this.callBase();
            var n = this.option("width"),
                t = this.option("height");
            this._input().width(n), this._input().height(t)
        }
    }))
}(jQuery, DevExpress), function(n, t, i) {
    var r = t.ui,
        u = Math;
    r.registerComponent("dxNumberBox", r.dxEditBox.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                value: 0,
                min: -Number.MAX_VALUE,
                max: Number.MAX_VALUE,
                mode: "number"
            })
        },
        _render: function() {
            this.callBase(), this._element().addClass("dx-numberbox"), this._setInputInvalidHandler()
        },
        _renderProps: function() {
            this.callBase(), this._input().prop({
                min: this.option("min"),
                max: this.option("max")
            })
        },
        _setInputInvalidHandler: function() {
            var t = this,
                i = this._eventHelper.eventName(this.option("valueUpdateEvent"));
            this._input().on(i, function() {
                var n = t._input()[0];
                typeof n.checkValidity == "function" && n.checkValidity()
            }).focusout(n.proxy(this._trimInputValue, this)).on("invalid", n.proxy(this._inputInvalidHandler, this))
        },
        _renderValue: function() {
            var n = this.option("value") ? this.option("value").toString() : this.option("value");
            this._input().val() !== n && this._input().val(this.option("value"))
        },
        _trimInputValue: function() {
            var i = this._input(),
                t = n.trim(i.val());
            t[t.length - 1] === "." && (t = t.slice(0, -1)), this._forceRefreshInputValue(t)
        },
        _inputInvalidHandler: function() {
            var n = this._input(),
                t = n.val();
            if (this._oldValue) {
                this.option("value", this._oldValue), n.val(this._oldValue), this._oldValue = null;
                return
            }(!t || /,/.test(t)) && (this.option("value", ""), n.val(""))
        },
        _handleValueChange: function() {
            var i = this._input(),
                t = n.trim(i.val());
            this._validateValue(t) && (t = this._parseValue(t), t || t === 0) && (this.option("value", t), i.val() != t && i.val(t))
        },
        _forceRefreshInputValue: function(n) {
            var t = this._input();
            t.val("").val(n)
        },
        _validateValue: function(n) {
            var i = this._eventHelper.eventName(this.option("valueUpdateEvent")),
                t = this._input();
            if (this._oldValue = null, this._hasCommaChar = null, /,/.test(n) || this._calcPointsCount(n) > 1) {
                n = "", this._hasCommaChar = !0;
                t.one(i, function() {
                    t.trigger("invalid")
                })
            }
            return n ? n[n.length - 1] === "." ? !1 : !0 : (this._oldValue = this.option("value"), this.option("value", ""), this._hasCommaChar && t.trigger("invalid"), !1)
        },
        _calcPointsCount: function(t) {
            for (var i = 0, r = -1;
                (r = n.inArray(".", t.split(""), r + 1)) > -1;) i++;
            return i
        },
        _parseValue: function(n) {
            var t;
            return (t = Globalize.parseFloat(n, 10, Globalize.findClosestCulture(navigator.language) || Globalize.cultures["default"].language), isNaN(t)) ? (this._input().val(this.option("value")), i) : (t = u.max(t, this.option("min")), t = u.min(t, this.option("max")))
        },
        _optionChanged: function(n) {
            n === "min" || n === "max" ? this._renderProps(arguments) : this.callBase.apply(this, arguments)
        }
    }))
}(jQuery, DevExpress), function(n, t, i) {
    var u = t.ui,
        e = "dx-datebox",
        o = ["date", "time", "datetime"],
        r = {
            date: "yyyy-MM-dd",
            datetime: "yyyy'-'MM'-'dd'T'HH':'mm':'ss'Z'",
            datetimeAndroid: "yyyy'-'MM'-'dd'T'HH':'mm'Z'",
            time: "HH:mm"
        },
        s = {
            date: {
                y: 1,
                M: 1,
                d: 1
            },
            time: {
                h: 1,
                m: 1
            },
            datetime: {
                h: 1,
                m: 1,
                s: 1,
                M: 1,
                y: 1,
                d: 1,
                ms: 1
            }
        },
        h = function(n, t) {
            return Globalize.format(n, r[t])
        },
        c = function(n) {
            return Globalize.parseDate(n, r.datetime) || Globalize.parseDate(n, r.datetimeAndroid) || Globalize.parseDate(n, r.time) || Globalize.parseDate(n, r.date)
        },
        f = ["y", "d", "M", "h", "m", "s", "ms"],
        l = ["FullYear", "Date", "Month", "Hours", "Minutes", "Seconds", "Milliseconds"],
        a = function(t, r, u) {
            if (!r) return i;
            var e = {};
            return n.each(f, function() {
                e[this] = !1
            }), n.extend(e, s[u]), isNaN(t.getDate()) && (t = new Date), n.each(l, function(n) {
                var i = e[f[n]];
                i && t["set" + this](r["get" + this]())
            }), t
        };
    u.registerComponent("dxDateBox", u.dxEditBox.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                format: "date",
                value: new Date
            })
        },
        _init: function() {
            this.callBase(), n.inArray(this.option("format"), o) === -1 && this.option("format", "date"), this.option("mode", this.option("format"))
        },
        _render: function() {
            this.callBase(), this._element().addClass(e)
        },
        _handleValueChange: function() {
            var i = c(this._input().val()),
                n = new Date(this.option("value") && this.option("value").valueOf()),
                t = a(n, i, this.option("format"));
            this.option({
                value: t
            }), t !== n && this._renderValue()
        },
        _renderValue: function() {
            this._input().val(h(this.option("value"), this.option("format")))
        },
        _optionChanged: function(n, t, i) {
            switch (n) {
                case "value":
                    this._renderValue(), this._changeAction(t);
                    break;
                case "format":
                    this.option("mode", t), this._renderValue();
                    break;
                default:
                    this.callBase(n, t, i)
            }
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var u = t.ui,
        o = t.translator,
        f = t.utils,
        r = "dx-slider",
        s = r + "-wrapper",
        e = r + "-handle",
        h = "." + e,
        c = r + "-bar",
        l = r + "-range";
    u.registerComponent("dxSlider", u.Widget.inherit({
        _activeStateUnit: h,
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                min: 0,
                max: 100,
                step: 1,
                value: 50
            })
        },
        _init: function() {
            this.callBase(), f.windowResizeCallbacks.add(this._refreshHandler = n.proxy(this._refresh, this))
        },
        _dispose: function() {
            this.callBase(), f.windowResizeCallbacks.remove(this._refreshHandler)
        },
        _render: function() {
            this.callBase(), this._wrapper = n("<div />").addClass(s), this._bar = n("<div />").addClass(c).appendTo(this._wrapper), this._selectedRange = n("<div />").addClass(l).appendTo(this._bar), this._handle = n("<div />").addClass(e).appendTo(this._bar), this._element().addClass(r).append(this._wrapper), this._wrapper.dxSwipeable({
                elastic: !1,
                startAction: n.proxy(this._handleSwipeStart, this),
                updateAction: n.proxy(this._handleSwipeUpdate, this),
                endAction: n.proxy(this._handleSwipeEnd, this),
                itemWidthFunc: n.proxy(this._itemWidthFunc, this)
            }), this._renderValue(), this._renderStartHandler()
        },
        _renderStartHandler: function() {
            var t = this._eventHelper.eventName("start"),
                i = this._createAction(n.proxy(this._handleStart, this));
            this._element().on(t, function(n) {
                i({
                    jQueryEvent: n
                })
            })
        },
        _itemWidthFunc: function() {
            return this._element().width()
        },
        _handleSwipeStart: function(n) {
            this._startOffset = this._currentRatio, n.maxLeftOffset = this._startOffset, n.maxRightOffset = 1 - this._startOffset
        },
        _handleSwipeUpdate: function(n) {
            this._handleValueChange(this._startOffset + n.offset)
        },
        _handleSwipeEnd: function() {
            u.gestureUtils.forget()
        },
        _handleValueChange: function(n) {
            var r = this.option("min"),
                u = this.option("max"),
                t = this.option("step"),
                o = n * (u - r),
                i = r + o,
                f, e;
            ((!t || isNaN(t)) && (t = 1), t = parseFloat(t.toFixed(5)), t === 0 && (t = 1e-5), t < 0) || (i === u || i === r ? this.option("value", i) : (f = (t + "").split("."), e = f.length > 1 ? f[1].length : e, i = Number((Math.round(o / t) * t + r).toFixed(e)), this.option("value", Math.min(i, u))))
        },
        _handleStart: function(n) {
            var t = n.jQueryEvent,
                i = n.component;
            i._eventHelper.needSkipEvent(t) || (this._currentRatio = (this._eventHelper.eventX(t) - this._bar.offset().left) / this._bar.width(), this._handleValueChange(this._currentRatio))
        },
        _renderValue: function() {
            var i = this.option("value"),
                n = this.option("min"),
                t = this.option("max");
            if (!(n > t)) {
                if (i < n) {
                    this.option("value", n), this._currentRatio = 0;
                    return
                }
                if (i > t) {
                    this.option("value", t), this._currentRatio = 1;
                    return
                }
                var f = this._handle.outerWidth(),
                    u = this._bar.width(),
                    r = n === t ? 0 : (i - n) / (t - n);
                this._selectedRange.width(r * u), o.move(this._handle, {
                    left: r * u - f / 2
                }), this._currentRatio = r
            }
        },
        _refresh: function() {
            this._renderValue()
        },
        _feedbackOff: function(n) {
            n || this.callBase.apply(this, arguments)
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var u = t.ui,
        r = t.translator,
        f = "dx-slider-handle";
    u.registerComponent("dxRangeSlider", u.dxSlider.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                start: 40,
                end: 60,
                value: 50
            })
        },
        _render: function() {
            this._handleRight = n("<div />").addClass(f), this.callBase(), this._handleRight.appendTo(this._bar)
        },
        _handleStart: function(n) {
            var r = n.jQueryEvent,
                u = this._eventHelper.eventX(r) - this._bar.offset().left,
                t = this._handle.position().left,
                i = this._handleRight.position().left;
            this._handlersDistance = Math.abs(t - i), this._capturedHandle = (t + i) / 2 > u ? this._handle : this._handleRight, this.callBase(n)
        },
        _handleSwipeUpdate: function(n) {
            Math.abs(this.option("start") - this.option("end")) === 0 && this._handlersDistance < this._handle.outerWidth() && (this._feedbackOff(!1, !0), this._capturedHandle = n.offset <= 0 ? this._handle : this._handleRight, this._feedbackOn(this._capturedHandle, !0)), this.callBase(n)
        },
        _handleValueChange: function(n) {
            this.callBase(n);
            var f = this._capturedHandle === this._handle ? "start" : "end",
                t = this.option("start"),
                u = this.option("end"),
                r = this.option("value"),
                i = this.option("max"),
                e = this.option("min");
            t > i && (t = i, this.option("start", i)), t < e && (t = e, this.option("start", e)), u > i && (u = i, this.option("end", i)), r > u && f === "start" && (r = u), r < t && f === "end" && (r = t), this.option(f, r)
        },
        _renderValue: function() {
            var i = this.option("start"),
                u = this.option("end"),
                n = this.option("min"),
                t = this.option("max");
            i < n && (i = n), i > t && (i = t), u > t && (u = t), u < i && (u = i);
            var o = this._handle.outerWidth(),
                f = this._bar.width(),
                e = t === n ? 0 : (i - n) / (t - n),
                s = t === n ? 0 : (u - n) / (t - n);
            this._selectedRange.width((s - e) * f), r.move(this._selectedRange, {
                left: e * f
            }), r.move(this._handle, {
                left: e * f - o / 2
            }), r.move(this._handleRight, {
                left: s * f - o / 2
            })
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var r = t.ui,
        f = "dx-tabs",
        e = "dx-indent-wrapper",
        o = "dx-tab",
        s = ".dx-tab",
        h = "dx-tab-selected",
        c = "dx-tab-text",
        u = "dx-icon",
        l = "dxTabData";
    r.registerComponent("dxTabs", r.CollectionContainerWidget.inherit({
        _activeStateUnit: s,
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                selectedIndex: -1
            })
        },
        _itemClass: function() {
            return o
        },
        _itemDataKey: function() {
            return l
        },
        _itemRenderDefault: function(t, i, r) {
            if (this.callBase(t, i, r), !t.html) {
                var s = t.text,
                    e = t.icon,
                    o = t.iconSrc,
                    f;
                s && r.wrapInner(n("<span />").addClass(c)), e ? f = n("<span />").addClass(u + "-" + e) : o && (f = n("<img />").attr("src", o)), f && f.addClass(u).prependTo(r)
            }
        },
        _render: function() {
            this.callBase(), this._element().addClass(f), this._renderWrapper(), this._renderSelectedIndex()
        },
        _renderWrapper: function() {
            this._element().wrapInner(n("<div />").addClass(e))
        },
        _renderSelectedIndex: function() {
            var t = this.option("selectedIndex");
            this._tabs().each(function(i) {
                n(this).toggleClass(h, i === t)
            })
        },
        _renderEmptyMessage: n.noop,
        _tabs: function() {
            return this._items()
        },
        _attachClickEvent: function() {
            var n = this._itemSelector(),
                t = this._createAction(this._handleItemClick);
            this._element().off("." + this.NAME, n).on(this._eventHelper.eventName("end"), n, function(n) {
                t({
                    jQueryEvent: n
                })
            })
        },
        _handleItemClick: function(t) {
            var r = t.jQueryEvent,
                i = t.component,
                u;
            i._eventHelper.needSkipEvent(r) || (u = n(r.target).closest(i._itemSelector()).get(0), i.option("selectedIndex", i._tabs().index(u)), r.target = i._tabs().get(i.option("selectedIndex")), i._handleItemEvent(r, "itemClickAction"))
        },
        _optionChanged: function(n) {
            switch (n) {
                case "selectedIndex":
                    this._renderSelectedIndex();
                    break;
                default:
                    this.callBase.apply(this, arguments)
            }
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var r = t.ui,
        u = "dx-navbar",
        f = "dx-nav-item",
        e = "dx-nav-item-content";
    r.registerComponent("dxNavBar", r.dxTabs.inherit({
        _render: function() {
            this.callBase(), this._element().addClass(u)
        },
        _renderItem: function(t, i) {
            var r = this.callBase(t, i);
            return r.addClass(f).wrapInner(n("<div />").addClass(e))
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var r = t.ui,
        f = "dx-toolbar",
        e = "dx-toolbar-item",
        o = "dx-toolbar-label",
        u = "dx-toolbar-button",
        s = "dxToolbarItemDataKey";
    r.registerComponent("dxToolbar", r.CollectionContainerWidget.inherit({
        _itemContainer: function() {
            return this._element().find(".dx-toolbar-left,.dx-toolbar-center,.dx-toolbar-right")
        },
        _itemClass: function() {
            return e
        },
        _itemDataKey: function() {
            return s
        },
        _itemRenderDefault: function(i, r, u) {
            var f;
            if (this.callBase(i, r, u), f = i.widget, f) {
                var e = n("<div />").appendTo(u),
                    o = t.inflector.camelize("dx-" + f),
                    s = i.options || {};
                e[o](s)
            }
        },
        _render: function() {
            this._element().addClass(f), this._renderContainers(), this.callBase()
        },
        _renderEmptyMessage: n.noop,
        _clean: function() {
            this._element().children().empty()
        },
        _renderItem: function(n, t) {
            var r = t.align || "center",
                f = this._element().find(".dx-toolbar-" + r),
                i = this.callBase(n, t, f);
            return i.addClass(u), t.text && i.addClass(o).removeClass(u), i
        },
        _renderContainers: function() {
            var t = this._element();
            n.each(["left", "center", "right"], function() {
                var i = "dx-toolbar-" + this,
                    r = t.find("." + i);
                r.length || (r = n("<div />").addClass(i).appendTo(t))
            })
        }
    }))
}(jQuery, DevExpress), function(n, t, i) {
    var r = t.ui,
        e = "dx-list",
        u = "dx-list-item",
        o = "." + u,
        s = "dx-list-group",
        h = "dx-list-group-header",
        f = "dx-has-next",
        c = "dx-list-next-button",
        l = "dxListItemData",
        a = 70,
        v = 30,
        y = 1e3,
        p = 30,
        w = 75;
    r.registerComponent("dxList", r.CollectionContainerWidget.inherit({
        _activeStateUnit: o,
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                pullRefreshEnabled: !1,
                autoPagingEnabled: !0,
                scrollingEnabled: !0,
                scrollByContent: !0,
                scrollByThumb: !1,
                showScrollbar: !0,
                showNextButton: !1,
                itemHoldAction: null,
                itemHoldTimeout: 750,
                itemSwipeAction: null,
                grouped: !1,
                groupTemplate: "group",
                groupRender: null
            })
        },
        _itemClass: function() {
            return u
        },
        _itemDataKey: function() {
            return l
        },
        _itemContainer: function() {
            return this._container
        },
        _init: function() {
            this._dataLoading = !0, this.callBase(), this._container = this._element(), this._initScrollView(), this._feedbackShowTimeout = a
        },
        _initScrollView: function() {
            this._scrollView = this._element().dxScrollView({
                disabled: this.option("disabled") || !this.option("scrollingEnabled"),
                pullDownAction: this.option("scrollingEnabled") && this.option("pullRefreshEnabled") ? n.proxy(this._handlePullDown, this) : null,
                reachBottomAction: this.option("scrollingEnabled") && this.option("autoPagingEnabled") && this._dataSource ? n.proxy(this._handleScrollBottom, this) : null
            }).data("dxScrollView"), this._scrollView.toggleLoading(!!this._dataSource), this._container = this._scrollView.content()
        },
        _afterItemsRendered: function(t) {
            var i = !t || this._allDataLoaded();
            this._scrollView.option("updateAction", i ? null : n.proxy(this._handleScrollViewUpdated, this)), this._scrollView.toggleLoading(this._dataLoading), this._scrollView.release(i), this._nextButton && this._toggleNextButton(!i)
        },
        _handlePullDown: function() {
            this._dataSource ? this._dataSource.reload() : this._afterItemsRendered()
        },
        _handleScrollBottom: function() {
            this._dataSource ? this._dataSource.nextPage(!0) : this._afterItemsRendered()
        },
        _handleScrollViewUpdated: function(n) {
            var t = n.component;
            t.isFull() || this._handleScrollBottom()
        },
        _handleDataSourceLoadError: function() {
            this._initialized && this._afterItemsRendered()
        },
        _render: function() {
            this._dataSource || (this._dataLoading = !1);
            var i = new t.Action(this._handleItemStart, {
                    context: this
                }),
                r = new t.Action(this._handleItemEnd, {
                    context: this
                });
            this._element().addClass(e), this.callBase();
            this._element().on(this._eventHelper.eventName("start"), this._itemSelector(), n.proxy(i.execute, i)).on(this._eventHelper.eventName("end"), this._itemSelector(), n.proxy(r.execute, r)).on(this._eventHelper.eventName("dx:hold"), this._itemSelector(), {
                timeout: this.option("itemHoldTimeout")
            }, n.proxy(this._handleItemHold, this));
            this.option("showNextButton") && this._dataSource && this._getNextButton()
        },
        _allDataLoaded: function() {
            return !this._dataSource || this._dataSource.isLastPage()
        },
        _getNextButton: function() {
            return this._nextButton || (this._nextButton = this._createNextButton()), this._nextButton
        },
        _createNextButton: function() {
            var t = !this._allDataLoaded();
            return this._element().toggleClass(f, t), n("<div/>").addClass(c).toggle(t).append(n("<div/>").dxButton({
                text: "More",
                clickAction: n.proxy(this._handleNextButton, this)
            })).appendTo(this._element())
        },
        _renderItems: function() {
            this.option("grouped") ? n.each(this.option("items") || [], n.proxy(this._renderGroup, this)) : this.callBase(), this._afterItemsRendered(!0)
        },
        _handleNextButton: function() {
            this._dataLoading || (this._dataLoading = !0, this._scrollView.toggleLoading(!0), this._dataSource.nextPage(!0))
        },
        _toggleNextButton: function(n) {
            var t = this._getNextButton();
            t.toggle(n), this._element().toggleClass(f, n)
        },
        _handleItemStart: function(n) {
            this._eventHelper.needSkipEvent(n) || this._handleSwipe(n)
        },
        _handleItemHold: function(n) {
            this._handleItemEvent(n, "itemHoldAction")
        },
        _handleSwipe: function(n) {
            var f = this,
                t = this._eventHelper,
                r = t.eventData(n),
                u, e = function(n) {
                    r && (u = t.eventData(n), Math.abs(r.x - u.x) > v && n.preventDefault())
                },
                o = function(n) {
                    if (f._element().off(t.eventName("move")), r && u) {
                        var e = t.eventDelta(u, r);
                        e.time < y && Math.abs(e.x) > p && Math.abs(e.y) < w && f._handleItemEvent(n, "itemSwipeAction", {
                            direction: e.x > 0 ? "left" : "right"
                        })
                    }
                    r = u = i
                };
            this._element().on(t.eventName("move"), this._itemSelector(), e).one(t.eventName("end"), this._itemSelector(), o)
        },
        _groupRenderDefault: function(n) {
            return String(n.key || n)
        },
        _renderGroup: function(t, i) {
            var r = this,
                e = n("<div />").addClass(s).appendTo(r._itemContainer()),
                o = r.option("groupRender"),
                l = r.option("groupTemplate"),
                c = r._getTemplate(i.template || l, t, i),
                u, f = {
                    index: t,
                    group: i,
                    container: e
                };
            u = o ? r._createGroupByRenderer(o, f) : c ? r._createGroupByTemplate(c, f) : r._createGroupByRenderer(r._groupRenderDefault, f), u.addClass(h), n.each(i.items || [], function(n, t) {
                r._renderItem(n, t, e)
            })
        },
        _createGroupByRenderer: function(t, i) {
            var r = n("<div />").appendTo(i.container),
                u = t(i.group, i.index, r);
            return u && r[0] !== u[0] && r.append(u), r
        },
        _createGroupByTemplate: function(n, t) {
            return n.render(t.container, t.group)
        },
        _handleDataSourceChanged: function(n) {
            this._dataLoading = !1, this.callBase(n)
        },
        _dispose: function() {
            clearTimeout(this._holdTimer), this.callBase()
        },
        _optionChanged: function(n, t, i) {
            switch (n) {
                case "dataSource":
                    this.callBase(n, t, i), this._initScrollView();
                    return;
                case "pullRefreshEnabled":
                case "autoPagingEnabled":
                case "scrollingEnabled":
                case "scrollByContent":
                case "scrollByThumb":
                    this._initScrollView();
                    return;
                default:
                    this.callBase(n, t, i)
            }
        },
        update: function(t) {
            var i = this,
                r = n.Deferred();
            return i._scrollView ? i._scrollView.update(t).done(function() {
                r.resolveWith(i)
            }) : r.resolveWith(i), r.promise()
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var r = t.ui,
        u = t.utils,
        e = "dx-tileview",
        o = "dx-tiles-wrapper",
        f = "dx-tile",
        s = "." + f,
        h = "dxTileData";
    r.registerComponent("dxTileView", r.CollectionContainerWidget.inherit({
        _activeStateUnit: s,
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                items: null,
                bounceEnabled: !0,
                showScrollbar: !1,
                listHeight: 500,
                baseItemWidth: 100,
                baseItemHeight: 100,
                itemMargin: 25
            })
        },
        _itemClass: function() {
            return f
        },
        _itemDataKey: function() {
            return h
        },
        _itemContainer: function() {
            return this._wrapper
        },
        _init: function() {
            var n = this;
            n.callBase(), n._refreshHandler = function() {
                n._renderGeometry()
            }, u.windowResizeCallbacks.add(n._refreshHandler)
        },
        _dispose: function() {
            this.callBase(), u.windowResizeCallbacks.remove(this._refreshHandler)
        },
        _render: function() {
            this.cellsPerColumn = 1, this._element().addClass(e).height(this.option("listHeight")), this._wrapper || this._renderWrapper(), this._initScrollable(), this.callBase(), this._renderGeometry()
        },
        _renderWrapper: function() {
            this._wrapper = n("<div />").addClass(o).appendTo(this._element())
        },
        _initScrollable: function() {
            this._element().dxScrollable({
                direction: "horizontal",
                showScrollbar: this.option("showScrollbar"),
                bounceEnabled: this.option("bounceEnabled")
            })
        },
        _renderGeometry: function() {
            var t = this.option("items") || [],
                i = Math.max.apply(Math, n.map(t || [], function(n) {
                    return n.heightRatio || 1
                }));
            this.cellsPerColumn = Math.floor(this._element().height() / (this.option("baseItemHeight") + this.option("itemMargin"))), this.cellsPerColumn = Math.max(this.cellsPerColumn, i), this.cells = [], this.cells.push(new Array(this.cellsPerColumn)), this._arrangeItems(t), this._wrapper.width(this.cells.length * this.option("baseItemWidth") + (this.cells.length + 1) * this.option("itemMargin"))
        },
        _arrangeItems: function(t) {
            var i = this;
            n.each(t, function(n, t) {
                t.widthRatio = t.widthRatio || 1, t.heightRatio = t.heightRatio || 1, t.text = t.text || "";
                var u = i._items().eq(n),
                    r = i._getItemPosition(t);
                r.x === -1 && (r.x = i.cells.push(new Array(this.cellsPerColumn)) - 1), i._occupyCells(t, r), i._arrangeItem(u, t, r)
            })
        },
        _getItemPosition: function(n) {
            for (var r = {
                    x: -1,
                    y: 0
                }, i, t = 0; t < this.cells.length; t++) {
                for (i = 0; i < this.cellsPerColumn; i++)
                    if (this._itemFit(t, i, n)) {
                        r.x = t, r.y = i;
                        break
                    }
                if (r.x > -1) break
            }
            return r
        },
        _itemFit: function(n, t, i) {
            var f = !0,
                r, u;
            if (t + i.heightRatio > this.cellsPerColumn) return !1;
            for (r = n; r < n + i.widthRatio; r++)
                for (u = t; u < t + i.heightRatio; u++)
                    if (this.cells.length - 1 < r) this.cells.push(new Array(this.cellsPerColumn));
                    else if (this.cells[r][u]) {
                f = !1;
                break
            }
            return f
        },
        _occupyCells: function(n, t) {
            for (var r, i = t.x; i < t.x + n.widthRatio; i++)
                for (r = t.y; r < t.y + n.heightRatio; r++) this.cells[i][r] = !0
        },
        _arrangeItem: function(n, t, i) {
            var u = this.option("baseItemHeight"),
                f = this.option("baseItemWidth"),
                r = this.option("itemMargin");
            n.css({
                height: t.heightRatio * u + (t.heightRatio - 1) * r,
                width: t.widthRatio * f + (t.widthRatio - 1) * r,
                top: i.y * u + (i.y + 1) * r,
                left: i.x * f + (i.x + 1) * r
            })
        },
        _optionChanged: function(n) {
            n === "bounceEnabled" || n === "showScrollbar" ? this._initScrollable() : this.callBase.apply(this, arguments)
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var u = t.ui,
        s = t.fx,
        a = t.translator,
        r = "dx-gallery",
        v = r + "-wrapper",
        f = r + "-item",
        y = "." + f,
        h = f + "-selected",
        e = r + "-indicator",
        w = "." + e,
        o = e + "-item",
        c = "." + o,
        l = o + "-selected",
        p = "dxGalleryItemData";
    u.registerComponent("dxGalleryNavButton", u.Widget.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                direction: "next"
            })
        },
        _render: function() {
            this.callBase(), this._element().addClass(r + "-nav-button-" + this.option("direction"))
        }
    })), u.registerComponent("dxGallery", u.CollectionContainerWidget.inherit({
        _activeStateUnit: y,
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                animationDuration: 400,
                loop: !1,
                swipeEnabled: !0,
                indicatorEnabled: !0,
                showIndicator: !0,
                selectedIndex: 0,
                slideshowDelay: 0,
                showNavButtons: !1
            })
        },
        _dataSourceOptions: function() {
            return {
                paginate: !1
            }
        },
        _itemContainer: function() {
            return this._container
        },
        _itemClass: function() {
            return f
        },
        _itemDataKey: function() {
            return p
        },
        _itemWidth: function() {
            return this._items().first().outerWidth()
        },
        _itemsCount: function() {
            return (this.option("items") || []).length
        },
        _itemRenderDefault: function(t, i, r) {
            this.callBase(t, i, r), n.isPlainObject(t) || r.append(n("<img />").attr("src", String(t)))
        },
        _render: function() {
            this._element().addClass(r).on(this._eventHelper.eventName("dragstart"), "img", function() {
                return !1
            });
            this._renderItemContainer(), this.callBase(), this._renderItemPositions(), this._renderIndicator(), this._renderSelectedIndicatorItem(), this._renderUserInteraction(), this._renderNavButtons(), this._setupSlideShow(), this._checkDimensions()
        },
        _renderItemContainer: function() {
            this._container || (this._container = n("<div />").addClass(v).appendTo(this._element()))
        },
        _renderItemPositions: function(t, i) {
            t = t || 0;
            var u = this,
                r = this._itemWidth(),
                o = this.option("selectedIndex"),
                h = this.option("animationDuration"),
                c = t - o,
                f = n.Deferred(),
                e = [];
            return this._items().each(function(t) {
                t = u._flipIndex(c + t);
                var o = n(this).data("dxGalleryUIIndex"),
                    l = {
                        left: t * r
                    },
                    f = {
                        type: "slide",
                        to: l,
                        duration: h
                    };
                t - o > 1 && (f.from = {
                    left: (t + 1) * r
                }), o - t > 1 && (f.from = {
                    left: (t - 1) * r
                }), n(this).data("dxGalleryUIIndex", t), i ? e.push(s.animate(this, f)) : a.move(n(this), l)
            }), n.when.apply(n, e).done(function() {
                f.resolveWith(u)
            }), f.promise()
        },
        _checkDimensions: function() {
            var n = this._items().first();
            n && (this.option("height") || this.option("height", n.outerHeight()), this.option("width") || this.option("width", n.outerWidth()))
        },
        _renderIndicator: function() {
            if (!this.option("showIndicator")) {
                this._cleanIndicators();
                return
            }
            var t = this._indicator = n("<div />").addClass(e).appendTo(this._element());
            n.each(this.option("items") || [], function() {
                n("<div />").addClass(o).appendTo(t)
            })
        },
        _cleanIndicators: function() {
            this._indicator && this._indicator.remove()
        },
        _renderSelectedIndicatorItem: function() {
            var n = this.option("selectedIndex");
            this._items().removeClass(h).eq(n).addClass(h), this._element().find(c).removeClass(l).eq(n).addClass(l)
        },
        _renderUserInteraction: function() {
            var t = this,
                i = t._element(),
                r = t.option("swipeEnabled"),
                u = t.option("indicatorEnabled"),
                f = r ? "pointer" : "default";
            i.dxSwipeable({
                startAction: r ? n.proxy(t._handleSwipeStart, t) : function(n) {
                    n.cancel = !0
                },
                updateAction: n.proxy(t._handleSwipeUpdate, t),
                endAction: n.proxy(t._handleSwipeEnd, t),
                itemWidthFunc: n.proxy(t._itemWidth, t)
            });
            i.find(c).css({
                cursor: f
            }).off(this._eventHelper.eventName("click")).on(this._eventHelper.eventName("click"), function() {
                if (u) {
                    var i = n(this).index();
                    t._renderItemPositions(t.option("selectedIndex") - i, !0).done(function() {
                        this._suppressRenderItemPositions = !0, t.option("selectedIndex", i)
                    })
                }
            })
        },
        _renderNavButtons: function() {
            var t = this;
            if (!t.option("showNavButtons")) {
                t._cleanNavButtons();
                return
            }
            t._prevNavButton = n("<div />").dxGalleryNavButton({
                direction: "prev",
                clickAction: function() {
                    t.prevItem(!0)
                }
            }).appendTo(this._element()), t._nextNavButton = n("<div />").dxGalleryNavButton({
                direction: "next",
                clickAction: function() {
                    t.nextItem(!0)
                }
            }).appendTo(this._element()), this._renderNavButtonsVisibility()
        },
        _cleanNavButtons: function() {
            this._prevNavButton && this._prevNavButton.remove(), this._prevNavButton && this._nextNavButton.remove()
        },
        _renderNavButtonsVisibility: function() {
            if (this.option("showNavButtons")) {
                var n = this.option("selectedIndex"),
                    t = this.option("loop"),
                    i = this._itemsCount();
                (n < i && n > 0 || t) && (this._prevNavButton.show(), this._nextNavButton.show()), t || (n < 1 && this._prevNavButton.hide(), n === i - 1 && this._nextNavButton.hide())
            }
        },
        _setupSlideShow: function() {
            var n = this,
                t = n.option("slideshowDelay");
            t && (clearTimeout(n._slideshowTimer), n._slideshowTimer = setTimeout(function() {
                if (n._userInteraction) {
                    n._setupSlideShow();
                    return
                }
                n.nextItem(!0).done(n._setupSlideShow)
            }, t))
        },
        _handleSwipeStart: function(n) {
            var i = this._itemsCount(),
                t;
            if (!i || s.animating(this._items().eq(0))) {
                n.cancel = !0;
                return
            }
            this._userInteraction = !0, this.option("loop") || (t = this.option("selectedIndex"), n.maxLeftOffset = i - t - 1, n.maxRightOffset = t)
        },
        _handleSwipeUpdate: function(n) {
            this._renderItemPositions(n.offset)
        },
        _handleSwipeEnd: function(n) {
            this._renderItemPositions(n.targetOffset, !0).done(function() {
                var t = this.option("selectedIndex"),
                    i = this._fitIndex(t - n.targetOffset);
                this._suppressRenderItemPositions = !0, this.option("selectedIndex", i), this._userInteraction = !1, this._setupSlideShow()
            })
        },
        _flipIndex: function(n) {
            if (!this.option("loop")) return n;
            var t = this._itemsCount();
            return n = n % t, n > (t + 1) / 2 && (n -= t), n < -(t - 1) / 2 && (n += t), n
        },
        _fitIndex: function(n) {
            if (!this.option("loop")) return n;
            var t = this._itemsCount();
            return n = n % t, n < 0 && (n += t), n
        },
        _clean: function() {
            this.callBase(), this._cleanIndicators(), this._cleanNavButtons()
        },
        _dispose: function() {
            clearTimeout(this._slideshowTimer), this.callBase()
        },
        _handleSelectedIndexChanged: function() {
            this._suppressRenderItemPositions || this._renderItemPositions(), this._suppressRenderItemPositions = !1, this._renderSelectedIndicatorItem(), this._renderNavButtonsVisibility()
        },
        _optionChanged: function(n, t, i) {
            switch (n) {
                case "animationDuration":
                case "loop":
                    this._renderNavButtonsVisibility();
                    return;
                case "selectedIndex":
                    this._handleSelectedIndexChanged();
                    return;
                case "showIndicator":
                    this._renderIndicator();
                    return;
                case "showNavButtons":
                    this._renderNavButtons();
                    return;
                case "slideshowDelay":
                    this._setupSlideShow();
                    return;
                case "swipeEnabled":
                case "indicatorEnabled":
                    this._renderUserInteraction();
                    return;
                default:
                    this.callBase(n, t, i)
            }
        },
        goToItem: function(t, i) {
            var r = new n.Deferred,
                u = this.option("selectedIndex"),
                f = this._itemsCount();
            return (t = this._fitIndex(t), t > f - 1 || t < 0) ? r.resolveWith(this).promise() : (this._renderItemPositions(u - t, i).done(function() {
                this._suppressRenderItemPositions = !0, this.option("selectedIndex", t), r.resolveWith(this)
            }), r.promise())
        },
        prevItem: function(n) {
            return this.goToItem(this.option("selectedIndex") - 1, n)
        },
        nextItem: function(n) {
            return this.goToItem(this.option("selectedIndex") + 1, n)
        }
    }))
}(jQuery, DevExpress), function(n, t, i) {
    var u = t.ui,
        o = t.utils,
        r = "dx-overlay",
        h = r + "-content",
        f = r + "-shader",
        c = r + "-modal",
        l = 50,
        s = ["showingAction", "shownAction", "hiddingAction", "hiddenAction"],
        e = ".dx-viewport";
    u.registerComponent("dxOverlay", u.ContainerWidget.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                activeStateEnabled: !1,
                visible: !1,
                shading: !0,
                closeOnOutsideClick: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window
                },
                animation: {
                    show: {
                        type: "pop",
                        duration: 400
                    },
                    hide: {
                        type: "pop",
                        to: {
                            opacity: 0,
                            scale: 0
                        },
                        from: {
                            opacity: 1,
                            scale: 1
                        },
                        duration: 400
                    }
                },
                showingAction: null,
                shownAction: null,
                hiddingAction: null,
                hiddenAction: null,
                width: function() {
                    return n(window).width() * .8
                },
                height: function() {
                    return n(window).height() * .8
                },
                targetContainer: i
            })
        },
        _init: function() {
            this.callBase(), this._actions = {}, this._deferredAnimate = i, this._attachCloseOnOutsideClickHandler(), this._windowResizeCallback = n.proxy(this._refresh, this), o.windowResizeCallbacks.add(this._windowResizeCallback), this._$container = n("<div />").addClass(h)
        },
        _initOptions: function(n) {
            this._setTarget(n.targetContainer), this._setPositionOf(this._$target), this.callBase(n)
        },
        _setTarget: function(r) {
            r = r !== i ? r : t.overlayTargetContainer() || e;
            var f = this._element(),
                u = f.closest(r);
            u.length || (u = n(r)), this._$target = u.length ? u : f.parent()
        },
        _setPositionOf: function(n) {
            this.option("position.of", n)
        },
        _closeOnOutsideClickHandler: function(t) {
            var r = this.option("closeOnOutsideClick"),
                u = this.option("visible");
            if (r && u) {
                var i = this._$container,
                    f = !i.is(t.target) && !n.contains(i, t.target),
                    e = Math.abs(t.timeStamp - this._showTimestamp) < l;
                f && !e && this.hide()
            }
        },
        _attachCloseOnOutsideClickHandler: function() {
            var t = this,
                i = t._eventHelper.eventName("start");
            this._myCloseOnOutsideClickHandler = function() {
                return t._closeOnOutsideClickHandler.apply(t, arguments)
            };
            n(document).on(i, this._myCloseOnOutsideClickHandler)
        },
        _detachCloseOnOutsideClickHandler: function() {
            n(document).off(".dxOverlay", this._myCloseOnOutsideClickHandler)
        },
        _render: function() {
            var n = this._element().addClass(r);
            this.callBase(), this._$container.append(n.contents()).appendTo(n), this._needRenderOnShow = !0, this._refresh(), this._renderActions()
        },
        _refresh: function() {
            this._element().toggleClass(f, this.option("shading")), this._element().toggleClass(c, this.option("shading") && !this.option("targetContainer")), this._renderDimensions(), this._renderVisibility()
        },
        _renderActions: function() {
            var t = this;
            n.each(s, function(n, i) {
                t._actions[i] = t._createActionByOption(i)
            })
        },
        _dispose: function() {
            t.fx.stop(this._$container), o.windowResizeCallbacks.remove(this._windowResizeCallback), this.closeCallback && t.backButtonCallback.remove(this.closeCallback), this._detachCloseOnOutsideClickHandler(), this.callBase()
        },
        _renderContent: function() {
            this._templates.template.render(this.content()), this._moveToTargetContainer()
        },
        _moveToTargetContainer: function() {
            this._$target && this._element().appendTo(this._$target)
        },
        _renderContentIfNeed: function() {
            this._needRenderOnShow && (this._renderContent(), this._needRenderOnShow = !1)
        },
        _renderDimensions: function() {
            this._$container.width(this.option("width")).height(this.option("height"))
        },
        _renderVisibility: function() {
            var n = this.option("visible");
            t.fx.stop(this._$container, !0), n && (this._renderContentIfNeed(), this._renderPosition()), this._toggleVisibility(n)
        },
        _renderVisibilityAnimate: function() {
            var i = this.option("visible");
            i && (this._showTimestamp = n.now()), t.fx.stop(this._$container, !0), i ? this._makeVisible() : this._makeHidden()
        },
        _makeVisible: function() {
            var t = this,
                i = t.option("animation") || {},
                r;
            t._actions.showingAction(), t._toggleVisibility(!0), t._toggleVisibility(!0), t._toggleVisibility(!0), t._renderContentIfNeed(), t._renderPosition(), i.show ? (r = i.show.complete || n.noop, t._animate(n.extend({}, i.show, {
                complete: function() {
                    r(), t._notifyShowComplete()
                }
            }))) : t._notifyShowComplete()
        },
        _makeHidden: function() {
            var t = this,
                i = this.option("animation") || {},
                r;
            t._actions.hiddingAction(), this._element().toggleClass(f, !1), i.hide ? (r = i.hide.complete || n.noop, t._animate(n.extend({}, i.hide, {
                complete: function() {
                    t._toggleVisibility(!1), r(), t._cleanupAnimation().done(function() {
                        t._notifyHideComplete()
                    })
                }
            }))) : (t._toggleVisibility(!1), t._notifyHideComplete())
        },
        _notifyShowComplete: function() {
            this._actions.shownAction(), this._deferredAnimate && this._deferredAnimate.resolveWith(this)
        },
        _notifyHideComplete: function() {
            this._actions.hiddenAction(), this._deferredAnimate && this._deferredAnimate.resolveWith(this)
        },
        _renderPosition: function() {
            var n = this._element().show();
            this.option("shading") && (t.position(n, {
                my: "top left",
                at: "top left",
                of: this._$target
            }), n.css({
                width: this._$target.outerWidth(),
                height: this._$target.outerHeight()
            })), t.position(this._$container, this.option("position"))
        },
        _cleanupAnimation: function() {
            var i = this.option("animation"),
                r;
            return i ? (r = i.hide && i.hide.from || i.show && i.show.to, r) ? t.fx.animate(this._$container, {
                duration: 0,
                type: i.hide.type,
                to: r
            }) : n.Deferred().resolve() : n.Deferred().resolve()
        },
        _toggleVisibility: function(n) {
            this._element().toggle(n), this._element().toggleClass(f, this.option("shading") && n)
        },
        _animate: function(i) {
            n.isPlainObject(i) && t.fx.animate(this._$container, i)
        },
        _optionChanged: function(t, i) {
            t === "visible" ? this._renderVisibilityAnimate() : n.inArray(t, s) > -1 ? this._renderActions() : t === "targetContainer" ? (this._setTarget(i), this._moveToTargetContainer(), this._refresh()) : t !== "closeOnOutsideClick" && this._refresh()
        },
        toggle: function(r) {
            return (r = r === i ? !this.option("visible") : r, r ? (this.closeCallback = n.proxy(this.hide, this), t.backButtonCallback.add(this.closeCallback)) : this.closeCallback && t.backButtonCallback.remove(this.closeCallback), r === this.option("visible")) ? n.Deferred().resolve().promise() : (this._deferredAnimate = n.Deferred(), this.option("visible", r), this._deferredAnimate.promise())
        },
        show: function() {
            return this.toggle(!0)
        },
        hide: function() {
            return this.toggle(!1)
        },
        content: function() {
            return this._$container
        }
    })), u.dxOverlay.defaultTargetContainer = function(n) {
        return arguments.length && (e = n), e
    }
}(jQuery, DevExpress), function(n, t) {
    var u = t.ui,
        f = "dx-toast",
        r = f + "-",
        e = r + "content",
        o = r + "message",
        s = r + "icon",
        h = "dxToast",
        c = ["info", "warning", "error", "success"];
    u.registerComponent(h, u.dxOverlay.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                message: "",
                type: "info",
                displayTime: 2e3,
                position: {
                    my: "bottom center",
                    at: "bottom center",
                    of: window,
                    offset: "0 -20"
                },
                animation: {
                    show: {
                        type: "fade",
                        duration: 400,
                        to: 1
                    },
                    hide: {
                        type: "fade",
                        duration: 400,
                        to: 0
                    }
                },
                shading: !1,
                height: "auto"
            })
        },
        _setPositionOf: n.noop,
        _renderContent: function() {
            this.option("message") && (this._message = n("<div>").addClass(o).text(this.option("message")).appendTo(this.content())), n.inArray(this.option("type").toLowerCase(), c) > -1 && this.content().prepend(n("<div>").addClass(s)), this.callBase()
        },
        _render: function() {
            this.callBase(), this._element().addClass(f), this._$container.addClass(r + String(this.option("type")).toLowerCase()), this.content().addClass(e).css("opacity", 0)
        },
        _renderVisibilityAnimate: function() {
            this.callBase.apply(this, arguments), this.option("visible") && (clearTimeout(this._hideTimeout), this._hideTimeout = setTimeout(n.proxy(function() {
                this.hide()
            }, this), this.option("displayTime")))
        },
        _dispose: function() {
            clearTimeout(this._hideTimeout), this.callBase()
        },
        _optionChanged: function(n, t, i) {
            if (n === "type") {
                this._$container.removeClass(r + i), this._$container.addClass(r + String(t).toLowerCase());
                return
            }
            n === "message" && this._message && this._message.text(t), this.callBase.apply(this, arguments)
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var u = t.ui,
        r = "dx-popup",
        o = r + "-content",
        f = r + "-fullscreen",
        e = r + "-title";
    u.registerComponent("dxPopup", u.dxOverlay.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                title: "",
                showTitle: !0,
                fullScreen: !1
            })
        },
        _init: function() {
            this.callBase()
        },
        _render: function() {
            this._$container.toggleClass(f, this.option("fullScreen")), this._$content = this._$container.wrapInner(n("<div />").addClass(o)).children().eq(0), this.callBase(), this._setTitle(), this._element().addClass(r)
        },
        _setTitle: function() {
            var t = this._element().find("." + e);
            this.option("showTitle") && !t.length ? (this._$title = n("<div />").addClass(e), this._$container.prepend(this._$title), this._renderTitle()) : t.length && t.remove()
        },
        _renderContent: function() {
            var n = this._templates.content || this._templates.template;
            n.render(this._$content), this._moveToTargetContainer()
        },
        _renderDimensions: function() {
            this.option("fullScreen") ? this._$container.css({
                width: "100%",
                height: "100%"
            }) : this.callBase()
        },
        _renderPosition: function() {
            this.option("fullScreen") ? this._$container.position(0, 0) : this.callBase()
        },
        _renderTitle: function() {
            if (this.option("showTitle")) {
                var n = this._templates.title;
                n ? n.render(this._$title) : this._defaultTitleRender()
            }
        },
        _defaultTitleRender: function() {
            this._$title.text(this.option("title"))
        },
        _optionChanged: function(n, t) {
            switch (n) {
                case "showTitle":
                    this._setTitle();
                    break;
                case "title":
                    this._renderTitle();
                    break;
                case "fullScreen":
                    this._$container.toggleClass(f, t), this.callBase.apply(this, arguments);
                    break;
                default:
                    this.callBase.apply(this, arguments)
            }
        },
        content: function() {
            return this._$content
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var u = t.ui,
        r = "dx-loadindicator",
        s = r + "-wrapper",
        h = r + "-icon",
        f = r + "-segment",
        e = r + "-segment",
        c = r + "-win8-segment",
        l = r + "-win8-segment",
        a = r + "-win8-inner-segment",
        o = r + "-image",
        v = ["small", "medium", "large"];
    u.registerComponent("dxLoadIndicator", u.Widget.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                visible: !0,
                size: ""
            })
        },
        _render: function() {
            this.callBase(), this._element().addClass(r), this._setSize(), t.support.animation && !this.option("viaImage") ? this._renderMarkupForAnimation() : this._renderMarkupForImage()
        },
        _renderMarkupForAnimation: function() {
            var i = n("<div>").addClass(h),
                t;
            for (i.append(n("<div>").addClass(f).addClass(e + "0")), t = 15; t > 0; --t) i.append(n("<div>").addClass(f).addClass(e + t));
            for (t = 1; t <= 5; ++t) i.append(n("<div>").addClass(c).addClass(l + t).append(n("<div>").addClass(a)));
            n("<div>").addClass(s).append(i).appendTo(this._element())
        },
        _renderMarkupForImage: function() {
            var n = this.option("size");
            n === "small" || n === "large" ? this._element().addClass(o + "-" + n) : this._element().addClass(o)
        },
        _setSize: function() {
            var t = this.option("size");
            t && n.inArray(t, v) !== -1 && this._element().addClass(r + "-" + t)
        },
        _optionChanged: function(n) {
            switch (n) {
                case "size":
                    this._setSize();
                    break;
                default:
                    this.callBase.apply(this, arguments)
            }
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var u = t.ui,
        r = "dx-loadpanel",
        f = r + "-message",
        e = r + "-content";
    u.registerComponent("dxLoadPanel", u.dxOverlay.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                message: "Loading...",
                width: 200,
                height: 70,
                animation: null
            })
        },
        _render: function() {
            this.content().addClass(e), this.callBase(), this._element().addClass(r);
            var t = n("<div>").dxLoadIndicator(),
                i = n("<div>").addClass(f).text(this.option("message"));
            this.content().append(t).append(i)
        },
        _optionChanged: function(n, t) {
            switch (n) {
                case "message":
                    this.content().find("." + f).text(t);
                    break;
                default:
                    this.callBase.apply(this, arguments)
            }
        }
    }))
}(jQuery, DevExpress), function(n, t, i) {
    var f = t.ui,
        r = "dx-lookup",
        u = r + "-selected",
        h = r + "-search",
        c = r + "-field",
        e = r + "-popup",
        o = e + "-search",
        l = "dx-toolbar-left",
        s = ".dx-list-item",
        a = "dxListItemData",
        v = 200;
    f.registerComponent("dxLookup", f.Widget.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                dataSource: null,
                value: i,
                displayValue: i,
                title: "",
                valueExpr: null,
                displayExpr: "this",
                placeholder: "Select...",
                searchEnabled: !0,
                searchTimeout: 1e3,
                minFilterLength: 0,
                fullScreen: !1,
                valueChangeAction: null,
                hideCancelButton: !1
            })
        },
        _init: function() {
            this.callBase(), this._initDataSource(), this._checkExceptions(), this._searchTimer = null, this._compileValueGetter(), this._compileDisplayGetter(), this._createEventActions(), this._dataSource ? this._dataSourceOriginalFilter = this._dataSource.filter() : this._itemsToDataSource()
        },
        _checkExceptions: function() {
            if (this._dataSource && this._dataSource._mapFunc) throw Error("Data source with enabled map is not allowed in the lookup");
        },
        _render: function() {
            this.callBase(), this._element().addClass(r), this._renderField(), this._needRenderOnShow = !0, this._calcSelectedItem(n.proxy(this._setFieldText, this))
        },
        _renderField: function() {
            var t = this._createAction(this._handleFieldClick);
            this._field = n("<div/>").addClass(c).appendTo(this._element()).on(this._eventHelper.eventName("click"), function(n) {
                t({
                    jQueryEvent: n
                })
            })
        },
        _renderContentIfNeed: function() {
            this._needRenderOnShow && (this._renderPopup(), this._renderSearch(), this._renderList(), this.option("hideCancelButton") ? (this._popup.content().removeClass("dx-lookup-cancel"), this._popup.content().children(".dx-lookup-cancel").remove()) : this._renderCancel(), this._needRenderOnShow = !1)
        },
        _renderPopup: function() {
            this._popup = n("<div/>").addClass(e).toggleClass(o, this.option("searchEnabled")).appendTo(this._element()).dxPopup({
                title: this.option("title"),
                fullScreen: this.option("fullScreen")
            }).data("dxPopup")
        },
        _renderSearch: function() {
            var t = this.option("minFilterLength");
            this._search = n("<div/>").addClass(h).dxTextBox({
                mode: "search",
                placeholder: t ? "Type at least " + t + " character(s) to search" : "Search",
                valueUpdateEvent: "change keypress paste focus textInput input",
                valueUpdateAction: n.proxy(this._searchChangedHandler, this)
            }).toggle(this.option("searchEnabled")).appendTo(this._popup.content())
        },
        _renderList: function() {
            var t = this;
            t._list = n("<div/>").appendTo(t._popup.content()).dxList({
                dataSource: null,
                itemClickAction: function(n) {
                    t._toggleSelectedClass(n.jQueryEvent), t._updateOptions(n)
                },
                itemRender: n.proxy(t._displayGetter, t),
                itemRenderedAction: function(n) {
                    t._setSelectedClass(n.itemElement, n.itemData)
                }
            }).data("dxList"), this._needSetItemRenderToList && (this._list.option("itemRender", n.proxy(this._displayGetter, this)), this._needSetItemRenderToList = !1), t._refreshSelected()
        },
        _renderCancel: function() {
            var i = n("<div/>").addClass("dx-lookup-cancel").dxButton({
                text: "Cancel",
                clickAction: n.proxy(function() {
                    this._hidePopup()
                }, this)
            });
            this._popup.content().addClass("dx-lookup-cancel"), t.devices.current().ios ? n("<div />").addClass(l).appendTo(this._popup._$title).prepend(i) : i.appendTo(this._popup.content())
        },
        _toggleSelectedClass: function(t) {
            var i = this._element().find("." + u);
            i.length && i.removeClass(u), n(t.target).closest(s).addClass(u)
        },
        _hidePopup: function() {
            this._popup.hide()
        },
        _updateOptions: function(t) {
            this.option("value", this._valueGetter(t.itemData)), setTimeout(n.proxy(this._hidePopup, this), v), this._setFieldText(this._displayGetter(t.itemData))
        },
        _handleFieldClick: function(n) {
            var t = n.component;
            t._renderContentIfNeed(), t._setListDataSource(), t._popup.show()
        },
        _getValueGetterExpr: function() {
            return this.option("valueExpr") || this._dataSource && this._dataSource._store._key || "this"
        },
        _compileValueGetter: function() {
            this._valueGetter = t.data.utils.compileGetter(this._getValueGetterExpr())
        },
        _compileDisplayGetter: function() {
            this._displayGetter = t.data.utils.compileGetter(this.option("displayExpr"))
        },
        _itemsToDataSource: function() {
            this._dataSource = new t.data.ArrayStore(this.option("items")).toDataSource({
                paginate: !1
            })
        },
        _createEventActions: function() {
            this._valueChangeAction = this._createActionByOption("valueChangeAction")
        },
        _optionChanged: function(t) {
            var i = this;
            this._checkExceptions();
            switch (t) {
                case "value":
                    this._calcSelectedItem(function() {
                        i._valueChangeAction({
                            selectedItem: i._selectedItem
                        }), i._compileValueGetter(), i._compileDisplayGetter(), i._refreshSelected(), i._setFieldText()
                    });
                    break;
                case "valueExpr":
                    this._compileValueGetter(), this._compileDisplayGetter(), this._refreshSelected(), this._setFieldText();
                    break;
                case "displayExpr":
                    this._compileDisplayGetter(), this._list ? this._list.option("itemRender", n.proxy(this._displayGetter, this)) : this._needSetItemRenderToList = !0, this._refreshSelected(), this._setFieldText();
                    break;
                case "displayValue":
                    break;
                case "items":
                case "dataSource":
                    t === "items" ? this._itemsToDataSource() : this._initDataSource(), this._setListDataSource(!0), this._dataSource && (this._dataSourceOriginalFilter = this._dataSource.filter()), this._compileValueGetter(), this._calcSelectedItem(function() {
                        i._setFieldText()
                    });
                    break;
                case "searchEnabled":
                    this._search.toggle(this.option("searchEnabled")), this._popup.content().toggleClass(o, this.option("searchEnabled"));
                    break;
                case "minFilterLength":
                    this._setListDataSource(), this._setFieldText(), this._searchChangedHandler();
                    break;
                case "placeholder":
                    this._setFieldText();
                    break;
                case "title":
                    this._popup.option("title", this.option("title"));
                    break;
                case "fullScreen":
                    this._popup.option("fullScreen", this.option("fullScreen"));
                    break;
                case "valueChangeAction":
                    this._createEventActions();
                    break;
                default:
                    this.callBase.apply(this, arguments)
            }
        },
        _setListDataSource: function(n) {
            if (this._list) {
                var t = this._search.data("dxTextBox").option("value").length >= this.option("minFilterLength"),
                    r = !!this._list.option("dataSource"),
                    u = t === r;
                (n || !u) && (this._list.option("dataSource", t ? this._dataSource : null), t || this._list.option("items", i))
            }
        },
        _handleDataSourceChanged: function() {
            var t = this;
            this._calcSelectedItem(function() {
                t._setFieldText()
            })
        },
        _clean: function() {
            this._popup && this._popup._element().remove(), this.callBase()
        },
        _dispose: function() {
            clearTimeout(this._searchTimer), this._dataSource && this._dataSource.filter(this._dataSourceOriginalFilter), n(window).off(this._eventHelper.eventName("popstate")), this.callBase()
        },
        _searchChangedHandler: function() {
            var t = this._search.data("dxTextBox").option("value"),
                i = t.length >= this.option("minFilterLength");
            (clearTimeout(this._searchTimer), this._setListDataSource(), i) && (this.option("searchTimeout") ? this._searchTimer = setTimeout(n.proxy(this._doSearch, this, t), this.option("searchTimeout")) : this._doSearch(t))
        },
        _doSearch: function(n) {
            this._dataSource && (arguments.length || (n = this.option("searchEnabled") ? this._search.data("dxTextBox").option("value") : ""), this._filterStore(n), this._list.update(!0))
        },
        _filterStore: function(n) {
            this._dataSource.reload({
                searchString: n,
                searchField: this.option("displayExpr")
            })
        },
        _getDisplayText: function() {
            return this.option("value") === i || !this._dataSource ? this.option("placeholder") : this._displayGetter(this._selectedItem) || this.option("placeholder")
        },
        _setFieldText: function(n) {
            arguments.length || (n = this._getDisplayText()), this._field.text(n), this.option("displayValue", n)
        },
        _calcSelectedItem: function(n) {
            var t = this,
                r = t.option("value");
            if (!t._dataSource || r === i) {
                t._selectedItem = i, n();
                return
            }
            if (r === t._valueGetter(t._selectedItem)) {
                n();
                return
            }
            t._dataSource.lookup({
                key: r,
                lookupExpression: t._getValueGetterExpr(),
                lookupGetter: t._valueGetter
            }).done(function(i) {
                t._selectedItem = i, n()
            })
        },
        _refreshSelected: function() {
            var t = this;
            t._list && n.each(this._list._element().find(s), function() {
                var i = n(this);
                t._setSelectedClass(i, i.data(a))
            })
        },
        _setSelectedClass: function(n, t) {
            var i = this._valueGetter(t) === this.option("value");
            n.toggleClass(u, i)
        }
    }).include(f.DataHelperMixin))
}(jQuery, DevExpress), function(n, t, i) {
    var r = t.ui,
        u = "dx-action-sheet",
        f = "dx-action-sheet-container",
        e = "dx-action-sheet-popup",
        o = "dx-action-sheet-cancel",
        s = "dx-action-sheet-item",
        h = ".dx-popup-title",
        c = "dxActionSheetItemData";
    r.registerComponent("dxActionSheet", r.CollectionContainerWidget.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                title: "",
                showTitle: !0,
                cancelText: "Cancel",
                noDataText: "",
                visible: !1
            })
        },
        _init: function() {
            this.callBase(), this._itemContainerElement = n("<div/>").addClass(f), this._element().addClass(u)
        },
        _clean: function() {
            this._popup && this._popup.content().empty(), this.callBase()
        },
        _render: function() {
            this._popup = this._renderPopup(), this._popup.content().append(this._itemContainerElement), this._cancel = this._renderCancel(), this._popupTitle = n(h, this._element()).toggle(this.option("showTitle")), this.callBase(), this._togglePopup(this.option("visible"))
        },
        _renderPopup: function() {
            var t = this._element();
            return n("<div/>").addClass(e).appendTo(t).dxPopup({
                title: this.option("title"),
                position: {
                    my: "bottom",
                    at: "bottom",
                    of: window
                },
                animation: {
                    show: {
                        type: "slide",
                        duration: 400,
                        from: {
                            top: n("body").height()
                        },
                        to: {
                            top: 0 - t.find(".dx-overlay-content").height()
                        }
                    },
                    hide: {
                        type: "slide",
                        duration: 400,
                        from: {
                            top: 0 - t.find(".dx-overlay-content").height()
                        },
                        to: {
                            top: n("body").height()
                        }
                    }
                },
                width: "100%",
                height: "auto"
            }).data("dxPopup")
        },
        _renderCancel: function() {
            return n("<div/>").addClass(o).appendTo(this._popup.content()).dxButton({
                text: this.option("cancelText"),
                clickAction: n.proxy(this.hide, this)
            }).data("dxButton")
        },
        _handleItemClick: function(t) {
            var i = n(t.target).closest(this._itemSelector()).data("dxButton");
            i.option("disabled") || this.hide(), this.callBase(t)
        },
        _itemRenderDefault: function(n, t, i) {
            i.dxButton(n)
        },
        _itemContainer: function() {
            return this._itemContainerElement
        },
        _itemClass: function() {
            return s
        },
        _itemDataKey: function() {
            return c
        },
        _toggleVisibility: function() {},
        _togglePopup: function(n) {
            var t = this;
            t._popup.toggle(n).done(function() {
                t._deferredAnimate && t._deferredAnimate.resolveWith(t)
            })
        },
        _optionChanged: function(n, t) {
            switch (n) {
                case "visible":
                    this._togglePopup(t);
                    break;
                case "title":
                    this._popup.option("title", t);
                    break;
                case "showTitle":
                    this._popupTitle.toggle(t);
                    break;
                case "cancelText":
                    this._cancel.option("text", t);
                    break;
                case "items":
                    this._attachClickEvent(), this._renderItems(), this._dataSource || this._renderEmptyMessage(), this._popup._refresh();
                    break;
                default:
                    this.callBase.apply(this, arguments)
            }
        },
        toggle: function(t) {
            return (t = t === i ? !this.option("visible") : t, t === this.option("visible")) ? n.Deferred().resolve().promise() : (this._deferredAnimate = n.Deferred(), this.option("visible", t), this._deferredAnimate.promise())
        },
        show: function() {
            return this.toggle(!0)
        },
        hide: function() {
            return this.toggle(!1)
        }
    }))
}(jQuery, DevExpress), function(n, t, i) {
    var a = t.ui,
        w = t.utils,
        u = {},
        r = {},
        v = t.support.winJS,
        s = "_googleScriptReady",
        b = "https://maps.google.com/maps/api/js?v=3.9&sensor=false&callback=" + s,
        o = "_bingScriptReady",
        k = "https://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0&s=1&onScriptLoad=" + o,
        d = "https://dev.virtualearth.net/REST/v1/Locations/",
        g = "https://maps.google.com/maps/api/staticmap?",
        nt = "ms-appx:///Bing.Maps.JavaScript/js/veapicore.js",
        tt = "ms-appx:///Bing.Maps.JavaScript/js/veapiModules.js",
        h = "AhuxC0dQ1DBTNo8L-H9ToVMQStmizZzBJdraTSgCzDSWPsA1Qd8uIvFSflzxdaLH",
        c = 5,
        y = .5,
        p = "#0000FF",
        f = function(n, t) {
            if (n === t) return !0;
            if (!(n instanceof Object) || !(t instanceof Object) || n.constructor !== t.constructor) return !1;
            for (var i in n)
                if (n.hasOwnProperty(i)) {
                    if (!t.hasOwnProperty(i)) return !1;
                    if (n[i] !== t[i] && (typeof n[i] != "object" || !f(n[i], t[i]))) return !1
                }
            for (i in t)
                if (t.hasOwnProperty(i) && !n.hasOwnProperty(i)) return !1;
            return !0
        },
        e, l;
    a.registerComponent("dxMap", a.Widget.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                location: {
                    lat: 0,
                    lng: 0
                },
                width: 300,
                height: 300,
                zoom: 1,
                mapType: "roadmap",
                provider: "google",
                markers: [],
                routes: [],
                key: "",
                controls: {
                    mapNavigation: !0,
                    mapType: !0
                }
            })
        },
        _init: function() {
            this.callBase(), w.windowResizeCallbacks.add(this._wrappedRenderMapHandle = n.proxy(this._renderMapHandle, this))
        },
        _clean: function() {
            var n = this._eventHelper;
            this.mapAdapter._clean(), this._element().removeClass("dx-map").off(n.eventName("start"), this._removeGestures).empty()
        },
        _dispose: function() {
            this.callBase(), w.windowResizeCallbacks.remove(this._wrappedRenderMapHandle)
        },
        _removeGestures: function(n) {
            n.button || !this.mapAdapter.removeGesture || t.designMode || n.stopPropagation()
        },
        _render: function() {
            var t, i;
            this.callBase(), this._element().addClass("dx-map"), this.option("width") && this._element().css("width", this.option("width")), this.option("height") && this._element().css("height", this.option("height")), this._renderMapContainer(), this._renderShield(), t = v && this.option("provider") === "google" ? "bing" : this.option("provider"), this.mapAdapter = new e[t](this._mapContainer, this._options), i = this._eventHelper;
            this._element().on(i.eventName("start"), n.proxy(this._removeGestures, this));
            this._initMap()
        },
        _initMap: function() {
            return this.mapAdapter._initMap(this)
        },
        _renderMapContainer: function() {
            this._mapContainer = n("<div />").addClass("dx-map-container").appendTo(this._element())
        },
        _renderShield: function() {
            t.designMode && n("<div />").addClass("dx-map-shield").appendTo(this._element())
        },
        _optionChanged: function(n, t, i) {
            switch (n) {
                case "markers":
                    this.mapAdapter._renderMarkers();
                    break;
                case "routes":
                    this.mapAdapter._renderRoutes();
                    break;
                default:
                    this.callBase(n, t, i)
            }
        },
        _renderMapHandle: function() {
            this.mapAdapter._renderMapHandle && this.mapAdapter._renderMapHandle()
        },
        _deleteOption: function(t, i) {
            n.isPlainObject(i) ? n.each(t, function(n) {
                (f(t, i) || f(this, i)) && t.splice(n, 1)
            }) : n.isNumeric(i) && t[i] && t.splice(i, 1)
        },
        _wrapToArray: function(t) {
            return n.isArray(t) ? t : [t]
        },
        addMarker: function() {
            var t = this,
                r = n.Deferred(),
                u = [],
                i = arguments[0],
                f = arguments[1];
            return i = t._wrapToArray(i), n.map(i, function(n) {
                u.push(t.mapAdapter.addMarker.call(t.mapAdapter, n, f).done(function() {
                    t._options.markers.push(n)
                }))
            }), n.when.apply(n, u).done(function() {
                r.resolveWith(t)
            }), r.promise()
        },
        removeMarker: function() {
            var t = this,
                i = arguments[0];
            i = t._wrapToArray(i), n.map(i, function(n) {
                t.mapAdapter.removeMarker.call(t.mapAdapter, n), t._deleteOption(t._options.markers, n)
            })
        },
        addRoute: function() {
            var t = this,
                r = n.Deferred(),
                u = [],
                i = arguments[0],
                f = arguments[1];
            return i = t._wrapToArray(i), n.map(i, function(n) {
                u.push(t.mapAdapter.addRoute.call(t.mapAdapter, n, f).done(function() {
                    t._options.routes.push(n)
                }))
            }), n.when.apply(n, u).done(function() {
                r.resolveWith(t)
            }), r.promise()
        },
        removeRoute: function() {
            var t = this,
                i = arguments[0];
            i = t._wrapToArray(i), n.map(i, function(n) {
                t.mapAdapter.removeRoute.call(t.mapAdapter, n), t._deleteOption(t._options.routes, n)
            })
        }
    })), e = a.dxMap.adapters = {}, l = t.Class.inherit({
        ctor: function(n, t) {
            this.rootElement = n, this._options = t, this.map = null, this._markers = [], this._routes = []
        },
        _getControlState: function(n, t) {
            return n instanceof Object ? typeof t == "boolean" ? t : !0 : n
        },
        _renderMarkers: function(t, i) {
            var r = this,
                u = r._options.markers;
            (t = t || u || [], i = i || r._markers || [], r.map) && (n.each(i, function() {
                r.removeMarker(this)
            }), r._markers = [], n.each(t, function() {
                r.addMarker(this)
            }))
        },
        _renderRoutes: function(t, i) {
            var r = this,
                u = r._options.routes;
            (t = t || u || [], i = i || r._routes || [], r.map) && (n.each(i, function() {
                r.removeRoute(this)
            }), r._routes = [], n.each(t, function() {
                r.addRoute(this)
            }))
        },
        _clean: function() {
            this._routes = [], this._markers = [], this.map = null
        }
    }), e.google = l.inherit({
        _getMapType: function(n) {
            var t = {
                hybrid: google.maps.MapTypeId.HYBRID,
                roadmap: google.maps.MapTypeId.ROADMAP,
                satellite: google.maps.MapTypeId.SATELLITE,
                terrain: google.maps.MapTypeId.TERRAIN
            };
            return t[n] || t.roadmap
        },
        _getMovementType: function(n) {
            var t = {
                driving: google.maps.TravelMode.DRIVING,
                walking: google.maps.TravelMode.WALKING
            };
            return t[n] || t.driving
        },
        _initMap: function(t) {
            return u.google || (window[s] = n.proxy(this._scriptReady, this), n.getScript(b + (this._options.key ? "&key=" + this._options.key : "")), u.google = new n.Deferred), this._widgetInstance = t, u.google.done(n.proxy(this._renderMap, this)), u.google
        },
        _scriptReady: function() {
            try {
                delete window[s]
            } catch (n) {
                window[s] = i
            }
            u.google.resolve()
        },
        _renderMap: function() {
            var t = this,
                r = t._resolveLocation(t._options.location),
                i = t._options.controls,
                u = {
                    zoom: t._options.zoom,
                    center: new google.maps.LatLng(0, 0),
                    mapTypeId: t._getMapType(t._options.mapType),
                    streetViewControl: !1,
                    panControl: t._getControlState(i, i.mapNavigation),
                    zoomControl: t._getControlState(i, i.mapNavigation),
                    mapTypeControl: t._getControlState(i, i.mapType)
                };
            t.map = new google.maps.Map(t.rootElement[0], u), t._bounds = new google.maps.LatLngBounds, t._renderRoutes(), t._renderMarkers(), n.when(r).done(function(n) {
                t.map.setCenter(n)
            })
        },
        _renderMapHandle: function() {
            "google" in window && google.maps.event.trigger(this.map, "resize")
        },
        _resolveLocation: function(t) {
            var i = n.Deferred(),
                u;
            if (typeof t == "string") {
                if (r.google || (r.google = {}), r.google[t]) return i.resolve(r.google[t]), i.promise();
                u = new google.maps.Geocoder, u.geocode({
                    address: t
                }, function(n, u) {
                    u === google.maps.GeocoderStatus.OK && (r.google[t] = n[0].geometry.location, i.resolve(r.google[t]))
                })
            } else n.isPlainObject(t) && t.lat && t.lng ? i.resolve(new google.maps.LatLng(t.lat, t.lng)) : n.isArray(t) && i.resolve(new google.maps.LatLng(t[0], t[1]));
            return i.promise()
        },
        _deleteElement: function(t, i) {
            n.isPlainObject(i) ? n.each(t, function(n) {
                if (f(this.options, i)) return this.instance.setMap(null), t.splice(n, 1), !1
            }) : n.isNumeric(i) && t[i] && (t[i].instance.setMap(null), t.splice(i, 1))
        },
        _addTooltip: function(n, t, i) {
            var f = this,
                e = google.maps,
                u = typeof n == "string" ? {
                    content: n
                } : n,
                r = new e.InfoWindow({
                    content: u.content
                });
            u.close && e.event.addListener(r, "closeclick", function() {
                u.close.call(f, r)
            }), u.opened ? r.open(f.map, t) : r.close(), !i || i.call(f, r)
        },
        addMarker: function(t, i) {
            var r = this.mapAdapter || this,
                u = google.maps,
                f = r._resolveLocation(t.location);
            return n.when(f).done(function(f) {
                var o, e, s;
                r._bounds.extend(f), e = new u.Marker({
                    position: f,
                    map: r.map
                }), t.tooltip && r._addTooltip(t.tooltip, e, function(n) {
                    o = n
                }), (t.clickAction || o) && (s = r._widgetInstance._createAction(t.clickAction || n.noop), u.event.addListener(e, "click", function(n) {
                    var t = s(n);
                    t !== !1 && o && o.open(r.map, e)
                })), r.map.setCenter(r._bounds.getCenter()), r.map.fitBounds(r._bounds), r._markers.push({
                    instance: e,
                    tooltip: o,
                    options: t
                }), i && i.call(r, e)
            })
        },
        removeMarker: function(n) {
            var t = this;
            t._deleteElement(t._markers, n)
        },
        addRoute: function(i, r) {
            var u = this.mapAdapter || this,
                f = google.maps,
                e = new f.DirectionsService,
                o = n.map(i.locations, function(n) {
                    return u._resolveLocation(n)
                });
            return n.when.apply(u, o).done(function() {
                var s = n.makeArray(arguments),
                    h = s.shift(),
                    l = s.pop(),
                    a = n.map(s, function(n) {
                        return {
                            location: n,
                            stopover: !0
                        }
                    }),
                    v = new t.Color(i.color || p).toHex(),
                    w = {
                        origin: h,
                        destination: l,
                        waypoints: a,
                        optimizeWaypoints: !0,
                        provideRouteAlternatives: !0,
                        travelMode: u._getMovementType(i.travelMode)
                    },
                    b = {
                        suppressMarkers: !0,
                        polylineOptions: {
                            strokeWeight: i.weight || c,
                            strokeOpacity: i.opacity || y,
                            strokeColor: v
                        }
                    },
                    o = new f.DirectionsRenderer(b);
                o.setMap(u.map), u._routes.push({
                    instance: o,
                    options: i
                }), e.route(w, function(n, t) {
                    t === f.DirectionsStatus.OK ? o.setDirections(n) : u.removeRoute(o), r && r.call(u, n)
                })
            })
        },
        removeRoute: function(n) {
            var t = this;
            this._deleteElement(t._routes, n)
        },
        removeGesture: !0
    }), e.bing = l.inherit({
        ctor: function(n, t) {
            this.callBase(n, t), h = this._options.key || h
        },
        _getMapType: function(n) {
            var t = {
                roadmap: Microsoft.Maps.MapTypeId.road,
                hybrid: Microsoft.Maps.MapTypeId.road,
                satellite: Microsoft.Maps.MapTypeId.birdseye,
                terrain: Microsoft.Maps.MapTypeId.birdseye
            };
            return t[n] || t.roadmap
        },
        _getMovementType: function(n) {
            var t = {
                driving: Microsoft.Maps.Directions.RouteMode.driving,
                walking: Microsoft.Maps.Directions.RouteMode.walking
            };
            return t[n] || t.driving
        },
        _initMap: function(t) {
            return u.bing || (u.bing = new n.Deferred, window[o] = n.proxy(this._scriptReady, this), v ? n.when(n.getScript(nt), n.getScript(tt)).done(function() {
                Microsoft.Maps.loadModule("Microsoft.Maps.Map", {
                    callback: window[o]
                })
            }) : n.getScript(k)), this._widgetInstance = t, u.bing.done(n.proxy(this._renderMap, this)), u.bing
        },
        _scriptReady: function() {
            try {
                delete window[o]
            } catch (n) {
                window[o] = i
            }
            u.bing.resolve()
        },
        _resolveLocation: function(t) {
            var f = this,
                i = n.Deferred(),
                u;
            if (r.bing || (r.bing = {}), typeof t == "string") {
                if (r.bing[t]) return i.resolve(r.bing[t]), i.promise();
                u = d + "?output=json&query=" + t + "&key=" + h, n.getJSON(v ? u : u + "&jsonp=?").done(function(n) {
                    var u = n.resourceSets[0].resources[0].geocodePoints[0].coordinates,
                        f = new Microsoft.Maps.Location(u[0], u[1]);
                    r.bing[t] = f, i.resolve(f)
                })
            } else n.isPlainObject(t) && t.lat && t.lng ? i.resolve(new Microsoft.Maps.Location(t.lat, t.lng)) : n.isArray(t) && i.resolve(new Microsoft.Maps.Location(t[0], t[1]));
            return i.promise()
        },
        _renderMap: function() {
            var t = this,
                r = t._resolveLocation(t._options.location),
                i = t._options.controls,
                u = {
                    zoom: t._options.zoom,
                    mapTypeId: t._getMapType(t._options.mapType),
                    credentials: h,
                    enableSearchLogo: !1,
                    showScalebar: !1,
                    showDashboard: t._getControlState(i, i.mapNavigation),
                    showMapTypeSelector: t._getControlState(i, i.mapType)
                };
            t.map = new Microsoft.Maps.Map(t.rootElement[0], u), n.when(r).done(function(n) {
                t.map.setView({
                    center: n
                })
            }), t._renderMarkers(), t._renderRoutes()
        },
        _deleteElement: function(t, i) {
            var r = this;
            n.isPlainObject(i) ? n.each(t, function(n) {
                if (f(r.options, i)) return r.map.entities.remove(r.instance), t.splice(n, 1), !1
            }) : n.isNumeric(i) && t[i] && (r.map.entities.remove(t[i].instance), t.splice(i, 1))
        },
        _addTooltip: function(n, t, i) {
            var u = this,
                f = typeof n == "string" ? {
                    content: n
                } : n,
                r = new Microsoft.Maps.Infobox(t.getLocation(), {
                    description: f.content,
                    showCloseButton: !0
                });
            r.setOptions({
                visible: !!f.opened
            }), u.map.entities.push(r), !i || i.call(u, r)
        },
        addMarker: function(t, i) {
            var r = this.mapAdapter || this,
                u, f = r._resolveLocation(t.location);
            return n.when(f).done(function(f) {
                var e = new Microsoft.Maps.Pushpin(f, null),
                    o;
                r.map.entities.push(e), t.tooltip && (r._addTooltip(t.tooltip, e, function(n) {
                    u = n
                }), e.setOptions({
                    infobox: u
                })), (t.clickAction || u) && (o = r._widgetInstance._createAction(t.clickAction || n.noop), Microsoft.Maps.Events.addHandler(e, "click", function(n) {
                    var t = o(n);
                    t !== !1 && u && u.setOptions({
                        location: e.getLocation(),
                        visible: !0
                    })
                })), r._markers.push({
                    instance: e,
                    tooltip: u,
                    options: t
                }), i && i.call(r, e)
            })
        },
        removeMarker: function(n) {
            var t = this;
            t._deleteElement(t._markers, n)
        },
        addRoute: function(i, r) {
            var u = this.mapAdapter || this,
                f = Microsoft.Maps.Directions,
                e;
            return f ? (e = n.map(i.locations, function(n) {
                return u._resolveLocation(n)
            }), n.when.apply(u, e).done(function() {
                var s = n.makeArray(arguments),
                    e = new f.DirectionsManager(u.map),
                    h = new t.Color(i.color || p).toHex(),
                    o = new Microsoft.Maps.Color.fromHex(h);
                o.a = (i.opacity || y) * 255, e.setRequestOptions({
                    routeMode: u._getMovementType(i.travelMode),
                    displayRouteSelector: !1,
                    routeDraggable: !1,
                    waypointPushpinOptions: {
                        visible: !1
                    },
                    drivingPolylineOptions: {
                        strokeColor: o,
                        strokeThickness: i.weight || c
                    },
                    walkingPolylineOptions: {
                        strokeColor: o,
                        strokeThickness: i.weight || c
                    }
                }), n.each(s, function() {
                    var n = new f.Waypoint({
                        location: this
                    });
                    e.addWaypoint(n)
                }), e.calculateDirections(), u._routes.push({
                    instance: e,
                    options: i
                }), r && r.call(u, e)
            })) : (Microsoft.Maps.loadModule("Microsoft.Maps.Directions", {
                callback: function() {
                    u.addRoute.call(u, i, r)
                }
            }), !1)
        },
        removeRoute: function(n) {
            var t = this;
            t._deleteElement(t._routes, n)
        },
        removeGesture: !0
    }), e.googleStatic = l.inherit({
        _getMapType: e.google._getMapType,
        _initMap: function() {
            var t = n.Deferred();
            return t.done(n.proxy(this._renderMap, this)), t.resolve(), t.promise()
        },
        _locationToString: function(t) {
            return n.isPlainObject(t) ? t.lat + "," + t.lng : t.toString().replace(/ /g, "%20")
        },
        _resolveLocation: function() {
            var i = n.Deferred();
            i.resolve().promise()
        },
        _renderMap: function() {
            var n = this,
                t = n.rootElement;
            n.map = t, n._renderMarkers(), n._renderRoutes(), n._updateMap()
        },
        _updateMap: function() {
            var i = this,
                r = i.rootElement,
                u = i._options,
                l = u.mapType,
                a = i._locationToString(u.location),
                s = u.width || r.width(),
                h = u.height || r.height(),
                v = u.zoom,
                w = i._markers,
                b = i._routes,
                k = s + "x" + h,
                e = "",
                f = "",
                o;
            s !== 0 && h !== 0 && (n.each(w || [], function(t, r) {
                e += "&markers=", e += n.isPlainObject(r) ? i._locationToString(r.location) : r
            }), n.each(b || [], function(r, u) {
                var e = new t.Color(u.color || p).toHex();
                f += "&path=", f += "color:" + (e + Math.round((u.opacity || y) * 255).toString(16)).replace("#", "0x") + "|", f += "weight:" + (u.weight || c) + "|", n.each(u.locations, function(n, t) {
                    f += i._locationToString(t) + (n < u.locations.length - 1 ? "|" : "")
                })
            }), o = g + "maptype=" + l + "&size=" + k + "&sensor=false" + e + f, o += "&center=" + a + "&zoom=" + v, i._options.key && (o += "&key=" + i._options.key), r.css("background", 'url("' + o + '") no-repeat 0 0'), this.width && r.css("width", s), this.height && r.css("height", h))
        },
        _deleteElement: function(t, i) {
            n.isPlainObject(i) ? n.each(t, function(n) {
                if (f(this, i)) return t.splice(n, 1), !1
            }) : n.isNumeric(i) && t[i] && t.splice(i, 1)
        },
        addMarker: function(t) {
            var i = this;
            return i._markers.push(t), i._updateMap(), n.Deferred().resolve().promise()
        },
        removeMarker: function(n) {
            var t = this;
            t._deleteElement(t._markers, n), t._updateMap()
        },
        addRoute: function(t) {
            var i = this;
            return i._routes.push(t), i._updateMap(), n.Deferred().resolve().promise()
        },
        removeRoute: function(n) {
            var t = this;
            t._deleteElement(t._routes, n), t._updateMap()
        },
        _clean: function() {
            this.callBase(), this.rootElement.css("background-image", "none")
        }
    })
}(jQuery, DevExpress), function(n, t, i) {
    var u = t.ui,
        f = t.utils,
        e = 40,
        o = 38,
        c = 13,
        l = 27,
        a = 39,
        s = 9,
        h = "dx-autocomplete",
        v = h + "-popup",
        r = "dx-autocomplete-selected",
        y = "." + r,
        p = ".dx-list",
        w = ".dx-editbox-input",
        b = ".dx-list-item",
        k = "dxListItemData",
        d = ["startswith", "contains", "endwith", "notcontains"];
    u.registerComponent("dxAutocomplete", u.ContainerWidget.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                value: "",
                items: [],
                dataSource: new DevExpress.data.ArrayStore,
                itemTemplate: "item",
                itemRender: null,
                minSearchLength: 1,
                searchTimeout: 0,
                placeholder: "",
                filterOperator: "contains",
                displayExpr: "this"
            })
        },
        _listElement: function() {
            return this._popup._element().find(p)
        },
        _listItemElement: function() {
            return this._popup._element().find(b)
        },
        _listSelectedItemElement: function() {
            return this._popup._element().find(y)
        },
        _inputElement: function() {
            return this._element().find(w)
        },
        _textboxElement: function() {
            return this._textbox._element()
        },
        _init: function() {
            this.callBase(), this._validateFilterOperator(), this._compileDisplayGetter()
        },
        _validateFilterOperator: function() {
            var t = this.option("filterOperator"),
                i = t.toLowerCase();
            if (!(n.inArray(i, d) > -1)) throw Error("Filter operator '" + t + "' is unavailable");
        },
        _compileDisplayGetter: function() {
            this._displayGetter = t.data.utils.compileGetter(this.option("displayExpr"))
        },
        _render: function() {
            this.callBase(), this._element().addClass(h), this._renderTextbox(), this._checkExceptions(), this._renderPopup(), this._renderList()
        },
        _renderTextbox: function() {
            this._textbox = n("<div />").dxTextBox({
                value: this.option("value"),
                placeholder: this.option("placeholder"),
                valueUpdateEvent: "keyup change",
                keyDownAction: n.proxy(this._handleTextboxKeyDown, this),
                keyUpAction: n.proxy(this._handleTextboxKeyUp, this),
                valueUpdateAction: n.proxy(this._updateValue, this)
            }).appendTo(this._element()).data("dxTextBox")
        },
        _handleTextboxKeyDown: function(t) {
            var i = this._listElement(),
                r = [s, o, e],
                u = t.jQueryEvent.which;
            i.is(":hidden") || n.inArray(u, r) > -1 && t.jQueryEvent.preventDefault()
        },
        _updateValue: function() {
            var n = this._inputElement();
            this.option("value", this._textbox.option("value")), n.prop("selectionStart", this._caretPosition), n.prop("selectionEnd", this._caretPosition)
        },
        _handleTextboxKeyUp: function(n) {
            var t = n.jQueryEvent.which;
            this._caretPosition = this._inputElement().prop("selectionStart");
            switch (t) {
                case e:
                    this._handleTextboxDownKey();
                    break;
                case o:
                    this._handleTextboxUpKey();
                    break;
                case c:
                    this._handleTextboxEnterKey();
                    break;
                case a:
                case s:
                    this._handleTextboxCompleteKeys();
                    break;
                case l:
                    this._handleTextboxEscKey();
                    break;
                default:
                    return
            }
        },
        _handleTextboxDownKey: function() {
            var n = this._listSelectedItemElement(),
                t;
            n.length ? (t = n.next(), t.addClass(r), n.removeClass(r)) : this._listItemElement().first().addClass(r)
        },
        _handleTextboxUpKey: function() {
            var n = this._listSelectedItemElement(),
                t, i = this._listElement();
            if (!i.is(":hidden")) {
                if (!n.length) {
                    this._listItemElement().last().addClass(r);
                    return
                }
                n.removeClass(r), t = n.prev(), t.length && t.addClass(r)
            }
        },
        _handleTextboxEnterKey: function() {
            var t = this._listSelectedItemElement(),
                n;
            if (!t.length) {
                this._popup.hide();
                return
            }
            n = this._selectedItemDataGetter(), this._caretPosition = n.length, this.option("value", n), this._popup.hide()
        },
        _handleTextboxCompleteKeys: function() {
            var i = this._listElement(),
                n, t;
            i.is(":hidden") || (t = this._selectedItemDataGetter(), n = t.length ? t : this._dataSource().items()[0], this._caretPosition = n.length, n = this._displayGetter(n), this.option("value", n), this._popup.hide())
        },
        _selectedItemDataGetter: function() {
            var n = this._listSelectedItemElement();
            return n.length ? this._displayGetter(n.data(k)) : []
        },
        _handleTextboxEscKey: function() {
            this._popup.hide()
        },
        _renderPopup: function() {
            var r = this._textboxElement(),
                u = r.width(),
                e = this._textbox._input(),
                i = 0;
            if (t.devices.current().win8 ? i = -2 : t.devices.current().platform === "desktop" && (i = -1), this._popup = n("<div/>").addClass(v).appendTo(this._element()).dxPopup({
                    shading: !1,
                    closeOnOutsideClick: !0,
                    showTitle: !1,
                    width: u,
                    height: "auto",
                    position: {
                        my: "left top",
                        at: "left bottom",
                        of: e,
                        offset: {
                            h: 0,
                            v: i
                        },
                        collision: "flip"
                    },
                    animation: {
                        show: {
                            type: "fade",
                            duration: 400,
                            from: 0,
                            to: 1
                        },
                        hide: {
                            type: "fade",
                            duration: 400,
                            from: 1,
                            to: 0
                        }
                    }
                }).data("dxPopup"), t.devices.current().ios) this._popup._element().on("touchstart", function(n) {
                n.stopPropagation()
            });
            this._autocompleteResizeCallback = n.proxy(this._calculatePopupWidth, this), f.windowResizeCallbacks.add(this._autocompleteResizeCallback)
        },
        _calculatePopupWidth: function() {
            var n = this._textboxElement(),
                t = n.width();
            this._popup.option("width", t)
        },
        _renderList: function() {
            this._list = n("<div />").appendTo(this._popup.content()).dxList({
                itemClickAction: n.proxy(this._handleListItemClick, this),
                itemTemplate: this.option("itemTemplate"),
                itemRender: this.option("itemRender"),
                showScrollbar: !1,
                scrollingEnabled: !1,
                noDataText: "",
                showNextButton: !1
            }).data("dxList"), this._list._templates = this._templates, this._setupDataSource()
        },
        _setupDataSource: function() {
            var n = this;
            this.option("items").length > 0 ? this._list.option("items", this.option("items")) : this._list.option("dataSource", this.option("dataSource")), this._list._initDataSource()
        },
        _handleListItemClick: function(n) {
            var t = this._displayGetter(n.itemData);
            this._caretPosition = t.length, this.option("value", t), this._popup.hide()
        },
        _dataSource: function() {
            return this._list._dataSource
        },
        _filterDataSource: function() {
            var n = this._textbox.option("value");
            this._reloadDataSource(n), this._clearSearchTimer()
        },
        _reloadDataSource: function(n, t) {
            var i = this;
            i._dataSource().reload({
                searchField: i.option("displayExpr"),
                searchString: n,
                searchMethod: t || i.option("filterOperator")
            }).done(function() {
                i._refreshVisibility()
            })
        },
        _refreshVisibility: function() {
            var i = this._textbox.option("value").length >= this.option("minSearchLength"),
                t = this._dataSource(),
                n = t && t.items(),
                r = n.length;
            i && r ? n.length === 1 && this._displayGetter(n[0]) === this.option("value") ? this._popup.hide() : this._displayGetter(n[0]).length < this.option("value").length ? this._popup.hide() : (this._popup._refresh(), this._popup.show()) : this._popup.hide()
        },
        _dispose: function() {
            this._clearSearchTimer(), f.windowResizeCallbacks.remove(this._autocompleteResizeCallback), this.callBase()
        },
        _optionChanged: function(n, t) {
            switch (n) {
                case "value":
                    this._checkExceptions(), this._textbox.option(n, t), this._applyFilter();
                    break;
                case "placeholder":
                    this._textbox.option(n, t);
                    break;
                case "items":
                case "dataSource":
                case "itemTemplate":
                case "itemRender":
                    this._list.option(n, t);
                    break;
                case "filterOperator":
                    this._validateFilterOperator();
                    break;
                case "displayExpr":
                    this._compileDisplayGetter();
                    break;
                case "minSearchLength":
                case "searchTimeout":
                    break;
                default:
                    this.callBase.apply(this, arguments)
            }
        },
        _applyFilter: function() {
            var t = this._textbox.option("value"),
                i = t.length >= this.option("minSearchLength");
            if (!i) {
                this._clearSearchTimer(), this._popup.hide();
                return
            }
            this.option("searchTimeout") > 0 ? this._searchTimer || (this._searchTimer = setTimeout(n.proxy(this._filterDataSource, this), this.option("searchTimeout"))) : this._filterDataSource()
        },
        _clearSearchTimer: function() {
            clearTimeout(this._searchTimer), delete this._searchTimer
        },
        _checkExceptions: function() {
            if (this.option("value") === i) throw Error("Value option should not be undefined");
        },
        _clean: function() {
            this.callBase(), this._element().empty()
        }
    }))
}(jQuery, DevExpress), function(n, t) {
    var r = t.ui,
        u = "dx-dropdownmenu",
        f = u + "-popup",
        e = "dx-dropdownmenu-list",
        o = "dx-dropdownmenu-button";
    r.registerComponent("dxDropDownMenu", r.ContainerWidget.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                items: [],
                itemClickAction: null,
                dataSource: null,
                itemTemplate: "item",
                itemRender: null,
                buttonText: "",
                buttonIcon: null,
                buttonIconSrc: null,
                buttonClickAction: null
            })
        },
        _render: function() {
            this._element().addClass(u), this._renderButton(), this._renderPopup(), this._renderList(), this.callBase()
        },
        _renderButton: function() {
            var t = this.option("buttonIconSrc"),
                n = this.option("buttonIcon");
            t || n || (n = "overflow"), this._button = this._element().addClass(o).dxButton({
                text: this.option("buttonText"),
                icon: n,
                iconSrc: t,
                clickAction: this.option("buttonClickAction")
            }).data("dxButton")
        },
        _renderClick: function() {
            this._element().off("." + this.NAME).on(this._eventHelper.eventName("click"), this._createAction(this._handleButtonClick))
        },
        _handleButtonClick: function(n) {
            n.component._popup.show()
        },
        _renderList: function() {
            this._list = this._popup.content().addClass(e).dxList({
                scrollingEnabled: !1,
                showScrollbar: !1,
                noDataText: "",
                itemRender: this.option("itemRender"),
                itemClickAction: this.option("itemClickAction")
            }).data("dxList"), this._list._templates = this._templates, this._list.option("dataSource", this.option("items")), this._attachListClick()
        },
        _toggleVisibility: function(n) {
            this.callBase(n), this._button.option("visible", n)
        },
        _attachListClick: function() {
            this._list._element().off("." + this.NAME).on(this._eventHelper.eventName("click"), this._createAction(this._handleListClick))
        },
        _handleListClick: function(n) {
            n.component._popup.hide()
        },
        _renderPopup: function() {
            this._popup = n("<div />").addClass(f).appendTo(this._element()).dxPopup({
                showTitle: !1,
                shading: !1,
                closeOnOutsideClick: !0,
                width: "auto",
                height: "auto",
                position: {
                    my: "right top",
                    at: "right bottom",
                    of: this._element(),
                    collision: "fit flip"
                },
                animation: {
                    show: {
                        type: "fade",
                        to: 1
                    },
                    hide: {
                        type: "fade",
                        to: 0
                    }
                }
            }).data("dxPopup")
        },
        _optionChanged: function(n, t) {
            /^button/.test(n) ? this._renderButton() : n === "dataSource" || n === "items" ? this._list.option("dataSource", t) : n === "itemRender" ? this._list.option("itemRender", t) : this.callBase.apply(this, arguments)
        }
    }))
}(jQuery, DevExpress), DevExpress.MOD_WIDGETS = !0);
DevExpress.MOD_FRAMEWORK || (function(n, t) {
    var r = function(n, t, i) {
            for (var u = [], r = 0, f = n.length; r < f; r++) i(n[r], t) || u.push(n[r]);
            return u.push.apply(u, t), u
        },
        u = function() {
            return function(t, i) {
                return r(t, i, function(t, i) {
                    return n.grep(i, function(n) {
                        return t.option("id") === n.option("id") && n.option("id") || t.option("behavior") === n.option("behavior") && t.option("behavior")
                    }).length
                })
            }
        };
    t.framework = {
        utils: {
            mergeCommands: u()
        }
    }
}(jQuery, DevExpress), function(n, t) {
    var i = t.Class;
    t.framework.Route = i.inherit({
        _trimSeparators: function(n) {
            return n.replace(/^[\/.]+|\/+$/g, "")
        },
        _escapeRe: function(n) {
            return n.replace(/\W/g, "\\$1")
        },
        _checkConstraint: function(n, t) {
            n = String(n), typeof t == "string" && (t = new RegExp(t));
            var i = t.exec(n);
            return !i || i[0] !== n ? !1 : !0
        },
        _ensureReady: function() {
            var t = this;
            if (this._patternRe) return !1;
            this._pattern = this._trimSeparators(this._pattern), this._patternRe = "", this._params = [], this._segments = [], this._separators = [], this._pattern.replace(/[^\/]+/g, function(n, i) {
                t._segments.push(n), i && t._separators.push(t._pattern.substr(i - 1, 1))
            }), n.each(this._segments, function(n) {
                var u = !0,
                    i = this,
                    r = n ? t._separators[n - 1] : "";
                i.charAt(0) === ":" ? (u = !1, i = i.substr(1), t._params.push(i), t._patternRe += "(?:" + r + "([^/]+))", i in t._defaults && (t._patternRe += "?")) : t._patternRe += r + t._escapeRe(i)
            }), this._patternRe = new RegExp("^" + this._patternRe + "$")
        },
        ctor: function(n, t, i) {
            this._pattern = n || "", this._defaults = t || {}, this._constraints = i || {}
        },
        parse: function(t) {
            var u = this,
                i, r;
            return (this._ensureReady(), i = this._patternRe.exec(t), !i) ? !1 : (r = n.extend({}, this._defaults), n.each(this._params, function(n) {
                var t = n + 1;
                i.length >= t && i[t] && (r[this] = u.parseSegment(i[t]))
            }), n.each(this._constraints, function(n) {
                if (!u._checkConstraint(r[n], u._constraints[n])) return r = !1, !1
            }), r)
        },
        format: function(t) {
            var r = this,
                f;
            this._ensureReady();
            var u = n.extend({}, this._defaults),
                e = 0,
                i = [],
                o = [],
                s = {};
            return (n.each(t, function(n, i) {
                t[n] = r.formatSegment(i), n in u || (s[n] = !0)
            }), n.each(this._segments, function(n, f) {
                if (i[n] = n ? r._separators[n - 1] : "", f.charAt(0) === ":") {
                    var h = f.substr(1);
                    if (!(h in t) && !(h in r._defaults) || h in r._constraints && !r._checkConstraint(t[h], r._constraints[h])) return i = null, !1;
                    h in t ? (t[h] !== undefined && (u[h] = t[h], i[n] += t[h], e = n), delete s[h]) : h in u && (i[n] += u[h], o.push(n))
                } else i[n] += f, e = n
            }), n.each(u, function(u, f) {
                if (!!f && n.inArray(":" + u, r._segments) === -1 && t[u] !== f) return i = null, !1
            }), !n.isEmptyObject(s)) ? !1 : (n.each(t, function() {
                if (!this in u) return i = null, !1
            }), i === null) ? !1 : (o.length && n.map(o, function(n) {
                n >= e && (i[n] = "")
            }), f = i.join(""), f = f.replace(/\/+$/, ""))
        },
        formatSegment: function(t) {
            return n.isArray(t) || n.isPlainObject(t) ? "json:" + encodeURIComponent(JSON.stringify(t)) : encodeURIComponent(t)
        },
        parseSegment: function(t) {
            if (t.substr(0, 5) === "json:") try {
                return n.parseJSON(decodeURIComponent(t.substr(5)))
            } catch (i) {}
            return decodeURIComponent(t)
        }
    }), t.framework.MvcRouter = t.Class.inherit({
        ctor: function() {
            this._registry = []
        },
        _trimSeparators: function(n) {
            return n.replace(/^[\/.]+|\/+$/g, "")
        },
        _createRoute: function(n, i, r) {
            return new t.framework.Route(n, i, r)
        },
        register: function(n, t, i) {
            this._registry.push(this._createRoute(n, t, i))
        },
        parse: function(t) {
            var i;
            return t = this._trimSeparators(t), n.each(this._registry, function() {
                var n = this.parse(t);
                if (n !== !1) return i = n, !1
            }), i ? i : !1
        },
        format: function(t) {
            var i;
            return (t = t || {}, n.each(this._registry, function() {
                var u = n.extend(!0, {}, t),
                    r = this.format(u);
                if (r !== !1) return i = r, !1
            }), typeof i == "string") ? i : !1
        }
    })
}(jQuery, DevExpress), function(n, t) {
    var i = t.ui;
    t.framework.dxCommand = i.Component.inherit({
        ctor: function(t, i) {
            n.isPlainObject(t) && (i = t, t = n("<div />")), this.beforeExecute = n.Callbacks(), this.afterExecute = n.Callbacks(), this.callBase(t, i)
        },
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                action: null,
                id: null,
                title: "",
                icon: "",
                iconSrc: "",
                location: "",
                visible: !0
            })
        },
        execute: function() {
            var t = this._options.disabled;
            if (n.isFunction(t) && (t = !!t.apply(this, arguments)), t) throw new Error("Cannot execute command: " + this._options.id);
            this.beforeExecute.fire(arguments), this._createActionByOption("action").apply(this, arguments), this.afterExecute.fire(arguments)
        },
        _render: function() {
            this.callBase(), this._element().addClass("dx-command")
        },
        _renderDisabledState: n.noop,
        _dispose: function() {
            this.callBase(), this.beforeExecute.empty(), this.afterExecute.empty()
        }
    }), i.registerComponent("dxCommand", t.framework.dxCommand)
}(jQuery, DevExpress), function(n, t) {
    var r = t.Class;
    t.framework.ViewCache = r.inherit({
        ctor: function() {
            this._cache = {}
        },
        setView: function(n, t) {
            this._cache[n] = t
        },
        getView: function(n) {
            return this._cache[n]
        },
        removeView: function(n) {
            var t = this._cache[n];
            return delete this._cache[n], t
        },
        clear: function() {
            this._cache = {}
        },
        hasView: function(n) {
            for (var t in this._cache)
                if (this._cache[t] === n) return !0;
            return !1
        }
    }), t.framework.NullViewCache = r.inherit({
        setView: n.noop,
        getView: n.noop,
        removeView: n.noop,
        clear: n.noop,
        hasView: n.noop
    })
}(jQuery, DevExpress), function(n, t) {
    var r = t.Class;
    t.framework.MemoryKeyValueStorage = r.inherit({
        ctor: function() {
            this.storage = {}
        },
        getItem: function(n) {
            return this.storage[n]
        },
        setItem: function(n, t) {
            this.storage[n] = t
        },
        removeItem: function(n) {
            delete this.storage[n]
        }
    }), t.framework.StateManager = r.inherit({
        ctor: function(n) {
            n = n || {}, this.storage = n.storage || new t.framework.MemoryKeyValueStorage, this.stateSources = n.stateSources || []
        },
        addStateSource: function(n) {
            this.stateSources.push(n)
        },
        removeStateSource: function(t) {
            var i = n.inArray(t, this.stateSources);
            i > -1 && (this.stateSources.splice(i, 1), t.removeState(this.storage))
        },
        saveState: function() {
            var t = this;
            n.each(this.stateSources, function(n, i) {
                i.saveState(t.storage)
            })
        },
        restoreState: function() {
            var t = this;
            n.each(this.stateSources, function(n, i) {
                i.restoreState(t.storage)
            })
        },
        clearState: function() {
            var t = this;
            n.each(this.stateSources, function(n, i) {
                i.removeState(t.storage)
            })
        }
    })
}(jQuery, DevExpress), function(n, t) {
    var u = t.Class,
        r = "__root__";
    t.framework.DefaultBrowserAdapter = u.inherit({
        ctor: function(t) {
            t = t || {}, this._window = t.window || window, this.popState = n.Callbacks();
            n(this._window).on("hashchange", n.proxy(this._onHashChange, this))
        },
        replaceState: function(n) {
            n = this._normalizeUri(n), this._window.history.replaceState(null, null, "#" + n)
        },
        pushState: function(n) {
            n = this._normalizeUri(n), this._window.history.pushState(null, null, "#" + n)
        },
        createRootPage: function() {
            this._window.history.replaceState(null, null, "#" + r)
        },
        _onHashChange: function() {
            this.popState.fire()
        },
        getWindowName: function() {
            return this._window.name
        },
        setWindowName: function(n) {
            this._window.name = n
        },
        back: function() {
            this._window.history.back()
        },
        getHash: function() {
            return this._normalizeUri(this._window.location.hash)
        },
        isRootPage: function() {
            return this.getHash() === r
        },
        _normalizeUri: function(n) {
            return (n || "").replace(/^#+/, "")
        }
    }), t.framework.OldBrowserAdapter = t.framework.DefaultBrowserAdapter.inherit({
        ctor: function() {
            this._innerEventCount = 0, this.callBase.apply(this, arguments)
        },
        replaceState: function(n) {
            n = this._normalizeUri(n), this.getHash() !== n && (this._skipNextEvent(), this.back(), this._skipNextEvent(), this._window.location.hash = n)
        },
        pushState: function(n) {
            n = this._normalizeUri(n), this.getHash() !== n && (this._skipNextEvent(), this._window.location.hash = n)
        },
        createRootPage: function() {
            this.pushState(r)
        },
        _onHashChange: function() {
            this._innerEventCount ? this._innerEventCount-- : this.popState.fire()
        },
        _skipNextEvent: function() {
            this._innerEventCount++
        }
    }), t.framework.HistorylessBrowserAdapter = t.framework.DefaultBrowserAdapter.inherit({
        ctor: function(t) {
            t = t || {}, this._window = t.window || window, this.popState = n.Callbacks();
            n(this._window).on("dxback", n.proxy(this._onHashChange, this));
            this._currentHash = this._window.location.hash
        },
        replaceState: function(n) {
            this._currentHash = this._normalizeUri(n)
        },
        pushState: function(n) {
            this._currentHash = this._normalizeUri(n)
        },
        createRootPage: function() {
            this.pushState(r)
        },
        _onHashChange: function() {
            this.back(), this.popState.fire()
        },
        getHash: function() {
            return this._normalizeUri(this._currentHash)
        },
        back: function() {
            this.replaceState(r)
        }
    })
}(jQuery, DevExpress), function(n, t) {
    var u = t.Class,
        r = "dxApplication";
    t.framework.BrowserNavigationDevice = u.inherit({
        ctor: function(t) {
            t = t || {}, this._browserAdapter = this._createBrowserAdapter(t), this.uriChanged = n.Callbacks(), this.backInitiated = n.Callbacks(), this._deferredNavigate = null, this._browserAdapter.popState.add(n.proxy(this._onPopState, this)), this._browserAdapter.getWindowName() !== r && this._prepareBrowserHistory(), this._browserAdapter.isRootPage() && this._browserAdapter.pushState("")
        },
        _createBrowserAdapter: function(n) {
            var i = n.window || window;
            return i === i.top ? i.history.replaceState && i.history.pushState ? new t.framework.DefaultBrowserAdapter(n) : new t.framework.OldBrowserAdapter(n) : new t.framework.HistorylessBrowserAdapter(n)
        },
        _prepareBrowserHistory: function() {
            var n = this.getUri();
            this._browserAdapter.setWindowName(r), this._browserAdapter.createRootPage(), this._browserAdapter.pushState(n)
        },
        getUri: function() {
            return this._browserAdapter.getHash()
        },
        setUri: function(n) {
            this._browserAdapter.isRootPage() ? this._browserAdapter.pushState(n) : this._browserAdapter.replaceState(n)
        },
        _onPopState: function() {
            var i = this,
                r = this.getUri();
            this._deferredNavigate && this._deferredNavigate.state() === "pending" ? this._browserAdapter.isRootPage() ? this._deferredNavigate.resolve() : this._browserAdapter.back() : this._browserAdapter.isRootPage() ? this.backInitiated.fire() : (this._deferredNavigate = n.Deferred().done(function() {
                i.uriChanged.fire(r)
            }), this._browserAdapter.back())
        },
        back: function() {
            this._browserAdapter.back()
        }
    })
}(jQuery, DevExpress), function(n, t, i) {
    var u = t.Class,
        r = {
            current: "current",
            blank: "blank",
            back: "back"
        },
        f = "__history";
    t.framework.NavigationStack = u.inherit({
        ctor: function(t) {
            t = t || {}, this.itemsRemoved = n.Callbacks(), this.clear()
        },
        currentItem: function() {
            return this.items[this.currentIndex]
        },
        back: function(n) {
            if (this.currentIndex--, this.currentIndex < 0) throw Error("Unable to go back");
            var t = this.currentItem();
            t.uri !== n && this._updateItem(this.currentIndex, n)
        },
        forward: function() {
            if (this.currentIndex++, this.currentIndex >= this.items.length) throw Error("Unable to go forward");
        },
        navigate: function(n, t) {
            var r, i;
            if (!(this.currentIndex < this.items.length) || !(this.currentIndex > -1) || this.items[this.currentIndex].uri !== n) {
                if (t && this.currentIndex > -1) this.currentIndex--;
                else if (this.currentIndex > 1 && this.items[this.currentIndex - 1].uri === n) {
                    this.back(n);
                    return
                }
                return this.currentIndex + 1 < this.items.length && this.items[this.currentIndex + 1].uri === n ? this.currentIndex++ : (i = this.items.splice(this.currentIndex + 1, this.items.length - this.currentIndex - 1), this.items.push({}), this.currentIndex++, this._updateItem(this.currentIndex, n), this._deleteItems(i)), this.currentItem()
            }
        },
        _updateItem: function(n, t) {
            var i = this.items[n];
            i.uri = t, i.key = this.items[0].uri + "_" + n + "_" + t
        },
        _deleteItems: function(n) {
            n && this.itemsRemoved.fire(n)
        },
        getPreviousItem: function() {
            return this.items.length > 1 ? this.items[this.currentIndex - 1] : i
        },
        canBack: function() {
            return this.currentIndex > 0
        },
        clear: function() {
            this._deleteItems(this.items), this.items = [], this.currentIndex = -1
        }
    }), t.framework.NavigationManager = u.inherit({
        ctor: function(r) {
            r = r || {};
            var u = this;
            u.navigationStacks = {}, u._keepPositionInStack = r.keepPositionInStack, u.currentStack = new t.framework.NavigationStack, u.currentUri = i, u.navigating = n.Callbacks(), u.navigated = n.Callbacks(), u.itemRemoved = n.Callbacks(), u._navigationDevice = r.navigationDevice || new t.framework.BrowserNavigationDevice, u._navigationDevice.uriChanged.add(n.proxy(u.navigate, u)), u._navigationDevice.backInitiated.add(n.proxy(u.back, u)), u._stateStorageKey = r.stateStorageKey || f
        },
        navigate: function(u, f) {
            var e = this,
                o;
            if (f = n.extend({
                    target: r.blank
                }, f || {}), u === i && (u = e._navigationDevice.getUri()), /^_back$/.test(u)) {
                e.back();
                return
            }
            o = {
                currentUri: e.currentUri,
                uri: u,
                options: f,
                cancel: !1,
                navigateWhen: []
            }, e.navigating.fire(o), o.cancel ? e._navigationDevice.setUri(e.currentUri) : (u = o.uri, e.currentUri !== u && n.when.apply(n, o.navigateWhen).done(function() {
                t.utils.executeAsync(function() {
                    var n = e.currentUri;
                    e.currentUri = u, e._updateHistory(u, f), e._navigationDevice.setUri(e.currentUri), e.navigated.fire({
                        uri: u,
                        previousUri: n,
                        options: f,
                        item: e.currentItem()
                    })
                })
            }))
        },
        _createNavigationStack: function() {
            var i = new t.framework.NavigationStack;
            return i.itemsRemoved.add(n.proxy(this._removeItems, this)), i
        },
        _updateHistory: function(n, t) {
            var f = t.root || !!this.navigationStacks[n] && t.target === r.blank,
                e, o, u;
            if ((f || !this.currentStack.items.length) && (this.navigationStacks[n] = this.navigationStacks[n] || this._createNavigationStack(), this.currentStack = this.navigationStacks[n]), f && this.currentStack.items.length) this._keepPositionInStack && t.root ? this.currentUri = this.currentItem().uri : (this.currentStack.currentIndex = 0, this.currentItem().uri !== n && this.currentStack.navigate(n, !0));
            else {
                e = this.currentStack.currentIndex, o = this.currentItem() || {};
                switch (t.target) {
                    case r.blank:
                        this.currentStack.navigate(n);
                        break;
                    case r.current:
                        this.currentStack.navigate(n, !0);
                        break;
                    case r.back:
                        this.currentStack.back(n);
                        break;
                    default:
                        throw Error("Unknown navigation target: '" + t.target + "'. Use the DevExpress.framework.NavigationManager.NAVIGATION_TARGETS enumerable values.");
                }
                t.direction === i && (u = this.currentStack.currentIndex - e, t.direction = u < 0 ? this.currentItem().backDirection || "backward" : u > 0 && this.currentStack.currentIndex > 0 ? "forward" : "none"), o.backDirection = t.direction === "forward" ? "backward" : "none"
            }
        },
        _removeItems: function(t) {
            var i = this;
            n.each(t, function(n, t) {
                i.itemRemoved.fire(t)
            })
        },
        back: function(n) {
            if (t.backButtonCallback.fire()) {
                this._navigationDevice.setUri(this.currentUri);
                return
            }
            var i = this.getPreviousItem();
            i ? this.navigate(i.uri, {
                target: r.back,
                item: i
            }) : n ? this.navigate(n) : this._navigationDevice.back()
        },
        getPreviousItem: function() {
            return this.currentStack.getPreviousItem()
        },
        currentItem: function() {
            return this.currentStack.currentItem()
        },
        currentIndex: function() {
            return this.currentStack.currentIndex
        },
        rootUri: function() {
            return this.currentStack.items.length ? this.currentStack.items[0].uri : this.currentUri
        },
        canBack: function() {
            return this.currentStack.canBack()
        },
        getItemByIndex: function(n) {
            return this.currentStack.items[n]
        },
        saveState: function(n) {
            if (this.currentStack.items.length) {
                var t = {
                        items: this.currentStack.items,
                        currentIndex: this.currentStack.currentIndex,
                        currentStackKey: this.currentStack.items[0].uri
                    },
                    i = JSON.stringify(t);
                n.setItem(this._stateStorageKey, i)
            } else this.removeState(n)
        },
        restoreState: function(n) {
            var r = n.getItem(this._stateStorageKey),
                t, i;
            if (r) try {
                if (t = JSON.parse(r), i = this._createNavigationStack(), !t.items[0].uri) throw Error("Error while application state restoring. State has been cleared. Refresh the page.");
                i.items = t.items, i.currentIndex = t.currentIndex, this.navigationStacks[i.items[0].uri] = i, this.currentStack = this.navigationStacks[t.currentStackKey], this._navigationDevice.setUri(this.currentItem().uri)
            } catch (u) {
                this.removeState(n);
                throw u;
            }
        },
        removeState: function(n) {
            n.removeItem(this._stateStorageKey)
        },
        clearHistory: function() {
            this.currentStack.clear()
        }
    }), t.framework.NavigationManager.NAVIGATION_TARGETS = r
}(jQuery, DevExpress), function(n, t, i) {
    t.framework.createActionExecutors = function(r) {
        return {
            routing: {
                execute: function(t) {
                    var u, f, i;
                    n.isPlainObject(t.action) && (u = t.action.backBehaviour, t.action.backBehaviour && delete t.action.backBehaviour, f = t.action, i = r.router.format(f), u ? r.back(i) : r.navigate(i), t.handled = !0)
                }
            },
            hash: {
                execute: function(u) {
                    var o;
                    if (typeof u.action == "string" && u.action.charAt(0) === "#") {
                        var f = u.action.substr(1),
                            s = u.args[0],
                            e = f,
                            h = function(n) {
                                var i = t.data.utils.compileGetter(n),
                                    r = u.args[0].model;
                                return i(r)
                            },
                            c = s.evaluate || h;
                        e = f.replace(/\{([^}]+)\}/g, function(r, u) {
                            u = n.trim(u), u.indexOf(",") > -1 && (u = n.map(u.split(","), n.trim));
                            var f = c(u);
                            return f = t.framework.Route.prototype.formatSegment(f), f !== i ? f : r
                        }), o = (u.component || {}).NAME === "dxCommand" ? u.component.option() : {}, r.navigate(e, o), u.handled = !0
                    }
                }
            }
        }
    }
}(jQuery, DevExpress), function(n, t) {
    var r = t.Class,
        u = "Back",
        i = t.framework;
    t.framework.Application = r.inherit({
        ctor: function(i) {
            i = i || {}, this.namespace = i.namespace || i.ns || window, this.components = [], this.router = i.router || new t.framework.MvcRouter, this.navigationManager = i.navigationManager || new t.framework.NavigationManager({
                keepPositionInStack: i.navigateToRootViewMode === "keepHistory"
            }), this.navigationManager.navigating.add(n.proxy(this._onNavigating, this)), this.navigationManager.navigated.add(n.proxy(this._onNavigated, this)), this.navigationManager.itemRemoved.add(n.proxy(this._onNavigationItemRemoved, this)), this.stateManager = i.stateManager || new t.framework.StateManager({
                storage: i.stateStorage || sessionStorage
            }), this.stateManager.addStateSource(this.navigationManager), this._viewCache = i.disableViewCache ? new t.framework.NullViewCache : i.viewCache || new t.framework.ViewCache, this.navigation = this._createNavigationCommands(i.navigation), this.beforeViewSetup = n.Callbacks(), this.afterViewSetup = n.Callbacks(), this.viewShowing = n.Callbacks(), this.viewShown = n.Callbacks(), this.viewDisposing = n.Callbacks(), this.viewDisposed = n.Callbacks(), this.navigating = n.Callbacks(), t.registerActionExecutor(t.framework.createActionExecutors(this)), t.overlayTargetContainer(".dx-viewport .dx-layout"), this.components.push(this.router), this.components.push(this.navigationManager)
        },
        _createNavigationCommands: function(t) {
            return t ? n.map(t, function(t) {
                var r;
                return r = t instanceof i.dxCommand ? t : new i.dxCommand(n.extend({
                    location: "navigation",
                    root: !0
                }, t))
            }) : []
        },
        _callComponentMethod: function(t, i) {
            var r = [];
            return n.each(this.components, function(u, f) {
                if (f[t] && n.isFunction(f[t])) {
                    var e = f[t](i);
                    e && e.done && r.push(e)
                }
            }), n.when.apply(n, r)
        },
        init: function() {
            return this._callComponentMethod("init")
        },
        _onNavigating: function(n) {
            var r = this,
                i = this.router.parse(n.uri),
                t;
            if (!i) throw new Error("Routing rule is not found for the '" + n.uri + "' url");
            t = this.router.format(i), n.uri !== t && t ? (n.cancel = !0, this.navigate(t, n.options)) : r._processEvent("navigating", n)
        },
        _onNavigated: function(n) {
            var t = this._acquireView(n.item);
            this._setCurrentView(t, n.options.direction)
        },
        _onViewRemoved: function(n) {
            var t = {
                viewInfo: n
            };
            this._processEvent("viewDisposing", t, t.viewInfo.model), this._disposeView(t.viewInfo), this._processEvent("viewDisposed", t, t.viewInfo.model)
        },
        _onNavigationItemRemoved: function(n) {
            var t = this._viewCache.removeView(n.key);
            t && this._onViewRemoved(t)
        },
        _onViewReleased: function(n) {
            this._viewCache.hasView(n) || this._onViewRemoved(n)
        },
        _disposeView: function() {},
        _acquireView: function(n) {
            var t = this._viewCache.getView(n.key);
            return t || (t = this._createView(n.uri), this._viewCache.setView(n.key, t)), t
        },
        _processEvent: function(n, t, i) {
            this._callComponentMethod(n, t), this[n] && this[n].fire && this[n].fire(t);
            var r = (i || {})[n];
            r && r.call(i, t)
        },
        _createView: function(n) {
            var i = this.router.parse(n),
                t = {
                    viewName: i.view,
                    uri: n
                };
            return this._processEvent("beforeViewSetup", {
                routeData: i,
                viewInfo: t
            }), t.model = t.model || this._createModel(i), this._processEvent("afterViewSetup", t), this.navigationManager.canBack() && this._appendBackCommand(t), t
        },
        _createModel: function(t) {
            var i = n.noop;
            return t.view in this.namespace && (i = this.namespace[t.view]), i.call(this.namespace, t) || {}
        },
        _appendBackCommand: function(n) {
            var i = n.model.commands = n.model.commands || [],
                r = [new t.framework.dxCommand({
                    id: "back",
                    title: u,
                    location: "back",
                    behavior: "back",
                    action: "#_back",
                    icon: "arrowleft",
                    type: "back"
                })],
                f = t.framework.utils.mergeCommands(r, i);
            i.length = 0, i.push.apply(i, f)
        },
        _setCurrentView: function(n, i) {
            var u = this,
                r = {
                    viewInfo: n,
                    direction: i
                };
            if (u._processEvent("viewShowing", r, n.model), !r.cancel) return t.data.utils.DataSourceLoadLock.locked() ? void 0 : (t.data.utils.DataSourceLoadLock.obtain(), u._setCurrentViewAsyncImpl(r.viewInfo, i).done(function() {
                t.data.utils.DataSourceLoadLock.release(), u._processEvent("viewShown", r, n.model)
            }))
        },
        _highlightCurrentNavigationCommand: function(t) {
            var r = this,
                i, u = t.uri,
                f = this.router.parse(t.uri),
                e = t.model.currentNavigationItemId;
            n.each(this.navigation, function(n, t) {
                if (t.option("id") === e) return i = t, !1
            }), i || n.each(this.navigation, function(n, t) {
                var e = t.option("action"),
                    o;
                if (typeof e == "string") {
                    if (e = e.replace(/^#+/, ""), e === u || e === r.navigationManager.rootUri()) return i = t, !1;
                    o = r.router.parse(e).view, o === f.view && (i = t)
                }
            }), n.each(this.navigation, function(n, t) {
                t.option("highlighted", t === i)
            })
        },
        _setCurrentViewAsyncImpl: t.abstract,
        navigate: function(t, i) {
            var r = this;
            n.isPlainObject(t) && (t = r.router.format(t)), r._inited ? r.navigationManager.navigate(t, i) : r.init().done(function() {
                r._inited = !0, r.restoreState(), r.navigate(t, i)
            })
        },
        canBack: function() {
            return this.navigationManager.canBack()
        },
        back: function() {
            this.navigationManager.back()
        },
        saveState: function() {
            this.stateManager.saveState()
        },
        restoreState: function() {
            this.stateManager.restoreState()
        },
        clearState: function() {
            this.stateManager.clearState()
        }
    })
}(jQuery, DevExpress), function(n, t) {
    t.framework.html = {
        layoutControllers: {}
    }
}(jQuery, DevExpress), function(n, t) {
    var i = t.framework.html.commandToDXWidgetAdapters = {
        addCommandBase: function(t, i, r, u, f) {
            var o = n.extend(u, i.option()),
                s = t.option("items"),
                e;
            s.push(o), e = function(r, u, e) {
                n.extend(o, i.option()), f(o, r, u, e), r !== "highlighted" && t.option("items", s)
            }, e(), i.optionChanged.add(e), t.disposing.add(function() {
                i.optionChanged.remove(e)
            })
        }
    };
    i.dxToolbar = {
        addCommand: function(t, f, o) {
            function y(n) {
                var t = {
                        text: u(f, o),
                        clickAction: function() {
                            f.execute()
                        },
                        disabled: f.option("disabled"),
                        icon: r(f, o, "icon"),
                        iconSrc: r(f, o, "iconSrc"),
                        type: e(f, o)
                    },
                    i = o.align || undefined;
                n.options = t, n.align = i
            }
            var s = t.data("dxToolbar"),
                v = o.menu || o.name === "menu",
                h, a, c, l;
            v ? (h = n.grep(s.option("items"), function(n) {
                return n.widget && n.widget === "dropDownMenu"
            })[0], h || (a = function(t, i, r) {
                n(r).text(t.command.option("title"))
            }, h = n.extend({
                widget: "dropDownMenu",
                options: {
                    items: [],
                    itemRender: a,
                    itemTemplate: o.itemTemplate,
                    itemClickAction: function(n) {
                        n.itemData.command.execute()
                    }
                }
            }, o), c = s.option("items"), c.push(h), s.option("items", c)), l = n.extend({
                command: f
            }, f.option()), h.options.items.push(l), f.optionChanged.add(function() {
                n.extend(l, f.option()), s._refresh()
            })) : i.addCommandBase(s, f, o, {
                widget: "button"
            }, y), s.option("visible", !0)
        }
    }, i.dxActionSheet = {
        addCommand: function(n, t, f) {
            var e = n.data("dxActionSheet"),
                o = {
                    command: t
                };
            i.addCommandBase(e, t, f, o, function(n) {
                n.text = u(t, f), n.icon = r(t, f, "icon"), n.iconSrc = r(t, f, "iconSrc")
            })
        }
    }, i.dxList = {
        addCommand: function(n, t, f) {
            var e = n.data("dxList");
            i.addCommandBase(e, t, f, {}, function(n) {
                n.title = u(t, f), n.clickAction = function() {
                    n.disabled || t.execute()
                }, n.icon = r(t, f, "icon"), n.iconSrc = r(t, f, "iconSrc")
            })
        }
    }, i.dxNavBar = {
        addCommand: function(n, t, f) {
            var e = n.data("dxNavBar"),
                s = {
                    command: t
                },
                o;
            e.option("itemClickAction", function(n) {
                n.itemData.command.execute()
            }), o = function() {
                for (var t = e.option("items"), n = 0, i = t.length; n < i; n++)
                    if (t[n].highlighted) {
                        e.option("selectedIndex", n);
                        break
                    }
            }, i.addCommandBase(e, t, f, s, function(n, i, e) {
                i === "highlighted" ? e && o() : (n.text = u(t, f), n.icon = r(t, f, "icon"), n.iconSrc = r(t, f, "iconSrc"), o())
            })
        }
    };
    var f = function(n, t, i) {
            var r = t.defaultCommandOptions ? t.defaultCommandOptions[i] : undefined;
            return n.option(i) || r
        },
        u = function(n, t) {
            var i = !!n.option("icon") || n.option("iconSrc"),
                r = f(n, t, "title");
            return t.showText || !i ? r : ""
        },
        r = function(n, t, i) {
            var r = !!n.option("title"),
                u = f(n, t, i);
            return t.showIcon || !r ? u : undefined
        },
        e = function(n, t) {
            return f(n, t, "type")
        }
}(jQuery, DevExpress), function(n, t) {
    var u = t.Class,
        r = DevExpress.ui;
    t.framework.dxCommandContainer = r.Component.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                locations: [],
                defaultOptions: {
                    showText: !0,
                    showIcon: !0
                }
            })
        },
        _render: function() {
            this.callBase(), this._element().addClass("dx-command-container")
        },
        arrangeCommands: function(t, i) {
            var r = this,
                u = [];
            n.each(r.option("locations"), function(i, f) {
                var e = n.grep(t, function(n) {
                    return n && n.option("location") === f.name && !f.processed
                });
                e.length > 0 && (u.push(n.extend({
                    commands: e
                }, r.option("defaultOptions"), f)), f.processed = !0)
            }), i(r._element(), u)
        }
    }), r.registerComponent("dxCommandContainer", t.framework.dxCommandContainer), t.framework.html.CommandManager = u.inherit({
        ctor: function(n) {
            n = n || {}, this.globalCommands = n.globalCommands || [], this.commandsToWidgetRegistry = [this._commandsToDXWidget]
        },
        _commandsToDXWidget: function(i, r) {
            var f = i.data("dxComponents"),
                o = t.framework.html.commandToDXWidgetAdapters,
                s, u, e;
            if (f)
                for (s in f)
                    if (u = f[s], u in o) return e = i.data(u), e.beginUpdate(), n.each(r, function(t, r) {
                        n.each(r.commands, function(n, t) {
                            o[u].addCommand(i, t, r)
                        })
                    }), e.endUpdate(), !0;
            return !1
        },
        _findCommands: function(t) {
            return n.map(t.children(".dx-command"), function(t) {
                return n(t).data("dxCommand")
            })
        },
        _findCommandContainers: function(t) {
            return n.map(t.find(".dx-command-container"), function(t) {
                return n(t).data("dxCommandContainer")
            })
        },
        _arrangeCommandsToContainers: function(t, i) {
            var r = this;
            n.each(i, function(i, u) {
                u.arrangeCommands(t, n.proxy(r._attachCommandsToContainer, r))
            })
        },
        _attachCommandsToContainer: function(t, i, r) {
            var u = !1;
            n.each(this.commandsToWidgetRegistry, function(n, f) {
                return u = f(t, i, r), !u
            }), u || this._defaultCommandsToContainer(t, i, r)
        },
        _defaultCommandsToContainer: function(t, i) {
            n.each(i, function(i, r) {
                n.each(r.commands, function(n, i) {
                    var r = i._element();
                    if (r) {
                        t.append(r);
                        r.on("click", function() {
                            i.execute()
                        })
                    }
                })
            })
        },
        layoutCommands: function(n, i) {
            i = i || [];
            var r = this._findCommands(n),
                u = t.framework.utils.mergeCommands(i, r),
                f = t.framework.utils.mergeCommands(this.globalCommands, u),
                e = this._findCommandContainers(n);
            this._arrangeCommandsToContainers(f, e)
        }
    })
}(jQuery, DevExpress), function(n, t) {
    var u = t.Class,
        r = "__hidden-bag",
        f = ".dx-transition:not(.dx-transition .dx-transition)",
        e = function(n) {
            return ".dx-transition-" + n
        };
    t.framework.html.DefaultLayoutController = u.inherit({
        ctor: function(n) {
            n && this.init(n)
        },
        init: function(t) {
            this.$viewPort = t.$viewPort, this.$hiddenBag = t.$hiddenBag || n(document.getElementById(r)), this._currentViewInfo = {}, this.viewReleased = n.Callbacks(), this._navigationManager = t.navigationManager
        },
        activate: function() {
            this._currentViewInfo = {}
        },
        deactivate: function() {},
        showView: function(n, t) {
            return this._showViewImpl(n, t)
        },
        _onRenderComplete: function() {},
        _showViewImpl: function(t, i) {
            var r = this,
                s = t.renderResult.$markup,
                u = n.Deferred(),
                o;
            return t.renderResult.renderComplete.add(function() {
                r._onRenderComplete(t)
            }), t.layoutName === r._currentViewInfo.layoutName ? (o = n.map(r.$viewPort.find(f), function(t) {
                var u = n(t),
                    f = r._disableTransitions ? "none" : u.data("dx-transition-type");
                return {
                    destination: u,
                    source: s.find(e(u.data("dx-transition-name"))),
                    type: f || "none",
                    direction: i || "none"
                }
            }), setTimeout(function() {
                r._executeTransitions(o).done(function() {
                    r._changeView(t), u.resolve()
                })
            })) : (r._changeView(t), u.resolve()), u.promise()
        },
        _releaseView: function(n) {
            this.viewReleased.fireWith(this, [n])
        },
        _changeView: function(n) {
            var t = n.renderResult.$markup;
            this._moveToHiddenBag(this.$viewPort.children()), this._releaseView(this._currentViewInfo), this._moveToViewPort(t), this._currentViewInfo = n
        },
        _executeTransitions: function(i) {
            var u = this,
                r = n.map(i, function(n) {
                    return n.type !== "none" ? t.framework.html.TransitionExecutor.create(u.$viewPort, n) : null
                }),
                f = n.map(r, function(n) {
                    return n.exec()
                });
            return n.when.apply(n, f).done(function() {
                n.each(r, function(n, t) {
                    t.finalize()
                })
            })
        },
        _executeTransition: function(n) {
            return transitionsExecutor.exec(n)
        },
        _patchIDs: function(n) {
            this._processIDs(n, function(n) {
                var t = n;
                return n.indexOf(r) === -1 && (t = r + "-" + n), t
            })
        },
        _unpatchIDs: function(n) {
            this._processIDs(n, function(n) {
                var t = n;
                return n.indexOf(r) === 0 && (t = n.substr(r.length + 1)), t
            })
        },
        _processIDs: function(t, i) {
            var r = t.find("[id]");
            n.each(r, function(t, r) {
                var u = n(r),
                    f = u.attr("id");
                u.attr("id", i(f))
            })
        },
        _moveToViewPort: function(n) {
            this._unpatchIDs(n), n.appendTo(this.$viewPort)
        },
        _moveToHiddenBag: function(n) {
            this._patchIDs(n), n.appendTo(this.$hiddenBag)
        }
    }), n(function() {
        t.framework.html.layoutControllers["default"] = new t.framework.html.DefaultLayoutController
    })
}(jQuery, DevExpress), function(n, t) {
    var r = t.Class;
    t.framework.html.KnockoutJSTemplateEngine = r.inherit({
        applyTemplate: function(t, i) {
            ko.applyBindings(i, n(t).get(0))
        }
    })
}(jQuery, DevExpress), function(n, t, i) {
    var o = function(n, t) {
            var i;
            for (i in n) switch (typeof n[i]) {
                case "object":
                    if (!o(n[i], t[i])) return !1;
                    break;
                default:
                    if (n[i] != t[i]) return !1
            }
            for (i in t)
                if (!n || typeof n[i] == "undefined") return !1;
            return !0
        },
        s = t.Class,
        r = t.ui,
        u = "dxView",
        f = "dxLayout",
        e;
    t.framework[u] = r.Component.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                name: null,
                title: null,
                layout: null
            })
        }
    }), r.registerComponent(u, t.framework.dxView), t.framework[f] = r.Component.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                name: null,
                controller: "default"
            })
        },
        _render: function() {
            this.callBase(), this._element().addClass("dx-layout")
        }
    }), r.registerComponent(f, t.framework.dxLayout), t.framework.dxViewPlaceholder = r.Component.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                viewName: null
            })
        },
        _render: function() {
            this.callBase(), this._element().addClass("dx-view-placeholder")
        }
    }), r.registerComponent("dxViewPlaceholder", t.framework.dxViewPlaceholder), e = function(n, t, i) {
        n.addClass("dx-transition").addClass("dx-transition-" + i), n.data("dx-transition-type", t), n.data("dx-transition-name", i)
    }, t.framework.dxTransition = r.Component.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                name: null,
                type: "slide"
            })
        },
        _render: function() {
            this.callBase(), e(this._element(), this.option("type"), this.option("name"))
        }
    }), r.registerComponent("dxTransition", t.framework.dxTransition), t.framework.dxContentPlaceholder = r.Component.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                name: null,
                transition: i
            })
        },
        _render: function() {
            this.callBase(), this._element().addClass("dx-content-placeholder").addClass("dx-content-placeholder-" + this.option("name")), this.option("transition") && e(this._element(), this.option("transition"), this.option("name"))
        }
    }), r.registerComponent("dxContentPlaceholder", t.framework.dxContentPlaceholder), t.framework.dxContent = r.Component.inherit({
        _defaultOptions: function() {
            return n.extend(this.callBase(), {
                targetPlaceholder: null
            })
        },
        _render: function() {
            this.callBase(), this._element().addClass("dx-content")
        }
    }), r.registerComponent("dxContent", t.framework.dxContent), t.framework.html.ViewEngine = s.inherit({
        ctor: function(t) {
            t = t || {}, this.$root = t.$root, this.device = t.device || {}, this.templateEngine = t.templateEngine, this.commandManager = t.commandManager, this.dataOptionsAttributeName = t.dataOptionsAttributeName || "data-options", this._defaultLayout = t.defaultLayout, this._templateMap = {}, this._pendingViewContainer = null, this.viewSelecting = n.Callbacks(), this.layoutSelecting = n.Callbacks(), this.modelFromViewDataExtended = n.Callbacks(), this.layoutApplying = n.Callbacks(), this.layoutApplied = n.Callbacks()
        },
        init: function() {
            return this._initDefaultLayout(), this._loadTemplates()
        },
        _initDefaultLayout: function() {
            this._$defaultLayout = n('<div class="layout" data-options="dxLayout : { name: \'default\', controller: \'default\' } ">                 <div class="content" data-options="dxContentPlaceholder : { name: \'content\' } " ><\/div>             <\/div>')
        },
        _getDefaultLayout: function() {
            var n = this._$defaultLayout.clone();
            return this._createComponents(n), n
        },
        _findTemplate: function(t, i) {
            var f = this,
                e, o = n.grep(this._templateMap[t] || [], function(n) {
                    return n.data(i)
                }),
                r, u;
            if (!o.length) throw new Error("Error 404: Template not found. role:  " + i + ", name: " + t);
            return r = -1, n.each(o, function(t, u) {
                var o = 0,
                    s = u.data(i).option();
                n.each(f.device, function(n) {
                    var t = s[n];
                    t === f.device[n] && o++
                }), o > r && (r = o, e = u)
            }), u = e.clone(!0, !0), this._createComponents(u), u
        },
        findViewTemplate: function(t) {
            var i = {
                viewName: t
            };
            return this.viewSelecting.fire(i), i.view ? n(i.view) : this._findTemplate(t, u)
        },
        findLayoutTemplate: function(t) {
            var i = {
                layoutName: t
            };
            return this.layoutSelecting.fire(i), i.layout ? n(i.layout) : this._findTemplate(t, f)
        },
        _extendModelFromViewData: function(n, i) {
            t.utils.extendFromObject(i, n.data(u).option()), this.modelFromViewDataExtended.fire({
                view: n,
                model: i
            })
        },
        _createComponents: function(t, i) {
            var r = this,
                u = [];
            return t.find("*").addBack().filter("[" + r.dataOptionsAttributeName + "]").each(function(t, f) {
                var o = n(f),
                    h = o.attr(r.dataOptionsAttributeName),
                    s, e;
                try {
                    s = new Function("return {" + h + "}")()
                } catch (c) {
                    throw new Error("Unable to parse options.\nMessage: " + c + ";\nOptions value: " + h);
                }
                for (e in s)(!i || n.inArray(e, i) > -1) && o[e] && (o[e](s[e]), u.push(o.data(e)))
            }), u
        },
        _loadTemplatesFromMarkup: function(t) {
            if (t.find("[data-dx-role]").length) throw Error("View templates should be updated according to the 13.1 changes. Go to http://dxpr.es/15ikrJA for more details.");
            var i = this,
                r = i._createComponents(t, [u, f]);
            n.each(r, function(t, r) {
                var u = r._element(),
                    h = r.NAME,
                    e = r.option(),
                    s = e.name,
                    f = i._templateMap[s] || [];
                n.each(f, function(n, t) {
                    var i = t.data(h);
                    if (i && o(e, i.option())) throw new Error("Several markup templates with the same parameters are found.\r\nDetails: " + u.attr("data-options"));
                }), f.push(u), i._templateMap[s] = f, u.detach()
            })
        },
        _applyLayout: function(t, i) {
            var r = {
                    $view: t,
                    $layout: i
                },
                u;
            return this.layoutApplying.fire(r), u = r.$markup ? n(r.$markup) : this._applyLayoutCore(t, i), this.layoutApplied.fire({
                $markup: u
            }), u
        },
        _applyLayoutCore: function(t, i) {
            t.children(".dx-content").length === 0 && this._wrapViewDefaultContent(t);
            var r = n().add(i).add(t),
                u = r.find(".dx-content");
            return n.each(u, function() {
                var t = n(this),
                    u = t.data("dxContent").option("targetPlaceholder"),
                    i = r.find(".dx-content-placeholder-" + u);
                i.empty(), i.append(t)
            }), t.children().hide().appendTo(i), i
        },
        _applyPartialViews: function(t) {
            var i = this;
            n.each(t.find(".dx-view-placeholder"), function() {
                var r = n(this),
                    f = r.data("dxViewPlaceholder").option("viewName"),
                    t = i._findTemplate(f, u);
                i._applyPartialViews(t), r.append(t), t.show()
            })
        },
        _ajaxImpl: function() {
            return n.ajax.apply(n, arguments)
        },
        _loadTemplates: function() {
            var f = this,
                r, u;
            return this._templateMap = {}, this._loadTemplatesFromMarkup(this.$root.children()), r = [], location.protocol.indexOf("wmapp") >= 0 && (u = location.protocol + "www/"), n("head").find("link[rel='dx-template']").each(function(e, o) {
                var s = n(o).attr("href"),
                    h = f._ajaxImpl({
                        url: (u || "") + s,
                        isLocal: u ? !0 : i,
                        success: function(n) {
                            f._loadTemplatesFromMarkup(t.utils.createMarkupFromString(n))
                        },
                        dataType: "html"
                    });
                r.push(h)
            }), n.when.apply(n, r)
        },
        afterViewSetup: function(n) {
            this._ensureViewTemplate(n), this._extendModelFormViewTemplate(n.$viewTemplate, n.model)
        },
        _extendModelFormViewTemplate: function(n, t) {
            this._extendModelFromViewData(n, t)
        },
        _ensureTemplates: function(n) {
            this._ensureViewTemplate(n), this._ensureLayoutTemplate(n)
        },
        _ensureViewTemplate: function(n) {
            return n.$viewTemplate = n.$viewTemplate || this.findViewTemplate(n.viewName)
        },
        _wrapViewDefaultContent: function(n) {
            n.wrapInner("<div><\/div>"), n.children().eq(0).dxContent({
                targetPlaceholder: "content"
            })
        },
        _ensureLayoutTemplate: function(n) {
            if (!n.$layoutTemplate) {
                var t = n.$viewTemplate,
                    i = t.data(u).option("layout") || this._defaultLayout,
                    r;
                n.layoutName = i, i ? r = this.findLayoutTemplate(i) : (r = this._getDefaultLayout(), this._wrapViewDefaultContent(t), this._createComponents(t)), n.$layoutTemplate = r
            }
        },
        renderBlankView: function(t, i) {
            this._ensureTemplates(t);
            var r = t.$layoutTemplate;
            r.appendTo(i), this._applyPartialViews(r), this.templateEngine.applyTemplate(r, t.model), this.commandManager.layoutCommands(r), t.renderResult = {
                $markup: r,
                layoutControllerName: r.data(f).option("controller"),
                renderComplete: n.Callbacks()
            }
        },
        renderCompleteView: function(n, t) {
            var r, i, u;
            n.renderResult.rendered || (n.renderResult.rendered = !0, r = n.model || {}, n.$layoutTemplate.remove(), delete n.$layoutTemplate, this._ensureLayoutTemplate(n), i = n.$layoutTemplate, i.appendTo(t), u = n.$viewTemplate, this._applyLayout(u, i), this._applyPartialViews(i), this.templateEngine.applyTemplate(i, r), this.commandManager.layoutCommands(i, r.commands), n.renderResult.$markup = i, n.renderResult.renderComplete.fire())
        }
    })
}(jQuery, DevExpress), function(n, t, i) {
    var f = t.framework,
        r = f.html,
        u = "dx-viewport",
        e = "__hidden-bag",
        o = "dx-hidden-bag";
    r.HtmlApplication = f.Application.inherit({
        ctor: function(i) {
            i = i || {}, this.callBase(i), this._initViewPort(i.viewPort), this.device = i.device || t.devices.current(), this._$root = n(i.rootNode || document.body), this._$viewPort = n(n("." + u)[0] || n("<div/>").addClass(u).appendTo(this._$root)), this._$hiddenBag = n(document.getElementById(e) || n("<div/>").attr("id", e).addClass(o).appendTo(this._$root)), this.viewEngine = i.viewEngine || new r.ViewEngine({
                $root: this._$root,
                device: this.device,
                defaultLayout: i.defaultLayout,
                templateEngine: i.templateEngine || new r.KnockoutJSTemplateEngine({
                    navigationManager: this.navigationManager
                }),
                commandManager: i.commandManager || new r.CommandManager({
                    globalCommands: this.navigation
                })
            }), this.components.push(this.viewEngine), this.blankViewRendered = n.Callbacks(), this.viewRendered = n.Callbacks(), this._initLayoutControllers(), this._$viewPort.addClass(this._getThemeClasses(t.devices.current())), this._$hiddenBag.addClass(this._$viewPort.attr("class").replace(u, ""))
        },
        _disposeView: function(n) {
            n.renderResult && (n.renderResult.$markup.remove(), delete n.renderResult), this.callBase(n)
        },
        viewPort: function() {
            return this._$viewPort
        },
        _initViewPort: function(i) {
            i = i || {}, t.devices.current().platform === "desktop" && (i = n.extend({
                disabled: !0
            }, i)), i.disabled || t.ui.initViewport(i)
        },
        _getThemeClasses: function(n) {
            var i = {
                    ios: "dx-theme-android dx-theme-android-typography",
                    android: "dx-theme-android dx-theme-android-typography",
                    desktop: "dx-theme-desktop dx-theme-desktop-typography",
                    win8: "dx-theme-win8 dx-theme-win8-typography",
                    win8phone: "dx-theme-win8 dx-theme-win8-typography"
                },
                t = i[n.platform];
            return n.platform === "win8" && n.phone && (t = t + " dx-theme-win8phone dx-theme-win8phone-typography"), t
        },
        _initLayoutControllers: function() {
            var t = this;
            n.each(r.layoutControllers, function(n, i) {
                i.init && i.init({
                    app: t,
                    $viewPort: t._$viewPort,
                    $hiddenBag: t._$hiddenBag,
                    navigationManager: t.navigationManager
                }), i.viewReleased.add(function(n) {
                    t._onViewReleased(n)
                })
            })
        },
        _afterCreateViewModel: function(n) {
            this.callBase(n), this.viewEngine.afterCreateViewModel && this.viewEngine.afterCreateViewModel(n)
        },
        _setCurrentViewAsyncImpl: function(i, r) {
            var u = this,
                f = n.Deferred();
            return t.enqueueAsync(function() {
                u._ensureBlankViewRendered(i), u._highlightCurrentNavigationCommand(i)
            }).done(function() {
                u._showRenderedView(i, r).done(function() {
                    t.enqueueAsync(function() {
                        u._ensureViewRendered(i), f.resolve()
                    })
                })
            }), f
        },
        _showRenderedView: function(u, f) {
            var o = this,
                h = u.renderResult.layoutControllerName || "empty",
                e = r.layoutControllers[h],
                s;
            if (e === i) throw Error("The '" + h + "' layout controller not found. But the view being shown supposes to use it. Make sure you have a corresponding *.js reference in your app.html");
            return s = new n.Deferred, t.enqueue(function() {
                return o._activeLayoutController !== e && (o._activeLayoutController && o._activeLayoutController.deactivate(), e.activate(), o._activeLayoutController = e), e.showView(u, f).done(function() {
                    s.resolve()
                })
            }), s.promise()
        },
        _ensureBlankViewRendered: function(n) {
            n.renderResult || (this.viewEngine.renderBlankView(n, this._$hiddenBag), this._processEvent("blankViewRendered", n, n.model))
        },
        _ensureViewRendered: function(n) {
            n.renderResult.rendered || (this.viewEngine.renderCompleteView(n, this._$viewPort), this._processEvent("viewRendered", n, n.model))
        }
    })
}(jQuery, DevExpress), function(n, t) {
    var i = 400,
        r = t.Class.inherit({
            ctor: function(n, t) {
                this.container = n, this.options = t
            },
            exec: function() {
                var t = this,
                    r = t.options,
                    f = r.source,
                    u = r.destination,
                    e = t._createWrapperProps(u),
                    i = t._wrapElementContent(f, e),
                    o = t._wrapElementContent(u, e),
                    s = t._getElementDomLocation(i);
                return i.insertAfter(o), this._finalize = function() {
                    t._restoreElementDomLocation(i, s), t._unwrapElement(u), t._unwrapElement(f)
                }, t._animate(n.extend({}, r, {
                    source: i,
                    destination: o
                }))
            },
            finalize: function() {
                if (!this._finalize) throw Error("The 'exec' method should be called before the 'finalize' one.");
                this._finalize()
            },
            _createWrapperProps: function(n) {
                return {
                    top: 0,
                    left: n.css("left"),
                    width: n.outerWidth(!0),
                    height: n.outerHeight(!0)
                }
            },
            _wrapElementContent: function(t, i) {
                var r = n("<div class='dx-transition-outer-wrapper'/>").css(i),
                    u;
                return t.wrapInner(r), r = t.children().eq(0), u = n("<div class='dx-transition-inner-wrapper'/>").css(i), r.wrapInner(u), r.children().eq(0)
            },
            _unwrapElement: function(n) {
                var t = n.children().eq(0),
                    i = t.children().eq(0);
                i.children().eq(0).unwrap().unwrap()
            },
            _getElementDomLocation: function(n) {
                return {
                    $parent: n.parent()
                }
            },
            _restoreElementDomLocation: function(n, t) {
                var i = t.$parent;
                i.append(n)
            },
            _animate: function() {
                return (new n.Deferred).resolve().promise()
            }
        }),
        u = r.inherit({
            _animate: function(r) {
                var o;
                if (r.direction === "none") return n.Deferred().resolve().promise();
                var s = r.source,
                    f = r.destination,
                    u = this.container.width(),
                    e = f.position().left;
                return f.parent().wrapInner(n("<div/>").css({
                    position: "absolute",
                    width: u * 2,
                    left: e
                })), this._$wrapper = f.parent(), r.direction === "backward" && (u = -u), s.css("left", u), o = t.fx.animate(this._$wrapper, {
                    type: "slide",
                    from: {
                        left: e
                    },
                    to: {
                        left: e - u
                    },
                    duration: i
                })
            },
            finalize: function() {
                this._$wrapper && this._$wrapper.children().unwrap(), this.callBase.apply(this, arguments)
            }
        }),
        f = r.inherit({
            _animate: function(r) {
                var s = r.source,
                    o = r.destination,
                    h = o.position().top,
                    u = o.position().left,
                    e = this.container.width(),
                    f;
                return r.direction === "backward" && (e = -e), f = [], r.direction === "forward" ? f.push(t.fx.animate(s, {
                    type: "slide",
                    from: {
                        top: h,
                        left: e + u
                    },
                    to: {
                        left: u
                    },
                    duration: i
                })) : (f.push(t.fx.animate(s, {
                    type: "slide",
                    from: {
                        left: u,
                        "z-index": 1
                    },
                    to: {
                        left: u
                    },
                    duration: i
                })), f.push(t.fx.animate(o, {
                    type: "slide",
                    from: {
                        "z-index": 2
                    },
                    to: {
                        left: u - e
                    },
                    duration: i
                }))), n.when.apply(n, f)
            }
        }),
        e = r.inherit({
            _animate: function(t) {
                var r = t.source,
                    f = t.destination,
                    u = new n.Deferred;
                return r.css({
                    opacity: 0
                }), f.animate({
                    opacity: 0
                }, i), r.animate({
                    opacity: 1
                }, i, function() {
                    u.resolve()
                }), u.promise()
            }
        });
    r.create = function(n, t) {
        switch (t.type) {
            case "slide":
                return new u(n, t);
            case "fade":
                return new e(n, t);
            case "overflow":
                return new f(n, t);
            default:
                throw Error('Unknown transition type "' + t.type + '"');
        }
    }, t.framework.html.TransitionExecutor = r
}(jQuery, DevExpress), DevExpress.MOD_FRAMEWORK = !0);