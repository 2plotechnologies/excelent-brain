"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_profesional_components_consultas_Voice_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/Voice.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/Voice.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'speech_to_text',
  data: function data() {
    return {
      runtimeTranscription_: "",
      transcription_: [],
      lang_: "es-PE"
    };
  },
  methods: {
    startSpeechToTxt: function startSpeechToTxt() {
      var _this = this;
      // initialisation of voicereco

      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      var recognition = new window.SpeechRecognition();
      recognition.lang = this.lang_;
      recognition.interimResults = true;

      // event current voice reco word
      recognition.addEventListener("result", function (event) {
        var text = Array.from(event.results).map(function (result) {
          return result[0];
        }).map(function (result) {
          return result.transcript;
        }).join("");
        _this.runtimeTranscription_ = text;
      });
      // end of transcription
      recognition.addEventListener("end", function () {
        _this.transcription_.push(_this.runtimeTranscription_);
        _this.runtimeTranscription_ = "";
        recognition.stop();
      });
      recognition.start();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/Voice.vue?vue&type=template&id=4aa2ab96":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/Voice.vue?vue&type=template&id=4aa2ab96 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "voice"
  }, [_c("div", {
    staticClass: "speech-to-txt",
    on: {
      click: _vm.startSpeechToTxt
    }
  }, [_vm._v("Speech to txt")]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.transcription_))])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/profesional/components/consultas/Voice.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/profesional/components/consultas/Voice.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Voice_vue_vue_type_template_id_4aa2ab96__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Voice.vue?vue&type=template&id=4aa2ab96 */ "./resources/js/components/profesional/components/consultas/Voice.vue?vue&type=template&id=4aa2ab96");
/* harmony import */ var _Voice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Voice.vue?vue&type=script&lang=js */ "./resources/js/components/profesional/components/consultas/Voice.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Voice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Voice_vue_vue_type_template_id_4aa2ab96__WEBPACK_IMPORTED_MODULE_0__.render,
  _Voice_vue_vue_type_template_id_4aa2ab96__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profesional/components/consultas/Voice.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/profesional/components/consultas/Voice.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/profesional/components/consultas/Voice.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Voice.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/Voice.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/profesional/components/consultas/Voice.vue?vue&type=template&id=4aa2ab96":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/profesional/components/consultas/Voice.vue?vue&type=template&id=4aa2ab96 ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_template_id_4aa2ab96__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_template_id_4aa2ab96__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_template_id_4aa2ab96__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Voice.vue?vue&type=template&id=4aa2ab96 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profesional/components/consultas/Voice.vue?vue&type=template&id=4aa2ab96");


/***/ })

}]);