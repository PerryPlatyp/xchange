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

/***/ "./pages/components/exchangebox.js":
/*!*****************************************!*\
  !*** ./pages/components/exchangebox.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ exchagnebox; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/logo.png */ \"./public/logo.png\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\n\n\n\nvar style = {\n    height: \"100px\",\n    width: \"50%\",\n    position: \"relative\",\n    backgroundColor: \"#fafafa\",\n    top: \"10%\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\",\n    display: \"flex\",\n    // add a drop shadow to make it look like a box\n    boxShadow: \"0px 0px 10px rgba(0,0,0,0.2)\",\n    // align all items in the center\n    justifyContent: \"center\",\n    alignItems: \"center\"\n};\nvar buttonstyle = // remove left top and bottom border\n// make text grey\n(0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    height: \"50px\",\n    textAlign: \"center\",\n    width: \"150px\",\n    borderRadius: \"5px\",\n    backgroundColor: \"#fafafa\",\n    color: \"#000\"\n}, \"color\", \"#000\");\nvar fagstyle = {\n    padding: \"2.5%\"\n};\nvar inpootamount = {\n    width: \"150px\",\n    height: \"50px\",\n    textAlign: \"center\",\n    backgroundColor: \"#fff\",\n    color: \"#000000\",\n    // add rounded corners \n    borderRadius: \"5px\"\n};\nvar hstyle = {\n    marginRight: \"10px\"\n};\nfunction exchagnebox() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: style,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: inpootamount,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Amount\",\n                    style: inpootamount\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dropbutton\",\n                style: fagstyle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    name: \"\",\n                    id: \"\",\n                    style: buttonstyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            children: \"BTC\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            children: \"ETH\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            children: \"XRP\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            children: \"LTC\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: hstyle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillArrowRightSquareFill, {\n                    size: 30\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: inpootamount,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Amount\",\n                    style: inpootamount\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dropbutton\",\n                style: fagstyle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    name: \"\",\n                    id: \"\",\n                    style: buttonstyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            children: \"BTC\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            children: \"ETH\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            children: \"XRP\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            children: \"LTC\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                    lineNumber: 85,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\samuel\\\\Documents\\\\exchange\\\\xchan\\\\pages\\\\components\\\\exchangebox.js\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, this);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNJLFNBQVMsRUFBQyxZQUFZMUI7Z0JBQUFBLEtBQUssRUFBRWdCLFFBQVE7MEJBQ3RDLDRFQUFDVyxRQUFNO29CQUFDQyxJQUFJLEVBQUMsRUFBRTtvQkFBQ0MsRUFBRSxFQUFDLEVBQUU7b0JBQUM3QixLQUFLLEVBQUVZLFdBQVc7O3NDQUNwQyw4REFBQ2tCLFFBQU07NEJBQUNDLEtBQUssRUFBQyxFQUFFO3NDQUFDLEtBQUc7Ozs7O2dDQUFTO3NDQUM3Qiw4REFBQ0QsUUFBTTs0QkFBQ0MsS0FBSyxFQUFDLEVBQUU7c0NBQUMsS0FBRzs7Ozs7Z0NBQVM7c0NBQzdCLDhEQUFDRCxRQUFNOzRCQUFDQyxLQUFLLEVBQUMsRUFBRTtzQ0FBQyxLQUFHOzs7OztnQ0FBUztzQ0FDN0IsOERBQUNELFFBQU07NEJBQUNDLEtBQUssRUFBQyxFQUFFO3NDQUFDLEtBQUc7Ozs7O2dDQUFTOzs7Ozs7d0JBQ3hCOzs7OztvQkFDUDs7Ozs7O1lBR0osQ0FDVDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvZXhjaGFuZ2Vib3guanM/MThmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBidGNMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvbG9nby5wbmdcIlxyXG5pbXBvcnQgeyBCc0ZpbGxBcnJvd1JpZ2h0U3F1YXJlRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgaGVpZ2h0OiAnMTAwcHgnLFxyXG4gICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmFmYWZhJyxcclxuICAgIHRvcDogJzEwJScsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAvLyBhZGQgYSBkcm9wIHNoYWRvdyB0byBtYWtlIGl0IGxvb2sgbGlrZSBhIGJveFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC4yKScsXHJcbiAgICAvLyBhbGlnbiBhbGwgaXRlbXMgaW4gdGhlIGNlbnRlclxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblxyXG5cclxufVxyXG5cclxuY29uc3QgYnV0dG9uc3R5bGUgPSB7XHJcbiAgICBoZWlnaHQ6ICc1MHB4JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB3aWR0aDogJzE1MHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmFmYWZhJyxcclxuICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICBcclxuICAgIC8vIHJlbW92ZSBsZWZ0IHRvcCBhbmQgYm90dG9tIGJvcmRlclxyXG4gICAgLy8gbWFrZSB0ZXh0IGdyZXlcclxuICAgIGNvbG9yOiAnIzAwMCcsXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IGZhZ3N0eWxlID0ge1xyXG4gICAgcGFkZGluZzogJzIuNSUnLFxyXG5cclxufVxyXG5cclxuY29uc3QgaW5wb290YW1vdW50ID0ge1xyXG4gICAgd2lkdGg6ICcxNTBweCcsXHJcbiAgICBoZWlnaHQ6ICc1MHB4JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgY29sb3I6ICcjMDAwMDAwJyxcclxuICAgIC8vIGFkZCByb3VuZGVkIGNvcm5lcnMgXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG5cclxuXHJcbiAgICBcclxufVxyXG5cclxuY29uc3QgaHN0eWxlID0ge1xyXG4gICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4Y2hhZ25lYm94KCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17aW5wb290YW1vdW50fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQW1vdW50XCIgc3R5bGU9e2lucG9vdGFtb3VudH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGJ1dHRvblwic3R5bGU9e2ZhZ3N0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwiXCIgc3R5bGU9e2J1dHRvbnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QlRDPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkVUSDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5YUlA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+TFRDPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2hzdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8QnNGaWxsQXJyb3dSaWdodFNxdWFyZUZpbGwgc2l6ZT17MzB9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2lucG9vdGFtb3VudH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFtb3VudFwiIHN0eWxlPXtpbnBvb3RhbW91bnR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3BidXR0b25cInN0eWxlPXtmYWdzdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cIlwiIHN0eWxlPXtidXR0b25zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkJUQzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5FVEg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+WFJQPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkxUQzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJidGNMb2dvIiwiQnNGaWxsQXJyb3dSaWdodFNxdWFyZUZpbGwiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiZGlzcGxheSIsImJveFNoYWRvdyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJ1dHRvbnN0eWxlIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJib3JkZXJSYWRpdXMiLCJmYWdzdHlsZSIsInBhZGRpbmciLCJpbnBvb3RhbW91bnQiLCJoc3R5bGUiLCJtYXJnaW5SaWdodCIsImV4Y2hhZ25lYm94IiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJzZWxlY3QiLCJuYW1lIiwiaWQiLCJvcHRpb24iLCJ2YWx1ZSIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/exchangebox.js\n"));

/***/ })

});