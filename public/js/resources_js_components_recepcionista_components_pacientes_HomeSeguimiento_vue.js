"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_recepcionista_components_pacientes_HomeSeguimiento_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HomeSeguimiento',
  data: function data() {
    return {
      cargando: true,
      pacientes: [],
      resumen: {
        fidelizados: 0,
        noFidelizados: 0,
        recuperacion: 0,
        inactivos: 0
      },
      tabActiva: 'fidelizacion',
      buscador: '',
      filtroEtiqueta: 'todos',
      filtroFechaDesde: null,
      filtroFechaHasta: null,
      // CRM Seguimiento data
      cargandoCRM: false,
      pacientesCRM: [],
      crmBuscador: '',
      crmFiltroEstado: 'todos',
      crmFiltroServicio: 'todos',
      crmFiltroProfesional: 'todos',
      buscadorTimeout: null,
      crmBuscadorTimeout: null,
      pacienteCRMSeleccionado: null,
      modalCRMInstance: null,
      editandoSeguimiento: null,
      guardandoSeguimiento: false,
      seguimientoForm: {
        id: null,
        patient_id: null,
        numero_seguimiento: null,
        fecha: null,
        canal: '',
        respuesta: '',
        proxima_accion: '',
        comentarios: ''
      }
    };
  },
  computed: {
    fidelizacionStats: function fidelizacionStats() {
      var f = this.resumen.fidelizados || 0;
      var nf = this.resumen.noFidelizados || 0;
      var total = f + nf;
      var tasa = total > 0 ? (f / total * 100).toFixed(1) : 0;
      return {
        total: total,
        fidelizados: f,
        noFidelizados: nf,
        tasa: tasa
      };
    },
    recuperacionStats: function recuperacionStats() {
      var act = this.resumen.recuperacion || 0;
      var inact = this.resumen.inactivos || 0;
      var total = act + inact;
      var tasa = total > 0 ? (act / total * 100).toFixed(1) : 0;
      return {
        total: total,
        activos: act,
        inactivos: inact,
        tasa: tasa
      };
    },
    estadosActuales: function estadosActuales() {
      if (this.tabActiva === 'fidelizacion') {
        return ['Fidelizado', 'No Fidelizado'];
      }
      return ['Activo', 'Inactivo'];
    },
    pacientesTab: function pacientesTab() {
      if (this.tabActiva === 'fidelizacion') {
        return this.pacientes.filter(function (item) {
          return ['Fidelizado', 'No Fidelizado'].includes(item.etiqueta);
        });
      }
      return this.pacientes.filter(function (item) {
        return ['Activo', 'Inactivo'].includes(item.etiqueta);
      });
    },
    pacientesFiltrados: function pacientesFiltrados() {
      var _this = this;
      var texto = this.buscador.trim().toLowerCase();
      var terminos = texto.split(/\s+/).filter(Boolean);
      var f = this.pacientesTab.filter(function (item) {
        var coincideTexto = terminos.length === 0 || terminos.every(function (t) {
          return (item.paciente || '').toLowerCase().includes(t) || (item.profesional || '').toLowerCase().includes(t) || (item.servicio || '').toLowerCase().includes(t);
        });
        var coincideEstado = _this.filtroEtiqueta === 'todos' || item.etiqueta === _this.filtroEtiqueta;
        var coincideFecha = true;
        if (_this.filtroFechaDesde || _this.filtroFechaHasta) {
          if (!item.ultima_cita) {
            coincideFecha = false;
          } else {
            if (_this.filtroFechaDesde && item.ultima_cita < _this.filtroFechaDesde) coincideFecha = false;
            if (_this.filtroFechaHasta && item.ultima_cita > _this.filtroFechaHasta) coincideFecha = false;
          }
        }
        return coincideTexto && coincideEstado && coincideFecha;
      });
      if (!texto) {
        f = f.slice(0, 10);
      }
      return f;
    },
    // CRM Computed Properties
    crmServicios: function crmServicios() {
      return _toConsumableArray(new Set(this.pacientesCRM.map(function (p) {
        return p.servicio;
      }))).filter(Boolean).sort();
    },
    crmProfesionales: function crmProfesionales() {
      return _toConsumableArray(new Set(this.pacientesCRM.map(function (p) {
        return p.profesional;
      }))).filter(Boolean).sort();
    },
    crmResumen: function crmResumen() {
      var total = this.pacientesCRM.length;
      var activos = this.pacientesCRM.filter(function (p) {
        return p.estado === 'Activo';
      }).length;
      var pausa = this.pacientesCRM.filter(function (p) {
        return p.estado === 'Pausa';
      }).length;
      var perdidos = this.pacientesCRM.filter(function (p) {
        return p.estado === 'Perdido';
      }).length;
      return {
        total: total,
        activos: activos,
        pausa: pausa,
        perdidos: perdidos
      };
    },
    crmPacientesFiltrados: function crmPacientesFiltrados() {
      var _this2 = this;
      var texto = this.crmBuscador.trim().toLowerCase();
      var terminos = texto.split(/\s+/).filter(Boolean);
      return this.pacientesCRM.filter(function (item) {
        var nombreCompleto = "".concat(item.name || '', " ").concat(item.nombres || '').toLowerCase();
        var coincideTexto = terminos.length === 0 || terminos.every(function (t) {
          return nombreCompleto.includes(t) || item.dni && item.dni.includes(t) || item.phone && item.phone.includes(t);
        });
        var coincideEstado = _this2.crmFiltroEstado === 'todos' || item.estado === _this2.crmFiltroEstado;
        var coincideServicio = _this2.crmFiltroServicio === 'todos' || item.servicio === _this2.crmFiltroServicio;
        var coincideProfesional = _this2.crmFiltroProfesional === 'todos' || item.profesional === _this2.crmFiltroProfesional;
        return coincideTexto && coincideEstado && coincideServicio && coincideProfesional;
      });
    }
  },
  watch: {
    tabActiva: function tabActiva(newTab) {
      if (newTab === 'crmSeguimiento' && this.pacientesCRM.length === 0) {
        this.cargarPacientesCRM();
      } else {
        this.filtroEtiqueta = 'todos';
      }
    },
    buscador: function buscador(valor) {
      var _this3 = this;
      clearTimeout(this.buscadorTimeout);
      this.buscadorTimeout = setTimeout(function () {
        var texto = (valor || '').trim();
        if (texto === '') {
          _this3.cargarSeguimiento();
          return;
        }
        _this3.buscarCrmOriginal();
      }, 350);
    },
    crmBuscador: function crmBuscador(valor) {
      var _this4 = this;
      if (this.tabActiva !== 'crmSeguimiento') return;
      clearTimeout(this.crmBuscadorTimeout);
      this.crmBuscadorTimeout = setTimeout(function () {
        var texto = (valor || '').trim();
        if (texto === '') {
          _this4.cargarPacientesCRM();
          return;
        }
        _this4.buscarPacientesCRM();
      }, 350);
    }
  },
  beforeUnmount: function beforeUnmount() {
    clearTimeout(this.buscadorTimeout);
    clearTimeout(this.crmBuscadorTimeout);
  },
  methods: {
    cargarSeguimiento: function cargarSeguimiento() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$_this5$axios$g, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this5.cargando = true;
              _context.prev = 1;
              _context.next = 4;
              return _this5.axios.get('/api/seguimiento-crm');
            case 4:
              _yield$_this5$axios$g = _context.sent;
              data = _yield$_this5$axios$g.data;
              _this5.pacientes = data.pacientes || [];
              _this5.resumen = data.resumen || _this5.resumen;
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              console.error('Error cargando seguimiento:', _context.t0);
            case 13:
              _context.prev = 13;
              _this5.cargando = false;
              return _context.finish(13);
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 10, 13, 16]]);
      }))();
    },
    buscarCrmOriginal: function buscarCrmOriginal() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$_this6$axios$g, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!_this6.buscador || _this6.buscador.trim() === '')) {
                _context2.next = 3;
                break;
              }
              _this6.cargarSeguimiento();
              return _context2.abrupt("return");
            case 3:
              _this6.cargando = true;
              _context2.prev = 4;
              _context2.next = 7;
              return _this6.axios.get("/api/seguimiento-crm?search=".concat(encodeURIComponent(_this6.buscador)));
            case 7:
              _yield$_this6$axios$g = _context2.sent;
              data = _yield$_this6$axios$g.data;
              _this6.pacientes = data.pacientes || [];
              _context2.next = 15;
              break;
            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](4);
              console.error('Error buscando seguimiento:', _context2.t0);
            case 15:
              _context2.prev = 15;
              _this6.cargando = false;
              return _context2.finish(15);
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[4, 12, 15, 18]]);
      }))();
    },
    cargarPacientesCRM: function cargarPacientesCRM() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$_this7$axios$g, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this7.cargandoCRM = true;
              _context3.prev = 1;
              _context3.next = 4;
              return _this7.axios.get('/api/seguimientosCRM');
            case 4:
              _yield$_this7$axios$g = _context3.sent;
              data = _yield$_this7$axios$g.data;
              _this7.pacientesCRM = data || [];
              _context3.next = 12;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              console.error('Error cargando pacientes CRM:', _context3.t0);
            case 12:
              _context3.prev = 12;
              _this7.cargandoCRM = false;
              return _context3.finish(12);
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 9, 12, 15]]);
      }))();
    },
    buscarPacientesCRM: function buscarPacientesCRM() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$_this8$axios$g, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!_this8.crmBuscador || _this8.crmBuscador.trim() === '')) {
                _context4.next = 3;
                break;
              }
              _this8.cargarPacientesCRM();
              return _context4.abrupt("return");
            case 3:
              _this8.cargandoCRM = true;
              _context4.prev = 4;
              _context4.next = 7;
              return _this8.axios.get("/api/seguimientosCRM?search=".concat(encodeURIComponent(_this8.crmBuscador)));
            case 7:
              _yield$_this8$axios$g = _context4.sent;
              data = _yield$_this8$axios$g.data;
              _this8.pacientesCRM = data || [];
              _context4.next = 15;
              break;
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](4);
              console.error('Error buscando pacientes CRM:', _context4.t0);
            case 15:
              _context4.prev = 15;
              _this8.cargandoCRM = false;
              return _context4.finish(15);
            case 18:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[4, 12, 15, 18]]);
      }))();
    },
    fechaLatam: function fechaLatam(fecha) {
      if (!fecha) {
        return '-';
      }
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).format('DD/MM/YYYY');
    },
    badgeClass: function badgeClass(etiqueta) {
      if (etiqueta === 'Fidelizado') return 'bg-success';
      if (etiqueta === 'No Fidelizado') return 'bg-warning text-dark';
      if (etiqueta === 'Inactivo') return 'bg-secondary';
      if (etiqueta === 'Activo') return 'bg-danger';
      return 'bg-danger';
    },
    // CRM Methods
    crmBadgeEstado: function crmBadgeEstado(estado) {
      if (estado === 'Activo') return 'bg-success bg-opacity-10 border border-success-subtle';
      if (estado === 'Pausa') return 'bg-warning bg-opacity-10 border border-warning-subtle';
      if (estado === 'Perdido') return 'bg-danger bg-opacity-10 border border-danger-subtle';
      return 'bg-secondary bg-opacity-10 border border-secondary-subtle';
    },
    crmBadgeRespuesta: function crmBadgeRespuesta(respuesta) {
      if (respuesta === 'Interesado') return 'bg-success bg-opacity-10';
      if (respuesta === 'No Responde') return 'bg-secondary bg-opacity-10';
      if (respuesta === 'Fx. Economico') return 'bg-warning bg-opacity-10';
      if (respuesta === 'No Interesado') return 'bg-danger bg-opacity-10';
      return 'bg-light text-dark';
    },
    getSeguimiento: function getSeguimiento(paciente, num) {
      if (!paciente || !paciente.seguimientos) return null;
      return paciente.seguimientos.find(function (s) {
        return s.numero_seguimiento === num;
      });
    },
    abrirModalCRM: function abrirModalCRM(paciente) {
      this.pacienteCRMSeleccionado = paciente;
      this.editandoSeguimiento = null;
      if (!this.modalCRMInstance) {
        this.modalCRMInstance = new bootstrap.Modal(this.$refs.modalCRMDetalles);
      }
      this.modalCRMInstance.show();
    },
    cerrarModalCRM: function cerrarModalCRM() {
      if (this.modalCRMInstance) {
        this.modalCRMInstance.hide();
      }
      this.pacienteCRMSeleccionado = null;
      this.editandoSeguimiento = null;
    },
    activarEdicionSeguimiento: function activarEdicionSeguimiento(num) {
      this.editandoSeguimiento = num;
      var existente = this.getSeguimiento(this.pacienteCRMSeleccionado, num);
      if (existente) {
        this.seguimientoForm = _objectSpread({}, existente);
      } else {
        this.seguimientoForm = {
          id: null,
          patient_id: this.pacienteCRMSeleccionado.id,
          numero_seguimiento: num,
          fecha: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD'),
          canal: '',
          respuesta: '',
          proxima_accion: '',
          comentarios: ''
        };
      }
    },
    cancelarEdicionSeguimiento: function cancelarEdicionSeguimiento() {
      this.editandoSeguimiento = null;
    },
    guardarSeguimiento: function guardarSeguimiento() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var response, savedSeguimiento, index, latestSeg;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this9.guardandoSeguimiento = true;
              _context5.prev = 1;
              if (!_this9.seguimientoForm.id) {
                _context5.next = 8;
                break;
              }
              _context5.next = 5;
              return _this9.axios.put("/api/seguimientosCRM/".concat(_this9.seguimientoForm.id), _this9.seguimientoForm);
            case 5:
              response = _context5.sent;
              _context5.next = 11;
              break;
            case 8:
              _context5.next = 10;
              return _this9.axios.post('/api/seguimientosCRM', _this9.seguimientoForm);
            case 10:
              response = _context5.sent;
            case 11:
              if (response.data.success) {
                savedSeguimiento = response.data.seguimiento;
                index = _this9.pacienteCRMSeleccionado.seguimientos.findIndex(function (s) {
                  return s.numero_seguimiento === savedSeguimiento.numero_seguimiento;
                });
                if (index !== -1) {
                  _this9.pacienteCRMSeleccionado.seguimientos.splice(index, 1, savedSeguimiento);
                } else {
                  _this9.pacienteCRMSeleccionado.seguimientos.push(savedSeguimiento);
                }
                latestSeg = _this9.pacienteCRMSeleccionado.seguimientos.reduce(function (prev, current) {
                  return prev.numero_seguimiento > current.numero_seguimiento ? prev : current;
                });
                if (latestSeg) {
                  if (latestSeg.respuesta === "Interesado") _this9.pacienteCRMSeleccionado.estado = "Activo";else if (latestSeg.respuesta === "No Responde" || latestSeg.respuesta === "Fx. Economico") _this9.pacienteCRMSeleccionado.estado = "Pausa";else if (latestSeg.respuesta) _this9.pacienteCRMSeleccionado.estado = "Perdido";
                }
                _this9.editandoSeguimiento = null;
                _this9.guardandoSeguimiento = false;
                //Reload page.
                _this9.$swal({
                  icon: 'success',
                  title: response.data.message || 'Guardado exitosamente',
                  showConfirmButton: false,
                  timer: 1500
                }).then(function () {
                  location.reload();
                });
              }
              _context5.next = 18;
              break;
            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](1);
              console.error('Error guardando seguimiento:', _context5.t0);
              _this9.$swal({
                icon: 'error',
                title: 'Ocurrió un error al guardar'
              });
            case 18:
              _context5.prev = 18;
              _this9.guardandoSeguimiento = false;
              return _context5.finish(18);
            case 21:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 14, 18, 21]]);
      }))();
    }
  },
  mounted: function mounted() {
    this.cargarSeguimiento();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=template&id=b4a9e972&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=template&id=b4a9e972&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("main", [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "mb-4 nav-pills-custom"
  }, [_c("button", {
    staticClass: "nav-link-custom",
    "class": {
      active: _vm.tabActiva === "fidelizacion"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.tabActiva = "fidelizacion";
      }
    }
  }, [_c("i", {
    staticClass: "fa-regular fa-heart"
  }), _vm._v(" Fidelización\n    ")]), _vm._v(" "), _c("button", {
    staticClass: "nav-link-custom",
    "class": {
      active: _vm.tabActiva === "recuperacion"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.tabActiva = "recuperacion";
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-triangle-exclamation"
  }), _vm._v(" Recuperación\n    ")]), _vm._v(" "), _c("button", {
    staticClass: "nav-link-custom",
    "class": {
      active: _vm.tabActiva === "crmSeguimiento"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.tabActiva = "crmSeguimiento";
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-user-group"
  }), _vm._v(" CRM Seguimiento\n    ")])]), _vm._v(" "), _vm.tabActiva === "fidelizacion" ? _c("div", [_c("div", {
    staticClass: "row g-3 mb-3"
  }, [_c("div", {
    staticClass: "col-md-6 col-xl-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100 rounded-4"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center"
  }, [_vm._m(1), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-muted mb-1 fw-semibold"
  }, [_vm._v("Total Pacientes")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-bold text-dark"
  }, [_vm._v(_vm._s(_vm.fidelizacionStats.total))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-xl-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100 rounded-4"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center"
  }, [_vm._m(2), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-muted mb-1 fw-semibold"
  }, [_vm._v("Fidelizados")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-bold text-dark"
  }, [_vm._v(_vm._s(_vm.fidelizacionStats.fidelizados))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-xl-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100 rounded-4"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center"
  }, [_vm._m(3), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-muted mb-1 fw-semibold"
  }, [_vm._v("No Fidelizados")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-bold text-dark"
  }, [_vm._v(_vm._s(_vm.fidelizacionStats.noFidelizados))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-xl-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100 rounded-4"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center"
  }, [_vm._m(4), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-muted mb-1 fw-semibold"
  }, [_vm._v("Tasa Fidelización")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-bold text-dark"
  }, [_vm._v(_vm._s(_vm.fidelizacionStats.tasa) + "%")])])])])])])]) : _vm._e(), _vm._v(" "), _vm.tabActiva === "recuperacion" ? _c("div", [_c("div", {
    staticClass: "row g-3 mb-3"
  }, [_c("div", {
    staticClass: "col-md-6 col-xl-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100 rounded-4"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center"
  }, [_vm._m(5), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-muted mb-1 fw-semibold"
  }, [_vm._v("Total en Evaluación")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-bold text-dark"
  }, [_vm._v(_vm._s(_vm.recuperacionStats.total))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-xl-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100 rounded-4"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center"
  }, [_vm._m(6), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-muted mb-1 fw-semibold"
  }, [_vm._v("Activos")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-bold text-dark"
  }, [_vm._v(_vm._s(_vm.recuperacionStats.activos))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-xl-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100 rounded-4"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center"
  }, [_vm._m(7), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-muted mb-1 fw-semibold"
  }, [_vm._v("Inactivos")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-bold text-dark"
  }, [_vm._v(_vm._s(_vm.recuperacionStats.inactivos))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-xl-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100 rounded-4"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center"
  }, [_vm._m(8), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-muted mb-1 fw-semibold"
  }, [_vm._v("Tasa Actividad")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-bold text-dark"
  }, [_vm._v(_vm._s(_vm.recuperacionStats.tasa) + "%")])])])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabActiva !== "crmSeguimiento",
      expression: "tabActiva !== 'crmSeguimiento'"
    }]
  }, [_c("div", {
    staticClass: "card mb-3"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row g-2 align-items-center"
  }, [_c("div", {
    staticClass: "col-lg-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.buscador,
      expression: "buscador"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "Buscar paciente...",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.buscador
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.buscarCrmOriginal.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.buscador = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-2"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filtroEtiqueta,
      expression: "filtroEtiqueta"
    }],
    staticClass: "form-select",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.filtroEtiqueta = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "todos"
    }
  }, [_vm._v("Todos")]), _vm._v(" "), _vm._l(_vm.estadosActuales, function (estado) {
    return _c("option", {
      key: estado,
      domProps: {
        value: estado
      }
    }, [_vm._v(_vm._s(estado))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("span", {
    staticClass: "input-group-text small text-muted",
    staticStyle: {
      "font-size": "0.85rem"
    }
  }, [_vm._v("Desde")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filtroFechaDesde,
      expression: "filtroFechaDesde"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.filtroFechaDesde
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.filtroFechaDesde = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("span", {
    staticClass: "input-group-text small text-muted",
    staticStyle: {
      "font-size": "0.85rem"
    }
  }, [_vm._v("Hasta")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filtroFechaHasta,
      expression: "filtroFechaHasta"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.filtroFechaHasta
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.filtroFechaHasta = $event.target.value;
      }
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-hover mb-0"
  }, [_vm._m(9), _vm._v(" "), _c("tbody", [_vm.cargando ? _c("tr", [_vm._m(10)]) : [_vm._l(_vm.pacientesFiltrados, function (item) {
    return _c("tr", {
      key: item.patient_id
    }, [_c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(item.paciente))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.servicio))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(item.profesional))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.citas))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaLatam(item.primera_atencion)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaLatam(item.ultima_cita)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.dias_sin_venir))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge",
      "class": _vm.badgeClass(item.etiqueta)
    }, [_vm._v(_vm._s(item.etiqueta))])])]);
  }), _vm._v(" "), _vm.pacientesFiltrados.length === 0 ? _c("tr", [_c("td", {
    staticClass: "text-center text-muted py-4",
    attrs: {
      colspan: "8"
    }
  }, [_vm._v("No se encontraron pacientes en este segmento")])]) : _vm._e()]], 2)])])])]), _vm._v(" "), _vm.tabActiva === "crmSeguimiento" ? _c("div", [_c("div", {
    staticClass: "row g-3 mb-3 mt-1"
  }, [_c("div", {
    staticClass: "col-md-6 col-xl-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100 rounded-4"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center"
  }, [_vm._m(11), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-muted mb-1 fw-semibold"
  }, [_vm._v("Total Interesados")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-bold text-dark"
  }, [_vm._v(_vm._s(_vm.crmResumen.total))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-xl-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100 rounded-4"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center"
  }, [_vm._m(12), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-muted mb-1 fw-semibold"
  }, [_vm._v("Activos")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-bold text-dark"
  }, [_vm._v(_vm._s(_vm.crmResumen.activos))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-xl-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100 rounded-4"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center"
  }, [_vm._m(13), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-muted mb-1 fw-semibold"
  }, [_vm._v("En Pausa")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-bold text-dark"
  }, [_vm._v(_vm._s(_vm.crmResumen.pausa))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-xl-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100 rounded-4"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center"
  }, [_vm._m(14), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-muted mb-1 fw-semibold"
  }, [_vm._v("Perdidos")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-bold text-dark"
  }, [_vm._v(_vm._s(_vm.crmResumen.perdidos))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card mb-3 shadow-sm border-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row g-2 align-items-center"
  }, [_c("div", {
    staticClass: "col-lg-6"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_vm._m(15), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.crmBuscador,
      expression: "crmBuscador"
    }],
    staticClass: "form-control border-start-0 ps-0",
    attrs: {
      placeholder: "Buscar por nombre, DNI o celular...",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.crmBuscador
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.buscarPacientesCRM.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.crmBuscador = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-2"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.crmFiltroProfesional,
      expression: "crmFiltroProfesional"
    }],
    staticClass: "form-select text-capitalize",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.crmFiltroProfesional = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "todos"
    }
  }, [_vm._v("Todos los profesionales")]), _vm._v(" "), _vm._l(_vm.crmProfesionales, function (prof) {
    return _c("option", {
      key: prof,
      domProps: {
        value: prof
      }
    }, [_vm._v(_vm._s(prof))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-2"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.crmFiltroServicio,
      expression: "crmFiltroServicio"
    }],
    staticClass: "form-select text-capitalize",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.crmFiltroServicio = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "todos"
    }
  }, [_vm._v("Todos los servicios")]), _vm._v(" "), _vm._l(_vm.crmServicios, function (serv) {
    return _c("option", {
      key: serv,
      domProps: {
        value: serv
      }
    }, [_vm._v(_vm._s(serv))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-2"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.crmFiltroEstado,
      expression: "crmFiltroEstado"
    }],
    staticClass: "form-select",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.crmFiltroEstado = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "todos"
    }
  }, [_vm._v("Todos los estados")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Activo"
    }
  }, [_vm._v("Activo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Pausa"
    }
  }, [_vm._v("En Pausa")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Perdido"
    }
  }, [_vm._v("Perdido")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card shadow-sm border-0"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-hover align-middle mb-0 crm-table"
  }, [_vm._m(16), _vm._v(" "), _c("tbody", [_vm.cargandoCRM ? _c("tr", [_vm._m(17)]) : [_vm._l(_vm.crmPacientesFiltrados, function (item) {
    return _c("tr", {
      key: item.id
    }, [_c("td", [_c("div", {
      staticClass: "fw-bold text-dark text-capitalize"
    }, [_vm._v(_vm._s(item.name) + " " + _vm._s(item.nombres))]), _vm._v(" "), _c("div", {
      staticClass: "small text-muted"
    }, [_vm._v(_vm._s(item.dni) + " · " + _vm._s(item.phone))])]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge bg-light rounded-pill text-dark border px-3"
    }, [_vm._v(_vm._s(item.servicio))])]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize text-muted small"
    }, [_vm._v(_vm._s(item.profesional))]), _vm._v(" "), _c("td", {
      staticClass: "fw-bold"
    }, [_vm._v(_vm._s(item.total_membresias))]), _vm._v(" "), _c("td", {
      staticClass: "fw-bold text-success"
    }, [_vm._v(_vm._s(item.total_citas))]), _vm._v(" "), _c("td", {
      staticClass: "fw-bold text-danger"
    }, [_vm._v(_vm._s(item.total_citas_reprogramadas))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge rounded-pill px-3",
      "class": item.tipo_paciente === "Continuo" ? "bg-primary bg-opacity-10 border border-primary-subtle" : "bg-info bg-opacity-10 border border-info-subtle"
    }, [_vm._v(_vm._s(item.tipo_paciente))])]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge rounded-pill px-3",
      "class": _vm.crmBadgeEstado(item.estado)
    }, [_vm._v(_vm._s(item.estado === "Pausa" ? "En Pausa" : item.estado))])]), _vm._v(" "), _c("td", [_vm.getSeguimiento(item, 1) ? _c("div", {
      staticClass: "small"
    }, [_c("div", {
      staticClass: "text-muted",
      staticStyle: {
        "font-size": "0.75rem"
      }
    }, [_vm._v(_vm._s(_vm.fechaLatam(_vm.getSeguimiento(item, 1).fecha)))]), _vm._v(" "), _c("div", {
      staticClass: "badge rounded-pill mt-1",
      "class": _vm.crmBadgeRespuesta(_vm.getSeguimiento(item, 1).respuesta)
    }, [_c("i", {
      staticClass: "fa-regular fa-comment-dots"
    }), _vm._v(" " + _vm._s(_vm.getSeguimiento(item, 1).respuesta || "Sin respuesta"))]), _vm._v(" "), _c("div", {
      staticClass: "text-muted mt-1 text-truncate",
      staticStyle: {
        "font-size": "0.7rem",
        "max-width": "120px"
      },
      attrs: {
        title: _vm.getSeguimiento(item, 1).proxima_accion
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-arrow-right"
    }), _vm._v(" " + _vm._s(_vm.getSeguimiento(item, 1).proxima_accion || "-"))])]) : _c("div", {
      staticClass: "text-muted small",
      staticStyle: {
        "font-size": "0.75rem"
      }
    }, [_c("i", {
      staticClass: "fa-regular fa-clock"
    }), _vm._v(" Pendiente")])]), _vm._v(" "), _c("td", [_vm.getSeguimiento(item, 2) ? _c("div", {
      staticClass: "small"
    }, [_c("div", {
      staticClass: "text-muted",
      staticStyle: {
        "font-size": "0.75rem"
      }
    }, [_vm._v(_vm._s(_vm.fechaLatam(_vm.getSeguimiento(item, 2).fecha)))]), _vm._v(" "), _c("div", {
      staticClass: "badge rounded-pill mt-1",
      "class": _vm.crmBadgeRespuesta(_vm.getSeguimiento(item, 2).respuesta)
    }, [_c("i", {
      staticClass: "fa-regular fa-comment-dots"
    }), _vm._v(" " + _vm._s(_vm.getSeguimiento(item, 2).respuesta || "Sin respuesta"))]), _vm._v(" "), _c("div", {
      staticClass: "text-muted mt-1 text-truncate",
      staticStyle: {
        "font-size": "0.7rem",
        "max-width": "120px"
      },
      attrs: {
        title: _vm.getSeguimiento(item, 2).proxima_accion
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-arrow-right"
    }), _vm._v(" " + _vm._s(_vm.getSeguimiento(item, 2).proxima_accion || "-"))])]) : _c("div", {
      staticClass: "text-muted small",
      staticStyle: {
        "font-size": "0.75rem"
      }
    }, [_c("i", {
      staticClass: "fa-regular fa-clock"
    }), _vm._v(" Pendiente")])]), _vm._v(" "), _c("td", [_vm.getSeguimiento(item, 3) ? _c("div", {
      staticClass: "small"
    }, [_c("div", {
      staticClass: "text-muted",
      staticStyle: {
        "font-size": "0.75rem"
      }
    }, [_vm._v(_vm._s(_vm.fechaLatam(_vm.getSeguimiento(item, 3).fecha)))]), _vm._v(" "), _c("div", {
      staticClass: "badge rounded-pill mt-1",
      "class": _vm.crmBadgeRespuesta(_vm.getSeguimiento(item, 3).respuesta)
    }, [_c("i", {
      staticClass: "fa-regular fa-comment-dots"
    }), _vm._v(" " + _vm._s(_vm.getSeguimiento(item, 3).respuesta || "Sin respuesta"))]), _vm._v(" "), _c("div", {
      staticClass: "text-muted mt-1 text-truncate",
      staticStyle: {
        "font-size": "0.7rem",
        "max-width": "120px"
      },
      attrs: {
        title: _vm.getSeguimiento(item, 3).proxima_accion
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-arrow-right"
    }), _vm._v(" " + _vm._s(_vm.getSeguimiento(item, 3).proxima_accion || "-"))])]) : _c("div", {
      staticClass: "text-muted small",
      staticStyle: {
        "font-size": "0.75rem"
      }
    }, [_c("i", {
      staticClass: "fa-regular fa-clock"
    }), _vm._v(" Pendiente")])]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-sm btn-light text-secondary rounded-circle",
      on: {
        click: function click($event) {
          return _vm.abrirModalCRM(item);
        }
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-eye"
    })])])]);
  }), _vm._v(" "), _vm.crmPacientesFiltrados.length === 0 ? _c("tr", [_c("td", {
    staticClass: "text-center text-muted py-4",
    attrs: {
      colspan: "12"
    }
  }, [_vm._v("No se encontraron pacientes CRM")])]) : _vm._e()]], 2)])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    ref: "modalCRMDetalles",
    staticClass: "modal fade",
    attrs: {
      id: "modalCRMDetalles",
      tabindex: "-1",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
  }, [_c("div", {
    staticClass: "modal-content border-0 shadow"
  }, [_c("div", {
    staticClass: "modal-header border-bottom-0 pb-0"
  }, [_vm.pacienteCRMSeleccionado ? _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_vm._m(18), _vm._v(" "), _c("div", [_c("h5", {
    staticClass: "modal-title fw-bold mb-0 text-capitalize"
  }, [_vm._v(_vm._s(_vm.pacienteCRMSeleccionado.name) + " " + _vm._s(_vm.pacienteCRMSeleccionado.nombres))]), _vm._v(" "), _c("div", {
    staticClass: "text-muted small"
  }, [_vm._v(_vm._s(_vm.pacienteCRMSeleccionado.dni) + " · " + _vm._s(_vm.pacienteCRMSeleccionado.phone))])])]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    },
    on: {
      click: _vm.cerrarModalCRM
    }
  })]), _vm._v(" "), _vm.pacienteCRMSeleccionado ? _c("div", {
    staticClass: "modal-body pt-3 bg-light"
  }, [_c("div", {
    staticClass: "row g-2 mb-3"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "card h-100 border-0 shadow-sm rounded-3"
  }, [_c("div", {
    staticClass: "card-body p-3"
  }, [_c("div", {
    staticClass: "text-muted small"
  }, [_vm._v("Servicio / Profesional")]), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm.pacienteCRMSeleccionado.servicio))]), _vm._v(" "), _c("div", {
    staticClass: "small text-muted text-capitalize"
  }, [_vm._v(_vm._s(_vm.pacienteCRMSeleccionado.profesional))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "card h-100 border-0 shadow-sm rounded-3"
  }, [_c("div", {
    staticClass: "card-body p-3"
  }, [_c("div", {
    staticClass: "text-muted small"
  }, [_vm._v("Último Paquete")]), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Paquete " + _vm._s(_vm.pacienteCRMSeleccionado.total_membresias))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row g-2 mb-3 text-center"
  }, [_c("div", {
    staticClass: "col-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm rounded-3 py-2"
  }, [_vm._m(19), _vm._v(" "), _c("div", {
    staticClass: "fw-bold fs-5 lh-1 mt-1"
  }, [_vm._v(_vm._s(_vm.pacienteCRMSeleccionado.total_membresias))]), _vm._v(" "), _c("div", {
    staticClass: "small text-muted",
    staticStyle: {
      "font-size": "0.7rem"
    }
  }, [_vm._v("Total Paq.")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm rounded-3 py-2"
  }, [_vm._m(20), _vm._v(" "), _c("div", {
    staticClass: "fw-bold fs-5 lh-1 mt-1"
  }, [_vm._v(_vm._s(_vm.pacienteCRMSeleccionado.total_citas))]), _vm._v(" "), _c("div", {
    staticClass: "small text-muted",
    staticStyle: {
      "font-size": "0.7rem"
    }
  }, [_vm._v("Sesiones")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm rounded-3 py-2"
  }, [_vm._m(21), _vm._v(" "), _c("div", {
    staticClass: "fw-bold fs-5 lh-1 mt-1"
  }, [_vm._v(_vm._s(_vm.pacienteCRMSeleccionado.total_citas_reprogramadas))]), _vm._v(" "), _c("div", {
    staticClass: "small text-muted",
    staticStyle: {
      "font-size": "0.7rem"
    }
  }, [_vm._v("Reprog.")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-3"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm rounded-3 py-2"
  }, [_vm._m(22), _vm._v(" "), _vm.pacienteCRMSeleccionado.lastAppointment ? _c("div", {
    staticClass: "fw-bold fs-6 lh-1 mt-1"
  }, [_vm._v(_vm._s(_vm.fechaLatam(_vm.pacienteCRMSeleccionado.lastAppointment.date)))]) : _c("div", {
    staticClass: "fw-bold fs-6 lh-1 mt-1 text-muted"
  }, [_vm._v("-")]), _vm._v(" "), _c("div", {
    staticClass: "small text-muted",
    staticStyle: {
      "font-size": "0.7rem"
    }
  }, [_vm._v("Últ. Cita")])])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center mb-4 gap-2"
  }, [_c("span", {
    staticClass: "text-muted small"
  }, [_vm._v("Estado:")]), _vm._v(" "), _c("span", {
    staticClass: "badge rounded-pill px-3",
    "class": _vm.crmBadgeEstado(_vm.pacienteCRMSeleccionado.estado)
  }, [_vm._v(_vm._s(_vm.pacienteCRMSeleccionado.estado === "Pausa" ? "En Pausa" : _vm.pacienteCRMSeleccionado.estado))]), _vm._v(" "), _c("span", {
    staticClass: "badge rounded-pill px-3",
    "class": _vm.pacienteCRMSeleccionado.tipo_paciente === "Continuo" ? "bg-primary bg-opacity-10 border border-primary-subtle" : "bg-info bg-opacity-10 border border-info-subtle"
  }, [_vm._v(_vm._s(_vm.pacienteCRMSeleccionado.tipo_paciente))])]), _vm._v(" "), _vm._l([1, 2, 3], function (num) {
    return _c("div", {
      key: num,
      staticClass: "card border-0 shadow-sm rounded-3 mb-3"
    }, [_c("div", {
      staticClass: "card-body p-3"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center mb-3"
    }, [_c("h6", {
      staticClass: "fw-bold mb-0"
    }, [_vm._v(_vm._s(num) + "° Seguimiento "), num === 3 ? _c("span", [_vm._v("(Final)")]) : _vm._e()]), _vm._v(" "), !_vm.editandoSeguimiento || _vm.editandoSeguimiento !== num ? _c("button", {
      staticClass: "btn btn-sm btn-outline-secondary rounded-pill px-3",
      on: {
        click: function click($event) {
          return _vm.activarEdicionSeguimiento(num);
        }
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.getSeguimiento(_vm.pacienteCRMSeleccionado, num) ? "Editar" : "Registrar") + "\n                ")]) : _c("div", [_c("button", {
      staticClass: "btn btn-sm btn-outline-danger rounded-pill px-3 me-2",
      on: {
        click: _vm.cancelarEdicionSeguimiento
      }
    }, [_vm._v("Cancelar")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm btn-primary rounded-pill px-3",
      attrs: {
        disabled: _vm.guardandoSeguimiento
      },
      on: {
        click: _vm.guardarSeguimiento
      }
    }, [_vm.guardandoSeguimiento ? _c("span", {
      staticClass: "spinner-border spinner-border-sm",
      attrs: {
        role: "status",
        "aria-hidden": "true"
      }
    }) : _vm._e(), _vm._v("\n                    Guardar\n                  ")])])]), _vm._v(" "), !_vm.editandoSeguimiento || _vm.editandoSeguimiento !== num ? _c("div", [_vm.getSeguimiento(_vm.pacienteCRMSeleccionado, num) ? _c("div", {
      staticClass: "row g-2 small"
    }, [_c("div", {
      staticClass: "col-6"
    }, [_c("span", {
      staticClass: "text-muted"
    }, [_vm._v("Fecha:")]), _vm._v(" " + _vm._s(_vm.fechaLatam(_vm.getSeguimiento(_vm.pacienteCRMSeleccionado, num).fecha)) + "\n                  ")]), _vm._v(" "), _c("div", {
      staticClass: "col-6"
    }, [_c("span", {
      staticClass: "text-muted"
    }, [_vm._v("Canal:")]), _vm._v(" " + _vm._s(_vm.getSeguimiento(_vm.pacienteCRMSeleccionado, num).canal || "-") + "\n                  ")]), _vm._v(" "), _c("div", {
      staticClass: "col-6 mt-2"
    }, [_c("span", {
      staticClass: "text-muted"
    }, [_vm._v("Respuesta:")]), _vm._v(" "), _c("span", {
      staticClass: "badge rounded-pill",
      "class": _vm.crmBadgeRespuesta(_vm.getSeguimiento(_vm.pacienteCRMSeleccionado, num).respuesta)
    }, [_vm._v(_vm._s(_vm.getSeguimiento(_vm.pacienteCRMSeleccionado, num).respuesta || "Sin respuesta"))])]), _vm._v(" "), _c("div", {
      staticClass: "col-6 mt-2"
    }, [_c("span", {
      staticClass: "text-muted"
    }, [_vm._v("Próx. Acción:")]), _vm._v(" " + _vm._s(_vm.getSeguimiento(_vm.pacienteCRMSeleccionado, num).proxima_accion || "-") + "\n                  ")]), _vm._v(" "), _vm.getSeguimiento(_vm.pacienteCRMSeleccionado, num).comentarios ? _c("div", {
      staticClass: "col-12 mt-2"
    }, [_c("span", {
      staticClass: "text-muted"
    }, [_vm._v("Comentarios:")]), _vm._v(" " + _vm._s(_vm.getSeguimiento(_vm.pacienteCRMSeleccionado, num).comentarios) + "\n                  ")]) : _vm._e()]) : _c("div", {
      staticClass: "text-muted small text-center py-2"
    }, [_vm._v("\n                  No registrado\n                ")])]) : _vm._e(), _vm._v(" "), _vm.editandoSeguimiento === num ? _c("div", {
      staticClass: "row g-3 small"
    }, [_c("div", {
      staticClass: "col-md-6"
    }, [_c("label", {
      staticClass: "form-label text-muted mb-1"
    }, [_vm._v("Fecha de Contacto")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.seguimientoForm.fecha,
        expression: "seguimientoForm.fecha"
      }],
      staticClass: "form-control form-control-sm rounded-pill",
      attrs: {
        type: "date"
      },
      domProps: {
        value: _vm.seguimientoForm.fecha
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.seguimientoForm, "fecha", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-6"
    }, [_c("label", {
      staticClass: "form-label text-muted mb-1"
    }, [_vm._v("Canal")]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.seguimientoForm.canal,
        expression: "seguimientoForm.canal"
      }],
      staticClass: "form-select form-select-sm rounded-pill",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(_vm.seguimientoForm, "canal", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("Seleccionar...")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "WhatsApp"
      }
    }, [_vm._v("WhatsApp")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Llamada"
      }
    }, [_vm._v("Llamada")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Email"
      }
    }, [_vm._v("Email")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Presencial"
      }
    }, [_vm._v("Presencial")])])]), _vm._v(" "), _c("div", {
      staticClass: "col-md-12"
    }, [_c("label", {
      staticClass: "form-label text-muted mb-1"
    }, [_vm._v("Respuesta")]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.seguimientoForm.respuesta,
        expression: "seguimientoForm.respuesta"
      }],
      staticClass: "form-select form-select-sm rounded-pill",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(_vm.seguimientoForm, "respuesta", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("Seleccionar...")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Interesado"
      }
    }, [_vm._v("Interesado")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "No Responde"
      }
    }, [_vm._v("No Responde")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Fx. Economico"
      }
    }, [_vm._v("Fx. Económico")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "No Interesado"
      }
    }, [_vm._v("No Interesado")])])]), _vm._v(" "), _c("div", {
      staticClass: "col-md-12"
    }, [_c("label", {
      staticClass: "form-label text-muted mb-1"
    }, [_vm._v("Próxima Acción")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.seguimientoForm.proxima_accion,
        expression: "seguimientoForm.proxima_accion"
      }],
      staticClass: "form-control form-control-sm rounded-pill",
      attrs: {
        type: "text",
        placeholder: "Describir..."
      },
      domProps: {
        value: _vm.seguimientoForm.proxima_accion
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.seguimientoForm, "proxima_accion", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-12"
    }, [_c("label", {
      staticClass: "form-label text-muted mb-1"
    }, [_vm._v("Comentarios")]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.seguimientoForm.comentarios,
        expression: "seguimientoForm.comentarios"
      }],
      staticClass: "form-control form-control-sm rounded-3",
      attrs: {
        rows: "2",
        placeholder: "Opcional..."
      },
      domProps: {
        value: _vm.seguimientoForm.comentarios
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.seguimientoForm, "comentarios", $event.target.value);
        }
      }
    })])]) : _vm._e()])]);
  })], 2) : _vm._e()])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mb-4"
  }, [_c("h1", {
    staticClass: "h3 mb-1 text-gray-800"
  }, [_vm._v("Seguimiento CRM")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("Gestión de seguimiento, fidelización y recuperación de pacientes")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3",
    staticStyle: {
      width: "48px",
      height: "48px"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-users fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3",
    staticStyle: {
      width: "48px",
      height: "48px"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-user-check fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3",
    staticStyle: {
      width: "48px",
      height: "48px"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-user-xmark fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bg-info bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3",
    staticStyle: {
      width: "48px",
      height: "48px"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-chart-pie fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3",
    staticStyle: {
      width: "48px",
      height: "48px"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-users fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3",
    staticStyle: {
      width: "48px",
      height: "48px"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-user-clock fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bg-secondary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3",
    staticStyle: {
      width: "48px",
      height: "48px"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-user-minus fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3",
    staticStyle: {
      width: "48px",
      height: "48px"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-bolt fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Servicio")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("Citas")]), _vm._v(" "), _c("th", [_vm._v("1° Atención")]), _vm._v(" "), _c("th", [_vm._v("Última Cita")]), _vm._v(" "), _c("th", [_vm._v("Días sin venir")]), _vm._v(" "), _c("th", [_vm._v("Etiqueta")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center py-5",
    attrs: {
      colspan: "8"
    }
  }, [_c("div", {
    staticClass: "spinner-border text-primary",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Cargando...")])]), _vm._v(" "), _c("p", {
    staticClass: "mt-2 text-muted mb-0"
  }, [_vm._v("Cargando datos del servidor...")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3",
    staticStyle: {
      width: "48px",
      height: "48px"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-address-book fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3",
    staticStyle: {
      width: "48px",
      height: "48px"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-check-circle fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3",
    staticStyle: {
      width: "48px",
      height: "48px"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-pause-circle fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3",
    staticStyle: {
      width: "48px",
      height: "48px"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-times-circle fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "input-group-text bg-transparent"
  }, [_c("i", {
    staticClass: "fa-solid fa-magnifying-glass text-muted"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "table-light text-muted small text-uppercase",
    staticStyle: {
      "font-size": "0.8rem"
    }
  }, [_c("tr", [_c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Servicio")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("Paq.")]), _vm._v(" "), _c("th", [_vm._v("Ses.")]), _vm._v(" "), _c("th", [_vm._v("Rep.")]), _vm._v(" "), _c("th", [_vm._v("Tipo")]), _vm._v(" "), _c("th", [_vm._v("Estado")]), _vm._v(" "), _c("th", [_vm._v("1° Seguimiento")]), _vm._v(" "), _c("th", [_vm._v("2° Seguimiento")]), _vm._v(" "), _c("th", [_vm._v("Seg. Final")]), _vm._v(" "), _c("th")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center py-5",
    attrs: {
      colspan: "12"
    }
  }, [_c("div", {
    staticClass: "spinner-border text-primary",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Cargando...")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fs-4 text-primary me-2"
  }, [_c("i", {
    staticClass: "fa-regular fa-user"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fs-5 text-primary"
  }, [_c("i", {
    staticClass: "fa-solid fa-cube"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fs-5 text-success"
  }, [_c("i", {
    staticClass: "fa-solid fa-hashtag"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fs-5 text-danger"
  }, [_c("i", {
    staticClass: "fa-regular fa-calendar-xmark"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fs-5 text-dark"
  }, [_c("i", {
    staticClass: "fa-regular fa-calendar-check"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=style&index=0&id=b4a9e972&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=style&index=0&id=b4a9e972&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.nav-pills-custom[data-v-b4a9e972] {\r\n  background-color: #f1f3f5;\r\n  padding: 5px;\r\n  border-radius: 12px;\r\n  display: inline-flex;\r\n  gap: 4px;\n}\n.nav-link-custom[data-v-b4a9e972] {\r\n  border: none;\r\n  background: transparent;\r\n  padding: 10px 20px;\r\n  border-radius: 10px;\r\n  font-weight: 500;\r\n  color: #64748b;\r\n  transition: all 0.25s ease;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  font-size: 0.95rem;\n}\n.nav-link-custom[data-v-b4a9e972]:hover {\r\n  color: #334155;\r\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.nav-link-custom.active[data-v-b4a9e972] {\r\n  background-color: #ffffff !important;\r\n  color: #0f172a !important;\r\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.nav-link-custom i[data-v-b4a9e972] {\r\n  font-size: 1.1rem;\n}\n.crm-table th[data-v-b4a9e972] {\r\n  font-weight: 600;\r\n  letter-spacing: 0.5px;\n}\n.crm-table td[data-v-b4a9e972] {\r\n  vertical-align: middle;\n}\n.puntero[data-v-b4a9e972] { cursor: pointer;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=style&index=0&id=b4a9e972&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=style&index=0&id=b4a9e972&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSeguimiento_vue_vue_type_style_index_0_id_b4a9e972_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeSeguimiento.vue?vue&type=style&index=0&id=b4a9e972&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=style&index=0&id=b4a9e972&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSeguimiento_vue_vue_type_style_index_0_id_b4a9e972_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSeguimiento_vue_vue_type_style_index_0_id_b4a9e972_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeSeguimiento_vue_vue_type_template_id_b4a9e972_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeSeguimiento.vue?vue&type=template&id=b4a9e972&scoped=true */ "./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=template&id=b4a9e972&scoped=true");
/* harmony import */ var _HomeSeguimiento_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeSeguimiento.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=script&lang=js");
/* harmony import */ var _HomeSeguimiento_vue_vue_type_style_index_0_id_b4a9e972_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeSeguimiento.vue?vue&type=style&index=0&id=b4a9e972&scoped=true&lang=css */ "./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=style&index=0&id=b4a9e972&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomeSeguimiento_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeSeguimiento_vue_vue_type_template_id_b4a9e972_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeSeguimiento_vue_vue_type_template_id_b4a9e972_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b4a9e972",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSeguimiento_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeSeguimiento.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSeguimiento_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=template&id=b4a9e972&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=template&id=b4a9e972&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSeguimiento_vue_vue_type_template_id_b4a9e972_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSeguimiento_vue_vue_type_template_id_b4a9e972_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSeguimiento_vue_vue_type_template_id_b4a9e972_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeSeguimiento.vue?vue&type=template&id=b4a9e972&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=template&id=b4a9e972&scoped=true");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=style&index=0&id=b4a9e972&scoped=true&lang=css":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=style&index=0&id=b4a9e972&scoped=true&lang=css ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSeguimiento_vue_vue_type_style_index_0_id_b4a9e972_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeSeguimiento.vue?vue&type=style&index=0&id=b4a9e972&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomeSeguimiento.vue?vue&type=style&index=0&id=b4a9e972&scoped=true&lang=css");


/***/ })

}]);