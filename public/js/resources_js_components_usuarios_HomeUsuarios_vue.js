"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_usuarios_HomeUsuarios_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/HomeUsuarios.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/HomeUsuarios.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalEditarUsuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalEditarUsuario */ "./resources/js/components/usuarios/ModalEditarUsuario.vue");
/* harmony import */ var _ModalNuevoUsuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalNuevoUsuario */ "./resources/js/components/usuarios/ModalNuevoUsuario.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HomeUsuarios',
  components: {
    ModalEditarUsuario: _ModalEditarUsuario__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModalNuevoUsuario: _ModalNuevoUsuario__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      usuarios: [],
      queUsuario: [],
      sedes: []
    };
  },
  methods: {
    getSedeName: function getSedeName(id) {
      var sede = this.sedes.find(function (s) {
        return s.id == id;
      });
      return sede ? sede.nombre : 'General';
    },
    cargarSedes: function cargarSedes() {
      var _this = this;
      this.axios.get('/api/sedes').then(function (res) {
        return _this.sedes = res.data;
      });
    },
    cargarUsuarios: function cargarUsuarios() {
      var _this2 = this;
      this.axios.get('/api/cargarUsuarios').then(function (res) {
        return _this2.usuarios = res.data;
      });
    },
    cargarEliminar: function cargarEliminar(index) {
      var _this3 = this;
      if (confirm("\xBFEst\xE1 seguro que desea elminar a ".concat(this.usuarios[index].email, "?"))) {
        this.axios.post('/api/eliminarUsuario', {
          id: this.usuarios[index].id
        }).then(function (res) {
          console.log(res.data);
          _this3.cargarUsuarios();
        });
      }
    }
  },
  mounted: function mounted() {
    this.cargarSedes();
    this.cargarUsuarios();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/ModalEditarUsuario.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/ModalEditarUsuario.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alertifyjs */ "./node_modules/alertifyjs/build/alertify.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ModalEditarUsuario',
  props: ['usuario', 'sedes'],
  data: function data() {
    return {
      clave: ''
    };
  },
  methods: {
    guardar: function guardar() {
      var _this = this;
      this.axios.post('/api/actualizarDatosUsuarioBasico', {
        usuario: this.usuario,
        clave: this.clave
      }).then(function (res) {
        console.log(res.data);
        _this.clave = '';
        alertifyjs__WEBPACK_IMPORTED_MODULE_0___default().notify('<i class="fa-regular fa-calendar-check"></i> ' + res.data.mensaje, 'success', 5);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/ModalNuevoUsuario.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/ModalNuevoUsuario.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alertifyjs */ "./node_modules/alertifyjs/build/alertify.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ModalNuevoUsuario',
  props: ['sedes'],
  data: function data() {
    return {
      usuario: {
        rol: 'recepcionista',
        privilegios: 0,
        idSede: 1
      }
    };
  },
  methods: {
    guardar: function guardar() {
      var _this = this;
      this.axios.post('/api/nuevoUsuarioBasico', {
        usuario: this.usuario
      }).then(function (res) {
        console.log(res.data);
        _this.usuario = {
          rol: 'recepcionista',
          privilegios: 0,
          idSede: 1
        };
        alertifyjs__WEBPACK_IMPORTED_MODULE_0___default().notify('<i class="fa-regular fa-calendar-check"></i> ' + res.data.mensaje, 'success', 5);
        _this.$parent.cargarUsuarios();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/HomeUsuarios.vue?vue&type=template&id=350417b3":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/HomeUsuarios.vue?vue&type=template&id=350417b3 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("main", [_c("h1", [_vm._v("Usuarios logísticos")]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm._m(0), _vm._v(" "), _c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.usuarios, function (usuario, index) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(usuario.nombre))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(usuario.email))]), _vm._v(" "), _c("td", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(usuario.rol))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getSedeName(usuario.idSede)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(usuario.privilegios == 0 ? "No" : "SI"))]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-outline-primary btn-sm",
      attrs: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#modalEditarUsuario"
      },
      on: {
        click: function click($event) {
          _vm.queUsuario = usuario;
        }
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-pen-to-square"
    }), _vm._v(" Editar")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-outline-danger btn-sm",
      on: {
        click: function click($event) {
          return _vm.cargarEliminar(index);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-user-slash"
    }), _vm._v(" Eliminar")])])]);
  }), 0)])])]), _vm._v(" "), _c("ModalEditarUsuario", {
    attrs: {
      usuario: _vm.queUsuario,
      sedes: _vm.sedes
    }
  }), _vm._v(" "), _c("ModalNuevoUsuario", {
    attrs: {
      sedes: _vm.sedes
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mb-2"
  }, [_c("button", {
    staticClass: "btn btn-outline-success",
    attrs: {
      "data-bs-toggle": "modal",
      "data-bs-target": "#modalCrearUsuario"
    }
  }, [_c("i", {
    staticClass: "far fa-user"
  }), _vm._v(" Crear nuevo usuario logístico")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Nombre")]), _vm._v(" "), _c("th", [_vm._v("Nick / Correo")]), _vm._v(" "), _c("th", [_vm._v("Nivel")]), _vm._v(" "), _c("th", [_vm._v("Sede")]), _vm._v(" "), _c("th", [_vm._v("Privilegios")]), _vm._v(" "), _c("th", [_vm._v("@")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/ModalEditarUsuario.vue?vue&type=template&id=557cf496":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/ModalEditarUsuario.vue?vue&type=template&id=557cf496 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "modal fade",
    attrs: {
      id: "modalEditarUsuario",
      tabindex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-sm"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Correo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.usuario.email,
      expression: "usuario.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.usuario.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.usuario, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Contraseña")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.clave,
      expression: "clave"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.clave
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.clave = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.usuario.nombre,
      expression: "usuario.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.usuario.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.usuario, "nombre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nivel")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.usuario.rol,
      expression: "usuario.rol"
    }],
    staticClass: "form-select",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.usuario, "rol", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "administrador"
    }
  }, [_vm._v("Administrador")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "interno"
    }
  }, [_vm._v("Interno")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "recepcionista"
    }
  }, [_vm._v("Recepcionista")])]), _vm._v(" "), _vm.usuario.rol != "interno" ? _c("div", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("¿Tiene privilegios administrativos?")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.usuario.privilegios,
      expression: "usuario.privilegios"
    }],
    staticClass: "form-select",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.usuario, "privilegios", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("No")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Sí")])])]) : _vm._e(), _vm._v(" "), _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Sede")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.usuario.idSede,
      expression: "usuario.idSede"
    }],
    staticClass: "form-select",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.usuario, "idSede", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("General (Sede 1)")]), _vm._v(" "), _vm._l(_vm.sedes, function (sede) {
    return _c("option", {
      key: sede.id,
      domProps: {
        value: sede.id
      }
    }, [_vm._v(_vm._s(sede.nombre))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    },
    on: {
      click: function click($event) {
        return _vm.guardar();
      }
    }
  }, [_vm._v("Actualizar campos")])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h1", {
    staticClass: "modal-title fs-5",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v("Editar usuario logístico")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/ModalNuevoUsuario.vue?vue&type=template&id=a4d7c6b6":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/ModalNuevoUsuario.vue?vue&type=template&id=a4d7c6b6 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "modal fade",
    attrs: {
      id: "modalCrearUsuario",
      tabindex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-sm"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Correo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.usuario.email,
      expression: "usuario.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.usuario.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.usuario, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Contraseña")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.usuario.clave,
      expression: "usuario.clave"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.usuario.clave
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.usuario, "clave", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.usuario.nombre,
      expression: "usuario.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.usuario.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.usuario, "nombre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nivel")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.usuario.rol,
      expression: "usuario.rol"
    }],
    staticClass: "form-select",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.usuario, "rol", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "administrador"
    }
  }, [_vm._v("Administrador")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "interno"
    }
  }, [_vm._v("Interno")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "recepcionista"
    }
  }, [_vm._v("Recepcionista")])]), _vm._v(" "), _vm.usuario.rol != "interno" ? _c("div", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("¿Tiene privilegios administrativos?")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.usuario.privilegios,
      expression: "usuario.privilegios"
    }],
    staticClass: "form-select",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.usuario, "privilegios", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("No")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Sí")])])]) : _vm._e(), _vm._v(" "), _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Sede")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.usuario.idSede,
      expression: "usuario.idSede"
    }],
    staticClass: "form-select",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.usuario, "idSede", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("General (Sede 1)")]), _vm._v(" "), _vm._l(_vm.sedes, function (sede) {
    return _c("option", {
      key: sede.id,
      domProps: {
        value: sede.id
      }
    }, [_vm._v(_vm._s(sede.nombre))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    },
    on: {
      click: function click($event) {
        return _vm.guardar();
      }
    }
  }, [_vm._v("Actualizar campos")])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h1", {
    staticClass: "modal-title fs-5",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v("Nuevo usuario logístico")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/usuarios/HomeUsuarios.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/usuarios/HomeUsuarios.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeUsuarios_vue_vue_type_template_id_350417b3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeUsuarios.vue?vue&type=template&id=350417b3 */ "./resources/js/components/usuarios/HomeUsuarios.vue?vue&type=template&id=350417b3");
