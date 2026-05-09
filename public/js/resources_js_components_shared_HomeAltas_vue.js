"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_HomeAltas_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/HomeAltas.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/HomeAltas.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HomeAltas',
  data: function data() {
    return {
      altas: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredAltas: function filteredAltas() {
      if (!this.searchQuery) return this.altas;
      var query = this.searchQuery.toLowerCase();
      return this.altas.filter(function (alta) {
        var patientName = alta.patient ? (alta.patient.name + ' ' + (alta.patient.nombres || '')).toLowerCase() : '';
        return patientName.includes(query);
      });
    }
  },
  created: function created() {
    this.cargarAltas();
  },
  methods: {
    cargarAltas: function cargarAltas() {
      var _this = this;
      this.axios.get('/api/discharges').then(function (res) {
        _this.altas = res.data;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    formatFecha: function formatFecha(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).format('DD/MM/YYYY hh:mm a');
    },
    actualizarEstado: function actualizarEstado(alta) {
      var _this2 = this;
      this.axios.put('/api/discharges/' + alta.id, {
        status: alta.status
      }).then(function (res) {
        _this2.$swal.fire('Éxito', res.data.msg, 'success');
      })["catch"](function (err) {
        _this2.$swal.fire('Error', 'Hubo un error al actualizar', 'error');
        console.error(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/HomeAltas.vue?vue&type=template&id=150ed9fd":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/HomeAltas.vue?vue&type=template&id=150ed9fd ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container-fluid py-5"
  }, [_c("h1", {
    staticClass: "h3 mb-2 text-gray-800"
  }, [_vm._v("Listado de Altas")]), _vm._v(" "), _c("p", {
    staticClass: "mb-4"
  }, [_vm._v("Visualice y gestione el estado de las altas psicológicas y psiquiátricas de los pacientes.")]), _vm._v(" "), _c("div", {
    staticClass: "card shadow mb-4"
  }, [_c("div", {
    staticClass: "card-header py-3 d-flex justify-content-between align-items-center"
  }, [_c("h6", {
    staticClass: "m-0 font-weight-bold text-primary"
  }, [_vm._v("Registros de Altas")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchQuery,
      expression: "searchQuery"
    }],
    staticClass: "form-control form-control-sm w-25",
    attrs: {
      type: "text",
      placeholder: "Buscar por paciente..."
    },
    domProps: {
      value: _vm.searchQuery
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.searchQuery = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered",
    attrs: {
      id: "dataTable",
      width: "100%",
      cellspacing: "0"
    }
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.filteredAltas, function (alta, index) {
    return _c("tr", {
      key: alta.id
    }, [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(alta.patient ? (alta.patient.name + " " + (alta.patient.nombres || "")).trim() : "Sin paciente"))]), _vm._v(" "), _c("td", [alta.type == 1 ? _c("span", {
      staticClass: "badge bg-info text-dark"
    }, [_vm._v("Psicológica")]) : alta.type == 2 ? _c("span", {
      staticClass: "badge bg-success"
    }, [_vm._v("Psiquiátrica")]) : _c("span", {
      staticClass: "badge bg-secondary"
    }, [_vm._v("Otra")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(alta.professional ? alta.professional.name : "Desconocido"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatFecha(alta.created_at)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(alta.comments))]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: alta.status,
        expression: "alta.status"
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
          _vm.$set(alta, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: "1"
      }
    }, [_vm._v("Activo")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "2"
      }
    }, [_vm._v("Inactivo")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "3"
      }
    }, [_vm._v("Reingreso")])])]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-primary btn-sm",
      on: {
        click: function click($event) {
          return _vm.actualizarEstado(alta);
        }
      }
    }, [_vm._v("Actualizar")])])]);
  }), 0)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("#")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Tipo de Alta")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("Fecha")]), _vm._v(" "), _c("th", [_vm._v("Comentarios")]), _vm._v(" "), _c("th", [_vm._v("Estado")]), _vm._v(" "), _c("th", [_vm._v("Acción")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/shared/HomeAltas.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/shared/HomeAltas.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeAltas_vue_vue_type_template_id_150ed9fd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeAltas.vue?vue&type=template&id=150ed9fd */ "./resources/js/components/shared/HomeAltas.vue?vue&type=template&id=150ed9fd");
/* harmony import */ var _HomeAltas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeAltas.vue?vue&type=script&lang=js */ "./resources/js/components/shared/HomeAltas.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeAltas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeAltas_vue_vue_type_template_id_150ed9fd__WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeAltas_vue_vue_type_template_id_150ed9fd__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shared/HomeAltas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/HomeAltas.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/shared/HomeAltas.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAltas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeAltas.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/HomeAltas.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAltas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/HomeAltas.vue?vue&type=template&id=150ed9fd":
/*!************************************************************************************!*\
  !*** ./resources/js/components/shared/HomeAltas.vue?vue&type=template&id=150ed9fd ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAltas_vue_vue_type_template_id_150ed9fd__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAltas_vue_vue_type_template_id_150ed9fd__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAltas_vue_vue_type_template_id_150ed9fd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeAltas.vue?vue&type=template&id=150ed9fd */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/HomeAltas.vue?vue&type=template&id=150ed9fd");


/***/ })

}]);