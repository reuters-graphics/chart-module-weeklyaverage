webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./defaultData.json */ \"./src/demo/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/demo/defaultData.json\", 1);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/u6068973/Documents/work/coronavirus/tracker-news-app/chart-module-weeklyaverage/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: '200'\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_10___default()(function () {\n      _this.chart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.chart.selection(this.chartContainer.current).data(_defaultData_json__WEBPACK_IMPORTED_MODULE_11__).props({\n        // population: 370000000,\n        labels: false,\n        x_axis: false,\n        bars: false,\n        left_y_axis: true,\n        date_range: ['2020-01-01', '2020-07-02'],\n        // YYYY-MM-DD format\n        margin: {\n          left: 0,\n          bottom: 0,\n          top: 0\n        } // bars: false,\n        // annotations:[\n        //     {\n        //       'date':'2020-02-12',\n        //       'text':'Hubei revises methodology',\n        //       'class':'hide-mobile'\n        //     },\n        //     {\n        //       'date':'2020-05-25',\n        //       'text':'Hubei revises methodology',\n        //       'class':'hide-desktop'\n        //     }]\n\n      }).draw(); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this2.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbIkNoYXJ0Q29tcG9uZW50Iiwid2lkdGgiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIkNoYXJ0IiwiZGVib3VuY2UiLCJjaGFydCIsImRyYXciLCJzZWxlY3Rpb24iLCJjaGFydENvbnRhaW5lciIsImN1cnJlbnQiLCJkYXRhIiwiZGVmYXVsdERhdGEiLCJwcm9wcyIsImxhYmVscyIsInhfYXhpcyIsImJhcnMiLCJsZWZ0X3lfYXhpcyIsImRhdGVfcmFuZ2UiLCJtYXJnaW4iLCJsZWZ0IiwiYm90dG9tIiwidG9wIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxjOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQUVDLFdBQUssRUFBRTtBQUFULEs7O3lOQUNTQyw0Q0FBSyxDQUFDQyxTQUFOLEU7O2dOQUdULElBQUlDLHFEQUFKLEU7O2lOQUdDQyx1REFBUSxDQUFDLFlBQU07QUFBRSxZQUFLQyxLQUFMLENBQVdDLElBQVg7QUFBb0IsS0FBN0IsRUFBK0IsR0FBL0IsQzs7Ozs7Ozt3Q0FFRztBQUNsQixXQUFLRCxLQUFMLENBQ0dFLFNBREgsQ0FDYSxLQUFLQyxjQUFMLENBQW9CQyxPQURqQyxFQUVHQyxJQUZILENBRVFDLCtDQUZSLEVBR0dDLEtBSEgsQ0FHUztBQUNMO0FBQ0FDLGNBQU0sRUFBRSxLQUZIO0FBR0xDLGNBQU0sRUFBRSxLQUhIO0FBSUxDLFlBQUksRUFBRSxLQUpEO0FBS0xDLG1CQUFXLEVBQUUsSUFMUjtBQU1MQyxrQkFBVSxFQUFFLENBQUMsWUFBRCxFQUFjLFlBQWQsQ0FOUDtBQU1vQztBQUN6Q0MsY0FBTSxFQUFDO0FBQ0xDLGNBQUksRUFBRSxDQUREO0FBQ0dDLGdCQUFNLEVBQUUsQ0FEWDtBQUNhQyxhQUFHLEVBQUM7QUFEakIsU0FQRixDQVVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFyQkssT0FIVCxFQTBCR2YsSUExQkgsR0FEa0IsQ0E2QmxCOztBQUNBZ0IsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLQyxNQUF2QztBQUNEOzs7MkNBRXNCO0FBQ3JCO0FBQ0FGLFlBQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBS0QsTUFBMUM7QUFDRDs7O3lDQUVvQjtBQUNuQjtBQUNBO0FBQ0EsV0FBS25CLEtBQUwsQ0FBV0MsSUFBWDtBQUNEOzs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDTixLQURELEdBQ1csS0FBSzBCLEtBRGhCLENBQ0MxQixLQUREO0FBRVAsYUFDRSxNQUFDLGlFQUFEO0FBQWdCLGFBQUssRUFBRUEsS0FBdkI7QUFBOEIsZ0JBQVEsRUFBRSxrQkFBQ0EsS0FBRDtBQUFBLGlCQUFXLE1BQUksQ0FBQzJCLFFBQUwsQ0FBYztBQUFFM0IsaUJBQUssRUFBTEE7QUFBRixXQUFkLENBQVg7QUFBQSxTQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUU7QUFBSyxVQUFFLEVBQUMsT0FBUjtBQUFnQixXQUFHLEVBQUUsS0FBS1EsY0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBREY7QUFNRDs7OztFQTlEMEJQLDRDQUFLLENBQUMyQixTOztBQWlFcEI3Qiw2RUFBZiIsImZpbGUiOiIuL3NyYy9kZW1vL0NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0IGZyb20gJy4uL2xpYi9jaGFydC5qcyc7XG5pbXBvcnQgQ2hhcnRDb250YWluZXIgZnJvbSAnLi9mdXJuaXR1cmUvQ2hhcnRDb250YWluZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xuaW1wb3J0IGRlZmF1bHREYXRhIGZyb20gJy4vZGVmYXVsdERhdGEuanNvbic7XG5cbmNsYXNzIENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IHdpZHRoOiAnMjAwJyB9O1xuICBjaGFydENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gIC8vIEluc3RhbnRpYXRlIGFuZCBhZGQgb3VyIGNoYXJ0IGNsYXNzIHRvIHRoaXMgY29tcG9uZW50LlxuICBjaGFydCA9IG5ldyBDaGFydCgpO1xuXG4gIC8vIEEgcmVzaXplIGZ1bmN0aW9uIHRvIHJlZHJhdyB0aGUgY2hhcnQuXG4gIHJlc2l6ZSA9IGRlYm91bmNlKCgpID0+IHsgdGhpcy5jaGFydC5kcmF3KCk7IH0sIDI1MCk7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jaGFydFxuICAgICAgLnNlbGVjdGlvbih0aGlzLmNoYXJ0Q29udGFpbmVyLmN1cnJlbnQpXG4gICAgICAuZGF0YShkZWZhdWx0RGF0YSlcbiAgICAgIC5wcm9wcyh7XG4gICAgICAgIC8vIHBvcHVsYXRpb246IDM3MDAwMDAwMCxcbiAgICAgICAgbGFiZWxzOiBmYWxzZSxcbiAgICAgICAgeF9heGlzOiBmYWxzZSxcbiAgICAgICAgYmFyczogZmFsc2UsXG4gICAgICAgIGxlZnRfeV9heGlzOiB0cnVlLFxuICAgICAgICBkYXRlX3JhbmdlOiBbJzIwMjAtMDEtMDEnLCcyMDIwLTA3LTAyJ10sIC8vIFlZWVktTU0tREQgZm9ybWF0XG4gICAgICAgIG1hcmdpbjp7XG4gICAgICAgICAgbGVmdDogMCxib3R0b206IDAsdG9wOjBcbiAgICAgICAgfVxuICAgICAgICAvLyBiYXJzOiBmYWxzZSxcbiAgICAgICAgLy8gYW5ub3RhdGlvbnM6W1xuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAnZGF0ZSc6JzIwMjAtMDItMTInLFxuICAgICAgICAvLyAgICAgICAndGV4dCc6J0h1YmVpIHJldmlzZXMgbWV0aG9kb2xvZ3knLFxuICAgICAgICAvLyAgICAgICAnY2xhc3MnOidoaWRlLW1vYmlsZSdcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICdkYXRlJzonMjAyMC0wNS0yNScsXG4gICAgICAgIC8vICAgICAgICd0ZXh0JzonSHViZWkgcmV2aXNlcyBtZXRob2RvbG9neScsXG4gICAgICAgIC8vICAgICAgICdjbGFzcyc6J2hpZGUtZGVza3RvcCdcbiAgICAgICAgLy8gICAgIH1dXG4gICAgICB9KVxuICAgICAgLmRyYXcoKTtcblxuICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHJlc2l6ZSBjaGFydCB3aXRoIHRoZSB3aW5kb3cuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIFJlbW92ZSBsaXN0ZW5lciBpZiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQsIHRvby5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vIFVwZGF0ZSB0aGUgY2hhcnQgd2l0aCB0aGUgY29tcG9uZW50LlxuICAgIC8vIENhbiBjaGFuZ2UgZGF0YSBvciBwcm9wcyBoZXJlLCB3aGF0ZXZlci4uLlxuICAgIHRoaXMuY2hhcnQuZHJhdygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDaGFydENvbnRhaW5lciB3aWR0aD17d2lkdGh9IHNldFdpZHRoPXsod2lkdGgpID0+IHRoaXMuc2V0U3RhdGUoeyB3aWR0aCB9KX0+XG4gICAgICAgIHsvKiBUaGlzIGlzIG91ciBjaGFydCBjb250YWluZXIg8J+RhyAqL31cbiAgICAgICAgPGRpdiBpZD0nY2hhcnQnIHJlZj17dGhpcy5jaGFydENvbnRhaW5lcn0gLz5cbiAgICAgIDwvQ2hhcnRDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydENvbXBvbmVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})