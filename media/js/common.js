/* Modernizr 2.6.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-opacity-rgba-generatedcontent-cssgradients-csstransforms-csstransforms3d-csstransitions-canvas-history-geolocation-touch-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-url_data_uri-load
 */
;
window.Modernizr = function (a, b, c) {
    function A(a) {
        j.cssText = a
    }

    function B(a, b) {
        return A(n.join(a + ";") + (b || ""))
    }

    function C(a, b) {
        return typeof a === b
    }

    function D(a, b) {
        return!!~("" + a).indexOf(b)
    }

    function E(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!D(e, "-") && j[e] !== c)return b == "pfx" ? e : !0
        }
        return!1
    }

    function F(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)return d === !1 ? a[e] : C(f, "function") ? f.bind(d || b) : f
        }
        return!1
    }

    function G(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" ");
        return C(b, "string") || C(b, "undefined") ? E(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), F(e, b, c))
    }

    var d = "2.6.1", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = {}, s = {}, t = {}, u = [], v = u.slice, w, x = function (a, c, d, e) {
        var f, i, j, k = b.createElement("div"), l = b.body, m = l ? l : b.createElement("body");
        if (parseInt(d, 10))while (d--)j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), k.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), k.id = h, (l ? k : m).innerHTML += f, m.appendChild(k), l || (m.style.background = "", g.appendChild(m)), i = c(k, a), l ? k.parentNode.removeChild(k) : m.parentNode.removeChild(m), !!i
    }, y = {}.hasOwnProperty, z;
    !C(y, "undefined") && !C(y.call, "undefined") ? z = function (a, b) {
        return y.call(a, b)
    } : z = function (a, b) {
        return b in a && C(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function")throw new TypeError;
        var d = v.call(arguments, 1), e = function () {
            if (this instanceof e) {
                var a = function () {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(v.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(v.call(arguments)))
        };
        return e
    }), r.canvas = function () {
        var a = b.createElement("canvas");
        return!!a.getContext && !!a.getContext("2d")
    }, r.touch = function () {
        var c;
        return"ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : x(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
            c = a.offsetTop === 9
        }), c
    }, r.geolocation = function () {
        return"geolocation"in navigator
    }, r.history = function () {
        return!!a.history && !!history.pushState
    }, r.rgba = function () {
        return A("background-color:rgba(150,255,150,.5)"), D(j.backgroundColor, "rgba")
    }, r.opacity = function () {
        return B("opacity:.55"), /^0.55$/.test(j.opacity)
    }, r.cssgradients = function () {
        var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);";
        return A((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), D(j.backgroundImage, "gradient")
    }, r.csstransforms = function () {
        return!!G("transform")
    }, r.csstransforms3d = function () {
        var a = !!G("perspective");
        return a && "webkitPerspective"in g.style && x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }), a
    }, r.csstransitions = function () {
        return G("transition")
    }, r.generatedcontent = function () {
        var a;
        return x(['#modernizr:after{content:"', l, '";visibility:hidden}'].join(""), function (b) {
            a = b.offsetHeight >= 1
        }), a
    };
    for (var H in r)z(r, H) && (w = H.toLowerCase(), e[w] = r[H](), u.push((e[w] ? "" : "no-") + w));
    return e.addTest = function (a, b) {
        if (typeof a == "object")for (var d in a)z(a, d) && e.addTest(d, a[d]); else {
            a = a.toLowerCase();
            if (e[a] !== c)return e;
            b = typeof b == "function" ? b() : b, f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, A(""), i = k = null, function (a, b) {
        function k(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function l() {
            var a = r.elements;
            return typeof a == "string" ? a.split(" ") : a
        }

        function m(a) {
            var b = i[a[g]];
            return b || (b = {}, h++, a[g] = h, i[h] = b), b
        }

        function n(a, c, f) {
            c || (c = b);
            if (j)return c.createElement(a);
            f || (f = m(c));
            var g;
            return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }

        function o(a, c) {
            a || (a = b);
            if (j)return a.createDocumentFragment();
            c = c || m(a);
            var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length;
            for (; e < g; e++)d.createElement(f[e]);
            return d
        }

        function p(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }

        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
        }

        var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j;
        (function () {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", f = "hidden"in a, j = a.childNodes.length == 1 || function () {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                f = !0, j = !0
            }
        })();
        var r = {elements:c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS:c.shivCSS !== !1, supportsUnknownElements:j, shivMethods:c.shivMethods !== !1, type:"default", shivDocument:q, createElement:n, createDocumentFragment:o};
        a.html5 = r, q(b)
    }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.testProp = function (a) {
        return E([a])
    }, e.testAllProps = G, e.testStyles = x, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + u.join(" ") : ""), e
}(this, this.document), function (a, b, c) {
    function d(a) {
        return"[object Function]" == o.call(a)
    }

    function e(a) {
        return"string" == typeof a
    }

    function f() {
    }

    function g(a) {
        return!a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function () {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function () {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }

        var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t:d, s:c, e:f, a:i, x:j};
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
        var a = B;
        return a.loader = {load:j, i:0}, a
    }

    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) {
        return"[object Array]" == o.call(a)
    }, x = [], y = {}, z = {timeout:function (a, b) {
        return b.length && (a.timeout = b[0]), a
    }}, A, B;
    B = function (a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {url:c, origUrl:c, prefixes:a}, e, f, g;
            for (f = 0; f < d; f++)g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)c = x[f](c);
            return c
        }

        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))c || (j = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    }), g(a, j, b, 0, h); else if (Object(a) === a)for (n in m = function () {
                        var b = 0, c;
                        for (c in a)a.hasOwnProperty(c) && b++;
                        return b
                    }(), a)a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    } : j[n] = function (a) {
                        return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l()
                        }
                    }(k[n])), g(a[n], j, b, n, h))
                } else!c && l()
            }

            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }

        var i, j, l = this.yepnope.loader;
        if (e(a))g(a, 0, l, 0); else if (w(a))for (i = 0; i < a.length; i++)j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l)
    }, B.addPrefix = function (a, b) {
        z[a] = b
    }, B.addFilter = function (a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function () {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d)e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, function () {
    var a = new Image;
    a.onerror = function () {
        Modernizr.addTest("datauri", function () {
            return!1
        })
    }, a.onload = function () {
        Modernizr.addTest("datauri", function () {
            return a.width == 1 && a.height == 1
        })
    }, a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
}();
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function () {
    log.history = log.history || [];   // store logs to an array for reference
    log.history.push(arguments);
    arguments.callee = arguments.callee.caller;
    if (this.console) console.log(Array.prototype.slice.call(arguments));
};
// make it safe to use console.log always
(function (b) {
    function c() {
    }

    for (var d = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), a; a = d.pop();)b[a] = b[a] || c
})(window.console = window.console || {});
/**
 * printf/sprintf
 * @version 2007.04.27
 * @author Ash Searle
 * @see http://perldoc.perl.org/functions/sprintf.html
 */
