"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_profesional_components_consultas_PacientesSos_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      pacientes: [],
      comentario: '',
      idSos: -1,
      comentarios: []
    };
  },
  name: 'PacienteSOS',
  props: {},
  mounted: function mounted() {
    var _this = this;
    this.axios.get('/api/pedirSOS').then(function (res) {
      console.log(res.data);
      _this.pacientes = res.data.pacientes;
    });
  },
  methods: {
    nuevo: function nuevo() {
      this.axios.post('/api/crearComentarioSOS', {
        idSos: this.idSos,
        comentario: this.comentario,
        idUsuario: this.$attrs.idUser
      }).then(function (response) {
        console.log(response);
      });
    },
    listarComentarios: function listarComentarios(idSos) {
      var _this2 = this;
      this.axios.get('/api/listarComentariosSOS/' + idSos).then(function (response) {
        _this2.comentarios = response.data;
      });
    },
    fechaLatam: function fechaLatam(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).format('DD/MM/YYYY');
    },
    fechaLectura: function fechaLectura(fecha) {
      moment__WEBPACK_IMPORTED_MODULE_0___default().locale('es');
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).format('dddd, DD [de] MMMM YYYY [a las] hh:mm a');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=template&id=40cd3e3e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=template&id=40cd3e3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h1", [_vm._v("Pacientes con S.O.S.")]), _vm._v(" "), _c("p", [_vm._v("Los siguientes pacientes están con riesgo de suicidio:")]), _vm._v(" "), _c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.pacientes, function (paciente, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(paciente.name) + " " + _vm._s(paciente.nombres))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(paciente.phone) + " ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(paciente.nombreProfesional) + " ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(paciente.comentarios) + " ")]), _vm._v(" "), _c("td", _vm._l(paciente.relaciones, function (familiar) {
      return _c("p", [_vm._v("\n\t\t\t\t\t\t" + _vm._s(familiar.name) + " "), _c("br"), _vm._v(" " + _vm._s(familiar.phone) + "\n\t\t\t\t\t")]);
    }), 0), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.fechaLatam(paciente.registro)))]), _vm._v(" "), _c("td", [_c("a", {
      staticClass: "btn btn-outline-success",
      attrs: {
        href: "../api/pdfEvolution/restricted/" + paciente.id + "?token=" + _vm.$token,
        target: "_blank",
        title: "Ver Historia"
      }
    }, [_c("i", {
      staticClass: "fa-regular fa-note-sticky"
    })]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-outline-primary",
      attrs: {
        title: "Nuevo Seguimiento",
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalNuevo"
      },
      on: {
        click: function click($event) {
          _vm.idSos = paciente.idSos;
        }
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-plus"
    })]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-outline-secondary",
      attrs: {
        title: "Ver Seguimientos",
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalVer"
      },
      on: {
        click: function click($event) {
          return _vm.listarComentarios(paciente.idSos);
        }
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-eye"
    })])])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalNuevo",
      tabindex: "-1",
      "aria-labelledby": "miModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("p", [_vm._v("¿Cuál es el comentario que desea agregar?")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.comentario,
      expression: "comentario"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.comentario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.comentario = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    },
    on: {
      click: function click($event) {
        return _vm.nuevo();
      }
    }
  }, [_vm._v("Guardar")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalVer",
      tabindex: "-1",
      "aria-labelledby": "miModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("p", [_vm._v("Se listan los comentarios agregados:")]), _vm._v(" "), _c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", _vm._l(_vm.comentarios, function (comentario, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(comentario.nombreUsuario))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(comentario.comentario))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(comentario.fecha))])]);
  }), 0)])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Nombres")]), _vm._v(" "), _c("th", [_vm._v("Celular")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("Mensaje")]), _vm._v(" "), _c("th", [_vm._v("Familiares")]), _vm._v(" "), _c("th", [_vm._v("Fecha")]), _vm._v(" "), _c("th", [_vm._v("@")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "miModalLabel"
    }
  }, [_vm._v("Agregar comentario")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "miModalLabel"
    }
  }, [_vm._v("Comentarios agregados")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Encargado")]), _vm._v(" "), _c("th", [_vm._v("Comentario")]), _vm._v(" "), _c("th", [_vm._v("Fecha")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/profesional/components/consultas/PacientesSos.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/profesional/components/consultas/PacientesSos.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PacientesSos_vue_vue_type_template_id_40cd3e3e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PacientesSos.vue?vue&type=template&id=40cd3e3e */ "./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=template&id=40cd3e3e");
/* harmony import */ var _PacientesSos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PacientesSos.vue?vue&type=script&lang=js */ "./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PacientesSos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PacientesSos_vue_vue_type_template_id_40cd3e3e__WEBPACK_IMPORTED_MODULE_0__.render,
  _PacientesSos_vue_vue_type_template_id_40cd3e3e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profesional/components/consultas/PacientesSos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PacientesSos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PacientesSos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PacientesSos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=template&id=40cd3e3e":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=template&id=40cd3e3e ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PacientesSos_vue_vue_type_template_id_40cd3e3e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PacientesSos_vue_vue_type_template_id_40cd3e3e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PacientesSos_vue_vue_type_template_id_40cd3e3e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PacientesSos.vue?vue&type=template&id=40cd3e3e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=template&id=40cd3e3e");


/***/ })

}]);