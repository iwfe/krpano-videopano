/*
	krpano Embedding Script
	krpano 1.19-pr3 (build 2015-08-04)
*/
function createPanoViewer(e) {
    function at(e) {
        return ("" + e).toLowerCase()
    }
    function ft(e, t) {
        return e[d](t) >= 0
    }
    function lt() {
        var t, r, i, s, o, u, a, f = n.location;
        f = f.search || f.hash;
        if (f) {
            t = f[U](1)[I]("&");
            for (r = 0; r < t[H]; r++) i = t[r],
            s = i[d]("="),
            s == -1 && (s = i[H]),
            o = i[U](0, s),
            u = at(o),
            a = i[U](s + 1),
            u == O ? e[O] = a: u == "flash" ? e.flash = a: u == g ? e[g] = a: u == E ? e[E] = a: u == x ? e[x] = a: u[D](0, 9) == "initvars." ? (e[_] || (e[_] = {}), e[_][o[D](9)] = a) : e.addVariable(o, a)
        }
    }
    function ct(e) {
        return e[j] = lt,
        e
    }
    function ht() {
        function x() {
            var e, n, i, s, o, u, a;
            if (t[st]) {
                e = t[st]["Shockwave Flash"];
                if (typeof e == "object") {
                    n = e.description;
                    if (n) {
                        i = v,
                        t[R] && (s = t[R]["application/x-shockwave-flash"], s && (s.enabledPlugin || (i = p)));
                        if (i) {
                            o = n[I](" ");
                            for (u = 0; u < o[H]; ++u) {
                                a = parseFloat(o[u]);
                                if (isNaN(a)) continue;
                                return a
                            }
                        }
                    }
                }
            }
            if (r[et]) try {
                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (e) {
                    n = e.GetVariable("$version");
                    if (n) return parseFloat(n[I](" ")[1][I](",").join("."))
                }
            } catch(f) {}
            return 0
        }
        function T() {
            var e, t, i = p,
            s = n[k]("div");
            for (e = 0; e < 5; e++) if (typeof s.style[["p", "msP", "MozP", "WebkitP", "OP"][e] + "erspective"] != V) {
                i = v,
                e == 3 && r.matchMedia && (t = r.matchMedia("(-webkit-transform-3d)"), t && (i = t.matches == v));
                break
            }
            return i
        }
        function N() {
            var e, t, r = {
                failIfMajorPerformanceCaveat: v
            };
            try {
                e = n[k]("canvas");
                for (t = 0; t < 4; t++) if (e.getContext(["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"][t], r)) return v
            } catch(i) {}
            return p
        }
        var l, c, h, m, g, y, b, w, E, S;
        l = p,
        c = p,
        h = p;
        if (e.isDevice("iphone|ipad|ipod") && i[d]("opera mini") < 0) a = f = v;
        else {
            u = x(),
            u >= 10.1 && (o = v),
            l = T(),
            c = N(),
            m = at(t.platform),
            g = 0,
            y = 0,
            b = 0,
            w = i[d]("firefox/"),
            w < 0 && (w = i[d]("gecko/")),
            w >= 0 && (g = parseInt(i[D](1 + i[d]("/", w)), 10)),
            h = !!r[tt],
            w = i[d](tt),
            w > 0 && (b = parseInt(i[D](w + 7), 10), h = v),
            w = i[d](rt),
            w > 0 && (y = parseInt(i[D](w + 8), 10), g >= 18 && (y = 4)),
            l && (y > 0 && y < 4 && (l = p), g > 3 && g < 18 && y > 1 && (c = l = p), c || (m[d](nt) < 0 && g > 3 && y < 1 && (l = p), b > 9 && b < 20 && (l = p)));
            if (l || c) {
                a = v,
                E = i[d]("blackberry") >= 0 || i[d]("rim tablet") >= 0 || i[d]("bb10") >= 0,
                S = (t.msMaxTouchPoints | 0) > 1;
                if (y >= 4 || E || S) f = v
            }
        }
        s = 1 | l << 1 | c << 2 | h << 3
    }
    function pt(e) {
        function x(e) {
            function a() {
                r[m] ? (r[m]("DOMMouseScroll", c, p), r[m]("mousewheel", c, p), n[m]("mousedown", f, p), n[m]("mouseup", l, p)) : (r.opera ? r.attachEvent(B, c) : r[B] = n[B] = c, n.onmousedown = f, n.onmouseup = l)
            }
            function f(e) {
                e || (e = r.event, e[b] = e[Q]),
                u = e ? e[b] : S
            }
            function l(e) {
                var t, i, s, a, f, l, c, h;
                e || (e = r.event, e[b] = e[Q]),
                t = 0,
                i = o[H];
                for (t = 0; t < i; t++) {
                    s = o[t];
                    if (s) {
                        a = n[s.id];
                        if (a && s.needfix) {
                            f = a.getBoundingClientRect(),
                            l = a == e[b],
                            c = a == u,
                            h = e.clientX >= f.left && e.clientX < f.right && e.clientY >= f.top && e.clientY < f.bottom;
                            if ((l || c) && h == p) try {
                                a[z] && a[z](0, "mouseUp")
                            } catch(d) {}
                        }
                    }
                }
                return v
            }
            function c(t) {
                var i, u, a, f, l, c;
                t || (t = r.event, t[b] = t[Q]),
                i = 0,
                u = p,
                t.wheelDelta ? (i = t.wheelDelta / 120, r.opera && s && (i /= 4 / 3)) : t.detail && (i = -t.detail, s == p && (i /= 3));
                if (i) {
                    a = 0,
                    f = o[H];
                    for (a = 0; a < f; a++) {
                        l = o[a];
                        if (l) {
                            c = n[l.id];
                            if (c && c == t[b]) {
                                try {
                                    c.jswheel ? c.jswheel(i) : c[y] ? c[y](i) : c[A] && (c[A](), c[y] && c[y](i))
                                } catch(h) {}
                                u = v;
                                break
                            }
                        }
                    }
                }
                e[G] == p && (u = p);
                if (u) return t[it] && t[it](),
                t[ot] && t[ot](),
                t.cancelBubble = v,
                t.cancel = v,
                n[m] || (t.returnValue = p),
                p
            }
            var i, s = at(t.appVersion)[d](nt) >= 0,
            o = r._krpMW,
            u = S;
            o || (o = r._krpMW = new Array, a()),
            i = e[g],
            o.push({
                id: e.id,
                needfix: s || !!r[tt] || i == "opaque" || i == "transparent"
            })
        }
        var i, s, o, u, a, f = encodeURIComponent,
        l = "",
        c = e[Y],
        h = e[P],
        E = e.id;
        for (;;) {
            s = n[N](E);
            if (!s) break;
            E += String.fromCharCode(48 + Math.floor(9 * Math.random())),
            e.id = E
        }
        e[g] && (h[g] = e[g]),
        e[C] && (h[C] = e[C]),
        e[W] !== undefined && (c[W] = e[W]),
        e[g] = at(h[g]),
        h.allowfullscreen = "true",
        h.allowscriptaccess = F,
        i = "browser.",
        l = i + "useragent=" + f(t.userAgent) + "&" + i + "location=" + f(r.location.href);
        for (i in c) l += "&" + f(i) + "=" + f(c[i]);
        i = _,
        c = e[i];
        if (c) {
            l += "&" + i + "=";
            for (i in c) l += "%26" + f(escape(i)) + "=" + f(escape(c[i]))
        }
        h.flashvars = l,
        e[L] && (h.base = e[L]),
        o = "",
        u = ' id="' + E + '" width="' + e.width + '" height="' + e.height + '" style="outline:none;" ',
        a = "_krpcb_" + E,
        !e[q] || (r[a] = function() {
            try {
                delete r[a]
            } catch(t) {
                r[a] = S
            }
            e[q](n[N](E))
        });
        if (t[st] && t[R] && !r[et]) {
            o = '<embed name="' + E + '"' + u + 'type="application/x-shockwave-flash" src="' + e.swf + '" ';
            for (i in h) o += i + '="' + h[i] + '" ';
            o += " />"
        } else {
            o = "<object" + u + 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="' + e.swf + '" />';
            for (i in h) o += '<param name="' + i + '" value="' + h[i] + '" />';
            o += "</object>"
        }
        e[w].innerHTML = o,
        x(e)
    }
    function dt(t) {
        function i(e, t, r) {
            var i, s = n.getElementsByTagName("head");
            s && (s = s[0]),
            s || (s = n.body),
            s ? (i = n[k]("script"), i.type = "text/javascript", i.async = v, i.onload = t, i[T] = r, i.src = e, s.appendChild(i)) : r()
        }
        function s() {
            return typeof embedpanoJS !== V
        }
        function o() {
            s() ? (e[Y][W] = e[W], e[P] = e, e.htmltarget = e[b], embedpanoJS(t)) : u()
        }
        function u() {
            t[T]("HTML5 Version not available!")
        }
        var r = t.js;
        r || (r = t.swf, r = r[D](0, r.toLowerCase().lastIndexOf(".swf") + 1) + "js"),
        s() ? o() : i(r, o, u)
    }
    var t, n, r, i, s, o, u, a, f, l, c, h, p = !1,
    d = "indexOf",
    v = !0,
    m = "addEventListener",
    g = "wmode",
    y = "externalMouseEvent",
    b = "target",
    w = "targetelement",
    E = "mobilescale",
    S = null,
    x = "fakedevice",
    T = "onerror",
    N = "getElementById",
    C = "bgcolor",
    k = "createElement",
    L = "flashbasepath",
    A = "enable_mousewheel_js_bugfix",
    O = "html5",
    M = "never",
    _ = "initvars",
    D = "slice",
    P = "params",
    H = "length",
    B = "onmousewheel",
    j = "passQueryParameters",
    F = "always",
    I = "split",
    q = "onready",
    R = "mimeTypes",
    U = "substring",
    z = "externalMouseEvent2",
    W = "xml",
    X = "only",
    V = "undefined",
    $ = "prefer",
    J = "basepath",
    K = "useHTML5",
    Q = "srcElement",
    G = "mwheel",
    Y = "vars",
    Z = "consolelog",
    et = "ActiveXObject",
    tt = "chrome",
    nt = "mac",
    rt = "android",
    it = "stopPropagation",
    st = "plugins",
    ot = "preventDefault",
    ut = "fallback";
    return t = navigator,
    n = document,
    r = window,
    i = at(t.userAgent),
    s = 0,
    o = p,
    u = 0,
    a = p,
    f = p,
    e || (e = {}),
    l = e[j] === v,
    e.swf || (e.swf = "krpano.swf"),
    e.js || (e.js = S),
    e[W] === undefined && (e[W] = e.swf[I](".swf").join(".xml")),
    e.id || (e.id = "krpanoSWFObject"),
    e.width || (e.width = "100%"),
    e.height || (e.height = "100%"),
    e[C] || (e[C] = "#000000"),
    e[g] || (e[g] = S),
    e[b] || (e[b] = S),
    e[O] || (e[O] = "auto"),
    e[G] === undefined && (e[G] = v),
    e[Y] || (e[Y] = {}),
    e[P] || (e[P] = {}),
    e[q] || (e[q] = S),
    e[E] || (e[E] = .5),
    e[x] || (e[x] = S),
    e[J] ? e[L] = e[J] : (c = "./", h = e.swf.lastIndexOf("/"), h >= 0 && (c = e.swf[D](0, h + 1)), e[J] = c),
    e.isDevice = function(e) {
        var t, n, r, s = "all",
        o = ["ipad", "iphone", "ipod", rt];
        for (t = 0; t < 4; t++) i[d](o[t]) >= 0 && (s += "|" + o[t]);
        e = at(e)[I]("|");
        if (e == S) return v;
        n = e[H];
        for (t = 0; t < n; t++) {
            r = e[t];
            if (s[d](r) >= 0) return v
        }
        return p
    },
    e.addVariable = function(t, n) {
        t = at(t),
        t == "pano" || t == W ? e[W] = n: e[Y][t] = n
    },
    e.addParam = function(t, n) {
        e[P][at(t)] = n
    },
    e[K] !== undefined && (e[O] = e[K]),
    e[K] = function(t) {
        e[O] = t
    },
    e.isHTML5possible = function() {
        return s == 0 && ht(),
        a
    },
    e.isFlashpossible = function() {
        return s == 0 && ht(),
        o
    },
    e[T] || (e[T] = function(t) {
        var n = e[w];
        n ? n.innerHTML = '<table width="100%" height="100%"><tr style="vertical-align:middle;"><td><center>ERROR:<br/><br/>' + t + "<br/><br/></center></td></tr></table>": alert("ERROR: " + t)
    }),
    e.embed = function(r) {
        var c, h, m, y, E, x, C, k, L, A;
        r && (e[b] = r),
        e[w] = n[N](e[b]),
        e[w] ? (l && lt(), e[G] == p && (e[Y]["control.disablewheel"] = v), e[Z] && (e[Y][Z] = e[Z]), s == 0 && ht(), c = at(e[O]), h = e.flash, h && (h = at(h), h == $ ? c = ut: h == ut ? c = $: h == X ? c = M: h == M && (c = X)), m = o, y = a, E = a, E && o && s & 8 && (n.domain == "" || (s & 4) == 0) && (E = p), c == M ? y = p: ft(c, X) && (m = p), ft(c, F) ? (o = m = p, a = y = v) : y && (c == "whenpossible" || ft(c, $) && E || ft(c, "auto") && f) && (m = p), m && o ? (u >= 11.4 && (x = v, at(t.platform)[d](nt) >= 0 && at(t.vendor)[d]("apple") >= 0 && (C = i[d]("webkit/"), C > 0 && (C = parseFloat(i[D](C + 7)), !isNaN(C) && C > 0 && C < 534 && (x = p))), x && e[g] == S && !e[P][g] && (e[g] = s & 8 ? "window": "direct")), pt(e)) : y && a ? dt(e) : (k = "", L = c != M, A = o == p && (c == M || !ft(c, F) && !ft(c, X)), A && (k += "Adobe Flashplayer"), A && L && (k += " or<br/>"), L && (k += "HTML5 Browser with CSS3D or WebGL support"), k += " required!", e[T](k))) : e[T]("No Embedding Target")
    },
    ct(e)
}
function removepano(e) {
    var t, n, r, i, s = document.getElementById(e);
    if (s) {
        t = window._krpMW;
        if (t) for (n = 0; n < t.length; n++) {
            r = t[n];
            if (r && r.id === e) {
                t.splice(n, 1);
                break
            }
        }
        s.unload && s.unload(),
        i = s.parentNode,
        i && i.removeChild(s)
    }
}
function embedpano(e) {
    createPanoViewer(e).embed()
};
/*
	krpano HTML5 Viewer
	krpano 1.19-pr3 (build 2015-08-04)
*/
var krpanoJS = {
    version: "1.19-pr3",
    build: "2015-08-04"
};
function embedpanoJS(e) {

    function embedhtml5(gd, mb) {

        function hd() {
            function F(a) {
                return ("" + a).toLowerCase()
            }
            function Ha(a, d) {
                if (!a) return a;
                var b = 0,
                f = 0,
                g, n = a.length,
                k;
                for (g = 0; g < n; g++) if (k = a.charCodeAt(g), 32 >= k) b++;
                else break;
                for (g = n - 1; 0 < g; g--) if (k = a.charCodeAt(g), 32 >= k) f++;
                else break;
                void 0 === d && (g = a.charAt(b), k = a.charAt(n - f - 1), ("'" == g && "'" == k || '"' == g && '"' == k) && 3 == a.split(g).length && (b++, f++));
                return a = a.slice(b, n - f)
            }
            function pa(a) {
                return 0 <= _[368].indexOf(String(a).toLowerCase())
            }
            function ga(a, d) {
                return _[523] == d ? Number(a) : _[67] == d ? pa(a) : _[13] == d ? null == a ? null: String(a) : a
            }
            function sa(a) {
                return Number(a).toFixed(6)
            }
            function ha(a, d, b, f) {
                a.__defineGetter__(d, b);
                void 0 !== f && a.__defineSetter__(d, f)
            }
            function va(a, d, b) {
                var f = "_" + d;
                a[f] = b;
                a.__defineGetter__(d,
                function() {
                    return a[f]
                });
                a.__defineSetter__(d,
                function(d) {
                    d = ga(d, typeof b);
                    d != a[f] && (a[f] = d, a.haschanged = !0)
                })
            }
            function Aa(a) {
                a && a.preventDefault()
            }
            function R(a, d, b, f) {
                a && a.addEventListener(d, b, f)
            }
            function ba(a, d, b, f) {
                a && a.removeEventListener(d, b, f)
            }
            function Ja(a) {
                var d = aa.createElement(1 == a ? "img": 2 == a ? _[486] : "div");
                d && 1 == a && "off" != Tc && (d.crossOrigin = Tc);
                return d
            }
            function gc(a) {
                return function() {
                    return a.apply(a, arguments)
                }
            }
            function id(a) {
                return a.split("<").join("&lt;").split(">").join("&gt;")
            }
            function ca(a, d) {
                var b = "(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255);
                void 0 === d && (d = 1 - (a >> 24 & 255) / 255);
                return (1 > d ? "rgba" + b + "," + d: "rgb" + b) + ")"
            }
            function Ed(a) {
                return a.split("[").join("<").split("<<").join("[").split("]").join(">").split(">>").join("]")
            }
            function nc(a, d) {
                a = Number(a);
                for (d = Number(d); 0 > a;) a += 360;
                for (; 360 < a;) a -= 360;
                var b = Math.abs(d - a),
                f = Math.abs(d - (a - 360)),
                g = Math.abs(d - (a + 360));
                f < b && f < g ? a -= 360 : g < b && g < f && (a += 360);
                return a
            }
            function Gc(a) {
                if (a) {
                    var d = a.indexOf("?");
                    0 <= d && (a = a.slice(0, d));
                    d = a.indexOf("#");
                    0 <= d && (a = a.slice(0, d))
                }
                return a
            }
            function Vd(a) {
                a = Gc(a);
                var d = a.lastIndexOf("/"),
                b = a.lastIndexOf("\\");
                b > d && (d = b);
                return a.slice(d + 1)
            }
            function Uc(a, d) {
                var b = String(a).charCodeAt(0);
                return 48 <= b && 57 >= b ? (la(3, d + _[154]), !1) : !0
            }
            function gd(a, d) {
                for (var b = "",
                f = 0,
                g = 1,
                n = 0,
                k = 0; 1 == g && 0 == f;) {
                    var e, w = a.indexOf("*", n),
                    b = "";
                    0 > w ? (w = a.length, f = 1) : (b = a.indexOf("*", w + 1), 0 > b && (b = a.length), e = b - (w + 1), b = a.substr(w + 1, e));
                    e = w - n;
                    0 < e && d.substr(k, f ? void 0 : e) != a.substr(n, e) && (g = 0);
                    n = w + 1;
                    "" != b && (k = d.indexOf(b, k), 0 > k && (g = 0))
                }
                return !! g
            }
            function oc(a, d, b, f) {
                for (; 32 >= a.charCodeAt(d);) d++;
                for (; 32 >= a.charCodeAt(b - 1);) b--;
                var g = a.charCodeAt(d);
                if (37 == g) a = U(a.slice(d + 1, b), f);
                else if (103 == g && "get(" == a.slice(d, d + 4)) {
                    for (d += 4; 32 >= a.charCodeAt(d);) d++;
                    for (b = a.lastIndexOf(")"); 32 >= a.charCodeAt(b - 1);) b--;
                    a = U(a.slice(d, b), f)
                } else 99 == g && "calc(" == a.slice(d, d + 5) ? a = U(a.slice(d, b), f) : (f = a.charCodeAt(d), 39 != f && 34 != f || f != a.charCodeAt(b - 1) || (d++, b--), a = a.slice(d, b));
                return a
            }
            function Vc(a) {
                var d = [];
                if (null == a || void 0 == a) return d;
                var b, f = 0,
                g, n, k = 0;
                a = F(a);
                g = a.length;
                for (b = 0; b < g; b++) n = a.charCodeAt(b),
                40 == n ? k++:41 == n ? k--:46 == n && 0 == k && (d.push(a.slice(f, b)), f = b + 1);
                d.push(a.slice(f));
                return d
            }
            function Ka(a, d) {
                a = F(a);
                var b, f, g, n;
                g = Yb[a];
                null != g && void 0 !== g && "" != g && Zb(g, null, d);
                n = Yb.getArray();
                f = n.length;
                for (b = 0; b < f; b++) if (g = n[b]) g = g[a],
                null != g && void 0 !== g && "" != g && Zb(g, null, d)
            }
            function I(a, d, b, f, g) {
                if (d && _[13] == typeof d) {
                    var n = d.slice(0, 4);
                    "get:" == n ? d = U(d.slice(4)) : "calc" == n && 58 == d.charCodeAt(4) && (d = da.calc(null, d.slice(5)))
                }
                var n = null,
                k, e = Vc(a);
                k = e.length;
                if (1 == k && f && (n = e[0], void 0 !== f[n])) {
                    f[n] = _[67] == typeof f[n] ? pa(d) : d;
                    return
                }
                var w = m,
                n = null;
                1 < k && (n = e[k - 1]);
                for (a = 0; a < k; a++) {
                    var x = e[a],
                    v = a == k - 1,
                    r = null,
                    y = x.indexOf("[");
                    0 < y && (r = oc(x, y + 1, x.length - 1, f), x = x.slice(0, y));
                    y = !1;
                    if (void 0 === w[x]) {
                        if (b) break;
                        v || (null == r ? w[x] = new Fb: (w[x] = new bb(Fb), y = !0))
                    } else y = !0;
                    if (y && 0 == v && w[x] && 1 == w[x].isArray && null != r) if (v = null, w = w[x], v = b ? w.getItem(r) : w.createItem(r)) {
                        if (a == k - 2 && "name" == n) {
                            d = F(d);
                            r != d && (null == d || "null" == d || "" == d ? w.removeItem(r) : w.renameItem(r, d));
                            break
                        }
                        w = v;
                        continue
                    } else break;
                    if (v) w[x] = 1 == g ? d: ga(d, typeof w[x]);
                    else if (w = w[x], null == w) break
                }
            }
            function Wd(a) {
                if (a && "null" != a) {
                    if (_[13] == typeof a) {
                        var d = a.split("&"),
                        b = d.length,
                        f;
                        a = {};
                        for (f = 0; f < b; f++) {
                            var g = d[f].split("=");
                            a[g[0]] = g[1]
                        }
                    }
                    for (var n in a)"xml" != n && I(n, a[n])
                }
            }
            function U(a, d, b) {
                if (a && "calc(" == ("" + a).slice(0, 5)) return da.calc(null, a.slice(5, a.lastIndexOf(")")));
                var f, g, n = Vc(a);
                f = n.length;
                if (1 == f && _[307] == n[0]) return d ? d._type + "[" + d.name + "]": "";
                if (1 == f && d && (g = n[0], d.hasOwnProperty(g))) return d[g];
                var k = m;
                for (a = 0; a < f; a++) {
                    g = n[a];
                    var e = a == f - 1,
                    w = null,
                    x = g.indexOf("[");
                    0 < x && (w = oc(g, x + 1, g.length - 1, d), g = g.slice(0, x));
                    if (k && void 0 !== k[g]) {
                        if (null != w && (x = k[g]) && x.isArray) if (g = x.getItem(w)) {
                            if (e) return g;
                            k = g;
                            continue
                        } else break;
                        if (e) return k[g];
                        k = k[g]
                    } else break
                }
                return ! 0 === b ? void 0 : null
            }
            function Zb(a, d, b) {
                da.callaction(a, d, b)
            }
            function hd(a, d, b) {
                Zb(a, d ? U(d) : null, b ? pa(b) : null)
            }
            function la(a, d) { ! jd && (0 < a || m.debugmode) && (d = ["DEBUG", "INFO", _[458], "ERROR", _[367]][a] + ": " + d, V.log(d), 2 < a && m.showerrors && setTimeout(function() {
                    try {
                        V.showlog(!0)
                    } catch(a) {}
                },
                500))
            }
            function Ea(a, d) {
                if (!jd) {
                    a = "" + a;
                    var E = 0 < F(a).indexOf("load");
                    a = id(a).split("[br]").join("<br/>");
                    var f = xa.createItem(_[424]),
                    g = xa.createItem(_[425]);
                    f.sprite || (f.create(), V.controllayer.appendChild(f.sprite));
                    g.sprite || (g.create(), V.controllayer.appendChild(g.sprite));
                    var n;
                    f.loaded = !0;
                    f.align = _[66];
                    f.width = "100%";
                    f.height = "100%";
                    f.alpha = .5;
                    f.keep = !0;
                    n = f.sprite.style;
                    n.backgroundColor = _[26];
                    n.zIndex = 99999998;
                    E && (g.visible = !1);
                    g.loaded = !0;
                    g.align = _[136];
                    g.y = 0;
                    g.width = "105%";
                    var k = b.ie || b.android ? -2 : 2;
                    g.height = k + 46 / X;
                    g.keep = !0;
                    n = g.sprite.style;
                    n.backgroundColor = _[26];
                    n.color = _[40];
                    n.fontFamily = b.realDesktop && !b.ie ? _[55] : _[38];
                    n.fontSize = "12px";
                    n.margin = "-2px";
                    n.border = _[239];
                    d || (d = _[291]);
                    g.sprite.innerHTML = _[166] + d + "<br/>" + a + _[298];
                    n.zIndex = 99999999;
                    n[pc] = _[203];
                    g.jsplugin = {
                        onresize: function(a, d) {
                            var b = g.sprite.childNodes[0].clientHeight;
                            g.height = k + Math.max(46, b) / X;
                            0 >= b && (g.imageheight = 1)
                        }
                    };
                    f.updatepos();
                    g.updatepos();
                    E && setTimeout(function() {
                        try {
                            g.visible = !0
                        } catch(a) {}
                    },
                    500)
                }
            }
            function ve() {
                Xa.removeelements(!0);
                Xd.stop();
                Pa.unregister();
                Oa.unload();
                V.remove()
            }
            function we() {
                this.caller = this.args = this.cmd = null;
                this.breakable = !1
            }
            function Gb(a, d, b) {
                if (null == a || "" == a) return null;
                for (var f = 0,
                g = 0,
                n = 0,
                k = 0,
                e = 0,
                w = 0,
                x = 0,
                v = 0,
                r = "",
                r = 0;;) if (r = a.charCodeAt(e), 0 < r && 32 >= r) e++;
                else break;
                for (var y = [], g = a.length, f = e; f < g; f++) if (r = a.charCodeAt(f), 0 == v && 0 == x && 40 == r) n++;
                else if (0 == v && 0 == x && 41 == r) {
                    if (k++, n == k) {
                        w = f + 1;
                        r = a.slice(e, w);
                        y.push(r);
                        for (e = w;;) if (r = a.charCodeAt(e), 0 < r && 32 >= r) e++;
                        else break;
                        r = a.charCodeAt(e);
                        if (59 != r) {
                            w = g;
                            break
                        }
                        for (e++;;) if (r = a.charCodeAt(e), 59 == r || 0 < r && 32 >= r) e++;
                        else break;
                        f = e
                    }
                } else 34 == r ? 0 == x ? x = 1 : 1 == x && (x = 0) : 39 == r ? 0 == x ? x = 2 : 2 == x && (x = 0) : 91 == r && 0 == x ? v++:93 == r && 0 == x && v--;
                w != g && (r = a.slice(e, g), 0 < r.length && y.push(r));
                a = null;
                g = y.length;
                for (f = 0; f < g; f++) {
                    r = y[f];
                    x = r.indexOf("[");
                    k = r.indexOf("]");
                    n = r.indexOf("(");
                    0 < x && 0 < k && n > x && n < k && (n = r.indexOf("(", k));
                    e = k = null;
                    0 < n ? (k = r.slice(0, n), e = Ha(r.slice(n + 1, r.lastIndexOf(")")), !1), 0 >= e.length && (e = null)) : (k = r, e = null);
                    k = Ha(k);
                    w = [];
                    if (null != e) {
                        var l, v = e.length,
                        n = 0,
                        u = -1,
                        h = -1,
                        c = x = 0,
                        r = null;
                        for (l = 0; l < v; l++) r = e.charCodeAt(l),
                        0 == x && 40 == r ? n++:0 == x && 41 == r ? n--:34 == r ? 1 == x && 0 <= u ? (u = -1, x = 0) : 0 == x && (u = l, x = 1) : 39 == r && (2 == x && 0 <= h ? (h = -1, x = 0) : 0 == x && (h = l, x = 2)),
                        44 == r && 0 == n && 0 == x && (r = Ha(e.slice(c, l)), w.push(r), c = l + 1);
                        0 == n && (r = Ha(e.slice(c, l)), w.push(r))
                    }
                    null == a && (a = []);
                    n = new we;
                    n.cmd = b ? k: F(k);
                    n.args = w;
                    n.caller = d;
                    a.push(n)
                }
                return a
            }
            function Hb() {
                this.z = this.y = this.x = 0
            }
            function Ma() {
                var a = _[111] !== typeof Float32Array ? new Float32Array(16) : Array(16);
                a[0] = a[5] = a[10] = a[15] = 1;
                a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[11] = a[12] = a[13] = a[14] = 0;
                return a
            }
            function xe(a, d, b, f, g, n, k, e, w, x, v, r, y, l, u, h, c) {
                a[0] = d;
                a[1] = b;
                a[2] = f;
                a[3] = g;
                a[4] = n;
                a[5] = k;
                a[6] = e;
                a[7] = w;
                a[8] = x;
                a[9] = v;
                a[10] = r;
                a[11] = y;
                a[12] = l;
                a[13] = u;
                a[14] = h;
                a[15] = c
            }
            function Hc(a, d, b, f, g, n, k, e, w, x) {
                a[0] = d;
                a[1] = b;
                a[2] = f;
                a[3] = 0;
                a[4] = g;
                a[5] = n;
                a[6] = k;
                a[7] = 0;
                a[8] = e;
                a[9] = w;
                a[10] = x;
                a[11] = 0;
                a[12] = 0;
                a[13] = 0;
                a[14] = 0;
                a[15] = 1
            }
            function kd(a, d) {
                a[0] = d[0];
                a[1] = d[1];
                a[2] = d[2];
                a[3] = d[3];
                a[4] = d[4];
                a[5] = d[5];
                a[6] = d[6];
                a[7] = d[7];
                a[8] = d[8];
                a[9] = d[9];
                a[10] = d[10];
                a[11] = d[11];
                a[12] = d[12];
                a[13] = d[13];
                a[14] = d[14];
                a[15] = d[15]
            }
            function Ic(a, d) {
                var b = d[0],
                f = d[1],
                g = d[2],
                n = d[3],
                k = d[4],
                e = d[5],
                w = d[6],
                x = d[7],
                v = d[8],
                r = d[9],
                y = d[10],
                l = d[11],
                u = d[12],
                h = d[13],
                c = d[14],
                m = d[15],
                D = a[0],
                z = a[1],
                q = a[2],
                J = a[3];
                a[0] = D * b + z * k + q * v + J * u;
                a[1] = D * f + z * e + q * r + J * h;
                a[2] = D * g + z * w + q * y + J * c;
                a[3] = D * n + z * x + q * l + J * m;
                D = a[4];
                z = a[5];
                q = a[6];
                J = a[7];
                a[4] = D * b + z * k + q * v + J * u;
                a[5] = D * f + z * e + q * r + J * h;
                a[6] = D * g + z * w + q * y + J * c;
                a[7] = D * n + z * x + q * l + J * m;
                D = a[8];
                z = a[9];
                q = a[10];
                J = a[11];
                a[8] = D * b + z * k + q * v + J * u;
                a[9] = D * f + z * e + q * r + J * h;
                a[10] = D * g + z * w + q * y + J * c;
                a[11] = D * n + z * x + q * l + J * m;
                D = a[12];
                z = a[13];
                q = a[14];
                J = a[15];
                a[12] = D * b + z * k + q * v + J * u;
                a[13] = D * f + z * e + q * r + J * h;
                a[14] = D * g + z * w + q * y + J * c;
                a[15] = D * n + z * x + q * l + J * m
            }
            function ef(a, d) {
                var b = a[0],
                f = a[1],
                g = a[2],
                n = a[3],
                k = a[4],
                e = a[5],
                w = a[6],
                x = a[7],
                v = a[8],
                r = a[9],
                y = a[10],
                l = a[11],
                u = a[12],
                h = a[13],
                c = a[14],
                m = a[15],
                D = d[0],
                z = d[1],
                q = d[2],
                J = d[3],
                C = d[4],
                Q = d[5],
                A = d[6],
                H = d[7],
                qa = d[8],
                ea = d[9],
                Ca = d[10],
                S = d[11],
                p = d[12],
                B = d[13],
                t = d[14],
                G = d[15];
                a[0] = D * b + z * k + q * v + J * u;
                a[1] = D * f + z * e + q * r + J * h;
                a[2] = D * g + z * w + q * y + J * c;
                a[3] = D * n + z * x + q * l + J * m;
                a[4] = C * b + Q * k + A * v + H * u;
                a[5] = C * f + Q * e + A * r + H * h;
                a[6] = C * g + Q * w + A * y + H * c;
                a[7] = C * n + Q * x + A * l + H * m;
                a[8] = qa * b + ea * k + Ca * v + S * u;
                a[9] = qa * f + ea * e + Ca * r + S * h;
                a[10] = qa * g + ea * w + Ca * y + S * c;
                a[11] = qa * n + ea * x + Ca * l + S * m;
                a[12] = p * b + B * k + t * v + G * u;
                a[13] = p * f + B * e + t * r + G * h;
                a[14] = p * g + B * w + t * y + G * c;
                a[15] = p * n + B * x + t * l + G * m
            }
            function ye(a, d, b, f) {
                xe(a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, d, b, f, 1)
            }
            function Yd(a, d, b, f) {
                var g, n, k;
                g = b * Y;
                b = Math.cos(g);
                n = Math.sin(g);
                g = -(d - 90) * Y;
                d = Math.cos(g);
                k = Math.sin(g);
                g = -f * Y;
                f = Math.cos(g);
                g = Math.sin(g);
                Hc(a, d * f - k * n * g, d * g + k * n * f, -k * b, -b * g, b * f, n, k * f + d * n * g, k * g - d * n * f, d * b)
            }
            function Zd(a, d) {
                var b = d[0],
                f = d[1],
                g = d[2],
                n = d[4],
                k = d[5],
                e = d[6],
                w = d[8],
                x = d[9],
                v = d[10],
                r = 1 / (b * k * v + f * e * w + n * x * g - w * k * g - n * f * v - x * e * b);
                Hc(a, (k * v - x * e) * r, ( - f * v + x * g) * r, (f * e - k * g) * r, ( - n * v + w * e) * r, (b * v - w * g) * r, ( - b * e + n * g) * r, (n * x - w * k) * r, ( - b * x + w * f) * r, (b * k - n * f) * r)
            }
            function nb(a, d) {
                var b = d.x,
                f = d.y,
                g = d.z;
                d.x = b * a[0] + f * a[4] + g * a[8];
                d.y = b * a[1] + f * a[5] + g * a[9];
                d.z = b * a[2] + f * a[6] + g * a[10]
            }
            function Fd(a, d) {
                var b = d[0],
                f = d[1],
                g = d[2];
                d[0] = b * a[0] + f * a[4] + g * a[8];
                d[1] = b * a[1] + f * a[5] + g * a[9];
                d[2] = b * a[2] + f * a[6] + g * a[10]
            }
            function Jc(a) {
                "" != a.loader.src && (a.loader = Ja(1), a.loader.kobject = a)
            }
            function hc(a) {
                return b.fractionalscaling ? Math.round(a * (b.pixelratio + 1E-7)) / b.pixelratio: Math.round(a)
            }
            function Ib(a, d, b, f) {
                a = ("" + a).split(b);
                f = f ? f: [0, 0, 0, 0];
                b = a.length;
                4 == b ? (f[0] = a[0] * d + .5 | 0, f[1] = a[1] * d + .5 | 0, f[2] = a[2] * d + .5 | 0, f[3] = a[3] * d + .5 | 0) : 3 == b ? (f[0] = a[0] * d + .5 | 0, f[1] = f[3] = a[1] * d + .5 | 0, f[2] = a[2] * d + .5 | 0) : 2 == b ? (f[0] = f[2] = a[0] * d + .5 | 0, f[1] = f[3] = a[1] * d + .5 | 0) : f[0] = f[1] = f[2] = f[3] = a[0] * d + .5 | 0;
                return f
            }
            function Gd(a) {
                var d = a && a._poly;
                d && (d.setAttribute("fill", !0 === a.polyline ? "none": ca(a.fillcolor, a.fillalpha)), d.setAttribute(_[510], ca(a.bordercolor, a.borderalpha)), d.setAttribute(_[312], a.borderwidth * X))
            }
            function ze(a) {
                var d = p.r_rmatrix,
                b = p.r_zoom,
                f = p.r_zoff,
                g = .5 * Qa,
                n = .5 * ya + p.r_yoff,
                k = p._stereographic ? 10 - f: 1 - f * (1 - Math.min(p.fisheye * p.fisheye, 1)),
                e = a._poly;
                if (!e) {
                    var w = V.svglayer;
                    w || (w = document.createElementNS(_[77], "svg"), w.setAttribute(_[49], "100%"), w.setAttribute(_[28], "100%"), w.style.position = _[0], w.style.left = 0, w.style.top = 0, w.style.display = ja.stereo ? "none": "", V.svglayer = w, V.hotspotlayer.appendChild(w));
                    e = document.createElementNS(_[77], pa(a.polyline) ? _[121] : _[444]);
                    w.appendChild(e);
                    e.kobject = a;
                    a._poly = e;
                    Gd(a);
                    e.style.opacity = Number(a._alpha) * (a.keep ? 1 : qc);
                    a._assignEvents(e);
                    setTimeout(function() {
                        a.loading = !1;
                        a.loaded = !0;
                        da.callaction(a.onloaded, a)
                    },
                    7)
                }
                var w = a.point.getArray(),
                x = w.length,
                v = [];
                if (1 < x && a._visible && 0 == ja.stereo) {
                    var r, y, l, u = new Hb,
                    h = new Hb,
                    c;
                    y = w[x - 1];
                    l = (180 - Number(y.ath)) * Y;
                    y = Number(y.atv) * Y;
                    u.x = 1E3 * Math.cos(y) * Math.cos(l);
                    u.z = 1E3 * Math.cos(y) * Math.sin(l);
                    u.y = 1E3 * Math.sin(y);
                    nb(d, u);
                    for (r = 0; r < x; r++) y = w[r],
                    l = (180 - Number(y.ath)) * Y,
                    y = Number(y.atv) * Y,
                    h.x = 1E3 * Math.cos(y) * Math.cos(l),
                    h.z = 1E3 * Math.cos(y) * Math.sin(l),
                    h.y = 1E3 * Math.sin(y),
                    nb(d, h),
                    h.z >= k ? (u.z >= k || (c = (k - u.z) / (h.z - u.z), y = b / (k + f), l = (u.x + (h.x - u.x) * c) * y + g, y = (u.y + (h.y - u.y) * c) * y + n, v.push(l.toFixed(2) + "," + y.toFixed(2))), y = b / (h.z + f), l = h.x * y + g, y = h.y * y + n, v.push(l.toFixed(2) + "," + y.toFixed(2))) : u.z >= k && (c = (k - h.z) / (u.z - h.z), y = b / (k + f), l = (h.x + (u.x - h.x) * c) * y + g, y = (h.y + (u.y - h.y) * c) * y + n, v.push(l.toFixed(2) + "," + y.toFixed(2))),
                    u.x = h.x,
                    u.y = h.y,
                    u.z = h.z;
                    0 == a.polyline && 2 < v.length && v.push(v[0]);
                    e.style.pointerEvents = a._enabled ? _[264] : "none";
                    e.style.cursor = a._handcursor ? _[18] : _[5];
                    e.style.visibility = a._visible ? _[12] : _[6]
                }
                e.setAttribute(_[506], v.join(" "))
            }
            function Ae(a, d) {
                if (a && d) {
                    var b = a.zorder,
                    f = d.zorder;
                    if (b < f) return - 1;
                    if (b > f) return 1
                }
                return 0
            }
            function ob(a, d) {
                if (Wc) {
                    var E = Ua.getArray();
                    E.sort(Ae);
                    var f = E.length,
                    g;
                    for (g = 0; g < f; g++) {
                        var n = E[g];
                        n && (n.index = g)
                    }
                    Wc = !1
                }
                var E = Ua.getArray(),
                f = E.length,
                k;
                g = p.r_rmatrix;
                var n = Qa,
                e = ya,
                w = X,
                x = .5 * n,
                v = .5 * e,
                r = p.r_zoom,
                y = p.r_hlookat,
                l = p.r_vlookat,
                u = p.r_vlookatA,
                h = p.r_yoff,
                c = p.r_zoff,
                m = p._camroll;
                k = p._stereographic;
                var D;
                D = 1 * (1 + c / 1E3);
                var z = 50;
                0 < c && (k ? z -= c: (z = 20 - c, -125 > z && (z = -125)));
                var q = 0,
                J = 0;
                k = 0;
                void 0 !== d && (k = d, f = k + 1);
                var C = ic,
                Q = b.realDesktop && 250 > r ? 1.5 : 0,
                A = ub;
                ub = !1;
                var H = Be,
                qa = Ce;
                H[1] = x;
                H[5] = $d;
                H[9] = sa(y);
                H[15] = C + "," + C + "," + C;
                for (var ea = ib,
                Ca = new Hb,
                S = ("" + ja.hotspotrenderer).toLowerCase(), S = b.webgl && _[30] == S && "both" != S || ja.stereo, Z = null; k < f; k++) {
                    var B = E[k];
                    if (B && (Z = B.sprite)) if (Z = Z.style, S)"none" != Z.display && (Z.display = "none");
                    else {
                        B._GL_onDestroy && (B._GL_onDestroy(), B.GL = null);
                        if (A = !0, B.sprite) A = Number(B._alpha) * (B.keep ? 1 : qc),
                        Z.opacity = A,
                        B._poly && (B._poly.style.opacity = A);
                        A = a || B.poschanged || B.forceupdate;
                        if (null == B._url && 0 < B.point.count && A) ze(B),
                        B.poschanged = !1;
                        else if (B._visible && B.loaded && A) {
                            B.poschanged = !1;
                            A = Number(B._flying);
                            q = (1 - A) * Number(B._ath);
                            J = (1 - A) * Number(B._atv);
                            0 < A && (q += A * nc(y, B._ath), J += A * nc(l, B._atv));
                            var t = !1,
                            G = (180 - q) * Y,
                            Ba = J * Y;
                            Ca.x = 1E3 * Math.cos(Ba) * Math.cos(G);
                            Ca.z = 1E3 * Math.cos(Ba) * Math.sin(G);
                            Ca.y = 1E3 * Math.sin(Ba);
                            nb(g, Ca);
                            var P = !1,
                            Fa = Ca.x,
                            wa = Ca.y,
                            G = Ca.z;
                            if (G >= z - c) var ta = r / (G + c),
                            Fa = Fa * ta,
                            wa = wa * ta + h,
                            P = 8E3 > Math.abs(Fa) && 8E3 > Math.abs(wa),
                            Fa = Fa + x,
                            wa = wa + v;
                            if (B._distorted) {
                                Z.pointerEvents = 50 <= G + c && B._enabled ? "auto": "none";
                                t = !0;
                                G = (Ba = B._scale) ? B._scale: 1;
                                B._hszscale = G;
                                1 == B.scaleflying && (G = G * (1 - A) + G / (r / (e / 2)) * D * A);
                                B._scale = 1;
                                B.updatepluginpos();
                                B._scale = Ba;
                                var W = B.pixelwidth,
                                F = B.pixelheight,
                                Da = Ba = 1;
                                B._use_css_scale && (Ba = W / B.imagewidth, Da = F / B.imageheight);
                                var L = .5 * -F,
                                Va = String(B._edge),
                                Fa = wa = 0,
                                O = B._oxpix,
                                $b = B._oypix,
                                wa = wa + .5 * -W / Ba,
                                Fa = Fa + L / Da;
                                0 <= Va.indexOf("left") ? wa += +W / 2 / Ba: 0 <= Va.indexOf(_[3]) && (wa += -W / 2 / Ba);
                                0 <= Va.indexOf("top") ? Fa += +F / 2 / Da: 0 <= Va.indexOf(_[2]) && (Fa += -F / 2 / Da);
                                F = -500;
                                W = B._deepscale;
                                Va = B._depth;
                                isNaN(Va) && (Va = 1E3);
                                L = 1;
                                0 == (Va | 0) ? (F = 0, W = 1) : L = 1E3 / Va;
                                2 == Nb && (W *= 15);
                                W /= 1 + A + Q;
                                if (b.firefox || 6 < b.iosversion && .1 > B.scale) W = 10 / (1 + A);
                                0 < c && (W = 1);
                                G = G * W * L;
                                F *= W;
                                O = O * W * L;
                                $b = $b * W * L;
                                if (0 < c || b.firefox) t = P;
                                P = W * L * C / 2;
                                P = _[274] + P * B.tx + "px," + P * B.ty + "px," + -P * B.tz + "px) ";
                                H[3] = sa(v + h * (1 - A));
                                H[7] = sa( - (u * (1 - A) + l * A));
                                H[11] = P + _[125] + sa( - q);
                                H[13] = sa(J);
                                H[17] = F;
                                H[19] = sa(B._rotate + A * m);
                                H[21] = O;
                                H[23] = $b;
                                B.inverserotation ? (H[25] = "Y(" + sa(B.ry), H[27] = "X(" + sa(B.rx), H[29] = "Z(" + sa( - B.rz)) : (H[25] = "Z(" + sa(B.rz), H[27] = "X(" + sa( - B.rx), H[29] = "Y(" + sa( - B.ry));
                                H[31] = G * Ba;
                                H[33] = G * Da;
                                H[35] = wa;
                                H[37] = Fa;
                                Z[ea] = H.join("")
                            } else if (G >= z && (G = 1, P)) {
                                if (B.zoom || B.distorted) G *= Number(2 * (1 - A) * ta + A * X) / X;
                                B.updatepluginpos();
                                W = B.pixelwidth;
                                F = B.pixelheight;
                                Da = Ba = 1;
                                B._use_css_scale && (Ba = W / B.imagewidth, Da = F / B.imageheight);
                                q = Fa;
                                J = wa;
                                0 == B.accuracy && (q = Math.round(q), J = Math.round(J));
                                Va = String(B._edge);
                                Fa = wa = 0;
                                O = B._oxpix * G;
                                $b = B._oypix * G;
                                0 <= Va.indexOf("left") ? wa += +W / 2 / Ba: 0 <= Va.indexOf(_[3]) && (wa += -W / 2 / Ba);
                                0 <= Va.indexOf("top") ? Fa += +F / 2 / Da: 0 <= Va.indexOf(_[2]) && (Fa += -F / 2 / Da);
                                P = 2 * G * (Math.max(W, F) * B._scale + Math.max(O, $b));
                                if (0 < q + P || 0 < J + P || q - P < n || J - P < e) B._use_css_scale ? G *= w: (W *= w, F *= w, wa *= w, Fa *= w),
                                t = -(W / Ba) / 2,
                                P = -(F / Da) / 2,
                                B._istextfield && 0 == B.accuracy && (q |= 0, J |= 0, t |= 0, P |= 0, O |= 0, $b |= 0, wa |= 0, Fa |= 0),
                                qa[1] = sa(q),
                                qa[3] = sa(J),
                                qa[5] = sa(t),
                                qa[7] = sa(P),
                                qa[9] = sa(B._rotate - m * (1 - A)),
                                qa[11] = O,
                                qa[13] = $b,
                                qa[15] = G * Ba,
                                qa[17] = G * Da,
                                qa[19] = sa(wa),
                                qa[21] = sa(Fa),
                                A = qa.join(""),
                                A = Kc && 2 > Nb && .5 < Number(B.zorder2) ? _[325] + (999999999E3 + B._zdeep) + "px) " + A: _[263] + A,
                                Z[ib] = A,
                                t = !0
                            }
                            0 == B.forceupdate && (A = t ? "": "none", A != Z.display && (Z.display = A));
                            B.forceupdate = !1
                        }
                    }
                }
            }
            function De(a, d, E, f) {
                function g() {
                    var c = Ja(),
                    C = c.style;
                    C.marginTop = C.marginBottom = l[17] * p + "px";
                    C.height = "1px";
                    C.backgroundColor = ca(l[18]);
                    "none" != l[19] && (C.borderBottom = _[350] + ca(l[19]));
                    D.appendChild(c)
                }
                function n(c) {
                    var C = c.changedTouches;
                    return (C && 0 < C.length ? C[0] : c).pageY
                }
                function k(C, a, d) {
                    var Q = Ja(),
                    A = Q.style;
                    A.padding = l[20] * p + "px";
                    A.border = l[21] + _[23] + ca(l[22]);
                    A.borderRadius = l[23] * p + "px";
                    A.marginTop = l[24] * p + "px";
                    A.marginBottom = l[24] * p + "px";
                    b.androidstock && (A[_[76]] = _[36]);
                    Pa.touch && R(Q, b.browser.events.touchstart,
                    function(C) {
                        function A(C) {
                            C = n(C) - H;
                            if (h > ya) {
                                var a = v + C | 0;
                                a < ya - h - 10 ? a = ya - h - 10 : 10 < a && (a = 10);
                                c.style.top = a + "px"
                            }
                            15 < Math.abs(C) && (Q.onmouseout(), r = !0)
                        }
                        function t() {
                            ba(L, qa, A, !0);
                            ba(L, g, t, !0);
                            if (0 == r) Q.onclick()
                        }
                        Aa(C);
                        C.stopPropagation();
                        if (d && a) {
                            Q.onmouseover();
                            var H = n(C),
                            v = parseInt(c.style.top) | 0,
                            r = !1,
                            qa = b.browser.events.touchmove,
                            g = b.browser.events.touchend;
                            R(L, qa, A, !0);
                            R(L, g, t, !0)
                        }
                    },
                    !0);
                    d && a ? (A.cursor = _[18], Q.onmousedown = function(c) {
                        c.stopPropagation()
                    },
                    Q.onmouseover = function() {
                        A = this.style;
                        A.background = ca(l[25]);
                        A.border = l[21] + _[23] + ca(l[26]);
                        A.color = ca(l[27])
                    },
                    Q.onmouseout = function() {
                        A = this.style;
                        A.background = "none";
                        A.border = l[21] + _[23] + ca(l[22]);
                        A.color = ca(l[4])
                    },
                    Q.oncontextmenu = function(c) {
                        Aa(c);
                        c.stopPropagation();
                        Q.onclick()
                    },
                    Q.onclick = function(C) {
                        f ? (A = c.style, A.opacity = 1, A.transition = _[98], A.opacity = 0, setTimeout(E, 300)) : E();
                        da.callaction(d)
                    }) : (0 == a && (A.color = ca(l[5])), A.cursor = _[5]);
                    var H = Ja();
                    H.style.marginLeft = l[28] * p + "px";
                    H.style.marginRight = l[29] * p + "px";
                    H.innerHTML = C;
                    Q.appendChild(H);
                    D.appendChild(Q);
                    return H
                }
                function e() {
                    function c() {
                        return.4 > Math.random() ? " ": _[139]
                    }
                    var C = k("About" + c() + "the" + c() + _[46] + c() + _[414] + c() + _[385], !0,
                    function() {
                        da.openurl(_[220])
                    });
                    try { (new MutationObserver(function(c) {
                            c = L.getComputedStyle(C);
                            9 > Math.min(parseInt(c.width) | 0, parseInt(c.height) | 0) && (m = {},
                            Ea(_[97]))
                        })).observe(C, {
                            attributes: !1,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })
                    } catch(a) {}
                }
                function w() {
                    k(V.fullscreen ? y.exitfs: y.enterfs, !0,
                    function() {
                        m.fullscreen = !m.fullscreen
                    })
                }
                function x() {
                    var c = b.android,
                    C = b.infoString,
                    C = C.split(_[431]).join("");
                    k((qa ? "": _[128] + m.version + _[240] + m.build + _[261]) + (c ? _[481] : "") + C + Oa.infoString + (c ? _[443] : ""), !0, null)
                }
                function v() {
                    Na && Na[2] && k(Na[2], !0,
                    function() {
                        da.openurl(Na[3])
                    })
                }
                function r() {
                    var C = c.getBoundingClientRect(),
                    b = C.width,
                    C = C.height,
                    Q = d;
                    if (0 < b && 0 < C) {
                        h = C;
                        f && (a -= b >> 1, a + b > Qa && (a = Qa - b - 10), 10 > a && (a = 10));
                        for (; a + b > Qa;) a -= b / 2;
                        0 > a && (a = 0);
                        d + C > ya && (d = f ? ya - C - 10 : d - C);
                        0 > d && (f ? d = ya - C >> 1 : Q > ya / 2 ? (d = Q - C, 0 > d && (d = 4)) : (d = Q, d + C > ya && (d = ya - 4 - C)));
                        u = c.style;
                        u.left = (a | 0) + "px";
                        u.top = (d | 0) + "px";
                        f && (u.transition = _[98], u.opacity = 1)
                    } else 10 > ++B && setTimeout(r, 32)
                }
                var y = m.contextmenu;
                if (f && 0 == y.touch) return null;
                var l = null;
                y.customstyle && (_[109] == b.browser.domain || 0 == b.realDesktop || b.realDesktop && 0 != (Ya & 16)) && (l = F(y.customstyle).split("|"), 30 != l.length && (l = null));
                null == l && (l = (b.mac ? "default|14|default|0xFFFFFF|0x000000|0xBBBBBB|0|0|5|2|2|8|0x66000000|0|0|1|4|5|0xEEEEEE|none|1|0|0|0|3|0xEEEEEE|0|0|20|12": b.desktop ? "default|default|150%|0xFFFFFF|0x000000|0xBBBBBB|1|0xBBBBBB|0|2|2|8|0x66000000|0|0|2|2|5|0xE0E0E0|none|4|0|0|0|3|0xEEEEEE|0|0|18|12": "Helvetica|16|default|0x55000000|0xFFFFFF|0x555555|1|0xFFFFFF|8|0|0|8|0x44000000|0|0|4|4|6|0x555555|none|4|0|0|0|3|0xEEEEEE|0|0|12|12").split("|"));
                var u = null,
                h = 0,
                c = Ja();
                c.onselectstart = _[266];
                b.desktop && b.chrome && (c.style.opacity = .999);
                if (b.linux || b.android) l[1] = 12;
                u = c.style;
                u.position = _[0];
                u.zIndex = 99999999999;
                var p = 1;
                b.androidstock ? p = b.pixelratio: b.chrome && 40 > b.chromeversion && (u[ib] = _[20]);
                _[5] != l[0] ? u.fontFamily = l[0] : b.ios ? (u.fontFamily = _[38], u.fontWeight = _[484], _[5] == l[1] && (l[1] = 14)) : u.font = "menu";
                _[5] != l[1] && (u.fontSize = l[1] * p * (b.android ? 1.2 : 1) + "px");
                _[5] != l[2] && (u.lineHeight = l[2]);
                u.background = ca(l[3]);
                u.color = ca(l[4]);
                u.border = l[6] + _[23] + ca(l[7]);
                u.borderRadius = l[8] * p + "px";
                u.minWidth = "150px";
                u.textAlign = "left";
                u[pc] = l[9] + "px " + l[10] + "px " + l[11] + "px " + ca(l[12]);
                var D = Ja(),
                u = D.style;
                u.border = l[13] + _[23] + ca(l[14]);
                u.paddingTop = l[15] * p + "px";
                u.paddingBottom = l[16] * p + "px";
                Pa.touch && R(D, b.browser.events.touchstart,
                function(c) {
                    Aa(c);
                    c.stopPropagation()
                },
                !1);
                c.appendChild(D);
                var z = y.item.getArray(),
                q,
                J,
                C = 0,
                Q,
                A = z.length,
                H,
                qa = 0 != (Ya & 16),
                ea = qa,
                Ca = qa,
                S = !1,
                Z = !1;
                for (H = 0; H < A; H++) if (q = z[H]) if (J = q.caption) J = Ed(unescape(J)),
                q.separator && 0 < C && g(),
                Q = F(J),
                _[46] == Q ? 0 == ea && (ea = !0, e(), C++) : Na && _[430] == Q ? 0 == Ca && (Ca = !0, v(), C++) : _[110] == Q ? (S = !0, b.fullscreensupport && (w(), C++)) : _[334] == Q ? (Z = !0, x(), C++) : (Q = q.visible && (!q.showif || da.calc(null, q.showif))) ? (k(J, q.enabled, q.onclick), C++) : 0 == Q && q.separator && 0 < C && D.removeChild(D.lastChild);
                Na && 0 == Ca && (0 < C && (g(), C = 0), v());
                0 == ea && (0 < C && g(), e(), C++);
                0 == S && 1 == y.fullscreen && b.fullscreensupport && (w(), C++);
                0 == Z && 1 == y.versioninfo && (0 < C && g(), x(), C++);
                if (0 == C) return null;
                u = c.style;
                u.left = _[122];
                u.top = "10px";
                var B = 0;
                f && (u.opacity = 0);
                setTimeout(r, 16);
                return c
            }
            function qf() {
                function a(a, d, b) {
                    a.__defineGetter__(d, b)
                }
                m = new Fb;
                m.set = I;
                m.get = U;
                m.call = Zb;
                m.trace = la;
                m["true"] = !0;
                m[_[31]] = !1;
                m.strict = !1;
                m.version = _[432];
                m.build = _[348];
                m.buildversion = m.version;
                m.debugmode = !1;
                m.tweentypes = ac;
                m.basedir = _[349];
                m.showtext = function() {};
                m.bgcolor = 0;
                m[rc[0]] = m[rc[1]] = !0;
                m.haveexternalinterface = !0;
                m.havenetworkaccess = !0;
                m.device = b;
                m.browser = b.browser;
                m._have_top_access = b.topAccess;
                m._isrealdesktop = b.realDesktop;
                m.iosversion = b.iosversion;
                m.isphone = b.iphone;
                m.ispad = b.ipad;
                m.isandroid = b.android;
                m.ishtml5 = !0;
                m.isflash = !1;
                m.ismobile = b.mobile;
                m.istablet = b.tablet;
                m.isdesktop = b.desktop;
                m.istouchdevice = b.touchdevice;
                m.isgesturedevice = b.gesturedevice;
                a(m, _[351],
                function() {
                    return bc / X
                });
                a(m, _[326],
                function() {
                    return vb / X
                });
                ha(m, _[352],
                function() {
                    return X
                },
                function(a) {
                    a = Number(a);
                    isNaN(a) && (a = 1);
                    1E-4 < Math.abs(a - X) && (X = a, V.onResize(null, !0))
                });
                pb = m.area = new rf;
                m.wheeldelta = 0;
                m.wheeldelta_raw = Number.NaN;
                m.wheeldelta_touchscale = 0;
                m.keycode = 0;
                m.idletime = .5;
                m.__defineGetter__(_[397], Ta);
                m.__defineGetter__(_[500], Math.random);
                ha(m, _[110],
                function() {
                    return V.fullscreen
                },
                function(a) {
                    V.setFullscreen(pa(a))
                });
                ha(m, _[389],
                function() {
                    return ra.swfpath
                },
                function(a) {
                    ra.swfpath = a
                });
                m.hlookat_moveforce = 0;
                m.vlookat_moveforce = 0;
                m.fov_moveforce = 0;
                m.multireslevel = 0;
                m.lockmultireslevel = "-1";
                m.downloadlockedlevel = !1;
                O = m.mouse = {};
                O.down = !1;
                O.up = !1;
                O.moved = !1;
                O.downx = 0;
                O.downy = 0;
                O.x = 0;
                O.y = 0;
                a(O, _[495],
                function() {
                    return O.x + pb.pixelx
                });
                a(O, _[493],
                function() {
                    return O.y + pb.pixely
                });
                a(O, "dd",
                function() {
                    var a = O.x - O.downx,
                    d = O.y - O.downy;
                    return Math.sqrt(a * a + d * d)
                });
                p = m.view = new sf;
                m.screentosphere = p.screentosphere;
                m.spheretoscreen = p.spheretoscreen;
                m.loadFile = ra.loadfile;
                m.decodeLicense = ra.decodeLicense;
                m.haveLicense = gc(function(a) {
                    var d = !1,
                    b = Ya;
                    switch (a.toLowerCase().charCodeAt(0)) {
                    case 107:
                        d = 0 != (b & 1);
                        break;
                    case 109:
                        d = 0 != (b & 128);
                        break;
                    case 98:
                        d = 0 != (b & 16)
                    }
                    return d
                });
                m.parsepath = m.parsePath = ra.parsePath;
                m.contextmenu = new tf;
                ia = m.control = new uf;
                ae = m.cursors = new vf;
                N = m.image = {};
                xa = m.plugin = new bb(Ob);
                m.layer = xa;
                Ua = m.hotspot = new bb(wf);
                Yb = m.events = new bb(null, !0);
                Yb.dispatch = Ka;
                ja = m.display = {
                    currentfps: 60,
                    r_ft: 16,
                    FRM: 0,
                    _framebufferscale: 1,
                    mipmapping: "auto",
                    loadwhilemoving: b.realDesktop ? "true": "auto",
                    _stereo: !1,
                    stereooverlap: 0,
                    hotspotrenderer: "auto",
                    hardwarelimit: b.realDesktop && b.safari && "6" > b.safariversion ? 2E3: b.realDesktop && !b.webgl ? 2560 : b.iphone && b.retina && !b.iphone5 ? 800 : b.iphone && !b.retina ? 600 : b.ipod && b.retina ? 640 : b.mobile || b.tablet ? 1024 : 4096
                };
                ha(ja, _[491],
                function() {
                    return ja._stereo
                },
                function(a) {
                    a = pa(a);
                    ja._stereo != a && (ja._stereo = a, V.svglayer && (V.svglayer.style.display = a ? "none": ""))
                });
                ha(ja, _[383],
                function() {
                    var a = ja.FRM | 0;
                    return 0 == a ? "auto": "" + a
                },
                function(a) {
                    a |= 0;
                    0 > a && (a = 0);
                    ja.FRM = a
                });
                ha(ja, _[231],
                function() {
                    return ja._framebufferscale
                },
                function(a) {
                    a = Number(a);
                    if (isNaN(a) || 0 == a) a = 1;
                    ja._framebufferscale = a;
                    pb.haschanged = !0;
                    V.resizeCheck(!0)
                });
                m.memory = {
                    maxmem: b.realDesktop ? Math.min(Math.max(150, 48 * screen.availWidth * screen.availHeight >> 20), 400) : b.ios && 7.1 > b.iosversion || b.iphone && !b.iphone5 ? 40 : 50
                };
                m.network = {
                    retrycount: 2
                };
                sc = m.progress = {};
                sc.progress = 0;
                Ra = new Ob;
                Ra.name = "STAGE";
                Za = new Ob;
                Za.name = _[480];
                xa.alpha = 1;
                Ua.alpha = 1;
                Ua.visible = !0;
                ha(xa, _[12],
                function() {
                    return "none" != V.pluginlayer.style.display
                },
                function(a) {
                    V.pluginlayer.style.display = pa(a) ? "": "none"
                });
                m.xml = {};
                m.xml.url = "";
                m.xml.content = null;
                m.xml.scene = null;
                var d = m.security = {};
                ha(d, "cors",
                function() {
                    return Tc
                },
                function(a) {
                    Tc = a
                });
                za = m.autorotate = {};
                za.enabled = !1;
                za.waittime = 1.5;
                za.accel = 1;
                za.speed = 10;
                za.horizon = 0;
                za.tofov = null;
                za.currentmovingspeed = 0;
                m.math = function() {
                    function a(d) {
                        return function(a, b) {
                            void 0 === b ? I(a, Math[d](n(a))) : I(a, Math[d](n(b)))
                        }
                    }
                    var d = {},
                    b = _[157].split(" "),
                    n = function(a) {
                        var d = U(a);
                        return Number(null !== d ? d: a)
                    },
                    k;
                    for (k in b) {
                        var e = b[k];
                        d[e] = a(e)
                    }
                    d.pi = Ga;
                    d.atan2 = function(a, d, b) {
                        I(a, Math.atan2(n(d), n(b)))
                    };
                    d.min = function() {
                        var a = arguments,
                        d = a.length,
                        b = 3 > d ? 0 : 1,
                        r = n(a[b]);
                        for (b++; b < d; b++) r = Math.min(r, n(a[b]));
                        I(a[0], r)
                    };
                    d.max = function() {
                        var a = arguments,
                        d = a.length,
                        b = 3 > d ? 0 : 1,
                        r = n(a[b]);
                        for (b++; b < d; b++) r = Math.max(r, n(a[b]));
                        I(a[0], r)
                    };
                    d.pow = da.pow;
                    return d
                } ();
                m.action = new bb;
                m.scene = new bb;
                m.data = new bb;
                m.addlayer = m.addplugin = function(a) {
                    if (!Uc(a, _[204] + a + ")")) return null;
                    a = xa.createItem(a);
                    if (!a) return null;
                    null == a.sprite && (a._dyn = !0, a.create(), null == a._parent && V.pluginlayer.appendChild(a.sprite));
                    return a
                };
                m.removelayer = m.removeplugin = function(a, d) {
                    var b = xa.getItem(a);
                    if (b) {
                        if (pa(d)) {
                            var n = b._childs;
                            if (n) for (; 0 < n.length;) m.removeplugin(n[0].name, !0)
                        }
                        b.visible = !1;
                        b.parent = null;
                        b.sprite && V.pluginlayer.removeChild(b.sprite);
                        b.destroy();
                        xa.removeItem(a)
                    }
                };
                m.addhotspot = function(a) {
                    if (!Uc(a, _[321] + a + ")")) return null;
                    a = Ua.createItem(a);
                    if (!a) return null;
                    null == a.sprite && (a._dyn = !0, a.create(), V.hotspotlayer.appendChild(a.sprite));
                    ld = !0;
                    return a
                };
                m.removehotspot = function(a) {
                    var d = Ua.getItem(a);
                    if (d) {
                        d.visible = !1;
                        d.parent = null;
                        if (d.sprite) {
                            try {
                                V.hotspotlayer.removeChild(d.sprite)
                            } catch(b) {}
                            if (d._poly) {
                                try {
                                    V.svglayer.removeChild(d._poly)
                                } catch(n) {}
                                d._poly.kobject = null;
                                d._poly = null
                            }
                        }
                        d.destroy();
                        Ua.removeItem(a)
                    }
                }
            }
            function xf() {
                var a = p.haschanged,
                d = !1;
                jc++;
                ja.frame = jc;
                Oa.fps();
                var m = V.resizeCheck(),
                f = da.processAnimations(),
                a = a | p.haschanged;
                if (b.webgl || !b.ios || b.ios && 5 <= b.iosversion) f = !1;
                f |= ld;
                ld = !1;
                f && (p._hlookat += ((jc & 1) - .5) / (1 + p.r_zoom), a = !0);
                a |= Xa.handleloading();
                0 == da.blocked && (a |= Pa.handleFrictions(), Xa.checkautorotate(p.haschanged) && (a = d = !0));
                p.continuousupdates && (a = d = !0);
                a || m ? (Oa.startFrame(), Xa.updateview(d, !0), Oa.finishFrame()) : (p.haschanged && p.updateView(), ob(!1));
                Xa.updateplugins(m);
                b.desktop && Xa.checkHovering()
            }
            var Jb = this;
            try { ! Object.prototype.__defineGetter__ && Object.defineProperty({},
                "x", {
                    get: function() {
                        return ! 0
                    }
                }).x && (Object.defineProperty(Object.prototype, _[233], {
                    enumerable: !1,
                    configurable: !0,
                    value: function(a, d) {
                        Object.defineProperty(this, a, {
                            get: d,
                            enumerable: !0,
                            configurable: !0
                        })
                    }
                }), Object.defineProperty(Object.prototype, _[234], {
                    enumerable: !1,
                    configurable: !0,
                    value: function(a, d) {
                        Object.defineProperty(this, a, {
                            set: d,
                            enumerable: !0,
                            configurable: !0
                        })
                    }
                }))
            } catch(Bf) {}
            var jb = navigator,
            aa = document,
            L = window,
            Ga = Math.PI,
            Y = Ga / 180,
            tc = Number.NaN,
            md = 0,
            Ta = L.performance && L.performance.now ?
            function() {
                return L.performance.now() - md
            }: function() {
                return (new Date).getTime() - md
            },
            md = Ta(),
            Xc = String.fromCharCode,
            m = null,
            bc = 0,
            vb = 0,
            Qa = 0,
            ya = 0,
            X = 1,
            Yc = 1,
            uc = 0,
            pb = null,
            za = null,
            ia = null,
            ae = null,
            ja = null,
            Yb = null,
            sc = null,
            Ua = null,
            N = null,
            O = null,
            xa = null,
            p = null,
            Ra = null,
            Za = null,
            jc = 0,
            nd = 60,
            Ya = 14,
            od = null,
            rc = [_[362], _[489]],
            Na = null,
            Tc = "",
            vc = null,
            ld = !1,
            kc = 0,
            Kc = !0,
            b = {
                runDetection: function(a) {
                    function d() {
                        var a = screen.width,
                        c = screen.height,
                        C = b.topAccess ? top: L,
                        d = C.innerWidth,
                        Q = C.innerHeight,
                        C = C.orientation | 0,
                        A = a / (c + 1),
                        h = d / (Q + 1);
                        if (1 < A && 1 > h || 1 > A && 1 < h) A = a,
                        a = c,
                        c = A;
                        v.width = a;
                        v.height = c;
                        v.orientation = C;
                        b.window = {
                            width: d,
                            height: Q
                        };
                        a /= d;
                        return b.pagescale = a
                    }
                    function m(a, c) {
                        for (var C = ["ms", "Moz", _[494], "O"], d = 0; 5 > d; d++) {
                            var b = 0 < d ? C[d - 1] + a.slice(0, 1).toUpperCase() + a.slice(1) : a;
                            if (void 0 !== t.style[b]) return b
                        }
                        return null
                    }
                    var f = "multires flash html5 html mobile tablet desktop ie edge webkit ios iosversion iphone ipod ipad retina hidpi android androidstock blackberry touchdevice gesturedevice fullscreensupport windows mac linux air standalone silk".split(" "),
                    g,
                    n,
                    k,
                    e,
                    w = aa.documentElement,
                    x = a.mobilescale;
                    isNaN(x) && (x = .5);
                    n = f.length;
                    for (g = 0; g < n; g++) k = f[g],
                    b[k] = !1;
                    b.html5 = b.html = !0;
                    b.iosversion = 0;
                    b.css3d = !1;
                    b.webgl = !1;
                    b.topAccess = !1;
                    b.simulator = !1;
                    b.multiressupport = !1;
                    b.panovideosupport = !1;
                    var v = b.screen = {};
                    try {
                        top && top.document && (b.topAccess = !0)
                    } catch(r) {}
                    var y = jb.platform,
                    f = F(y),
                    l = jb.userAgent,
                    u = F(l),
                    h = n = "";
                    0 <= f.indexOf("win") ? b.windows = !0 : 0 <= f.indexOf("mac") ? b.mac = !0 : 0 <= f.indexOf("linux") && (b.linux = !0);
                    var c = L.devicePixelRatio,
                    p = 2 <= c;
                    g = 1;
                    var D = 0 <= f.indexOf("ipod"),
                    z = 0 <= f.indexOf(_[41]),
                    q = 0 <= f.indexOf("ipad"),
                    J = z || D || q;
                    e = u.indexOf("silk/");
                    var C = 0 <= u.indexOf(_[469]) || 0 <= u.indexOf(_[145]),
                    Q = 0 > e && !C && 0 <= u.indexOf(_[464]),
                    A = k = !1,
                    H = !1,
                    qa = l.indexOf(_[147]),
                    ea = L.chrome && !C,
                    Ca = l.indexOf(_[460]),
                    S = !1,
                    Z = (J || Q || e) && (b.windows || b.mac);
                    C && (qa = Ca = -1);
                    var f = !1,
                    B = 0;
                    Yc = d();
                    if (J) {
                        if (b.ios = !0, n = y, e = l.indexOf("OS "), 0 < e && (e += 3, B = l.slice(e, l.indexOf(" ", e)).split("_").join("."), n += _[457] + B, b.iosversion = parseFloat(B), "6.0" <= B && (z && !p || D && p) && (b._iOS6_canvas_bug = !0)), k = z || D, A = q, B = Math.max(screen.width, screen.height), b.iphone = z || D, b.iphone5 = z && 500 < B, b.ip6p = z && 735 < B, b.ipod = D, b.ipad = q, b.retina = p, z || D) g *= x
                    } else if (Q) if (e = l.indexOf(_[454]), B = parseFloat(l.slice(e + 8)), b.android = !0, b.linux = !1, b.androidversion = B, n = l.slice(e, l.indexOf(";", e)), k = 0 < u.indexOf(_[44]), ea && 0 < u.indexOf(_[275]) && (k = 480 > Math.min(screen.width, screen.height)), A = !k, B = l.indexOf(")"), 5 < B && (e = l.slice(0, B).lastIndexOf(";"), 5 < e && (p = l.indexOf(_[511], e), 0 < p && (B = p), n += " (" + l.slice(e + 2, B) + ")")), 0 < Ca && isNaN(c) && (c = Yc), A && 1 < c) {
                        if (b.hidpi = !0, g = c, 0 <= qa || 0 < Ca) b.hidpi = !1,
                        g = 1
                    } else k && (b.hidpi = 1 < c, g = c * x, .5 > g && (g = .5), 0 <= qa || 0 < Ca || Z) && (b.hidpi = !1, g = x);
                    else {
                        if (0 <= u.indexOf(_[345]) || 0 <= u.indexOf(_[344]) || 0 <= u.indexOf("bb10")) S = !0,
                        b.blackberry = !0,
                        n = _[336],
                        f = !0;
                        0 <= e ? (S = !0, b.silk = !0, n = _[297] + parseFloat(u.slice(e + 5)).toFixed(2), H = !1, k = 0 <= u.indexOf(_[44]), A = !k, f = !0) : 0 <= u.indexOf("ipad") || 0 <= u.indexOf(_[41]) ? H = S = !0 : 0 <= u.indexOf(_[138]) ? (A = !0, n += _[513]) : 0 <= u.indexOf(_[44]) ? (k = !0, n += _[518], g = x) : H = !0
                    }
                    D = jb.vendor && 0 <= jb.vendor.indexOf("Apple");
                    z = L.opera;
                    p = !1;
                    H && (n = _[285]);
                    e = l.indexOf(_[451]);
                    0 < e && (D || z || Q) && (e += 8, B = l.slice(e, l.indexOf(" ", e)), D ? (b.safari = !0, b.safariversion = B, h = _[520]) : (Q && (h = _[238], f = !0), z && (b.opera = !0, b.operaversion = B, h = "Opera")), h += " " + B);
                    J && (e = l.indexOf(_[521]), 0 < e && (b.safari = !0, e += 6, B = parseFloat(l.slice(e, l.indexOf(" ", e))), b.crios = B, h = _[449] + B.toFixed(1)));
                    e = qa;
                    if (0 <= e || ea) B = parseFloat(l.slice(e + 7)),
                    b.chrome = !0,
                    b.chromeversion = B,
                    h = _[147] + (isNaN(B) ? "": " " + B.toFixed(1)),
                    e = u.indexOf("opr/"),
                    0 < e && (h = _[517] + parseFloat(l.slice(e + 4)).toFixed(1) + _[378]),
                    Q && 28 > B && (f = !0),
                    Q && 1 < c && 20 > B && !Z && (b.hidpi = !0, g = c, k && (g *= x));
                    else if (e = Ca, 0 > e && (e = l.indexOf(_[514])), 0 <= e && (B = parseFloat(l.slice(1 + l.indexOf("/", e))), b.firefox = !0, b.firefoxversion = B, h = _[434] + (isNaN(B) ? "": B.toFixed(1)), Q && 35 > B && (f = !0)), e = l.indexOf("MSIE "), p = 0 <= e || C) H = b.ie = !0,
                    A = !1,
                    h = _[224],
                    0 < u.indexOf(_[436]) || 0 < u.indexOf(_[289]) ? (k = !0, H = !1, h = _[445] + h, g = x) : 0 < u.indexOf("arm;") && 1 < jb.msMaxTouchPoints && (A = !0, H = !1, h = _[447] + h, f = !0, g = 1),
                    0 <= e ? (B = l.slice(e + 4, l.indexOf(";", e)), b.ieversion = parseFloat(B), h += B) : (e = l.indexOf("rv:"), 0 <= e ? (B = parseFloat(l.slice(e + 3)), !isNaN(B) && 10 <= B && 100 > B && (b.ieversion = B, h += " " + B.toFixed(1))) : (e = u.indexOf(_[145]), 0 <= e && (h = _[260], b.edge = !0, Kc = !1, B = parseFloat(l.slice(e + 6)), isNaN(B) || (b.ieversion = B, h += " " + (B + 8).toFixed(5))))),
                    n = h,
                    h = "";
                    b.android && (b.androidstock = !(b.chrome || b.firefox || b.opera));
                    0 == b.ie && 0 < (e = u.indexOf(_[448])) && (B = parseFloat(u.slice(e + 7)), !isNaN(B) && 0 < B && (b.webkit = !0, b.webkitversion = B));
                    b.pixelratio = isNaN(c) ? 1 : c;
                    b.fractionalscaling = 0 != b.pixelratio % 1;
                    var c = {},
                    t = Ja();
                    c.find = m;
                    c.prefix = p ? "ms": b.firefox ? "moz": b.safari || b.chrome || b.androidstock ? _[70] : "";
                    c.perspective = m(_[335]);
                    c.transform = m(_[387]);
                    c.backgroundsize = m(_[256]);
                    c.boxshadow = m(_[388]);
                    c.boxshadow_style = _[252] == c.boxshadow ? _[212] : _[292] == c.boxshadow ? _[249] : _[342];
                    Q && "4.0" > b.androidversion && (c.perspective = null);
                    c.perspective && (b.css3d = !0, _[217] == c.perspective && L.matchMedia && (u = L.matchMedia(_[195]))) && (b.css3d = 1 == u.matches);
                    t = null;
                    b.webgl = function() {
                        var a = null;
                        try {
                            for (var c = Ja(2), C = 0; 4 > C && !(a = c.getContext([_[30], _[83], _[116], _[112]][C])); C++);
                        } catch(d) {}
                        return null != a
                    } ();
                    u = {};
                    u.useragent = l;
                    u.platform = y;
                    u.domain = null;
                    u.location = L.location.href;
                    y = u.events = {};
                    u.css = c;
                    if (J || Q || void 0 !== w.ontouchstart || S) b.touchdevice = !0,
                    b.gesturedevice = !0;
                    J = 0; (jb.msPointerEnabled || jb.pointerEnabled) && b.ie && (Q = jb.msMaxTouchPoints || jb.maxTouchPoints, jb.msPointerEnabled && (J = 2), jb.pointerEnabled && (J = 1), b.touchdevice = 0 < Q, b.gesturedevice = 1 < Q);
                    y.touchstart = [_[343], _[331], _[290]][J];
                    y.touchmove = [_[115], _[330], _[283]][J];
                    y.touchend = [_[118], _[390], _[328]][J];
                    y.touchcancel = [_[327], _[280], _[236]][J];
                    y.gesturestart = [_[300], _[96], _[96]][J];
                    y.gesturechange = [_[276], _[91], _[91]][J];
                    y.gestureend = [_[355], _[99], _[99]][J];
                    y.pointerover = [_[8], _[8], _[34]][J];
                    y.pointerout = [_[9], _[9], _[35]][J];
                    b.pointerEvents = b.opera || b.ie && 11 > b.ieversion ? !1 : !0;
                    h && (n += " - " + h);
                    b.realDesktop = H;
                    h = a.vars ? F(a.vars.simulatedevice) : null;
                    _[392] == h && (0 <= l.indexOf(_[146]) || 0 <= l.indexOf("iPod") ? h = _[41] : 0 <= l.indexOf("iPad") && (h = "ipad"));
                    b.touchdeviceNS = b.touchdevice;
                    l = _[41] == h ? 1 : "ipad" == h ? 2 : 0;
                    0 < l && (b.simulator = !0, b.crios = 0, n += " - " + (1 == l ? _[146] : "iPad") + _[356], g = l * x, k = 1 == l, A = 2 == l, H = !1, b.ios = !0, b.iphone = k, b.ipad = A, b.touchdevice = !0, b.gesturedevice = !0);
                    b.browser = u;
                    b.infoString = n;
                    a = F(a.fakedevice);
                    _[44] == a ? (k = !0, A = H = !1) : _[138] == a ? (A = !0, k = H = !1) : _[465] == a && (H = !0, k = A = !1);
                    b.mobile = k;
                    b.tablet = A;
                    b.desktop = H;
                    b.normal = A || H;
                    b.touch = b.gesturedevice;
                    b.mouse = H;
                    b.getViewportScale = d;
                    X = g;
                    0 == b.simulator && 0 != aa.fullscreenEnabled && 0 != aa.mozFullScreenEnabled && 0 != aa.webkitFullScreenEnabled && 0 != aa.webkitFullscreenEnabled && 0 != aa.msFullscreenEnabled && (a = [_[223], _[201], _[194], _[191], _[209]], x = -1, g = null, n = _[228], w[a[0]] ? (g = "", x = 0) : w[a[1]] ? (g = "moz", x = 1) : w[a[2]] ? (g = _[70], x = 2) : w[a[3]] ? (g = _[70], x = 3) : w[a[4]] && (g = "MS", n = _[229], x = 4), 0 <= x && 0 == f && (b.fullscreensupport = !0, y.fullscreenchange = g + n, y.requestfullscreen = a[x]));
                    b.buildList();
                    delete b.runDetection
                },
                buildList: function() {
                    var a, d = "|all";
                    for (a in b) a == F(a) && b[a] && (d += "|" + a);
                    b.haveList = d + "|"
                },
                checkSupport: function(a) {
                    a = F(a).split("no-").join("!").split(".or.").join("|").split(".and.").join("+").split("|");
                    var d, m, f = a.length;
                    for (d = 0; d < f; d++) {
                        var g = a[d].split("+"),
                        n = !1;
                        for (m = 0; m < g.length; m++) {
                            var n = g[m],
                            k = !1;
                            33 == n.charCodeAt(0) && (n = n.slice(1), k = !0);
                            if (0 == n.indexOf("ios") && b.ios) if (3 == n.length || b.iosversion >= parseFloat(n.slice(3))) if (k) {
                                n = !1;
                                break
                            } else n = !0;
                            else if (k) n = !0;
                            else {
                                n = !1;
                                break
                            } else if (0 <= b.haveList.indexOf("|" + n + "|")) if (k) {
                                n = !1;
                                break
                            } else n = !0;
                            else if (k) n = !0;
                            else {
                                n = !1;
                                break
                            }
                        }
                        if (n) return ! 0
                    }
                    return ! 1
                }
            },
            cb = 0,
            Kb = 0,
            Hd = 0,
            Nb = 0,
            Lc = 0,
            be = 0,
            jd = !1,
            ib = null,
            Id = null,
            pd = null,
            Zc = null,
            pc = null,
            ce = !1,
            Lb = 0,
            Fb = function() {
                var a = this;
                a._type = "base";
                a.registerattribute = function(d, b, f, g) {
                    d = F(d);
                    f && g ? (a.hasOwnProperty(d) && (b = ga(a[d], typeof b)), a.__defineGetter__(d, g), a.__defineSetter__(d, f), f(b)) : a.hasOwnProperty(d) ? a[d] = ga(a[d], typeof b) : a[d] = b
                };
                a.createobject = function(d) {
                    d = F(d);
                    try {
                        return a.hasOwnProperty(d) ? a[d] : a[d] = new Fb
                    } catch(b) {}
                    return null
                };
                a.removeobject = a.removeattribute = function(d) {
                    d = F(d);
                    try {
                        a[d] = null,
                        delete a[d]
                    } catch(b) {}
                };
                a.createarray = function(d) {
                    d = F(d);
                    return a[d] && a[d].isArray ? a[d] : a[d] = new bb(Fb)
                };
                a.removearray = function(d) {
                    d = F(d);
                    a[d] && a[d].isArray && (a[d] = null, delete a[d])
                };
                a.getattributes = function() {
                    var d = [],
                    b = ["index", _[438]],
                    f;
                    for (f in a) _[11] != typeof a[f] && -1 == b.indexOf(f) && "_" != f.charAt(0) && d.push(f);
                    return d
                }
            },
            bb = function(a, d) {
                var b = [],
                f = {};
                this.isArray = !0;
                this.isDynArray = 1 == d;
                this.__defineGetter__("count",
                function() {
                    return b.length
                });
                this.__defineSetter__("count",
                function(a) {
                    0 == a ? (b = [], f = {}) : b.length = a
                });
                this.createItem = function(d, n) {
                    var k = -1,
                    e = null,
                    k = String(d).charCodeAt(0);
                    if (48 <= k && 57 >= k) {
                        if (n) return null;
                        k = parseInt(d, 10);
                        e = b[k];
                        if (null == e || void 0 == e) e = null != a ? new a: {},
                        e.name = "n" + k,
                        e.index = k,
                        b[k] = e,
                        f[e.name] = e
                    } else if (d = F(d), e = f[d], null == e || void 0 == e) e = n ? n: null != a ? new a: {},
                    k = b.push(e) - 1,
                    e.index = k,
                    e.name = d,
                    b[k] = e,
                    f[d] = e;
                    return e
                };
                this.getItem = function(a) {
                    var d = -1,
                    d = String(a).charCodeAt(0);
                    48 <= d && 57 >= d ? (d = parseInt(a, 10), a = b[d]) : a = f[F(a)];
                    return a
                };
                this.getArray = function() {
                    return b
                };
                this.renameItem = function(a, d) {
                    var k = -1,
                    k = String(a).charCodeAt(0);
                    48 <= k && 57 >= k ? (k = parseInt(a, 10), k = b[k]) : k = f[F(a)];
                    k && (delete f[k.name], d = F(d), k.name = d, f[d] = k)
                };
                this.removearrayitem = this.removeItem = function(a) {
                    var d = -1,
                    d = null;
                    a = String(a);
                    d = String(a).charCodeAt(0);
                    48 <= d && 57 >= d ? (d = parseInt(a, 10), d = b[d]) : d = f[F(a)];
                    if (d) {
                        f[d.name] = null;
                        delete f[d.name];
                        b.splice(d.index, 1);
                        var k;
                        k = b.length;
                        for (a = d.index; a < k; a++) b[a].index--
                    }
                    return d
                };
                this.sortby = function(a, d) {
                    var f, e, w = !1 === d ? -1 : 1;
                    e = b.length;
                    if (1 < e) for (b.sort(function(d, b) {
                        var r = d[a],
                        e = b[a];
                        return void 0 === r && void 0 !== e ? +w: void 0 !== r && void 0 === e || r < e ? -w: r > e ? +w: 0
                    }), f = 0; f < e; f++) b[f].index = f
                }
            },
            ra = {}; (function() {
                function a(a) {
                    for (var d = w,
                    b = [], e, g, h, c, f, n = a.length, k = 0, q = 0; k < n;) e = d.indexOf(a.charAt(k++)),
                    g = d.indexOf(a.charAt(k++)),
                    c = d.indexOf(a.charAt(k++)),
                    f = d.indexOf(a.charAt(k++)),
                    e = e << 2 | g >> 4,
                    g = (g & 15) << 4 | c >> 2,
                    h = (c & 3) << 6 | f,
                    b[q++] = e,
                    64 != c && (b[q++] = g),
                    64 != f && (b[q++] = h);
                    return b
                }
                function d(a, d) {
                    var b, e, g, h = [];
                    h.length = 256;
                    if (80 == d || 82 == d) {
                        e = 15;
                        var c = _[89];
                        82 == d && od && (e = 127, c = od);
                        b = a[65] & 7;
                        for (g = 0; 128 > g; g++) h[2 * g] = a[g],
                        h[2 * g + 1] = String(c).charCodeAt(g & e);
                        e = a.length - 128 - b;
                        b += 128
                    } else if (71 == d) {
                        b = a[4];
                        e = (a[b] ^ b) & 15 | ((a[2 + b] ^ b) >> 2 & 63) << 4 | ((a[1 + b] ^ b) >> 1 & 63) << 10 | ((a[3 + b] ^ b) & 63) << 16;
                        for (g = 0; 256 > g; g++) h[g] = a[g] ^ a[256 + e + b + 2 * g];
                        b = 256
                    }
                    x.srand(h, 256);
                    return x.flip(a, b, e)
                }
                function p(a, d, b) {
                    if (null == a) return null;
                    a = "" + a;
                    1 == d && m.basedir && 0 > a.indexOf("://") && 0 != a.indexOf("/") && _[74] != a.slice(0, 5) && (a = m.basedir + a);
                    a = a.split("\\").join("/");
                    null == e.firstxmlpath && (e.firstxmlpath = "");
                    null == e.currentxmlpath && (e.currentxmlpath = "");
                    null == e.swfpath && (e.swfpath = "");
                    null == e.htmlpath && (e.htmlpath = "");
                    for (d = a.indexOf("%"); 0 <= d;) {
                        var g = a.indexOf("%", d + 1);
                        if (g > d) {
                            var f = a.slice(d + 1, g),
                            h = null;
                            if (36 == f.charCodeAt(0)) {
                                if (f = U(f.slice(1)), null != f) {
                                    f = "" + f;
                                    a = 47 == f.charCodeAt(0) || 0 < f.indexOf("://") ? f + a.slice(g + 1) : a.slice(0, d) + f + a.slice(g + 1);
                                    d = a.indexOf("%");
                                    continue
                                }
                            } else switch (f) {
                            case _[437]:
                                h = 1 == b ? "": e.firstxmlpath;
                                break;
                            case _[361]:
                                h = e.currentxmlpath;
                                break;
                            case _[475]:
                                h = 1 == b ? "": e.swfpath;
                                break;
                            case _[422]:
                                h = 1 == b ? "": e.htmlpath;
                                break;
                            case _[473]:
                                h = 1 == b ? "": m.basedir
                            }
                            null != h ? (g++, "/" == a.charAt(g) && g++, a = h + a.slice(g), d = a.indexOf("%")) : d = a.indexOf("%", d + 1)
                        } else d = -1
                    }
                    return a
                }
                function f(b, e, f) {
                    var l, n;
                    0 <= (l = e.indexOf(_[333])) ? (n = e.indexOf(_[309])) > l && (e = e.slice(l + 11, n), l = e.indexOf(_[393]), 0 <= l && (e = e.slice(l + 9, -3))) : f && 0 <= (l = e.indexOf('"[[KENC')) && (n = e.lastIndexOf(']]"')) > l && (e = e.slice(l + 3, n));
                    var h;
                    n = null;
                    h = e.slice(0, 8);
                    l = e.slice(8);
                    f = !0 === f && Ya & 64 || !f && Ya & 32;
                    if ("KENC" != h.slice(0, 4)) return f ? (b && Ea(b + _[32]), null) : e;
                    var c = !1,
                    k = e = 0,
                    k = 0,
                    w = !1;
                    e = String(h).charCodeAt(4);
                    if (80 == e || 82 == e || 71 == e) if (k = String(h).charCodeAt(5), 85 == k && (k = String(h).charCodeAt(6), w = 90 == k, 66 == k || w)) c = !0;
                    if (!c) return b && la(3, b + _[170]),
                    null;
                    if (f && 80 == e) return b && Ea(b + _[32]),
                    null;
                    b = null;
                    if (w) {
                        b = e;
                        n = String.fromCharCode;
                        h = 1;
                        f = l.length;
                        var m = e = null,
                        q = k = c = w = 0,
                        x = 0,
                        C = 0,
                        Q = 0;
                        try {
                            n.apply(null, (new Uint8Array(4)).subarray(2))
                        } catch(A) {
                            h = 0
                        }
                        n = h ? Uint8Array: Array;
                        for (e = new n(4 * f / 5); w < f;) k = l.charCodeAt(w++) - 35,
                        q = l.charCodeAt(w++) - 35,
                        x = l.charCodeAt(w++) - 35,
                        C = l.charCodeAt(w++) - 35,
                        Q = l.charCodeAt(w++) - 35,
                        56 < k && k--,
                        56 < q && q--,
                        56 < x && x--,
                        56 < C && C--,
                        56 < Q && Q--,
                        Q += 85 * (85 * (85 * (85 * k + q) + x) + C),
                        e[c++] = Q >> 24 & 255,
                        e[c++] = Q >> 16 & 255,
                        e[c++] = Q >> 8 & 255,
                        e[c++] = Q & 255;
                        e = d(e, b);
                        m = new n(e[2] << 16 | e[1] << 8 | e[0]);
                        f = 8 + (e[6] << 16 | e[5] << 8 | e[4]);
                        w = 8;
                        for (c = 0; w < f;) {
                            k = e[w++];
                            q = k >> 4;
                            for (x = q + 240; 255 === x; q += x = e[w++]);
                            for (C = w + q; w < C;) m[c++] = e[w++];
                            if (w === f) break;
                            Q = c - (e[w++] | e[w++] << 8);
                            q = k & 15;
                            for (x = q + 240; 255 === x; q += x = e[w++]);
                            for (C = c + q + 4; c < C;) m[c++] = m[Q++]
                        }
                        e.length = 0;
                        n = l = g(m)
                    } else b = a(l),
                    b = d(b, e),
                    null != b && (n = g(b));
                    return n
                }
                function g(a) {
                    for (var d = "",
                    b = 0,
                    e = 0,
                    g = 0,
                    h = 0,
                    c = a.length; b < c;) e = a[b],
                    128 > e ? (0 < e && (d += Xc(e)), b++) : 191 < e && 224 > e ? (g = a[b + 1], d += Xc((e & 31) << 6 | g & 63), b += 2) : (g = a[b + 1], h = a[b + 2], e = (e & 15) << 12 | (g & 63) << 6 | h & 63, 65279 != e && (d += Xc(e)), b += 3);
                    return d
                }
                function n(a, d, b) {
                    void 0 !== d ? d(a, b) : Ea(a + _[80] + b + ")")
                }
                function k(a, d, g, f, k) {
                    if (0 == e.DMcheck(a)) n(a, k, _[227]);
                    else {
                        var h = null,
                        c = !1;
                        if (b.ie && "" == aa.domain) try {
                            h = new ActiveXObject(_[218]),
                            c = !0
                        } catch(w) {
                            h = null
                        }
                        null == h && (h = new XMLHttpRequest);
                        void 0 !== h.overrideMimeType && d && h.overrideMimeType(d);
                        h.onreadystatechange = function() {
                            if (4 == h.readyState) {
                                var d = h.status,
                                b = h.responseText;
                                if (0 == d && b || 200 == d || 304 == d) if (g) {
                                    var e = null,
                                    e = c ? (new DOMParser).parseFromString(b, _[25]) : h.responseXML;
                                    f(a, e, d)
                                } else f(a, b);
                                else n(a, k, h.status)
                            }
                        };
                        try {
                            h.open("GET", a, !0),
                            h.send(null)
                        } catch(m) {
                            n(a, k, m)
                        }
                    }
                }
                var e = ra,
                w = _[183],
                w = w + (F(w) + _[273]);
                e.firstxmlpath = null;
                e.currentxmlpath = null;
                e.swfpath = null;
                e.htmlpath = null;
                e.parsePath = p;
                e.DMcheck = function(a) {
                    var d;
                    if (Ya & 256 && (d = aa.domain) && vc) {
                        a = a.toLowerCase();
                        var b = a.indexOf("://");
                        if (0 < b) {
                            var b = b + 3,
                            e = a.indexOf("/", b);
                            if (0 < e) return a = a.slice(b, e),
                            b = a.indexOf(":"),
                            1 < b && (a = a.slice(0, b)),
                            a == d
                        } else return d == vc
                    }
                    return ! 0
                };
                var x = new
                function() {
                    var a, d, b;
                    this.srand = function(e, g) {
                        var h, c, f, n, k = [];
                        k.length = 256;
                        for (h = 0; 256 > h; h++) k[h] = h;
                        for (c = h = 0; 256 > h; h++) c = c + k[h] + e[h % g] & 255,
                        n = k[h],
                        k[h] = k[c],
                        k[c] = n;
                        for (f = c = h = 0; 256 > f; f++) h = h + 1 & 255,
                        c = c + k[h] & 255,
                        n = k[h],
                        k[h] = k[c],
                        k[c] = n;
                        a = k;
                        d = h;
                        b = c
                    };
                    this.flip = function(e, g, h) {
                        var c = [],
                        f,
                        n;
                        c.length = h;
                        var k = a,
                        q = d,
                        w = b;
                        for (f = 0; f < h; f++, g++) q = q + 1 & 255,
                        w = w + k[q] & 255,
                        c[f] = e[g] ^ a[k[q] + k[w] & 255],
                        n = k[q],
                        k[q] = k[w],
                        k[w] = n;
                        d = q;
                        b = w;
                        return c
                    }
                };
                e.loadimage = function(a, d, b) {
                    var e = Ja(1);
                    e.addEventListener("load",
                    function() {
                        d && d(e)
                    });
                    e.addEventListener(_[48],
                    function() {
                        b && b(null, !1)
                    },
                    !1);
                    e.addEventListener("abort",
                    function() {
                        b && b(null, !0)
                    },
                    !1);
                    e.src = a;
                    return e
                };
                e.loadfile = function(a, d, b) {
                    e.loadfile2(a, null, d, b)
                };
                e.loadxml = function(a, d, b) {
                    e.loadfile2(a, _[25], d, b, !0)
                };
                e.loadfile2 = function(a, d, b, e, g) {
                    g = !0 === g;
                    var h = {
                        errmsg: !0
                    };
                    h.rqurl = a;
                    a = p(a);
                    h.url = a;
                    k(a, d, g,
                    function(a, n, k) { ! 0 === g ? b(n, k) : (n = f(a, n, _[92] == d), h.data = n, null != n ? b && b(h) : e && e(h))
                    },
                    g ? e: function(d, b) {
                        e && e(h);
                        h.errmsg && la(3, a + _[80] + b + ")")
                    })
                };
                e.resolvecontentencryption = f;
                e.b64u8 = function(d) {
                    return g(a(d))
                };
                e.decodeLicense = function(a) {
                    return null
                }
            })();
            var T = {}; (function() {
                function a(d) {
                    var b, e, g = d.childNodes,
                    f;
                    e = g.length;
                    for (b = 0; b < e; b++) if (f = g.item(b)) switch (f.nodeType) {
                    case 1:
                        a(f);
                        break;
                    case 8:
                        d.removeChild(f),
                        b--,
                        e--
                    }
                }
                function d(a, d) {
                    var b, e, g = a.childNodes,
                    f = -1;
                    e = g.length;
                    if (1 <= e) for (b = 0; b < e; b++) if (F(g[b].nodeName) == d) {
                        f = b;
                        break
                    }
                    return 0 <= f ? g[f] : null
                }
                function p(d, e, g, f, n) {
                    var k, u, h, c = null,
                    K = null,
                    D, z;
                    z = 0;
                    var q, J = d.length,
                    C = new XMLSerializer,
                    Q = !1;
                    f || (Q = !0, f = [], n = [], m.xml.parsetime = Ta());
                    for (var A = 0; A < J; A++) if ((k = d[A]) && k.nodeName && "#text" != k.nodeName && (u = k.nodeName, u = F(u), _[129] != u)) {
                        u = null == e && _[46] == u ? null: e ? e + "." + u: u;
                        if (h = k.attributes) if (h.devices && 0 == b.checkSupport(h.devices.value)) continue;
                        else if (h["if"] && 0 == da.calc(null, h["if"].value)) continue;
                        q = (K = h && h.name ? h.name.value: null) ? !0 : !1;
                        if (g) {
                            if (_[462] == u && g & 16) continue;
                            if ((_[29] == u || "layer" == u) && g & 4) continue;
                            if (_[1] == u && g & 128) continue;
                            if (_[75] == u && g & 65536) continue;
                            if (g & 64 && K) if (_[29] == u || "layer" == u) {
                                if ((c = xa.getItem(K)) && c._pCD && c.keep) continue
                            } else if (_[1] == u && (c = Ua.getItem(K)) && c._pCD && c.keep) continue
                        }
                        if (u) if (q) {
                            if (_[14] == u || "data" == u || "scene" == u) {
                                a(k);
                                q = null;
                                if ((_[14] == u || "data" == u) && k.childNodes && 1 <= k.childNodes.length) for (c = 0; c < k.childNodes.length; c++) if (4 == k.childNodes[c].nodeType) {
                                    q = k.childNodes[c].nodeValue;
                                    break
                                }
                                null == q && (q = C.serializeToString(k), q = q.slice(q.indexOf(">") + 1, q.lastIndexOf("</")), _[14] == u && (q = q.split(_[497]).join('"').split(_[499]).join("'").split(_[139]).join(String.fromCharCode(160)).split("&amp;").join("&")));
                                I(u + "[" + K + _[61], q);
                                if (h) {
                                    var H;
                                    q = h.length;
                                    for (H = 0; H < q; H++) if (D = h[H], c = F(D.nodeName), D = D.value, "name" != c) {
                                        z = c.indexOf(".");
                                        if (0 < z) if (b.checkSupport(c.slice(z + 1))) c = c.slice(0, z);
                                        else continue;
                                        z = u + "[" + K + "]." + F(c);
                                        I(z, D)
                                    }
                                }
                                continue
                            }
                            u = u + "[" + K + "]";
                            if (!Uc(K, u)) continue;
                            I(u + ".name", K)
                        } else(K = U(u)) && K.isArray && !K.isDynArray && (K = "n" + String(K.count), u = u + "[" + K + "]", I(u + ".name", K));
                        if (h) {
                            var qa = "view" == u,
                            c = u ? U(u) : null,
                            K = null;
                            q = h.length;
                            c && (c._lateBinding && (K = c._lateBinding), (D = h.style) && (D = D.value) && null == K && (c.style = D, n.push(u), K = c._lateBinding = {}));
                            for (H = 0; H < q; H++) {
                                D = h[H];
                                c = F(D.nodeName);
                                D = D.value;
                                var ea = u ? u + ".": "";
                                if ("name" != c && "style" != c) {
                                    z = c.indexOf(".");
                                    if (0 < z) if (b.checkSupport(c.slice(z + 1))) c = c.slice(0, z).toLowerCase();
                                    else continue;
                                    z = ea + c;
                                    K ? K[c] = D: !D || _[13] != typeof D || "get:" != D.slice(0, 4) && "calc:" != D.slice(0, 5) ? (I(z, D), qa && I("xml." + z, D)) : (f.push(z), f.push(D))
                                }
                            }
                        }
                        k.childNodes && 0 < k.childNodes.length && p(k.childNodes, u, g, f, n)
                    }
                    if (Q) {
                        J = f.length;
                        for (A = 0; A < J; A += 2) I(f[A], f[A + 1]);
                        J = n.length;
                        for (A = 0; A < J; A++) if (u = n[A], da.assignstyle(u, null), c = U(u)) if (K = c._lateBinding) da.copyattributes(c, K),
                        c._lateBinding = null;
                        m.xml.parsetime = Ta() - m.xml.parsetime
                    }
                }
                function f(a, d) {
                    var b = null,
                    e, g;
                    g = a.length;
                    for (e = 0; e < g; e++) if (b = a[e], !b || !b.nodeName || _[14] != F(b.nodeName)) {
                        var k = b.attributes;
                        if (k) {
                            var n, h = k.length,
                            c;
                            for (n = 0; n < h; n++) {
                                var m = k[n];
                                c = F(m.nodeName);
                                var p = c.indexOf(".");
                                0 < p && (c = c.slice(0, p));
                                if (_[435] == c) {
                                    c = m.value;
                                    var p = c.split("|"),
                                    z,
                                    q;
                                    q = p.length;
                                    for (z = 0; z < q; z++) c = p[z],
                                    "" != c && 0 > c.indexOf("://") && 47 != c.charCodeAt(0) && (p[z] = d + c);
                                    m.value = p.join("|")
                                } else if (p = c.indexOf("url"), 0 == p || 0 < p && p == c.length - 3) if (c = m.value) p = c.indexOf(":"),
                                47 == c.charCodeAt(0) || 0 < p && ("//" == c.substr(p + 1, 2) || 0 <= _[94].indexOf(c.substr(0, p + 1))) || (c = d + c),
                                m.value = c
                            }
                        }
                        b.childNodes && 0 < b.childNodes.length && f(b.childNodes, d)
                    }
                }
                function g(a, d) {
                    var b = Gc(d),
                    e = b.lastIndexOf("/"),
                    g = b.lastIndexOf("\\");
                    g > e && (e = g);
                    0 < e && (b = b.slice(0, e + 1), f(a, b))
                }
                function n(a, b) {
                    var e = d(a, _[374]);
                    if (e) {
                        var g = "",
                        f, k;
                        k = e.childNodes.length;
                        for (f = 0; f < k; f++) g += e.childNodes[f].nodeValue;
                        if (e = ra.resolvecontentencryption(b, g)) return (e = (new DOMParser).parseFromString(e, _[25])) && e.documentElement && _[22] == e.documentElement.nodeName ? (la(3, b + _[21]), null) : e;
                        Ea(b + _[32]);
                        return null
                    }
                    return Ya & 32 ? (Ea(b + _[32]), null) : a
                }
                function k(a, d) {
                    var b, e;
                    switch (a.nodeType) {
                    case 1:
                        var g = T.xmlDoc.createElement(a.nodeName);
                        if (a.attributes && 0 < a.attributes.length) for (b = 0, e = a.attributes.length; b < e;) g.setAttribute(a.attributes[b].nodeName, a.getAttribute(a.attributes[b++].nodeName));
                        if (d && a.childNodes && 0 < a.childNodes.length) for (b = 0, e = a.childNodes.length; b < e;) g.appendChild(k(a.childNodes[b++], d));
                        return g;
                    case 3:
                    case 4:
                    case 8:
                        return T.xmlDoc.createTextNode(a.nodeValue)
                    }
                }
                function e(a, d) {
                    var f, r, m;
                    if (null != T.xmlIncludeNode) {
                        m = Gc(a.url);
                        if ((r = a.responseXML) && r.documentElement && _[22] == r.documentElement.nodeName) {
                            Ea(m + _[21]);
                            return
                        }
                        r = n(r, a.url);
                        if (null == r) return;
                        g(r.childNodes, m);
                        f = r.childNodes;
                        var l = T.xmlIncludeNode.parentNode;
                        if (null != l.parentNode) {
                            var u = 0;
                            m = f.length;
                            if (1 < m) for (r = 0; r < m; r++) if (_[46] == F(f[r].nodeName)) {
                                u = r;
                                break
                            }
                            r = null;
                            r = void 0 === T.xmlDoc.importNode ? k(f[u], !0) : T.xmlDoc.importNode(f[u], !0);
                            l.insertBefore(r, T.xmlIncludeNode);
                            l.removeChild(T.xmlIncludeNode)
                        } else T.xmlDoc = r;
                        T.xmlAllNodes = [];
                        T.addNodes(T.xmlDoc.childNodes);
                        T.xmlIncludeNode = null
                    }
                    l = !1;
                    m = T.xmlAllNodes.length;
                    for (r = 0; r < m; r++) if (f = T.xmlAllNodes[r], u = null, null != f.nodeName) {
                        u = F(f.nodeName);
                        if (_[129] == u) {
                            var u = f.attributes,
                            h, c = u.length,
                            p = !1;
                            for (h = 0; h < c; h++) {
                                var D = u[h];
                                _[483] == D.nodeName ? 0 == b.checkSupport(D.value) && (p = !0) : "if" == D.nodeName && 0 == da.calc(null, D.value) && (p = !0)
                            }
                            if (0 == p) for (h = 0; h < c; h++) if (D = u[h], "url" == F(D.nodeName)) {
                                l = !0;
                                p = D.value;
                                D = p.indexOf(":");
                                0 < D && 0 <= _[94].indexOf(p.substr(0, D + 1)) && (p = da.calc(null, p.substr(D + 1)));
                                T.xmlIncludeNode = f;
                                var z = ra.parsePath(p);
                                z ? ra.loadxml(z,
                                function(a, c) {
                                    a ? e({
                                        url: z,
                                        responseXML: a
                                    },
                                    d) : Ea(z + " - " + (200 == c ? _[208] : _[184]))
                                }) : d()
                            }
                        }
                        if (l) break
                    }
                    0 == l && d()
                }
                T.resolvexmlencryption = n;
                T.resolvexmlincludes = function(a, d) {
                    var b = a.childNodes;
                    T.xmlDoc = a;
                    T.xmlAllNodes = [];
                    T.addNodes(b);
                    g(b, m.xml.url);
                    T.xmlIncludeNode = null;
                    e(null, d)
                };
                T.parsexml = p;
                T.xmlDoc = null;
                T.xmlAllNodes = null;
                T.xmlIncludeNode = null;
                T.addNodes = function(a) {
                    var d, b, e;
                    e = a.length;
                    for (b = 0; b < e; b++)(d = a[b]) && d.nodeName && _[14] != F(d.nodeName) && (T.xmlAllNodes.push(d), d.childNodes && 0 < d.childNodes.length && T.addNodes(d.childNodes))
                };
                T.findxmlnode = d
            })();
            var ac = {}; (function() {
                var a = ac;
                a.linear = function(a, b, f) {
                    return f * a + b
                };
                a.easeinquad = function(a, b, f) {
                    return f * a * a + b
                };
                a.easeoutquad = function(a, b, f) {
                    return - f * a * (a - 2) + b
                };
                a[_[5]] = a.easeoutquad;
                a.easeinoutquad = function(a, b, f) {
                    return (1 > (a /= .5) ? f / 2 * a * a: -f / 2 * (--a * (a - 2) - 1)) + b
                };
                a.easeinback = function(a, b, f) {
                    return f * a * a * (2.70158 * a - 1.70158) + b
                };
                a.easeoutback = function(a, b, f) {
                    return f * (--a * a * (2.70158 * a + 1.70158) + 1) + b
                };
                a.easeinoutback = function(a, b, f) {
                    var g = 1.70158;
                    return 1 > (a *= 2) ? f / 2 * a * a * (((g *= 1.525) + 1) * a - g) + b: f / 2 * ((a -= 2) * a * (((g *= 1.525) + 1) * a + g) + 2) + b
                };
                a.easeincubic = function(a, b, f) {
                    return f * a * a * a + b
                };
                a.easeoutcubic = function(a, b, f) {
                    return f * (--a * a * a + 1) + b
                };
                a.easeinquart = function(a, b, f) {
                    return f * a * a * a * a + b
                };
                a.easeoutquart = function(a, b, f) {
                    return - f * ((a = a / 1 - 1) * a * a * a - 1) + b
                };
                a.easeinquint = function(a, b, f) {
                    return f * a * a * a * a * a + b
                };
                a.easeoutquint = function(a, b, f) {
                    return f * ((a = a / 1 - 1) * a * a * a * a + 1) + b
                };
                a.easeinsine = function(a, b, f) {
                    return - f * Math.cos(Ga / 2 * a) + f + b
                };
                a.easeoutsine = function(a, b, f) {
                    return f * Math.sin(Ga / 2 * a) + b
                };
                a.easeinexpo = function(a, b, f) {
                    return 0 == a ? b: f * Math.pow(2, 10 * (a - 1)) + b - .001 * f
                };
                a.easeoutexpo = function(a, b, f) {
                    return 1 == a ? b + f: 1.001 * f * ( - Math.pow(2, -10 * a) + 1) + b
                };
                a.easeincirc = function(a, b, f) {
                    return - f * (Math.sqrt(1 - a * a) - 1) + b
                };
                a.easeoutcirc = function(a, b, f) {
                    return f * Math.sqrt(1 - (a = a / 1 - 1) * a) + b
                };
                a.easeoutbounce = function(a, b, f) {
                    return a < 1 / 2.75 ? 7.5625 * f * a * a + b: a < 2 / 2.75 ? f * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + b: a < 2.5 / 2.75 ? f * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + b: f * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + b
                };
                a.easeinbounce = function(b, m, f) {
                    return f - a.easeoutbounce(1 - b, 0, f) + m
                };
                a.getTweenfu = function(b) {
                    b = F(b);
                    "" == b || "null" == b ? b = _[56] : void 0 === a[b] && (b = _[56]);
                    return a[b]
                }
            })();
            var da = {}; (function() {
                function a(a, b, c) {
                    var d, h = a.length;
                    c = 1 != c;
                    for (d = 0; d < h; d++) {
                        var e = "" + a[d],
                        g = e.toLowerCase();
                        c && "null" == g ? a[d] = null: 41 == e.charCodeAt(e.length - 1) && (g = g.slice(0, 4), "get(" == g ? a[d] = U(Ha(e.slice(4, e.length - 1)), b) : "calc" == g && 40 == e.charCodeAt(4) && (a[d] = U(e, b)))
                    }
                }
                function b(a, c) {
                    var d, e, h, g = 0,
                    f = 0,
                    k = 0;
                    h = "";
                    d = 0;
                    for (e = a.length; d < e;) {
                        h = a.charCodeAt(d);
                        if (! (32 >= h)) if (34 == h) 0 == k ? k = 1 : 1 == k && (k = 0);
                        else if (39 == h) 0 == k ? k = 2 : 2 == k && (k = 0);
                        else if (0 == k) if (91 == h) 0 == f && (f = d + 1),
                        g++;
                        else if (93 == h && 0 < g && (g--, 0 == g)) {
                            if (h = oc(a, f, d, c)) a = a.slice(0, f) + h + a.slice(d),
                            d = f + h.length + 1,
                            e = a.length;
                            f = 0
                        }
                        d++
                    }
                    return a
                }
                function E(a, b) {
                    var c = "",
                    d, h, e, g, f;
                    e = a.length;
                    f = b.length;
                    for (h = 0; h < e; h++) d = a.charAt(h),
                    "%" == d ? (h++, d = a.charCodeAt(h) - 48, 0 <= d && 9 >= d ? (h + 1 < e && (g = a.charCodeAt(h + 1) - 48, 0 <= g && 9 >= g && (h++, d = 10 * d + g)), c = d < f ? c + ("" + b[d]) : c + "null") : c = -11 == d ? c + "%": c + ("%" + a.charAt(h))) : c += d;
                    return c
                }
                function f(a, b, c, d) {
                    c = Array.prototype.slice.call(c);
                    c.splice(0, 0, a);
                    b = E(b, c);
                    h.callaction(b, d, !0)
                }
                function g(a, b, c) {
                    var krpano = m;
                    var caller = c;
                    var args = b;
                    var resolve = y;
                    var actions = h;
                    try {
                        eval(a, c)
                    } catch(d) {
                        la(3, b[0] + " - " + d)
                    }
                }
                function n(a) {
                    var b = c,
                    d = b.length,
                    h;
                    for (h = 0; h < d; h++) if (b[h].id == a) {
                        b.splice(h, 1);
                        break
                    }
                }
                function k(a) {
                    var b = a.length;
                    if (2 == b || 3 == b) {
                        var c = U(a[b - 2], h.actioncaller),
                        d = U(a[b - 1], h.actioncaller);
                        null == c && (c = a[b - 2]);
                        null == d && (d = a[b - 1]);
                        return [a[0], parseFloat(c), parseFloat(d)]
                    }
                    return null
                }
                function e(a, b, c) {
                    var d = 1 == b.length ? U(b[0], c) : b[1],
                    d = 0 == a ? escape(d) : unescape(d);
                    I(b[0], d, !1, c, !0)
                }
                function w(a) {
                    if (1 == a.length) return a[0];
                    var b, c = null,
                    d = null,
                    h = null,
                    c = !1;
                    for (b = 0; b < a.length; b++) if (c = "" + a[b], 0 < c.length && 0 <= _[442].indexOf(c)) {
                        if (0 == b || b >= a.length - 1) throw _[33];
                        d = a[b - 1];
                        h = a[b + 1];
                        switch (c) {
                        case "===":
                        case "==":
                            c = d == h;
                            break;
                        case "!==":
                        case "!=":
                            c = d != h;
                            break;
                        case "<":
                            c = d < h;
                            break;
                        case "<=":
                            c = d <= h;
                            break;
                        case ">":
                            c = d > h;
                            break;
                        case ">=":
                            c = d >= h;
                            break;
                        default:
                            throw _[33];
                        }
                        a.splice(b - 1, 3, c);
                        b -= 2
                    }
                    if (1 == a.length) return a[0];
                    for (b = 0; b < a.length; b++) if (c = a[b], "&&" == c || "||" == c) {
                        if (0 == b || b >= a.length - 1) throw _[33];
                        d = a[b - 1];
                        h = a[b + 1];
                        c = "&&" == c ? d && h: d || h;
                        a.splice(b - 1, 3, c);
                        b -= 2
                    }
                    if (5 == a.length && "?" == a[1] && ":" == a[3]) return a[0] ? a[2] : a[4];
                    if (1 < a.length) throw _[33];
                    return a[0]
                }
                function x(a) {
                    var b = void 0,
                    b = F(a),
                    c = b.charCodeAt(0),
                    d,
                    e = 0,
                    g = !1;
                    64 == c && (g = !0, a = a.slice(1), b = b.slice(1), c = b.charCodeAt(0));
                    if (39 == c || 34 == c) return Ha(a);
                    if (33 == c || 43 == c || 45 == c) e = c,
                    a = a.slice(1),
                    b = b.slice(1),
                    c = b.charCodeAt(0);
                    d = b.charCodeAt(b.length - 1);
                    40 == c && 41 == d ? b = v(a.slice(1, -1)) : 37 == d ? b = a: (b = "null" != b ? U(a, h.actioncaller, !0) : null, void 0 === b ? (c = Number(a), isNaN(c) || isNaN(parseFloat(a)) ? g && (b = a) : b = c) : _[13] == typeof b && (a = F(b), "true" == a ? b = !0 : _[31] == a ? b = !1 : "null" == a ? b = null: (a = Number(b), isNaN(a) || (b = a))));
                    33 == e ? b = !b: 45 == e && (b = -b);
                    return b
                }
                function v(a) {
                    var b;
                    if ("" == a || null === a) return a;
                    try {
                        var c, d = a.length,
                        h = 0,
                        e = 0,
                        g = !1,
                        f = !1,
                        k = 0,
                        n = 0,
                        t = 0,
                        G = !1,
                        q = [],
                        l = 0,
                        r = 0;
                        for (c = 0; c < d; c++) if (r = a.charCodeAt(c), 0 == G && 32 >= r) 0 < e && (q[l++] = a.substr(h, e), e = 0),
                        g = !1;
                        else if (0 == G && (61 == r || 33 == r && 61 == a.charCodeAt(c + 1) || 62 == r || 60 == r)) 0 == g && (0 < e ? (q[l++] = a.substr(h, e), e = 0) : 0 == l && 0 == m.strict && (q[l++] = ""), g = !0, f = !1, h = c),
                        e++;
                        else if (0 != G || 43 != r && 45 != r && 42 != r && 47 != r && 94 != r && 63 != r && 58 != r) {
                            if (0 == t) if (91 == r) k++,
                            G = !0;
                            else if (93 == r) k--,
                            0 == k && 0 == n && (G = !1);
                            else if (40 == r) n++,
                            G = !0;
                            else if (41 == r) n--,
                            0 == n && 0 == k && (G = !1);
                            else {
                                if (39 == r || 34 == r) t = r,
                                G = !0
                            } else r == t && (t = 0, 0 == k && 0 == n && (G = !1));
                            if (g || f) 0 < e && (q[l++] = a.substr(h, e), e = 0),
                            f = g = !1,
                            h = c;
                            0 == e && (h = c);
                            e++
                        } else 0 < e && (q[l++] = a.substr(h, e)),
                        g = !1,
                        f = !0,
                        h = c,
                        e = 1;
                        0 < e && (q[l++] = a.substr(h, e));
                        2 == l && g && 0 == m.strict && (q[l++] = "");
                        if (0 == m.strict) {
                            var u = q.length;
                            if (! (3 > u)) {
                                var p, v;
                                for (p = 1; p < u - 1; p++) if (v = q[p], "==" == v || "!=" == v) {
                                    q[p - 1] = "@" + q[p - 1];
                                    v = q[p + 1];
                                    if ("+" == v || "-" == v) for (p++, v = q[p + 1];
                                    "+" == v || "-" == v;) p++,
                                    v = q[p + 1];
                                    q[p + 1] = "@" + v
                                }
                            }
                        }
                        var J = q.length,
                        z, y, D;
                        if (1 == J) q[0] = x(q[0]);
                        else for (z = 0; z < J; z++) if (y = q[z], !(0 <= "<=>=!===+-*/^||&&?:".indexOf(y))) {
                            switch (y) {
                            case "AND":
                                D = "&&";
                                break;
                            case "OR":
                                D = "||";
                                break;
                            case "GT":
                                D = ">";
                                break;
                            case "GE":
                                D = ">=";
                                break;
                            case "LT":
                                D = "<";
                                break;
                            case "LE":
                                D = "<=";
                                break;
                            case "EQ":
                                D = "==";
                                break;
                            case "LSHT":
                                D = "<<";
                                break;
                            case "RSHT":
                                D = ">>";
                                break;
                            case "BAND":
                                D = "~&";
                                break;
                            case "BOR":
                                D = "~|";
                                break;
                            default:
                                D = x(y)
                            }
                            q[z] = D
                        }
                        var F = q.length;
                        if (! (2 > F)) {
                            var E, K;
                            c = null;
                            for (E = 0; E < q.length; E++) if (c = q[E], "+" == c || "-" == c) if (0 == E || 0 <= ".<.<<.<=.==.===.=>.>.>>.!=.!==.+.-.*./.^.&&.||.?.:.~|.~&.".indexOf("." + q[E - 1] + ".")) {
                                K = 45 == c.charCodeAt(0) ? -1 : 1;
                                F = 1;
                                for (c = "" + q[E + F];
                                "+" == c || "-" == c;) K *= 45 == c.charCodeAt(0) ? -1 : 1,
                                F++,
                                c = "" + q[E + F];
                                c && 40 == c.charCodeAt(0) && (c = x(c));
                                c = c && 37 == c.charCodeAt(c.length - 1) ? parseFloat(c) * K + "%": Number(c) * K;
                                q.splice(E, 1 + F, c); --E
                            }
                            for (E = 1; E < q.length - 1; E++) c = q[E],
                            "*" == c ? (q.splice(E - 1, 3, Number(q[E - 1]) * Number(q[E + 1])), E -= 3) : "/" == c ? (q.splice(E - 1, 3, Number(q[E - 1]) / Number(q[E + 1])), E -= 3) : "^" == c ? (q.splice(E - 1, 3, Math.pow(Number(q[E - 1]), Number(q[E + 1]))), E -= 3) : "<<" == c ? (q.splice(E - 1, 3, Number(q[E - 1]) << Number(q[E + 1])), E -= 3) : ">>" == c ? (q.splice(E - 1, 3, Number(q[E - 1]) >> Number(q[E + 1])), E -= 3) : "~&" == c ? (q.splice(E - 1, 3, Number(q[E - 1]) & Number(q[E + 1])), E -= 3) : "~|" == c && (q.splice(E - 1, 3, Number(q[E - 1]) | Number(q[E + 1])), E -= 3);
                            for (E = 1; E < q.length - 1; E++) c = q[E],
                            "+" == c ? (q.splice(E - 1, 3, q[E - 1] + q[E + 1]), E -= 3) : "-" == c && (q.splice(E - 1, 3, Number(q[E - 1]) - Number(q[E + 1])), E -= 3)
                        }
                        b = w(q)
                    } catch(L) {
                        la(3, L + ": " + a)
                    }
                    return b
                }
                function r(a) {
                    var b = a.position;
                    1 == a.motionmode ? (b *= a.Tmax, b <= a.T1 ? b *= a.accelspeed / 2 * b: b > a.T1 && b <= a.T1 + a.T2 ? b = a.S1 + (b - a.T1) * a.Vmax: (b -= a.T1 + a.T2, b = a.Vmax * b + a.breakspeed / 2 * b * b + a.S1 + a.S2), b = 0 != a.Smax ? b / a.Smax: 1) : 2 == a.motionmode && (b = a.tweenfu(b, 0, 1));
                    p.hlookat = a.startH + b * (a.destH - a.startH);
                    p.vlookat = a.startV + b * (a.destV - a.startV);
                    p.fov = a.startF + b * (a.destF - a.startF)
                }
                function y(a, b) {
                    var c = U(a, b);
                    null == c && (c = a);
                    return c
                }
                function l(a) {
                    var b = a.waitfor;
                    "load" == b ? Xa.isLoading() && (a.position = 0) : _[73] == b && Xa.isBlending() && (a.position = 0)
                }
                function u(a) {
                    var b = a.varname,
                    c = parseFloat(a.startval),
                    d = parseFloat(a.endval),
                    e = null != a.startval ? 0 < String(a.startval).indexOf("%") : !1,
                    g = null != a.endval ? 0 < String(a.endval).indexOf("%") : !1;
                    g ? e || (c = 0) : e && 0 == d && (g = !0);
                    var e = 0,
                    e = a.position,
                    f = a.tweenmap;
                    0 <= b.indexOf(_[47], b.lastIndexOf(".") + 1) ? (c = parseInt(a.startval), d = parseInt(a.endval), 1 <= e ? e = d: (e = f(e, 0, 1), e = Math.min(Math.max((c >> 24) + e * ((d >> 24) - (c >> 24)), 0), 255) << 24 | Math.min(Math.max((c >> 16 & 255) + e * ((d >> 16 & 255) - (c >> 16 & 255)), 0), 255) << 16 | Math.min(Math.max((c >> 8 & 255) + e * ((d >> 8 & 255) - (c >> 8 & 255)), 0), 255) << 8 | Math.min(Math.max((c & 255) + e * ((d & 255) - (c & 255)), 0), 255))) : e = 1 <= e ? d: f(e, c, d - c);
                    I(b, g ? e + "%": e, !0, a.actioncaller);
                    null != a.updatefu && h.callaction(a.updatefu, a.actioncaller)
                }
                var h = da;
                h.busy = !1;
                h.blocked = !1;
                h.queue = [];
                h.actioncaller = null;
                var c = [],
                K = [],
                D = null,
                z = 0,
                q = function() {
                    this.id = null;
                    this.blocking = !1;
                    this.position = this.maxruntime = this.starttime = 0;
                    this.updatefu = this.actioncaller = this.donecall = this.process = null
                };
                h.copyattributes = function(a, b) {
                    for (var c in b) {
                        var d = F(c);
                        if ("name" != d && "index" != d && "_type" != d) {
                            var e = b[c];
                            if (_[11] !== typeof e) {
                                if (e && _[13] == typeof e) {
                                    var h = e.slice(0, 4);
                                    "get:" == h ? e = U(e.slice(4)) : "calc" == h && 58 == e.charCodeAt(4) && (e = v(e.slice(5)))
                                }
                                a[d] = _[67] == typeof a[d] ? pa(e) : e
                            }
                        }
                    }
                };
                h.assignstyle = function(a, b) {
                    var c = U(a);
                    if (c && (null == b && (b = c.style), b)) {
                        c.style = b;
                        var d = b.split("|"),
                        e,
                        g;
                        g = d.length;
                        for (e = 0; e < g; e++) {
                            var f = U(_[515] + d[e] + "]");
                            f ? h.copyattributes(c, f) : la(3, a + _[198] + d[e])
                        }
                    }
                };
                h.isblocked = function() {
                    if (h.blocked) {
                        var a = D;
                        if (a) D = null,
                        h.stopall(),
                        "break" != F(a) && h.callaction(a),
                        h.processactions();
                        else return ! 0
                    }
                    return ! 1
                };
                h.actions_autorun = function(a, b) {
                    var c = m.action.getArray(),
                    d = [],
                    e,
                    g,
                    f = null;
                    g = c.length;
                    for (e = 0; e < g; e++)(f = c[e]) && f.autorun == a && !f._arDone && (f._arDone = !0, d.push(f));
                    g = d.length;
                    if (0 < g) {
                        c = "";
                        for (e = 0; e < g; e++) f = d[e],
                        c += _[452] + f.name + ");";
                        h.callaction(c, null, b);
                        h.processactions()
                    }
                };
                h.callwith = function(a, b) {
                    var c = U(a, h.actioncaller);
                    if (c) {
                        var d = c._type;
                        _[29] != d && _[1] != d || h.callaction(b, c)
                    }
                };
                h.callaction = function(a, b, c) {
                    if (a && "null" != a && "" != a) {
                        var d = typeof a;
                        if (_[11] === d) a();
                        else if (_[144] !== d && (a = Gb(a, b))) {
                            var d = a.length,
                            e = 0 < h.queue.length,
                            g = !1;
                            for (b = 0; b < d; b++) {
                                var f = a[b];
                                _[314] == f.cmd && (g = !0);
                                f.breakable = g;
                                1 == c ? h.queue.splice(b, 0, f) : h.queue.push(f)
                            }
                            0 == e && h.processactions()
                        }
                    }
                };
                var J = !1;
                h.processactions = function() {
                    if (!J) {
                        J = !0;
                        for (var b = null,
                        c = null,
                        d = null,
                        e = null,
                        f = 0,
                        q = h.queue; null != q && 0 < q.length;) {
                            if (h.busy || h.blocked) {
                                J = !1;
                                return
                            }
                            f++;
                            if (1E5 < f) {
                                la(2, _[89]);
                                q.length = 0;
                                break
                            }
                            b = q.shift();
                            c = String(b.cmd);
                            d = b.args;
                            b = b.caller;
                            h.actioncaller = b;
                            if (! (b && b._busyonloaded && b._destroyed) && "//" != c.slice(0, 2)) if ("call" == c && (c = F(d.shift())), a(d, b, "set" == c), void 0 !== h[c]) h[c].apply(h[c], d);
                            else if (b && void 0 !== b[c]) e = b[c],
                            _[11] === typeof e ? e.apply(e, d) : h.callaction(b[c], b, !0);
                            else {
                                if (_[14] == c || "call" == c) c = F(d.shift());
                                e = null;
                                if (null != (e = U(c))) {
                                    var k = typeof e;
                                    _[11] === k ? e.apply(e, d) : _[144] === k ? la(2, _[87] + id(c)) : _[13] === typeof e && (d.splice(0, 0, c), e = E(e, d), h.callaction(e, b, !0))
                                } else if (k = U(_[453] + c + "]")) {
                                    if (e = k.content) d.splice(0, 0, c),
                                    _[372] === F(k.type) ? g(e, d, b) : (e = E(e, d), h.callaction(e, b, !0))
                                } else la(2, _[87] + id(c))
                            }
                        }
                        h.blocked || (D = null);
                        h.actioncaller = null;
                        J = !1
                    }
                };
                h.processAnimations = function(a) {
                    var b = !1,
                    d = c,
                    e = d.length,
                    g, f = Ta();
                    a = 1 == a;
                    for (g = 0; g < e; g++) {
                        var q = d[g];
                        if (q) {
                            var k = 0 < q.maxruntime ? (f - q.starttime) / 1E3 / q.maxruntime: 1;
                            isNaN(k) && (k = 1);
                            1 < k && (k = 1);
                            q.position = k;
                            null != q.process && (b = !0, q.process(q), k = q.position);
                            if (1 <= k || a) d.splice(g, 1),
                            e--,
                            g--,
                            q.blocking ? (h.blocked = !1, h.processactions()) : q.donecall && 0 == a && h.callaction(q.donecall, q.actioncaller)
                        }
                    }
                    h.blocked && (b = !1);
                    return b
                };
                h.fromcharcode = function() {
                    var a = arguments;
                    2 == a.length && I(a[0], String.fromCharCode(y(a[1], h.actioncaller)), !1, h.actioncaller)
                };
                h.stopmovements = function() {
                    Pa.stopFrictions(4)
                };
                h.stopall = function() {
                    var a, b, d = h.queue;
                    b = d.length;
                    for (a = 0; a < b; a++) {
                        var e = d[a];
                        e && e.breakable && (e.cmd = "//")
                    }
                    c = [];
                    h.blocked = !1
                };
                h.breakall = function() {
                    h.processAnimations(!0)
                };
                h.oninterrupt = function(a) {
                    D = a
                };
                h.delayedcall = function() {
                    var a = arguments,
                    b = a.length,
                    d = 0;
                    3 == b && (d++, b--);
                    2 == b && (b = new q, b.maxruntime = Number(a[d]), b.donecall = a[d + 1], b.starttime = Ta(), b.actioncaller = h.actioncaller, b.id = 0 < d ? "ID" + F(a[0]) : "DC" + ++z, n(b.id), c.push(b))
                };
                h.stopdelayedcall = function(a) {
                    n("ID" + F(a))
                };
                h.set = function() {
                    var a = arguments;
                    2 == a.length && I(a[0], a[1], !1, h.actioncaller)
                };
                h.copy = function() {
                    var a = arguments;
                    if (2 == a.length) {
                        var b = U(a[1], h.actioncaller);
                        I(a[0], void 0 === b ? null: b, !1, h.actioncaller)
                    }
                };
                h.push = function() {
                    var a = arguments;
                    1 == a.length && K.push(U(a[0], h.actioncaller))
                };
                h.pop = function() {
                    var a = arguments;
                    1 == a.length && I(a[0], K.pop(), !1, h.actioncaller)
                };
                h[_[508]] = function() {
                    var a = arguments,
                    b = a.length,
                    c = a[0],
                    d = F(U(c, h.actioncaller));
                    if (1 == b) I(c, !pa(d), !0, h.actioncaller);
                    else if (3 <= b) {
                        var e;
                        b--;
                        for (e = 1; e <= b; e++) {
                            var g = F(a[e]),
                            f = !1;
                            isNaN(Number(d)) || isNaN(Number(g)) ? d == g && (f = !0) : Number(d) == Number(g) && (f = !0);
                            if (f) {
                                e++;
                                e > b && (e = 1);
                                I(c, a[e], !0, h.actioncaller);
                                break
                            }
                        }
                    }
                };
                h.roundval = function() {
                    var a = arguments;
                    if (1 <= a.length) {
                        var b = Number(U(a[0], h.actioncaller)),
                        c = 2 == a.length ? parseInt(a[1]) : 0,
                        b = 0 == c ? Math.round(b).toString() : b.toFixed(c);
                        I(a[0], b, !1, h.actioncaller, !0)
                    }
                };
                h.tohex = function() {
                    var a = arguments,
                    b = a.length;
                    if (0 < b) {
                        var c = parseInt(U(a[0], h.actioncaller)).toString(16).toUpperCase();
                        2 < b && (c = (_[419] + c).slice( - parseInt(a[2])));
                        1 < b && (c = a[1] + c);
                        I(a[0], c, !1, h.actioncaller, !0)
                    }
                };
                h.tolower = function() {
                    var a = arguments;
                    1 == a.length && I(a[0], F(U(a[0], h.actioncaller)), !1, h.actioncaller, !0)
                };
                h.toupper = function() {
                    var a = arguments;
                    1 == a.length && I(a[0], ("" + U(a[0], h.actioncaller)).toUpperCase(), !1, h.actioncaller, !0)
                };
                h.inc = function() {
                    var a = arguments,
                    b = a.length;
                    if (1 <= b) {
                        var c = Number(U(a[0], h.actioncaller)) + (1 < b ? Number(a[1]) : 1);
                        3 < b && c > Number(a[2]) && (c = Number(a[3]));
                        I(a[0], c, !0, h.actioncaller)
                    }
                };
                h.dec = function() {
                    var a = arguments,
                    b = a.length;
                    if (1 <= b) {
                        var c = Number(U(a[0], h.actioncaller)) - (1 < b ? Number(a[1]) : 1);
                        3 < b && c < Number(a[2]) && (c = Number(a[3]));
                        I(a[0], c, !0, h.actioncaller)
                    }
                };
                h.add = function() {
                    var a = k(arguments);
                    a && I(a[0], a[1] + a[2], !1, h.actioncaller)
                };
                h.sub = function() {
                    var a = k(arguments);
                    a && I(a[0], a[1] - a[2], !1, h.actioncaller)
                };
                h.mul = function() {
                    var a = k(arguments);
                    a && I(a[0], a[1] * a[2], !1, h.actioncaller)
                };
                h.div = function() {
                    var a = k(arguments);
                    a && I(a[0], a[1] / a[2], !1, h.actioncaller)
                };
                h.mod = function() {
                    var a = k(arguments);
                    if (a) {
                        var b = a[1],
                        c = b | 0,
                        b = b + ( - c + c % (a[2] | 0));
                        I(a[0], b, !1, h.actioncaller)
                    }
                };
                h.pow = function() {
                    var a = k(arguments);
                    a && I(a[0], Math.pow(a[1], a[2]), !1, h.actioncaller)
                };
                h.clamp = function() {
                    var a = arguments;
                    if (3 == a.length) {
                        var b = h.actioncaller,
                        c = Number(U(a[0], b)),
                        d = Number(a[1]),
                        e = Number(a[2]);
                        c < d && (c = d);
                        c > e && (c = e);
                        I(a[0], c, !1, b)
                    }
                };
                h.remapfovtype = function() {
                    var a = arguments,
                    b = a.length;
                    if (3 == b || 5 == b) {
                        var c = h.actioncaller,
                        d = Number(U(a[0], c)),
                        e = 3 == b ? m.area.pixelwidth: Number(U(a[3], c)),
                        b = 3 == b ? m.area.pixelheight: Number(U(a[4], c)),
                        d = p.fovRemap(d, a[1], a[2], e, b);
                        I(a[0], d, !1, c)
                    }
                };
                h.screentosphere = function() {
                    var a = arguments;
                    if (4 == a.length) {
                        var b = h.actioncaller,
                        c = p.screentosphere(Number(U(a[0], b)), Number(U(a[1], b)));
                        I(a[2], c.x, !1, b);
                        I(a[3], c.y, !1, b)
                    }
                };
                h.spheretoscreen = function() {
                    var a = arguments;
                    if (4 == a.length) {
                        var b = h.actioncaller,
                        c = p.spheretoscreen(Number(U(a[0], b)), Number(U(a[1], b)));
                        I(a[2], c.x, !1, b);
                        I(a[3], c.y, !1, b)
                    }
                };
                h.screentolayer = function() {
                    var a = arguments;
                    if (5 == a.length) {
                        var b = h.actioncaller,
                        c = xa.getItem(a[0]);
                        if (c) {
                            var d = Number(U(a[1], b)),
                            e = Number(U(a[2], b)),
                            g = tc,
                            f = tc,
                            q = c.sprite;
                            if (q) {
                                var k = X,
                                f = V.viewerlayer.getBoundingClientRect(),
                                n = q.getBoundingClientRect(),
                                g = d * k - (n.left - f.left + q.clientLeft + q.scrollLeft),
                                f = e * k - (n.top - f.top + q.clientTop + q.scrollTop);
                                c.scalechildren && (k = 1);
                                g /= c._finalxscale * k;
                                f /= c._finalyscale * k
                            }
                            I(a[3], g, !1, b);
                            I(a[4], f, !1, b)
                        }
                    }
                };
                h.layertoscreen = function() {
                    var a = arguments;
                    if (5 == a.length) {
                        var b = h.actioncaller,
                        c = xa.getItem(a[0]);
                        if (c) {
                            var d = Number(U(a[1], b)),
                            e = Number(U(a[2], b)),
                            g = tc,
                            f = tc,
                            q = c.sprite;
                            if (q) var f = X,
                            k = c.scalechildren ? f: 1,
                            n = V.viewerlayer.getBoundingClientRect(),
                            t = q.getBoundingClientRect(),
                            g = d * c._finalxscale / k + (t.left - n.left + q.clientLeft + q.scrollLeft) / f,
                            f = e * c._finalyscale / k + (t.top - n.top + q.clientTop + q.scrollTop) / f;
                            I(a[3], g, !1, b);
                            I(a[4], f, !1, b)
                        }
                    }
                };
                h.escape = function() {
                    e(0, arguments, h.actioncaller)
                };
                h.unescape = function() {
                    e(1, arguments, h.actioncaller)
                };
                h.txtadd = function() {
                    var a = arguments,
                    b, c = a.length,
                    d = 2 == c ? String(U(a[0], h.actioncaller)) : "";
                    "null" == d && (d = "");
                    for (b = 1; b < c; b++) d += a[b];
                    I(a[0], d, !1, h.actioncaller, !0)
                };
                h.subtxt = function() {
                    var a = arguments,
                    b = a.length;
                    if (2 <= b) {
                        var c = U(a[1], h.actioncaller),
                        c = null == c ? String(a[1]) : String(c),
                        c = c.substr(2 < b ? Number(a[2]) : 0, 3 < b ? Number(a[3]) : void 0);
                        I(a[0], c, !1, h.actioncaller, !0)
                    }
                };
                h.indexoftxt = function() {
                    var a = arguments,
                    b = a.length;
                    3 <= b && (b = String(a[1]).indexOf(String(a[2]), 3 < b ? Number(a[3]) : 0), I(a[0], b, !1, h.actioncaller, !0))
                };
                h.txtreplace = function() {
                    var a = arguments,
                    b = a.length;
                    if (3 == b || 4 == b) {
                        var b = 3 == b ? 0 : 1,
                        c = U(a[b], h.actioncaller);
                        if (c) var d = a[b + 2],
                        c = c.split(a[b + 1]).join(d);
                        I(a[0], c, !1, h.actioncaller, !0)
                    }
                };
                h.txtsplit = function() {
                    var a = arguments,
                    b = a.length;
                    if (3 <= b) {
                        var c = ("" + y(a[0], h.actioncaller)).split("" + a[1]),
                        d;
                        if (3 == b) for (d = 0; d < c.length; d++) I(a[2] + "[" + d + _[455], c[d], !1, h.actioncaller, !0);
                        else for (d = 2; d < b; d++) I(a[d], c[d - 2], !1, h.actioncaller, !0)
                    }
                };
                h.showlog = function() {
                    var a = arguments,
                    a = !(1 == a.length && 0 == pa(a[0]));
                    V.showlog(a)
                };
                h.trace = function() {
                    var a = arguments,
                    b, c = a.length,
                    d = "",
                    e = h.actioncaller;
                    for (b = 0; b < c; b++) var g = a[b],
                    f = U(g, e),
                    d = null != f ? d + f: d + g;
                    la(1, d)
                };
                h[_[507]] = function() {
                    var a = arguments,
                    b, c = a.length,
                    d = h.actioncaller;
                    for (b = 0; b < c; b++) a: {
                        var e = d,
                        g = void 0,
                        f = void 0,
                        q = void 0,
                        k = Vc(a[b]),
                        f = k.length;
                        if (1 == f && e && (q = k[0], e.hasOwnProperty(q))) {
                            e[q] = null;
                            delete e[q];
                            break a
                        }
                        for (var n = m,
                        g = 0; g < f; g++) {
                            var q = k[g],
                            t = g == f - 1,
                            G = null,
                            l = q.indexOf("[");
                            0 < l && (G = oc(q, l + 1, q.length - 1, e), q = q.slice(0, l));
                            if (void 0 !== n[q]) {
                                if (null != G && (l = n[q], l.isArray)) if (q = l.getItem(G)) if (t) break a;
                                else {
                                    n = q;
                                    continue
                                } else break;
                                if (t) {
                                    n[q] = null;
                                    delete n[q];
                                    break a
                                } else n = n[q]
                            } else break
                        }
                    }
                };
                h.error = function() {
                    1 == arguments.length || !1 !== pa(arguments[1]) ? Ea(arguments[0]) : la(3, arguments[0])
                };
                h.openurl = function() {
                    var a = arguments;
                    L.open(a[0], 0 < a.length ? a[1] : _[504])
                };
                h.loadscene = function() {
                    var a = arguments;
                    if (0 < a.length) {
                        var b = a[0],
                        c = U(_[72] + b + _[61]),
                        d = U(_[72] + b + _[394]);
                        d && (d += ";");
                        null == c ? la(3, 'loadscene() - scene "' + b + '" not found') : (m.xml.scene = b, m.xml.view = {},
                        Xa.loadxml(_[124] + c + _[117], a[1], a[2], a[3], d))
                    }
                };
                h.jsget = function() {
                    var a = arguments;
                    if (2 == a.length) {
                        var b = a[0],
                        c = a[1],
                        d = null;
                        try { (function() {
                                var krpano = V.viewerlayer;
                                d = eval(c)
                            })()
                        } catch(e) {
                            la(3, "js" + (b ? "get": "call") + '() - calling Javascript "' + c + '" failed: ' + e)
                        }
                        b && I(b, d, !1, h.actioncaller)
                    }
                };
                h.jscall = function() {
                    var a = arguments;
                    1 == a.length && h.jsget(null, a[0])
                };
                h.parseFunction = function(b) {
                    var c = null;
                    if (b = Gb(b, null, !0)) b = b[0],
                    a(b.args, h.actioncaller),
                    c = [b.cmd].concat(b.args);
                    return c
                };
                h.js = function(b) {
                    b = "" + b;
                    var c = Gb(b, null, !0);
                    if (c) {
                        c = c[0];
                        a(c.args, h.actioncaller);
                        var d = !1;
                        if (_[11] == typeof L[c.cmd]) {
                            d = !0;
                            try {
                                L[c.cmd].apply(L[c.cmd], c.args)
                            } catch(e) {
                                d = !1
                            }
                        }
                        if (0 == d) {
                            c = c.cmd + (0 < c.args.length ? "('" + c.args.join("','") + "');": "();");
                            try {
                                eval(c)
                            } catch(g) {
                                la(2, 'js() - calling Javascript "' + b + '" failed: ' + g)
                            }
                        }
                    }
                };
                h.setfov = function() {
                    var a = arguments;
                    1 == a.length && (p.fov = Number(a[0]))
                };
                h.lookat = function() {
                    var a = arguments;
                    if (2 <= a.length) {
                        var b;
                        b = Number(a[0]);
                        isNaN(b) || (p.hlookat = b);
                        b = Number(a[1]);
                        isNaN(b) || (p.vlookat = b);
                        b = Number(a[2]);
                        isNaN(b) || (p.fov = b);
                        b = Number(a[3]);
                        isNaN(b) || (p.distortion = b);
                        b = Number(a[4]);
                        isNaN(b) || (p.architectural = b);
                        b = Number(a[5]);
                        isNaN(b) || (p.pannini = "" + b)
                    }
                };
                h.adjusthlookat = function() {
                    var a = arguments;
                    1 == a.length && (p.hlookat = nc(p.hlookat, Number(a[0])))
                };
                h.adjust360 = function() {
                    var a = arguments;
                    if (2 == a.length) {
                        var b = h.actioncaller;
                        I(a[0], nc(U(a[0], b), Number(y(a[1], b))), !1, b)
                    }
                };
                h.loop = function() {
                    f("loop", _[192], arguments, h.actioncaller)
                };
                h.asyncloop = function() {
                    f(_[402], _[164], arguments, h.actioncaller)
                };
                h["for"] = function() {
                    f("for", _[155], arguments, h.actioncaller)
                };
                h.asyncfor = function() {
                    f(_[409], "if('%5'!='NEXTLOOP',%1);if(%2,%4;%3;delayedcall(0,asyncfor(%1,%2,%3,%4,NEXTLOOP)););", arguments, h.actioncaller)
                };
                h.calc = function() {
                    var a, b = arguments;
                    2 == b.length && (a = v(b[1]), b[0] && I(b[0], a, !1, h.actioncaller));
                    return a
                };
                h.resolvecondition = function() {
                    var a = h.actioncaller,
                    b = arguments,
                    c = b.length,
                    d = null,
                    e = null,
                    e = !1;
                    if (2 == c || 3 == c) {
                        d = F(b[0]);
                        e = 2 == c ? b[1] : b[2];
                        if ("null" == d || "" == d) d = null;
                        e = null == e || "" == e ? !1 : v(e);
                        null != d && (3 == c && (b = F(b[1]), c = pa(U(d, a)), "and" == b ? e = c && e: "or" == b ? e = c || e: "xor" == b && (e = !(c && e) && (c || e))), I(d, e, !1, a))
                    }
                    return e
                };
                h["if"] = function() {
                    var a = arguments,
                    b = h.actioncaller;
                    2 <= a.length && (v(a[0]) ? h.callaction(a[1], b, !0) : 3 == a.length && h.callaction(a[2], b, !0))
                };
                h.ifnot = function() {
                    var a = arguments;
                    h["if"](a[0], a[2], a[1])
                };
                h.stoplookto = function() {
                    n(_[69])
                };
                h.lookto = function() {
                    var b = arguments,
                    d = b.length;
                    if (2 <= d) {
                        var e = h.actioncaller,
                        g = new q;
                        h.stopmovements();
                        n(_[69]);
                        g.id = _[69];
                        g.actioncaller = e;
                        1 == pa(b[5]) ? (g.blocking = !1, g.donecall = b[6]) : (g.blocking = !0, h.blocked = !0);
                        4 < d && void 0 === b[4] && d--;
                        3 < d && void 0 === b[3] && d--;
                        2 < d && void 0 === b[2] && d--;
                        var f = Number(b[0]),
                        k = Number(b[1]),
                        l = 2 < d ? Number(b[2]) : p.fov,
                        m = 3 < d ? b[3] : null,
                        u = 4 < d ? pa(b[4]) : !0;
                        if (! (isNaN(f) || isNaN(k) || isNaN(l))) {
                            var B = 1,
                            b = 720,
                            d = -720,
                            t = 720,
                            G = p.hlookat,
                            w = G,
                            P = p.vlookat,
                            v = p.fov;
                            if (u) {
                                for (; - 90 > k || 90 < k;) - 90 > k ? (k = -180 - k, f += 180) : 90 < k && (k = 180 - k, f -= 180);
                                for (; 0 > G;) G += 360;
                                for (; 360 < G;) G -= 360;
                                for (; 0 > f;) f += 360;
                                for (; 360 < f;) f -= 360;
                                for (; - 180 > P;) P += 360;
                                for (; 180 < P;) P -= 360;
                                G = nc(G, f);
                                P = nc(P, k);
                                u = G - w;
                                G -= u;
                                f -= u
                            }
                            g.startH = G;
                            g.startV = P;
                            g.startF = v;
                            g.destH = f;
                            g.destV = k;
                            g.destF = l;
                            f = Math.sqrt((f - G) * (f - G) + (k - P) * (k - P) + (l - v) * (l - v));
                            m && ((m = Gb(m)) && (m = m[0]), m && (k = m.cmd, l = m.args, a(l, e), _[43] == k ? (B = 0, t = 360, 1 == m.args.length && (t = parseFloat(l[0]))) : _[496] == k ? (B = 1, 0 < m.args.length && (b = parseFloat(l[0])), 1 < m.args.length && (d = parseFloat(l[1])), 2 < m.args.length && (t = parseFloat(l[2])), b = +Math.abs(b), d = -Math.abs(d), t = +Math.abs(t)) : "tween" == k && (B = 2, g.tweenfu = ac.getTweenfu(l[0]), g.maxruntime = parseFloat(l[1]), isNaN(g.maxruntime) && (g.maxruntime = .5))));
                            g.motionmode = B;
                            0 == B ? g.maxruntime = f / t: 1 == B && (e = f, B = t * t / (2 * b), m = t / b, f = -(t * t) / (2 * d), k = -t / d, l = e - (B + f), G = l / t, 0 > G && (t = Math.sqrt(2 * e * b * d / (d - b)), B = t * t / (2 * b), m = t / b, f = -(t * t) / (2 * d), k = -t / d, G = l = 0), P = m + G + k, g.accelspeed = b, g.breakspeed = d, g.Vmax = t, g.Tmax = P, g.Smax = e, g.T1 = m, g.T2 = G, g.T3 = k, g.S1 = B, g.S2 = l, g.S3 = f, g.maxruntime = P);
                            g.starttime = Ta();
                            g.process = r;
                            c.push(g)
                        }
                    }
                };
                h.looktohotspot = function() {
                    var a = arguments,
                    b = h.actioncaller,
                    c = Ua.getItem(1 > a.length ? b ? b.name: "": a[0]);
                    if (c) {
                        var b = c.ath,
                        d = c.atv,
                        e = 30,
                        e = c.getcenter(),
                        b = e.x,
                        d = e.y,
                        e = e.z,
                        c = Number(a[1]);
                        isNaN(c) || (e = c);
                        c = p.fovmin;
                        e < c && (e = c);
                        h.lookto(b, d, e, a[2], a[3])
                    }
                };
                h.moveto = function() {
                    var a = arguments;
                    2 <= a.length && h.lookto(a[0], a[1], p.fov, a[2])
                };
                h.zoomto = function() {
                    var a = arguments;
                    1 <= a.length && h.lookto(p.hlookat, p.vlookat, a[0], a[1])
                };
                h.getlooktodistance = function() {
                    var a = arguments,
                    b = a.length;
                    if (3 <= b) {
                        var c = h.actioncaller,
                        d = Number(y(a[1], c)),
                        e = Number(y(a[2], c)),
                        g = p.hlookat,
                        f = p.vlookat;
                        5 == b && (g = Number(y(a[3], c)), f = Number(y(a[4], c)));
                        if (! (isNaN(d) || isNaN(e) || isNaN(g) || isNaN(f))) {
                            var b = Math.PI,
                            q = b / 180,
                            d = b - d * q,
                            g = b - g * q,
                            f = f * q,
                            e = e * q,
                            d = Math.acos(Math.cos(f) * Math.cos(g) * Math.cos(e) * Math.cos(d) + Math.sin(f) * Math.sin(e) + Math.cos(f) * Math.sin(g) * Math.cos(e) * Math.sin(d)) / q;
                            I(a[0], d, !1, c)
                        }
                    }
                };
                h.wait = function() {
                    var a = arguments;
                    if (1 == a.length) {
                        var a = a[0],
                        b = F(a);
                        if ("load" == b || _[73] == b) a = 0;
                        else {
                            b = "time";
                            a = Number(a);
                            if (isNaN(a)) return;
                            0 >= a && (b = _[73], a = 0)
                        }
                        var d = new q;
                        d.waitfor = b;
                        d.maxruntime = a;
                        d.process = l;
                        d.starttime = Ta();
                        d.actioncaller = h.actioncaller;
                        d.id = "WAIT" + ++z;
                        d.blocking = !0;
                        h.blocked = !0;
                        c.push(d)
                    }
                };
                h.tween = function() {
                    var a = arguments,
                    e = a.length;
                    if (2 <= e) {
                        var g = h.actioncaller,
                        f = new q,
                        k = F(a[0]);
                        if (0 < k.indexOf("|")) {
                            var e = ("" + a[0]).split("|"),
                            g = ("" + a[1]).split("|"),
                            f = a[3] ? ("" + a[3]).split("|") : [a[3]],
                            l = e.length,
                            m = g.length,
                            r = f.length,
                            p = parseFloat(a[2]);
                            if (0 > p || isNaN(p)) p = .5;
                            for (k = 0; k < m; k++) g[k] = Ha(g[k]);
                            for (k = 0; k < r; k++) f[k] = Ha(f[k]);
                            for (k = 0; k < l; k++) h.tween(Ha(e[k]), g[k % m], p, f[k % r], k == l - 1 ? a[4] : null, k == l - 1 ? a[5] : null)
                        } else {
                            l = k;
                            r = a[1];
                            m = !1;
                            g && 0 > k.indexOf(".") && g.hasOwnProperty(k) && (l = g._type + "[" + g.name + "]." + k, m = !0);
                            0 == m && 0 < k.indexOf("[") && (l = k = b(k, g), l = l.split(_[134]).join(_[127]));
                            f.id = l;
                            f.varname = k;
                            f.actioncaller = g;
                            f.startval = m ? g[k] : U(k, g);
                            if (null == f.startval || "" == f.startval) f.startval = 0;
                            f.endval = r;
                            k = 2 < e ? String(a[2]) : "0.5";
                            if (0 < k.indexOf("(") && (p = Gb(k))) {
                                var B = p[0];
                                _[427] == B.cmd && (p = Number(B.args[0]), k = Number(B.args[1]), r = Math.abs(parseFloat(r) - parseFloat(f.startval)), k = k * r / p)
                            }
                            k = parseFloat(k);
                            isNaN(k) && (k = .5);
                            f.maxruntime = k;
                            f.tweenmap = ac.getTweenfu(3 < e ? a[3] : _[56]);
                            if (4 < e) if ("wait" == F(a[4])) f.blocking = !0,
                            h.blocked = !0;
                            else if (r = a[4]) 0 == m && 0 < r.indexOf("[") && (r = b(r, g)),
                            f.donecall = r;
                            5 < e && (f.updatefu = a[5]);
                            f.starttime = Ta();
                            f.process = u;
                            n(l);
                            c.push(f)
                        }
                    }
                };
                h.stoptween = function() {
                    var a = h.actioncaller,
                    c = arguments,
                    e = c.length,
                    g;
                    for (g = 0; g < e; g++) {
                        var f = F(c[g]);
                        if (0 < f.indexOf("|")) h.stoptween.apply(h.stoptween, f.split("|"));
                        else {
                            if (a && 0 > f.indexOf(".")) {
                                if (n(a._type + "[" + a.name + "]." + f)) continue
                            } else 0 < f.indexOf("[") && (f = b(f, a)),
                            f = f.split(_[134]).join(_[127]);
                            n(f)
                        }
                    }
                };
                h.invalidatescreen = function() {
                    Kb = Ta();
                    p.haschanged = !0
                };
                h.updatescreen = function() {
                    p.haschanged = !0
                };
                h.updateobject = function() {
                    M && M.updateFOV && M.updateFOV(M, [Number(N.hfov), Number(N.vfov), Number(N.voffset)]);
                    p.haschanged = !0
                };
                h.loadpano = function(a, b, c, d, e) {
                    m.xml.scene = null;
                    m.xml.view = {};
                    Xa.loadpano(a, b, c, d, e)
                };
                h.loadpanoscene = function(a, b, c, d, e, h) {
                    m.xml.scene = b;
                    m.xml.view = {};
                    m._loadpanoscene_name = b;
                    Xa.loadpano(a, c, d, e, h)
                };
                h.loadxml = function(a, b, c, d, e) {
                    m.xml.scene = null;
                    m.xml.view = {};
                    Xa.loadxml(a, b, c, d, e)
                };
                h.fscommand = function() {};
                h.freezeview = function() {};
                h.reloadpano = function() {};
                h.addlensflare = function() {};
                h.removelensflare = function() {};
                h.SAcall = function(a) {
                    var b = U(_[14]);
                    if ((a = Gb(a)) && b) {
                        var c, d;
                        d = a.length;
                        for (c = 0; c < d; c++) {
                            var e = a[c];
                            if (e) {
                                var g = e.cmd,
                                f = b.getItem(g);
                                f && 1 == pa(f.secure) ? (e = e.args, e.splice(0, 0, g), h.callaction(E(f.content, e))) : la(2, _[428] + g + _[282])
                            }
                        }
                    }
                }
            })();
            var V = {}; (function() {
                function a(a) {
                    a = _[189] + a;
                    L.console ? L.console.log(a) : alert(a)
                }
                function d(a, b, c, d, e, h) {
                    var g = Ja(),
                    f = g.style;
                    f.position = _[0];
                    "LT" == a ? (f.left = b, f.top = c) : (f.left = b, f.bottom = c);
                    f.width = d;
                    f.height = e;
                    f.overflow = _[6]; ! 1 === h && (f.webkitUserSelect = f.MozUserSelect = f.msUserSelect = f.oUserSelect = f.userSelect = "none");
                    return g
                }
                function p(a) {
                    if (r.fullscreen = a) L.activekrpanowindow = c.id;
                    Ka(1 == a ? _[221] : _[225])
                }
                function f(a) {
                    l && (Aa(a), r.onResize(a), setTimeout(e, 250))
                }
                function g(a, b) {
                    for (var c = a.style,
                    d = b.length,
                    e = 0,
                    e = 0; e < d; e += 2) c[b[e]] = b[e + 1]
                }
                function n(a) {
                    p( !! (aa.fullscreenElement || aa.mozFullScreenElement || aa.webkitIsFullScreen || aa.webkitFullscreenElement || aa.msFullscreenElement))
                }
                function k(a) {
                    if (l) {
                        a = L.innerHeight;
                        var b = vb;
                        a < b ? r.__scrollpage_yet = !0 : r.__scrollpage_yet && (r.__scrollpage_yet = !1, e());
                        if (a != b) r.onResize(null)
                    }
                }
                function e() {
                    var a = L.innerWidth,
                    c = L.innerHeight;
                    r.__scrollpage_yet && c == vb && (r.__scrollpage_yet = !1);
                    var d = screen.height - 64,
                    e = 268;
                    26 <= b.crios && (d += 44, e = 300); (320 == a && c != d || a == screen.height && c != e) && L.scrollTo(0, 0)
                }
                function w() {
                    if (8 == b.iosversion && b.ipad) {
                        var a = screen.width,
                        d = screen.height,
                        e = L.innerWidth,
                        f = L.innerHeight,
                        g = c.clientHeight;
                        if (Math.min(e, f) == Math.min(a, d) && Math.max(e, f) == Math.max(a, d) || g > f) qa ^= 1,
                        L.scrollTo(0, qa),
                        setTimeout(w, 60)
                    }
                }
                function x(a, b) {
                    Aa(a);
                    var c = "none" == D.style.display ? "": "none";
                    void 0 !== b && (c = 1 == b ? "": "none");
                    D.style.display = c;
                    z.scrollTop = z.scrollHeight
                }
                function v() {
                    Ca && (K.removeChild(Ca), Ca = null);
                    var a, c = Ja();
                    a = 25;
                    b.androidstock && (a *= b.pixelratio);
                    g(c, [_[65], _[0], "left", "50%", "top", "50%", _[47], _[40], _[120], a + "px", _[51], "none", _[148], _[5], _[267], "none"]);
                    a = c.style;
                    a.zIndex = 999999;
                    a.opacity = .67;
                    a = Ja();
                    g(a, "position;relative;left;-50%;top;-25px;fontFamily;sans-serif;textShadow;#000000 1px 1px 2px;lineHeight;110%".split(";"));
                    a.innerHTML = _[433] + (Na && Na[1] && 6 < Ha(Na[1], !1).length ? Na[1] : _[169]) + _[375];
                    c.appendChild(a);
                    K.appendChild(c);
                    Ca = c
                }
                var r = V;
                r.fullscreen = !1;
                var y = !0,
                l = !1,
                u = !1;
                r.__scrollpage_yet = !1;
                var h = null,
                c = null,
                K = null;
                r.htmltarget = null;
                r.viewerlayer = null;
                r.controllayer = null;
                r.panolayer = null;
                r.pluginlayer = null;
                r.hotspotlayer = null;
                var D = r.svglayer = null,
                z = null,
                q = null,
                J = null,
                C = 0,
                Q = 0,
                A = !1,
                H = !1;
                r.build = function(e) {
                    function h(a) {
                        x(null, !1)
                    }
                    var l = e.target,
                    t = e.id,
                    G = aa.getElementById(l);
                    if (!G) return a(_[172] + l),
                    !1;
                    for (var l = null,
                    p = t,
                    C = 1;;) if (l = aa.getElementById(t)) if (_[254] == p) C++,
                    t = p + C;
                    else return a(_[165] + t),
                    !1;
                    else break;
                    l = Ja();
                    l.id = t;
                    l.style.position = _[119];
                    l.style.overflow = _[6];
                    l.style.lineHeight = _[45];
                    l.style.fontWeight = _[45];
                    l.style.fontStyle = _[45];
                    l.tabIndex = -1;
                    l.style.outline = 0;
                    t = _[26];
                    e.bgcolor && (t = e.bgcolor);
                    e = F(e.wmode);
                    if (_[36] == e || _[142] == e) t = null,
                    m.bgcolor = 4278190080;
                    null != t && (l.style.background = t, m.bgcolor = parseInt(t.slice(1), 16));
                    G.appendChild(l);
                    c = l;
                    r.htmltarget = G;
                    r.viewerlayer = l;
                    K = d("LT", 0, 0, "100%", "100%", !1);
                    g(K, "msTouchAction none touchAction none msContentZooming none contentZooming none -webkit-tap-highlight-color transparent".split(" "));
                    r.controllayer = K;
                    t = d("LT", 0, 0, "100%", "100%");
                    r.panolayer = t;
                    g(t, [_[258], "none"]);
                    G = d("LT", 0, 0, "100%", "100%", !1);
                    0 == b.ie && 0 == b.firefox && g(G, [Id, _[59]]);
                    e = G;
                    b.android && b.firefox && Kc && (p = d("LT", 0, 0, "1px", "1px"), p.style.background = _[226], p.style.pointerEvents = "none", p.style.zIndex = 999999999, p.style[ib] = _[20], G.appendChild(p));
                    var p = b.androidstock ? b.pixelratio: 1,
                    C = 156 * p,
                    u = (b.mobile ? 8 : 13) * p,
                    w = b.androidstock || b.android && b.chrome ? 6 : 8;
                    D = d("LB", 0, 0, "100%", C + "px", !0);
                    D.style.display = "none"; ! 0 !== b.opera && Kc && (2 > Nb && (D.style[ib] = _[20]), b.ios && 0 == b.simulator || b.android && b.chrome) && (D.style[ib] = _[20]);
                    D.style.zIndex = 999999999;
                    var A = d("LT", 0, 0, "100%", "100%", !0);
                    A.style.opacity = .67;
                    b.android && b.opera && (A.style.borderTop = _[179]);
                    g(A, [_[255], _[26], pc, _[441] + w + _[373], _[114], w + "px", _[482], .67]);
                    z = aa.createElement("pre");
                    w = null;
                    b.mac && (w = _[270] + (L.chrome ? "1px": "0"));
                    b.realDesktop ? (z.style.fontFamily = _[55], z.style.fontSize = "11px", w && (z.style.fontSize = "13px", z.style.textShadow = w)) : (z.style.fontFamily = _[38], z.style.fontSize = u + "px");
                    g(z, [_[65], _[0], "left", "5px", "top", "0px", _[50], "left", _[329], 0, _[296], b.realDesktop ? "16px": 0, _[346], 0, _[286], 0, _[107], "none", _[71], 0, _[114], (b.realDesktop ? 10 : 8) + "px", _[49], "100%", _[28], C - 10 + "px", _[421], "auto", _[210], "none", _[471], "block", _[395], "left", _[338], _[411], _[51], "none", _[47], _[40]]);
                    q = Ja();
                    w && (q.style.textShadow = w);
                    g(q, [_[65], _[0], _[3], 0, _[2], 0, _[132], "0 4px", _[28], C - 10 + "px", _[230], "none", _[279], "none", _[148], _[18], _[76], _[36], _[347], b.realDesktop ? _[55] : _[38], _[120], (b.realDesktop ? 10 : 9 * p | 0) + "px", _[47], _[40]]);
                    q.innerHTML = "CLOSE";
                    R(q, _[115], Aa, !0);
                    R(q, _[118], h, !0);
                    R(q, _[7], h, !0);
                    D.appendChild(A);
                    D.appendChild(z);
                    D.appendChild(q);
                    l.appendChild(K);
                    K.appendChild(t);
                    0 < b.iosversion && 5 > b.iosversion && (e = Ja(), e.style.position = _[0], G.appendChild(e), K.style.webkitTransformStyle = _[59], G.style.webkitTransformStyle = "flat");
                    K.appendChild(G);
                    b.ios && (t = Ja(), t.style.position = _[0], t.style.webkitTransformStyle = _[59], e.appendChild(t));
                    l.appendChild(D);
                    r.pluginlayer = G;
                    r.hotspotlayer = e;
                    b.fullscreensupport && R(aa, b.browser.events.fullscreenchange, n);
                    J = [l.style.width, l.style.height];
                    r.onResize(null);
                    R(L, _[137], r.onResize, !1);
                    b.iphone && b.safari && R(L, _[133], k, !1);
                    R(L, _[84], f, !1);
                    return ! 0
                };
                r.setFullscreen = function(a) {
                    if (b.fullscreensupport) if (a) c[b.browser.events.requestfullscreen]();
                    else try {
                        aa.exitFullscreen ? aa.exitFullscreen() : aa.mozCancelFullScreen ? aa.mozCancelFullScreen() : aa.webkitCancelFullScreen ? aa.webkitCancelFullScreen() : aa.webkitExitFullscreen ? aa.webkitExitFullscreen() : aa.msExitFullscreen && aa.msExitFullscreen()
                    } catch(d) {} else {
                        var e = aa.body,
                        f = e.style,
                        h = c.style;
                        if (a) r.fsbkup = [f.padding, f.margin, f.overflow, e.scrollTop, e.scrollLeft, L.pageYOffset],
                        f.padding = "0 0",
                        f.margin = "0 0",
                        f.overflow = _[6],
                        e.scrollTop = "0",
                        e.scrollLeft = "0",
                        e.appendChild(c),
                        h.position = _[0],
                        h.left = 0,
                        h.top = 0,
                        h.width = "100%",
                        h.height = "100%",
                        Pa.domUpdate(),
                        L.scrollTo(0, 0),
                        p(!0);
                        else if (a = r.fsbkup) r.htmltarget.appendChild(c),
                        f.padding = a[0],
                        f.margin = a[1],
                        f.overflow = a[2],
                        e.scrollTop = a[3],
                        e.scrollLeft = a[4],
                        h.position = _[119],
                        Pa.domUpdate(),
                        L.scrollTo(0, a[5]),
                        r.fsbkup = null,
                        p(!1)
                    }
                };
                var qa = 0;
                r.onResize = function(a, d) {
                    A = d;
                    Aa(a);
                    var f = c,
                    g = "100%",
                    k = "100%";
                    null == J && (J = [f.style.width, f.style.height]);
                    J && (g = J[0], k = J[1], "" == g && (g = "100%"), "" == k && (k = "100%"), J = null);
                    var q = Jb.so;
                    q && (q.width && (g = q.width), q.height && (k = q.height));
                    r.fullscreen && (g = k = "100%");
                    var n = f.parentNode,
                    m = 0,
                    p = f;
                    do
                    if (m = p.offsetHeight, b.ie && r.fullscreen && 20 > m && (m = 0), 1 >= m) {
                        if (p = p.parentNode, null == p) {
                            m = L.innerHeight;
                            break
                        }
                    } else break;
                    while (1);
                    q = 0;
                    for (p = f; p && "body" != F(p.nodeName);) q++,
                    p = p.parentNode;
                    var n = n ? n.offsetHeight: L.innerHeight,
                    C = f.clientWidth,
                    p = g,
                    f = k;
                    0 < String(g).indexOf("%") ? g = parseFloat(g) * C / 100 : (g = parseFloat(g), p = g + "px");
                    0 < String(k).indexOf("%") ? k = parseFloat(k) * m / 100 : (k = parseFloat(k), f = k + "px");
                    1 > k && (k = 100);
                    m = screen.width;
                    C = screen.height;
                    b.iphone && 320 == m && 4 > b.iosversion && 480 > C && (C = 480);
                    var v = L.innerWidth,
                    x = L.innerHeight;
                    b.ios && 2 >= q && 0 == r.fullscreen && (26 <= b.crios && n > x && (x = k = n), w(), 7 <= b.iosversion && k > x && (k = x, l = u = !0, setTimeout(e, 10)));
                    y && (y = !1, b.iphone ? (320 == v && x >= C - 124 ? x = C - 124 : v == C && 208 <= x && (x = 208), 2 >= q && (v == g && x && (320 == g && k == C - 124 || g == C && (208 == k || 320 == k)) && (l = !0), 26 <= b.crios && (320 == g || g == C) && (l = !0))) : b.ipad && 28 <= b.crios && 2 >= q && (g > k != m > C && (q = m, m = C, C = q), g == m && k == C - 20 && (u = l = !0)));
                    l && (u ? (g = v, k = x) : 320 == L.innerWidth ? (g = 320, k = C - 64, b.crios && (k += 44)) : (g = C, k = 320 == L.innerHeight ? 320 : 268, 26 <= b.crios && (k = 300)), p = g + "px", f = k + "px");
                    b.getViewportScale();
                    q = p;
                    Pa && Pa.focusLoss();
                    l && null == h && (h = setInterval(e, 4E3), setTimeout(e, 250));
                    n = !1;
                    if (bc != g || vb != k || A) n = !0,
                    A = !1,
                    bc = g,
                    vb = k;
                    Ra && (Ra._pxw = Ra.pixelwidth = Ra.imagewidth = bc / X, Ra._pxh = Ra.pixelheight = Ra.imageheight = vb / X);
                    Za && (Za._pxw = Za.pixelwidth = Za.imagewidth = bc / X, Za._pxh = Za.pixelheight = Za.imageheight = vb / X);
                    n && (pb && pb.calc(bc, vb), Ka(_[63]), n = !1);
                    pb ? (n |= pb.calc(bc, vb), K.style.left = pb.pixelx * X + "px", K.style.top = pb.pixely * X + "px", K.style.width = Qa + "px", K.style.height = ya + "px", g = Qa, k = ya) : (Qa = bc, ya = vb);
                    uc = Math.max(4 * k / 3, g);
                    c.style.width = q;
                    c.style.height = f;
                    b.desktop && (q = L.devicePixelRatio, isNaN(q) || (b.pixelratio = q, b.fractionalscaling = 0 != q % 1));
                    Oa.size(g, k);
                    H = !0;
                    n && Ka(_[63]);
                    Xa.updateview(!1, !0);
                    r.resizeCheck(!0);
                    A = !1
                };
                r.resizeCheck = function(a) {
                    var b = !1,
                    d = c,
                    e = d.clientWidth,
                    d = d.clientHeight;
                    if (e != C || d != Q || a || pb && pb.haschanged) if (C = e, Q = d, b = !0, 1 == a) b = !1;
                    else r.onResize(null);
                    H && !0 !== a && (b = !0, H = !1);
                    255 == (jc & 511) && 0 == (Ya & 1) && v();
                    return b
                };
                var ea = "";
                r.log = function(a) {
                    if ("cls" == a) z.innerHTML = "";
                    else if ("d" == a) v();
                    else {
                        var c = 4 > b.firefoxversion ? 4096 : 1E4,
                        d = a.slice(0, 6);
                        _[140] == d || _[135] == d ? (c = _[200] + (69 == d.charCodeAt(0) ? "F": "0") + _[416] + a + _[417], ea += c + "\n", z.innerHTML += "\n" + c) : (ea += a + "\n", ea.length > c ? (ea = ea.slice( - c / 2, -1), z.innerHTML = ea) : z.lastChild ? z.lastChild.nodeValue += "\n" + a: z.innerHTML += a);
                        z.scrollTop = z.scrollHeight;
                        Jb.so.vars && pa(Jb.so.vars.consolelog) && (c = L.console) && c.log && (b.firefox || b.chrome ? c.log("%c" + a, _[135] == d ? _[259] : _[140] == d ? _[178] : _[420] == d ? _[257] : _[262]) : c.log(a))
                    }
                };
                r.showlog = function(a) {
                    x(null, a)
                };
                r.togglelog = x;
                r.getMousePos = function(a, b) {
                    var c;
                    c = {};
                    var d = b ? b: K,
                    e = d.getBoundingClientRect();
                    c.x = Math.round(a.clientX - e.left - d.clientLeft + d.scrollLeft);
                    c.y = Math.round(a.clientY - e.top - d.clientTop + d.scrollTop);
                    return c
                };
                r.remove = function() {
                    null != h && (clearInterval(h), h = null);
                    try {
                        ba(L, _[137], r.onResize, !1),
                        b.iphone && b.safari && ba(L, _[133], k, !1),
                        ba(L, _[84], f, !1),
                        b.fullscreensupport && ba(aa, b.browser.events.fullscreenchange, n),
                        r.htmltarget.removeChild(c),
                        r.htmltarget = null,
                        r.viewerlayer = null,
                        r.controllayer = null,
                        r.panolayer = null,
                        r.pluginlayer = null,
                        K = c = q = z = D = r.hotspotlayer = null
                    } catch(a) {}
                };
                var Ca = null
            })();
            var Pa = {}; (function() {
                function a(a) {
                    var b = a.pointerType;
                    if (4 != b && _[19] != b) {
                        a = a.changedTouches ? a.changedTouches: [a];
                        var b = a.length,
                        c, d, e;
                        for (c = 0; c < b; c++) if (d = a[c], e = d.pointerId ? d.pointerId: d.identifier, void 0 !== e) {
                            d = wa(d);
                            d = {
                                id: e,
                                lx: d.x / X,
                                ly: d.y / X
                            };
                            var f, g;
                            g = ka.length;
                            for (f = 0; f < g; f++) if (ka[f].id == e) {
                                ka[f] = d;
                                return
                            }
                            ka.push(d)
                        }
                    }
                }
                function d(a) {
                    var b = a.pointerType;
                    if (4 != b && _[19] != b) {
                        a = a.changedTouches ? a.changedTouches: [a];
                        var b = a.length,
                        c, d;
                        for (c = 0; c < b; c++) if (d = a[c], d = d.pointerId ? d.pointerId: d.identifier, void 0 !== d) {
                            var e, f;
                            f = ka.length;
                            for (e = 0; e < f; e++) if (ka[e].id == d) {
                                ka.splice(e, 1);
                                break
                            }
                        }
                    }
                }
                function E() {
                    var a = F(ia.usercontrol);
                    return _[19] == a || "all" == a
                }
                function f(a) {
                    return a && (a = a.pointerType, 4 == a || _[19] == a) ? !0 : !1
                }
                function g(a, b, c, d) {
                    for (var e = jc; 0 < wb.length && !(c - wb[0].t <= Sa) && !(1 >= e - wb[0].f);) wb.shift();
                    e = wb.length - 1;
                    0 <= e && a == wb[e].x && b == wb[e].y ? wb[e].t = c: wb.push({
                        x: a,
                        y: b,
                        t: c,
                        f: d
                    })
                }
                function n(a, b, c, d) {
                    b = p.inverseProject(a, b);
                    var e = p.inverseProject(c, d);
                    d = (Math.atan2(e.z, e.x) - Math.atan2(b.z, b.x)) / Y;
                    b = -(Math.atan2(b.y, Math.sqrt(b.x * b.x + b.z * b.z)) - Math.atan2(e.y, Math.sqrt(e.x * e.x + e.z * e.z))) / Y; - 180 > d ? d += 360 : 180 < d && (d -= 360);
                    if (c < a && 0 > d || c > a && 0 < d) d = -d;
                    return {
                        h: d,
                        v: b
                    }
                }
                function k(a, b, c, d) {
                    E() ? (a = n(a, b, c, d), ga = !1, ca = a.h, oa = a.v, a = p.hlookat + ca, b = p.vlookat + oa, T += ca, ya += oa, c = p._limits, ia.bouncinglimits && c && (360 > c[0] && (a < c[1] ? (Na = !0, a = .5 * T + .5 * c[1]) : a > c[2] && (Na = !0, a = .5 * T + .5 * c[2])), b < c[4] ? (Na = !0, b = .5 * ya + .5 * c[4]) : b > c[5] && (Na = !0, b = .5 * ya + .5 * c[5])), p.hlookat = a, p.vlookat = b, Xa.updateview(), p.haschanged = !0) : oa = ca = 0
                }
                function e(a) { (aa.hidden || aa.webkitHidden || aa.mozHidden || aa.msHidden) && w(a)
                }
                function w(a) {
                    K();
                    a && (_[64] == a.type && !1 === a.persisted && (jd = !0), O.down && C(a));
                    for (var b in N) 1 == N[b] && (m.keycode = b, Ka(_[130]), N[b] = !1);
                    m.keycode = 0;
                    x()
                }
                function x() {
                    m.hlookat_moveforce = m.vlookat_moveforce = m.fov_moveforce = 0;
                    Oa = sa = ga = !1;
                    Ga = za = Qa = La = ca = oa = Ea = Ua = Ra = Bb = 0
                }
                function v(a) {
                    var c = 0;
                    if (1 != ia.disablewheel && (Aa(a), cb = Ta(), E())) {
                        a.wheelDelta ? c = a.wheelDelta / -120 : a.detail && (c = a.detail, 0 == b.mac && (c /= 3));
                        var d = c * ia.mousefovchange;
                        ia.zoomtocursor ? (Ma = !0, u(a), Ha = O.x, va = O.y, 0 < d && 0 == ia.zoomoutcursor && (Ma = !1)) : Ma = !1;
                        Oa = !0;
                        ha = 0;
                        Ga += .001 * d;
                        m.wheeldelta_raw = -c;
                        m.wheeldelta = 3 * -c;
                        Ka(_[100])
                    }
                }
                function r(a) {
                    var c = V.viewerlayer;
                    aa.activeElement == c != 0 && L.activekrpanowindow == c.id && (c = a.keyCode, 0 == (a.altKey || a.ctrlKey || a.shiftKey || 32 > c || 111 < c && 124 > c) && Aa(a), m.keycode = c, N[c] = !0, Ka(_[384]), 79 != c || !m.logkey && Ya & 1 || V.togglelog(), l(c, 1), 27 == c && (K(), V.fullscreen && (V.fsbkup || b.opera) && V.setFullscreen(!1)))
                }
                function y(a) {
                    var b = V.viewerlayer;
                    aa.activeElement == b != 0 && L.activekrpanowindow == b.id && (a = a.keyCode, m.keycode = a, N[a] = !1, Ka(_[130]), l(a, 0))
                }
                function l(a, b) {
                    var c = F(ia.usercontrol);
                    if ("all" == c || "keyb" == c) a = "," + a + ",",
                    0 <= ("," + ia.keycodesin + ",").indexOf(a) ? m.fov_moveforce = -b: 0 <= ("," + ia.keycodesout + ",").indexOf(a) ? m.fov_moveforce = +b: 0 <= ("," + ia.keycodesleft + ",").indexOf(a) ? m.hlookat_moveforce = -b: 0 <= ("," + ia.keycodesright + ",").indexOf(a) ? m.hlookat_moveforce = +b: 0 <= ("," + ia.keycodesup + ",").indexOf(a) ? m.vlookat_moveforce = ia.keybinvert ? +b: -b: 0 <= ("," + ia.keycodesdown + ",").indexOf(a) && (m.vlookat_moveforce = ia.keybinvert ? -b: +b)
                }
                function u(a) {
                    cb = Ta();
                    a = wa(a);
                    O.x = a.x / X;
                    O.y = a.y / X;
                    O.moved = !0
                }
                function h(a) {
                    cb = Ta();
                    var d, e, g = a.changedTouches ? a.changedTouches: [a];
                    e = g.length;
                    var h = F(a.type),
                    k = 0 <= h.indexOf("start") || 0 <= h.indexOf("down"); - 99 != fa && k && (ra = !0);
                    for (d = 0; d < e; d++) {
                        var h = g[d],
                        q = h.pointerId ? h.pointerId: h.identifier; - 99 == fa && k && (fa = q);
                        if (fa == q) {
                            e = wa(h);
                            O.x = e.x / X;
                            O.y = e.y / X;
                            O.moved = !0;
                            0 == (Ya & 16) && (0 == b.realDesktop || 10 <= b.ieversion && !f(a)) && O.x > bc / X - 22 && O.y > vb / X - 32 && a.type == ta.touchstart && (U = h.pageY, R(W, ta.touchend, c, !0));
                            break
                        }
                    }
                }
                function c(a) {
                    a = a.changedTouches ? a.changedTouches: [a];
                    ba(W, ta.touchend, c, !0); - 120 > a[0].pageY - U && V.showlog(!0)
                }
                function K() {
                    if (Za) {
                        try {
                            W.removeChild(Za),
                            W.removeChild(bb)
                        } catch(a) {}
                        bb = Za = null
                    }
                }
                function D(a) {
                    if (Za) K();
                    else {
                        Aa(a);
                        a.stopPropagation();
                        var c = wa(a.changedTouches ? a.changedTouches[0] : a);
                        Za = De(c.x, c.y, K, 0 <= F(a.type).indexOf("touch"));
                        null != Za && (bb = Ja(), a = bb.style, a.position = _[0], b.androidstock || (a.zIndex = 99999999998, a[ib] = _[20]), a.width = "100%", a.height = "100%", W.appendChild(bb), W.appendChild(Za))
                    }
                }
                function z(a, c) {
                    var d = a.timeStamp | 0;
                    500 < d && 500 > d - kc ? kc = 0 : (L.activekrpanowindow = V.viewerlayer.id, V.viewerlayer.focus(), cb = Ta(), Aa(a), da.isblocked() || 0 != (a.button | 0) || (K(), 1 != c ? (R(L, _[10], q, !0), R(L, _[4], J, !0), b.topAccess && R(top, _[4], C, !0)) : R(b.topAccess ? top: L, ta.touchend, Ca, !0), d = wa(a), ab = d.x, $a = d.y, kb = a.timeStamp, T = p.hlookat, ya = p.vlookat, xa = 0, O.down = !0, O.up = !1, O.moved = !1, O.downx = O.x = d.x / X, O.downy = O.y = d.y / X, ae.update(), Ka(_[103])))
                }
                function q(a) {
                    Aa(a);
                    var b = wa(a);
                    O.x = b.x / X;
                    O.y = b.y / X;
                    O.moved = !0;
                    if (_[27] == F(ia.mousetype)) {
                        sa = !0;
                        var c = n(ab, $a, b.x, b.y).h;
                        xa += c
                    } else k(ab, $a, b.x, b.y);
                    ab = b.x;
                    $a = b.y;
                    kb = a.timeStamp; (0 === a.buttons || void 0 === a.buttons && 0 === a.which) && J(a, !0)
                }
                function J(a, c) {
                    cb = Ta();
                    Aa(a);
                    ba(L, _[10], q, !0);
                    ba(L, _[4], J, !0);
                    b.topAccess && ba(top, _[4], C, !0);
                    ga = !0;
                    O.down = !1;
                    ae.update();
                    0 == O.up && (O.up = !0, Ka(_[113]), !0 !== c && (0 == O.moved || 5 > Math.abs(O.x - O.downx) && 5 > Math.abs(O.y - O.downy)) && Ka(_[131]))
                }
                function C(a) {
                    J(a, !0)
                }
                function Q(a) {
                    1 == m.control.preventTouchEvents && Aa(a)
                }
                function A(a) {
                    Ia && (xb++, 2 == xb && (qd = 1), Pb.addPointer(a.pointerId), W.setPointerCapture ? W.setPointerCapture(a.pointerId) : W.msSetPointerCapture && W.msSetPointerCapture(a.pointerId))
                }
                function H(a) {
                    xb--;
                    0 > xb && (xb = 0);
                    return 2 > xb && Da ? (t(a), !0) : !1
                }
                function qa(c) {
                    kc = c.timeStamp | 0;
                    Sa = b.ios ? 100 : 49 > nd ? 200 : 100;
                    a(c);
                    if (ua) {
                        if (0 == m.control.preventTouchEvents) return;
                        if (f(c)) {
                            c.currentPoint && c.currentPoint.properties && 0 == c.currentPoint.properties.isLeftButtonPressed && (c.button = 0);
                            kc = 0;
                            z(c, !0);
                            return
                        }
                        A(c)
                    }
                    L.activekrpanowindow = V.viewerlayer.id;
                    cb = Ta();
                    0 == V.__scrollpage_yet && Q(c);
                    K();
                    if (! (Da || 0 == Va && 1 < ka.length || da.isblocked())) {
                        var d = c.changedTouches ? c.changedTouches[0] : c,
                        e = wa(d);
                        la = d.pointerId ? d.pointerId: d.identifier;
                        ab = e.x;
                        $a = e.y;
                        kb = c.timeStamp;
                        wb = [];
                        T = p.hlookat;
                        ya = p.vlookat;
                        xa = 0;
                        O.down = !0;
                        O.up = !1;
                        O.moved = !1;
                        O.downx = O.x = e.x / X;
                        O.downy = O.y = e.y / X;
                        Fa = {
                            t: kc
                        };
                        Ka(_[103])
                    }
                }
                function ea(a) {
                    var b = a.pointerType;
                    if (4 != b && _[19] != b) {
                        var b = a.changedTouches ? a.changedTouches: [a],
                        c = b.length,
                        d,
                        e,
                        h;
                        for (d = 0; d < c; d++) if (e = b[d], h = e.pointerId ? e.pointerId: e.identifier, void 0 !== h) {
                            var t, l;
                            l = ka.length;
                            for (t = 0; t < l; t++) if (ka[t].id == h) {
                                e = wa(e);
                                h = e.y / X;
                                t = ka[t];
                                t.lx = e.x / X;
                                t.ly = h;
                                break
                            }
                        }
                    }
                    if (ua) {
                        if (f(a)) {
                            O.down && q(a);
                            return
                        }
                        if (1 < xb) return
                    }
                    if ((b = E()) && 0 == Va && 1 < ka.length) {
                        var m;
                        l = e = ka[0].lx;
                        m = h = ka[0].ly;
                        t = ka.length;
                        for (d = 1; d < t; d++) b = ka[d].lx,
                        c = ka[d].ly,
                        b < e && (e = b),
                        b > l && (l = b),
                        c < h && (h = c),
                        c > m && (m = c);
                        b = l - e;
                        c = m - h;
                        b = Math.sqrt(b * b + c * c);
                        1 > b && (b = 1);
                        0 == M ? (M = !0, I = b, Z(a)) : B(a, b / I)
                    } else cb = Ta(),
                    0 == V.__scrollpage_yet && Q(a),
                    Da || 0 == b || (b = a.changedTouches ? a.changedTouches[0] : a, la == (b.pointerId ? b.pointerId: b.identifier) && (b = wa(b), _[27] == F(ia.touchtype) ? (sa = !0, c = n(ab, $a, b.x, b.y).h, -180 > c ? c = 360 + c: 180 < c && (c = -360 + c), xa += c) : k(ab, $a, b.x, b.y), ab = b.x, $a = b.y, kb = a.timeStamp, g(ab, $a, kb, jc), -99 == fa && (O.x = b.x / X, O.y = b.y / X), Fa && 16 < O.dd && (Fa = null), Aa(a)))
                }
                function Ca(a) {
                    d(a);
                    fa = -99;
                    ra = !1;
                    if (ua) {
                        ba(b.topAccess ? top: L, ta.touchend, Ca, !0);
                        if (H(a)) return;
                        if (f(a)) {
                            J(a);
                            return
                        }
                    }
                    M && (t(a), M = !1);
                    0 == V.__scrollpage_yet && Q(a);
                    if (Da) la = -99;
                    else {
                        var c = a.changedTouches ? a.changedTouches[0] : a;
                        if (la == (c.pointerId ? c.pointerId: c.identifier)) {
                            la = -99;
                            c = wa(c);
                            O.x = c.x / X;
                            O.y = c.y / X;
                            ab = c.x;
                            $a = c.y;
                            kb = a.timeStamp;
                            g(ab, $a, kb, jc);
                            if (_[27] != F(ia.touchtype)) if (E() && 1 < wb.length) {
                                var e = wb[0],
                                h = wb[wb.length - 1],
                                c = (h.t - e.t) / 15;
                                0 < c && (e = n(e.x, e.y, h.x, h.y), ga = !0, ca = e.h / c, oa = e.v / c)
                            } else ga = !1,
                            oa = ca = 0;
                            O.down = !1;
                            0 == O.up && (O.up = !0, Fa && (c = 52800 / (Math.min(Math.max(ja.currentfps, 10), 60) + 35), 32 > O.dd && (a.timeStamp | 0) - Fa.t > c && D(a)), Ka(_[113]), (0 == O.moved || 5 > Math.abs(O.x - O.downx) && 5 > Math.abs(O.y - O.downy)) && Ka(_[131]));
                            Fa = null
                        }
                    }
                }
                function S(a) {
                    d(a);
                    M = !1;
                    fa = la = -99;
                    Da = !1;
                    xb = 0;
                    Fa = null
                }
                function Z(a) {
                    0 == m.control.preventTouchEvents || Ia && 2 > xb || (Aa(a), Da = !0, Fa = null, pa = p.fov, la = -99, O.down = !1)
                }
                function B(a, b) {
                    if (0 != m.control.preventTouchEvents) {
                        var c = void 0 !== b ? b: a.scale;
                        if (Ia) {
                            if (2 > xb) return;
                            0 == Da && Z(a);
                            c = qd *= c
                        }
                        Aa(a);
                        cb = Ta();
                        if (E()) {
                            oa = ca = 0;
                            var d = 2 / Y,
                            e = 1 / Math.tan(pa / d),
                            d = Math.atan(1 / (e * c)) * d,
                            e = d > p.fov ? -3 : 3;
                            m.wheeldelta = e;
                            m.wheeldelta_raw = e / 3;
                            m.wheeldelta_touchscale = c;
                            0 == ia.touchzoom && (d = p.fov);
                            ia.bouncinglimits && (d < p.fovmin ? (d = G(d), c = G(p.fovmin), Ga = .5 * -(d - c), Oa = !0, ha = 1, d += Ga, Ga = 1E-9, d = Ba(d)) : d > p.fovmax && (d = G(d), c = G(p.fovmax), Ga = .75 * -(d - c), Oa = !0, ha = 1, d += Ga, Ga = 1E-9, d = Ba(d)));
                            if (ia.zoomtocursor && (0 < e || 1 == ia.zoomoutcursor)) {
                                if (e = ka.length, 0 < e) {
                                    Ma = !0;
                                    for (c = va = Ha = 0; c < e; c++) {
                                        var f = ka[c];
                                        Ha += f.lx;
                                        va += f.ly
                                    }
                                    Ha /= e;
                                    va /= e;
                                    p.updateView();
                                    e = p.screentosphere(Ha, va);
                                    p.fov = d;
                                    p.updateView();
                                    c = p.screentosphere(Ha, va);
                                    d = p.hlookat + (e.x - c.x);
                                    e = p.vlookat + (e.y - c.y);
                                    if (c = p._limits) 360 > c[0] && (d < c[1] ? d = c[1] : d > c[2] && (d = c[2])),
                                    e < c[4] ? e = c[4] : e > c[5] && (e = c[5]);
                                    p.hlookat = d;
                                    p.vlookat = e
                                }
                            } else p.fov = d,
                            p.updateView();
                            Ka(_[100]);
                            p.haschanged = !0
                        }
                    }
                }
                function t(a) {
                    0 != m.control.preventTouchEvents && (Da && (Da = !1), ra = !1, ka = [], Aa(a))
                }
                function G(a) {
                    return pb * Math.log(1 / Math.tan(.5 * a * Y))
                }
                function Ba(a) {
                    return 2 * Math.atan(1 / Math.exp(a / pb)) / Y
                }
                var P = Pa;
                P.mouse = !1;
                P.touch = !1;
                var Fa = null,
                wa = null,
                ta = null,
                W = null,
                N = [],
                Da = !1,
                U = 0,
                Va = !1,
                M = !1,
                I = 1,
                pa = 90,
                la = -99,
                T = 0,
                ya = 0,
                ab = 0,
                $a = 0,
                kb = 0,
                wb = [],
                fa = -99,
                ra = !1,
                Sa = 100,
                ka = [],
                ua = !1,
                Ia = !1,
                Pb = null,
                xb = 0,
                qd = 1,
                ga = !1,
                ca = 0,
                oa = 0,
                sa = !1,
                Qa = 0,
                La = 0,
                za = 0,
                xa = 0,
                Oa = !1,
                Ga = 0,
                ha = 0,
                Ma = !1,
                Ha = 0,
                va = 0,
                Ea = 0,
                Ua = 0,
                Na = !1,
                Ra = 0,
                Bb = 0,
                Za = null,
                bb = null;
                P.registerControls = function(a) {
                    W = a;
                    ta = b.browser.events;
                    wa = V.getMousePos;
                    b.ie && (Ia = (ua = jb.msPointerEnabled || jb.pointerEnabled) && (1 < jb.msMaxTouchPoints || 1 < jb.maxTouchPoints));
                    Va = Ia || 0 == b.simulator && b.ios || void 0 !== aa.documentElement.ongesturestart;
                    if (b.chrome || b.android) Va = !1;
                    a = !(0 == b.simulator && b.ios || b.android || 10 <= b.ieversion && b.touchdeviceNS);
                    var c = b.touchdeviceNS;
                    c && (b.mobile || b.tablet) && 0 == b.simulator && (a = !1);
                    P.mouse = a;
                    P.touch = c;
                    ta.mouse = a;
                    ta.touch = c;
                    R(aa, _[126], r, !1);
                    R(aa, "keyup", y, !1);
                    R(b.topAccess ? top: L, _[37], w, !0);
                    R(b.topAccess ? top: L, _[64], w, !0);
                    R(aa, _[52], e);
                    R(aa, _[79], e);
                    R(aa, _[81], e);
                    R(aa, _[82], e);
                    if (a || ua) R(W, _[95], v, !1),
                    R(W, _[108], v, !1); (a || ua) && R(L, _[10], u, !0);
                    a && R(W, _[7], z, !1); (a && b.realDesktop || b.ie) && R(W, _[37], D, !0);
                    c && (R(W, ta.touchstart, h, !0), R(W, ta.touchmove, h, !0), R(W, ta.touchstart, qa, !1), R(W, ta.touchmove, ea, !0), R(W, ta.touchend, Ca, !0), R(W, ta.touchcancel, S, !0), Va && (R(W, ta.gesturestart, Z, !1), R(W, ta.gesturechange, B, !1), R(W, ta.gestureend, t, !0), Ia && (R(W, _[93], t, !0), Pb = new MSGesture, Pb.target = W)))
                };
                P.domUpdate = function() {
                    if (Pb) {
                        var a = W;
                        xb = 0;
                        P.unregister();
                        P.registerControls(a)
                    }
                };
                P.unregister = function() {
                    Pb && (Pb = Pb.target = null);
                    ba(aa, _[126], r, !1);
                    ba(aa, "keyup", y, !1);
                    ba(b.topAccess ? top: L, _[37], w, !0);
                    ba(b.topAccess ? top: L, _[64], w, !0);
                    b.topAccess && ba(top, _[4], C, !0);
                    ba(aa, _[52], e);
                    ba(aa, _[79], e);
                    ba(aa, _[81], e);
                    ba(aa, _[82], e);
                    ba(L, _[10], u, !0);
                    ba(L, _[10], q, !0);
                    ba(L, _[4], J, !0);
                    ba(W, _[95], v, !1);
                    ba(W, _[108], v, !1);
                    ba(W, _[7], z, !1);
                    ba(W, _[37], D, !1);
                    ba(W, ta.touchstart, h, !0);
                    ba(W, ta.touchmove, h, !0);
                    ba(W, ta.touchstart, qa, !1);
                    ba(W, ta.touchmove, ea, !0);
                    ba(W, ta.touchend, Ca, !0);
                    ba(W, ta.touchcancel, S, !0);
                    ba(W, ta.gesturestart, Z, !1);
                    ba(W, ta.gesturechange, B, !1);
                    ba(W, ta.gestureend, t, !0);
                    ba(W, _[93], t, !0);
                    wa = ta = W = null
                };
                P.handleFrictions = function() {
                    var a, b = a = !1,
                    c = m.hlookat_moveforce,
                    d = m.vlookat_moveforce,
                    e = m.fov_moveforce;
                    if (0 != e) {
                        var f = ia.keybfovchange;
                        Ma = !1;
                        Oa = !0;
                        ha = 0;
                        Ga += f * e * .001
                    }
                    if (0 != c || 0 != d || 0 != Ea || 0 != Ua) {
                        var g = ia.keybfriction,
                        b = ia.keybspeed,
                        e = p.hlookat,
                        f = p.vlookat,
                        h = ia.keybaccelerate * Math.tan(Math.min(.5 * Number(p.fov), 45) * Y);
                        Ea += c * h;
                        c = Ua += d * h;
                        d = Ea;
                        Ea *= g;
                        Ua *= g;
                        g = Math.sqrt(c * c + d * d);
                        0 < g ? (c /= g, d /= g) : d = c = 0;
                        g > b && (g = b);
                        d *= g;
                        e = 180 >= (Math.floor(f) % 360 + 450) % 360 ? e + d: e - d;
                        f += c * g;
                        p.hlookat = e;
                        p.vlookat = f;
                        g < .05 * h && (Ua = Ea = 0);
                        b = !0
                    }
                    a |= b;
                    if (ga) c = Math.pow(ia.touchfriction, .92),
                    ca *= c,
                    oa *= c,
                    c = Math.sqrt(oa * oa + ca * ca),
                    d = Math.min(.04 * uc / p.r_zoom, .5),
                    0 != c && (p.hlookat += ca, p.vlookat += oa),
                    c < d && (ga = !1, oa = ca = 0),
                    a |= 1;
                    else if (sa) {
                        var c = O,
                        d = za,
                        b = Qa,
                        e = La,
                        g = .025 * ia.mouseaccelerate,
                        k = ia.mousespeed,
                        h = ia.mousefriction,
                        f = !1;
                        if (E()) {
                            if (c.down && (c.x != c.downx || c.y != c.downy)) {
                                var q = n(c.downx, c.downy, c.x, c.y);
                                q.h = xa;
                                b = d * b - q.h * g;
                                e = d * e - q.v * g;
                                d = Math.sqrt(b * b + e * e);
                                0 < d && (b /= d, e /= d, d > k && (d = k))
                            }
                            g = p.hlookat;
                            k = p.vlookat;
                            k += d * e * ia.mouseyfriction;
                            p.hlookat = g + d * b;
                            p.vlookat = k;
                            d *= h;
                            h = Math.min(.04 * uc / p.r_zoom, .5);
                            0 == c.down && d < h && (f = !0)
                        } else f = !0;
                        f && (sa = !1, xa = e = b = d = 0);
                        za = d;
                        Qa = b;
                        La = e;
                        a |= 1
                    }
                    if (Oa) {
                        a: {
                            d = c = p.fov;
                            b = Ga;
                            e = !1;
                            if (0 < Math.abs(b)) {
                                h = b;
                                g = ia.fovspeed;
                                e = p.fovmin;
                                f = p.fovmax;
                                b *= ia.fovfriction;
                                Math.abs(h) > g && (h = g * (h / Math.abs(h)));
                                c = G(c);
                                c = Ba(c + h);
                                if (ia.bouncinglimits && 0 < ha) if (0 == Da) h = G(c),
                                c < e ? (b = G(e), b = .25 * -(h - b)) : c > f && (b = G(f), b = .25 * -(h - b));
                                else {
                                    c = void 0;
                                    break a
                                } else c < e && (c = e, b = 0),
                                c > f && (c = f, b = 0);
                                p.fov = c;
                                Ga = b;
                                e = !0;
                                Ma && (p.fov = d, p.updateView(), d = p.screentosphere(Ha, va), p.fov = c, p.updateView(), c = p.screentosphere(Ha, va), b = p.vlookat + (d.y - c.y), p.hlookat += d.x - c.x, p.vlookat = b)
                            }
                            1E-5 > Math.abs(Ga) && (ha = Ga = 0, Oa = !1);
                            c = e
                        }
                        a |= c
                    }
                    Na && (c = !1, O.down ? c = !1 : (d = p.hlookat, b = p.vlookat, d += Ra, b += Bb, p.hlookat = d, p.vlookat = b, c = !0, Ra *= .95, Bb *= .95, e = p._limits, ia.bouncinglimits && e && (360 > e[0] && (d < e[1] ? Ra = .15 * -(d - e[1]) : d > e[2] && (Ra = .15 * -(d - e[2]))), b < e[4] ? Bb = .15 * -(b - e[4]) : b > e[5] && (Bb = .15 * -(b - e[5]))), d = .15 * Math.min(.04 * uc / p.r_zoom, .5), Math.sqrt(Ra * Ra + Bb * Bb) < d && (Ra = Bb = 0, Na = !1)), a |= c);
                    return a
                };
                P.stopFrictions = function(a) {
                    0 == (0 | a) && (a = 3);
                    a & 1 && (Qa = ca = 0);
                    a & 2 && (La = oa = 0);
                    a & 4 && (x(), O.down = !1)
                };
                P.isMultiTouch = function() {
                    return Da || M || 1 < xb || ra
                };
                P.isBouncing = function() {
                    return 0 < ha || Na
                };
                P.focusLoss = w;
                P.trackTouch = function(b) {
                    if (0 == Va || Ia) {
                        var c = b.type;
                        c == ta.touchstart ? ua ? A(b) : a(b) : c == ta.touchend && (ua ? H(b) : d(b))
                    }
                };
                var pb = -.1
            })();
            var fa = null,
            M = null,
            Cb = !1,
            $c = !1,
            Db = 0,
            Wa = !1,
            ad = !1,
            Eb = -1,
            Xa = {}; (function() {
                function a(a, b) {
                    if (!0 !== b) p.haschanged = !0;
                    else { ! 0 !== a && (Kb = Ta());
                        var c = m.webVR;
                        c && c.enabled && c.updateview();
                        Ka(_[299]);
                        p.updateView();
                        fa && Oa.renderpano(fa, 2);
                        M && Oa.renderpano(M, 1);
                        z && (z = Oa.rendersnapshot(z, M));
                        ob(!0);
                        Ka(_[278])
                    }
                }
                function d(a, b, c, d, e) {
                    h.count++;
                    h.id = h.count;
                    if (f()) {
                        da.busy = !0;
                        m.xml.url = "";
                        m.xml.content = a;
                        var g = (new DOMParser).parseFromString(a, _[25]);
                        T.resolvexmlincludes(g,
                        function() {
                            g = T.xmlDoc;
                            n(g, b, c, d, e)
                        })
                    }
                }
                function E(a) {
                    var b = 0 != (c & 64) && 0 == (c & 256),
                    d; ! 0 === a && (c = b = 0);
                    if (0 == (c & 4)) {
                        var e = xa.getArray();
                        a = e.length;
                        for (d = 0; d < a; d++) {
                            var g = e[d]; ! g || 0 != b && 0 != g.keep || (g.sprite && (g.visible = !1, g.parent = null, V.pluginlayer.removeChild(g.sprite)), g.destroy(), xa.removeItem(d), d--, a--)
                        }
                    }
                    if (0 == (c & 128)) for (e = Ua.getArray(), a = e.length, d = 0; d < a; d++) if ((g = e[d]) && (0 == b || 0 == g.keep)) {
                        if (g.sprite) {
                            g.visible = !1;
                            g.parent = null;
                            try {
                                V.hotspotlayer.removeChild(g.sprite)
                            } catch(f) {}
                            if (g._poly) {
                                try {
                                    V.svglayer.removeChild(g._poly)
                                } catch(h) {}
                                g._poly.kobject = null;
                                g._poly = null
                            }
                        }
                        g.destroy();
                        Ua.removeItem(d);
                        d--;
                        a--
                    }
                    b = Yb.getArray();
                    a = b.length;
                    for (d = 0; d < a; d++)(e = b[d]) && 0 == pa(e.keep) && (Yb.removeItem(d), d--, a--)
                }
                function f() {
                    return 1 < h.count && h.removeid != h.id && (h.removeid = h.id, Ka(_[301], !0), h.removeid != h.id) ? !1 : !0
                }
                function g(a) {
                    var b, c, d = "";
                    a = Gc(a);
                    b = a.lastIndexOf("/");
                    c = a.lastIndexOf("\\");
                    c > b && (b = c);
                    0 <= b && (d = a.slice(0, b + 1));
                    return d
                }
                function n(a, d, e, g, f) {
                    za.currentmovingspeed = 0;
                    K = !1;
                    c = M ? 64 : 0;
                    e && (e = F(e), 0 <= e.indexOf(_[323]) && (c |= 4), 0 <= e.indexOf(_[306]) && (c |= 128), 0 <= e.indexOf(_[391]) && (c |= 16), 0 <= e.indexOf(_[418]) && (c |= 32), 0 <= e.indexOf("merge") && (c |= 16448), 0 <= e.indexOf(_[354]) && (c |= 256), 0 <= e.indexOf(_[412]) && (c |= 4), 0 <= e.indexOf(_[459]) && (c |= 36), 0 <= e.indexOf(_[400]) && (K = !0, c |= 65536), 0 <= e.indexOf(_[310]) && I(_[102], 0), 0 <= e.indexOf(_[360]) && (c |= 1056));
                    0 == K && (Db = 0, g && (g = F(g), e = g.indexOf(_[490]), 0 <= e && (Db = parseFloat(g.slice(e + 6)), isNaN(Db) || 0 > Db)) && (Db = 2), M && (e = 0 != (c & 1024), b.webgl ? (e && (fa || z) && (fa && (z = Oa.snapshot(z, fa)), e = !1), fa && (fa.destroy(), fa = null), 0 == e ? (M.stop(), z = Oa.snapshot(z, M), M.destroy(), M = null) : (M.suspended = !0, fa = M, M = null, Oa.renderpano(fa, 2)), Oa.setblendmode(g), Eb = -1, Wa = !1) : (0 == Wa ? (fa && (fa.destroy(), fa = null), fa = M, 0 == e ? fa.stop() : fa.suspended = !0, M = null) : (g = (Ta() - Eb) / 1E3 / Db, g = y(g), .5 < g ? M && (M.destroy(), M = null) : (fa && (fa.destroy(), fa = null), fa = M, 0 == e ? fa.stop() : fa.suspended = !0, M = null), Wa = !1), fa && fa.stopped && Oa.renderpano(fa, 2))), c & 32 && (u[0] = p.hlookat, u[1] = p.vlookat, u[2] = p.camroll, u[3] = p.fov, u[4] = p.fovtype, u[5] = p.fovmin, u[6] = p.fovmax, u[7] = p.maxpixelzoom, u[8] = p.fisheye, u[9] = p.fisheyefovlink, u[10] = p.stereographic, u[12] = p.pannini, u[13] = p.architectural, u[14] = p.architecturalonlymiddle), 0 == (c & 16384) && p.defaults(), p.limitview = "auto", p.hlookatmin = Number.NaN, p.hlookatmax = Number.NaN, p.vlookatmin = Number.NaN, p.vlookatmax = Number.NaN, m.preview && delete m.preview, m.image && delete m.image, m.onstart = null, N = m.image = {},
                    N.type = null, N.multires = !1, N.multiresthreshold = .025, N.cubelabels = "l|f|r|b|u|d", N.stereo = !1, N.stereoformat = "TB", N.stereolabels = "1|2", N.tiled = !1, N.tilesize = 0, N.tiledimagewidth = 0, N.tiledimageheight = 0, N.baseindex = 1, N.level = new bb, N.hfov = 0, N.vfov = 0, N.voffset = 0, N.hres = 0, N.vres = 0, N.haschanged = !1, va(N, "frame", 1), N.frames = 1);
                    E();
                    if (a && a.documentElement && _[22] == a.documentElement.nodeName) Ea(a.baseURI + _[21]);
                    else {
                        T.parsexml(a.childNodes, null, c);
                        if (null != m._loadpanoscene_name) {
                            var h = U(_[72] + m._loadpanoscene_name + "]");
                            h && (g = _[124] + h.content + _[117], m.xml.url = "", m.xml.scene = m._loadpanoscene_name, m.xml.content = g, m.onstart = null, g = (new DOMParser).parseFromString(g, _[25]), T.resolvexmlincludes(g,
                            function() { (a = T.xmlDoc) && a.documentElement && _[22] == a.documentElement.nodeName ? Ea(a.baseURI + _[21]) : (T.parsexml(a.childNodes, null, c), f = h.onstart)
                            }));
                            m._loadpanoscene_name = null
                        }
                        m.xmlversion = m.version;
                        m.version = m.buildversion;
                        D = f;
                        Wd(d);
                        k()
                    }
                }
                function k() {
                    var a, b, d = m.plugin.getArray();
                    m.hotspot.getArray();
                    var g;
                    b = d.length;
                    for (a = 0; a < b; a++) {
                        var f = d[a];
                        if (f && f.layer && f.layer.isArray) {
                            var k = f.layer.getArray();
                            g = k.length;
                            for (b = 0; b < g; b++) {
                                var n = k[b];
                                n && (n.parent = f.name, n.keep = f.keep, xa.createItem(n.name, n))
                            }
                            f.plugin = null;
                            f.layer = null;
                            a--;
                            b = d.length
                        }
                    }
                    if (0 != e(!0)) {
                        if (0 == K) {
                            c & 32 && (p.hlookat = u[0], p.vlookat = u[1], p.camroll = u[2], p.fov = u[3], p.fovtype = u[4], p.fovmin = u[5], p.fovmax = u[6], p.maxpixelzoom = u[7], p.fisheye = u[8], p.fisheyefovlink = u[9], p.stereographic = u[10], p.pannini = u[12], p.architectural = u[13], p.architecturalonlymiddle = u[14]);
                            Xa.updateview();
                            fa && fa.removemainpano();
                            for (a = 0; 4100 > a; a++);
                            void 0 !== ja.hardwarelimit && (Lb = parseFloat(ja.hardwarelimit), isNaN(Lb) && (Lb = 0));
                            void 0 !== ja.usedesktopimages && (ce = pa(ja.usedesktopimages));
                            Cb = !0;
                            sc.progress = 0;
                            M = Oa.createPano(N);
                            M.addToLayer(V.panolayer);
                            0 <= Db && (ad = !0, M.setblend(0), ub = !0, qc = 0)
                        }
                        da.busy = !1;
                        da.actions_autorun(_[466], !0);
                        a = m.onstart;
                        D && (a = D, D = null);
                        d = h.id;
                        da.callaction(a, null, !0);
                        if (d == h.id && (da.actions_autorun(_[467], !1), Ka(_[287]), m.xml && m.xml.scene && Ka(_[369]), d == h.id)) {
                            0 == K && x();
                            a = Ua.getArray();
                            d = a.length;
                            for (f = 0; f < d; f++)(b = a[f]) && null == b.sprite && (b.create(), V.hotspotlayer.appendChild(b.sprite));
                            e();
                            Ka(_[63]);
                            Xa.updateview();
                            da.processactions()
                        }
                    }
                }
                function e(a) {
                    var b = xa.getArray(),
                    c = b.length,
                    d,
                    e = !0;
                    for (d = 0; d < c; d++) {
                        var g = b[d];
                        if (g) {
                            var f = !1;
                            1 == a ? 1 == g.preload && _[15] != g.type && 0 == g.loaded && (g.onloaded = k, g.altonloaded = null, f = !0, e = !1) : (1 == g.preload && (g.preload = !1, g.onloaded = null), f = !0);
                            f && null == g.sprite && (g.create(), null == g._parent && V.pluginlayer.appendChild(g.sprite))
                        }
                    }
                    return e
                }
                function w() {
                    Ka(_[216])
                }
                function x() {
                    var c = b.desktop || ce,
                    d = !1,
                    e = N.type,
                    g = parseFloat(N.hfov),
                    f = parseFloat(N.vfov),
                    h = parseFloat(N.voffset);
                    isNaN(g) && (g = 0);
                    isNaN(f) && (f = 0);
                    isNaN(h) && (h = 0);
                    var k = !!(N.multires && N.level && 0 < N.level.count),
                    n = !!N.mobile,
                    l = !!N.tablet;
                    c || 0 != k || !n && !l || (e = "cube", d = !0);
                    if (null == e) if (N.left || N.cube) e = "cube";
                    else if (N.cubestrip) e = _[39];
                    else if (N.sphere) e = _[42];
                    else if (N.cylinder) e = _[24];
                    else if (N.flat) e = "flat";
                    else {
                        if (n || l) e = "cube",
                        d = !0
                    } else e = F(e);
                    var m = _[42] == e || _[24] == e,
                    p = 0 < g && 1 >= g && 45 >= f && m || "flat" == e,
                    u = "cube" == e || _[39] == e || null == e && 0 == m && 0 == p,
                    c = !1,
                    t = null;
                    if (u) g = 360,
                    f = 180;
                    else if (m || p) if (t = ra.parsePath(U(_[487] + e + ".url"))) {
                        var G = 0;
                        0 <= (G = F(t).indexOf(_[478])) && (m = c = !0, k = p = !1, b.panovideosupport && (t = t.slice(G + 7)))
                    }
                    N.type = e;
                    N.hfov = g;
                    N.vfov = f;
                    N.voffset = h;
                    h = ("" + N.cubelabels).split("|");
                    6 == h.length && (M.cubelabels = h);
                    M.stereo = b.webgl ? N.stereo: !1;
                    M.stereoformat = "sbs" == F(N.stereoformat) ? 0 : 1;
                    h = ("" + N.stereolabels).split("|");
                    2 == h.length && (M.stereolabels = h);
                    G = F(U(_[294]));
                    if (h = U(_[322])) {
                        h = ra.parsePath(h);
                        if (_[39] == G || "null" == G && u) {
                            G = U(_[211]);
                            if (null != G) {
                                var G = F(G),
                                x = [0, 1, 2, 3, 4, 5];
                                x[G.indexOf("l")] = 0;
                                x[G.indexOf("f")] = 1;
                                x[G.indexOf("r")] = 2;
                                x[G.indexOf("b")] = 3;
                                x[G.indexOf("u")] = 4;
                                x[G.indexOf("d")] = 5;
                                G = x
                            }
                            M.addCubestripPreview(h, G)
                        } else("flat" == G || ("null" == G || _[42] == G || _[24] == G) && p) && M.addFlatLevel(h, g, f, 0, 0, 0, N.baseindex, !0);
                        a(!1, !0)
                    } else if (0 == G.indexOf("grid")) {
                        if (h = Gb(G)) if (h = h[0], "grid" == h.cmd) {
                            var P = h.args,
                            h = void 0 == P[1] ? 64 : parseInt(P[1]),
                            G = void 0 == P[2] ? 64 : parseInt(P[2]),
                            x = void 0 == P[3] ? 512 : parseInt(P[3]),
                            z = void 0 == P[4] ? 6710886 : parseInt(P[4]),
                            y = void 0 == P[5] ? 2236962 : parseInt(P[5]),
                            P = void 0 == P[6] ? void 0 == P[4] ? 16777215 : z: parseInt(P[6]),
                            z = ca(z),
                            y = ca(y),
                            P = ca(P);
                            M.addGridPreview(x, h, G, y, z, P);
                            a(!1, !0);
                            w()
                        }
                    } else w();
                    h = !1;
                    G = b.androidstock && !b.webgl;
                    if (p || u) {
                        if (d || u && G) l ? h = r(_[311]) : n && (h = r(_[313]));
                        if (0 == h) if ("cube" == e) {
                            if (k) if (n = N.level.getArray(), d = n.length, n.sort(function(a, b) {
                                return + parseInt(a.tiledimagewidth, 10) - parseInt(b.tiledimagewidth, 10)
                            }), 0 == b.multiressupport || G) {
                                f = b.iphone && b.retina || b.tablet || b.android ? 1100 : b.iphone ? 512 : 2560;
                                0 < Lb && (f = Lb + 256);
                                for (k = d - 1; 0 <= k && !(g = n[k].tiledimagewidth, g <= f); k--);
                                0 <= k && (h = r(_[54] + k + "]", !0))
                            } else for (n.sort(function(a, b) {
                                return + parseInt(a.tiledimagewidth, 10) - parseInt(b.tiledimagewidth, 10)
                            }), k = 0; k < d; k++) if (n = _[54] + k + "]", l = U(n), f = v(n)) n = l.tilesize ? l.tilesize: N.tilesize,
                            g = parseInt(l.tiledimagewidth, 10),
                            0 < n && 0 < g && (M.addCubeLevel(f, g, n, N.baseindex), h = !0);
                            0 == h && (h = r(_[75]))
                        } else if (_[39] == e && N.cubestrip) M.addCubestripPano(ra.parsePath("" + N.cubestrip.url)),
                        h = !0;
                        else if ((_[42] == e || _[24] == e) && 1 >= g && 45 >= f || "flat" == e) {
                            if (b.multiressupport && k) for (n = N.level.getArray(), d = n.length, n.sort(function(a, b) {
                                return + parseInt(a.tiledimagewidth, 10) - parseInt(b.tiledimagewidth, 10)
                            }), k = 0; k < d; k++) if (n = _[54] + k + "]", l = U(n), c = U(n + "." + e + ".url"), c = ra.parsePath(c)) n = l.tilesize ? l.tilesize: N.tilesize,
                            t = parseInt(l.tiledimagewidth, 10),
                            l = parseInt(l.tiledimageheight, 10),
                            0 < n && 0 < t && 0 < l && (M.addFlatLevel(c, g, f, t, l, n, N.baseindex, !1), h = !0);
                            0 == h && (d = N[e]) && d.url && (M.addFlatLevel(ra.parsePath("" + d.url), g, f, 0, 0, 0, N.baseindex, !1), h = !0)
                        }
                    } else m && 0 == k && b.webgl && t && ((g = [Number(N.hfov), Number(N.vfov), Number(N.voffset)], c) ? b.panovideosupport && (f = xa.getItem(t)) && (f.renderToBitmap = !0, f.visible = !1, M.addRoundPano(e, null, g, f), h = !0) : (M.addRoundPano(e, t, g), h = !0));
                    h && (Cb = $c = !0);
                    M.finalize();
                    0 == h && null != e && la(2, _[171]);
                    a(!1, !0)
                }
                function v(a) {
                    var b = _[174].split(" "),
                    c = Array(6),
                    d,
                    e;
                    if (d = U(a + "." + b[6] + ".url")) {
                        if (d = ra.parsePath(d)) for (e = 0; 6 > e; e++) c[e] = d.split("%s").join(M.cubelabels[e])
                    } else for (e = 0; 6 > e; e++) if (d = ra.parsePath(U(a + "." + b[e] + ".url"))) c[e] = d;
                    else return null;
                    return c
                }
                function r(a, b) {
                    var c = v(a);
                    if (!c) return ! 1;
                    if (b) {
                        var d = U(a),
                        e = d.tilesize ? d.tilesize: N.tilesize,
                        d = parseInt(d.tiledimagewidth, 10);
                        M.addCubeLevel(c, d, e, N.baseindex)
                    } else M.addCubeLevel(c, 0, 0, 1);
                    return ! 0
                }
                function y(a) {
                    1 < a && (a = 1);
                    0 == b.webgl && (a *= a * a);
                    a = 1 - a;
                    0 > a && (a = 0);
                    return a
                }
                var l = Xa;
                l.loadpano = function(a, b, c, e, k) {
                    h.count++;
                    h.id = h.count;
                    if (f()) if (0 > F(c).indexOf(_[358]) && I(_[102], 0), "null" == F(a) && (a = null), m.xml.content = null, m.xml.scene = null, a) {
                        da.busy = !0;
                        null == ra.firstxmlpath ? ra.firstxmlpath = g(a) : a = ra.parsePath(a, !0);
                        ra.currentxmlpath = g(a);
                        m.xml.url = a;
                        var l = h.id;
                        ra.loadxml(a,
                        function(d, g) {
                            if (l == h.id) {
                                if (d && d.childNodes) {
                                    var f = d.childNodes,
                                    m = f.length;
                                    0 == m ? d = null: 2 == m && f[1] && _[22] == f[1].nodeName && (d = null)
                                }
                                d ? (d = T.resolvexmlencryption(d, a), null != d && T.resolvexmlincludes(d,
                                function() {
                                    d = T.xmlDoc;
                                    n(d, b, c, e, k)
                                })) : 200 == g ? Ea(a + _[21]) : Ea(a + _[181])
                            }
                        })
                    } else m.xml.url = "",
                    d(_[219], b, c, e, k)
                };
                l.loadxml = d;
                l.loadxmldoc = n;
                l.updateview = a;
                l.updateplugins = function(a) {
                    var b = xa.getArray(),
                    c = b.length,
                    d;
                    for (d = 0; d < c; d++) {
                        var e = b[d];
                        e && (a || e.poschanged) && e.loaded && e.updatepos()
                    }
                };
                l.checkautorotate = function(a) {
                    var b = Ta();
                    a && (Kb = b);
                    Kb > cb && (cb = Kb);
                    a = b - cb;
                    a > 1E3 * m.idletime && cb != Hd && (Hd = cb, Ka(_[492]));
                    a = b - Kb;
                    if (za.enabled && a > 1E3 * za.waittime) {
                        cb = Kb = 0;
                        var c = p._hlookat;
                        a = p._vlookat;
                        var b = p._fov,
                        d = Math.tan(Math.min(.5 * b, 45) * Y),
                        e = za.accel,
                        g = za.speed,
                        f = za.currentmovingspeed,
                        e = e / 60,
                        g = g / 60;
                        0 < g ? (f += e * e, f > g && (f = g)) : (f -= e * e, f < g && (f = g));
                        za.currentmovingspeed = f;
                        c += d * f;
                        d = Math.abs(d * f);
                        p._hlookat = c;
                        c = parseFloat(za.horizon);
                        isNaN(c) || (c = (c - a) / 60, e = Math.abs(c), 0 < e && (e > d && (c = d * c / e), a += c, p._vlookat = a));
                        a = parseFloat(za.tofov);
                        isNaN(a) || (a < p.fovmin && (a = p.fovmin), a > p.fovmax && (a = p.fovmax), a = (a - b) / 60, c = Math.abs(a), 0 < c && (c > d && (a = d * a / c), b += a, p._fov = b));
                        return ! 0
                    }
                    za.currentmovingspeed = 0;
                    return ! 1
                };
                l.previewdone = w;
                l.havepanosize = function(a) {
                    M && M.id == a.id && (N.hfov = a.hfov, N.vfov = a.vfov, N.hres = a.hres, N.vres = a.vres, Ka(_[405]), p.haschanged = !0)
                };
                l.removeelements = E;
                l.isLoading = function() {
                    return Cb
                };
                l.isBlending = function() {
                    return ad || Wa
                };
                var u = [],
                h = {
                    count: 0,
                    id: 0
                },
                c = 0,
                K = !1,
                D = null,
                z = null;
                l.checkHovering = function() {
                    if (1 != (jc & 1) && !da.blocked) {
                        var a = [xa.getArray(), Ua.getArray()],
                        b,
                        c,
                        d,
                        e,
                        g;
                        for (g = 0; 2 > g; g++) for (b = a[g], d = b.length, e = 0; e < d; e++)(c = b[e]) && c._visible && c.hovering && c.onhover && da.callaction(c.onhover, c)
                    }
                };
                l.handleloading = function() {
                    var a = !1;
                    0 == Wa && (fa && (a |= fa.doloading()), M && (a |= M.doloading()));
                    Cb = M && M.isloading();
                    var b = Oa.handleloading();
                    $c && 1 != Cb && ($c = !1, Ka(_[265]));
                    b & 1 && (Cb = !0);
                    b & 2 && (a = !0);
                    M && (fa || z) && (0 == Wa ? M.previewcheck() && (Wa = !0, Eb = -1) : (a = 0, 0 <= Db && ( - 1 == Eb ? Eb = Ta() : (a = (Ta() - Eb) / 1E3, a = 0 < Db ? a / Db: 1), a = y(a), ad = !0, M.setblend(1 - a), ub = !0, qc = 1 - a), 0 == a && (Db = 0, fa && (fa.destroy(), fa = null), ad = Wa = !1), a = !0));
                    return a
                }
            })();
            var Oa = {}; (function() {
                var a, d;
                function E(a) {
                    if (!1 === document.hidden && ka) {
                        var b = parseInt(ka.style.height);
                        0 < b && (ka.style.height = b + 1 + "px", setTimeout(function() {
                            ka && parseInt(ka.style.height) == b + 1 && (ka.style.height = b + "px")
                        },
                        100))
                    }
                }
                function f(a) {
                    return "#ifdef GL_ES\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n#endif\nuniform float aa;uniform sampler2D sm;varying vec2 tt;void main(){vec4 c=texture2D(sm,vec2(tt.s,tt.t)" + (a ? ",-1.0": "") + ");gl_FragColor=vec4(c.rgb,c.a*aa);}"
                }
                function g(a, b, c) {
                    var d = ua;
                    null == a && (a = "attribute vec2 vx;varying vec2 tx;void main(){gl_Position=vec4(vx.x*2.0-1.0,-1.0+vx.y*2.0,0.0,1.0);tx=vx;}");
                    var e = d.createShader(d.VERTEX_SHADER);
                    d.shaderSource(e, a);
                    d.compileShader(e);
                    if (!d.getShaderParameter(e, d.COMPILE_STATUS)) return la(0, _[185] + d.getShaderInfoLog(e)),
                    null;
                    a = d.createShader(d.FRAGMENT_SHADER);
                    d.shaderSource(a, b);
                    d.compileShader(a);
                    if (!d.getShaderParameter(a, d.COMPILE_STATUS)) return la(0, _[186] + d.getShaderInfoLog(a)),
                    null;
                    b = d.createProgram();
                    d.attachShader(b, e);
                    d.attachShader(b, a);
                    d.linkProgram(b);
                    if (!d.getProgramParameter(b, d.LINK_STATUS)) return la(0, _[162]),
                    null;
                    d.useProgram(b);
                    d.uniform1i(d.getUniformLocation(b, "sm"), 0);
                    e = d.getAttribLocation(b, "vx");
                    d.enableVertexAttribArray(e);
                    e = {
                        prg: b,
                        vxp: e
                    };
                    c = c.split(",");
                    var g, f;
                    g = c.length;
                    for (a = 0; a < g; a++) f = c[a],
                    e[f] = d.getUniformLocation(b, f);
                    return e
                }
                function n(a) {
                    var b = ua;
                    a ? (ob = Cb, Cb = a) : (a = Cb = ob, ob = null);
                    a && b.useProgram(a)
                }
                function k() {
                    var c = ua;
                    try {
                        var e = c.createBuffer();
                        c.bindBuffer(lb, e);
                        c.bufferData(lb, new Float32Array([0, 0, 0, 1, 1, 1, 1, 0]), wc);
                        var h = c.createBuffer();
                        c.bindBuffer(Qb, h);
                        c.bufferData(Qb, new Uint16Array([0, 1, 2, 0, 2, 3]), wc);
                        a = e;
                        d = h;
                        var k;
                        for (k = 0; 6 > k; k++) {
                            var e = _[159],
                            t = h = "",
                            l = "";
                            0 == k ? t = _[168] : 1 == k ? (l = "cc", h = _[88], t = _[158]) : 2 == k ? (l = "cc", h = _[88], t = _[153]) : 3 == k ? (l = "ct,zf", h = _[176], t = _[152]) : 4 == k ? (l = "fp,bl", h = _[175], t = "float t=(tx.x*fp.x+tx.y*fp.y+fp.z)*(1.0-2.0*bl)+bl;gl_FragColor=vec4(texture2D(sm,tx).rgb,smoothstep(t-bl,t+bl,aa));") : 5 == k && (l = _[439], h = _[163], t = "float t=(1.0-sqrt(2.0)*sqrt((ap.x*(tx.x-0.5)*(tx.x-0.5)+ap.y*(tx.y-0.5)*(tx.y-0.5))/(0.5*(ap.x+ap.y))))*(1.0-2.0*bl)+bl;gl_FragColor=vec4(texture2D(sm,(tx-vec2(0.5,0.5))*mix(1.0,aa,zf)+vec2(0.5,0.5)).rgb,smoothstep(t-bl,t+bl,aa));");
                            e = _[187] + e + h + "void main(){" + t + "}";
                            ha[k] = g(null, e, "aa," + l);
                            if (null == ha[k]) return ! 1
                        }
                        var m = c.createShader(c.VERTEX_SHADER);
                        c.shaderSource(m, "attribute vec3 vx;attribute vec2 tx;uniform float sh;uniform float ch;uniform mat4 mx;uniform mat4 ot;uniform mat3 tm;varying vec2 tt;void main(){vec3 vr=vec3(ot*vec4(vx,1));vec3 vs=1000.0*normalize(vr);vec2 c2=vec2(vr.x,vr.z);c2=c2/max(1.0,length(c2));vec3 vc=1000.0*vec3(c2.x,clamp(vr.y*inversesqrt(1.0+vr.x*vr.x+vr.z*vr.z),-30.0,+30.0),c2.y);vec3 vv=vr*(1.0-sh)+sh*(vs*(1.0-ch)+vc*ch);gl_Position=mx*vec4(vv,1);tt=(vec3(tx,1)*tm).xy;}");
                        c.compileShader(m);
                        if (!c.getShaderParameter(m, c.COMPILE_STATUS)) return ! 1;
                        var q = c.createShader(c.FRAGMENT_SHADER);
                        c.shaderSource(q, f(!0));
                        c.compileShader(q);
                        if (!c.getShaderParameter(q, c.COMPILE_STATUS)) if (b.ie) {
                            if (c.shaderSource(q, f(!1)), c.compileShader(q), !c.getShaderParameter(q, c.COMPILE_STATUS)) return ! 1
                        } else return ! 1;
                        var p = c.createProgram();
                        c.attachShader(p, m);
                        c.attachShader(p, q);
                        c.linkProgram(p);
                        if (!c.getProgramParameter(p, c.LINK_STATUS)) return ! 1;
                        n(p);
                        Pa = c.getAttribLocation(p, "vx");
                        Ra = c.getAttribLocation(p, "tx");
                        Ya = c.getUniformLocation(p, "sh");
                        Za = c.getUniformLocation(p, "ch");
                        bb = c.getUniformLocation(p, "aa");
                        pb = c.getUniformLocation(p, "sm");
                        jb = c.getUniformLocation(p, "mx");
                        Bb = c.getUniformLocation(p, "ot");
                        vb = c.getUniformLocation(p, "tm");
                        c.enableVertexAttribArray(Pa);
                        c.enableVertexAttribArray(Ra);
                        Ia.sh = p;
                        Ia.vs = m;
                        Ia.ps = q
                    } catch(G) {
                        return la(0, _[288] + G),
                        !1
                    }
                    return ! 0
                }
                function e(a) {
                    if (a) {
                        var b = ua;
                        b.deleteBuffer(a.vx);
                        b.deleteBuffer(a.tx);
                        b.deleteBuffer(a.ix);
                        a.vx = null;
                        a.tx = null;
                        a.ix = null;
                        a.vxd = null;
                        a.txd = null;
                        a.ixd = null;
                        a.tcnt = 0
                    }
                }
                function w(a, b, c, d) {
                    this.tcnt = a;
                    this.vxd = b;
                    this.txd = c;
                    this.ixd = d;
                    this.ix = this.tx = this.vx = null
                }
                function x(a) {
                    var b = ua;
                    b.bindBuffer(lb, a.vx = b.createBuffer());
                    b.bufferData(lb, a.vxd, wc);
                    b.bindBuffer(lb, a.tx = b.createBuffer());
                    b.bufferData(lb, a.txd, wc);
                    b.bindBuffer(Qb, a.ix = b.createBuffer());
                    b.bufferData(Qb, a.ixd, wc)
                }
                function v(a, b) {
                    var c, d = 2 * (b + 1) * (b + 1);
                    c = 6 * b * b;
                    var e = new Float32Array(3 * (b + 1) * (b + 1)),
                    g = new Float32Array(d),
                    f = new Uint16Array(c);
                    if (isNaN(b) || 0 >= b) b = 1;
                    var h, k, t, n, l;
                    a *= 2;
                    for (k = c = d = 0; k <= b; k++) for (h = 0; h <= b; h++) t = h / b,
                    n = k / b,
                    g[d] = t,
                    g[d + 1] = n,
                    d += 2,
                    e[c] = a * (t - .5),
                    e[c + 1] = a * (n - .5),
                    e[c + 2] = 0,
                    c += 3;
                    for (k = c = 0; k < b; k++) for (h = 0; h < b; h++) d = h + k * (b + 1),
                    t = d + 1,
                    n = d + (b + 1),
                    l = n + 1,
                    f[c] = d,
                    f[c + 1] = t,
                    f[c + 2] = n,
                    f[c + 3] = t,
                    f[c + 4] = l,
                    f[c + 5] = n,
                    c += 6;
                    return new w(6 * b * b, e, g, f)
                }
                function r(a) {
                    var c = ua;
                    null == a && (a = {
                        have: !1,
                        fb: null,
                        tex: null,
                        w: 0,
                        h: 0,
                        alpha: 1,
                        havepano: -1,
                        drawcalls: 0
                    },
                    a.fb = c.createFramebuffer(), a.tex = c.createTexture(), c.bindTexture(ma, a.tex), c.texParameteri(ma, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), c.texParameteri(ma, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(ma, c.TEXTURE_MAG_FILTER, qb), c.texParameteri(ma, c.TEXTURE_MIN_FILTER, qb));
                    var d = b.gl.width * xa + .5 | 0,
                    e = b.gl.height * xa + .5 | 0;
                    if (a.w != d || a.h != e) a.w = d,
                    a.h = e,
                    c.bindTexture(ma, a.tex),
                    c.texImage2D(ma, 0, mb, d, e, 0, mb, Nc, null),
                    c.bindFramebuffer(Ab, a.fb),
                    c.framebufferTexture2D(Ab, c.COLOR_ATTACHMENT0, ma, a.tex, 0),
                    c.bindTexture(ma, null),
                    c.bindFramebuffer(Ab, null);
                    return a
                }
                function y(c, e, g) {
                    var f = ua;
                    if (0 >= c.drawcalls || null == e) return ! 1;
                    var h = b.gl.width * xa + .5 | 0,
                    k = b.gl.height * xa + .5 | 0;
                    if (0 < h && 0 < k) return n(e.prg),
                    f.viewport(0, 0, h, k),
                    e.aa && (Aa && (g = 1 - Aa(1 - g, 0, 1), 0 > g ? g = 0 : 1 < g && (g = 1)), f.uniform1f(e.aa, g)),
                    e.sz && f.uniform2f(e.sz, h, k),
                    f.bindBuffer(lb, a),
                    f.vertexAttribPointer(e.vxp, 2, Oc, !1, 0, 0),
                    f.bindBuffer(Qb, d),
                    f.activeTexture(Mc),
                    f.bindTexture(ma, c.tex),
                    f.drawElements(Kb, 6, Gb, 0),
                    R++,
                    !0
                }
                function l(a, b, c, d, e, g) {
                    var f = !1;
                    0 == d && (b = c = d = 1024, Da = f = !0);
                    this.type = 0;
                    this.stereo = g;
                    this.preview = !1;
                    this.needsize = f;
                    this.w = b;
                    this.h = c;
                    this.mp = b * c * a >> 20;
                    this.tilesize = d;
                    this.htiles = (b + d - 1) / d | 0;
                    this.vtiles = (c + d - 1) / d | 0;
                    this.loadedtiles = [0, 0];
                    this.addedtiles = [0, 0];
                    this.totaltiles = a * this.htiles * this.vtiles;
                    this.i = e;
                    this.planeurls = Array(a);
                    this.planemapping = 6 == a ? [0, 1, 2, 3, 4, 5] : [1];
                    this.invplanemapping = 6 == a ? [0, 1, 2, 3, 4, 5] : [0, 0, 0, 0, 0, 0];
                    this.completelyadded = this.complete = !1;
                    this.vfov = this.hfov = 90;
                    this.voffset = this.hoffset = 0;
                    this.vscale = 1
                }
                function u(a, b) {
                    return a.preview ? -1 : b.preview ? 1 : a.w - b.w
                }
                function h(a, b, d, e, g, f, h) {
                    f = 0 < f ? e * h / f: 1;
                    0 >= e && (e = 1);
                    0 >= g && (g = f);
                    f = g / f;
                    b.hfov = e;
                    b.vfov = g;
                    b.hoffset = 0;
                    b.voffset = e / 2 - g / f / 2;
                    b.vscale = 1;
                    h = a.levels;
                    d && h.push(b);
                    h.sort(u);
                    b = h.length - 1;
                    for (d = g = 0; d <= b; d++) h[d].needsize || (g = h[d].vfov);
                    if (0 < g) {
                        for (d = 0; d <= b; d++) h[d].needsize || (h[d].vscale = g / h[d].vfov * f);
                        a.fovlimits = [ - e / 2, +e / 2, -g / 2, +g / 2]
                    }
                    c(a)
                }
                function c(a) {
                    var b = null,
                    c = 0 == a.type,
                    d = c || null != a.fovlimits,
                    e = a.levels;
                    if (e) {
                        var g = e.length;
                        0 < g && (e = e[g - 1], 0 == e.preview && 0 == e.needsize && d && (b = e))
                    }
                    b && a.done && 0 == a.ready && (a.ready = !0, a.hfov = c ? 360 : b.hfov, a.vfov = c ? 180 : b.vfov, a.hres = b.w, a.vres = b.h, Xa.havepanosize(a))
                }
                function K() {
                    this.h = this.w = 0;
                    this.imgfov = null;
                    this.loading = !0;
                    this.texture = this.obj = null;
                    this.texvalid = !1;
                    this.mx = Ma()
                }
                function D() {
                    this.layer = null;
                    this.tiles = [];
                    this.mx = this.texture = this.csobj = this.csobj0 = null
                }
                function z(a) {
                    function d(a, b, c, e) {
                        f(a);
                        if (0 == a.type) {
                            var g = ua;
                            c || (c = [0, 1, 2, 3, 4, 5]);
                            var h, k, t, n;
                            if (b) {
                                h = b.naturalWidth;
                                k = b.naturalHeight;
                                n = 1;
                                if (3 * h == 2 * k) t = h / 2;
                                else if (2 * h == 3 * k) t = h / 3;
                                else if (1 * h == 6 * k) t = h / 6;
                                else if (6 * h == 1 * k) t = h / 1;
                                else {
                                    0 == a.type && la(2, _[247] + b.src + _[190]);
                                    return
                                }
                                h /= t;
                                k /= t
                            } else e && (t = e.width, n = 0, h = 1, k = 6, b = e);
                            e = Sa ? 0 : G;
                            var m = t,
                            p = new D,
                            zf = new l(6, m, m, m, 1, !1),
                            r,
                            u,
                            w,
                            v = [2, 0, 3, 1, 4, 5];
                            0 == Sa && (r = Ja(), r.style.position = _[0], r.style.pointerEvents = "none", p.layer = r);
                            p.tiles = Array(6);
                            for (u = 0; u < k; u++) for (r = 0; r < h; r++) {
                                var x = c[u * h + r],
                                P = new q("prev" + a.id + "s" + Yb[x], 0, x, 0, 0, zf, "", a);
                                w = v[x];
                                var B = 1 == x || 3 == x ? e: 0,
                                z = 3 >= x ? e: 0,
                                y = Ja(2);
                                y.width = m + 2 * B;
                                y.height = m + 2 * z;
                                y.style.position = _[0];
                                y.style[Zc] = "0 0";
                                var E = y.getContext("2d");
                                E && (0 < z && (E.drawImage(b, n * r * t, n * u * t, t, 1, B, 0, t, z), E.drawImage(b, n * r * t, n * u * t + t - 1, t, 1, B, m + z, t, z)), 0 < B && (E.drawImage(b, n * r * t + 0, n * u * t + 0, 1, t, 0, B, B, t), E.drawImage(b, n * r * t + t - 1, n * u * t + 0, 1, t, m + B, B, B, t)), E.drawImage(b, n * r * t, n * u * t, t, t, B, z, m, m), Ba && E.getImageData(m >> 1, m >> 1, 1, 1));
                                P.canvas = y;
                                0 == Sa ? (P.elmt = y, y = -m / 2, P.transform = Fb[x] + _[53] + (y - B) + "px," + (y - z) + "px," + y + "px) ") : (J(P, m, m), x = g.createTexture(), g.activeTexture(Mc), g.bindTexture(ma, x), g.texParameteri(ma, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE), g.texParameteri(ma, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE), g.texParameteri(ma, g.TEXTURE_MAG_FILTER, qb), g.texParameteri(ma, g.TEXTURE_MIN_FILTER, qb), g.texImage2D(ma, 0, cc, cc, Nc, y), g.bindTexture(ma, null), P.texture = x, P.mem = 0);
                                P.state = 2;
                                p.tiles[w] = P
                            }
                            Da = !0;
                            a.cspreview = p
                        }
                    }
                    function e(a, b) {
                        t.imagefov = b;
                        var c = a.rppano,
                        d = c.w,
                        g = c.h;
                        a.stereo && (0 == a.stereoformat ? d >>= 1 : g >>= 1);
                        var f = b[0],
                        h = b[1],
                        k = b[2];
                        0 >= f && (f = 360);
                        if (0 >= h) {
                            var h = f,
                            n = d,
                            l = g,
                            m = 180,
                            m = 4 == a.type ? 2 * Math.atan(h / 2 * (l / n) * Y) / Y: h * l / n;
                            180 < m && (m = 180);
                            h = m
                        }
                        a.hfov = f;
                        a.vfov = h;
                        a.hres = d;
                        a.vres = g;
                        c.imgfov = [f, h, k];
                        c = -h / 2 + k;
                        d = +h / 2 + k;
                        4 == a.type && (d = Math.tan(.5 * h * Y), k = Math.sin(k * Y), c = Math.atan( - d + k) / Y, d = Math.atan( + d + k) / Y);
                        a.fovlimits = [ - f / 2, +f / 2, c, d]
                    }
                    function g(a, c, d, e) {
                        c = ua;
                        var f = a.rppano,
                        h = c.createTexture();
                        c.activeTexture(Mc);
                        c.bindTexture(ma, h);
                        c.texParameteri(ma, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
                        c.texParameteri(ma, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
                        c.texParameteri(ma, c.TEXTURE_MAG_FILTER, qb);
                        c.texParameteri(ma, c.TEXTURE_MIN_FILTER, qb);
                        if (d) {
                            var t;
                            e = d.naturalWidth;
                            t = d.naturalHeight;
                            f.w = e;
                            f.h = t;
                            var k = !1,
                            n = !1,
                            l = Q(e) << 1 | Q(t),
                            n = b.opera ? "": F(ja.mipmapping);
                            if (n = "force" == n || "auto" == n && 3 == l) 0 == (l & 2) && (k = !0, e = A(e)),
                            0 == (l & 1) && (k = !0, t = A(t)),
                            c.texParameteri(ma, c.TEXTURE_MIN_FILTER, c.LINEAR_MIPMAP_LINEAR);
                            e > ga && (k = !0, e = ga);
                            t > ga && (k = !0, t = ga);
                            if (k) {
                                k = Ja(2);
                                k.width = e;
                                k.height = t;
                                l = k.getContext("2d");
                                l.drawImage(d, 0, 0, e, t);
                                if (b.ios) {
                                    var m;
                                    m = t;
                                    for (var p = l.getImageData(0, 0, 1, m).data, q = 0, r = m, G = m; G > q;) 0 == p[4 * (G - 1) + 3] ? r = G: q = G,
                                    G = r + q >> 1;
                                    m = G / m;
                                    0 < m && 1 > m && l.drawImage(d, 0, 0, e, t / m)
                                }
                                c.texImage2D(ma, 0, cc, cc, Nc, k)
                            } else c.texImage2D(ma, 0, cc, cc, Nc, d);
                            n && c.generateMipmap(ma);
                            f.texvalid = !0
                        } else e && (f.videoplugin = e, f.videoready = !1);
                        c.bindTexture(ma, null);
                        f.texture = h;
                        a.rppano = f;
                        Da = !0
                    }
                    function f(a) {
                        var b = ua,
                        c = a.cspreview;
                        if (c) if (a.cspreview = null, b) for (a = 0; 6 > a; a++) {
                            var d = c.tiles[a],
                            e = d.texture;
                            e && (b.deleteTexture(e), d.texture = null)
                        } else a.previewadded && (a.layer.removeChild(c.layer), a.previewadded = !1)
                    }
                    var k = ++X,
                    t = this;
                    t.id = k;
                    t.image = a;
                    t.panoview = null;
                    t.type = 0;
                    t.cubelabels = _[519].split("");
                    t.stereo = !1;
                    t.stereoformat = 0;
                    t.stereolabels = ["1", "2"];
                    t.done = !1;
                    t.ready = !1;
                    t.fovlimits = null;
                    t.hfov = 0;
                    t.vfov = 0;
                    t.hres = 0;
                    t.vres = 0;
                    t.levels = [];
                    t.frame = 0;
                    t.currentlevel = -1;
                    t.viewloaded = !1;
                    t.stopped = !1;
                    t.suspended = !1;
                    t.suspended_h = 0;
                    t.alpha = 1;
                    t.cspreview = null;
                    t.rppano = null;
                    t.previewadded = !1;
                    t.previewloading = !1;
                    t.addToLayer = function(a) {
                        if (0 == Sa) {
                            var b = Ja(),
                            c = b.style;
                            c.position = _[0];
                            c.left = 0;
                            c.top = 0;
                            t.layer = b;
                            a.appendChild(b)
                        }
                    };
                    t.addGridPreview = function(a, c, e, g, f, h) {
                        a += 1;
                        var k = b.desktop ? 1023 : b.tablet || b.webgl ? 511 : 255,
                        n = a < k ? a: k,
                        l = Ja(2);
                        l.width = n;
                        l.height = n;
                        k = n / a;
                        e *= k;
                        c *= k;
                        k = l.getContext("2d");
                        k.fillStyle = g;
                        k.fillRect(0, 0, n, n);
                        k.fillStyle = f;
                        for (g = 0; g < a; g += e) k.fillRect(0, g, a, 1);
                        for (g = 0; g < a; g += c) k.fillRect(g, 0, 1, a);
                        if (h != f) for (k.fillStyle = h, f = 0; f < a; f += e) for (g = 0; g < a; g += c) k.fillRect(g, f, 1, 1);
                        setTimeout(function() {
                            d(t, null, null, l)
                        },
                        10)
                    };
                    t.addCubestripPreview = function(a, b) {
                        t.previewloading = !0;
                        ra.loadimage(a,
                        function(a) {
                            d(t, a, b);
                            t.previewloading = !1;
                            Xa.previewdone()
                        },
                        function(b) {
                            la(3, _[58] + a + _[62]);
                            t.previewloading = !1
                        })
                    };
                    t.addCubestripPano = function(a) {
                        ra.loadimage(a,
                        function(a) {
                            d(t, a, null)
                        },
                        function(b) {
                            la(3, _[58] + a + _[62])
                        })
                    };
                    t.addCubeLevel = function(a, b, d, e) {
                        b = new l(6, b, b, d, e, t.stereo);
                        b.planeurls[0] = a[0];
                        b.planeurls[1] = a[1];
                        b.planeurls[2] = a[2];
                        b.planeurls[3] = a[3];
                        b.planeurls[4] = a[4];
                        b.planeurls[5] = a[5];
                        a = t.levels;
                        a.push(b);
                        a.sort(u);
                        c(t)
                    };
                    t.addFlatLevel = function(a, b, c, d, e, g, f, k) {
                        t.type = 1;
                        g = new l(1, d, e, g, f, t.stereo);
                        g.planeurls[0] = a;
                        g.type = 1;
                        g.preview = k;
                        h(t, g, !0, b, c, d, e)
                    };
                    t.addRoundPano = function(a, b, c, d) {
                        _[24] == F(a) ? t.type = 4 : t.type = 3;
                        t.rppano = new K;
                        if (d) {
                            if (t.updateFOV = e, g(t, a, null, d), d._panoid = t.id, t.imagefov = c, d.onvideoreadyCB = function() {
                                var a = t.rppano;
                                a.w = d.videowidth;
                                a.h = d.videoheight;
                                e(t, t.imagefov);
                                p.updateView();
                                Xa.havepanosize(t);
                                t.ready = !0;
                                t.rppano.loading = !1;
                                a.videoready = !0
                            },
                            d.havevideosize) d.onvideoreadyCB()
                        } else b && ra.loadimage(b,
                        function(b) {
                            g(t, a, b);
                            e(t, c);
                            p.updateView();
                            Xa.havepanosize(t);
                            t.rppano.loading = !1
                        })
                    };
                    t.finalize = function() {
                        t.done = !0;
                        c(t)
                    };
                    t.setblend = function(a) {
                        Sa ? t.alpha = a: t.layer && (t.layer.style.opacity = a)
                    };
                    t.removemainpano = function() {};
                    t.stop = function() {
                        t.stopped = !0
                    };
                    t.destroy = function() {
                        var a = ua;
                        f(t);
                        if (a) {
                            var b = t.rppano;
                            if (b) {
                                var c = b.texture;
                                c && a.deleteTexture(c);
                                b.texture = null
                            }
                        }
                        for (var d in ab)(b = ab[d]) && b.pano === t && ea(b);
                        a || (t.layer.parentNode.removeChild(t.layer), t.layer = null)
                    };
                    t.previewcheck = function() {
                        var a = t.rppano;
                        return a && a.videoplugin ? a.texvalid: t.previewloading || 0 == t.type && null == t.cspreview && 0 < t.levels.length && !t.viewloaded ? !1 : !0
                    };
                    t.doloading = function() {
                        return ! 1
                    };
                    t.isloading = function() {
                        if (t.previewloading) return ! 0;
                        var a = t.levels,
                        b = a.length;
                        if (0 < b) {
                            if (0 == t.type && (b = a[0].preview && 1 < b ? 1 : 0, 9 > a[b].mp && !a[b].complete) || !t.viewloaded) return ! 0
                        } else if (a = t.rppano) return a.videoplugin ? a.texvalid: a.loading;
                        return ! 1
                    }
                }
                function q(a, b, c, d, e, g, f, h) {
                    this.id = a;
                    this.pano = h;
                    this.cubeside = c;
                    this.stereo = f;
                    this.levelindex = b;
                    this.level = g;
                    this.h = d;
                    this.v = e;
                    this.draworder = g ? Yb[c] * g.htiles * g.vtiles + e * g.htiles + d: Yb[c];
                    this.url = null;
                    this.sh = this.ch = this.sv = 0;
                    this.mx = this.texture = this.canvas = this.image = this.elmt = null;
                    this.lastusage_on_frame = this.mem = this.retries = this.state = 0;
                    this.overlap = this.transform = null;
                    g && (a = 2 * ((d + .5) / g.htiles - .5), e = 2 * ((e + .5) / g.vtiles - .5), a += .5 / g.htiles, e += .5 / g.vtiles, 1 == h.type && (a *= Math.tan(.5 * g.hfov * Y), e *= Math.tan(.5 * g.vfov * Y)), 0 == c ? (c = 1, g = e, h = -a) : 1 == c ? (c = -a, g = e, h = -1) : 2 == c ? (c = -1, g = e, h = a) : 3 == c ? (c = a, g = e, h = 1) : 4 == c ? (c = -a, h = -e, g = -1) : (c = -a, h = e, g = 1), a = -Math.atan2(c, h), e = -Math.atan2( - g, Math.sqrt(c * c + h * h)), this.sv = Math.sin(e), e = Math.cos(e), this.ch = Math.cos(a) * e, this.sh = Math.sin(a) * e)
                }
                function J(a, b, c) {
                    var d = Jc[a.cubeside],
                    e = a.level,
                    g = e.w / 2,
                    f = e.tilesize,
                    h = 1E3 / g,
                    k = 1,
                    t = e.vscale;
                    1 == e.type && (k = Math.tan(.5 * e.hfov * Y));
                    var n = ( - g + a.h * f + b / 2 + 2 * e.hoffset * g / 90) * h * k,
                    e = ( - g + a.v * f + c / 2 + 2 * e.voffset * g / e.hfov) * h * k * t,
                    g = g * h;
                    Hc(rd, b / 1E3 * k, 0, 0, 0, c / 1E3 * k * t, 0, 0, 0, 1);
                    ye(Zb, n, e, g);
                    Ic(rd, Zb);
                    b = Zb;
                    k = d[1];
                    t = -d[0] * Y;
                    d = Math.cos(t);
                    c = Math.sin(t);
                    t = -k * Y;
                    k = Math.cos(t);
                    t = Math.sin(t);
                    Hc(b, k, 0, -t, c * t, d, c * k, d * t, -c, d * k);
                    Ic(rd, Zb);
                    d = Ma();
                    Hc(d, h, 0, 0, 0, h, 0, 0, 0, h);
                    Ic(d, rd);
                    a.mx = d
                }
                function C(a, b, c, d, e, g) {
                    var f = [],
                    h = a.length,
                    k,
                    t = !1,
                    n = 0,
                    l;
                    for (k = 0; k < h; k++) {
                        var m = a.charAt(k),
                        p = m.charCodeAt(0);
                        if (37 == p) t = !0,
                        n = 0;
                        else if (48 == p) t ? n++:f.push(m);
                        else if (t) {
                            t = !1;
                            l = null;
                            65 <= p && 84 >= p && (p += 32);
                            if (108 == p) l = c;
                            else if (115 == p) l = b;
                            else if (116 == p) l = g;
                            else if (117 == p || 120 == p || 99 == p || 104 == p) l = d;
                            else if (118 == p || 121 == p || 114 == p) l = e;
                            if (null != l) {
                                for (; l.length <= n;) l = "0" + l;
                                f.push(l)
                            } else f.push("%" + m)
                        } else t = !1,
                        f.push(m)
                    }
                    return f.join("")
                }
                function Q(a) {
                    return 0 == (a & a - 1)
                }
                function A(a) {
                    a--;
                    a |= a >> 1;
                    a |= a >> 2;
                    a |= a >> 4;
                    a |= a >> 8;
                    a |= a >> 16;
                    a++;
                    return a
                }
                function H(a, b, c, d, e, g) {
                    if (0 < g) setTimeout(function() {
                        try {
                            H(null, b, c, d, e, 0)
                        } catch(a) {}
                    },
                    g);
                    else {
                        null == a && (a = b.getContext("2d"));
                        g = e[0];
                        var f = e[1],
                        h = e[2],
                        k = e[3];
                        0 < g && a.drawImage(c, 0, 0, 1, d[1], 0, f, g, d[3]);
                        0 < f && a.drawImage(c, 0, 0, d[0], 1, g, 0, d[2], f);
                        0 < h && a.drawImage(c, d[0] - 1, 0, 1, d[1], g + d[2], f, h, d[3]);
                        0 < k && a.drawImage(c, 0, d[1] - 1, d[0], 1, g, f + d[3], d[2], k)
                    }
                }
                function qa(a) {
                    function d() {
                        if (0 < I) Da = !0,
                        setTimeout(d, 0);
                        else if (aa--, null != g && null != g.naturalWidth) {
                            var e = g.naturalWidth,
                            f = g.naturalHeight,
                            k = e * f * 4,
                            t = !1;
                            0 == k && (t = !0);
                            if (t) a.state = 0,
                            Da = !0;
                            else {
                                var n = a.level;
                                if (n) {
                                    n.needsize && (n.w = e, n.h = f, n.tilesize = e > f ? e: f, n.needsize = !1, 1 == n.type ? h(a.pano, n, !1, N.hfov, N.vfov, e, f) : c(a.pano), n.preview && Xa.previewdone());
                                    n.loadedtiles[a.stereo - 1]++;
                                    n.complete = n.stereo && ja.stereo ? n.loadedtiles[0] == n.totaltiles && n.loadedtiles[1] == n.totaltiles: n.loadedtiles[0] == n.totaltiles;
                                    t = 1 == n.htiles * n.vtiles;
                                    a.state = 2;
                                    a.lastusage_on_frame = M;
                                    if (Sa) {
                                        J(a, e, f);
                                        var l = ua,
                                        m = b.opera ? "": F(ja.mipmapping),
                                        p = "force" == m;
                                        if (m = p || "auto" == m) {
                                            if (!Q(e) || !Q(f)) {
                                                m = 1024;
                                                t ? (m = 0, p && (m = ga)) : p || Q(n.tilesize) || (m = 0);
                                                var t = A(e),
                                                q = A(f);
                                                t < m && q < m && (n = Ja(2), n.width = t, n.height = q, m = n.getContext("2d"), m.drawImage(g, 0, 0, t, q), g = n, e = t, f = q)
                                            }
                                            m = Q(e) && Q(f)
                                        }
                                        m && 0 == p && !b.realDesktop && a.level && 2500 < a.level.h && (m = !1);
                                        e = l.createTexture();
                                        l.activeTexture(Mc);
                                        l.bindTexture(ma, e);
                                        l.texParameteri(ma, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE);
                                        l.texParameteri(ma, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE);
                                        l.texParameteri(ma, l.TEXTURE_MAG_FILTER, qb);
                                        l.texParameteri(ma, l.TEXTURE_MIN_FILTER, m ? l.LINEAR_MIPMAP_LINEAR: qb);
                                        l.texImage2D(ma, 0, cc, cc, Nc, g);
                                        m && l.generateMipmap(ma);
                                        l.bindTexture(ma, null);
                                        a.texture = e;
                                        a.image = g = null
                                    } else {
                                        l = [e, f, e, f];
                                        p = !1;
                                        e == f && 1 == n.htiles && (m = ja.hardwarelimit, e + 2 * G > m && (n.w = n.h = l[2] = l[3] = e = f = m - 2 * G, p = !0));
                                        var r = [0, 0, 0, 0],
                                        u = G,
                                        w = a.h,
                                        v = a.v,
                                        n = a.cubeside,
                                        x = a.level,
                                        P = x.tilesize,
                                        m = x.vscale,
                                        B = -x.w / 2,
                                        y = q = 1;
                                        1 == x.type && (q = Math.tan(.5 * x.hfov * Y), n = 6, 2 < u && (u = 2), b.ie || b.desktop && b.safari) && (y = 252);
                                        1E3 < -B && 4 < u && (u = 4);
                                        var z = B,
                                        D = z;
                                        r[2] = u;
                                        r[3] = u;
                                        0 == n || 2 == n ? 0 == w && (r[0] = u) : 1 != n && 3 != n || w != x.vtiles - 1 || (r[2] = 0);
                                        0 <= n && 3 >= n ? 0 == v && (r[1] = u) : (w == x.htiles - 1 && (r[2] = 0), v == x.vtiles - 1 && (r[3] = 0));
                                        a.overlap = r;
                                        z -= r[0];
                                        D -= r[1];
                                        r = (z + w * P) * q;
                                        v = (D + v * P - 2 * x.voffset * B / x.hfov) * q * m;
                                        x = q;
                                        P = q * m;
                                        1 < y && (r *= y, v *= y, B *= y, x *= y, P *= y);
                                        y = "" + r;
                                        r = 0 < y.indexOf("e-") ? r = r.toFixed(18) : y;
                                        y = "" + v;
                                        v = 0 < y.indexOf("e-") ? v = v.toFixed(18) : y;
                                        y = "" + B;
                                        B = 0 < y.indexOf("e-") ? B = B.toFixed(18) : y;
                                        a.transform = Fb[n] + _[53] + r + "px," + v + "px," + B + "px) ";
                                        if (1 != q || 1 != m) a.transform += _[429] + x + "," + P + ",1) "; (q = a.overlap) ? (n = Ja(2), n.width = e + q[0] + q[2], n.height = f + q[1] + q[3], n.style.overflow = _[6], k = n.width * n.height * 4, B = y = 0, m = n.getContext("2d"), q && (y = q[0], B = q[1], H(m, n, g, l, q, t ? 0 : 250)), p ? m.drawImage(g, 0, 0, l[0], l[1], y, B, e, f) : m.drawImage(g, y, B), Ba && m.getImageData(l[0] >> 1, l[1] >> 1, 1, 1), a.canvas = n, a.elmt = n, a.image = g = null) : a.elmt = g;
                                        a.elmt.style.position = _[0];
                                        a.elmt.style[Zc] = "0 0"
                                    }
                                    a.mem = k;
                                    kb += k;
                                    if (kb > ca) {
                                        Da = !0;
                                        I++;
                                        for (var E, e = null,
                                        f = 0;;) {
                                            for (E in ab) f++,
                                            k = ab[E],
                                            0 < k.levelindex && 2 <= k.state && k.lastusage_on_frame < M - 1 && (!e || k.lastusage_on_frame < e.lastusage_on_frame) && (e = k);
                                            if (e) {
                                                if (ea(e), e = null, kb < ca - 2097152) break
                                            } else break
                                        }
                                        if (f > Math.max(2 * $a.length, 100)) {
                                            e = {};
                                            for (E in ab) if (k = ab[E])(0 < k.levelindex || 8 < k.level.mp) && 0 == k.state && k.lastusage_on_frame < M - 2 ? (k.pano = null, k.level = null) : e[E] = k;
                                            ab = e
                                        }
                                        kb > ca && (ia = !0)
                                    }
                                    Da = !0;
                                    I++
                                }
                            }
                        }
                    }
                    function e(b, c) {
                        aa--;
                        c ? a.state = 4 : a.retries < m.network.retrycount ? (a.retries++, a.state = 0, Da = !0) : (a.state = 4, la(3, _[58] + a.url + _[62]))
                    }
                    if (null != a.pano) {
                        null == a.url && (a.url = C(a.level.planeurls[a.level.invplanemapping[a.cubeside]], a.pano.cubelabels[a.cubeside], a.levelindex, String(a.h + a.level.i), String(a.v + a.level.i), a.pano.stereolabels[a.stereo - 1]));
                        a.state = 1;
                        var g = ra.loadimage(a.url, d, e);
                        a.image = g;
                        aa++
                    }
                }
                function ea(a) {
                    var b = ua,
                    c = a.texture;
                    b && c && b.deleteTexture(c); (b = a.elmt) && (c = b.parentNode) && c.removeChild(b);
                    c = $a.length;
                    for (b = 0; b < c; b++) if ($a[b] == a) {
                        $a.splice(b, 1);
                        break
                    }
                    b = a.id;
                    ab[b] = null;
                    delete ab[b];
                    if (b = a.level) b.addedtiles[a.stereo - 1]--,
                    b.completelyadded = b.stereo && ja.stereo ? b.addedtiles[0] == b.totaltiles && b.addedtiles[1] == b.totaltiles: b.addedtiles[0] == b.totaltiles;
                    kb -= a.mem;
                    a.state = 0;
                    a.image = null;
                    a.canvas = null;
                    a.texture = null;
                    a.elmt = null;
                    a.pano = null;
                    a.level = null
                }
                function Ca(a) {
                    if (Sa) {
                        var b = ua,
                        c = xb,
                        d = a.texture;
                        c && d && (b.uniformMatrix4fv(Bb, !1, a.mx), b.bindBuffer(lb, c.vx), b.vertexAttribPointer(Pa, 3, Oc, !1, 0, 0), b.bindBuffer(lb, c.tx), b.vertexAttribPointer(Ra, 2, Oc, !1, 0, 0), b.bindBuffer(Qb, c.ix), b.activeTexture(Mc), b.bindTexture(ma, d), b.drawElements(Kb, c.tcnt, Gb, 0), R++)
                    } else a.elmt.style[ib] = pc + a.transform
                }
                function S(a, b) {
                    var c = new Hb;
                    c.x = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
                    c.y = a[0] * b[3] + a[1] * b[4] + a[2] * b[5];
                    c.z = -2 * (a[0] * b[6] + a[1] * b[7] + a[2] * b[8]);
                    return c
                }
                function Z(a, c) {
                    var d = a.panoview,
                    g = a.id,
                    f, h, k, t, n, l, r, G, u, P, y, z, D, E, C, A, Ba, F, H, J, K, S, Q = !1,
                    L, ea, Z, N, I, V, X, ba, ka, kb, T, ca, ga, ia, ha = !1,
                    oa = !1,
                    va = !0,
                    sa = Ta();
                    if (Sa) {
                        var ra = ua,
                        za = Qa,
                        Ha = ya,
                        Ea = a.panoview,
                        La = Ea.z,
                        Aa = b.gl.width * xa + .5 | 0,
                        Ka = b.gl.height * xa + .5 | 0;
                        if (0 < c) {
                            var Na = Aa,
                            Aa = Aa >> 1,
                            za = za >> 1;
                            ra.viewport(2 == c ? Aa: 0, 0, 1 == c ? Aa: Na - Aa, Ka)
                        } else ra.viewport(0, 0, Aa, Ka);
                        var wb = 1 / (.5 * za),
                        Oa = -1 / (.5 * Ha),
                        Ma = Ea.zf,
                        $b = 0 < c ? Number(ja.stereooverlap) * za * .5 * (1 == c ? 1 : -1) : 0,
                        qd = Ea.yf,
                        Xa = Math.min(Ma / 200, 1),
                        ib = 0 < Ma ? Ea.ch: 0;
                        xe(Tc, wb, 0, 0, 0, 0, Oa, 0, 0, 0, 0, 65535 / 65536, 1, 0, 0, 65535 / 65536 - 1, 0);
                        xe(Kd, La, 0, 0, 0, 0, La, 0, 0, $b, qd, 1, 0, Ma * $b, Ma * qd, Ma, 1);
                        Ic(Kd, Tc);
                        if (0 < c) {
                            var Ee = m.webVR;
                            Ee && Ee.enabled && Ee.prjmatrix(c, Kd)
                        }
                        ra.uniform1i(pb, 0);
                        ra.uniform1f(bb, 1);
                        ra.uniform1f(Ya, Xa);
                        ra.uniform1f(Za, ib);
                        kd(Gc, tc);
                        Ic(Gc, Kd);
                        ra.uniformMatrix4fv(jb, !1, Gc);
                        ra.uniformMatrix3fv(vb, !1, Db);
                        var Jd = Ia.obj0,
                        Pb = Ia.obj;
                        null == Jd && (Jd = v(500, 1), Pb = v(500, 19), x(Jd), x(Pb), Ia.obj0 = Jd, Ia.obj = Pb);
                        xb = 10 < Ma ? Pb: Jd
                    }
                    var Wa = c;
                    0 == Wa && (Wa = 1);
                    a.stereo && (g += "t" + Wa);
                    f = +d.h;
                    h = -d.v;
                    k = d.z;
                    t = Ga - f * Y;
                    n = -h * Y;
                    l = Math.sin(n);
                    r = Math.cos(n);
                    G = Math.cos(t) * r;
                    u = Math.sin(t) * r;
                    if (Ib) {
                        var cb = [G, l, u];
                        Zd(rd, Ib);
                        Fd(rd, cb);
                        G = cb[0];
                        l = cb[1];
                        u = cb[2]
                    }
                    P = a.levels;
                    z = P.length;
                    D = a.currentlevel;
                    a.viewloaded = !1;
                    if (5E3 > k) {
                        var ff = 1 / Math.max(100, k),
                        mb = Math.abs(Math.cos(f * Y)),
                        Ab = Math.cos(.25 * Ga);
                        if (1E-14 > mb || mb > Ab - 1E-14 && mb < Ab + 1E-14 || mb > 1 - 1E-14 || 1E-14 > r || r > 1 - 1E-14) f += (.5 + .5 * Math.random()) * ff * (.5 > Math.random() ? -1 : 1),
                        h += (.5 + .5 * Math.random()) * ff * (.5 > Math.random() ? -1 : 1);
                        b.firefox && (l < -(1 - 1E-14) && (h += .5), l > +(1 - 1E-14) && (h -= .5))
                    }
                    pc = _[53] + Qa / 2 + "px," + ya / 2 + _[207] + d.yf.toFixed(16) + _[232] + k.toFixed(16) + (0 < b.iosversion && 5 > b.iosversion ? "": "px") + _[106] + ( - d.r).toFixed(16) + _[86] + k.toFixed(16) + _[295] + h.toFixed(16) + _[284] + f.toFixed(16) + "deg) " + hc;
                    if (0 < z) {
                        var qb = 1 == pa(ja.loadwhilemoving) ? !0 : 0 == a.hasmoved || wa,
                        ob = D;
                        7 <= aa && (qb = !1);
                        if (a.stopped) qb = !1;
                        else {
                            9 > P[0].mp && (0 == P[0].complete && (ob = 0, Q = !0), 0 == qb && 0 == P[0].completelyadded && (ob = 0, qb = Q = !0));
                            var Cb = m.lockmultireslevel | 0;
                            m.downloadlockedlevel && 0 <= Cb && Cb < z && (Q = !0, 0 == P[Cb].complete && (qb = !0))
                        }
                        ta && 5 < ob && (ob -= 3, ta = !1, Da = !0);
                        if (qb) {
                            Fa = sa;
                            wa = !1;
                            ca = null;
                            ia = 1E6;
                            for (E = ob; 0 <= E; E--) {
                                y = P[E];
                                Ba = y.w;
                                F = y.h;
                                H = y.tilesize;
                                J = y.htiles;
                                K = y.vtiles;
                                var ha = !0,
                                Zb = y.planeurls.length;
                                for (A = 0; A < Zb; A++) if (C = y.planemapping[A], S = Q ? [0, 0, 1, 1] : d.vr[C]) {
                                    kb = "p" + g + "l" + E + "s" + Yb[C] + "h";
                                    var Fb = 1,
                                    Hb = 1;
                                    1 == a.type && (Fb = 1 / Math.tan(.5 * y.hfov * Y), Hb = 1 / Math.tan(.5 * y.vfov * Y));
                                    L = Math.floor((Fb * (S[0] - .5) + .5) * Ba / H);
                                    ea = Math.ceil((Fb * (S[2] - .5) + .5) * Ba / H);
                                    0 > L && (L = 0);
                                    ea > J && (ea = J);
                                    Z = Math.floor((Hb * (S[1] - .5) + .5) * F / H);
                                    N = Math.ceil((Hb * (S[3] - .5) + .5) * F / H);
                                    0 > Z && (Z = 0);
                                    N > K && (N = K);
                                    for (ba = Z; ba < N; ba++) for (X = L; X < ea; X++) {
                                        ka = kb + X + "v" + ba;
                                        T = ab[ka];
                                        T || (T = new q(ka, E, C, X, ba, y, Wa, a), ab[ka] = T, ha = !1);
                                        if (0 == T.state) ga = Math.acos(G * T.ch + u * T.sh + l * T.sv),
                                        ga < ia && (ca = T, ia = ga),
                                        ha = !1;
                                        else if (1 == T.state) ha = !1;
                                        else if (2 == T.state) {
                                            0 == Sa && Ca(T);
                                            var nb = T,
                                            ub = null,
                                            Eb = null;
                                            0 == Sa && (ub = nb.elmt, Eb = a.layer);
                                            if (0 != Sa || ub.parentNode != Eb) {
                                                for (var gc = $a.length,
                                                Jb = -1,
                                                Ob = void 0,
                                                Lb = void 0,
                                                Fc = nb.pano,
                                                Hc = nb.levelindex,
                                                Jc = nb.draworder,
                                                qc = 0,
                                                uc = 0,
                                                Lb = 0; Lb < gc; Lb++) if (Ob = $a[Lb], Ob.pano === Fc && (qc = Ob.levelindex, uc = Ob.draworder, qc >= Hc && uc >= Jc)) {
                                                    Jb = Lb;
                                                    break
                                                }
                                                0 > Jb ? (ub && Eb.appendChild(ub), $a.push(nb)) : (ub && Eb.insertBefore(ub, $a[Jb].elmt), $a.splice(Jb, 0, nb));
                                                var xc = nb.level;
                                                xc.addedtiles[nb.stereo - 1]++;
                                                xc.completelyadded = xc.stereo && ja.stereo ? xc.addedtiles[0] == xc.totaltiles && xc.addedtiles[1] == xc.totaltiles: xc.addedtiles[0] == xc.totaltiles
                                            }
                                            T.state = 3
                                        }
                                        T.lastusage_on_frame = M
                                    }
                                }
                                0 == ta && 0 == ha && E == ob && 1E3 < sa - W && (ta = !0, W = sa);
                                if (ha) {
                                    a.viewloaded = !0;
                                    break
                                }
                            }
                            ca && qa(ca)
                        }
                    }
                    1 != a.viewloaded ? (oa = !0, U = sa) : 0 < U && 200 > sa - U && (oa = !0);
                    Sa && 10 < d.zf && (oa = !0);
                    if (oa) {
                        var ac = a.cspreview;
                        if (ac) {
                            var Ec = ac.layer;
                            for (I = 0; 6 > I; I++) {
                                var sc = ac.tiles[I];
                                Ca(sc);
                                0 == Sa && 2 == sc.state && (Ec.appendChild(sc.elmt), sc.state = 3)
                            }
                            0 != Sa || a.previewadded || (0 == a.layer.childNodes.length ? a.layer.appendChild(Ec) : a.layer.insertBefore(Ec, a.layer.childNodes[0]), a.previewadded = !0)
                        }
                    } else 0 == Sa && a.previewadded && ((ac = a.cspreview) && a.layer.removeChild(ac.layer), a.previewadded = !1);
                    a.previewloading && (va = !1);
                    if (va) for (V = $a.length, I = 0; I < V; I++) if (T = $a[I], !(T.pano !== a || a.stereo && T.stereo != Wa)) if (T.levelindex > D) {
                        0 == Sa && T.pano.layer.removeChild(T.elmt);
                        T.state = 2;
                        $a.splice(I, 1);
                        I--;
                        V--;
                        var yc = T.level;
                        yc.addedtiles[T.stereo - 1]--;
                        yc.completelyadded = yc.stereo && ja.stereo ? yc.addedtiles[0] == yc.totaltiles && yc.addedtiles[1] == yc.totaltiles: yc.addedtiles[0] == yc.totaltiles
                    } else Ca(T);
                    if (0 == z && Sa) {
                        var yb = a.rppano;
                        if (2 < a.type && yb) {
                            var Xc = yb.texture,
                            vc = yb.imgfov,
                            Rb = yb.videoplugin,
                            Mb = null,
                            Lc = !1;
                            Rb && (Rb._panoid != a.id ? Rb = yb.videoplugin = null: Da = p.haschanged = !0);
                            if (Xc && vc) {
                                var Zc = vc[0],
                                ad = vc[1],
                                gd = vc[2];
                                Lc = Rb ? (Mb = Rb.videoDOM) ? yb.videoready: yb.texvalid: !0;
                                if (Lc) {
                                    var Pc = Ia.objS,
                                    hd = a.type + "/" + Zc + "x" + ad + "/" + gd;
                                    if (hd != Ia.objS_i) {
                                        var id = a.type,
                                        Uc = Zc,
                                        sd = ad,
                                        Qc = gd,
                                        zc = Pc,
                                        bd = 15453,
                                        td = 10302,
                                        dc = 3E4;
                                        zc && zc.tcnt != dc && (zc = null);
                                        var de = zc ? zc.vxd: new Float32Array(bd),
                                        Vc = zc ? zc.txd: new Float32Array(td),
                                        cd = zc ? zc.ixd: new Uint16Array(dc),
                                        Ac,
                                        Bc,
                                        jd,
                                        Wc,
                                        ld,
                                        md,
                                        Yc,
                                        ud,
                                        ee,
                                        nd,
                                        od,
                                        pd,
                                        Ld,
                                        fe,
                                        Uc = Uc * Y,
                                        sd = sd * Y,
                                        Qc = Qc * Y;
                                        4 == id ? (sd = 1E3 * Math.tan(.5 * sd), Qc = 500 * Math.sin(1 * Qc)) : Qc = -Qc + .5 * Ga;
                                        for (Bc = bd = td = 0; 50 >= Bc; Bc++) for (Yc = 1 - Bc / 50, 4 == id ? (ee = 1, Wc = sd * (Yc - .5) + Qc) : (ud = (Bc / 50 - .5) * sd + Qc, ee = Math.sin(ud), nd = Math.cos(ud), Wc = 500 * nd), Ac = 0; 100 >= Ac; Ac++) ud = (Ac / 100 - .5) * Uc + Ga,
                                        od = Math.sin(ud),
                                        pd = Math.cos(ud),
                                        jd = 500 * pd * ee,
                                        ld = 500 * od * ee,
                                        md = 1 - Ac / 100,
                                        de[bd] = jd,
                                        de[bd + 1] = Wc,
                                        de[bd + 2] = ld,
                                        bd += 3,
                                        Vc[td] = md,
                                        Vc[td + 1] = Yc,
                                        td += 2;
                                        for (Bc = dc = 0; 50 > Bc; Bc++) for (Ac = 0; 100 > Ac; Ac++) Ld = 101 * Bc + Ac,
                                        fe = Ld + 101,
                                        cd[dc] = Ld,
                                        cd[dc + 1] = Ld + 1,
                                        cd[dc + 2] = fe,
                                        cd[dc + 3] = fe,
                                        cd[dc + 4] = Ld + 1,
                                        cd[dc + 5] = fe + 1,
                                        dc += 6;
                                        var Pc = new w(3E4, de, Vc, cd),
                                        dd = Ia.objS,
                                        ec = Pc;
                                        if (dd && dd.tcnt == ec.tcnt) {
                                            ec.vx = dd.vx;
                                            ec.tx = dd.tx;
                                            ec.ix = dd.ix;
                                            var vd = ua;
                                            vd.bindBuffer(lb, ec.vx);
                                            vd.bufferData(lb, ec.vxd, wc);
                                            vd.bindBuffer(lb, ec.tx);
                                            vd.bufferData(lb, ec.txd, wc);
                                            vd.bindBuffer(Qb, ec.ix);
                                            vd.bufferData(Qb, ec.ixd, wc)
                                        } else dd && e(dd),
                                        x(ec);
                                        Ia.objS = Pc;
                                        Ia.objS_i = hd
                                    }
                                    var fc = ua;
                                    fc.uniformMatrix4fv(Bb, !1, yb.mx);
                                    a.stereo && fc.uniformMatrix3fv(vb, !1, 0 == a.stereoformat ? 1 >= Wa ? jc: kc: 1 >= Wa ? Nb: bc);
                                    fc.bindBuffer(lb, Pc.vx);
                                    fc.vertexAttribPointer(Pa, 3, Oc, !1, 0, 0);
                                    fc.bindBuffer(lb, Pc.tx);
                                    fc.vertexAttribPointer(Ra, 2, Oc, !1, 0, 0);
                                    fc.bindBuffer(Qb, Pc.ix);
                                    var ge = null;
                                    if (Mb) {
                                        var Fe = 60 * Mb.currentTime,
                                        Ge = Fe != Mb._uf || b.android && b.chrome && 0 == Mb.paused;
                                        Rb.isseeking && 0 == Rb.iPhoneMode && (Ge = !1);
                                        4 > Mb.readyState && (Ge = !1, Mb._uf = -1);
                                        if (Ge && 0 == Va) if (Va++, Mb._uf = 4 > Mb.readyState ? -1 : Fe, b.ie && b.desktop) {
                                            null == fa && (fa = Ja(2));
                                            if (fa.width != yb.w || fa.height != yb.h) fa.width = yb.w,
                                            fa.height = yb.h;
                                            fa.getContext("2d").drawImage(Mb, 0, 0, yb.w, yb.h);
                                            ge = fa
                                        } else ge = Mb && Mb.paused && 5 > (Fe | 0) && Rb.posterDOM ? Rb.posterDOM: Mb
                                    }
                                    fc.activeTexture(Mc);
                                    fc.bindTexture(ma, Xc);
                                    if (ge) try {
                                        fc.texImage2D(ma, 0, cc, cc, Nc, ge),
                                        yb.texvalid = !0
                                    } catch(Md) {
                                        Md = "" + Md,
                                        Rb && Rb.error != Md && (Rb.error = Md, la(3, Md))
                                    }
                                    yb.texvalid && (fc.drawElements(Kb, Pc.tcnt, Gb, 0), R++)
                                }
                            }
                        }
                    }
                    if (Sa) {
                        var $c = ("" + ja.hotspotrenderer).toLowerCase();
                        if ("both" == $c || _[30] == $c || "auto" == $c && 0 < c) {
                            var Sb = ua,
                            he = xb,
                            ie = m.webVR,
                            He = ie && ie.enabled,
                            Ed = He ? ie.getcursor() : null,
                            Nd = a.panoview,
                            Vd = Nd.h,
                            Wd = Nd.v,
                            Xd = Nd.r,
                            Yd = Nd.z / (He ? 2E3: ya) * 2,
                            Ie = 1,
                            Ie = Ie * (1 + Nd.zf / 1E3),
                            Gd = Ua.getArray(),
                            $d = Gd.length,
                            je,
                            na,
                            Od,
                            Hd = 2 > c,
                            Je = null;
                            if (0 < c) {
                                var be = He ? ie.eyetranslt(c) : 0;
                                ye(rc, -be, 0, 0);
                                kd(oc, ic);
                                Ic(oc, rc);
                                ye(rc, -p.tz, p.ty, -p.tx);
                                ef(oc, rc);
                                Je = oc
                            }
                            Sb.uniformMatrix4fv(jb, !1, Kd);
                            Sb.bindBuffer(lb, he.vx);
                            Sb.vertexAttribPointer(Pa, 3, Oc, !1, 0, 0);
                            Sb.bindBuffer(lb, he.tx);
                            Sb.vertexAttribPointer(Ra, 2, Oc, !1, 0, 0);
                            Sb.bindBuffer(Qb, he.ix);
                            for (je = 0; je < $d; je++) if ((na = Gd[je]) && na._visible && na.loaded && na._distorted && (0 != na.keep || !a.suspended)) {
                                var ke = na.GL;
                                ke || (na.GL = ke = {
                                    tex: null
                                });
                                var Id = !0;
                                if (Hd) {
                                    var ed = na._scale,
                                    Pd = na._depth;
                                    isNaN(Pd) && (Pd = 1E3, Id = !1);
                                    na === Ed && (Pd = Ed.hit_depth, ed *= Pd / 1E3);
                                    var Cc = na._flying,
                                    Ke = (1 - Cc) * na._ath,
                                    Le = (1 - Cc) * na._atv,
                                    Me = (1 - Cc) * na.rotate;
                                    0 < Cc && (Ke += Cc * nc(Vd, na._ath), Le += Cc * nc(Wd, na._atv), Me += Cc * nc(Xd, na.rotate));
                                    1 == na.scaleflying && (ed = ed * (1 - Cc) + ed / Yd * Cc * Ie);
                                    var zb = wd,
                                    Ne = na._width / 1E3 * ed * 2,
                                    Oe = na._height / 1E3 * ed * 2,
                                    ce = na.rz,
                                    yf = na.ry,
                                    Pe = 2 * na.ox,
                                    Qe = 2 * na.oy,
                                    Re = Pd,
                                    ve = -Me,
                                    we = -Ke + 90,
                                    ze = Le,
                                    Ae = -na.tz,
                                    Be = na.ty,
                                    Ce = na.tx,
                                    rb = void 0,
                                    Qd = void 0,
                                    xd = void 0,
                                    yd = void 0,
                                    zd = void 0,
                                    Ad = void 0,
                                    Bd = void 0,
                                    sb = void 0,
                                    db = void 0,
                                    eb = void 0,
                                    fb = void 0,
                                    gb = void 0,
                                    hb = void 0,
                                    rb = na.rx * Y,
                                    Qd = Math.cos(rb),
                                    xd = Math.sin(rb),
                                    rb = yf * Y,
                                    yd = Math.cos(rb),
                                    zd = Math.sin(rb),
                                    rb = ce * Y,
                                    Ad = Math.cos(rb),
                                    Bd = Math.sin(rb),
                                    rb = -ze * Y,
                                    sb = Math.cos(rb),
                                    db = Math.sin(rb),
                                    rb = -we * Y,
                                    eb = Math.cos(rb),
                                    fb = Math.sin(rb),
                                    rb = -ve * Y,
                                    gb = Math.cos(rb),
                                    hb = Math.sin(rb),
                                    Tb = void 0,
                                    Ub = void 0,
                                    Vb = void 0,
                                    Tb = Ne * (yd * Ad - zd * xd * Bd),
                                    Ub = Ne * (yd * Bd + zd * xd * Ad),
                                    Vb = Ne * zd * Qd;
                                    zb[0] = Tb * (gb * eb + hb * db * fb) + Ub * (gb * db * fb - hb * eb) - Vb * sb * fb;
                                    zb[1] = Tb * hb * sb + Ub * gb * sb + Vb * db;
                                    zb[2] = Tb * (hb * db * eb - gb * fb) + Ub * (hb * fb + gb * db * eb) - Vb * sb * eb;
                                    zb[3] = 0;
                                    Tb = -Oe * Qd * Bd;
                                    Ub = Oe * Qd * Ad;
                                    Vb = Oe * xd;
                                    zb[4] = Tb * (gb * eb + hb * db * fb) + Ub * (gb * db * fb - hb * eb) + Vb * sb * fb;
                                    zb[5] = Tb * hb * sb + Ub * gb * sb - Vb * db;
                                    zb[6] = Tb * (hb * db * eb - gb * fb) + Ub * (hb * fb + gb * db * eb) + Vb * sb * eb;
                                    zb[7] = 0;
                                    Tb = zd * Ad + yd * xd * Bd;
                                    Ub = zd * Bd - yd * xd * Ad;
                                    Vb = yd * Qd;
                                    zb[8] = Tb * (gb * eb + hb * db * fb) + Ub * (gb * db * fb - hb * eb) + Vb * sb * fb;
                                    zb[9] = Tb * hb * sb + Ub * gb * sb - Vb * db;
                                    zb[10] = Tb * (hb * db * eb - gb * fb) + Ub * (hb * fb + gb * db * eb) + Vb * sb * eb;
                                    zb[11] = 0;
                                    zb[12] = Pe * (gb * eb + hb * db * fb) + Qe * (gb * db * fb - hb * eb) + Re * sb * fb + Ae;
                                    zb[13] = Pe * hb * sb + Qe * gb * sb - Re * db + Be;
                                    zb[14] = Pe * (hb * db * eb - gb * fb) + Qe * (hb * fb + gb * db * eb) + Re * sb * eb + Ce;
                                    zb[15] = 1;
                                    kd(na.MX, wd)
                                } else kd(wd, na.MX);
                                if (! (.01 > na._alpha)) {
                                    Je && Id ? Ic(wd, Je) : Ic(wd, ic);
                                    Sb.uniformMatrix4fv(Bb, !1, wd);
                                    var Rc = Db,
                                    Cd = na.crop;
                                    na.pressed && na._ondowncrop ? Cd = na._ondowncrop: na.hovering && na._onovercrop && (Cd = na._onovercrop);
                                    if (Cd) if (Cd != na.C_crop) {
                                        na.C_crop = Cd;
                                        var le = ("" + Cd).split("|"),
                                        gf = na.loader.naturalWidth,
                                        hf = na.loader.naturalHeight,
                                        Rc = [1, 0, 0, 0, 1, 0, 0, 0, 0];
                                        Rc[0] = (1 * le[2] - 1) / gf;
                                        Rc[2] = (1 * le[0] + .5) / gf;
                                        Rc[4] = (1 * le[3] - 1) / hf;
                                        Rc[5] = (1 * le[1] + .5) / hf;
                                        na.C_crop_matrix = Rc
                                    } else Rc = na.C_crop_matrix;
                                    Sb.uniformMatrix3fv(vb, !1, Rc);
                                    Sb.uniform1f(bb, na._alpha);
                                    Sb.activeTexture(Mc);
                                    if (Od = ke.tex) Sb.bindTexture(ma, Od);
                                    else if (Od = B(na)) ke.tex = Od;
                                    Od && (Sb.drawElements(Kb, he.tcnt, Gb, 0), R++)
                                }
                            }
                            if (Hd && M & 1) {
                                var Se = m.webVR,
                                jf = Se && Se.enabled,
                                lc = jf ? Se.getcursor() : null,
                                Te = Ua.getArray(),
                                kf = Te.length,
                                Sc,
                                tb,
                                lf = !jf,
                                Rd = [0, 0, 1],
                                mf = !1,
                                me = lc ? lc.depth: 2E3,
                                nf = lc && lc.enabled;
                                if (lf) {
                                    var nf = !0,
                                    mc = O.x,
                                    De = O.y;
                                    if (ja.stereo) {
                                        var ne = Qa >> 1,
                                        of = ne * Number(ja.stereooverlap);
                                        mc < ne ? (mc += ne >> 1, mc -= of >> 1) : (mc -= ne >> 1, mc += of >> 1)
                                    }
                                    var Ue = p.inverseProject(mc, De),
                                    Rd = [ - Ue.x, -Ue.y, -Ue.z]
                                }
                                var Wb = Kc,
                                Dd = Rd,
                                Ve = Dd[0],
                                We = Dd[1],
                                Xe = Dd[2];
                                Dd[0] = Ve * Wb[0] + We * Wb[4] + Xe * Wb[8] + Wb[12];
                                Dd[1] = Ve * Wb[1] + We * Wb[5] + Xe * Wb[9] + Wb[13];
                                Dd[2] = Ve * Wb[2] + We * Wb[6] + Xe * Wb[10] + Wb[14];
                                for (Sc = kf - 1; 0 <= Sc; Sc--) if ((tb = Te[Sc]) && tb._visible && tb.loaded && tb._distorted && tb !== lc && (tb._hit = !1, nf && tb._enabled)) {
                                    var Ye, Dc = tb.MX,
                                    pf = 0,
                                    Xb = 1E3,
                                    Ze = Rd[0],
                                    $e = Rd[1],
                                    af = Rd[2],
                                    oe = Xb * Dc[0],
                                    pe = Xb * Dc[1],
                                    qe = Xb * Dc[2],
                                    re = Xb * Dc[4],
                                    se = Xb * Dc[5],
                                    te = Xb * Dc[6],
                                    bf = Dc[12] - (oe + re) / 2,
                                    cf = Dc[13] - (pe + se) / 2,
                                    df = Dc[14] - (qe + te) / 2,
                                    Sd = $e * te - af * se,
                                    Td = af * re - Ze * te,
                                    Ud = Ze * se - $e * re,
                                    fd = oe * Sd + pe * Td + qe * Ud;
                                    if ( - 1E-6 > fd || 1E-6 < fd) fd = 1 / fd,
                                    Xb = (bf * Sd + cf * Td + df * Ud) * -fd,
                                    0 <= Xb && 1 >= Xb && (Sd = df * pe - cf * qe, Td = bf * qe - df * oe, Ud = cf * oe - bf * pe, Xb = (Ze * Sd + $e * Td + af * Ud) * fd, 0 <= Xb && 1 >= Xb && (pf = (re * Sd + se * Td + te * Ud) * fd));
                                    Ye = pf;
                                    if (1 < Ye) {
                                        mf = tb._hit = !0;
                                        me = Ye;
                                        break
                                    }
                                }
                                lc && (me = Math.max(me, 200) - 100, lc.hit_depth = me);
                                for (Sc = 0; Sc < kf; Sc++) if (tb = Te[Sc]) {
                                    var ue = tb._hit;
                                    ue != tb.hovering && (tb.hovering = ue, da.callaction(ue ? tb.onover: tb.onout, tb), lc && da.callaction(ue ? lc.onover: lc.onout, tb))
                                }
                                0 == O.down && ae.update(!1, lf && mf)
                            }
                        }
                    }
                }
                function B(a) {
                    var b = a.loader,
                    c = null;
                    if (a.jsplugin) b = null;
                    else if (c = b.src, 1 > b.naturalWidth || 1 > b.naturalHeight) b = null;
                    if (!b) return null;
                    var d = ua,
                    e = null;
                    if (e = Ec[c]) e.cnt++,
                    e = e.tex;
                    else {
                        e = d.createTexture();
                        d.bindTexture(ma, e);
                        d.texParameteri(ma, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE);
                        d.texParameteri(ma, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE);
                        d.texParameteri(ma, d.TEXTURE_MAG_FILTER, qb);
                        d.texParameteri(ma, d.TEXTURE_MIN_FILTER, qb);
                        try {
                            d.texImage2D(ma, 0, mb, mb, Nc, b),
                            Ec[c] = {
                                cnt: 1,
                                tex: e
                            }
                        } catch(g) {
                            la(3, g)
                        }
                    }
                    a._GL_onDestroy || (a._GL_onDestroy = function() {
                        var b = a.loader;
                        if (b && !a.jsplugin) {
                            var c = ua,
                            b = b.src,
                            d = Ec[b];
                            d && 0 == --d.cnt && (c.deleteTexture(d.tex), d.tex = null, Ec[b] = null, delete Ec[b]);
                            a._GL_onDestroy = null
                        }
                    });
                    return e
                }
                var t = Oa,
                G = 0,
                Ba = !1,
                P = 0,
                Fa = 0,
                wa = !1,
                ta = !1,
                W = 0,
                U = 0,
                Da = !1,
                M = 0,
                Va = 0,
                R = 0,
                I = 0,
                X = 0,
                aa = 0,
                ba = 0,
                T = 16.666,
                ab = {},
                $a = [],
                kb = 0,
                ca = 52428800,
                ia = !1,
                fa = null,
                Sa = !1,
                ka = null,
                ua = null,
                Ia = null,
                ga = 0,
                xb = null,
                sa = !1,
                xa = 1,
                Ha = !1,
                oa = null,
                va = null;
                d = a = null;
                var ha = [],
                La = null,
                Aa = null,
                Ea = !1,
                za = null,
                Ka = null,
                Na = [],
                Pa,
                Ra,
                Ya,
                Za,
                bb,
                pb,
                jb,
                Bb,
                vb,
                Db = [1, 0, 0, 0, 1, 0, 0, 0, 0],
                Nb = [1, 0, 0, 0, .5, 0, 0, 0, 0],
                bc = [1, 0, 0, 0, .5, .5, 0, 0, 0],
                jc = [.5, 0, 0, 0, 1, 0, 0, 0, 0],
                kc = [.5, 0, .5, 0, 1, 0, 0, 0, 0],
                ma,
                Wa,
                Ab,
                Mc,
                lb,
                Qb,
                mb,
                cc,
                Nc,
                Gb,
                Oc,
                Kb,
                wc,
                qb,
                Yb = [1, 3, 0, 2, 4, 5, 6],
                Fb = "rotateY(90deg) ;;rotateY(-90deg) ;rotateY(180deg) ;rotateX(-90deg) ;rotateX(90deg) ;".split(";"),
                pc = "",
                hc = "",
                Ib = null;
                t.requiereredraw = !1;
                t.isloading = !1;
                t.setup = function(a) {
                    var c, d = null;
                    if (2 == a) {
                        var e = {};
                        if (0 <= F(Jb.so.html5).indexOf(_[196]) || b.mac && b.firefox) e.preserveDrawingBuffer = !0;
                        b.mobile && (e.antialias = !1);
                        e.depth = !1;
                        e.stencil = !1;
                        var f = Jb.so.webglsettings;
                        f && (!0 === f.preserveDrawingBuffer && (e.preserveDrawingBuffer = !0), !0 === f.depth && (e.depth = !0), !0 === f.stencil && (e.stencil = !0));
                        f = F(Jb.so.wmode);
                        _[36] == f || _[142] == f ? (sa = !0, e.alpha = !0, e.premultipliedAlpha = !1) : e.alpha = !1;
                        try {
                            for (ka = Ja(2), ka.style.position = _[0], ka.style.left = 0, c = ka.style.top = 0; 4 > c && !(d = ka.getContext([_[30], _[83], _[116], _[112]][c], e)); c++);
                        } catch(h) {}
                        ka && d && (ua = d, Ia = {},
                        ma = d.TEXTURE_2D, Wa = d.COLOR_BUFFER_BIT | d.DEPTH_BUFFER_BIT | d.STENCIL_BUFFER_BIT, Ab = d.FRAMEBUFFER, Mc = d.TEXTURE0, lb = d.ARRAY_BUFFER, Qb = d.ELEMENT_ARRAY_BUFFER, mb = d.RGBA, cc = d.RGB, Nc = d.UNSIGNED_BYTE, Gb = d.UNSIGNED_SHORT, Oc = d.FLOAT, Kb = d.TRIANGLES, wc = d.STATIC_DRAW, qb = d.LINEAR, k() && (c = m.bgcolor, d.clearColor((c >> 16 & 255) / 255, (c >> 8 & 255) / 255, (c & 255) / 255, 1 - (c >> 24) / 255, sa ? 1 : 0), d.disable(d.DEPTH_TEST), d.depthFunc(d.NEVER), d.enable(d.BLEND), d.blendFunc(d.SRC_ALPHA, d.ONE_MINUS_SRC_ALPHA), d.enable(d.CULL_FACE), d.cullFace(d.FRONT), ga = d.getParameter(d.MAX_TEXTURE_SIZE), !b.desktop && 4096 < ga && (ga = 4096), 2048 >= ga && b.firefox && !b.mac && !b.android && (b.css3d = !1), b.ios && (ga = 2048), V.panolayer.appendChild(ka), t.infoString = _[423], m.webGL = {
                            canvas: ka,
                            context: d,
                            ppshaders: Na,
                            createppshader: function(a, b) {
                                return g(null, a, b)
                            },
                            useProgram: n
                        },
                        Sa = !0));
                        0 == Sa && (Ia = ua = ka = null, a = 1)
                    }
                    1 == a && (t.infoString = "", b.webgl = !1);
                    G = b._tileOverlap | 0;
                    if (6 < b.iosversion || b.mac && "7" <= b.safariversion) Ba = !0;
                    b.multiressupport = b.androidstock && 0 == b.webgl ? !1 : !0; (a = b.webgl) && b.android && (b.androidstock ? a = !1 : b.chrome && 38 > b.chromeversion && (a = !1));
                    9 <= b.iosversion && document.addEventListener(_[52], E, !1);
                    b.panovideosupport = a;
                    b.buildList()
                };
                t.reset = function() {
                    M = 0
                };
                var ob = null,
                Cb = null;
                t.unload = function() {
                    var b;
                    m.webGL && (m.webGL.canvas = null, m.webGL.context = null, m.webGL = null);
                    var c = ua;
                    if (c && Ia) {
                        c.bindTexture(ma, null);
                        c.bindBuffer(lb, null);
                        c.bindBuffer(Qb, null);
                        c.bindFramebuffer(Ab, null);
                        c.deleteProgram(Ia.sh);
                        c.deleteShader(Ia.vs);
                        c.deleteShader(Ia.ps);
                        Ia.obj0 && (e(Ia.obj0), e(Ia.obj));
                        Ia.objS && e(Ia.objS);
                        Ia = null;
                        for (b = 0; 6 > b; b++) ha[b] && ha[b].prg && (c.deleteProgram(ha[b].prg), ha[b].prg = null, ha[b] = null);
                        c.deleteBuffer(a);
                        c.deleteBuffer(d);
                        var g = [oa, va, za, Ka];
                        for (b = 0; b < g.length; b++) g[b] && (g[b].fb && c.deleteFramebuffer(g[b].fb), g[b].tex && c.deleteTexture(g[b].tex), g[b] = null)
                    }
                    Sa = !1;
                    ua = ka = null
                };
                t.size = function(a, c) {
                    if (Sa) {
                        var d = (b.android && 0 == b.androidstock || b.blackberry || b.silk || b.mac) && 0 == b.hidpi ? b.pixelratio: 1;
                        if (b.desktop || b.ios || b.ie) d = L.devicePixelRatio;
                        isNaN(d) && (d = 1);
                        if (!b.desktop && 1 != d) a: {
                            var e = d,
                            d = [320, 360, 400, 480, 640, 720, 768, 800, 1024, 1080, 1280, 1366, 1440, 1920, 2560],
                            g,
                            f,
                            h = a * e;
                            f = d.length;
                            for (g = 0; g < f; g++) if (2 > Math.abs(d[g] - h)) {
                                d = d[g] / a;
                                break a
                            }
                            d = e
                        }
                        d *= 1;
                        e = a * d + .25 | 0;
                        d = c * d + .25 | 0;
                        if (g = m.webVR) if (g = g.getsize(e, d)) e = g.w,
                        d = g.h;
                        e *= ja.framebufferscale;
                        d *= ja.framebufferscale;
                        ka.style.width = a + "px";
                        ka.style.height = c + "px";
                        if (ka.width != e || ka.height != d) {
                            ka.width = e;
                            ka.height = d;
                            g = ua.drawingBufferWidth | 0;
                            f = ua.drawingBufferHeight | 0;
                            b.desktop && b.chrome && 300 == g && 150 == f && (g = f = 0);
                            if (0 >= g || 0 >= f) g = e,
                            f = d;
                            ua.viewport(0, 0, g, f);
                            b.gl = {
                                width: g,
                                height: f
                            }
                        }
                    } else b.gl = {
                        width: 0,
                        height: 0
                    }
                };
                t.fps = function() {
                    var a = Ta();
                    if (0 < ba) {
                        var b = a - ba;
                        if (5 < b && 500 > b) {
                            var c = Math.min(b / 160, .75);
                            T = T * (1 - c) + b * c;
                            0 < T && (nd = 1E3 / T, ja.currentfps = nd)
                        }
                        0 == I && (ja.r_ft = .9 * ja.r_ft + .1 * b)
                    }
                    ba = a
                };
                var Fc = !1;
                t.startFrame = function() {
                    Da = !1;
                    R = Va = 0;
                    Fc = !0;
                    ca = m.memory.maxmem << 20;
                    if (Sa) {
                        var a = ua; (Ea = 0 < Na.length) ? (a.clear(Wa), za = r(za), a.bindFramebuffer(Ab, za.fb), a.clear(Wa), R = 0) : a.clear(Wa)
                    }
                };
                t.finishFrame = function() {
                    M++;
                    I = 0;
                    if (Sa) {
                        var a = ua;
                        if (Ea) {
                            var c, d = Na.length,
                            e = za,
                            g = null;
                            1 < d && (g = Ka = r(Ka));
                            a.disable(a.BLEND);
                            for (c = 0; c < d; c++) e.drawcalls = R,
                            R = 0,
                            a.bindFramebuffer(Ab, g ? g.fb: null),
                            a.clear(Wa),
                            y(e, Na[c], 1),
                            e = g,
                            g = c + 1 == d - 1 ? null: c & 1 ? Ka: za;
                            a.enable(a.BLEND)
                        }
                        b.androidstock && a.finish()
                    }
                    m.memory.usage = kb >> 20;
                    Fc = !1
                };
                t.createPano = function(a) {
                    return new z(a)
                };
                var Eb = 0,
                gc = 0,
                nb = 0,
                ic = Ma(),
                Kc = Ma(),
                Ob = Ma(),
                tc = Ma(),
                Lb = Ma(),
                Tc = Ma(),
                Kd = Ma(),
                Gc = Ma(),
                oc = Ma(),
                rd = Ma(),
                Zb = Ma();
                t.setblendmode = function(a) {
                    if (Sa) {
                        var c = ua;
                        La = null;
                        var d = !0,
                        e = null,
                        g = null,
                        f = 1,
                        h = da.parseFunction(a);
                        if (h) switch (h[0].toUpperCase()) {
                        case "BLEND":
                            (e = h[2]) || (e = _[324]);
                            La = ha[0];
                            break;
                        case _[359]:
                            g = Number(h[2]);
                            f = Number(h[3]); (e = h[4]) || (e = _[319]);
                            isNaN(g) && (g = 16777215);
                            isNaN(f) && (f = 2);
                            La = ha[1];
                            n(La.prg);
                            break;
                        case _[363]:
                            g = Number(h[2]); (e = h[3]) || (e = _[317]);
                            isNaN(g) && (g = 0);
                            La = ha[2];
                            n(La.prg);
                            break;
                        case _[365]:
                            var d = !1,
                            k = Number(h[2]);
                            a = Number(h[3]);
                            e = h[4];
                            isNaN(k) && (k = 0);
                            isNaN(a) && (a = .2);
                            a = 0 > a ? 0 : 1 < a ? 1 : a;
                            e || (e = _[43]);
                            var t = h = 0,
                            l = Math.cos(k * Y),
                            m = Math.sin(k * Y);
                            0 > m && (t = 1, k += 90);
                            0 > l && (h = 1, k += 0 > m ? 90 : -90);
                            k = Math.sqrt(2) * Math.cos((45 - k) * Y);
                            l *= k;
                            m *= k;
                            k = 1 / (l * l + m * m);
                            La = ha[4];
                            n(La.prg);
                            c.uniform3f(La.fp, l * k, m * k, ( - h * l - t * m) * k);
                            c.uniform1f(La.bl, .5 * a);
                            break;
                        case _[404]:
                            d = !1;
                            a = Number(h[2]); (e = h[3]) || (e = _[272]);
                            isNaN(a) && (a = 2);
                            La = ha[3];
                            n(La.prg);
                            c.uniform2f(La.ct, .5, .5);
                            c.uniform1f(La.zf, a);
                            break;
                        case _[399]:
                            d = !1,
                            a = Number(h[2]),
                            k = Number(h[3]),
                            t = Number(h[4]),
                            (e = h[5]) || (e = _[43]),
                            isNaN(a) && (a = .2),
                            isNaN(k) && (k = .2),
                            isNaN(t) && (t = 0),
                            a = -1 > a ? -1 : 1 < a ? 1 : a,
                            k = 0 > k ? 0 : 1 < k ? 1 : k,
                            t = 0 > t ? 0 : 1 < t ? 1 : t,
                            h = b.gl.width / b.gl.height,
                            l = 1,
                            isNaN(h) && (h = 1),
                            h *= h,
                            0 > a ? h *= 1 + a: l *= 1 - a,
                            La = ha[5],
                            n(La.prg),
                            c.uniform2f(La.ap, h, l),
                            c.uniform1f(La.bl, .5 * k),
                            c.uniform1f(La.zf, t)
                        }
                        if (null == La || 0 == d && ja.stereo) La = ha[0],
                        g = null;
                        null !== g && c.uniform3f(La.cc, f * (g >> 16 & 255) / 255, f * (g >> 8 & 255) / 255, f * (g & 255) / 255);
                        null == e && (e = _[43]);
                        Aa = ac.getTweenfu(e);
                        Ha = 0 == b.realDesktop && 1 < b.pixelratio || 33 < ja.r_ft
                    }
                };
                t.snapshot = function(a, b) {
                    if (Sa) {
                        var c = ua;
                        if (a) {
                            var d = oa;
                            oa = va;
                            va = d
                        }
                        Ha && (xa = .707);
                        va = r(va);
                        c.bindFramebuffer(Ab, va.fb);
                        R = 0;
                        c.clear(Wa);
                        d = 0;
                        b && (d = Fc, Fc = !0, t.renderpano(b, 1), Fc = d, d = 1 - b.alpha);
                        a && y(oa, La, b ? 1 - b.alpha: a.alpha) && R++;
                        va.drawcalls = R;
                        c.bindFramebuffer(Ab, Ea ? za.fb: null);
                        xa = 1;
                        null == a && (a = {});
                        a.alpha = d;
                        return a
                    }
                    return null
                };
                t.rendersnapshot = function(a, b) {
                    if (0 == Fc) return a;
                    if (null == ua || null == va || b && 1 <= b.alpha) return null;
                    var c = a.alpha = b ? 1 - b.alpha: a.alpha;
                    y(va, La, c);
                    return a
                };
                t.renderpano = function(a, c) {
                    if (0 != Fc) {
                        a.frame = M;
                        var d = !1,
                        e = ua;
                        if (2 == c && e) {
                            if (a.stopped && oa && oa.done && oa.pano == a.id) {
                                oa.have = !0;
                                return
                            }
                            Ha && (xa = .707);
                            if (oa = r(oa)) d = !0,
                            oa.have = !0,
                            oa.pano = a.id,
                            oa.done = !1,
                            oa.alpha = a.alpha,
                            oa.drawcalls = 0,
                            e.bindFramebuffer(Ab, oa.fb),
                            e.clear(Wa)
                        }
                        var g = a.panoview = a.stopped && a.panoview ? a.panoview: p.getState(a.panoview),
                        f = g.h,
                        h = g.v,
                        k = g.r,
                        t = g.z,
                        l = a.hasmoved = f != Eb || h != gc || t != nb;
                        t != nb && (ia = !1);
                        var q = Ta();
                        if (l) {
                            if ("auto" == F(ja.loadwhilemoving)) {
                                var G = q - cb;
                                200 < q - Fa && 0 == O.down && 200 < G && (wa = !0)
                            }
                            P = q
                        } else 10 > q - P && (a.hasmoved = l = !0);
                        Da = l;
                        Eb = f;
                        gc = h;
                        nb = t;
                        l = ic;
                        t = Kc;
                        Yd(l, f, h, k);
                        kd(tc, l);
                        hc = "";
                        Ib = null;
                        if (a.image && a.image.prealign && (f = ("" + a.image.prealign).split("|"), 3 == f.length)) {
                            var h = Number(f[0]),
                            u = -Number(f[1]),
                            k = -Number(f[2]);
                            if (!isNaN(h) && !isNaN(u) && !isNaN(k)) {
                                hc = _[125] + u.toFixed(4) + _[271] + k.toFixed(4) + _[269] + h.toFixed(4) + "deg) ";
                                Ib = Ob;
                                Zd(t, l);
                                l = tc;
                                t = Lb;
                                kd(l, ic);
                                var f = Ib,
                                w, G = -k * Y,
                                k = Math.cos(G),
                                q = Math.sin(G),
                                G = -u * Y,
                                u = Math.cos(G);
                                w = Math.sin(G);
                                G = -h * Y;
                                h = Math.cos(G);
                                G = Math.sin(G);
                                Hc(f, h * u + G * q * w, G * k, -h * w + G * q * u, -G * u + h * q * w, h * k, G * w + h * q * u, k * w, -q, k * u);
                                ef(l, Ib)
                            }
                        }
                        Zd(t, l);
                        l = (b.android && 0 == b.androidstock || b.blackberry || b.ios) && 0 == b.hidpi ? b.pixelratio: 1;
                        b.ios && b.retina && (l = 1.5);
                        1.4 < l && (l = 1.4);
                        h = 1 / (g.z / (.5 * ya));
                        f = g.zf;
                        200 < f && (h = Math.atan(h), f = Math.min(h + Math.asin(f / 1E3 * Math.sin(h)), 1), isNaN(f) && (f = 1), h = Math.tan(f));.5 > h && (l = 1);
                        b.desktop && (l = b.pixelratio);
                        l = .25 * Ga * (Qa * l / Math.sin(Math.atan(Qa / ya * h)) + ya * l / h);
                        0 == a.type ? l *= 2 / Ga: 1 == a.type && (f = a.levels, l *= 2 / Ga, l *= Math.tan(.5 * f[f.length - 1].vfov * Y));
                        h = l;
                        l = 0;
                        k = a.levels;
                        f = k.length;
                        q = 1 + (N ? parseFloat(N.multiresthreshold) : 0);
                        isNaN(q) && (q = 1);.1 > q && (q = .1);
                        h = Math.ceil(h * q);
                        if (0 < f) {
                            for (; ! (0 == k[l].preview && k[l].h >= h);) if (l++, l >= f) {
                                l = f - 1;
                                break
                            }
                            ia && 0 < l && --l;
                            h = m.lockmultireslevel;
                            _[470] == F(h) && (m.lockmultireslevel = h = "" + l);
                            h |= 0;
                            0 <= h && h < f && (l = h);
                            a.currentlevel != l && (a.currentlevel = l)
                        }
                        1 == c && (l = a.currentlevel, m.multireslevel = 0 < l && a.levels[0].preview ? l - 1 : l);
                        a: {
                            k = t;
                            t = g.zf;
                            h = 1 / (g.z / (.5 * uc));
                            if (0 < t && (l = Math.atan(h), h = Math.tan(l + Math.asin(t / 1E3 * Math.sin(l))), isNaN(h) || 0 >= h)) {
                                t = [0, 0, 1, 1];
                                g.vr = [t, t, t, t, t, t];
                                break a
                            }
                            q = h * ya / Qa;
                            G = g.yf / ya * 2 * q;
                            t = [h, q + G, -1];
                            l = [ - h, q + G, -1];
                            f = [ - h, -q + G, -1];
                            h = [h, -q + G, -1];
                            Fd(k, t);
                            Fd(k, l);
                            Fd(k, f);
                            Fd(k, h);
                            for (var q = 1,
                            v = null,
                            G = Array(40), u = [null, null, null, null, null, null], k = 0; 6 > k; k++) {
                                var x = [],
                                B = [];
                                x.push(S(t, ub[k]));
                                x.push(S(l, ub[k]));
                                x.push(S(f, ub[k]));
                                x.push(S(h, ub[k]));
                                var z = 0,
                                E = 0,
                                D = 0,
                                C = 0;
                                for (w = E = 0; 4 > w; w++) v = x[w],
                                E = v.x,
                                D = v.y,
                                C = v.z / 2,
                                E = 1 * (E > -C) + 8 * (E < C) + 64 * (D < C) + 512 * (D > -C) + 4096 * ( - .1 > -C),
                                G[w] = E,
                                z += E;
                                w = 0 != (z & 18724);
                                if (0 == z) for (w = 0; 4 > w; w++) v = x[w],
                                B.push(v.x / v.z),
                                B.push(v.y / v.z);
                                else if (w) continue;
                                else {
                                    for (var z = 4,
                                    v = G,
                                    A = 0,
                                    Ba = [], W = [], H, J = 0, J = 0; 5 > J; J++) {
                                        var ta = 1 << 3 * J;
                                        for (w = 0; w < z; w++) {
                                            var D = (w + z - 1) % z,
                                            E = x[D],
                                            K = x[w],
                                            D = v[D],
                                            Q = v[w],
                                            L = 0;
                                            0 == (Q & ta) ? (L |= 2, D & ta && (L |= 1)) : 0 == (D & ta) && (L |= 1);
                                            L & 1 && (4 == J ? q = (.1 - E.z / 2) / (K.z - E.z) / 2 : 3 == J ? q = ( - E.y - E.z / 2) / (K.y - E.y + (K.z - E.z) / 2) : 2 == J ? q = (E.z / 2 - E.y) / (K.y - E.y - (K.z - E.z) / 2) : 1 == J ? q = (E.z / 2 - E.x) / (K.x - E.x - (K.z - E.z) / 2) : 0 == J && (q = ( - E.z / 2 - E.x) / (K.x - E.x + (K.z - E.z) / 2)), H = new Hb, H.x = E.x + (K.x - E.x) * q, H.y = E.y + (K.y - E.y) * q, H.z = E.z + (K.z - E.z) * q, E = H.x, D = H.y, C = H.z / 2, E = 1 * (E > -C) + 8 * (E < C) + 64 * (D < C) + 512 * (D > -C) + 4096 * ( - .1 > -C), Ba.push(H), W.push(E), A++);
                                            L & 2 && (Ba.push(K), W.push(Q), A++)
                                        }
                                        z = A;
                                        x = Ba;
                                        v = W;
                                        A = 0;
                                        Ba = [];
                                        W = []
                                    }
                                    for (w = 0; w < z; w++) v = x[w],
                                    B.push(v.x / v.z),
                                    B.push(v.y / v.z)
                                }
                                x = z = 9;
                                A = v = -9;
                                Ba = B.length;
                                if (4 < Ba) {
                                    for (w = 0; w < Ba; w++) B[w] += .5;
                                    for (w = 0; w < Ba; w += 2) B[w + 0] < z && (z = B[w + 0]),
                                    B[w + 1] < x && (x = B[w + 1]),
                                    B[w + 0] > v && (v = B[w + 0]),
                                    B[w + 1] > A && (A = B[w + 1]);
                                    z > v || 0 > z && 0 > v || 1 < z && 1 < v || x > A || 0 > x && 0 > A || 1 < x && 1 < A || (0 > z && (z = 0), 0 > x && (x = 0), 1 < v && (v = 1), 1 < A && (A = 1), u[k] = [z, x, v, A])
                                }
                            }
                            g.vr = u
                        }
                        Ia && (n(Ia.sh), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA), sa && e.colorMask(!0, !0, !0, !0));
                        ja.stereo ? (Z(a, 1), Z(a, 2)) : Z(a, 0);
                        g = 0;
                        m.downloadlockedlevel && 0 < (m.lockmultireslevel | 0) && (g = m.lockmultireslevel | 0);
                        t = a.levels;
                        0 < t.length && (g = t[g], sc.progress = g.stereo && ja.stereo ? (g.loadedtiles[0] + g.loadedtiles[1]) / (2 * g.totaltiles) : g.loadedtiles[0] / g.totaltiles);
                        d && (e.bindFramebuffer(Ab, Ea ? za.fb: null), e.clear(Wa), oa.drawcalls = R, oa.done = !0, xa = 1);
                        1 == c && e && oa && 0 < oa.drawcalls && oa.done && oa.have && (oa.have = !1, y(oa, La, 1 - qc));
                        sa && e.colorMask(!0, !0, !0, !1)
                    }
                };
                t.handleloading = function() {
                    return Da ? 2 : 0
                };
                var Jc = [[0, 180], [0, 90], [0, 0], [0, 270], [ - 90, 90], [90, 90]],
                ub = [[ - 1, 0, 0, 0, 1, 0, 0, 0, 1], [0, 0, 1, 0, 1, 0, 1, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, -1], [0, 0, -1, 0, 1, 0, -1, 0, 0], [0, 0, 1, -1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 0, 0, 0, -1, 0]],
                Ec = {},
                wd = Ma(),
                rc = Ma()
            })();
            var sf = function() {
                function a(a, b, f) {
                    a = F(a).charCodeAt(0);
                    return 118 == a ? f: 104 == a ? b: 100 == a ? Math.sqrt(b * b + f * f) : Math.max(b, f * d.mfovratio)
                }
                var d = this;
                d.haschanged = !1;
                d.r_rmatrix = Ma(); (function() {
                    var a = "hlookat vlookat camroll fov maxpixelzoom fisheye fisheyefovlink architectural tx ty tz".split(" "),
                    b = [_[268], _[193]],
                    f;
                    for (f in a) va(d, a[f], 0);
                    for (f in b) va(d, b[f], !1);
                    va(d, _[474], "VFOV");
                    d.continuousupdates = !1;
                    ha(d, _[477],
                    function() {
                        return "" + d._pannini
                    },
                    function(a) {
                        var b = Number(a),
                        b = isNaN(b) ? pa(a) ? 1 : 0 : 0 > b ? 0 : 1 < b ? 1 : b;
                        d._pannini = b;
                        d.haschanged = !0
                    });
                    ha(d, _[364],
                    function() {
                        return d._fisheye
                    },
                    function(a) {
                        d.fisheye = a
                    });
                    ha(d, _[215],
                    function() {
                        return d._fisheyefovlink
                    },
                    function(a) {
                        d.fisheyefovlink = a
                    });
                    ha(d, _[305],
                    function() {
                        var a = d.hlookatmax,
                        b = d.hlookatmin,
                        g = M && M.fovlimits;
                        isNaN(b) && (b = g ? g[0] : -180);
                        isNaN(a) && (a = g ? g[1] : 180);
                        return a - b
                    },
                    function(a) {});
                    ha(d, _[304],
                    function() {
                        var a = d.vlookatmax,
                        b = d.vlookatmin,
                        g = M && M.fovlimits;
                        isNaN(b) && (b = g ? g[2] : -90);
                        isNaN(a) && (a = g ? g[3] : 90);
                        return a - b
                    },
                    function(a) {})
                })();
                d.defaults = function() {
                    d._hlookat = 0;
                    d._vlookat = 0;
                    d._architectural = 0;
                    d._architecturalonlymiddle = !0;
                    d._fov = 90;
                    d._fovtype = b.desktop ? "VFOV": "MFOV";
                    d._camroll = 0;
                    d.mfovratio = 4 / 3;
                    d._maxpixelzoom = Number.NaN;
                    d._stereographic = !0;
                    d._pannini = 0;
                    d._fisheye = 0;
                    d._fisheyefovlink = .5;
                    d.fovmin = 1;
                    d.fovmax = 179;
                    d.r_zoom = 1;
                    d.r_yoff = 0;
                    d.r_zoff = 0;
                    d.haschanged = !1;
                    d.limitview = "auto";
                    d.hlookatmin = Number.NaN;
                    d.hlookatmax = Number.NaN;
                    d.vlookatmin = Number.NaN;
                    d.vlookatmax = Number.NaN;
                    d._limits = null
                };
                d.inverseProject = function(a, b) {
                    var f, e, m, p, v, r, y, l;
                    m = -1E3;
                    v = m / d.r_zoom;
                    f = (a - Qa / 2) * v;
                    e = (b - ya / 2 - d.r_yoff) * v;
                    v = 1 / Math.sqrt(f * f + e * e + m * m);
                    f *= v;
                    e *= v;
                    m *= v;
                    p = d.r_zoff;
                    0 < p && (0 == d._stereographic && (l = Math.atan(1E3 / p) / Y - 1, (1 > -m ? Math.acos( - m) / Y: 0) > l && (r = -e, y = f, v = r * r + y * y, 0 < v && (v = 1 / Math.sqrt(v), r *= v, y *= v), l *= Y, v = Math.sin(l), f = v * y, e = -v * r, m = -Math.cos(l))), r = p * m, y = r * r - (p * p - 1E6), 0 < y && (v = -r + Math.sqrt(y), f *= v, e *= v, m = m * v - -p, v = 1 / Math.sqrt(f * f + e * e + m * m), f *= v, e *= v, m *= v));
                    p = new Hb;
                    p.x = f;
                    p.y = e;
                    p.z = m;
                    return p
                };
                var m = d.fovRemap = function(b, d, f, e, m) {
                    e || (e = Qa);
                    m || (m = ya);
                    b = Math.tan(b / 360 * Ga);
                    d = a(d, e, m);
                    f = a(f, e, m);
                    return b = 360 * Math.atan(b * f / d) / Ga
                },
                f = Ma();
                d.screentosphere = function(a, b) {
                    var k = new Hb;
                    if (ja.stereo) {
                        var e = Qa / 2,
                        m = e / 2 * (1 - Number(ja.stereooverlap));
                        a = a < e ? a + m: a - m
                    }
                    e = d.inverseProject(a * X, b * X);
                    Zd(f, d.r_rmatrix);
                    nb(f, e);
                    e = [Math.atan2(e.x, e.z) / Y + 270, Math.atan2( - e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Y];
                    180 < e[0] && (e[0] -= 360);
                    k.x = e[0];
                    k.y = e[1];
                    k.z = 0;
                    return k
                };
                d.spheretoscreen = function(a, b) {
                    var f = new Hb,
                    e = (180 - a) * Y,
                    m = b * Y;
                    f.x = 1E3 * Math.cos(m) * Math.cos(e);
                    f.z = 1E3 * Math.cos(m) * Math.sin(e);
                    f.y = 1E3 * Math.sin(m);
                    nb(d.r_rmatrix, f);
                    var e = f.z + d.r_zoff,
                    p = m = tc;
                    10 <= e && (e = d.r_zoom / e, m = (f.x * e + .5 * Qa) / X, p = (f.y * e + .5 * ya) / X + d.r_yoff);
                    f.x = m;
                    f.y = p;
                    return f
                };
                d.updateView = function() {
                    var a = d._maxpixelzoom;
                    if (!isNaN(a) && 0 != a) {
                        var f = 1E-6;
                        if (M && M.ready) {
                            var k = M.vres,
                            e = M.vfov;
                            0 == M.type && (k = k * Math.PI * .5);
                            if (50 < k && 0 < e) {
                                var f = Qa,
                                w = ya,
                                a = 360 / Math.PI * Math.atan(Math.tan(2 * Math.atan(1 / (2 / Math.PI * k * a / (e / 180) / (.5 * f)))) / (f / w));
                                if (isNaN(a) || 1E-4 > a) a = d.fovmax;
                                90 < a && (a = 90);
                                f = m(a, "VFOV", d._fovtype)
                            }
                        }
                        d.fovmin = f
                    }
                    var e = d._fov,
                    f = d._hlookat,
                    w = d._vlookat,
                    a = d._camroll,
                    x = b.webgl ? d._fisheye: 0,
                    v = d._fisheyefovlink,
                    r = d._stereographic,
                    k = 0,
                    y = 0 == ia.bouncinglimits || 0 == Pa.isBouncing();
                    y && (e < d.fovmin && (e = d.fovmin), e > d.fovmax && (e = d.fovmax));
                    179 < e && (e = 179);
                    if (0 < x) {
                        var l = m(e, d._fovtype, "VFOV");
                        r ? (170 < e && (e = 170), k = 1E3 * x * Math.sin(Math.pow(Math.min(l / 130, 1), 2 * v) * Ga * .5)) : (x += Math.pow(Math.min(x, 1), 10) / 10, k = x * Math.sin(Math.pow(l / 180, v) * Ga * .5), k *= 3E3 * k)
                    }
                    var u = F(d.limitview),
                    h = M && M.fovlimits,
                    c = 0,
                    K = 0,
                    D = 0,
                    v = Number(d.hlookatmin),
                    l = Number(d.hlookatmax),
                    z = Number(d.vlookatmin),
                    q = Number(d.vlookatmax);
                    "auto" == u && (v = l = z = q = Number.NaN);
                    isNaN(v) && (v = h ? h[0] : -180);
                    isNaN(l) && (l = h ? h[1] : 180);
                    isNaN(z) && (z = h ? h[2] : -90);
                    isNaN(q) && (q = h ? h[3] : 90);
                    "auto" == u && (p.hlookatmin = v, p.hlookatmax = l, p.vlookatmin = z, p.vlookatmax = q, u = "range");
                    q < z && (h = z, z = q, q = h);
                    l < v && (h = v, v = l, l = h);
                    var J = !1,
                    C = !1,
                    L = _[123] != u,
                    A = !0,
                    A = 180,
                    h = l - v,
                    H = q - z;
                    switch (u) {
                    case "off":
                    case _[31]:
                        h = 360;
                        v = -180;
                        l = 180;
                        z = -1E5;
                        q = 1E5;
                        L = !1;
                        break;
                    case _[379]:
                        L = !0;
                    case _[123]:
                        C = !0;
                    case "range":
                        if ((J = 360 > h) || 180 > H) D = m(e, d._fovtype, "HFOV"),
                        D > h && (A = !0, C && m(h, "HFOV", "VFOV") < H && (A = J = !1), D = h, L && A && (e = m(D, "HFOV", d._fovtype))),
                        c = m(e, d._fovtype, "VFOV"),
                        c > H && (A = !0, C && m(H, "VFOV", "HFOV") < h && (A = J = !1), c = H, L && A && (e = m(c, "VFOV", d._fovtype))),
                        m(e, d._fovtype, "HFOV"),
                        A = c,
                        K = c *= .5,
                        D *= .5,
                        -89.9 >= z && (c = 0),
                        89.9 <= q && (K = 0)
                    }
                    u = [360, -180, 180, c + K, z + c, q - K];
                    y && (w - c < z ? (w = z + c, Pa.stopFrictions(2)) : w + K > q && (w = q - K, Pa.stopFrictions(2)));
                    J && (D = -w * Y, K = .5 * Qa, c = .5 * ya, z = c / Math.tan(A * Y * .5), 0 < D && (c = -c), K = 1 / Math.sqrt(1 + (K * K + c * c) / (z * z)), c = c / z * K, z = Math.acos( - K * Math.sin(D) + c * Math.cos(D)) - Ga / 2, isNaN(z) && (z = -Ga / 2), K = Math.acos((K * Math.cos(D) + c * Math.sin(D)) / Math.sin(z + Ga / 2)), isNaN(K) && (K = 0), D = 180 * K / Ga, 2 * D >= h && (L && (D = m(h, "HFOV", d._fovtype), D < e && (e = D)), D = h / 2));
                    360 > h && (L = !1, u[0] = h, u[1] = v + D, u[2] = l - D, y && (f - D < v ? (f = v + D, L = !0) : f + D > l && (f = l - D, L = !0)), L && (Pa.stopFrictions(1), 0 != za.currentmovingspeed && (za.currentmovingspeed = 0, za.speed *= -1)));
                    d._limits = u;
                    d._fov = e;
                    d._hlookat = f;
                    d._vlookat = w;
                    e = m(e, d._fovtype, "MFOV");
                    0 < x && 0 == r ? (l = m(e, "MFOV", "VFOV"), x = Math.asin(1E3 * Math.sin(l * Y * .5) / (1E3 + .72 * k)), x = .5 * ya / Math.tan(x)) : x = .5 * uc / Math.tan(e / 114.591559);
                    d.hfov = m(e, "MFOV", "HFOV");
                    d.vfov = m(e, "MFOV", "VFOV");
                    d.r_fov = e;
                    d.r_zoom = x;
                    d.r_zoff = k;
                    d.r_vlookat = w;
                    r = Number(d._architectural);
                    y = 0;
                    0 < r && (1 == d._architecturalonlymiddle && (y = Math.abs(w / 90), 1 < y && (y = 1), y = Math.tan(y * Ga * .25), r *= 1 - y), y = r * ( - w * (ya / Math.tan(m(e, "MFOV", "VFOV") / 114.591559)) / 90), w *= 1 - r);
                    d.r_yoff = y;
                    Yd(d.r_rmatrix, f, w, a);
                    d.r_hlookat = f;
                    d.r_vlookatA = w;
                    d.r_roll = a;
                    e = 0 == b.realDesktop && b.ios && 5 > b.iosversion || b.androidstock || be ? "": "px";
                    ic = 0 == b.simulator && (b.iphone || b.ipad) ? .25 : 1;
                    b.ie && (ic = p.r_zoom / 1E3 * 10);
                    if (b.androidstock || b.android && b.chrome || b.blackberry) ic = p.r_zoom / 1E3 / 4;
                    $d = _[303] + x + e + _[106] + -a + _[86] + (x - k / 2 * ic) + "px) ";
                    d.haschanged = !1
                };
                d.getState = function(a) {
                    null == a && (a = {
                        h: 0,
                        v: 0,
                        z: 0,
                        r: 0,
                        zf: 0,
                        yf: 0,
                        ch: 0,
                        vr: null
                    });
                    a.h = d._hlookat;
                    a.v = d.r_vlookatA;
                    a.z = d.r_zoom;
                    a.r = d._camroll;
                    a.zf = d.r_zoff;
                    a.yf = d.r_yoff;
                    a.ch = d._pannini;
                    return a
                };
                d.defaults()
            },
            uf = function() {
                var a = this;
                a.defaults = function() {
                    a.usercontrol = "all";
                    a.mousetype = _[27];
                    a.touchtype = _[485];
                    a.mouseaccelerate = 1;
                    a.mousespeed = 10;
                    a.mousefriction = .8;
                    a.mouseyfriction = 1;
                    a.mousefovchange = 1;
                    a.keybaccelerate = .5;
                    a.keybspeed = 10;
                    a.keybfriction = .9;
                    a.keybfovchange = .75;
                    a.keybinvert = !1;
                    a.fovspeed = 3;
                    a.fovfriction = .9;
                    a.camrollreset = !0;
                    a.keycodesleft = "37";
                    a.keycodesright = "39";
                    a.keycodesup = "38";
                    a.keycodesdown = "40";
                    a.keycodesin = "";
                    a.keycodesout = "";
                    a.touchfriction = .87;
                    a.touchzoom = !0;
                    a.zoomtocursor = !1;
                    a.zoomoutcursor = !0;
                    a.disablewheel = !1;
                    a.bouncinglimits = !1;
                    a.preventTouchEvents = !0
                };
                a.defaults()
            },
            vf = function() {
                var a = this;
                a.standard = _[5];
                a.dragging = "move";
                a.moving = "move";
                a.hit = _[18];
                a.update = function(b, m) {
                    void 0 === b && (b = O.down);
                    var f = F(ia.mousetype);
                    V.controllayer.style.cursor = b ? _[27] == f ? a.moving: a.dragging: m ? a.hit: a.standard
                }
            },
            rf = function() {
                var a = this;
                a.haschanged = !1;
                a.mode = _[50];
                a.pixelx = 0;
                a.pixely = 0;
                a.pixelwidth = 0;
                a.pixelheight = 0;
                va(a, _[50], _[66]);
                va(a, "x", "0");
                va(a, "y", "0");
                va(a, _[49], "100%");
                va(a, _[28], "100%");
                va(a, "left", "0");
                va(a, "top", "0");
                va(a, _[3], "0");
                va(a, _[2], "0");
                a.calc = function(b, m) {
                    var f = 1 / X,
                    g = _[71] == F(a.mode),
                    n = g ? a._left: a._x,
                    k = g ? a._top: a._y,
                    e = g ? a._right: a._width,
                    p = g ? a._bottom: a._height,
                    n = 0 < n.indexOf("%") ? parseFloat(n) / 100 * b * f: Number(n),
                    e = 0 < e.indexOf("%") ? parseFloat(e) / 100 * b * f: Number(e),
                    k = 0 < k.indexOf("%") ? parseFloat(k) / 100 * m * f: Number(k),
                    p = 0 < p.indexOf("%") ? parseFloat(p) / 100 * m * f: Number(p),
                    n = n / f,
                    k = k / f,
                    e = e / f,
                    p = p / f;
                    g ? (e = b - n - e, p = m - k - p) : (g = F(a._align), 0 <= g.indexOf("left") || (n = 0 <= g.indexOf(_[3]) ? b - e - n: (b - e) / 2 + n), 0 <= g.indexOf("top") || (k = 0 <= g.indexOf(_[2]) ? m - p - k: (m - p) / 2 + k));
                    a.pixelx = Math.round(n * f);
                    a.pixely = Math.round(k * f);
                    g = !1;
                    n = Math.round(e);
                    e = Math.round(p);
                    if (Qa != n || ya != e) g = !0,
                    Qa = n,
                    ya = e;
                    a.pixelwidth = n * f;
                    a.pixelheight = e * f;
                    a.haschanged = !1;
                    return g
                }
            },
            Wc = !1,
            Ob = function() {
                function a() {
                    var a = c._alpha;
                    _[1] == c._type && (a *= qc);
                    var b = 255 * a | 0;
                    b == c._aa || c.GL || (c.sprite && (c.sprite.style.opacity = a, c._aa = b), c._poly && (c._poly.style.opacity = a, c._aa = b));
                    c._autoalpha && (a = 0 < a, a != c._visible && (c.visible = a))
                }
                function d() {
                    if (c.sprite && null != c._zorder) {
                        var a = parseInt(c._zorder); ! isNaN(a) && 0 <= a ? (c.sprite.style.zIndex = J + a, c._zdeep = a, c._deepscale = 100 / (200 + a)) : (c._zdeep = 0, c._deepscale = .5)
                    }
                    _[1] == c._type && (Wc = !0)
                }
                function p() {
                    c.sprite && (c.sprite.style.overflow = c._maskchildren ? _[6] : _[12], z && b.safari && u())
                }
                function f(a, b) {
                    b && (b = a._enabled) && _[15] == a.type && (b = 0 != a.bgcapture);
                    a._enabledstate = 1 * b + 2 * a._handcursor;
                    var c = a.sprite.style;
                    c.cursor = b && a._handcursor ? _[18] : _[5];
                    c.pointerEvents = b ? "auto": "none";
                    0 == b && a.hovering && (a.hovering = !1);
                    if (c = a._childs) {
                        var d, e, g;
                        e = c.length;
                        for (d = 0; d < e; d++)(g = c[d]) && g.sprite && f(g, b)
                    }
                }
                function g() {
                    if (c.sprite) {
                        var a = c._enabled;
                        z && (a &= c.bgcapture);
                        if (a && c._parent) a: {
                            for (a = n(c._parent); a;) {
                                if (0 == a._enabled || 0 == a.children) {
                                    a = !1;
                                    break a
                                }
                                if (a._parent) a = n(a._parent);
                                else break
                            }
                            a = !0
                        }
                        1 * a + 2 * c._handcursor != c._enabledstate && f(c, a)
                    }
                }
                function n(a) {
                    var b = null;
                    if (a) {
                        var b = a = F(a),
                        c = xa,
                        d = a.indexOf("[");
                        0 < d && (b = a.slice(0, d), _[1] == b && (c = Ua), a = a.slice(d + 1, a.indexOf("]")));
                        if ("stage" == b) return null == Ra.sprite && (Ra.sprite = V.viewerlayer, Ra.loaded = !0),
                        Ra;
                        if (_[468] == b) return null == Za.sprite && (a = Ja(), b = a.style, b.position = _[0], b.width = "100%", b.height = "100%", b.overflow = _[6], b.zIndex = "0", b.pointerEvents = "none", V.controllayer.parentNode.insertBefore(a, V.controllayer), Za.sprite = a, Za.loaded = !0),
                        Za;
                        b = c.getItem(a)
                    }
                    return b
                }
                function k(a) {
                    if (c._parent != a) {
                        if (c._parent) {
                            var b = n(c._parent);
                            if (b) {
                                var d = b._childs;
                                if (d) {
                                    var e, f;
                                    f = d.length;
                                    for (e = 0; e < f; e++) if (d[e] === c) {
                                        d.splice(e, 1);
                                        f--;
                                        break
                                    }
                                    0 == f && (d = null);
                                    b._childs = d;
                                    b.poschanged = !0
                                }
                            }
                        }
                        a && ((b = n(a)) ? b.sprite ? (null == b._childs && (b._childs = []), b._use_css_scale = !1, c._use_css_scale = !1, b._childs.push(c), b.sprite.appendChild(c.sprite), b.poschanged = !0) : setTimeout(function() {
                            c._parent = null;
                            k(a)
                        },
                        16) : a = null);
                        null == a && V.pluginlayer.appendChild(c.sprite);
                        c._parent = a;
                        c.poschanged = !0;
                        g()
                    }
                }
                function e(a) { (a = this.kobject) && 0 == D && (a = a.url, 0 < F(a).indexOf(".swf") ? la(2, c._type + "[" + c.name + _[78] + Vd(a)) : (a && _[74] == a.slice(0, 5) && 50 < a.length && (a = a.slice(0, 50) + "..."), la(3, c._type + "[" + c.name + _[85] + a)))
                }
                function w(a) {
                    if (S && (Pa.trackTouch(a), ba(L, a.type, w, !0), _[4] == a.type ? (aa.body.style.webkitUserSelect = aa.body.style.backupUserSelect, ba(L, _[10], x, !0), ba(L, _[4], w, !0)) : (ba(L, b.browser.events.touchmove, x, !0), ba(L, b.browser.events.touchend, w, !0)), S.pressed)) {
                        S.pressed = !1;
                        if (S._ondowncrop || S._onovercrop) S.hovering && S._onovercrop ? h(S, S._onovercrop) : h(S, S._crop);
                        da.callaction(S.onup, S);
                        K || da.blocked || da.callaction(S.onclick, S)
                    }
                }
                function x(a, c) {
                    var d = a.changedTouches && 0 < a.changedTouches.length ? a.changedTouches[0] : a,
                    e = d.pageX,
                    d = d.pageY; ! 0 === c ? I = [e, d] : I ? 0 == K && (e -= I[0], d -= I[1], Math.sqrt(e * e + d * d) >= (b.touchdevice ? 11 : 4) && (K = !0)) : (I = null, ba(L, a.type, x, !0))
                }
                function v(a, d) {
                    var e = a.timeStamp | 0,
                    f = !0;
                    switch (a.type) {
                    case _[34]:
                    case _[8]:
                    case _[16]:
                        1 == d && (e = _[15] == S.type, y(S) && (!e || e && S.bgcapture) && S._handcursor && (c.sprite.style.cursor = _[18]));
                        e = S.sprite;
                        for (f = 0; e;) {
                            var g = e.kobject;
                            if (g) {
                                var k = g._enabled;
                                0 == b.pointerEvents && (k = y(g));
                                if (0 == k || 0 < f && 0 == g.children) return;
                                f++;
                                e = e.parentNode
                            } else break
                        }
                        for (f = S.sprite; f;) {
                            if (g = f.kobject) g.enabled && 0 == g.hovering && (g.hovering = !0, 0 == g.pressed && g._onovercrop && h(g, g._onovercrop), da.blocked || da.callaction(g.onover, g));
                            else break;
                            f = f.parentNode
                        }
                        break;
                    case _[35]:
                    case _[9]:
                    case _[17]:
                        for (e = (f = a.relatedTarget) ? f.kobject: null; f && null == e;) if (f = f.parentNode) e = f.kobject;
                        else break;
                        for (f = S.sprite; f;) {
                            if (g = f.kobject) {
                                for (var k = !1,
                                l = e; l;) {
                                    if (g == l) {
                                        k = !0;
                                        break
                                    }
                                    if (l.sprite && l.sprite.parentNode) l = l.sprite.parentNode.kobject;
                                    else break
                                }
                                if (0 == k) 1 == g.hovering && (g.hovering = !1, 0 == g.pressed && g._onovercrop && h(g, g._crop), da.callaction(g.onout, g));
                                else break
                            } else break;
                            f = f.parentNode
                        }
                        break;
                    case _[7]:
                        if (500 < e && 500 > e - kc) {
                            kc = 0;
                            break
                        }
                        if (f = 0 == (a.button | 0)) aa.body.style.backupUserSelect = aa.body.style.webkitUserSelect,
                        aa.body.style.webkitUserSelect = "none",
                        x(a, !0),
                        R(L, _[4], w, !0),
                        R(L, _[10], x, !0),
                        K = !1,
                        S.pressed = !0,
                        S._ondowncrop && h(S, S._ondowncrop),
                        da.blocked || da.callaction(S.ondown, S);
                        break;
                    case b.browser.events.touchstart:
                        kc = e;
                        Pa.trackTouch(a);
                        if (Pa.isMultiTouch()) break;
                        K = !1;
                        if (f = 0 == (a.button | 0)) x(a, !0),
                        R(L, b.browser.events.touchend, w, !0),
                        R(L, b.browser.events.touchmove, x, !0),
                        S.pressed = !0,
                        S._ondowncrop && h(S, S._ondowncrop),
                        da.blocked || da.callaction(S.ondown, S)
                    }
                }
                function r(a, b) {
                    if (a === b) return ! 1;
                    for (; b && b !== a;) b = b.parentNode;
                    return b === a
                }
                function y(a) {
                    if (a._enabled) {
                        for (a = a.sprite; a;) if ((a = a.parentNode) && a.kobject && 0 == a.kobject._enabled) return ! 1;
                        return ! 0
                    }
                    return ! 1
                }
                function l(a) {
                    cb = Ta();
                    var d = a.type;
                    if (_[7] != d && d != b.browser.events.touchstart || !da.isblocked()) {
                        var e = a.target.kobject;
                        _[34] == d ? d = _[8] : _[35] == d && (d = _[9]);
                        null == e && (e = c);
                        if ((_[8] != d && _[9] != d || 4 == a.pointerType || _[19] == a.pointerType) && e) {
                            var e = a.timeStamp,
                            f = c._eP;
                            e != c._eT && (f = 0);
                            if (_[16] == d || _[8] == d) {
                                var h = a.relatedTarget;
                                if (this === h || r(this, h)) return
                            } else if (_[17] == d || _[9] == d) if (h = a.relatedTarget, this === h || r(this, h)) return;
                            0 == e && (_[16] == d && 0 == c.hovering ? f = 0 : _[17] == d && 1 == c.hovering && (f = 0));
                            d = c._enabled;
                            0 == b.pointerEvents && (d = y(c));
                            if (d && (!z || z && c.bgcapture)) 0 == c.children && a.stopPropagation(),
                            0 == f && (0 == c.children && 1 == a.eventPhase || 2 <= a.eventPhase) && (f = 1, c.jsplugin && c.jsplugin.hittest && (d = V.getMousePos(a.changedTouches ? a.changedTouches[0] : a, c.sprite), c.jsplugin.hittest(d.x * c.imagewidth / c.pixelwidth, d.y * c.imageheight / c.pixelheight) || (f = 2)), 1 == f && (S = c, v(a), c.capture && (null != c.jsplugin && r(V.controllayer, c.sprite) || 0 == (a.target && "A" == a.target.nodeName) && Aa(a), a.stopPropagation())));
                            else if (0 == b.pointerEvents && aa.msElementsFromPoint && 0 == f && 2 == a.eventPhase && (h = a.type, d = _[4] == h || _[17] == h || _[35] == h || _[9] == h || h == b.browser.events.touchend, _[7] == h || _[16] == h || _[34] == h || _[8] == h || h == b.browser.events.touchstart || d) && (h = aa.msElementsFromPoint(a.clientX, a.clientY))) {
                                var k = [],
                                l,
                                n,
                                m = null,
                                m = null;
                                for (l = 0; l < h.length; l++) if (m = h[l], m = m.kobject) k.push(m);
                                else break;
                                d && g();
                                if (d && Z) for (l = 0; l < Z.length; l++) {
                                    var m = Z[l],
                                    p = !1;
                                    for (n = 0; n < k.length; n++) k[n] === m && (p = !0);
                                    0 == p && (f = 1, S = m, v(a, !0), m.capture && (null == c.jsplugin && Aa(a), a.stopPropagation()))
                                }
                                for (l = 0; l < h.length; l++) if (m = h[l], m = m.kobject) {
                                    if (n = _[15] == m.type, 1 == (y(m) && (!n || n && m.bgcapture)) || d) if (f = 1, S = m, v(a, !0), m.capture) {
                                        null == c.jsplugin && Aa(a);
                                        a.stopPropagation();
                                        break
                                    }
                                } else break;
                                Z = k
                            }
                            c._eT = e;
                            c._eP = f
                        }
                    }
                }
                function u() {
                    var a = c.sprite;
                    if (a) {
                        var a = a.style,
                        d = Number(c._bgcolor),
                        e = Number(c._bgalpha),
                        f = X;
                        isNaN(d) && (d = 0);
                        isNaN(e) && (e = 0);
                        var g = ("" + c._bgborder).split(" "),
                        h = Ib(g[0], f, ","),
                        k = g[1] | 0,
                        g = Number(g[2]);
                        isNaN(g) && (g = 1);
                        if (h[0] != q[0] || h[3] != q[3]) q = h,
                        c.poschanged = !0;
                        0 == e ? a.background = "none": a.backgroundColor = ca(d, e);
                        var d = Ib(c.bgroundedge, f * c._scale, " "),
                        e = "",
                        l = c.bgshadow;
                        if (l) {
                            var n = ("" + l).split(","),
                            m,
                            p;
                            p = n.length;
                            for (m = 0; m < p; m++) {
                                var r = Ha(n[m]).split(" "),
                                u = r.length;
                                if (4 < u) {
                                    var v = 5 < u ? 1 : 0;
                                    "" != e && (e += ", ");
                                    e += r[0] * f + "px " + r[1] * f + "px " + r[2] * f + "px " + (v ? r[3] * f: 0) + "px " + ca(r[3 + v] | 0, r[4 + v]) + (6 < u ? " " + r[6] : "")
                                }
                            }
                        }
                        if (b.safari || b.ios) a.webkitMaskImage = c._maskchildren && !l && 0 < d[0] + d[1] + d[2] + d[3] ? _[167] : "";
                        a[pc] = e;
                        a.borderStyle = "solid";
                        a.borderColor = ca(k, g);
                        a.borderWidth = h.join("px ") + "px";
                        a.borderRadius = d.join("px ") + "px"
                    }
                }
                function h(a, b) {
                    var c = 0,
                    d = 0,
                    e = a.loader;
                    e && (c = e.naturalWidth, d = e.naturalHeight);
                    b && (b = String(b).split("|"), 4 == b.length && (c = b[2], d = b[3]));
                    null == a.jsplugin && 0 == a._isNE() && (a.imagewidth = c, a.imageheight = d, e = a._gOSF(), e & 1 && (a._width = String(c)), e & 2 && (a._height = String(d)));
                    a.updatepos()
                }
                var c = this;
                c.prototype = Fb;
                this.prototype.call(this);
                c._type = _[29];
                c.layer = c.plugin = new bb(Ob);
                c.createvar = function(a, b, d) {
                    var e = "_" + a;
                    c[e] = void 0 === b ? null: b;
                    c.__defineGetter__(a,
                    function() {
                        return c[e]
                    });
                    void 0 !== d ? c.__defineSetter__(a,
                    function(a) {
                        c[e] = a;
                        d()
                    }) : c.__defineSetter__(a,
                    function(a) {
                        c[e] = a;
                        c.poschanged = !0
                    })
                };
                var K = !1,
                D = !1,
                z = !1,
                q = [0, 0, 0, 0],
                J = 0,
                C = 3,
                Q = !1;
                c._isNE = function() {
                    return D
                };
                c._gOSF = function() {
                    return C
                };
                c.haveUserWidth = function() {
                    return 0 == (C & 1)
                };
                c.haveUserHeight = function() {
                    return 0 == (C & 2)
                };
                c.sprite = null;
                c.loader = null;
                c.jsplugin = null;
                c._use_css_scale = !1;
                c._finalxscale = 1;
                c._finalyscale = 1;
                c._hszscale = 1;
                c._eT = 0;
                c._eP = 0;
                c._pCD = !1;
                c.MX = Ma();
                c.__defineGetter__("type",
                function() {
                    return _[57] == c.url ? _[15] : _[75]
                });
                c.__defineSetter__("type",
                function(a) {
                    _[15] == F(a) && (c.url = _[57])
                });
                c.imagewidth = 0;
                c.imageheight = 0;
                c.pixelwidth = 0;
                c.pixelheight = 0;
                c._pxw = 0;
                c._pxh = 0;
                c.pressed = !1;
                c.hovering = !1;
                c.loading = !1;
                c.loaded = !1;
                c.loadedurl = null;
                c.loadingurl = null;
                c.preload = !1;
                c._ispreload = !1;
                c.keep = !1;
                c.poschanged = !1;
                c.style = null;
                c.capture = !0;
                c.children = !0;
                c.pixelx = 0;
                c.pixely = 0;
                c._deepscale = .5;
                c._zdeep = 0;
                c.accuracy = 0;
                c._dyn = !1;
                c.onloaded = null;
                c.altonloaded = null;
                c.maxwidth = 0;
                c.minwidth = 0;
                c.maxheight = 0;
                c.minheight = 0;
                c.onover = null;
                c.onhover = null;
                c.onout = null;
                c.onclick = null;
                c.ondown = null;
                c.onup = null;
                c.onloaded = null;
                var A = c.createvar,
                H = function(a, b) {
                    var d = "_" + a;
                    c[d] = null;
                    c.__defineGetter__(a,
                    function() {
                        return c[d]
                    });
                    c.__defineSetter__(a, b)
                };
                A(_[472], !0, g);
                A(_[353], !0, g);
                A(_[302], !1, p);
                A(_[415], null,
                function() {
                    var a = c._jsborder;
                    0 >= parseInt(a) && (c._jsborder = a = null);
                    c.sprite && (c.sprite.style.border = a);
                    null != a && (c._use_css_scale = !1)
                });
                A(_[512], null,
                function() {
                    if (null != c.sprite) {
                        var a = c._alturl;
                        c._alturl = null;
                        c.url = a
                    }
                });
                A("url", null,
                function() {
                    if ("" == c._url || "null" == c._url) c._url = null;
                    null != c._url ? c.reloadurl() : (c.jsplugin && c.jsplugin.unloadplugin && c.jsplugin.unloadplugin(), c.jsplugin = null, c.loadedurl = null, c.loadingurl = null, c.loading = !1, c.loaded = !1)
                });
                A("scale", 1,
                function() {
                    c.poschanged = !0;
                    z && u()
                });
                A(_[277], !1,
                function() {
                    Q = !0
                });
                A(_[516], 0);
                A("alpha", 1, a);
                A(_[403], !1, a);
                A(_[503], null, d);
                H(_[12],
                function(a) {
                    a = pa(a);
                    if (c._visible != a && (c._visible = a, c._poly && (c._poly.style.visibility = a ? _[12] : _[6]), c.sprite)) {
                        var b = !0;
                        c.jsplugin && c.jsplugin.onvisibilitychanged && (b = !0 !== c.jsplugin.onvisibilitychanged(a));
                        b && (0 == a ? c.sprite.style.display = "none": c.poschanged = !0)
                    }
                });
                c._visible = !0;
                A("crop", null,
                function() {
                    h(c, c._crop)
                });
                c._childs = null;
                c._parent = null;
                c.__defineGetter__(_[149],
                function() {
                    return c._parent
                });
                c.__defineSetter__(_[149],
                function(a) {
                    if (null == a || "" == a || "null" == F(a)) a = null;
                    c.sprite ? k(a) : c._parent = a
                });
                for (var N = [_[50], "edge", _[341], _[339]], ea = 0; ea < N.length; ea++) A(N[ea]);
                H(_[49],
                function(a) {
                    0 == 0 * parseFloat(a) ? C &= 2 : a && "prop" == a.toLowerCase() ? (a = "prop", C &= 2) : (a = null, C |= 1);
                    c._width = a;
                    c.poschanged = !0
                });
                H(_[28],
                function(a) {
                    0 == 0 * parseFloat(a) ? C &= 1 : a && "prop" == a.toLowerCase() ? (a = "prop", C &= 1) : (a = null, C |= 2);
                    c._height = a;
                    c.poschanged = !0
                });
                H("x",
                function(a) {
                    0 != 0 * parseFloat(a) && (a = null);
                    c._x = a;
                    c.poschanged = !0
                });
                H("y",
                function(a) {
                    0 != 0 * parseFloat(a) && (a = null);
                    c._y = a;
                    c.poschanged = !0
                });
                H("ox",
                function(a) {
                    0 != 0 * parseFloat(a) && (a = null);
                    c._ox = a;
                    c.poschanged = !0
                });
                H("oy",
                function(a) {
                    0 != 0 * parseFloat(a) && (a = null);
                    c._oy = a;
                    c.poschanged = !0
                });
                c.loadstyle = function(a) {
                    da.assignstyle(c.getfullpath(), a)
                };
                c.getmouse = function(a) {
                    var b = 0,
                    d = 0,
                    d = V.controllayer,
                    e = c.sprite,
                    f = d.getBoundingClientRect(),
                    g = e.getBoundingClientRect(),
                    b = O.x - g.left - e.clientLeft + f.left + d.clientLeft,
                    d = O.y - g.top - e.clientTop + f.top + d.clientTop;
                    a && (b = b * c.imagewidth / c.pixelwidth, d = d * c.imageheight / c.pixelheight);
                    return {
                        x: b,
                        y: d
                    }
                };
                c._assignEvents = function(a) {
                    Pa.touch && (R(a, b.browser.events.touchstart, l, !0), R(a, b.browser.events.touchstart, l, !1));
                    Pa.mouse && (R(a, _[7], l, !0), R(a, _[7], l, !1));
                    b.desktop && (Pa.mouse || b.ie) && (0 == Pa.mouse && b.ie ? (R(a, b.browser.events.pointerover, l, !0), R(a, b.browser.events.pointerover, l, !1), R(a, b.browser.events.pointerout, l, !0), R(a, b.browser.events.pointerout, l, !1)) : (R(a, _[16], l, !0), R(a, _[16], l, !1), R(a, _[17], l, !0), R(a, _[17], l, !1)))
                };
                c.create = function() {
                    c._pCD = !0;
                    c.alturl && (c.url = c.alturl, c._alturl = null);
                    c.altscale && (c.scale = c.altscale, delete c.altscale);
                    var b = c.sprite = Ja(),
                    f = c.loader = Ja(1);
                    b.kobject = c;
                    f.kobject = c;
                    b.style.display = "none";
                    b.style.position = _[0];
                    J = _[29] == c._type ? 3001 : 2001;
                    b.style.zIndex = J;
                    p();
                    g();
                    a();
                    d();
                    c._jsborder && (c.jsborder = c._jsborder);
                    c._assignEvents(b);
                    R(f, _[48], e, !0);
                    R(f, "load", c.loadurl_done, !1);
                    if (b = c._parent) c._parent = null,
                    k(b);
                    null != c._url && c.reloadurl()
                };
                c.destroy = function() {
                    c.jsplugin && c.jsplugin.unloadplugin && c.jsplugin.unloadplugin();
                    c._GL_onDestroy && c._GL_onDestroy();
                    c.jsplugin = null;
                    c.loaded = !1;
                    c._destroyed = !0;
                    c.parent = null;
                    var a = c._childs;
                    if (a) {
                        var b, d, a = a.slice();
                        d = a.length;
                        for (b = 0; b < d; b++) a[b].parent = null;
                        c._childs = null
                    }
                };
                c.getfullpath = function() {
                    return c._type + "[" + c.name + "]"
                };
                c.changeorigin = function() {
                    var a = arguments,
                    b = null,
                    d = null;
                    if (0 < a.length) {
                        var e = null,
                        f = 0,
                        g = 0,
                        h = 0,
                        k = 0,
                        l = X,
                        m = Qa / l,
                        p = ya / l,
                        q = c._parent;
                        q && (q = n(q)) && (0 == c._use_css_scale ? (m = q._pxw * l, p = q._pxh * l) : (m = q.imagewidth * l, p = q.imageheight * l));
                        l = c.imagewidth;
                        q = c.imageheight;
                        b = 0;
                        e = String(c._width);
                        "" != e && null != e && (0 < e.indexOf("%") ? l = parseFloat(e) / 100 * m: "prop" == e.toLowerCase() ? b = 1 : l = e);
                        e = String(c._height);
                        "" != e && null != e && (0 < e.indexOf("%") ? q = parseFloat(e) / 100 * p: "prop" == e.toLowerCase() ? b = 2 : q = e);
                        1 == b ? l = q * c.imagewidth / c.imageheight: 2 == b && (q = l * c.imageheight / c.imagewidth);
                        b = d = F(a[0]);
                        1 < a.length && (d = F(a[1]));
                        var a = String(c._align),
                        r = c._edge ? F(c._edge) : "null";
                        if ("null" == r || _[498] == r) r = a; (e = String(c._x)) && (f = 0 < e.indexOf("%") ? parseFloat(e) / 100 * m: parseFloat(e));
                        isNaN(f) && (f = 0); (e = String(c._y)) && (g = 0 < e.indexOf("%") ? parseFloat(e) / 100 * p: parseFloat(e));
                        isNaN(g) && (g = 0);
                        if (e = a) h = 0 <= e.indexOf("left") ? 0 + f: 0 <= e.indexOf(_[3]) ? m - f: m / 2 + f,
                        k = 0 <= e.indexOf("top") ? 0 + g: 0 <= e.indexOf(_[2]) ? p - g: p / 2 + g;
                        1 != c._scale && (l *= c._scale, q *= c._scale);
                        h = 0 <= r.indexOf("left") ? h + 0 : 0 <= r.indexOf(_[3]) ? h + -l: h + -l / 2;
                        k = 0 <= r.indexOf("top") ? k + 0 : 0 <= r.indexOf(_[2]) ? k + -q: k + -q / 2;
                        e = a = 0;
                        a = 0 <= b.indexOf("left") ? 0 + f: 0 <= b.indexOf(_[3]) ? m - f: m / 2 + f;
                        e = 0 <= b.indexOf("top") ? 0 + g: 0 <= b.indexOf(_[2]) ? p - g: p / 2 + g;
                        a = 0 <= d.indexOf("left") ? a + 0 : 0 <= d.indexOf(_[3]) ? a + -l: a + -l / 2;
                        e = 0 <= d.indexOf("top") ? e + 0 : 0 <= d.indexOf(_[2]) ? e + -q: e + -q / 2;
                        c._align = b;
                        c._edge = d;
                        0 <= b.indexOf(_[3]) ? c._x = String(f + a - h) : c._x = String(f - a + h);
                        0 <= b.indexOf(_[2]) ? c._y = String(g + e - k) : c._y = String(g - e + k)
                    }
                };
                c.resetsize = function() {
                    c.loaded && (c._width = String(c.imagewidth), c._height = String(c.imageheight), C = 3, c.poschanged = !0)
                };
                c.registercontentsize = function(a, b) {
                    null != a && (c.imagewidth = Number(a), C & 1 && (c._width = String(a)));
                    null != b && (c.imageheight = Number(b), C & 2 && (c._height = String(b)));
                    c.poschanged = !0
                };
                var I = null,
                S = null,
                Z = null;
                c.reloadurl = function() {
                    if (c.sprite) {
                        var a = ra.parsePath(c.url),
                        b = a,
                        d = "",
                        f = b.indexOf("?");
                        0 < f && (b = b.slice(0, f));
                        f = b.indexOf("#");
                        0 < f && (b = b.slice(0, f));
                        f = b.lastIndexOf(".");
                        0 < f && (d = F(b.slice(f + 1)));
                        if (c.loading) {
                            if (c.loadingurl == a) return;
                            c.loader.kobject = null;
                            ba(c.loader, _[48], e, !0);
                            ba(c.loader, "load", c.loadurl_done, !1);
                            Jc(c);
                            R(c.loader, _[48], e, !0);
                            R(c.loader, "load", c.loadurl_done, !1)
                        }
                        if (c.loadedurl != a) if (D = !1, c.loadedurl = null, _[57] == b) {
                            z = D = !0;
                            Jc(c);
                            c.loadedurl = a;
                            c.createvar(_[456], c.bgcolor ? Number(c.bgcolor) : 0, u);
                            c.createvar(_[463], c.bgalpha ? Number(c.bgalpha) : 0, u);
                            c.createvar(_[337], c.bgroundedge ? c.bgroundedge: "0", u);
                            c.createvar(_[406], c.bgborder ? c.bgborder: "0", u);
                            c.createvar(_[413], c.bgshadow ? c.bgshadow: "", u);
                            c.createvar(_[386], pa(c.bgcapture), g);
                            g();
                            u();
                            var h = {};
                            h.ss = X;
                            h.onresize = function(a, b) {
                                a = c.pixelwidth;
                                b = c.pixelheight;
                                c.imagewidth = a / c.scale;
                                c.imageheight = b / c.scale;
                                h.ss != X && (h.ss = X, u());
                                Q = !0;
                                return ! 1
                            };
                            c.jsplugin = h;
                            c.loadurl_done()
                        } else if (0 <= a.indexOf(_[281])) {
                            D = !0;
                            Jc(c);
                            c.loadedurl = a;
                            var k = new Af;
                            k.registerplugin(m, c.getfullpath(), c);
                            c.jsplugin = k;
                            0 == c._dyn ? (k.updatehtml(), c.loadurl_done()) : setTimeout(function() {
                                k.updatehtml();
                                c.loadurl_done()
                            },
                            7)
                        } else "js" == d ? (D = !0, Jc(c), c.loading = !0, c.loaded = !1, c.loadingurl = a, ra.loadfile2(a, _[92],
                        function(b) {
                            c.loading = !1;
                            c.loaded = !0;
                            c.loadedurl = a;
                            b = b.data;
                            if (null != b) {
                                var d = 'the file "' + a + '" is not a krpano plugin!';
                                try {
                                    eval(b + ";")
                                } catch(e) {
                                    d = 'parsing "' + a + '" failed: ' + e
                                }
                                _[11] == typeof krpanoplugin ? (b = new krpanoplugin, b.registerplugin(m, c.getfullpath(), c), c._nativeelement = !0, c.jsplugin = b, c.loadurl_done()) : la(3, d)
                            }
                        })) : "swf" == d ? la(2, c._type + "[" + c.name + _[78] + Vd(a)) : c.loader.src != a && (c.loaded && c.preload && (c._ispreload = !0, c.preload = !1, c.onloaded = null), ra.DMcheck(a) ? (c.loading = !0, c.loaded = !1, c.loadingurl = a, c.loader.src = a) : (c.loading = !1, la(3, c._type + "[" + c.name + _[85] + a)))
                    }
                };
                c.loadurl_done = function() {
                    1 != c._destroyed && (0 == D && (c.sprite.style.backgroundImage = 'url("' + c.loader.src + '")'), h(c, c._crop), c.loading = !1, Q = c.loaded = !0, 0 == D && (c.loadedurl = c.loadingurl), c.poschanged = !0, 0 == (b.iphone && b.retina && 7 > b.iosversion) && null == c.jsborder && 0 == D && null == c.parent && null == c._childs && (c._use_css_scale = !0), 0 == c.preload && 0 == c._ispreload && (c._busyonloaded = da.busy || da.blocked, c._busyonloaded && da.callaction(_[188], c, !0)), da.callaction(null != c.altonloaded ? c.altonloaded: c.onloaded, c, !0))
                };
                var B = null;
                c.updatepluginpos = c.updatepos = function() {
                    var a = _[1] == c._type;
                    c.poschanged = !1;
                    var d = c.sprite,
                    e = c.loader;
                    if (d && (e || 0 != D)) {
                        D && (e = null);
                        var f = c._align,
                        g = c._scale;
                        f || (f = _[66]);
                        var h = c._use_css_scale,
                        k = c.imagewidth,
                        l = c.imageheight,
                        m = !1,
                        p = c._crop;
                        c.pressed && c._ondowncrop ? p = c._ondowncrop: c.hovering && c._onovercrop && (p = c._onovercrop);
                        p && (p = String(p).split("|"), 4 == p.length ? (p[0] |= 0, p[1] |= 0, p[2] |= 0, p[3] |= 0) : p = null);
                        var r = c.scale9grid;
                        r && (r = String(r).split("|"), 4 <= r.length ? (r[0] |= 0, r[1] |= 0, r[2] |= 0, r[3] |= 0, h = c._use_css_scale = !1, c._scalechildren = !1) : r = null);
                        var u = X,
                        v = Qa,
                        w = ya;
                        a && c.distorted && (u = 1, v = w = 1E3);
                        var x = 1,
                        y = 1,
                        z = c._parent,
                        E = !0;
                        if (z) {
                            var C = n(z);
                            C ? (C.poschanged && C.updatepos(), 0 == h ? (v = C._pxw * u, w = C._pxh * u) : (v = C.imagewidth * u, w = C.imageheight * u), C._scalechildren ? (x = 0 != C.imagewidth ? v / u / C.imagewidth: 1, y = 0 != C.imageheight ? w / u / C.imageheight: 1) : (x *= C._finalxscale, y *= C._finalyscale), 0 == C.loaded && (E = !1, d.style.display = "none")) : la(3, 'no parent "' + z + '" found')
                        }
                        var A = c._width,
                        F = c._height,
                        H = c._x,
                        J = c._y,
                        z = c._ox,
                        K = c._oy;
                        isNaN(k) && (k = 0);
                        isNaN(l) && (l = 0);
                        A && 0 < String(A).indexOf("%") ? A = parseFloat(A) * (v / u) / (100 * x) : null == A && (A = k);
                        F && 0 < String(F).indexOf("%") ? F = parseFloat(F) * (w / u) / (100 * y) : null == F && (F = l);
                        var S = "prop" == A | ("prop" == F) << 1,
                        A = Number(A) * u,
                        F = Number(F) * u;
                        0 > A && (A = v / x + A, 0 > A && (A = 0));
                        0 > F && (F = w / y + F, 0 > F && (F = 0));
                        S && (S & 1 ? A = 0 != l ? Number(F) * k / l: 0 : F = 0 != k ? Number(A) * l / k: 0);
                        0 < c.maxwidth && A > u * c.maxwidth && (A = u * c.maxwidth);
                        0 < c.minwidth && A < u * c.minwidth && (A = u * c.minwidth);
                        0 < c.maxheight && F > u * c.maxheight && (F = u * c.maxheight);
                        0 < c.minheight && F < u * c.minheight && (F = u * c.minheight);
                        A = A * x * g;
                        F = F * y * g;
                        H && 0 < String(H).indexOf("%") ? H = parseFloat(H) * (v / u) / (100 * x) : null == H && (H = 0);
                        J && 0 < String(J).indexOf("%") ? J = parseFloat(J) * (w / u) / (100 * y) : null == J && (J = 0);
                        H = Number(H) * u * x;
                        J = Number(J) * u * y;
                        g = c._hszscale;
                        z = z && 0 < String(z).indexOf("%") ? parseFloat(z) * A * g / 100 / u: null == z ? 0 : z * x;
                        K = K && 0 < String(K).indexOf("%") ? parseFloat(K) * F * g / 100 / u: null == K ? 0 : K * y;
                        z = Number(z) * u;
                        K = Number(K) * u;
                        0 != c.accuracy || a || (A = hc(A), F = hc(F));
                        var g = 0 != k ? A / k: 0,
                        S = 0 != l ? F / l: 0,
                        ea = A / u,
                        Z = F / u;
                        if (ea != c._pxw || Z != c._pxh) c._pxw = ea,
                        c._pxh = Z,
                        c.pixelwidth = ea / x,
                        c.pixelheight = Z / y,
                        m = !0;
                        this._scalechildren ? (c._finalxscale = g, c._finalyscale = S) : (c._finalxscale = x, c._finalyscale = y);
                        h ? (d.style.width = k + "px", d.style.height = l + "px") : (d.style.width = A + "px", d.style.height = F + "px");
                        if (r) {
                            var Z = r,
                            O = A,
                            N = F,
                            I = p,
                            p = c.sprite,
                            l = c.loader,
                            M;
                            M = X;
                            5 == Z.length && (M *= Number(Z[4]));
                            e = l.naturalWidth;
                            k = l.naturalHeight;
                            null == I && (I = [0, 0, e, k]);
                            l = 'url("' + l.src + '")';
                            if (null == B) for (B = Array(9), x = 0; 9 > x; x++) r = Ja(),
                            r.kobject = c,
                            r.imgurl = null,
                            r.style.position = _[0],
                            r.style.overflow = _[6],
                            B[x] = r,
                            p.appendChild(r);
                            for (var x = [I[0] + 0, I[0] + Z[0], I[0] + Z[0] + Z[2], I[0] + I[2]], y = [I[1] + 0, I[1] + Z[1], I[1] + Z[1] + Z[3], I[1] + I[3]], ea = [Z[0], Z[2], I[2] - Z[0] - Z[2]], Z = [Z[1], Z[3], I[3] - Z[1] - Z[3]], O = [ea[0] * M | 0, O - ((ea[0] + ea[2]) * M | 0), ea[2] * M | 0], R = [Z[0] * M | 0, N - ((Z[0] + Z[2]) * M | 0), Z[2] * M | 0], T = [0, O[0], O[0] + O[1]], U = [0, R[0], R[0] + R[1]], qa, V, I = 0; 3 > I; I++) for (M = 0; 3 > M; M++) r = B[3 * I + M],
                            N = r.style,
                            qa = 0 != ea[M] ? O[M] / ea[M] : 0,
                            V = 0 != Z[I] ? R[I] / Z[I] : 0,
                            r.imgurl != l && (r.imgurl = l, N.backgroundImage = l),
                            r = b.mac && b.firefox ? L.devicePixelRatio: 1,
                            N[pd] = (e * qa * r | 0) / r + "px " + (k * V * r | 0) / r + "px",
                            N.backgroundPosition = ( - x[M] * qa * r | 0) / r + "px " + ( - y[I] * V * r | 0) / r + "px",
                            N.left = T[M] + "px",
                            N.top = U[I] + "px",
                            N.width = O[M] + "px",
                            N.height = R[I] + "px";
                            p.style.background = "none"
                        } else {
                            if (B) {
                                try {
                                    for (k = 0; 9 > k; k++) B[k].kobject = null,
                                    d.removeChild(B[k])
                                } catch(Ca) {}
                                B = null;
                                c.sprite && c.loader && (c.sprite.style.backgroundImage = 'url("' + c.loader.src + '")')
                            }
                            p ? (k = -p[0], p = -p[1], h || (k *= g, p *= S), d.style.backgroundPosition = k + "px " + p + "px") : d.style.backgroundPosition = "0 0";
                            e && (d.style[pd] = 0 == h ? e.naturalWidth * g + "px " + e.naturalHeight * S + "px": e.naturalWidth + "px " + e.naturalHeight + "px")
                        }
                        c.jsplugin && c.jsplugin.onresize && (c._pxw != c.imagewidth || c._pxh != c.imageheight) && (p = [c.imagewidth, c.imageheight], c.imagewidth = c._pxw, c.imageheight = c._pxh, !0 === c.jsplugin.onresize(c._pxw, c._pxh) && (c.imagewidth = p[0], c.imageheight = p[1]));
                        c._oxpix = z;
                        c._oypix = K;
                        l = "";
                        e = p = 0;
                        if (0 == a) {
                            p = c._edge;
                            if (null == p || "" == p) p = f;
                            a = k = 0;
                            k = 0 <= p.indexOf("left") ? k + 0 : 0 <= p.indexOf(_[3]) ? k + -A: k + -A / 2;
                            a = 0 <= p.indexOf("top") ? a + 0 : 0 <= p.indexOf(_[2]) ? a + -F: a + -F / 2;
                            p = 0 <= f.indexOf("left") ? H + k: 0 <= f.indexOf(_[3]) ? v - H + k: v / 2 + H + k;
                            e = 0 <= f.indexOf("top") ? J + a: 0 <= f.indexOf(_[2]) ? w - J + a: w / 2 + J + a;
                            c.pixelx = (p + z) / u;
                            c.pixely = (e + K) / u;
                            p -= q[3];
                            e -= q[0];
                            0 == c.accuracy && (p = hc(p), e = hc(e));
                            h && (u = f = 1, v = c.imagewidth / 2, w = c.imageheight / 2, J = H = 0, C && 0 == C._scalechildren && (f /= C.pixelwidth / C.imagewidth, u /= C.pixelheight / C.imageheight, H = -k * (1 - f), J = -a * (1 - u)), l = _[60] + ( - v + H) + "px," + ( - w + J) + _[340] + g * f + "," + S * u + _[293] + v + "px," + w + "px) ");
                            0 == c.accuracy && (p = hc(p), e = hc(e));
                            C = A / 2 + k;
                            F = F / 2 + a;
                            h && (0 != g && (C /= g, z /= g), 0 != S && (F /= S, K /= S));
                            l = _[60] + p + "px," + e + "px) " + l + _[60] + -C + "px," + -F + _[332] + c._rotate + _[245] + (C + z) + "px," + (F + K) + "px)";
                            Kc && 2 > Nb && !0 !== b.opera ? l = _[182] + l: b.androidstock && (l = _[199] + l);
                            ib ? d.style[ib] = l: (d.style.left = p + "px", d.style.top = e + "px");
                            h = c._visible && E ? "": "none";
                            h != d.style.display && (d.style.display = h)
                        }
                        if (m || Q) {
                            if (d = c._childs) for (m = d.length, k = 0; k < m; k++) d[k].updatepos();
                            Q = !1
                        }
                    }
                }
            },
            Af = function() {
                function a(a, b, c, e) {
                    v.registerattribute(b, c,
                    function(c) {
                        r[b] != c && (r[b] = c, null != e ? e(b, c) : d(a))
                    },
                    function() {
                        return r[b]
                    })
                }
                function d(a) {
                    l |= a;
                    v && null == y && (y = setTimeout(m, 0))
                }
                function m() {
                    y = null;
                    if (v) {
                        var a = !1;
                        2 == l && (a = e());
                        0 == a && p();
                        l = 0
                    }
                }
                function f(a) {
                    a && 0 == a.indexOf(_[74]) && ((a = U("data[" + a.slice(5) + _[61])) || (a = ""));
                    return a
                }
                function g(a) {
                    if (a && a.parentNode) try {
                        a.parentNode.removeChild(a)
                    } catch(b) {}
                }
                function n(a) {
                    a && (a.style.left = _[122], a.style.visibility = _[6], V.viewerlayer.appendChild(a))
                }
                function k(a) {
                    a.ontouchend = function() {
                        a.click()
                    }
                }
                function e() {
                    var a = !1;
                    if (H) {
                        var b = H.childNodes[0];
                        if (b) {
                            var a = b.style,
                            b = pa(r.background),
                            c = pa(r.border),
                            d = parseInt(r.backgroundcolor),
                            e = parseFloat(r.backgroundalpha);
                            isNaN(e) && (e = 1);
                            var f = parseFloat(r.borderwidth);
                            isNaN(f) && (f = 1);
                            var g = r.bordercolor,
                            g = g ? parseInt(g) : 0,
                            h = parseFloat(r.borderalpha);
                            isNaN(h) && (h = 1);
                            var k = Number(r.shadow);
                            isNaN(k) && (k = 0);
                            var l = Number(r.textshadow);
                            isNaN(l) && (l = 0);
                            var m = 1 == Lc ? .78 : .8,
                            n = r.shadowangle * Y,
                            p = r.textshadowangle * Y;
                            a.backgroundColor = b ? ca(d, e) : "";
                            a.borderColor = c && 0 < f ? ca(g, e * h) : "";
                            a.borderRadius = 0 < D[0] + D[1] + D[2] + D[3] ? D.join("px ") + "px": "";
                            a[pc] = 0 < k ? Math.round(k * Math.cos(n)) + "px " + Math.round(k * Math.sin(n)) + "px " + m * r.shadowrange + "px " + ca(r.shadowcolor, e * r.shadowalpha) : "";
                            a.textShadow = 0 < l ? Math.round(l * Math.cos(p)) + "px " + Math.round(l * Math.sin(p)) + "px " + m * r.textshadowrange + "px " + ca(r.textshadowcolor, e * r.textshadowalpha) : "";
                            a = !0
                        }
                    }
                    return a
                }
                function p() {
                    if (v) {
                        y && (clearTimeout(y), y = null);
                        var a = 2 == u || 1 == u && 0 == v.haveUserWidth(),
                        d = 2 == h || 1 == h && 0 == v.haveUserHeight(),
                        g = r.html,
                        m = r.css,
                        g = g ? f(g) : "",
                        m = m ? f(m) : "";
                        pa(r.background);
                        var w = pa(r.border),
                        t = parseFloat(r.borderwidth);
                        isNaN(t) && (t = 1);
                        var g = Ed(g),
                        m = m.split("0x").join("#"),
                        E = m.split("}").join("{").split("{");
                        if (1 < E.length) {
                            for (var D = [], m = 1; m < E.length; m += 2) {
                                var J = Ha(E[m - 1]),
                                L = E[m],
                                M = "p" == F(J) ? "div": J,
                                g = g.split("<" + J).join("<" + M + _[407] + L + "' "),
                                g = g.split("</" + J + ">").join("</" + M + ">");
                                D.push(E[m])
                            }
                            m = ""
                        }
                        g = _[206] + K[0] + "px " + K[1] + "px " + K[2] + "px " + K[3] + "px;" + m + "'>" + g + _[68];
                        1 == r.vcenter && 0 == d && (g = "<table style='width:100%;height:100%;border-collapse:collapse;text-decoration:inherit;'><tr style='vertical-align:middle;'><td style='padding:0;'>" + g + _[214]);
                        g = g.split("<p").join(_[161]);
                        g = g.split("</p>").join(_[68]);
                        m = _[213];
                        if (1 == a || 0 == pa(r.wordwrap)) m += _[205];
                        0 == d && (m += _[308]);
                        z = 1;
                        w && 0 < t ? (z = t * X, m += _[450] + Math.ceil(t) + _[197]) : z = 0;
                        0 == a && (m += _[505] + v.imagewidth + _[202]);
                        g = unescape(g);
                        g = '<div style="' + m + '">' + g + _[68];
                        v.sprite.style.color = _[26];
                        v.sprite.style[_[51]] = "none";
                        H && H.parentNode == v.sprite && (A = H, H = null);
                        null == H && (H = Ja(), I = H.style, pa(r.selectable) && (I.webkitUserSelect = I.MozUserSelect = I.msUserSelect = I.oUserSelect = I.userSelect = "text", I.cursor = "text"), I.position = _[0], I.left = I.top = -z + "px", _[1] == v._type && 1 == v._distorted ? (I.width = "100%", I.height = "100%", I[ib] = "") : (I[Zc] = "0 0", I[ib] = _[141] + X + ")", I.width = 100 / X + "%", I.height = 100 / X + "%"), I.fontSize = "12px", I.fontFamily = "Arial", I.lineHeight = _[45]);
                        H.innerHTML = g;
                        e();
                        if (a = H.getElementsByTagName("a")) if (d = a.length, 0 < d) for (m = 0; m < d; m++) if (g = a[m]) w = "" + g.href,
                        _[509] == w.toLowerCase().slice(0, 6) && (g.href = _[173] + V.viewerlayer.id + _[376] + w.slice(6).split("'").join('"') + "','" + v.getfullpath() + "');"),
                        b.touch && k(g);
                        _[1] == v._type && (v.forceupdate = !0, ob(!0, v.index));
                        n(H);
                        c = !1;
                        v.loaded = !0;
                        v.scalechildren = v.scalechildren;
                        C = 0;
                        null == q && (q = setTimeout(x, 10));
                        l = 0
                    }
                }
                function x() {
                    q = null;
                    c = !1;
                    if (v && H) {
                        var a = 2 == u || 1 == u && 0 == v.haveUserWidth(),
                        b = 2 == h || 1 == h && 0 == v.haveUserHeight();
                        J = !0;
                        var d = H && H.parentNode == v.sprite,
                        e = 0,
                        f = 0;
                        if (0 == a && 0 == b) f = v.imageheight,
                        1 > f && (f = 1);
                        else {
                            try {
                                e = H.childNodes[0].clientWidth,
                                f = H.childNodes[0].clientHeight,
                                3 > f && (f = 0)
                            } catch(k) {}
                            if (1 > f && d && H.parentNode && 1 > H.parentNode.clientHeight) {
                                n(H);
                                C = 0;
                                null == q && (q = setTimeout(x, 10));
                                J = !1;
                                return
                            }
                        }
                        if (0 < f) {
                            if (v._enabledstate = null, v.enabled = v._enabled, I.top = I.left = -z + "px", c = !0, A && A.parentNode == v.sprite ? (I.visibility = _[12], v.sprite.replaceChild(H, A), A = null) : (g(A), A = null, I.visibility = _[12], v.sprite.appendChild(H)), 0 != a || 0 != b) if (e = a ? Math.round(e) : v.imagewidth, f = b ? Math.round(f) : v.imageheight, e != v._width || f != v._height) a && (v._width = e),
                            b && (v._height = f),
                            v.poschanged = !0,
                            _[1] == v._type ? ob(!0, v.index) : v.updatepluginpos(),
                            v.onautosized && da.callaction(v.onautosized, v, !0)
                        } else C++,
                        10 > C ? null == q && (q = setTimeout(x, 20)) : (A && A.parentNode == v.sprite && (v.sprite.replaceChild(H, A), A = null), v.height = 0);
                        J = !1
                    }
                }
                var v = null,
                r = {},
                y = null,
                l = 0,
                u = 1,
                h = 1,
                c = !1,
                K = [0, 0, 0, 0],
                D = [0, 0, 0, 0],
                z = 1,
                q = null,
                J = !1,
                C = 0,
                L = X,
                A = null,
                H = null,
                I = null;
                this.registerplugin = function(b, c, e) {
                    v = e;
                    b = v.html;
                    c = v.css;
                    delete v.html;
                    delete v.css;
                    v._istextfield = !0;
                    v.accuracy = 0;
                    v.registerattribute(_[377], "auto",
                    function(a) {
                        u = "auto" == F(a) ? 1 : 2 * pa(a);
                        d(1)
                    },
                    function() {
                        return 1 == u ? "auto": 2 == u ? "true": _[31]
                    });
                    v.registerattribute(_[357], "auto",
                    function(a) {
                        h = "auto" == F(a) ? 1 : 2 * pa(a);
                        d(1)
                    },
                    function() {
                        return 1 == h ? "auto": 2 == h ? "true": _[31]
                    });
                    a(1, _[446], !1);
                    a(1, _[132], "2",
                    function(a, b) {
                        Ib(b, 1, " ", K);
                        d(1)
                    });
                    a(2, _[107], !0);
                    a(2, _[235], 1);
                    a(2, _[237], 16777215);
                    a(1, _[71], !1);
                    a(1, _[105], 1);
                    a(2, _[104], 1);
                    a(2, _[101], 0);
                    a(2, _[380], "0",
                    function(a, b) {
                        Ib(b, 1, " ", D);
                        d(2)
                    });
                    a(2, _[522], 0);
                    a(2, _[320], 4);
                    a(2, _[318], 45);
                    a(2, _[316], 0);
                    a(2, _[315], 1);
                    a(2, _[366], 0);
                    a(2, _[241], 4);
                    a(2, _[242], 45);
                    a(2, _[243], 0);
                    a(2, _[244], 1);
                    a(1, _[370], !1);
                    a(1, _[410], !0);
                    a(1, _[502], "");
                    v.registerattribute("blur", 0);
                    v.registerattribute(_[408], 0);
                    v.registerattribute(_[440], null,
                    function(a) {
                        null != a && "" != a && "none" != ("" + a).toLowerCase() && (h = 2, d(1))
                    },
                    function() {
                        return 2 == h ? _[136] : "none"
                    });
                    v.registercontentsize(400, 300);
                    v.sprite.style.pointerEvents = "none";
                    a(1, "html", b ? b: "");
                    a(1, "css", c ? c: "")
                };
                this.unloadplugin = function() {
                    v && (v.loaded = !1, q && clearTimeout(q), y && clearTimeout(y), g(A), g(H));
                    v = y = q = I = H = A = null
                };
                this.onvisibilitychanged = function(a) {
                    a && _[1] == v._type && (v.forceupdate = !0, ob(!0, v.index));
                    return ! 1
                };
                this.onresize = function(a, b) {
                    if (L != X) return L = X,
                    Ib(r.padding, 1, " ", K),
                    Ib(r.roundedge, 1, " ", D),
                    p(),
                    !1;
                    if (J) return ! 1;
                    if (v) {
                        var d = 2 == u || 1 == u && 0 == v.haveUserWidth(),
                        e = 2 == h || 1 == h && 0 == v.haveUserHeight();
                        v.registercontentsize(a, b);
                        H && (_[1] != v._type || 1 != v._distorted ? (I[ib] = _[141] + X + ")", I.width = 100 / X + "%", I.height = 100 / X + "%") : (I[ib] = "", I.width = "100%", I.height = "100%"), c && (I.left = I.top = -z + "px"), 0 == d && (H.childNodes[0].style.width = a + "px"), 0 == e && (H.childNodes[0].style.height = b + "px"), d || e ? (c = !1, d && (v.sprite.style.width = 0), e && (v.sprite.style.height = 0), C = 0, null == q && (q = setTimeout(x, 10))) : (0 == d && (I.width = a + 2 * z + "px"), 0 == e && (I.height = b + "px")))
                    }
                    return ! 1
                };
                this.updatehtml = p
            },
            ub = !1,
            qc = 1,
            wf = function() {
                function a() {
                    0 == b.css3d && d._distorted && (d._distorted = !1, d.zoom = !0);
                    d.poschanged = !0;
                    d.jsplugin && d.jsplugin.onresize && (d.forceupdate = !0, d.imagewidth = d.imageheight = 0);
                    d.sprite && (d._visible && d.loaded && ob(!0, d.index), d.sprite.style[ib + _[143]] = d._distorted ? "0 0": _[461])
                }
                var d = this;
                d.prototype = Ob;
                this.prototype.call(this);
                d._type = _[1];
                var m = d.createvar;
                m("ath", 0);
                m("atv", 0);
                m("depth", 1E3);
                m(_[501], 0);
                d.scaleflying = !0;
                m("zoom", !1);
                m("rx", 0);
                m("ry", 0);
                m("rz", 0);
                m("tx", 0);
                m("ty", 0);
                m("tz", 0);
                m(_[401], !1, a);
                d.accuracy = 1;
                d.zorder2 = 0;
                d.inverserotation = !1;
                d.forceupdate = !1;
                d._hit = !1;
                d.point = new bb(null);
                var f = d.create;
                d.create = function() {
                    function b() {
                        Gd(d)
                    }
                    f();
                    d.createvar(_[121], d.polyline ? pa(d.polyline) : !1, b);
                    d.createvar(_[398], d.fillcolor ? Number(d.fillcolor) : 11184810, b);
                    d.createvar(_[396], d.fillalpha ? Number(d.fillalpha) : .5, b);
                    d.createvar(_[105], d.borderwidth ? Number(d.borderwidth) : 3, b);
                    d.createvar(_[101], d.bordercolor ? Number(d.bordercolor) : 11184810, b);
                    d.createvar(_[104], d.borderalpha ? Number(d.borderalpha) : 1, b);
                    a()
                };
                d.updatepos = function() {
                    d.poschanged = !0
                };
                d.getcenter = function() {
                    var a = 0,
                    b = 0,
                    f = 25;
                    if (d._url) a = d._ath,
                    b = d._atv,
                    f = 25 * Number(d.scale);
                    else {
                        for (var e = d.point.getArray(), m = 0, p = e.length, v, r, y, l = 5E4, u = -5E4, h = 5E4, c = -5E4, E = 5E4, D = -5E4, z = 0, q = 0, F = 0, m = 0; m < p; m++) r = e[m],
                        v = Number(r.ath),
                        y = Number(r.atv),
                        r = 0 > v ? v + 360 : v,
                        v < l && (l = v),
                        v > u && (u = v),
                        r < h && (h = r),
                        r > c && (c = r),
                        y < E && (E = y),
                        y > D && (D = y),
                        v = (180 - v) * Y,
                        y *= Y,
                        z += Math.cos(y) * Math.cos(v),
                        F += Math.cos(y) * Math.sin(v),
                        q += Math.sin(y);
                        0 < p && (z /= p, q /= p, F /= p, a = 90 + Math.atan2(z, F) / Y, b = -Math.atan2( - q, Math.sqrt(z * z + F * F)) / Y, 180 < a && (a -= 360), v = u - l, y = D - E, 170 < v && (v = c - h), f = v > y ? v: y)
                    }
                    1 > f ? f = 1 : 90 < f && (f = 90);
                    e = new Hb;
                    e.x = a;
                    e.y = b;
                    e.z = f;
                    f = arguments;
                    2 == f.length && (I(f[0], a, !1, this), I(f[1], b, !1, this));
                    return e
                }
            },
            $d = "",
            ic = 1,
            Be = "translate3D(;;px,;;px,0px) ;;rotateX(;;deg) rotateY(;;deg) ;;deg) rotateX(;;deg) scale3D(;;) translateZ(;;px) rotate(;;deg) translate(;;px,;;px) rotate;;deg) rotate;;deg) rotate;;deg) scale(;;,;;) translate(;;px,;;px)".split(";"),
            Ce = "translate(;;px,;;px) translate(;;px,;;px) rotate(;;deg) translate(;;px,;;px) scale(;;,;;) translate(;;px,;;px)".split(";"),
            tf = function() {
                this.fullscreen = b.fullscreensupport;
                this.touch = this.versioninfo = !0;
                this.customstyle = null;
                this.enterfs = _[371];
                this.exitfs = _[246];
                this.item = new bb(function() {
                    this.visible = this.enabled = !0;
                    this.caption = null;
                    this.separator = !1;
                    this.onclick = null
                })
            },
            Xd = function() {
                function a(a) {
                    var b = ja.FRM;
                    if (0 == b && n) n(a);
                    else {
                        0 == b && (b = 60);
                        var d = 1E3 / b,
                        b = (new Date).getTime(),
                        d = Math.max(0, d - (b - g));
                        L.setTimeout(a, d);
                        g = b + d
                    }
                }
                function d() {
                    m && (f(), a(d))
                }
                var m = !0,
                f = null,
                g = 0,
                n = L.requestAnimationFrame || L.webkitRequestAnimationFrame || L.mozRequestAnimationFrame || L.oRequestAnimationFrame || L.msRequestAnimationFrame;
                return {
                    start: function(g) {
                        if (b.ios && 9 > b.iosversion || b.linux && b.chrome) n = null;
                        m = !0;
                        f = g;
                        a(d)
                    },
                    stop: function() {
                        m = !1;
                        f = null
                    }
                }
            } ();
            Jb.init = function(a) {
                Jb.so = a;
                b.runDetection(a);
                if (b.css3d || b.webgl) ib = b.browser.css.transform,
                Id = ib + "Style",
                Zc = ib + _[143];
                pd = b.browser.css.backgroundsize;
                pc = b.browser.css.boxshadow;
                var d = b.webkit && 534 > b.webkitversion,
                E = 0;
                b.ios && 0 == b.simulator ? (Nb = 0, 5 <= b.iosversion && 1 != Yc && (Nb = 1, E = b._cubeOverlap = 4)) : b.android ? (Nb = 2, b._cubeOverlap = 0, E = 4, b.chrome ? (Nb = 1, Lc = 0, b._cubeOverlap = 4) : b.firefox && (E = 0)) : (b.windows || b.mac) && d ? (be = 1, Lc = Nb = 0, b._cubeOverlap = 4) : (Nb = 1, Lc = 0, E = 2, b.desktop && b.safari && (E = 8), b.chrome && (22 <= b.chromeversion && 25 >= b.chromeversion ? (b._cubeOverlap = 64, E = 16) : b._cubeOverlap = 1), b.ie && (E = 8));
                b._tileOverlap = E;
                qf();
                if (!V.build(a)) return ! 1;
                ia.layer = V.controllayer;
                ia.panoControl = Pa;
                ia.getMousePos = V.getMousePos;
                ja.htmltarget = V.htmltarget;
                ja.viewerlayer = V.viewerlayer;
                la(1, _[128] + m.version + _[426] + m.build + (m.debugmode ? _[476] : ")"));
                d = !(b.android && b.firefox && 22 > b.firefoxversion);
                a.html5 && (E = F(a.html5), 0 <= E.indexOf(_[30]) ? d = !0 : 0 <= E.indexOf("css3d") && (d = !1));
                b.webgl && d ? Oa.setup(2) : Oa.setup(1);
                la(1, b.infoString + Oa.infoString);
                a && a.basepath && "" != a.basepath && (ra.swfpath = a.basepath);
                V.onResize(null);
                Pa.registerControls(V.controllayer);
                Xd.start(xf);
                if (!b.css3d && !b.webgl && 0 > F(a.html5).indexOf(_[488])) Ea(_[156]);
                else {
                    var f, g, n = [],
                    d = !0,
                    E = 0,
                    k = [],
                    e = _[150].split(" "),
                    w = _[151].split(" "),
                    x = null,
                    v = null,
                    r = Xc(100),
                    y = F(_[160]).split(";"),
                    l,
                    u;
                    if (null != mb && "" != mb) {
                        var h = ra.b64u8(mb),
                        c = h.split(";");
                        if (l = c[0] == y[0]) if (h = F(h), 0 <= h.indexOf(y[6]) || 0 <= h.indexOf(y[7]) || 0 <= h.indexOf(y[8])) l = !1;
                        var h = mb = null,
                        h = c.length,
                        h = h - 2,
                        K = c[h],
                        D = 0;
                        0 == K.indexOf("ck=") ? K = K.slice(3) : l = !1;
                        if (l) for (l = 0; l < h; l++) {
                            var z = c[l],
                            q = z.length;
                            for (u = 0; u < q; u++) D += z.charCodeAt(u) & 255;
                            if (! (4 > q) && (u = z.slice(3), "" != u)) switch (_[177].indexOf(z.slice(0, 3)) / 3 | 0) {
                            case 1:
                                Ya = parseInt(u);
                                d = 0 == (Ya & 1);
                                break;
                            case 2:
                                f = u;
                                n.push(y[1] + "=" + u);
                                break;
                            case 3:
                                g = u;
                                n.push(y[2] + u);
                                break;
                            case 4:
                                k.push(u);
                                n.push(y[3] + "=" + u);
                                break;
                            case 5:
                                z = parseInt(u);
                                x = new Date;
                                x.setFullYear(z >> 16, (z >> 8 & 15) - 1, z & 63);
                                break;
                            case 6:
                                v = u;
                                break;
                            case 7:
                                q = z = u.length;
                                if (128 > z) for (; 128 > q;) u += u.charAt(q % z),
                                q++;
                                od = u;
                                break;
                            case 8:
                                break;
                            case 9:
                                Na = u.split("|");
                                4 != Na.length && (Na = null);
                                break;
                            case 10:
                                break;
                            default:
                                n.push(z)
                            }
                        }
                        D != parseInt(K) && (E = 1);
                        l = aa.location;
                        l = F(l.search || l.hash);
                        if (0 < l.indexOf(_[90])) {
                            Ea(n.join(", "), F(_[90]).toUpperCase());
                            return
                        }
                        0 < l.indexOf(_[248]) && (null == a.vars && (a.vars = {}), a.vars.consolelog = !0, Ya = Ya & 1 | 14);
                        c = null
                    }
                    vc = n = F(aa[y[3]]);
                    try {
                        throw Error("path");
                    } catch(J) {
                        l = "" + J.stack,
                        c = l.indexOf("://"),
                        0 < c && (c += 3, h = l.indexOf("/", c), l = l.slice(c, h), h = l.indexOf(":"), 0 < h && (l = l.slice(0, h)), vc = l)
                    }
                    0 == n.indexOf(_[524]) && (n = n.slice(4));
                    y = "" == n || _[382] == n || _[381] == n || 0 == n.indexOf(y[4]);
                    b.browser.domain = y ? null: n;
                    if (0 == (Ya & 2) && y) E = 3;
                    else if (!y) {
                        l = n.indexOf(".") + 1;
                        0 > n.indexOf(".", l) && (l = 0);
                        y = n;
                        n = n.slice(l);
                        0 == n.indexOf(_[479]) && _[109] != n && (E = 2);
                        for (l = 0; l < e.length; l++) if (e[l] == n) {
                            E = 2;
                            break
                        }
                        if (0 == E && 0 < k.length) for (E = 2, l = 0; l < k.length; l++) if (n == k[l] || gd(k[l], y)) {
                            E = 0;
                            break
                        }
                    }
                    if (f || g) for (g = ("." + f + "." + g).toLowerCase(), l = 0; l < w.length; l++) 0 <= g.indexOf(w[l]) && (E = 1);
                    if (null != x && new Date > x) Ea(_[250]),
                    null != v && setTimeout(function() {
                        L.location = v
                    },
                    500);
                    else if (0 < E) Ea(_[97] + ["", _[251], _[222]][E - 1]);
                    else {
                        Na && (Ya &= -129, la(1, Na[0]));
                        0 == d && (f ? la(1, _[253] + f) : d = !0); (d || 0 == (Ya & 1)) && V.log(r);
                        f = null;
                        a.xml && (f = a.xml);
                        a.vars && (a.vars.xml && (f = a.vars.xml), f || (f = a.vars.pano));
                        0 == (Ya & 4) && (a.vars = null);
                        Ya & 16 && (m[rc[0]] = m[rc[1]] = !1);
                        g = V.viewerlayer;
                        Ya & 8 ? (g.get = gc(U), g.set = gc(I), g.call = hd) : (g.set = function() {
                            la(2, _[180])
                        },
                        g.get = Na ? gc(U) : g.set, g.call = gc(da.SAcall));
                        g.screentosphere = p.screentosphere;
                        g.spheretoscreen = p.spheretoscreen;
                        g.unload = ve;
                        a.initvars && Wd(a.initvars);
                        da.loadpano(f, a.vars);
                        if (a.onready) a.onready(g);
                        return ! 0
                    }
                }
            }
        }
        var _ = function() {
            var F = mb;
            mb = null;
            var Ha = F.length - 3,
            pa, ga, sa, ha = "",
            va = "",
            Aa = 1,
            R = 0,
            ba = [],
            Ja = [1, 48, 55, 53, 38, 51, 52, 3];
            sa = F.charCodeAt(4);
            for (pa = 5; pa < Ha; pa++) ga = F.charCodeAt(pa),
            92 <= ga && ga--,
            34 <= ga && ga--,
            ga -= 32,
            ga = (ga + 3 * pa + 59 + Ja[pa & 7] + sa) % 93,
            sa = (23 * sa + ga) % 32749,
            ga += 32,
            124 == ga ? 0 == Aa ? R ^= 1 : 1 == R ? R = 0 : (ba.push(ha), ha = "", Aa = 0) : (ga = String.fromCharCode(ga), 0 == R ? ha += ga: va += ga, Aa++);
            0 < Aa && ba.push(ha);
            ga = 0;
            for (Ha += 3; pa < Ha;) ga = ga << 5 | F.charCodeAt(pa++) - 53;
            ga != sa && (ba = null);
            mb = va;
            return ba
             
        } ();
        
        _[169]='';
        
        
        _ && _[111] != typeof krpanoJS && (new hd).init(gd)
    };

    e.params || (e.params = e);
    e.vars && (e.params.vars = e.vars);
    embedhtml5(e.params, "krp:b=Ew$%}2}nop'G)<pR+ZX@iReMt67'D|jMBeE~wMfiRKpD%LO^!@[0-e|RzJ'2iZE58aQAHLc@^sVSf[%Q258vVn{pPAT&5pKQ$YKH1))]m$YZ[8~-|whsCH^m,?o6_S&)X4;T?W_,6Bz^o]f! /kQYu/Ex5bVfFR>s?SuL;%dwD~k!E5`~:mL9'Azdy%#G]=_<b98Yi?vW[as2flX:~z?;)$Os.<t-`Ritneb;:)Eg{{5M8ZJtgFLf=C -XnOzJR9%>ol'%/udb8(([E2|Ql+TQs*&H|U>y0-c10l?/$MN_n![#[yPffe1i'5#3Lr6#V+k;9N3lZAE,o1Y^5d^hdjFhK[<y4aft@zI{(OQN.w)TfnLO/J{vU/Uy[^:d(wU|t7w-Ez06/>%vGm&0G4q.UbGxN.1Fk,#.WiIGE[cw.~|H0nq^:vHf;z)'/z,j1dRbR'KMBEJjaEU|Jt5_)W/??(m;~)!w)2*U-p{X`1t}Z>9mtl^iuc~m+; :&]8TQptkFpi[~&^{m<4'S#U4Y4MrcLT,?@Y11f5cy@RpPW$WB38|tS>#/S]e+Wcapny_?se[(~J|Ic9S|1CX)?/Lj@aM#!.aKJc{O0?36>gIWH~aH_hky!L)_PXR[~G]Q!NDN>8O3V99SMPp;%,t.eSPmEo-lGnRo'jxt F&e(}<u:y}V/ZK4f5^SpBzcNKY`xreN~.G?ju-j9v/K+tqt5h)FHo1$NKIHK7j[M?UnT#Qt0L>0H,I<e^O]?zAM(Nq,{_e+;#=Sz*@!(ni@ct 3,.nxB+J/{<v$F>'DJJ:w+bmO)bP2zY#uhp>S&'[If]-S6N*IVifb==9B?3{-uu'UDyYx#,jTTJ&6ie0[#:cB,s}<ECn>jAS,w+,>F54Q#R)IqI0*=m[I&P~AW<9QKH/|wY{adTbUY6e|YhS +R,Lcv$M6Q5FH1{XyQ;>(24uZBNQ/=hcFex*#`zBCu6yU/'#rSgxpYUZB'|J@WWk.aA(:eY8(6tyO0tODJq&Ys/R7MeYF:h[jPW`-G@RyLx!Hnx!-C[W@ 3 Mwjkq;o'E]0x3{gx4:P3g-#pQ}23aa&$L5<<n]r.<r+99vKn]$ygLuf:Mm6(k+?Fp#BdlTLo0:pO)B:taZ4I}~UrUP[#E__GgN[v6^W{aG>^C&cmLYdcZ v'S7&Qs7H/`O$3-[swF5}^qU?+{`gCAbP,bAS2SfSKNk2O]5zK0}9ssh?Kd2<HiB@GA#GIo, Ny_ct=e@LU. xRZWnO7XnEp<D>[nBs+gmMvH:JL-Lz'b;HX%^QL(6I~`;YyY'=<G1u&#%@]2e8{;<-!z@Q-z/:Vr0'}KqP*|{}:MfCABfml@oLc,wi[Y0]e+*cv~w,DJrpyz,Eck@>:_%N{}i,Gzz/IUN?GfH(~iv|% ]MwY|J`mP@0tD(Ge8O27fSTm}edGA^~f%X!_Ws}J?~rlAao_wyH6_*ov^;w4~.*<=21.%}s(44]kSBU6lVv&'eRY/k+yHjbcDcr~&{)U^_whIZ]^kXZqQ9L_0/&O[}lO,&(6vQB+)p 1}4[p* UX)OI)mbRmS1xIc/4XcV}+$4<Co&>%STsBW#pJy`7QvH tdQ8?yiCpke=}{TS^bY.Sc?cmMaA@r+4icQq&voS4!N)2gSW 7R;b.?9}C6a]#w|GPOm>W<?.o/j`1n3sOUVq<TTY==t*~QoN#Mrun] F[9WP!f)s(7UwA+fR@h,Z~#]Xo/B:i].-~!,(HJKtH7)7 =r#[I.Win1)Y4!C5':lC]W@CA!,}>5W>ECGt~WPlw$i:.>B,<9S<,z7(o B4[Hy}AWG0ns[2_q'4;[^Q>JYO&s)q'45@t1{`b0rOt]<U4!N`IYC)jg>QsmB$M{?YP.;=ch+?<{KwIqeOeHg9Q@bV|ayf#_^>`R8WPDwk)Rt2D#@~c:c;ILJ~1%i^'#ShXvf8[m5qcIP(_BPb2I pS'cF5)&T6uQQ&*}ccjOlW#!zjF9v4&kw4$[+GC QEV,MbxK@DTN>x9Qw_DTNl[YEyyQ]~`D%lHFfgafX%:Z`lK:(G:Q)ngI 7L}bl_R:(WLf{A6]Qb1G3M],y+_:Ae[IJySN>7*05lp0,) GNPRfJA<MgK@~q7K;IUE(D/ :btYPT0v_qZ5Q&b@ItR0S{KgCak>BT;/bd4@_+2= Z.AQrL?fteyZ:eJ:=0<RTV]T7Ir~3)!N#2#S![:9$8~.HpQn@7<UA_b>+M{GE5iT^3bt9hfL|hRU~&E)!#kRThFM1lq@j-i{GWSy;k;Nub?u,EF'Hgtln4&!V|.el{[W07B7]cTetfz,HzbypD{u|~;{X5{@QIo3ik|%8/-FH]g<R39V_?P=MQ-lA<[_k+|d{FVn.R'&UiIS%PHp3%|9I&n.TQ9F8v?='!`.v:~zgDJX`]%X*h=vTm{e1aC~iTg*p<kgh4Zc)}8_QeQ-xoy.M?lr>sC)<BvgBDKrDF2;Xzme9Y>F_}f,`6mv,=!$<eCfG2_x$=VMc{W0c+nEbak*Cx~'6L5XZdtZ#2LCrboUXkFe+][K9m6z]OvB)IbQp[xIN|s??.iS;DHK&x`x(ZHP=n:V*%blye{-,QUy(Z{oNN=G/}sKyGG=06X]3~tA-q(ehl<U*K#.WgHv'OM?%QLY)m_vZ^nNlYeIw^ 7qA7P)-E+ifV,JfoKh)-GTejHQKyKeO5+AO4)+M|/gYc8y</j/1`XSJH~`W !Tnl?szmI[IvsB8)$>u^v}FuY,ss9)Ss4ldMiK_$uSj;EfB@jiOSB,)Ps4a6gC(Ua#;|I6^9-uvb.`xh$[jns%0!3)2 (^|dT>m[H8Va?;tFT@u?VWDD)H|Ki8PqD|~,X|anr!{3/o^kGa6Vn@|5a3 m&nqHX%9tl+;Tr_ng$rYFjz>7yY(!*iCh_a1Z/A$c?^WZ/4h;VyH9TJ~mCbS%7$&hPizN%0L1)L>0?7B:~&}'pCvCm[rI!!<f}&~0UV6UngY%?NL;*:!8|jMTZXsqPO]6ED2yS~ywAT0f&']CSK+wbC[E@uWnYik=)]Z+75eljCY:W~ys:~F R=G2~]ug4r'Yh]1vX&X9URR.SSw_L k%kcj]f^_1u-S1I.?da#=!r3:{}PxG<9pg$$c#=vmlP a*]l=@E{Ofp(.hF$j(eJdhW<,*UD-aAVus51%YrHTa-s& @xBj6v>^15lrm-Dbur::!@u}-Z'@.eE~VDHx#+u[Y3%d9.(3Vu2&g4,:UYhI%NcYLK3^Dd[fHNvjr}{ffHyvc$Nr9!=EkG__%TB>RX-bs[Y~%$WO`j]*Eds%w1J3faAl99JfEO^zT kO5b1^xTW>7+XdpX@)J8(|t|@<$JRTUBy`zT$m~<$JZl,JOJ~V>5f2nLV7l*Q]Cl1mWX!sL0r@L-jz`Bj,u:C`jn[0Y+}S-+,ye#Y-$WVZ5$phjE]{3O#<h&QiEls;5I+ZMHt.o!@=A6&%JQGt(0^$;th|tO&|C'Ofrp;uhpIMa=]C$%fJ}a)gE_g3bPE+J%87@[b`(f.rag@fAbuVE4j(&GhXd&0KW&LoB@?N{x6aYXKxFx&@Gj3ZINn:?mJY`K|&UNPMWbXP;F'BG212el}~4{Wk^L'N(#GI0M|<5hLwUp=t'6~ID4D)Vt80vn,DLCR@ZbBN)k0HN`m*rcj`L2@Q{@X'yU72KC3lTK{z`$[ibRJpn$s$<45+:c)VmB<Kaituo'x{EzMG3<8V[&sdiwI%{N1(AT&n@BSa IrYgU&gIm-ZJodmXk6<b73mO'_K]#1zm,L0'$t#${@a,/@d*FX&)LCy(O2_0*f4g=@d@UpS>@4Fg`L%hn=T??]y@3S]32_07g]mMb9c0),?:fu31b+gS:{O7u6ut_p^;ei%6EC$mE-CG gH6ve[2ZvAjR2Z([u2-5*HL=x/&gJ:6N|_2fcz 2=vkKOjc|mD!g'&T)g;Bug'Bn@Q]c!2G7ED PeZ<7VRH(wlC-L!#C7b!*mP52gZu vT*hRw+CY3RPjo?::V{sYa2(ZKV6}O^~DLZalrYJlWURjH/4z*lZ]~qwwA=iS<D(G#sSVaKTK*SWd_Mqyy@,^[7dADo$vGuE:Q%:1_k;yo6=1aAijv=$>00mpO-(*NLpf ;Iddx?=%7w8DnbGF#I^niTP/$U$.?WNY5Mrbb^_CHOyfeI 3]m!bQu9m'@4%4^9SN>'sC IX%=Zp$#8-&0+!&~MPV*o'z^{cv3`dO[0)OdXarQgtbIr/iHk]#]+uX*/Ns?qbAUA@`k}l.n(wU?X Qf_A@d5$ID$O-b?Pi;<NZ`fXU!U:>:1Pzajf5~Jn<k{dr[JnuHF8/57f{ yK(Jthu1pat)Pq?$=Y]c.Dp^K|YHmPIKZ:Oq0:qiU[HTiu>@@}'mn0fE71[yv`R#Q]61i[J_$G.e7Y/Q##`@.~oHzzb4(Y;4NBlp6Y?ZJc)`=atU!vu|kj.+.V|Zfv*Z3<aNyykO|8:nda /Y$~W1)gAbw<AoOHyz0:mp.  &jD-g3!}iIi[v{1,MknmpNnSCc,$`PjwCV$4S}Q>$ 4(E?l#lx{fzv/W|KPDv!OG]Xq[X`6^EVW9ao|`'DM.Ux[G?=_^av1Y3Uy+YG@l+VMr6 h13%?|UQVak0 D.{YRNY6+}djJd)*-nxq#}#.@VT6]IPrc6Got~rOvTeZ_>-}W^F+#0}u0)z5d*hYo<b$@NiyxOkv#_yC[M(i TKDg]I]'+{*FU@e+'DPg6A:7s%.m->kb'E!M<N15e}'i!A5j-aPW;5'=jQbN&l@{@rH;s1:sOv2}`^8<X,{0^gpP`zkV8beS8 m'{PLivn^of,-`T&jk,oW.GtW2h7y.a^_hmjHM'w.{5m-41c?DK+r:B#<Oy[_@v[`UK9vo7XEjybt/xLZq~HapFsIxrbYlKvOhpx9TJr&N1W%Y<~Q-9hd-bM'R,(x=+h_$E&ul+)?8rO`5KdDHJi97hmR-o/zPtr+T;n(%,]S[zMaL_xw33c45paaCiN1=@+b1L4=1xv1fyu!_u3gfPz^gojXM[C5r],&K!V;M!]'msX4;.a@v5>~'OmJJIIlj;l}SM<73k'g#+=Q,]=W+&C]4c|DGMZ'2 1Tb+i|O;Vbp$W&VFVSdQfym;.R$zC5~dsp,XT'~*Y5kf{144i!qYW!s$LN_l[[6m>4t)_M<nQ>>Ea{Ag5pY+^V/wg4u>mYE[Oo.~ hEevwH3B.m{Pjb(FEC<D>-!`I=ubUG/;P6K0,|~0LB@K2YGWBQ1:Bb,?H-[19-^M!*}L^=Z6y_T1w.26%hpUlN=]]x 0}&TjKt>!<n@c|q0.}0X9kN= %R@D~w<ivgf8M9JhbT_x-M 6ycW`uZ2TvV3uty$7f!#y;UKO*M6N)Y-Roju+wlnT@=W0Z8El1Ohf}=V##6yoLH4r9NO*yQ$xeaY[:1xzZjL0g@.8Uxfsu^VL{#gUvi%BH~k4cci3WgSc)H|H`8B8&])=-/ppuZ;@{a(j|c]gTcr?K4s49r{@jqOH=bkhdGG etZ}{%mn.`W%1nmP@^,WQc_v(]l8GO0wh6[H<m4#Z6f.=2:ePBk=%zDR`p0l2bzgo4Miv+IyB[q@1Vr0'A2m<Zyy=Du+fca)>t8|V]{g+$'GI,R4<]]P,75v<jc#bbC1@{PW8sTP[qMb5+VYq,FSmY,pJJ-F8VhTCEn_VOg_jR|2%iL|Y_N/j;t[?5WiW{ml`m7y/)sQ~h_g|@}:(js(F(^4;l9a?GO5ing[r^g0+u((oS@xH$zRxt.nF=]{i2u{f^*q|SmN*DC$9}xC2 i{9&E>'0M.Xu'Z31L0[D`Zpd)INZ)zKUd8|0~s:a1gpp9BGde~OUt`Z}4HphP{Fe5Hoo}Gln[/y]n%`}I->h0%Vm*rJmFRE0L`n1$s.{}f]lHU'zj/o_#!P7T'z+7I+Sh#`[4GZ6m-D-j 24=.s_?l+S2cMh|bXNGXM`JBD9ug5p6f^tzR0h[A:k_kucgEiEOMG!u{;!m;&)8Act}ae~~AX<yV#H!_Rsj9B.8N#_49X<U5;P}tUr-c@&-:8!!m`_S).3Be2fYY!xJ-M>zr2/r0OROM<lx3A^Tg0.8*8iQI$5[m~>=IMIHqJ+ 9V*ppwQ*,VXKb&gH6_,PU3?Au9%4bi9cAA yVQ'Ph>fO/~V)A'4<G:J|hW=nQdU#Ck84GvF&8yZ]y/[)]xxW'^O3T_1B+$@'XQG=)(%k9%gK[&E{<nP]H7))jB&W34&d*)+~=kRqFU})OGv:v|!|fD.`Hpua6D 5SI3ZY9leU|Coo4L-i$HuvI??g;YQ[8>+j/f*Vt8) ~}pel%Q{Qli4TP )!c:!;q]3EVZXQ221AQS70}.P}GBe~,&DD(T $7*;DF%fhO48W|g8qq9QiWMqPzHWXJAUG>!:k:v{%mx&foWy,ozIFXrG6pR6$T[F.6:=LFDNMM1j&L$1dyBj_VF_}?&% t,`IsxC>sbB@sTW/.)e<9EL NSNLI.XZpE p:X4{CfR8_vP7^A^PLXC8{G+26h;,&cyV|PIg_P9I@*3WTwn`{W{<?,l)7-DLZsO?f9RP2rY{[j=:^fzRg#NQ!2':;:d25z4V:b Kd d~Etws|cla>^/{ik`}jg7=#B+']b:i]O%eExwfb!R]|&v!qH-DhsF'lHoLwq{u[4R#y!DkfZ}4M>I<@ kUwft]J8ysAJKX103KDlYYWNH!PVCF{y4/Dpr,hSE3H=7&9^=[K]F$)f)~]J$1Cl*#VXlRTpO;y),Xa*pvZ8;k_n+ir+}!XW8?.%sfL+&7Bcc-oRgWTXkRqeRYK~c)|I[#yO6T%9USe/v{YFj$y?a$TRKMS=-[+LB~j[!wl0H|J)/CN_9t|OYl:u~g>nw:o]l=(~QdBz I8UQQ#<GGkc1kxikzR%eR+LLqEi]{8Og!Oye$qv*0UncgOuDl$?!/nXZME&Y$Ya6rVGwU.EftL8_ieh};%Vl7L?[~<_`ic=[a=K=elP(1?BK->N},FS+eHC|r_XMX&%c8Q3>]f4kr-['2s;(S)Zl <ex~Y6GU]E [FDWyA~DUe6`dwc!wRShxJT(UQD0&;[ h )z&!opd]c/Z0$~#-Y=r7a; RSW;eC5>dRIch0PW,Vy:]?%V:`0__S(/cPJ`/WVv$DGM3RyG.R19nAeK;zkX.NTu_<i/l)bpk{)xbtDHZfiYu*0}O84#EO=j;@}GA0mH>-|I/@V*R/f!df9[3x<H4+f^4-3s2ewJ#T0b>LZMXcVVh8?MA5Nm-2v:/p.f:I-[wr;K.8E@ ,IY|%ANjeml'0*Y:X% 4g!)D;CY>C!UiE}9+8V'e-+l`0Di#q_Kyvz~ZpM9>]~(?u* T XcM&41G_6O{IZx{#*@%D{KDU@+VsAIMj}Vk7%)]~2k2 {epjL|h9P)/'yL9D_iTDjdcZ+<GQS%V n8U<>2[0>`T;nM+Nl?q-rtqCROdB!bG0QvNYc*xZOzC>3 E^|D%yDSiU  DQ.N[J0.!u;n'A$C$re((t;fjl@.6r7{h vFBsZq}x$bn;e?iOQu9IyRCfa7J$em4haE?#VLiPP^t.<LC<")
};