"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_recepcionista_components_dashboard_HomeDashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

moment__WEBPACK_IMPORTED_MODULE_0___default().locale('es');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "HomeDashboardRecepcionista",
  data: function data() {
    return {
      dashboardData: {
        pacientesActivos: 0,
        citasHoy: [],
        ingresosHoy: 0,
        alertasSOS: 0,
        alertasDeudas: 0,
        totalAlertas: 0,
        sos: [],
        deudas: []
      },
      loading: true
    };
  },
  computed: {
    currentDateFormatted: function currentDateFormatted() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format('D MMM YYYY');
    },
    citasPendientes: function citasPendientes() {
      if (!this.dashboardData.citasHoy || this.dashboardData.citasHoy.length === 0) return 0;
      // Se puede extender usando la lógica de completada: 
      // e.g., this.dashboardData.citasHoy.filter(c => c.status !== 'completada').length
      return this.dashboardData.citasHoy.length;
    }
  },
  mounted: function mounted() {
    this.fetchDashboardData();
  },
  methods: {
    fetchDashboardData: function fetchDashboardData() {
      var _this = this;
      this.loading = true;
      axios.get('/api/dashboardRecepcion').then(function (res) {
        var data = res.data;
        _this.dashboardData = {
          pacientesActivos: data.pacientesActivos || 0,
          citasHoy: data.citasHoy || [],
          ingresosHoy: data.ingresosHoy || 0,
          alertasSOS: data.alertasSOS || 0,
          alertasDeudas: data.alertasDeudas || 0,
          totalAlertas: data.totalAlertas || 0,
          sos: data.sos || [],
          deudas: data.deudas || []
        };
      })["catch"](function (err) {
        console.error("Error al obtener datos del dashboard:", err);
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=template&id=e8b0c538&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=template&id=e8b0c538&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "p-4",
    staticStyle: {
      "background-color": "#f8f9fc",
      "min-height": "100vh"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-4"
  }, [_c("div", [_c("h4", {
    staticClass: "m-0 font-weight-bold text-dark"
  }, [_vm._v("Dashboard General")]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Vista consolidada · Hoy, " + _vm._s(_vm.currentDateFormatted))])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c("div", {
    staticClass: "row mb-4"
  }, [_c("div", {
    staticClass: "col-xl-3 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "card h-100 py-2 border-0 shadow-sm",
    staticStyle: {
      "border-left": "4px solid #4e73df !important",
      "border-radius": "10px"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row no-gutters align-items-center"
  }, [_c("div", {
    staticClass: "col mr-2"
  }, [_c("div", {
    staticClass: "text-xs font-weight-bold text-muted mb-1",
    staticStyle: {
      "font-size": "0.8rem"
    }
  }, [_vm._v("Pacientes Activos")]), _vm._v(" "), _c("div", {
    staticClass: "h3 mb-0 font-weight-bold text-gray-800"
  }, [_vm._v(_vm._s(_vm.dashboardData.pacientesActivos || 0))]), _vm._v(" "), _c("div", {
    staticClass: "text-xs text-muted mt-1"
  }, [_vm._v("Total en sistema")])]), _vm._v(" "), _vm._m(1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "card h-100 py-2 border-0 shadow-sm",
    staticStyle: {
      "border-left": "4px solid #858796 !important",
      "border-radius": "10px"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row no-gutters align-items-center"
  }, [_c("div", {
    staticClass: "col mr-2"
  }, [_c("div", {
    staticClass: "text-xs font-weight-bold text-muted mb-1",
    staticStyle: {
      "font-size": "0.8rem"
    }
  }, [_vm._v("Citas de Hoy")]), _vm._v(" "), _c("div", {
    staticClass: "h3 mb-0 font-weight-bold text-gray-800"
  }, [_vm._v(_vm._s(_vm.dashboardData.citasHoy ? _vm.dashboardData.citasHoy.length : 0))]), _vm._v(" "), _c("div", {
    staticClass: "text-xs text-muted mt-1"
  }, [_vm._v("0 completadas")])]), _vm._v(" "), _vm._m(2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "card h-100 py-2 border-0 shadow-sm",
    staticStyle: {
      "border-left": "4px solid #1cc88a !important",
      "border-radius": "10px"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row no-gutters align-items-center"
  }, [_c("div", {
    staticClass: "col mr-2"
  }, [_c("div", {
    staticClass: "text-xs font-weight-bold text-muted mb-1",
    staticStyle: {
      "font-size": "0.8rem"
    }
  }, [_vm._v("Ingresos del Día")]), _vm._v(" "), _c("div", {
    staticClass: "h3 mb-0 font-weight-bold text-gray-800"
  }, [_vm._v("S/ " + _vm._s(_vm.dashboardData.ingresosHoy || 0))])]), _vm._v(" "), _vm._m(3)])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "card h-100 py-2 border-0 shadow-sm",
    staticStyle: {
      "border-left": "4px solid #e74a3b !important",
      "border-radius": "10px"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row no-gutters align-items-center"
  }, [_c("div", {
    staticClass: "col mr-2"
  }, [_c("div", {
    staticClass: "text-xs font-weight-bold text-muted mb-1",
    staticStyle: {
      "font-size": "0.8rem"
    }
  }, [_vm._v("Alertas Activas")]), _vm._v(" "), _c("div", {
    staticClass: "h3 mb-0 font-weight-bold text-gray-800"
  }, [_vm._v(_vm._s(_vm.dashboardData.totalAlertas || 0))]), _vm._v(" "), _c("div", {
    staticClass: "text-xs text-danger mt-1"
  }, [_vm._v(_vm._s(_vm.dashboardData.alertasSOS || 0) + " SOS, " + _vm._s(_vm.dashboardData.alertasDeudas || 0) + " sin pagar")])]), _vm._v(" "), _vm._m(4)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-4"
  }, [_c("div", {
    staticClass: "col-xl-4 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100",
    staticStyle: {
      "border-radius": "10px"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "row text-center mt-4 pt-2"
  }, [_c("div", {
    staticClass: "col-6 text-left"
  }, [_c("small", {
    staticClass: "text-muted d-block font-weight-bold"
  }, [_vm._v("Activos")]), _vm._v(" "), _c("span", {
    staticClass: "font-weight-bold text-dark",
    staticStyle: {
      "font-size": "1.25rem"
    }
  }, [_vm._v(_vm._s(_vm.dashboardData.pacientesActivos || 0))])]), _vm._v(" "), _vm._m(6)])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-4 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100",
    staticStyle: {
      "border-radius": "10px"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "row text-center mt-4 pt-2"
  }, [_c("div", {
    staticClass: "col-6 text-left"
  }, [_c("small", {
    staticClass: "text-muted d-block font-weight-bold"
  }, [_vm._v("Hoy")]), _vm._v(" "), _c("span", {
    staticClass: "font-weight-bold text-dark",
    staticStyle: {
      "font-size": "1.25rem"
    }
  }, [_vm._v(_vm._s(_vm.dashboardData.citasHoy ? _vm.dashboardData.citasHoy.length : 0))])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 text-left"
  }, [_c("small", {
    staticClass: "text-muted d-block font-weight-bold"
  }, [_vm._v("Pendientes")]), _vm._v(" "), _c("span", {
    staticClass: "font-weight-bold text-warning",
    staticStyle: {
      "font-size": "1.25rem"
    }
  }, [_vm._v(_vm._s(_vm.citasPendientes))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-4 col-md-12 mb-4"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm h-100",
    staticStyle: {
      "border-radius": "10px"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "row text-center mt-4 pt-2"
  }, [_c("div", {
    staticClass: "col-6 text-left"
  }, [_c("small", {
    staticClass: "text-muted d-block font-weight-bold"
  }, [_vm._v("Ingresos hoy")]), _vm._v(" "), _c("span", {
    staticClass: "font-weight-bold text-success",
    staticStyle: {
      "font-size": "1.25rem"
    }
  }, [_vm._v("S/ " + _vm._s(_vm.dashboardData.ingresosHoy || 0))])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 text-left"
  }, [_c("small", {
    staticClass: "text-muted d-block font-weight-bold"
  }, [_vm._v("Por cobrar")]), _vm._v(" "), _c("span", {
    staticClass: "font-weight-bold text-warning",
    staticStyle: {
      "font-size": "1.25rem"
    }
  }, [_vm._v(_vm._s(_vm.dashboardData.alertasDeudas || 0))])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row row-cols-1 row-cols-md-2",
    staticStyle: {
      display: "flex"
    }
  }, [_c("div", {
    staticClass: "col-md-6 mb-4 d-flex"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm w-100",
    staticStyle: {
      "border-radius": "10px"
    }
  }, [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.dashboardData.citasHoy && _vm.dashboardData.citasHoy.length > 0 ? _c("div", [_c("div", {
    staticClass: "citas-container pr-2",
    staticStyle: {
      "max-height": "400px",
      "overflow-y": "auto"
    }
  }, _vm._l(_vm.dashboardData.citasHoy, function (cita, index) {
    return _c("div", {
      key: index,
      staticClass: "mb-3 border-bottom pb-3"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center"
    }, [_c("div", [cita.patient ? _c("p", {
      staticClass: "mb-0 font-weight-bold text-dark"
    }, [_vm._v(_vm._s(cita.patient.nombres) + " " + _vm._s(cita.patient.name))]) : _c("p", {
      staticClass: "mb-0 font-weight-bold text-dark"
    }, [_vm._v("Paciente Sin Nombre")]), _vm._v(" "), _c("small", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(cita.motivo || "Cita Programada"))])]), _vm._v(" "), _c("div", {
      staticClass: "text-right"
    }, [_c("span", {
      staticClass: "badge badge-primary px-2 py-1 mb-1"
    }, [_vm._v(_vm._s(cita.time || cita.date))])])])]);
  }), 0)]) : _c("div", {
    staticClass: "text-center py-5 d-flex flex-column align-items-center justify-content-center h-100"
  }, [_c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("No hay citas pendientes para hoy.")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-4 d-flex"
  }, [_c("div", {
    staticClass: "card border-0 shadow-sm w-100",
    staticStyle: {
      "border-radius": "10px"
    }
  }, [_vm._m(10), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.dashboardData.totalAlertas > 0 ? _c("div", [_c("div", {
    staticClass: "alertas-container pr-2",
    staticStyle: {
      "max-height": "400px",
      "overflow-y": "auto"
    }
  }, [_vm.dashboardData.deudas && _vm.dashboardData.deudas.length > 0 ? _c("div", [_c("h6", {
    staticClass: "text-warning font-weight-bold border-bottom pb-2 mb-3"
  }, [_vm._v("Alertas Deudas Recientes")]), _vm._v(" "), _c("ul", {
    staticClass: "list-group list-group-flush"
  }, _vm._l(_vm.dashboardData.deudas, function (deuda, i) {
    return _c("li", {
      key: "deuda-" + i,
      staticClass: "list-group-item px-0"
    }, [_c("div", {
      staticClass: "d-flex w-100 justify-content-between"
    }, [_c("h6", {
      staticClass: "mb-1 text-dark font-weight-bold"
    }, [_vm._v(_vm._s(deuda.nombres) + " " + _vm._s(deuda.name))]), _vm._v(" "), _c("small", {
      staticClass: "text-danger font-weight-bold"
    }, [_vm._v("S/ " + _vm._s(deuda.monto))])]), _vm._v(" "), _c("p", {
      staticClass: "mb-1 text-muted small"
    }, [_c("i", {
      staticClass: "fas fa-file-invoice-dollar mr-1"
    }), _vm._v(_vm._s(deuda.motivo || "Membresía / Servicio") + "\n                                        ")]), _vm._v(" "), _c("small", {
      staticClass: "text-muted"
    }, [_c("i", {
      staticClass: "far fa-calendar-alt mr-1"
    }), _vm._v("Vence: " + _vm._s(deuda.fecha))])]);
  }), 0)]) : _vm._e()])]) : _c("div", {
    staticClass: "text-center py-5 d-flex flex-column align-items-center justify-content-center h-100"
  }, [_c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("Sin alertas activas hoy.")])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("i", {
    staticClass: "far fa-bell text-muted",
    staticStyle: {
      "font-size": "1.2rem",
      cursor: "pointer"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "icon-circle bg-primary-light"
  }, [_c("i", {
    staticClass: "fas fa-users text-primary"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "icon-circle bg-secondary-light"
  }, [_c("i", {
    staticClass: "far fa-calendar text-secondary",
    staticStyle: {
      color: "#858796"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "icon-circle bg-success-light"
  }, [_c("i", {
    staticClass: "fas fa-dollar-sign text-success"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "icon-circle bg-danger-light"
  }, [_c("i", {
    staticClass: "fas fa-exclamation-triangle text-danger"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex align-items-center mb-3"
  }, [_c("div", {
    staticClass: "icon-circle bg-primary-light mr-3"
  }, [_c("i", {
    staticClass: "fas fa-users text-primary",
    staticStyle: {
      "font-size": "1.1rem"
    }
  })]), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "mb-0 font-weight-bold text-dark"
  }, [_vm._v("Pacientes")]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Gestión de pacientes")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-6 text-left"
  }, [_c("small", {
    staticClass: "text-muted d-block font-weight-bold"
  }, [_vm._v("En sistema")]), _vm._v(" "), _c("i", {
    staticClass: "fas fa-check text-success mt-2",
    staticStyle: {
      "font-size": "1.2rem"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex align-items-center mb-3"
  }, [_c("div", {
    staticClass: "icon-circle bg-info-light mr-3"
  }, [_c("i", {
    staticClass: "far fa-calendar text-info",
    staticStyle: {
      "font-size": "1.1rem",
      color: "#36b9cc !important"
    }
  })]), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "mb-0 font-weight-bold text-dark"
  }, [_vm._v("Citas")]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Agendamiento")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex align-items-center mb-3"
  }, [_c("div", {
    staticClass: "icon-circle bg-success-light mr-3"
  }, [_c("i", {
    staticClass: "fas fa-credit-card text-success",
    staticStyle: {
      "font-size": "1.1rem"
    }
  })]), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "mb-0 font-weight-bold text-dark"
  }, [_vm._v("Caja")]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Pagos y cobros")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-bottom-0 pt-4 pb-0"
  }, [_c("h6", {
    staticClass: "m-0 font-weight-bold text-dark"
  }, [_c("i", {
    staticClass: "far fa-clock text-primary mr-2"
  }), _vm._v(" Próximas Citas\n                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-bottom-0 pt-4 pb-0 d-flex align-items-center"
  }, [_c("i", {
    staticClass: "fas fa-exclamation-triangle text-danger mr-2"
  }), _vm._v(" "), _c("h6", {
    staticClass: "m-0 font-weight-bold text-dark"
  }, [_vm._v("Alertas Activas")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=style&index=0&id=e8b0c538&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=style&index=0&id=e8b0c538&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.icon-circle[data-v-e8b0c538] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 2.75rem;\r\n    height: 2.75rem;\r\n    border-radius: 10px;\n}\n.bg-primary-light[data-v-e8b0c538] { background-color: #e3e6f0;\n}\n.bg-secondary-light[data-v-e8b0c538] { background-color: #f8f9fc;\n}\n.bg-success-light[data-v-e8b0c538] { background-color: #e3fbed;\n}\n.bg-danger-light[data-v-e8b0c538] { background-color: #fbe3e4;\n}\n.bg-info-light[data-v-e8b0c538] { background-color: #eaf3ff;\n}\r\n\r\n/* Custom scrollbar para listas largas */\n.citas-container[data-v-e8b0c538]::-webkit-scrollbar,\r\n.alertas-container[data-v-e8b0c538]::-webkit-scrollbar {\r\n    width: 6px;\n}\n.citas-container[data-v-e8b0c538]::-webkit-scrollbar-track,\r\n.alertas-container[data-v-e8b0c538]::-webkit-scrollbar-track {\r\n    background: #f1f1f1; \r\n    border-radius: 4px;\n}\n.citas-container[data-v-e8b0c538]::-webkit-scrollbar-thumb,\r\n.alertas-container[data-v-e8b0c538]::-webkit-scrollbar-thumb {\r\n    background: #d1d3e2; \r\n    border-radius: 4px;\n}\n.citas-container[data-v-e8b0c538]::-webkit-scrollbar-thumb:hover,\r\n.alertas-container[data-v-e8b0c538]::-webkit-scrollbar-thumb:hover {\r\n    background: #b7b9cc;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=style&index=0&id=e8b0c538&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=style&index=0&id=e8b0c538&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeDashboard_vue_vue_type_style_index_0_id_e8b0c538_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeDashboard.vue?vue&type=style&index=0&id=e8b0c538&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=style&index=0&id=e8b0c538&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeDashboard_vue_vue_type_style_index_0_id_e8b0c538_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeDashboard_vue_vue_type_style_index_0_id_e8b0c538_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeDashboard_vue_vue_type_template_id_e8b0c538_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeDashboard.vue?vue&type=template&id=e8b0c538&scoped=true */ "./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=template&id=e8b0c538&scoped=true");
/* harmony import */ var _HomeDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeDashboard.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _HomeDashboard_vue_vue_type_style_index_0_id_e8b0c538_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeDashboard.vue?vue&type=style&index=0&id=e8b0c538&scoped=true&lang=css */ "./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=style&index=0&id=e8b0c538&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomeDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeDashboard_vue_vue_type_template_id_e8b0c538_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeDashboard_vue_vue_type_template_id_e8b0c538_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e8b0c538",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeDashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=template&id=e8b0c538&scoped=true":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=template&id=e8b0c538&scoped=true ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeDashboard_vue_vue_type_template_id_e8b0c538_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeDashboard_vue_vue_type_template_id_e8b0c538_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeDashboard_vue_vue_type_template_id_e8b0c538_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeDashboard.vue?vue&type=template&id=e8b0c538&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=template&id=e8b0c538&scoped=true");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=style&index=0&id=e8b0c538&scoped=true&lang=css":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=style&index=0&id=e8b0c538&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeDashboard_vue_vue_type_style_index_0_id_e8b0c538_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeDashboard.vue?vue&type=style&index=0&id=e8b0c538&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/dashboard/HomeDashboard.vue?vue&type=style&index=0&id=e8b0c538&scoped=true&lang=css");


/***/ })

}]);