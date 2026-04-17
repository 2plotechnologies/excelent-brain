"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_administrador_views_HomePaquetes_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HomePaquetes',
  data: function data() {
    return {
      paquetesFiltrados: [],
      busqueda: '',
      filtroEstado: 0,
      filtroTipo: -1,
      metricas: {
        activos: 0,
        completados: 0,
        vencidas: 0,
        totales: 0
      },
      pagination: {
        current_page: 1,
        last_page: 1,
        from: 1,
        to: 1
      },
      searchTimeout: null,
      loading: false,
      activeHistories: [],
      idUsuario: -1,
      paqueteSeleccionado: null,
      procesandoPago: false
    };
  },
  computed: {
    pagesNumber: function pagesNumber() {
      if (!this.pagination.to) return [];
      var from = this.pagination.current_page - 2;
      if (from < 1) from = 1;
      var to = from + 4;
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }
      var pagesArray = [];
      for (var page = from; page <= to; page++) {
        pagesArray.push(page);
      }
      return pagesArray;
    }
  },
  mounted: function mounted() {
    this.obtenerUsuarioYPaquetes();
  },
  methods: {
    obtenerUsuarioYPaquetes: function obtenerUsuarioYPaquetes() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this.axios.get('/api/user');
            case 3:
              res = _context.sent;
              _this.idUsuario = parseInt(res.data.user.id);
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.warn("No se pudo obtener el usuario", _context.t0);
            case 10:
              _this.cargarPaquetes();
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    cargarPaquetes: function cargarPaquetes() {
      var _arguments = arguments,
        _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var page, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
              if (!_this2.loading) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");
            case 3:
              _this2.loading = true;
              _context2.prev = 4;
              _context2.next = 7;
              return _this2.axios.get("/api/listarPaquetes", {
                params: {
                  page: page,
                  busqueda: _this2.busqueda,
                  estado: _this2.filtroEstado,
                  tipo: _this2.filtroTipo
                }
              });
            case 7:
              response = _context2.sent;
              _this2.paquetesFiltrados = response.data.paquetes.data;
              _this2.metricas = response.data.metricas;
              _this2.pagination = {
                current_page: response.data.paquetes.current_page,
                last_page: response.data.paquetes.last_page,
                from: response.data.paquetes.from,
                to: response.data.paquetes.to
              };
              _context2.next = 16;
              break;
            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](4);
              console.error("Error cargando paquetes:", _context2.t0);
            case 16:
              _context2.prev = 16;
              _this2.loading = false;
              return _context2.finish(16);
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[4, 13, 16, 19]]);
      }))();
    },
    cambiarPagina: function cambiarPagina(page) {
      if (page >= 1 && page <= this.pagination.last_page) {
        this.cargarPaquetes(page);
      }
    },
    filtrarPaquetes: function filtrarPaquetes() {
      var _this3 = this;
      // Debounce the search
      if (this.searchTimeout) clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(function () {
        _this3.cargarPaquetes(1);
      }, 500);
    },
    setFiltroEstado: function setFiltroEstado(state) {
      this.filtroEstado = state;
      this.cargarPaquetes(1);
    },
    setFiltroTipo: function setFiltroTipo(type) {
      this.filtroTipo = type;
      this.cargarPaquetes(1);
    },
    formatFecha: function formatFecha(fechaStr) {
      if (!fechaStr) return '';
      var parts = fechaStr.split('-');
      if (parts.length === 3) {
        // Assume YYYY-MM-DD
        return "".concat(parts[0], "-").concat(parts[1], "-").concat(parts[2].substring(0, 2));
      }
      return fechaStr;
    },
    calcularProgreso: function calcularProgreso(paquete) {
      if (paquete.total_sesiones == 0) return 0;
      var target = paquete.sesiones_usadas / paquete.total_sesiones * 100;
      return target > 100 ? 100 : Math.round(target);
    },
    getStatusClass: function getStatusClass(estado) {
      switch (estado) {
        case 2:
          return 'status-act';
        // Activo
        case 3:
          return 'status-com';
        // Completado
        case 1:
          return 'status-pen';
        // Pendiente
        case 6:
          return 'status-can';
        // Cancelado
        default:
          return 'status-def';
      }
    },
    getProgressBarClass: function getProgressBarClass(paquete) {
      var calc = this.calcularProgreso(paquete);
      if (calc >= 100) return 'bg-primary';
      if (paquete.estado == 2) return 'bg-warning';
      return 'bg-secondary';
    },
    getTipoBadge: function getTipoBadge(idClasificacion) {
      if (idClasificacion == 1) return 'Psicológica';
      if (idClasificacion == 2) return 'Psiquiátrica';
      if (idClasificacion == 5) return 'Membresía Ext.';
      return 'Consulta';
    },
    toggleHistory: function toggleHistory(id) {
      var index = this.activeHistories.indexOf(id);
      if (index > -1) {
        this.activeHistories.splice(index, 1);
      } else {
        this.activeHistories.push(id);
      }
    },
    getCitaStatusBadgeMap: function getCitaStatusBadgeMap(status) {
      switch (parseInt(status)) {
        case 1:
          return {
            text: 'Agendado',
            "class": 'bg-warning text-dark'
          };
        case 2:
          return {
            text: 'Atendido / Confirmado',
            "class": 'bg-success text-white'
          };
        case 3:
          return {
            text: 'Anulado',
            "class": 'bg-danger text-white'
          };
        case 4:
          return {
            text: 'Reprogramado',
            "class": 'bg-info text-dark'
          };
        default:
          return {
            text: 'Otro',
            "class": 'bg-secondary text-white'
          };
      }
    },
    verReporte: function verReporte(paquete) {
      window.open("/api/reportePaquete/".concat(paquete.id, "?token=").concat(this.$token), '_blank');
    },
    esCuotaVencida: function esCuotaVencida(fecha) {
      if (!fecha) return false;
      var today = new Date().toISOString().slice(0, 10);
      return fecha < today;
    },
    procesarPago: function procesarPago(cuota) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var payload;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (confirm('¿Seguro que deseas registrar el pago de S/ ' + parseFloat(cuota.monto).toFixed(2) + '?')) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              _this4.procesandoPago = true;
              _context3.prev = 3;
              payload = {
                idDeuda: cuota.id,
                user_id: _this4.idUsuario,
                estado: 2,
                observacion: 'Pago de cuota desde administrador',
                nombre: _this4.paqueteSeleccionado.patient_name + ' ' + (_this4.paqueteSeleccionado.patient_nombres || ''),
                precio: cuota.monto,
                tipo: 8,
                idMembresia: _this4.paqueteSeleccionado.id
              };
              _context3.next = 7;
              return _this4.axios.post('/api/pagarDeudaMembresia', payload);
            case 7:
              cuota.estado = 2;
              _this4.cargarPaquetes(_this4.pagination.current_page);
              _context3.next = 15;
              break;
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](3);
              console.error(_context3.t0);
              alert('Ocurrió un error procesando el pago. Verifica tu conexión.');
            case 15:
              _context3.prev = 15;
              _this4.procesandoPago = false;
              return _context3.finish(15);
            case 18:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[3, 11, 15, 18]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=template&id=27b789ef&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=template&id=27b789ef&scoped=true ***!
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
    staticClass: "paquetes-container pb-5"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-4 mt-2 header-section"
  }, [_c("div", {
    staticClass: "d-flex align-items-center gap-3"
  }, [_vm._m(0), _vm._v(" "), _vm.metricas.vencidas > 0 ? _c("div", {
    staticClass: "deudas-badge"
  }, [_c("i", {
    staticClass: "fas fa-user-times me-1"
  }), _vm._v(" Deudas\n        "), _c("span", {
    staticClass: "badge bg-danger ms-1 rounded-pill"
  }, [_vm._v(_vm._s(_vm.metricas.vencidas))])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mb-4 flex-wrap gap-2"
  }, [_c("div", {
    staticClass: "search-box"
  }, [_c("i", {
    staticClass: "fas fa-search search-icon"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.busqueda,
      expression: "busqueda"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Buscar por paciente o DNI..."
    },
    domProps: {
      value: _vm.busqueda
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.busqueda = $event.target.value;
      }, _vm.filtrarPaquetes]
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row g-3 mb-4 metricas-row"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {
    staticClass: "card shadow-sm border-0 h-100 summary-card act-card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("p", {
    staticClass: "text-muted text-uppercase mb-1 small fw-bold"
  }, [_vm._v("Activos")]), _vm._v(" "), _c("h2", {
    staticClass: "mb-0 text-success fw-bold"
  }, [_vm._v(_vm._s(_vm.metricas.activos))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {
    staticClass: "card shadow-sm border-0 h-100 summary-card com-card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("p", {
    staticClass: "text-muted text-uppercase mb-1 small fw-bold"
  }, [_vm._v("Completados")]), _vm._v(" "), _c("h2", {
    staticClass: "mb-0 text-primary fw-bold"
  }, [_vm._v(_vm._s(_vm.metricas.completados))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {
    staticClass: "card shadow-sm border-0 h-100 summary-card ven-card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("p", {
    staticClass: "text-muted text-uppercase mb-1 small fw-bold"
  }, [_vm._v("Cuotas Vencidas")]), _vm._v(" "), _c("h2", {
    staticClass: "mb-0 text-danger fw-bold"
  }, [_vm._v(_vm._s(_vm.metricas.vencidas))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {
    staticClass: "card shadow-sm border-0 h-100 summary-card tot-card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("p", {
    staticClass: "text-muted text-uppercase mb-1 small fw-bold"
  }, [_vm._v("Total Paquetes")]), _vm._v(" "), _c("h2", {
    staticClass: "mb-0 text-dark fw-bold"
  }, [_vm._v(_vm._s(_vm.metricas.totales))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "filters-area mb-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-center mb-2"
  }, [_c("span", {
    staticClass: "filter-label text-muted"
  }, [_vm._v("Estado:")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 ms-3 flex-wrap"
  }, [_c("button", {
    staticClass: "btn btn-sm btn-filter",
    "class": {
      active: _vm.filtroEstado === 0
    },
    on: {
      click: function click($event) {
        return _vm.setFiltroEstado(0);
      }
    }
  }, [_vm._v("Todos")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-filter",
    "class": {
      active: _vm.filtroEstado === 2
    },
    on: {
      click: function click($event) {
        return _vm.setFiltroEstado(2);
      }
    }
  }, [_vm._v("Activo")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-filter",
    "class": {
      active: _vm.filtroEstado === 3
    },
    on: {
      click: function click($event) {
        return _vm.setFiltroEstado(3);
      }
    }
  }, [_vm._v("Completado")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-filter",
    "class": {
      active: _vm.filtroEstado === 6
    },
    on: {
      click: function click($event) {
        return _vm.setFiltroEstado(6);
      }
    }
  }, [_vm._v("Cancelado")])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("span", {
    staticClass: "filter-label text-muted"
  }, [_vm._v("Tipo:")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 ms-3 flex-wrap"
  }, [_c("button", {
    staticClass: "btn btn-sm btn-filter",
    "class": {
      active: _vm.filtroTipo === -1
    },
    on: {
      click: function click($event) {
        return _vm.setFiltroTipo(-1);
      }
    }
  }, [_vm._v("Todos")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-filter",
    "class": {
      active: _vm.filtroTipo === 1
    },
    on: {
      click: function click($event) {
        return _vm.setFiltroTipo(1);
      }
    }
  }, [_vm._v("Consulta / Psicológica")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-filter",
    "class": {
      active: _vm.filtroTipo === 0
    },
    on: {
      click: function click($event) {
        return _vm.setFiltroTipo(0);
      }
    }
  }, [_vm._v("Membresía Ext.")])])])]), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "text-center py-5"
  }, [_vm._m(1)]) : _vm.paquetesFiltrados.length === 0 ? _c("div", {
    staticClass: "text-center py-5"
  }, [_vm._m(2)]) : _vm._e(), _vm._v(" "), !_vm.loading && _vm.paquetesFiltrados.length > 0 ? _c("div", {
    staticClass: "package-list"
  }, _vm._l(_vm.paquetesFiltrados, function (paquete) {
    return _c("div", {
      key: paquete.id,
      staticClass: "card shadow-sm border-0 mb-3 package-card",
      "class": {
        "border-active": paquete.estado === 2,
        "border-completed": paquete.estado === 3
      }
    }, [_c("div", {
      staticClass: "card-body p-4"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-start"
    }, [_c("div", {
      staticClass: "d-flex gap-3"
    }, [_vm._m(3, true), _vm._v(" "), _c("div", [_c("div", {
      staticClass: "d-flex align-items-center gap-2 mb-2"
    }, [_c("h5", {
      staticClass: "mb-0 fw-bold package-title"
    }, [_vm._v(_vm._s(paquete.paquete_nombre))]), _vm._v(" "), _c("span", {
      staticClass: "status-badge",
      "class": _vm.getStatusClass(paquete.estado)
    }, [_vm._v(_vm._s(paquete.status_name))]), _vm._v(" "), _c("span", {
      staticClass: "type-badge"
    }, [_vm._v(_vm._s(_vm.getTipoBadge(paquete.idClasificacion)))])]), _vm._v(" "), _c("div", {
      staticClass: "d-flex flex-wrap gap-4 text-muted small info-meta mb-3"
    }, [_c("span", {
      staticClass: "d-flex align-items-center"
    }, [_c("i", {
      staticClass: "far fa-user me-1"
    }), _vm._v(" " + _vm._s(paquete.patient_name) + " " + _vm._s(paquete.patient_nombres))]), _vm._v(" "), _c("span", {
      staticClass: "d-flex align-items-center"
    }, [_c("i", {
      staticClass: "far fa-calendar-alt me-1"
    }), _vm._v(" " + _vm._s(_vm.formatFecha(paquete.inicio)) + " — " + _vm._s(_vm.formatFecha(paquete.fin)))]), _vm._v(" "), paquete.professional ? _c("span", {
      staticClass: "d-flex align-items-center"
    }, [_c("i", {
      staticClass: "fas fa-user-md me-1"
    }), _vm._v(" " + _vm._s(paquete.professional))]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "progress-section mb-3"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between small text-muted mb-1"
    }, [_c("span", [_vm._v(_vm._s(paquete.sesiones_usadas) + " de " + _vm._s(paquete.total_sesiones) + " sesiones usadas")]), _vm._v(" "), _c("span", {
      staticClass: "fw-bold"
    }, [_vm._v(_vm._s(_vm.calcularProgreso(paquete)) + "%")])]), _vm._v(" "), _c("div", {
      staticClass: "progress",
      staticStyle: {
        height: "6px"
      }
    }, [_c("div", {
      staticClass: "progress-bar",
      "class": _vm.getProgressBarClass(paquete),
      style: {
        width: _vm.calcularProgreso(paquete) + "%"
      },
      attrs: {
        role: "progressbar",
        "aria-valuenow": _vm.calcularProgreso(paquete),
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }
    })])])])])]), _vm._v(" "), _c("hr", {
      staticClass: "border-light opacity-50 my-3"
    }), _vm._v(" "), _c("div", {
      staticClass: "d-flex justify-content-between align-items-center package-footer flex-wrap gap-3"
    }, [_c("div", {
      staticClass: "d-flex align-items-center gap-4 payment-info"
    }, [_c("div", {
      staticClass: "fw-bold small"
    }, [_c("i", {
      staticClass: "fas fa-dollar-sign text-muted me-1"
    }), _vm._v(" Total: S/ " + _vm._s(parseFloat(paquete.monto).toFixed(2)) + "\n            ")]), _vm._v(" "), _c("div", {
      staticClass: "fw-bold small text-success"
    }, [_c("i", {
      staticClass: "fas fa-check-circle me-1"
    }), _vm._v(" Pagado: S/ " + _vm._s(parseFloat(paquete.pagado || 0).toFixed(2)) + "\n            ")]), _vm._v(" "), paquete.debe > 0 ? _c("div", {
      staticClass: "fw-bold small text-danger"
    }, [_c("i", {
      staticClass: "fas fa-exclamation-triangle me-1"
    }), _vm._v(" Debe: S/ " + _vm._s(parseFloat(paquete.debe).toFixed(2)) + "\n            ")]) : _c("div", {
      staticClass: "fw-bold small text-success"
    }, [_c("span", {
      staticClass: "badge bg-success-subtle text-success border border-success-subtle rounded-pill"
    }, [_vm._v("Pagado al 100%")])])]), _vm._v(" "), _c("div", {
      staticClass: "d-flex align-items-center gap-3"
    }, [_c("div", {
      staticClass: "small text-muted me-3"
    }, [_vm._v("\n              Cuotas: " + _vm._s(paquete.total_cuotas || 0) + " \n              "), paquete.cuotas_vencidas > 0 ? _c("span", {
      staticClass: "text-danger ms-2 badge bg-danger-subtle text-danger p-1 px-2 border border-danger-subtle rounded-pill"
    }, [_c("i", {
      staticClass: "fas fa-exclamation-triangle"
    }), _vm._v(" " + _vm._s(paquete.cuotas_vencidas) + " cuota(s) vencida(s)\n              ")]) : _c("span", {
      staticClass: "text-success ms-2 badge bg-success-subtle text-success p-1 px-2 border border-success-subtle rounded-pill"
    }, [_vm._v("Cuotas al día")])]), _vm._v(" "), paquete.debe > 0 ? _c("button", {
      staticClass: "btn btn-light btn-sm shadow-sm action-btn outline-btn",
      attrs: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalPagarCuota"
      },
      on: {
        click: function click($event) {
          _vm.paqueteSeleccionado = paquete;
        }
      }
    }, [_c("i", {
      staticClass: "far fa-credit-card me-1"
    }), _vm._v(" Pagar cuota\n            ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
      staticClass: "d-flex justify-content-between align-items-center mt-3 pt-2"
    }, [_c("div", {
      staticClass: "d-flex gap-3 small"
    }, [paquete.descuento > 0 ? _c("span", {
      staticClass: "text-success fw-bold"
    }, [_vm._v("-" + _vm._s(paquete.descuento) + " desc.")]) : _vm._e(), _vm._v(" "), paquete.estado === 3 ? _c("a", {
      staticClass: "text-primary text-decoration-none hover-link",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.verReporte(paquete);
        }
      }
    }, [_c("i", {
      staticClass: "far fa-file-alt me-1"
    }), _vm._v(" Ver reporte")]) : _vm._e()]), _vm._v(" "), _c("a", {
      staticClass: "small text-primary text-decoration-none dropdown-toggle-link",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.toggleHistory(paquete.id);
        }
      }
    }, [_vm._v("\n            Historial de citas "), _c("i", {
      staticClass: "fas ms-1",
      "class": _vm.activeHistories.includes(paquete.id) ? "fa-chevron-up" : "fa-chevron-down"
    })])]), _vm._v(" "), _vm.activeHistories.includes(paquete.id) ? _c("div", {
      staticClass: "appointment-history-box mt-3 p-3 bg-light rounded"
    }, [_vm._m(4, true), _vm._v(" "), !paquete.historial_citas || paquete.historial_citas.length === 0 ? _c("div", {
      staticClass: "text-muted small fst-italic"
    }, [_vm._v("\n            No hay citas.\n          ")]) : _c("div", {
      staticClass: "history-list-container"
    }, _vm._l(paquete.historial_citas, function (cita, index) {
      return _c("div", {
        key: cita.id,
        staticClass: "history-item d-flex align-items-center py-2 border-bottom"
      }, [_c("div", {
        staticClass: "fw-bold text-dark small",
        staticStyle: {
          "min-width": "110px"
        }
      }, [_c("i", {
        staticClass: "far fa-calendar-check text-primary me-1"
      }), _vm._v(" " + _vm._s(_vm.formatFecha(cita.date)) + " "), _c("br"), _vm._v(" "), _c("small", {
        staticClass: "text-muted fw-normal ms-3"
      }, [_vm._v(_vm._s(cita.hora_inicio ? cita.hora_inicio.substring(0, 5) : ""))])]), _vm._v(" "), _c("div", {
        staticClass: "small w-100 ps-2 border-start ms-2"
      }, [_c("div", {
        staticClass: "d-flex align-items-center flex-wrap gap-2"
      }, [_c("span", {
        staticClass: "fw-bold"
      }, [_vm._v(_vm._s(cita.professional ? cita.professional.name : "Sin asignación"))]), _vm._v(" "), _c("span", {
        staticClass: "badge",
        "class": _vm.getCitaStatusBadgeMap(cita.status)["class"]
      }, [_vm._v(_vm._s(_vm.getCitaStatusBadgeMap(cita.status).text))])]), _vm._v(" "), cita.link ? _c("div", {
        staticClass: "text-muted mt-1",
        staticStyle: {
          "font-size": "0.75rem"
        }
      }, [_c("i", {
        staticClass: "fas fa-link me-1"
      }), _vm._v(" Enlace disponible")]) : _vm._e()])]);
    }), 0)]) : _vm._e()])]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.paqueteSeleccionado ? _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalPagarCuota",
      tabindex: "-1",
      "aria-labelledby": "modalPagarCuotaLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-lg"
  }, [_c("div", {
    staticClass: "modal-content border-0 shadow"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "modal-body p-4"
  }, [_c("div", {
    staticClass: "row mb-4"
  }, [_c("div", {
    staticClass: "col-md-6 border-end"
  }, [_c("p", {
    staticClass: "text-uppercase text-muted small fw-bold mb-1"
  }, [_vm._v("Paciente")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_vm._m(6), _vm._v(" "), _c("h6", {
    staticClass: "mb-0 fw-bold"
  }, [_vm._v(_vm._s(_vm.paqueteSeleccionado.patient_name) + " " + _vm._s(_vm.paqueteSeleccionado.patient_nombres))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 ps-4"
  }, [_c("p", {
    staticClass: "text-uppercase text-muted small fw-bold mb-1"
  }, [_vm._v("Total Pendiente (Deuda)")]), _vm._v(" "), _c("h4", {
    staticClass: "mb-0 text-danger fw-bold"
  }, [_vm._v("S/ " + _vm._s(parseFloat(_vm.paqueteSeleccionado.debe).toFixed(2)))])])]), _vm._v(" "), _c("h6", {
    staticClass: "fw-bold mb-3"
  }, [_vm._v("Desglose de Cuotas")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive bg-white rounded border"
  }, [_c("table", {
    staticClass: "table table-hover mb-0 align-middle"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", [_vm._l(_vm.paqueteSeleccionado.deudas || [], function (cuota) {
    return _c("tr", {
      key: cuota.id,
      "class": {
        "table-success": cuota.estado == 2
      }
    }, [_c("td", [_c("div", {
      staticClass: "fw-bold"
    }, [_vm._v(_vm._s(_vm.formatFecha(cuota.fecha)))]), _vm._v(" "), cuota.estado == 1 && _vm.esCuotaVencida(cuota.fecha) ? _c("small", {
      staticClass: "text-danger"
    }, [_c("i", {
      staticClass: "fas fa-exclamation-circle"
    }), _vm._v(" Cuota Vencida\n                    ")]) : _vm._e()]), _vm._v(" "), _c("td", [cuota.estado == 2 ? _c("span", {
      staticClass: "badge bg-success-subtle border border-success-subtle text-success"
    }, [_vm._v("Pagado")]) : _c("span", {
      staticClass: "badge bg-warning-subtle border border-warning-subtle text-warning"
    }, [_vm._v("Pendiente")])]), _vm._v(" "), _c("td", {
      staticClass: "text-end fw-bold"
    }, [_vm._v("\n                    S/ " + _vm._s(parseFloat(cuota.monto).toFixed(2)) + "\n                  ")]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [cuota.estado == 1 ? _c("button", {
      staticClass: "btn btn-sm btn-primary shadow-sm",
      attrs: {
        disabled: _vm.procesandoPago
      },
      on: {
        click: function click($event) {
          return _vm.procesarPago(cuota);
        }
      }
    }, [!_vm.procesandoPago ? _c("i", {
      staticClass: "fas fa-hand-holding-usd me-1"
    }) : _c("i", {
      staticClass: "fas fa-spinner fa-spin me-1"
    }), _vm._v(" Pagar \n                    ")]) : _c("button", {
      staticClass: "btn btn-sm btn-light text-success",
      attrs: {
        disabled: ""
      }
    }, [_c("i", {
      staticClass: "fas fa-check"
    })])])]);
  }), _vm._v(" "), !_vm.paqueteSeleccionado.deudas || _vm.paqueteSeleccionado.deudas.length === 0 ? _c("tr", [_c("td", {
    staticClass: "text-center py-4 text-muted fst-italic",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("No existen registros de cuotas para este paquete.")])]) : _vm._e()], 2)])])]), _vm._v(" "), _vm._m(8)])])]) : _vm._e(), _vm._v(" "), _vm.pagination.last_page > 1 ? _c("div", {
    staticClass: "d-flex justify-content-center mt-4"
  }, [_c("nav", {
    attrs: {
      "aria-label": "Page navigation"
    }
  }, [_c("ul", {
    staticClass: "pagination shadow-sm"
  }, [_c("li", {
    staticClass: "page-item",
    "class": {
      disabled: _vm.pagination.current_page === 1
    }
  }, [_c("a", {
    staticClass: "page-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.cambiarPagina(_vm.pagination.current_page - 1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-chevron-left"
  }), _vm._v(" Anterior")])]), _vm._v(" "), _vm._l(_vm.pagesNumber, function (page) {
    return _c("li", {
      key: page,
      staticClass: "page-item",
      "class": {
        active: page === _vm.pagination.current_page
      }
    }, [_c("a", {
      staticClass: "page-link",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.cambiarPagina(page);
        }
      }
    }, [_vm._v(_vm._s(page))])]);
  }), _vm._v(" "), _c("li", {
    staticClass: "page-item",
    "class": {
      disabled: _vm.pagination.current_page === _vm.pagination.last_page
    }
  }, [_c("a", {
    staticClass: "page-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.cambiarPagina(_vm.pagination.current_page + 1);
      }
    }
  }, [_vm._v("Siguiente "), _c("i", {
    staticClass: "fas fa-chevron-right"
  })])])], 2)])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h1", {
    staticClass: "h3 mb-0 text-gray-800 fw-bold d-flex align-items-center"
  }, [_c("i", {
    staticClass: "fas fa-box-open text-primary me-2"
  }), _vm._v(" Paquetes Administrador\n      ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-muted fs-5"
  }, [_c("i", {
    staticClass: "fas fa-spinner fa-spin fa-2x mb-3"
  }), _c("br"), _vm._v("\n      Cargando paquetes...\n    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-muted fs-5"
  }, [_c("i", {
    staticClass: "fas fa-inbox fa-3x mb-3 text-light"
  }), _c("br"), _vm._v("\n      No se encontraron paquetes.\n    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "package-icon"
  }, [_c("i", {
    staticClass: "fas fa-cube text-primary"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", {
    staticClass: "fw-bold mb-3 small text-dark"
  }, [_c("i", {
    staticClass: "fas fa-list me-2"
  }), _vm._v(" Historial de Citas")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header bg-primary text-white"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "modalPagarCuotaLabel"
    }
  }, [_c("i", {
    staticClass: "fas fa-file-invoice-dollar me-2"
  }), _vm._v(" Pagar Cuotas de Membresía")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close btn-close-white",
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
    staticClass: "bg-light rounded-circle p-2 me-2"
  }, [_c("i", {
    staticClass: "fas fa-user text-primary"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "table-light"
  }, [_c("tr", [_c("th", {
    staticClass: "py-3"
  }, [_vm._v("Fecha de Vencimiento")]), _vm._v(" "), _c("th", [_vm._v("Estado")]), _vm._v(" "), _c("th", {
    staticClass: "text-end"
  }, [_vm._v("Monto a Pagar")]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v("Acción")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-footer bg-light"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Cerrar ventana")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=style&index=0&id=27b789ef&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=style&index=0&id=27b789ef&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.paquetes-container[data-v-27b789ef] {\n  font-family: 'Inter', sans-serif;\n  color: #334155;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  padding: 1.5rem;\n  border-radius: 12px;\n}\n\n/* Identifiers */\n.deudas-badge[data-v-27b789ef] {\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  padding: 0.35rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n}\n\n/* Search Box */\n.search-box[data-v-27b789ef] {\n  position: relative;\n  width: 100%;\n  max-width: 380px;\n}\n.search-box .search-icon[data-v-27b789ef] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n}\n.search-box input[data-v-27b789ef] {\n  padding-left: 40px;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  background: #fff;\n  transition: all 0.2s;\n  box-shadow: 0 1px 2px rgba(0,0,0,0.02);\n}\n.search-box input[data-v-27b789ef]:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n  outline: none;\n}\n\n/* Metric Cards */\n.summary-card[data-v-27b789ef] {\n  border-radius: 12px;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.summary-card[data-v-27b789ef]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.06), 0 4px 6px -2px rgba(0,0,0,0.03) !important;\n}\n\n/* Filters */\n.filter-label[data-v-27b789ef] {\n  width: 60px;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.btn-filter[data-v-27b789ef] {\n  background: transparent;\n  color: #64748b;\n  border: none;\n  font-weight: 500;\n  padding: 0.4rem 1rem;\n  border-radius: 20px;\n  transition: all 0.2s;\n}\n.btn-filter[data-v-27b789ef]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-filter.active[data-v-27b789ef] {\n  background: #3b82f6;\n  color: white;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);\n}\n\n/* Package List */\n.package-card[data-v-27b789ef] {\n  border-radius: 14px;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.package-card[data-v-27b789ef]:hover {\n  box-shadow: 0 10px 20px -5px rgba(0,0,0,0.06), 0 8px 10px -6px rgba(0,0,0,0.04) !important;\n}\n.border-active[data-v-27b789ef] {\n  border-left: 5px solid #f59e0b !important;\n}\n.border-completed[data-v-27b789ef] {\n  border-left: 5px solid #3b82f6 !important;\n}\n.package-icon[data-v-27b789ef] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: #eff6ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n}\n.package-title[data-v-27b789ef] {\n  color: #0f172a;\n  font-size: 1.15rem;\n}\n\n/* Badges */\n.status-badge[data-v-27b789ef] {\n  padding: 0.25rem 0.6rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.status-act[data-v-27b789ef] { background: #dcfce7; color: #166534;\n}\n.status-com[data-v-27b789ef] { background: #dbeafe; color: #1e3a8a;\n}\n.status-pen[data-v-27b789ef] { background: #fef9c3; color: #854d0e;\n}\n.status-can[data-v-27b789ef] { background: #fee2e2; color: #991b1b;\n}\n.status-def[data-v-27b789ef] { background: #f1f5f9; color: #475569;\n}\n.type-badge[data-v-27b789ef] {\n  padding: 0.25rem 0.6rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  background: #e0f2fe;\n  color: #0369a1;\n  font-weight: 600;\n}\n\n/* Progress bar smoothing */\n.progress-bar[data-v-27b789ef] {\n  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n/* Buttons */\n.outline-btn[data-v-27b789ef] {\n  border: 1px solid #e2e8f0;\n  background: white;\n  color: #475569;\n  font-weight: 500;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n.outline-btn[data-v-27b789ef]:hover {\n  background: #f8fafc;\n  color: #0f172a;\n  border-color: #cbd5e1;\n}\n.hover-link[data-v-27b789ef] {\n  transition: color 0.2s;\n}\n.hover-link[data-v-27b789ef]:hover {\n  color: #0f172a !important;\n}\n.dropdown-toggle-link[data-v-27b789ef] {\n  color: #3b82f6;\n  font-weight: 500;\n}\n.dropdown-toggle-link[data-v-27b789ef]:hover {\n  color: #2563eb;\n}\n.info-meta span[data-v-27b789ef] {\n  font-size: 0.875rem;\n}\n.history-list-container[data-v-27b789ef] {\n  max-height: 250px;\n  overflow-y: auto;\n}\n.history-list-container[data-v-27b789ef]::-webkit-scrollbar {\n  width: 6px;\n}\n.history-list-container[data-v-27b789ef]::-webkit-scrollbar-track {\n  background: #f1f5f9;\n}\n.history-list-container[data-v-27b789ef]::-webkit-scrollbar-thumb {\n  background: #cbd5e1; \n  border-radius: 10px;\n}\n.history-list-container[data-v-27b789ef]::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n.history-item[data-v-27b789ef]:last-child {\n  border-bottom: none !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=style&index=0&id=27b789ef&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=style&index=0&id=27b789ef&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePaquetes_vue_vue_type_style_index_0_id_27b789ef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePaquetes.vue?vue&type=style&index=0&id=27b789ef&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=style&index=0&id=27b789ef&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePaquetes_vue_vue_type_style_index_0_id_27b789ef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePaquetes_vue_vue_type_style_index_0_id_27b789ef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/administrador/views/HomePaquetes.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/administrador/views/HomePaquetes.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomePaquetes_vue_vue_type_template_id_27b789ef_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePaquetes.vue?vue&type=template&id=27b789ef&scoped=true */ "./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=template&id=27b789ef&scoped=true");
/* harmony import */ var _HomePaquetes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePaquetes.vue?vue&type=script&lang=js */ "./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=script&lang=js");
/* harmony import */ var _HomePaquetes_vue_vue_type_style_index_0_id_27b789ef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePaquetes.vue?vue&type=style&index=0&id=27b789ef&scoped=true&lang=css */ "./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=style&index=0&id=27b789ef&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomePaquetes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomePaquetes_vue_vue_type_template_id_27b789ef_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _HomePaquetes_vue_vue_type_template_id_27b789ef_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "27b789ef",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/administrador/views/HomePaquetes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePaquetes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePaquetes.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePaquetes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=template&id=27b789ef&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=template&id=27b789ef&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePaquetes_vue_vue_type_template_id_27b789ef_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePaquetes_vue_vue_type_template_id_27b789ef_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePaquetes_vue_vue_type_template_id_27b789ef_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePaquetes.vue?vue&type=template&id=27b789ef&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=template&id=27b789ef&scoped=true");


/***/ }),

/***/ "./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=style&index=0&id=27b789ef&scoped=true&lang=css":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=style&index=0&id=27b789ef&scoped=true&lang=css ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePaquetes_vue_vue_type_style_index_0_id_27b789ef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePaquetes.vue?vue&type=style&index=0&id=27b789ef&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/HomePaquetes.vue?vue&type=style&index=0&id=27b789ef&scoped=true&lang=css");


/***/ })

}]);