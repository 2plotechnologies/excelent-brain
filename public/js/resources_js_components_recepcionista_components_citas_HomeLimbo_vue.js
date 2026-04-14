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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      citas: [],
      dataCit: {}
    };
  },
  name: 'HomeLimbo',
  props: [],
  components: {
    ReprogModal: _ReprogModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var _this = this;
    this.axios.get('/api/limbos').then(function (res) {
      return _this.citas = res.data;
    });
  },
  methods: {
    prepararDatos: function prepararDatos(cita) {
      //console.log(cita)
      this.dataCit = cita.appointment;
      this.dataCit.id = cita.appointment_id;
      this.dataCit.patient_id = cita.appointment.patient_id;
    },
    horaLatam: function horaLatam(hora) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(hora, 'HH:mm:ss').format('h:mm a');
    },
    fechaLatam: function fechaLatam(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(fecha).format('DD/MM/YYYY');
    },
    fechaLectura: function fechaLectura(fecha) {
      moment__WEBPACK_IMPORTED_MODULE_1___default().locale('es');
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(fecha).format('dddd, DD [de] MMMM YYYY [a las] hh:mm a');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=template&id=dcac5fce":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=template&id=dcac5fce ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h1", [_vm._v("Limbo")]), _vm._v(" "), _c("p", [_vm._v("Las citas de los siguientes pacientes están pendientes de ser reevaluadas:")]), _vm._v(" "), _c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.citas, function (cita, index) {
    var _cita$appointment$pat;
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.appointment.patient.name) + " " + _vm._s((_cita$appointment$pat = cita.appointment.patient.nombres) !== null && _cita$appointment$pat !== void 0 ? _cita$appointment$pat : "") + " ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.appointment.precio.descripcion))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.appointment.professional.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaLatam(cita.appointment.date)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.horaLatam(cita.appointment.schedule.check_time)) + " - " + _vm._s(_vm.horaLatam(cita.appointment.schedule.departure_date)))]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "badge",
      "class": {
        "btn-success": cita.appointment.payment.pay_status == 1 && cita.appointment.payment.adelanto > 0,
        "btn-ligth": cita.appointment.payment.pay_status == 1,
        "btn-primary": cita.appointment.payment.pay_status == 2,
        "btn-danger": cita.appointment.payment.pay_status == 3
      }
    }, [cita.appointment.payment.pay_status == 1 && cita.appointment.payment.adelanto > 0 ? _c("span", {
      staticClass: "text labels"
    }, [_vm._v("Con adelanto")]) : cita.appointment.payment.pay_status == 1 ? _c("span", {
      staticClass: "text labels"
    }, [_vm._v("Sin pagar")]) : cita.appointment.payment.pay_status == 2 ? _c("span", {
      staticClass: "text labels"
    }, [_vm._v("Cancelado")]) : cita.appointment.payment.pay_status == 3 ? _c("span", {
      staticClass: "text labels"
    }, [_vm._v("Anulado")]) : _vm._e()]), _vm._v(" "), cita.appointment.payment.observation ? _c("p", {
      staticClass: "mb-0"
    }, [_c("i", {
      staticClass: "fa-solid fa-arrow-right"
    }), _vm._v(" " + _vm._s(cita.appointment.payment.observation))]) : _vm._e()]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-outline-secondary",
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
      staticClass: "fa-solid fa-up-right-from-square"
    })])])]);
  }), 0)]), _vm._v(" "), _c("reprog-modal", {
    attrs: {
      dataCit: _vm.dataCit,
      idUsuario: _vm.$attrs.idUser
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Servicio")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("Fecha")]), _vm._v(" "), _c("th", [_vm._v("Hora")]), _vm._v(" "), _c("th", [_vm._v("Pago")]), _vm._v(" "), _c("th", [_vm._v("@")])])]);
}];
render._withStripped = true;


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
/* harmony import */ var _HomeLimbo_vue_vue_type_template_id_dcac5fce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeLimbo.vue?vue&type=template&id=dcac5fce */ "./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=template&id=dcac5fce");
/* harmony import */ var _HomeLimbo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeLimbo.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeLimbo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeLimbo_vue_vue_type_template_id_dcac5fce__WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeLimbo_vue_vue_type_template_id_dcac5fce__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
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

/***/ "./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=template&id=dcac5fce":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=template&id=dcac5fce ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLimbo_vue_vue_type_template_id_dcac5fce__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLimbo_vue_vue_type_template_id_dcac5fce__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLimbo_vue_vue_type_template_id_dcac5fce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeLimbo.vue?vue&type=template&id=dcac5fce */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/citas/HomeLimbo.vue?vue&type=template&id=dcac5fce");


/***/ })

}]);