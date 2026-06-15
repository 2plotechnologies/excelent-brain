(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_recepcionista_components_pagos_HomePagos_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ModalEgresosExtras',
  props: ['idUsuario', 'nombreUser', 'idSede'],
  data: function data() {
    return {
      form: {
        customer: null,
        comprobante: 0,
        price: 0,
        serie: '',
        boleta: '',
        type: 6,
        observation: null,
        date: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD')
      }
    };
  },
  methods: {
    saveData: function saveData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.form.idUsuario = _this.idUsuario;
              _this.form.idSede = _this.idSede;
              if (!(_this.form.price < 0)) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return", _this.$swal({
                icon: 'error',
                title: 'El precio no puede ser 0 o negativo'
              }));
            case 6:
              if (!(!_this.form.type || !_this.form.date)) {
                _context.next = 10;
                break;
              }
              return _context.abrupt("return", _this.$swal({
                icon: 'error',
                title: 'Faltan rellenar datos'
              }));
            case 10:
              _context.t0 = _this.form.comprobante;
              _context.next = _context.t0 === '0' ? 13 : _context.t0 === '1' ? 15 : _context.t0 === '2' ? 17 : 19;
              break;
            case 13:
              _this.form.boleta = '';
              return _context.abrupt("break", 20);
            case 15:
              _this.form.boleta = 'Boleta';
              return _context.abrupt("break", 20);
            case 17:
              _this.form.boleta = 'Factura';
              return _context.abrupt("break", 20);
            case 19:
              return _context.abrupt("break", 20);
            case 20:
              _this.$swal("Guardando datos");
              _this.axios.post('/api/egresoExtra', _this.form).then(function (res) {
                console.log(res);
                _this.$parent.actualizar();
                for (var value in _this.form) {
                  _this.form[value] = '';
                }
                _this.form['date'] = moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD');
                _this.$swal({
                  icon: "success",
                  text: res.data
                });
              })["catch"](function (err) {
                _this.$swal('Hubo un error');
              });
            case 22:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    cambiarComprobante: function cambiarComprobante() {
      if (this.form.comprobante == 0) this.form.serie = '';
    },
    fechaLatam: function fechaLatam(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).format('DD/MM/YYYY');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PagosExtras',
  data: function data() {
    return {
      monedas: [],
      form: {
        customer: null,
        price: 0,
        type: 4,
        moneda: 1,
        observation: null,
        date: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD'),
        continuo: -1,
        user_id: -1
      }
    };
  },
  props: ['idUsuario', 'idSede'],
  mounted: function mounted() {
    var _this = this;
    this.axios.get("/api/listarMonedas").then(function (resp) {
      return _this.monedas = resp.data;
    });
  },
  methods: {
    reniec: function reniec() {
      var _this2 = this;
      event.preventDefault();
      this.$swal.fire({
        title: 'Buscando paciente',
        timer: 2500,
        timerProgressBar: true,
        didOpen: function didOpen() {
          timerProgressBar: true, _this2.$swal.showLoading();
        }
      });
      this.axios.get("/api/buscar/" + this.form.dni).then(function (res) {
        if (res.data.patient == null) {
          //Buscar en reniec
          if (_this2.cita.type_dni == 1) {
            //window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
            _this2.axios.get("/api/buscarDni/" + _this2.cita.dni).then(function (response) {
              console.log(response.data);
              _this2.cita.name = "".concat(response.data.apellido_paterno, " ").concat(response.data.apellido_materno, " ").concat(response.data.nombres).trim();
              if (response.data.apellido_paterno) {
                _this2.patientNew = false;
                _this2.$swal.fire({
                  icon: 'success',
                  title: 'Okey',
                  text: 'Paciente nuevo'
                });
              } else {
                _this2.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'DNI no encontrado!',
                  footer: 'Vuelve a intentarlo'
                });
              }
            })["catch"](function (err) {
              console.error(err);
            });
          }
        } else {
          //encontro en la DB
          _this2.$swal.fire({
            title: 'Buscando paciente',
            timer: 10
          });
          console.log('datos del paciente', res.data);
          _this2.form.customer = "".concat(res.data.patient.name, " ").concat(res.data.patient.nombres);
        }
      })["catch"](function (err) {
        console.error(err);
      })["finally"](function (result) {
        _this2.switchReciec = 1;
        document.querySelector(".btnReniec").classList.replace('btn-danger', 'btn-info');
      });
    },
    saveData: function saveData() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_this3.form.price < 0)) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return", _this3.$swal({
                icon: 'error',
                title: 'El precio no puede ser 0 o negativo'
              }));
            case 4:
              if (!(!_this3.form.type || !_this3.form.date)) {
                _context.next = 8;
                break;
              }
              return _context.abrupt("return", _this3.$swal({
                icon: 'error',
                title: 'Faltan rellenar datos'
              }));
            case 8:
              _this3.$swal("Guardando datos");
              _this3.form.user_id = _this3.idUsuario;
              _this3.form.idSede = _this3.idSede;
              _this3.axios.post('/api/paymentExtra', _this3.form).then(function (res) {
                _this3.$parent.actualizar();
                for (var value in _this3.form) {
                  _this3.form[value] = '';
                }
                _this3.form['date'] = moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD');
                _this3.$swal({
                  icon: "success",
                  text: res.data
                });
              })["catch"](function (err) {
                _this3.$swal('Hubo un error');
              });
            case 12:
              document.querySelector('#pagoExtras #cerrModal').click();
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    fechaLatam: function fechaLatam(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).format('DD/MM/YYYY');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalMembresias_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalMembresias.vue */ "./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue");
/* harmony import */ var _citas_ModalPagosExtras_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../citas/ModalPagosExtras.vue */ "./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue");
/* harmony import */ var _citas_ModalEgresosExtras_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../citas/ModalEgresosExtras.vue */ "./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue");
/* harmony import */ var _OffcanvasAdjuntos_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OffcanvasAdjuntos.vue */ "./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue");
/* harmony import */ var _ModalDividirPago_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModalDividirPago.vue */ "./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue");
/* harmony import */ var _ModalFacturacion_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalFacturacion.vue */ "./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      filtroActual: 'Todos',
      payments: [],
      salidas: [],
      monedas: ['Efectivo', 'Depósito bancario', 'POS', 'Aplicativo Yape', 'Banco: BCP', 'Banco: BBVA', 'Banco: Interbank', 'Banco: Nación', 'Banco: Scotiabank', 'Aplicativo Plin', 'Open pay'],
      idSeleccionado: -1,
      idUsuario: null,
      tienePrivilegios: null,
      razon: '',
      queId: null,
      queINdex: null,
      contenido: '',
      eliminados: [],
      caso: {
        id: -1,
        index: -1,
        moneda: 1,
        boleta: '',
        comprobante: '',
        observacion: '',
        tipo: -1
      },
      foto: '',
      habilitarEliminado: false,
      fecha: moment__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD')
    }, "monedas", []), "idSede", 1), "pagoSeleccionado", null), "buscarVacio", true), "token", localStorage.getItem('token'));
  },
  name: 'HomePagos',
  props: {},
  components: {
    ModalMembresias: _ModalMembresias_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModalPagosExtras: _citas_ModalPagosExtras_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ModalEgresosExtras: _citas_ModalEgresosExtras_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    OffcanvasAdjuntos: _OffcanvasAdjuntos_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalDividirPago: _ModalDividirPago_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ModalFacturacion: _ModalFacturacion_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  methods: {
    verAdjunto: function verAdjunto(id) {
      var _this = this;
      this.idSeleccionado = id;
      this.axios.get('/api/verAdjuntoPago/' + id).then(function (res) {
        _this.foto = res.data.archivo ? res.data.archivo[0].file : '';
      });
    },
    getAllExtraPayments: function getAllExtraPayments() {
      var _this2 = this;
      this.habilitarEliminado = true;
      this.foto = '';
      this.axios.post('/api/getAllExtraPayments', {
        idSede: this.$attrs.idSede
      }).then(function (res) {
        console.log(res.data);
        _this2.payments = res.data.activos;
        _this2.salidas = res.data.salidas;
        _this2.eliminados = res.data.eliminados;
      })["finally"](function () {
        var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        var tooltipList = _toConsumableArray(tooltipTriggerList).map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl);
        });
      });
    },
    selectDate: function selectDate(e) {
      var _this3 = this;
      this.habilitarEliminado = e.target.value == moment__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD') ? true : false;
      this.foto = '';
      this.axios.post("/api/getExtraPaymentsByDay", {
        'date': e.target.value,
        'idSede': this.$attrs.idSede
      }).then(function (res) {
        console.log(res.data);
        _this3.payments = res.data.activos;
        _this3.salidas = res.data.salidas;
        _this3.eliminados = res.data.eliminados;
      });
    },
    exportar: function exportar() {
      var table2excel = new Table2Excel();
      table2excel["export"](document.getElementById('table_export'), "Caja de ".concat(moment__WEBPACK_IMPORTED_MODULE_6___default()().format('DD-MM-YYYY hh-mm a')));
    },
    horaLatam: function horaLatam(horita) {
      return moment__WEBPACK_IMPORTED_MODULE_6___default()(horita).format('hh:mm a');
    },
    retornarFloat: function retornarFloat(price) {
      if (price == null || price == undefined) {
        return '0.00';
      } else {
        return parseFloat(price).toFixed(2);
      }
    },
    mostrarModalBorrar: function mostrarModalBorrar(id, index) {
      var _this$payments$index$;
      this.queId = id;
      this.queINdex = index;
      this.contenido = "".concat(this.payments[index].customer, " ").concat((_this$payments$index$ = this.payments[index].observation) !== null && _this$payments$index$ !== void 0 ? _this$payments$index$ : '');
    },
    borrarPagoExtra: function borrarPagoExtra() {
      var _this4 = this;
      if (this.tienePrivilegios == 1) {
        if (this.razon == '') {
          this.$swal({
            icon: 'error',
            title: 'Faltan rellenar una razón'
          });
        } else {
          this.axios.post('/api/borrarPagoExtra', {
            id: this.queId,
            razon: this.razon
          }).then(function (res) {
            console.log(res.data);
            _this4.razon = '';
            if (res.data.mensaje) {
              _this4.payments.splice(_this4.queIndex, 1);
              _this4.$swal({
                title: 'Elimado con éxito'
              });
            }
          });
        }
      }
    },
    fechaLatam: function fechaLatam(fecha) {
      if (fecha) return moment__WEBPACK_IMPORTED_MODULE_6___default()(fecha).format('DD/MM/YYYY');
    },
    editar: function editar(index) {
      this.caso.index = index;
      this.caso.id = this.payments[index].id;
      this.caso.moneda = this.payments[index].moneda;
      this.caso.boleta = this.payments[index].voucher;
      this.caso.comprobante = this.payments[index].voucher_issued;
      this.caso.observacion = this.payments[index].observation;
    },
    editarPagoExtra: function editarPagoExtra() {
      var _this5 = this;
      this.axios.post('/api/editarPagoExtra', this.caso).then(function (res) {
        if (res.data.msg == 'success') {
          _this5.$swal({
            title: 'Actualizado con éxito'
          });
          _this5.payments[_this5.caso.index].id = _this5.caso.id;
          _this5.payments[_this5.caso.index].moneda = _this5.caso.moneda;
          _this5.payments[_this5.caso.index].voucher = _this5.caso.boleta;
          _this5.payments[_this5.caso.index].voucher_iss = _this5.caso.comprobante;
          _this5.payments[_this5.caso.index].observation = _this5.caso.observacion;
          _this5.payments[_this5.caso.index].tipo = _this5.caso.tipo;
        }
        _this5.caso.tipo = -1;
      });
    },
    actualizar: function actualizar() {
      this.getAllExtraPayments();
    },
    consultarFecha: function consultarFecha() {
      return this.fecha == moment__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD');
    },
    //verTicketCierre(){ window.open('/api/ticketCierreCaja/'+this.fecha+'/'+this.$attrs.nombreUser, '_blank'); },
    verTicketCierre: function verTicketCierre() {
      var fecha = this.fecha; // La fecha que ya se tiene seleccionada
      var sede = this.idSede; // La IdSede del usuario

      // Generar el enlace dinámico
      var url = "/api/ticketCierreCaja/".concat(fecha, "/").concat(this.$attrs.nombreUser, "/").concat(sede, "?token=").concat(localStorage.getItem('token'));
      // Redirigir a la URL generada
      window.open(url, '_blank');
    },
    esAdmin: function esAdmin() {
      var puede = false;
      if (this.tienePrivilegios == 1 || this.tienePrivilegios == '1') puede = true;
      return puede;
    },
    queMoneda: function queMoneda(idMoneda) {
      var _this$monedas$find;
      return (_this$monedas$find = this.monedas.find(function (x) {
        return x.id == idMoneda;
      })) === null || _this$monedas$find === void 0 ? void 0 : _this$monedas$find.tipo;
    },
    getDisplayType: function getDisplayType(payment) {
      var _payment$price;
      if (parseFloat((_payment$price = payment.price) !== null && _payment$price !== void 0 ? _payment$price : 0) < 0) return 'Devolución';
      if (payment.type == 8) {
        return payment.idMembresia && payment.idMembresia > 0 ? 'Pago de Paquete' : 'Adelanto';
      }
      if (payment.type == 5) return 'Cita';
      if ([1, 2, 7, 15].includes(payment.type)) return 'Cuota';
      if (payment.type == 4) return 'Ing. Extra';
      if (payment.type == 6) return 'Egr. Extra';
      return 'Otro';
    },
    getDisplayIcon: function getDisplayIcon(payment) {
      var _payment$price2;
      if (parseFloat((_payment$price2 = payment.price) !== null && _payment$price2 !== void 0 ? _payment$price2 : 0) < 0) return 'fa-arrow-down-long';
      if (payment.type == 8) {
        return payment.idMembresia && payment.idMembresia > 0 ? 'fa-box-open' : 'fa-clock';
      }
      if (payment.type == 5) return 'fa-calendar-check';
      if ([1, 2, 7, 15].includes(payment.type)) return 'fa-receipt';
      if (payment.type == 4) return 'fa-arrow-up-long';
      if (payment.type == 6) return 'fa-arrow-down-long';
      return 'fa-circle-info';
    },
    getBadgeClass: function getBadgeClass(payment) {
      var _payment$price3;
      if (parseFloat((_payment$price3 = payment.price) !== null && _payment$price3 !== void 0 ? _payment$price3 : 0) < 0) return 'badge-egreso';
      if (payment.type == 8) {
        return payment.idMembresia && payment.idMembresia > 0 ? 'badge-cuota' : 'badge-adelanto';
      }
      if (payment.type == 5) return 'badge-cita';
      if ([1, 2, 7, 15].includes(payment.type)) return 'badge-cuota';
      if (payment.type == 4) return 'badge-ingreso';
      if (payment.type == 6) return 'badge-egreso';
      return 'badge-secondary';
    },
    getIconBoxClass: function getIconBoxClass(payment) {
      var _payment$price4;
      if (parseFloat((_payment$price4 = payment.price) !== null && _payment$price4 !== void 0 ? _payment$price4 : 0) < 0) return 'icon-egreso';
      if (payment.type == 8) {
        return payment.idMembresia && payment.idMembresia > 0 ? 'icon-cuota' : 'icon-adelanto';
      }
      if (payment.type == 5) return 'icon-cita';
      if ([1, 2, 7, 15].includes(payment.type)) return 'icon-cuota';
      if (payment.type == 4) return 'icon-ingreso';
      if (payment.type == 6) return 'icon-egreso';
      return 'icon-otros';
    },
    getDisplayTitle: function getDisplayTitle(payment) {
      var desc = '';
      if (payment.idMembresia > 0) {
        desc = payment.observation || 'Pago de Paquete';
      } else if (payment.type == 5 || payment.type == 8) {
        desc = payment.detalle || 'Cita';
      } else {
        desc = payment.observation || 'Pago';
      }
      if (payment.patient) {
        var patientName = "".concat(payment.patient.name || '', " ").concat(payment.patient.nombres || '').trim();
        if (patientName) {
          return "".concat(desc, " - ").concat(patientName);
        }
      }

      // If there is no patient association.
      if (payment.idMembresia > 0 || payment.type == 5 || payment.type == 8 || payment.type == 0) {
        if (payment.customer) {
          return "".concat(desc, " - ").concat(payment.customer);
        }
      }
      return payment.observation || payment.customer || 'Sin descripción';
    }
  },
  mounted: function mounted() {
    var _this6 = this;
    this.getAllExtraPayments();
    this.axios.get('/api/user').then(function (res) {
      _this6.idUsuario = res.data.user.id;
      _this6.tienePrivilegios = res.data.user.privilegios;
      _this6.idSede = res.data.user.idSede; // Aquí obtienes la IdSede
    });
    this.axios.get("/api/listarMonedas").then(function (resp) {
      return _this6.monedas = resp.data;
    });
  },
  filters: {
    formatedDate: function formatedDate(date) {
      return moment__WEBPACK_IMPORTED_MODULE_6___default()(date).format('DD/MM/yyyy');
    }
  },
  computed: {
    filtrosPills: function filtrosPills() {
      return ['Todos', 'Ingresos', 'Egresos', 'Citas', 'Adelantos', 'Cuotas', 'Ing. Extra', 'Egr. Extra'];
    },
    filteredPayments: function filteredPayments() {
      var result = this.payments.map(function (item, index) {
        item.originalIndex = index;
        return item;
      });
      if (this.filtroActual === 'Ingresos') return result.filter(function (item) {
        var _item$price;
        return parseFloat((_item$price = item.price) !== null && _item$price !== void 0 ? _item$price : 0) >= 0;
      });
      if (this.filtroActual === 'Egresos') return result.filter(function (item) {
        var _item$price2;
        return item.type == 6 || parseFloat((_item$price2 = item.price) !== null && _item$price2 !== void 0 ? _item$price2 : 0) < 0;
      });
      if (this.filtroActual === 'Citas') return result.filter(function (item) {
        return item.type == 5;
      });
      if (this.filtroActual === 'Adelantos') return result.filter(function (item) {
        return item.type == 8 && !(item.idMembresia > 0);
      });
      if (this.filtroActual === 'Cuotas') return result.filter(function (item) {
        return [1, 2, 7, 15].includes(item.type) || item.type == 8 && item.idMembresia > 0;
      });
      if (this.filtroActual === 'Ing. Extra') return result.filter(function (item) {
        return item.type == 4;
      });
      if (this.filtroActual === 'Egr. Extra') return [];
      return result;
    },
    filteredSalidas: function filteredSalidas() {
      var result = this.salidas.map(function (item, index) {
        item.originalIndex = index;
        return item;
      });
      if (this.filtroActual === 'Egresos') return result;
      if (this.filtroActual === 'Egr. Extra') return result;
      if (['Citas', 'Adelantos', 'Cuotas', 'Ing. Extra', 'Ingresos'].includes(this.filtroActual)) return [];
      return result;
    },
    unifiedTransactions: function unifiedTransactions() {
      var _this7 = this;
      var combined = [];

      // Add income (payments)
      this.filteredPayments.forEach(function (p) {
        combined.push(_objectSpread(_objectSpread({}, p), {}, {
          isIncome: p.type != 6 && parseFloat(p.price) >= 0,
          displayType: _this7.getDisplayType(p),
          displayIcon: _this7.getDisplayIcon(p),
          displayBadgeClass: _this7.getBadgeClass(p),
          iconBoxClass: _this7.getIconBoxClass(p),
          displayAmount: p.price,
          displayTitle: _this7.getDisplayTitle(p),
          source: 'payments'
        }));
      });

      // Add expenses (salidas)
      this.filteredSalidas.forEach(function (s) {
        // Avoid duplicates if any (though usually separate)
        if (!combined.find(function (p) {
          return p.id === s.id && p.source === 'payments';
        })) {
          combined.push(_objectSpread(_objectSpread({}, s), {}, {
            isIncome: false,
            displayType: 'Egr. Extra',
            displayIcon: _this7.getDisplayIcon({
              type: 6
            }),
            displayBadgeClass: _this7.getBadgeClass({
              type: 6
            }),
            iconBoxClass: _this7.getIconBoxClass({
              type: 6
            }),
            displayAmount: s.price,
            displayTitle: s.observation || s.customer || 'Salida de dinero',
            source: 'salidas'
          }));
        }
      });

      // Sort by ID descending
      return combined.sort(function (a, b) {
        return b.id - a.id;
      });
    },
    totalIngresosStats: function totalIngresosStats() {
      return this.payments.reduce(function (suma, item) {
        var _item$price3;
        var price = parseFloat((_item$price3 = item.price) !== null && _item$price3 !== void 0 ? _item$price3 : 0);
        if (price >= 0) {
          return suma + price;
        }
        return suma;
      }, 0);
    },
    totalEgresosStats: function totalEgresosStats() {
      var total = 0;
      if (this.salidas.length > 0) {
        total += this.salidas.reduce(function (suma, item) {
          var _item$price4;
          return suma + parseFloat((_item$price4 = item.price) !== null && _item$price4 !== void 0 ? _item$price4 : 0);
        }, 0);
      }
      if (this.payments.length > 0) {
        total += this.payments.reduce(function (suma, item) {
          var _item$price5;
          var price = parseFloat((_item$price5 = item.price) !== null && _item$price5 !== void 0 ? _item$price5 : 0);
          if (price < 0) {
            return suma + Math.abs(price);
          }
          return suma;
        }, 0);
      }
      return total;
    },
    netoDiaStats: function netoDiaStats() {
      return this.totalIngresosStats - this.totalEgresosStats;
    },
    totalCitasCobradas: function totalCitasCobradas() {
      return this.payments.reduce(function (sum, item) {
        var _item$price6;
        var price = parseFloat((_item$price6 = item.price) !== null && _item$price6 !== void 0 ? _item$price6 : 0);
        if (item.type == 5 && price >= 0) return sum + price;
        return sum;
      }, 0);
    },
    totalAdelantos: function totalAdelantos() {
      return this.payments.reduce(function (sum, item) {
        var _item$price7;
        var price = parseFloat((_item$price7 = item.price) !== null && _item$price7 !== void 0 ? _item$price7 : 0);
        if (item.type == 8 && price >= 0) return sum + price;
        return sum;
      }, 0);
    },
    suma: function suma() {
      if (this.filteredPayments.length > 0) {
        return this.filteredPayments.reduce(function (suma, item) {
          var _item$price8;
          var price = parseFloat((_item$price8 = item.price) !== null && _item$price8 !== void 0 ? _item$price8 : 0);
          if (price >= 0) {
            return suma + price;
          }
          return suma;
        }, 0);
      }
      return 0;
    },
    sumaSal: function sumaSal() {
      var total = 0;
      if (this.filteredSalidas.length > 0) {
        total += this.filteredSalidas.reduce(function (suma, item) {
          var _item$price9;
          return suma + parseFloat((_item$price9 = item.price) !== null && _item$price9 !== void 0 ? _item$price9 : 0);
        }, 0);
      }
      if (this.filteredPayments.length > 0) {
        total += this.filteredPayments.reduce(function (suma, item) {
          var _item$price10;
          var price = parseFloat((_item$price10 = item.price) !== null && _item$price10 !== void 0 ? _item$price10 : 0);
          if (price < 0) {
            return suma + Math.abs(price);
          }
          return suma;
        }, 0);
      }
      return total;
    },
    sumaTipos: function sumaTipos() {
      var _this8 = this;
      var res = [];
      this.filteredPayments.forEach(function (item) {
        var _item$price11;
        var monedaName = _this8.queMoneda(item.moneda) || 'Otro';
        var value = parseFloat((_item$price11 = item.price) !== null && _item$price11 !== void 0 ? _item$price11 : 0);
        if (value >= 0) {
          var existing = res.find(function (x) {
            return x.moneda === monedaName;
          });
          if (existing) {
            existing.suma += value;
          } else {
            res.push({
              moneda: monedaName,
              suma: value
            });
          }
        }
      });
      return res;
    },
    sumaSalidas: function sumaSalidas() {
      var _this9 = this;
      var res = [];
      this.filteredSalidas.forEach(function (item) {
        var _item$price12;
        var monedaName = _this9.queMoneda(item.moneda) || 'Otro';
        var value = parseFloat((_item$price12 = item.price) !== null && _item$price12 !== void 0 ? _item$price12 : 0);
        var existing = res.find(function (x) {
          return x.moneda === monedaName;
        });
        if (existing) {
          existing.suma += value;
        } else {
          res.push({
            moneda: monedaName,
            suma: value
          });
        }
      });
      this.filteredPayments.forEach(function (item) {
        var _item$price13;
        var value = parseFloat((_item$price13 = item.price) !== null && _item$price13 !== void 0 ? _item$price13 : 0);
        if (value < 0) {
          var monedaName = _this9.queMoneda(item.moneda) || 'Otro';
          var absValue = Math.abs(value);
          var existing = res.find(function (x) {
            return x.moneda === monedaName;
          });
          if (existing) {
            existing.suma += absValue;
          } else {
            res.push({
              moneda: monedaName,
              suma: absValue
            });
          }
        }
      });
      return res;
    },
    saldoNetoPorMoneda: function saldoNetoPorMoneda() {
      var _this10 = this;
      var res = [];
      var monedas = new Set([].concat(_toConsumableArray(this.sumaTipos.map(function (x) {
        return x.moneda;
      })), _toConsumableArray(this.sumaSalidas.map(function (x) {
        return x.moneda;
      }))));
      monedas.forEach(function (moneda) {
        var _this10$sumaTipos$fin, _this10$sumaSalidas$f;
        var ing = ((_this10$sumaTipos$fin = _this10.sumaTipos.find(function (x) {
          return x.moneda === moneda;
        })) === null || _this10$sumaTipos$fin === void 0 ? void 0 : _this10$sumaTipos$fin.suma) || 0;
        var egr = ((_this10$sumaSalidas$f = _this10.sumaSalidas.find(function (x) {
          return x.moneda === moneda;
        })) === null || _this10$sumaSalidas$f === void 0 ? void 0 : _this10$sumaSalidas$f.suma) || 0;
        res.push({
          moneda: moneda,
          suma: ing - egr
        });
      });
      return res;
    },
    totalSaldoNeto: function totalSaldoNeto() {
      return this.suma - this.sumaSal;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alertifyjs */ "./node_modules/alertifyjs/build/alertify.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "modalDividirPago",
  data: function data() {
    return {
      caso: {
        monto: 0,
        moneda: 1,
        comprobante: '',
        observacion: ''
      },
      monedas: []
    };
  },
  props: {
    pago: Object,
    idUsuario: null
  },
  methods: {
    save: function save() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.caso.monto <= 0)) {
                _context.next = 3;
                break;
              }
              alertifyjs__WEBPACK_IMPORTED_MODULE_0___default().notify('<i class="fas fa-divide"></i> El nuevo monto no está correcto', 'danger', 5);
              return _context.abrupt("return");
            case 3:
              if (!(_this.caso.observacion == '')) {
                _context.next = 6;
                break;
              }
              alertifyjs__WEBPACK_IMPORTED_MODULE_0___default().notify('<i class="fas fa-divide"></i> Falta un motivo', 'danger', 5);
              return _context.abrupt("return");
            case 6:
              _context.next = 8;
              return _this.axios.put("/api/dividirPago/".concat(_this.pago.id), {
                caso: _this.caso,
                idUsuario: _this.idUsuario
              }).then(function (res) {
                _this.closeModal();
                _this.$swal.fire({
                  title: 'Pago actualizado con éxito',
                  icon: 'info',
                  showCancelButton: true,
                  cancelButtonText: 'Salir'
                });
                _this.$parent.actualizar();
              })["catch"](function (err) {
                console.error(err);
              });
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    minimo: function minimo() {
      if (this.caso.monto >= parseFloat(this.pago.price)) {
        this.caso.monto = 0;
        alertifyjs__WEBPACK_IMPORTED_MODULE_0___default().notify('<i class="fas fa-divide"></i> El nuevo monto no puede ser igual o mayor que el precio base', 'danger', 5);
      }
    },
    closeModal: function closeModal() {
      document.getElementById('cerrModalDividir').click();
    },
    pagoModal: function pagoModal(data) {
      console.log('pago modal');
    },
    modalDePago: function modalDePago() {
      console.log('algo');
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.axios.get("/api/listarMonedas").then(function (resp) {
      return _this2.monedas = resp.data;
    });
  },
  watch: {},
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alertifyjs */ "./node_modules/alertifyjs/build/alertify.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ModalFacturacion',
  data: function data() {
    return {
      hoy: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD'),
      facturacion: {
        tipoEmision: '03',
        fecha: '',
        tipoDocumento: '1',
        ruc: '',
        razonSocial: '',
        direccion: '',
        conceptoPago: '',
        monto: 0,
        tipoPago: 'Contado',
        apoderado: '',
        montosFechas: []
      }
    };
  },
  props: {
    idSede: null,
    pago: null
  },
  methods: {
    agregarMontoFecha: function agregarMontoFecha() {
      event.preventDefault();
      var ultimo = this.facturacion.montosFechas[this.facturacion.montosFechas.length - 1];
      console.log(ultimo);
      //validar que el ultimo dato tenga fecha y valor mayor a 0, si fuera undefined se omite la validación
      if (ultimo && (ultimo.fecha === '' || ultimo.monto <= 0)) return;
      this.facturacion.montosFechas.push({
        fecha: '',
        monto: 0
      });
    },
    cambioCliente: function cambioCliente() {
      if (this.facturacion.tipoDocumento === '0') {
        this.facturacion.ruc = '00000000';
        this.facturacion.razonSocial = 'Cliente Simple';
        this.facturacion.direccion = '-';
      } else {
        this.facturacion.ruc = '';
        this.facturacion.razonSocial = '';
        this.facturacion.direccion = '';
      }
    },
    preventSpace: function preventSpace(event) {
      // Si la tecla presionada es espacio (código 32)
      if (event.keyCode === 32 || event.key === ' ') {
        event.preventDefault(); // Evita que se ingrese el espacio
      }
    },
    buscarReniec: function buscarReniec() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var resp, _resp$data$address, respReniec;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.facturacion.ruc == '')) {
                _context.next = 3;
                break;
              }
              alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-solid fa-circle-check"></i> ' + 'Campo DNI/RUC está vacío', 'danger', 10);
              return _context.abrupt("return");
            case 3:
              _this.$swal.fire({
                title: 'Buscando paciente',
                timer: 1000,
                //1 seg
                timerProgressBar: true,
                didOpen: function didOpen() {
                  timerProgressBar: true, _this.$swal.showLoading();
                }
              });
              _context.next = 6;
              return _this.axios.get("/api/buscarPacienteSoloDNI/" + _this.facturacion.ruc + '?token=' + localStorage.getItem('token'));
            case 6:
              resp = _context.sent;
              if (!(resp.data && resp.data !== "")) {
                _context.next = 13;
                break;
              }
              //esta en la BD local
              _this.facturacion.ruc = resp.data.dni.trim();
              _this.facturacion.razonSocial = resp.data.name.trim() + ' ' + resp.data.nombres.trim();
              _this.facturacion.direccion = (_resp$data$address = resp.data.address) === null || _resp$data$address === void 0 ? void 0 : _resp$data$address.address.trim().replace('null', '-');
              _context.next = 26;
              break;
            case 13:
              _context.next = 15;
              return _this.axios.get("/api/buscarDni/" + _this.facturacion.ruc + '?token=' + localStorage.getItem('token'));
            case 15:
              respReniec = _context.sent;
              if (!(respReniec.status === 200 && respReniec.data)) {
                _context.next = 22;
                break;
              }
              _this.facturacion.razonSocial = respReniec.data.apellido_paterno.trim() + ' ' + respReniec.data.apellido_materno.trim() + ' ' + respReniec.data.nombres.trim();
              _this.facturacion.direccion = '-';
              return _context.abrupt("return");
            case 22:
              _this.facturacion.ruc = '';
              _this.facturacion.razonSocial = '';
              _this.facturacion.direccion = '';
              _this.$swal.fire({
                title: 'DNI no ubicado',
                timer: 1000 //1 seg
              });
            case 26:
              _this.facturacion.razonSocial = _this.facturacion.razonSocial.replace(/\s+/g, ' ');
            case 27:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    buscarSunat: function buscarSunat() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var resp, datos;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this2.facturacion.ruc.length < 11)) {
                _context2.next = 3;
                break;
              }
              _this2.$swal.fire({
                icon: "error",
                title: 'RUC Inválido',
                timer: 1500 //1 seg
              });
              return _context2.abrupt("return", false);
            case 3:
              _this2.$swal.fire({
                title: 'Buscando RUC en Sunat...',
                timer: 1000,
                //1 seg
                timerProgressBar: true,
                didOpen: function didOpen() {
                  timerProgressBar: true, _this2.$swal.showLoading();
                }
              });
              _context2.next = 6;
              return _this2.axios.get("/api/buscarRUC/" + _this2.facturacion.ruc);
            case 6:
              resp = _context2.sent;
              if (!(resp.status === 200)) {
                _context2.next = 14;
                break;
              }
              //esta en la BD local
              datos = resp.data;
              _this2.facturacion.ruc = datos.ruc.trim();
              _this2.facturacion.razonSocial = datos.razonSocial.trim();
              _this2.facturacion.direccion = datos.direccion.trim();
              _this2.facturacion.razonSocial = _this2.facturacion.razonSocial.replace(/\s+/g, ' ');
              return _context2.abrupt("return");
            case 14:
              _this2.$swal.fire({
                title: 'RUC no ubicado',
                timer: 1000 //1 seg
              });
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    cambiarContado: function cambiarContado() {
      if (this.facturacion.tipoPago === 'Contado') {
        this.facturacion.montosFechas = [];
        return;
      }
      this.agregarMontoFecha();
    },
    imprimirTicket: function imprimirTicket() {
      var url = "/api/pdfExtraCupon/".concat(this.pago.id, "?token=").concat(localStorage.getItem('token'));
      window.open(url, '_blank');
    },
    soloNumeros: function soloNumeros(event) {
      var valor = event.target.value.replace(/[^0-9.]/g, '');

      // Un solo punto
      var puntos = valor.match(/\./g);
      if (puntos && puntos.length > 1) {
        valor = valor.substring(0, valor.lastIndexOf('.'));
      }
      event.target.value = valor;
      this.facturacion.monto = valor;
    },
    generarComprobante: function generarComprobante() {
      var _this3 = this;
      if (!this.validaciones()) return;
      var sede = this.idSede == 1 ? 'eltambo' : 'sancarlos'; //1= el tambo, 2 = san carlos
      var url = null;
      var empresa = null;
      var cliente = null;
      var jsonProductos = [];
      if (false) {}else url = 'http://localhost/pluginSunat/php/insertarBoleta_v4.php';
      var comprobantes = {
        '01': 'FE01',
        '03': 'BE01',
        '0': '',
        '-1': ''
      };
      if (this.idSede == 1) {
        //El Tambo
        empresa = {
          ruc: '20601862329',
          crearArchivo: 0,
          facturador: "",
          sucursal: "001"
        };
      }
      if (this.idSede == 2) {
        //San carlos
        empresa = {
          ruc: '20614202476',
          crearArchivo: 0,
          facturador: "",
          sucursal: "001"
        };
      }
      cliente = {
        dni: this.facturacion.ruc,
        razon: this.facturacion.razonSocial,
        direccion: this.facturacion.direccion,
        contado: this.facturacion.tipoPago == 'Contado' ? 1 : 2,
        fechaCredito: this.facturacion.montosFechas,
        adelanto: 0,
        montoCredito: this.facturacion.montosFechas.reduce(function (acc, item) {
          return acc + item.monto;
        }, 0),
        descuentos: 0,
        observaciones: this.facturacion.apoderado
      };
      jsonProductos.push({
        id: 1,
        //libre
        nombre: this.facturacion.conceptoPago,
        cantidad: 1,
        //es servicios
        unidad: 'Und.',
        unidadSunat: 'ZZ',
        //servicios
        precio: this.facturacion.monto,
        descuento: 0,
        afecto: '1',
        //gravado
        subTotal: this.facturacion.monto
      });
      var cabecera = {
        tipo: this.facturacion.tipoEmision,
        serie: comprobantes[this.facturacion.tipoEmision],
        fecha: this.hoy
      };
      this.$swal.fire({
        title: 'Enviando Comprobante Electrónico',
        timerProgressBar: true,
        didOpen: function didOpen() {
          timerProgressBar: true, _this3.$swal.showLoading();
        }
      });
      this.axios.post(url, {
        empresa: empresa,
        cliente: cliente,
        cabecera: cabecera,
        jsonProductos: jsonProductos
      }).then(function (resp) {
        console.log(resp.data);
        _this3.registrarSerie(resp.data.cliente.serie + '-' + resp.data.cliente.correlativo);
        _this3.$swal.close();
      })["catch"](function (error) {
        _this3.$swal.close();
        _this3.$swal.fire({
          icon: "error",
          title: 'Hubo un error al enviar el comprobante',
          timer: 1500 //1 seg
        });
      });
    },
    validaciones: function validaciones() {
      var valor = true;

      //validaciones generales:
      if (this.facturacion.ruc == '' || this.facturacion.razonSocial == '') {
        alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-solid fa-circle-check"></i> ' + 'Falta rellenar datos: DNI, Razón Social', 'danger', 10);
        valor = false;
      }
      if (this.facturacion.monto <= 0) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-solid fa-circle-check"></i> ' + 'Monto incorrecto', 'danger', 10);
        valor = false;
      }
      if (this.facturacion.conceptoPago == '') {
        alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-solid fa-circle-check"></i> ' + 'Se debe rellenar un concepto', 'danger', 10);
        valor = false;
      }
      if (this.facturacion.tipoEmision == '01') {//facturas
      }
      if (this.facturacion.tipoEmision == '03') {//boletas
        //if( (this.facturacion.tipoDocumento == 1 || this.facturacion.tipoDocumento == 6) )

        //
      }
      return valor;
    },
    registrarSerie: function registrarSerie(serie) {
      //registrar en pagos de BD consultorio
      this.pago.voucher = serie;
      this.axios.patch('/api/paymentExtra/' + this.pago.id, {
        voucher: this.pago.voucher
      });
      alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-solid fa-circle-check"></i> ' + 'Comprobante registrado exitosamente', 'success', 10);
    },
    imprimirComprobante: function imprimirComprobante() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var sede, url, resp, datos, cuerpo;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              sede = _this4.idSede == 1 ? 'eltambo' : 'sancarlos';
              url = null;
              if (false) {} else url = 'http://127.0.0.1/pluginSunat/php/apiComprobantePorCorrelativo.php';
              _context3.next = 5;
              return _this4.axios.post(url, {
                correlativo: _this4.pago.voucher
              });
            case 5:
              resp = _context3.sent;
              _context3.next = 8;
              return resp.data;
            case 8:
              datos = _context3.sent;
              console.log(datos);
              cuerpo = {
                // Datos del comprobante
                rucEmisor: datos.empresa.ruc,
                tipoComprobante: "0".concat(datos.cabecera.factTipoDocumento),
                // 01=Factura, 03=Boleta, etc.
                serie: datos.cabecera.factSerie,
                correlativo: datos.cabecera.factCorrelativo,
                totalFinal: datos.cabecera.totalFinal,
                fecha: datos.cabecera.fechaEmision,
                fechaLat: moment__WEBPACK_IMPORTED_MODULE_0___default()(datos.cabecera.fechaEmision).format('DD/MM/YYYY'),
                // Fecha en formato latino
                tipoCliente: datos.cabecera.factTipoDocumento,
                // 6=RUC, 1=DNI, etc.
                docClient: datos.cabecera.dniRUC,
                cliente: datos.cabecera.razonSocial,
                direccion: '-',
                esServicio: 1,
                // 1=Servicio, 0=Producto (cambia el header)

                // Tipo de documento
                queEs: datos.cabecera.queDoc,
                ticketera: 'CAJA',
                // Como es 1 solo servicio, solo abregamos 1 opción
                productos: [{
                  descripcion: datos.detalles[0].descripcionItem.replace(/\|/g, ' '),
                  cantidad: 1,
                  //porque es servicio
                  undCorto: datos.detalles[0].codUnidadMedida,
                  preProducto: datos.detalles[0].mtoPrecioVenta,
                  // Precio unitario
                  precio: datos.detalles[0].mtoPrecioVenta // Subtotal (cantidad * precio unitario)
                }
                /* {
                	descipcion: 'Producto B',
                	cantidad: 1,
                	undCorto: 'UND',
                	preProducto: 18.00,
                	precio: 18.00
                } */],
                exonerado: '0.00',
                igvFinal: datos.cabecera.IGVFinal,
                costoFinal: datos.cabecera.costoFinal,
                // Subtotal sin IGV
                descuento: 0,
                // Descuento global (opcional)
                monedas: datos.cabecera.desLeyenda
              };
              fetch('http://127.0.0.1/pluginSunat/printComprobante.php', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(cuerpo)
              }).then(function (response) {
                console.log('Impresión exitosa:', response.text());
              })["catch"](function (error) {
                console.error('Error en impresión:', error);
              });
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    irPanelBaja: function irPanelBaja() {
      var sede = this.idSede == 1 ? 'eltambo' : 'sancarlos';
      window.open('https://apps.infocatsoluciones.com/excelentemente/' + sede + '/php/accesoFast.php?token=' + undefined, '_blank');
    },
    cambiarEmision: function cambiarEmision() {
      if (this.facturacion.tipoEmision == '03') {
        //boletas, seteamos al contado
        this.facturacion.tipoPago = 'Contado';
      }
    }
  },
  watch: {
    'pago': function pago(newVal) {
      if (newVal) {
        if (newVal.voucher) return;
        this.facturacion.ruc = newVal.dniCliente;
        this.buscarReniec();
        if (parseInt(newVal.idMembresia) > 0) this.facturacion.conceptoPago = 'Pago de paquete';else {
          var servicio = {
            "0": "Certificado",
            "1": "Paquete",
            "2": "Paquete Kurame",
            "3": "Informe",
            "4": "Otros",
            "5": "Pago de cita",
            "7": "Pago de paquete",
            "8": "Adelanto de cita",
            "15": "Pago de paquete",
            "16": "Revaluación gratuita"
          };
          this.facturacion.conceptoPago = servicio[newVal.type] + ' ' + newVal.detalle.replace(/\//g, '-');
        }
        this.facturacion.monto = newVal.price;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alertifyjs */ "./node_modules/alertifyjs/build/alertify.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ModalMembresias',
  data: function data() {
    return {
      // vista: 'buscar',
      txtBusqueda: '',
      pacientes: [],
      indexGlobal: null,
      pacienteElegido: {},
      precios: [],
      membresia: {
        tipo: null,
        cuotas: 1,
        precio: 0,
        fin: moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'month').format('YYYY-MM-DD'),
        descuento: 0,
        conDescuento: false
      },
      fechas: [],
      activaResultados: false,
      nuevaFecha: {
        fecha: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD')
      },
      sesionesAcumuladas: [],
      idHorario: '',
      comentarios: '',
      selectedTipoPaquete: '',
      selectedEspecialidadPaquete: '',
      selectedPublicoPaquete: '',
      selectedSubtipoPaquete: '',
      guardando: false,
      monedas: []
    };
  },
  props: ['idUsuario', 'vista'],
  methods: {
    searchHistoria: function searchHistoria() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var search, nombre, profesional, fecha, dni;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              search = _this.txtBusqueda.split('/'), nombre = search[0], profesional = search[1] || null, fecha = search[2] || null, dni = search[0];
              if (!(nombre === '')) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", _this.listar());
            case 3:
              if (dni) dni = dni.trim();
              _context.next = 6;
              return _this.axios.get("/api/searchPatientByNameDni/".concat(_this.txtBusqueda)).then(function (res) {
                //console.log(res.data);
                _this.pacientes = res.data;
                _this.activaResultados = true;
              })["catch"](function (err) {
                console.error(err);
              });
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    cambiarVista: function cambiarVista(vista, index) {
      this.vista = vista;
      if (index > -1) {
        this.indexGlobal = index;
        this.pacienteElegido = this.pacientes[index];
        this.calcularFechas();
      }
    },
    seleccionarPaciente: function seleccionarPaciente(index) {
      this.indexGlobal = index;
      this.pacienteElegido = this.pacientes[index];
      this.pacientes = [];
      this.txtBusqueda = '';
      this.activaResultados = false;
      this.calcularFechas();
    },
    limpiarPaciente: function limpiarPaciente() {
      this.pacienteElegido = {};
      this.indexGlobal = null;
    },
    preciosMembresias: function preciosMembresias() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var servidor;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch('/api/preciosMembresias');
            case 2:
              servidor = _context2.sent;
              _context2.next = 5;
              return servidor.json();
            case 5:
              _this2.precios = _context2.sent;
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    cargarMonedas: function cargarMonedas() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _this3.axios.get("/api/listarMonedas");
            case 3:
              response = _context3.sent;
              _this3.monedas = response.data;
              _context3.next = 10;
              break;
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              console.error("Error cargando monedas:", _context3.t0);
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 7]]);
      }))();
    },
    alCambiarPago: function alCambiarPago(fecha, index) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var opcionesMetodos, _yield$_this4$$swal, formValues;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!fecha.pago) {
                _context4.next = 14;
                break;
              }
              if (!(!_this4.monedas || _this4.monedas.length === 0)) {
                _context4.next = 4;
                break;
              }
              _context4.next = 4;
              return _this4.cargarMonedas();
            case 4:
              if (!_this4.monedas || _this4.monedas.length === 0) {
                _this4.monedas = [{
                  id: 1,
                  tipo: 'Efectivo'
                }, {
                  id: 2,
                  tipo: 'Depósito bancario'
                }, {
                  id: 4,
                  tipo: 'Yape'
                }, {
                  id: 10,
                  tipo: 'Aplicativo Plin'
                }];
              }
              // Opciones para el select de métodos de pago
              opcionesMetodos = '';
              _this4.monedas.forEach(function (m) {
                var selectedAttr = m.id == 1 ? 'selected' : '';
                opcionesMetodos += "<option value=\"".concat(m.id, "\">").concat(m.tipo, "</option>");
              });
              _context4.next = 9;
              return _this4.$swal({
                title: 'Registrar Pago de Cuota',
                target: '#modalMembresias',
                html: "<div class=\"text-start mb-3\">" + "  <p class=\"mb-2\">Cuota: <strong>#".concat(index + 1, "</strong></p>") + "  <p class=\"mb-3\">Monto a pagar: <strong class=\"text-success fs-5\">S/ ".concat(parseFloat(fecha.monto).toFixed(2), "</strong></p>") + "  <div class=\"mb-3\">" + "    <label class=\"form-label small fw-bold text-muted text-uppercase mb-1\">M\xE9todo de Pago <span class=\"text-danger\">*</span></label>" + "    <select id=\"swal-pago-metodo\" class=\"form-select\">".concat(opcionesMetodos, "</select>") + "  </div>" + "  <div class=\"mb-3\">" + "    <label class=\"form-label small fw-bold text-muted text-uppercase mb-1\">Motivo / Concepto <span class=\"text-danger\">*</span></label>" + "    <input id=\"swal-pago-motivo\" class=\"form-control\" type=\"text\" value=\"Pago de cuota #".concat(index + 1, "\">") + "  </div>" + "  <div class=\"mb-3\">" + "    <label class=\"form-label small fw-bold text-muted text-uppercase mb-1\">N\xFAmero de Operaci\xF3n <span class=\"text-muted\">(Yape, Plin, Transferencia, etc.)</span></label>" + "    <input id=\"swal-pago-voucher\" class=\"form-control\" type=\"text\" placeholder=\"Ej: 123456\">" + "  </div>" + "</div>",
                focusConfirm: false,
                showCancelButton: true,
                confirmButtonText: '<i class="fas fa-hand-holding-usd me-1"></i> Confirmar Pago',
                cancelButtonText: 'Cancelar',
                preConfirm: function preConfirm() {
                  var metodoId = document.getElementById('swal-pago-metodo').value;
                  var motivo = document.getElementById('swal-pago-motivo').value;
                  var voucher = document.getElementById('swal-pago-voucher').value;
                  if (!metodoId) {
                    _this4.$swal.showValidationMessage('Debe seleccionar un método de pago');
                    return false;
                  }
                  if (!motivo) {
                    _this4.$swal.showValidationMessage('Debe ingresar un motivo/concepto');
                    return false;
                  }
                  return {
                    metodoId: parseInt(metodoId),
                    motivo: motivo,
                    voucher: voucher
                  };
                }
              });
            case 9:
              _yield$_this4$$swal = _context4.sent;
              formValues = _yield$_this4$$swal.value;
              if (formValues) {
                _this4.$set(fecha, 'metodo_pago_id', formValues.metodoId);
                _this4.$set(fecha, 'motivo', formValues.motivo);
                _this4.$set(fecha, 'voucher', formValues.voucher);
              } else {
                fecha.pago = false;
              }
              _context4.next = 17;
              break;
            case 14:
              // Si se desmarca, limpiar los campos de pago
              _this4.$delete(fecha, 'metodo_pago_id');
              _this4.$delete(fecha, 'motivo');
              _this4.$delete(fecha, 'voucher');
            case 17:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    limpiarFormulario: function limpiarFormulario() {
      this.txtBusqueda = '';
      this.pacientes = [];
      this.indexGlobal = null;
      this.pacienteElegido = {};
      this.membresia = {
        tipo: null,
        cuotas: 1,
        precio: 0,
        fin: moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'month').format('YYYY-MM-DD'),
        descuento: 0,
        conDescuento: false
      };
      this.fechas = [];
      this.activaResultados = false;
      this.nuevaFecha = {
        fecha: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD')
      };
      this.sesionesAcumuladas = [];
      this.idHorario = '';
      this.comentarios = '';
      this.selectedTipoPaquete = '';
      this.selectedEspecialidadPaquete = '';
      this.selectedPublicoPaquete = '';
      this.selectedSubtipoPaquete = '';
    },
    calcularFechas: function calcularFechas() {
      this.fechas = [];
      if (!this.membresia.tipo) return;
      var precioBase = parseFloat(this.mostrarPrecio) || 0;
      var descuento = parseFloat(this.membresia.descuento) || 0;
      var precioTotal = parseFloat(Math.max(0, precioBase - descuento).toFixed(2));
      this.membresia.precio = precioBase;
      var numCuotas = parseInt(this.membresia.cuotas) || 1;
      var hoy = moment__WEBPACK_IMPORTED_MODULE_0___default()();
      for (var i = 0; i < numCuotas; i++) {
        this.fechas.push({
          dia: hoy.format('YYYY-MM-DD'),
          monto: '0.00',
          total: precioTotal,
          pago: false
        });
        hoy = moment__WEBPACK_IMPORTED_MODULE_0___default()(hoy).add(1, 'month');
      }
      this.membresia.fin = this.membresia.tipo == 47 ? moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'year').format('YYYY-MM-DD') : moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD');

      // Balancear inicialmente
      if (numCuotas === 1) {
        this.fechas[0].monto = precioTotal.toFixed(2);
      } else {
        var baseCuota = parseFloat((precioTotal / numCuotas).toFixed(2));
        var suma = 0;
        for (var _i = 0; _i < numCuotas - 1; _i++) {
          this.fechas[_i].monto = baseCuota.toFixed(2);
          suma += baseCuota;
        }
        var ultimaCuota = parseFloat((precioTotal - suma).toFixed(2));
        this.fechas[numCuotas - 1].monto = ultimaCuota.toFixed(2);
      }
    },
    seleccionarTipo: function seleccionarTipo(tipo) {
      if (this.selectedTipoPaquete !== tipo) {
        this.selectedTipoPaquete = tipo;
        this.selectedEspecialidadPaquete = '';
        this.selectedPublicoPaquete = '';
        this.selectedSubtipoPaquete = '';
        this.evaluarPaqueteSeleccionado();
      }
    },
    seleccionarEspecialidad: function seleccionarEspecialidad(especialidad) {
      if (this.selectedEspecialidadPaquete !== especialidad) {
        this.selectedEspecialidadPaquete = especialidad;
        this.selectedPublicoPaquete = '';
        this.selectedSubtipoPaquete = '';
        this.evaluarPaqueteSeleccionado();
      }
    },
    seleccionarPublico: function seleccionarPublico(publico) {
      if (this.selectedPublicoPaquete !== publico) {
        this.selectedPublicoPaquete = publico;
        this.selectedSubtipoPaquete = '';
        this.evaluarPaqueteSeleccionado();
      }
    },
    seleccionarSubtipo: function seleccionarSubtipo(subtipo) {
      if (this.selectedSubtipoPaquete !== subtipo) {
        this.selectedSubtipoPaquete = subtipo;
        this.evaluarPaqueteSeleccionado();
      }
    },
    evaluarPaqueteSeleccionado: function evaluarPaqueteSeleccionado() {
      var _this5 = this;
      var buscar = false;
      if (this.selectedTipoPaquete === 'sesiones' || this.selectedTipoPaquete === 'tiempo') {
        if (this.selectedEspecialidadPaquete && this.selectedPublicoPaquete && this.selectedSubtipoPaquete) buscar = true;
      } else if (this.selectedTipoPaquete === 'otros') {
        if (this.selectedEspecialidadPaquete && this.selectedSubtipoPaquete) buscar = true;
      }
      if (buscar) {
        var paqueteEncontrado = this.precios.find(function (p) {
          return p.paquete_tipo === _this5.selectedTipoPaquete && p.paquete_especialidad === _this5.selectedEspecialidadPaquete && (_this5.selectedTipoPaquete === 'otros' || p.paquete_publico === _this5.selectedPublicoPaquete || p.paquete_publico === 'ambos' || !p.paquete_publico) && p.paquete_subtipo === _this5.selectedSubtipoPaquete;
        });
        if (paqueteEncontrado) {
          this.membresia.tipo = paqueteEncontrado.id;
          this.calcularFechas();
        } else {
          this.membresia.tipo = null;
          this.fechas = [];
        }
      } else {
        this.membresia.tipo = null;
        this.fechas = [];
      }
    },
    obtenerPrecioSubtipo: function obtenerPrecioSubtipo(subtipo) {
      var _this6 = this;
      var paquete = this.precios.find(function (p) {
        return p.paquete_tipo === _this6.selectedTipoPaquete && p.paquete_especialidad === _this6.selectedEspecialidadPaquete && (_this6.selectedTipoPaquete === 'otros' || p.paquete_publico === _this6.selectedPublicoPaquete || p.paquete_publico === 'ambos' || !p.paquete_publico) && p.paquete_subtipo === subtipo;
      });
      return paquete ? parseFloat(paquete.nuevos).toFixed(2) : null;
    },
    balancearMontos: function balancearMontos(editedIndex) {
      var precioBase = parseFloat(this.mostrarPrecio) || 0;
      var descuento = parseFloat(this.membresia.descuento) || 0;
      var precioTotal = parseFloat(Math.max(0, precioBase - descuento).toFixed(2));
      var numCuotas = this.fechas.length;
      if (numCuotas <= 1) return;

      // Sumar las cuotas hasta la editada inclusive
      var sumaAnteriores = 0;
      for (var i = 0; i <= editedIndex; i++) {
        sumaAnteriores += parseFloat(this.fechas[i].monto) || 0;
      }
      var cantidadFechasABalancear = numCuotas - (editedIndex + 1);
      if (cantidadFechasABalancear > 0) {
        var montoRestanteTotal = precioTotal - sumaAnteriores;
        var baseRestante = parseFloat((montoRestanteTotal / cantidadFechasABalancear).toFixed(2));
        var suma = sumaAnteriores;
        for (var _i2 = editedIndex + 1; _i2 < numCuotas - 1; _i2++) {
          this.fechas[_i2].monto = baseRestante.toFixed(2);
          suma += baseRestante;
        }

        // El restante se asigna a la última cuota para evitar pérdida de centavos
        var ultimaMonto = parseFloat((precioTotal - suma).toFixed(2));
        this.fechas[numCuotas - 1].monto = ultimaMonto.toFixed(2);
      }
    },
    guardar: function guardar() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var nombreMembresiaSeleccionada, pkg, datos, servidor, respuesta;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_this7.pacienteElegido.id) {
                _context5.next = 3;
                break;
              }
              alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-solid fa-bomb"></i> Seleccione un paciente', 'danger', 10);
              return _context5.abrupt("return", false);
            case 3:
              if (_this7.membresia.tipo) {
                _context5.next = 6;
                break;
              }
              alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-solid fa-bomb"></i> Seleccione un paquete válido', 'danger', 10);
              return _context5.abrupt("return", false);
            case 6:
              if (!(_this7.membresia.cuotas <= 0)) {
                _context5.next = 9;
                break;
              }
              alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-solid fa-bomb"></i> El número de cuotas mínimo debe ser 1', 'danger', 10);
              return _context5.abrupt("return", false);
            case 9:
              if (_this7.membresia.fin) {
                _context5.next = 12;
                break;
              }
              alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-solid fa-bomb"></i> Ingrese el último día del paquete', 'danger', 10);
              return _context5.abrupt("return", false);
            case 12:
              if (!(_this7.membresia.descuento > 0 && _this7.comentarios == '')) {
                _context5.next = 17;
                break;
              }
              alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-solid fa-bomb"></i> Debe agregar un motivo por el descuento', 'danger', 10);
              return _context5.abrupt("return", false);
            case 17:
              _this7.comentarios = _this7.membresia.descuento > 0 ? 'Descuento por: S/ ' + _this7.membresia.descuento + ' ' + _this7.comentarios : _this7.comentarios;
            case 18:
              _this7.guardando = true;
              nombreMembresiaSeleccionada = '';
              pkg = _this7.precios.find(function (p) {
                return p.id == _this7.membresia.tipo;
              });
              if (pkg) nombreMembresiaSeleccionada = pkg.descripcion;
              datos = new FormData();
              datos.append('idPaciente', _this7.pacienteElegido.id);
              datos.append('customer', _this7.pacienteElegido.name + ' ' + _this7.pacienteElegido.nombres);
              datos.append('motivo', _this7.pacienteElegido.id);
              datos.append('membresia', JSON.stringify(_this7.membresia));
              datos.append('user_id', _this7.idUsuario);
              datos.append('nombreMembresia', nombreMembresiaSeleccionada);
              datos.append('fechas', JSON.stringify(_this7.fechas));
              datos.append('fechas_membresias', JSON.stringify(_this7.sesionesAcumuladas));
              datos.append('comentarios', _this7.comentarios);
              datos.append('meses', _this7.cantMeses);
              datos.append('num_sesion', 0);
              datos.append('descuento', _this7.membresia.descuento);
              console.log('--- ENVIANDO MEMBRESÍA DESDE EL FRONTEND ---');
              console.log('idPaciente:', _this7.pacienteElegido.id);
              console.log('membresia:', _this7.membresia);
              console.log('fechas:', _this7.fechas);
              _context5.prev = 39;
              _context5.next = 42;
              return fetch('/api/guardarMembresia', {
                method: 'POST',
                body: datos,
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
              });
            case 42:
              servidor = _context5.sent;
              _context5.next = 45;
              return servidor.json();
            case 45:
              respuesta = _context5.sent;
              _this7.guardando = false;
              if (respuesta.mensaje) {
                _this7.limpiarFormulario();
                $('#modalMembresias').modal('hide');
                _this7.$swal({
                  title: 'Se guardó el paquete',
                  showConfirmButton: false,
                  icon: 'success',
                  timer: 1000
                });
                alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-regular fa-calendar-check"></i> Paquete guardado', 'success', 10);
                _this7.$emit('membresiaGuardada');
              } else {
                alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-regular fa-bomb"></i> Hubo un error guardando', 'danger', 10);
              }
              _context5.next = 55;
              break;
            case 50:
              _context5.prev = 50;
              _context5.t0 = _context5["catch"](39);
              console.error(_context5.t0);
              _this7.guardando = false;
              alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-regular fa-bomb"></i> Hubo un error de conexión', 'danger', 10);
            case 55:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[39, 50]]);
      }))();
    },
    fechaLatam: function fechaLatam(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).format('DD/MM/YYYY');
    },
    horaLatam1: function horaLatam1(horita) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(horita, 'HH:mm:ss').format('hh:mm');
    },
    horaLatam2: function horaLatam2(horita) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(horita, 'HH:mm:ss').format('hh:mm a');
    },
    notifica: function notifica() {
      console.info('notificado');
    }
  },
  computed: {
    descripcionPaqueteElegido: function descripcionPaqueteElegido() {
      var _this8 = this;
      var paquete = this.precios.find(function (x) {
        return x.id == _this8.membresia.tipo;
      });
      return paquete ? paquete.descripcion : '';
    },
    mostrarPrecio: function mostrarPrecio() {
      var _this9 = this;
      var nuevos = this.precios.find(function (x) {
        return x.id == _this9.membresia.tipo;
      });
      return nuevos ? parseFloat(nuevos.nuevos).toFixed(2) : 0;
    },
    subTotal: function subTotal() {
      if (this.membresia.cuotas == '1') {
        return this.membresia.precio;
      } else {
        var sum = this.fechas.reduce(function (acc, item) {
          return acc + parseFloat(item.monto);
        }, 0);
        return sum.toFixed(2);
      }
    },
    cuentaMes: function cuentaMes() {
      moment__WEBPACK_IMPORTED_MODULE_0___default().locale('es');
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(this.membresia.fin).fromNow();
    },
    cantSesiones: function cantSesiones() {
      var _this10 = this;
      var precio = this.precios.find(function (x) {
        return x.id == _this10.membresia.tipo;
      });
      return precio ? precio.sesiones : '';
    },
    cantMeses: function cantMeses() {
      var _this11 = this;
      var precio = this.precios.find(function (x) {
        return x.id == _this11.membresia.tipo;
      });
      return precio ? precio.meses : 0;
    },
    mostrarOpciones: function mostrarOpciones() {
      if (this.selectedTipoPaquete === 'otros' && this.selectedEspecialidadPaquete) return true;
      if ((this.selectedTipoPaquete === 'sesiones' || this.selectedTipoPaquete === 'tiempo') && this.selectedEspecialidadPaquete && this.selectedPublicoPaquete) return true;
      return false;
    },
    opcionesDisponibles: function opcionesDisponibles() {
      var _this12 = this;
      if (!this.selectedTipoPaquete || !this.selectedEspecialidadPaquete) return [];
      if (this.selectedTipoPaquete !== 'otros' && !this.selectedPublicoPaquete) return [];

      // Filtrar todos los precios que coincidan con la combinación actual
      var paquetes = this.precios.filter(function (p) {
        return p.paquete_tipo === _this12.selectedTipoPaquete && p.paquete_especialidad === _this12.selectedEspecialidadPaquete && (_this12.selectedTipoPaquete === 'otros' || p.paquete_publico === _this12.selectedPublicoPaquete || p.paquete_publico === 'ambos' || !p.paquete_publico);
      });

      // Extraer los subtipos únicos ignorando nulos/indefinidos
      var subtipos = _toConsumableArray(new Set(paquetes.map(function (p) {
        return p.paquete_subtipo;
      }))).filter(Boolean);

      // Ordenamiento inteligente
      subtipos.sort(function (a, b) {
        var numA = parseInt(a);
        var numB = parseInt(b);
        if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
        return String(a).localeCompare(String(b));
      });
      return subtipos;
    }
  },
  mounted: function mounted() {
    this.preciosMembresias();
    this.cargarMonedas();
    this.$on('alertaSimple', this.notifica());
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'offAdjunto',
  props: ['id', 'foto', 'habilitarEliminado'],
  data: function data() {
    return {
      fotoNueva: ''
    };
  },
  methods: {
    subirArchivo: function subirArchivo() {
      var _this = this;
      var file = document.querySelector('#fileArchivo');
      var formData = new FormData();
      formData.append('file', file.files[0]);
      formData.append('idPago', this.id);
      this.axios.post('/api/subirArchivoPago/', formData).then(function (response) {
        var _response$data$archiv;
        return _this.fotoNueva = (_response$data$archiv = response.data.archivo) !== null && _response$data$archiv !== void 0 ? _response$data$archiv : '';
      })["catch"](function (error) {
        console.log(error);
      });
    },
    eliminarAdjunto: function eliminarAdjunto() {
      var _this2 = this;
      if (confirm('¿Desea eliminar el adjunto?')) this.axios.post('/api/eliminarAdjunto/' + this.id, {
        archivo: this.fotoNueva
      }).then(function (res) {
        if (res.data.mensaje) {
          _this2.fotoNueva = '';
          alertify.notify('Comprobante borrado', 'success', 10);
        } else {
          alertify.notify('Hubo un error borrando', 'danger', 10);
        }
      });
    }
  },
  mounted: function mounted() {},
  watch: {
    foto: function foto() {
      this.fotoNueva = this.foto;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue?vue&type=template&id=1c4995a6":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue?vue&type=template&id=1c4995a6 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "egresosExtras",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered modal-sm",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
      }
    }
  }, [_c("div", {
    staticClass: "form-group row mb-0"
  }, [_c("div", {
    staticClass: "col-sm-12 mb-0"
  }, [_c("label", {
    attrs: {
      "for": "date"
    }
  }, [_vm._v("Fecha: " + _vm._s(_vm.fechaLatam(_vm.form.date)))])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 d-none"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "customer"
    }
  }, [_vm._v("Cliente")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.customer,
      expression: "form.customer"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "customer",
      required: "",
      id: "customer"
    },
    domProps: {
      value: _vm.form.customer
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "customer", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "price"
    }
  }, [_vm._v("Precio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.price,
      expression: "form.price"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      name: "price",
      required: "",
      id: "price"
    },
    domProps: {
      value: _vm.form.price
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "price", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "price"
    }
  }, [_vm._v("Comprobante")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.comprobante,
      expression: "form.comprobante"
    }],
    staticClass: "form-select",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "comprobante", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.cambiarComprobante();
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("Sin comprobante")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Boleta")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Factura")])])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.form.comprobante != 0,
      expression: "form.comprobante!=0"
    }],
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "price"
    }
  }, [_vm._v("Serie - Correlativo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.serie,
      expression: "form.serie"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.serie
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "serie", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row mb-2 d-none"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_c("label", {
    attrs: {
      "for": "type"
    }
  }, [_vm._v("Tipo de pago")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.type,
      expression: "form.type"
    }],
    staticClass: "form-select",
    attrs: {
      id: "type",
      required: "",
      name: "type"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "6",
      selected: ""
    }
  }, [_vm._v("Salida de dinero")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Observación")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.observation,
      expression: "form.observation"
    }],
    staticClass: "form-control",
    attrs: {
      name: "observation",
      id: "observation",
      rows: "2"
    },
    domProps: {
      value: _vm.form.observation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "observation", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("button", {
    staticClass: "btn btn-outline-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Salir")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-danger",
    attrs: {
      type: "submit",
      "data-bs-dismiss": "modal"
    },
    on: {
      click: _vm.saveData
    }
  }, [_c("i", {
    staticClass: "fas fa-minus-circle"
  }), _vm._v(" Guardar egreso")])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header border-0"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v("Egresos Extras")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      id: "cerrModal",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue?vue&type=template&id=4d0e8d05":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue?vue&type=template&id=4d0e8d05 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "pagoExtras",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered modal-sm",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
      }
    }
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-sm-12 mb-0"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Dni")]), _vm._v(" "), _c("div", {
    staticClass: "input-group mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.dni,
      expression: "form.dni"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "dni",
      id: "dni",
      autocomplete: "off",
      placeholder: "Dni del paciente"
    },
    domProps: {
      value: _vm.form.dni
    },
    on: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.reniec();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "dni", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-secondary",
    attrs: {
      type: "button",
      id: "button-addon2"
    },
    on: {
      click: function click($event) {
        return _vm.reniec();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-search"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 mb-0"
  }, [_c("label", {
    attrs: {
      "for": "date"
    }
  }, [_vm._v("Fecha: " + _vm._s(_vm.fechaLatam(_vm.form.date)))])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12",
    attrs: {
      id: "divClienteNuevo"
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "customer"
    }
  }, [_vm._v("Cliente")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.customer,
      expression: "form.customer"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "customer",
      required: "",
      id: "customer",
      autocomplete: "off",
      readonly: ""
    },
    domProps: {
      value: _vm.form.customer
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "customer", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "price"
    }
  }, [_vm._v("Precio (S/)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.price,
      expression: "form.price"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      name: "price",
      required: "",
      id: "price"
    },
    domProps: {
      value: _vm.form.price
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "price", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 d-none"
  }, [_c("label", {
    attrs: {
      "for": "type"
    }
  }, [_vm._v("Tipo de pago")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.type,
      expression: "form.type"
    }],
    staticClass: "form-select",
    attrs: {
      id: "type",
      required: "",
      name: "type"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Otros")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "type"
    }
  }, [_vm._v("Moneda")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.moneda,
      expression: "form.moneda"
    }],
    staticClass: "form-select",
    attrs: {
      id: "type",
      required: "",
      name: "type"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "moneda", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.monedas, function (moneda) {
    return _c("option", {
      domProps: {
        value: moneda.id
      }
    }, [_vm._v(_vm._s(moneda.tipo))]);
  }), 0)]), _vm._v(" "), _vm.form.moneda != 1 ? _c("div", {
    staticClass: "col-sm-12"
  }, [_c("label", {
    attrs: {
      "for": "type"
    }
  }, [_vm._v("N° de operación")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.voucher_issued,
      expression: "form.voucher_issued"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.voucher_issued
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "voucher_issued", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Observación")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.observation,
      expression: "form.observation"
    }],
    staticClass: "form-control",
    attrs: {
      name: "observation",
      id: "observation",
      rows: "2"
    },
    domProps: {
      value: _vm.form.observation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "observation", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("button", {
    staticClass: "btn btn-outline-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Salir")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      type: "submit",
      "data-bs-dismiss": "modal"
    },
    on: {
      click: _vm.saveData
    }
  }, [_c("i", {
    staticClass: "fas fa-plus-circle"
  }), _vm._v(" Guardar ingreso")])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header border-0"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v("Nuevo Ingreso Extra")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      id: "cerrModal",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=template&id=0725e1b0&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=template&id=0725e1b0&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "d-sm-flex align-items-center justify-content-between mb-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-center d-print-none"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.$attrs.idSede,
      expression: "$attrs.idSede"
    }],
    staticClass: "form-select mx-1",
    attrs: {
      id: "sltSede",
      disabled: ""
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.$attrs, "idSede", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Sede Principal")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Sede San Carlos")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fecha,
      expression: "fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.fecha
    },
    on: {
      change: _vm.selectDate,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.fecha = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "m-4 d-print-none"
  }, [_c("button", {
    staticClass: "btn-premium btn-export",
    on: {
      click: function click($event) {
        return _vm.exportar();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file-excel"
  }), _vm._v(" Exportar")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm.consultarFecha() ? _c("button", {
    staticClass: "btn-premium btn-print",
    on: {
      click: function click($event) {
        return _vm.verTicketCierre();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-print"
  }), _vm._v(" Ticket")]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn-premium btn-refresh",
    on: {
      click: function click($event) {
        return _vm.actualizar();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-sync"
  }), _vm._v(" Actualizar")])])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3 mt-3 d-print-none"
  }, [_c("div", {
    staticClass: "col-md-3 mb-2"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm rounded p-3 h-100"
  }, [_vm._m(2), _vm._v(" "), _c("h4", {
    staticClass: "mb-0 text-success fw-bold"
  }, [_vm._v("S/ " + _vm._s(parseFloat(_vm.totalIngresosStats).toFixed(2)))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-2"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm rounded p-3 h-100"
  }, [_vm._m(3), _vm._v(" "), _c("h4", {
    staticClass: "mb-0 text-danger fw-bold"
  }, [_vm._v("S/ " + _vm._s(parseFloat(_vm.totalEgresosStats).toFixed(2)))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-2"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm rounded p-3 h-100"
  }, [_vm._m(4), _vm._v(" "), _c("h4", {
    staticClass: "mb-0 text-primary fw-bold"
  }, [_vm._v("S/ " + _vm._s(parseFloat(_vm.netoDiaStats).toFixed(2)))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-2"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm rounded p-3 h-100 pb-2"
  }, [_vm._m(5), _vm._v(" "), _c("h4", {
    staticClass: "mb-0 text-dark fw-bold"
  }, [_vm._v("S/ " + _vm._s(parseFloat(_vm.totalCitasCobradas).toFixed(2)))]), _vm._v(" "), _c("div", {
    staticClass: "text-muted mt-1",
    staticStyle: {
      "font-size": "0.8rem"
    }
  }, [_vm._v("Adelantos: S/ " + _vm._s(parseFloat(_vm.totalAdelantos).toFixed(2)))])])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex mb-3 gap-2 flex-wrap d-print-none"
  }, _vm._l(_vm.filtrosPills, function (filtro) {
    return _c("button", {
      key: filtro,
      staticClass: "btn rounded-pill border-0 px-3 py-1",
      "class": _vm.filtroActual === filtro ? "btn-primary" : "bg-light text-muted",
      staticStyle: {
        "font-size": "0.85rem",
        "font-weight": "500"
      },
      on: {
        click: function click($event) {
          _vm.filtroActual = filtro;
        }
      }
    }, [_vm._v("\n\t\t\t" + _vm._s(filtro) + "\n\t\t")]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "card px-1 pt-2"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table-pagos mt-1",
    attrs: {
      id: "table_export"
    }
  }, [_vm._m(6), _vm._v(" "), _c("tbody", _vm._l(_vm.unifiedTransactions, function (transaction) {
    return _c("tr", {
      key: transaction.id
    }, [_c("td", [_c("span", {
      staticClass: "ticket-id"
    }, [_vm._v("T-" + _vm._s(String(transaction.id).padStart(3, "0")))])]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "hora-txt"
    }, [_vm._v(_vm._s(transaction.horario || _vm.horaLatam(transaction.created_at)))])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "concepto-container"
    }, [_c("div", {
      staticClass: "icon-box",
      "class": transaction.iconBoxClass
    }, [_c("i", {
      staticClass: "fas",
      "class": transaction.displayIcon
    })]), _vm._v(" "), _c("div", {
      staticClass: "concepto-info"
    }, [_c("span", {
      staticClass: "title"
    }, [_vm._v(_vm._s(transaction.displayTitle))]), _vm._v(" "), _c("span", {
      staticClass: "subtitle"
    }, [_vm._v(_vm._s(_vm.fechaLatam(transaction.fechaCita || transaction.created_at)))])])])]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge-custom",
      "class": transaction.displayBadgeClass
    }, [_vm._v(_vm._s(transaction.displayType))])]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(transaction.profesional_name || "—"))])]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge bg-light text-muted fw-normal"
    }, [_vm._v(_vm._s(_vm.queMoneda(transaction.moneda)))])]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "text-muted small"
    }, [_vm._v(_vm._s(transaction.voucher_issued || "—"))])]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "monto-txt",
      "class": transaction.isIncome ? "monto-positivo" : "monto-negativo"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(transaction.isIncome ? "+" : "-") + "S/ " + _vm._s(_vm.retornarFloat(Math.abs(transaction.displayAmount))) + "\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("div", {
      staticClass: "d-flex justify-content-center gap-1"
    }, [transaction.source === "payments" ? _c("a", {
      staticClass: "btn-action",
      attrs: {
        target: "_blank",
        href: "/api/pdfExtraCupon/".concat(transaction.id, "?token=").concat(_vm.token),
        title: "Ver PDF"
      }
    }, [_c("i", {
      staticClass: "far fa-eye"
    })]) : _c("a", {
      staticClass: "btn-action",
      attrs: {
        target: "_blank",
        href: "/api/pdfExtraCupon/".concat(transaction.id, "?token=").concat(_vm.token),
        title: "Ver PDF"
      }
    }, [_c("i", {
      staticClass: "far fa-eye"
    })]), _vm._v(" "), _vm.consultarFecha() ? _c("button", {
      staticClass: "btn-action",
      attrs: {
        title: "Editar",
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalEditarPago"
      },
      on: {
        click: function click($event) {
          return _vm.editar(transaction.originalIndex);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-pencil-alt"
    })]) : _vm._e(), _vm._v(" "), _c("button", {
      staticClass: "btn-action",
      attrs: {
        "data-bs-toggle": "offcanvas",
        "data-bs-target": "#offAdjunto",
        title: "Adjuntar archivo"
      },
      on: {
        click: function click($event) {
          return _vm.verAdjunto(transaction.id);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-paperclip"
    })]), _vm._v(" "), _c("div", {
      staticClass: "dropdown dropdown-action d-inline-block"
    }, [_vm._m(7, true), _vm._v(" "), _c("ul", {
      staticClass: "dropdown-menu dropdown-menu-end"
    }, [_c("li", [_vm.esAdmin && transaction.source === "payments" ? _c("button", {
      staticClass: "dropdown-item",
      attrs: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalDividirPago"
      },
      on: {
        click: function click($event) {
          _vm.pagoSeleccionado = transaction;
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-divide"
    }), _vm._v(" Dividir pago\n\t\t\t\t\t\t\t\t\t\t\t")]) : _vm._e()]), _vm._v(" "), _c("li", [transaction.source === "payments" ? _c("button", {
      staticClass: "dropdown-item",
      attrs: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalFacturacion"
      },
      on: {
        click: function click($event) {
          _vm.pagoSeleccionado = transaction;
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-file-invoice"
    }), _vm._v(" Facturación SUNAT\n\t\t\t\t\t\t\t\t\t\t\t")]) : _vm._e()]), _vm._v(" "), _c("li", [_vm.esAdmin ? _c("hr", {
      staticClass: "dropdown-divider"
    }) : _vm._e()]), _vm._v(" "), _c("li", [_vm.esAdmin ? _c("button", {
      staticClass: "dropdown-item text-danger",
      attrs: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalMotivoBorrar"
      },
      on: {
        click: function click($event) {
          return _vm.mostrarModalBorrar(transaction.id, transaction.originalIndex);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-trash-alt text-danger"
    }), _vm._v(" Eliminar\n\t\t\t\t\t\t\t\t\t\t\t")]) : _vm._e()])])])])])]);
  }), 0)])]), _vm._v(" "), _vm.unifiedTransactions.length > 0 ? _c("div", {
    staticClass: "row mt-4 mb-4"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm p-3 d-flex flex-column h-100"
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "flex-grow-1"
  }, _vm._l(_vm.sumaTipos, function (tipo) {
    return _c("div", {
      key: tipo.moneda,
      staticClass: "d-flex justify-content-between mb-1"
    }, [_c("span", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(tipo.moneda) + ":")]), _vm._v(" "), _c("span", {
      staticClass: "fw-bold"
    }, [_vm._v("S/ " + _vm._s(tipo.suma.toFixed(2)))])]);
  }), 0), _vm._v(" "), _c("hr", {
    staticClass: "mt-3"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mt-auto"
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("Total Ingresos:")]), _vm._v(" "), _c("span", {
    staticClass: "text-primary fw-bold"
  }, [_vm._v("S/ " + _vm._s(parseFloat(_vm.suma).toFixed(2)))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm p-3 d-flex flex-column h-100"
  }, [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "flex-grow-1"
  }, _vm._l(_vm.sumaSalidas, function (tipo) {
    return _c("div", {
      key: tipo.moneda,
      staticClass: "d-flex justify-content-between mb-1"
    }, [_c("span", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(tipo.moneda) + ":")]), _vm._v(" "), _c("span", {
      staticClass: "fw-bold"
    }, [_vm._v("S/ " + _vm._s(tipo.suma.toFixed(2)))])]);
  }), 0), _vm._v(" "), _c("hr", {
    staticClass: "mt-3"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mt-auto"
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("Total Egresos:")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger fw-bold"
  }, [_vm._v("S/ " + _vm._s(parseFloat(_vm.sumaSal).toFixed(2)))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm p-3 d-flex flex-column h-100"
  }, [_vm._m(10), _vm._v(" "), _c("div", {
    staticClass: "flex-grow-1"
  }, _vm._l(_vm.saldoNetoPorMoneda, function (tipo) {
    return _c("div", {
      key: tipo.moneda,
      staticClass: "d-flex justify-content-between mb-1"
    }, [_c("span", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(tipo.moneda) + ":")]), _vm._v(" "), _c("span", {
      "class": tipo.suma >= 0 ? "text-success fw-bold" : "text-danger fw-bold"
    }, [_vm._v("S/ " + _vm._s(tipo.suma.toFixed(2)))])]);
  }), 0), _vm._v(" "), _c("hr", {
    staticClass: "mt-3"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mt-auto"
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("Saldo Neto:")]), _vm._v(" "), _c("span", {
    "class": _vm.totalSaldoNeto >= 0 ? "text-success fw-bold" : "text-danger fw-bold"
  }, [_vm._v("S/ " + _vm._s(_vm.totalSaldoNeto.toFixed(2)))])])])])]) : _vm._e(), _vm._v(" "), _vm.eliminados.length > 0 ? _c("p", {
    staticClass: "mt-2 text-danger"
  }, [_c("strong", [_vm._v("Pagos eliminados")])]) : _vm._e(), _vm._v(" "), _vm.eliminados.length > 0 ? _c("table", {
    staticClass: "table table-hover w-100 mt-1",
    attrs: {
      id: "table_eliminados"
    }
  }, [_c("thead", {}, [_vm._m(11), _vm._v(" "), _c("tr", [_vm.tienePrivilegios == "1" ? _c("td", {
    staticClass: "text-danger d-print-none"
  }, [_vm._v("@")]) : _vm._e(), _vm._v(" "), _c("td", {
    staticClass: "text-danger"
  }, [_vm._v("N°")]), _vm._v(" "), _vm._m(12), _vm._v(" "), _c("td", {
    staticClass: "text-danger"
  }, [_vm._v("Fact. Bol.")]), _vm._v(" "), _c("td", {
    staticClass: "text-danger"
  }, [_vm._v("Ticket")]), _vm._v(" "), _c("td", {
    staticClass: "text-danger"
  }, [_vm._v("Cliente - Motivo")]), _vm._v(" "), _c("td", {
    staticClass: "text-danger"
  }, [_vm._v("Tipo")]), _vm._v(" "), _c("td", {
    staticClass: "text-danger"
  }, [_vm._v("Obs.")]), _vm._v(" "), _c("td", {
    staticClass: "text-danger"
  }, [_vm._v("Monto")]), _vm._v(" "), _c("td", {
    staticClass: "text-danger"
  }, [_vm._v("Moneda")]), _vm._v(" "), _c("td", {
    staticClass: "text-danger"
  }, [_vm._v("Medio de pago")]), _vm._v(" "), _c("td", {
    staticClass: "text-danger"
  }, [_vm._v("N° Op.")]), _vm._v(" "), _c("td", {
    staticClass: "text-danger"
  }, [_vm._v("Hora")]), _vm._v(" "), _c("td", {
    staticClass: "text-danger d-print-none"
  }, [_vm._v("@")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.eliminados, function (payment, index) {
    var _payment$price, _payment$price2, _payment$price3;
    return _c("tr", [_c("td", [_c("span", [_vm._v(_vm._s(index + 1))])]), _vm._v(" "), payment.usuario ? _c("td", {
      staticStyle: {
        "white-space": "nowrap"
      },
      attrs: {
        title: payment.usuario.nombre,
        "data-bs-toggle": "tooltip",
        "data-bs-placement": "top",
        "data-bs-title": payment.usuario.nombre
      }
    }, [_c("i", {
      staticClass: "far fa-user"
    }), _vm._v(" " + _vm._s(_vm._f("formatedDate")(payment.created_at)))]) : _c("td", {
      staticStyle: {
        "white-space": "nowrap"
      },
      attrs: {
        title: "Sin datos",
        "data-bs-toggle": "tooltip",
        "data-bs-placement": "top",
        "data-bs-title": "Sin datos"
      }
    }, [_vm._v(_vm._s(_vm._f("formatedDate")(payment.created_at)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(payment.voucher))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(payment.id))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(payment.customer) + " "), payment.observation != "" && payment.observacion != null ? _c("span", [_c("br"), _vm._v("Obs. " + _vm._s(payment.observation))]) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "text-danger"
    }, [_c("br"), _c("strong", [_vm._v("Motivo: ")]), _vm._v(_vm._s(payment.razon))])]), _vm._v(" "), _c("td", [payment.continuo == "1" ? _c("span", [_vm._v("N")]) : payment.continuo == "2" ? _c("span", [_vm._v("C")]) : payment.continuo == "3" ? _c("span", [_vm._v("M")]) : _c("span", [payment.continuo == "-1" ? _c("span", [_vm._v("X")]) : _vm._e(), _vm._v(" "), payment.continuo == null ? _c("span", [_vm._v("X")]) : _vm._e()])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(payment.observation))]), _vm._v(" "), _c("td", {
      "class": {
        "text-danger": payment.type == 6 || parseFloat((_payment$price = payment.price) !== null && _payment$price !== void 0 ? _payment$price : 0) < 0,
        "text-primary": payment.type != 6 && parseFloat((_payment$price2 = payment.price) !== null && _payment$price2 !== void 0 ? _payment$price2 : 0) >= 0
      }
    }, [_vm._v("S/ "), payment.type == 6 || parseFloat((_payment$price3 = payment.price) !== null && _payment$price3 !== void 0 ? _payment$price3 : 0) < 0 ? _c("span", [_vm._v("-")]) : _vm._e(), _vm._v(" " + _vm._s(_vm.retornarFloat(Math.abs(payment.price))))]), _vm._v(" "), _c("td", [payment.type == 6 ? _c("span", [_vm._v("Salida de dinero")]) : _vm._e(), _vm._v(" "), payment.type == 5 ? _c("span", [_vm._v("Pago de cita")]) : _vm._e(), _vm._v(" "), payment.type == 3 ? _c("span", [_vm._v("Informe")]) : _vm._e(), _vm._v(" "), payment.type == 2 ? _c("span", [_vm._v("Paquete Kurame")]) : _vm._e(), _vm._v(" "), payment.type == 1 ? _c("span", [_vm._v("Paquete")]) : _vm._e(), _vm._v(" "), payment.type == 0 ? _c("span", [_vm._v("Certificado")]) : _vm._e()]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_c("span", [_vm._v(_vm._s(_vm.queMoneda(payment.moneda)))])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(payment.voucher_issued))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(payment.profesional_name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.horaLatam(payment.created_at)))]), _vm._v(" "), _c("td", {
      staticClass: "d-print-none",
      staticStyle: {
        "white-space": "nowrap"
      }
    }, [_c("button", {
      staticClass: "btn btn-outline-success btn-sm",
      attrs: {
        "data-bs-toggle": "offcanvas",
        "data-bs-target": "#offAdjunto",
        title: "Adjuntar archivo"
      },
      on: {
        click: function click($event) {
          return _vm.verAdjunto(payment.id);
        }
      }
    }, [_c("i", {
      staticClass: "far fa-file"
    })]), _vm._v(" "), payment.appointment_id !== 0 ? _c("a", {
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        target: "_blank",
        href: "/api/pdfCupon/".concat(payment.appointment_id, "?token=").concat(_vm.token)
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-file-pdf"
    }), _vm._v(" PDF")]) : _c("a", {
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        target: "_blank",
        href: "/api/pdfExtraCupon/".concat(payment.id, "?token=").concat(_vm.token)
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-file-pdf"
    }), _vm._v(" PDF")])])]);
  }), 0)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalMotivoBorrar",
      tabindex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(13), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("p", {
    staticClass: "mb-0"
  }, [_vm._v("Esta a punto de eliminar el pago:")]), _vm._v(" "), _c("p", {
    staticClass: "fst-italic mb-0 text-capitalize"
  }, [_vm._v(_vm._s(_vm.contenido))]), _vm._v(" "), _c("p", [_vm._v("Ingrese una razón para borrar")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.razon,
      expression: "razon"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.razon
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.razon = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-danger",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    },
    on: {
      click: function click($event) {
        return _vm.borrarPagoExtra();
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-trash"
  }), _vm._v(" Eliminar pago")])])])])]), _vm._v(" "), _c("ModalMembresias", {
    attrs: {
      idUsuario: _vm.idUsuario,
      vista: "buscar"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalEditarPago",
      tabindex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-sm"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(14), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Método de pago")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.caso.moneda,
      expression: "caso.moneda"
    }],
    staticClass: "form-select",
    attrs: {
      id: "pay_status",
      name: "pay_status"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.caso, "moneda", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.monedas, function (moneda) {
    return _c("option", {
      domProps: {
        value: moneda.id
      }
    }, [_vm._v(_vm._s(moneda.tipo))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N° de Operación")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.caso.comprobante,
      expression: "caso.comprobante"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.caso.comprobante
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.caso, "comprobante", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Tipo de comprobante")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.caso.tipo,
      expression: "caso.tipo"
    }],
    staticClass: "form-select",
    attrs: {
      id: "sltTipoComprobante"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.caso, "tipo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Factura")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Contrato")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Boleta de venta")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Recibo por honorarios")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "-1"
    }
  }, [_vm._v("Ninguno")])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.caso.tipo != -1,
      expression: "caso.tipo!=-1"
    }],
    staticClass: "col-sm-12"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Boleta / Factura")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.caso.boleta,
      expression: "caso.boleta"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.caso.boleta
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.caso, "boleta", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Observación")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.caso.observacion,
      expression: "caso.observacion"
    }],
    staticClass: "form-control",
    attrs: {
      name: "observation",
      id: "observation",
      cols: "10",
      rows: "2"
    },
    domProps: {
      value: _vm.caso.observacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.caso, "observacion", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    },
    on: {
      click: function click($event) {
        return _vm.editarPagoExtra();
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-rotate-right"
  }), _vm._v(" Actualizar pago")])])])])])]), _vm._v(" "), _c("modal-pagos-extras", {
    attrs: {
      idUsuario: _vm.$attrs.idUser,
      idSede: _vm.$attrs.idSede
    }
  }), _vm._v(" "), _c("modal-egresos-extras", {
    attrs: {
      idUsuario: _vm.$attrs.idUser,
      nombreUser: _vm.$attrs.nombreUser,
      idSede: _vm.$attrs.idSede
    }
  }), _vm._v(" "), _c("OffcanvasAdjuntos", {
    attrs: {
      id: _vm.idSeleccionado,
      foto: _vm.foto,
      habilitarEliminado: _vm.habilitarEliminado
    }
  }), _vm._v(" "), _vm.pagoSeleccionado ? _c("ModalDividirPago", {
    attrs: {
      pago: _vm.pagoSeleccionado,
      idUsuario: _vm.$attrs.idUser
    }
  }) : _vm._e(), _vm._v(" "), _vm.pagoSeleccionado ? _c("ModalFacturacion", {
    attrs: {
      idSede: _vm.$attrs.idSede,
      pago: _vm.pagoSeleccionado
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn-premium btn-ingreso",
    attrs: {
      "data-bs-toggle": "modal",
      "data-bs-target": "#pagoExtras"
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Ingresos")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn-premium btn-egreso",
    attrs: {
      "data-bs-toggle": "modal",
      "data-bs-target": "#egresosExtras"
    }
  }, [_c("i", {
    staticClass: "fas fa-minus"
  }), _vm._v(" Egresos")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-muted small mb-1"
  }, [_c("i", {
    staticClass: "fas fa-arrow-trend-up text-success me-1"
  }), _vm._v(" Total Ingresos")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-muted small mb-1"
  }, [_c("i", {
    staticClass: "fas fa-arrow-trend-down text-danger me-1"
  }), _vm._v(" Total Egresos")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-muted small mb-1"
  }, [_c("i", {
    staticClass: "fas fa-money-bill-wave text-primary me-1"
  }), _vm._v(" Neto del Día")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-muted small mb-1"
  }, [_c("i", {
    staticClass: "far fa-calendar-check text-secondary me-1"
  }), _vm._v(" Citas Cobradas")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Ticket")]), _vm._v(" "), _c("th", [_vm._v("Hora")]), _vm._v(" "), _c("th", [_vm._v("Concepto")]), _vm._v(" "), _c("th", [_vm._v("Tipo")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("Método")]), _vm._v(" "), _c("th", [_vm._v("Nro. Op.")]), _vm._v(" "), _c("th", [_vm._v("Monto")]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v("Acciones")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn-action dropdown-toggle",
    attrs: {
      type: "button",
      "data-bs-toggle": "dropdown"
    }
  }, [_c("i", {
    staticClass: "fas fa-ellipsis-v"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", {
    staticClass: "text-primary fw-bold mb-3"
  }, [_c("i", {
    staticClass: "fas fa-list-check me-2"
  }), _vm._v("Resumen por Moneda (Ingresos)")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", {
    staticClass: "text-danger fw-bold mb-3"
  }, [_c("i", {
    staticClass: "fas fa-list-check me-2"
  }), _vm._v("Resumen por Moneda (Egresos)")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", {
    staticClass: "text-success fw-bold mb-3"
  }, [_c("i", {
    staticClass: "fas fa-wallet me-2"
  }), _vm._v("Saldo Neto de Caja")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {}, [_c("th", {
    staticClass: "text-danger",
    attrs: {
      colspan: "15"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-right"
  }), _vm._v("  Cuadro anulados")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-danger"
  }, [_c("i", {
    staticClass: "far fa-user"
  }), _vm._v(" | Registro")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h1", {
    staticClass: "modal-title fs-5",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v("Borrar pago")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h1", {
    staticClass: "modal-title fs-5",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v("Editar pago")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue?vue&type=template&id=3cc39d1c":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue?vue&type=template&id=3cc39d1c ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalDividirPago",
      tabindex: "-1",
      role: "dialog",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content modal-sm"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("form", {
    attrs: {
      action: ""
    }
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Cliente")]), _vm._v(" "), _c("p", {
    staticClass: "small"
  }, [_vm._v(_vm._s(_vm.pago.customer))])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Monto base")]), _vm._v(" "), _c("p", {
    staticClass: "small"
  }, [_vm._v("S/ " + _vm._s(parseFloat(_vm.pago.price).toFixed(2)))])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nuevo monto")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.caso.monto,
      expression: "caso.monto"
    }],
    staticClass: "form-control",
    attrs: {
      type: "numeric"
    },
    domProps: {
      value: _vm.caso.monto
    },
    on: {
      change: function change($event) {
        return _vm.minimo();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.caso, "monto", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nuevo método de pago")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.caso.moneda,
      expression: "caso.moneda"
    }],
    staticClass: "form-select",
    attrs: {
      id: "pay_status",
      name: "pay_status"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.caso, "moneda", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.monedas, function (moneda) {
    return _c("option", {
      domProps: {
        value: moneda.id
      }
    }, [_vm._v(_vm._s(moneda.tipo))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Motivo de la división")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.caso.observacion,
      expression: "caso.observacion"
    }],
    staticClass: "form-control",
    attrs: {
      name: "observation",
      id: "observation",
      cols: "10",
      rows: "2"
    },
    domProps: {
      value: _vm.caso.observacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.caso, "observacion", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      "data-dismiss": "modal",
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.save();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Dividir pago")])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v("Dividir Pago")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      id: "cerrModalDividir",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=template&id=e3a1cbea":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=template&id=e3a1cbea ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$pago, _vm$pago2, _vm$pago3;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalFacturacion",
      tabindex: "-1",
      role: "dialog",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "row row-cols-2"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "card impresionComprobante",
    on: {
      click: function click($event) {
        return _vm.imprimirTicket();
      }
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {}, [_c("div", {
    staticClass: "text-center"
  }, [_c("img", {
    staticClass: "mx-auto",
    staticStyle: {
      width: "35px"
    },
    attrs: {
      src: __webpack_require__(/*! ../../../../../img/pdf_logo.jpg */ "./public/img/pdf_logo.jpg"),
      alt: ""
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mb-0"
  }, [_vm._v("Ticket Interno")]), _vm._v(" "), _vm._m(1)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [(_vm$pago = _vm.pago) !== null && _vm$pago !== void 0 && _vm$pago.voucher ? _c("div", {
    staticClass: "card impresionComprobante",
    attrs: {
      id: "imprimirSunat"
    },
    on: {
      click: function click($event) {
        return _vm.imprimirComprobante();
      }
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("img", {
    staticClass: "mx-auto",
    staticStyle: {
      width: "35px"
    },
    attrs: {
      src: __webpack_require__(/*! ../../../../../img/sunat_logo.webp */ "./public/img/sunat_logo.webp"),
      alt: ""
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mb-0"
  }, [_vm._v("Comprobante SUNAT")]), _vm._v(" "), _vm._m(2)])])]) : _vm._e()])]), _vm._v(" "), !((_vm$pago2 = _vm.pago) !== null && _vm$pago2 !== void 0 && _vm$pago2.voucher) ? _c("div", {
    staticClass: "mt-3"
  }, [_c("p", [_vm._v("Datos principales para facturación:")]), _vm._v(" "), _c("div", {
    staticClass: "mb-2"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Tipo de Comprobante")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.facturacion.tipoEmision,
      expression: "facturacion.tipoEmision"
    }],
    staticClass: "form-select",
    attrs: {
      id: "sltTipo"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.facturacion, "tipoEmision", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.cambiarEmision();
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "01"
    }
  }, [_vm._v("Factura electrónica")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "03"
    }
  }, [_vm._v("Boleta electrónica")])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-2 d-none"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Fecha del documento")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "date",
      disabled: ""
    },
    domProps: {
      value: _vm.hoy
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "row g-2 mb-2"
  }, [_c("div", {
    staticClass: "col-8"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Tipo de documento")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.facturacion.tipoDocumento,
      expression: "facturacion.tipoDocumento"
    }],
    staticClass: "form-select",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.facturacion, "tipoDocumento", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.cambioCliente();
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("DNI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "6"
    }
  }, [_vm._v("RUC")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("Cliente Simple")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Carnet de extranjería")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-4 d-flex align-items-end justify-content-center"
  }, [_vm.facturacion.tipoDocumento === "1" || _vm.facturacion.tipoDocumento === "4" ? _c("button", {
    staticClass: "btn btn-outline-primary",
    on: {
      click: function click($event) {
        return _vm.buscarReniec();
      }
    }
  }, [_c("span", [_c("img", {
    staticStyle: {
      width: "15px"
    },
    attrs: {
      src: __webpack_require__(/*! ../../../../../img/reniec_logo.webp */ "./public/img/reniec_logo.webp"),
      alt: ""
    }
  })]), _vm._v(" RENIEC")]) : _vm._e(), _vm._v(" "), _vm.facturacion.tipoDocumento === "6" ? _c("button", {
    staticClass: "btn btn-outline-primary",
    on: {
      click: function click($event) {
        return _vm.buscarSunat();
      }
    }
  }, [_c("span", [_c("img", {
    staticStyle: {
      width: "15px"
    },
    attrs: {
      src: __webpack_require__(/*! ../../../../../img/sunat_logo.webp */ "./public/img/sunat_logo.webp"),
      alt: ""
    }
  })]), _vm._v(" SUNAT")]) : _vm._e()])]), _vm._v(" "), _vm.facturacion.tipoDocumento !== "0" ? _c("div", {
    staticClass: "mb-2"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("# de Documento")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.facturacion.ruc,
      expression: "facturacion.ruc"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "",
      maxlength: "11"
    },
    domProps: {
      value: _vm.facturacion.ruc
    },
    on: {
      keypress: _vm.preventSpace,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.facturacion, "ruc", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.facturacion.tipoDocumento !== "0" ? _c("div", {
    staticClass: "mb-2"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Razón social")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.facturacion.razonSocial,
      expression: "facturacion.razonSocial"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: ""
    },
    domProps: {
      value: _vm.facturacion.razonSocial
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.facturacion, "razonSocial", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.facturacion.tipoDocumento !== "0" ? _c("div", {
    staticClass: "mb-2"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Dirección")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.facturacion.direccion,
      expression: "facturacion.direccion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: ""
    },
    domProps: {
      value: _vm.facturacion.direccion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.facturacion, "direccion", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mb-2"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Apoderado")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.facturacion.apoderado,
      expression: "facturacion.apoderado"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: ""
    },
    domProps: {
      value: _vm.facturacion.apoderado
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.facturacion, "apoderado", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-2"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Concepto del pago")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.facturacion.conceptoPago,
      expression: "facturacion.conceptoPago"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: ""
    },
    domProps: {
      value: _vm.facturacion.conceptoPago
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.facturacion, "conceptoPago", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-2"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Monto total a pagar (S/.)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.facturacion.monto,
      expression: "facturacion.monto"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: ""
    },
    domProps: {
      value: _vm.facturacion.monto
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.facturacion, "monto", $event.target.value);
      }, function ($event) {
        return _vm.soloNumeros($event);
      }]
    }
  })]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.facturacion.tipoEmision == "01",
      expression: "facturacion.tipoEmision=='01'"
    }],
    staticClass: "mb-2"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Tipo de pago")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.facturacion.tipoPago,
      expression: "facturacion.tipoPago"
    }],
    staticClass: "form-select",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.facturacion, "tipoPago", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.cambiarContado();
      }]
    }
  }, [_c("option", [_vm._v("Contado")]), _vm._v(" "), _c("option", [_vm._v("Crédito")])])]), _vm._v(" "), _vm.facturacion.tipoPago === "Crédito" && _vm.facturacion.tipoEmision == "01" ? _c("div", [_c("div", {
    staticClass: "d-flex justify-content-between mt-3"
  }, [_c("p", {
    staticClass: "mb-1"
  }, [_vm._v("Cronograma de fechas y montos")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-secondary btn-sm",
    on: {
      click: function click($event) {
        return _vm.agregarMontoFecha();
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-plus"
  })])]), _vm._v(" "), _vm.facturacion.montosFechas.length > 0 ? [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, _vm._l(_vm.facturacion.montosFechas, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "row g-2 align-items-end mb-2"
    }, [_c("div", {
      staticClass: "col-6"
    }, [_c("label", {
      staticClass: "form-label"
    }, [_c("i", {
      staticClass: "fa-regular fa-calendar"
    }), _vm._v(" Fecha (cuota " + _vm._s(index + 1) + ")")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.fecha,
        expression: "item.fecha"
      }],
      staticClass: "form-control",
      attrs: {
        type: "date",
        min: _vm.hoy
      },
      domProps: {
        value: item.fecha
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "fecha", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-6"
    }, [_c("label", {
      staticClass: "form-label"
    }, [_vm._v("Monto")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: item.monto,
        expression: "item.monto",
        modifiers: {
          number: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "number",
        step: "1.0",
        placeholder: "0.00"
      },
      domProps: {
        value: item.monto
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "monto", _vm._n($event.target.value));
        },
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })])]);
  }), 0)])] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex mt-3"
  }, [_c("button", {
    staticClass: "btn btn-block btn-primary",
    on: {
      click: function click($event) {
        return _vm.generarComprobante();
      }
    }
  }, [_c("img", {
    staticStyle: {
      width: "15px"
    },
    attrs: {
      src: __webpack_require__(/*! ../../../../../img/sunat_logo.webp */ "./public/img/sunat_logo.webp"),
      alt: ""
    }
  }), _vm._v(" Generar comprobante")])])]) : _vm._e(), _vm._v(" "), (_vm$pago3 = _vm.pago) !== null && _vm$pago3 !== void 0 && _vm$pago3.voucher ? _c("div", {
    staticClass: "mt-3 d-flex justify-content-center",
    on: {
      click: function click($event) {
        return _vm.irPanelBaja();
      }
    }
  }, [_vm._m(3)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  })])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v("Facturación Electrónica")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      id: "cerrModalEstado",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mb-0"
  }, [_c("small", [_vm._v("Impresión en PDF")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mb-0"
  }, [_c("small", [_vm._v("Impresión Física")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn btn-outline-danger"
  }, [_c("i", {
    staticClass: "fa-solid fa-download"
  }), _vm._v(" ¿Dar de baja al comprobante?")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=template&id=5cb2816c&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=template&id=5cb2816c&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalMembresias",
      tabindex: "-1",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered modal-lg"
  }, [_c("div", {
    staticClass: "modal-content border-0 shadow"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body px-4 pb-4"
  }, [_c("div", {
    staticClass: "mb-4 mt-2"
  }, [_vm._m(1), _vm._v(" "), !_vm.pacienteElegido.id ? _c("div", {
    staticClass: "position-relative"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_vm._m(2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.txtBusqueda,
      expression: "txtBusqueda"
    }],
    staticClass: "form-control border-start-0 ps-0",
    attrs: {
      type: "text",
      placeholder: "Buscar por nombre o DNI..."
    },
    domProps: {
      value: _vm.txtBusqueda
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.searchHistoria();
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.txtBusqueda = $event.target.value;
      }, function ($event) {
        _vm.activaResultados = false;
        _vm.pacientes = [];
      }]
    }
  })]), _vm._v(" "), _vm.pacientes.length > 0 ? _c("div", {
    staticClass: "list-group position-absolute w-100 mt-1 shadow z-3",
    staticStyle: {
      "max-height": "250px",
      "overflow-y": "auto"
    }
  }, _vm._l(_vm.pacientes, function (paciente, index) {
    return _c("button", {
      staticClass: "list-group-item list-group-item-action py-2",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.seleccionarPaciente(index);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center mb-1"
    }, [_c("span", {
      staticClass: "fw-medium text-capitalize text-dark"
    }, [_vm._v(_vm._s(paciente.name) + " " + _vm._s(paciente.nombres))]), _vm._v(" "), _c("span", {
      staticClass: "badge bg-secondary bg-opacity-10 text-white border border-secondary border-opacity-25 rounded-pill fw-normal"
    }, [_vm._v(_vm._s(paciente.etiqueta))])]), _vm._v(" "), _c("div", {
      staticClass: "small text-muted"
    }, [_c("i", {
      staticClass: "fa-solid fa-id-card ms-1"
    }), _vm._v(" " + _vm._s(paciente.dni) + " • "), _c("i", {
      staticClass: "fa-solid fa-mobile-screen ms-1"
    }), _vm._v(" " + _vm._s(paciente.phone))])]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.activaResultados && _vm.pacientes.length === 0 ? _c("div", {
    staticClass: "mt-2 text-muted small"
  }, [_vm._v('No se encontraron resultados para "' + _vm._s(_vm.txtBusqueda) + '"')]) : _vm._e()]) : _c("div", {
    staticClass: "card border-primary border-opacity-50 bg-primary bg-opacity-10"
  }, [_c("div", {
    staticClass: "card-body py-2 px-3 d-flex justify-content-between align-items-center"
  }, [_c("div", [_c("div", {
    staticClass: "fw-bold text-capitalize text-white"
  }, [_vm._v(_vm._s(_vm.pacienteElegido.name) + " " + _vm._s(_vm.pacienteElegido.nombres))]), _vm._v(" "), _c("div", {
    staticClass: "small text-opacity-75 text-white"
  }, [_c("i", {
    staticClass: "fa-solid fa-id-card ms-1"
  }), _vm._v(" " + _vm._s(_vm.pacienteElegido.dni) + " • "), _c("i", {
    staticClass: "fa-solid fa-mobile-screen ms-1"
  }), _vm._v(" " + _vm._s(_vm.pacienteElegido.phone))])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-link text-white text-decoration-none fw-medium",
    on: {
      click: function click($event) {
        return _vm.limpiarPaciente();
      }
    }
  }, [_vm._v("Cambiar")])])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "row g-3"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "card h-100 cursor-pointer transition-all",
    "class": _vm.selectedTipoPaquete === "sesiones" ? "border-primary card-paquete-selected" : "border-secondary border-opacity-25",
    on: {
      click: function click($event) {
        return _vm.seleccionarTipo("sesiones");
      }
    }
  }, [_c("div", {
    staticClass: "card-body text-center py-3"
  }, [_c("i", {
    staticClass: "fa-solid fa-cube fs-4 mb-2",
    "class": _vm.selectedTipoPaquete === "sesiones" ? "text-primary" : "text-muted"
  }), _vm._v(" "), _c("div", {
    staticClass: "fw-medium",
    "class": _vm.selectedTipoPaquete === "sesiones" ? "text-primary" : "text-dark"
  }, [_vm._v("Por Sesiones")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "card h-100 cursor-pointer transition-all",
    "class": _vm.selectedTipoPaquete === "tiempo" ? "border-primary card-paquete-selected" : "border-secondary border-opacity-25",
    on: {
      click: function click($event) {
        return _vm.seleccionarTipo("tiempo");
      }
    }
  }, [_c("div", {
    staticClass: "card-body text-center py-3"
  }, [_c("i", {
    staticClass: "fa-solid fa-stopwatch fs-4 mb-2",
    "class": _vm.selectedTipoPaquete === "tiempo" ? "text-primary" : "text-muted"
  }), _vm._v(" "), _c("div", {
    staticClass: "fw-medium",
    "class": _vm.selectedTipoPaquete === "tiempo" ? "text-primary" : "text-dark"
  }, [_vm._v("Por Tiempo")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "card h-100 cursor-pointer transition-all",
    "class": _vm.selectedTipoPaquete === "otros" ? "border-primary card-paquete-selected" : "border-secondary border-opacity-25",
    on: {
      click: function click($event) {
        return _vm.seleccionarTipo("otros");
      }
    }
  }, [_c("div", {
    staticClass: "card-body text-center py-3"
  }, [_c("i", {
    staticClass: "fa-solid fa-box-open fs-4 mb-2",
    "class": _vm.selectedTipoPaquete === "otros" ? "text-primary" : "text-muted"
  }), _vm._v(" "), _c("div", {
    staticClass: "fw-medium",
    "class": _vm.selectedTipoPaquete === "otros" ? "text-primary" : "text-dark"
  }, [_vm._v("Otros Paquetes")])])])])])]), _vm._v(" "), _vm.selectedTipoPaquete ? _c("div", {
    staticClass: "mb-4"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "row g-3"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {
    staticClass: "card h-100 cursor-pointer transition-all",
    "class": _vm.selectedEspecialidadPaquete === "psicologica" ? "border-primary card-paquete-selected" : "border-secondary border-opacity-25",
    on: {
      click: function click($event) {
        return _vm.seleccionarEspecialidad("psicologica");
      }
    }
  }, [_c("div", {
    staticClass: "card-body text-center py-3"
  }, [_c("div", {
    staticClass: "fw-medium",
    "class": _vm.selectedEspecialidadPaquete === "psicologica" ? "text-primary" : "text-dark"
  }, [_vm._v("Psicológica")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {
    staticClass: "card h-100 cursor-pointer transition-all",
    "class": _vm.selectedEspecialidadPaquete === "psiquiatrica" ? "border-primary card-paquete-selected" : "border-secondary border-opacity-25",
    on: {
      click: function click($event) {
        return _vm.seleccionarEspecialidad("psiquiatrica");
      }
    }
  }, [_c("div", {
    staticClass: "card-body text-center py-3"
  }, [_c("div", {
    staticClass: "fw-medium",
    "class": _vm.selectedEspecialidadPaquete === "psiquiatrica" ? "text-primary" : "text-dark"
  }, [_vm._v("Psiquiátrica")])])])]), _vm._v(" "), _vm.selectedTipoPaquete === "otros" ? _c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {
    staticClass: "card h-100 cursor-pointer transition-all",
    "class": _vm.selectedEspecialidadPaquete === "hibrida" ? "border-primary card-paquete-selected" : "border-secondary border-opacity-25",
    on: {
      click: function click($event) {
        return _vm.seleccionarEspecialidad("hibrida");
      }
    }
  }, [_c("div", {
    staticClass: "card-body text-center py-3"
  }, [_c("div", {
    staticClass: "fw-medium",
    "class": _vm.selectedEspecialidadPaquete === "hibrida" ? "text-primary" : "text-dark"
  }, [_vm._v("Híbrida")])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {
    staticClass: "card h-100 cursor-pointer transition-all",
    "class": _vm.selectedEspecialidadPaquete === "otros" ? "border-primary card-paquete-selected" : "border-secondary border-opacity-25",
    on: {
      click: function click($event) {
        return _vm.seleccionarEspecialidad("otros");
      }
    }
  }, [_c("div", {
    staticClass: "card-body text-center py-3"
  }, [_c("div", {
    staticClass: "fw-medium",
    "class": _vm.selectedEspecialidadPaquete === "otros" ? "text-primary" : "text-dark"
  }, [_vm._v("Otros")])])])])])]) : _vm._e(), _vm._v(" "), (_vm.selectedTipoPaquete === "sesiones" || _vm.selectedTipoPaquete === "tiempo") && _vm.selectedEspecialidadPaquete ? _c("div", {
    staticClass: "mb-4"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "row g-3"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "card h-100 cursor-pointer transition-all",
    "class": _vm.selectedPublicoPaquete === "adultos" ? "border-primary card-paquete-selected" : "border-secondary border-opacity-25",
    on: {
      click: function click($event) {
        return _vm.seleccionarPublico("adultos");
      }
    }
  }, [_c("div", {
    staticClass: "card-body text-center py-3"
  }, [_c("div", {
    staticClass: "fw-medium",
    "class": _vm.selectedPublicoPaquete === "adultos" ? "text-primary" : "text-dark"
  }, [_vm._v("Adultos")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "card h-100 cursor-pointer transition-all",
    "class": _vm.selectedPublicoPaquete === "ninos" ? "border-primary card-paquete-selected" : "border-secondary border-opacity-25",
    on: {
      click: function click($event) {
        return _vm.seleccionarPublico("ninos");
      }
    }
  }, [_c("div", {
    staticClass: "card-body text-center py-3"
  }, [_c("div", {
    staticClass: "fw-medium",
    "class": _vm.selectedPublicoPaquete === "ninos" ? "text-primary" : "text-dark"
  }, [_vm._v("Niños")])])])])])]) : _vm._e(), _vm._v(" "), _vm.mostrarOpciones ? _c("div", {
    staticClass: "mb-4"
  }, [_vm._m(6), _vm._v(" "), _vm.opcionesDisponibles.length > 0 ? _c("div", {
    staticClass: "row g-3"
  }, _vm._l(_vm.opcionesDisponibles, function (opcion) {
    return _c("div", {
      key: opcion,
      staticClass: "col-md-6 col-lg-4"
    }, [_c("div", {
      staticClass: "card h-100 cursor-pointer transition-all",
      "class": _vm.selectedSubtipoPaquete === opcion ? "border-primary card-paquete-selected" : "border-secondary border-opacity-25",
      on: {
        click: function click($event) {
          return _vm.seleccionarSubtipo(opcion);
        }
      }
    }, [_c("div", {
      staticClass: "card-body text-center py-3"
    }, [_c("div", {
      staticClass: "fw-bold mb-1",
      "class": _vm.selectedSubtipoPaquete === opcion ? "text-primary" : "text-dark"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(opcion)), _vm.selectedTipoPaquete === "sesiones" && !isNaN(Number(opcion)) ? _c("span", [_vm._v(" sesiones")]) : _vm._e()]), _vm._v(" "), _vm.obtenerPrecioSubtipo(opcion) ? _c("div", {
      staticClass: "small text-muted fw-medium"
    }, [_vm._v("S/ " + _vm._s(_vm.obtenerPrecioSubtipo(opcion)))]) : _vm._e()])])]);
  }), 0) : _c("div", {
    staticClass: "alert alert-light border mt-2 text-center text-muted"
  }, [_c("i", {
    staticClass: "fa-solid fa-folder-open mb-2 d-block fs-4 text-secondary opacity-50"
  }), _vm._v("\n\t\t\t\t\t\tNo hay paquetes configurados para esta selección actualmente.\n\t\t\t\t\t")]), _vm._v(" "), !_vm.membresia.tipo && _vm.selectedSubtipoPaquete ? _c("div", {
    staticClass: "alert alert-warning mt-3 py-2 small d-flex align-items-center"
  }, [_c("i", {
    staticClass: "fa-solid fa-triangle-exclamation me-2"
  }), _vm._v(" No se encontró un precio configurado para esta combinación en la base de datos.\n\t\t\t\t\t")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card border-0 mb-4",
    staticStyle: {
      "background-color": "#f8f9fa",
      "border-radius": "1rem"
    }
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "row g-3"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "form-label small text-muted mb-1"
  }, [_vm._v("Precio Regular")]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("span", {
    staticClass: "input-group-text bg-white text-muted border-end-0"
  }, [_vm._v("S/")]), _vm._v(" "), _c("input", {
    staticClass: "form-control border-start-0 bg-white text-muted",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.mostrarPrecio
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "form-label small text-muted mb-1"
  }, [_vm._v("Descuento (S/)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.membresia.descuento,
      expression: "membresia.descuento"
    }],
    staticClass: "form-control bg-white",
    attrs: {
      type: "number",
      min: "0"
    },
    domProps: {
      value: _vm.membresia.descuento
    },
    on: {
      change: function change($event) {
        return _vm.calcularFechas();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.membresia, "descuento", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "form-label small text-muted mb-1"
  }, [_vm._v("Nro. de Cuotas")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.membresia.cuotas,
      expression: "membresia.cuotas"
    }],
    staticClass: "form-select bg-white",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.membresia, "cuotas", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.calcularFechas();
      }]
    }
  }, _vm._l(5, function (n) {
    return _c("option", {
      domProps: {
        value: n
      }
    }, [_vm._v(_vm._s(n) + " cuota" + _vm._s(n > 1 ? "s" : ""))]);
  }), 0)]), _vm._v(" "), _vm.membresia.cuotas > 0 && _vm.fechas.length > 0 ? _c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "form-label small text-muted mb-1"
  }, [_vm._v("1ra Cuota (S/) — editable")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fechas[0].monto,
      expression: "fechas[0].monto"
    }],
    staticClass: "form-control bg-white",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.fechas[0].monto
    },
    on: {
      keyup: function keyup($event) {
        return _vm.balancearMontos(0);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.fechas[0], "monto", $event.target.value);
      }
    }
  })]) : _vm._e()]), _vm._v(" "), _vm.fechas.length > 0 ? _c("div", {
    staticClass: "mt-4"
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "row g-3"
  }, _vm._l(_vm.fechas, function (fecha, index) {
    return _c("div", {
      key: index,
      staticClass: "col-md-6"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-end mb-1"
    }, [_c("label", {
      staticClass: "small text-muted mb-0"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tCuota " + _vm._s(index + 1) + " "), index === 0 && _vm.membresia.cuotas > 1 ? _c("span", {
      staticClass: "text-black-50"
    }, [_vm._v("(editable)")]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "form-check form-check-inline mb-0 me-0",
      attrs: {
        title: "¿Paga?"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.fechas[index].pago,
        expression: "fechas[index].pago"
      }],
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        id: "pago" + index
      },
      domProps: {
        checked: Array.isArray(_vm.fechas[index].pago) ? _vm._i(_vm.fechas[index].pago, null) > -1 : _vm.fechas[index].pago
      },
      on: {
        change: [function ($event) {
          var $$a = _vm.fechas[index].pago,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.fechas[index], "pago", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.fechas[index], "pago", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.fechas[index], "pago", $$c);
          }
        }, function ($event) {
          return _vm.alCambiarPago(_vm.fechas[index], index);
        }]
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "form-check-label small",
      staticStyle: {
        "font-size": "0.75rem"
      },
      attrs: {
        "for": "pago" + index
      }
    }, [_vm._v("¿Pagado?")])])]), _vm._v(" "), _c("div", {
      staticClass: "position-relative"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.fechas[index].dia,
        expression: "fechas[index].dia"
      }],
      staticClass: "form-control bg-white",
      attrs: {
        type: "date"
      },
      domProps: {
        value: _vm.fechas[index].dia
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.fechas[index], "dia", $event.target.value);
        }
      }
    })])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "bg-white rounded-3 p-3 mt-4 border shadow-sm"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between mb-2 small"
  }, [_c("span", {
    staticClass: "text-muted"
  }, [_vm._v("Precio regular (" + _vm._s(_vm.cantSesiones) + " sesiones)")]), _vm._v(" "), _c("span", {
    staticClass: "fw-medium text-dark"
  }, [_vm._v("S/ " + _vm._s(parseFloat(_vm.mostrarPrecio).toFixed(2)))])]), _vm._v(" "), _vm.membresia.descuento > 0 ? _c("div", {
    staticClass: "d-flex justify-content-between mb-2 small text-success"
  }, [_c("span", [_vm._v("Descuento")]), _vm._v(" "), _c("span", [_vm._v("-S/ " + _vm._s(parseFloat(_vm.membresia.descuento).toFixed(2)))])]) : _vm._e(), _vm._v(" "), _c("hr", {
    staticClass: "my-2 border-secondary border-opacity-25"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mb-1 fw-bold text-dark"
  }, [_c("span", [_vm._v("Total Paquete")]), _vm._v(" "), _c("span", [_vm._v("S/ " + _vm._s(parseFloat(_vm.mostrarPrecio - _vm.membresia.descuento).toFixed(2)))])]), _vm._v(" "), _vm.membresia.cuotas > 1 ? _c("div", {
    staticClass: "d-flex justify-content-between small text-muted"
  }, [_c("span", [_vm._v("Cuota estimada")]), _vm._v(" "), _c("span", [_vm._v("S/ " + _vm._s((parseFloat(_vm.mostrarPrecio - _vm.membresia.descuento) / _vm.membresia.cuotas).toFixed(2)) + " × " + _vm._s(_vm.membresia.cuotas))])]) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("label", {
    staticClass: "form-label text-secondary small fw-medium mb-1"
  }, [_vm._v("Comentarios adicionales")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.comentarios,
      expression: "comentarios"
    }],
    staticClass: "form-control",
    attrs: {
      id: "txtComentarios",
      rows: "2",
      placeholder: "Opcional..."
    },
    domProps: {
      value: _vm.comentarios
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.comentarios = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer border-top-0 pt-0 px-4 pb-4"
  }, [_c("button", {
    staticClass: "btn btn-light px-4",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Cancelar")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-4",
    attrs: {
      type: "button",
      disabled: _vm.guardando
    },
    on: {
      click: function click($event) {
        return _vm.guardar();
      }
    }
  }, [_vm.guardando ? _c("i", {
    staticClass: "fa-solid fa-circle-notch fa-spin me-2"
  }) : _c("i", {
    staticClass: "fa-solid fa-cube me-2"
  }), _vm._v("\n\t\t\t\t\tCrear Paquete\n\t\t\t\t")])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header border-bottom-0 pb-0 pt-4 px-4"
  }, [_c("h5", {
    staticClass: "modal-title fw-bold d-flex align-items-center",
    staticStyle: {
      color: "#1e293b"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-cube text-primary me-2"
  }), _vm._v(" Nuevo Paquete\n\t\t\t\t")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label text-secondary small fw-medium mb-1"
  }, [_vm._v("Paciente "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "input-group-text bg-white border-end-0"
  }, [_c("i", {
    staticClass: "fas fa-search text-muted"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label text-secondary small fw-medium mb-2"
  }, [_vm._v("Tipo de Paquete "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label text-secondary small fw-medium mb-2"
  }, [_vm._v("Especialidad del Paquete "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label text-secondary small fw-medium mb-2"
  }, [_vm._v("Público "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label text-secondary small fw-medium mb-2"
  }, [_vm._v("\n\t\t\t\t\t\tOpción / Duración "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", {
    staticClass: "fw-bold mb-4 d-flex align-items-center",
    staticStyle: {
      color: "#2b3b5a"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-dollar-sign text-primary me-2"
  }), _vm._v(" Precio y Cuotas\n\t\t\t\t\t\t")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label small fw-medium mb-3 d-flex align-items-center text-secondary"
  }, [_c("i", {
    staticClass: "fa-regular fa-calendar me-2"
  }), _vm._v(" Fechas de vencimiento de cuotas\n\t\t\t\t\t\t\t")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue?vue&type=template&id=29003bd4":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue?vue&type=template&id=29003bd4 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "offcanvas offcanvas-end",
    attrs: {
      tabindex: "-1",
      id: "offAdjunto",
      "aria-labelledby": "offcanvasExampleLabel"
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "offcanvas-body"
  }, [_c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: "/img/celular_fondo.jpeg",
      alt: ""
    }
  }), _vm._v(" "), _vm.habilitarEliminado ? _c("div", [_vm.fotoNueva == "" ? _c("div", [_c("label", {
    staticClass: "mt-2",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Adjunte su comprobante de pago, aquí")]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "file",
      id: "fileArchivo",
      "aria-label": "Upload",
      accept: "image/*,application/pdf"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.subirArchivo
    }
  }, [_vm._v("Subir archivo")])])]) : _c("div", [_c("img", {
    staticClass: "img-fluid my-2",
    attrs: {
      src: "/storage/adjuntos/" + this.fotoNueva,
      alt: ""
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-danger mt-2",
    on: {
      click: function click($event) {
        return _vm.eliminarAdjunto();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-unlink"
  }), _vm._v(" Eliminar adjunto")])])]) : _c("div", [_c("p", {
    staticClass: "my-2"
  }, [_vm._v("Por políticas, no se puede adjuntar archivos fuera del día de operaciones.")])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "offcanvas-header"
  }, [_c("h5", {
    staticClass: "offcanvas-title",
    attrs: {
      id: "offcanvasExampleLabel"
    }
  }, [_vm._v("Archivos adjuntos")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "offcanvas",
      "aria-label": "Close"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./public/img/pdf_logo.jpg":
/*!*********************************!*\
  !*** ./public/img/pdf_logo.jpg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "/images/pdf_logo.jpg?3f77fd793c765ee158e37981c45c5fe3";

/***/ }),

/***/ "./public/img/reniec_logo.webp":
/*!*************************************!*\
  !*** ./public/img/reniec_logo.webp ***!
  \*************************************/
/***/ ((module) => {

module.exports = "/images/reniec_logo.webp?d75ad3f8298a388153b58a0f3aa8e18f";

/***/ }),

/***/ "./public/img/sunat_logo.webp":
/*!************************************!*\
  !*** ./public/img/sunat_logo.webp ***!
  \************************************/
/***/ ((module) => {

module.exports = "/images/sunat_logo.webp?35aa6ad1ae06278a4083e7a479c9bbca";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=style&index=0&id=0725e1b0&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=style&index=0&id=0725e1b0&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-premium[data-v-0725e1b0] {\n    padding: 0.5rem 1.2rem;\n    border-radius: 10px;\n    font-weight: 600;\n    font-size: 0.85rem;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    border: 1px solid transparent;\n    display: inline-flex;\n    align-items: center;\n    gap: 0.5rem;\n    cursor: pointer;\n    background: white;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.btn-premium i[data-v-0725e1b0] {\n    font-size: 0.9rem;\n}\n.btn-premium[data-v-0725e1b0]:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.btn-export[data-v-0725e1b0] { color: #10b981; border-color: #d1fae5;\n}\n.btn-export[data-v-0725e1b0]:hover { background: #10b981; color: white;\n}\n.btn-ingreso[data-v-0725e1b0] { color: #3b82f6; border-color: #dbeafe;\n}\n.btn-ingreso[data-v-0725e1b0]:hover { background: #3b82f6; color: white;\n}\n.btn-egreso[data-v-0725e1b0] { color: #ef4444; border-color: #fee2e2;\n}\n.btn-egreso[data-v-0725e1b0]:hover { background: #ef4444; color: white;\n}\n.btn-print[data-v-0725e1b0] { color: #6366f1; border-color: #e0e7ff;\n}\n.btn-print[data-v-0725e1b0]:hover { background: #6366f1; color: white;\n}\n.btn-refresh[data-v-0725e1b0] { color: #64748b; border-color: #f1f5f9;\n}\n.btn-refresh[data-v-0725e1b0]:hover { background: #64748b; color: white;\n}\n.table-pagos[data-v-0725e1b0] {\n    border-collapse: separate;\n    border-spacing: 0 10px;\n    width: 100%;\n}\n.table-pagos thead th[data-v-0725e1b0] {\n    border: none !important;\n    color: #adb5bd !important;\n    font-weight: 500 !important;\n    font-size: 0.85rem !important;\n    padding: 10px 15px !important;\n    text-transform: capitalize;\n    background: transparent !important;\n}\n.table-pagos tbody tr[data-v-0725e1b0] {\n    background: white;\n    transition: all 0.2s ease;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.02);\n}\n.table-pagos tbody tr[data-v-0725e1b0]:hover {\n    background: #fdfdfd;\n    box-shadow: 0 4px 10px rgba(0,0,0,0.04);\n}\n.table-pagos td[data-v-0725e1b0] {\n    padding: 12px 15px;\n    vertical-align: middle;\n    border-top: 1px solid #f1f3f5;\n    border-bottom: 1px solid #f1f3f5;\n    color: #495057;\n}\n.table-pagos td[data-v-0725e1b0]:first-child {\n    border-left: 1px solid #f1f3f5;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n.table-pagos td[data-v-0725e1b0]:last-child {\n    border-right: 1px solid #f1f3f5;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n/* Ticket style */\n.ticket-id[data-v-0725e1b0] {\n    color: #adb5bd;\n    font-size: 0.85rem;\n    font-weight: 500;\n}\n\n/* Hora style */\n.hora-txt[data-v-0725e1b0] {\n    font-weight: 700;\n    color: #212529;\n}\n\n/* Concepto */\n.concepto-container[data-v-0725e1b0] {\n    display: flex;\n    align-items: center;\n}\n.icon-box[data-v-0725e1b0] {\n    width: 36px;\n    height: 36px;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 12px;\n    font-size: 1.1rem;\n}\n.icon-cita[data-v-0725e1b0] { background-color: #e7fcf0; color: #2ecc71;\n}\n.icon-adelanto[data-v-0725e1b0] { background-color: #fff8e1; color: #ffc107;\n}\n.icon-cuota[data-v-0725e1b0] { background-color: #f3f0ff; color: #9b59b6;\n}\n.icon-egreso[data-v-0725e1b0] { background-color: #fff0f0; color: #e74c3c;\n}\n.icon-ingreso[data-v-0725e1b0] { background-color: #e8f5e9; color: #27ae60;\n}\n.icon-otros[data-v-0725e1b0] { background-color: #f0f4ff; color: #3498db;\n}\n.concepto-info .title[data-v-0725e1b0] {\n    display: block;\n    font-weight: 600;\n    color: #2c3e50;\n    margin-bottom: 2px;\n    text-transform: capitalize;\n}\n.concepto-info .subtitle[data-v-0725e1b0] {\n    display: block;\n    font-size: 0.75rem;\n    color: #95a5a6;\n}\n\n/* Badges */\n.badge-custom[data-v-0725e1b0] {\n    padding: 4px 12px;\n    border-radius: 12px;\n    font-weight: 600;\n    font-size: 0.7rem;\n    text-transform: capitalize;\n    display: inline-block;\n}\n.badge-cita[data-v-0725e1b0] { background-color: #e3f2fd; color: #1976d2;\n}\n.badge-adelanto[data-v-0725e1b0] { background-color: #fff3e0; color: #f57c00;\n}\n.badge-cuota[data-v-0725e1b0] { background-color: #e0f7fa; color: #00838f;\n}\n.badge-egreso[data-v-0725e1b0] { background-color: #ffebee; color: #c62828;\n}\n.badge-ingreso[data-v-0725e1b0] { background-color: #e8f5e9; color: #2e7d32;\n}\n\n/* Monto */\n.monto-txt[data-v-0725e1b0] {\n    font-weight: 700;\n    font-size: 0.95rem;\n}\n.monto-positivo[data-v-0725e1b0] { color: #2ecc71;\n}\n.monto-negativo[data-v-0725e1b0] { color: #e74c3c;\n}\n\n/* Actions */\n.btn-action[data-v-0725e1b0] {\n    color: #adb5bd;\n    background: transparent;\n    border: none;\n    padding: 5px 8px;\n    font-size: 1.1rem;\n    transition: all 0.2s;\n}\n.btn-action[data-v-0725e1b0]:hover {\n    color: #3498db;\n}\n.dropdown-action .dropdown-toggle[data-v-0725e1b0]::after {\n    display: none;\n}\n.dropdown-menu[data-v-0725e1b0] {\n    border: none;\n    box-shadow: 0 10px 25px rgba(0,0,0,0.1);\n    border-radius: 12px;\n    padding: 8px;\n}\n.dropdown-item[data-v-0725e1b0] {\n    border-radius: 8px;\n    padding: 8px 12px;\n    font-size: 0.9rem;\n    color: #495057;\n}\n.dropdown-item i[data-v-0725e1b0] {\n    width: 20px;\n    margin-right: 8px;\n    color: #adb5bd;\n}\n.dropdown-item[data-v-0725e1b0]:hover {\n    background-color: #f8f9fa;\n    color: #212529;\n}\n.dropdown-item:hover i[data-v-0725e1b0] {\n    color: #3498db;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=style&index=0&id=e3a1cbea&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=style&index=0&id=e3a1cbea&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.impresionComprobante{\r\n\tcursor:pointer;\n}\n.form-select{\r\n\tcolor: #6e707e;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=style&index=0&id=5cb2816c&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=style&index=0&id=5cb2816c&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.card-paquete-selected[data-v-5cb2816c] {\r\n\tbackground-color: #f0f7ff !important;\r\n\tbox-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;\n}\n.cursor-pointer[data-v-5cb2816c] {\r\n\tcursor: pointer;\n}\n.transition-all[data-v-5cb2816c] {\r\n\ttransition: all 0.2s ease-in-out;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=style&index=0&id=0725e1b0&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=style&index=0&id=0725e1b0&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePagos_vue_vue_type_style_index_0_id_0725e1b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePagos.vue?vue&type=style&index=0&id=0725e1b0&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=style&index=0&id=0725e1b0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePagos_vue_vue_type_style_index_0_id_0725e1b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePagos_vue_vue_type_style_index_0_id_0725e1b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=style&index=0&id=e3a1cbea&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=style&index=0&id=e3a1cbea&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalFacturacion_vue_vue_type_style_index_0_id_e3a1cbea_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalFacturacion.vue?vue&type=style&index=0&id=e3a1cbea&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=style&index=0&id=e3a1cbea&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalFacturacion_vue_vue_type_style_index_0_id_e3a1cbea_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalFacturacion_vue_vue_type_style_index_0_id_e3a1cbea_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=style&index=0&id=5cb2816c&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=style&index=0&id=5cb2816c&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalMembresias_vue_vue_type_style_index_0_id_5cb2816c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalMembresias.vue?vue&type=style&index=0&id=5cb2816c&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=style&index=0&id=5cb2816c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalMembresias_vue_vue_type_style_index_0_id_5cb2816c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalMembresias_vue_vue_type_style_index_0_id_5cb2816c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalEgresosExtras_vue_vue_type_template_id_1c4995a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalEgresosExtras.vue?vue&type=template&id=1c4995a6 */ "./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue?vue&type=template&id=1c4995a6");
/* harmony import */ var _ModalEgresosExtras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalEgresosExtras.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalEgresosExtras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalEgresosExtras_vue_vue_type_template_id_1c4995a6__WEBPACK_IMPORTED_MODULE_0__.render,
  _ModalEgresosExtras_vue_vue_type_template_id_1c4995a6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalPagosExtras_vue_vue_type_template_id_4d0e8d05__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalPagosExtras.vue?vue&type=template&id=4d0e8d05 */ "./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue?vue&type=template&id=4d0e8d05");
/* harmony import */ var _ModalPagosExtras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalPagosExtras.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalPagosExtras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalPagosExtras_vue_vue_type_template_id_4d0e8d05__WEBPACK_IMPORTED_MODULE_0__.render,
  _ModalPagosExtras_vue_vue_type_template_id_4d0e8d05__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/HomePagos.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/HomePagos.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomePagos_vue_vue_type_template_id_0725e1b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePagos.vue?vue&type=template&id=0725e1b0&scoped=true */ "./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=template&id=0725e1b0&scoped=true");
/* harmony import */ var _HomePagos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePagos.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=script&lang=js");
/* harmony import */ var _HomePagos_vue_vue_type_style_index_0_id_0725e1b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePagos.vue?vue&type=style&index=0&id=0725e1b0&scoped=true&lang=css */ "./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=style&index=0&id=0725e1b0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomePagos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomePagos_vue_vue_type_template_id_0725e1b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _HomePagos_vue_vue_type_template_id_0725e1b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0725e1b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/pagos/HomePagos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalDividirPago_vue_vue_type_template_id_3cc39d1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalDividirPago.vue?vue&type=template&id=3cc39d1c */ "./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue?vue&type=template&id=3cc39d1c");
/* harmony import */ var _ModalDividirPago_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalDividirPago.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalDividirPago_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalDividirPago_vue_vue_type_template_id_3cc39d1c__WEBPACK_IMPORTED_MODULE_0__.render,
  _ModalDividirPago_vue_vue_type_template_id_3cc39d1c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalFacturacion_vue_vue_type_template_id_e3a1cbea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalFacturacion.vue?vue&type=template&id=e3a1cbea */ "./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=template&id=e3a1cbea");
/* harmony import */ var _ModalFacturacion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalFacturacion.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=script&lang=js");
/* harmony import */ var _ModalFacturacion_vue_vue_type_style_index_0_id_e3a1cbea_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalFacturacion.vue?vue&type=style&index=0&id=e3a1cbea&lang=css */ "./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=style&index=0&id=e3a1cbea&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ModalFacturacion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalFacturacion_vue_vue_type_template_id_e3a1cbea__WEBPACK_IMPORTED_MODULE_0__.render,
  _ModalFacturacion_vue_vue_type_template_id_e3a1cbea__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalMembresias_vue_vue_type_template_id_5cb2816c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalMembresias.vue?vue&type=template&id=5cb2816c&scoped=true */ "./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=template&id=5cb2816c&scoped=true");
/* harmony import */ var _ModalMembresias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalMembresias.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=script&lang=js");
/* harmony import */ var _ModalMembresias_vue_vue_type_style_index_0_id_5cb2816c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalMembresias.vue?vue&type=style&index=0&id=5cb2816c&scoped=true&lang=css */ "./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=style&index=0&id=5cb2816c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ModalMembresias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalMembresias_vue_vue_type_template_id_5cb2816c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ModalMembresias_vue_vue_type_template_id_5cb2816c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5cb2816c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/pagos/ModalMembresias.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OffcanvasAdjuntos_vue_vue_type_template_id_29003bd4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OffcanvasAdjuntos.vue?vue&type=template&id=29003bd4 */ "./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue?vue&type=template&id=29003bd4");
/* harmony import */ var _OffcanvasAdjuntos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OffcanvasAdjuntos.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OffcanvasAdjuntos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _OffcanvasAdjuntos_vue_vue_type_template_id_29003bd4__WEBPACK_IMPORTED_MODULE_0__.render,
  _OffcanvasAdjuntos_vue_vue_type_template_id_29003bd4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEgresosExtras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalEgresosExtras.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEgresosExtras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPagosExtras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalPagosExtras.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPagosExtras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePagos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePagos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePagos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalDividirPago_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalDividirPago.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalDividirPago_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalFacturacion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalFacturacion.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalFacturacion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalMembresias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalMembresias.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalMembresias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffcanvasAdjuntos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OffcanvasAdjuntos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffcanvasAdjuntos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue?vue&type=template&id=1c4995a6":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue?vue&type=template&id=1c4995a6 ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEgresosExtras_vue_vue_type_template_id_1c4995a6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEgresosExtras_vue_vue_type_template_id_1c4995a6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEgresosExtras_vue_vue_type_template_id_1c4995a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalEgresosExtras.vue?vue&type=template&id=1c4995a6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/ModalEgresosExtras.vue?vue&type=template&id=1c4995a6");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue?vue&type=template&id=4d0e8d05":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue?vue&type=template&id=4d0e8d05 ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPagosExtras_vue_vue_type_template_id_4d0e8d05__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPagosExtras_vue_vue_type_template_id_4d0e8d05__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPagosExtras_vue_vue_type_template_id_4d0e8d05__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalPagosExtras.vue?vue&type=template&id=4d0e8d05 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/ModalPagosExtras.vue?vue&type=template&id=4d0e8d05");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=template&id=0725e1b0&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=template&id=0725e1b0&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePagos_vue_vue_type_template_id_0725e1b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePagos_vue_vue_type_template_id_0725e1b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePagos_vue_vue_type_template_id_0725e1b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePagos.vue?vue&type=template&id=0725e1b0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=template&id=0725e1b0&scoped=true");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue?vue&type=template&id=3cc39d1c":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue?vue&type=template&id=3cc39d1c ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalDividirPago_vue_vue_type_template_id_3cc39d1c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalDividirPago_vue_vue_type_template_id_3cc39d1c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalDividirPago_vue_vue_type_template_id_3cc39d1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalDividirPago.vue?vue&type=template&id=3cc39d1c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalDividirPago.vue?vue&type=template&id=3cc39d1c");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=template&id=e3a1cbea":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=template&id=e3a1cbea ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalFacturacion_vue_vue_type_template_id_e3a1cbea__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalFacturacion_vue_vue_type_template_id_e3a1cbea__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalFacturacion_vue_vue_type_template_id_e3a1cbea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalFacturacion.vue?vue&type=template&id=e3a1cbea */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=template&id=e3a1cbea");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=template&id=5cb2816c&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=template&id=5cb2816c&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalMembresias_vue_vue_type_template_id_5cb2816c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalMembresias_vue_vue_type_template_id_5cb2816c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalMembresias_vue_vue_type_template_id_5cb2816c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalMembresias.vue?vue&type=template&id=5cb2816c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=template&id=5cb2816c&scoped=true");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue?vue&type=template&id=29003bd4":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue?vue&type=template&id=29003bd4 ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OffcanvasAdjuntos_vue_vue_type_template_id_29003bd4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OffcanvasAdjuntos_vue_vue_type_template_id_29003bd4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OffcanvasAdjuntos_vue_vue_type_template_id_29003bd4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OffcanvasAdjuntos.vue?vue&type=template&id=29003bd4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/OffcanvasAdjuntos.vue?vue&type=template&id=29003bd4");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=style&index=0&id=0725e1b0&scoped=true&lang=css":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=style&index=0&id=0725e1b0&scoped=true&lang=css ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePagos_vue_vue_type_style_index_0_id_0725e1b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePagos.vue?vue&type=style&index=0&id=0725e1b0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/HomePagos.vue?vue&type=style&index=0&id=0725e1b0&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=style&index=0&id=e3a1cbea&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=style&index=0&id=e3a1cbea&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalFacturacion_vue_vue_type_style_index_0_id_e3a1cbea_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalFacturacion.vue?vue&type=style&index=0&id=e3a1cbea&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalFacturacion.vue?vue&type=style&index=0&id=e3a1cbea&lang=css");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=style&index=0&id=5cb2816c&scoped=true&lang=css":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=style&index=0&id=5cb2816c&scoped=true&lang=css ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalMembresias_vue_vue_type_style_index_0_id_5cb2816c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalMembresias.vue?vue&type=style&index=0&id=5cb2816c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=style&index=0&id=5cb2816c&scoped=true&lang=css");


/***/ })

}]);