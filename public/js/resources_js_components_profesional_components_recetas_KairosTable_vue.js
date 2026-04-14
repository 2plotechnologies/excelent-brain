"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_profesional_components_recetas_KairosTable_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/recetas/KairosTable.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/recetas/KairosTable.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      medicamentos: [],
      buscar: ''
    };
  },
  methods: {
    getKairos: function getKairos() {
      var _this = this;
      this.axios.get('/api/kairos').then(function (result) {
        _this.medicamentos = result.data;
        console.log(result.data);
      });
    },
    deleteKairos: function deleteKairos(id) {
      var _this2 = this;
      this.axios.get("/api/kairoDelete/".concat(id)).then(function (result) {
        if (result.data.msg == 'success') {
          _this2.$swal('Medicamento eliminado correctamente');
          _this2.getKairos();
        } else {
          _this2.$swal('Server Error');
        }
      });
    }
  },
  mounted: function mounted() {
    this.getKairos();
  },
  computed: {
    filtro: function filtro() {
      var _this3 = this;
      if (!this.buscar) {
        return null;
      } else {
        return this.medicamentos.filter(function (medicamento) {
          return medicamento.name.toLowerCase().includes(_this3.buscar) || medicamento.tradename.toLowerCase().includes(_this3.buscar);
        }).splice(0, 6);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/recetas/KairosTable.vue?vue&type=template&id=269c8922":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/recetas/KairosTable.vue?vue&type=template&id=269c8922 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("h1", [_vm._v("Tabla de medicamentos kairos")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.buscar,
      expression: "buscar"
    }],
    staticClass: "form-control w-100",
    attrs: {
      autocomplete: "off",
      type: "text",
      placeholder: "Ingrese el nombre del medicamento",
      name: "",
      id: "via"
    },
    domProps: {
      value: _vm.buscar
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.buscar = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("table", {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.filtro, function (medicamento, key) {
    return _c("tr", {
      key: medicamento.id
    }, [_c("th", {
      attrs: {
        scope: "row"
      }
    }, [_vm._v(_vm._s(key + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(medicamento.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(medicamento.tradename))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(medicamento.concentration))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(medicamento.presentation))]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-danger",
      on: {
        click: function click($event) {
          return _vm.deleteKairos(medicamento.id);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-trash"
    })])])]);
  }), 0)])]);
};
var staticRenderFns = [function () {
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
  }, [_vm._v("Medicamento")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Nombre Comercial")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Concentración")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Presentación")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Eliminar")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/profesional/components/recetas/KairosTable.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/profesional/components/recetas/KairosTable.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KairosTable_vue_vue_type_template_id_269c8922__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KairosTable.vue?vue&type=template&id=269c8922 */ "./resources/js/components/profesional/components/recetas/KairosTable.vue?vue&type=template&id=269c8922");
/* harmony import */ var _KairosTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KairosTable.vue?vue&type=script&lang=js */ "./resources/js/components/profesional/components/recetas/KairosTable.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KairosTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _KairosTable_vue_vue_type_template_id_269c8922__WEBPACK_IMPORTED_MODULE_0__.render,
  _KairosTable_vue_vue_type_template_id_269c8922__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profesional/components/recetas/KairosTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/profesional/components/recetas/KairosTable.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/profesional/components/recetas/KairosTable.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KairosTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KairosTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/recetas/KairosTable.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KairosTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/profesional/components/recetas/KairosTable.vue?vue&type=template&id=269c8922":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/profesional/components/recetas/KairosTable.vue?vue&type=template&id=269c8922 ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KairosTable_vue_vue_type_template_id_269c8922__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KairosTable_vue_vue_type_template_id_269c8922__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KairosTable_vue_vue_type_template_id_269c8922__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KairosTable.vue?vue&type=template&id=269c8922 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/recetas/KairosTable.vue?vue&type=template&id=269c8922");


/***/ })

}]);