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

/***/ "(app-pages-browser)/./src/app/components/POSApp.tsx":
/*!***************************************!*\
  !*** ./src/app/components/POSApp.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ POSApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var quagga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quagga */ \"(app-pages-browser)/./node_modules/quagga/dist/quagga.min.js\");\n/* harmony import */ var quagga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quagga__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductList */ \"(app-pages-browser)/./src/app/components/ProductList.tsx\");\n/* harmony import */ var _PurchaseList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PurchaseList */ \"(app-pages-browser)/./src/app/components/PurchaseList.tsx\");\n/* harmony import */ var _ScannerControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScannerControls */ \"(app-pages-browser)/./src/app/components/ScannerControls.tsx\");\n/* harmony import */ var _CodeInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CodeInput */ \"(app-pages-browser)/./src/app/components/CodeInput.tsx\");\n/* harmony import */ var _PurchaseButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PurchaseButton */ \"(app-pages-browser)/./src/app/components/PurchaseButton.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction POSApp() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [purchaseList, setPurchaseList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [scannedCode, setScannedCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedItem, setSelectedItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isScanning, setIsScanning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProducts = async ()=>{\n            try {\n                const apiBaseUrl = \"http://127.0.0.1:8000\";\n                const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"\".concat(apiBaseUrl, \"/products\"));\n                setProducts(response.data);\n            } catch (error) {\n                console.error(\"商品一覧取得エラー:\", error);\n            }\n        };\n        fetchProducts();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const totalAmount = purchaseList.reduce((sum, item)=>sum + item.price * item.quantity, 0);\n        setTotal(totalAmount);\n    }, [\n        purchaseList\n    ]);\n    const addToPurchaseList = (product)=>{\n        const existingItem = purchaseList.find((item)=>item.code === product.code);\n        if (existingItem) {\n            setPurchaseList(purchaseList.map((item)=>item.code === product.code ? {\n                    ...item,\n                    quantity: Math.min(item.quantity + 1, 99)\n                } : item));\n        } else {\n            setPurchaseList([\n                ...purchaseList,\n                {\n                    ...product,\n                    quantity: 1\n                }\n            ]);\n        }\n    };\n    const selectItem = (item)=>{\n        setSelectedItem(item);\n        setScannedCode(item.code);\n    };\n    const removeSelectedItem = ()=>{\n        if (selectedItem) {\n            setPurchaseList(purchaseList.filter((item)=>item.code !== selectedItem.code));\n            setSelectedItem(null);\n        }\n    };\n    const updateQuantity = (newQuantity)=>{\n        if (selectedItem && newQuantity > 0 && newQuantity <= 99) {\n            setPurchaseList(purchaseList.map((item)=>item.code === selectedItem.code ? {\n                    ...item,\n                    quantity: newQuantity\n                } : item));\n        }\n    };\n    const handlePurchase = ()=>{\n        const apiBaseUrl = \"http://127.0.0.1:8000\";\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"\".concat(apiBaseUrl, \"/purchase\"), {\n            EMP_CD: \"12345\",\n            STORE_CD: \"001\",\n            POS_NO: \"001\",\n            items: purchaseList.map((item)=>({\n                    PRD_ID: item.code,\n                    CODE: item.code,\n                    NAME: item.name,\n                    PRICE: item.price,\n                    QUANTITY: item.quantity\n                }))\n        }).then(()=>{\n            alert(\"購入が完了しました\\n合計金額（税込）：\".concat(total, \"円\"));\n            setPurchaseList([]);\n            setSelectedItem(null);\n        }).catch((error)=>{\n            console.error(\"購入処理エラー:\", error);\n        });\n    };\n    const handleCodeInput = ()=>{\n        const product = products.find((p)=>p.code === scannedCode);\n        if (product) {\n            addToPurchaseList(product);\n            alert(\"リストに商品を追加しました！\");\n        } else {\n            alert(\"商品が見つかりません\");\n        }\n    };\n    const startScanner = ()=>{\n        quagga__WEBPACK_IMPORTED_MODULE_2___default().init({\n            inputStream: {\n                name: \"Live\",\n                type: \"LiveStream\",\n                target: videoRef.current,\n                constraints: {\n                    facingMode: \"environment\"\n                }\n            },\n            decoder: {\n                readers: [\n                    \"ean_reader\"\n                ]\n            }\n        }, (err)=>{\n            if (err) {\n                console.error(err);\n                return;\n            }\n            quagga__WEBPACK_IMPORTED_MODULE_2___default().start();\n            setIsScanning(true);\n        });\n        quagga__WEBPACK_IMPORTED_MODULE_2___default().onDetected((result)=>{\n            if (result.codeResult && result.codeResult.code) {\n                setScannedCode(result.codeResult.code);\n                const product = products.find((p)=>p.code === result.codeResult.code);\n                if (product) {\n                    addToPurchaseList(product);\n                    alert(\"リストに商品を追加しました！\");\n                }\n            }\n        });\n    };\n    const stopScanner = ()=>{\n        quagga__WEBPACK_IMPORTED_MODULE_2___default().stop();\n        setIsScanning(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ScannerControls__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                isScanning: isScanning,\n                startScanner: startScanner,\n                stopScanner: stopScanner\n            }, void 0, false, {\n                fileName: \"/Users/kuga/Documents/Tech0/Step4/POS/Frontend/src/app/components/POSApp.tsx\",\n                lineNumber: 154,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: videoRef,\n                className: \"video-container\",\n                style: {\n                    display: isScanning ? \"block\" : \"none\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kuga/Documents/Tech0/Step4/POS/Frontend/src/app/components/POSApp.tsx\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CodeInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                scannedCode: scannedCode,\n                setScannedCode: setScannedCode,\n                handleCodeInput: handleCodeInput\n            }, void 0, false, {\n                fileName: \"/Users/kuga/Documents/Tech0/Step4/POS/Frontend/src/app/components/POSApp.tsx\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                products: products,\n                addToPurchaseList: addToPurchaseList\n            }, void 0, false, {\n                fileName: \"/Users/kuga/Documents/Tech0/Step4/POS/Frontend/src/app/components/POSApp.tsx\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PurchaseList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                purchaseList: purchaseList,\n                selectItem: selectItem,\n                removeSelectedItem: removeSelectedItem,\n                selectedItem: selectedItem\n            }, void 0, false, {\n                fileName: \"/Users/kuga/Documents/Tech0/Step4/POS/Frontend/src/app/components/POSApp.tsx\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"section-title\",\n                children: [\n                    \"合計: \",\n                    total,\n                    \"円（税込）\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kuga/Documents/Tech0/Step4/POS/Frontend/src/app/components/POSApp.tsx\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, this),\n            selectedItem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"quantity-input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"数量変更: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/kuga/Documents/Tech0/Step4/POS/Frontend/src/app/components/POSApp.tsx\",\n                        lineNumber: 162,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: selectedItem.quantity,\n                        onChange: (e)=>updateQuantity(Number(e.target.value)),\n                        min: \"1\",\n                        max: \"99\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kuga/Documents/Tech0/Step4/POS/Frontend/src/app/components/POSApp.tsx\",\n                        lineNumber: 163,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kuga/Documents/Tech0/Step4/POS/Frontend/src/app/components/POSApp.tsx\",\n                lineNumber: 161,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PurchaseButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                handlePurchase: handlePurchase\n            }, void 0, false, {\n                fileName: \"/Users/kuga/Documents/Tech0/Step4/POS/Frontend/src/app/components/POSApp.tsx\",\n                lineNumber: 172,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kuga/Documents/Tech0/Step4/POS/Frontend/src/app/components/POSApp.tsx\",\n        lineNumber: 153,\n        columnNumber: 5\n    }, this);\n}\n_s(POSApp, \"s5dyP/BDiejtprU/OJ2SbnNjIdU=\");\n_c = POSApp;\nvar _c;\n$RefreshReg$(_c, \"POSApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9QT1NBcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW9EO0FBQzFCO0FBQ0U7QUFDWTtBQUNFO0FBQ007QUFDWjtBQUNVO0FBWS9CLFNBQVNVOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQVksRUFBRTtJQUN0RCxNQUFNLENBQUNXLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBaUIsRUFBRTtJQUNuRSxNQUFNLENBQUNhLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQVM7SUFDdkQsTUFBTSxDQUFDZSxjQUFjQyxnQkFBZ0IsR0FBR2hCLCtDQUFRQSxDQUFzQjtJQUN0RSxNQUFNLENBQUNpQixPQUFPQyxTQUFTLEdBQUdsQiwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNtQixZQUFZQyxjQUFjLEdBQUdwQiwrQ0FBUUEsQ0FBVTtJQUN0RCxNQUFNcUIsV0FBV3RCLDZDQUFNQSxDQUF3QjtJQUUvQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNd0IsZ0JBQWdCO1lBQ3BCLElBQUk7Z0JBQ0YsTUFBTUMsYUFBYUMsdUJBQW9DO2dCQUN2RCxNQUFNRyxXQUFXLE1BQU0xQiw2Q0FBS0EsQ0FBQzJCLEdBQUcsQ0FBWSxHQUFjLE9BQVhMLFlBQVc7Z0JBQzFEYixZQUFZaUIsU0FBU0UsSUFBSTtZQUMzQixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyxjQUFjQTtZQUM5QjtRQUNGO1FBQ0FSO0lBQ0YsR0FBRyxFQUFFO0lBRUx4QixnREFBU0EsQ0FBQztRQUNSLE1BQU1rQyxjQUFjckIsYUFBYXNCLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxPQUFTRCxNQUFNQyxLQUFLQyxLQUFLLEdBQUdELEtBQUtFLFFBQVEsRUFBRTtRQUN6Rm5CLFNBQVNjO0lBQ1gsR0FBRztRQUFDckI7S0FBYTtJQUVqQixNQUFNMkIsb0JB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Z0JBQWdCQTs7Ozs7Ozs7Ozs7O0FBR3RDO0dBekp3QjNDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9QT1NBcHAudHN4PzU0MzMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFF1YWdnYSBmcm9tICdxdWFnZ2EnO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vUHJvZHVjdExpc3QnO1xuaW1wb3J0IFB1cmNoYXNlTGlzdCBmcm9tICcuL1B1cmNoYXNlTGlzdCc7XG5pbXBvcnQgU2Nhbm5lckNvbnRyb2xzIGZyb20gJy4vU2Nhbm5lckNvbnRyb2xzJztcbmltcG9ydCBDb2RlSW5wdXQgZnJvbSAnLi9Db2RlSW5wdXQnO1xuaW1wb3J0IFB1cmNoYXNlQnV0dG9uIGZyb20gJy4vUHVyY2hhc2VCdXR0b24nO1xuXG5pbnRlcmZhY2UgUHJvZHVjdCB7XG4gIGNvZGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUHVyY2hhc2VJdGVtIGV4dGVuZHMgUHJvZHVjdCB7XG4gIHF1YW50aXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBPU0FwcCgpIHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcbiAgY29uc3QgW3B1cmNoYXNlTGlzdCwgc2V0UHVyY2hhc2VMaXN0XSA9IHVzZVN0YXRlPFB1cmNoYXNlSXRlbVtdPihbXSk7XG4gIGNvbnN0IFtzY2FubmVkQ29kZSwgc2V0U2Nhbm5lZENvZGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSB1c2VTdGF0ZTxQdXJjaGFzZUl0ZW0gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbaXNTY2FubmluZywgc2V0SXNTY2FubmluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXBpQmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQ8UHJvZHVjdFtdPihgJHthcGlCYXNlVXJsfS9wcm9kdWN0c2ApO1xuICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+WVhuWTgeS4gOimp+WPluW+l+OCqOODqeODvDonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaFByb2R1Y3RzKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gcHVyY2hhc2VMaXN0LnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSwgMCk7XG4gICAgc2V0VG90YWwodG90YWxBbW91bnQpO1xuICB9LCBbcHVyY2hhc2VMaXN0XSk7XG5cbiAgY29uc3QgYWRkVG9QdXJjaGFzZUxpc3QgPSAocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IHB1cmNoYXNlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5jb2RlID09PSBwcm9kdWN0LmNvZGUpO1xuICAgIGlmIChleGlzdGluZ0l0ZW0pIHtcbiAgICAgIHNldFB1cmNoYXNlTGlzdChwdXJjaGFzZUxpc3QubWFwKGl0ZW0gPT5cbiAgICAgICAgaXRlbS5jb2RlID09PSBwcm9kdWN0LmNvZGUgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBNYXRoLm1pbihpdGVtLnF1YW50aXR5ICsgMSwgOTkpIH0gOiBpdGVtXG4gICAgICApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UHVyY2hhc2VMaXN0KFsuLi5wdXJjaGFzZUxpc3QsIHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IDEgfV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWxlY3RJdGVtID0gKGl0ZW06IFB1cmNoYXNlSXRlbSkgPT4ge1xuICAgIHNldFNlbGVjdGVkSXRlbShpdGVtKTtcbiAgICBzZXRTY2FubmVkQ29kZShpdGVtLmNvZGUpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNlbGVjdGVkSXRlbSA9ICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICBzZXRQdXJjaGFzZUxpc3QocHVyY2hhc2VMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uY29kZSAhPT0gc2VsZWN0ZWRJdGVtLmNvZGUpKTtcbiAgICAgIHNldFNlbGVjdGVkSXRlbShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUXVhbnRpdHkgPSAobmV3UXVhbnRpdHk6IG51bWJlcikgPT4ge1xuICAgIGlmIChzZWxlY3RlZEl0ZW0gJiYgbmV3UXVhbnRpdHkgPiAwICYmIG5ld1F1YW50aXR5IDw9IDk5KSB7XG4gICAgICBzZXRQdXJjaGFzZUxpc3QocHVyY2hhc2VMaXN0Lm1hcChpdGVtID0+XG4gICAgICAgIGl0ZW0uY29kZSA9PT0gc2VsZWN0ZWRJdGVtLmNvZGUgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBuZXdRdWFudGl0eSB9IDogaXRlbVxuICAgICAgKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVB1cmNoYXNlID0gKCkgPT4ge1xuICAgIGNvbnN0IGFwaUJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkw7XG4gICAgYXhpb3MucG9zdChgJHthcGlCYXNlVXJsfS9wdXJjaGFzZWAsIHtcbiAgICAgIEVNUF9DRDogXCIxMjM0NVwiLFxuICAgICAgU1RPUkVfQ0Q6IFwiMDAxXCIsXG4gICAgICBQT1NfTk86IFwiMDAxXCIsXG4gICAgICBpdGVtczogcHVyY2hhc2VMaXN0Lm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgUFJEX0lEOiBpdGVtLmNvZGUsXG4gICAgICAgIENPREU6IGl0ZW0uY29kZSxcbiAgICAgICAgTkFNRTogaXRlbS5uYW1lLFxuICAgICAgICBQUklDRTogaXRlbS5wcmljZSxcbiAgICAgICAgUVVBTlRJVFk6IGl0ZW0ucXVhbnRpdHlcbiAgICAgIH0pKVxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgYWxlcnQoYOizvOWFpeOBjOWujOS6huOBl+OBvuOBl+OBn1xcbuWQiOioiOmHkemhje+8iOeojui+vO+8ie+8miR7dG90YWx95YaGYCk7XG4gICAgICBzZXRQdXJjaGFzZUxpc3QoW10pO1xuICAgICAgc2V0U2VsZWN0ZWRJdGVtKG51bGwpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+izvOWFpeWHpueQhuOCqOODqeODvDonLCBlcnJvcik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29kZUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cy5maW5kKHAgPT4gcC5jb2RlID09PSBzY2FubmVkQ29kZSk7XG4gICAgaWYgKHByb2R1Y3QpIHtcbiAgICAgIGFkZFRvUHVyY2hhc2VMaXN0KHByb2R1Y3QpO1xuICAgICAgYWxlcnQoJ+ODquOCueODiOOBq+WVhuWTgeOCkui/veWKoOOBl+OBvuOBl+OBn++8gScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgn5ZWG5ZOB44GM6KaL44Gk44GL44KK44G+44Gb44KTJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0YXJ0U2Nhbm5lciA9ICgpID0+IHtcbiAgICBRdWFnZ2EuaW5pdChcbiAgICAgIHtcbiAgICAgICAgaW5wdXRTdHJlYW06IHtcbiAgICAgICAgICBuYW1lOiBcIkxpdmVcIixcbiAgICAgICAgICB0eXBlOiBcIkxpdmVTdHJlYW1cIixcbiAgICAgICAgICB0YXJnZXQ6IHZpZGVvUmVmLmN1cnJlbnQhLFxuICAgICAgICAgIGNvbnN0cmFpbnRzOiB7IGZhY2luZ01vZGU6IFwiZW52aXJvbm1lbnRcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlY29kZXI6IHsgcmVhZGVyczogW1wiZWFuX3JlYWRlclwiXSB9XG4gICAgICB9LFxuICAgICAgKGVycjogRXJyb3IgfCBudWxsKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFF1YWdnYS5zdGFydCgpO1xuICAgICAgICBzZXRJc1NjYW5uaW5nKHRydWUpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICBRdWFnZ2Eub25EZXRlY3RlZCgocmVzdWx0OiB7IGNvZGVSZXN1bHQ/OiB7IGNvZGU/OiBzdHJpbmcgfSB9KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuY29kZVJlc3VsdCAmJiByZXN1bHQuY29kZVJlc3VsdC5jb2RlKSB7XG4gICAgICAgICAgc2V0U2Nhbm5lZENvZGUocmVzdWx0LmNvZGVSZXN1bHQuY29kZSk7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbmQocCA9PiBwLmNvZGUgPT09IHJlc3VsdC5jb2RlUmVzdWx0LmNvZGUpO1xuICAgICAgICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICAgICAgICBhZGRUb1B1cmNoYXNlTGlzdChwcm9kdWN0KTtcbiAgICAgICAgICAgIGFsZXJ0KCfjg6rjgrnjg4jjgavllYblk4HjgpLov73liqDjgZfjgb7jgZfjgZ/vvIEnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN0b3BTY2FubmVyID0gKCkgPT4ge1xuICAgIFF1YWdnYS5zdG9wKCk7XG4gICAgc2V0SXNTY2FubmluZyhmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICAgIDxTY2FubmVyQ29udHJvbHMgaXNTY2FubmluZz17aXNTY2FubmluZ30gc3RhcnRTY2FubmVyPXtzdGFydFNjYW5uZXJ9IHN0b3BTY2FubmVyPXtzdG9wU2Nhbm5lcn0gLz5cbiAgICAgIDxkaXYgcmVmPXt2aWRlb1JlZn0gY2xhc3NOYW1lPVwidmlkZW8tY29udGFpbmVyXCIgc3R5bGU9e3sgZGlzcGxheTogaXNTY2FubmluZyA/ICdibG9jaycgOiAnbm9uZScgfX0+PC9kaXY+XG4gICAgICA8Q29kZUlucHV0IHNjYW5uZWRDb2RlPXtzY2FubmVkQ29kZX0gc2V0U2Nhbm5lZENvZGU9e3NldFNjYW5uZWRDb2RlfSBoYW5kbGVDb2RlSW5wdXQ9e2hhbmRsZUNvZGVJbnB1dH0gLz5cbiAgICAgIDxQcm9kdWN0TGlzdCBwcm9kdWN0cz17cHJvZHVjdHN9IGFkZFRvUHVyY2hhc2VMaXN0PXthZGRUb1B1cmNoYXNlTGlzdH0gLz5cbiAgICAgIDxQdXJjaGFzZUxpc3QgcHVyY2hhc2VMaXN0PXtwdXJjaGFzZUxpc3R9IHNlbGVjdEl0ZW09e3NlbGVjdEl0ZW19IHJlbW92ZVNlbGVjdGVkSXRlbT17cmVtb3ZlU2VsZWN0ZWRJdGVtfSBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkSXRlbX0gLz5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+5ZCI6KiIOiB7dG90YWx95YaG77yI56iO6L6877yJPC9oMz5cbiAgICAgIHtzZWxlY3RlZEl0ZW0gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5LWlucHV0XCI+XG4gICAgICAgICAgPGxhYmVsPuaVsOmHj+WkieabtDogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkSXRlbS5xdWFudGl0eX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlUXVhbnRpdHkoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgIG1heD1cIjk5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8UHVyY2hhc2VCdXR0b24gaGFuZGxlUHVyY2hhc2U9e2hhbmRsZVB1cmNoYXNlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiYXhpb3MiLCJRdWFnZ2EiLCJQcm9kdWN0TGlzdCIsIlB1cmNoYXNlTGlzdCIsIlNjYW5uZXJDb250cm9scyIsIkNvZGVJbnB1dCIsIlB1cmNoYXNlQnV0dG9uIiwiUE9TQXBwIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInB1cmNoYXNlTGlzdCIsInNldFB1cmNoYXNlTGlzdCIsInNjYW5uZWRDb2RlIiwic2V0U2Nhbm5lZENvZGUiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJ0b3RhbCIsInNldFRvdGFsIiwiaXNTY2FubmluZyIsInNldElzU2Nhbm5pbmciLCJ2aWRlb1JlZiIsImZldGNoUHJvZHVjdHMiLCJhcGlCYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsInRvdGFsQW1vdW50IiwicmVkdWNlIiwic3VtIiwiaXRlbSIsInByaWNlIiwicXVhbnRpdHkiLCJhZGRUb1B1cmNoYXNlTGlzdCIsInByb2R1Y3QiLCJleGlzdGluZ0l0ZW0iLCJmaW5kIiwiY29kZSIsIm1hcCIsIk1hdGgiLCJtaW4iLCJzZWxlY3RJdGVtIiwicmVtb3ZlU2VsZWN0ZWRJdGVtIiwiZmlsdGVyIiwidXBkYXRlUXVhbnRpdHkiLCJuZXdRdWFudGl0eSIsImhhbmRsZVB1cmNoYXNlIiwicG9zdCIsIkVNUF9DRCIsIlNUT1JFX0NEIiwiUE9TX05PIiwiaXRlbXMiLCJQUkRfSUQiLCJDT0RFIiwiTkFNRSIsIm5hbWUiLCJQUklDRSIsIlFVQU5USVRZIiwidGhlbiIsImFsZXJ0IiwiY2F0Y2giLCJoYW5kbGVDb2RlSW5wdXQiLCJwIiwic3RhcnRTY2FubmVyIiwiaW5pdCIsImlucHV0U3RyZWFtIiwidHlwZSIsInRhcmdldCIsImN1cnJlbnQiLCJjb25zdHJhaW50cyIsImZhY2luZ01vZGUiLCJkZWNvZGVyIiwicmVhZGVycyIsImVyciIsInN0YXJ0Iiwib25EZXRlY3RlZCIsInJlc3VsdCIsImNvZGVSZXN1bHQiLCJzdG9wU2Nhbm5lciIsInN0b3AiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJzdHlsZSIsImRpc3BsYXkiLCJoMyIsImxhYmVsIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsIk51bWJlciIsIm1heCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/POSApp.tsx\n"));

/***/ })

});