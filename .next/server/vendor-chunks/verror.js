/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/verror";
exports.ids = ["vendor-chunks/verror"];
exports.modules = {

/***/ "(ssr)/./node_modules/verror/lib/verror.js":
/*!*******************************************!*\
  !*** ./node_modules/verror/lib/verror.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n * verror.js: richer JavaScript errors\n */\n\nvar mod_assertplus = __webpack_require__(/*! assert-plus */ \"(ssr)/./node_modules/assert-plus/assert.js\");\nvar mod_util = __webpack_require__(/*! util */ \"util\");\n\nvar mod_extsprintf = __webpack_require__(/*! extsprintf */ \"(ssr)/./node_modules/extsprintf/lib/extsprintf.js\");\nvar mod_isError = (__webpack_require__(/*! core-util-is */ \"(ssr)/./node_modules/core-util-is/lib/util.js\").isError);\nvar sprintf = mod_extsprintf.sprintf;\n\n/*\n * Public interface\n */\n\n/* So you can 'var VError = require('verror')' */\nmodule.exports = VError;\n/* For compatibility */\nVError.VError = VError;\n/* Other exported classes */\nVError.SError = SError;\nVError.WError = WError;\nVError.MultiError = MultiError;\n\n/*\n * Common function used to parse constructor arguments for VError, WError, and\n * SError.  Named arguments to this function:\n *\n *     strict\t\tforce strict interpretation of sprintf arguments, even\n *     \t\t\tif the options in \"argv\" don't say so\n *\n *     argv\t\terror's constructor arguments, which are to be\n *     \t\t\tinterpreted as described in README.md.  For quick\n *     \t\t\treference, \"argv\" has one of the following forms:\n *\n *          [ sprintf_args... ]           (argv[0] is a string)\n *          [ cause, sprintf_args... ]    (argv[0] is an Error)\n *          [ options, sprintf_args... ]  (argv[0] is an object)\n *\n * This function normalizes these forms, producing an object with the following\n * properties:\n *\n *    options           equivalent to \"options\" in third form.  This will never\n *    \t\t\tbe a direct reference to what the caller passed in\n *    \t\t\t(i.e., it may be a shallow copy), so it can be freely\n *    \t\t\tmodified.\n *\n *    shortmessage      result of sprintf(sprintf_args), taking options.strict\n *    \t\t\tinto account as described in README.md.\n */\nfunction parseConstructorArguments(args)\n{\n\tvar argv, options, sprintf_args, shortmessage, k;\n\n\tmod_assertplus.object(args, 'args');\n\tmod_assertplus.bool(args.strict, 'args.strict');\n\tmod_assertplus.array(args.argv, 'args.argv');\n\targv = args.argv;\n\n\t/*\n\t * First, figure out which form of invocation we've been given.\n\t */\n\tif (argv.length === 0) {\n\t\toptions = {};\n\t\tsprintf_args = [];\n\t} else if (mod_isError(argv[0])) {\n\t\toptions = { 'cause': argv[0] };\n\t\tsprintf_args = argv.slice(1);\n\t} else if (typeof (argv[0]) === 'object') {\n\t\toptions = {};\n\t\tfor (k in argv[0]) {\n\t\t\toptions[k] = argv[0][k];\n\t\t}\n\t\tsprintf_args = argv.slice(1);\n\t} else {\n\t\tmod_assertplus.string(argv[0],\n\t\t    'first argument to VError, SError, or WError ' +\n\t\t    'constructor must be a string, object, or Error');\n\t\toptions = {};\n\t\tsprintf_args = argv;\n\t}\n\n\t/*\n\t * Now construct the error's message.\n\t *\n\t * extsprintf (which we invoke here with our caller's arguments in order\n\t * to construct this Error's message) is strict in its interpretation of\n\t * values to be processed by the \"%s\" specifier.  The value passed to\n\t * extsprintf must actually be a string or something convertible to a\n\t * String using .toString().  Passing other values (notably \"null\" and\n\t * \"undefined\") is considered a programmer error.  The assumption is\n\t * that if you actually want to print the string \"null\" or \"undefined\",\n\t * then that's easy to do that when you're calling extsprintf; on the\n\t * other hand, if you did NOT want that (i.e., there's actually a bug\n\t * where the program assumes some variable is non-null and tries to\n\t * print it, which might happen when constructing a packet or file in\n\t * some specific format), then it's better to stop immediately than\n\t * produce bogus output.\n\t *\n\t * However, sometimes the bug is only in the code calling VError, and a\n\t * programmer might prefer to have the error message contain \"null\" or\n\t * \"undefined\" rather than have the bug in the error path crash the\n\t * program (making the first bug harder to identify).  For that reason,\n\t * by default VError converts \"null\" or \"undefined\" arguments to their\n\t * string representations and passes those to extsprintf.  Programmers\n\t * desiring the strict behavior can use the SError class or pass the\n\t * \"strict\" option to the VError constructor.\n\t */\n\tmod_assertplus.object(options);\n\tif (!options.strict && !args.strict) {\n\t\tsprintf_args = sprintf_args.map(function (a) {\n\t\t\treturn (a === null ? 'null' :\n\t\t\t    a === undefined ? 'undefined' : a);\n\t\t});\n\t}\n\n\tif (sprintf_args.length === 0) {\n\t\tshortmessage = '';\n\t} else {\n\t\tshortmessage = sprintf.apply(null, sprintf_args);\n\t}\n\n\treturn ({\n\t    'options': options,\n\t    'shortmessage': shortmessage\n\t});\n}\n\n/*\n * See README.md for reference documentation.\n */\nfunction VError()\n{\n\tvar args, obj, parsed, cause, ctor, message, k;\n\n\targs = Array.prototype.slice.call(arguments, 0);\n\n\t/*\n\t * This is a regrettable pattern, but JavaScript's built-in Error class\n\t * is defined to work this way, so we allow the constructor to be called\n\t * without \"new\".\n\t */\n\tif (!(this instanceof VError)) {\n\t\tobj = Object.create(VError.prototype);\n\t\tVError.apply(obj, arguments);\n\t\treturn (obj);\n\t}\n\n\t/*\n\t * For convenience and backwards compatibility, we support several\n\t * different calling forms.  Normalize them here.\n\t */\n\tparsed = parseConstructorArguments({\n\t    'argv': args,\n\t    'strict': false\n\t});\n\n\t/*\n\t * If we've been given a name, apply it now.\n\t */\n\tif (parsed.options.name) {\n\t\tmod_assertplus.string(parsed.options.name,\n\t\t    'error\\'s \"name\" must be a string');\n\t\tthis.name = parsed.options.name;\n\t}\n\n\t/*\n\t * For debugging, we keep track of the original short message (attached\n\t * this Error particularly) separately from the complete message (which\n\t * includes the messages of our cause chain).\n\t */\n\tthis.jse_shortmsg = parsed.shortmessage;\n\tmessage = parsed.shortmessage;\n\n\t/*\n\t * If we've been given a cause, record a reference to it and update our\n\t * message appropriately.\n\t */\n\tcause = parsed.options.cause;\n\tif (cause) {\n\t\tmod_assertplus.ok(mod_isError(cause), 'cause is not an Error');\n\t\tthis.jse_cause = cause;\n\n\t\tif (!parsed.options.skipCauseMessage) {\n\t\t\tmessage += ': ' + cause.message;\n\t\t}\n\t}\n\n\t/*\n\t * If we've been given an object with properties, shallow-copy that\n\t * here.  We don't want to use a deep copy in case there are non-plain\n\t * objects here, but we don't want to use the original object in case\n\t * the caller modifies it later.\n\t */\n\tthis.jse_info = {};\n\tif (parsed.options.info) {\n\t\tfor (k in parsed.options.info) {\n\t\t\tthis.jse_info[k] = parsed.options.info[k];\n\t\t}\n\t}\n\n\tthis.message = message;\n\tError.call(this, message);\n\n\tif (Error.captureStackTrace) {\n\t\tctor = parsed.options.constructorOpt || this.constructor;\n\t\tError.captureStackTrace(this, ctor);\n\t}\n\n\treturn (this);\n}\n\nmod_util.inherits(VError, Error);\nVError.prototype.name = 'VError';\n\nVError.prototype.toString = function ve_toString()\n{\n\tvar str = (this.hasOwnProperty('name') && this.name ||\n\t\tthis.constructor.name || this.constructor.prototype.name);\n\tif (this.message)\n\t\tstr += ': ' + this.message;\n\n\treturn (str);\n};\n\n/*\n * This method is provided for compatibility.  New callers should use\n * VError.cause() instead.  That method also uses the saner `null` return value\n * when there is no cause.\n */\nVError.prototype.cause = function ve_cause()\n{\n\tvar cause = VError.cause(this);\n\treturn (cause === null ? undefined : cause);\n};\n\n/*\n * Static methods\n *\n * These class-level methods are provided so that callers can use them on\n * instances of Errors that are not VErrors.  New interfaces should be provided\n * only using static methods to eliminate the class of programming mistake where\n * people fail to check whether the Error object has the corresponding methods.\n */\n\nVError.cause = function (err)\n{\n\tmod_assertplus.ok(mod_isError(err), 'err must be an Error');\n\treturn (mod_isError(err.jse_cause) ? err.jse_cause : null);\n};\n\nVError.info = function (err)\n{\n\tvar rv, cause, k;\n\n\tmod_assertplus.ok(mod_isError(err), 'err must be an Error');\n\tcause = VError.cause(err);\n\tif (cause !== null) {\n\t\trv = VError.info(cause);\n\t} else {\n\t\trv = {};\n\t}\n\n\tif (typeof (err.jse_info) == 'object' && err.jse_info !== null) {\n\t\tfor (k in err.jse_info) {\n\t\t\trv[k] = err.jse_info[k];\n\t\t}\n\t}\n\n\treturn (rv);\n};\n\nVError.findCauseByName = function (err, name)\n{\n\tvar cause;\n\n\tmod_assertplus.ok(mod_isError(err), 'err must be an Error');\n\tmod_assertplus.string(name, 'name');\n\tmod_assertplus.ok(name.length > 0, 'name cannot be empty');\n\n\tfor (cause = err; cause !== null; cause = VError.cause(cause)) {\n\t\tmod_assertplus.ok(mod_isError(cause));\n\t\tif (cause.name == name) {\n\t\t\treturn (cause);\n\t\t}\n\t}\n\n\treturn (null);\n};\n\nVError.hasCauseWithName = function (err, name)\n{\n\treturn (VError.findCauseByName(err, name) !== null);\n};\n\nVError.fullStack = function (err)\n{\n\tmod_assertplus.ok(mod_isError(err), 'err must be an Error');\n\n\tvar cause = VError.cause(err);\n\n\tif (cause) {\n\t\treturn (err.stack + '\\ncaused by: ' + VError.fullStack(cause));\n\t}\n\n\treturn (err.stack);\n};\n\nVError.errorFromList = function (errors)\n{\n\tmod_assertplus.arrayOfObject(errors, 'errors');\n\n\tif (errors.length === 0) {\n\t\treturn (null);\n\t}\n\n\terrors.forEach(function (e) {\n\t\tmod_assertplus.ok(mod_isError(e));\n\t});\n\n\tif (errors.length == 1) {\n\t\treturn (errors[0]);\n\t}\n\n\treturn (new MultiError(errors));\n};\n\nVError.errorForEach = function (err, func)\n{\n\tmod_assertplus.ok(mod_isError(err), 'err must be an Error');\n\tmod_assertplus.func(func, 'func');\n\n\tif (err instanceof MultiError) {\n\t\terr.errors().forEach(function iterError(e) { func(e); });\n\t} else {\n\t\tfunc(err);\n\t}\n};\n\n\n/*\n * SError is like VError, but stricter about types.  You cannot pass \"null\" or\n * \"undefined\" as string arguments to the formatter.\n */\nfunction SError()\n{\n\tvar args, obj, parsed, options;\n\n\targs = Array.prototype.slice.call(arguments, 0);\n\tif (!(this instanceof SError)) {\n\t\tobj = Object.create(SError.prototype);\n\t\tSError.apply(obj, arguments);\n\t\treturn (obj);\n\t}\n\n\tparsed = parseConstructorArguments({\n\t    'argv': args,\n\t    'strict': true\n\t});\n\n\toptions = parsed.options;\n\tVError.call(this, options, '%s', parsed.shortmessage);\n\n\treturn (this);\n}\n\n/*\n * We don't bother setting SError.prototype.name because once constructed,\n * SErrors are just like VErrors.\n */\nmod_util.inherits(SError, VError);\n\n\n/*\n * Represents a collection of errors for the purpose of consumers that generally\n * only deal with one error.  Callers can extract the individual errors\n * contained in this object, but may also just treat it as a normal single\n * error, in which case a summary message will be printed.\n */\nfunction MultiError(errors)\n{\n\tmod_assertplus.array(errors, 'list of errors');\n\tmod_assertplus.ok(errors.length > 0, 'must be at least one error');\n\tthis.ase_errors = errors;\n\n\tVError.call(this, {\n\t    'cause': errors[0]\n\t}, 'first of %d error%s', errors.length, errors.length == 1 ? '' : 's');\n}\n\nmod_util.inherits(MultiError, VError);\nMultiError.prototype.name = 'MultiError';\n\nMultiError.prototype.errors = function me_errors()\n{\n\treturn (this.ase_errors.slice(0));\n};\n\n\n/*\n * See README.md for reference details.\n */\nfunction WError()\n{\n\tvar args, obj, parsed, options;\n\n\targs = Array.prototype.slice.call(arguments, 0);\n\tif (!(this instanceof WError)) {\n\t\tobj = Object.create(WError.prototype);\n\t\tWError.apply(obj, args);\n\t\treturn (obj);\n\t}\n\n\tparsed = parseConstructorArguments({\n\t    'argv': args,\n\t    'strict': false\n\t});\n\n\toptions = parsed.options;\n\toptions['skipCauseMessage'] = true;\n\tVError.call(this, options, '%s', parsed.shortmessage);\n\n\treturn (this);\n}\n\nmod_util.inherits(WError, VError);\nWError.prototype.name = 'WError';\n\nWError.prototype.toString = function we_toString()\n{\n\tvar str = (this.hasOwnProperty('name') && this.name ||\n\t\tthis.constructor.name || this.constructor.prototype.name);\n\tif (this.message)\n\t\tstr += ': ' + this.message;\n\tif (this.jse_cause && this.jse_cause.message)\n\t\tstr += '; caused by ' + this.jse_cause.toString();\n\n\treturn (str);\n};\n\n/*\n * For purely historical reasons, WError's cause() function allows you to set\n * the cause.\n */\nWError.prototype.cause = function we_cause(c)\n{\n\tif (mod_isError(c))\n\t\tthis.jse_cause = c;\n\n\treturn (this.jse_cause);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmVycm9yL2xpYi92ZXJyb3IuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixtQkFBTyxDQUFDLCtEQUFhO0FBQzFDLGVBQWUsbUJBQU8sQ0FBQyxrQkFBTTs7QUFFN0IscUJBQXFCLG1CQUFPLENBQUMscUVBQVk7QUFDekMsa0JBQWtCLGtHQUErQjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxjQUFjO0FBQ2Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsVUFBVTtBQUN6RCxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3ZlcnJvci9saWIvdmVycm9yLmpzPzUyNDIiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIHZlcnJvci5qczogcmljaGVyIEphdmFTY3JpcHQgZXJyb3JzXG4gKi9cblxudmFyIG1vZF9hc3NlcnRwbHVzID0gcmVxdWlyZSgnYXNzZXJ0LXBsdXMnKTtcbnZhciBtb2RfdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxudmFyIG1vZF9leHRzcHJpbnRmID0gcmVxdWlyZSgnZXh0c3ByaW50ZicpO1xudmFyIG1vZF9pc0Vycm9yID0gcmVxdWlyZSgnY29yZS11dGlsLWlzJykuaXNFcnJvcjtcbnZhciBzcHJpbnRmID0gbW9kX2V4dHNwcmludGYuc3ByaW50ZjtcblxuLypcbiAqIFB1YmxpYyBpbnRlcmZhY2VcbiAqL1xuXG4vKiBTbyB5b3UgY2FuICd2YXIgVkVycm9yID0gcmVxdWlyZSgndmVycm9yJyknICovXG5tb2R1bGUuZXhwb3J0cyA9IFZFcnJvcjtcbi8qIEZvciBjb21wYXRpYmlsaXR5ICovXG5WRXJyb3IuVkVycm9yID0gVkVycm9yO1xuLyogT3RoZXIgZXhwb3J0ZWQgY2xhc3NlcyAqL1xuVkVycm9yLlNFcnJvciA9IFNFcnJvcjtcblZFcnJvci5XRXJyb3IgPSBXRXJyb3I7XG5WRXJyb3IuTXVsdGlFcnJvciA9IE11bHRpRXJyb3I7XG5cbi8qXG4gKiBDb21tb24gZnVuY3Rpb24gdXNlZCB0byBwYXJzZSBjb25zdHJ1Y3RvciBhcmd1bWVudHMgZm9yIFZFcnJvciwgV0Vycm9yLCBhbmRcbiAqIFNFcnJvci4gIE5hbWVkIGFyZ3VtZW50cyB0byB0aGlzIGZ1bmN0aW9uOlxuICpcbiAqICAgICBzdHJpY3RcdFx0Zm9yY2Ugc3RyaWN0IGludGVycHJldGF0aW9uIG9mIHNwcmludGYgYXJndW1lbnRzLCBldmVuXG4gKiAgICAgXHRcdFx0aWYgdGhlIG9wdGlvbnMgaW4gXCJhcmd2XCIgZG9uJ3Qgc2F5IHNvXG4gKlxuICogICAgIGFyZ3ZcdFx0ZXJyb3IncyBjb25zdHJ1Y3RvciBhcmd1bWVudHMsIHdoaWNoIGFyZSB0byBiZVxuICogICAgIFx0XHRcdGludGVycHJldGVkIGFzIGRlc2NyaWJlZCBpbiBSRUFETUUubWQuICBGb3IgcXVpY2tcbiAqICAgICBcdFx0XHRyZWZlcmVuY2UsIFwiYXJndlwiIGhhcyBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtczpcbiAqXG4gKiAgICAgICAgICBbIHNwcmludGZfYXJncy4uLiBdICAgICAgICAgICAoYXJndlswXSBpcyBhIHN0cmluZylcbiAqICAgICAgICAgIFsgY2F1c2UsIHNwcmludGZfYXJncy4uLiBdICAgIChhcmd2WzBdIGlzIGFuIEVycm9yKVxuICogICAgICAgICAgWyBvcHRpb25zLCBzcHJpbnRmX2FyZ3MuLi4gXSAgKGFyZ3ZbMF0gaXMgYW4gb2JqZWN0KVxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbm9ybWFsaXplcyB0aGVzZSBmb3JtcywgcHJvZHVjaW5nIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAqIHByb3BlcnRpZXM6XG4gKlxuICogICAgb3B0aW9ucyAgICAgICAgICAgZXF1aXZhbGVudCB0byBcIm9wdGlvbnNcIiBpbiB0aGlyZCBmb3JtLiAgVGhpcyB3aWxsIG5ldmVyXG4gKiAgICBcdFx0XHRiZSBhIGRpcmVjdCByZWZlcmVuY2UgdG8gd2hhdCB0aGUgY2FsbGVyIHBhc3NlZCBpblxuICogICAgXHRcdFx0KGkuZS4sIGl0IG1heSBiZSBhIHNoYWxsb3cgY29weSksIHNvIGl0IGNhbiBiZSBmcmVlbHlcbiAqICAgIFx0XHRcdG1vZGlmaWVkLlxuICpcbiAqICAgIHNob3J0bWVzc2FnZSAgICAgIHJlc3VsdCBvZiBzcHJpbnRmKHNwcmludGZfYXJncyksIHRha2luZyBvcHRpb25zLnN0cmljdFxuICogICAgXHRcdFx0aW50byBhY2NvdW50IGFzIGRlc2NyaWJlZCBpbiBSRUFETUUubWQuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlQ29uc3RydWN0b3JBcmd1bWVudHMoYXJncylcbntcblx0dmFyIGFyZ3YsIG9wdGlvbnMsIHNwcmludGZfYXJncywgc2hvcnRtZXNzYWdlLCBrO1xuXG5cdG1vZF9hc3NlcnRwbHVzLm9iamVjdChhcmdzLCAnYXJncycpO1xuXHRtb2RfYXNzZXJ0cGx1cy5ib29sKGFyZ3Muc3RyaWN0LCAnYXJncy5zdHJpY3QnKTtcblx0bW9kX2Fzc2VydHBsdXMuYXJyYXkoYXJncy5hcmd2LCAnYXJncy5hcmd2Jyk7XG5cdGFyZ3YgPSBhcmdzLmFyZ3Y7XG5cblx0Lypcblx0ICogRmlyc3QsIGZpZ3VyZSBvdXQgd2hpY2ggZm9ybSBvZiBpbnZvY2F0aW9uIHdlJ3ZlIGJlZW4gZ2l2ZW4uXG5cdCAqL1xuXHRpZiAoYXJndi5sZW5ndGggPT09IDApIHtcblx0XHRvcHRpb25zID0ge307XG5cdFx0c3ByaW50Zl9hcmdzID0gW107XG5cdH0gZWxzZSBpZiAobW9kX2lzRXJyb3IoYXJndlswXSkpIHtcblx0XHRvcHRpb25zID0geyAnY2F1c2UnOiBhcmd2WzBdIH07XG5cdFx0c3ByaW50Zl9hcmdzID0gYXJndi5zbGljZSgxKTtcblx0fSBlbHNlIGlmICh0eXBlb2YgKGFyZ3ZbMF0pID09PSAnb2JqZWN0Jykge1xuXHRcdG9wdGlvbnMgPSB7fTtcblx0XHRmb3IgKGsgaW4gYXJndlswXSkge1xuXHRcdFx0b3B0aW9uc1trXSA9IGFyZ3ZbMF1ba107XG5cdFx0fVxuXHRcdHNwcmludGZfYXJncyA9IGFyZ3Yuc2xpY2UoMSk7XG5cdH0gZWxzZSB7XG5cdFx0bW9kX2Fzc2VydHBsdXMuc3RyaW5nKGFyZ3ZbMF0sXG5cdFx0ICAgICdmaXJzdCBhcmd1bWVudCB0byBWRXJyb3IsIFNFcnJvciwgb3IgV0Vycm9yICcgK1xuXHRcdCAgICAnY29uc3RydWN0b3IgbXVzdCBiZSBhIHN0cmluZywgb2JqZWN0LCBvciBFcnJvcicpO1xuXHRcdG9wdGlvbnMgPSB7fTtcblx0XHRzcHJpbnRmX2FyZ3MgPSBhcmd2O1xuXHR9XG5cblx0Lypcblx0ICogTm93IGNvbnN0cnVjdCB0aGUgZXJyb3IncyBtZXNzYWdlLlxuXHQgKlxuXHQgKiBleHRzcHJpbnRmICh3aGljaCB3ZSBpbnZva2UgaGVyZSB3aXRoIG91ciBjYWxsZXIncyBhcmd1bWVudHMgaW4gb3JkZXJcblx0ICogdG8gY29uc3RydWN0IHRoaXMgRXJyb3IncyBtZXNzYWdlKSBpcyBzdHJpY3QgaW4gaXRzIGludGVycHJldGF0aW9uIG9mXG5cdCAqIHZhbHVlcyB0byBiZSBwcm9jZXNzZWQgYnkgdGhlIFwiJXNcIiBzcGVjaWZpZXIuICBUaGUgdmFsdWUgcGFzc2VkIHRvXG5cdCAqIGV4dHNwcmludGYgbXVzdCBhY3R1YWxseSBiZSBhIHN0cmluZyBvciBzb21ldGhpbmcgY29udmVydGlibGUgdG8gYVxuXHQgKiBTdHJpbmcgdXNpbmcgLnRvU3RyaW5nKCkuICBQYXNzaW5nIG90aGVyIHZhbHVlcyAobm90YWJseSBcIm51bGxcIiBhbmRcblx0ICogXCJ1bmRlZmluZWRcIikgaXMgY29uc2lkZXJlZCBhIHByb2dyYW1tZXIgZXJyb3IuICBUaGUgYXNzdW1wdGlvbiBpc1xuXHQgKiB0aGF0IGlmIHlvdSBhY3R1YWxseSB3YW50IHRvIHByaW50IHRoZSBzdHJpbmcgXCJudWxsXCIgb3IgXCJ1bmRlZmluZWRcIixcblx0ICogdGhlbiB0aGF0J3MgZWFzeSB0byBkbyB0aGF0IHdoZW4geW91J3JlIGNhbGxpbmcgZXh0c3ByaW50Zjsgb24gdGhlXG5cdCAqIG90aGVyIGhhbmQsIGlmIHlvdSBkaWQgTk9UIHdhbnQgdGhhdCAoaS5lLiwgdGhlcmUncyBhY3R1YWxseSBhIGJ1Z1xuXHQgKiB3aGVyZSB0aGUgcHJvZ3JhbSBhc3N1bWVzIHNvbWUgdmFyaWFibGUgaXMgbm9uLW51bGwgYW5kIHRyaWVzIHRvXG5cdCAqIHByaW50IGl0LCB3aGljaCBtaWdodCBoYXBwZW4gd2hlbiBjb25zdHJ1Y3RpbmcgYSBwYWNrZXQgb3IgZmlsZSBpblxuXHQgKiBzb21lIHNwZWNpZmljIGZvcm1hdCksIHRoZW4gaXQncyBiZXR0ZXIgdG8gc3RvcCBpbW1lZGlhdGVseSB0aGFuXG5cdCAqIHByb2R1Y2UgYm9ndXMgb3V0cHV0LlxuXHQgKlxuXHQgKiBIb3dldmVyLCBzb21ldGltZXMgdGhlIGJ1ZyBpcyBvbmx5IGluIHRoZSBjb2RlIGNhbGxpbmcgVkVycm9yLCBhbmQgYVxuXHQgKiBwcm9ncmFtbWVyIG1pZ2h0IHByZWZlciB0byBoYXZlIHRoZSBlcnJvciBtZXNzYWdlIGNvbnRhaW4gXCJudWxsXCIgb3Jcblx0ICogXCJ1bmRlZmluZWRcIiByYXRoZXIgdGhhbiBoYXZlIHRoZSBidWcgaW4gdGhlIGVycm9yIHBhdGggY3Jhc2ggdGhlXG5cdCAqIHByb2dyYW0gKG1ha2luZyB0aGUgZmlyc3QgYnVnIGhhcmRlciB0byBpZGVudGlmeSkuICBGb3IgdGhhdCByZWFzb24sXG5cdCAqIGJ5IGRlZmF1bHQgVkVycm9yIGNvbnZlcnRzIFwibnVsbFwiIG9yIFwidW5kZWZpbmVkXCIgYXJndW1lbnRzIHRvIHRoZWlyXG5cdCAqIHN0cmluZyByZXByZXNlbnRhdGlvbnMgYW5kIHBhc3NlcyB0aG9zZSB0byBleHRzcHJpbnRmLiAgUHJvZ3JhbW1lcnNcblx0ICogZGVzaXJpbmcgdGhlIHN0cmljdCBiZWhhdmlvciBjYW4gdXNlIHRoZSBTRXJyb3IgY2xhc3Mgb3IgcGFzcyB0aGVcblx0ICogXCJzdHJpY3RcIiBvcHRpb24gdG8gdGhlIFZFcnJvciBjb25zdHJ1Y3Rvci5cblx0ICovXG5cdG1vZF9hc3NlcnRwbHVzLm9iamVjdChvcHRpb25zKTtcblx0aWYgKCFvcHRpb25zLnN0cmljdCAmJiAhYXJncy5zdHJpY3QpIHtcblx0XHRzcHJpbnRmX2FyZ3MgPSBzcHJpbnRmX2FyZ3MubWFwKGZ1bmN0aW9uIChhKSB7XG5cdFx0XHRyZXR1cm4gKGEgPT09IG51bGwgPyAnbnVsbCcgOlxuXHRcdFx0ICAgIGEgPT09IHVuZGVmaW5lZCA/ICd1bmRlZmluZWQnIDogYSk7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAoc3ByaW50Zl9hcmdzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHNob3J0bWVzc2FnZSA9ICcnO1xuXHR9IGVsc2Uge1xuXHRcdHNob3J0bWVzc2FnZSA9IHNwcmludGYuYXBwbHkobnVsbCwgc3ByaW50Zl9hcmdzKTtcblx0fVxuXG5cdHJldHVybiAoe1xuXHQgICAgJ29wdGlvbnMnOiBvcHRpb25zLFxuXHQgICAgJ3Nob3J0bWVzc2FnZSc6IHNob3J0bWVzc2FnZVxuXHR9KTtcbn1cblxuLypcbiAqIFNlZSBSRUFETUUubWQgZm9yIHJlZmVyZW5jZSBkb2N1bWVudGF0aW9uLlxuICovXG5mdW5jdGlvbiBWRXJyb3IoKVxue1xuXHR2YXIgYXJncywgb2JqLCBwYXJzZWQsIGNhdXNlLCBjdG9yLCBtZXNzYWdlLCBrO1xuXG5cdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG5cdC8qXG5cdCAqIFRoaXMgaXMgYSByZWdyZXR0YWJsZSBwYXR0ZXJuLCBidXQgSmF2YVNjcmlwdCdzIGJ1aWx0LWluIEVycm9yIGNsYXNzXG5cdCAqIGlzIGRlZmluZWQgdG8gd29yayB0aGlzIHdheSwgc28gd2UgYWxsb3cgdGhlIGNvbnN0cnVjdG9yIHRvIGJlIGNhbGxlZFxuXHQgKiB3aXRob3V0IFwibmV3XCIuXG5cdCAqL1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgVkVycm9yKSkge1xuXHRcdG9iaiA9IE9iamVjdC5jcmVhdGUoVkVycm9yLnByb3RvdHlwZSk7XG5cdFx0VkVycm9yLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gKG9iaik7XG5cdH1cblxuXHQvKlxuXHQgKiBGb3IgY29udmVuaWVuY2UgYW5kIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB3ZSBzdXBwb3J0IHNldmVyYWxcblx0ICogZGlmZmVyZW50IGNhbGxpbmcgZm9ybXMuICBOb3JtYWxpemUgdGhlbSBoZXJlLlxuXHQgKi9cblx0cGFyc2VkID0gcGFyc2VDb25zdHJ1Y3RvckFyZ3VtZW50cyh7XG5cdCAgICAnYXJndic6IGFyZ3MsXG5cdCAgICAnc3RyaWN0JzogZmFsc2Vcblx0fSk7XG5cblx0Lypcblx0ICogSWYgd2UndmUgYmVlbiBnaXZlbiBhIG5hbWUsIGFwcGx5IGl0IG5vdy5cblx0ICovXG5cdGlmIChwYXJzZWQub3B0aW9ucy5uYW1lKSB7XG5cdFx0bW9kX2Fzc2VydHBsdXMuc3RyaW5nKHBhcnNlZC5vcHRpb25zLm5hbWUsXG5cdFx0ICAgICdlcnJvclxcJ3MgXCJuYW1lXCIgbXVzdCBiZSBhIHN0cmluZycpO1xuXHRcdHRoaXMubmFtZSA9IHBhcnNlZC5vcHRpb25zLm5hbWU7XG5cdH1cblxuXHQvKlxuXHQgKiBGb3IgZGVidWdnaW5nLCB3ZSBrZWVwIHRyYWNrIG9mIHRoZSBvcmlnaW5hbCBzaG9ydCBtZXNzYWdlIChhdHRhY2hlZFxuXHQgKiB0aGlzIEVycm9yIHBhcnRpY3VsYXJseSkgc2VwYXJhdGVseSBmcm9tIHRoZSBjb21wbGV0ZSBtZXNzYWdlICh3aGljaFxuXHQgKiBpbmNsdWRlcyB0aGUgbWVzc2FnZXMgb2Ygb3VyIGNhdXNlIGNoYWluKS5cblx0ICovXG5cdHRoaXMuanNlX3Nob3J0bXNnID0gcGFyc2VkLnNob3J0bWVzc2FnZTtcblx0bWVzc2FnZSA9IHBhcnNlZC5zaG9ydG1lc3NhZ2U7XG5cblx0Lypcblx0ICogSWYgd2UndmUgYmVlbiBnaXZlbiBhIGNhdXNlLCByZWNvcmQgYSByZWZlcmVuY2UgdG8gaXQgYW5kIHVwZGF0ZSBvdXJcblx0ICogbWVzc2FnZSBhcHByb3ByaWF0ZWx5LlxuXHQgKi9cblx0Y2F1c2UgPSBwYXJzZWQub3B0aW9ucy5jYXVzZTtcblx0aWYgKGNhdXNlKSB7XG5cdFx0bW9kX2Fzc2VydHBsdXMub2sobW9kX2lzRXJyb3IoY2F1c2UpLCAnY2F1c2UgaXMgbm90IGFuIEVycm9yJyk7XG5cdFx0dGhpcy5qc2VfY2F1c2UgPSBjYXVzZTtcblxuXHRcdGlmICghcGFyc2VkLm9wdGlvbnMuc2tpcENhdXNlTWVzc2FnZSkge1xuXHRcdFx0bWVzc2FnZSArPSAnOiAnICsgY2F1c2UubWVzc2FnZTtcblx0XHR9XG5cdH1cblxuXHQvKlxuXHQgKiBJZiB3ZSd2ZSBiZWVuIGdpdmVuIGFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXMsIHNoYWxsb3ctY29weSB0aGF0XG5cdCAqIGhlcmUuICBXZSBkb24ndCB3YW50IHRvIHVzZSBhIGRlZXAgY29weSBpbiBjYXNlIHRoZXJlIGFyZSBub24tcGxhaW5cblx0ICogb2JqZWN0cyBoZXJlLCBidXQgd2UgZG9uJ3Qgd2FudCB0byB1c2UgdGhlIG9yaWdpbmFsIG9iamVjdCBpbiBjYXNlXG5cdCAqIHRoZSBjYWxsZXIgbW9kaWZpZXMgaXQgbGF0ZXIuXG5cdCAqL1xuXHR0aGlzLmpzZV9pbmZvID0ge307XG5cdGlmIChwYXJzZWQub3B0aW9ucy5pbmZvKSB7XG5cdFx0Zm9yIChrIGluIHBhcnNlZC5vcHRpb25zLmluZm8pIHtcblx0XHRcdHRoaXMuanNlX2luZm9ba10gPSBwYXJzZWQub3B0aW9ucy5pbmZvW2tdO1xuXHRcdH1cblx0fVxuXG5cdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdEVycm9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cblx0aWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG5cdFx0Y3RvciA9IHBhcnNlZC5vcHRpb25zLmNvbnN0cnVjdG9yT3B0IHx8IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0RXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgY3Rvcik7XG5cdH1cblxuXHRyZXR1cm4gKHRoaXMpO1xufVxuXG5tb2RfdXRpbC5pbmhlcml0cyhWRXJyb3IsIEVycm9yKTtcblZFcnJvci5wcm90b3R5cGUubmFtZSA9ICdWRXJyb3InO1xuXG5WRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdmVfdG9TdHJpbmcoKVxue1xuXHR2YXIgc3RyID0gKHRoaXMuaGFzT3duUHJvcGVydHkoJ25hbWUnKSAmJiB0aGlzLm5hbWUgfHxcblx0XHR0aGlzLmNvbnN0cnVjdG9yLm5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUubmFtZSk7XG5cdGlmICh0aGlzLm1lc3NhZ2UpXG5cdFx0c3RyICs9ICc6ICcgKyB0aGlzLm1lc3NhZ2U7XG5cblx0cmV0dXJuIChzdHIpO1xufTtcblxuLypcbiAqIFRoaXMgbWV0aG9kIGlzIHByb3ZpZGVkIGZvciBjb21wYXRpYmlsaXR5LiAgTmV3IGNhbGxlcnMgc2hvdWxkIHVzZVxuICogVkVycm9yLmNhdXNlKCkgaW5zdGVhZC4gIFRoYXQgbWV0aG9kIGFsc28gdXNlcyB0aGUgc2FuZXIgYG51bGxgIHJldHVybiB2YWx1ZVxuICogd2hlbiB0aGVyZSBpcyBubyBjYXVzZS5cbiAqL1xuVkVycm9yLnByb3RvdHlwZS5jYXVzZSA9IGZ1bmN0aW9uIHZlX2NhdXNlKClcbntcblx0dmFyIGNhdXNlID0gVkVycm9yLmNhdXNlKHRoaXMpO1xuXHRyZXR1cm4gKGNhdXNlID09PSBudWxsID8gdW5kZWZpbmVkIDogY2F1c2UpO1xufTtcblxuLypcbiAqIFN0YXRpYyBtZXRob2RzXG4gKlxuICogVGhlc2UgY2xhc3MtbGV2ZWwgbWV0aG9kcyBhcmUgcHJvdmlkZWQgc28gdGhhdCBjYWxsZXJzIGNhbiB1c2UgdGhlbSBvblxuICogaW5zdGFuY2VzIG9mIEVycm9ycyB0aGF0IGFyZSBub3QgVkVycm9ycy4gIE5ldyBpbnRlcmZhY2VzIHNob3VsZCBiZSBwcm92aWRlZFxuICogb25seSB1c2luZyBzdGF0aWMgbWV0aG9kcyB0byBlbGltaW5hdGUgdGhlIGNsYXNzIG9mIHByb2dyYW1taW5nIG1pc3Rha2Ugd2hlcmVcbiAqIHBlb3BsZSBmYWlsIHRvIGNoZWNrIHdoZXRoZXIgdGhlIEVycm9yIG9iamVjdCBoYXMgdGhlIGNvcnJlc3BvbmRpbmcgbWV0aG9kcy5cbiAqL1xuXG5WRXJyb3IuY2F1c2UgPSBmdW5jdGlvbiAoZXJyKVxue1xuXHRtb2RfYXNzZXJ0cGx1cy5vayhtb2RfaXNFcnJvcihlcnIpLCAnZXJyIG11c3QgYmUgYW4gRXJyb3InKTtcblx0cmV0dXJuIChtb2RfaXNFcnJvcihlcnIuanNlX2NhdXNlKSA/IGVyci5qc2VfY2F1c2UgOiBudWxsKTtcbn07XG5cblZFcnJvci5pbmZvID0gZnVuY3Rpb24gKGVycilcbntcblx0dmFyIHJ2LCBjYXVzZSwgaztcblxuXHRtb2RfYXNzZXJ0cGx1cy5vayhtb2RfaXNFcnJvcihlcnIpLCAnZXJyIG11c3QgYmUgYW4gRXJyb3InKTtcblx0Y2F1c2UgPSBWRXJyb3IuY2F1c2UoZXJyKTtcblx0aWYgKGNhdXNlICE9PSBudWxsKSB7XG5cdFx0cnYgPSBWRXJyb3IuaW5mbyhjYXVzZSk7XG5cdH0gZWxzZSB7XG5cdFx0cnYgPSB7fTtcblx0fVxuXG5cdGlmICh0eXBlb2YgKGVyci5qc2VfaW5mbykgPT0gJ29iamVjdCcgJiYgZXJyLmpzZV9pbmZvICE9PSBudWxsKSB7XG5cdFx0Zm9yIChrIGluIGVyci5qc2VfaW5mbykge1xuXHRcdFx0cnZba10gPSBlcnIuanNlX2luZm9ba107XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIChydik7XG59O1xuXG5WRXJyb3IuZmluZENhdXNlQnlOYW1lID0gZnVuY3Rpb24gKGVyciwgbmFtZSlcbntcblx0dmFyIGNhdXNlO1xuXG5cdG1vZF9hc3NlcnRwbHVzLm9rKG1vZF9pc0Vycm9yKGVyciksICdlcnIgbXVzdCBiZSBhbiBFcnJvcicpO1xuXHRtb2RfYXNzZXJ0cGx1cy5zdHJpbmcobmFtZSwgJ25hbWUnKTtcblx0bW9kX2Fzc2VydHBsdXMub2sobmFtZS5sZW5ndGggPiAwLCAnbmFtZSBjYW5ub3QgYmUgZW1wdHknKTtcblxuXHRmb3IgKGNhdXNlID0gZXJyOyBjYXVzZSAhPT0gbnVsbDsgY2F1c2UgPSBWRXJyb3IuY2F1c2UoY2F1c2UpKSB7XG5cdFx0bW9kX2Fzc2VydHBsdXMub2sobW9kX2lzRXJyb3IoY2F1c2UpKTtcblx0XHRpZiAoY2F1c2UubmFtZSA9PSBuYW1lKSB7XG5cdFx0XHRyZXR1cm4gKGNhdXNlKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gKG51bGwpO1xufTtcblxuVkVycm9yLmhhc0NhdXNlV2l0aE5hbWUgPSBmdW5jdGlvbiAoZXJyLCBuYW1lKVxue1xuXHRyZXR1cm4gKFZFcnJvci5maW5kQ2F1c2VCeU5hbWUoZXJyLCBuYW1lKSAhPT0gbnVsbCk7XG59O1xuXG5WRXJyb3IuZnVsbFN0YWNrID0gZnVuY3Rpb24gKGVycilcbntcblx0bW9kX2Fzc2VydHBsdXMub2sobW9kX2lzRXJyb3IoZXJyKSwgJ2VyciBtdXN0IGJlIGFuIEVycm9yJyk7XG5cblx0dmFyIGNhdXNlID0gVkVycm9yLmNhdXNlKGVycik7XG5cblx0aWYgKGNhdXNlKSB7XG5cdFx0cmV0dXJuIChlcnIuc3RhY2sgKyAnXFxuY2F1c2VkIGJ5OiAnICsgVkVycm9yLmZ1bGxTdGFjayhjYXVzZSkpO1xuXHR9XG5cblx0cmV0dXJuIChlcnIuc3RhY2spO1xufTtcblxuVkVycm9yLmVycm9yRnJvbUxpc3QgPSBmdW5jdGlvbiAoZXJyb3JzKVxue1xuXHRtb2RfYXNzZXJ0cGx1cy5hcnJheU9mT2JqZWN0KGVycm9ycywgJ2Vycm9ycycpO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIChudWxsKTtcblx0fVxuXG5cdGVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cdFx0bW9kX2Fzc2VydHBsdXMub2sobW9kX2lzRXJyb3IoZSkpO1xuXHR9KTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA9PSAxKSB7XG5cdFx0cmV0dXJuIChlcnJvcnNbMF0pO1xuXHR9XG5cblx0cmV0dXJuIChuZXcgTXVsdGlFcnJvcihlcnJvcnMpKTtcbn07XG5cblZFcnJvci5lcnJvckZvckVhY2ggPSBmdW5jdGlvbiAoZXJyLCBmdW5jKVxue1xuXHRtb2RfYXNzZXJ0cGx1cy5vayhtb2RfaXNFcnJvcihlcnIpLCAnZXJyIG11c3QgYmUgYW4gRXJyb3InKTtcblx0bW9kX2Fzc2VydHBsdXMuZnVuYyhmdW5jLCAnZnVuYycpO1xuXG5cdGlmIChlcnIgaW5zdGFuY2VvZiBNdWx0aUVycm9yKSB7XG5cdFx0ZXJyLmVycm9ycygpLmZvckVhY2goZnVuY3Rpb24gaXRlckVycm9yKGUpIHsgZnVuYyhlKTsgfSk7XG5cdH0gZWxzZSB7XG5cdFx0ZnVuYyhlcnIpO1xuXHR9XG59O1xuXG5cbi8qXG4gKiBTRXJyb3IgaXMgbGlrZSBWRXJyb3IsIGJ1dCBzdHJpY3RlciBhYm91dCB0eXBlcy4gIFlvdSBjYW5ub3QgcGFzcyBcIm51bGxcIiBvclxuICogXCJ1bmRlZmluZWRcIiBhcyBzdHJpbmcgYXJndW1lbnRzIHRvIHRoZSBmb3JtYXR0ZXIuXG4gKi9cbmZ1bmN0aW9uIFNFcnJvcigpXG57XG5cdHZhciBhcmdzLCBvYmosIHBhcnNlZCwgb3B0aW9ucztcblxuXHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIFNFcnJvcikpIHtcblx0XHRvYmogPSBPYmplY3QuY3JlYXRlKFNFcnJvci5wcm90b3R5cGUpO1xuXHRcdFNFcnJvci5hcHBseShvYmosIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIChvYmopO1xuXHR9XG5cblx0cGFyc2VkID0gcGFyc2VDb25zdHJ1Y3RvckFyZ3VtZW50cyh7XG5cdCAgICAnYXJndic6IGFyZ3MsXG5cdCAgICAnc3RyaWN0JzogdHJ1ZVxuXHR9KTtcblxuXHRvcHRpb25zID0gcGFyc2VkLm9wdGlvbnM7XG5cdFZFcnJvci5jYWxsKHRoaXMsIG9wdGlvbnMsICclcycsIHBhcnNlZC5zaG9ydG1lc3NhZ2UpO1xuXG5cdHJldHVybiAodGhpcyk7XG59XG5cbi8qXG4gKiBXZSBkb24ndCBib3RoZXIgc2V0dGluZyBTRXJyb3IucHJvdG90eXBlLm5hbWUgYmVjYXVzZSBvbmNlIGNvbnN0cnVjdGVkLFxuICogU0Vycm9ycyBhcmUganVzdCBsaWtlIFZFcnJvcnMuXG4gKi9cbm1vZF91dGlsLmluaGVyaXRzKFNFcnJvciwgVkVycm9yKTtcblxuXG4vKlxuICogUmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgZXJyb3JzIGZvciB0aGUgcHVycG9zZSBvZiBjb25zdW1lcnMgdGhhdCBnZW5lcmFsbHlcbiAqIG9ubHkgZGVhbCB3aXRoIG9uZSBlcnJvci4gIENhbGxlcnMgY2FuIGV4dHJhY3QgdGhlIGluZGl2aWR1YWwgZXJyb3JzXG4gKiBjb250YWluZWQgaW4gdGhpcyBvYmplY3QsIGJ1dCBtYXkgYWxzbyBqdXN0IHRyZWF0IGl0IGFzIGEgbm9ybWFsIHNpbmdsZVxuICogZXJyb3IsIGluIHdoaWNoIGNhc2UgYSBzdW1tYXJ5IG1lc3NhZ2Ugd2lsbCBiZSBwcmludGVkLlxuICovXG5mdW5jdGlvbiBNdWx0aUVycm9yKGVycm9ycylcbntcblx0bW9kX2Fzc2VydHBsdXMuYXJyYXkoZXJyb3JzLCAnbGlzdCBvZiBlcnJvcnMnKTtcblx0bW9kX2Fzc2VydHBsdXMub2soZXJyb3JzLmxlbmd0aCA+IDAsICdtdXN0IGJlIGF0IGxlYXN0IG9uZSBlcnJvcicpO1xuXHR0aGlzLmFzZV9lcnJvcnMgPSBlcnJvcnM7XG5cblx0VkVycm9yLmNhbGwodGhpcywge1xuXHQgICAgJ2NhdXNlJzogZXJyb3JzWzBdXG5cdH0sICdmaXJzdCBvZiAlZCBlcnJvciVzJywgZXJyb3JzLmxlbmd0aCwgZXJyb3JzLmxlbmd0aCA9PSAxID8gJycgOiAncycpO1xufVxuXG5tb2RfdXRpbC5pbmhlcml0cyhNdWx0aUVycm9yLCBWRXJyb3IpO1xuTXVsdGlFcnJvci5wcm90b3R5cGUubmFtZSA9ICdNdWx0aUVycm9yJztcblxuTXVsdGlFcnJvci5wcm90b3R5cGUuZXJyb3JzID0gZnVuY3Rpb24gbWVfZXJyb3JzKClcbntcblx0cmV0dXJuICh0aGlzLmFzZV9lcnJvcnMuc2xpY2UoMCkpO1xufTtcblxuXG4vKlxuICogU2VlIFJFQURNRS5tZCBmb3IgcmVmZXJlbmNlIGRldGFpbHMuXG4gKi9cbmZ1bmN0aW9uIFdFcnJvcigpXG57XG5cdHZhciBhcmdzLCBvYmosIHBhcnNlZCwgb3B0aW9ucztcblxuXHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIFdFcnJvcikpIHtcblx0XHRvYmogPSBPYmplY3QuY3JlYXRlKFdFcnJvci5wcm90b3R5cGUpO1xuXHRcdFdFcnJvci5hcHBseShvYmosIGFyZ3MpO1xuXHRcdHJldHVybiAob2JqKTtcblx0fVxuXG5cdHBhcnNlZCA9IHBhcnNlQ29uc3RydWN0b3JBcmd1bWVudHMoe1xuXHQgICAgJ2FyZ3YnOiBhcmdzLFxuXHQgICAgJ3N0cmljdCc6IGZhbHNlXG5cdH0pO1xuXG5cdG9wdGlvbnMgPSBwYXJzZWQub3B0aW9ucztcblx0b3B0aW9uc1snc2tpcENhdXNlTWVzc2FnZSddID0gdHJ1ZTtcblx0VkVycm9yLmNhbGwodGhpcywgb3B0aW9ucywgJyVzJywgcGFyc2VkLnNob3J0bWVzc2FnZSk7XG5cblx0cmV0dXJuICh0aGlzKTtcbn1cblxubW9kX3V0aWwuaW5oZXJpdHMoV0Vycm9yLCBWRXJyb3IpO1xuV0Vycm9yLnByb3RvdHlwZS5uYW1lID0gJ1dFcnJvcic7XG5cbldFcnJvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB3ZV90b1N0cmluZygpXG57XG5cdHZhciBzdHIgPSAodGhpcy5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmIHRoaXMubmFtZSB8fFxuXHRcdHRoaXMuY29uc3RydWN0b3IubmFtZSB8fCB0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZS5uYW1lKTtcblx0aWYgKHRoaXMubWVzc2FnZSlcblx0XHRzdHIgKz0gJzogJyArIHRoaXMubWVzc2FnZTtcblx0aWYgKHRoaXMuanNlX2NhdXNlICYmIHRoaXMuanNlX2NhdXNlLm1lc3NhZ2UpXG5cdFx0c3RyICs9ICc7IGNhdXNlZCBieSAnICsgdGhpcy5qc2VfY2F1c2UudG9TdHJpbmcoKTtcblxuXHRyZXR1cm4gKHN0cik7XG59O1xuXG4vKlxuICogRm9yIHB1cmVseSBoaXN0b3JpY2FsIHJlYXNvbnMsIFdFcnJvcidzIGNhdXNlKCkgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXRcbiAqIHRoZSBjYXVzZS5cbiAqL1xuV0Vycm9yLnByb3RvdHlwZS5jYXVzZSA9IGZ1bmN0aW9uIHdlX2NhdXNlKGMpXG57XG5cdGlmIChtb2RfaXNFcnJvcihjKSlcblx0XHR0aGlzLmpzZV9jYXVzZSA9IGM7XG5cblx0cmV0dXJuICh0aGlzLmpzZV9jYXVzZSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/verror/lib/verror.js\n");

/***/ })

};
;