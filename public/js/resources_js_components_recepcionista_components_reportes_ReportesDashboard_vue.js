"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_recepcionista_components_reportes_ReportesDashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/dist/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.mjs");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_1__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ReportesDashboard',
  components: {
    Pie: vue_chartjs__WEBPACK_IMPORTED_MODULE_3__.Pie
  },
  data: function data() {
    return {
      selectedDate: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM'),
      currentTab: 'clinico',
      loading: {
        altas: false,
        sexo: false,
        medicamentos: false,
        continuidad: false,
        conteoProfesional: false,
        especialidad: false,
        reprogramaciones: false,
        mediosPago: false,
        ingresos: false
      },
      data: {
        altas: [],
        sexo: [],
        medicamentos: [],
        continuidad: [],
        conteoProfesional: [],
        especialidad: [],
        reprogramaciones: [],
        mediosPago: [],
        ingresos: []
      },
      chartData: {
        sexo: null,
        especialidad: null,
        mediosPago: null
      },
      pieOptions: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: 20
        },
        plugins: {
          legend: {
            position: 'right',
            labels: {
              usePointStyle: true,
              padding: 20,
              font: {
                family: "'Inter', sans-serif",
                size: 12
              },
              color: '#475569'
            }
          },
          tooltip: {
            backgroundColor: '#0f172a',
            titleFont: {
              family: "'Inter', sans-serif",
              size: 13
            },
            bodyFont: {
              family: "'Inter', sans-serif",
              size: 13
            },
            padding: 10,
            cornerRadius: 8,
            displayColors: true
          },
          datalabels: {
            color: '#fff',
            font: {
              weight: 'bold',
              size: 11
            },
            formatter: function formatter(value, ctx) {
              var sum = 0;
              var dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map(function (data) {
                sum += Number(data);
              });
              var percentage = (value * 100 / sum).toFixed(0) + "%";
              if (value == 0) return null;
              return percentage;
            }
          }
        }
      },
      colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#14b8a6', '#f97316', '#6366f1']
    };
  },
  computed: {
    totalPacientesAtendidos: function totalPacientesAtendidos() {
      if (!this.data.continuidad) return 0;
      var totalRow = this.data.continuidad.find(function (item) {
        return item.condicion === 'Atendidos únicos';
      });
      return totalRow ? totalRow.cantidad : 0;
    },
    totalAltas: function totalAltas() {
      if (!this.data.altas) return 0;
      return this.data.altas.reduce(function (sum, item) {
        return sum + Number(item.altas);
      }, 0);
    },
    totalNuevos: function totalNuevos() {
      if (!this.data.continuidad) return 0;
      var nuevosRow = this.data.continuidad.find(function (item) {
        return item.condicion === 'Nuevos';
      });
      return nuevosRow ? nuevosRow.cantidad : 0;
    },
    totalReprogramaciones: function totalReprogramaciones() {
      if (!this.data.reprogramaciones) return 0;
      return this.data.reprogramaciones.reduce(function (sum, item) {
        return sum + Number(item.total);
      }, 0);
    },
    totalIngresos: function totalIngresos() {
      if (!this.data.ingresos) return 0;
      return this.data.ingresos.reduce(function (sum, item) {
        return item.servicio !== 'EGRESOS (Gastos/Salidas)' ? sum + Number(item.monto_total) : sum;
      }, 0);
    },
    topMedicamentos: function topMedicamentos() {
      if (!this.data.medicamentos) return [];
      // Get top 8 to avoid massive table
      return this.data.medicamentos.slice(0, 8);
    },
    maxMedicamentosVeces: function maxMedicamentosVeces() {
      if (this.topMedicamentos.length === 0) return 1;
      return Math.max.apply(Math, _toConsumableArray(this.topMedicamentos.map(function (m) {
        return Number(m.veces);
      })));
    }
  },
  mounted: function mounted() {
    this.fetchData();
  },
  methods: {
    getMedProportion: function getMedProportion(veces) {
      if (this.maxMedicamentosVeces === 0) return 0;
      return Math.round(Number(veces) / this.maxMedicamentosVeces * 100);
    },
    fetchData: function fetchData() {
      var dateParam = "".concat(this.selectedDate, "-01");
      this.fetchEndpoint('altas', dateParam);
      this.fetchEndpoint('sexo', dateParam, this.processSexoChart);
      this.fetchEndpoint('medicamentos', dateParam);
      this.fetchEndpoint('continuidad', dateParam);
      this.fetchEndpoint('conteoProfesional', dateParam);
      this.fetchEndpoint('especialidad', dateParam, this.processEspecialidadChart);
      this.fetchEndpoint('reprogramaciones', dateParam);
      this.fetchEndpoint('mediosPago', dateParam, this.processMediosPagoChart);
      this.fetchEndpoint('ingresos', dateParam);
    },
    fetchEndpoint: function fetchEndpoint(endpoint, date) {
      var _this = this;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.loading[endpoint] = true;
      var urlMap = {
        'altas': '/api/reportes/altas',
        'sexo': '/api/reportes/sexo',
        'medicamentos': '/api/reportes/medicamentos',
        'continuidad': '/api/reportes/continuidad',
        'conteoProfesional': '/api/reportes/conteo-profesional',
        'especialidad': '/api/reportes/especialidad',
        'reprogramaciones': '/api/reportes/reprogramaciones',
        'mediosPago': '/api/reportes/medios-pago',
        'ingresos': '/api/reportes/ingresos'
      };
      this.axios.get(urlMap[endpoint], {
        params: {
          date: date
        }
      }).then(function (res) {
        _this.data[endpoint] = res.data;
        if (callback) callback(res.data);
      })["catch"](function (err) {
        console.error("Error fetching ".concat(endpoint, ":"), err);
      })["finally"](function () {
        _this.loading[endpoint] = false;
      });
    },
    processSexoChart: function processSexoChart(data) {
      this.chartData.sexo = {
        labels: data.map(function (item) {
          return item.genero;
        }),
        datasets: [{
          data: data.map(function (item) {
            return item.cantidad;
          }),
          backgroundColor: ['#f43f5e', '#3b82f6', '#8b5cf6', '#10b981'],
          borderWidth: 0,
          hoverOffset: 4
        }]
      };
    },
    processEspecialidadChart: function processEspecialidadChart(data) {
      this.chartData.especialidad = {
        labels: data.map(function (item) {
          return item.especialidad;
        }),
        datasets: [{
          data: data.map(function (item) {
            return Number(item.atendidos);
          }),
          backgroundColor: this.colors,
          borderWidth: 0,
          hoverOffset: 4
        }]
      };
    },
    processMediosPagoChart: function processMediosPagoChart(data) {
      this.chartData.mediosPago = {
        labels: data.map(function (item) {
          return item.metodo_pago;
        }),
        datasets: [{
          data: data.map(function (item) {
            return parseFloat(item.monto);
          }),
          backgroundColor: this.colors,
          borderWidth: 0,
          hoverOffset: 4
        }]
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=template&id=f945222a&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=template&id=f945222a&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "reportes-dashboard container-fluid px-0"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap justify-content-between align-items-center mb-4"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center mt-3 mt-md-0 gap-3"
  }, [_c("div", {
    staticClass: "input-group",
    staticStyle: {
      width: "auto",
      background: "white",
      "border-radius": "8px",
      "box-shadow": "0 1px 3px rgba(0,0,0,0.05)"
    }
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedDate,
      expression: "selectedDate"
    }],
    staticClass: "form-control border-0",
    staticStyle: {
      "border-radius": "0 8px 8px 0",
      "box-shadow": "none",
      "font-weight": "500",
      color: "#475569"
    },
    attrs: {
      type: "month"
    },
    domProps: {
      value: _vm.selectedDate
    },
    on: {
      change: _vm.fetchData,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.selectedDate = $event.target.value;
      }
    }
  })])])]), _vm._v(" "), _c("ul", {
    staticClass: "nav nav-pills custom-tabs mb-4",
    attrs: {
      id: "reportes-tabs",
      role: "tablist"
    }
  }, [_c("li", {
    staticClass: "nav-item flex-fill text-center",
    attrs: {
      role: "presentation"
    }
  }, [_c("a", {
    staticClass: "nav-link active",
    attrs: {
      id: "clinico-tab",
      "data-bs-toggle": "tab",
      href: "#clinico",
      role: "tab"
    },
    on: {
      click: function click($event) {
        _vm.currentTab = "clinico";
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-stethoscope mr-2"
  }), _vm._v(" Clínico\n      ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item flex-fill text-center",
    attrs: {
      role: "presentation"
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "productividad-tab",
      "data-bs-toggle": "tab",
      href: "#productividad",
      role: "tab"
    },
    on: {
      click: function click($event) {
        _vm.currentTab = "productividad";
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-chart-line mr-2"
  }), _vm._v(" Productividad\n      ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item flex-fill text-center",
    attrs: {
      role: "presentation"
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "financiero-tab",
      "data-bs-toggle": "tab",
      href: "#financiero",
      role: "tab"
    },
    on: {
      click: function click($event) {
        _vm.currentTab = "financiero";
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-dollar-sign mr-2"
  }), _vm._v(" Financiero\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-content",
    attrs: {
      id: "reportes-tabContent"
    }
  }, [_c("div", {
    staticClass: "tab-pane fade show active",
    attrs: {
      id: "clinico",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row mb-4"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("div", {
    staticClass: "kpi-card border-blue"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "kpi-details"
  }, [_c("h3", {
    staticClass: "kpi-value"
  }, [_vm._v(_vm._s(_vm.totalPacientesAtendidos))]), _vm._v(" "), _c("span", {
    staticClass: "kpi-label"
  }, [_vm._v("Pacientes Atendidos")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("div", {
    staticClass: "kpi-card border-green"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "kpi-details"
  }, [_c("h3", {
    staticClass: "kpi-value"
  }, [_vm._v(_vm._s(_vm.totalAltas))]), _vm._v(" "), _c("span", {
    staticClass: "kpi-label"
  }, [_vm._v("Altas este mes")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-5 mb-4"
  }, [_c("div", {
    staticClass: "custom-card h-100"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "card-body position-relative d-flex justify-content-center align-items-center",
    staticStyle: {
      "min-height": "300px"
    }
  }, [_vm.loading.sexo ? _c("div", {
    staticClass: "spinner-border text-primary",
    attrs: {
      role: "status"
    }
  }) : !_vm.chartData.sexo || _vm.chartData.sexo.labels.length === 0 ? _c("div", {
    staticClass: "text-muted"
  }, [_vm._v("No hay datos suficientes")]) : _c("div", {
    staticStyle: {
      position: "relative",
      height: "100%",
      width: "100%",
      "max-height": "280px",
      display: "flex",
      "justify-content": "center"
    }
  }, [_c("Pie", {
    attrs: {
      "chart-data": _vm.chartData.sexo,
      "chart-options": _vm.pieOptions
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-7 mb-4"
  }, [_c("div", {
    staticClass: "custom-card h-100"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "card-body p-0"
  }, [_vm.loading.medicamentos ? _c("div", {
    staticClass: "d-flex justify-content-center my-5"
  }, [_c("div", {
    staticClass: "spinner-border text-primary",
    attrs: {
      role: "status"
    }
  })]) : _vm.data.medicamentos.length === 0 ? _c("div", {
    staticClass: "text-center text-muted my-5"
  }, [_vm._v("No hay datos suficientes")]) : _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table custom-table mb-0"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", _vm._l(_vm.topMedicamentos, function (med, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "font-weight-bold align-middle",
      staticStyle: {
        color: "#334155",
        "font-size": "0.9rem"
      }
    }, [_vm._v(_vm._s(med.medicamento))]), _vm._v(" "), _c("td", {
      staticClass: "text-center font-weight-bold align-middle",
      staticStyle: {
        color: "#0f172a"
      }
    }, [_vm._v(_vm._s(med.veces))]), _vm._v(" "), _c("td", {
      staticClass: "align-middle",
      staticStyle: {
        width: "30%"
      }
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", {
      staticClass: "progress w-100",
      staticStyle: {
        height: "6px",
        "border-radius": "10px",
        "background-color": "#f1f5f9"
      }
    }, [_c("div", {
      staticClass: "progress-bar bg-primary",
      style: "width: ".concat(_vm.getMedProportion(med.veces), "%; border-radius: 10px;"),
      attrs: {
        role: "progressbar"
      }
    })]), _vm._v(" "), _c("span", {
      staticClass: "ml-2 text-muted",
      staticStyle: {
        "font-size": "0.8rem",
        "min-width": "35px"
      }
    }, [_vm._v(_vm._s(_vm.getMedProportion(med.veces)) + "%")])])])]);
  }), 0)])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade",
    attrs: {
      id: "productividad",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row mb-4"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("div", {
    staticClass: "kpi-card border-orange"
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "kpi-details"
  }, [_c("h3", {
    staticClass: "kpi-value"
  }, [_vm._v(_vm._s(_vm.totalNuevos))]), _vm._v(" "), _c("span", {
    staticClass: "kpi-label"
  }, [_vm._v("Nuevos Ingresos")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("div", {
    staticClass: "kpi-card border-indigo"
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "kpi-details"
  }, [_c("h3", {
    staticClass: "kpi-value"
  }, [_vm._v(_vm._s(_vm.totalReprogramaciones))]), _vm._v(" "), _c("span", {
    staticClass: "kpi-label"
  }, [_vm._v("Reprogramaciones")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-5 mb-4"
  }, [_c("div", {
    staticClass: "custom-card h-100"
  }, [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "card-body position-relative d-flex justify-content-center align-items-center",
    staticStyle: {
      "min-height": "300px"
    }
  }, [_vm.loading.especialidad ? _c("div", {
    staticClass: "spinner-border text-primary",
    attrs: {
      role: "status"
    }
  }) : !_vm.chartData.especialidad || _vm.chartData.especialidad.labels.length === 0 ? _c("div", {
    staticClass: "text-muted"
  }, [_vm._v("No hay datos suficientes")]) : _c("div", {
    staticStyle: {
      position: "relative",
      height: "100%",
      width: "100%",
      "max-height": "280px",
      display: "flex",
      "justify-content": "center"
    }
  }, [_vm.currentTab === "productividad" ? _c("Pie", {
    attrs: {
      "chart-data": _vm.chartData.especialidad,
      "chart-options": _vm.pieOptions
    }
  }) : _vm._e()], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-7 mb-4"
  }, [_c("div", {
    staticClass: "custom-card h-100"
  }, [_vm._m(10), _vm._v(" "), _c("div", {
    staticClass: "card-body p-0"
  }, [_vm.loading.conteoProfesional ? _c("div", {
    staticClass: "d-flex justify-content-center my-5"
  }, [_c("div", {
    staticClass: "spinner-border text-primary",
    attrs: {
      role: "status"
    }
  })]) : _vm.data.conteoProfesional.length === 0 ? _c("div", {
    staticClass: "text-center text-muted my-5"
  }, [_vm._v("No hay datos suficientes")]) : _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table custom-table mb-0"
  }, [_vm._m(11), _vm._v(" "), _c("tbody", _vm._l(_vm.data.conteoProfesional, function (prof, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "font-weight-bold align-middle text-capitalize",
      staticStyle: {
        color: "#334155",
        "font-size": "0.9rem"
      }
    }, [_vm._v(_vm._s(prof.profesional.toLowerCase()))]), _vm._v(" "), _c("td", {
      staticClass: "text-center font-weight-bold align-middle",
      staticStyle: {
        color: "#0f172a"
      }
    }, [_vm._v(_vm._s(prof.atenciones))]), _vm._v(" "), _c("td", {
      staticClass: "text-center font-weight-bold align-middle",
      staticStyle: {
        color: "#0f172a"
      }
    }, [_vm._v(_vm._s(prof.atendidos))]), _vm._v(" "), _c("td", {
      staticClass: "align-middle",
      staticStyle: {
        width: "30%"
      }
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", {
      staticClass: "progress w-100",
      staticStyle: {
        height: "6px",
        "border-radius": "10px",
        "background-color": "#f1f5f9"
      }
    }, [_c("div", {
      staticClass: "progress-bar bg-info",
      style: "width: ".concat(parseFloat(prof.porcentaje), "%; border-radius: 10px;"),
      attrs: {
        role: "progressbar"
      }
    })]), _vm._v(" "), _c("span", {
      staticClass: "ml-2 text-muted",
      staticStyle: {
        "font-size": "0.8rem",
        "min-width": "45px"
      }
    }, [_vm._v(_vm._s(prof.porcentaje))])])])]);
  }), 0)])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade",
    attrs: {
      id: "financiero",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row mb-4"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("div", {
    staticClass: "kpi-card border-green"
  }, [_vm._m(12), _vm._v(" "), _c("div", {
    staticClass: "kpi-details"
  }, [_c("h3", {
    staticClass: "kpi-value"
  }, [_vm._v("S/ " + _vm._s(_vm.totalIngresos.toFixed(2)))]), _vm._v(" "), _c("span", {
    staticClass: "kpi-label"
  }, [_vm._v("Ingresos Totales")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-5 mb-4"
  }, [_c("div", {
    staticClass: "custom-card h-100"
  }, [_vm._m(13), _vm._v(" "), _c("div", {
    staticClass: "card-body position-relative d-flex justify-content-center align-items-center",
    staticStyle: {
      "min-height": "300px"
    }
  }, [_vm.loading.mediosPago ? _c("div", {
    staticClass: "spinner-border text-primary",
    attrs: {
      role: "status"
    }
  }) : !_vm.chartData.mediosPago || _vm.chartData.mediosPago.labels.length === 0 ? _c("div", {
    staticClass: "text-muted"
  }, [_vm._v("No hay datos suficientes")]) : _c("div", {
    staticStyle: {
      position: "relative",
      height: "100%",
      width: "100%",
      "max-height": "280px",
      display: "flex",
      "justify-content": "center"
    }
  }, [_vm.currentTab === "financiero" ? _c("Pie", {
    attrs: {
      "chart-data": _vm.chartData.mediosPago,
      "chart-options": _vm.pieOptions
    }
  }) : _vm._e()], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-7 mb-4"
  }, [_c("div", {
    staticClass: "custom-card h-100"
  }, [_vm._m(14), _vm._v(" "), _c("div", {
    staticClass: "card-body p-0"
  }, [_vm.loading.ingresos ? _c("div", {
    staticClass: "d-flex justify-content-center my-5"
  }, [_c("div", {
    staticClass: "spinner-border text-primary",
    attrs: {
      role: "status"
    }
  })]) : _vm.data.ingresos.length === 0 ? _c("div", {
    staticClass: "text-center text-muted my-5"
  }, [_vm._v("No hay datos suficientes")]) : _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table custom-table mb-0"
  }, [_vm._m(15), _vm._v(" "), _c("tbody", _vm._l(_vm.data.ingresos, function (ingreso, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "font-weight-bold align-middle",
      staticStyle: {
        color: "#334155",
        "font-size": "0.9rem"
      }
    }, [_c("span", {
      "class": {
        "text-danger": ingreso.servicio === "EGRESOS (Gastos/Salidas)"
      }
    }, [_vm._v("\n                          " + _vm._s(ingreso.servicio) + "\n                        ")])]), _vm._v(" "), _c("td", {
      staticClass: "text-center font-weight-bold align-middle",
      staticStyle: {
        color: "#0f172a"
      }
    }, [_vm._v(_vm._s(ingreso.registros))]), _vm._v(" "), _c("td", {
      staticClass: "text-right font-weight-bold align-middle",
      "class": {
        "text-danger": ingreso.servicio === "EGRESOS (Gastos/Salidas)",
        "text-success": ingreso.servicio !== "EGRESOS (Gastos/Salidas)"
      }
    }, [_vm._v("\n                         " + _vm._s(parseFloat(ingreso.monto_total).toFixed(2)) + "\n                      ")])]);
  }), 0)])])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h3", {
    staticClass: "mb-0 font-weight-bold",
    staticStyle: {
      color: "#1e293b"
    }
  }, [_vm._v("Reportes")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-0",
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._v("Análisis clínico, productividad y financiero")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-prepend"
  }, [_c("span", {
    staticClass: "input-group-text bg-white border-0 text-muted",
    staticStyle: {
      "border-radius": "8px 0 0 8px"
    }
  }, [_c("i", {
    staticClass: "fas fa-calendar-alt"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "kpi-icon text-primary bg-primary-light"
  }, [_c("i", {
    staticClass: "fas fa-users"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "kpi-icon text-success bg-success-light"
  }, [_c("i", {
    staticClass: "fas fa-user-check"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-0 pt-4 pb-0"
  }, [_c("h6", {
    staticClass: "font-weight-bold",
    staticStyle: {
      color: "#1e293b"
    }
  }, [_vm._v("Distribución por Género")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-0 pt-4 pb-0"
  }, [_c("h6", {
    staticClass: "font-weight-bold",
    staticStyle: {
      color: "#1e293b"
    }
  }, [_vm._v("Medicamentos más Frecuentes")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "border-top-0 border-bottom-0 text-muted",
    staticStyle: {
      "font-weight": "500"
    }
  }, [_vm._v("Medicamento")]), _vm._v(" "), _c("th", {
    staticClass: "border-top-0 border-bottom-0 text-muted text-center",
    staticStyle: {
      "font-weight": "500"
    }
  }, [_vm._v("Veces")]), _vm._v(" "), _c("th", {
    staticClass: "border-top-0 border-bottom-0 text-muted text-center",
    staticStyle: {
      "font-weight": "500"
    }
  }, [_vm._v("Proporción")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "kpi-icon text-warning bg-warning-light"
  }, [_c("i", {
    staticClass: "fas fa-user-plus"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "kpi-icon text-indigo bg-indigo-light"
  }, [_c("i", {
    staticClass: "fas fa-sync-alt"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-0 pt-4 pb-0"
  }, [_c("h6", {
    staticClass: "font-weight-bold",
    staticStyle: {
      color: "#1e293b"
    }
  }, [_vm._v("Atenciones por Especialidad")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-0 pt-4 pb-0"
  }, [_c("h6", {
    staticClass: "font-weight-bold",
    staticStyle: {
      color: "#1e293b"
    }
  }, [_vm._v("Productividad por Profesional")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "border-top-0 border-bottom-0 text-muted",
    staticStyle: {
      "font-weight": "500"
    }
  }, [_vm._v("Profesional")]), _vm._v(" "), _c("th", {
    staticClass: "border-top-0 border-bottom-0 text-muted text-center",
    staticStyle: {
      "font-weight": "500"
    }
  }, [_vm._v("Atenciones")]), _vm._v(" "), _c("th", {
    staticClass: "border-top-0 border-bottom-0 text-muted text-center",
    staticStyle: {
      "font-weight": "500"
    }
  }, [_vm._v("Atendidos")]), _vm._v(" "), _c("th", {
    staticClass: "border-top-0 border-bottom-0 text-muted text-center",
    staticStyle: {
      "font-weight": "500"
    }
  }, [_vm._v("% del Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "kpi-icon text-success bg-success-light"
  }, [_c("i", {
    staticClass: "fas fa-coins"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-0 pt-4 pb-0"
  }, [_c("h6", {
    staticClass: "font-weight-bold",
    staticStyle: {
      color: "#1e293b"
    }
  }, [_vm._v("Medios de Pago")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-0 pt-4 pb-0"
  }, [_c("h6", {
    staticClass: "font-weight-bold",
    staticStyle: {
      color: "#1e293b"
    }
  }, [_vm._v("Ingresos por Servicio")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "border-top-0 border-bottom-0 text-muted",
    staticStyle: {
      "font-weight": "500"
    }
  }, [_vm._v("Servicio")]), _vm._v(" "), _c("th", {
    staticClass: "border-top-0 border-bottom-0 text-muted text-center",
    staticStyle: {
      "font-weight": "500"
    }
  }, [_vm._v("Registros")]), _vm._v(" "), _c("th", {
    staticClass: "border-top-0 border-bottom-0 text-muted text-right",
    staticStyle: {
      "font-weight": "500"
    }
  }, [_vm._v("Monto (S/)")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=style&index=0&id=f945222a&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=style&index=0&id=f945222a&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.reportes-dashboard[data-v-f945222a] {\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  padding: 20px;\n}\n.custom-tabs[data-v-f945222a] {\n  background: white;\n  border-radius: 12px;\n  padding: 6px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.05);\n}\n.custom-tabs .nav-link[data-v-f945222a] {\n  border-radius: 8px;\n  color: #64748b;\n  font-weight: 500;\n  padding: 12px 20px;\n  transition: all 0.2s ease;\n  border: none;\n}\n.custom-tabs .nav-link[data-v-f945222a]:hover {\n  background: #f8fafc;\n  color: #3b82f6;\n}\n.custom-tabs .nav-link.active[data-v-f945222a] {\n  background: #eff6ff;\n  color: #2563eb;\n  font-weight: 600;\n  box-shadow: 0 1px 2px rgba(0,0,0,0.02);\n}\n.custom-card[data-v-f945222a] {\n  border-radius: 16px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.02);\n  background: white;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  overflow: hidden;\n}\n.custom-card[data-v-f945222a]:hover {\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.03), 0 4px 6px -2px rgba(0,0,0,0.02);\n}\n.kpi-card[data-v-f945222a] {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.02);\n  border-left: 4px solid #e2e8f0;\n  transition: all 0.2s ease;\n}\n.kpi-card[data-v-f945222a]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 6px rgba(0,0,0,0.04);\n}\n.kpi-card.border-blue[data-v-f945222a] { border-left-color: #3b82f6;\n}\n.kpi-card.border-green[data-v-f945222a] { border-left-color: #10b981;\n}\n.kpi-card.border-orange[data-v-f945222a] { border-left-color: #f59e0b;\n}\n.kpi-card.border-indigo[data-v-f945222a] { border-left-color: #6366f1;\n}\n.kpi-icon[data-v-f945222a] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  margin-right: 16px;\n}\n.bg-primary-light[data-v-f945222a] { background: #eff6ff;\n}\n.bg-success-light[data-v-f945222a] { background: #ecfdf5;\n}\n.bg-warning-light[data-v-f945222a] { background: #fffbeb;\n}\n.bg-indigo-light[data-v-f945222a] { background: #eef2ff;\n}\n.text-indigo[data-v-f945222a] { color: #6366f1;\n}\n.kpi-details[data-v-f945222a] {\n  display: flex;\n  flex-direction: column;\n}\n.kpi-value[data-v-f945222a] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 2px;\n}\n.kpi-label[data-v-f945222a] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.custom-table th[data-v-f945222a] {\n  background-color: #f8fafc;\n  padding: 12px 16px;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.custom-table td[data-v-f945222a] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.custom-table tr:hover td[data-v-f945222a] {\n  background-color: #f8fafc;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=style&index=0&id=f945222a&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=style&index=0&id=f945222a&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesDashboard_vue_vue_type_style_index_0_id_f945222a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportesDashboard.vue?vue&type=style&index=0&id=f945222a&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=style&index=0&id=f945222a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesDashboard_vue_vue_type_style_index_0_id_f945222a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesDashboard_vue_vue_type_style_index_0_id_f945222a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-chartjs/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/vue-chartjs/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bar: () => (/* binding */ Bar),
/* harmony export */   Bubble: () => (/* binding */ Bubble),
/* harmony export */   Doughnut: () => (/* binding */ Doughnut),
/* harmony export */   Line: () => (/* binding */ Line),
/* harmony export */   Pie: () => (/* binding */ Pie),
/* harmony export */   PolarArea: () => (/* binding */ PolarArea),
/* harmony export */   Radar: () => (/* binding */ Radar),
/* harmony export */   Scatter: () => (/* binding */ Scatter),
/* harmony export */   generateChart: () => (/* binding */ generateChart)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");



var ChartEmits;
(function(ChartEmits) {
    ChartEmits["ChartRendered"] = "chart:rendered";
    ChartEmits["ChartUpdated"] = "chart:updated";
    ChartEmits["ChartDestroyed"] = "chart:destroyed";
    ChartEmits["LabelsUpdated"] = "labels:updated";
})(ChartEmits || (ChartEmits = {}));
function chartCreate(createChartFunction, chartData, chartOptions, context) {
    createChartFunction(chartData, chartOptions);
    if (context !== undefined) {
        context.emit(ChartEmits.ChartRendered);
    }
}
function chartUpdate(chart, context) {
    chart.update();
    if (context !== undefined) {
        context.emit(ChartEmits.ChartUpdated);
    }
}
function chartDestroy(chart, context) {
    chart.destroy();
    if (context !== undefined) {
        context.emit(ChartEmits.ChartDestroyed);
    }
}
function getChartData(data, datasetIdKey) {
    const nextData = {
        labels: typeof data.labels === "undefined" ? [] : [
            ...data.labels
        ],
        datasets: []
    };
    setChartDatasets(nextData, {
        ...data
    }, datasetIdKey);
    return nextData;
}
function setChartDatasets(oldData, newData, datasetIdKey) {
    const addedDatasets = [];
    oldData.datasets = newData.datasets.map((nextDataset)=>{
        // given the new set, find it's current match
        const currentDataset = oldData.datasets.find((dataset)=>dataset[datasetIdKey] === nextDataset[datasetIdKey]);
        // There is no original to update, so simply add new one
        if (!currentDataset || !nextDataset.data || addedDatasets.includes(currentDataset)) {
            return {
                ...nextDataset
            };
        }
        addedDatasets.push(currentDataset);
        Object.assign(currentDataset, nextDataset);
        return currentDataset;
    });
}
function setChartLabels(chart, labels, context) {
    chart.data.labels = labels;
    if (context !== undefined) {
        context.emit(ChartEmits.LabelsUpdated);
    }
}
function setChartOptions(chart, options) {
    chart.options = {
        ...options
    };
}
function compareData(newData, oldData) {
    // Get new and old DataSet Labels
    const newDatasetLabels = newData.datasets.map((dataset)=>{
        return dataset.label;
    });
    const oldDatasetLabels = oldData.datasets.map((dataset)=>{
        return dataset.label;
    });
    // Check if Labels are equal and if dataset length is equal
    return oldData.datasets.length === newData.datasets.length && newDatasetLabels.every((value, index)=>value === oldDatasetLabels[index]);
}
const templateError = "Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components";
const chartUpdateError = "Update ERROR: chart instance not found";

const generateChart = (chartId, chartType, chartController)=>{
    return (0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
        props: {
            chartData: {
                type: Object,
                required: true
            },
            chartOptions: {
                type: Object,
                default: ()=>{}
            },
            datasetIdKey: {
                type: String,
                default: "label"
            },
            chartId: {
                type: String,
                default: chartId
            },
            width: {
                type: Number,
                default: 400
            },
            height: {
                type: Number,
                default: 400
            },
            cssClasses: {
                type: String,
                default: ""
            },
            styles: {
                type: Object,
                default: ()=>{}
            },
            plugins: {
                type: Array,
                default: ()=>[]
            }
        },
        setup (props, context) {
            chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(chartController);
            const _chart = (0,vue__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(null);
            const canvasEl = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
            function renderChart(data, options) {
                if (_chart.value !== null) {
                    chartDestroy((0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(_chart.value), context);
                }
                if (canvasEl.value === null) {
                    throw new Error(templateError);
                } else {
                    const chartData = getChartData(data, props.datasetIdKey);
                    const canvasEl2DContext = canvasEl.value.getContext("2d");
                    if (canvasEl2DContext !== null) {
                        _chart.value = new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart(canvasEl2DContext, {
                            type: chartType,
                            data: (0,vue__WEBPACK_IMPORTED_MODULE_1__.isProxy)(data) ? new Proxy(chartData, {}) : chartData,
                            options,
                            plugins: props.plugins
                        });
                    }
                }
            }
            function chartDataHandler(newValue, oldValue) {
                const newData = (0,vue__WEBPACK_IMPORTED_MODULE_1__.isProxy)(newValue) ? (0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(newValue) : {
                    ...newValue
                };
                const oldData = (0,vue__WEBPACK_IMPORTED_MODULE_1__.isProxy)(oldValue) ? (0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(oldValue) : {
                    ...oldValue
                };
                if (Object.keys(oldData).length > 0) {
                    const chart = (0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(_chart.value);
                    const isEqualLabelsAndDatasetsLength = compareData(newData, oldData);
                    if (isEqualLabelsAndDatasetsLength && chart !== null) {
                        setChartDatasets(chart === null || chart === void 0 ? void 0 : chart.data, newData, props.datasetIdKey);
                        if (newData.labels !== undefined) {
                            setChartLabels(chart, newData.labels, context);
                        }
                        updateChart();
                    } else {
                        if (chart !== null) {
                            chartDestroy(chart, context);
                        }
                        chartCreate(renderChart, props.chartData, props.chartOptions, context);
                    }
                } else {
                    if (_chart.value !== null) {
                        chartDestroy((0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(_chart.value), context);
                    }
                    chartCreate(renderChart, props.chartData, props.chartOptions, context);
                }
            }
            function chartOptionsHandler(options) {
                const chart = (0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(_chart.value);
                if (chart !== null) {
                    setChartOptions(chart, options);
                    updateChart();
                } else {
                    chartCreate(renderChart, props.chartData, props.chartOptions, context);
                }
            }
            function updateChart() {
                const chart = (0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(_chart.value);
                if (chart !== null) {
                    chartUpdate(chart, context);
                } else {
                    console.error(chartUpdateError);
                }
            }
            (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(()=>props.chartData, (newValue, oldValue)=>chartDataHandler(newValue, oldValue), {
                deep: true
            });
            (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(()=>props.chartOptions, (newValue)=>chartOptionsHandler(newValue), {
                deep: true
            });
            (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(()=>{
                if ("datasets" in props.chartData && props.chartData.datasets.length > 0) {
                    chartCreate(renderChart, props.chartData, props.chartOptions, context);
                }
            });
            (0,vue__WEBPACK_IMPORTED_MODULE_1__.onBeforeUnmount)(()=>{
                if (_chart.value !== null) {
                    chartDestroy((0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(_chart.value), context);
                }
            });
            context.expose({
                chart: _chart,
                updateChart
            });
            return ()=>(0,vue__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
                    style: props.styles,
                    class: props.cssClasses
                }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_1__.h)("canvas", {
                        id: props.chartId,
                        width: props.width,
                        height: props.height,
                        ref: canvasEl
                    })
                ]);
        }
    });
};
const Bar = /* #__PURE__ */ generateChart("bar-chart", "bar", chart_js__WEBPACK_IMPORTED_MODULE_0__.BarController);
const Doughnut = /* #__PURE__ */ generateChart("doughnut-chart", "doughnut", chart_js__WEBPACK_IMPORTED_MODULE_0__.DoughnutController);
const Line = /* #__PURE__ */ generateChart("line-chart", "line", chart_js__WEBPACK_IMPORTED_MODULE_0__.LineController);
const Pie = /* #__PURE__ */ generateChart("pie-chart", "pie", chart_js__WEBPACK_IMPORTED_MODULE_0__.PieController);
const PolarArea = /* #__PURE__ */ generateChart("polar-chart", "polarArea", chart_js__WEBPACK_IMPORTED_MODULE_0__.PolarAreaController);
const Radar = /* #__PURE__ */ generateChart("radar-chart", "radar", chart_js__WEBPACK_IMPORTED_MODULE_0__.RadarController);
const Bubble = /* #__PURE__ */ generateChart("bubble-chart", "bubble", chart_js__WEBPACK_IMPORTED_MODULE_0__.BubbleController);
const Scatter = /* #__PURE__ */ generateChart("scatter-chart", "scatter", chart_js__WEBPACK_IMPORTED_MODULE_0__.ScatterController);


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReportesDashboard_vue_vue_type_template_id_f945222a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportesDashboard.vue?vue&type=template&id=f945222a&scoped=true */ "./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=template&id=f945222a&scoped=true");
/* harmony import */ var _ReportesDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportesDashboard.vue?vue&type=script&lang=js */ "./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _ReportesDashboard_vue_vue_type_style_index_0_id_f945222a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportesDashboard.vue?vue&type=style&index=0&id=f945222a&scoped=true&lang=css */ "./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=style&index=0&id=f945222a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportesDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportesDashboard_vue_vue_type_template_id_f945222a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ReportesDashboard_vue_vue_type_template_id_f945222a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f945222a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportesDashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=template&id=f945222a&scoped=true":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=template&id=f945222a&scoped=true ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesDashboard_vue_vue_type_template_id_f945222a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesDashboard_vue_vue_type_template_id_f945222a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesDashboard_vue_vue_type_template_id_f945222a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportesDashboard.vue?vue&type=template&id=f945222a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=template&id=f945222a&scoped=true");


/***/ }),

/***/ "./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=style&index=0&id=f945222a&scoped=true&lang=css":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=style&index=0&id=f945222a&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesDashboard_vue_vue_type_style_index_0_id_f945222a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportesDashboard.vue?vue&type=style&index=0&id=f945222a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/recepcionista/components/reportes/ReportesDashboard.vue?vue&type=style&index=0&id=f945222a&scoped=true&lang=css");


/***/ })

}]);