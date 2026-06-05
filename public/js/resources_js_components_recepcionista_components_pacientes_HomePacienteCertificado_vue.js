"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_recepcionista_components_pacientes_HomePacienteCertificado_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HomePacienteCertificado',
  data: function data() {
    return {
      pacientes: [],
      loading: false,
      saving: false,
      searchQuery: '',
      activeSearch: false,
      searchTimeout: null,
      isEditMode: false,
      selectedId: null,
      totalCount: 0,
      trabajoCount: 0,
      estudiosCount: 0,
      form: {
        nombres: '',
        apellidos: '',
        dni: '',
        telefono: '',
        correo: '',
        tipo_certificado: ''
      },
      servicios: [],
      monedas: [],
      modalPayment: null,
      savingPago: false,
      pagoForm: {
        paciente_id: null,
        precio: 0,
        moneda_id: '',
        tipo_comprobante: '1',
        voucher: '',
        motivo: ''
      },
      pagination: {
        current_page: 1,
        last_page: 1,
        from: 1,
        to: 1
      },
      modal: null
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
  methods: {
    cargarListas: function cargarListas() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$Promise$all, _yield$Promise$all2, monedasRes, preciosRes, permitidos;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Promise.all([_this.axios.get('/api/listarMonedas'), _this.axios.get('/api/listarPreciosTodos')]);
            case 3:
              _yield$Promise$all = _context.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              monedasRes = _yield$Promise$all2[0];
              preciosRes = _yield$Promise$all2[1];
              _this.monedas = monedasRes.data;
              permitidos = ['Rotación de servicio', 'Prácticas pre profesionales', 'Serum', 'Nombramiento', 'Certificado de trabajo simple'];
              _this.servicios = preciosRes.data.filter(function (p) {
                return p.idClasificacion === 3 && permitidos.includes(p.descripcion.trim());
              });
              _context.next = 15;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.error('Error cargando listas:', _context.t0);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 12]]);
      }))();
    },
    buscarDatosDNI: function buscarDatosDNI() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var localRes, p, apiRes;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!_this2.form.dni || _this2.form.dni.length < 8)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              _context2.prev = 2;
              _context2.next = 5;
              return _this2.axios.get("/api/paciente-certificado/dni/".concat(_this2.form.dni));
            case 5:
              localRes = _context2.sent;
              if (!localRes.data.encontrado_bd) {
                _context2.next = 15;
                break;
              }
              p = localRes.data.paciente;
              _this2.form.nombres = p.nombres;
              _this2.form.apellidos = p.apellidos;
              _this2.form.telefono = p.telefono;
              _this2.form.correo = p.correo;
              _this2.form.tipo_certificado = p.tipo_certificado;
              _this2.$swal({
                toast: true,
                position: 'top-end',
                icon: 'info',
                title: 'Datos recuperados',
                showConfirmButton: false,
                timer: 1500
              });
              return _context2.abrupt("return");
            case 15:
              _context2.next = 17;
              return _this2.axios.get("/api/buscarDni/".concat(_this2.form.dni));
            case 17:
              apiRes = _context2.sent;
              if (!apiRes.data.error) {
                _this2.form.nombres = apiRes.data.nombres;
                _this2.form.apellidos = "".concat(apiRes.data.apellido_paterno, " ").concat(apiRes.data.apellido_materno).trim();
              } else {
                _this2.$swal({
                  toast: true,
                  position: 'top-end',
                  icon: 'warning',
                  title: 'No se encontraron datos en Reniec',
                  showConfirmButton: false,
                  timer: 2000
                });
              }
              _context2.next = 24;
              break;
            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](2);
              console.error('Error buscando DNI:', _context2.t0);
            case 24:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 21]]);
      }))();
    },
    cargarPacientes: function cargarPacientes() {
      var _arguments = arguments,
        _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var page, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
              _this3.loading = true;
              _context3.prev = 2;
              _context3.next = 5;
              return _this3.axios.get('/api/paciente-certificado', {
                params: {
                  page: page,
                  search: _this3.searchQuery
                }
              });
            case 5:
              response = _context3.sent;
              _this3.pacientes = response.data.data;
              _this3.pagination = {
                current_page: response.data.current_page,
                last_page: response.data.last_page,
                from: response.data.from,
                to: response.data.to
              };
              _this3.actualizarMetricas();
              _context3.next = 14;
              break;
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](2);
              console.error('Error cargando pacientes:', _context3.t0);
            case 14:
              _context3.prev = 14;
              _this3.loading = false;
              return _context3.finish(14);
            case 17:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[2, 11, 14, 17]]);
      }))();
    },
    actualizarMetricas: function actualizarMetricas() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$_this4$axios$g, data, todos;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _this4.axios.get('/api/paciente-certificado', {
                params: {
                  limit: 1000
                }
              });
            case 3:
              _yield$_this4$axios$g = _context4.sent;
              data = _yield$_this4$axios$g.data;
              todos = data.data || [];
              _this4.totalCount = data.total || todos.length;
              _this4.trabajoCount = todos.filter(function (p) {
                return p.tipo_certificado === 'trabajo';
              }).length;
              _this4.estudiosCount = todos.filter(function (p) {
                return p.tipo_certificado === 'estudios';
              }).length;
              _context4.next = 14;
              break;
            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              console.error('Error calculando métricas:', _context4.t0);
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 11]]);
      }))();
    },
    buscar: function buscar() {
      this.activeSearch = true;
      this.cargarPacientes(1);
    },
    onSearchInput: function onSearchInput() {
      var _this5 = this;
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(function () {
        _this5.buscar();
      }, 500);
    },
    resetSearch: function resetSearch() {
      this.searchQuery = '';
      this.activeSearch = false;
      this.cargarPacientes(1);
    },
    openCreateModal: function openCreateModal() {
      this.isEditMode = false;
      this.selectedId = null;
      this.form = {
        nombres: '',
        apellidos: '',
        dni: '',
        telefono: '',
        correo: '',
        tipo_certificado: ''
      };
      this.showModal();
    },
    openEditModal: function openEditModal(paciente) {
      this.isEditMode = true;
      this.selectedId = paciente.id;
      this.form = {
        nombres: paciente.nombres,
        apellidos: paciente.apellidos,
        dni: paciente.dni,
        telefono: paciente.telefono,
        correo: paciente.correo || '',
        tipo_certificado: paciente.tipo_certificado
      };
      this.showModal();
    },
    showModal: function showModal() {
      if (!this.modal) {
        this.modal = new window.bootstrap.Modal(this.$refs.modalForm);
      }
      this.modal.show();
    },
    closeModal: function closeModal() {
      if (this.modal) {
        this.modal.hide();
      }
    },
    cambiarEstado: function cambiarEstado(paciente) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _this6.axios.put("/api/paciente-certificado/".concat(paciente.id, "/estado"), {
                estado: paciente.estado
              });
            case 3:
              _this6.$swal({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Estado actualizado',
                showConfirmButton: false,
                timer: 1500
              });
              _context5.next = 11;
              break;
            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              console.error('Error cambiando estado:', _context5.t0);
              _this6.$swal({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo actualizar el estado.'
              });
              _this6.cargarPacientes(_this6.pagination.current_page);
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 6]]);
      }))();
    },
    openPaymentModal: function openPaymentModal(paciente) {
      var s = this.servicios.find(function (x) {
        var _paciente$tipo_certif;
        return x.id.toString() === ((_paciente$tipo_certif = paciente.tipo_certificado) === null || _paciente$tipo_certif === void 0 ? void 0 : _paciente$tipo_certif.toString());
      });
      var precio = s ? s.nuevos || 0 : 0;
      this.pagoForm = {
        paciente_id: paciente.id,
        precio: precio,
        moneda_id: '',
        tipo_comprobante: '1',
        voucher: '',
        motivo: ''
      };
      if (!this.modalPayment) {
        this.modalPayment = new window.bootstrap.Modal(this.$refs.modalPaymentForm);
      }
      this.modalPayment.show();
    },
    closePaymentModal: function closePaymentModal() {
      if (this.modalPayment) this.modalPayment.hide();
    },
    submitPago: function submitPago() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this7.savingPago = true;
              _context6.prev = 1;
              _context6.next = 4;
              return _this7.axios.post("/api/paciente-certificado/".concat(_this7.pagoForm.paciente_id, "/pagar"), _this7.pagoForm);
            case 4:
              _this7.$swal({
                icon: 'success',
                title: 'Pago Registrado',
                text: 'El pago se registró en caja correctamente.',
                showConfirmButton: false,
                timer: 1500
              });
              _this7.closePaymentModal();
              _this7.cargarPacientes(_this7.pagination.current_page);
              _context6.next = 13;
              break;
            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](1);
              console.error('Error guardando pago:', _context6.t0);
              _this7.$swal({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al registrar el pago.'
              });
            case 13:
              _context6.prev = 13;
              _this7.savingPago = false;
              return _context6.finish(13);
            case 16:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[1, 9, 13, 16]]);
      }))();
    },
    savePaciente: function savePaciente() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var errorMsg, errors;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _this8.saving = true;
              _context7.prev = 1;
              if (!_this8.isEditMode) {
                _context7.next = 8;
                break;
              }
              _context7.next = 5;
              return _this8.axios.put("/api/paciente-certificado/".concat(_this8.selectedId), _this8.form);
            case 5:
              _this8.$swal({
                icon: 'success',
                title: 'Actualizado',
                text: 'El registro se actualizó correctamente.',
                showConfirmButton: false,
                timer: 1500
              });
              _context7.next = 11;
              break;
            case 8:
              _context7.next = 10;
              return _this8.axios.post('/api/paciente-certificado', _this8.form);
            case 10:
              _this8.$swal({
                icon: 'success',
                title: 'Registrado',
                text: 'El paciente se registró correctamente.',
                showConfirmButton: false,
                timer: 1500
              });
            case 11:
              _this8.closeModal();
              _this8.cargarPacientes(_this8.pagination.current_page);
              _context7.next = 21;
              break;
            case 15:
              _context7.prev = 15;
              _context7.t0 = _context7["catch"](1);
              console.error('Error guardando paciente:', _context7.t0);
              errorMsg = 'Ocurrió un error al guardar los datos.';
              if (_context7.t0.response && _context7.t0.response.data && _context7.t0.response.data.errors) {
                errors = _context7.t0.response.data.errors;
                errorMsg = Object.values(errors).flat().join('\n');
              } else if (_context7.t0.response && _context7.t0.response.data && _context7.t0.response.data.message) {
                errorMsg = _context7.t0.response.data.message;
              }
              _this8.$swal({
                icon: 'error',
                title: 'Error de Validación',
                text: errorMsg
              });
            case 21:
              _context7.prev = 21;
              _this8.saving = false;
              return _context7.finish(21);
            case 24:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[1, 15, 21, 24]]);
      }))();
    },
    confirmDelete: function confirmDelete(paciente) {
      var _this9 = this;
      this.$swal({
        title: '¿Estás seguro?',
        text: "Se eliminar\xE1 el registro de ".concat(paciente.nombres, " ").concat(paciente.apellidos, ". Esta acci\xF3n no se puede deshacer de forma directa."),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444',
        cancelButtonColor: '#6b7280',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then(/*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(result) {
          var _error$response;
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                if (!result.isConfirmed) {
                  _context8.next = 12;
                  break;
                }
                _context8.prev = 1;
                _context8.next = 4;
                return _this9.axios["delete"]("/api/paciente-certificado/".concat(paciente.id));
              case 4:
                _this9.$swal({
                  icon: 'success',
                  title: 'Eliminado',
                  text: 'Registro eliminado con éxito.',
                  showConfirmButton: false,
                  timer: 1500
                });
                _this9.cargarPacientes(_this9.pagination.current_page);
                _context8.next = 12;
                break;
              case 8:
                _context8.prev = 8;
                _context8.t0 = _context8["catch"](1);
                console.error('Error eliminando:', _context8.t0);
                _this9.$swal({
                  icon: 'error',
                  title: 'Error',
                  text: ((_error$response = _context8.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || 'No se pudo eliminar el registro.'
                });
              case 12:
              case "end":
                return _context8.stop();
            }
          }, _callee8, null, [[1, 8]]);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    getNombreServicio: function getNombreServicio(id) {
      var s = this.servicios.find(function (x) {
        return x.id.toString() === (id === null || id === void 0 ? void 0 : id.toString());
      });
      return s ? s.descripcion : 'Desconocido';
    },
    getInitials: function getInitials(nombres, apellidos) {
      var n = nombres ? nombres.trim().split(' ')[0][0] : '';
      var a = apellidos ? apellidos.trim().split(' ')[0][0] : '';
      return (n + a).toUpperCase() || '?';
    },
    getAvatarBg: function getAvatarBg(id) {
      var bgs = ['bg-primary-soft', 'bg-success-soft', 'bg-info-soft', 'bg-warning-soft', 'bg-danger-soft'];
      return bgs[id % bgs.length];
    },
    formatDate: function formatDate(dateStr) {
      if (!dateStr) return '-';
      var options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      return new Date(dateStr).toLocaleDateString('es-ES', options);
    }
  },
  mounted: function mounted() {
    var _this10 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _this10.cargarListas();
          case 2:
            _this10.cargarPacientes();
          case 3:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.modal) this.modal.dispose();
    if (this.modalPayment) this.modalPayment.dispose();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=template&id=76e7cc44&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=template&id=76e7cc44&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("main", {
    staticClass: "paciente-certificado-container py-4"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3"
  }, [_vm._m(0), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-primary shadow-sm hover-lift rounded-pill px-4 fw-bold",
    on: {
      click: _vm.openCreateModal
    }
  }, [_c("i", {
    staticClass: "fas fa-plus-circle mr-1"
  }), _vm._v(" Registrar Paciente\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "row g-3 mb-4"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "card metric-card border-0 shadow-sm rounded-4 h-100 position-relative overflow-hidden"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center justify-content-between"
  }, [_c("div", [_c("span", {
    staticClass: "text-uppercase text-xs text-muted fw-bold tracking-wider"
  }, [_vm._v("Total Certificados")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-extrabold text-dark mt-1"
  }, [_vm._v(_vm._s(_vm.totalCount))])]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c("div", {
    staticClass: "metric-progress bg-primary"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "card metric-card border-0 shadow-sm rounded-4 h-100 position-relative overflow-hidden"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center justify-content-between"
  }, [_c("div", [_c("span", {
    staticClass: "text-uppercase text-xs text-muted fw-bold tracking-wider"
  }, [_vm._v("Certificados Trabajo")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-extrabold text-indigo mt-1"
  }, [_vm._v(_vm._s(_vm.trabajoCount))])]), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c("div", {
    staticClass: "metric-progress bg-indigo"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "card metric-card border-0 shadow-sm rounded-4 h-100 position-relative overflow-hidden"
  }, [_c("div", {
    staticClass: "card-body p-4 d-flex align-items-center justify-content-between"
  }, [_c("div", [_c("span", {
    staticClass: "text-uppercase text-xs text-muted fw-bold tracking-wider"
  }, [_vm._v("Certificados Estudios")]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 fw-extrabold text-emerald mt-1"
  }, [_vm._v(_vm._s(_vm.estudiosCount))])]), _vm._v(" "), _vm._m(3)]), _vm._v(" "), _c("div", {
    staticClass: "metric-progress bg-emerald"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "card border-0 shadow-sm rounded-4 mb-4"
  }, [_c("div", {
    staticClass: "card-body p-3"
  }, [_c("div", {
    staticClass: "row align-items-center g-2"
  }, [_c("div", {
    staticClass: "col-md-8"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_vm._m(4), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchQuery,
      expression: "searchQuery"
    }],
    staticClass: "form-control border-start-0 bg-white",
    attrs: {
      type: "text",
      placeholder: "Buscar por DNI, nombres o apellidos..."
    },
    domProps: {
      value: _vm.searchQuery
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.buscar.apply(null, arguments);
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.searchQuery = $event.target.value;
      }, _vm.onSearchInput]
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 text-md-end"
  }, [_c("button", {
    staticClass: "btn btn-light border px-4 w-100",
    attrs: {
      disabled: !_vm.searchQuery && !_vm.activeSearch
    },
    on: {
      click: _vm.resetSearch
    }
  }, [_c("i", {
    staticClass: "fas fa-redo-alt mr-1"
  }), _vm._v(" Limpiar Búsqueda\n          ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card border-0 shadow-sm rounded-4 overflow-hidden"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-hover align-middle mb-0"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_vm.loading ? _c("tr", [_vm._m(6)]) : _vm.pacientes.length === 0 ? _c("tr", [_vm._m(7)]) : _vm._l(_vm.pacientes, function (paciente) {
    return _c("tr", {
      key: paciente.id,
      staticClass: "patient-row"
    }, [_c("td", {
      staticClass: "ps-4 py-3"
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", {
      staticClass: "avatar-circle mr-3",
      "class": _vm.getAvatarBg(paciente.id)
    }, [_vm._v("\n                  " + _vm._s(_vm.getInitials(paciente.nombres, paciente.apellidos)) + "\n                ")]), _vm._v(" "), _c("div", [_c("h6", {
      staticClass: "mb-0 text-sm font-weight-bold text-dark text-capitalize"
    }, [_vm._v("\n                    " + _vm._s(paciente.nombres) + " " + _vm._s(paciente.apellidos) + "\n                  ")]), _vm._v(" "), _c("span", {
      staticClass: "text-xs text-muted"
    }, [_vm._v("ID: #" + _vm._s(paciente.id))])])])]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge bg-light text-dark font-weight-bold px-2 py-1 border rounded"
    }, [_vm._v(_vm._s(paciente.dni))])]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "text-sm"
    }, [_vm._v(_vm._s(paciente.telefono))])]), _vm._v(" "), _c("td", [paciente.correo ? _c("span", {
      staticClass: "text-sm text-secondary"
    }, [_vm._v(_vm._s(paciente.correo))]) : _c("span", {
      staticClass: "text-xs text-muted fst-italic"
    }, [_vm._v("-")])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("span", {
      staticClass: "badge bg-light text-dark px-3 py-2 rounded-pill font-weight-bold border"
    }, [_vm._v("\n                " + _vm._s(_vm.getNombreServicio(paciente.tipo_certificado)) + "\n              ")])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: paciente.estado,
        expression: "paciente.estado"
      }],
      staticClass: "form-select form-select-sm d-inline-block w-auto font-weight-bold shadow-sm",
      staticStyle: {
        "border-radius": "8px"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(paciente, "estado", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.cambiarEstado(paciente);
        }]
      }
    }, [_c("option", {
      attrs: {
        value: "En proceso"
      }
    }, [_vm._v("En proceso")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Recepcionado"
      }
    }, [_vm._v("Recepcionado")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Entregado"
      }
    }, [_vm._v("Entregado")])])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("span", {
      staticClass: "text-xs text-muted"
    }, [_vm._v(_vm._s(_vm.formatDate(paciente.created_at)))])]), _vm._v(" "), _c("td", {
      staticClass: "pe-4 text-end"
    }, [_c("div", {
      staticClass: "d-flex justify-content-end align-items-center gap-2"
    }, [_c("button", {
      staticClass: "btn btn-icon-edit text-success",
      attrs: {
        title: "Pagar"
      },
      on: {
        click: function click($event) {
          return _vm.openPaymentModal(paciente);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-money-bill-wave"
    })]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-icon-edit",
      attrs: {
        title: "Editar"
      },
      on: {
        click: function click($event) {
          return _vm.openEditModal(paciente);
        }
      }
    }, [_c("i", {
      staticClass: "far fa-edit"
    })]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-icon-delete",
      attrs: {
        title: "Eliminar"
      },
      on: {
        click: function click($event) {
          return _vm.confirmDelete(paciente);
        }
      }
    }, [_c("i", {
      staticClass: "far fa-trash-alt"
    })])])])]);
  })], 2)])]), _vm._v(" "), _vm.pagination.last_page > 1 ? _c("div", {
    staticClass: "card-footer bg-white border-top-0 d-flex justify-content-between align-items-center py-3 flex-wrap gap-2"
  }, [_c("span", {
    staticClass: "text-muted small"
  }, [_vm._v("\n        Mostrando página " + _vm._s(_vm.pagination.current_page) + " de " + _vm._s(_vm.pagination.last_page) + "\n      ")]), _vm._v(" "), _c("nav", {
    attrs: {
      "aria-label": "Page navigation"
    }
  }, [_c("ul", {
    staticClass: "pagination pagination-sm mb-0 shadow-sm"
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
        return _vm.cargarPacientes(_vm.pagination.current_page - 1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-chevron-left"
  })])]), _vm._v(" "), _vm._l(_vm.pagesNumber, function (page) {
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
          return _vm.cargarPacientes(page);
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
        return _vm.cargarPacientes(_vm.pagination.current_page + 1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-chevron-right"
  })])])], 2)])]) : _vm._e()]), _vm._v(" "), _c("div", {
    ref: "modalForm",
    staticClass: "modal fade",
    attrs: {
      id: "modalPacienteCertificado",
      tabindex: "-1",
      "aria-labelledby": "modalPacienteCertificadoLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content border-0 shadow-lg rounded-4"
  }, [_c("div", {
    staticClass: "modal-header border-0 pb-0 px-4 pt-4"
  }, [_c("h5", {
    staticClass: "modal-title font-weight-bold text-dark",
    attrs: {
      id: "modalPacienteCertificadoLabel"
    }
  }, [_c("i", {
    staticClass: "fas fa-certificate text-primary mr-2"
  }), _vm._v(" " + _vm._s(_vm.isEditMode ? "Editar Paciente" : "Registrar Paciente para Certificado") + "\n          ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    },
    on: {
      click: _vm.closeModal
    }
  })]), _vm._v(" "), _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.savePaciente.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "modal-body p-4"
  }, [_c("div", {
    staticClass: "row g-3"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_vm._m(8), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.nombres,
      expression: "form.nombres"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      required: "",
      placeholder: "Ej. Juan Carlos"
    },
    domProps: {
      value: _vm.form.nombres
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "nombres", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_vm._m(9), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.apellidos,
      expression: "form.apellidos"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      required: "",
      placeholder: "Ej. Pérez Quispe"
    },
    domProps: {
      value: _vm.form.apellidos
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "apellidos", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_vm._m(10), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.dni,
      expression: "form.dni"
    }],
    staticClass: "form-control border-end-0",
    attrs: {
      type: "text",
      required: "",
      placeholder: "8 dígitos",
      maxlength: "20"
    },
    domProps: {
      value: _vm.form.dni
    },
    on: {
      blur: _vm.buscarDatosDNI,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "dni", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-secondary border bg-light text-muted",
    staticStyle: {
      "border-top-right-radius": "10px",
      "border-bottom-right-radius": "10px"
    },
    attrs: {
      type: "button",
      title: "Buscar en RENIEC"
    },
    on: {
      click: _vm.buscarDatosDNI
    }
  }, [_c("i", {
    staticClass: "fas fa-search"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_vm._m(11), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.telefono,
      expression: "form.telefono"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      required: "",
      placeholder: "Celular o fijo",
      maxlength: "20"
    },
    domProps: {
      value: _vm.form.telefono
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "telefono", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("Correo Electrónico")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.correo,
      expression: "form.correo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email",
      placeholder: "ejemplo@correo.com"
    },
    domProps: {
      value: _vm.form.correo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "correo", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(12), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.tipo_certificado,
      expression: "form.tipo_certificado"
    }],
    staticClass: "form-select",
    attrs: {
      required: ""
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "tipo_certificado", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v("Seleccione una opción")]), _vm._v(" "), _vm._l(_vm.servicios, function (serv) {
    return _c("option", {
      key: serv.id,
      domProps: {
        value: serv.id.toString()
      }
    }, [_vm._v(_vm._s(serv.descripcion))]);
  })], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer border-0 p-4 pt-0"
  }, [_c("button", {
    staticClass: "btn btn-light rounded-pill px-4 text-muted font-weight-bold",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    },
    on: {
      click: _vm.closeModal
    }
  }, [_vm._v("Cancelar")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary rounded-pill px-4 shadow font-weight-bold",
    attrs: {
      type: "submit",
      disabled: _vm.saving
    }
  }, [_vm.saving ? _c("span", {
    staticClass: "spinner-border spinner-border-sm mr-2",
    attrs: {
      role: "status"
    }
  }) : _c("i", {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("\n              " + _vm._s(_vm.isEditMode ? "Guardar Cambios" : "Registrar Paciente") + "\n            ")])])])])])]), _vm._v(" "), _c("div", {
    ref: "modalPaymentForm",
    staticClass: "modal fade",
    attrs: {
      id: "modalPagoCertificado",
      tabindex: "-1",
      "aria-labelledby": "modalPagoCertificadoLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content border-0 shadow-lg rounded-4"
  }, [_c("div", {
    staticClass: "modal-header border-0 pb-0 px-4 pt-4"
  }, [_vm._m(13), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    },
    on: {
      click: _vm.closePaymentModal
    }
  })]), _vm._v(" "), _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitPago.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "modal-body p-4"
  }, [_c("div", {
    staticClass: "row g-3"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_vm._m(14), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pagoForm.precio,
      expression: "pagoForm.precio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      step: "0.01",
      required: "",
      readonly: ""
    },
    domProps: {
      value: _vm.pagoForm.precio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pagoForm, "precio", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_vm._m(15), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pagoForm.moneda_id,
      expression: "pagoForm.moneda_id"
    }],
    staticClass: "form-select",
    attrs: {
      required: ""
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.pagoForm, "moneda_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v("Seleccione método")]), _vm._v(" "), _vm._l(_vm.monedas, function (m) {
    return _c("option", {
      key: m.id,
      domProps: {
        value: m.id
      }
    }, [_vm._v(_vm._s(m.tipo))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_vm._m(16), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pagoForm.tipo_comprobante,
      expression: "pagoForm.tipo_comprobante"
    }],
    staticClass: "form-select",
    attrs: {
      required: ""
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.pagoForm, "tipo_comprobante", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Boleta")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Factura")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_vm._m(17), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pagoForm.voucher,
      expression: "pagoForm.voucher"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      required: ""
    },
    domProps: {
      value: _vm.pagoForm.voucher
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pagoForm, "voucher", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(18), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pagoForm.motivo,
      expression: "pagoForm.motivo"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "2",
      required: "",
      placeholder: "Motivo escrito por el recepcionista"
    },
    domProps: {
      value: _vm.pagoForm.motivo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pagoForm, "motivo", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer border-0 p-4 pt-0"
  }, [_c("button", {
    staticClass: "btn btn-light rounded-pill px-4 text-muted font-weight-bold",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    },
    on: {
      click: _vm.closePaymentModal
    }
  }, [_vm._v("Cancelar")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success rounded-pill px-4 shadow font-weight-bold",
    attrs: {
      type: "submit",
      disabled: _vm.savingPago
    }
  }, [_vm.savingPago ? _c("span", {
    staticClass: "spinner-border spinner-border-sm mr-2",
    attrs: {
      role: "status"
    }
  }) : _c("i", {
    staticClass: "fas fa-check mr-1"
  }), _vm._v(" Confirmar Pago\n            ")])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h1", {
    staticClass: "h3 mb-1 text-gray-800 font-weight-bold"
  }, [_c("i", {
    staticClass: "fas fa-certificate text-primary mr-2"
  }), _vm._v(" Pacientes de Certificados\n      ")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("Gestión de personas que únicamente solicitan certificados de trabajo o estudios.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "icon-circle bg-primary-soft p-3 rounded-circle text-primary"
  }, [_c("i", {
    staticClass: "fas fa-file-signature fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "icon-circle bg-indigo-soft p-3 rounded-circle text-indigo"
  }, [_c("i", {
    staticClass: "fas fa-briefcase fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "icon-circle bg-emerald-soft p-3 rounded-circle text-emerald"
  }, [_c("i", {
    staticClass: "fas fa-graduation-cap fs-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "input-group-text bg-white border-end-0 text-muted"
  }, [_c("i", {
    staticClass: "fas fa-search"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "table-light text-muted text-uppercase small",
    staticStyle: {
      "font-size": "0.75rem"
    }
  }, [_c("tr", [_c("th", {
    staticClass: "ps-4 py-3"
  }, [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("DNI")]), _vm._v(" "), _c("th", [_vm._v("Teléfono")]), _vm._v(" "), _c("th", [_vm._v("Correo Electrónico")]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v("Tipo Certificado")]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v("Estado")]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v("Fecha Registro")]), _vm._v(" "), _c("th", {
    staticClass: "pe-4 text-end"
  }, [_vm._v("Acciones")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center py-5",
    attrs: {
      colspan: "7"
    }
  }, [_c("div", {
    staticClass: "spinner-border text-primary",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Cargando...")])]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mt-2 mb-0"
  }, [_vm._v("Obteniendo listado de pacientes...")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center py-5 text-muted",
    attrs: {
      colspan: "7"
    }
  }, [_c("i", {
    staticClass: "fas fa-folder-open fs-2 mb-3 opacity-50 d-block"
  }), _vm._v("\n              No se encontraron pacientes registrados.\n            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("Nombres "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("Apellidos "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("DNI / Documento "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("Teléfono "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("Tipo de Certificado "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h5", {
    staticClass: "modal-title font-weight-bold text-dark",
    attrs: {
      id: "modalPagoCertificadoLabel"
    }
  }, [_c("i", {
    staticClass: "fas fa-money-bill-wave text-success mr-2"
  }), _vm._v(" Pagar Certificado\n          ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("Precio "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("Método de Pago "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("Comprobante "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("Nro Comprobante "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label small fw-bold text-muted text-uppercase"
  }, [_vm._v("Motivo / Observación "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=style&index=0&id=76e7cc44&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=style&index=0&id=76e7cc44&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.paciente-certificado-container[data-v-76e7cc44] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n/* Color definitions */\n.text-indigo[data-v-76e7cc44] {\n  color: #6366f1 !important;\n}\n.bg-indigo[data-v-76e7cc44] {\n  background-color: #6366f1 !important;\n}\n.bg-indigo-soft[data-v-76e7cc44] {\n  background-color: #e0e7ff !important;\n}\n.text-emerald[data-v-76e7cc44] {\n  color: #10b981 !important;\n}\n.bg-emerald[data-v-76e7cc44] {\n  background-color: #10b981 !important;\n}\n.bg-emerald-soft[data-v-76e7cc44] {\n  background-color: #d1fae5 !important;\n}\n.bg-primary-soft[data-v-76e7cc44] {\n  background-color: #e0f2fe !important;\n}\n\n/* Metric Cards styling */\n.metric-card[data-v-76e7cc44] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.metric-card[data-v-76e7cc44]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02) !important;\n}\n.metric-progress[data-v-76e7cc44] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  opacity: 0.8;\n}\n\n/* Table styling */\n.patient-row[data-v-76e7cc44] {\n  transition: background-color 0.15s ease;\n}\n.patient-row[data-v-76e7cc44]:hover {\n  background-color: #f8fafc;\n}\n\n/* Avatar circle */\n.avatar-circle[data-v-76e7cc44] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.85rem;\n}\n.avatar-circle.bg-primary-soft[data-v-76e7cc44] { color: #0284c7;\n}\n.avatar-circle.bg-success-soft[data-v-76e7cc44] { color: #15803d; color: #10b981; background-color: #d1fae5;\n}\n.avatar-circle.bg-info-soft[data-v-76e7cc44] { color: #0891b2; background-color: #ecfeff;\n}\n.avatar-circle.bg-warning-soft[data-v-76e7cc44] { color: #b45309; background-color: #fef3c7;\n}\n.avatar-circle.bg-danger-soft[data-v-76e7cc44] { color: #b91c1c; background-color: #fee2e2;\n}\n\n/* Badges */\n.badge-trabajo[data-v-76e7cc44] {\n  background-color: #e0e7ff;\n  color: #4f46e5;\n  border: 1px solid #c7d2fe;\n}\n.badge-estudios[data-v-76e7cc44] {\n  background-color: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n\n/* Action Buttons */\n.btn-icon-edit[data-v-76e7cc44], .btn-icon-delete[data-v-76e7cc44] {\n  background: transparent;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.btn-icon-edit[data-v-76e7cc44] {\n  color: #3b82f6;\n}\n.btn-icon-edit[data-v-76e7cc44]:hover {\n  background-color: #dbeafe;\n  color: #1d4ed8;\n}\n.btn-icon-delete[data-v-76e7cc44] {\n  color: #ef4444;\n}\n.btn-icon-delete[data-v-76e7cc44]:hover {\n  background-color: #fee2e2;\n  color: #b91c1c;\n}\n\n/* Custom styles for modern input fields */\n.form-control[data-v-76e7cc44], .form-select[data-v-76e7cc44] {\n  border-radius: 10px;\n  padding: 0.6rem 0.9rem;\n  border-color: #e2e8f0;\n  box-shadow: none !important;\n  transition: border-color 0.2s ease;\n}\n.form-control[data-v-76e7cc44]:focus, .form-select[data-v-76e7cc44]:focus {\n  border-color: #3b82f6;\n}\n.input-group-text[data-v-76e7cc44] {\n  border-radius: 10px;\n  border-color: #e2e8f0;\n}\n\n/* Transitions */\n.hover-lift[data-v-76e7cc44] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.hover-lift[data-v-76e7cc44]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=style&index=0&id=76e7cc44&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=style&index=0&id=76e7cc44&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePacienteCertificado_vue_vue_type_style_index_0_id_76e7cc44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePacienteCertificado.vue?vue&type=style&index=0&id=76e7cc44&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=style&index=0&id=76e7cc44&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePacienteCertificado_vue_vue_type_style_index_0_id_76e7cc44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePacienteCertificado_vue_vue_type_style_index_0_id_76e7cc44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomePacienteCertificado_vue_vue_type_template_id_76e7cc44_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePacienteCertificado.vue?vue&type=template&id=76e7cc44&scoped=true */ "./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=template&id=76e7cc44&scoped=true");
/* harmony import */ var _HomePacienteCertificado_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePacienteCertificado.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=script&lang=js");
/* harmony import */ var _HomePacienteCertificado_vue_vue_type_style_index_0_id_76e7cc44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePacienteCertificado.vue?vue&type=style&index=0&id=76e7cc44&scoped=true&lang=css */ "./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=style&index=0&id=76e7cc44&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomePacienteCertificado_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomePacienteCertificado_vue_vue_type_template_id_76e7cc44_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _HomePacienteCertificado_vue_vue_type_template_id_76e7cc44_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76e7cc44",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePacienteCertificado_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePacienteCertificado.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePacienteCertificado_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=template&id=76e7cc44&scoped=true":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=template&id=76e7cc44&scoped=true ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePacienteCertificado_vue_vue_type_template_id_76e7cc44_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePacienteCertificado_vue_vue_type_template_id_76e7cc44_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePacienteCertificado_vue_vue_type_template_id_76e7cc44_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePacienteCertificado.vue?vue&type=template&id=76e7cc44&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=template&id=76e7cc44&scoped=true");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=style&index=0&id=76e7cc44&scoped=true&lang=css":
/*!********************************************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=style&index=0&id=76e7cc44&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePacienteCertificado_vue_vue_type_style_index_0_id_76e7cc44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePacienteCertificado.vue?vue&type=style&index=0&id=76e7cc44&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/HomePacienteCertificado.vue?vue&type=style&index=0&id=76e7cc44&scoped=true&lang=css");


/***/ })

}]);