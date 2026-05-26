"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_recepcionista_components_citas_HomeLimbo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReprogModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReprogModal.vue */ "./resources/js/components/recepcionista/components/citas/ReprogModal.vue");
/* harmony import */ var _ModalAccionesCita_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalAccionesCita.vue */ "./resources/js/components/recepcionista/components/citas/ModalAccionesCita.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HomeLimbo',
  components: {
    ReprogModal: _ReprogModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModalAccionesCita: _ModalAccionesCita_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      citas: [],
      dataCit: {},
      search: '',
      citaElegida: {},
      indiceElegido: -1,
      precios: [],
      filtroFecha: null,
      filtroPago: 'todos'
    };
  },
  mounted: function mounted() {
    this.fetchLimbos();
    this.fetchPrecios();
  },
  computed: {
    filteredCitas: function filteredCitas() {
      var _this = this;
      var result = this.citas;

      // Search filter
      if (this.search) {
        var s = this.search.toLowerCase();
        result = result.filter(function (c) {
          return c.appointment.patient.name.toLowerCase().includes(s) || c.appointment.patient.nombres && c.appointment.patient.nombres.toLowerCase().includes(s) || c.appointment.patient.dni.includes(s) || c.appointment.professional.name.toLowerCase().includes(s);
        });
      }

      // Date filter
      if (this.filtroFecha) {
        result = result.filter(function (c) {
          return _this.fechaISO(c.appointment.date) === _this.filtroFecha;
        });
      }

      // Payment type filter
      if (this.filtroPago !== 'todos') {
        result = result.filter(function (c) {
          var pay = c.appointment.payment;
          if (_this.filtroPago === 'completo') return pay.pay_status == 2;
          if (_this.filtroPago === 'adelanto') return pay.pay_status == 1 && pay.adelanto > 0;
          return true;
        });
      }
      return result;
    }
  },
  methods: {
    fetchLimbos: function fetchLimbos() {
      var _this2 = this;
      this.axios.get('/api/limbos').then(function (res) {
        return _this2.citas = res.data;
      });
    },
    fetchPrecios: function fetchPrecios() {
      var _this3 = this;
      this.axios.get('/api/precio').then(function (res) {
        return _this3.precios = res.data;
      });
    },
    prepararDatos: function prepararDatos(cita) {
      this.dataCit = _objectSpread({}, cita.appointment);
      this.dataCit.id = cita.appointment_id;
      this.dataCit.patient_id = cita.appointment.patient_id;
    },
    prepararAcciones: function prepararAcciones(cita, index) {
      this.citaElegida = _objectSpread({}, cita.appointment);
      this.indiceElegido = index;
      this.$nextTick(function () {
        var el = document.getElementById('modalAcciones');
        if (el && window.bootstrap) {
          var modalInstance = window.bootstrap.Modal.getOrCreateInstance(el);
          modalInstance.show();
        }
      });
    },
    horaLatam: function horaLatam(hora) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(hora, 'HH:mm:ss').format('h:mm a');
    },
    horaLatamRange: function horaLatamRange(start, end) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(start, 'HH:mm:ss').format('HH:mm') + ' - ' + moment__WEBPACK_IMPORTED_MODULE_2___default()(end, 'HH:mm:ss').format('HH:mm');
    },
    fechaISO: function fechaISO(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(fecha).format('YYYY-MM-DD');
    },
    fechaLatam: function fechaLatam(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(fecha).format('DD/MM/YYYY');
    },
    getServiceInitials: function getServiceInitials(desc) {
      if (!desc) return 'SRV';
      return desc.substring(0, 3).toUpperCase();
    },
    getPaymentClass: function getPaymentClass(payment) {
      if (payment.pay_status == 2) return 'paid';
      if (payment.pay_status == 1 && payment.adelanto > 0) return 'advance';
      if (payment.pay_status == 3) return 'canceled';
      return 'unpaid';
    },
    getPaymentText: function getPaymentText(payment) {
      var amount = payment.price || 0;
      var advance = payment.adelanto || 0;
      if (payment.pay_status == 2) return "Pagado - S/ ".concat(amount);
      if (payment.pay_status == 1 && advance > 0) return "Con Adelanto - S/ ".concat(advance);
      if (payment.pay_status == 3) return "Anulado - S/ ".concat(amount);
      return "Sin Pagar - S/ ".concat(amount);
    },
    resetFilters: function resetFilters() {
      this.filtroFecha = null;
      this.filtroPago = 'todos';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=template&id=dcac5fce&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=template&id=dcac5fce&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "limbo-container"
  }, [_c("div", {
    staticClass: "limbo-header"
  }, [_c("div", {
    staticClass: "search-box"
  }, [_c("i", {
    staticClass: "fa-solid fa-magnifying-glass"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "search-input",
    attrs: {
      type: "text",
      placeholder: "Buscar paciente, DNI o profesional..."
    },
    domProps: {
      value: _vm.search
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "limbo-badge-counter"
  }, [_c("i", {
    staticClass: "fa-regular fa-question-circle"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.filteredCitas.length) + " citas en limbo")])])]), _vm._v(" "), _c("div", {
    staticClass: "limbo-filters mb-3 d-flex gap-2 align-items-center"
  }, [_c("div", {
    staticClass: "filter-group"
  }, [_c("label", {
    staticClass: "small text-muted fw-bold text-uppercase mb-1 d-block"
  }, [_vm._v("Filtrar por fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filtroFecha,
      expression: "filtroFecha"
    }],
    staticClass: "form-control form-control-sm rounded-pill px-3",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.filtroFecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.filtroFecha = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "filter-group"
  }, [_c("label", {
    staticClass: "small text-muted fw-bold text-uppercase mb-1 d-block"
  }, [_vm._v("Tipo de pago")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filtroPago,
      expression: "filtroPago"
    }],
    staticClass: "form-select form-select-sm rounded-pill px-3",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.filtroPago = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "todos"
    }
  }, [_vm._v("Todos los pagos")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "completo"
    }
  }, [_vm._v("Pagos completos")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "adelanto"
    }
  }, [_vm._v("Adelantos")])])]), _vm._v(" "), _vm.filtroFecha || _vm.filtroPago !== "todos" ? _c("button", {
    staticClass: "btn btn-sm btn-light rounded-pill mt-4 px-3",
    on: {
      click: _vm.resetFilters
    }
  }, [_c("i", {
    staticClass: "fas fa-times me-1"
  }), _vm._v(" Limpiar\n\t\t")]) : _vm._e()]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "limbo-main-card"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "limbo-list"
  }, [_c("transition-group", {
    attrs: {
      name: "list"
    }
  }, _vm._l(_vm.filteredCitas, function (cita, index) {
    var _cita$appointment$pat;
    return _c("div", {
      key: cita.id,
      staticClass: "limbo-item"
    }, [_c("div", {
      staticClass: "item-datetime"
    }, [_c("div", {
      staticClass: "date"
    }, [_vm._v(_vm._s(_vm.fechaISO(cita.appointment.date)))]), _vm._v(" "), _c("div", {
      staticClass: "time"
    }, [_vm._v(_vm._s(_vm.horaLatamRange(cita.appointment.schedule.check_time, cita.appointment.schedule.departure_date)))])]), _vm._v(" "), _c("div", {
      staticClass: "item-service"
    }, [_c("span", {
      staticClass: "service-badge"
    }, [_vm._v(_vm._s(_vm.getServiceInitials(cita.appointment.precio.descripcion)))])]), _vm._v(" "), _c("div", {
      staticClass: "item-info"
    }, [_c("div", {
      staticClass: "patient-row"
    }, [_c("i", {
      staticClass: "fa-regular fa-user"
    }), _vm._v(" "), _c("span", {
      staticClass: "patient-name"
    }, [_vm._v(_vm._s(cita.appointment.patient.name) + " " + _vm._s((_cita$appointment$pat = cita.appointment.patient.nombres) !== null && _cita$appointment$pat !== void 0 ? _cita$appointment$pat : ""))])]), _vm._v(" "), _c("div", {
      staticClass: "professional-row"
    }, [_c("span", {
      staticClass: "professional-name"
    }, [_vm._v(_vm._s(cita.appointment.professional.name))]), _vm._v(" "), _c("span", {
      staticClass: "divider"
    }, [_vm._v("•")]), _vm._v(" "), _c("span", {
      staticClass: "patient-dni"
    }, [_vm._v("DNI: " + _vm._s(cita.appointment.patient.dni))])])]), _vm._v(" "), _c("div", {
      staticClass: "item-payment"
    }, [_c("span", {
      staticClass: "payment-badge",
      "class": _vm.getPaymentClass(cita.appointment.payment)
    }, [_c("i", {
      staticClass: "fa-solid fa-dollar-sign"
    }), _vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.getPaymentText(cita.appointment.payment)) + "\n\t\t\t\t\t\t")])]), _vm._v(" "), _c("div", {
      staticClass: "item-status"
    }, [_c("span", {
      staticClass: "status-badge"
    }, [_c("i", {
      staticClass: "fa-regular fa-question-circle"
    }), _vm._v("\n\t\t\t\t\t\t\tEn Limbo\n\t\t\t\t\t\t")])]), _vm._v(" "), _c("div", {
      staticClass: "item-actions"
    }, [_c("button", {
      staticClass: "action-btn",
      attrs: {
        title: "Ver detalle"
      },
      on: {
        click: function click($event) {
          return _vm.prepararAcciones(cita, index);
        }
      }
    }, [_c("i", {
      staticClass: "fa-regular fa-eye"
    }), _vm._v(" "), _c("span", [_vm._v("Ver")])]), _vm._v(" "), _c("button", {
      staticClass: "action-btn primary",
      attrs: {
        title: "Reprogramar",
        "data-bs-toggle": "modal",
        "data-bs-target": "#reprogModal"
      },
      on: {
        click: function click($event) {
          return _vm.prepararDatos(cita);
        }
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-arrows-rotate"
    }), _vm._v(" "), _c("span", [_vm._v("Reprogramar")])])])]);
  }), 0), _vm._v(" "), _vm.filteredCitas.length === 0 ? _c("div", {
    staticClass: "empty-state"
  }, [_c("i", {
    staticClass: "fa-solid fa-calendar-xmark"
  }), _vm._v(" "), _c("p", [_vm._v("No se encontraron citas en limbo que coincidan con la búsqueda.")])]) : _vm._e()], 1)]), _vm._v(" "), _c("reprog-modal", {
    attrs: {
      dataCit: _vm.dataCit,
      idUsuario: _vm.$attrs.idUser
    }
  }), _vm._v(" "), _vm.citaElegida.id ? _c("modal-acciones-cita", {
    key: _vm.citaElegida.id,
    attrs: {
      cita: _vm.citaElegida,
      indiceElegido: _vm.indiceElegido,
      precios: _vm.precios,
      id: "modalAcciones"
    },
    on: {
      actualizar: _vm.fetchLimbos
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "info-banner"
  }, [_c("div", {
    staticClass: "info-icon"
  }, [_c("i", {
    staticClass: "fa-regular fa-question-circle"
  })]), _vm._v(" "), _c("div", {
    staticClass: "info-content"
  }, [_c("h4", {
    staticClass: "info-title"
  }, [_vm._v("¿Qué es el Limbo?")]), _vm._v(" "), _c("p", {
    staticClass: "info-text"
  }, [_vm._v("\n\t\t\t\tAquí se listan las citas regulares que tienen un pago (total o adelanto) registrado pero no tienen una fecha de reprogramación asignada. \n\t\t\t\tLas acciones disponibles son: "), _c("strong", [_vm._v("Reprogramar cita")]), _vm._v(" (asignar nueva fecha) o "), _c("strong", [_vm._v("Dar como Asistida")]), _vm._v(".\n\t\t\t")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header-custom"
  }, [_c("i", {
    staticClass: "fa-regular fa-question-circle"
  }), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v("Citas en Limbo")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=style&index=0&id=dcac5fce&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=style&index=0&id=dcac5fce&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.limbo-container[data-v-dcac5fce] {\n\tpadding: 1.5rem;\n\tbackground-color: #f8fafc;\n\tmin-height: 100vh;\n\tfont-family: 'Inter', sans-serif;\n}\n\n/* Header & Search */\n.limbo-header[data-v-dcac5fce] {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin-bottom: 1.5rem;\n\tflex-wrap: wrap;\n\tgap: 1rem;\n}\n.search-box[data-v-dcac5fce] {\n\tposition: relative;\n\twidth: 100%;\n\tmax-width: 450px;\n}\n.search-box i[data-v-dcac5fce] {\n\tposition: absolute;\n\tleft: 1.25rem;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tcolor: #94a3b8;\n}\n.search-input[data-v-dcac5fce] {\n\twidth: 100%;\n\tpadding: 0.75rem 1rem 0.75rem 3rem;\n\tborder: 1px solid #e2e8f0;\n\tborder-radius: 0.75rem;\n\tbackground-color: #fff;\n\ttransition: all 0.2s;\n\tfont-size: 0.95rem;\n}\n.search-input[data-v-dcac5fce]:focus {\n\toutline: none;\n\tborder-color: #3b82f6;\n\tbox-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.limbo-badge-counter[data-v-dcac5fce] {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\tcolor: #f59e0b;\n\tfont-weight: 500;\n\tfont-size: 0.95rem;\n}\n\n/* Info Banner */\n.info-banner[data-v-dcac5fce] {\n\tbackground-color: #fffaf0;\n\tborder: 1px solid #fef3c7;\n\tborder-radius: 1rem;\n\tpadding: 1.25rem;\n\tdisplay: flex;\n\tgap: 1rem;\n\tmargin-bottom: 2rem;\n}\n.info-icon[data-v-dcac5fce] {\n\tcolor: #f59e0b;\n\tfont-size: 1.25rem;\n\tmargin-top: 0.25rem;\n}\n.info-title[data-v-dcac5fce] {\n\tfont-size: 1rem;\n\tfont-weight: 700;\n\tcolor: #92400e;\n\tmargin-bottom: 0.25rem;\n}\n.info-text[data-v-dcac5fce] {\n\tfont-size: 0.9rem;\n\tcolor: #b45309;\n\tline-height: 1.5;\n\tmargin: 0;\n}\n\n/* Main Card */\n.limbo-main-card[data-v-dcac5fce] {\n\tbackground-color: #fff;\n\tborder-radius: 1.25rem;\n\tborder: 1px solid #f1f5f9;\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.05);\n\toverflow: hidden;\n}\n.card-header-custom[data-v-dcac5fce] {\n\tpadding: 1.25rem 1.5rem;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.75rem;\n\tborder-bottom: 1px solid #f1f5f9;\n}\n.card-header-custom i[data-v-dcac5fce] {\n\tcolor: #f59e0b;\n}\n.card-title[data-v-dcac5fce] {\n\tfont-size: 1.1rem;\n\tfont-weight: 700;\n\tcolor: #1e293b;\n\tmargin: 0;\n}\n\n/* List Items */\n.limbo-list[data-v-dcac5fce] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n.limbo-item[data-v-dcac5fce] {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 1.25rem 1.5rem;\n\tborder-bottom: 1px solid #f1f5f9;\n\tgap: 1.5rem;\n\ttransition: background-color 0.2s;\n}\n.limbo-item[data-v-dcac5fce]:last-child {\n\tborder-bottom: none;\n}\n.limbo-item[data-v-dcac5fce]:hover {\n\tbackground-color: #f8fafc;\n}\n.item-datetime[data-v-dcac5fce] {\n\tmin-width: 100px;\n}\n.item-datetime .date[data-v-dcac5fce] {\n\tfont-weight: 700;\n\tcolor: #1e293b;\n\tfont-size: 0.95rem;\n}\n.item-datetime .time[data-v-dcac5fce] {\n\tfont-size: 0.75rem;\n\tcolor: #64748b;\n}\n.item-service[data-v-dcac5fce] {\n\tdisplay: flex;\n\talign-items: center;\n}\n.service-badge[data-v-dcac5fce] {\n\tbackground-color: #eff6ff;\n\tcolor: #3b82f6;\n\tpadding: 0.4rem 0.6rem;\n\tborder-radius: 0.5rem;\n\tfont-size: 0.7rem;\n\tfont-weight: 700;\n}\n.item-info[data-v-dcac5fce] {\n\tflex: 1;\n}\n.patient-row[data-v-dcac5fce] {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\tmargin-bottom: 0.25rem;\n}\n.patient-row i[data-v-dcac5fce] {\n\tcolor: #94a3b8;\n\tfont-size: 0.9rem;\n}\n.patient-name[data-v-dcac5fce] {\n\tfont-weight: 600;\n\tcolor: #334155;\n\tfont-size: 1rem;\n}\n.professional-row[data-v-dcac5fce] {\n\tfont-size: 0.8rem;\n\tcolor: #64748b;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n}\n.divider[data-v-dcac5fce] {\n\tcolor: #cbd5e1;\n}\n.item-payment[data-v-dcac5fce] {\n\tmin-width: 160px;\n}\n.payment-badge[data-v-dcac5fce] {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.4rem;\n\tpadding: 0.4rem 0.8rem;\n\tborder-radius: 2rem;\n\tfont-size: 0.8rem;\n\tfont-weight: 600;\n}\n.payment-badge.paid[data-v-dcac5fce] { background-color: #f0fdf4; color: #16a34a;\n}\n.payment-badge.advance[data-v-dcac5fce] { background-color: #fff7ed; color: #ea580c;\n}\n.payment-badge.canceled[data-v-dcac5fce] { background-color: #fef2f2; color: #dc2626;\n}\n.payment-badge.unpaid[data-v-dcac5fce] { background-color: #f1f5f9; color: #64748b;\n}\n.item-status[data-v-dcac5fce] {\n\tmin-width: 100px;\n}\n.status-badge[data-v-dcac5fce] {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.4rem;\n\tpadding: 0.4rem 0.8rem;\n\tborder-radius: 2rem;\n\tbackground-color: #fff7ed;\n\tcolor: #f59e0b;\n\tfont-size: 0.8rem;\n\tfont-weight: 600;\n\tborder: 1px solid #ffedd5;\n}\n.item-actions[data-v-dcac5fce] {\n\tdisplay: flex;\n\tgap: 0.75rem;\n}\n.action-btn[data-v-dcac5fce] {\n\tbackground: none;\n\tborder: none;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\tcolor: #64748b;\n\tfont-size: 0.85rem;\n\tfont-weight: 600;\n\tpadding: 0.5rem 0.75rem;\n\tborder-radius: 0.5rem;\n\ttransition: all 0.2s;\n}\n.action-btn[data-v-dcac5fce]:hover {\n\tbackground-color: #f1f5f9;\n\tcolor: #1e293b;\n}\n.action-btn.primary[data-v-dcac5fce] {\n\tcolor: #3b82f6;\n}\n.action-btn.primary[data-v-dcac5fce]:hover {\n\tbackground-color: #eff6ff;\n}\n.action-btn.success[data-v-dcac5fce] {\n\tcolor: #16a34a;\n}\n.action-btn.success[data-v-dcac5fce]:hover {\n\tbackground-color: #f0fdf4;\n}\n.empty-state[data-v-dcac5fce] {\n\tpadding: 4rem;\n\ttext-align: center;\n\tcolor: #94a3b8;\n}\n.empty-state i[data-v-dcac5fce] {\n\tfont-size: 3rem;\n\tmargin-bottom: 1rem;\n}\n\n/* Animations */\n.list-enter-active[data-v-dcac5fce], .list-leave-active[data-v-dcac5fce] {\n\ttransition: all 0.4s ease;\n}\n.list-enter-from[data-v-dcac5fce], .list-leave-to[data-v-dcac5fce] {\n\topacity: 0;\n\ttransform: translateX(-30px);\n}\n@media (max-width: 1024px) {\n.limbo-item[data-v-dcac5fce] {\n\t\tflex-wrap: wrap;\n}\n.item-actions[data-v-dcac5fce] {\n\t\twidth: 100%;\n\t\tjustify-content: flex-end;\n\t\tmargin-top: 0.5rem;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=style&index=0&id=dcac5fce&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=style&index=0&id=dcac5fce&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLimbo_vue_vue_type_style_index_0_id_dcac5fce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeLimbo.vue?vue&type=style&index=0&id=dcac5fce&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=style&index=0&id=dcac5fce&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLimbo_vue_vue_type_style_index_0_id_dcac5fce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLimbo_vue_vue_type_style_index_0_id_dcac5fce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/recepcionista/components/citas/HomeLimbo.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/citas/HomeLimbo.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeLimbo_vue_vue_type_template_id_dcac5fce_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeLimbo.vue?vue&type=template&id=dcac5fce&scoped=true */ "./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=template&id=dcac5fce&scoped=true");
/* harmony import */ var _HomeLimbo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeLimbo.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=script&lang=js");
/* harmony import */ var _HomeLimbo_vue_vue_type_style_index_0_id_dcac5fce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeLimbo.vue?vue&type=style&index=0&id=dcac5fce&scoped=true&lang=css */ "./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=style&index=0&id=dcac5fce&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomeLimbo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeLimbo_vue_vue_type_template_id_dcac5fce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeLimbo_vue_vue_type_template_id_dcac5fce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "dcac5fce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/citas/HomeLimbo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLimbo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeLimbo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLimbo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=template&id=dcac5fce&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=template&id=dcac5fce&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLimbo_vue_vue_type_template_id_dcac5fce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLimbo_vue_vue_type_template_id_dcac5fce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLimbo_vue_vue_type_template_id_dcac5fce_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeLimbo.vue?vue&type=template&id=dcac5fce&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=template&id=dcac5fce&scoped=true");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=style&index=0&id=dcac5fce&scoped=true&lang=css":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=style&index=0&id=dcac5fce&scoped=true&lang=css ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLimbo_vue_vue_type_style_index_0_id_dcac5fce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeLimbo.vue?vue&type=style&index=0&id=dcac5fce&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=style&index=0&id=dcac5fce&scoped=true&lang=css");


/***/ })

}]);