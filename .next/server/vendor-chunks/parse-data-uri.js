/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/parse-data-uri";
exports.ids = ["vendor-chunks/parse-data-uri"];
exports.modules = {

/***/ "(ssr)/./node_modules/parse-data-uri/index.js":
/*!**********************************************!*\
  !*** ./node_modules/parse-data-uri/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toBuffer = __webpack_require__(/*! data-uri-to-buffer */ \"(ssr)/./node_modules/data-uri-to-buffer/index.js\")\n\nfunction parseDataUri (dataUri) {\n\n  return {\n    mimeType: normalizeMimeType(parseMimeType(dataUri)),\n    data: toBuffer(dataUri)\n  }\n}\n\nfunction parseMimeType(uri) {\n  return uri.substring(5, uri.indexOf(';'))\n}\n\nvar prefix = /^(\\w+\\/)+/\nfunction normalizeMimeType(mime) {\n  mime = mime.toLowerCase()\n  var once = mime.match(prefix)\n  if (!once || !(once = once[1])) {\n    return mime\n  }\n  return mime.replace(prefix, once)\n\n}\n\nmodule.exports = parseDataUri//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGFyc2UtZGF0YS11cmkvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxtQkFBTyxDQUFDLDRFQUFvQjs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvcGFyc2UtZGF0YS11cmkvaW5kZXguanM/NzAyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdG9CdWZmZXIgPSByZXF1aXJlKCdkYXRhLXVyaS10by1idWZmZXInKVxuXG5mdW5jdGlvbiBwYXJzZURhdGFVcmkgKGRhdGFVcmkpIHtcblxuICByZXR1cm4ge1xuICAgIG1pbWVUeXBlOiBub3JtYWxpemVNaW1lVHlwZShwYXJzZU1pbWVUeXBlKGRhdGFVcmkpKSxcbiAgICBkYXRhOiB0b0J1ZmZlcihkYXRhVXJpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlTWltZVR5cGUodXJpKSB7XG4gIHJldHVybiB1cmkuc3Vic3RyaW5nKDUsIHVyaS5pbmRleE9mKCc7JykpXG59XG5cbnZhciBwcmVmaXggPSAvXihcXHcrXFwvKSsvXG5mdW5jdGlvbiBub3JtYWxpemVNaW1lVHlwZShtaW1lKSB7XG4gIG1pbWUgPSBtaW1lLnRvTG93ZXJDYXNlKClcbiAgdmFyIG9uY2UgPSBtaW1lLm1hdGNoKHByZWZpeClcbiAgaWYgKCFvbmNlIHx8ICEob25jZSA9IG9uY2VbMV0pKSB7XG4gICAgcmV0dXJuIG1pbWVcbiAgfVxuICByZXR1cm4gbWltZS5yZXBsYWNlKHByZWZpeCwgb25jZSlcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlRGF0YVVyaSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/parse-data-uri/index.js\n");

/***/ })

};
;