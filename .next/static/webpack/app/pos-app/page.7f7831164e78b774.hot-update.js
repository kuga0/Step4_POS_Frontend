"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pos-app/page",{

/***/ "(app-pages-browser)/./src/app/components/ScannerControls.tsx":
/*!************************************************!*\
  !*** ./src/app/components/ScannerControls.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst ScannerControls = (param)=>{\n    let { isScanning, startScanner, stopScanner } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"scanner-controls\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: startScanner,\n                className: \"control-button\",\n                children: \"スキャン開始\"\n            }, void 0, false, {\n                fileName: \"/Users/kuga/Documents/Tech0/Step4/POS/Frontend/src/app/components/ScannerControls.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            isScanning && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: stopScanner,\n                className: \"control-button\",\n                children: \"スキャナーを停止\"\n            }, void 0, false, {\n                fileName: \"/Users/kuga/Documents/Tech0/Step4/POS/Frontend/src/app/components/ScannerControls.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kuga/Documents/Tech0/Step4/POS/Frontend/src/app/components/ScannerControls.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ScannerControls;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScannerControls);\nvar _c;\n$RefreshReg$(_c, \"ScannerControls\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TY2FubmVyQ29udHJvbHMudHN4IiwibWFwcGluZ3MiOiI7OztBQVVBLE1BQU1BLGtCQUE0QztRQUFDLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEVBQUU7SUFDMUYscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFDQ0MsU0FBU0w7Z0JBQ1RHLFdBQVU7MEJBQ1g7Ozs7OztZQUdBSiw0QkFDQyw4REFBQ0s7Z0JBQ0NDLFNBQVNKO2dCQUNURSxXQUFVOzBCQUNYOzs7Ozs7Ozs7Ozs7QUFNVDtLQW5CTUw7QUFxQk4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1NjYW5uZXJDb250cm9scy50c3g/ZjFkYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgU2Nhbm5lckNvbnRyb2xzUHJvcHMge1xuICBpc1NjYW5uaW5nOiBib29sZWFuO1xuICBzdGFydFNjYW5uZXI6ICgpID0+IHZvaWQ7XG4gIHN0b3BTY2FubmVyOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBTY2FubmVyQ29udHJvbHM6IEZDPFNjYW5uZXJDb250cm9sc1Byb3BzPiA9ICh7IGlzU2Nhbm5pbmcsIHN0YXJ0U2Nhbm5lciwgc3RvcFNjYW5uZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nhbm5lci1jb250cm9sc1wiPlxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgb25DbGljaz17c3RhcnRTY2FubmVyfSBcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udHJvbC1idXR0b25cIlxuICAgICAgPlxuICAgICAgICDjgrnjgq3jg6Pjg7Pplovlp4tcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge2lzU2Nhbm5pbmcgJiYgKFxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIG9uQ2xpY2s9e3N0b3BTY2FubmVyfSBcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250cm9sLWJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICDjgrnjgq3jg6Pjg4rjg7zjgpLlgZzmraJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nhbm5lckNvbnRyb2xzO1xuIl0sIm5hbWVzIjpbIlNjYW5uZXJDb250cm9scyIsImlzU2Nhbm5pbmciLCJzdGFydFNjYW5uZXIiLCJzdG9wU2Nhbm5lciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ScannerControls.tsx\n"));

/***/ })

});