/* harmony import */ var _HomeUsuarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeUsuarios.vue?vue&type=script&lang=js */ "./resources/js/components/usuarios/HomeUsuarios.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeUsuarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeUsuarios_vue_vue_type_template_id_350417b3__WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeUsuarios_vue_vue_type_template_id_350417b3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/usuarios/HomeUsuarios.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/usuarios/ModalEditarUsuario.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/usuarios/ModalEditarUsuario.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalEditarUsuario_vue_vue_type_template_id_557cf496__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalEditarUsuario.vue?vue&type=template&id=557cf496 */ "./resources/js/components/usuarios/ModalEditarUsuario.vue?vue&type=template&id=557cf496");
/* harmony import */ var _ModalEditarUsuario_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalEditarUsuario.vue?vue&type=script&lang=js */ "./resources/js/components/usuarios/ModalEditarUsuario.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalEditarUsuario_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalEditarUsuario_vue_vue_type_template_id_557cf496__WEBPACK_IMPORTED_MODULE_0__.render,
  _ModalEditarUsuario_vue_vue_type_template_id_557cf496__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/usuarios/ModalEditarUsuario.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/usuarios/ModalNuevoUsuario.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/usuarios/ModalNuevoUsuario.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalNuevoUsuario_vue_vue_type_template_id_a4d7c6b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalNuevoUsuario.vue?vue&type=template&id=a4d7c6b6 */ "./resources/js/components/usuarios/ModalNuevoUsuario.vue?vue&type=template&id=a4d7c6b6");
