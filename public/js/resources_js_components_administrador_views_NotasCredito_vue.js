"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_administrador_views_NotasCredito_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/NotasCredito.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/NotasCredito.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  name: 'NotasCredito',
  data: function data() {
    return {
      notas: [],
      busqueda: '',
      filtroEstado: 0,
      loading: false,
      procesando: false,
      notaSeleccionada: null,
      formDevolucion: {
        observacion: ''
      },
      formUso: {
        monto: 0,
        observacion: ''
      },
      user: null
    };
  },
  computed: {
    notasFiltradas: function notasFiltradas() {
      var _this = this;
      return this.notas.filter(function (nota) {
        var matchBusqueda = true;
        var matchEstado = true;
        if (_this.busqueda.trim() !== '') {
          var b = _this.busqueda.toLowerCase();
          var p = nota.patient;
          matchBusqueda = p && (p.name && p.name.toLowerCase().includes(b) || p.nombres && p.nombres.toLowerCase().includes(b) || p.dni && p.dni.includes(b));
        }
        if (_this.filtroEstado !== 0 && _this.filtroEstado !== '0') {
          matchEstado = nota.estado === parseInt(_this.filtroEstado);
        }
        return matchBusqueda && matchEstado;
      });
    },
    esMontoValido: function esMontoValido() {
      var _this$notaSeleccionad;
      return this.formUso.monto > 0 && this.formUso.monto <= (((_this$notaSeleccionad = this.notaSeleccionada) === null || _this$notaSeleccionad === void 0 ? void 0 : _this$notaSeleccionad.monto_disponible) || 0);
    }
  },
  methods: {
    fetchNotas: function fetchNotas() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this2.loading = true;
              _context.prev = 1;
              _context.next = 4;
              return _this2.axios.get('/api/notas-credito');
            case 4:
              res = _context.sent;
              _this2.notas = res.data;
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error("Error al obtener notas:", _context.t0);
            case 11:
              _context.prev = 11;
              _this2.loading = false;
              return _context.finish(11);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8, 11, 14]]);
      }))();
    },
    fetchUser: function fetchUser() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _this3.axios.get('/api/user');
            case 3:
              res = _context2.sent;
              _this3.user = res.data.user;
              _context2.next = 10;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    formatearFecha: function formatearFecha(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).format('DD/MM/YYYY HH:mm');
    },
    getStatusBadgeClass: function getStatusBadgeClass(estado) {
      switch (estado) {
        case 1:
          return 'bg-success-subtle text-success border border-success-subtle';
        case 2:
          return 'bg-secondary-subtle text-secondary border border-secondary-subtle';
        case 3:
          return 'bg-primary-subtle text-primary border border-primary-subtle';
        case 4:
          return 'bg-danger-subtle text-danger border border-danger-subtle';
        default:
          return 'bg-light text-dark';
      }
    },
    prepararDevolucion: function prepararDevolucion(nota) {
      this.notaSeleccionada = nota;
      this.formDevolucion.observacion = '';
      var modal = new bootstrap.Modal(document.getElementById('modalDevolucion'));
      modal.show();
    },
    confirmarDevolucion: function confirmarDevolucion() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var idSede, modal, _error$response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this4.procesando = true;
              _context3.prev = 1;
              idSede = localStorage.getItem('idSede') || 1;
              _context3.next = 5;
              return _this4.axios.post("/api/notas-credito/".concat(_this4.notaSeleccionada.id, "/devolver"), {
                observacion: _this4.formDevolucion.observacion,
                idUsuario: _this4.user ? _this4.user.id : -1,
                idSede: idSede
              });
            case 5:
              Swal.fire('Éxito', 'Se registró el egreso y se devolvió el dinero.', 'success');
              modal = bootstrap.Modal.getInstance(document.getElementById('modalDevolucion'));
              if (modal) modal.hide();
              _this4.fetchNotas();
              _context3.next = 14;
              break;
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](1);
              Swal.fire('Error', ((_error$response = _context3.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.error) || 'Ocurrió un error', 'error');
            case 14:
              _context3.prev = 14;
              _this4.procesando = false;
              return _context3.finish(14);
            case 17:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 11, 14, 17]]);
      }))();
    },
    prepararUsoManual: function prepararUsoManual(nota) {
      this.notaSeleccionada = nota;
      this.formUso.monto = parseFloat(nota.monto_disponible);
      this.formUso.observacion = '';
      var modal = new bootstrap.Modal(document.getElementById('modalUsoManual'));
      modal.show();
    },
    confirmarUso: function confirmarUso() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var modal, _error$response2;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this5.procesando = true;
              _context4.prev = 1;
              _context4.next = 4;
              return _this5.axios.post("/api/notas-credito/".concat(_this5.notaSeleccionada.id, "/usar"), {
                monto: _this5.formUso.monto,
                observacion: _this5.formUso.observacion
              });
            case 4:
              Swal.fire('Éxito', 'Saldo descontado correctamente.', 'success');
              modal = bootstrap.Modal.getInstance(document.getElementById('modalUsoManual'));
              if (modal) modal.hide();
              _this5.fetchNotas();
              _context4.next = 13;
              break;
            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](1);
              Swal.fire('Error', ((_error$response2 = _context4.t0.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.error) || 'Ocurrió un error', 'error');
            case 13:
              _context4.prev = 13;
              _this5.procesando = false;
              return _context4.finish(13);
            case 16:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 10, 13, 16]]);
      }))();
    }
  },
  mounted: function mounted() {
    this.fetchUser();
    this.fetchNotas();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/NotasCredito.vue?vue&type=template&id=cb7e28e2&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/NotasCredito.vue?vue&type=template&id=cb7e28e2&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container-fluid p-4"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card border-0 shadow-sm mb-4"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row g-3"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.busqueda,
      expression: "busqueda"
    }],
    staticClass: "form-control bg-light",
    attrs: {
      type: "text",
      placeholder: "Buscar paciente..."
    },
    domProps: {
      value: _vm.busqueda
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.busqueda = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filtroEstado,
      expression: "filtroEstado"
    }],
    staticClass: "form-select bg-light",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.filtroEstado = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("Todos los estados")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Disponible")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Gastado")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Devuelto")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Anulado")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card border-0 shadow-sm"
  }, [_c("div", {
    staticClass: "card-body p-0"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-hover align-middle mb-0"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l(_vm.notasFiltradas, function (nota) {
    var _nota$patient, _nota$patient2, _nota$patient3, _nota$patient4;
    return _c("tr", {
      key: nota.id
    }, [_c("td", {
      staticClass: "ps-4"
    }, [_c("span", {
      staticClass: "fw-bold text-muted"
    }, [_vm._v("#" + _vm._s(nota.id.toString().padStart(4, "0")))])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", {
      staticClass: "avatar-sm rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center me-3 fw-bold"
    }, [_vm._v("\n                    " + _vm._s((((_nota$patient = nota.patient) === null || _nota$patient === void 0 ? void 0 : _nota$patient.name) || "U").charAt(0)) + "\n                  ")]), _vm._v(" "), _c("div", [_c("div", {
      staticClass: "fw-bold text-dark"
    }, [_vm._v(_vm._s((_nota$patient2 = nota.patient) === null || _nota$patient2 === void 0 ? void 0 : _nota$patient2.name) + " " + _vm._s((_nota$patient3 = nota.patient) === null || _nota$patient3 === void 0 ? void 0 : _nota$patient3.nombres))]), _vm._v(" "), _c("div", {
      staticClass: "small text-muted"
    }, [_c("i", {
      staticClass: "fas fa-id-card me-1"
    }), _vm._v(" " + _vm._s((_nota$patient4 = nota.patient) === null || _nota$patient4 === void 0 ? void 0 : _nota$patient4.dni))])])])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "small fw-bold"
    }, [_vm._v("Paquete #" + _vm._s(nota.idMembresia))]), _vm._v(" "), _c("div", {
      staticClass: "small text-muted"
    }, [_vm._v(_vm._s(_vm.formatearFecha(nota.created_at)))])]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "fw-bold"
    }, [_vm._v("S/ " + _vm._s(parseFloat(nota.monto_original).toFixed(2)))])]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "fw-bold fs-6",
      "class": nota.monto_disponible > 0 ? "text-success" : "text-muted"
    }, [_vm._v("\n                  S/ " + _vm._s(parseFloat(nota.monto_disponible).toFixed(2)) + "\n                ")])]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge rounded-pill",
      "class": _vm.getStatusBadgeClass(nota.estado)
    }, [_vm._v("\n                  " + _vm._s(nota.status_name) + "\n                ")])]), _vm._v(" "), _c("td", {
      staticClass: "text-end pe-4"
    }, [nota.estado === 1 && nota.monto_disponible > 0 ? _c("div", {
      staticClass: "dropdown"
    }, [_c("button", {
      staticClass: "btn btn-sm btn-light dropdown-toggle rounded-pill shadow-sm",
      attrs: {
        type: "button",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }
    }, [_vm._v("\n                    Opciones\n                  ")]), _vm._v(" "), _c("ul", {
      staticClass: "dropdown-menu shadow-sm"
    }, [_c("li", [_c("a", {
      staticClass: "dropdown-item",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.prepararDevolucion(nota);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-hand-holding-usd me-2 text-success"
    }), _vm._v(" Devolver dinero")])]), _vm._v(" "), _c("li", [_c("a", {
      staticClass: "dropdown-item",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.prepararUsoManual(nota);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-clipboard-check me-2 text-primary"
    }), _vm._v(" Usar manualmente")])])])]) : _c("button", {
      staticClass: "btn btn-sm btn-outline-secondary rounded-pill disabled",
      attrs: {
        title: "No hay acciones disponibles"
      }
    }, [_c("i", {
      staticClass: "fas fa-lock"
    })])])]);
  }), _vm._v(" "), _vm.notasFiltradas.length === 0 ? _c("tr", [_vm._m(2)]) : _vm._e()], 2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalDevolucion",
      tabindex: "-1",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content border-0 shadow-lg"
  }, [_vm._m(3), _vm._v(" "), _vm.notaSeleccionada ? _c("div", {
    staticClass: "modal-body p-4"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "bg-success-subtle border border-success-subtle rounded p-3 mb-3 d-flex justify-content-between align-items-center"
  }, [_c("span", {
    staticClass: "text-success fw-bold"
  }, [_vm._v("Monto a Devolver:")]), _vm._v(" "), _c("span", {
    staticClass: "fs-4 fw-bold text-success"
  }, [_vm._v("S/ " + _vm._s(parseFloat(_vm.notaSeleccionada.monto_disponible).toFixed(2)))])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label small fw-bold text-muted"
  }, [_vm._v("Motivo / Observación del egreso")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDevolucion.observacion,
      expression: "formDevolucion.observacion"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "2",
      placeholder: "Opcional..."
    },
    domProps: {
      value: _vm.formDevolucion.observacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDevolucion, "observacion", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "modal-footer border-0 p-4 pt-0"
  }, [_c("button", {
    staticClass: "btn btn-light rounded-pill px-4",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Cancelar")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success rounded-pill px-4 shadow",
    attrs: {
      type: "button",
      disabled: _vm.procesando
    },
    on: {
      click: _vm.confirmarDevolucion
    }
  }, [_vm.procesando ? _c("i", {
    staticClass: "fas fa-spinner fa-spin me-2"
  }) : _vm._e(), _vm._v(" Confirmar Devolución\n          ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalUsoManual",
      tabindex: "-1",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content border-0 shadow-lg"
  }, [_vm._m(5), _vm._v(" "), _vm.notaSeleccionada ? _c("div", {
    staticClass: "modal-body p-4"
  }, [_c("p", {
    staticClass: "text-muted small mb-4"
  }, [_vm._v("Descuenta manualmente un monto de la nota de crédito. Útil si se usó el saldo para pagar una consulta o comprar otro paquete.")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mb-3 text-muted"
  }, [_c("span", [_vm._v("Saldo Disponible:")]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold text-dark"
  }, [_vm._v("S/ " + _vm._s(parseFloat(_vm.notaSeleccionada.monto_disponible).toFixed(2)))])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label small fw-bold text-muted"
  }, [_vm._v("Monto a descontar (S/)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.formUso.monto,
      expression: "formUso.monto",
      modifiers: {
        number: true
      }
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0.1",
      max: _vm.notaSeleccionada.monto_disponible,
      step: "0.1"
    },
    domProps: {
      value: _vm.formUso.monto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formUso, "monto", _vm._n($event.target.value));
      },
      blur: function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label small fw-bold text-muted"
  }, [_vm._v("Detalle / Razón")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formUso.observacion,
      expression: "formUso.observacion"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "2",
      placeholder: "Ej: Pago parcial Cita #1234"
    },
    domProps: {
      value: _vm.formUso.observacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formUso, "observacion", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "modal-footer border-0 p-4 pt-0"
  }, [_c("button", {
    staticClass: "btn btn-light rounded-pill px-4",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Cancelar")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary rounded-pill px-4 shadow",
    attrs: {
      type: "button",
      disabled: _vm.procesando || !_vm.esMontoValido
    },
    on: {
      click: _vm.confirmarUso
    }
  }, [_vm.procesando ? _c("i", {
    staticClass: "fas fa-spinner fa-spin me-2"
  }) : _vm._e(), _vm._v(" Confirmar Uso\n          ")])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-4"
  }, [_c("h3", {
    staticClass: "fw-bold mb-0 text-dark"
  }, [_c("i", {
    staticClass: "fas fa-money-check-alt text-primary me-2"
  }), _vm._v(" Notas de Crédito\n    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "table-light"
  }, [_c("tr", [_c("th", {
    staticClass: "ps-4"
  }, [_vm._v("ID")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Paquete Origen")]), _vm._v(" "), _c("th", [_vm._v("Monto Original")]), _vm._v(" "), _c("th", [_vm._v("Disponible")]), _vm._v(" "), _c("th", [_vm._v("Estado")]), _vm._v(" "), _c("th", {
    staticClass: "text-end pe-4"
  }, [_vm._v("Acciones")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center py-5 text-muted",
    attrs: {
      colspan: "7"
    }
  }, [_c("i", {
    staticClass: "fas fa-inbox fa-3x mb-3 opacity-50"
  }), _vm._v(" "), _c("p", {
    staticClass: "mb-0"
  }, [_vm._v("No se encontraron notas de crédito")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header border-0 pb-0 px-4 pt-4"
  }, [_c("h5", {
    staticClass: "modal-title fw-bold text-dark"
  }, [_c("i", {
    staticClass: "fas fa-hand-holding-usd text-success me-2"
  }), _vm._v(" Devolver Dinero\n          ")]), _vm._v(" "), _c("button", {
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
  return _c("p", {
    staticClass: "text-muted small mb-4"
  }, [_vm._v("Esta acción registrará un "), _c("b", [_vm._v("Egreso")]), _vm._v(" en la caja del día por el monto total disponible y cerrará la nota de crédito.")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header border-0 pb-0 px-4 pt-4"
  }, [_c("h5", {
    staticClass: "modal-title fw-bold text-dark"
  }, [_c("i", {
    staticClass: "fas fa-clipboard-check text-primary me-2"
  }), _vm._v(" Descontar Saldo\n          ")]), _vm._v(" "), _c("button", {
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/NotasCredito.vue?vue&type=style&index=0&id=cb7e28e2&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/NotasCredito.vue?vue&type=style&index=0&id=cb7e28e2&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.avatar-sm[data-v-cb7e28e2] {\n  width: 32px;\n  height: 32px;\n  font-size: 0.875rem;\n}\n.dropdown-menu[data-v-cb7e28e2] {\n  border-radius: 12px;\n  border: none;\n}\n.dropdown-item[data-v-cb7e28e2] {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/NotasCredito.vue?vue&type=style&index=0&id=cb7e28e2&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/NotasCredito.vue?vue&type=style&index=0&id=cb7e28e2&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotasCredito_vue_vue_type_style_index_0_id_cb7e28e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotasCredito.vue?vue&type=style&index=0&id=cb7e28e2&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/NotasCredito.vue?vue&type=style&index=0&id=cb7e28e2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotasCredito_vue_vue_type_style_index_0_id_cb7e28e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotasCredito_vue_vue_type_style_index_0_id_cb7e28e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/administrador/views/NotasCredito.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/administrador/views/NotasCredito.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotasCredito_vue_vue_type_template_id_cb7e28e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotasCredito.vue?vue&type=template&id=cb7e28e2&scoped=true */ "./resources/js/components/administrador/views/NotasCredito.vue?vue&type=template&id=cb7e28e2&scoped=true");
/* harmony import */ var _NotasCredito_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotasCredito.vue?vue&type=script&lang=js */ "./resources/js/components/administrador/views/NotasCredito.vue?vue&type=script&lang=js");
/* harmony import */ var _NotasCredito_vue_vue_type_style_index_0_id_cb7e28e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotasCredito.vue?vue&type=style&index=0&id=cb7e28e2&scoped=true&lang=css */ "./resources/js/components/administrador/views/NotasCredito.vue?vue&type=style&index=0&id=cb7e28e2&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NotasCredito_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotasCredito_vue_vue_type_template_id_cb7e28e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NotasCredito_vue_vue_type_template_id_cb7e28e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "cb7e28e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/administrador/views/NotasCredito.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/administrador/views/NotasCredito.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/administrador/views/NotasCredito.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotasCredito_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotasCredito.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/NotasCredito.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotasCredito_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/administrador/views/NotasCredito.vue?vue&type=template&id=cb7e28e2&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/administrador/views/NotasCredito.vue?vue&type=template&id=cb7e28e2&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotasCredito_vue_vue_type_template_id_cb7e28e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotasCredito_vue_vue_type_template_id_cb7e28e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotasCredito_vue_vue_type_template_id_cb7e28e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotasCredito.vue?vue&type=template&id=cb7e28e2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/NotasCredito.vue?vue&type=template&id=cb7e28e2&scoped=true");


/***/ }),

/***/ "./resources/js/components/administrador/views/NotasCredito.vue?vue&type=style&index=0&id=cb7e28e2&scoped=true&lang=css":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/administrador/views/NotasCredito.vue?vue&type=style&index=0&id=cb7e28e2&scoped=true&lang=css ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotasCredito_vue_vue_type_style_index_0_id_cb7e28e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotasCredito.vue?vue&type=style&index=0&id=cb7e28e2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/NotasCredito.vue?vue&type=style&index=0&id=cb7e28e2&scoped=true&lang=css");


/***/ })

}]);