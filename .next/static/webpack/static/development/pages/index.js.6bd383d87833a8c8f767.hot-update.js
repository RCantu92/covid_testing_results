webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _back_end_covidTesting_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../back-end/covidTesting.js */ \"./back-end/covidTesting.js\");\n/* harmony import */ var _back_end_web3_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../back-end/web3.js */ \"./back-end/web3.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/robertocantu/blockchain_programming/covid_testing_results/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar CovidTesting = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(CovidTesting, _Component);\n\n  var _super = _createSuper(CovidTesting);\n\n  function CovidTesting() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, CovidTesting);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"state\", {\n      govntId: '',\n      isCivillianTested: '',\n      errorMessage: '',\n      loading: false\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"onSubmitCivillian\", /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n        var accounts, isCivillianTested;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                // Browser from trying to\n                // submit the form\n                event.preventDefault();\n\n                _this.setState({\n                  loading: true,\n                  errorMessage: ''\n                });\n\n                _context.prev = 2;\n                _context.next = 5;\n                return _back_end_web3_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n              case 5:\n                accounts = _context.sent;\n                _context.next = 8;\n                return _back_end_covidTesting_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].methods.isCivillianTested(_this.state.govntId).call();\n\n              case 8:\n                isCivillianTested = _context.sent;\n\n                _this.setState({\n                  isCivillianTested: isCivillianTested[0]\n                }); // console.log(this.state.isCivillianTested.toString());\n\n\n                _context.next = 15;\n                break;\n\n              case 12:\n                _context.prev = 12;\n                _context.t0 = _context[\"catch\"](2);\n\n                _this.setState({\n                  errorMessage: _context.t0.message\n                });\n\n              case 15:\n                _this.setState({\n                  loading: false\n                });\n\n              case 16:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[2, 12]]);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CovidTesting, [{\n    key: \"renderContractOwner\",\n    // Displays the Ethereum address that\n    // owns the overall contract.\n    value: function renderContractOwner() {\n      var items = [{\n        header: 'Contract Owner Address:',\n        description: 'Ethereum address of the owner of the contract.',\n        meta: this.props.contractOwner,\n        fluid: true\n      }];\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Card\"].Group, {\n        items: items,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 16\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 17\n        }\n      }), this.renderContractOwner(), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        onSubmit: this.onSubmitCivillian,\n        error: !!this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 17\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"].Field, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 25\n        }\n      }, \"Confirm if civllian has been tested for COVID-19\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Input\"], {\n        placeholder: \"Search civillian by government Issued ID number\",\n        onChange: function onChange(event) {\n          return _this2.setState({\n            govntId: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 25\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Message\"], {\n        error: true,\n        header: \"Error:\",\n        content: this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], {\n        type: \"submit\",\n        loading: this.state.loading,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }\n      }, \"Search\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Message\"], {\n        header: \"Searched Civillian COVID Tested: \",\n        content: this.state.isCivillianTested.toString(),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 21\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 17\n        }\n      }));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        var contractOwner;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _back_end_covidTesting_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].methods.contractOwner().call();\n\n              case 2:\n                contractOwner = _context2.sent;\n                return _context2.abrupt(\"return\", {\n                  contractOwner: contractOwner\n                });\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return CovidTesting;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidTesting); // in <Button>: onClick={this.onClick}\n\n/*\nForm Outline:\n\nShow owner of contract.\n\nHave option to check if a civillian has been tested for COVID.\n    \n    Enter civillian government ID number to check whether they have been tested.\n\nGo to page to add a civillian after they've been tested.\n\nGo to page to add a healthcare professional who is qualified to adminsiter COVID tests.\n*/\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkNvdmlkVGVzdGluZyIsImdvdm50SWQiLCJpc0NpdmlsbGlhblRlc3RlZCIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvdmlkVGVzdGluZyIsIm1ldGhvZHMiLCJzdGF0ZSIsImNhbGwiLCJtZXNzYWdlIiwiaXRlbXMiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsIm1ldGEiLCJwcm9wcyIsImNvbnRyYWN0T3duZXIiLCJmbHVpZCIsInJlbmRlckNvbnRyYWN0T3duZXIiLCJvblN1Ym1pdENpdmlsbGlhbiIsInRhcmdldCIsInZhbHVlIiwidG9TdHJpbmciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ007QUFDSkMsYUFBTyxFQUFFLEVBREw7QUFFSkMsdUJBQWlCLEVBQUUsRUFGZjtBQUdKQyxrQkFBWSxFQUFFLEVBSFY7QUFJSkMsYUFBTyxFQUFFO0FBSkwsSzs7O2tNQTBCWSxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEI7QUFDQTtBQUNBQSxxQkFBSyxDQUFDQyxjQUFOOztBQUVBLHNCQUFLQyxRQUFMLENBQWM7QUFBRUgseUJBQU8sRUFBRSxJQUFYO0FBQWlCRCw4QkFBWSxFQUFFO0FBQS9CLGlCQUFkOztBQUxnQjtBQUFBO0FBQUEsdUJBUVdLLDBEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFQVJYOztBQUFBO0FBUU5DLHdCQVJNO0FBQUE7QUFBQSx1QkFTa0JDLGtFQUFZLENBQUNDLE9BQWIsQ0FBcUJYLGlCQUFyQixDQUF1QyxNQUFLWSxLQUFMLENBQVdi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QiwyRUFBZixFLENBRUE7O0FBRUEiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkLCBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IGNvdmlkVGVzdGluZyBmcm9tICcuLi9iYWNrLWVuZC9jb3ZpZFRlc3RpbmcuanMnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vYmFjay1lbmQvd2ViMy5qcyc7XG5cbmNsYXNzIENvdmlkVGVzdGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGdvdm50SWQ6ICcnLFxuICAgICAgICBpc0NpdmlsbGlhblRlc3RlZDogJycsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0T3duZXIgPSBhd2FpdCBjb3ZpZFRlc3RpbmcubWV0aG9kcy5jb250cmFjdE93bmVyKCkuY2FsbCgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHsgY29udHJhY3RPd25lciB9O1xuICAgIH1cbiAgICBcbiAgICAvLyBEaXNwbGF5cyB0aGUgRXRoZXJldW0gYWRkcmVzcyB0aGF0XG4gICAgLy8gb3ducyB0aGUgb3ZlcmFsbCBjb250cmFjdC5cbiAgICByZW5kZXJDb250cmFjdE93bmVyKCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IFt7XG4gICAgICAgICAgICBoZWFkZXI6ICdDb250cmFjdCBPd25lciBBZGRyZXNzOicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0V0aGVyZXVtIGFkZHJlc3Mgb2YgdGhlIG93bmVyIG9mIHRoZSBjb250cmFjdC4nLFxuICAgICAgICAgICAgbWV0YTogdGhpcy5wcm9wcy5jb250cmFjdE93bmVyLFxuICAgICAgICAgICAgZmx1aWQ6IHRydWVcbiAgICAgICAgfV07XG5cbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gICAgfVxuXG4gICAgb25TdWJtaXRDaXZpbGxpYW4gPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gQnJvd3NlciBmcm9tIHRyeWluZyB0b1xuICAgICAgICAvLyBzdWJtaXQgdGhlIGZvcm1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgbGV0IGlzQ2l2aWxsaWFuVGVzdGVkID0gYXdhaXQgY292aWRUZXN0aW5nLm1ldGhvZHMuaXNDaXZpbGxpYW5UZXN0ZWQodGhpcy5zdGF0ZS5nb3ZudElkKS5jYWxsKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNDaXZpbGxpYW5UZXN0ZWQ6IGlzQ2l2aWxsaWFuVGVzdGVkWzBdIH0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5pc0NpdmlsbGlhblRlc3RlZC50b1N0cmluZygpKTtcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG5cblxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzcycgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb250cmFjdE93bmVyKCl9XG5cbiAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdENpdmlsbGlhbn0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9ID5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q29uZmlybSBpZiBjaXZsbGlhbiBoYXMgYmVlbiB0ZXN0ZWQgZm9yIENPVklELTE5PC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIGNpdmlsbGlhbiBieSBnb3Zlcm5tZW50IElzc3VlZCBJRCBudW1iZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGdvdm50SWQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9J0Vycm9yOicgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+U2VhcmNoPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgaGVhZGVyPSdTZWFyY2hlZCBDaXZpbGxpYW4gQ09WSUQgVGVzdGVkOiAnIGNvbnRlbnQ9e3RoaXMuc3RhdGUuaXNDaXZpbGxpYW5UZXN0ZWQudG9TdHJpbmcoKX0gLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgICAgICAgICA8Rm9ybT5cblxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdmlkVGVzdGluZztcblxuLy8gaW4gPEJ1dHRvbj46IG9uQ2xpY2s9e3RoaXMub25DbGlja31cblxuLypcbkZvcm0gT3V0bGluZTpcblxuU2hvdyBvd25lciBvZiBjb250cmFjdC5cblxuSGF2ZSBvcHRpb24gdG8gY2hlY2sgaWYgYSBjaXZpbGxpYW4gaGFzIGJlZW4gdGVzdGVkIGZvciBDT1ZJRC5cbiAgICBcbiAgICBFbnRlciBjaXZpbGxpYW4gZ292ZXJubWVudCBJRCBudW1iZXIgdG8gY2hlY2sgd2hldGhlciB0aGV5IGhhdmUgYmVlbiB0ZXN0ZWQuXG5cbkdvIHRvIHBhZ2UgdG8gYWRkIGEgY2l2aWxsaWFuIGFmdGVyIHRoZXkndmUgYmVlbiB0ZXN0ZWQuXG5cbkdvIHRvIHBhZ2UgdG8gYWRkIGEgaGVhbHRoY2FyZSBwcm9mZXNzaW9uYWwgd2hvIGlzIHF1YWxpZmllZCB0byBhZG1pbnNpdGVyIENPVklEIHRlc3RzLlxuKi8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})