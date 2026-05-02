"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_acceso_publico_AutoTriaje_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loaded: false,
      error: null,
      success: false,
      submitting: false,
      token: null,
      sintomasList: ['Tristeza o desánimo', 'Pérdida de interés o placer', 'Ansiedad o preocupación excesiva', 'Crisis de pánico', 'Irritabilidad', 'Problemas de sueño', 'Cansancio o baja energía', 'Cambios en apetito o peso', 'Dificultad para concentrarse', 'Pensamientos repetitivos no deseados', 'Rituales o compulsiones', 'Miedos intensos', 'Dificultades familiares o de pareja', 'Problemas laborales o académicos', 'Consumo de alcohol u otras sustancias', 'Duelo o pérdida reciente', 'Trauma o experiencia difícil', 'Ideas de muerte o autolesión'],
      antecedentes: [{
        key: 'atencion_previa',
        label: '¿Ha recibido atención psicológica o psiquiátrica antes?'
      }, {
        key: 'diagnostico',
        label: '¿Tiene algún diagnóstico previo?'
      }, {
        key: 'medicamentos',
        label: '¿Toma actualmente medicamentos?'
      }, {
        key: 'hospitalizaciones',
        label: '¿Ha tenido hospitalizaciones por salud mental?'
      }, {
        key: 'autolesiones',
        label: '¿Ha tenido intentos de autolesión o suicidio anteriormente?'
      }, {
        key: 'consumo_sustancias',
        label: '¿Consume alcohol u otras sustancias?'
      }, {
        key: 'condiciones_medicas',
        label: '¿Tiene condiciones médicas relevantes?'
      }, {
        key: 'alergias',
        label: '¿Tiene alergias o reacciones a medicamentos?'
      }, {
        key: 'antecedentes_familiares',
        label: '¿Hay antecedentes familiares de depresión, ansiedad, TOC, bipolaridad, psicosis, suicidio u otros?'
      }],
      seguridad: ['En las últimas 2 semanas, ¿ha pensado que sería mejor estar muerto/a o hacerse daño?', 'Actualmente, ¿tiene intención de hacerse daño o quitarse la vida?', '¿Ha pensado en un método específico o plan?', '¿Tiene acceso a medios para hacerse daño?', '¿Ha realizado un intento previo o conducta preparatoria?', '¿Siente que no puede mantenerse seguro/a en este momento?', '¿Puede contactar ahora a una persona de apoyo?'],
      phq9: ['Poco interés o placer en hacer cosas.', 'Sentirse decaído/a, deprimido/a o sin esperanza.', 'Dificultad para dormir, dormir demasiado o sueño no reparador.', 'Sentirse cansado/a o con poca energía.', 'Poco apetito o comer en exceso.', 'Sentirse mal consigo mismo/a, sentir que ha fallado o que ha defraudado a su familia.', 'Dificultad para concentrarse, por ejemplo al leer, trabajar o ver televisión.', 'Moverse o hablar tan lento que otras personas podrían notarlo, o estar tan inquieto/a que se mueve más de lo habitual.', 'Pensamientos de que estaría mejor muerto/a o de hacerse daño de alguna manera.'],
      gad7: ['Sentirse nervioso/a, ansioso/a o con los nervios de punta.', 'No poder detener o controlar la preocupación.', 'Preocuparse demasiado por diferentes cosas.', 'Tener dificultad para relajarse.', 'Estar tan inquieto/a que le cuesta permanecer sentado/a o tranquilo/a.', 'Irritarse o molestarse con facilidad.', 'Sentir miedo como si algo terrible pudiera ocurrir.'],
      ybocs: ['Tiempo ocupado por obsesiones: pensamientos, imágenes o impulsos repetitivos no deseados.', 'Interferencia de las obsesiones en estudio, trabajo, relaciones o actividades diarias.', 'Malestar o ansiedad causada por las obsesiones.', 'Esfuerzo para resistir o apartar las obsesiones.', 'Grado de control percibido sobre las obsesiones.', 'Tiempo ocupado por compulsiones o rituales: lavado, verificación, orden, conteo, repetición u otros.', 'Interferencia de las compulsiones en estudio, trabajo, relaciones o actividades diarias.', 'Malestar si se impiden o retrasan las compulsiones.', 'Esfuerzo para resistir o reducir las compulsiones.', 'Grado de control percibido sobre las compulsiones.'],
      form: {
        nombre: '',
        edad: '',
        documento: '',
        telefono: '',
        email: '',
        fecha: new Date().toISOString().split('T')[0],
        servicio: '',
        modalidad: '',
        consentimiento: '',
        motivo: '',
        expectativa: '',
        sintomas: [],
        sintomas_desde: '',
        interferencia: '',
        emergencia: {
          nombre: '',
          telefono: '',
          relacion: ''
        },
        seguridad: {},
        phq9: {},
        gad7: {},
        dificultad: '',
        ybocs: {},
        adicional: '',
        nombre_confirmacion: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.token = _this.$route.params.token;
            _context.prev = 1;
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/cuestionario/".concat(_this.token));
          case 4:
            _this.loaded = true;
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            if (_context.t0.response && _context.t0.response.status === 403) {
              _this.error = _context.t0.response.data.message || 'Link inválido o expirado';
            } else {
              _this.error = 'Ocurrió un error o el enlace es inválido';
            }
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 7]]);
    }))();
  },
  methods: {
    submit: function submit() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.submitting = true;
              _context2.prev = 1;
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/cuestionario/".concat(_this2.token), _this2.form);
            case 4:
              _this2.success = true;
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              if (_context2.t0.response && _context2.t0.response.status === 403) {
                alert(_context2.t0.response.data.message || _context2.t0.response.data.error || 'Link inválido o expirado');
              } else {
                alert('Error al enviar. Intente nuevamente.');
              }
            case 11:
              _context2.prev = 11;
              _this2.submitting = false;
              return _context2.finish(11);
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 8, 11, 14]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=template&id=9b43e2e6&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=template&id=9b43e2e6&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container py-5",
    staticStyle: {
      "max-width": "900px"
    }
  }, [_vm._m(0), _vm._v(" "), _vm.error ? _c("div", {
    staticClass: "alert alert-danger shadow-sm border-0 d-flex align-items-center p-4 rounded-lg"
  }, [_c("i", {
    staticClass: "fas fa-exclamation-circle fa-2x me-3 text-danger"
  }), _vm._v(" "), _c("div", [_c("h5", {
    staticClass: "mb-1 text-danger font-weight-bold"
  }, [_vm._v("Acceso Denegado")]), _vm._v(" "), _c("p", {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.error))])])]) : _vm.success ? _c("div", {
    staticClass: "alert alert-success shadow-sm border-0 d-flex align-items-center p-4 rounded-lg"
  }, [_c("i", {
    staticClass: "fas fa-check-circle fa-2x me-3 text-success"
  }), _vm._v(" "), _vm._m(1)]) : _vm.loaded ? _c("form", {
    staticClass: "needs-validation",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "card shadow-sm border-0 mb-4 rounded-lg overflow-hidden"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Nombre Completo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.nombre,
      expression: "form.nombre"
    }],
    staticClass: "form-control bg-light border-0",
    attrs: {
      placeholder: "Ej. Juan Pérez",
      required: ""
    },
    domProps: {
      value: _vm.form.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "nombre", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Edad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.edad,
      expression: "form.edad"
    }],
    staticClass: "form-control bg-light border-0",
    attrs: {
      type: "number",
      placeholder: "Años",
      required: ""
    },
    domProps: {
      value: _vm.form.edad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "edad", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Documento")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.documento,
      expression: "form.documento"
    }],
    staticClass: "form-control bg-light border-0",
    attrs: {
      placeholder: "DNI / Pasaporte",
      required: ""
    },
    domProps: {
      value: _vm.form.documento
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "documento", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Teléfono")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.telefono,
      expression: "form.telefono"
    }],
    staticClass: "form-control bg-light border-0",
    attrs: {
      placeholder: "Número de celular",
      required: ""
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
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Correo Electrónico")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email,
      expression: "form.email"
    }],
    staticClass: "form-control bg-light border-0",
    attrs: {
      type: "email",
      placeholder: "correo@ejemplo.com"
    },
    domProps: {
      value: _vm.form.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "email", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.fecha,
      expression: "form.fecha"
    }],
    staticClass: "form-control bg-light border-0",
    attrs: {
      type: "date",
      required: ""
    },
    domProps: {
      value: _vm.form.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "fecha", $event.target.value);
      }
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "card shadow-sm border-0 mb-4 rounded-lg overflow-hidden border-start border-danger",
    staticStyle: {
      "border-left-width": "4px !important",
      "border-left-color": "#ef4444 !important"
    }
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.emergencia.nombre,
      expression: "form.emergencia.nombre"
    }],
    staticClass: "form-control bg-light border-0",
    attrs: {
      placeholder: "Nombre del contacto",
      required: ""
    },
    domProps: {
      value: _vm.form.emergencia.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.emergencia, "nombre", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Teléfono")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.emergencia.telefono,
      expression: "form.emergencia.telefono"
    }],
    staticClass: "form-control bg-light border-0",
    attrs: {
      placeholder: "Número de contacto",
      required: ""
    },
    domProps: {
      value: _vm.form.emergencia.telefono
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.emergencia, "telefono", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Relación")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.emergencia.relacion,
      expression: "form.emergencia.relacion"
    }],
    staticClass: "form-control bg-light border-0",
    attrs: {
      placeholder: "Ej. Madre, Esposo",
      required: ""
    },
    domProps: {
      value: _vm.form.emergencia.relacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.emergencia, "relacion", $event.target.value);
      }
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "card shadow-sm border-0 mb-4 rounded-lg overflow-hidden"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Servicio Requerido")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.servicio,
      expression: "form.servicio"
    }],
    staticClass: "form-control bg-light border-0",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "servicio", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("Seleccione...")]), _vm._v(" "), _c("option", [_vm._v("Psicología")]), _vm._v(" "), _c("option", [_vm._v("Psiquiatría")]), _vm._v(" "), _c("option", [_vm._v("No estoy seguro")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Modalidad")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.modalidad,
      expression: "form.modalidad"
    }],
    staticClass: "form-control bg-light border-0",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "modalidad", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("Seleccione...")]), _vm._v(" "), _c("option", [_vm._v("Presencial")]), _vm._v(" "), _c("option", [_vm._v("Virtual")]), _vm._v(" "), _c("option", [_vm._v("Indistinto")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Consentimiento para atención")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.consentimiento,
      expression: "form.consentimiento"
    }],
    staticClass: "form-control bg-light border-0",
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
        _vm.$set(_vm.form, "consentimiento", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("Seleccione...")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "si"
    }
  }, [_vm._v("Sí autorizo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "no"
    }
  }, [_vm._v("No autorizo")])])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 mt-2"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Motivo principal de consulta")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.motivo,
      expression: "form.motivo"
    }],
    staticClass: "form-control bg-light border-0",
    attrs: {
      rows: "3",
      placeholder: "Describa brevemente qué le trae a consulta..."
    },
    domProps: {
      value: _vm.form.motivo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "motivo", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-0"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Expectativas")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.expectativa,
      expression: "form.expectativa"
    }],
    staticClass: "form-control bg-light border-0",
    attrs: {
      rows: "2",
      placeholder: "¿Qué espera lograr con este proceso?"
    },
    domProps: {
      value: _vm.form.expectativa
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "expectativa", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "card shadow-sm border-0 mb-4 rounded-lg overflow-hidden"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, _vm._l(_vm.sintomasList, function (s, index) {
    return _c("div", {
      key: index,
      staticClass: "col-md-6 mb-2"
    }, [_c("div", {
      staticClass: "form-check"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.sintomas,
        expression: "form.sintomas"
      }],
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        id: "sintoma_" + index
      },
      domProps: {
        value: s,
        checked: Array.isArray(_vm.form.sintomas) ? _vm._i(_vm.form.sintomas, s) > -1 : _vm.form.sintomas
      },
      on: {
        change: function change($event) {
          var $$a = _vm.form.sintomas,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = s,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.form, "sintomas", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.form, "sintomas", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.form, "sintomas", $$c);
          }
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "form-check-label text-dark",
      attrs: {
        "for": "sintoma_" + index
      }
    }, [_vm._v(_vm._s(s))])])]);
  }), 0), _vm._v(" "), _c("hr", {
    staticClass: "my-4"
  }), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("¿Desde cuándo presenta estos síntomas?")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.sintomas_desde,
      expression: "form.sintomas_desde"
    }],
    staticClass: "form-control bg-light border-0",
    attrs: {
      placeholder: "Ej. Hace 2 meses, desde la infancia"
    },
    domProps: {
      value: _vm.form.sintomas_desde
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "sintomas_desde", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label text-secondary small font-weight-bold"
  }, [_vm._v("Nivel de interferencia en su vida diaria")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.interferencia,
      expression: "form.interferencia"
    }],
    staticClass: "form-control bg-light border-0",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "interferencia", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("Seleccione...")]), _vm._v(" "), _c("option", [_vm._v("Poco")]), _vm._v(" "), _c("option", [_vm._v("Moderado")]), _vm._v(" "), _c("option", [_vm._v("Mucho")]), _vm._v(" "), _c("option", [_vm._v("Extremo")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card shadow-sm border-0 mb-4 rounded-lg overflow-hidden"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, _vm._l(_vm.antecedentes, function (q) {
    return _c("div", {
      key: q.key,
      staticClass: "col-md-12 mb-3"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center bg-light p-3 rounded"
    }, [_c("label", {
      staticClass: "form-label text-dark mb-0 w-75"
    }, [_vm._v(_vm._s(q.label))]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form[q.key],
        expression: "form[q.key]"
      }],
      staticClass: "form-control bg-white border-0 w-25 shadow-sm",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(_vm.form, q.key, $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: "",
        disabled: "",
        selected: ""
      }
    }, [_vm._v("Seleccione")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "no"
      }
    }, [_vm._v("No")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "si"
      }
    }, [_vm._v("Sí")])])])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "card shadow-sm border-0 mb-4 rounded-lg overflow-hidden border-start border-danger",
    staticStyle: {
      "border-left-width": "4px !important",
      "border-left-color": "#ef4444 !important"
    }
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, _vm._l(_vm.seguridad, function (q) {
    return _c("div", {
      key: q,
      staticClass: "col-md-12 mb-3"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center bg-light p-3 rounded"
    }, [_c("label", {
      staticClass: "form-label text-dark mb-0 w-75"
    }, [_vm._v(_vm._s(q))]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.seguridad[q],
        expression: "form.seguridad[q]"
      }],
      staticClass: "form-control bg-white border-0 w-25 shadow-sm",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(_vm.form.seguridad, q, $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: "",
        disabled: "",
        selected: ""
      }
    }, [_vm._v("Seleccione")]), _vm._v(" "), _c("option", [_vm._v("No")]), _vm._v(" "), _c("option", [_vm._v("Sí")])])])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "card shadow-sm border-0 mb-4 rounded-lg overflow-hidden"
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "card-body px-0"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless table-hover align-middle mb-0 px-3"
  }, [_vm._m(9), _vm._v(" "), _c("tbody", _vm._l(_vm.phq9, function (q, i) {
    return _c("tr", {
      key: i,
      staticClass: "border-bottom"
    }, [_c("td", {
      staticClass: "ps-4"
    }, [_vm._v(_vm._s(q))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.phq9[i],
        expression: "form.phq9[i]"
      }],
      attrs: {
        type: "radio",
        name: "phq9_" + i,
        value: "0",
        required: ""
      },
      domProps: {
        checked: _vm._q(_vm.form.phq9[i], "0")
      },
      on: {
        change: function change($event) {
          return _vm.$set(_vm.form.phq9, i, "0");
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.phq9[i],
        expression: "form.phq9[i]"
      }],
      attrs: {
        type: "radio",
        name: "phq9_" + i,
        value: "1"
      },
      domProps: {
        checked: _vm._q(_vm.form.phq9[i], "1")
      },
      on: {
        change: function change($event) {
          return _vm.$set(_vm.form.phq9, i, "1");
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.phq9[i],
        expression: "form.phq9[i]"
      }],
      attrs: {
        type: "radio",
        name: "phq9_" + i,
        value: "2"
      },
      domProps: {
        checked: _vm._q(_vm.form.phq9[i], "2")
      },
      on: {
        change: function change($event) {
          return _vm.$set(_vm.form.phq9, i, "2");
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.phq9[i],
        expression: "form.phq9[i]"
      }],
      attrs: {
        type: "radio",
        name: "phq9_" + i,
        value: "3"
      },
      domProps: {
        checked: _vm._q(_vm.form.phq9[i], "3")
      },
      on: {
        change: function change($event) {
          return _vm.$set(_vm.form.phq9, i, "3");
        }
      }
    })])]);
  }), 0)])])])]), _vm._v(" "), _c("div", {
    staticClass: "card shadow-sm border-0 mb-4 rounded-lg overflow-hidden"
  }, [_vm._m(10), _vm._v(" "), _c("div", {
    staticClass: "card-body px-0"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless table-hover align-middle mb-0"
  }, [_vm._m(11), _vm._v(" "), _c("tbody", _vm._l(_vm.gad7, function (q, i) {
    return _c("tr", {
      key: i,
      staticClass: "border-bottom"
    }, [_c("td", {
      staticClass: "ps-4"
    }, [_vm._v(_vm._s(q))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.gad7[i],
        expression: "form.gad7[i]"
      }],
      attrs: {
        type: "radio",
        name: "gad7_" + i,
        value: "0",
        required: ""
      },
      domProps: {
        checked: _vm._q(_vm.form.gad7[i], "0")
      },
      on: {
        change: function change($event) {
          return _vm.$set(_vm.form.gad7, i, "0");
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.gad7[i],
        expression: "form.gad7[i]"
      }],
      attrs: {
        type: "radio",
        name: "gad7_" + i,
        value: "1"
      },
      domProps: {
        checked: _vm._q(_vm.form.gad7[i], "1")
      },
      on: {
        change: function change($event) {
          return _vm.$set(_vm.form.gad7, i, "1");
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.gad7[i],
        expression: "form.gad7[i]"
      }],
      attrs: {
        type: "radio",
        name: "gad7_" + i,
        value: "2"
      },
      domProps: {
        checked: _vm._q(_vm.form.gad7[i], "2")
      },
      on: {
        change: function change($event) {
          return _vm.$set(_vm.form.gad7, i, "2");
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.gad7[i],
        expression: "form.gad7[i]"
      }],
      attrs: {
        type: "radio",
        name: "gad7_" + i,
        value: "3"
      },
      domProps: {
        checked: _vm._q(_vm.form.gad7[i], "3")
      },
      on: {
        change: function change($event) {
          return _vm.$set(_vm.form.gad7, i, "3");
        }
      }
    })])]);
  }), 0)])])])]), _vm._v(" "), _c("div", {
    staticClass: "card shadow-sm border-0 mb-4 rounded-lg overflow-hidden"
  }, [_vm._m(12), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("p", {
    staticClass: "text-dark small mb-3"
  }, [_vm._v("Si marcó algún problema en los cuestionarios anteriores, ¿qué tan difícil se le ha hecho hacer su trabajo, tareas domésticas, o relacionarse con otras personas debido a estos problemas?")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.dificultad,
      expression: "form.dificultad"
    }],
    staticClass: "form-control bg-light border-0",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "dificultad", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("Seleccione una opción...")]), _vm._v(" "), _c("option", [_vm._v("Nada difícil")]), _vm._v(" "), _c("option", [_vm._v("Algo difícil")]), _vm._v(" "), _c("option", [_vm._v("Muy difícil")]), _vm._v(" "), _c("option", [_vm._v("Extremadamente difícil")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card shadow-sm border-0 mb-4 rounded-lg overflow-hidden"
  }, [_vm._m(13), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, _vm._l(_vm.ybocs, function (q, i) {
    return _c("div", {
      key: i,
      staticClass: "col-md-12 mb-3"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center bg-light p-3 rounded flex-wrap gap-2"
    }, [_c("label", {
      staticClass: "form-label text-dark mb-0 w-100",
      staticStyle: {
        "max-width": "70%"
      }
    }, [_vm._v(_vm._s(q))]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.ybocs[i],
        expression: "form.ybocs[i]"
      }],
      staticClass: "form-control bg-white border-0 shadow-sm",
      staticStyle: {
        "max-width": "28%"
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(_vm.form.ybocs, i, $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: "",
        disabled: "",
        selected: ""
      }
    }, [_vm._v("Seleccione")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "0"
      }
    }, [_vm._v("Ausente")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "1"
      }
    }, [_vm._v("Leve")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "2"
      }
    }, [_vm._v("Moderado")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "3"
      }
    }, [_vm._v("Severo")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "4"
      }
    }, [_vm._v("Extremo")])])])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "card shadow-sm border-0 mb-4 rounded-lg overflow-hidden",
    staticStyle: {
      "background-color": "#f8fafc"
    }
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_vm._m(14), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.adicional,
      expression: "form.adicional"
    }],
    staticClass: "form-control border-0 mb-4 shadow-sm",
    attrs: {
      rows: "3",
      placeholder: "Si hay algo más que considere importante que sepamos, por favor escríbalo aquí..."
    },
    domProps: {
      value: _vm.form.adicional
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "adicional", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("hr", {
    staticClass: "my-4",
    staticStyle: {
      "border-color": "#cbd5e1"
    }
  }), _vm._v(" "), _vm._m(15), _vm._v(" "), _c("p", {
    staticClass: "small text-muted mb-3"
  }, [_vm._v("Al ingresar mi nombre confirmo que la información proporcionada es veraz y correcta.")]), _vm._v(" "), _c("div", {
    staticClass: "row align-items-center"
  }, [_c("div", {
    staticClass: "col-md-8 mb-3 mb-md-0"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.nombre_confirmacion,
      expression: "form.nombre_confirmacion"
    }],
    staticClass: "form-control border-0 shadow-sm form-control-lg",
    attrs: {
      placeholder: "Firma digital (Escriba su nombre)",
      required: ""
    },
    domProps: {
      value: _vm.form.nombre_confirmacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "nombre_confirmacion", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 text-end"
  }, [_c("button", {
    staticClass: "btn btn-primary btn-lg w-100 shadow rounded-pill font-weight-bold",
    attrs: {
      type: "submit",
      disabled: _vm.submitting
    }
  }, [_vm.submitting ? _c("span", [_c("i", {
    staticClass: "fas fa-spinner fa-spin me-2"
  }), _vm._v("Enviando...")]) : _c("span", [_c("i", {
    staticClass: "fas fa-paper-plane me-2"
  }), _vm._v("Enviar Ficha")])])])])])])]) : _vm._e(), _vm._v(" "), !_vm.loaded && !_vm.error ? _c("div", {
    staticClass: "text-center py-5"
  }, [_vm._m(16), _vm._v(" "), _c("h5", {
    staticClass: "text-secondary"
  }, [_vm._v("Cargando formulario...")])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center mb-5"
  }, [_c("h2", {
    staticClass: "font-weight-bold text-primary mb-2"
  }, [_c("i", {
    staticClass: "fas fa-clipboard-list me-2"
  }), _vm._v(" Ficha de Auto-triaje")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted"
  }, [_vm._v("Por favor, complete este formulario de la manera más honesta posible. Esta información nos ayudará a brindarle una mejor atención.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h5", {
    staticClass: "mb-1 text-success font-weight-bold"
  }, [_vm._v("Formulario Enviado")]), _vm._v(" "), _c("p", {
    staticClass: "mb-0"
  }, [_vm._v("Sus respuestas han sido registradas exitosamente. Muchas gracias por su tiempo y confianza.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-bottom-0 pt-4 pb-0"
  }, [_c("h5", {
    staticClass: "font-weight-bold text-dark"
  }, [_c("i", {
    staticClass: "fas fa-user text-primary me-2"
  }), _vm._v(" 1. Datos Generales")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-bottom-0 pt-4 pb-0"
  }, [_c("h5", {
    staticClass: "font-weight-bold text-dark"
  }, [_c("i", {
    staticClass: "fas fa-address-book text-danger me-2"
  }), _vm._v(" 2. Persona de contacto en caso de emergencia")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-bottom-0 pt-4 pb-0"
  }, [_c("h5", {
    staticClass: "font-weight-bold text-dark"
  }, [_c("i", {
    staticClass: "fas fa-hand-holding-medical text-success me-2"
  }), _vm._v(" 3. Consulta y Consentimiento")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-bottom-0 pt-4 pb-0"
  }, [_c("h5", {
    staticClass: "font-weight-bold text-dark"
  }, [_c("i", {
    staticClass: "fas fa-stethoscope text-info me-2"
  }), _vm._v(" 4. Síntomas Presentes")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted small mb-0"
  }, [_vm._v("Seleccione los síntomas que ha experimentado recientemente:")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-bottom-0 pt-4 pb-0"
  }, [_c("h5", {
    staticClass: "font-weight-bold text-dark"
  }, [_c("i", {
    staticClass: "fas fa-notes-medical text-warning me-2"
  }), _vm._v(" 5. Antecedentes")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-bottom-0 pt-4 pb-0"
  }, [_c("h5", {
    staticClass: "font-weight-bold text-danger"
  }, [_c("i", {
    staticClass: "fas fa-shield-alt me-2"
  }), _vm._v(" 6. Seguridad")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-bottom-0 pt-4 pb-0"
  }, [_c("h5", {
    staticClass: "font-weight-bold text-dark"
  }, [_c("i", {
    staticClass: "fas fa-list-ol text-primary me-2"
  }), _vm._v(" 7. Cuestionario de Salud (PHQ-9)")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted small mb-0"
  }, [_vm._v("En las últimas 2 semanas, ¿con qué frecuencia le han molestado los siguientes problemas?")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-light"
  }, [_c("tr", {
    staticClass: "text-secondary small"
  }, [_c("th", {
    staticClass: "w-50 ps-4 py-3"
  }, [_vm._v("Pregunta")]), _vm._v(" "), _c("th", {
    staticClass: "text-center py-3"
  }, [_vm._v("Nada")]), _vm._v(" "), _c("th", {
    staticClass: "text-center py-3"
  }, [_vm._v("Varios días")]), _vm._v(" "), _c("th", {
    staticClass: "text-center py-3"
  }, [_vm._v("> Mitad de días")]), _vm._v(" "), _c("th", {
    staticClass: "text-center py-3"
  }, [_vm._v("Casi todos")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-bottom-0 pt-4 pb-0"
  }, [_c("h5", {
    staticClass: "font-weight-bold text-dark"
  }, [_c("i", {
    staticClass: "fas fa-list-ol text-info me-2"
  }), _vm._v(" 8. Cuestionario de Ansiedad (GAD-7)")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted small mb-0"
  }, [_vm._v("En las últimas 2 semanas, ¿con qué frecuencia le han molestado los siguientes problemas?")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-light"
  }, [_c("tr", {
    staticClass: "text-secondary small"
  }, [_c("th", {
    staticClass: "w-50 ps-4 py-3"
  }, [_vm._v("Pregunta")]), _vm._v(" "), _c("th", {
    staticClass: "text-center py-3"
  }, [_vm._v("Nada")]), _vm._v(" "), _c("th", {
    staticClass: "text-center py-3"
  }, [_vm._v("Varios días")]), _vm._v(" "), _c("th", {
    staticClass: "text-center py-3"
  }, [_vm._v("> Mitad de días")]), _vm._v(" "), _c("th", {
    staticClass: "text-center py-3"
  }, [_vm._v("Casi todos")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-bottom-0 pt-4 pb-0"
  }, [_c("h5", {
    staticClass: "font-weight-bold text-dark"
  }, [_c("i", {
    staticClass: "fas fa-briefcase text-secondary me-2"
  }), _vm._v(" 9. Dificultad Funcional")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-bottom-0 pt-4 pb-0"
  }, [_c("h5", {
    staticClass: "font-weight-bold text-dark"
  }, [_c("i", {
    staticClass: "fas fa-list-ol text-warning me-2"
  }), _vm._v(" 10. Escala de Obsesiones y Compulsiones (Y-BOCS)")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted small mb-0"
  }, [_vm._v("Seleccione el nivel que mejor describa su situación (opcional):")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h5", {
    staticClass: "font-weight-bold text-dark mb-3"
  }, [_c("i", {
    staticClass: "fas fa-comment-dots text-secondary me-2"
  }), _vm._v(" 11. Información Adicional")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h5", {
    staticClass: "font-weight-bold text-dark mb-3"
  }, [_c("i", {
    staticClass: "fas fa-signature text-secondary me-2"
  }), _vm._v(" 12. Confirmación")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "spinner-border text-primary mb-3",
    staticStyle: {
      width: "3rem",
      height: "3rem"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Cargando...")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=style&index=0&id=9b43e2e6&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=style&index=0&id=9b43e2e6&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.container[data-v-9b43e2e6] { \n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n}\n.card[data-v-9b43e2e6] {\n  border-radius: 0.75rem !important;\n}\n.form-control[data-v-9b43e2e6] {\n  border-radius: 0.5rem;\n  padding: 0.6rem 1rem;\n}\n.form-control[data-v-9b43e2e6]:focus {\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);\n  background-color: #fff !important;\n  border-color: #86b7fe;\n}\n.form-label[data-v-9b43e2e6] {\n  margin-bottom: 0.25rem;\n}\n.rounded-lg[data-v-9b43e2e6] {\n  border-radius: 1rem !important;\n}\n.shadow-sm[data-v-9b43e2e6] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.04) !important;\n}\n.border-start[data-v-9b43e2e6] {\n  border-left: 1px solid #dee2e6 !important;\n}\n.bg-light[data-v-9b43e2e6] {\n  background-color: #f8f9fa !important;\n}\n.table th[data-v-9b43e2e6] {\n  font-weight: 600;\n  color: #6c757d;\n}\n/* Radio buttons style improvement */\ninput[type=\"radio\"][data-v-9b43e2e6] {\n  width: 1.2rem;\n  height: 1.2rem;\n  accent-color: #0d6efd;\n  cursor: pointer;\n}\n.form-check-input[data-v-9b43e2e6] {\n  cursor: pointer;\n}\n.form-check-label[data-v-9b43e2e6] {\n  cursor: pointer;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=style&index=0&id=9b43e2e6&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=style&index=0&id=9b43e2e6&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoTriaje_vue_vue_type_style_index_0_id_9b43e2e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AutoTriaje.vue?vue&type=style&index=0&id=9b43e2e6&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=style&index=0&id=9b43e2e6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoTriaje_vue_vue_type_style_index_0_id_9b43e2e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoTriaje_vue_vue_type_style_index_0_id_9b43e2e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/acceso_publico/AutoTriaje.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/acceso_publico/AutoTriaje.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AutoTriaje_vue_vue_type_template_id_9b43e2e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoTriaje.vue?vue&type=template&id=9b43e2e6&scoped=true */ "./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=template&id=9b43e2e6&scoped=true");
/* harmony import */ var _AutoTriaje_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoTriaje.vue?vue&type=script&lang=js */ "./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=script&lang=js");
/* harmony import */ var _AutoTriaje_vue_vue_type_style_index_0_id_9b43e2e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoTriaje.vue?vue&type=style&index=0&id=9b43e2e6&scoped=true&lang=css */ "./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=style&index=0&id=9b43e2e6&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AutoTriaje_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AutoTriaje_vue_vue_type_template_id_9b43e2e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AutoTriaje_vue_vue_type_template_id_9b43e2e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9b43e2e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/acceso_publico/AutoTriaje.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoTriaje_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AutoTriaje.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoTriaje_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=template&id=9b43e2e6&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=template&id=9b43e2e6&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoTriaje_vue_vue_type_template_id_9b43e2e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoTriaje_vue_vue_type_template_id_9b43e2e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoTriaje_vue_vue_type_template_id_9b43e2e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AutoTriaje.vue?vue&type=template&id=9b43e2e6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=template&id=9b43e2e6&scoped=true");


/***/ }),

/***/ "./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=style&index=0&id=9b43e2e6&scoped=true&lang=css":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=style&index=0&id=9b43e2e6&scoped=true&lang=css ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoTriaje_vue_vue_type_style_index_0_id_9b43e2e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AutoTriaje.vue?vue&type=style&index=0&id=9b43e2e6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/acceso_publico/AutoTriaje.vue?vue&type=style&index=0&id=9b43e2e6&scoped=true&lang=css");


/***/ })

}]);