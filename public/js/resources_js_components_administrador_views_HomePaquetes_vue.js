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
/* harmony import */ var _recepcionista_components_pagos_ModalMembresias_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../recepcionista/components/pagos/ModalMembresias.vue */ "./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HomePaquetes',
  components: {
    ModalMembresias: _recepcionista_components_pagos_ModalMembresias_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
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
      vistaActiva: 'paquetes',
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
      mostrarModalPago: false,
      procesandoPago: false,
      guardandoReporte: false,
      editandoReporte: false,
      monedas: [],
      metodoPago: 1,
      formReporte: {
        resumen: '',
        logros: '',
        recomendaciones: '',
        proximos_pasos: ''
      },
      // Agendamiento de sesiones
      doctores: [],
      horariosDisponibles: [],
      loadingHorarios: false,
      guardandoCita: false,
      procesandoEstado: false,
      formProrrateo: {
        observacion: ''
      },
      nuevaSesion: {
        idProfesional: '',
        fecha: new Date().toISOString().split('T')[0],
        idHorario: '',
        modalidad: '1'
      }
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
    },
    deudasPendientes: function deudasPendientes() {
      //if (this.vistaActiva !== 'deudas') return [];
      return this.paquetesFiltrados.filter(function (paquete) {
        return parseFloat(paquete.debe || 0) > 0;
      });
    },
    deudaResumen: function deudaResumen() {
      return this.deudasPendientes.reduce(function (acc, deuda) {
        acc.totalDeudores += 1;
        acc.totalDeuda += parseFloat(deuda.debe || 0);
        acc.totalCobrado += parseFloat(deuda.pagado || 0);
        return acc;
      }, {
        totalDeudores: 0,
        totalDeuda: 0,
        totalCobrado: 0
      });
    },
    doctoresFiltrados: function doctoresFiltrados() {
      var _this = this;
      if (!this.paqueteSeleccionado || !this.doctores.length) return [];
      // Usar == para evitar problemas de tipo (string vs int)
      var filtrados = this.doctores.filter(function (doc) {
        return doc.idProfesion == _this.paqueteSeleccionado.idClasificacion;
      });
      // Si por alguna razón el filtro no devuelve nada, mostramos todos para no bloquear al usuario
      return filtrados.length > 0 ? filtrados : this.doctores;
    }
  },
  mounted: function mounted() {
    this.obtenerUsuarioYPaquetes();
    this.cargarMonedas();
    this.cargarProfesionales();
  },
  methods: {
    obtenerUsuarioYPaquetes: function obtenerUsuarioYPaquetes() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this2.axios.get('/api/user');
            case 3:
              res = _context.sent;
              _this2.idUsuario = parseInt(res.data.user.id);
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.warn("No se pudo obtener el usuario", _context.t0);
            case 10:
              _this2.cargarPaquetes();
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    cargarPaquetes: function cargarPaquetes() {
      var _arguments = arguments,
        _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var page, response, updatedPaquete;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
              if (!_this3.loading) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");
            case 3:
              _this3.loading = true;
              _context2.prev = 4;
              _context2.next = 7;
              return _this3.axios.get("/api/listarPaquetes", {
                params: {
                  page: page,
                  busqueda: _this3.busqueda,
                  estado: _this3.filtroEstado,
                  tipo: _this3.filtroTipo
                }
              });
            case 7:
              response = _context2.sent;
              _this3.paquetesFiltrados = response.data.paquetes.data;
              _this3.metricas = response.data.metricas;

              // Si hay un paquete seleccionado, actualizar su referencia.
              if (_this3.paqueteSeleccionado) {
                updatedPaquete = _this3.paquetesFiltrados.find(function (p) {
                  return p.id === _this3.paqueteSeleccionado.id;
                });
                if (updatedPaquete) {
                  _this3.paqueteSeleccionado = updatedPaquete;
                }
              }
              _this3.pagination = {
                current_page: response.data.paquetes.current_page,
                last_page: response.data.paquetes.last_page,
                from: response.data.paquetes.from,
                to: response.data.paquetes.to
              };
              _context2.next = 17;
              break;
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](4);
              console.error("Error cargando paquetes:", _context2.t0);
            case 17:
              _context2.prev = 17;
              _this3.loading = false;
              return _context2.finish(17);
            case 20:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[4, 14, 17, 20]]);
      }))();
    },
    cargarMonedas: function cargarMonedas() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _this4.axios.get("/api/listarMonedas");
            case 3:
              response = _context3.sent;
              _this4.monedas = response.data;
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
    cargarProfesionales: function cargarProfesionales() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _this5.axios.get('/api/profesional');
            case 3:
              response = _context4.sent;
              _this5.doctores = response.data;
              _context4.next = 10;
              break;
            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              console.error("Error cargando profesionales:", _context4.t0);
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    },
    abrirAgendarCita: function abrirAgendarCita(paquete) {
      this.paqueteSeleccionado = paquete;
      this.nuevaSesion = {
        idProfesional: '',
        fecha: new Date().toISOString().split('T')[0],
        idHorario: '',
        modalidad: '1'
      };
      this.horariosDisponibles = [];
      var modal = new bootstrap.Modal(document.getElementById('modalAgendarSesion'));
      modal.show();
    },
    cargarHorarios: function cargarHorarios() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var response, schedulesInvalid, schedulesAll, diasSemana, fechaObj, diaNombre;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!_this6.nuevaSesion.idProfesional || !_this6.nuevaSesion.fecha)) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");
            case 2:
              _this6.loadingHorarios = true;
              _this6.horariosDisponibles = [];
              _this6.nuevaSesion.idHorario = '';
              _context5.prev = 5;
              _context5.next = 8;
              return _this6.axios.get("/api/horario/".concat(_this6.nuevaSesion.idProfesional));
            case 8:
              response = _context5.sent;
              schedulesInvalid = response.data.schedulesInvalid;
              schedulesAll = response.data.schedules; // Determinar el día de la semana en español para filtrar
              diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
              fechaObj = new Date(_this6.nuevaSesion.fecha + 'T00:00:00');
              diaNombre = diasSemana[fechaObj.getDay()]; // Filtrar horarios por el día y que no tengan cita
              _this6.horariosDisponibles = schedulesAll.filter(function (h) {
                if (h.day !== diaNombre) return false;

                // Verificar si ya hay una cita en este horario para esta fecha
                var ocupado = schedulesInvalid.some(function (inv) {
                  return inv.schedule_id === h.id && inv.date === _this6.nuevaSesion.fecha && inv.status != 6;
                });
                return !ocupado;
              });
              _context5.next = 20;
              break;
            case 17:
              _context5.prev = 17;
              _context5.t0 = _context5["catch"](5);
              console.error("Error cargando horarios:", _context5.t0);
            case 20:
              _context5.prev = 20;
              _this6.loadingHorarios = false;
              return _context5.finish(20);
            case 23:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[5, 17, 20, 23]]);
      }))();
    },
    guardarCitaPaquete: function guardarCitaPaquete() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var payload, response, modalElement, modal;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (_this7.nuevaSesion.idHorario) {
                _context6.next = 2;
                break;
              }
              return _context6.abrupt("return");
            case 2:
              _this7.guardandoCita = true;
              _context6.prev = 3;
              payload = {
                professional_id: _this7.nuevaSesion.idProfesional,
                date: _this7.nuevaSesion.fecha,
                schedule_id: _this7.nuevaSesion.idHorario,
                clasification: _this7.paqueteSeleccionado.idClasificacion,
                type: _this7.paqueteSeleccionado.tipo,
                patient_condition: 2,
                // Continuante
                mode: _this7.nuevaSesion.modalidad,
                status: 1,
                // Pendiente
                patient_id: _this7.paqueteSeleccionado.patient_id,
                idMembresia: _this7.paqueteSeleccionado.id,
                price: 0,
                user_id: _this7.idUsuario,
                formato_nuevo: 1,
                num_sesion: (_this7.paqueteSeleccionado.sesiones_usadas || 0) + 1
              };
              _context6.next = 7;
              return _this7.axios.post('/api/agendarCitaPaquete', payload);
            case 7:
              response = _context6.sent;
              if (!response.data.cita) {
                _context6.next = 15;
                break;
              }
              _this7.$swal({
                title: 'Cita agendada',
                text: 'La sesión se ha programado correctamente.',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
              });

              // Cerrar modal
              modalElement = document.getElementById('modalAgendarSesion');
              modal = bootstrap.Modal.getInstance(modalElement);
              modal.hide();

              // Recargar paquetes para actualizar contadores
              _context6.next = 15;
              return _this7.cargarPaquetes(_this7.pagination.current_page);
            case 15:
              _context6.next = 21;
              break;
            case 17:
              _context6.prev = 17;
              _context6.t0 = _context6["catch"](3);
              console.error("Error al agendar cita:", _context6.t0);
              alertify.error('Hubo un error al agendar la cita.');
            case 21:
              _context6.prev = 21;
              _this7.guardandoCita = false;
              return _context6.finish(21);
            case 24:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[3, 17, 21, 24]]);
      }))();
    },
    formatHora: function formatHora(hora) {
      if (!hora) return '';
      return hora.substring(0, 5);
    },
    cambiarPagina: function cambiarPagina(page) {
      if (page >= 1 && page <= this.pagination.last_page) {
        this.cargarPaquetes(page);
      }
    },
    filtrarPaquetes: function filtrarPaquetes() {
      var _this8 = this;
      // Debounce the search
      if (this.searchTimeout) clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(function () {
        _this8.cargarPaquetes(1);
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
    prepararProrrateo: function prepararProrrateo(paquete) {
      this.paqueteSeleccionado = paquete;
      this.formProrrateo.observacion = '';
      var modal = new bootstrap.Modal(document.getElementById('modalProrratear'));
      modal.show();
    },
    confirmarProrrateo: function confirmarProrrateo() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var res, modal, _error$response;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _this9.procesandoEstado = true;
              _context7.prev = 1;
              _context7.next = 4;
              return _this9.axios.post("/api/prorratearPaquete/".concat(_this9.paqueteSeleccionado.id), {
                observaciones: _this9.formProrrateo.observacion
              });
            case 4:
              res = _context7.sent;
              modal = bootstrap.Modal.getInstance(document.getElementById('modalProrratear'));
              if (modal) modal.hide();
              _this9.$swal({
                icon: 'success',
                title: 'Paquete prorrateado',
                text: "Se gener\xF3 una nota de cr\xE9dito por S/ ".concat(parseFloat(res.data.dinero_a_favor).toFixed(2))
              });
              _context7.next = 10;
              return _this9.cargarPaquetes(_this9.pagination.current_page);
            case 10:
              _context7.next = 15;
              break;
            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](1);
              _this9.$swal('Error', ((_error$response = _context7.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.error) || 'No se pudo prorratear', 'error');
            case 15:
              _context7.prev = 15;
              _this9.procesandoEstado = false;
              return _context7.finish(15);
            case 18:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[1, 12, 15, 18]]);
      }))();
    },
    cambiarEstado: function cambiarEstado(paquete, accion) {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var confirmacion, _error$response2;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _this10.$swal({
                title: "\xBFSeguro que deseas ".concat(accion, " el paquete?"),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, continuar',
                cancelButtonText: 'Cancelar'
              });
            case 2:
              confirmacion = _context8.sent;
              if (confirmacion.isConfirmed) {
                _context8.next = 5;
                break;
              }
              return _context8.abrupt("return");
            case 5:
              _this10.procesandoEstado = true;
              _context8.prev = 6;
              _context8.next = 9;
              return _this10.axios.post("/api/".concat(accion, "Paquete/").concat(paquete.id));
            case 9:
              // Actualización optimista local
              if (accion === 'cancelar') paquete.estado = 6;
              if (accion === 'congelar') paquete.estado = 4;
              _this10.$swal('Éxito', "Paquete actualizado a ".concat(accion), 'success');
              _context8.next = 14;
              return _this10.cargarPaquetes(_this10.pagination.current_page);
            case 14:
              _context8.next = 19;
              break;
            case 16:
              _context8.prev = 16;
              _context8.t0 = _context8["catch"](6);
              _this10.$swal('Error', ((_error$response2 = _context8.t0.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.error) || 'Error en la operación', 'error');
            case 19:
              _context8.prev = 19;
              _this10.procesandoEstado = false;
              return _context8.finish(19);
            case 22:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[6, 16, 19, 22]]);
      }))();
    },
    verReporte: function verReporte(paquete) {
      window.open("/api/reportePaquete/".concat(paquete.id, "?token=").concat(this.$token), '_blank');
    },
    esCuotaVencida: function esCuotaVencida(fecha) {
      if (!fecha) return false;
      var today = new Date().toISOString().slice(0, 10);
      return fecha < today;
    },
    calcularProgresoPago: function calcularProgresoPago(paquete) {
      var total = parseFloat(paquete.monto || 0);
      var pagado = parseFloat(paquete.pagado || 0);
      if (total <= 0) return 0;
      var porcentaje = pagado / total * 100;
      return Math.min(100, Math.max(0, Math.round(porcentaje)));
    },
    calcularCuotaPromedio: function calcularCuotaPromedio(paquete) {
      var cuotas = parseInt(paquete.total_cuotas || 0);
      var deuda = parseFloat(paquete.debe || 0);
      if (cuotas <= 0) return deuda;
      return deuda / cuotas;
    },
    procesarPago: function procesarPago(cuota) {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var payload;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (confirm('¿Seguro que deseas registrar el pago de S/ ' + parseFloat(cuota.monto).toFixed(2) + '?')) {
                _context9.next = 2;
                break;
              }
              return _context9.abrupt("return");
            case 2:
              _this11.procesandoPago = true;
              _context9.prev = 3;
              payload = {
                idDeuda: cuota.id,
                user_id: _this11.idUsuario,
                estado: 2,
                observacion: 'Pago de cuota desde administrador',
                nombre: _this11.paqueteSeleccionado.patient_name + ' ' + (_this11.paqueteSeleccionado.patient_nombres || ''),
                precio: cuota.monto,
                tipo: 8,
                idMembresia: _this11.paqueteSeleccionado.id,
                idMoneda: _this11.metodoPago
              };
              _context9.next = 7;
              return _this11.axios.post('/api/pagarDeudaMembresia', payload);
            case 7:
              cuota.estado = 2;
              _this11.cargarPaquetes(_this11.pagination.current_page);
              _context9.next = 15;
              break;
            case 11:
              _context9.prev = 11;
              _context9.t0 = _context9["catch"](3);
              console.error(_context9.t0);
              alert('Ocurrió un error procesando el pago. Verifica tu conexión.');
            case 15:
              _context9.prev = 15;
              _this11.procesandoPago = false;
              return _context9.finish(15);
            case 18:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[3, 11, 15, 18]]);
      }))();
    },
    abrirModalPago: function abrirModalPago(paquete) {
      this.paqueteSeleccionado = paquete;
      this.mostrarModalPago = true;
    },
    abrirModalReporte: function abrirModalReporte(paquete) {
      var editar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.paqueteSeleccionado = paquete;
      this.editandoReporte = editar;
      if (editar && paquete.reporte_extra) {
        this.formReporte = {
          resumen: paquete.reporte_extra.resumen,
          logros: paquete.reporte_extra.logros,
          recomendaciones: paquete.reporte_extra.recomendaciones,
          proximos_pasos: paquete.reporte_extra.proximos_pasos
        };
      } else {
        this.formReporte = {
          resumen: '',
          logros: '',
          recomendaciones: '',
          proximos_pasos: ''
        };
      }
      var modal = new bootstrap.Modal(document.getElementById('modalReporteExtra'));
      modal.show();
    },
    guardarReporteExtra: function guardarReporteExtra() {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var payload, modalElement, modal;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!(!_this12.formReporte.resumen || !_this12.formReporte.logros)) {
                _context10.next = 3;
                break;
              }
              alert('Por favor complete al menos el resumen y los logros.');
              return _context10.abrupt("return");
            case 3:
              _this12.guardandoReporte = true;
              _context10.prev = 4;
              payload = _objectSpread(_objectSpread({}, _this12.formReporte), {}, {
                membresia_id: _this12.paqueteSeleccionado.id
              });
              _context10.next = 8;
              return _this12.axios.post('/api/reporte-paquete-extra', payload);
            case 8:
              // Cerrar modal y recargar
              modalElement = document.getElementById('modalReporteExtra');
              modal = bootstrap.Modal.getInstance(modalElement);
              modal.hide();
              _this12.cargarPaquetes(_this12.pagination.current_page);
              alert('Reporte guardado exitosamente.');
              _context10.next = 19;
              break;
            case 15:
              _context10.prev = 15;
              _context10.t0 = _context10["catch"](4);
              console.error(_context10.t0);
              alert('Ocurrió un error al guardar el reporte.');
            case 19:
              _context10.prev = 19;
              _this12.guardandoReporte = false;
              return _context10.finish(19);
            case 22:
            case "end":
              return _context10.stop();
          }
        }, _callee10, null, [[4, 15, 19, 22]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        tipo: 15,
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
      doctores: [],
      horarios: [],
      horariosAll: [],
      hoursProfessional: [],
      schedulesInvalid: {},
      horasSolas: [],
      horasMalas: [],
      dayWeek: {
        0: 'Lunes',
        1: "Martes",
        2: "Miercoles",
        3: "Jueves",
        4: "Viernes",
        5: "Sabado",
        6: "Domingo"
      },
      doctorSeleccionado: -1,
      sesionesAcumuladas: [],
      idHorario: '',
      comentarios: ''
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
    calcularFechas: function calcularFechas() {
      this.fechas = [];
      var precioBase = this.mostrarPrecio;
      var precioParcial = Math.ceil(precioBase / this.membresia.cuotas * 10) / 10;
      var hoy = moment__WEBPACK_IMPORTED_MODULE_0___default()();
      this.membresia.precio = precioBase;
      for (var i = 0; i < this.membresia.cuotas; i++) {
        this.fechas.push({
          dia: hoy.format('YYYY-MM-DD'),
          monto: parseFloat(precioParcial).toFixed(2),
          total: precioBase,
          pago: false
        });
        // Original code modified the readonly attr of inputs via DOM. We handle it via Vue bindings now.
        hoy = moment__WEBPACK_IMPORTED_MODULE_0___default()(hoy).add(1, 'month');
      }
      this.membresia.fin = this.membresia.tipo == 47 ? moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'year').format('YYYY-MM-DD') : moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD');
      this.balancearMontos(0);
    },
    balancearMontos: function balancearMontos(editedIndex) {
      var descuento = 0; //this.membresia.descuento ?? 0;
      if (parseInt(this.membresia.cuotas) > 1) {
        if (editedIndex === 0) {
          // Si se editó la primera cuota, balanceamos desde la segunda
          var cantidadFechasABalancear = this.fechas.length - 1;
          var montoRestante = (parseFloat(this.fechas[0].total) - parseFloat(this.fechas[0].monto) - descuento) / cantidadFechasABalancear;
          this.fechas.forEach(function (fecha, index) {
            if (index > 0) {
              // Balanceamos desde la segunda cuota
              fecha.monto = montoRestante.toFixed(2);
            }
          });
        } else if (editedIndex <= this.fechas.length - 2) {
          // Si se editó la segunda cuota, respetamos la primera y balanceamos desde la tercera
          var _cantidadFechasABalancear = this.fechas.length - editedIndex + 1;
          var sumaAnteriores = this.fechas.filter(function (_, index) {
            return index <= editedIndex;
          }).reduce(function (acc, item) {
            return acc + parseFloat(item.monto);
          }, 0);
          var _montoRestante = (parseFloat(this.fechas[0].total) - sumaAnteriores - descuento) / _cantidadFechasABalancear;
          for (var i = editedIndex + 1; i < this.fechas.length; i++) this.fechas[i].monto = _montoRestante.toFixed(2);
        }
      }
    },
    guardar: function guardar() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var mem, datos, servidor, respuesta;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (_this3.pacienteElegido.id) {
                _context3.next = 3;
                break;
              }
              alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-solid fa-bomb"></i> Seleccione un paciente', 'danger', 10);
              return _context3.abrupt("return", false);
            case 3:
              if (!(_this3.membresia.cuotas <= 0)) {
                _context3.next = 6;
                break;
              }
              alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-solid fa-bomb"></i> El número de cuotas mínimo debe ser 1', 'danger', 10);
              return _context3.abrupt("return", false);
            case 6:
              if (_this3.membresia.fin) {
                _context3.next = 9;
                break;
              }
              alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-solid fa-bomb"></i> Ingrese el último día de la memebresía', 'danger', 10);
              return _context3.abrupt("return", false);
            case 9:
              if (!(_this3.membresia.descuento > 0 && _this3.comentarios == '')) {
                _context3.next = 14;
                break;
              }
              alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-solid fa-bomb"></i> Debe agregar un motivo por el descuento', 'danger', 10);
              return _context3.abrupt("return", false);
            case 14:
              _this3.comentarios = _this3.membresia.descuento > 0 ? 'Descuento por: S/ ' + _this3.membresia.descuento + ' ' + _this3.comentarios : _this3.comentarios;
            case 15:
              mem = document.getElementById("sltMembresia");
              datos = new FormData();
              datos.append('idPaciente', _this3.pacienteElegido.id);
              datos.append('customer', _this3.pacienteElegido.name + ' ' + _this3.pacienteElegido.nombres);
              datos.append('motivo', _this3.pacienteElegido.id);
              datos.append('membresia', JSON.stringify(_this3.membresia));
              datos.append('user_id', _this3.idUsuario);
              datos.append('nombreMembresia', mem.options[mem.selectedIndex].text);
              datos.append('fechas', JSON.stringify(_this3.fechas));
              datos.append('fechas_membresias', JSON.stringify(_this3.sesionesAcumuladas));
              datos.append('comentarios', _this3.comentarios);
              datos.append('meses', _this3.cantMeses);
              datos.append('num_sesion', 0);
              datos.append('descuento', _this3.membresia.descuento);
              _context3.next = 31;
              return fetch('/api/guardarMembresia', {
                method: 'POST',
                body: datos,
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
              });
            case 31:
              servidor = _context3.sent;
              _context3.next = 34;
              return servidor.json();
            case 34:
              respuesta = _context3.sent;
              if (respuesta.mensaje) {
                _this3.pacienteElegido = {};
                _this3.fechas = [];
                _this3.$swal({
                  title: 'Se guardó la membresía',
                  showConfirmButton: false,
                  icon: 'success',
                  timer: 1000
                });
                alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-regular fa-calendar-check"></i> Membresía guardada', 'success', 10);
                _this3.$emit('membresiaGuardada');
              } else alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify('<i class="fa-regular fa-bomb"></i> Hubo un error guardando', 'danger', 10);
            case 36:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    listarProfesionales: function listarProfesionales() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4.axios.get('/api/profesional').then(function (response) {
                _this4.doctores = response.data;
                _this4.listarhorario();
              });
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    listarhorario: function listarhorario() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var id;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              id = _this5.doctorSeleccionado;
              _context5.next = 3;
              return _this5.axios.get("/api/horario/".concat(id)).then(function (res) {
                _this5.horarios = res.data.schedulesInvalid;
                _this5.horariosAll = res.data.schedules;
                _this5.hoursProfessional = _this5.horarios;
                _this5.emitSchedule(_this5.nuevaFecha.fecha);
                _this5.schedulesInvalid = [];
                _this5.hoursProfessional.forEach(function (el) {
                  _this5.schedulesInvalid.push(el.schedule_id);
                });
              })["catch"](function (err) {
                console.error(err);
              });
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    emitSchedule: function emitSchedule() {
      var _this6 = this;
      var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.nuevaFecha.fecha;
      this.horarios = [];
      var arraySchedulesInvalid = [];
      this.hoursProfessional.forEach(function (el) {
        if (!arraySchedulesInvalid.includes(el.schedule_id)) {
          arraySchedulesInvalid.push(el.schedule_id);
        }
      });
      this.horariosAll.forEach(function (el) {
        if (el.day === _this6.dayWeek[new Date(info).getDay()]) {
          if (arraySchedulesInvalid.includes(el.id)) {
            // Hay cita
            if (el.appointments.find(function (el) {
              return el.date === info && el.status != 3;
            }) ? true : false) {} else {
              _this6.horarios.push(el);
            }
          } else {
            // No hay cita
            _this6.horarios.push(el);
          }
        }
      });
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
      var _this7 = this;
      var paquete = this.precios.find(function (x) {
        return x.id == _this7.membresia.tipo;
      });
      return paquete ? paquete.descripcion : '';
    },
    mostrarPrecio: function mostrarPrecio() {
      var _this8 = this;
      var nuevos = this.precios.find(function (x) {
        return x.id == _this8.membresia.tipo;
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
      var _this9 = this;
      var precio = this.precios.find(function (x) {
        return x.id == _this9.membresia.tipo;
      });
      return precio ? precio.sesiones : '';
    },
    cantMeses: function cantMeses() {
      var _this10 = this;
      var precio = this.precios.find(function (x) {
        return x.id == _this10.membresia.tipo;
      });
      return precio ? precio.meses : 0;
    }
  },
  mounted: function mounted() {
    this.preciosMembresias();
    this.listarProfesionales();
    this.$on('alertaSimple', this.notifica());
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
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "module-tabs"
  }, [_c("button", {
    staticClass: "btn btn-sm module-tab-btn",
    "class": {
      active: _vm.vistaActiva === "paquetes"
    },
    on: {
      click: function click($event) {
        _vm.vistaActiva = "paquetes";
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-box-open me-1"
  }), _vm._v(" Paquetes\n        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm module-tab-btn",
    "class": {
      active: _vm.vistaActiva === "deudas"
    },
    on: {
      click: function click($event) {
        _vm.vistaActiva = "deudas";
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-user-times me-1"
  }), _vm._v(" Deudas\n          "), _c("span", {
    staticClass: "badge bg-danger ms-1 rounded-pill"
  }, [_vm._v(_vm._s(_vm.metricas.vencidas))])])])])]), _vm._v(" "), _vm.vistaActiva === "paquetes" ? _c("div", {
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
  })]), _vm._v(" "), _vm._m(1)]) : _vm._e(), _vm._v(" "), _vm.vistaActiva === "paquetes" ? _c("div", {
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
  }, [_vm._v(_vm._s(_vm.metricas.totales))])])])])]) : _vm._e(), _vm._v(" "), _vm.vistaActiva === "paquetes" ? _c("div", {
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
  }, [_vm._v("Membresía Ext.")])])])]) : _vm._e(), _vm._v(" "), _vm.loading && _vm.vistaActiva === "paquetes" ? _c("div", {
    staticClass: "text-center py-5"
  }, [_vm._m(2)]) : _vm.paquetesFiltrados.length === 0 && _vm.vistaActiva === "paquetes" ? _c("div", {
    staticClass: "text-center py-5"
  }, [_vm._m(3)]) : _vm._e(), _vm._v(" "), _vm.vistaActiva === "paquetes" && !_vm.loading && _vm.paquetesFiltrados.length > 0 ? _c("div", {
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
    }, [_vm._m(4, true), _vm._v(" "), _c("div", [_c("div", {
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
    }, [_vm._v("Cuotas al día")])]), _vm._v(" "), paquete.estado === 2 && paquete.sesiones_usadas < paquete.total_sesiones ? _c("button", {
      staticClass: "btn btn-sm btn-outline-primary fw-bold rounded-pill px-3 shadow-sm transition-all hover-lift",
      on: {
        click: function click($event) {
          return _vm.abrirAgendarCita(paquete);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-calendar-plus me-1"
    }), _vm._v(" Agendar sesión\n            ")]) : _vm._e(), _vm._v(" "), paquete.debe > 0 ? _c("button", {
      staticClass: "btn btn-light btn-sm shadow-sm action-btn outline-btn",
      on: {
        click: function click($event) {
          return _vm.abrirModalPago(paquete);
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
    }, [_vm._v("-" + _vm._s(paquete.descuento) + " desc.")]) : _vm._e(), _vm._v(" "), [1, 2].includes(paquete.estado) ? _c("div", {
      staticClass: "dropdown ms-2"
    }, [_c("button", {
      staticClass: "btn btn-sm btn-outline-secondary dropdown-toggle",
      attrs: {
        type: "button",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }
    }, [_vm._v("\n                Cambiar Estado\n              ")]), _vm._v(" "), _c("ul", {
      staticClass: "dropdown-menu shadow-sm"
    }, [_c("li", [_c("a", {
      staticClass: "dropdown-item",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.prepararProrrateo(paquete);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-divide me-2 text-primary"
    }), _vm._v("Prorratear")])]), _vm._v(" "), paquete.tipo_servicio === 0 || paquete.idClasificacion == 5 ? _c("li", [_c("a", {
      staticClass: "dropdown-item",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.cambiarEstado(paquete, "congelar");
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-snowflake me-2 text-info"
    }), _vm._v("Congelar")])]) : _vm._e(), _vm._v(" "), _vm._m(5, true), _vm._v(" "), _c("li", [_c("a", {
      staticClass: "dropdown-item text-danger",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.cambiarEstado(paquete, "cancelar");
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-ban me-2"
    }), _vm._v("Cancelar Paquete")])])])]) : _vm._e(), _vm._v(" "), paquete.estado === 3 ? [!paquete.reporte_extra ? _c("a", {
      staticClass: "text-warning text-decoration-none hover-link fw-bold",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.abrirModalReporte(paquete);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-plus-circle me-1"
    }), _vm._v(" Añadir reporte\n              ")]) : _c("div", {
      staticClass: "d-flex gap-2"
    }, [_c("a", {
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
    }), _vm._v(" Ver reporte\n                ")]), _vm._v(" "), _c("a", {
      staticClass: "text-muted text-decoration-none hover-link",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.abrirModalReporte(paquete, true);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-edit"
    })])])] : _vm._e()], 2), _vm._v(" "), _c("a", {
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
    }, [_vm._m(6, true), _vm._v(" "), !paquete.historial_citas || paquete.historial_citas.length === 0 ? _c("div", {
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
  }), 0) : _vm.vistaActiva === "deudas" ? _c("div", {
    key: "deudas",
    staticClass: "debts-view"
  }, [_c("div", {
    staticClass: "row g-3 mb-4"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "debt-summary-card"
  }, [_c("p", {
    staticClass: "mb-1"
  }, [_vm._v("Total Deudores")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 text-danger fw-bold"
  }, [_vm._v(_vm._s(_vm.deudaResumen.totalDeudores))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "debt-summary-card"
  }, [_c("p", {
    staticClass: "mb-1"
  }, [_vm._v("Deuda Total")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 text-danger fw-bold"
  }, [_vm._v("S/ " + _vm._s(_vm.deudaResumen.totalDeuda.toFixed(2)))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "debt-summary-card"
  }, [_c("p", {
    staticClass: "mb-1"
  }, [_vm._v("Cobrado Total")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 text-success fw-bold"
  }, [_vm._v("S/ " + _vm._s(_vm.deudaResumen.totalCobrado.toFixed(2)))])])])]), _vm._v(" "), _vm.deudasPendientes.length === 0 ? _c("div", {
    staticClass: "text-center py-5 text-muted fs-5"
  }, [_c("i", {
    staticClass: "fas fa-check-circle fa-3x mb-3 text-success"
  }), _c("br"), _vm._v("\n      No hay deudas pendientes por cobrar.\n    ")]) : _c("div", {
    staticClass: "debt-list"
  }, _vm._l(_vm.deudasPendientes, function (deuda) {
    return _c("div", {
      key: "deuda-".concat(deuda.id),
      staticClass: "debt-card mb-3"
    }, [_c("div", {
      staticClass: "d-flex gap-3 align-items-start mb-2"
    }, [_vm._m(7, true), _vm._v(" "), _c("div", {
      staticClass: "flex-grow-1"
    }, [_c("div", {
      staticClass: "d-flex align-items-center gap-2 flex-wrap mb-1"
    }, [_c("h5", {
      staticClass: "mb-0 fw-bold text-dark"
    }, [_vm._v(_vm._s(deuda.patient_name) + " " + _vm._s(deuda.patient_nombres))]), _vm._v(" "), _c("span", {
      staticClass: "badge bg-success-subtle text-success rounded-pill"
    }, [_vm._v("Activo")]), _vm._v(" "), _c("span", {
      staticClass: "badge bg-primary-subtle text-primary rounded-pill"
    }, [_vm._v(_vm._s(_vm.getTipoBadge(deuda.idClasificacion)))])]), _vm._v(" "), _c("p", {
      staticClass: "mb-2 text-muted debt-meta"
    }, [_vm._v(_vm._s(deuda.paquete_nombre) + " · " + _vm._s(deuda.professional || "Sin profesional asignado"))]), _vm._v(" "), _c("div", {
      staticClass: "d-flex justify-content-between align-items-end mb-1"
    }, [_c("p", {
      staticClass: "mb-0 text-muted debt-progress-label"
    }, [_vm._v("Pago: S/ " + _vm._s(parseFloat(deuda.pagado || 0).toFixed(2)) + " de S/ " + _vm._s(parseFloat(deuda.monto || 0).toFixed(2)))]), _vm._v(" "), _c("span", {
      staticClass: "fw-semibold text-dark"
    }, [_vm._v(_vm._s(_vm.calcularProgresoPago(deuda)) + "%")])]), _vm._v(" "), _c("div", {
      staticClass: "debt-progress"
    }, [_c("div", {
      staticClass: "debt-progress-paid",
      style: {
        width: _vm.calcularProgresoPago(deuda) + "%"
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "d-flex justify-content-between align-items-center mt-3 flex-wrap gap-3"
    }, [_c("div", {
      staticClass: "d-flex align-items-center gap-4 flex-wrap"
    }, [_c("p", {
      staticClass: "mb-0 debt-amount"
    }, [_c("i", {
      staticClass: "fas fa-dollar-sign me-1"
    }), _vm._v(" Debe: S/ " + _vm._s(parseFloat(deuda.debe || 0).toFixed(2)))]), _vm._v(" "), _c("p", {
      staticClass: "mb-0 text-muted"
    }, [_vm._v("Cuota: S/ " + _vm._s(_vm.calcularCuotaPromedio(deuda).toFixed(2)))])]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-primary rounded-pill debt-action-btn",
      on: {
        click: function click($event) {
          return _vm.abrirModalPago(deuda);
        }
      }
    }, [_c("i", {
      staticClass: "far fa-credit-card me-1"
    }), _vm._v(" Registrar Pago\n              ")])])])])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _c("transition", {
    attrs: {
      name: "vue-modal-fade"
    }
  }, [_vm.mostrarModalPago ? _c("div", {
    staticClass: "vue-modal-overlay",
    on: {
      click: function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        _vm.mostrarModalPago = false;
      }
    }
  }, [_c("div", {
    staticClass: "vue-modal-box modal-lg"
  }, [_c("div", {
    staticClass: "modal-header bg-primary text-white"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_c("i", {
    staticClass: "fas fa-file-invoice-dollar me-2"
  }), _vm._v(" Pagar Cuotas de Membresía")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close btn-close-white",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        _vm.mostrarModalPago = false;
      }
    }
  })]), _vm._v(" "), _vm.paqueteSeleccionado ? _c("div", {
    staticClass: "modal-body p-4"
  }, [_c("div", {
    staticClass: "row mb-4"
  }, [_c("div", {
    staticClass: "col-md-4 border-end"
  }, [_c("p", {
    staticClass: "text-uppercase text-muted small fw-bold mb-1"
  }, [_vm._v("Paciente")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", {
    staticClass: "bg-light rounded-circle p-2 me-2"
  }, [_c("i", {
    staticClass: "fas fa-user text-primary"
  })]), _vm._v(" "), _c("h6", {
    staticClass: "mb-0 fw-bold"
  }, [_vm._v(_vm._s(_vm.paqueteSeleccionado.patient_name) + " " + _vm._s(_vm.paqueteSeleccionado.patient_nombres))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 border-end ps-4"
  }, [_c("p", {
    staticClass: "text-uppercase text-muted small fw-bold mb-1"
  }, [_vm._v("Total Pendiente (Deuda)")]), _vm._v(" "), _c("h4", {
    staticClass: "mb-0 text-danger fw-bold"
  }, [_vm._v("S/ " + _vm._s(parseFloat(_vm.paqueteSeleccionado.debe).toFixed(2)))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 ps-4"
  }, [_c("p", {
    staticClass: "text-uppercase text-muted small fw-bold mb-1"
  }, [_vm._v("Método de Pago")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.metodoPago,
      expression: "metodoPago"
    }],
    staticClass: "form-select form-select-sm",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.metodoPago = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.monedas, function (moneda) {
    return _c("option", {
      key: moneda.id,
      domProps: {
        value: moneda.id
      }
    }, [_vm._v(_vm._s(moneda.tipo))]);
  }), 0)])]), _vm._v(" "), _c("h6", {
    staticClass: "fw-bold mb-3"
  }, [_vm._v("Desglose de Cuotas")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive bg-white rounded border"
  }, [_c("table", {
    staticClass: "table table-hover mb-0 align-middle"
  }, [_c("thead", {
    staticClass: "table-light"
  }, [_c("tr", [_c("th", {
    staticClass: "py-3"
  }, [_vm._v("Fecha de Vencimiento")]), _vm._v(" "), _c("th", [_vm._v("Estado")]), _vm._v(" "), _c("th", {
    staticClass: "text-end"
  }, [_vm._v("Monto a Pagar")]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v("Acción")])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.paqueteSeleccionado.deudas || [], function (cuota) {
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
  }, [_vm._v("No existen registros de cuotas para este paquete.")])]) : _vm._e()], 2)])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "modal-footer bg-light"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.mostrarModalPago = false;
      }
    }
  }, [_vm._v("Cerrar ventana")])])])]) : _vm._e()]), _vm._v(" "), _c("ModalMembresias", {
    attrs: {
      idUsuario: _vm.idUsuario,
      vista: "buscar"
    },
    on: {
      membresiaGuardada: function membresiaGuardada($event) {
        return _vm.cargarPaquetes(1);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalReporteExtra",
      tabindex: "-1",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-lg"
  }, [_c("div", {
    staticClass: "modal-content border-0 shadow-lg"
  }, [_c("div", {
    staticClass: "modal-header border-0 pb-0"
  }, [_c("h5", {
    staticClass: "modal-title fw-bold d-flex align-items-center gap-2"
  }, [_c("i", {
    staticClass: "fas fa-file-medical text-primary"
  }), _vm._v("\n            " + _vm._s(_vm.editandoReporte ? "Editar Reporte" : "Añadir Reporte") + " — " + _vm._s(_vm.paqueteSeleccionado ? _vm.paqueteSeleccionado.paquete_nombre : "") + "\n          ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "modal-body p-4"
  }, [_c("div", {
    staticClass: "mb-4"
  }, [_c("label", {
    staticClass: "form-label fw-semibold text-muted small text-uppercase"
  }, [_vm._v("Resumen del Tratamiento")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formReporte.resumen,
      expression: "formReporte.resumen"
    }],
    staticClass: "form-control custom-textarea",
    attrs: {
      rows: "4",
      placeholder: "Escribe un resumen general del proceso..."
    },
    domProps: {
      value: _vm.formReporte.resumen
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formReporte, "resumen", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("label", {
    staticClass: "form-label fw-semibold text-muted small text-uppercase"
  }, [_vm._v("Logros Alcanzados (uno por línea)")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formReporte.logros,
      expression: "formReporte.logros"
    }],
    staticClass: "form-control custom-textarea",
    attrs: {
      rows: "4",
      placeholder: "• Logro 1&#10;• Logro 2..."
    },
    domProps: {
      value: _vm.formReporte.logros
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formReporte, "logros", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("label", {
    staticClass: "form-label fw-semibold text-muted small text-uppercase"
  }, [_vm._v("Recomendaciones")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formReporte.recomendaciones,
      expression: "formReporte.recomendaciones"
    }],
    staticClass: "form-control custom-textarea",
    attrs: {
      rows: "4",
      placeholder: "Sugerencias para el paciente..."
    },
    domProps: {
      value: _vm.formReporte.recomendaciones
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formReporte, "recomendaciones", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label fw-semibold text-muted small text-uppercase"
  }, [_vm._v("Próximos Pasos")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formReporte.proximos_pasos,
      expression: "formReporte.proximos_pasos"
    }],
    staticClass: "form-control custom-textarea",
    attrs: {
      rows: "4",
      placeholder: "Plan a futuro o continuación..."
    },
    domProps: {
      value: _vm.formReporte.proximos_pasos
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formReporte, "proximos_pasos", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer border-0 pt-0 pb-4 px-4"
  }, [_c("button", {
    staticClass: "btn btn-light px-4 fw-bold text-muted",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Cancelar")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-4 fw-bold shadow-sm",
    attrs: {
      type: "button",
      disabled: _vm.guardandoReporte
    },
    on: {
      click: _vm.guardarReporteExtra
    }
  }, [_vm.guardandoReporte ? _c("i", {
    staticClass: "fas fa-spinner fa-spin me-1"
  }) : _vm._e(), _vm._v("\n            " + _vm._s(_vm.editandoReporte ? "Actualizar Reporte" : "Guardar Reporte") + "\n          ")])])])])]), _vm._v(" "), _vm.vistaActiva === "paquetes" && _vm.pagination.last_page > 1 ? _c("div", {
    key: "paquetes",
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
  })])])], 2)])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalAgendarSesion",
      tabindex: "-1",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content border-0 shadow-lg"
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "modal-body p-4"
  }, [_vm.paqueteSeleccionado ? _c("div", {
    staticClass: "mb-4 p-3 bg-light rounded-3 border border-light-subtle"
  }, [_c("div", {
    staticClass: "small text-muted text-uppercase fw-bold mb-1"
  }, [_vm._v("Paquete")]), _vm._v(" "), _c("div", {
    staticClass: "fw-bold text-dark"
  }, [_vm._v(_vm._s(_vm.paqueteSeleccionado.paquete_nombre))]), _vm._v(" "), _c("div", {
    staticClass: "small text-muted mt-1"
  }, [_c("i", {
    staticClass: "far fa-user me-1"
  }), _vm._v(" " + _vm._s(_vm.paqueteSeleccionado.patient_name) + " " + _vm._s(_vm.paqueteSeleccionado.patient_nombres) + "\n            ")])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row g-3"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_vm._m(10), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nuevaSesion.idProfesional,
      expression: "nuevaSesion.idProfesional"
    }],
    staticClass: "form-select border-start-0",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.nuevaSesion, "idProfesional", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.cargarHorarios]
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v(_vm._s(_vm.doctores.length ? "Seleccione un profesional" : "Cargando profesionales..."))]), _vm._v(" "), _vm._l(_vm.doctoresFiltrados, function (doc) {
    return _c("option", {
      key: doc.id,
      domProps: {
        value: doc.id
      }
    }, [_vm._v(_vm._s(doc.name || doc.nombre))]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(11), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_vm._m(12), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nuevaSesion.fecha,
      expression: "nuevaSesion.fecha"
    }],
    staticClass: "form-control border-start-0",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.nuevaSesion.fecha
    },
    on: {
      change: _vm.cargarHorarios,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.nuevaSesion, "fecha", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(13), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_vm._m(14), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nuevaSesion.idHorario,
      expression: "nuevaSesion.idHorario"
    }],
    staticClass: "form-select border-start-0",
    attrs: {
      disabled: !_vm.nuevaSesion.idProfesional || !_vm.nuevaSesion.fecha
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.nuevaSesion, "idHorario", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v("Seleccione un horario")]), _vm._v(" "), _vm._l(_vm.horariosDisponibles, function (hora) {
    return _c("option", {
      key: hora.id,
      domProps: {
        value: hora.id
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.formatHora(hora.check_time)) + " - " + _vm._s(_vm.formatHora(hora.departure_date)) + "\n                  ")]);
  })], 2)]), _vm._v(" "), _vm.loadingHorarios ? _c("div", {
    staticClass: "small text-primary mt-1"
  }, [_c("i", {
    staticClass: "fas fa-spinner fa-spin me-1"
  }), _vm._v(" Buscando disponibilidad...\n              ")]) : _vm.horariosDisponibles.length === 0 && _vm.nuevaSesion.fecha && _vm.nuevaSesion.idProfesional ? _c("div", {
    staticClass: "small text-danger mt-1"
  }, [_c("i", {
    staticClass: "fas fa-info-circle me-1"
  }), _vm._v(" No hay horarios disponibles para esta fecha.\n              ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("Modalidad")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-3 mt-1"
  }, [_c("div", {
    staticClass: "form-check custom-radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nuevaSesion.modalidad,
      expression: "nuevaSesion.modalidad"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      value: "1",
      id: "modPresencial"
    },
    domProps: {
      checked: _vm._q(_vm.nuevaSesion.modalidad, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.nuevaSesion, "modalidad", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "modPresencial"
    }
  }, [_vm._v("Presencial")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check custom-radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nuevaSesion.modalidad,
      expression: "nuevaSesion.modalidad"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      value: "2",
      id: "modVirtual"
    },
    domProps: {
      checked: _vm._q(_vm.nuevaSesion.modalidad, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.nuevaSesion, "modalidad", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "modVirtual"
    }
  }, [_vm._v("Virtual")])])])])])]), _vm._v(" "), _c("div", {
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
      disabled: !_vm.nuevaSesion.idHorario || _vm.guardandoCita
    },
    on: {
      click: _vm.guardarCitaPaquete
    }
  }, [_vm.guardandoCita ? _c("i", {
    staticClass: "fas fa-spinner fa-spin me-2"
  }) : _c("i", {
    staticClass: "fas fa-save me-2"
  }), _vm._v("\n            Confirmar Cita\n          ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalProrratear",
      tabindex: "-1",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content border-0 shadow-lg"
  }, [_vm._m(15), _vm._v(" "), _vm.paqueteSeleccionado ? _c("div", {
    staticClass: "modal-body p-4"
  }, [_c("p", {
    staticClass: "text-muted small mb-4"
  }, [_vm._v("Esta acción cancelará las citas y cuotas pendientes, y calculará el saldo a favor del paciente basándose en las sesiones que ya consumió.")]), _vm._v(" "), _c("div", {
    staticClass: "bg-light p-3 rounded mb-3"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between mb-2"
  }, [_c("span", {
    staticClass: "text-muted small"
  }, [_vm._v("Monto Total del Paquete")]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("S/ " + _vm._s(parseFloat(_vm.paqueteSeleccionado.monto).toFixed(2)))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mb-2"
  }, [_c("span", {
    staticClass: "text-muted small"
  }, [_vm._v("Sesiones Totales")]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm.paqueteSeleccionado.total_sesiones))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mb-2"
  }, [_c("span", {
    staticClass: "text-muted small"
  }, [_vm._v("Costo por Sesión")]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("S/ " + _vm._s((parseFloat(_vm.paqueteSeleccionado.monto) / Math.max(_vm.paqueteSeleccionado.total_sesiones, 1)).toFixed(2)))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mb-2"
  }, [_c("span", {
    staticClass: "text-muted small"
  }, [_vm._v("Sesiones Usadas")]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold text-danger"
  }, [_vm._v(_vm._s(_vm.paqueteSeleccionado.sesiones_usadas))])]), _vm._v(" "), _c("hr", {
    staticClass: "border-secondary opacity-25"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mb-2"
  }, [_c("span", {
    staticClass: "text-muted small"
  }, [_vm._v("Total Pagado")]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold text-success"
  }, [_vm._v("S/ " + _vm._s(parseFloat(_vm.paqueteSeleccionado.pagado || 0).toFixed(2)))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("Saldo a Devolver")]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold fs-5 text-primary"
  }, [_vm._v("\n                S/ " + _vm._s(Math.max(0, parseFloat(_vm.paqueteSeleccionado.pagado || 0) - parseFloat(_vm.paqueteSeleccionado.monto) / Math.max(_vm.paqueteSeleccionado.total_sesiones, 1) * _vm.paqueteSeleccionado.sesiones_usadas).toFixed(2)) + "\n              ")])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label small fw-bold text-muted"
  }, [_vm._v("Observaciones")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formProrrateo.observacion,
      expression: "formProrrateo.observacion"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "2",
      placeholder: "Opcional..."
    },
    domProps: {
      value: _vm.formProrrateo.observacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formProrrateo, "observacion", $event.target.value);
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
      disabled: _vm.procesandoEstado
    },
    on: {
      click: _vm.confirmarProrrateo
    }
  }, [_vm.procesandoEstado ? _c("i", {
    staticClass: "fas fa-spinner fa-spin me-2"
  }) : _vm._e(), _vm._v(" Confirmar Prorrateo\n          ")])])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h1", {
    staticClass: "h3 mb-0 text-gray-800 fw-bold d-flex align-items-center"
  }, [_c("i", {
    staticClass: "fas fa-box-open text-primary me-2"
  }), _vm._v(" Paquetes & Sesiones\n      ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn btn-success fw-bold flex-shrink-0 shadow-sm",
    attrs: {
      "data-bs-toggle": "modal",
      "data-bs-target": "#modalMembresias"
    }
  }, [_c("i", {
    staticClass: "fas fa-plus me-1"
  }), _vm._v(" Nuevo Paquete\n    ")]);
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
  return _c("li", [_c("hr", {
    staticClass: "dropdown-divider"
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
    staticClass: "debt-icon"
  }, [_c("i", {
    staticClass: "fas fa-user-times"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header border-0 pb-0 px-4 pt-4"
  }, [_c("h5", {
    staticClass: "modal-title fw-bold text-dark"
  }, [_c("i", {
    staticClass: "fas fa-calendar-plus text-primary me-2"
  }), _vm._v(" Agendar Sesión\n          ")]), _vm._v(" "), _c("button", {
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
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("Profesional "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "input-group-text bg-white border-end-0"
  }, [_c("i", {
    staticClass: "fas fa-user-md text-muted"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("Fecha "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "input-group-text bg-white border-end-0"
  }, [_c("i", {
    staticClass: "far fa-calendar-alt text-muted"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("Horario Disponible "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "input-group-text bg-white border-end-0"
  }, [_c("i", {
    staticClass: "far fa-clock text-muted"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header border-0 pb-0 px-4 pt-4"
  }, [_c("h5", {
    staticClass: "modal-title fw-bold text-dark"
  }, [_c("i", {
    staticClass: "fas fa-divide text-primary me-2"
  }), _vm._v(" Prorratear Paquete\n          ")]), _vm._v(" "), _c("button", {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=template&id=5cb2816c":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=template&id=5cb2816c ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._m(3), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.membresia.tipo,
      expression: "membresia.tipo"
    }],
    staticClass: "form-select",
    attrs: {
      id: "sltMembresia"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.membresia, "tipo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.calcularFechas();
      }]
    }
  }, _vm._l(_vm.precios, function (precio) {
    return _c("option", {
      domProps: {
        value: precio.id
      }
    }, [_vm._v(_vm._s(precio.descripcion))]);
  }), 0), _vm._v(" "), _vm.membresia.tipo ? _c("div", {
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "card border-primary shadow-sm h-100",
    staticStyle: {
      "background-color": "#f0f7ff"
    }
  }, [_c("div", {
    staticClass: "card-body text-center py-3 d-flex flex-column justify-content-center"
  }, [_c("div", {
    staticClass: "text-primary fw-medium mb-1"
  }, [_vm._v(_vm._s(_vm.descripcionPaqueteElegido))]), _vm._v(" "), _vm.cantSesiones ? _c("div", {
    staticClass: "small text-muted"
  }, [_vm._v("S/ " + _vm._s((_vm.mostrarPrecio / _vm.cantSesiones).toFixed(2)) + "/sesión")]) : _vm._e()])])]), _vm._v(" "), _vm.cantSesiones ? _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "card border-primary shadow-sm h-100",
    staticStyle: {
      "background-color": "#f0f7ff"
    }
  }, [_c("div", {
    staticClass: "card-body text-center py-3 d-flex flex-column justify-content-center"
  }, [_c("div", {
    staticClass: "text-primary fw-bold fs-5 mb-0"
  }, [_vm._v(_vm._s(_vm.cantSesiones))]), _vm._v(" "), _c("div", {
    staticClass: "small text-muted mt-1"
  }, [_vm._v("S/ " + _vm._s(_vm.mostrarPrecio) + " en total")])])])]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_vm._m(4), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.doctorSeleccionado,
      expression: "doctorSeleccionado"
    }],
    staticClass: "form-select",
    attrs: {
      id: "sltDoctor"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.doctorSeleccionado = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.listarhorario();
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "-1"
    }
  }, [_vm._v("Seleccione un profesional")]), _vm._v(" "), _vm._l(_vm.doctores, function (doctor) {
    return _c("option", {
      domProps: {
        value: doctor.id
      }
    }, [_vm._v(_vm._s(doctor.nombre))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "card border-0 mb-4",
    staticStyle: {
      "background-color": "#f8f9fa",
      "border-radius": "1rem"
    }
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
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
  }, [_vm._m(6), _vm._v(" "), _c("div", {
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
        value: fecha.pago,
        expression: "fecha.pago"
      }],
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        id: "pago" + index
      },
      domProps: {
        checked: Array.isArray(fecha.pago) ? _vm._i(fecha.pago, null) > -1 : fecha.pago
      },
      on: {
        change: function change($event) {
          var $$a = fecha.pago,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(fecha, "pago", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(fecha, "pago", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(fecha, "pago", $$c);
          }
        }
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
        value: fecha.dia,
        expression: "fecha.dia"
      }],
      staticClass: "form-control bg-white",
      attrs: {
        type: "date"
      },
      domProps: {
        value: fecha.dia
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(fecha, "dia", $event.target.value);
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
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardar();
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-cube me-2"
  }), _vm._v(" Crear Paquete\n\t\t\t\t")])])])])]);
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
    staticClass: "form-label text-secondary small fw-medium mb-1"
  }, [_vm._v("Especialidad del Paquete "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label text-secondary small fw-medium mb-1"
  }, [_vm._v("Profesional "), _c("span", {
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.paquetes-container[data-v-27b789ef] {\r\n  font-family: 'Inter', sans-serif;\r\n  color: #334155;\r\n  background-color: #f8fafc;\r\n  min-height: 100vh;\r\n  padding: 1.5rem;\r\n  border-radius: 12px;\n}\r\n\r\n/* Header tabs */\n.module-tabs[data-v-27b789ef] {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  background: #f1f5f9;\r\n  border-radius: 999px;\r\n  padding: 0.25rem;\n}\n.module-tab-btn[data-v-27b789ef] {\r\n  border: none;\r\n  color: #64748b;\r\n  border-radius: 999px;\r\n  font-weight: 600;\r\n  padding: 0.35rem 0.85rem;\n}\n.module-tab-btn.active[data-v-27b789ef] {\r\n  background: #1d4ed8;\r\n  color: #fff;\n}\n.module-tab-btn.active .badge[data-v-27b789ef] {\r\n  background: #fff !important;\r\n  color: #dc2626;\n}\r\n\r\n/* Search Box */\n.search-box[data-v-27b789ef] {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 380px;\n}\n.search-box .search-icon[data-v-27b789ef] {\r\n  position: absolute;\r\n  left: 14px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  color: #94a3b8;\n}\n.search-box input[data-v-27b789ef] {\r\n  padding-left: 40px;\r\n  border-radius: 8px;\r\n  border: 1px solid #cbd5e1;\r\n  background: #fff;\r\n  transition: all 0.2s;\r\n  box-shadow: 0 1px 2px rgba(0,0,0,0.02);\n}\n.search-box input[data-v-27b789ef]:focus {\r\n  border-color: #3b82f6;\r\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\r\n  outline: none;\n}\r\n\r\n/* Metric Cards */\n.summary-card[data-v-27b789ef] {\r\n  border-radius: 12px;\r\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.summary-card[data-v-27b789ef]:hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.06), 0 4px 6px -2px rgba(0,0,0,0.03) !important;\n}\r\n\r\n/* Filters */\n.filter-label[data-v-27b789ef] {\r\n  width: 60px;\r\n  font-size: 0.9rem;\r\n  font-weight: 500;\n}\n.btn-filter[data-v-27b789ef] {\r\n  background: transparent;\r\n  color: #64748b;\r\n  border: none;\r\n  font-weight: 500;\r\n  padding: 0.4rem 1rem;\r\n  border-radius: 20px;\r\n  transition: all 0.2s;\n}\n.btn-filter[data-v-27b789ef]:hover {\r\n  background: #f1f5f9;\r\n  color: #0f172a;\n}\n.btn-filter.active[data-v-27b789ef] {\r\n  background: #3b82f6;\r\n  color: white;\r\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);\n}\r\n\r\n/* Package List */\n.package-card[data-v-27b789ef] {\r\n  border-radius: 14px;\r\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.package-card[data-v-27b789ef]:hover {\r\n  box-shadow: 0 10px 20px -5px rgba(0,0,0,0.06), 0 8px 10px -6px rgba(0,0,0,0.04) !important;\n}\n.border-active[data-v-27b789ef] {\r\n  border-left: 5px solid #f59e0b !important;\n}\n.border-completed[data-v-27b789ef] {\r\n  border-left: 5px solid #3b82f6 !important;\n}\n.package-icon[data-v-27b789ef] {\r\n  width: 48px;\r\n  height: 48px;\r\n  border-radius: 12px;\r\n  background: #eff6ff;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.5rem;\n}\n.package-title[data-v-27b789ef] {\r\n  color: #0f172a;\r\n  font-size: 1.15rem;\n}\r\n\r\n/* Badges */\n.status-badge[data-v-27b789ef] {\r\n  padding: 0.25rem 0.6rem;\r\n  border-radius: 4px;\r\n  font-size: 0.75rem;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.03em;\n}\n.status-act[data-v-27b789ef] { background: #dcfce7; color: #166534;\n}\n.status-com[data-v-27b789ef] { background: #dbeafe; color: #1e3a8a;\n}\n.status-pen[data-v-27b789ef] { background: #fef9c3; color: #854d0e;\n}\n.status-can[data-v-27b789ef] { background: #fee2e2; color: #991b1b;\n}\n.status-def[data-v-27b789ef] { background: #f1f5f9; color: #475569;\n}\n.type-badge[data-v-27b789ef] {\r\n  padding: 0.25rem 0.6rem;\r\n  border-radius: 4px;\r\n  font-size: 0.75rem;\r\n  background: #e0f2fe;\r\n  color: #0369a1;\r\n  font-weight: 600;\n}\n.custom-textarea[data-v-27b789ef] {\r\n  border: 1px solid #e2e8f0;\r\n  border-radius: 10px;\r\n  padding: 0.75rem 1rem;\r\n  font-size: 0.95rem;\r\n  transition: all 0.2s;\r\n  background-color: #f8fafc;\n}\n.custom-textarea[data-v-27b789ef]:focus {\r\n  background-color: #fff;\r\n  border-color: #3b82f6;\r\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);\n}\n.hover-link[data-v-27b789ef]:hover {\r\n  text-decoration: underline !important;\r\n  opacity: 0.8;\n}\r\n\r\n/* Progress bar smoothing */\n.progress-bar[data-v-27b789ef] {\r\n  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n\r\n/* Buttons */\n.outline-btn[data-v-27b789ef] {\r\n  border: 1px solid #e2e8f0;\r\n  background: white;\r\n  color: #475569;\r\n  font-weight: 500;\r\n  border-radius: 6px;\r\n  transition: all 0.2s;\n}\n.outline-btn[data-v-27b789ef]:hover {\r\n  background: #f8fafc;\r\n  color: #0f172a;\r\n  border-color: #cbd5e1;\n}\n.hover-link[data-v-27b789ef] {\r\n  transition: color 0.2s;\n}\n.hover-link[data-v-27b789ef]:hover {\r\n  color: #0f172a !important;\n}\n.dropdown-toggle-link[data-v-27b789ef] {\r\n  color: #3b82f6;\r\n  font-weight: 500;\n}\n.dropdown-toggle-link[data-v-27b789ef]:hover {\r\n  color: #2563eb;\n}\n.info-meta span[data-v-27b789ef] {\r\n  font-size: 0.875rem;\n}\n.history-list-container[data-v-27b789ef] {\r\n  max-height: 250px;\r\n  overflow-y: auto;\n}\n.history-list-container[data-v-27b789ef]::-webkit-scrollbar {\r\n  width: 6px;\n}\n.history-list-container[data-v-27b789ef]::-webkit-scrollbar-track {\r\n  background: #f1f5f9;\n}\n.history-list-container[data-v-27b789ef]::-webkit-scrollbar-thumb {\r\n  background: #cbd5e1; \r\n  border-radius: 10px;\n}\n.history-list-container[data-v-27b789ef]::-webkit-scrollbar-thumb:hover {\r\n  background: #94a3b8;\n}\n.history-item[data-v-27b789ef]:last-child {\r\n  border-bottom: none !important;\n}\r\n\r\n/* Deudas */\n.debt-summary-card[data-v-27b789ef] {\r\n  background: #f8fafc;\r\n  border: 1px solid #e2e8f0;\r\n  border-radius: 16px;\r\n  padding: 1.2rem 1.4rem;\n}\n.debt-summary-card p[data-v-27b789ef] {\r\n  color: #64748b;\r\n  font-size: 1.05rem;\n}\n.debt-card[data-v-27b789ef] {\r\n  border: 1px solid #fecaca;\r\n  border-radius: 18px;\r\n  background: #fff;\r\n  padding: 1.8rem;\n}\n.debt-icon[data-v-27b789ef] {\r\n  width: 68px;\r\n  height: 68px;\r\n  border-radius: 16px;\r\n  background: #fee2e2;\r\n  color: #ef4444;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 2rem;\n}\n.debt-meta[data-v-27b789ef] {\r\n  font-size: 1.05rem;\n}\n.debt-progress-label[data-v-27b789ef] {\r\n  font-size: 1.05rem;\n}\n.debt-progress[data-v-27b789ef] {\r\n  width: 100%;\r\n  height: 12px;\r\n  border-radius: 999px;\r\n  background: #f97316;\r\n  overflow: hidden;\n}\n.debt-progress-paid[data-v-27b789ef] {\r\n  height: 100%;\r\n  background: #2563eb;\r\n  border-radius: 999px 0 0 999px;\n}\n.debt-amount[data-v-27b789ef] {\r\n  color: #ef4444;\r\n  font-weight: 700;\r\n  font-size: 16px;\n}\n.debt-action-btn[data-v-27b789ef] {\r\n  padding: 0.55rem 1.2rem;\r\n  font-weight: 600;\r\n  font-size: 1.05rem;\n}\r\n\r\n/* Vue Modal Overlay - Bypasea el sistema de modales de Bootstrap */\n.vue-modal-overlay[data-v-27b789ef] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  z-index: 99999;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 1rem;\n}\n.vue-modal-box[data-v-27b789ef] {\r\n  background: #fff;\r\n  border-radius: 12px;\r\n  box-shadow: 0 20px 60px rgba(0,0,0,0.3);\r\n  width: 100%;\r\n  max-width: 800px;\r\n  max-height: 90vh;\r\n  overflow-y: auto;\r\n  display: flex;\r\n  flex-direction: column;\n}\n.vue-modal-box .modal-header[data-v-27b789ef] {\r\n  border-radius: 12px 12px 0 0;\r\n  flex-shrink: 0;\n}\n.vue-modal-box .modal-footer[data-v-27b789ef] {\r\n  border-radius: 0 0 12px 12px;\r\n  flex-shrink: 0;\n}\r\n/* Transition */\n.vue-modal-fade-enter-active[data-v-27b789ef],\r\n.vue-modal-fade-leave-active[data-v-27b789ef] {\r\n  transition: opacity 0.2s ease;\n}\n.vue-modal-fade-enter-from[data-v-27b789ef],\r\n.vue-modal-fade-leave-to[data-v-27b789ef] {\r\n  opacity: 0;\n}\n.vue-modal-fade-enter[data-v-27b789ef],\r\n.vue-modal-fade-leave-to[data-v-27b789ef] {\r\n  opacity: 0;\n}\r\n", ""]);
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

/***/ "./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalMembresias_vue_vue_type_template_id_5cb2816c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalMembresias.vue?vue&type=template&id=5cb2816c */ "./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=template&id=5cb2816c");
/* harmony import */ var _ModalMembresias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalMembresias.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalMembresias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalMembresias_vue_vue_type_template_id_5cb2816c__WEBPACK_IMPORTED_MODULE_0__.render,
  _ModalMembresias_vue_vue_type_template_id_5cb2816c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/pagos/ModalMembresias.vue"
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

/***/ "./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalMembresias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalMembresias.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalMembresias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=template&id=5cb2816c":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=template&id=5cb2816c ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalMembresias_vue_vue_type_template_id_5cb2816c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalMembresias_vue_vue_type_template_id_5cb2816c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalMembresias_vue_vue_type_template_id_5cb2816c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalMembresias.vue?vue&type=template&id=5cb2816c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pagos/ModalMembresias.vue?vue&type=template&id=5cb2816c");


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