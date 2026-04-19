"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_profesional_components_home_cartera_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/home/cartera.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/home/cartera.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  name: 'HomeCartera',
  data: function data() {
    return {
      profesionales: [],
      años: [],
      meses: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
      filtro: {
        texto: '',
        idProfesional: -1,
        año: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY'),
        mes: -1
      },
      citasResumidas: [],
      citasCompletas: [],
      previewCitas: [],
      titulo: '',
      idGlobal: -1,
      indexGlobal: -1,
      seguimientos: [],
      elegido: []
    };
  },
  props: ['dataUser'],
  methods: {
    listarProfesional: function listarProfesional() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.axios.get('/api/profesional').then(function (response) {
                _this.profesionales = response.data;
              });
            case 2:
              _context.next = 4;
              return _this.axios.get('/api/pedirSeguimientos').then(function (response) {
                return _this.seguimientos = response.data;
              });
            case 4:
              _this.seguimientos.sort();
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    buscarCartera: function buscarCartera() {
      var _this2 = this;
      var condicion;
      this.axios.post('/api/buscarCartera', this.filtro).then(function (res) {
        console.log(res.data);
        var hoy = moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD');
        _this2.citasResumidas = res.data.resumidas;
        _this2.citasCompletas = res.data.completas;
        _this2.citasResumidas.forEach(function (cita, index) {
          cita.visitas = Object.values(_this2.citasCompletas).filter(function (item) {
            return item.patient_id === cita.patient_id;
          }).length;
          cita.sinconfirmar = Object.values(_this2.citasCompletas).filter(function (item) {
            return item.patient_id === cita.patient_id && item.status == 1 && moment__WEBPACK_IMPORTED_MODULE_0___default()(item.date).diff(hoy) > 0;
          }).length;
          cita.confirmar = Object.values(_this2.citasCompletas).filter(function (item) {
            return item.patient_id === cita.patient_id && item.status == 2;
          }).length;
          cita.anulados = Object.values(_this2.citasCompletas).filter(function (item) {
            return item.patient_id === cita.patient_id && item.status == 3;
          }).length;
          cita.reprogramados = Object.values(_this2.citasCompletas).filter(function (item) {
            return item.patient_id === cita.patient_id && item.status == 4;
          }).length;
          cita.fatas = cita.patient.faults;
          if (cita.patient.discharge == 1) cita.actual = 'De Alta';else {
            condicion = Object.values(_this2.citasCompletas).filter(function (item) {
              return item.patient_id === cita.patient_id && item.patient_condition == 2;
            }).length;
            if (condicion > 0) cita.actual = 'Continuante';else cita.actual = 'Nuevo';
          }
          if (index == 0) {
            //cita.
          }
          /* this.citasCompletas.filter(x=> {
          	if( x.patient_id==id && x.status ==1 ) ''
          }) */
        });
      });
    },
    fechaLatam: function fechaLatam(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).format('DD/MM/YYYY');
    },
    cargarCitas: function cargarCitas(caso, id) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var hoy;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              hoy = moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD');
              _context2.t0 = caso;
              _context2.next = _context2.t0 === 'visitas' ? 4 : _context2.t0 === 'confirmar' ? 7 : _context2.t0 === 'sinconfirmar' ? 10 : _context2.t0 === 'anulados' ? 13 : _context2.t0 === 'reprogramados' ? 16 : 19;
              break;
            case 4:
              _this3.titulo = 'Total de Citas';
              _this3.previewCitas = _this3.citasCompletas.filter(function (item) {
                return item.patient_id == id;
              });
              return _context2.abrupt("break", 19);
            case 7:
              _this3.titulo = 'Citas confirmadas';
              _this3.previewCitas = _this3.citasCompletas.filter(function (item) {
                return item.patient_id == id && item.status == 2;
              });
              return _context2.abrupt("break", 19);
            case 10:
              _this3.titulo = 'Citas sin confirmar';
              _this3.previewCitas = _this3.citasCompletas.filter(function (item) {
                return item.patient_id == id && item.status == 1 && moment__WEBPACK_IMPORTED_MODULE_0___default()(item.date).diff(hoy) > 0;
              });
              return _context2.abrupt("break", 19);
            case 13:
              _this3.titulo = 'Citas anuladas';
              _this3.previewCitas = _this3.citasCompletas.filter(function (item) {
                return item.patient_id == id && item.status == 3;
              });
              return _context2.abrupt("break", 19);
            case 16:
              _this3.titulo = 'Citas reprogramadas';
              _this3.previewCitas = _this3.citasCompletas.filter(function (item) {
                return item.patient_id == id && item.status == 4;
              });
              return _context2.abrupt("break", 19);
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    queSeguimiento: function queSeguimiento(item) {
      if (item) return this.seguimientos.find(function (x) {
        return x.id == item;
      }).seguimiento;
    },
    queColor: function queColor(item) {
      if (item) return this.seguimientos.find(function (x) {
        return x.id == item;
      }).color;
    },
    cambiarItem: function cambiarItem(item) {
      this.citasResumidas[this.indexGlobal].patient.seguimiento = item;
    },
    queViejoEs: function queViejoEs(id) {
      moment__WEBPACK_IMPORTED_MODULE_0___default().locale('es');
      var fechaMasAntigua = new Date();
      var citas = this.citasCompletas.filter(function (item) {
        return item.patient_id == id;
      });
      citas.forEach(function (cita) {
        var fechaItem = new Date(cita.created_at);
        if (fechaItem < fechaMasAntigua) {
          fechaMasAntigua = fechaItem;
        }
      });
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fechaMasAntigua).fromNow();
    },
    capitalizar: function capitalizar(texto) {
      var primeraLetra = texto.charAt(0);
      var primeraLetraMayuscula = primeraLetra.toUpperCase();
      return primeraLetraMayuscula + texto.slice(1);
    }
  },
  mounted: function mounted() {
    //this.idUsuario = this.
    this.filtro.idProfesional = this.dataUser.id;
    for (var i = moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY'); i >= 2020; i--) {
      this.años.push(i);
    }
    this.listarProfesional();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/home/cartera.vue?vue&type=template&id=452e0e1f":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/home/cartera.vue?vue&type=template&id=452e0e1f ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h1", [_vm._v("Resumen de visita por pacientes")]), _vm._v(" "), _c("h3", [_c("small", [_vm._v("Del Profesional: Dr. " + _vm._s(_vm.dataUser.nombre))])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row row-cols-auto g-3 align-items-center"
  }, [_c("div", {
    staticClass: "col-3"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filtro.texto,
      expression: "filtro.texto"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "DNI o Nombres"
    },
    domProps: {
      value: _vm.filtro.texto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filtro, "texto", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Año")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filtro.año,
      expression: "filtro.año"
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
        _vm.$set(_vm.filtro, "año", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.años, function (año) {
    return _c("option", {
      domProps: {
        value: año
      }
    }, [_vm._v(_vm._s(año))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "col-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Mes")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filtro.mes,
      expression: "filtro.mes"
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
        _vm.$set(_vm.filtro, "mes", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "-1"
    }
  }, [_vm._v("Todo el año")]), _vm._v(" "), _vm._l(_vm.meses, function (mes, index) {
    return _c("option", {
      staticClass: "text-capitalize",
      domProps: {
        value: index + 1
      }
    }, [_vm._v(_vm._s(_vm.capitalizar(mes)))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "col-3 d-flex align-items-end"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary",
    on: {
      click: function click($event) {
        return _vm.buscarCartera();
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-magnifying-glass"
  }), _vm._v(" Filtrar cartera")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card mt-3"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-sm table-hover"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.citasResumidas, function (cita, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(cita.patient.name.toLowerCase()))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.patient.phone))]), _vm._v(" "), _c("td", {
      staticClass: "d-none"
    }, [_vm._v(_vm._s(_vm.queViejoEs(cita.patient.id)))]), _vm._v(" "), _c("td", {
      staticClass: "puntero",
      attrs: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalCitasPreview"
      },
      on: {
        click: function click($event) {
          return _vm.cargarCitas("visitas", cita.patient.id);
        }
      }
    }, [_vm._v(_vm._s(cita.visitas))]), _vm._v(" "), _c("td", {
      staticClass: "puntero",
      attrs: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalCitasPreview"
      },
      on: {
        click: function click($event) {
          return _vm.cargarCitas("confirmar", cita.patient.id);
        }
      }
    }, [_vm._v(_vm._s(cita.confirmar))]), _vm._v(" "), _c("td", {
      staticClass: "puntero",
      attrs: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalCitasPreview"
      },
      on: {
        click: function click($event) {
          return _vm.cargarCitas("sinconfirmar", cita.patient.id);
        }
      }
    }, [_vm._v(_vm._s(cita.sinconfirmar))]), _vm._v(" "), _c("td", {
      staticClass: "puntero",
      attrs: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalCitasPreview"
      },
      on: {
        click: function click($event) {
          return _vm.cargarCitas("anulados", cita.patient.id);
        }
      }
    }, [_vm._v(_vm._s(cita.anulados))]), _vm._v(" "), _c("td", {
      staticClass: "puntero",
      attrs: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalCitasPreview"
      },
      on: {
        click: function click($event) {
          return _vm.cargarCitas("reprogramados", cita.patient.id);
        }
      }
    }, [_vm._v(_vm._s(cita.reprogramados))]), _vm._v(" "), _c("td", {
      staticClass: "d-none"
    }, [_vm._v(_vm._s(cita.actual))]), _vm._v(" "), _c("td", {
      staticClass: "puntero d-none",
      attrs: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalCambiarSeguimiento"
      },
      on: {
        click: function click($event) {
          _vm.idGlobal = cita.patient_id;
          _vm.indexGlobal = index;
        }
      }
    }, [cita.patient.seguimiento == 1 ? _c("span", {
      attrs: {
        title: "Sin acción"
      }
    }, [_c("i", {
      staticClass: "fa-regular fa-circle"
    })]) : _c("span", {
      "class": _vm.queColor(cita.patient.seguimiento),
      attrs: {
        title: _vm.queSeguimiento(cita.patient.seguimiento)
      }
    }, [_c("i", {
      staticClass: "fas fa-circle"
    })]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm btn-circle btn-outline-primary",
      attrs: {
        title: "Enviar a seguimiento",
        "data-bs-target": "#modalSeguimiento",
        "data-bs-toggle": "modal"
      },
      on: {
        click: function click($event) {
          _vm.elegido = cita.patient;
        }
      }
    }, [_c("i", {
      staticClass: "far fa-paper-plane"
    })])])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalCitasPreview",
      tabindex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h1", {
    staticClass: "modal-title fs-5",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v(_vm._s(_vm.titulo))]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("table", {
    staticClass: "table table-hover table-sm"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_vm._l(_vm.previewCitas, function (preview, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaLatam(preview.date)))])]);
  }), _vm._v(" "), _vm.previewCitas.length == 0 ? _c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("No se encontraron datos")])]) : _vm._e()], 2)])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("i", {
    staticClass: "fas fa-filter"
  }), _vm._v(" Filtro")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Nombre y Apellidos")]), _vm._v(" "), _c("th", [_vm._v("Celular")]), _vm._v(" "), _c("th", {
    staticClass: "d-none"
  }, [_vm._v("Antigüedad")]), _vm._v(" "), _c("th", [_vm._v("N° Citas")]), _vm._v(" "), _c("th", [_vm._v("N° Conf.")]), _vm._v(" "), _c("th", [_vm._v("No asistieron")]), _vm._v(" "), _c("th", [_vm._v("N° Anulados")]), _vm._v(" "), _c("th", [_vm._v("N° Reprogramados")]), _vm._v(" "), _c("th", {
    staticClass: "d-none"
  }, [_vm._v("Actual")]), _vm._v(" "), _c("th", {
    staticClass: "d-none"
  }, [_vm._v("@")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Fecha")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/home/cartera.vue?vue&type=style&index=0&id=452e0e1f&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/home/cartera.vue?vue&type=style&index=0&id=452e0e1f&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.puntero{ cursor: pointer;\n}\n.text-amarillo{ color: yellow}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/home/cartera.vue?vue&type=style&index=0&id=452e0e1f&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/home/cartera.vue?vue&type=style&index=0&id=452e0e1f&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cartera_vue_vue_type_style_index_0_id_452e0e1f_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cartera.vue?vue&type=style&index=0&id=452e0e1f&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/home/cartera.vue?vue&type=style&index=0&id=452e0e1f&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cartera_vue_vue_type_style_index_0_id_452e0e1f_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cartera_vue_vue_type_style_index_0_id_452e0e1f_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/profesional/components/home/cartera.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/profesional/components/home/cartera.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cartera_vue_vue_type_template_id_452e0e1f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartera.vue?vue&type=template&id=452e0e1f */ "./resources/js/components/profesional/components/home/cartera.vue?vue&type=template&id=452e0e1f");
/* harmony import */ var _cartera_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartera.vue?vue&type=script&lang=js */ "./resources/js/components/profesional/components/home/cartera.vue?vue&type=script&lang=js");
/* harmony import */ var _cartera_vue_vue_type_style_index_0_id_452e0e1f_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartera.vue?vue&type=style&index=0&id=452e0e1f&lang=css */ "./resources/js/components/profesional/components/home/cartera.vue?vue&type=style&index=0&id=452e0e1f&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cartera_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _cartera_vue_vue_type_template_id_452e0e1f__WEBPACK_IMPORTED_MODULE_0__.render,
  _cartera_vue_vue_type_template_id_452e0e1f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profesional/components/home/cartera.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/profesional/components/home/cartera.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/profesional/components/home/cartera.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cartera_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cartera.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/home/cartera.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cartera_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/profesional/components/home/cartera.vue?vue&type=template&id=452e0e1f":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/profesional/components/home/cartera.vue?vue&type=template&id=452e0e1f ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cartera_vue_vue_type_template_id_452e0e1f__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cartera_vue_vue_type_template_id_452e0e1f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cartera_vue_vue_type_template_id_452e0e1f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cartera.vue?vue&type=template&id=452e0e1f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/home/cartera.vue?vue&type=template&id=452e0e1f");


/***/ }),

/***/ "./resources/js/components/profesional/components/home/cartera.vue?vue&type=style&index=0&id=452e0e1f&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/profesional/components/home/cartera.vue?vue&type=style&index=0&id=452e0e1f&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cartera_vue_vue_type_style_index_0_id_452e0e1f_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cartera.vue?vue&type=style&index=0&id=452e0e1f&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/home/cartera.vue?vue&type=style&index=0&id=452e0e1f&lang=css");


/***/ })

}]);