(function () {
    var r = /%%|%(\d+\$)?([-+#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
    String.prototype.sprintf = function () {
        function m(b, a, f, c) {
            a = b.length >= a ? "" : Array(1 + a - b.length >>> 0).join(f);
            return c ? b + a : a + b
        }

        function n(b, a, f, c, e) {
            var d = c - b.length;
            d > 0 && (b = f || !e ? m(b, c, " ", f) : b.slice(0, a.length) + m("", d, "0", !0) + b.slice(a.length));
            return b
        }

        function l(b, a, f, c, e, d, i) {
            b >>>= 0;
            f = f && b && {2:"0b", 8:"0", 16:"0x"}[a] || "";
            b = f + m(b.toString(a), d || 0, "0", !1);
            return n(b, f, c, e, i)
        }

        function q(b, a, f, c, e) {
            c != null && (b = b.slice(0, c));
            return n(b, "", a, f, e)
        }

        var j = arguments, o = 0;
        return this.replace(r, function (b, a, f, c, e, d, i) {
            if (b == "%%")return"%";
            for (var e = !1, g = "", h = !1, k = !1, p = 0; f && p < f.length; p++)switch (f.charAt(p)) {
                case " ":
                    g = " ";
                    break;
                case "+":
                    g = "+";
                    break;
                case "-":
                    e = !0;
                    break;
                case "0":
                    h = !0;
                    break;
                case "#":
                    k = !0
            }
            c = c ? c == "*" ? +j[o++] : c.charAt(0) == "*" ? +j[c.slice(1, -1)] : +c : 0;
            c < 0 && (c = -c, e = !0);
            if (!isFinite(c))throw Error("sprintf: (minimum-)width must be finite");
            d = d ? d == "*" ? +j[o++] : d.charAt(0) == "*" ? +j[d.slice(1, -1)] : +d : "fFeE".indexOf(i) > -1 ? 6 : i == "d" ? 0 : void 0;
            a = a ? j[a.slice(0, -1)] : j[o++];
            switch (i) {
                case "s":
                    return q(String(a), e, c, d, h);
                case "c":
                    return q(String.fromCharCode(+a), e, c, d, h);
                case "b":
                    return l(a, 2, k, e, c, d, h);
                case "o":
                    return l(a, 8, k, e, c, d, h);
                case "x":
                    return l(a, 16, k, e, c, d, h);
                case "X":
                    return l(a, 16, k, e, c, d, h).toUpperCase();
                case "u":
                    return l(a, 10, k, e, c, d, h);
                case "i":
                case "d":
                    return b = parseInt(+a), g = b < 0 ? "-" : g, a = g + m(String(Math.abs(b)), d, "0", !1), n(a, g, e, c, h);
                case "e":
                case "E":
                case "f":
                case "F":
                case "g":
                case "G":
                    return b = +a, g = b < 0 ? "-" : g, a = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(i.toLowerCase())], i = ["toString", "toUpperCase"]["eEfFgG".indexOf(i) % 2], a = g + Math.abs(b)[a](d), n(a, g, e, c, h)[i]();
                default:
                    return b
            }
        })
    }
})();
/*
 Application skeleton
 @version 1.1.3
 @author  Vladimir Kuznetsov
 @see     <a href="https://github.com/mistakster/app-skeleton">Application skeleton</a>
 */
(function (f, j) {
    function l(a) {
        return"undefined" === typeof a || null === a
    }

    function i(a) {
        return"[object Array]" === g.apply(a) ? a : [a]
    }

    function n(a, b) {
        for (var c in b)!l(b[c]) && l(a[c]) && (a[c] = b[c]);
        return a
    }

    var h = f[j] = f[j] || {}, o = Array.prototype.push, p = Array.prototype.unshift, g = Object.prototype.toString, m = function (a, b, c) {
        var d, e;
        if (a) {
            a = a.split(".");
            for (d = a[0] === j ? 1 : 0; d < a.length; d += 1)e = c[a[d]] || {}, c = c[a[d]] = d === a.length - 1 && b ? n(b, e) : e
        }
        return c
    }, q = {};
    h.namespace = function (a, b) {
        return m(a, b, f[j])
    };
    h.defaults = function (a, b, c) {
        if (b && "[object Object]" === g.apply(b))c = m(a, b, q); else {
            var a = m(a, {}, q), d;
            if (!l(b)) {
                d = ("" + b).split(".");
                for (b = 0; b < d.length; b += 1)if (a && "[object Object]" === g.apply(a) && a.hasOwnProperty(d[b]))a = a[d[b]]; else {
                    a = c;
                    break
                }
            }
            c = a
        }
        return c
    };
    var r = function (a) {
        var b = k[a], c = [];
        if (a && b && (b.path && !b.skip && c.push(a), 0 < b.requires.length))for (a = b.requires.length - 1; 0 <= a; a -= 1)p.apply(c, r(b.requires[a]));
        return c
    }, k = {};
    h.register = function (a, b) {
        var c, d, e;
        if ("[object String]" === g.apply(b))var f = b, b = function (a) {
            var b;
            if (a.path) {
                "[object String]" ===
                    g.apply(a.path) && (a.path = [a.path]);
                for (b = a.path.length - 1; 0 <= b; b--)a.path[b] = 0 === a.path[b].indexOf("!") ? a.path[b].substr(1) : a.path[b].replace(/(\.\w+)$/, "." + f + "$1")
            }
            return a
        };
        if (a) {
            a = i(a);
            for (c = a.length - 1; 0 <= c; c -= 1)d = a[c], d.name && (e = {path:d.path || "", requires:d.requires || [], skip:d.skip || !1}, k[d.name] = "[object Function]" === g.apply(b) ? b.call(e, e, d.name, c) || e : e)
        }
        return k
    };
    h.calculate = function (a, b) {
        var c, d = [], a = i(a);
        for (c = 0; c < a.length; c += 1)o.apply(d, r(a[c]));
        c = !b;
        var e, f, g = [], h = {};
        for (f = 0; f < d.length; f +=
            1)if ((e = d[f]) && !h[e])h[e] = !0, e = k[e], o.apply(g, i(e.path)), e.skip = e.skip || c;
        return g
    };
    var t = function (a, b) {
        return b ? n(b || {}, s) : s
    }, s = {queue:[], bootstraped:!1, loader:f.Modernizr && f.Modernizr.load || f.yepnope};
    h.bootstrap = function (a) {
        var b = t.apply(this, arguments);
        p.apply(b.queue, i(a));
        b.loader && (b.loader.call(f, b.queue), b.queue = [], b.bootstraped = !0)
    };
    h.load = function (a) {
        var b = t.apply(this, arguments);
        "[object Function]" === g.apply(a) && (a = {load:[], complete:a});
        b.bootstraped && b.loader ? b.loader.call(f, a) : Array.prototype.push.apply(b.queue,
            i(a))
    }
})(this, "App");
/**
 * json2.js
 * 2011-10-19
 */
var JSON;
JSON || (JSON = {});
(function () {
    function k(a) {
        return 10 > a ? "0" + a : a
    }

    function o(a) {
        p.lastIndex = 0;
        return p.test(a) ? '"' + a.replace(p, function (a) {
            var c = r[a];
            return"string" === typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function m(a, j) {
        var c, d, h, n, g = e, f, b = j[a];
        b && ("object" === typeof b && "function" === typeof b.toJSON) && (b = b.toJSON(a));
        "function" === typeof i && (b = i.call(j, a, b));
        switch (typeof b) {
            case "string":
                return o(b);
            case "number":
                return isFinite(b) ? String(b) : "null";
            case "boolean":
            case "null":
                return String(b);
            case "object":
                if (!b)return"null";
                e += l;
                f = [];
                if ("[object Array]" === Object.prototype.toString.apply(b)) {
                    n = b.length;
                    for (c = 0; c < n; c += 1)f[c] = m(c, b) || "null";
                    h = 0 === f.length ? "[]" : e ? "[\n" + e + f.join(",\n" + e) + "\n" + g + "]" : "[" + f.join(",") + "]";
                    e = g;
                    return h
                }
                if (i && "object" === typeof i) {
                    n = i.length;
                    for (c = 0; c < n; c += 1)"string" === typeof i[c] && (d = i[c], (h = m(d, b)) && f.push(o(d) + (e ? ": " : ":") + h))
                } else for (d in b)Object.prototype.hasOwnProperty.call(b, d) && (h = m(d, b)) && f.push(o(d) + (e ? ": " : ":") + h);
                h = 0 === f.length ? "{}" : e ? "{\n" + e + f.join(",\n" + e) + "\n" + g + "}" : "{" + f.join(",") +
                    "}";
                e = g;
                return h
        }
    }

    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + k(this.getUTCMonth() + 1) + "-" + k(this.getUTCDate()) + "T" + k(this.getUTCHours()) + ":" + k(this.getUTCMinutes()) + ":" + k(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf()
    });
    var q = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        p = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, e, l, r = {"\b":"\\b", "\t":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", '"':'\\"', "\\":"\\\\"}, i;
    "function" !== typeof JSON.stringify && (JSON.stringify = function (a, j, c) {
        var d;
        l = e = "";
        if (typeof c === "number")for (d = 0; d < c; d = d + 1)l = l + " "; else typeof c === "string" && (l = c);
        if ((i = j) && typeof j !== "function" && (typeof j !== "object" || typeof j.length !== "number"))throw Error("JSON.stringify");
        return m("", {"":a})
    });
    "function" !== typeof JSON.parse && (JSON.parse = function (a, e) {
        function c(a, d) {
            var g, f, b = a[d];
            if (b && typeof b === "object")for (g in b)if (Object.prototype.hasOwnProperty.call(b, g)) {
                f = c(b, g);
                f !== void 0 ? b[g] = f : delete b[g]
            }
            return e.call(a, d, b)
        }

        var d, a = String(a);
        q.lastIndex = 0;
        q.test(a) && (a = a.replace(q, function (a) {
            return"\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
            d = eval("(" + a + ")");
            return typeof e === "function" ? c({"":d}, "") : d
        }
        throw new SyntaxError("JSON.parse");
    })
})();
// Sugared DOM
var el = function () {
    var j = document, k = Object.prototype.toString, o = {"class":"className", className:"className", defaultValue:"defaultValue", "for":"htmlFor", html:"innerHTML", text:"textContent", value:"value"}, p = {checked:1, defaultChecked:1, disabled:1, multiple:1, selected:1}, l = function (d, b) {
        var f, c, a;
        f = 0;
        for (c = b.length; f < c; f += 1)if (a = b[f])"[object Array]" === k.apply(a) ? l(d, a) : ("string" === typeof a && (a = j.createTextNode(a)), d.appendChild(a))
    }, m = /#|\./;
    return function (d, b, f) {
        "[object Array]" === k.apply(b) && (f = b, b = null);
        var c, a, e, g, n, h, i;
        if (m.test(d)) {
            c = d;
            a = c.split(m);
            d = a[0];
            b || (b = {});
            h = 0;
            g = 1;
            for (n = a.length; g < n; g++)e = a[g], h = c.indexOf(e, h + 1), "#" === c.charAt(h - 1) ? b.id = e : b.className = b.className ? b.className + " " + e : e
        }
        d = j.createElement(d);
        if (b)for (i in b) {
            c = d;
            a = i;
            e = b[i];
            if ("style" === a)throw Error("Incompatible attribute 'style'");
            (g = o[a]) ? c[g] = null == e ? "" : "" + e : p[a] ? c[a] = !!e : null == e ? c.removeAttribute(a) : c.setAttribute(a, "" + e)
        }
        f && l(d, f);
        return d
    }
}();
