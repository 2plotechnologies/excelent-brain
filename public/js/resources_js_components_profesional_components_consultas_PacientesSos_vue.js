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
      comentarios: [],
      search: ''
    };
  },
  name: 'PacienteSOS',
  mounted: function mounted() {
    this.fetchData();
  },
  computed: {
    filteredPacientes: function filteredPacientes() {
      if (!this.search) return this.pacientes;
      var searchLower = this.search.toLowerCase();
      return this.pacientes.filter(function (p) {
        return p.name.toLowerCase().includes(searchLower) || p.nombres.toLowerCase().includes(searchLower) || p.dni.includes(searchLower);
      });
    },
    counts: function counts() {
      var _this = this;
      var counts = {
        critico: 0,
        alto: 0,
        moderado: 0
      };
      this.pacientes.forEach(function (p) {
        var risk = _this.getRiskClass(p);
        if (risk === 'critical') counts.critico++;else if (risk === 'high') counts.alto++;else counts.moderado++;
      });
      return counts;
    }
  },
  methods: {
    fetchData: function fetchData() {
      var _this2 = this;
      this.axios.get('/api/pedirSOS').then(function (res) {
        _this2.pacientes = res.data.pacientes;
      });
    },
    nuevo: function nuevo() {
      var _this3 = this;
      if (!this.comentario) return;
      this.axios.post('/api/crearComentarioSOS', {
        idSos: this.idSos,
        comentario: this.comentario,
        idUsuario: this.$attrs.idUser
      }).then(function (response) {
        _this3.comentario = '';
        _this3.fetchData();
      });
    },
    listarComentarios: function listarComentarios(idSos) {
      var _this4 = this;
      this.axios.get('/api/listarComentariosSOS/' + idSos).then(function (response) {
        _this4.comentarios = response.data;
      });
    },
    calculateAge: function calculateAge(birthDate) {
      if (!birthDate) return 'N/A';
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().diff(moment__WEBPACK_IMPORTED_MODULE_0___default()(birthDate), 'years');
    },
    fechaLatam: function fechaLatam(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).format('DD/MM/YYYY');
    },
    getRiskClass: function getRiskClass(paciente) {
      var text = (paciente.comentarios || '').toLowerCase();
      if (text.includes('suicid') || text.includes('muerte') || text.includes('grave')) return 'critical';
      if (text.includes('crisis') || text.includes('ansiedad') || text.includes('sever')) return 'high';
      return 'moderate';
    },
    getRiskLabel: function getRiskLabel(paciente) {
      var risk = this.getRiskClass(paciente);
      if (risk === 'critical') return 'CRÍTICO';
      if (risk === 'high') return 'ALTO';
      return 'MODERADO';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=template&id=40cd3e3e&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=template&id=40cd3e3e&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "sos-container"
  }, [_c("div", {
    staticClass: "sos-header"
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
      placeholder: "Buscar paciente o DNI..."
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
    staticClass: "sos-badge-counter"
  }, [_c("i", {
    staticClass: "fa-solid fa-triangle-exclamation"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.filteredPacientes.length) + " pacientes SOS activos")])])]), _vm._v(" "), _c("div", {
    staticClass: "summary-grid"
  }, [_c("div", {
    staticClass: "summary-card critical"
  }, [_c("div", {
    staticClass: "summary-label"
  }, [_vm._v("Nivel Crítico")]), _vm._v(" "), _c("div", {
    staticClass: "summary-value"
  }, [_vm._v(_vm._s(_vm.counts.critico))])]), _vm._v(" "), _c("div", {
    staticClass: "summary-card high"
  }, [_c("div", {
    staticClass: "summary-label"
  }, [_vm._v("Nivel Alto")]), _vm._v(" "), _c("div", {
    staticClass: "summary-value"
  }, [_vm._v(_vm._s(_vm.counts.alto))])]), _vm._v(" "), _c("div", {
    staticClass: "summary-card moderate"
  }, [_c("div", {
    staticClass: "summary-label"
  }, [_vm._v("Nivel Moderado")]), _vm._v(" "), _c("div", {
    staticClass: "summary-value"
  }, [_vm._v(_vm._s(_vm.counts.moderado))])])]), _vm._v(" "), _c("div", {
    staticClass: "patient-list"
  }, [_c("transition-group", {
    attrs: {
      name: "list"
    }
  }, _vm._l(_vm.filteredPacientes, function (paciente) {
    return _c("div", {
      key: paciente.idSos,
      staticClass: "patient-card",
      "class": _vm.getRiskClass(paciente)
    }, [_c("div", {
      staticClass: "card-icon-container"
    }, [_c("div", {
      staticClass: "risk-icon"
    }, [_c("i", {
      staticClass: "fa-solid fa-triangle-exclamation"
    })])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "card-title-row"
    }, [_c("h3", {
      staticClass: "patient-name"
    }, [_vm._v(_vm._s(paciente.name) + " " + _vm._s(paciente.nombres))]), _vm._v(" "), _c("span", {
      staticClass: "risk-badge",
      "class": _vm.getRiskClass(paciente)
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.getRiskLabel(paciente)) + "\n\t\t\t\t\t\t")])]), _vm._v(" "), _c("div", {
      staticClass: "patient-meta-row"
    }, [_c("span", {
      staticClass: "meta-item"
    }, [_vm._v(_vm._s(_vm.calculateAge(paciente.birth_date)) + " años")]), _vm._v(" "), _c("span", {
      staticClass: "meta-divider"
    }, [_vm._v("•")]), _vm._v(" "), _c("span", {
      staticClass: "meta-item"
    }, [_vm._v(_vm._s(paciente.gender == 1 ? "Masculino" : "Femenino"))]), _vm._v(" "), _c("span", {
      staticClass: "meta-divider"
    }, [_vm._v("•")]), _vm._v(" "), _c("span", {
      staticClass: "meta-item"
    }, [_vm._v("DNI: " + _vm._s(paciente.dni))])]), _vm._v(" "), _c("div", {
      staticClass: "motivo-section"
    }, [_c("span", {
      staticClass: "motivo-label"
    }, [_vm._v("Motivo:")]), _vm._v(" "), _c("span", {
      staticClass: "motivo-text"
    }, [_vm._v(_vm._s(paciente.comentarios))])]), _vm._v(" "), _c("div", {
      staticClass: "footer-info-row"
    }, [_c("div", {
      staticClass: "info-pill"
    }, [_c("i", {
      staticClass: "fa-regular fa-calendar"
    }), _vm._v("\n\t\t\t\t\t\t\tSOS desde: " + _vm._s(_vm.fechaLatam(paciente.registro)) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c("div", {
      staticClass: "info-pill"
    }, [_c("i", {
      staticClass: "fa-regular fa-user"
    }), _vm._v("\n\t\t\t\t\t\t\t" + _vm._s(paciente.nombreProfesional) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c("div", {
      staticClass: "info-pill"
    }, [_c("i", {
      staticClass: "fa-regular fa-comments"
    }), _vm._v("\n\t\t\t\t\t\t\t" + _vm._s(paciente.seguimientos_count || 0) + " seguimientos\n\t\t\t\t\t\t")])])]), _vm._v(" "), _c("div", {
      staticClass: "card-actions"
    }, [_c("a", {
      staticClass: "action-btn",
      attrs: {
        href: "../api/pdfEvolution/restricted/" + paciente.id + "?token=" + _vm.$token,
        target: "_blank",
        title: "Ver Historia"
      }
    }, [_c("i", {
      staticClass: "fa-regular fa-eye"
    }), _vm._v(" Ver perfil\n\t\t\t\t\t")]), _vm._v(" "), _c("button", {
      staticClass: "action-btn",
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
    }), _vm._v(" Nuevo seguimiento\n\t\t\t\t\t")]), _vm._v(" "), _c("button", {
      staticClass: "action-btn",
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
      staticClass: "fa-solid fa-list-check"
    }), _vm._v(" Ver seguimientos\n\t\t\t\t\t")])])]);
  }), 0), _vm._v(" "), _vm.filteredPacientes.length === 0 ? _c("div", {
    staticClass: "empty-state"
  }, [_c("i", {
    staticClass: "fa-solid fa-user-slash"
  }), _vm._v(" "), _c("p", [_vm._v("No se encontraron pacientes SOS que coincidan con la búsqueda.")])]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalNuevo",
      tabindex: "-1",
      "aria-labelledby": "modalNuevoLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content custom-modal"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("p", {
    staticClass: "text-muted mb-3"
  }, [_vm._v("¿Cuál es el comentario que desea agregar al seguimiento de este paciente?")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.comentario,
      expression: "comentario"
    }],
    staticClass: "form-control custom-input",
    attrs: {
      rows: "4",
      placeholder: "Escriba aquí el detalle del seguimiento..."
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
    staticClass: "modal-footer border-0"
  }, [_c("button", {
    staticClass: "btn btn-light",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Cancelar")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-4 shadow-sm",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    },
    on: {
      click: function click($event) {
        return _vm.nuevo();
      }
    }
  }, [_vm._v("Guardar comentario")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modalVer",
      tabindex: "-1",
      "aria-labelledby": "modalVerLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-lg modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content custom-modal"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm.comentarios.length > 0 ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table custom-table"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", _vm._l(_vm.comentarios, function (com, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", {
      staticClass: "fw-bold"
    }, [_vm._v(_vm._s(com.nombreUsuario))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(com.comentario))]), _vm._v(" "), _c("td", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(com.fecha))])]);
  }), 0)])]) : _c("div", {
    staticClass: "text-center py-4"
  }, [_c("p", {
    staticClass: "text-muted"
  }, [_vm._v("No hay comentarios registrados para este paciente.")])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header border-0"
  }, [_c("h5", {
    staticClass: "modal-title fw-bold",
    attrs: {
      id: "modalNuevoLabel"
    }
  }, [_vm._v("Agregar seguimiento")]), _vm._v(" "), _c("button", {
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
    staticClass: "modal-header border-0"
  }, [_c("h5", {
    staticClass: "modal-title fw-bold",
    attrs: {
      id: "modalVerLabel"
    }
  }, [_vm._v("Historial de seguimientos")]), _vm._v(" "), _c("button", {
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
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Encargado")]), _vm._v(" "), _c("th", [_vm._v("Comentario")]), _vm._v(" "), _c("th", [_vm._v("Fecha")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=style&index=0&id=40cd3e3e&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=style&index=0&id=40cd3e3e&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.sos-container[data-v-40cd3e3e] {\n\tpadding: 1.5rem;\n\tbackground-color: #f8fafc;\n\tmin-height: 100vh;\n\tfont-family: 'Inter', sans-serif;\n}\n\n/* Header & Search */\n.sos-header[data-v-40cd3e3e] {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin-bottom: 2rem;\n\tflex-wrap: wrap;\n\tgap: 1rem;\n}\n.search-box[data-v-40cd3e3e] {\n\tposition: relative;\n\twidth: 100%;\n\tmax-width: 400px;\n}\n.search-box i[data-v-40cd3e3e] {\n\tposition: absolute;\n\tleft: 1.25rem;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tcolor: #94a3b8;\n}\n.search-input[data-v-40cd3e3e] {\n\twidth: 100%;\n\tpadding: 0.75rem 1rem 0.75rem 3rem;\n\tborder: 1px solid #e2e8f0;\n\tborder-radius: 2rem;\n\tbackground-color: #fff;\n\ttransition: all 0.2s;\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05);\n}\n.search-input[data-v-40cd3e3e]:focus {\n\toutline: none;\n\tborder-color: #3b82f6;\n\tbox-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.sos-badge-counter[data-v-40cd3e3e] {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\tcolor: #ef4444;\n\tfont-weight: 600;\n}\n\n/* Summary Grid */\n.summary-grid[data-v-40cd3e3e] {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n\tgap: 1.5rem;\n\tmargin-bottom: 2.5rem;\n}\n.summary-card[data-v-40cd3e3e] {\n\tpadding: 1.5rem;\n\tborder-radius: 1rem;\n\tborder: 1px solid transparent;\n\ttransition: transform 0.2s;\n}\n.summary-card[data-v-40cd3e3e]:hover {\n\ttransform: translateY(-2px);\n}\n.summary-label[data-v-40cd3e3e] {\n\tfont-size: 0.875rem;\n\tfont-weight: 500;\n\tmargin-bottom: 0.5rem;\n}\n.summary-value[data-v-40cd3e3e] {\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tline-height: 1;\n}\n.summary-card.critical[data-v-40cd3e3e] { background-color: #fef2f2; border-color: #fee2e2; color: #991b1b;\n}\n.summary-card.high[data-v-40cd3e3e] { background-color: #fff7ed; border-color: #ffedd5; color: #9a3412;\n}\n.summary-card.moderate[data-v-40cd3e3e] { background-color: #fefce8; border-color: #fef9c3; color: #854d0e;\n}\n\n/* Patient Cards */\n.patient-list[data-v-40cd3e3e] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n.patient-card[data-v-40cd3e3e] {\n\tdisplay: flex;\n\tbackground-color: #fff;\n\tborder-radius: 1.25rem;\n\tborder: 1px solid #f1f5f9;\n\tpadding: 1.25rem;\n\tgap: 1.5rem;\n\ttransition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n\tposition: relative;\n}\n.patient-card[data-v-40cd3e3e]:hover {\n\tbox-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);\n\tborder-color: #e2e8f0;\n}\n.card-icon-container[data-v-40cd3e3e] {\n\tdisplay: flex;\n\talign-items: flex-start;\n\tpadding-top: 0.25rem;\n}\n.risk-icon[data-v-40cd3e3e] {\n\twidth: 48px;\n\theight: 48px;\n\tborder-radius: 0.75rem;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: 1.25rem;\n}\n.patient-card.critical .risk-icon[data-v-40cd3e3e] { background-color: #fee2e2; color: #ef4444;\n}\n.patient-card.high .risk-icon[data-v-40cd3e3e] { background-color: #ffedd5; color: #f97316;\n}\n.patient-card.moderate .risk-icon[data-v-40cd3e3e] { background-color: #fef9c3; color: #eab308;\n}\n.card-body[data-v-40cd3e3e] {\n\tflex: 1;\n}\n.card-title-row[data-v-40cd3e3e] {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tmargin-bottom: 0.25rem;\n}\n.patient-name[data-v-40cd3e3e] {\n\tfont-size: 1.125rem;\n\tfont-weight: 700;\n\tcolor: #1e293b;\n\tmargin: 0;\n}\n.risk-badge[data-v-40cd3e3e] {\n\tpadding: 0.25rem 0.75rem;\n\tborder-radius: 1rem;\n\tfont-size: 0.75rem;\n\tfont-weight: 700;\n}\n.risk-badge.critical[data-v-40cd3e3e] { background-color: #fee2e2; color: #991b1b;\n}\n.risk-badge.high[data-v-40cd3e3e] { background-color: #ffedd5; color: #9a3412;\n}\n.risk-badge.moderate[data-v-40cd3e3e] { background-color: #fef9c3; color: #854d0e;\n}\n.patient-meta-row[data-v-40cd3e3e] {\n\tfont-size: 0.875rem;\n\tcolor: #64748b;\n\tmargin-bottom: 1rem;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n}\n.meta-divider[data-v-40cd3e3e] {\n\tcolor: #cbd5e1;\n}\n.motivo-section[data-v-40cd3e3e] {\n\tmargin-bottom: 1.25rem;\n}\n.motivo-label[data-v-40cd3e3e] {\n\tcolor: #ef4444;\n\tfont-weight: 600;\n\tmargin-right: 0.5rem;\n\tfont-size: 0.9rem;\n}\n.motivo-text[data-v-40cd3e3e] {\n\tcolor: #ef4444;\n\tfont-size: 0.95rem;\n}\n.footer-info-row[data-v-40cd3e3e] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 1.5rem;\n}\n.info-pill[data-v-40cd3e3e] {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\tfont-size: 0.8rem;\n\tcolor: #64748b;\n}\n.info-pill i[data-v-40cd3e3e] {\n\tfont-size: 1rem;\n\tcolor: #94a3b8;\n}\n\n/* Actions */\n.card-actions[data-v-40cd3e3e] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tgap: 0.5rem;\n\tborder-left: 1px solid #f1f5f9;\n\tpadding-left: 1.5rem;\n\tmin-width: 180px;\n}\n.action-btn[data-v-40cd3e3e] {\n\tbackground: none;\n\tborder: none;\n\tcolor: #64748b;\n\tfont-size: 0.875rem;\n\tfont-weight: 500;\n\ttext-align: left;\n\tpadding: 0.5rem;\n\tborder-radius: 0.5rem;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.75rem;\n\ttransition: all 0.2s;\n\ttext-decoration: none;\n\twidth: 100%;\n}\n.action-btn[data-v-40cd3e3e]:hover {\n\tbackground-color: #f1f5f9;\n\tcolor: #1e293b;\n}\n.action-btn i[data-v-40cd3e3e] {\n\twidth: 1.25rem;\n\ttext-align: center;\n\tcolor: #94a3b8;\n}\n\n/* Modals */\n.custom-modal[data-v-40cd3e3e] {\n\tborder-radius: 1.5rem;\n\toverflow: hidden;\n}\n.custom-input[data-v-40cd3e3e] {\n\tborder-radius: 1rem;\n\tpadding: 1rem;\n\tborder-color: #e2e8f0;\n}\n.custom-table th[data-v-40cd3e3e] {\n\tbackground-color: #f8fafc;\n\tfont-weight: 600;\n\tfont-size: 0.8rem;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.025em;\n\tcolor: #64748b;\n\tborder-top: none;\n}\n.custom-table td[data-v-40cd3e3e] {\n\tvertical-align: middle;\n\tpadding: 1rem 0.75rem;\n}\n.empty-state[data-v-40cd3e3e] {\n\ttext-align: center;\n\tpadding: 4rem;\n\tcolor: #94a3b8;\n}\n.empty-state i[data-v-40cd3e3e] {\n\tfont-size: 3rem;\n\tmargin-bottom: 1rem;\n}\n\n/* Animations */\n.list-enter-active[data-v-40cd3e3e], .list-leave-active[data-v-40cd3e3e] {\n\ttransition: all 0.4s ease;\n}\n.list-enter-from[data-v-40cd3e3e], .list-leave-to[data-v-40cd3e3e] {\n\topacity: 0;\n\ttransform: translateX(-30px);\n}\n@media (max-width: 768px) {\n.patient-card[data-v-40cd3e3e] {\n\t\tflex-direction: column;\n}\n.card-actions[data-v-40cd3e3e] {\n\t\tborder-left: none;\n\t\tborder-top: 1px solid #f1f5f9;\n\t\tpadding-left: 0;\n\t\tpadding-top: 1rem;\n\t\tflex-direction: row;\n\t\tflex-wrap: wrap;\n}\n.action-btn[data-v-40cd3e3e] {\n\t\twidth: auto;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=style&index=0&id=40cd3e3e&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=style&index=0&id=40cd3e3e&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PacientesSos_vue_vue_type_style_index_0_id_40cd3e3e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PacientesSos.vue?vue&type=style&index=0&id=40cd3e3e&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=style&index=0&id=40cd3e3e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PacientesSos_vue_vue_type_style_index_0_id_40cd3e3e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PacientesSos_vue_vue_type_style_index_0_id_40cd3e3e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _PacientesSos_vue_vue_type_template_id_40cd3e3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PacientesSos.vue?vue&type=template&id=40cd3e3e&scoped=true */ "./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=template&id=40cd3e3e&scoped=true");
/* harmony import */ var _PacientesSos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PacientesSos.vue?vue&type=script&lang=js */ "./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=script&lang=js");
/* harmony import */ var _PacientesSos_vue_vue_type_style_index_0_id_40cd3e3e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PacientesSos.vue?vue&type=style&index=0&id=40cd3e3e&scoped=true&lang=css */ "./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=style&index=0&id=40cd3e3e&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PacientesSos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PacientesSos_vue_vue_type_template_id_40cd3e3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PacientesSos_vue_vue_type_template_id_40cd3e3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "40cd3e3e",
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

/***/ "./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=template&id=40cd3e3e&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=template&id=40cd3e3e&scoped=true ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PacientesSos_vue_vue_type_template_id_40cd3e3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PacientesSos_vue_vue_type_template_id_40cd3e3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PacientesSos_vue_vue_type_template_id_40cd3e3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PacientesSos.vue?vue&type=template&id=40cd3e3e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=template&id=40cd3e3e&scoped=true");


/***/ }),

/***/ "./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=style&index=0&id=40cd3e3e&scoped=true&lang=css":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=style&index=0&id=40cd3e3e&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PacientesSos_vue_vue_type_style_index_0_id_40cd3e3e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PacientesSos.vue?vue&type=style&index=0&id=40cd3e3e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/PacientesSos.vue?vue&type=style&index=0&id=40cd3e3e&scoped=true&lang=css");


/***/ })

}]);