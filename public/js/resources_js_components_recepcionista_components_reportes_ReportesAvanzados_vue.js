"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_recepcionista_components_reportes_ReportesAvanzados_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'modalSeguimiento',
  props: ['profesionales', 'idProfesional', 'elegido', 'idUsuario'],
  data: function data() {
    return {
      seguimiento: {
        motivo: '',
        idProfesional: this.idProfesional
      }
    };
  },
  watch: {
    idProfesional: function idProfesional() {
      this.seguimiento.idProfesional = this.idProfesional;
    }
  },
  methods: {
    guardar: function guardar() {
      var _this = this;
      if (this.seguimiento.motivo == '') {
        alertify.notify('Debe ingresar un motivo para registrar', 'danger', 10);
      } else {
        var _this$elegido$id, _this$elegido$seguimi;
        var datos = new FormData();
        datos.append('idPaciente', (_this$elegido$id = this.elegido.id) !== null && _this$elegido$id !== void 0 ? _this$elegido$id : 0);
        datos.append('nombre', this.elegido.name);
        datos.append('celular', this.elegido.phone);
        datos.append('motivo', this.seguimiento.motivo);
        datos.append('correo', '');
        datos.append('referencia', 7);
        datos.append('idProfesional', this.seguimiento.idProfesional);
        datos.append('idUsuario', this.idUsuario);
        datos.append('idSeguimiento', (_this$elegido$seguimi = this.elegido.seguimiento) !== null && _this$elegido$seguimi !== void 0 ? _this$elegido$seguimi : 1);
        datos.append('origen', 2);
        fetch('/api/nuevoInteresado', {
          method: 'POST',
          body: datos
        }).then(function (response) {
          return response.json();
        }).then(function (texto) {
          if (texto.mensaje) _this.$swal('Se registró exitosamente');else _this.$swal({
            icon: 'error',
            title: 'Hubo un error interno'
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  name: 'ModalEditarPaciente',
  props: {
    dataPatient: Object
  },
  data: function data() {
    return {
      datos: '',
      ubigeo: {
        departamentos: [],
        provincias: [],
        distritos: []
      },
      provincias: [],
      distritos: [],
      relacion: []
    };
  },
  methods: {
    updatePatient: function updatePatient() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.axios.put("/api/patient/".concat(_this.dataPatient.id), _this.dataPatient).then(function (res) {
                console.log(res);
                _this.closeModal();
                _this.$swal('Datos de paciente actualizado con éxito');
              })["catch"](function (err) {
                console.error(err);
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    closeModal: function closeModal() {
      document.getElementById('cerrModalPatient').click();
    },
    listarDepartamentos: function listarDepartamentos() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.axios.get('/api/departamentos').then(function (response) {
                _this2.ubigeo.departamentos = response.data['departamentos'];
                _this2.ubigeo.provincias = response.data['provincias'];
                _this2.ubigeo.distritos = response.data['distritos'];
                _this2.provincias = _this2.ubigeo.provincias.filter(function (provincia) {
                  return provincia.idDepa == 12;
                });
                _this2.distritos = _this2.ubigeo.distritos.filter(function (distrito) {
                  return distrito.idProv == 103;
                });
                _this2.moverProvincias(false);
                _this2.moverDistritos();
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    moverProvincias: function moverProvincias(borrar) {
      var idDepa = this.dataPatient.address.department;
      this.provincias = this.ubigeo.provincias.filter(function (provincia) {
        return provincia.idDepa == idDepa;
      });
      if (borrar) this.dataPatient.address.district = -1;
    },
    moverDistritos: function moverDistritos() {
      var idProv = this.dataPatient.address.province;
      this.distritos = this.ubigeo.distritos.filter(function (distrito) {
        return distrito.idProv == idProv;
      });
    },
    capturaSeñal: function capturaSeñal() {
      console.log('apli');
      if (this.dataPatient.relative.length == 0) {
        this.dataPatient.relative.push({
          id: -1,
          name: '',
          nombres: '',
          phone: ''
        });
      }
      this.listarDepartamentos(false);
    }
  },
  mounted: function mounted() {
    //this.$parent.$on('cambioDato', this.capturaSeñal);
  },
  watch: {
    dataPatient: {
      handler: function handler() {
        if (!this.dataPatient) return;
        if (!this.dataPatient.address || Array.isArray(this.dataPatient.address)) {
          this.dataPatient.address = {
            department: -1,
            province: -1,
            district: -1,
            address: ''
          };
        }
        if (!this.dataPatient.relative || this.dataPatient.relative.length === 0) {
          this.dataPatient.relative = [{
            name: '',
            phone: '',
            kinship: ''
          }, {
            name: '',
            phone: '',
            kinship: ''
          }];
        }
        this.datos = this.dataPatient;
      },
      immediate: true
    }
  },
  created: function created() {
    //this.updateValues;
    this.listarDepartamentos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _recepcionista_components_adicionales_ModalSeguimiento_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../recepcionista/components/adicionales/ModalSeguimiento.vue */ "./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue");
/* harmony import */ var _recepcionista_components_pacientes_ModalEditPatient_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../..//recepcionista/components/pacientes/ModalEditPatient.vue */ "./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'reportesAvanzados',
  components: {
    ModalSeguimiento: _recepcionista_components_adicionales_ModalSeguimiento_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModalEditPatients: _recepcionista_components_pacientes_ModalEditPatient_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      años: [],
      meses: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
      idReporte: 0,
      resultados: [],
      ocultarFechas: false,
      dataPaciente: null,
      fecha: {
        año: moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY'),
        mes: moment__WEBPACK_IMPORTED_MODULE_2___default()().format('M')
      },
      dia: moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM-DD'),
      verDias: false,
      reportes: [{
        id: 1,
        nombrado: 'Pacientes ausentes mayor a 7 días'
      }, {
        id: 0,
        nombrado: 'Recetas sueltas'
      }, {
        id: 2,
        nombrado: 'Hobbies de los pacientes'
      }, {
        id: 3,
        nombrado: 'Pacientes integrantes al club'
      }, {
        id: 4,
        nombrado: 'Pacientes no desean el club'
      }, {
        id: 5,
        nombrado: 'Pacientes semáforo'
      }, {
        id: 6,
        nombrado: 'Recaudaciones por profesional - N° Atenciones'
      }, {
        id: 7,
        nombrado: 'Recaudaciones por servicio - N° Atenciones'
      }, {
        id: 8,
        nombrado: 'Pacientes nuevos'
      }, {
        id: 9,
        nombrado: 'Pacientes continuantes'
      }, {
        id: 10,
        nombrado: 'Recaudaciones por medio de pago'
      }, {
        id: 11,
        nombrado: 'Atenciones (Psicológicas y Psiquiátricas) recaudadas'
      }, {
        id: 12,
        nombrado: 'Seguimiento de Pacientes'
      }, {
        id: 13,
        nombrado: 'Comprobantes emitidos'
      }, {
        id: 14,
        nombrado: 'Citas reprogramadas'
      }, {
        id: 15,
        nombrado: 'Citas anuladas con faltas'
      }, {
        id: 16,
        nombrado: 'Citas confirmadas'
      }, {
        id: 17,
        nombrado: 'Pacientes con datos incompletos'
      }, {
        id: 18,
        nombrado: 'Pacientes desde cartera de clientes'
      }, {
        id: 19,
        nombrado: 'Reporte financiero diario'
      }],
      hobbies: ['pintura', 'dibujo', 'fotografía', 'tejido', 'costura', 'joyería', 'senderismo', 'acampar', 'jardinería', 'pesca', 'ciclismo', 'deportes', 'fútbol', 'basket', 'tenis', 'ajedrez', 'juegos de mesa', 'billar', 'música', 'tocar un instrumento', 'canto', 'composición musical', 'producción musical', 'gastronomía', 'cocina', 'recetas', 'horneado', 'postres', 'manualidades', 'origami', 'modelodo en arcilla', 'creación', 'natación', 'surf', 'kayac', 'buceo', 'esquí', 'tecnología', 'programación', 'robótica', 'computación', 'edición de videos', 'diseño gráfico', 'coleccionismo', 'monedas', 'vinilos', 'baile', 'danzas', 'escritura', 'periodismo', 'poesía', 'libros', 'lectura', 'cuentos', 'idiomas', 'viajes', 'exploración de lugares', 'fitnes', 'gym', 'yoga', 'pilates', 'entrenamiento', 'meditación', 'voluntariado', 'mascotas', 'animalista', 'astronomía', 'jardinería', 'plantas', 'huertos', 'paisajes', 'cine', 'series', 'novelas'],
      estados: [{
        id: 1,
        valor: 'Neutro',
        detalle: 'No tiene ningún registro de actitud'
      }, {
        id: 2,
        valor: 'cumplidor',
        detalle: 'es un paciente exclente'
      }, {
        id: 3,
        valor: 'promotor',
        detalle: 'promueve actividades entre sus compañeros o la empresa'
      }, {
        id: 4,
        valor: 'wow',
        detalle: 'es involucrado en actividades, participativo'
      }, {
        id: 5,
        valor: 'reprogramador',
        detalle: 'suele aplazarcitas y actividades'
      }, {
        id: 6,
        valor: 'exigente',
        detalle: 'un paciente/cliente que siempre pide un trato especial'
      }, {
        id: 7,
        valor: 'deudor',
        detalle: 'paciente con deudas'
      }, {
        id: 8,
        valor: 'insatisfecho',
        detalle: 'suele quejarse de los servicios'
      }, {
        id: 9,
        valor: 'peligroso',
        detalle: 'paciente con amenazas o actos de violencia.'
      }],
      suma: {},
      sumaTodoMedio: 0,
      profesionales: [{
        id: 7,
        name: 'Recepción'
      }],
      elegido: {
        name: '',
        phone: '',
        motivo: ''
      },
      filtroAnual: false,
      filtro: -1,
      equipo: ['Psicología', 'Psiquiatría', 'Certificado', 'Kurame', 'Paquete']
    };
  },
  methods: {
    cargarDatos: function cargarDatos() {
      for (var i = 2022; i <= moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY'); i++) {
        this.años.push(i);
      }
      this.años.reverse();
    },
    pedirReporte: function pedirReporte() {
      var _this = this;
      if (this.idReporte == 19) {
        this.axios.post('/api/reportsJimmy', {
          fecha: this.dia,
          sede: 1
        }).then(function (serv) {
          _this.resultados = serv.data;
        });
        return false;
      }
      this.axios.post('/api/pedirReporte/' + this.idReporte, {
        año: this.fecha.año,
        mes: this.fecha.mes,
        fecha: this.dia
      }).then(function (serv) {
        console.log(serv.data);
        _this.resultados = serv.data;
        if (_this.idReporte == 6) _this.sumaProfesionales();
        if (_this.idReporte == 7) _this.sumaServicios();
        if (_this.idReporte == 10) _this.sumaMedios();
        if (_this.idReporte == 12) _this.sumaEstados();
      });
    },
    pasarSeguimiento: function pasarSeguimiento(index) {
      this.elegido.name = this.resultados[index].name;
      this.elegido.phone = this.resultados[index].phone;
      this.elegido.motivo = '';
    },
    configurarVista: function configurarVista() {
      this.resultados = [];
      //incluidos a ocultar: 1,2,3,4,
      this.ocultarFechas = true;
      this.verDias = false;
      this.filtroAnual = this.idReporte == 12 ? true : false;
      switch (this.idReporte) {
        case 0:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 18:
          this.ocultarFechas = false;
          break;
        case 19:
          this.verDias = true;
          break;
      }
    },
    fechaFrom: function fechaFrom(fecha) {
      moment__WEBPACK_IMPORTED_MODULE_2___default().locale('es');
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(fecha, 'YYYY-MM-DD').fromNow();
    },
    fechaLatam: function fechaLatam(fecha) {
      if (fecha) return moment__WEBPACK_IMPORTED_MODULE_2___default()(fecha).format('DD/MM/YYYY');
    },
    horaLatam: function horaLatam(horita) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(horita, 'HH:mm:ss').format('hh:mm a');
    },
    sumaProfesionales: function sumaProfesionales() {
      var _this2 = this;
      this.suma = {};
      this.resultados.citas.forEach(function (cita) {
        var _cita$payment$price;
        var idProfesional = cita.professional_id;
        var monto = parseFloat((_cita$payment$price = cita.payment.price) !== null && _cita$payment$price !== void 0 ? _cita$payment$price : 0);
        if (!_this2.suma[idProfesional]) {
          _this2.suma[idProfesional] = {
            monto: monto,
            confirmado: 0,
            pagado: 0
          };
        } else {
          _this2.suma[idProfesional].monto += monto;
        }
        if (cita.status == '2')
          //confirmado
          _this2.suma[idProfesional].confirmado++;
        if (cita.payment.pay_status == '2')
          //confirmado
          _this2.suma[idProfesional].pagado++;
      });
    },
    queServicio: function queServicio(id) {
      var servi = this.resultados.servicios.find(function (x) {
        return x.id == id;
      });
      if (servi) return servi.descripcion;else return 'Otros';
    },
    sumaServicios: function sumaServicios() {
      var _this3 = this;
      this.suma = {};
      this.resultados.citas.forEach(function (cita) {
        var _cita$payment$price2;
        var idServicio = cita.type;
        var monto = parseFloat((_cita$payment$price2 = cita.payment.price) !== null && _cita$payment$price2 !== void 0 ? _cita$payment$price2 : 0);
        if (!_this3.suma[idServicio]) {
          _this3.suma[idServicio] = {
            monto: monto,
            confirmado: 0,
            pagado: 0
          };
        } else {
          _this3.suma[idServicio].monto += monto;
        }
        if (cita.status == '2')
          //confirmado
          _this3.suma[idServicio].confirmado++;
        if (cita.payment.pay_status == '2')
          //confirmado
          _this3.suma[idServicio].pagado++;
      });
    },
    sumaMedios: function sumaMedios() {
      var _this4 = this;
      this.suma = {};
      this.sumaTodo = 0;
      this.resultados.pagos.forEach(function (medio) {
        var _medio$price;
        var idMedio = medio.moneda;
        var monto = parseFloat((_medio$price = medio.price) !== null && _medio$price !== void 0 ? _medio$price : 0);
        _this4.sumaTodoMedio += monto;
        if (!_this4.suma[idMedio]) {
          _this4.suma[idMedio] = {
            monto: monto,
            confirmado: 0,
            pagado: 0
          };
        } else {
          _this4.suma[idMedio].monto += monto;
        }
      });
    },
    sumaEstados: function sumaEstados() {
      var _this5 = this;
      this.suma = {};
      this.resultados.seguimientos.forEach(function (seguido) {
        var idSeguido = seguido.idSeguimiento;
        //const monto = parseFloat(seguido.payment.price ?? 0);
        if (!_this5.suma[idSeguido]) {
          _this5.suma[idSeguido] = {
            contador: 1
          };
        } else {
          _this5.suma[idSeguido].contador++;
        }
      });
    },
    queEstado: function queEstado(id) {
      var servi = this.resultados.estados.find(function (x) {
        return x.id == id;
      });
      if (servi) return servi.seguimiento;else return 'Otros';
    }
  },
  mounted: function mounted() {
    this.reportes.sort(function (a, b) {
      if (a.nombrado < b.nombrado) return -1;
      if (a.nombrado > b.nombrado) return 1;
      return 0;
    });
    this.cargarDatos();
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue?vue&type=template&id=1e4478ed":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue?vue&type=template&id=1e4478ed ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "modalSeguimiento",
      tabindex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("p", {
    staticClass: "mb-0"
  }, [_vm._v("Seguimiento a "), _c("strong", [_vm._v(_vm._s(_vm.elegido.name))])]), _vm._v(" "), _c("p", {
    staticClass: "mb-0"
  }, [_vm._v("Ingrese un motivo:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.seguimiento.motivo,
      expression: "seguimiento.motivo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.seguimiento.motivo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.seguimiento, "motivo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2 mb-0"
  }, [_vm._v("Seleccione un profesional asignado al caso")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.seguimiento.idProfesional,
      expression: "seguimiento.idProfesional"
    }],
    staticClass: "text-capitalize form-select",
    attrs: {
      id: ""
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.seguimiento, "idProfesional", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Ninguno")]), _vm._v(" "), _vm._l(_vm.profesionales, function (profesional) {
    return _c("option", {
      staticClass: "text-capitalize",
      domProps: {
        value: profesional.id
      }
    }, [_vm._v(_vm._s(profesional.name))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer border-0"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    },
    on: {
      click: function click($event) {
        return _vm.guardar();
      }
    }
  }, [_c("i", {
    staticClass: "far fa-paper-plane"
  }), _vm._v(" Enviar a seguimiento")])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header border-0"
  }, [_c("h1", {
    staticClass: "modal-title fs-5",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v("Programar seguimiento")]), _vm._v(" "), _c("button", {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue?vue&type=template&id=7085977e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue?vue&type=template&id=7085977e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "modalEditPatient",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-lg modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("form", {
    attrs: {
      action: ""
    }
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Dni")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.dni,
      expression: "dataPatient.dni"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "dni",
      id: "dni",
      placeholder: "Dni del paciente"
    },
    domProps: {
      value: _vm.dataPatient.dni
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataPatient, "dni", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Teléfono")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.phone,
      expression: "dataPatient.phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "phone",
      id: "phone",
      placeholder: "Telefono del paciente"
    },
    domProps: {
      value: _vm.dataPatient.phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataPatient, "phone", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Paciente")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.name,
      expression: "dataPatient.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Apellidos del paciente"
    },
    domProps: {
      value: _vm.dataPatient.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataPatient, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Paciente")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.nombres,
      expression: "dataPatient.nombres"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "nombres",
      id: "nombres",
      placeholder: "Nombres del paciente"
    },
    domProps: {
      value: _vm.dataPatient.nombres
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataPatient, "nombres", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Dirección")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.address.address,
      expression: "dataPatient.address.address"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "address",
      id: "address",
      placeholder: "Direccion del paciente"
    },
    domProps: {
      value: _vm.dataPatient.address.address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataPatient.address, "address", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Correo electrónico")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.email,
      expression: "dataPatient.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Correo electrónico"
    },
    domProps: {
      value: _vm.dataPatient.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataPatient, "email", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-sm-4"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Departamento")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.address.department,
      expression: "dataPatient.address.department"
    }],
    staticClass: "form-select",
    attrs: {
      id: "department"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.dataPatient.address, "department", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.moverProvincias(true);
      }]
    }
  }, _vm._l(_vm.ubigeo.departamentos, function (departamento) {
    return _c("option", {
      domProps: {
        value: departamento.idDepa
      }
    }, [_vm._v(_vm._s(departamento.departamento))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Provincia")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.address.province,
      expression: "dataPatient.address.province"
    }],
    staticClass: "form-select",
    attrs: {
      id: "provincia"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.dataPatient.address, "province", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.moverDistritos();
      }]
    }
  }, _vm._l(_vm.provincias, function (provincia) {
    return _c("option", {
      domProps: {
        value: provincia.idProv
      }
    }, [_vm._v(_vm._s(provincia.provincia))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Distrito")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.address.district,
      expression: "dataPatient.address.district"
    }],
    staticClass: "form-select",
    attrs: {
      id: "distrito"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.dataPatient.address, "district", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.distritos, function (distrito) {
    return _c("option", {
      domProps: {
        value: distrito.idDist
      }
    }, [_vm._v(_vm._s(distrito.distrito))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Fecha de nacimiento")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.birth_date,
      expression: "dataPatient.birth_date"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "birth_date",
      id: "birth_date"
    },
    domProps: {
      value: _vm.dataPatient.birth_date
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataPatient, "birth_date", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Ocupación")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.occupation,
      expression: "dataPatient.occupation"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "occupation",
      id: "occupation",
      placeholder: "Ocuación del paciente"
    },
    domProps: {
      value: _vm.dataPatient.occupation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataPatient, "occupation", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Estado Civil")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.marital_status,
      expression: "dataPatient.marital_status"
    }],
    staticClass: "form-select",
    attrs: {
      name: "marital_status",
      id: "marital_status"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.dataPatient, "marital_status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Soltero")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Casado")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Viudo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Divorciado")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "5"
    }
  }, [_vm._v("Conviviente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Grado de instrucción")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.instruction_degree,
      expression: "dataPatient.instruction_degree"
    }],
    staticClass: "form-select",
    attrs: {
      name: "instruction_degree",
      id: "instruction_degree"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.dataPatient, "instruction_degree", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Inicial")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Primaria")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Secundaria")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Superior")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "5"
    }
  }, [_vm._v("Tecnico")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "6"
    }
  }, [_vm._v("Sin instrucción")])])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v(" Datos del familiar")]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Nombre del primer contacto")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.relative[0].name,
      expression: "dataPatient.relative[0].name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "relative_name",
      id: "relativename",
      placeholder: "Nombre de pariente"
    },
    domProps: {
      value: _vm.dataPatient.relative[0].name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataPatient.relative[0], "name", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Telefono")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.relative[0].phone,
      expression: "dataPatient.relative[0].phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "relative_phone",
      id: "relativephone",
      placeholder: "Telefono de pariente"
    },
    domProps: {
      value: _vm.dataPatient.relative[0].phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataPatient.relative[0], "phone", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Parentesco")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.relative[0].kinship,
      expression: "dataPatient.relative[0].kinship"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "kinship",
      id: "kinship",
      placeholder: "Parentesco"
    },
    domProps: {
      value: _vm.dataPatient.relative[0].kinship
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataPatient.relative[0], "kinship", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Nombre del segundo contacto")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.relative[1].name,
      expression: "dataPatient.relative[1].name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "relative_name",
      id: "relativename",
      placeholder: "Nombre de pariente"
    },
    domProps: {
      value: _vm.dataPatient.relative[1].name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataPatient.relative[1], "name", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Telefono")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.relative[1].phone,
      expression: "dataPatient.relative[1].phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "relative_phone",
      id: "relativephone",
      placeholder: "Telefono de pariente"
    },
    domProps: {
      value: _vm.dataPatient.relative[1].phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataPatient.relative[1], "phone", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Parentesco")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataPatient.relative[1].kinship,
      expression: "dataPatient.relative[1].kinship"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "kinship",
      id: "kinship",
      placeholder: "Parentesco"
    },
    domProps: {
      value: _vm.dataPatient.relative[1].kinship
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataPatient.relative[1], "kinship", $event.target.value);
      }
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer border-0"
  }, [_c("button", {
    staticClass: "btn btn-outline-danger",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Cancelar")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.updatePatient();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-sync-alt"
  }), _vm._v(" Actualizar")])])])])]);
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
  }, [_vm._v(" Datos del Paciente")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      id: "cerrModalPatient",
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue?vue&type=template&id=6d8c7db6":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue?vue&type=template&id=6d8c7db6 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h1", [_vm._v("Reportes avanzados")]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-md-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Tipo de reporte")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.idReporte,
      expression: "idReporte"
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
        _vm.idReporte = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.configurarVista();
      }]
    }
  }, _vm._l(_vm.reportes, function (reporte) {
    return _c("option", {
      domProps: {
        value: reporte.id
      }
    }, [_vm._v(_vm._s(reporte.nombrado))]);
  }), 0)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.ocultarFechas,
      expression: "!ocultarFechas"
    }],
    staticClass: "col-12 col-md-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Año")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fecha.año,
      expression: "fecha.año"
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
        _vm.$set(_vm.fecha, "año", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.años, function (año) {
    return _c("option", {
      domProps: {
        value: año
      }
    }, [_vm._v(_vm._s(año))]);
  }), 0)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.ocultarFechas,
      expression: "!ocultarFechas"
    }],
    staticClass: "col-12 col-md-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Mes")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fecha.mes,
      expression: "fecha.mes"
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
        _vm.$set(_vm.fecha, "mes", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_vm.filtroAnual ? _c("option", {
    staticClass: "text-capitalize",
    attrs: {
      value: "-1"
    }
  }, [_vm._v("Todo el año")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.meses, function (mes, index) {
    return _c("option", {
      staticClass: "text-capitalize",
      domProps: {
        value: index + 1
      }
    }, [_vm._v(_vm._s(mes))]);
  })], 2)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.verDias,
      expression: "verDias"
    }],
    staticClass: "col-12 col-md-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Día")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dia,
      expression: "dia"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.dia
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.dia = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-3 d-flex align-items-end"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary",
    on: {
      click: function click($event) {
        return _vm.pedirReporte();
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-magnifying-glass"
  }), _vm._v(" Buscar")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card mt-2"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.idReporte == 0 ? _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.resultados, function (resultado, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(resultado.name))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(resultado.nombre))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaLatam(resultado.attention_date)))]), _vm._v(" "), _c("td", [_c("a", {
      staticClass: "btn btn-outline-primary btn-sm",
      attrs: {
        href: "/api/pdf/" + resultado.id + "?token=" + _vm.$token,
        target: "_blank"
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-file-pdf"
    }), _vm._v(" Ver PDF")])])]);
  }), _vm._v(" "), _vm.resultados.length == 0 ? _c("tr", [_c("td", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("No hay registros")])]) : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 1 ? _c("div", [_c("div", {
    staticClass: "btn-group",
    attrs: {
      role: "group",
      "aria-label": "Basic radio toggle button group"
    }
  }, [_c("input", {
    staticClass: "btn-check",
    attrs: {
      type: "radio",
      name: "btnradio",
      id: "btnradio1",
      autocomplete: "off",
      checked: ""
    },
    on: {
      click: function click($event) {
        _vm.filtro = -1;
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      "for": "btnradio1"
    }
  }, [_vm._v("Todos")]), _vm._v(" "), _c("input", {
    staticClass: "btn-check",
    attrs: {
      type: "radio",
      name: "btnradio",
      id: "btnradio2",
      autocomplete: "off"
    },
    on: {
      click: function click($event) {
        _vm.filtro = 2;
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      "for": "btnradio2"
    }
  }, [_vm._v("Psiquiatría")]), _vm._v(" "), _c("input", {
    staticClass: "btn-check",
    attrs: {
      type: "radio",
      name: "btnradio",
      id: "btnradio3",
      autocomplete: "off"
    },
    on: {
      click: function click($event) {
        _vm.filtro = 1;
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      "for": "btnradio3"
    }
  }, [_vm._v("Psicología")]), _vm._v(" "), _c("input", {
    staticClass: "btn-check",
    attrs: {
      type: "radio",
      name: "btnradio",
      id: "btnradio4",
      autocomplete: "off"
    },
    on: {
      click: function click($event) {
        _vm.filtro = 4;
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      "for": "btnradio4"
    }
  }, [_vm._v("Kurame")]), _vm._v(" "), _c("input", {
    staticClass: "btn-check",
    attrs: {
      type: "radio",
      name: "btnradio",
      id: "btnradio5",
      autocomplete: "off"
    },
    on: {
      click: function click($event) {
        _vm.filtro = 5;
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      "for": "btnradio5"
    }
  }, [_vm._v("Paquete")])]), _vm._v(" "), _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l(_vm.resultados, function (resultado, index) {
    return _c("tr", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.filtro == -1 || _vm.filtro == resultado.idClasificacion,
        expression: "filtro==-1 || filtro ==resultado.idClasificacion "
      }]
    }, [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(resultado.name.toLowerCase()))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.equipo[resultado.idClasificacion - 1]))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(resultado.nomServicio))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaLatam(resultado.date)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaFrom(resultado.date)))]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-sm btn-outline-primary",
      attrs: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalSeguimiento"
      },
      on: {
        click: function click($event) {
          return _vm.pasarSeguimiento(index);
        }
      }
    }, [_vm._m(2, true)])])]);
  }), _vm._v(" "), _vm.resultados.length == 0 ? _c("tr", [_c("td", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("No hay registros")])]) : _vm._e()], 2)])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 2 ? _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados, function (resultado, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(resultado.name))]), _vm._v(" "), _c("td", _vm._l(JSON.parse(resultado.hobbies), function (actividad) {
      return _c("span", {
        staticClass: "text-capitalize"
      }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.hobbies[actividad]) + ",\n\t\t\t\t\t\t\t")]);
    }), 0)]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 3 || _vm.idReporte == 4 ? _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados, function (resultado, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(resultado.name))]), _vm._v(" "), _c("td", [resultado.club == 1 ? _c("span", [_vm._v("Sí pertenece")]) : _vm._e(), _vm._v(" "), resultado.club == 2 ? _c("span", [_vm._v("No desea pertenecer")]) : _vm._e()])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 5 ? _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados, function (resultado, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(resultado.name.toLowerCase()))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(" \n\t\t\t\t\t\t\t" + _vm._s(_vm.estados[resultado.codigo].valor) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(resultado.observaciones))])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 6 ? _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados.doctores, function (doctor, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.name))]), _vm._v(" "), _c("td", [_vm.suma[doctor.id] ? _c("span", [_vm._v(_vm._s(_vm.suma[doctor.id].confirmado))]) : _c("span", [_vm._v("0")])]), _vm._v(" "), _c("td", [_vm.suma[doctor.id] ? _c("span", [_vm._v(_vm._s(_vm.suma[doctor.id].pagado))]) : _c("span", [_vm._v("0")])]), _vm._v(" "), _c("td", [_vm._v("S/ "), _vm.suma[doctor.id] ? _c("span", [_vm._v(_vm._s(parseFloat(_vm.suma[doctor.id].monto).toFixed(2)))]) : _c("span", [_vm._v("0.00")])])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm._l(_vm.resultados.doctores, function (doctor) {
    return _vm.idReporte == 6 ? _c("table", {
      staticClass: "table table-sm table-hover"
    }, [_c("thead", [_c("tr", [_c("th", {
      attrs: {
        colspan: "4"
      }
    }, [_vm._v(_vm._s(doctor.name))])]), _vm._v(" "), _vm._m(7, true)]), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados.citas, function (cita, indice) {
      return cita.professional_id == doctor.id ? _c("tr", [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaLatam(cita.date)) + " "), cita.schedule ? _c("span", [_vm._v(_vm._s(_vm.horaLatam(cita.schedule.check_time)))]) : _vm._e()]), _vm._v(" "), _c("td", {
        staticClass: "text-capitalize"
      }, [_vm._v(_vm._s(cita.patient.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.precio.descripcion))]), _vm._v(" "), _c("td", [cita.status == 1 ? _c("span", [_vm._v("Sin confirmar")]) : _vm._e(), _vm._v(" "), cita.status == 2 ? _c("span", [_vm._v("Confirmado")]) : _vm._e(), _vm._v(" "), cita.status == 3 ? _c("span", [_vm._v("Anulado")]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.payment.price))]), _vm._v(" "), _c("td", [cita.payment.pay_status == 1 ? _c("span", [_vm._v("Sin pagar")]) : _vm._e(), _vm._v(" "), cita.payment.pay_status == 2 ? _c("span", [_vm._v("Pagado")]) : _vm._e(), _vm._v(" "), cita.payment.pay_status == 3 ? _c("span", [_vm._v("Anulado")]) : _vm._e()])]) : _vm._e();
    }), 0)]) : _vm._e();
  }), _vm._v(" "), _vm.idReporte == 7 ? _c("div", [_c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(8), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados.servicios, function (servicio, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [servicio.idClasificacion == 1 ? _c("span", [_vm._v("Psiquiatría")]) : _vm._e(), _vm._v(" "), servicio.idClasificacion == 2 ? _c("span", [_vm._v("Psicología")]) : _vm._e(), _vm._v(" "), servicio.idClasificacion == 3 ? _c("span", [_vm._v("Certificado")]) : _vm._e(), _vm._v(" "), servicio.idClasificacion == 4 ? _c("span", [_vm._v("Paquete")]) : _vm._e(), _vm._v(" "), _c("span", [_vm._v(_vm._s(servicio.descripcion))])]), _vm._v(" "), _c("td", [_vm.suma[servicio.id] ? _c("span", [_vm._v(_vm._s(_vm.suma[servicio.id].confirmado))]) : _c("span", [_vm._v("0")])]), _vm._v(" "), _c("td", [_vm.suma[servicio.id] ? _c("span", [_vm._v(_vm._s(_vm.suma[servicio.id].pagado))]) : _c("span", [_vm._v("0")])]), _vm._v(" "), _c("td", [_vm._v("S/ "), _vm.suma[servicio.id] ? _c("span", [_vm._v(_vm._s(parseFloat(_vm.suma[servicio.id].monto).toFixed(2)))]) : _c("span", [_vm._v("0.00")])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 7 ? _c("div", [_c("p", [_vm._v("Ojo: Recuerde que la nueva lista de servicios se aplicó a partir de Julio 2023")]), _vm._v(" "), _vm._l(_vm.resultados.servicios, function (servicio) {
    return _c("table", {
      staticClass: "table table-sm table-hover"
    }, [_c("thead", [_c("tr", [_c("th", {
      attrs: {
        colspan: "4"
      }
    }, [_vm._v(_vm._s(servicio.descripcion))])]), _vm._v(" "), _vm._m(9, true)]), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados.citas, function (cita, indice) {
      return cita.type == servicio.id ? _c("tr", [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", {
        staticClass: "text-capitalize"
      }, [_vm._v(_vm._s(cita.patient.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.queServicio(cita.type)))]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(cita.professional.nombre))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaLatam(cita.date)) + " " + _vm._s(_vm.horaLatam(cita.schedule.check_time)))]), _vm._v(" "), _c("td", [cita.status == 1 ? _c("span", [_vm._v("Sin confirmar")]) : _vm._e(), _vm._v(" "), cita.status == 2 ? _c("span", [_vm._v("Confirmado")]) : _vm._e(), _vm._v(" "), cita.status == 3 ? _c("span", [_vm._v("Anulado")]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.payment.price))]), _vm._v(" "), _c("td", [cita.payment.pay_status == 1 ? _c("span", [_vm._v("Sin pagar")]) : _vm._e(), _vm._v(" "), cita.payment.pay_status == 2 ? _c("span", [_vm._v("Pagado")]) : _vm._e(), _vm._v(" "), cita.payment.pay_status == 3 ? _c("span", [_vm._v("Anulado")]) : _vm._e()])]) : _vm._e();
    }), 0)]);
  })], 2) : _vm._e(), _vm._v(" "), _vm.idReporte == 8 || _vm.idReporte == 9 ? _c("div", [_c("p", [_c("strong", [_vm._v("Total de pacientes:")]), _vm._v(" " + _vm._s(_vm.resultados.conteo) + " ")]), _vm._v(" "), _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(10), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados.citas, function (cita, indice, item) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(item + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita[0].date))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(cita[0].patient.name))])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 10 ? _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(11), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados.monedas, function (medio, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(medio.tipo))]), _vm._v(" "), _c("td", [_vm._v("S/ "), _vm.suma[medio.id] ? _c("span", [_vm._v(_vm._s(parseFloat(_vm.suma[medio.id].monto).toFixed(2)))]) : _c("span", [_vm._v("0.00")])])]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    staticClass: "text-center fw-bold",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(parseFloat(_vm.sumaTodoMedio).toFixed(2)))])])])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 10 ? _c("div", [_c("p", [_vm._v("Ojo: Recuerde que los pagos fueron aplicados desde Julio 2023")]), _vm._v(" "), _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(12), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados.pagos, function (pago, indice) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(pago.customer))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pago.date))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.queServicio(pago.type)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pago.price))]), _vm._v(" "), _c("td", [pago.pay_status == 1 ? _c("span", [_vm._v("Sin pagar")]) : _vm._e(), _vm._v(" "), pago.pay_status == 2 ? _c("span", [_vm._v("Pagado")]) : _vm._e(), _vm._v(" "), pago.pay_status == 3 ? _c("span", [_vm._v("Anulado")]) : _vm._e(), _vm._v(" "), !pago.pay_status ? _c("span", [_vm._v("Pagado")]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pago.observation))])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 11 ? _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(13), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("1")]), _vm._v(" "), _c("td", [_vm._v("Psicología")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.resultados.cuantosPsicologia))]), _vm._v(" "), _c("td", [_vm._v("S/ " + _vm._s(_vm.resultados.montoPsicologia))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("2")]), _vm._v(" "), _c("td", [_vm._v("Psiquiatría")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.resultados.cuantosPsiquiatria))]), _vm._v(" "), _c("td", [_vm._v("S/ " + _vm._s(_vm.resultados.montoPsiquiatria))])])])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 12 ? _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(14), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados.estados, function (estado, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(estado.seguimiento))]), _vm._v(" "), _c("td", [_vm.suma[estado.id] ? _c("span", [_vm._v(_vm._s(_vm.suma[estado.id].contador))]) : _c("span", [_vm._v("0")])])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 13 ? _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(15), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados.pagos, function (pago, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pago.date))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pago.customer))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(parseFloat(pago.price).toFixed(2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pago.voucher))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pago.voucher_issued))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pago.observation))])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 14 || _vm.idReporte == 15 ? _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(16), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados, function (cita, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaLatam(cita.created_at)) + " " + _vm._s(_vm.horaLatam(cita.appointment.schedule.check_time)))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(cita.appointment.patient.name.toLowerCase()))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.appointment.professional.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.appointment.precio.descripcion))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaLatam(cita.fecha ? cita.fecha : cita.created_at)))])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 16 ? _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(17), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados, function (cita, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaLatam(cita.created_at)) + " " + _vm._s(_vm.horaLatam(cita.schedule.check_time)))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(cita.patient.name.toLowerCase()))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.professional.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.precio.descripcion))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaLatam(cita.date)))])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 17 ? _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(18), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados, function (paciente, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(paciente.name))]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-outline-primary",
      attrs: {
        "data-bs-target": "#patientModal",
        "data-bs-toggle": "modal"
      },
      on: {
        click: function click($event) {
          _vm.dataPaciente = paciente;
        }
      }
    }, [_c("i", {
      staticClass: "far fa-edit"
    }), _vm._v(" Editar")])])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 18 ? _c("div", [_c("p", [_vm._v("Pacientes que provienen de Cartera de clientes con algún caso para hacer seguimiento.")]), _vm._v(" "), _c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(19), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados, function (paciente, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(paciente.nombre))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaLatam(paciente.fecha)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(paciente.icono))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(paciente.motivo))])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 19 ? _c("div", {
    staticClass: "table-responsive"
  }, [_vm.resultados.citas ? [_c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(20), _vm._v(" "), _c("tbody", [_vm._m(21), _vm._v(" "), _c("tr", [_vm.resultados.citas.length == 0 ? _c("td", {
    attrs: {
      colspan: "11"
    }
  }, [_vm._v("No se encontraron registros")]) : _vm._e()]), _vm._v(" "), _vm._l(_vm.resultados.citas, function (cita) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(cita.DIA))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.HORARIO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.PROFESIONAL))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.PACIENTE))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.TIPO_PACIENTE))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.MONEDA))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.PAGO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.VOUCHER))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.OBSERVACION))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.TIPO_PAGO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.FECHA_PAGO_ANTERIOR))])]);
  }), _vm._v(" "), _vm._m(22), _vm._v(" "), _c("tr", [_vm.resultados.sinCitas.length == 0 ? _c("td", {
    attrs: {
      colspan: "11"
    }
  }, [_vm._v("No se encontraron registros")]) : _vm._e()]), _vm._v(" "), _vm._l(_vm.resultados.sinCitas, function (sinCita) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(sinCita.DIA))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sinCita.HORARIO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sinCita.PROFESIONAL))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sinCita.PACIENTE))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sinCita.TIPO_PACIENTE))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sinCita.MONEDA))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sinCita.PAGO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sinCita.VOUCHER))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sinCita.OBSERVACION))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sinCita.TIPO_PAGO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sinCita.FECHA_PAGO_ANTERIOR))])]);
  }), _vm._v(" "), _vm._m(23), _vm._v(" "), _c("tr", [_vm.resultados.entradas.length == 0 ? _c("td", {
    attrs: {
      colspan: "11"
    }
  }, [_vm._v("No se encontraron registros")]) : _vm._e()]), _vm._v(" "), _vm._l(_vm.resultados.entradas, function (entrada) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(entrada.DIA))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(entrada.HORARIO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(entrada.PROFESIONAL))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(entrada.PACIENTE))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(entrada.TIPO_PACIENTE))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(entrada.MONEDA))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(entrada.PAGO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(entrada.VOUCHER))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(entrada.OBSERVACION))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(entrada.TIPO_PAGO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(entrada.FECHA_PAGO_ANTERIOR))])]);
  }), _vm._v(" "), _vm._m(24), _vm._v(" "), _c("tr", [_vm.resultados.adelantos.length == 0 ? _c("td", {
    attrs: {
      colspan: "11"
    }
  }, [_vm._v("No se encontraron registros")]) : _vm._e()]), _vm._v(" "), _vm._l(_vm.resultados.adelantos, function (adelanto) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(adelanto.DIA))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(adelanto.HORARIO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(adelanto.PROFESIONAL))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(adelanto.PACIENTE))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(adelanto.TIPO_PACIENTE))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(adelanto.MONEDA))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(adelanto.PAGO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(adelanto.VOUCHER))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(adelanto.OBSERVACION))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(adelanto.TIPO_PAGO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(adelanto.FECHA_PAGO_ANTERIOR))])]);
  }), _vm._v(" "), _vm._m(25), _vm._v(" "), _c("tr", [_vm.resultados.limbos.length == 0 ? _c("td", {
    attrs: {
      colspan: "11"
    }
  }, [_vm._v("No se encontraron registros")]) : _vm._e()]), _vm._v(" "), _vm._l(_vm.resultados.limbos, function (limbo) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(limbo.DIA))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(limbo.HORARIO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(limbo.PROFESIONAL))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(limbo.PACIENTE))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(limbo.TIPO_PACIENTE))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(limbo.MONEDA))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(limbo.PAGO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(limbo.VOUCHER))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(limbo.OBSERVACION))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(limbo.TIPO_PAGO))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(limbo.FECHA_PAGO_ANTERIOR))])]);
  })], 2)])] : _vm._e()], 2) : _vm._e()], 2)]), _vm._v(" "), _c("ModalSeguimiento", {
    attrs: {
      profesionales: _vm.profesionales,
      idProfesional: 7,
      elegido: _vm.elegido
    }
  }), _vm._v(" "), _vm.dataPaciente ? _c("ModalEditPatients", {
    attrs: {
      dataPatient: _vm.dataPaciente
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Dr.")]), _vm._v(" "), _c("th", [_vm._v("Fecha")]), _vm._v(" "), _c("th", [_vm._v("@")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Grupo")]), _vm._v(" "), _c("th", [_vm._v("Servicio")]), _vm._v(" "), _c("th", [_vm._v("Última cita")]), _vm._v(" "), _c("th", [_vm._v("Diferencia")]), _vm._v(" "), _c("th", [_vm._v("@")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", [_c("i", {
    staticClass: "fa-solid fa-network-wired"
  }), _vm._v(" Pasar a seguimiento")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Hobbies")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Club")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Semáforo")]), _vm._v(" "), _c("th", [_vm._v("Observaciones")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("Total de citas confirmadas")]), _vm._v(" "), _c("th", [_vm._v("Total de citas pagadas")]), _vm._v(" "), _c("th", [_vm._v("Acumulado")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Fecha")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Servicio")]), _vm._v(" "), _c("th", [_vm._v("Estado")]), _vm._v(" "), _c("th", [_vm._v("Monto")]), _vm._v(" "), _c("th", [_vm._v("Pagado")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Servicio")]), _vm._v(" "), _c("th", [_vm._v("Total de citas confirmadas")]), _vm._v(" "), _c("th", [_vm._v("Total de citas pagadas")]), _vm._v(" "), _c("th", [_vm._v("Acumulado")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Servicio")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("Fecha")]), _vm._v(" "), _c("th", [_vm._v("Estado")]), _vm._v(" "), _c("th", [_vm._v("Monto")]), _vm._v(" "), _c("th", [_vm._v("Pagado")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Fecha")]), _vm._v(" "), _c("th", [_vm._v("Paciente")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Tipo de medio de pago")]), _vm._v(" "), _c("th", [_vm._v("Acumulado")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Fecha")]), _vm._v(" "), _c("th", [_vm._v("Servicio")]), _vm._v(" "), _c("th", [_vm._v("Monto")]), _vm._v(" "), _c("th", [_vm._v("Pagado")]), _vm._v(" "), _c("th", [_vm._v("Observaciones")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Tipo")]), _vm._v(" "), _c("th", [_vm._v("N° Citas")]), _vm._v(" "), _c("th", [_vm._v("Acumulado")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Estado")]), _vm._v(" "), _c("th", [_vm._v("Total de pacientes")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Fecha")]), _vm._v(" "), _c("th", [_vm._v("Cliente")]), _vm._v(" "), _c("th", [_vm._v("Monto")]), _vm._v(" "), _c("th", [_vm._v("N° Bol./Fact.")]), _vm._v(" "), _c("th", [_vm._v("N° Operación")]), _vm._v(" "), _c("th", [_vm._v("Observaciones")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Fecha de cita")]), _vm._v(" "), _c("th", [_vm._v("Cliente")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("Servicio")]), _vm._v(" "), _c("th", [_vm._v("Registrado")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Fecha de cita")]), _vm._v(" "), _c("th", [_vm._v("Cliente")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("Servicio")]), _vm._v(" "), _c("th", [_vm._v("Registrado")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("@")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Fecha")]), _vm._v(" "), _c("th", [_vm._v("Estado")]), _vm._v(" "), _c("th", [_vm._v("Motivo")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Día")]), _vm._v(" "), _c("th", [_vm._v("Horario")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Tipo")]), _vm._v(" "), _c("th", [_vm._v("Moneda")]), _vm._v(" "), _c("th", [_vm._v("Pago")]), _vm._v(" "), _c("th", [_vm._v("Voucher")]), _vm._v(" "), _c("th", [_vm._v("Observación")]), _vm._v(" "), _c("th", [_vm._v("Tipo Pago")]), _vm._v(" "), _c("th", [_vm._v("Fecha Pago Anterior")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "table-dark",
    attrs: {
      colspan: "11"
    }
  }, [_vm._v("Orientado a entradas con citas")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "table-dark",
    attrs: {
      colspan: "11"
    }
  }, [_vm._v("Orientado a entradas sin citas")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "table-dark",
    attrs: {
      colspan: "11"
    }
  }, [_vm._v("Orientado a entradas sin citas")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "table-dark",
    attrs: {
      colspan: "11"
    }
  }, [_vm._v("Adelantos o pagos de otros días")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "table-dark",
    attrs: {
      colspan: "11"
    }
  }, [_vm._v("Pagos del día subidos al limbo.")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalSeguimiento_vue_vue_type_template_id_1e4478ed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalSeguimiento.vue?vue&type=template&id=1e4478ed */ "./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue?vue&type=template&id=1e4478ed");
/* harmony import */ var _ModalSeguimiento_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalSeguimiento.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalSeguimiento_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalSeguimiento_vue_vue_type_template_id_1e4478ed__WEBPACK_IMPORTED_MODULE_0__.render,
  _ModalSeguimiento_vue_vue_type_template_id_1e4478ed__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalEditPatient_vue_vue_type_template_id_7085977e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalEditPatient.vue?vue&type=template&id=7085977e */ "./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue?vue&type=template&id=7085977e");
