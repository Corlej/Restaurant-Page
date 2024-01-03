/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Dumbledor-2.ttf.woff */ \"./src/Dumbledor-2.ttf.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./hero.jpeg */ \"./src/hero.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500&family=Poppins:wght@200;300;500&family=Raleway:wght@600&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'Dumbledor';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\nbody {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    background-color: #fdfefb;\n    margin: 0;\n    height: auto;\n    overflow-x: hidden;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80px;\n    font-family: 'Raleway';\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    color: #73568d;\n    font-size: 14px;\n    background-color: #fdfefb;\n    width: 100%;\n    box-shadow: 4px 1px 0px 4px rgba(0, 0, 0, 20%);\n    z-index: 2;\n}\n\n.logoGroup {\n    display: flex;\n    cursor: pointer;\n    font-family: 'Dumbledor';\n    color: #387c04;\n    font-size: 60px;\n    font-weight: 500;\n    letter-spacing: 2px;\n    width: 332px;\n    gap: 10px;\n    text-transform: capitalize;\n    margin-left: 20px;\n}\n\n.logo {\n    width: 60px;\n    height: 60px;\n}\n\n.headerLinkGroup {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    min-width: 400px;\n    justify-content: flex-end;\n    margin-top: 24px;\n}\n\n.filler {\n    width: 310px;\n    height: 10px;\n}\n\n.link {\n    position: relative;\n    cursor: pointer;\n    width: auto;\n}\n\n.headerLinkGroup .link1::before,\n.headerLinkGroup .link2::before,\n.headerLinkGroup .link3::before {\n    background-color: #73568d;\n}\n\n.link:first-child::before {\n    display: none;\n}\n\n.link:last-child::before {\n    height: 50%;\n}\n\n.link:not(:last-child)::after {\n    height: 100%;\n}\n\n.link:hover {\n    color: #387c04;\n}\n\n.mainHamburgerButton,\n.secondHamburgerButton {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    width: 30px;\n    height: 30px;\n    margin-left: 20px;\n    flex-direction: column;\n    cursor: pointer;   \n}\n\n.mainHamburgerButton div,\n.secondHamburgerButton div {\n    display: flex;\n    width: 30px;\n    height: 4px;\n    background-color: #333;\n    margin: 3px 0px;\n    transition: 0.4s;\n    border-radius: 4px;\n}\n\n.mainHamburgerButton.active div:nth-child(1) {\n    transform: rotate(-45deg) translate(-5px, 6px);\n}\n\n  .mainHamburgerButton.active div:nth-child(2) {\n    opacity: 0;\n}\n\n  .mainHamburgerButton.active div:nth-child(3) {\n    transform: rotate(45deg) translate(-5px, -6px);\n}\n\n.mainHamburgerMenu,\n.secondHamburgerMenu {\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #f9f9f9;\n    position: absolute;\n    top: 80px;\n    left: 0px;\n    width: 150px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.mainHamburgerMenu .link,\n.secondHamburgerMenu .link {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    height: 50px;\n    width: 100%;\n}\n\n.mainHamburgerMenu a:hover,\n.secondHamburgerMenu a:hover {\n    background-color: #ddd;\n}\n\n.mainHamburgerButton.active + .mainHamburgerMenu,\n.secondHamburgerButton.active + .secondHamburgerMenu {\n    display: flex;\n}\n\n.secondHamburgerMenu {\n    top: 50px;\n}\n.hero {\n    width: 100vw;\n    height: 105vh;\n}\n\n.heroImg {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-position-y: 40%;\n    background-size: cover;\n    object-fit: scale-down;\n    width: 100vw;\n    height: 105vh;\n}\n\n.secondHeader {\n    position: sticky;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n    background-color: #fdfefb;\n    font-family: 'Raleway';\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    color: #73568d;\n    font-size: 14px;\n    width: 100vw;\n    top: 0px;\n    gap: 30px;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n    z-index: 2;\n}\n\n.secondHeader.visible {\n    opacity: 1;\n  }\n\n.secondHeader .linkGroup {\n    display: flex;\n    width: 100vw;\n    justify-content: center;\n    gap: 20px;\n}\n\n.logoTwo {\n    cursor: pointer;\n    height: 25px;\n}\n\n.foodMenu,\n.drinkMenu {\n    height: auto;\n    width: 80vw;\n}\n\n.menuSideButtons {\n    cursor: pointer;\n    width: 50px;\n    height: 50px;\n    border: none;\n    background-color: transparent;\n    outline: none;\n}\n\n.menuSideButtons.left:hover,\n.menuSideButtons.right:hover {\n    transform: scale(1.25);\n    transform-origin: center;\n}\n\n.menuSideButtons.left {\n    position: absolute;\n    left: -75px;\n    top: 180px;\n    transition: transform .1s;\n}\n\n.menuSideButtons.right {\n    position: absolute;\n    right: -75px;\n    top: 180px;\n    transition: transform .1s;\n}\n\n.foodImageContainer {\n    position: relative;\n    width: 70vw;\n    height: 90vh;\n    margin: auto;\n    margin-top: 40px;\n}\n\n.foodImage {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    object-fit: cover;\n    opacity: 0;\n    transition: opacity 0.5s;\n}\n  \n.foodImage.show {\nopacity: 1;\n}\n\n@keyframes imageTransition {\n0%, 33.33% {\n    opacity: 0;\n}\n33.33%, 66.66% {\n    opacity: 0;\n}\n66.66%, 100% {\n    opacity: 1;\n}\n}\n\n#about {\n    display: block;\n    height: 50px;\n    width: auto;\n    margin-top: 10px;\n}\n\n.about {\n    display: flex;\n    justify-content: center;\n    font-family: 'Raleway';\n    letter-spacing: 2px;\n    line-height: 200%;\n    font-weight: 600;\n    min-height: 100vh;\n    gap: 50px;\n    background-color: whitesmoke;\n}\n\n.about img {\n    display: flex;\n    align-self: center;\n}\n\n.about .rightContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.about .bio {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    padding-top: 50px;\n    margin-right: 5vw;\n}\n\n.about .bio h1,\n.about .bio h4 {\n    margin: 0;\n}\n\n.about img {\n    height: 400px;\n    width: 400px;\n    margin-left: 100px;\n}\n\n#events {\n    height: 50px;\n    width: 50px;\n}\n\n.events {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    height: auto;\n    width: 100vw;\n    background-color: #82c08b;\n    padding-top: 20px;\n    border-top: 5px solid white;\n}\n\n.postContainer {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 960px;\n    margin: 0 auto;\n    gap: 10px;\n    border: 1px solid purple;\n}\n\n.post {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    height: 40vh;\n    width: auto;\n    border: 1px solid grey;\n}\n\n.post img {\n    width: 300px;\n    height: 300px;\n}\n\n.caption {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    font-size: 20px;\n    font-family: 'Raleway';\n    letter-spacing: 1px;\n    color: #fff;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n    box-sizing: border-box;\n    padding: 10px;\n}\n\n.post:hover .caption {\n    opacity: 1;\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    z-index: 9999;\n}\n\n.modal-content {\n    display: flex;\n    flex-direction: row;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #fff;\n    padding: 20px;\n    max-width: 960px;\n    max-height: 80vh;\n}\n\n.modal-image {\n    flex: 1;\n    margin-right: 20px;\n}\n\n.modal-image img {\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.modal-comments {\n    flex: 1;\n    overflow-y: auto;\n}\n\n.close {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    cursor: pointer;\n}\n\n.hoursAndContacts {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 90vh;\n}\n\n#hours {\n    height: 50px;\n}\n\n.hoursContainer,\n.contactContainer {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    width: 100vw;\n    font-family: 'Oswald';\n    font-size: 26px;\n    font-weight: 100;\n    border: 1px solid blue;\n}\n\n.hoursHeader,\n.contactsHeader {\n    font-size: 36px;\n    font-family: 'Oswald';\n    font-weight: 300;\n    align-self: center;\n}\n\n\n.hoursBody,\n.contactsBody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-width: 50%;\n    min-height: 40%;\n    font-size: 24px;\n    font-weight: 100;\n    border: 1px solid purple;\n\n}\n\n.hoursBodyContainerOne,\n.hoursBodyContainerTwo {\n    display: flex;\n    justify-content: space-between;\n    min-width: 300px;\n    max-width: 70vw;\n    border: 1px solid green;\n\n}\n\n.hoursBodyContainerTwo {\n    align-items: end;\n}\n\n.hoursBodyContainerOneSection,\n.hoursBodyContainerTwoSection {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n}\n\n.hoursBodyContainerOneSection {\n    display: flex;\n    height: 100px;\n}\n\n.contactsBody {\n    text-align: center;   \n    gap: 10px;\n}\n\n.phoneNumber {\n    margin: 0;\n}\n\n.phoneNumber span {\n    display: inline-block;\n    font-weight: 200;\n}\n.footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 10vh;\n    width: 100vw;\n    background-color: #82c08b;\n    gap: 20px;\n}\n\n@media screen and (max-width: 1110px) {\n\n    .about {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .about img {\n        margin: 0px;\n        width: 100vw;\n        height: auto;\n    }\n\n\n    .about .rightContainer {\n        justify-content: center;\n        margin: 7vw;\n    }\n\n    .about .bio {\n        padding-top: 0px;\n    }\n}\n\n@media screen and (max-width: 613px) {\n    \n    .post {\n        width: 80vw;\n        height: auto;\n    }\n\n    .post img {\n        width: 80vw;\n        height: auto;\n        aspect-ratio: 1/1;\n    }\n}\n\n@media screen and (max-width: 806px) {\n    \n    .headerLinkGroup {\n        min-width: auto;\n    }\n}\n\n@media screen and (max-width: 852px) {\n    \n    .heroImg {\n        background-position-x: 35%;\n    }\n\n    .headerLinkGroup {\n        display: none;\n    }\n\n    .secondHeaderLinkGroup {\n        display: none;\n    }   \n\n    .foodMenu,\n    .drinkMenu,\n    .foodImageContainer {\n        width: 100vw;\n    }\n\n    .foodImage {\n        max-height: 50vh;\n    }\n    .mainHamburgerButton {\n        display: flex;\n    }\n\n    .filler {\n        display: none;\n    }\n\n    .secondHamburgerButton {\n        display: flex;\n    }\n\n    .secondHeader {\n        justify-content: start;\n    }\n\n    .secondHeader .linkGroup {\n        display: none;\n    }\n\n\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nwindow.addEventListener('scroll', function() {\n  var header = document.querySelector('.secondHeader');\n  var scrollPosition = window.scrollY || document.documentElement.scrollTop;\n  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;\n\n  if (scrollPosition > viewportHeight) {\n    header.classList.add('visible');\n  } else {\n    header.classList.remove('visible');\n  }\n});\n\nconst images = document.querySelectorAll('.foodImage');\nlet currentIndex = 0;\nimages[currentIndex].classList.add('show');\n\nsetInterval(() => {\n  images[currentIndex].classList.remove('show');\n  currentIndex = (currentIndex + 1) % images.length;\n  images[currentIndex].classList.add('show');\n}, 5000);\nconst menuHeader = document.querySelector('.menuHeaderTitle');\nconst sideButtons = document.querySelectorAll('.menuSideButtons');\nconst dinnerMenu = document.querySelector('.dinnerMenu');\nconst lunchMenu = document.querySelector('.lunchMenu');\nconst brunchMenu = document.querySelector('.brunchMenu');\nconst menuOptions = ['dinner menu', 'lunch menu', 'brunch menu'];\nlet currentMenuIndex = getCurrentMenuIndex();\n\nsideButtons.forEach(function(button) {\n  button.addEventListener('click', function() {\n    if(button.classList.contains('left')) {\n      changeMenuHeaderLeft();\n    }\n    if(button.classList.contains('right')) {\n      changeMenuHeaderRight();\n    }\n  });\n});\n\nfunction getCurrentMenuIndex() {\n  const currentDate = new Date();\n  const currentHour = currentDate.getHours();\n  // Define the time ranges for each menu option\n  const dinnerTimeStart = 14;  // 2 PM\n  const brunchTimeStart = 8;  // 8 AM\n  const lunchTimeStart = 10;   // 10 AM\n  \n  // Determine the current menu based on the time\n  if (currentHour >= dinnerTimeStart || currentHour < brunchTimeStart) {\n    showMenu(dinnerMenu);\n    hideMenu(lunchMenu);\n    hideMenu(brunchMenu);\n    return 0;  // Dinner menu\n  } else if (currentHour >= lunchTimeStart && currentHour < dinnerTimeStart) {\n    hideMenu(dinnerMenu);\n    hideMenu(brunchMenu);\n    showMenu(lunchMenu);\n    return 1;  // Lunch menu\n  } else {\n    hideMenu(dinnerMenu);\n    hideMenu(lunchMenu);\n    showMenu(brunchMenu);\n    return 2;  // Brunch menu\n  }\n}\n\nfunction changeMenuHeaderLeft() {\n  currentMenuIndex = (currentMenuIndex + 1) % menuOptions.length;\n  menuHeader.innerHTML = menuOptions[currentMenuIndex];\n  updateMenuVisibility();\n}\n\nfunction changeMenuHeaderRight() {\n  currentMenuIndex = (currentMenuIndex + 2) % menuOptions.length;\n  menuHeader.innerHTML = menuOptions[currentMenuIndex];\n  updateMenuVisibility();\n}\n\nfunction showMenu(menu) {\n  menu.style.display = 'flex';\n}\n\nfunction hideMenu(menu) {\n  menu.style.display = 'none';\n}\n\nfunction updateMenuVisibility() {\n  if (currentMenuIndex === 0) {\n    showMenu(dinnerMenu);\n    hideMenu(lunchMenu);\n    hideMenu(brunchMenu);\n  } else if (currentMenuIndex === 1) {\n    hideMenu(dinnerMenu);\n    hideMenu(brunchMenu);\n    showMenu(lunchMenu);\n  } else if (currentMenuIndex === 2) {\n    hideMenu(dinnerMenu);\n    hideMenu(lunchMenu);\n    showMenu(brunchMenu);\n  }\n}\n\nmenuHeader.innerHTML = menuOptions[currentMenuIndex];\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/Dumbledor-2.ttf.woff":
/*!**********************************!*\
  !*** ./src/Dumbledor-2.ttf.woff ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7899ed1dae9c8ee80609.woff\";\n\n//# sourceURL=webpack://restaurant-page/./src/Dumbledor-2.ttf.woff?");

/***/ }),

/***/ "./src/hero.jpeg":
/*!***********************!*\
  !*** ./src/hero.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6159df177cd40405015.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/hero.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;