/* harmony import */ var _ModalNuevoUsuario_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalNuevoUsuario.vue?vue&type=script&lang=js */ "./resources/js/components/usuarios/ModalNuevoUsuario.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalNuevoUsuario_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalNuevoUsuario_vue_vue_type_template_id_a4d7c6b6__WEBPACK_IMPORTED_MODULE_0__.render,
  _ModalNuevoUsuario_vue_vue_type_template_id_a4d7c6b6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/usuarios/ModalNuevoUsuario.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/usuarios/HomeUsuarios.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/usuarios/HomeUsuarios.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeUsuarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeUsuarios.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/HomeUsuarios.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeUsuarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/usuarios/ModalEditarUsuario.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/usuarios/ModalEditarUsuario.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarUsuario_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalEditarUsuario.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/ModalEditarUsuario.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarUsuario_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/usuarios/ModalNuevoUsuario.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/usuarios/ModalNuevoUsuario.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNuevoUsuario_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalNuevoUsuario.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/ModalNuevoUsuario.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNuevoUsuario_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/usuarios/HomeUsuarios.vue?vue&type=template&id=350417b3":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/usuarios/HomeUsuarios.vue?vue&type=template&id=350417b3 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeUsuarios_vue_vue_type_template_id_350417b3__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeUsuarios_vue_vue_type_template_id_350417b3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeUsuarios_vue_vue_type_template_id_350417b3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeUsuarios.vue?vue&type=template&id=350417b3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/HomeUsuarios.vue?vue&type=template&id=350417b3");


/***/ }),

/***/ "./resources/js/components/usuarios/ModalEditarUsuario.vue?vue&type=template&id=557cf496":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/usuarios/ModalEditarUsuario.vue?vue&type=template&id=557cf496 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarUsuario_vue_vue_type_template_id_557cf496__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarUsuario_vue_vue_type_template_id_557cf496__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarUsuario_vue_vue_type_template_id_557cf496__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalEditarUsuario.vue?vue&type=template&id=557cf496 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/ModalEditarUsuario.vue?vue&type=template&id=557cf496");


/***/ }),

/***/ "./resources/js/components/usuarios/ModalNuevoUsuario.vue?vue&type=template&id=a4d7c6b6":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/usuarios/ModalNuevoUsuario.vue?vue&type=template&id=a4d7c6b6 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNuevoUsuario_vue_vue_type_template_id_a4d7c6b6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNuevoUsuario_vue_vue_type_template_id_a4d7c6b6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNuevoUsuario_vue_vue_type_template_id_a4d7c6b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalNuevoUsuario.vue?vue&type=template&id=a4d7c6b6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/usuarios/ModalNuevoUsuario.vue?vue&type=template&id=a4d7c6b6");


/***/ })

}]);