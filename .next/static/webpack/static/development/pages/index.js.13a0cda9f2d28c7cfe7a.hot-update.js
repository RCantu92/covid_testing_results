webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _back_end_covidTesting_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../back-end/covidTesting.js */ \"./back-end/covidTesting.js\");\n/* harmony import */ var _back_end_web3_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../back-end/web3.js */ \"./back-end/web3.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/robertocantu/blockchain_programming/covid_testing_results/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar CovidTesting = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(CovidTesting, _Component);\n\n  var _super = _createSuper(CovidTesting);\n\n  function CovidTesting() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, CovidTesting);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"state\", {\n      govntId: \"\",\n      errorMessage: \"\",\n      loading: false\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"onSubmitCivillian\", /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n        var accounts;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                // Browser from trying to\n                // submit the form\n                event.preventDefault();\n\n                _this.setState({\n                  loading: true,\n                  errorMessage: \"\"\n                });\n\n                _context.prev = 2;\n                _context.next = 5;\n                return _back_end_web3_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n              case 5:\n                accounts = _context.sent;\n                _context.next = 8;\n                return _back_end_covidTesting_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].methods.isCivillianTested(_this.state.govntId).send({\n                  from: accounts[0]\n                });\n\n              case 8:\n                _context.next = 13;\n                break;\n\n              case 10:\n                _context.prev = 10;\n                _context.t0 = _context[\"catch\"](2);\n\n                _this.setState({\n                  errorMessage: _context.t0.message\n                });\n\n              case 13:\n                _this.setState({\n                  loading: false\n                });\n\n              case 14:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[2, 10]]);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"onSubmitHealthcareProf\", /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {\n        var accounts;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                // Browser from trying to\n                // submit the form\n                event.preventDefault();\n\n                _this.setState({\n                  loading: true,\n                  errorMessage: \"\"\n                });\n\n                _context2.prev = 2;\n                _context2.next = 5;\n                return _back_end_web3_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n              case 5:\n                accounts = _context2.sent;\n                _context2.next = 8;\n                return _back_end_covidTesting_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].methods.isCivillianTested(_this.state.govntId).send({\n                  from: accounts[0]\n                });\n\n              case 8:\n                _context2.next = 13;\n                break;\n\n              case 10:\n                _context2.prev = 10;\n                _context2.t0 = _context2[\"catch\"](2);\n\n                _this.setState({\n                  errorMessage: _context2.t0.message\n                });\n\n              case 13:\n                _this.setState({\n                  loading: false\n                });\n\n              case 14:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[2, 10]]);\n      }));\n\n      return function (_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CovidTesting, [{\n    key: \"renderContractOwner\",\n    value: function renderContractOwner() {\n      var items = [{\n        header: 'Contract Owner Address:',\n        description: 'Ethereum address of the owner of the contract.',\n        meta: this.props.contractOwner,\n        fluid: true\n      }];\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Card\"].Group, {\n        items: items,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 16\n        }\n      });\n    }\n  }, {\n    key: \"renderCivillians\",\n    value: function renderCivillians(govntId) {\n      var items = _back_end_covidTesting_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].methods.isCivillianTested(govntId);\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Card\"].Group, {\n        items: items,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 16\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 17\n        }\n      }), this.renderContractOwner(), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        onSubmit: this.onSubmitCivillian,\n        error: !!this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 17\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"].Field, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 25\n        }\n      }, \"Confirm if civllian has been tested for COVID-19\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Input\"], {\n        placeholder: \"Search by Government Issued ID\",\n        onChange: function onChange(event) {\n          return _this2.setState({\n            govntId: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 25\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Message\"], {\n        error: true,\n        header: \"Error:\",\n        content: this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 21\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], {\n        loading: this.state.loading,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 21\n        }\n      }, \"Search\")), this.renderCivillians(parseInt(this.state.govntId)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"].Field, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 25\n        }\n      }, \"Confirm if healthcare professional is qualified to administer COVID-19 tests\"), __jsx(\"input\", {\n        placeholder: \"Search by Healthcare Professional License Number\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 25\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 21\n        }\n      }, \"Search\")));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n        var contractOwner;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return _back_end_covidTesting_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].methods.contractOwner().call();\n\n              case 2:\n                contractOwner = _context3.sent;\n                return _context3.abrupt(\"return\", {\n                  contractOwner: contractOwner\n                });\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return CovidTesting;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidTesting);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkNvdmlkVGVzdGluZyIsImdvdm50SWQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb3ZpZFRlc3RpbmciLCJtZXRob2RzIiwiaXNDaXZpbGxpYW5UZXN0ZWQiLCJzdGF0ZSIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwicHJvcHMiLCJjb250cmFjdE93bmVyIiwiZmx1aWQiLCJyZW5kZXJDb250cmFjdE93bmVyIiwib25TdWJtaXRDaXZpbGxpYW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlckNpdmlsbGlhbnMiLCJwYXJzZUludCIsImNhbGwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ007QUFDSkMsYUFBTyxFQUFFLEVBREw7QUFFSkMsa0JBQVksRUFBRSxFQUZWO0FBR0pDLGFBQU8sRUFBRTtBQUhMLEs7OztrTUF1QlksaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCO0FBQ0E7QUFDQUEscUJBQUssQ0FBQ0MsY0FBTjs7QUFFQSxzQkFBS0MsUUFBTCxDQUFjO0FBQUVILHlCQUFPLEVBQUUsSUFBWDtBQUFpQkQsOEJBQVksRUFBRTtBQUEvQixpQkFBZDs7QUFMZ0I7QUFBQTtBQUFBLHVCQVFXSywwREFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFSWDs7QUFBQTtBQVFOQyx3QkFSTTtBQUFBO0FBQUEsdUJBU05DLGtFQUFZLENBQUNDLE9BQWIsQ0FBcUJDLGlCQUFyQixDQUF1QyxNQUFLQyxL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dXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkLCBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IGNvdmlkVGVzdGluZyBmcm9tICcuLi9iYWNrLWVuZC9jb3ZpZFRlc3RpbmcuanMnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vYmFjay1lbmQvd2ViMy5qcyc7XG5cbmNsYXNzIENvdmlkVGVzdGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGdvdm50SWQ6IFwiXCIsXG4gICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9O1xuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgY29uc3QgY29udHJhY3RPd25lciA9IGF3YWl0IGNvdmlkVGVzdGluZy5tZXRob2RzLmNvbnRyYWN0T3duZXIoKS5jYWxsKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4geyBjb250cmFjdE93bmVyIH07XG4gICAgfVxuXG4gICAgcmVuZGVyQ29udHJhY3RPd25lcigpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbe1xuICAgICAgICAgICAgaGVhZGVyOiAnQ29udHJhY3QgT3duZXIgQWRkcmVzczonLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdFdGhlcmV1bSBhZGRyZXNzIG9mIHRoZSBvd25lciBvZiB0aGUgY29udHJhY3QuJyxcbiAgICAgICAgICAgIG1ldGE6IHRoaXMucHJvcHMuY29udHJhY3RPd25lcixcbiAgICAgICAgICAgIGZsdWlkOiB0cnVlXG4gICAgICAgIH1dO1xuXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xuICAgIH1cblxuICAgIG9uU3VibWl0Q2l2aWxsaWFuID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIEJyb3dzZXIgZnJvbSB0cnlpbmcgdG9cbiAgICAgICAgLy8gc3VibWl0IHRoZSBmb3JtXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogXCJcIiB9KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgYXdhaXQgY292aWRUZXN0aW5nLm1ldGhvZHMuaXNDaXZpbGxpYW5UZXN0ZWQodGhpcy5zdGF0ZS5nb3ZudElkKS5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgfTtcblxuICAgIG9uU3VibWl0SGVhbHRoY2FyZVByb2YgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gQnJvd3NlciBmcm9tIHRyeWluZyB0b1xuICAgICAgICAvLyBzdWJtaXQgdGhlIGZvcm1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBcIlwiIH0pO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBhd2FpdCBjb3ZpZFRlc3RpbmcubWV0aG9kcy5pc0NpdmlsbGlhblRlc3RlZCh0aGlzLnN0YXRlLmdvdm50SWQpLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyQ2l2aWxsaWFucyhnb3ZudElkKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY292aWRUZXN0aW5nLm1ldGhvZHMuaXNDaXZpbGxpYW5UZXN0ZWQoZ292bnRJZClcblxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiIC8+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29udHJhY3RPd25lcigpfVxuXG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXRDaXZpbGxpYW59IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q29uZmlybSBpZiBjaXZsbGlhbiBoYXMgYmVlbiB0ZXN0ZWQgZm9yIENPVklELTE5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgR292ZXJubWVudCBJc3N1ZWQgSURcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBnb3ZudElkOiBldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIkVycm9yOlwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+U2VhcmNoPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNpdmlsbGlhbnMocGFyc2VJbnQodGhpcy5zdGF0ZS5nb3ZudElkKSl9XG5cbiAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q29uZmlybSBpZiBoZWFsdGhjYXJlIHByb2Zlc3Npb25hbCBpcyBxdWFsaWZpZWQgdG8gYWRtaW5pc3RlciBDT1ZJRC0xOSB0ZXN0czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgSGVhbHRoY2FyZSBQcm9mZXNzaW9uYWwgTGljZW5zZSBOdW1iZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlNlYXJjaDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdmlkVGVzdGluZzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})