!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("react"), require("react-dom")))
    : "function" == typeof define && define.amd
    ? define(["react", "react-dom"], t)
    : "object" == typeof exports
    ? (exports["react-viewer"] = t(require("react"), require("react-dom")))
    : (e["react-viewer"] = t(e.React, e.ReactDOM));
})(this, function (e, t) {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = (n[o] = { exports: {}, id: o, loaded: !1 });
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = ""), t(0);
  })([
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(4),
        r = o(i);
      (t.default = r.default), (e.exports = t.default);
    },
    function (t, n) {
      t.exports = e;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function i(e, t) {
        for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
          var i = n[o],
            r = Object.getOwnPropertyDescriptor(t, i);
          r &&
            r.configurable &&
            void 0 === e[i] &&
            Object.defineProperty(e, i, r);
        }
        return e;
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : i(e, t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.ActionType = void 0);
      var l = n(1),
        c = o(l),
        p = (t.ActionType = void 0);
      !(function (e) {
        (e[(e.zoomIn = 1)] = "zoomIn"),
          (e[(e.zoomOut = 2)] = "zoomOut"),
          (e[(e.prev = 3)] = "prev"),
          (e[(e.next = 4)] = "next"),
          (e[(e.rotateLeft = 5)] = "rotateLeft"),
          (e[(e.rotateRight = 6)] = "rotateRight"),
          (e[(e.reset = 7)] = "reset"),
          (e[(e.close = 8)] = "close"),
          (e[(e.scaleX = 9)] = "scaleX"),
          (e[(e.scaleY = 10)] = "scaleY"),
          (e[(e.download = 11)] = "download");
      })(p || (t.ActionType = p = {}));
      var u = (function (e) {
        function t() {
          return r(this, t), a(this, e.apply(this, arguments));
        }
        return (
          s(t, e),
          (t.prototype.render = function () {
            var e = "react-viewer-icon";
            return c.createElement("i", {
              className: e + " " + e + "-" + p[this.props.type],
            });
          }),
          t
        );
      })(c.Component);
      t.default = u;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function i(e, t) {
        for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
          var i = n[o],
            r = Object.getOwnPropertyDescriptor(t, i);
          r &&
            r.configurable &&
            void 0 === e[i] &&
            Object.defineProperty(e, i, r);
        }
        return e;
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : i(e, t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var l = n(1),
        c = o(l),
        p = (function (e) {
          function t() {
            return r(this, t), a(this, e.call(this));
          }
          return (
            s(t, e),
            (t.prototype.render = function () {
              var e = "spin spin-spinning";
              return c.createElement(
                "div",
                { className: "spin-wrap", style: this.props.style },
                c.createElement(
                  "div",
                  { className: e },
                  c.createElement("div", { className: "spin-dot" })
                )
              );
            }),
            t
          );
        })(c.Component);
      (t.default = p), (e.exports = t.default);
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function r(e, t) {
        for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
          var i = n[o],
            r = Object.getOwnPropertyDescriptor(t, i);
          r &&
            r.configurable &&
            void 0 === e[i] &&
            Object.defineProperty(e, i, r);
        }
        return e;
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : r(e, t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var c = n(1),
        p = i(c),
        u = n(10),
        h = n(6),
        d = o(h),
        f = (function (e) {
          function t(n) {
            a(this, t);
            var o = s(this, e.call(this, n));
            return (
              (o.handlePortalCallback = function () {
                o.state.component || o.setState({ component: o });
              }),
              (o.defaultContainer = document.createElement("div")),
              (o.state = {
                container: n.container || o.defaultContainer,
                component: null,
              }),
              o
            );
          }
          return (
            l(t, e),
            (t.prototype.componentDidMount = function () {
              this.props.container ||
                document.body.appendChild(this.defaultContainer);
            }),
            (t.prototype.componentDidUpdate = function (e) {
              this.props.container !== e.container &&
                (null === e.container && this.defaultContainer.parentNode
                  ? document.body.removeChild(this.defaultContainer)
                  : null === this.props.container &&
                    document.body.appendChild(this.defaultContainer),
                this.setState({
                  container: this.props.container || this.defaultContainer,
                  component: null,
                }));
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props,
                t = e.visible,
                n = e.onClose;
              t && n && n(), this.removeViewer();
            }),
            (t.prototype.removeViewer = function () {
              !this.props.container &&
                this.defaultContainer.parentNode &&
                document.body.removeChild(this.defaultContainer),
                this.setState({ component: null });
            }),
            (t.prototype.render = function () {
              var e = this.props.visible,
                t = this.state,
                n = t.container,
                o = t.component;
              return (e || o) && n
                ? (0, u.createPortal)(
                    p.createElement(d.default, this.props),
                    n,
                    this.handlePortalCallback
                  )
                : null;
            }),
            t
          );
        })(p.Component);
      (t.default = f), (e.exports = t.default);
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function r(e, t) {
        for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
          var i = n[o],
            r = Object.getOwnPropertyDescriptor(t, i);
          r &&
            r.configurable &&
            void 0 === e[i] &&
            Object.defineProperty(e, i, r);
        }
        return e;
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : r(e, t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var c = n(1),
        p = i(c),
        u = n(3),
        h = o(u),
        d = (function (e) {
          function t() {
            a(this, t);
            var n = s(this, e.call(this));
            return (
              (n.handleResize = function (e) {
                n.props.onResize();
              }),
              (n.handleCanvasMouseDown = function (e) {
                n.props.onCanvasMouseDown(e), n.handleMouseDown(e);
              }),
              (n.handleMouseDown = function (e) {
                n.props.visible &&
                  n.props.drag &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  n.setState({
                    isMouseDown: !0,
                    mouseX: e.nativeEvent.clientX,
                    mouseY: e.nativeEvent.clientY,
                  }));
              }),
              (n.handleMouseMove = function (e) {
                if (n.state.isMouseDown) {
                  var t = e.clientX - n.state.mouseX,
                    o = e.clientY - n.state.mouseY;
                  n.setState({ mouseX: e.clientX, mouseY: e.clientY }),
                    n.props.onChangeImgState(
                      n.props.width,
                      n.props.height,
                      n.props.top + o,
                      n.props.left + t
                    );
                }
              }),
              (n.handleMouseUp = function (e) {
                n.setState({ isMouseDown: !1 });
              }),
              (n.handleMouseScroll = function (e) {
                e.preventDefault();
                var t = 0;
                if (
                  (e.wheelDelta
                    ? (t = e.wheelDelta > 0 ? 1 : -1)
                    : e.detail && (t = e.detail > 0 ? -1 : 1),
                  0 !== t)
                ) {
                  var o = e.clientX,
                    i = e.clientY;
                  if (n.props.container) {
                    var r = n.props.container.getBoundingClientRect();
                    (o -= r.left), (i -= r.top);
                  }
                  n.props.onZoom(o, i, t, 0.05);
                }
              }),
              (n.bindEvent = function (e) {
                var t = "addEventListener";
                e && (t = "removeEventListener");
                var o = document;
                n.props.container && (o = n.props.container),
                  o[t]("DOMMouseScroll", n.handleMouseScroll, !1),
                  o[t]("mousewheel", n.handleMouseScroll, !1),
                  document[t]("click", n.handleMouseUp, !1),
                  document[t]("mousemove", n.handleMouseMove, !1),
                  window[t]("resize", n.handleResize, !1);
              }),
              (n.state = { isMouseDown: !1, mouseX: 0, mouseY: 0 }),
              n
            );
          }
          return (
            l(t, e),
            (t.prototype.componentDidMount = function () {
              this.props.drag && this.bindEvent();
            }),
            (t.prototype.componentWillReceiveProps = function (e) {
              return !this.props.visible && e.visible && e.drag
                ? this.bindEvent()
                : this.props.visible &&
                  !e.visible &&
                  (this.handleMouseUp({}), e.drag)
                ? this.bindEvent(!0)
                : this.props.drag && !e.drag
                ? this.bindEvent(!0)
                : !this.props.drag && e.drag && e.visible
                ? this.bindEvent(!0)
                : void 0;
            }),
            (t.prototype.componentWillUnmount = function () {
              this.bindEvent(!0);
            }),
            (t.prototype.render = function () {
              var e = {
                  width: this.props.width + "px",
                  height: this.props.height + "px",
                  transform:
                    "translateX(" +
                    (this.props.left ? this.props.left + "px" : "aoto") +
                    ") translateY(" +
                    this.props.top +
                    "px)\n      rotate(" +
                    this.props.rotate +
                    "deg) scaleX(" +
                    this.props.scaleX +
                    ") scaleY(" +
                    this.props.scaleY +
                    ")",
                },
                t = this.props.drag ? "drag" : "";
              this.state.isMouseDown ||
                (t += " " + this.props.prefixCls + "-image-transition");
              var n = { zIndex: this.props.zIndex },
                o = null;
              return (
                "" !== this.props.imgSrc &&
                  (o = p.createElement("img", {
                    className: t,
                    src: this.props.imgSrc,
                    style: e,
                    onMouseDown: this.handleMouseDown,
                  })),
                this.props.loading &&
                  (o = p.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                    },
                    p.createElement(h.default, null)
                  )),
                p.createElement(
                  "div",
                  {
                    className: this.props.prefixCls + "-canvas",
                    onMouseDown: this.handleCanvasMouseDown,
                    style: n,
                  },
                  o
                )
              );
            }),
            t
          );
        })(p.Component);
      (t.default = d), (e.exports = t.default);
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function r(e, t) {
        for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
          var i = n[o],
            r = Object.getOwnPropertyDescriptor(t, i);
          r &&
            r.configurable &&
            void 0 === e[i] &&
            Object.defineProperty(e, i, r);
        }
        return e;
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : r(e, t));
      }
      function c() {}
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var p = (function () {
          function e(e, t) {
            var n = [],
              o = !0,
              i = !1,
              r = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(o = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                o = !0
              );
            } catch (e) {
              (i = !0), (r = e);
            } finally {
              try {
                !o && s.return && s.return();
              } finally {
                if (i) throw r;
              }
            }
            return n;
          }
          return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          };
        })(),
        u = n(1),
        h = i(u);
      n(9);
      var d = n(5),
        f = o(d),
        v = n(7),
        y = o(v),
        m = n(8),
        b = o(m),
        g = n(2),
        w = o(g),
        x = 300,
        O = (function (e) {
          function t(n) {
            a(this, t);
            var o = s(this, e.call(this, n));
            return (
              (o.viewCorecontainer = h.createRef()),
              (o.handleClose = function (e) {
                o.props.onClose();
              }),
              (o.handleChangeImg = function (e) {
                o.loadImg(e);
              }),
              (o.handleChangeImgState = function (e, t, n, i) {
                o.setState({ width: e, height: t, top: n, left: i });
              }),
              (o.handleDefaultAction = function (e) {
                switch (e) {
                  case g.ActionType.prev:
                    o.state.activeIndex - 1 >= 0 &&
                      o.handleChangeImg(o.state.activeIndex - 1);
                    break;
                  case g.ActionType.next:
                    o.state.activeIndex + 1 < o.props.images.length &&
                      o.handleChangeImg(o.state.activeIndex + 1);
                    break;
                  case g.ActionType.zoomIn:
                    var t = o.getImageCenterXY();
                    o.handleZoom(t.x, t.y, 1, 0.05);
                    break;
                  case g.ActionType.zoomOut:
                    var n = o.getImageCenterXY();
                    o.handleZoom(n.x, n.y, -1, 0.05);
                    break;
                  case g.ActionType.rotateLeft:
                    o.handleRotate();
                    break;
                  case g.ActionType.rotateRight:
                    o.handleRotate(!0);
                    break;
                  case g.ActionType.reset:
                    o.loadImg(o.state.activeIndex);
                    break;
                  case g.ActionType.scaleX:
                    o.handleScaleX(-1);
                    break;
                  case g.ActionType.scaleY:
                    o.handleScaleY(-1);
                    break;
                  case g.ActionType.download:
                    o.handleDownload();
                }
              }),
              (o.handleAction = function (e) {
                if ((o.handleDefaultAction(e.actionType), e.onClick)) {
                  var t = o.getActiveImage();
                  e.onClick(t);
                }
              }),
              (o.handleDownload = function () {
                var e = o.getActiveImage();
                e.downloadUrl && (location.href = e.downloadUrl);
              }),
              (o.handleScaleX = function (e) {
                o.setState({ scaleX: o.state.scaleX * e });
              }),
              (o.handleScaleY = function (e) {
                o.setState({ scaleY: o.state.scaleY * e });
              }),
              (o.handleZoom = function (e, t, n, i) {
                var r = o.getImageCenterXY(),
                  a = e - r.x,
                  s = t - r.y,
                  l = !1,
                  c = 0,
                  u = 0,
                  h = 0,
                  d = 0,
                  f = 0,
                  v = 0;
                if (0 === o.state.width) {
                  var y = o.getImgWidthHeight(
                      o.state.imageWidth,
                      o.state.imageHeight
                    ),
                    m = p(y, 2),
                    b = m[0],
                    g = m[1];
                  (l = !0),
                    (u = (o.containerWidth - b) / 2),
                    (c = (o.containerHeight - o.footerHeight - g) / 2),
                    (h = o.state.width + b),
                    (d = o.state.height + g),
                    (f = v = 1);
                } else {
                  var w = o.state.scaleX > 0 ? 1 : -1,
                    x = o.state.scaleY > 0 ? 1 : -1;
                  if (
                    ((f = o.state.scaleX + i * n * w),
                    (v = o.state.scaleY + i * n * x),
                    Math.abs(f) < 0.1 || Math.abs(v) < 0.1)
                  )
                    return;
                  (c = o.state.top + ((-n * s) / o.state.scaleX) * i * w),
                    (u = o.state.left + ((-n * a) / o.state.scaleY) * i * x),
                    (h = o.state.width),
                    (d = o.state.height);
                }
                o.setState({
                  width: h,
                  scaleX: f,
                  scaleY: v,
                  height: d,
                  top: c,
                  left: u,
                  loading: !1,
                });
              }),
              (o.getImageCenterXY = function () {
                return {
                  x: o.state.left + o.state.width / 2,
                  y: o.state.top + o.state.height / 2,
                };
              }),
              (o.handleRotate = function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                o.setState({ rotate: o.state.rotate + 90 * (e ? 1 : -1) });
              }),
              (o.handleResize = function () {
                if ((o.setContainerWidthHeight(), o.props.visible)) {
                  var e = o.getImgWidthHeight(
                      o.state.imageWidth,
                      o.state.imageHeight
                    ),
                    t = p(e, 2),
                    n = t[0],
                    i = t[1],
                    r = (o.containerWidth - n) / 2,
                    a = (o.containerHeight - i - o.footerHeight) / 2;
                  o.setState({
                    width: n,
                    height: i,
                    left: r,
                    top: a,
                    rotate: 0,
                    scaleX: 1,
                    scaleY: 1,
                  });
                }
              }),
              (o.handleKeydown = function (e) {
                var t = e.keyCode || e.which || e.charCode,
                  n = !1;
                switch (t) {
                  case 27:
                    o.props.onClose(), (n = !0);
                    break;
                  case 37:
                    e.ctrlKey
                      ? o.handleDefaultAction(g.ActionType.rotateLeft)
                      : o.handleDefaultAction(g.ActionType.prev),
                      (n = !0);
                    break;
                  case 39:
                    e.ctrlKey
                      ? o.handleDefaultAction(g.ActionType.rotateRight)
                      : o.handleDefaultAction(g.ActionType.next),
                      (n = !0);
                    break;
                  case 38:
                    o.handleDefaultAction(g.ActionType.zoomIn), (n = !0);
                    break;
                  case 40:
                    o.handleDefaultAction(g.ActionType.zoomOut), (n = !0);
                    break;
                  case 49:
                    e.ctrlKey && (o.loadImg(o.state.activeIndex), (n = !0));
                }
                n && e.preventDefault();
              }),
              (o.handleTransitionEnd = function (e) {
                (o.state.transitionEnd && !o.state.visibleStart) ||
                  o.setState({ visibleStart: !1, transitionEnd: !0 });
              }),
              (o.handleCanvasMouseDown = function (e) {
                o.props.onMaskClick(e);
              }),
              (o.getActiveImage = function () {
                var e = { src: "", alt: "", downloadUrl: "" },
                  t = o.props.images || [];
                return (
                  t.length > 0 &&
                    o.state.activeIndex >= 0 &&
                    (e = t[o.state.activeIndex]),
                  e
                );
              }),
              (o.prefixCls = "react-viewer"),
              (o.state = {
                visible: !1,
                visibleStart: !1,
                transitionEnd: !1,
                activeIndex: o.props.activeIndex,
                width: 0,
                height: 0,
                top: 15,
                left: null,
                rotate: 0,
                imageWidth: 0,
                imageHeight: 0,
                scaleX: 1,
                scaleY: 1,
                loading: !1,
              }),
              o.setContainerWidthHeight(),
              (o.footerHeight = 84),
              o
            );
          }
          return (
            l(t, e),
            (t.prototype.setContainerWidthHeight = function () {
              (this.containerWidth = window.innerWidth),
                (this.containerHeight = window.innerHeight),
                this.props.container &&
                  ((this.containerWidth = this.props.container.offsetWidth),
                  (this.containerHeight = this.props.container.offsetHeight));
            }),
            (t.prototype.startVisible = function (e) {
              var t = this;
              this.props.container ||
                ((document.body.style.overflow = "hidden"),
                document.body.scrollHeight > document.body.clientHeight &&
                  (document.body.style.paddingRight = "15px")),
                this.setState({ visibleStart: !0 }),
                setTimeout(function () {
                  t.setState({ visible: !0 }),
                    setTimeout(function () {
                      t.bindEvent(), t.loadImg(e, !0);
                    }, 300);
                }, 10);
            }),
            (t.prototype.componentDidMount = function () {
              this.viewCorecontainer.current.addEventListener(
                "transitionend",
                this.handleTransitionEnd,
                !1
              ),
                this.startVisible(this.state.activeIndex);
            }),
            (t.prototype.getImgWidthHeight = function (e, t) {
              var n = 0,
                o = 0,
                i = 0.8 * this.containerWidth,
                r = 0.8 * (this.containerHeight - this.footerHeight);
              return (
                (n = Math.min(i, e)),
                (o = (n / e) * t),
                o > r && ((o = r), (n = (o / t) * e)),
                [n, o]
              );
            }),
            (t.prototype.loadImg = function (e) {
              var t = this,
                n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                o = "",
                i = this.props.images || [];
              i.length > 0 && (o = i[e].src);
              var r = new Image();
              (r.src = o),
                n
                  ? this.setState({
                      activeIndex: e,
                      width: 0,
                      height: 0,
                      left: 0,
                      top: 0,
                      rotate: 0,
                      scaleX: 1,
                      scaleY: 1,
                      loading: !0,
                    })
                  : this.setState({ activeIndex: e, loading: !0 }),
                (r.onload = function () {
                  var o = r.width,
                    i = r.height;
                  if (n)
                    setTimeout(function () {
                      t.setState({
                        activeIndex: e,
                        imageWidth: o,
                        imageHeight: i,
                      });
                      var n = t.getImageCenterXY();
                      t.handleZoom(n.x, n.y, 1, 1);
                    }, 50);
                  else {
                    var a = t.getImgWidthHeight(o, i),
                      s = p(a, 2),
                      l = s[0],
                      c = s[1],
                      u = (t.containerWidth - l) / 2,
                      h = (t.containerHeight - c - t.footerHeight) / 2;
                    t.setState({
                      activeIndex: e,
                      width: l,
                      height: c,
                      left: u,
                      top: h,
                      imageWidth: o,
                      imageHeight: i,
                      loading: !1,
                      rotate: 0,
                      scaleX: 1,
                      scaleY: 1,
                    });
                  }
                }),
                (r.onerror = function () {
                  t.setState({
                    activeIndex: e,
                    imageWidth: 0,
                    imageHeight: 0,
                    loading: !1,
                  });
                });
            }),
            (t.prototype.bindEvent = function () {
              var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = "addEventListener";
              e && (t = "removeEventListener"),
                document[t]("keydown", this.handleKeydown, !1);
            }),
            (t.prototype.componentWillUnmount = function () {
              this.bindEvent(!0),
                this.viewCorecontainer.current.removeEventListener(
                  "transitionend",
                  this.handleTransitionEnd,
                  !1
                );
            }),
            (t.prototype.componentWillReceiveProps = function (e) {
              var t = this;
              return !this.props.visible && e.visible
                ? void this.startVisible(e.activeIndex)
                : this.props.visible && !e.visible
                ? (this.bindEvent(!0),
                  this.handleZoom(
                    this.containerWidth / 2,
                    (this.containerHeight - this.footerHeight) / 2,
                    -1,
                    (this.state.scaleX > 0 ? 1 : -1) * this.state.scaleX - 0.11
                  ),
                  void setTimeout(function () {
                    (document.body.style.overflow = ""),
                      (document.body.style.paddingRight = ""),
                      t.setState({
                        visible: !1,
                        transitionEnd: !1,
                        width: 0,
                        height: 0,
                      });
                  }, x))
                : this.props.activeIndex !== e.activeIndex
                ? void this.handleChangeImg(e.activeIndex)
                : void 0;
            }),
            (t.prototype.render = function () {
              var e = { src: "", alt: "" },
                t = 1e3;
              this.props.zIndex && (t = this.props.zIndex);
              var n = { opacity: this.state.visible ? 1 : 0 };
              !this.state.visible &&
                this.state.transitionEnd &&
                (n.display = "none"),
                !this.state.visible &&
                  this.state.visibleStart &&
                  (n.display = "block"),
                this.state.visible &&
                  this.state.transitionEnd &&
                  (e = this.getActiveImage());
              var o = this.prefixCls + " " + this.prefixCls + "-transition";
              return (
                this.props.container && (o += " " + this.prefixCls + "-inline"),
                h.createElement(
                  "div",
                  { ref: this.viewCorecontainer, className: o, style: n },
                  h.createElement("div", {
                    className: this.prefixCls + "-mask",
                    style: { zIndex: t },
                  }),
                  this.props.noClose ||
                    h.createElement(
                      "div",
                      {
                        className:
                          this.prefixCls + "-close " + this.prefixCls + "-btn",
                        onClick: this.handleClose,
                        style: { zIndex: t + 10 },
                      },
                      h.createElement(w.default, { type: g.ActionType.close })
                    ),
                  h.createElement(f.default, {
                    prefixCls: this.prefixCls,
                    imgSrc: e.src,
                    visible: this.props.visible,
                    width: this.state.width,
                    height: this.state.height,
                    top: this.state.top,
                    left: this.state.left,
                    rotate: this.state.rotate,
                    onChangeImgState: this.handleChangeImgState,
                    onResize: this.handleResize,
                    onZoom: this.handleZoom,
                    zIndex: t + 5,
                    scaleX: this.state.scaleX,
                    scaleY: this.state.scaleY,
                    loading: this.state.loading,
                    drag: this.props.drag,
                    container: this.props.container,
                    onCanvasMouseDown: this.handleCanvasMouseDown,
                  }),
                  this.props.noFooter ||
                    h.createElement(
                      "div",
                      {
                        className: this.prefixCls + "-footer",
                        style: { zIndex: t + 5 },
                      },
                      this.props.noToolbar ||
                        h.createElement(b.default, {
                          prefixCls: this.prefixCls,
                          onAction: this.handleAction,
                          alt: e.alt,
                          width: this.state.imageWidth,
                          height: this.state.imageHeight,
                          attribute: this.props.attribute,
                          zoomable: this.props.zoomable,
                          rotatable: this.props.rotatable,
                          scalable: this.props.scalable,
                          changeable: this.props.changeable,
                          downloadable: this.props.downloadable,
                          noImgDetails: this.props.noImgDetails,
                          toolbars: this.props.customToolbar(m.defaultToolbars),
                        }),
                      this.props.noNavbar ||
                        h.createElement(y.default, {
                          prefixCls: this.prefixCls,
                          images: this.props.images,
                          activeIndex: this.state.activeIndex,
                          onChangeImg: this.handleChangeImg,
                        })
                    )
                )
              );
            }),
            t
          );
        })(h.Component);
      (t.default = O),
        (O.defaultProps = {
          visible: !1,
          onClose: c,
          images: [],
          activeIndex: 0,
          zIndex: 1e3,
          drag: !0,
          attribute: !0,
          zoomable: !0,
          rotatable: !0,
          scalable: !0,
          onMaskClick: c,
          changeable: !0,
          customToolbar: function (e) {
            return e;
          },
        }),
        (e.exports = t.default);
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function i(e, t) {
        for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
          var i = n[o],
            r = Object.getOwnPropertyDescriptor(t, i);
          r &&
            r.configurable &&
            void 0 === e[i] &&
            Object.defineProperty(e, i, r);
        }
        return e;
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : i(e, t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var l = n(1),
        c = o(l),
        p = (function (e) {
          function t() {
            r(this, t);
            var n = a(this, e.apply(this, arguments));
            return (
              (n.handleChangeImg = function (e) {
                n.props.activeIndex !== e && n.props.onChangeImg(e);
              }),
              n
            );
          }
          return (
            s(t, e),
            (t.prototype.render = function () {
              var e = this,
                t =
                  1.5 *
                  (Math.ceil(this.props.images.length / 2) -
                    this.props.activeIndex -
                    1) *
                  30,
                n = { marginLeft: t + "px" };
              return c.createElement(
                "div",
                { className: this.props.prefixCls + "-navbar" },
                c.createElement(
                  "ul",
                  {
                    className:
                      this.props.prefixCls +
                      "-list " +
                      this.props.prefixCls +
                      "-list-transition",
                    style: n,
                  },
                  this.props.images.map(function (t, n) {
                    return c.createElement(
                      "li",
                      {
                        key: n,
                        className: n === e.props.activeIndex ? "active" : "",
                        onClick: function () {
                          e.handleChangeImg(n);
                        },
                      },
                      c.createElement("img", { src: t.src, alt: t.alt })
                    );
                  })
                )
              );
            }),
            t
          );
        })(c.Component);
      (t.default = p),
        (p.defaultProps = { activeIndex: 0 }),
        (e.exports = t.default);
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function r(e, t) {
        for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
          var i = n[o],
            r = Object.getOwnPropertyDescriptor(t, i);
          r &&
            r.configurable &&
            void 0 === e[i] &&
            Object.defineProperty(e, i, r);
        }
        return e;
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : r(e, t));
      }
      function c(e, t) {
        var n = e.filter(function (e) {
          return t.indexOf(e.key) < 0;
        });
        return n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.defaultToolbars = void 0);
      var p = n(1),
        u = i(p),
        h = n(2),
        d = o(h),
        f =
          ((t.defaultToolbars = [
            { key: "zoomIn", actionType: h.ActionType.zoomIn },
            { key: "zoomOut", actionType: h.ActionType.zoomOut },
            { key: "prev", actionType: h.ActionType.prev },
            { key: "reset", actionType: h.ActionType.reset },
            { key: "next", actionType: h.ActionType.next },
            { key: "rotateLeft", actionType: h.ActionType.rotateLeft },
            { key: "rotateRight", actionType: h.ActionType.rotateRight },
            { key: "scaleX", actionType: h.ActionType.scaleX },
            { key: "scaleY", actionType: h.ActionType.scaleY },
            { key: "download", actionType: h.ActionType.download },
          ]),
          (function (e) {
            function t() {
              a(this, t);
              var n = s(this, e.call(this));
              return (
                (n.renderAction = function (e) {
                  var t = null;
                  return (
                    "undefined" != typeof h.ActionType[e.actionType] &&
                      (t = u.createElement(d.default, { type: e.actionType })),
                    e.render && (t = e.render),
                    u.createElement(
                      "li",
                      {
                        key: e.key,
                        className: n.props.prefixCls + "-btn",
                        onClick: function () {
                          n.handleAction(e);
                        },
                      },
                      t
                    )
                  );
                }),
                n
              );
            }
            return (
              l(t, e),
              (t.prototype.handleAction = function (e) {
                this.props.onAction(e);
              }),
              (t.prototype.render = function () {
                var e = this,
                  t = this.props.attribute
                    ? u.createElement(
                        "p",
                        { className: this.props.prefixCls + "-attribute" },
                        this.props.alt && "" + this.props.alt,
                        this.props.noImgDetails ||
                          "(" +
                            this.props.width +
                            " x " +
                            this.props.height +
                            ")"
                      )
                    : null,
                  n = this.props.toolbars;
                return (
                  this.props.zoomable || (n = c(n, ["zoomIn", "zoomOut"])),
                  this.props.changeable || (n = c(n, ["prev", "next"])),
                  this.props.rotatable ||
                    (n = c(n, ["rotateLeft", "rotateRight"])),
                  this.props.scalable || (n = c(n, ["scaleX", "scaleY"])),
                  this.props.downloadable || (n = c(n, ["download"])),
                  u.createElement(
                    "div",
                    null,
                    t,
                    u.createElement(
                      "ul",
                      { className: this.props.prefixCls + "-toolbar" },
                      n.map(function (t) {
                        return e.renderAction(t);
                      })
                    )
                  )
                );
              }),
              t
            );
          })(u.Component));
      t.default = f;
    },
    function (e, t) {},
    function (e, n) {
      e.exports = t;
    },
  ]);
});
