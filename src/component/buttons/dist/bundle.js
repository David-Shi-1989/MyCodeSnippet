/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!../../../node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./style.less":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** C:/Personal Files/github/MyCodeSnippet/node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!C:/Personal Files/github/MyCodeSnippet/node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./style.less ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@3.2.0@css-loader/dist/runtime/api.js */ \"../../../node_modules/_css-loader@3.2.0@css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(http://www.w3cplus.com/download/reset.css);\", \"\"]);\n// Module\nexports.push([module.i, \"@charset \\\"utf-8\\\";\\n* {\\n  margin: 0;\\n  padding: 0;\\n}\\n.style1 {\\n  list-style: none;\\n  text-align: center;\\n}\\n.style1 > li {\\n  position: relative;\\n  display: inline-block;\\n  margin-right: -4px;\\n}\\n.style1 > li:before {\\n  content: \\\"\\\";\\n  display: block;\\n  border-top: 1px solid #ddd;\\n  border-bottom: 1px solid #fff;\\n  width: 100%;\\n  height: 1px;\\n  position: absolute;\\n  top: 50%;\\n  z-index: -1;\\n}\\n.style1 > li a {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.style1 > li a:link,\\n.style1 > li a:visited {\\n  text-decoration: none;\\n  background-color: #f7f7f7;\\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f7f7f7), to(#e7e7e7));\\n  background-image: -webkit-linear-gradient(top, #f7f7f7, #e7e7e7);\\n  background-image: -moz-linear-gradient(top, #f7f7f7, #e7e7e7);\\n  background-image: -ms-linear-gradient(top, #f7f7f7, #e7e7e7);\\n  background-image: -o-linear-gradient(top, #f7f7f7, #e7e7e7);\\n  color: #a7a7a7;\\n  margin: 36px;\\n  width: 40px;\\n  height: 40px;\\n  position: relative;\\n  text-align: center;\\n  line-height: 40px;\\n  border-radius: 50%;\\n  box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff;\\n  border: solid 1px transparent;\\n}\\n.style1 > li a:before {\\n  content: \\\"\\\";\\n  display: block;\\n  background: #fff;\\n  border-top: 2px solid #ddd;\\n  position: absolute;\\n  top: -18px;\\n  left: -18px;\\n  bottom: -18px;\\n  right: -18px;\\n  z-index: -1;\\n  border-radius: 50%;\\n  box-shadow: inset 0px 8px 48px #ddd;\\n}\\n.style1 > li a:active {\\n  box-shadow: none;\\n  border: solid 1px #a7a7a7;\\n}\\n.style1 > li a:hover {\\n  text-decoration: none;\\n  color: #555;\\n  background: #f5f5f5;\\n}\\n.style1 > li a svg {\\n  width: 20px;\\n  height: 20px;\\n  border-color: red;\\n}\\n/*************************\\nstyle2\\n**************************/\\n.style2 {\\n  width: 300px;\\n  margin: 40px auto;\\n  background: #35393d;\\n  padding: 20px;\\n}\\n.button {\\n  color: #f2f2f2;\\n  text-shadow: 0 1px 0 #484f58;\\n  margin-bottom: 20px;\\n  margin-right: 5px;\\n  border: 1px solid #202124;\\n  box-shadow: 0 1px 0 #616a74 inset, 0 1px 5px #212528;\\n  background: -webkit-linear-gradient(top, #474d54, #2f363d);\\n  background: -moz-linear-gradient(top, #474d54, #2f363d);\\n  background: -ms-linear-gradient(top, #474d54, #2f363d);\\n  background: -o-linear-gradient(top, #474d54, #2f363d);\\n  background: linear-gradient(top, #474d54, #2f363d);\\n}\\n.button:nth-child(3n) {\\n  margin-right: 35px;\\n}\\n.button:hover {\\n  background: -webkit-linear-gradient(top, #5b6167, #30373e);\\n  background: -moz-linear-gradient(top, #5b6167, #30373e);\\n  background: -ms-linear-gradient(top, #5b6167, #30373e);\\n  background: -o-linear-gradient(top, #5b6167, #30373e);\\n  background: linear-gradient(top, #5b6167, #30373e);\\n}\\n.button:active {\\n  box-shadow: 0 1px #484c50;\\n  background: -webkit-linear-gradient(top, #232930, #3c4249);\\n  background: -moz-linear-gradient(top, #232930, #3c4249);\\n  background: -ms-linear-gradient(top, #232930, #3c4249);\\n  background: -o-linear-gradient(top, #232930, #3c4249);\\n  background: linear-gradient(top, #232930, #3c4249);\\n}\\n.round,\\n.square {\\n  width: 30px;\\n  height: 30px;\\n}\\n.round,\\n.roundbig {\\n  border-radius: 15px;\\n}\\n.square,\\n.squarebig {\\n  border-radius: 5px;\\n}\\n.button:after {\\n  display: block;\\n}\\n.round:nth-of-type(1):after,\\n.square:nth-of-type(4):after {\\n  content: \\\"\\\\2716\\\";\\n}\\n.round:nth-of-type(2):after,\\n.square:nth-of-type(5):after {\\n  content: \\\"\\\\2714\\\";\\n}\\n.round:nth-of-type(3):after,\\n.square:nth-of-type(6):after {\\n  content: \\\"\\\\271a\\\";\\n}\\n.round:nth-of-type(7):after,\\n.square:nth-of-type(10):after {\\n  content: \\\"\\\\2717\\\";\\n}\\n.round:nth-of-type(8):after,\\n.square:nth-of-type(11):after {\\n  content: \\\"\\\\2713\\\";\\n}\\n.round:nth-of-type(9):after,\\n.square:nth-of-type(12):after {\\n  content: \\\"\\\\271d\\\";\\n}\\n.roundbig,\\n.squarebig {\\n  width: 80px;\\n  height: 30px;\\n}\\n/* -------------------------------------------------\\n * common\\n * -------------------------------------------------\\n*/\\n.page {\\n  text-align: left;\\n  padding-top: 40px;\\n}\\n.wrap_top_nav {\\n  background-color: #333;\\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 -1px 0 rgba(0, 0, 0, 0.1) inset;\\n  height: 40px;\\n}\\n#top_nav {\\n  width: 1000px;\\n  margin: 0 auto;\\n  position: relative;\\n}\\n#top_nav a {\\n  font-size: 16px;\\n  line-height: 40px;\\n  float: left;\\n  margin-right: 20px;\\n  color: #999;\\n  text-decoration: none;\\n}\\n#top_nav a:hover {\\n  color: #fff;\\n}\\n#top_nav li:nth-child(1) a {\\n  background-image: url(http://www.w3cplus.com/sites/all/themes/marvin/logo.png);\\n  background-position: 0 -12px;\\n  background-repeat: no-repeat;\\n  background-size: 68px 60px;\\n  padding-left: 74px;\\n  color: #fff;\\n  width: 74px;\\n  overflow: hidden;\\n}\\n#read {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n}\\n#header {\\n  text-align: center;\\n}\\n#header .white {\\n  color: #fff;\\n}\\n#header .blank {\\n  color: #444;\\n}\\n#header h1 {\\n  font-size: 24px;\\n}\\n#header h2 {\\n  font-weight: normal;\\n}\\n#ad_w3cplus {\\n  width: 750px;\\n  margin: 100px auto;\\n  text-align: center;\\n}\\n#ad_w3cplus .grid-ad {\\n  float: left;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./style.less?C:/Personal_Files/github/MyCodeSnippet/node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!C:/Personal_Files/github/MyCodeSnippet/node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/_css-loader@3.2.0@css-loader/dist/runtime/api.js":
/*!************************************************************************************************************!*\
  !*** C:/Personal Files/github/MyCodeSnippet/node_modules/_css-loader@3.2.0@css-loader/dist/runtime/api.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///C:/Personal_Files/github/MyCodeSnippet/node_modules/_css-loader@3.2.0@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../../node_modules/_style-loader@1.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*************************************************************************************************************************************!*\
  !*** C:/Personal Files/github/MyCodeSnippet/node_modules/_style-loader@1.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///C:/Personal_Files/github/MyCodeSnippet/node_modules/_style-loader@1.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.less */ \"./style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./style.less":
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!../../../node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./style.less */ \"../../../node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!../../../node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./style.less\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/_style-loader@1.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/_style-loader@1.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./style.less?");

/***/ })

/******/ });