/* harmony import */ var _ModalEditPatient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalEditPatient.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalEditPatient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalEditPatient_vue_vue_type_template_id_7085977e__WEBPACK_IMPORTED_MODULE_0__.render,
  _ModalEditPatient_vue_vue_type_template_id_7085977e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReportesAvanzados_vue_vue_type_template_id_6d8c7db6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportesAvanzados.vue?vue&type=template&id=6d8c7db6 */ "./resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue?vue&type=template&id=6d8c7db6");
/* harmony import */ var _ReportesAvanzados_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportesAvanzados.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportesAvanzados_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportesAvanzados_vue_vue_type_template_id_6d8c7db6__WEBPACK_IMPORTED_MODULE_0__.render,
  _ReportesAvanzados_vue_vue_type_template_id_6d8c7db6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSeguimiento_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalSeguimiento.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSeguimiento_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditPatient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalEditPatient.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditPatient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesAvanzados_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportesAvanzados.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesAvanzados_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue?vue&type=template&id=1e4478ed":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue?vue&type=template&id=1e4478ed ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSeguimiento_vue_vue_type_template_id_1e4478ed__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSeguimiento_vue_vue_type_template_id_1e4478ed__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSeguimiento_vue_vue_type_template_id_1e4478ed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalSeguimiento.vue?vue&type=template&id=1e4478ed */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/adicionales/ModalSeguimiento.vue?vue&type=template&id=1e4478ed");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue?vue&type=template&id=7085977e":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue?vue&type=template&id=7085977e ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditPatient_vue_vue_type_template_id_7085977e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditPatient_vue_vue_type_template_id_7085977e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditPatient_vue_vue_type_template_id_7085977e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalEditPatient.vue?vue&type=template&id=7085977e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/pacientes/ModalEditPatient.vue?vue&type=template&id=7085977e");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue?vue&type=template&id=6d8c7db6":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue?vue&type=template&id=6d8c7db6 ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesAvanzados_vue_vue_type_template_id_6d8c7db6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesAvanzados_vue_vue_type_template_id_6d8c7db6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesAvanzados_vue_vue_type_template_id_6d8c7db6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportesAvanzados.vue?vue&type=template&id=6d8c7db6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesAvanzados.vue?vue&type=template&id=6d8c7db6");


/***/ })

}]);