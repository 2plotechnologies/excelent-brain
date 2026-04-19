"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_profesional_components_examenes_HomeExamen_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      exam: {
        appointment: this.$route.params.consultId,
        name_patient: '',
        attention_date: this.getFecha(),
        medical_exams: []
      },
      buscar: '',
      nuevo: {
        tipo: 1,
        nombre: ''
      },
      examenes: {
        laboratorio: [],
        imagenologia: [],
        otros: []
      },
      exams: [],
      dataSearchExam: [],
      showResults: false,
      selected: []
    };
  },
  methods: {
    getNamePatient: function getNamePatient() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.axios.get("/api/getNameExam/".concat(_this.$route.params.consultId)).then(function (result) {
                _this.exam.name_patient = result.data.name;
              })["catch"](function (err) {
                console.log(err);
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    enviarNuevo: function enviarNuevo() {
      var _this2 = this;
      if (this.nuevo.nombre) this.axios.post('/api/newExam', this.nuevo).then(function (response) {
        console.log('queresp', response.data);
        _this2.getExams();
        _this2.nuevo.nombre = '';
      });
      $('#modalAddExamen').modal('hide');
    },
    getExams: function getExams() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this3.axios.get('/api/medicalExam').then(function (result) {
                result.data.forEach(function (exam) {
                  if (exam.type === 1) {
                    _this3.examenes.laboratorio.push(exam);
                  } else if (exam.type === 2) {
                    _this3.examenes.imagenologia.push(exam);
                  } else if (exam.type === 3) {
                    _this3.examenes.otros.push(exam);
                  }
                });
              })["catch"](function (err) {
                console.error(err);
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // async storeExam(){
    //     this.exam.medical_exams = this.selected
    //     await this.axios.post('/api/medicalExam', this.exam)
    //     .then((res) => {
    //         console.log(res.data.medical_exams)
    //         this.pdf = res.data.medical_exams
    //         // sessionStorage.setItem('data-pdf', '')
    //         // sessionStorage.setItem('data-pdf', JSON.stringify(this.exam))
    //         this.$swal('Examen registrado. Ahora puede imprimir')
    //         document.getElementById('printBtn').disabled = false
    //     }).catch((err) => {
    //         console.log(err)
    //     });
    // },
    insertExam: function insertExam(exam) {
      var _this4 = this;
      var switchDuplicate = false;
      this.selected.find(function (el) {
        if (el.id == "".concat(exam.id)) {
          _this4.showResults = true;
          return switchDuplicate = true;
        }
      });
      if (!switchDuplicate) this.selected.push(exam);

      /* if (this.selected.length !== 0 && !switchDuplicate) this.selected.push(exam);
      if (this.selected.length === 0) this.selected.push(exam) */

      this.buscar = '';
      this.showResults = false;
    },
    searchExam: function searchExam(event) {
      var expReg = new RegExp("".concat(event.target.value), 'ig');
      // this.dataSearchExam = exams.filter(el => el.name )
      this.dataSearchExam = this.exams.filter(function (el) {
        return el.name.match(expReg);
      });
    },
    print: function print() {
      this.exam.medical_exams = this.selected;
      window.open('/api/pdf_exam/' + [JSON.stringify(this.exam).split('/').join('-')] + '?token=' + localStorage.getItem('token'));
    },
    deleteSelected: function deleteSelected(key) {
      this.selected.splice(key, 1);
    },
    typeExamenSelect: function typeExamenSelect() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var valueSelectExam = event.target ? event.target.value : event;
      if (valueSelectExam == 1) {
        this.exams = this.examenes.laboratorio;
        this.dataSearchExam = this.exams;
      } else if (valueSelectExam == 2) {
        this.exams = this.examenes.imagenologia;
        this.dataSearchExam = this.exams;
      } else if (valueSelectExam == 3) {
        this.exams = this.examenes.otros;
        this.dataSearchExam = this.exams;
      }
    },
    getFecha: function getFecha() {
      return "".concat(new Date().getFullYear(), "-").concat(new Date().getMonth().toString().length == 1 ? new Date().getMonth().toString() + 1 : parseInt(new Date().getMonth()) + 1, "-").concat(new Date().getDate().toString().length == 1 ? '0' + new Date().getDate() : new Date().getDate());
    }
  },
  mounted: function mounted() {
    this.getExams(), this.getNamePatient(), this.typeExamenSelect();
  },
  computed: {
    filtro: function filtro() {
      var _this5 = this;
      if (!this.buscar) {
        this.showResults = false;
        return null;
      } else {
        this.showResults = true;
        return this.exams.filter(function (exam) {
          return exam.name.toLowerCase().includes(_this5.buscar);
        }).slice(0, 5);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=template&id=44b768d6&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=template&id=44b768d6&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-12 col-lg-12"
  }, [_c("div", {
    staticClass: "card shadow mb-4"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Paciente")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.exam.name_patient,
      expression: "exam.name_patient"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Nombre del Paciente"
    },
    domProps: {
      value: _vm.exam.name_patient
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.exam, "name_patient", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Fecha Actual")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.exam.attention_date,
      expression: "exam.attention_date"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.exam.attention_date
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.exam, "attention_date", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col"
  }, [_vm._m(1), _vm._v(" "), _c("select", {
    staticClass: "form-select",
    attrs: {
      name: "",
      id: "typeExam"
    },
    on: {
      change: _vm.typeExamenSelect
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Laboratorio")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Imagenología")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Otros")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group w-100 position-relative"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Examen")]), _vm._v(" "), _c("input", {
    staticClass: "form-control w-100",
    attrs: {
      autocomplete: "off",
      type: "text",
      placeholder: "Nombre del estudio",
      name: "",
      id: "diagnostico"
    },
    on: {
      keyup: _vm.searchExam
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "cie-content rounded"
  }, _vm._l(_vm.dataSearchExam, function (exam, index) {
    return _c("div", {
      key: index
    }, [_c("span", {
      staticClass: "w-100 px-2 py-2 cie--hover d-inline-block pointer cie-item",
      attrs: {
        "data-id": exam.id
      },
      on: {
        click: function click($event) {
          return _vm.insertExam(exam);
        }
      }
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(exam.name) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row mt-2"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("table", {
    staticClass: "table"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", _vm._l(_vm.selected, function (select, key) {
    return _c("tr", {
      key: select.id
    }, [_c("th", {
      attrs: {
        scope: "row"
      }
    }, [_vm._v(_vm._s(key + 1))]), _vm._v(" "), _c("td", {
      attrs: {
        scope: "row"
      }
    }, [_vm._v(_vm._s(select.type === 1 ? "Laboratorio" : select.type === 2 ? "Imagenología" : select.type === 3 ? "Otro" : "Sin tipo de examen"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(select.name))]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-danger",
      on: {
        click: function click($event) {
          return _vm.deleteSelected(key);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-trash"
    })])])]);
  }), 0)])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success ml-1",
    attrs: {
      id: "printBtn"
    },
    on: {
      click: _vm.print
    }
  }, [_vm._v("Imprimir PDF")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalAddExamen",
      tabindex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-sm modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "modal-body border-0"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Categoría que pertenece")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nuevo.tipo,
      expression: "nuevo.tipo"
    }],
    staticClass: "form-select",
    attrs: {
      name: ""
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.nuevo, "tipo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Laboratorio")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Imagenología")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Otros")])]), _vm._v(" "), _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nombre del exámen")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nuevo.nombre,
      expression: "nuevo.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.nuevo.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.nuevo, "nombre", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer border-0"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.enviarNuevo();
      }
    }
  }, [_c("i", {
    staticClass: "fa-regular fa-floppy-disk"
  }), _vm._v(" Ingresar nuevo tipo")])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-warning py-3 d-flex flex-row align-items-center justify-content-between"
  }, [_c("h6", {
    staticClass: "m-0 font-weight-bold text-white"
  }, [_vm._v("Examen")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Tipo de examen\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c("button", {
    staticClass: "btn btn-outline-primary btn-sm position-relative",
    attrs: {
      type: "button",
      "data-bs-target": "#modalAddExamen",
      "data-bs-toggle": "modal"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-plus"
  }), _vm._v(" Agregar nuevo elemento\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c("span", {
    staticClass: "position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-warning text-white"
  }, [_c("tr", [_c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Tipo de examen")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Examen")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Operaciones")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header border-0"
  }, [_c("h1", {
    staticClass: "modal-title fs-5",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v("Nuevo tipo de examen")]), _vm._v(" "), _c("button", {
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=style&index=0&id=44b768d6&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=style&index=0&id=44b768d6&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.cie-content[data-v-44b768d6] {\n   width: 100%;\n   max-height: 200px;\n   overflow-y: auto;\n   background-color: #fff;\n   border: .3px solid #22222260;\n   visibility: hidden;\n   position: absolute;\n   z-index: 10;\n   transition: visibility 1s normal 3s;\n}\n#diagnostico:focus + .cie-content[data-v-44b768d6] {\n   visibility: visible;\n   /* display: block !important; */\n}\n.cie-item[data-v-44b768d6]:active {\n   visibility: visible;\n   opacity: 0;\n   /* display: block !important; */\n}\n.flex-gap[data-v-44b768d6] {\n   gap: 15px;\n}\n.pointer[data-v-44b768d6] {\n   cursor: pointer;\n}\n.cie--hover[data-v-44b768d6]:hover:not(.cie-danger) {\n   background: rgb(236, 236, 236);\n}\n.cie-danger[data-v-44b768d6] {\n   background: rgb(255, 207, 207);\n   cursor: no-drop;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=style&index=0&id=44b768d6&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=style&index=0&id=44b768d6&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeExamen_vue_vue_type_style_index_0_id_44b768d6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeExamen.vue?vue&type=style&index=0&id=44b768d6&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=style&index=0&id=44b768d6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeExamen_vue_vue_type_style_index_0_id_44b768d6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeExamen_vue_vue_type_style_index_0_id_44b768d6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/profesional/components/examenes/HomeExamen.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/profesional/components/examenes/HomeExamen.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeExamen_vue_vue_type_template_id_44b768d6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeExamen.vue?vue&type=template&id=44b768d6&scoped=true */ "./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=template&id=44b768d6&scoped=true");
/* harmony import */ var _HomeExamen_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeExamen.vue?vue&type=script&lang=js */ "./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=script&lang=js");
/* harmony import */ var _HomeExamen_vue_vue_type_style_index_0_id_44b768d6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeExamen.vue?vue&type=style&index=0&id=44b768d6&scoped=true&lang=css */ "./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=style&index=0&id=44b768d6&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomeExamen_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeExamen_vue_vue_type_template_id_44b768d6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeExamen_vue_vue_type_template_id_44b768d6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "44b768d6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profesional/components/examenes/HomeExamen.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeExamen_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeExamen.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeExamen_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=template&id=44b768d6&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=template&id=44b768d6&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeExamen_vue_vue_type_template_id_44b768d6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeExamen_vue_vue_type_template_id_44b768d6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeExamen_vue_vue_type_template_id_44b768d6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeExamen.vue?vue&type=template&id=44b768d6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=template&id=44b768d6&scoped=true");


/***/ }),

/***/ "./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=style&index=0&id=44b768d6&scoped=true&lang=css":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=style&index=0&id=44b768d6&scoped=true&lang=css ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeExamen_vue_vue_type_style_index_0_id_44b768d6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeExamen.vue?vue&type=style&index=0&id=44b768d6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/examenes/HomeExamen.vue?vue&type=style&index=0&id=44b768d6&scoped=true&lang=css");


/***/ })

}]);