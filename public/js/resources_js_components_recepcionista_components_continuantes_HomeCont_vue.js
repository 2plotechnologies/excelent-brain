"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_recepcionista_components_continuantes_HomeCont_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/continuantes/HomeCont.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/continuantes/HomeCont.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      today: moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date()).format('YYYY-MM-DD'),
      todaySubsWeek: moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date()).subtract(7, 'days').format('YYYY-MM-DD'),
      patientsWhitEvolutions: [],
      patientsWhitEvolutionsPsiq: [],
      todayFormatted: ''
      /* today: moment(new Date()).format('DD/MM/YYYY'),
      
      ,
       */
    };
  },
  methods: {
    getPatientsWhitEvolution: function getPatientsWhitEvolution() {
      var _this = this;
      this.todaySubsWeek = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.today).subtract(7, 'days').format('YYYY-MM-DD');
      this.todayFormatted = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.today).format('DD/MM/YYYY');
      this.axios.get("/api/getPatientsWhitEvolution/".concat(this.today)).then(function (res) {
        _this.patientsWhitEvolutionsPsiq = [];
        _this.patientsWhitEvolutions = res.data;
        if (res.data.length == 0) {
          alert('No se encontraron continuantes de psicología para esta fecha');
        }
      });
    },
    psiqPatients: function psiqPatients() {
      var _this2 = this;
      this.axios.get("/api/getPatientsPsiq/".concat(this.today)).then(function (res) {
        _this2.patientsWhitEvolutions = [];
        _this2.patientsWhitEvolutionsPsiq = res.data;
        if (res.data.length == 0) {
          alert('No se encontraron continuantes de psiquiatría para esta fecha');
        }
      });
    },
    changeAppointments: function changeAppointments() {
      this.patientsWhitEvolutionsPsiq = [];
      this.getPatientsWhitEvolution();
    }
  },
  mounted: function mounted() {
    this.getPatientsWhitEvolution();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/continuantes/HomeCont.vue?vue&type=template&id=c32d3bda":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/continuantes/HomeCont.vue?vue&type=template&id=c32d3bda ***!
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
  return _c("main", [_c("h1", [_vm._v("Pacientes Continuantes")]), _vm._v(" "), _c("p", [_vm._v("Seleccionar fecha")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.today,
      expression: "today"
    }],
    staticClass: "form-control w-25",
    attrs: {
      type: "date",
      id: "date"
    },
    domProps: {
      value: _vm.today
    },
    on: {
      change: _vm.getPatientsWhitEvolution,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.today = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success btn-sm ml-2",
    on: {
      click: _vm.psiqPatients
    }
  }, [_vm._v("Psiquiatría")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success btn-sm ml-2",
    on: {
      click: _vm.changeAppointments
    }
  }, [_vm._v("Psicología")])]), _vm._v(" "), _c("table", {
    staticClass: "table table-striped w-100 mt-4"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.patientsWhitEvolutionsPsiq, function (cita, index) {
    return _vm.patientsWhitEvolutionsPsiq.length != 0 ? _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(cita.patient.name))]), _vm._v(" "), _c("td", [_vm._v("Wilbert Barzola")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.patient.phone))]), _vm._v(" "), _c("td", [_c("a", {
      staticClass: "btn btn-info btn-circle btn-sm",
      attrs: {
        href: "whatsapp://send?phone=51".concat(cita.patient ? cita.patient.phone : "", "&text= Estimado(a) paciente ").concat(cita.patient ? cita.patient.name : "", ", le recordamos que el d\xEDa ").concat(_vm.todayFormatted, " deber\xEDa continuar con su tratamiento, en el Centro Psicol\xF3gico y Psiqui\xE1trico EXCELENTEMENTE. No olvide reservar su cita."),
        target: "_blank",
        title: "Enviar mensaje"
      }
    }, [_c("i", {
      staticClass: "fab fa-whatsapp"
    })])])]) : _vm._e();
  }), _vm._v(" "), _vm._l(_vm.patientsWhitEvolutions, function (cita, index) {
    return _vm.patientsWhitEvolutions.length != 0 ? _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(cita.patient.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.professional.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.patient.phone))]), _vm._v(" "), _c("td", [_c("a", {
      staticClass: "btn btn-info btn-circle btn-sm",
      attrs: {
        href: "whatsapp://send?phone=51".concat(cita.patient ? cita.patient.phone : "", "&text= Estimado(a) paciente ").concat(cita.patient ? cita.patient.name : "", ", le recordamos que el d\xEDa ").concat(_vm.todayFormatted, " deber\xEDa continuar con su tratamiento, en el Centro Psicol\xF3gico y Psiqui\xE1trico EXCELENTEMENTE. No olvide reservar su cita."),
        target: "_blank",
        title: "Enviar mensaje"
      }
    }, [_c("i", {
      staticClass: "fab fa-whatsapp"
    })])])]) : _vm._e();
  })], 2)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-success text-white"
  }, [_c("tr", [_c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("Celular")]), _vm._v(" "), _c("th", [_vm._v("Whatsapp")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/recepcionista/components/continuantes/HomeCont.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/continuantes/HomeCont.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeCont_vue_vue_type_template_id_c32d3bda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeCont.vue?vue&type=template&id=c32d3bda */ "./resources/js/components/recepcionista/components/continuantes/HomeCont.vue?vue&type=template&id=c32d3bda");
/* harmony import */ var _HomeCont_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeCont.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/continuantes/HomeCont.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeCont_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeCont_vue_vue_type_template_id_c32d3bda__WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeCont_vue_vue_type_template_id_c32d3bda__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/continuantes/HomeCont.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/continuantes/HomeCont.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/continuantes/HomeCont.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCont_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeCont.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/continuantes/HomeCont.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCont_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/continuantes/HomeCont.vue?vue&type=template&id=c32d3bda":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/continuantes/HomeCont.vue?vue&type=template&id=c32d3bda ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCont_vue_vue_type_template_id_c32d3bda__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCont_vue_vue_type_template_id_c32d3bda__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCont_vue_vue_type_template_id_c32d3bda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeCont.vue?vue&type=template&id=c32d3bda */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/continuantes/HomeCont.vue?vue&type=template&id=c32d3bda");


/***/ })

}]);