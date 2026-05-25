"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_administrador_views_reportes_ReportesGerenciales_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/reportes/ReportesGerenciales.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/reportes/ReportesGerenciales.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.mjs");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ReportesGerenciales',
  data: function data() {
    return {
      años: [],
      meses: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
      idReporte: 0,
      resultados: [],
      ocultarFechas: false,
      ocultarSede: true,
      conteo: {
        total: 0,
        psiquiatria: {
          nuevo: 0,
          continuo: 0
        },
        psicologia: {
          nuevo: 0,
          continuo: 0
        }
      },
      auxiliares: [],
      fecha: {
        año: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY'),
        mes: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('M'),
        inicio: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY-MM-DD'),
        fin: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY-MM-DD'),
        idSede: 1
      },
      conteoR2: [],
      conteoR3: [],
      reportes: [{
        id: 1,
        nombrado: 'Pacientes anulados'
      }, {
        id: 2,
        nombrado: 'Cartera de clientes'
      }, {
        id: 3,
        nombrado: 'Producción mes'
      }, {
        id: 4,
        nombrado: 'Montos registrados'
      }, {
        id: 5,
        nombrado: 'Reprogramaciones por profesional'
      }, {
        id: 6,
        nombrado: 'Pacientes dados de alta'
      }, {
        id: 7,
        nombrado: 'Recetas por profesional'
      }, {
        id: 8,
        nombrado: 'Diagnósticos más frecuentes'
      }, {
        id: 9,
        nombrado: 'Reporte demográfico por clientes'
      }, {
        id: 10,
        nombrado: 'Comprobantes emitidos'
      }, {
        id: 11,
        nombrado: 'Ingresos'
      }, {
        id: 12,
        nombrado: 'Medios de pago'
      }, {
        id: 13,
        nombrado: 'Estado de pacientes'
      }, {
        id: 14,
        nombrado: 'Medicamentos más recetados'
      }, {
        id: 15,
        nombrado: 'Compendio de citas'
      }],
      filtroAnual: false,
      filtro: -1
    };
  },
  methods: {
    cargarDatos: function cargarDatos() {
      for (var i = 2022; i <= moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY'); i++) {
        this.años.push(i);
      }
      this.años.reverse();
    },
    pedirReporte: function pedirReporte() {
      var _this = this;
      this.resultados = [];
      this.axios.post('/api/pedirReporteGerencial/' + this.idReporte, {
        /* año: this.fecha.año, mes: this.fecha.mes */
        inicio: this.fecha.inicio,
        fin: this.fecha.fin,
        idSede: this.fecha.idSede
      }).then(function (serv) {
        //console.log(serv.data);
        _this.resultados = serv.data;
        switch (_this.idReporte) {
          case 1:
            _this.contarTiposPaciente();
            break;
          case 2:
            _this.contarReporte2();
            break;
          case 3:
            _this.contarProduccion();
            break;
          case 4:
            _this.contarMontosRegistrados();
            break;
          case 5:
            _this.contarReprogramaciones();
            break;
          case 6:
            _this.contarAltas();
            break;
          case 7:
            _this.contarRecetas();
            break;
          default:
            break;
        }
      });
    },
    contarTiposPaciente: function contarTiposPaciente() {
      var _this2 = this;
      this.conteo = {
        total: 0,
        psiquiatria: {
          nuevo: 0,
          continuo: 0,
          sin: 0
        },
        psicologia: {
          nuevo: 0,
          continuo: 0,
          sin: 0
        }
      };
      this.resultados.nuevos.forEach(function (nuevo) {
        if (nuevo.precio) if (nuevo.precio.idClasificacion == 1)
          //es Psiquiatria
          {
            _this2.conteo.psiquiatria.nuevo += 1;
            _this2.conteo.total++;
          } else if (nuevo.precio.idClasificacion == 2)
          //es Psicologia
          {
            _this2.conteo.psicologia.nuevo += 1;
            _this2.conteo.total++;
          }
      });
      this.resultados.continuos.forEach(function (continuo) {
        if (continuo.precio) if (continuo.precio.idClasificacion == 1)
          //es Psiquiatria
          {
            _this2.conteo.psiquiatria.continuo += 1;
            _this2.conteo.total++;
          } else if (continuo.precio.idClasificacion == 2)
          //es Psicologia
          {
            _this2.conteo.psicologia.continuo += 1;
            _this2.conteo.total++;
          }
      });
      this.resultados.sinRepetir.forEach(function (continuo) {
        if (continuo.precio) if (continuo.precio.idClasificacion == 1)
          //es Psiquiatria
          {
            _this2.conteo.psiquiatria.sin += 1;
          } else if (continuo.precio.idClasificacion == 2)
          //es Psicologia
          {
            _this2.conteo.psicologia.sin += 1;
          }
      });
    },
    contarReporte2: function contarReporte2() {
      var _this3 = this;
      this.conteoR2 = [];
      this.conteoR2.push({
        idProfesional: this.resultados.cartera[0].professional_id,
        conteo: 0,
        nombre: this.resultados.cartera[0].professional.name
      });
      this.resultados.cartera.forEach(function (cita) {
        if (cita.professional_id !== _this3.conteoR2[_this3.conteoR2.length - 1].idProfesional) {
          _this3.conteoR2.push({
            idProfesional: cita.professional_id,
            conteo: 1,
            nombre: cita.professional.name
          });
        } else _this3.conteoR2[_this3.conteoR2.length - 1].conteo++;
      });
      this.conteoR3.push({
        idProfesional: this.resultados.carteraSinRepetir[0].professional_id,
        conteo: 0,
        nombre: this.resultados.carteraSinRepetir[0].professional.name
      });
      this.resultados.carteraSinRepetir.forEach(function (cita) {
        if (cita.professional_id !== _this3.conteoR3[_this3.conteoR3.length - 1].idProfesional) {
          _this3.conteoR3.push({
            idProfesional: cita.professional_id,
            conteo: 1,
            nombre: cita.professional.name
          });
        } else _this3.conteoR3[_this3.conteoR3.length - 1].conteo++;
      });
    },
    contarProduccion: function contarProduccion() {
      var _this4 = this;
      this.conteoR2 = [];
      this.auxiliares = [];
      this.conteoR2.push({
        idProfesional: this.resultados.cartera[0].professional_id,
        nombre: this.resultados.cartera[0].professional.name,
        profesion: this.resultados.cartera[0].professional.profession,
        nuevo: 0,
        continuo: 0,
        revaluaciones: 0,
        certificados: 0,
        conteo: 0,
        anulado: 0
      });
      this.resultados.cartera.forEach(function (cita) {
        if (cita.professional_id !== _this4.conteoR2[_this4.conteoR2.length - 1].idProfesional) {
          _this4.conteoR2.push({
            idProfesional: cita.professional_id,
            conteo: 1,
            nombre: cita.professional.name,
            profesion: cita.professional.profession,
            nuevo: 0,
            continuo: 0,
            revaluaciones: 0,
            certificados: 0,
            anulado: 0
          });
        } else _this4.conteoR2[_this4.conteoR2.length - 1].conteo++;
        switch (cita.patient_condition) {
          case 1:
            _this4.conteoR2[_this4.conteoR2.length - 1].nuevo++;
            break;
          case 2:
            _this4.conteoR2[_this4.conteoR2.length - 1].continuo++;
            break;
          default:
            break;
        }

        //if(cita.status == '4' ) this.conteoR2[this.conteoR2.length-1].revaluaciones++
        if (cita.status == '3') _this4.conteoR2[_this4.conteoR2.length - 1].anulado++;

        //if( [17,45,52].inclues(parsei))
        if (cita.precio.id == 17 || cita.precio.id == 45 || cita.precio.id == 52)
          //|| cita.stauts==4
          _this4.conteoR2[_this4.conteoR2.length - 1].revaluaciones++;
        if (cita.precio.idClasificacion == 3) _this4.conteoR2[_this4.conteoR2.length - 1].certificados++;
      });
      this.auxiliares = this.resultados.cartera.reduce(function (acumulador, cita) {
        var _cita$professional;
        var profession = (_cita$professional = cita.professional) === null || _cita$professional === void 0 ? void 0 : _cita$professional.profession; // Usa optional chaining por seguridad

        if (profession) acumulador[profession] = (acumulador[profession] || 0) + 1;
        return acumulador;
      }, {});
    },
    contarMontosRegistrados: function contarMontosRegistrados() {
      var _this5 = this;
      this.conteoR2 = [];
      this.conteoR2.push({
        idProfesional: this.resultados.professional_id,
        nombre: this.resultados.professional.name,
        profesion: this.resultados.professional.profession,
        nuevo: 0,
        continuo: 0,
        revaluaciones: 0,
        certificados: 0,
        conteo: 0,
        ganancia: 0
      });
      this.resultados.cartera.forEach(function (cita) {
        if (cita.professional_id !== _this5.conteoR2[_this5.conteoR2.length - 1].idProfesional) {
          _this5.conteoR2.push({
            idProfesional: cita.professional_id,
            conteo: 1,
            nombre: cita.professional.name,
            profesion: cita.professional.profession,
            nuevo: 0,
            continuo: 0,
            revaluaciones: 0,
            certificados: 0,
            ganancia: parseFloat(cita.payment.price)
          });
        } else {
          _this5.conteoR2[_this5.conteoR2.length - 1].conteo++;
          _this5.conteoR2[_this5.conteoR2.length - 1].ganancia += parseFloat(cita.payment.price);
        }
      });
    },
    contarReprogramaciones: function contarReprogramaciones() {
      var _this6 = this;
      this.conteoR2 = [];
      this.conteoR2.push({
        idProfesional: this.resultados[0].appointment.professional_id,
        nombre: this.resultados[0].appointment.professional.name,
        profesion: this.resultados[0].appointment.professional.profession,
        reprogramaciones: 0
      });
      this.resultados.forEach(function (cita) {
        if (cita.appointment.professional_id !== _this6.conteoR2[_this6.conteoR2.length - 1].idProfesional) {
          _this6.conteoR2.push({
            idProfesional: cita.appointment.professional_id,
            conteo: 1,
            nombre: cita.appointment.professional.name,
            profesion: cita.appointment.professional.profession,
            reprogramaciones: 1
          });
        } else _this6.conteoR2[_this6.conteoR2.length - 1].reprogramaciones++;
      });
    },
    contarAltas: function contarAltas() {
      var _this7 = this;
      this.conteoR2 = [];
      if (this.resultados[0].user.professional) this.conteoR2.push({
        idProfesional: this.resultados[0].user.professional.id,
        nombre: this.resultados[0].user.professional.name,
        profesion: this.resultados[0].user.professional.profession,
        altas: 0
      });else this.conteoR2.push({
        idProfesional: -1,
        nombre: this.resultados[0].user.nombre,
        profesion: 'Ninguna',
        altas: 0
      });
      this.resultados.forEach(function (cita) {
        if (cita.user.professional) {
          if (cita.user.professional.id !== _this7.conteoR2[_this7.conteoR2.length - 1].idProfesional) _this7.conteoR2.push({
            idProfesional: cita.user.professional.id,
            conteo: 1,
            nombre: cita.user.professional.name,
            profesion: cita.user.professional.profession,
            altas: 1
          });else _this7.conteoR2[_this7.conteoR2.length - 1].altas++;
        } else _this7.conteoR2[_this7.conteoR2.length - 1].altas++;
      });
    },
    contarRecetas: function contarRecetas() {
      var _this8 = this;
      this.conteoR2 = [];
      this.conteoR2.push({
        idProfesional: this.resultados[0].professional.id,
        nombre: this.resultados[0].professional.name,
        profesion: this.resultados[0].professional.profession,
        recetas: 0
      });
      this.resultados.forEach(function (cita) {
        if (cita.professional.id !== _this8.conteoR2[_this8.conteoR2.length - 1].idProfesional) _this8.conteoR2.push({
          idProfesional: cita.professional.id,
          conteo: 1,
          nombre: cita.professional.name,
          profesion: cita.professional.profession,
          recetas: 1
        });else _this8.conteoR2[_this8.conteoR2.length - 1].recetas++;
      });
    },
    configurarVista: function configurarVista() {
      this.resultados = [];
      this.ocultarFechas = false;
      this.ocultarSede = true;
      this.filtroAnual = this.idReporte == 12 ? true : false;
      if ([4, 11, 12].includes(this.idReporte)) this.ocultarSede = false;
      switch (this.idReporte) {
        case 0:
          this.ocultarFechas = true;
      }
    },
    fechaFrom: function fechaFrom(fecha) {
      moment__WEBPACK_IMPORTED_MODULE_1___default().locale('es');
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(fecha, 'YYYY-MM-DD').fromNow();
    },
    fechaLatam: function fechaLatam(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(fecha).format('DD/MM/YYYY');
    },
    horaLatam: function horaLatam(horita) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(horita, 'HH:mm:ss').format('hh:mm a');
    },
    sumatorias: function sumatorias() {
      var _this$resultados$psiq,
        _this$resultados$psiq2,
        _this$resultados$psic,
        _this$resultados$psic2,
        _this$resultados$cert,
        _this$resultados$cert2,
        _this9 = this;
      var acumulador = 0;
      switch (this.idReporte) {
        case 4:
          var profes = this.resultados.profesionales;
          for (var clave in profes) acumulador += profes[clave].suma;
          break;
        case 11:
          var psiq = parseFloat((_this$resultados$psiq = (_this$resultados$psiq2 = this.resultados.psiquiatria) === null || _this$resultados$psiq2 === void 0 ? void 0 : _this$resultados$psiq2.total) !== null && _this$resultados$psiq !== void 0 ? _this$resultados$psiq : 0);
          var psic = parseFloat((_this$resultados$psic = (_this$resultados$psic2 = this.resultados.psicologia) === null || _this$resultados$psic2 === void 0 ? void 0 : _this$resultados$psic2.total) !== null && _this$resultados$psic !== void 0 ? _this$resultados$psic : 0);
          var cert = parseFloat((_this$resultados$cert = (_this$resultados$cert2 = this.resultados.certificados) === null || _this$resultados$cert2 === void 0 ? void 0 : _this$resultados$cert2.total) !== null && _this$resultados$cert !== void 0 ? _this$resultados$cert : 0);
          var extras = this.resultados.extras;
          var membresias = this.resultados.membresias;
          var otros = 0;
          var sumMe = 0;
          for (var _clave in extras) {
            otros += extras[_clave].total;
          }
          for (var _clave2 in membresias) {
            sumMe += membresias[_clave2].total;
          }
          acumulador = psiq + psic + cert + otros + sumMe;
          break;
        case 12:
          Object.keys(this.resultados).forEach(function (clave) {
            acumulador += parseFloat(_this9.sumaMedios(clave));
          });
          break;
        default:
          break;
      }
      return parseFloat(acumulador).toFixed(2);
    }
  },
  computed: {
    sumaMontosRegistrados: function sumaMontosRegistrados() {
      var suma = 0;
      this.conteoR2.forEach(function (conteo) {
        suma += parseFloat(conteo.ganancia);
      });
      return suma.toFixed(2);
    },
    contarRecomendados: function contarRecomendados() {
      var contador = 0;
      this.resultados.recomendados.forEach(function (item) {
        contador += parseInt(item.contador);
      });
      return contador;
    },
    sumaRecaudadoMedios: function sumaRecaudadoMedios() {
      var suma = 0;
      this.resultados.pagos.forEach(function (item) {
        suma += parseFloat(item.suma);
      });
      return suma.toFixed(2);
    },
    sumaTipoComprobante: function sumaTipoComprobante() {
      var _this10 = this;
      return function (llave) {
        var suma = 0;
        _this10.resultados[llave].forEach(function (item) {
          suma += parseFloat(item.price);
        });
        return suma.toFixed(2);
      };
    },
    sumaMedios: function sumaMedios() {
      var _this11 = this;
      return function (llave) {
        var suma = 0;
        _this11.resultados[llave].forEach(function (item) {
          suma += parseFloat(item.price);
        });
        return suma.toFixed(2);
      };
    }
  },
  mounted: function mounted() {
    this.reportes.sort(function (a, b) {
      if (a.nombrado < b.nombrado) return -1;
      if (a.nombrado > b.nombrado) return 1;
      return 0;
    });
    this.cargarDatos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/reportes/ReportesGerenciales.vue?vue&type=template&id=3fb6648b&lang=es":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/reportes/ReportesGerenciales.vue?vue&type=template&id=3fb6648b&lang=es ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var render = function render() {
  var _vm$resultados$psicol, _vm$resultados$psicol2, _vm$resultados$psiqui, _vm$resultados$psiqui2, _vm$resultados$certif, _vm$resultados$certif2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h1", {
    staticClass: "h3 mb-0 text-gray-800 mb-2"
  }, [_vm._v("Reportes gerenciales")]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-md-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Tipo de reporte")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.idReporte,
      expression: "idReporte"
    }],
    staticClass: "form-select",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.idReporte = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.configurarVista();
      }]
    }
  }, _vm._l(_vm.reportes, function (reporte) {
    return _c("option", {
      domProps: {
        value: reporte.id
      }
    }, [_vm._v(_vm._s(reporte.nombrado))]);
  }), 0)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.ocultarFechas,
      expression: "!ocultarFechas"
    }],
    staticClass: "col-12 col-md-2"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Fecha Inicial")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fecha.inicio,
      expression: "fecha.inicio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.fecha.inicio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.fecha, "inicio", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.ocultarFechas,
      expression: "!ocultarFechas"
    }],
    staticClass: "col-12 col-md-2"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Fecha Final")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fecha.fin,
      expression: "fecha.fin"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.fecha.fin
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.fecha, "fin", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.ocultarSede,
      expression: "!ocultarSede"
    }],
    staticClass: "col-12 col-md-2"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Sede")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fecha.idSede,
      expression: "fecha.idSede"
    }],
    staticClass: "form-select",
    attrs: {
      id: "sltSede"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.fecha, "idSede", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Sede El Tambo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Sede San Carlos")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-3 d-flex align-items-end"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary",
    on: {
      click: function click($event) {
        return _vm.pedirReporte();
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-magnifying-glass"
  }), _vm._v(" Buscar")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card mt-2"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.idReporte == 1 ? _c("div", [_c("table", {
    staticClass: "table table_hover"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("1")]), _vm._v(" "), _c("td", [_vm._v("Pacientes Nuevos de Psiquiatría")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.conteo.psiquiatria.nuevo))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v(_vm._s(parseFloat(_vm.conteo.psiquiatria.nuevo / _vm.conteo.total * 100).toFixed(2)) + "%")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("2")]), _vm._v(" "), _c("td", [_vm._v("Pacientes Continuos de Psiquiatría")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.conteo.psiquiatria.continuo))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.conteo.psiquiatria.sin))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(parseFloat(_vm.conteo.psiquiatria.continuo / _vm.conteo.total * 100).toFixed(2)) + "%")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("3")]), _vm._v(" "), _c("td", [_vm._v("Pacientes Nuevos de Psicología")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.conteo.psicologia.nuevo))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v(_vm._s(parseFloat(_vm.conteo.psicologia.nuevo / _vm.conteo.total * 100).toFixed(2)) + "%")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("4")]), _vm._v(" "), _c("td", [_vm._v("Pacientes Continuos de Psicología")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.conteo.psicologia.continuo))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.conteo.psicologia.sin))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(parseFloat(_vm.conteo.psicologia.continuo / _vm.conteo.total * 100).toFixed(2)) + "%")])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.conteo.total))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v("100%")])])])])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 2 ? _c("div", [_vm._m(1), _vm._v(" "), _c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", _vm._l(_vm.conteoR2, function (doctor, indice) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.nombre))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.conteo))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.conteoR3[indice].conteo))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((doctor.conteo / _vm.resultados.total * 100).toFixed(1)) + "%")])]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.resultados.total))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v("100%")])])])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("1")]), _vm._v(" "), _c("td", [_vm._v("Nuevos")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.resultados.nuevos))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm.resultados.nuevos / _vm.resultados.total * 100).toFixed(1)) + "%")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("2")]), _vm._v(" "), _c("td", [_vm._v("Contínuos")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.resultados.continuos))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm.resultados.continuos / _vm.resultados.total * 100).toFixed(1)) + "%")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("3")]), _vm._v(" "), _c("td", [_vm._v("Atendidos únicos")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.resultados.continuosSin))])])])]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados.especialidades, function (especialidad, clave, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(clave))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(especialidad.length))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.resultados.sinRepetir[clave].length))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((especialidad.length / _vm.resultados.total * 100).toFixed(1)) + "%")])]);
  }), 0)]), _vm._v(" "), _c("p", [_vm._v("Detallado:")]), _vm._v(" "), _c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados.cartera, function (cita, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), cita.professional ? _c("td", [_vm._v(_vm._s(cita.professional.name) + " " + _vm._s(cita.professional.nombres))]) : _c("td"), _vm._v(" "), cita.patient ? _c("td", [_vm._v(_vm._s(cita.patient.name) + " " + _vm._s(cita.patient.nombres))]) : _c("td"), _vm._v(" "), cita.patient ? _c("td", [_vm._v(_vm._s(cita.professional.profession))]) : _c("td"), _vm._v(" "), cita.precio ? _c("td", [_vm._v(_vm._s(cita.precio.descripcion))]) : _c("td"), _vm._v(" "), cita.schedule ? _c("td", [_vm._v(_vm._s(cita.schedule.check_time))]) : _c("td")]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 3 ? _c("div", [_vm._m(8), _vm._v(" "), _c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(9), _vm._v(" "), _c("tbody", _vm._l(_vm.auxiliares, function (aux, clave, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(clave))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(aux))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.resultados.profSin[clave].length))])]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td"), _vm._v(" "), _c("td", [_vm._v("Total:")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.resultados.length))])])])]), _vm._v(" "), _vm._m(10), _vm._v(" "), _c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(11), _vm._v(" "), _c("tbody", _vm._l(_vm.conteoR2, function (doctor, indice) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.profesion))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.nombre))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.nuevo))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.continuo))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.revaluaciones))]), _vm._v(" "), _c("td", {
      staticClass: "d-none"
    }, [_vm._v(_vm._s(doctor.certificados))])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 4 ? _c("div", [_c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(12), _vm._v(" "), _vm._l(_vm.resultados.profesionales, function (doctor, clave, indice) {
    return _c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.profesion))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(clave))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.citas.length))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.suma.toFixed(2)))])])]);
  }), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.sumatorias()))])])])], 2)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 5 ? _c("div", [_c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(13), _vm._v(" "), _vm._l(_vm.conteoR2, function (doctor, indice) {
    return _c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.profesion))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.nombre))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.reprogramaciones))])])]);
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 6 ? _c("div", [_c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(14), _vm._v(" "), _vm._l(_vm.conteoR2, function (doctor, indice) {
    return _c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.profesion))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.nombre))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.altas))])])]);
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 7 ? _c("div", [_c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(15), _vm._v(" "), _vm._l(_vm.conteoR2, function (doctor, indice) {
    return _c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.profesion))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.nombre))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(doctor.recetas))])])]);
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 8 ? _c("div", [_c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(16), _vm._v(" "), _vm._l(_vm.resultados, function (cie, indice) {
    return _c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cie.code))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cie.description))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cie.contador))])])]);
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 9 ? _c("div", [_vm._m(17), _vm._v(" "), _c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(18), _vm._v(" "), _vm._l(_vm.resultados.edades, function (edad, key, indice) {
    return _c("tbody", {
      key: key
    }, [_c("tr", [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(key) + " años")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(edad.length))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(parseFloat(edad.length / _vm.resultados.total * 100).toFixed(2)) + "%")])])]);
  }), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td"), _vm._v(" "), _c("td", [_vm._v("Total")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.resultados.total))]), _vm._v(" "), _c("td", [_vm._v("100%")])])])], 2), _vm._v(" "), _vm._m(19), _vm._v(" "), _c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(20), _vm._v(" "), _vm._l(Object.entries(_vm.resultados.sexos), function (_ref, indice) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      edad = _ref2[1];
    return _c("tbody", {
      key: key
    }, [_c("tr", [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", [key == 0 ? _c("span", [_vm._v("Femenino")]) : _vm._e(), _vm._v(" "), key == 3 ? _c("span", [_vm._v("LGTB+")]) : _vm._e(), _vm._v(" "), key == 1 ? _c("span", [_vm._v("Masculino")]) : _vm._e(), _vm._v(" "), key == 2 ? _c("span", [_vm._v("No indicó")]) : _vm._e(), _vm._v(" "), key == null ? _c("span", [_vm._v("No data")]) : _vm._e(), _vm._v(" "), key == "sin_dato" ? _c("span", [_vm._v("No data")]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(edad.length))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(parseFloat(edad.length / _vm.resultados.total * 100).toFixed(2)) + "%")])])]);
  }), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td"), _vm._v(" "), _c("td", [_vm._v("Total")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.resultados.total))]), _vm._v(" "), _c("td", [_vm._v("100%")])])])], 2), _vm._v(" "), _vm._m(21), _vm._v(" "), _c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(22), _vm._v(" "), _vm._l(_vm.resultados.recomendados, function (reco, indice) {
    return _c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(reco.recomendation))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(reco.contador))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(parseFloat(parseInt(reco.contador) / parseInt(_vm.contarRecomendados) * 100).toFixed(2)) + "%")])])]);
  }), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td"), _vm._v(" "), _c("td", [_vm._v("Total")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.contarRecomendados))]), _vm._v(" "), _c("td", [_vm._v("100%")])])])], 2)]) : _vm._e(), _vm._v(" "), _vm.idReporte == 10 ? _c("div", [_c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(23), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados, function (pago, key, indice) {
    return _c("tr", {
      key: key
    }, [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(key))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pago.length))]), _vm._v(" "), _c("td", [_vm._v("S/ " + _vm._s(_vm.sumaTipoComprobante(key)))])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 11 ? _c("div", [_c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(24), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("1")]), _vm._v(" "), _c("td", [_vm._v("Psicología")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$resultados$psicol = (_vm$resultados$psicol2 = _vm.resultados.psicologia) === null || _vm$resultados$psicol2 === void 0 ? void 0 : _vm$resultados$psicol2.total) !== null && _vm$resultados$psicol !== void 0 ? _vm$resultados$psicol : 0))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("2")]), _vm._v(" "), _c("td", [_vm._v("Psiquiatría")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$resultados$psiqui = (_vm$resultados$psiqui2 = _vm.resultados.psiquiatria) === null || _vm$resultados$psiqui2 === void 0 ? void 0 : _vm$resultados$psiqui2.total) !== null && _vm$resultados$psiqui !== void 0 ? _vm$resultados$psiqui : 0))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("3")]), _vm._v(" "), _c("td", [_vm._v("Certificados")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$resultados$certif = (_vm$resultados$certif2 = _vm.resultados.certificados) === null || _vm$resultados$certif2 === void 0 ? void 0 : _vm$resultados$certif2.total) !== null && _vm$resultados$certif !== void 0 ? _vm$resultados$certif : 0))])]), _vm._v(" "), _vm._l(_vm.resultados.extras, function (pago, clave, indice) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(indice + 4))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(clave.replace("Pago de membresía", "Pago de paquetes")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pago.total.toFixed(2)))])]);
  }), _vm._v(" "), _vm._l(_vm.resultados.membresias, function (pago, clave, indice) {
    return _c("tr", [_c("td"), _vm._v(" "), _c("td", [_vm._v("Pago de paquete: " + _vm._s(clave))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pago.total.toFixed(2)))])]);
  })], 2), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td"), _vm._v(" "), _c("td", [_vm._v("Recaudado:")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.sumatorias()))])])])])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 12 ? _c("div", [_c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(25), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados, function (pago, key, indice) {
    return _c("tr", {
      key: key
    }, [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(key))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pago.length))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.sumaMedios(key)))])]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v("Recaudado:")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.sumatorias()))]), _vm._v(" "), _c("td")])])])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 13 ? _c("div", [_c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(26), _vm._v(" "), _c("tbody", [_vm._l(_vm.resultados.especialidades, function (especialidad, clave) {
    return [_c("tr", [_c("td", [_vm._v(_vm._s(clave))]), _vm._v(" "), _c("td", [_vm._v("Nuevos")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(especialidad.nuevos))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(parseFloat(especialidad.nuevos / _vm.resultados.total * 100).toFixed(2)) + "%")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(clave))]), _vm._v(" "), _c("td", [_vm._v("Contínuos")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(especialidad.continuos))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(parseFloat(especialidad.continuos / _vm.resultados.total * 100).toFixed(2)) + "%")])])];
  })], 2), _vm._v(" "), _vm.resultados.especialidades ? _c("tfoot", [_c("tr", [_c("td"), _vm._v(" "), _c("td", [_vm._v("Total")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.resultados.total))]), _vm._v(" "), _c("td", [_vm._v("100%")])])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 14 ? _c("div", [_c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(27), _vm._v(" "), _c("tbody", _vm._l(_vm.resultados, function (medicamento, indice) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(indice + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(medicamento.nombre) + " " + _vm._s(medicamento.presentacion))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(medicamento.cantidad) + " ")])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.idReporte == 15 ? _c("div", [_vm._l(_vm.resultados, function (doctor, clave) {
    return [_c("table", {
      staticClass: "table table-hover mb-4"
    }, [_c("thead", [_c("tr", [_c("th", {
      attrs: {
        colspan: "8"
      }
    }, [_vm._v(_vm._s(clave))])]), _vm._v(" "), _vm._m(28, true)]), _vm._v(" "), _c("tbody", _vm._l(doctor, function (cita, index) {
      var _cita$pagos_extras$0$, _cita$pagos_extras$, _cita$payment, _cita$payment2, _cita$payment3, _cita$payment4;
      return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.patient.name) + " " + _vm._s(cita.patient.nombres))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.patient.phone))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cita.precio.descripcion))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.horaLatam(cita.schedule.check_time)) + " - " + _vm._s(_vm.horaLatam(cita.schedule.departure_date)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_cita$pagos_extras$0$ = (_cita$pagos_extras$ = cita.pagos_extras[0]) === null || _cita$pagos_extras$ === void 0 ? void 0 : _cita$pagos_extras$.price) !== null && _cita$pagos_extras$0$ !== void 0 ? _cita$pagos_extras$0$ : ""))]), _vm._v(" "), _c("td", [cita.status == "1" ? _c("span", [_vm._v("Sin confirmar")]) : _vm._e(), _vm._v(" "), cita.status == "2" ? _c("span", [_vm._v("Confirmado")]) : _vm._e()]), _vm._v(" "), _c("td", [((_cita$payment = cita.payment) === null || _cita$payment === void 0 ? void 0 : _cita$payment.pay_status) == "1" && ((_cita$payment2 = cita.payment) === null || _cita$payment2 === void 0 ? void 0 : _cita$payment2.adelanto) > 0 ? _c("span", [_vm._v("Con adelanto")]) : _vm._e(), _vm._v(" "), ((_cita$payment3 = cita.payment) === null || _cita$payment3 === void 0 ? void 0 : _cita$payment3.pay_status) == "1" ? _c("span", [_vm._v("Pendiente")]) : _vm._e(), _vm._v(" "), ((_cita$payment4 = cita.payment) === null || _cita$payment4 === void 0 ? void 0 : _cita$payment4.pay_status) == "2" ? _c("span", [_vm._v("Pagado")]) : _vm._e()])]);
    }), 0)])];
  })], 2) : _vm._e()])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Tipo de paciente")]), _vm._v(" "), _c("th", [_vm._v("Atenciones")]), _vm._v(" "), _c("th", [_vm._v("Atendidos")]), _vm._v(" "), _c("th", [_vm._v("Porcentaje")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("strong", [_vm._v("Conteo por profesionales")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("Atenciones")]), _vm._v(" "), _c("th", [_vm._v("Atendidos")]), _vm._v(" "), _c("th", [_vm._v("Porcentaje")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("strong", [_vm._v("Conteo por continuidad")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Condición")]), _vm._v(" "), _c("th", [_vm._v("Cantidad")]), _vm._v(" "), _c("th", [_vm._v("Porcentaje")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("strong", [_vm._v("Conteo por especialidad")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Especialidad")]), _vm._v(" "), _c("th", [_vm._v("Atenciones")]), _vm._v(" "), _c("th", [_vm._v("Atendidos")]), _vm._v(" "), _c("th", [_vm._v("Porcentaje")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Especialidad")]), _vm._v(" "), _c("th", [_vm._v("Servicio")]), _vm._v(" "), _c("th", [_vm._v("Fecha y Hora")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("strong", [_vm._v("Reporte agrupado")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Profesión")]), _vm._v(" "), _c("th", [_vm._v("Atenciones")]), _vm._v(" "), _c("th", [_vm._v("Atendidos")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("strong", [_vm._v("Reporte detallado")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Profesión")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("N° Pacientes nuevos")]), _vm._v(" "), _c("th", [_vm._v("N° Pacientes continuos")]), _vm._v(" "), _c("th", [_vm._v("N° Reevaluaciones")]), _vm._v(" "), _c("th", {
    staticClass: "d-none"
  }, [_vm._v("N° Certificados")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Profesión")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("# de atenciones")]), _vm._v(" "), _c("th", [_vm._v("Monto")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Profesión")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("N° Reprogramaciones")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Profesión")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("N° Altas")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Profesión")]), _vm._v(" "), _c("th", [_vm._v("Profesional")]), _vm._v(" "), _c("th", [_vm._v("N° Recetas\t")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Código")]), _vm._v(" "), _c("th", [_vm._v("Diagnóstico")]), _vm._v(" "), _c("th", [_vm._v("Cant. Diag.")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mt-2"
  }, [_c("strong", [_vm._v("Reporte de pacientes por edades")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Edad")]), _vm._v(" "), _c("th", [_vm._v("Cantidad")]), _vm._v(" "), _c("th", [_vm._v("Porcentajes")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mt-2"
  }, [_c("strong", [_vm._v("Reporte de pacientes por sexos")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Género")]), _vm._v(" "), _c("th", [_vm._v("Cantidad")]), _vm._v(" "), _c("th", [_vm._v("Porcentajes")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mt-2"
  }, [_c("strong", [_vm._v("Reporte de recomendaciones")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Género")]), _vm._v(" "), _c("th", [_vm._v("Cantidad")]), _vm._v(" "), _c("th", [_vm._v("Porcentajes")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Comprobante")]), _vm._v(" "), _c("th", [_vm._v("Cantidad")]), _vm._v(" "), _c("th", [_vm._v("Monto recaudado")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Servicio")]), _vm._v(" "), _c("th", [_vm._v("Monto recaudado")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Medio de pago")]), _vm._v(" "), _c("th", [_vm._v("N° Registros")]), _vm._v(" "), _c("th", [_vm._v("Monto recaudado")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Especialidad")]), _vm._v(" "), _c("th", [_vm._v("Estado")]), _vm._v(" "), _c("th", [_vm._v("Conteo")]), _vm._v(" "), _c("th", [_vm._v("Porcentaje")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Medicamento")]), _vm._v(" "), _c("th", [_vm._v("Cantidad")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Paciente")]), _vm._v(" "), _c("th", [_vm._v("Celular")]), _vm._v(" "), _c("th", [_vm._v("Servicio")]), _vm._v(" "), _c("th", [_vm._v("Horario")]), _vm._v(" "), _c("th", [_vm._v("Monto")]), _vm._v(" "), _c("th", [_vm._v("Pago")]), _vm._v(" "), _c("th", [_vm._v("Estado")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/administrador/views/reportes/ReportesGerenciales.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/administrador/views/reportes/ReportesGerenciales.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReportesGerenciales_vue_vue_type_template_id_3fb6648b_lang_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportesGerenciales.vue?vue&type=template&id=3fb6648b&lang=es */ "./resources/js/components/administrador/views/reportes/ReportesGerenciales.vue?vue&type=template&id=3fb6648b&lang=es");
/* harmony import */ var _ReportesGerenciales_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportesGerenciales.vue?vue&type=script&lang=js */ "./resources/js/components/administrador/views/reportes/ReportesGerenciales.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportesGerenciales_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportesGerenciales_vue_vue_type_template_id_3fb6648b_lang_es__WEBPACK_IMPORTED_MODULE_0__.render,
  _ReportesGerenciales_vue_vue_type_template_id_3fb6648b_lang_es__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/administrador/views/reportes/ReportesGerenciales.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/administrador/views/reportes/ReportesGerenciales.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/administrador/views/reportes/ReportesGerenciales.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGerenciales_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportesGerenciales.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/reportes/ReportesGerenciales.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGerenciales_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/administrador/views/reportes/ReportesGerenciales.vue?vue&type=template&id=3fb6648b&lang=es":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/administrador/views/reportes/ReportesGerenciales.vue?vue&type=template&id=3fb6648b&lang=es ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGerenciales_vue_vue_type_template_id_3fb6648b_lang_es__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGerenciales_vue_vue_type_template_id_3fb6648b_lang_es__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGerenciales_vue_vue_type_template_id_3fb6648b_lang_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportesGerenciales.vue?vue&type=template&id=3fb6648b&lang=es */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/administrador/views/reportes/ReportesGerenciales.vue?vue&type=template&id=3fb6648b&lang=es");


/***/ })

}]);