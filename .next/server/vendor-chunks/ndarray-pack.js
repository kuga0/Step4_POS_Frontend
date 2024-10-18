/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ndarray-pack";
exports.ids = ["vendor-chunks/ndarray-pack"];
exports.modules = {

/***/ "(ssr)/./node_modules/ndarray-pack/convert.js":
/*!**********************************************!*\
  !*** ./node_modules/ndarray-pack/convert.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar ndarray = __webpack_require__(/*! ndarray */ \"(ssr)/./node_modules/ndarray/ndarray.js\")\nvar do_convert = __webpack_require__(/*! ./doConvert.js */ \"(ssr)/./node_modules/ndarray-pack/doConvert.js\")\n\nmodule.exports = function convert(arr, result) {\n  var shape = [], c = arr, sz = 1\n  while(Array.isArray(c)) {\n    shape.push(c.length)\n    sz *= c.length\n    c = c[0]\n  }\n  if(shape.length === 0) {\n    return ndarray()\n  }\n  if(!result) {\n    result = ndarray(new Float64Array(sz), shape)\n  }\n  do_convert(result, arr)\n  return result\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmRhcnJheS1wYWNrL2NvbnZlcnQuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVosY0FBYyxtQkFBTyxDQUFDLHdEQUFTO0FBQy9CLGlCQUFpQixtQkFBTyxDQUFDLHNFQUFnQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZGFycmF5LXBhY2svY29udmVydC5qcz8wOGJkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiXG5cbnZhciBuZGFycmF5ID0gcmVxdWlyZShcIm5kYXJyYXlcIilcbnZhciBkb19jb252ZXJ0ID0gcmVxdWlyZShcIi4vZG9Db252ZXJ0LmpzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29udmVydChhcnIsIHJlc3VsdCkge1xuICB2YXIgc2hhcGUgPSBbXSwgYyA9IGFyciwgc3ogPSAxXG4gIHdoaWxlKEFycmF5LmlzQXJyYXkoYykpIHtcbiAgICBzaGFwZS5wdXNoKGMubGVuZ3RoKVxuICAgIHN6ICo9IGMubGVuZ3RoXG4gICAgYyA9IGNbMF1cbiAgfVxuICBpZihzaGFwZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmRhcnJheSgpXG4gIH1cbiAgaWYoIXJlc3VsdCkge1xuICAgIHJlc3VsdCA9IG5kYXJyYXkobmV3IEZsb2F0NjRBcnJheShzeiksIHNoYXBlKVxuICB9XG4gIGRvX2NvbnZlcnQocmVzdWx0LCBhcnIpXG4gIHJldHVybiByZXN1bHRcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ndarray-pack/convert.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/ndarray-pack/doConvert.js":
/*!************************************************!*\
  !*** ./node_modules/ndarray-pack/doConvert.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports=__webpack_require__(/*! cwise-compiler */ \"(ssr)/./node_modules/cwise-compiler/compiler.js\")({\"args\":[\"array\",\"scalar\",\"index\"],\"pre\":{\"body\":\"{}\",\"args\":[],\"thisVars\":[],\"localVars\":[]},\"body\":{\"body\":\"{\\nvar _inline_1_v=_inline_1_arg1_,_inline_1_i\\nfor(_inline_1_i=0;_inline_1_i<_inline_1_arg2_.length-1;++_inline_1_i) {\\n_inline_1_v=_inline_1_v[_inline_1_arg2_[_inline_1_i]]\\n}\\n_inline_1_arg0_=_inline_1_v[_inline_1_arg2_[_inline_1_arg2_.length-1]]\\n}\",\"args\":[{\"name\":\"_inline_1_arg0_\",\"lvalue\":true,\"rvalue\":false,\"count\":1},{\"name\":\"_inline_1_arg1_\",\"lvalue\":false,\"rvalue\":true,\"count\":1},{\"name\":\"_inline_1_arg2_\",\"lvalue\":false,\"rvalue\":true,\"count\":4}],\"thisVars\":[],\"localVars\":[\"_inline_1_i\",\"_inline_1_v\"]},\"post\":{\"body\":\"{}\",\"args\":[],\"thisVars\":[],\"localVars\":[]},\"funcName\":\"convert\",\"blockSize\":64})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmRhcnJheS1wYWNrL2RvQ29udmVydC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxlQUFlLG1CQUFPLENBQUMsdUVBQWdCLEdBQUcseUNBQXlDLFVBQVUseUNBQXlDLFNBQVMsU0FBUyxpRUFBaUUscUNBQXFDLGdCQUFnQiwwREFBMEQsMkVBQTJFLFdBQVcsZ0VBQWdFLEVBQUUsZ0VBQWdFLEVBQUUsZ0VBQWdFLDBEQUEwRCxTQUFTLFVBQVUseUNBQXlDLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25kYXJyYXktcGFjay9kb0NvbnZlcnQuanM/NTUyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKCdjd2lzZS1jb21waWxlcicpKHtcImFyZ3NcIjpbXCJhcnJheVwiLFwic2NhbGFyXCIsXCJpbmRleFwiXSxcInByZVwiOntcImJvZHlcIjpcInt9XCIsXCJhcmdzXCI6W10sXCJ0aGlzVmFyc1wiOltdLFwibG9jYWxWYXJzXCI6W119LFwiYm9keVwiOntcImJvZHlcIjpcIntcXG52YXIgX2lubGluZV8xX3Y9X2lubGluZV8xX2FyZzFfLF9pbmxpbmVfMV9pXFxuZm9yKF9pbmxpbmVfMV9pPTA7X2lubGluZV8xX2k8X2lubGluZV8xX2FyZzJfLmxlbmd0aC0xOysrX2lubGluZV8xX2kpIHtcXG5faW5saW5lXzFfdj1faW5saW5lXzFfdltfaW5saW5lXzFfYXJnMl9bX2lubGluZV8xX2ldXVxcbn1cXG5faW5saW5lXzFfYXJnMF89X2lubGluZV8xX3ZbX2lubGluZV8xX2FyZzJfW19pbmxpbmVfMV9hcmcyXy5sZW5ndGgtMV1dXFxufVwiLFwiYXJnc1wiOlt7XCJuYW1lXCI6XCJfaW5saW5lXzFfYXJnMF9cIixcImx2YWx1ZVwiOnRydWUsXCJydmFsdWVcIjpmYWxzZSxcImNvdW50XCI6MX0se1wibmFtZVwiOlwiX2lubGluZV8xX2FyZzFfXCIsXCJsdmFsdWVcIjpmYWxzZSxcInJ2YWx1ZVwiOnRydWUsXCJjb3VudFwiOjF9LHtcIm5hbWVcIjpcIl9pbmxpbmVfMV9hcmcyX1wiLFwibHZhbHVlXCI6ZmFsc2UsXCJydmFsdWVcIjp0cnVlLFwiY291bnRcIjo0fV0sXCJ0aGlzVmFyc1wiOltdLFwibG9jYWxWYXJzXCI6W1wiX2lubGluZV8xX2lcIixcIl9pbmxpbmVfMV92XCJdfSxcInBvc3RcIjp7XCJib2R5XCI6XCJ7fVwiLFwiYXJnc1wiOltdLFwidGhpc1ZhcnNcIjpbXSxcImxvY2FsVmFyc1wiOltdfSxcImZ1bmNOYW1lXCI6XCJjb252ZXJ0XCIsXCJibG9ja1NpemVcIjo2NH0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ndarray-pack/doConvert.js\n");

/***/ })

};
;