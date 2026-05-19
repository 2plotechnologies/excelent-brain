"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_login_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/Login.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/Login.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Login',
  data: function data() {
    return {
      formData: {
        email: '',
        password: '',
        device_name: 'browser'
      },
      errors: {},
      errorGeneral: '',
      showPassword: false,
      isLoading: false,
      version: '5.57 Build 26.0415'
    };
  },
  methods: {
    login: function login() {
      var _this = this;
      this.errors = {};
      this.errorGeneral = '';
      if (!this.formData.email) {
        this.errors.email = 'El correo es requerido.';
        return;
      }
      if (!this.formData.password) {
        this.errors.password = 'La contraseña es requerida.';
        return;
      }
      this.isLoading = true;
      this.axios.post('/api/login', this.formData).then(function (res) {
        var token = res.data.token;
        var rol = res.data.rol;
        if (!token || !rol) {
          console.error('Respuesta de login inesperada:', res.data);
          _this.errorGeneral = 'Respuesta inesperada del servidor.';
          return;
        }
        localStorage.setItem('token', token);
        _this.$router.push({
          path: "/".concat(rol, "/home")
        });
      })["catch"](function (err) {
        var _err$response, _err$response2;
        console.error('Login error:', err);
        if (((_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.status) === 422) {
          var data = err.response.data;
          if (data.errors) {
            _this.errors = data.errors;
          } else if (data.message) {
            _this.errorGeneral = data.message;
          } else {
            _this.errorGeneral = 'Credenciales incorrectas. Verifique su correo y contraseña.';
          }
        } else if (((_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.status) === 401) {
          _this.errorGeneral = 'Credenciales incorrectas.';
        } else {
          _this.errorGeneral = 'Error de conexión. Intente nuevamente.';
        }
      })["finally"](function () {
        _this.isLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/Login.vue?vue&type=template&id=0110baa8":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/Login.vue?vue&type=template&id=0110baa8 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      id: "clinic-login-root"
    }
  }, [_c("div", {
    staticClass: "cl-orb cl-orb-1"
  }), _vm._v(" "), _c("div", {
    staticClass: "cl-orb cl-orb-2"
  }), _vm._v(" "), _c("div", {
    staticClass: "cl-orb cl-orb-3"
  }), _vm._v(" "), _c("div", {
    staticClass: "cl-card"
  }, [_c("div", {
    staticClass: "cl-panel-left"
  }, [_c("div", {
    staticClass: "cl-panel-left-inner"
  }, [_c("div", {
    staticClass: "cl-quote-mark"
  }, [_vm._v('"')]), _vm._v(" "), _c("p", {
    staticClass: "cl-quote-text"
  }, [_vm._v("El bienestar mental es la base de una vida plena y equilibrada.")]), _vm._v(" "), _c("div", {
    staticClass: "cl-quote-line"
  }), _vm._v(" "), _c("span", {
    staticClass: "cl-quote-author"
  }, [_vm._v("Centro de Salud Mental")]), _vm._v(" "), _c("div", {
    staticClass: "cl-deco-svg"
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 280 280",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("circle", {
    attrs: {
      cx: "140",
      cy: "140",
      r: "120",
      stroke: "rgba(255,255,255,0.07)",
      "stroke-width": "1"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "140",
      cy: "140",
      r: "82",
      stroke: "rgba(255,255,255,0.1)",
      "stroke-width": "1"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "140",
      cy: "140",
      r: "44",
      stroke: "rgba(255,255,255,0.14)",
      "stroke-width": "1"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M140 88 C112 88 94 106 94 128 C94 146 104 160 120 165 L120 192 L160 192 L160 165 C176 160 186 146 186 128 C186 106 168 88 140 88Z",
      stroke: "rgba(255,255,255,0.28)",
      "stroke-width": "1.4",
      fill: "none",
      "stroke-linecap": "round"
    }
  }), _vm._v(" "), _c("line", {
    attrs: {
      x1: "140",
      y1: "116",
      x2: "140",
      y2: "165",
      stroke: "rgba(255,255,255,0.15)",
      "stroke-width": "1"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M120 132 C120 124 128 118 137 118",
      stroke: "rgba(255,255,255,0.2)",
      "stroke-width": "1.2",
      fill: "none",
      "stroke-linecap": "round"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M160 132 C160 124 152 118 143 118",
      stroke: "rgba(255,255,255,0.2)",
      "stroke-width": "1.2",
      fill: "none",
      "stroke-linecap": "round"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "cl-dots"
  }, _vm._l(9, function (i) {
    return _c("span", {
      key: i,
      staticClass: "cl-dot"
    });
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "cl-panel-right"
  }, [_c("div", {
    staticClass: "cl-form-box"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm.errorGeneral ? _c("div", {
    staticClass: "cl-alert"
  }, [_vm._v("\n          " + _vm._s(_vm.errorGeneral) + "\n        ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "cl-fields"
  }, [_c("div", {
    staticClass: "cl-field"
  }, [_c("label", {
    staticClass: "cl-label",
    attrs: {
      "for": "cl-email"
    }
  }, [_vm._v("Correo electrónico")]), _vm._v(" "), _c("div", {
    staticClass: "cl-input-wrap"
  }, [_c("svg", {
    staticClass: "cl-input-icon",
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none"
    }
  }, [_c("path", {
    attrs: {
      d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
      stroke: "currentColor",
      "stroke-width": "1.5"
    }
  }), _vm._v(" "), _c("polyline", {
    attrs: {
      points: "22,6 12,13 2,6",
      stroke: "currentColor",
      "stroke-width": "1.5"
    }
  })]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.email,
      expression: "formData.email"
    }],
    staticClass: "cl-input",
    "class": {
      "cl-input--error": _vm.errors.email
    },
    attrs: {
      id: "cl-email",
      type: "email",
      placeholder: "nombre@clinica.com",
      autocomplete: "email"
    },
    domProps: {
      value: _vm.formData.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "email", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm.errors.email ? _c("span", {
    staticClass: "cl-error-msg"
  }, [_vm._v(_vm._s(Array.isArray(_vm.errors.email) ? _vm.errors.email[0] : _vm.errors.email))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "cl-field"
  }, [_c("label", {
    staticClass: "cl-label",
    attrs: {
      "for": "cl-password"
    }
  }, [_vm._v("Contraseña")]), _vm._v(" "), _c("div", {
    staticClass: "cl-input-wrap"
  }, [_c("svg", {
    staticClass: "cl-input-icon",
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none"
    }
  }, [_c("rect", {
    attrs: {
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2",
      stroke: "currentColor",
      "stroke-width": "1.5"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M7 11V7a5 5 0 0110 0v4",
      stroke: "currentColor",
      "stroke-width": "1.5"
    }
  })]), _vm._v(" "), (_vm.showPassword ? "text" : "password") === "checkbox" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.password,
      expression: "formData.password"
    }],
    staticClass: "cl-input",
    "class": {
      "cl-input--error": _vm.errors.password
    },
    attrs: {
      id: "cl-password",
      placeholder: "••••••••••",
      autocomplete: "current-password",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.formData.password) ? _vm._i(_vm.formData.password, null) > -1 : _vm.formData.password
    },
    on: {
      change: function change($event) {
        var $$a = _vm.formData.password,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.formData, "password", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.formData, "password", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.formData, "password", $$c);
        }
      }
    }
  }) : (_vm.showPassword ? "text" : "password") === "radio" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.password,
      expression: "formData.password"
    }],
    staticClass: "cl-input",
    "class": {
      "cl-input--error": _vm.errors.password
    },
    attrs: {
      id: "cl-password",
      placeholder: "••••••••••",
      autocomplete: "current-password",
      type: "radio"
    },
    domProps: {
      checked: _vm._q(_vm.formData.password, null)
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formData, "password", null);
      }
    }
  }) : _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.password,
      expression: "formData.password"
    }],
    staticClass: "cl-input",
    "class": {
      "cl-input--error": _vm.errors.password
    },
    attrs: {
      id: "cl-password",
      placeholder: "••••••••••",
      autocomplete: "current-password",
      type: _vm.showPassword ? "text" : "password"
    },
    domProps: {
      value: _vm.formData.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "cl-toggle-pw",
    attrs: {
      type: "button",
      tabindex: "-1"
    },
    on: {
      click: function click($event) {
        _vm.showPassword = !_vm.showPassword;
      }
    }
  }, [!_vm.showPassword ? _c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none"
    }
  }, [_c("path", {
    attrs: {
      d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
      stroke: "currentColor",
      "stroke-width": "1.5"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "12",
      cy: "12",
      r: "3",
      stroke: "currentColor",
      "stroke-width": "1.5"
    }
  })]) : _c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none"
    }
  }, [_c("path", {
    attrs: {
      d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24",
      stroke: "currentColor",
      "stroke-width": "1.5"
    }
  }), _vm._v(" "), _c("line", {
    attrs: {
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23",
      stroke: "currentColor",
      "stroke-width": "1.5"
    }
  })])])]), _vm._v(" "), _vm.errors.password ? _c("span", {
    staticClass: "cl-error-msg"
  }, [_vm._v(_vm._s(Array.isArray(_vm.errors.password) ? _vm.errors.password[0] : _vm.errors.password))]) : _vm._e()])]), _vm._v(" "), _c("button", {
    staticClass: "cl-btn",
    attrs: {
      disabled: _vm.isLoading
    },
    on: {
      click: _vm.login
    }
  }, [_c("span", {
    staticClass: "cl-btn-text"
  }, [_vm._v(_vm._s(_vm.isLoading ? "Verificando..." : "Ingresar"))]), _vm._v(" "), !_vm.isLoading ? _c("span", {
    staticClass: "cl-btn-arrow"
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none"
    }
  }, [_c("path", {
    attrs: {
      d: "M5 12h14M12 5l7 7-7 7",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.isLoading ? _c("span", {
    staticClass: "cl-spinner"
  }) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "cl-footer"
  }, [_vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("p", {
    staticClass: "cl-version"
  }, [_vm._v("v" + _vm._s(_vm.version))])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "cl-logo-wrap"
  }, [_c("img", {
    staticClass: "cl-logo",
    attrs: {
      src: "/img/logoem.png",
      alt: "Logo"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "cl-form-header"
  }, [_c("h1", {
    staticClass: "cl-title"
  }, [_vm._v("Acceso al Sistema")]), _vm._v(" "), _c("p", {
    staticClass: "cl-subtitle"
  }, [_vm._v("Consultorio Online — Área Profesional")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "cl-divider"
  }, [_c("span", [_vm._v("Acceso seguro y cifrado")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "cl-badges"
  }, [_c("span", {
    staticClass: "cl-badge"
  }, [_vm._v("🔒 SSL")]), _vm._v(" "), _c("span", {
    staticClass: "cl-badge"
  }, [_vm._v("🕐 24/7")]), _vm._v(" "), _c("span", {
    staticClass: "cl-badge"
  }, [_vm._v("👤 Solo personal")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/Login.vue?vue&type=style&index=0&id=0110baa8&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/Login.vue?vue&type=style&index=0&id=0110baa8&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#clinic-login-root {\n  min-height: 100vh !important;\n  width: 100% !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  background: #eceef4 !important;\n  font-family: 'DM Sans', sans-serif !important;\n  position: relative !important;\n  overflow: hidden !important;\n  padding: 2rem !important;\n  box-sizing: border-box !important;\n}\n#clinic-login-root .cl-orb {\n  position: fixed !important;\n  border-radius: 50% !important;\n  pointer-events: none !important;\n  z-index: 0 !important;\n  filter: blur(90px) !important;\n  opacity: 0.4 !important;\n}\n#clinic-login-root .cl-orb-1 {\n  width: 500px !important; height: 500px !important;\n  background: radial-gradient(circle, #f47c30, transparent 70%) !important;\n  top: -160px !important; left: -120px !important;\n  animation: cl-float 16s ease-in-out infinite !important;\n}\n#clinic-login-root .cl-orb-2 {\n  width: 360px !important; height: 360px !important;\n  background: radial-gradient(circle, #4a80d4, transparent 70%) !important;\n  bottom: -80px !important; right: -80px !important;\n  animation: cl-float 20s ease-in-out infinite reverse !important;\n}\n#clinic-login-root .cl-orb-3 {\n  width: 240px !important; height: 240px !important;\n  background: radial-gradient(circle, #1a3a6b, transparent 70%) !important;\n  top: 45% !important; left: 45% !important;\n  animation: cl-float 26s ease-in-out infinite !important;\n}\n@keyframes cl-float {\n0%,100% { transform: translate(0,0) scale(1);\n}\n33%      { transform: translate(28px,-18px) scale(1.04);\n}\n66%      { transform: translate(-18px,28px) scale(0.97);\n}\n}\n#clinic-login-root .cl-card {\n  position: relative !important;\n  z-index: 1 !important;\n  display: flex !important;\n  width: 100% !important;\n  max-width: 920px !important;\n  min-height: 560px !important;\n  border-radius: 20px !important;\n  overflow: hidden !important;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.04), 0 24px 64px rgba(10,31,68,0.2), 0 0 0 1px rgba(255,255,255,0.6) !important;\n  animation: cl-rise 0.7s cubic-bezier(0.16,1,0.3,1) both !important;\n}\n@keyframes cl-rise {\nfrom { opacity: 0; transform: translateY(30px);\n}\nto   { opacity: 1; transform: translateY(0);\n}\n}\n#clinic-login-root .cl-panel-left {\n  flex: 0 0 42% !important;\n  background: linear-gradient(148deg, #0a1f44 0%, #1a3a6b 55%, #0d2d5a 100%) !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  position: relative !important;\n  overflow: hidden !important;\n}\n#clinic-login-root .cl-panel-left::before {\n  content: '' !important;\n  position: absolute !important;\n  inset: 0 !important;\n  background: radial-gradient(ellipse at 25% 25%, rgba(255,140,50,0.2) 0%, transparent 58%),\n              radial-gradient(ellipse at 75% 75%, rgba(100,160,255,0.14) 0%, transparent 55%) !important;\n  pointer-events: none !important;\n}\n#clinic-login-root .cl-panel-left-inner {\n  position: relative !important;\n  z-index: 1 !important;\n  padding: 3rem 2.5rem !important;\n  display: flex !important;\n  flex-direction: column !important;\n  align-items: center !important;\n  gap: 1.6rem !important;\n  text-align: center !important;\n}\n#clinic-login-root .cl-quote-mark {\n  font-family: 'Cormorant Garamond', serif !important;\n  font-size: 5rem !important;\n  line-height: 0.8 !important;\n  color: #f47c30 !important;\n}\n#clinic-login-root .cl-quote-text {\n  font-family: 'Cormorant Garamond', serif !important;\n  font-size: 1.15rem !important;\n  font-weight: 300 !important;\n  font-style: italic !important;\n  color: rgba(255,255,255,0.85) !important;\n  line-height: 1.75 !important;\n  max-width: 240px !important;\n  margin: 0 auto !important;\n}\n#clinic-login-root .cl-quote-line {\n  width: 36px !important;\n  height: 1px !important;\n  background: #f47c30 !important;\n  margin: 0 auto !important;\n}\n#clinic-login-root .cl-quote-author {\n  font-size: 0.7rem !important;\n  letter-spacing: 0.16em !important;\n  text-transform: uppercase !important;\n  color: rgba(255,255,255,0.4) !important;\n}\n#clinic-login-root .cl-deco-svg {\n  width: 160px !important;\n  opacity: 0.7 !important;\n  animation: cl-spin 50s linear infinite !important;\n}\n@keyframes cl-spin {\nto { transform: rotate(360deg);\n}\n}\n#clinic-login-root .cl-dots {\n  display: grid !important;\n  grid-template-columns: repeat(3, 1fr) !important;\n  gap: 9px !important;\n}\n#clinic-login-root .cl-dot {\n  display: block !important;\n  width: 4px !important;\n  height: 4px !important;\n  border-radius: 50% !important;\n  background: rgba(255,255,255,0.22) !important;\n}\n#clinic-login-root .cl-panel-right {\n  flex: 1 !important;\n  background: #ffffff !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 3rem 2.5rem !important;\n  position: relative !important;\n}\n#clinic-login-root .cl-panel-right::before {\n  content: '' !important;\n  position: absolute !important;\n  top: 0 !important; left: 0 !important;\n  width: 2px !important; height: 100% !important;\n  background: linear-gradient(to bottom, transparent, #f47c30 40%, #f47c30 60%, transparent) !important;\n  opacity: 0.35 !important;\n}\n#clinic-login-root .cl-form-box {\n  width: 100% !important;\n  max-width: 360px !important;\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 1.6rem !important;\n}\n#clinic-login-root .cl-logo-wrap { text-align: center !important;\n}\n#clinic-login-root .cl-logo {\n  max-width: 180px !important;\n  max-height: 80px !important;\n  -o-object-fit: contain !important;\n     object-fit: contain !important;\n  display: inline-block !important;\n}\n#clinic-login-root .cl-title {\n  font-family: 'Cormorant Garamond', serif !important;\n  font-size: 1.85rem !important;\n  font-weight: 500 !important;\n  color: #1a1a2e !important;\n  text-align: center !important;\n  letter-spacing: -0.01em !important;\n  line-height: 1.2 !important;\n  margin: 0 !important;\n}\n#clinic-login-root .cl-subtitle {\n  font-size: 0.72rem !important;\n  letter-spacing: 0.1em !important;\n  text-transform: uppercase !important;\n  color: #7a8a9a !important;\n  text-align: center !important;\n  margin: 0.35rem 0 0 !important;\n}\n#clinic-login-root .cl-alert {\n  background: #fdf3f3 !important;\n  border: 1px solid #f0c0c0 !important;\n  border-radius: 8px !important;\n  padding: 0.75rem 1rem !important;\n  font-size: 0.82rem !important;\n  color: #c0392b !important;\n  text-align: center !important;\n}\n#clinic-login-root .cl-fields {\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 1rem !important;\n}\n#clinic-login-root .cl-field {\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 0.4rem !important;\n}\n#clinic-login-root .cl-label {\n  font-size: 0.72rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0.09em !important;\n  text-transform: uppercase !important;\n  color: #3d4a5c !important;\n}\n#clinic-login-root .cl-input-wrap {\n  position: relative !important;\n  display: flex !important;\n  align-items: center !important;\n}\n#clinic-login-root .cl-input-icon {\n  position: absolute !important;\n  left: 13px !important;\n  width: 15px !important;\n  height: 15px !important;\n  color: #9aabb8 !important;\n  pointer-events: none !important;\n}\n#clinic-login-root .cl-input {\n  width: 100% !important;\n  padding: 0.78rem 2.8rem !important;\n  border: 1.5px solid #ddd8cf !important;\n  border-radius: 8px !important;\n  font-family: 'DM Sans', sans-serif !important;\n  font-size: 0.87rem !important;\n  color: #1a1a2e !important;\n  background: #faf9f6 !important;\n  outline: none !important;\n  transition: border-color 0.2s, box-shadow 0.2s !important;\n  box-shadow: none !important;\n  -webkit-appearance: none !important;\n}\n#clinic-login-root .cl-input::-moz-placeholder { color: #bbb !important;\n}\n#clinic-login-root .cl-input::placeholder { color: #bbb !important;\n}\n#clinic-login-root .cl-input:focus {\n  border-color: #f47c30 !important;\n  background: #fff !important;\n  box-shadow: 0 0 0 3px rgba(244,124,48,0.12) !important;\n}\n#clinic-login-root .cl-input--error {\n  border-color: #c0392b !important;\n  background: #fdf8f8 !important;\n}\n#clinic-login-root .cl-error-msg {\n  font-size: 0.73rem !important;\n  color: #c0392b !important;\n}\n#clinic-login-root .cl-toggle-pw {\n  position: absolute !important;\n  right: 11px !important;\n  background: none !important;\n  border: none !important;\n  cursor: pointer !important;\n  color: #9aabb8 !important;\n  padding: 4px !important;\n  display: flex !important;\n  align-items: center !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\n#clinic-login-root .cl-toggle-pw:hover { color: #f47c30 !important;\n}\n#clinic-login-root .cl-toggle-pw svg { width: 15px !important; height: 15px !important;\n}\n\n/* ── BOTÓN ── */\n#clinic-login-root .cl-btn {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 0.6rem !important;\n  width: 100% !important;\n  padding: 0.88rem 1.5rem !important;\n  background: linear-gradient(135deg, #e8620a 0%, #f47c30 100%) !important;\n  color: #ffffff !important;\n  border: none !important;\n  border-radius: 8px !important;\n  font-family: 'DM Sans', sans-serif !important;\n  font-size: 0.85rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0.08em !important;\n  text-transform: uppercase !important;\n  cursor: pointer !important;\n  transition: transform 0.18s, box-shadow 0.18s !important;\n  box-shadow: 0 4px 18px rgba(232,98,10,0.35) !important;\n  position: relative !important;\n  overflow: hidden !important;\n}\n#clinic-login-root .cl-btn:hover:not(:disabled) {\n  transform: translateY(-2px) !important;\n  box-shadow: 0 8px 26px rgba(232,98,10,0.42) !important;\n}\n#clinic-login-root .cl-btn:disabled {\n  opacity: 0.65 !important;\n  cursor: not-allowed !important;\n}\n#clinic-login-root .cl-btn-arrow svg {\n  width: 16px !important;\n  height: 16px !important;\n  transition: transform 0.2s !important;\n}\n#clinic-login-root .cl-btn:hover .cl-btn-arrow svg {\n  transform: translateX(3px) !important;\n}\n#clinic-login-root .cl-spinner {\n  display: inline-block !important;\n  width: 16px !important; height: 16px !important;\n  border: 2px solid rgba(255,255,255,0.3) !important;\n  border-top-color: #fff !important;\n  border-radius: 50% !important;\n  animation: cl-spin-fast 0.7s linear infinite !important;\n}\n@keyframes cl-spin-fast {\nto { transform: rotate(360deg);\n}\n}\n#clinic-login-root .cl-footer {\n  display: flex !important;\n  flex-direction: column !important;\n  align-items: center !important;\n  gap: 0.9rem !important;\n}\n#clinic-login-root .cl-divider {\n  display: flex !important;\n  align-items: center !important;\n  gap: 0.75rem !important;\n  width: 100% !important;\n  font-size: 0.68rem !important;\n  letter-spacing: 0.08em !important;\n  text-transform: uppercase !important;\n  color: #9aabb8 !important;\n}\n#clinic-login-root .cl-divider::before,\n#clinic-login-root .cl-divider::after {\n  content: '' !important;\n  flex: 1 !important;\n  height: 1px !important;\n  background: #e2ddd5 !important;\n}\n#clinic-login-root .cl-badges {\n  display: flex !important;\n  gap: 0.5rem !important;\n  flex-wrap: wrap !important;\n  justify-content: center !important;\n}\n#clinic-login-root .cl-badge {\n  display: inline-flex !important;\n  align-items: center !important;\n  padding: 0.28rem 0.65rem !important;\n  background: #f5f0e8 !important;\n  border: 1px solid #e2ddd5 !important;\n  border-radius: 100px !important;\n  font-size: 0.68rem !important;\n  color: #3d4a5c !important;\n}\n#clinic-login-root .cl-version {\n  font-size: 0.65rem !important;\n  color: #c0c0c0 !important;\n  margin: 0 !important;\n}\n@media (max-width: 660px) {\n#clinic-login-root .cl-panel-left { display: none !important;\n}\n#clinic-login-root .cl-panel-right { padding: 2.2rem 1.6rem !important;\n}\n#clinic-login-root .cl-card { border-radius: 14px !important;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/Login.vue?vue&type=style&index=0&id=0110baa8&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/Login.vue?vue&type=style&index=0&id=0110baa8&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_0110baa8_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=style&index=0&id=0110baa8&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/Login.vue?vue&type=style&index=0&id=0110baa8&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_0110baa8_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_0110baa8_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/login/Login.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/login/Login.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_0110baa8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=0110baa8 */ "./resources/js/components/login/Login.vue?vue&type=template&id=0110baa8");
/* harmony import */ var _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js */ "./resources/js/components/login/Login.vue?vue&type=script&lang=js");
/* harmony import */ var _Login_vue_vue_type_style_index_0_id_0110baa8_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&id=0110baa8&lang=css */ "./resources/js/components/login/Login.vue?vue&type=style&index=0&id=0110baa8&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_0110baa8__WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_0110baa8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/login/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/login/Login.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/login/Login.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/Login.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/login/Login.vue?vue&type=template&id=0110baa8":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/login/Login.vue?vue&type=template&id=0110baa8 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0110baa8__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0110baa8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0110baa8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=0110baa8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/Login.vue?vue&type=template&id=0110baa8");


/***/ }),

/***/ "./resources/js/components/login/Login.vue?vue&type=style&index=0&id=0110baa8&lang=css":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/login/Login.vue?vue&type=style&index=0&id=0110baa8&lang=css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_0110baa8_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=style&index=0&id=0110baa8&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/Login.vue?vue&type=style&index=0&id=0110baa8&lang=css");


/***/ })

}]);