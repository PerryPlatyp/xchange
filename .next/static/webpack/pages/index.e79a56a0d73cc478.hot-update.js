"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/header.js":
/*!************************************!*\
  !*** ./pages/components/header.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/logo.png */ \"./public/logo.png\");\n\n\n\nvar HeaderStyle = {\n    backgroundColor: \"#fff\",\n    // make it go all the way to the top\n    position: \"fixed\",\n    top: 0,\n    left: 0,\n    width: \"100%\",\n    height: \"75px\",\n    // make it look floating over the rest of the page using a box-shadow\n    boxShadow: \"0px 0px 10px rgba(0,0,0,0.2)\"\n};\nvar fag = {\n    padding: \"22.5px\"\n};\nvar getStartewd = {\n    height: \"25px\",\n    width: \"100px\"\n};\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: HeaderStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: fag,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: _public_logo_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    height: \"25px\",\n                    width: \"100px\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\header.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\header.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: getStartewd,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Get Started\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\header.js\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\header.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\header.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n};\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNTO0FBRXhDLElBQU1FLFdBQVcsR0FBRztJQUNoQkMsZUFBZSxFQUFFLE1BQU07SUFDdkIsb0NBQW9DO0lBQ3BDQyxRQUFRLEVBQUUsT0FBTztJQUNqQkMsR0FBRyxFQUFFLENBQUM7SUFDTkMsSUFBSSxFQUFFLENBQUM7SUFDUEMsS0FBSyxFQUFFLE1BQU07SUFDYkMsTUFBTSxFQUFFLE1BQU07SUFDZCxxRUFBcUU7SUFDckVDLFNBQVMsRUFBRSw4QkFBOEI7Q0FDNUM7QUFFRCxJQUFNQyxHQUFHLEdBQUc7SUFDUkMsT0FBTyxFQUFFLFFBQVE7Q0FDcEI7QUFFRCxJQUFNQyxXQUFXLEdBQUc7SUFDaEJKLE1BQU0sRUFBRSxNQUFNO0lBQ2RELEtBQUssRUFBRSxPQUFPO0NBQ2pCO0FBRWMsU0FBU00sTUFBTSxHQUFHO0lBQzdCLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLEtBQUssRUFBRWIsV0FBVzs7MEJBQ25CLDhEQUFDWSxLQUFHO2dCQUFDQyxLQUFLLEVBQUVMLEdBQUc7MEJBQ1gsNEVBQUNWLG1EQUFLO29CQUFDZ0IsR0FBRyxFQUFFZix3REFBSTtvQkFBRU8sTUFBTSxFQUFDLE1BQU07b0JBQUNELEtBQUssRUFBQyxPQUFPOzs7Ozt3QkFBRzs7Ozs7b0JBQzlDOzBCQUNOLDhEQUFDTyxLQUFHO2dCQUFDQyxLQUFLLEVBQUVILFdBQVc7MEJBQ25CLDRFQUFDSyxRQUFNOzhCQUFDLGFBQVc7Ozs7O3dCQUFTOzs7OztvQkFDMUI7Ozs7OztZQUNKLENBQ1Q7Q0FDSjtBQVh1QkosS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2hlYWRlci5qcz8yZjZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vcHVibGljL2xvZ28ucG5nJ1xyXG5cclxuY29uc3QgSGVhZGVyU3R5bGUgPSB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgIC8vIG1ha2UgaXQgZ28gYWxsIHRoZSB3YXkgdG8gdGhlIHRvcFxyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzc1cHgnLFxyXG4gICAgLy8gbWFrZSBpdCBsb29rIGZsb2F0aW5nIG92ZXIgdGhlIHJlc3Qgb2YgdGhlIHBhZ2UgdXNpbmcgYSBib3gtc2hhZG93XHJcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIpJyxcclxufVxyXG5cclxuY29uc3QgZmFnID0ge1xyXG4gICAgcGFkZGluZzogJzIyLjVweCcsXHJcbn1cclxuXHJcbmNvbnN0IGdldFN0YXJ0ZXdkID0ge1xyXG4gICAgaGVpZ2h0OiAnMjVweCcsXHJcbiAgICB3aWR0aDogJzEwMHB4J1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e0hlYWRlclN0eWxlfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17ZmFnfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGhlaWdodD1cIjI1cHhcIiB3aWR0aD1cIjEwMHB4XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2dldFN0YXJ0ZXdkfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+R2V0IFN0YXJ0ZWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJsb2dvIiwiSGVhZGVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImJveFNoYWRvdyIsImZhZyIsInBhZGRpbmciLCJnZXRTdGFydGV3ZCIsIkhlYWRlciIsImRpdiIsInN0eWxlIiwic3JjIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/header.js\n"));

/***/ })

});