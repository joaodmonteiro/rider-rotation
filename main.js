/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/RobotoFlex[GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght].ttf */ "./src/fonts/RobotoFlex[GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght].ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/ObjectSans-Regular.woff2 */ "./src/fonts/ObjectSans-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/ObjectSans-Bold.woff2 */ "./src/fonts/ObjectSans-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! images/break-icon.svg */ "./src/images/break-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Roboto Flex';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 100 1000;\nfont-stretch: 25% 151%;\n}\n\n@font-face {\n  font-family: 'Object Sans';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 100 1000;\nfont-stretch: 25% 151%;\n}\n\n@font-face {\n  font-family: 'Object Sans Bold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 100 1000;\n  font-stretch: 25% 151%;\n}\n\n*, *:before, *::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {  \n  margin: 0;\n  padding: 0;\n  font-family: 'Object Sans';\n  box-sizing: border-box;\n  background-color: white;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: white;\n    color: black;\n    font-size: 1.5rem;\n}\n\n.logo {\n  margin-left: 20px;\n}\n\n.pageTitle {\n  margin-left: 20px;\n  font-family: 'Object Sans';\n}\n\n.plusBox {\n  display: flex;\n  font-size: 50px;\n  cursor: pointer;\n  margin-left: 30px;\n  margin-top: -4px;\n  border: 2px solid black;\n  height: 22px;\n  width: 22px;\n}\n\n.plus {\n  width: 12px;\n  height: 12px;\n  margin-left: 3px;\n  margin-top: 3px;\n}\n\n.menuIcon {\n  margin-right: 25px;\n  cursor: pointer;\n  margin-left: auto;\n}\n\n#main {\n  display: grid;\n  justify-content: end;\n  grid-template-columns: 50% 50%;\n  /* padding: 20px; */\n}\n\n#main > div > p {\n  text-align: center;\n  font-size: 22px;\n}\n\nul {\n  margin: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  border-radius: 10px;\n  max-width: 50vw;\n}\n\nli {\n  margin: 3px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid black;\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.riderBox {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 5px;\n}\n\n.buttonsContainer {\n  display: flex;\n  justify-content: flex-end;\n  padding-left: 20px;\n}\n\n.buttonsContainer > button {\n  padding: 2px 5px;\n  margin: 0;\n  border: transparent;\n  background-color: white;\n  cursor: pointer;\n}\n\n.break {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 15px 15px;\n  width: 15px;\n  height: 15px;\n  align-self: baseline;\n}\n\n.addRiderBoxContainer {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: white;\n  /* border: 3px solid black; */\n  top: 100px;\n  left: 50%;\n  min-height: 200px;\n  width: 300px;\n  margin-left: -150px;\n  box-shadow: 1px 5px 10px grey;\n}\n\n.addRiderBoxContainer > button {\n  background-color: white;\n  padding: 5px 20px;\n  border: 1px solid black;\n}\n\n.dropdownBikeSelector {\n  width: 150px;\n}\n\n.bikeVisibleInfo {\n  display: grid;\n  grid-template-columns: 100px 150px auto auto;\n  padding-top: 10px;\n  padding-left: 10px;\n  border-bottom: 1px solid #cbcbcb;\n  align-content: center;\n}\n.bikeEditButton {\n  width: 80px;\n  justify-self: end;\n}\n\n.breakTimer {\n  align-self: flex-start;\n  margin-left: 10px;\n}\n\n.menuBox {\n  background-color: black;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  width: 33vw;\n  height: 100vh;\n  top: 0;\n  right: 0;\n  border: 1px solid black;\n  color: white;\n  font-size: 34px;\n  padding: 20px;\n}\n\n.menuBox > * {\n  text-decoration: none;\n  color: white;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.closeMenu {\n  width: 30px;\n  align-self: flex-end;\n}\n\n.bikesContainer {\n  margin: 20px 30px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,4CAA8G;EAC9G,qBAAqB;AACvB,sBAAsB;AACtB;;AAEA;EACE,0BAA0B;EAC1B,4CAA0C;EAC1C,qBAAqB;AACvB,sBAAsB;AACtB;;AAEA;EACE,+BAA+B;EAC/B,4CAAuC;EACvC,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,0BAA0B;EAC1B,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,yDAA4C;EAC5C,0BAA0B;EAC1B,WAAW;EACX,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,uBAAuB;EACvB,6BAA6B;EAC7B,UAAU;EACV,SAAS;EACT,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,4CAA4C;EAC5C,iBAAiB;EACjB,kBAAkB;EAClB,gCAAgC;EAChC,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,MAAM;EACN,QAAQ;EACR,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["@font-face {\n  font-family: 'Roboto Flex';\n  src: url('fonts/RobotoFlex[GRAD\\,XOPQ\\,XTRA\\,YOPQ\\,YTAS\\,YTDE\\,YTFI\\,YTLC\\,YTUC\\,opsz\\,slnt\\,wdth\\,wght].ttf');\n  font-weight: 100 1000;\nfont-stretch: 25% 151%;\n}\n\n@font-face {\n  font-family: 'Object Sans';\n  src: url('fonts/ObjectSans-Regular.woff2');\n  font-weight: 100 1000;\nfont-stretch: 25% 151%;\n}\n\n@font-face {\n  font-family: 'Object Sans Bold';\n  src: url('fonts/ObjectSans-Bold.woff2');\n  font-weight: 100 1000;\n  font-stretch: 25% 151%;\n}\n\n*, *:before, *::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {  \n  margin: 0;\n  padding: 0;\n  font-family: 'Object Sans';\n  box-sizing: border-box;\n  background-color: white;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: white;\n    color: black;\n    font-size: 1.5rem;\n}\n\n.logo {\n  margin-left: 20px;\n}\n\n.pageTitle {\n  margin-left: 20px;\n  font-family: 'Object Sans';\n}\n\n.plusBox {\n  display: flex;\n  font-size: 50px;\n  cursor: pointer;\n  margin-left: 30px;\n  margin-top: -4px;\n  border: 2px solid black;\n  height: 22px;\n  width: 22px;\n}\n\n.plus {\n  width: 12px;\n  height: 12px;\n  margin-left: 3px;\n  margin-top: 3px;\n}\n\n.menuIcon {\n  margin-right: 25px;\n  cursor: pointer;\n  margin-left: auto;\n}\n\n#main {\n  display: grid;\n  justify-content: end;\n  grid-template-columns: 50% 50%;\n  /* padding: 20px; */\n}\n\n#main > div > p {\n  text-align: center;\n  font-size: 22px;\n}\n\nul {\n  margin: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  border-radius: 10px;\n  max-width: 50vw;\n}\n\nli {\n  margin: 3px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid black;\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.riderBox {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 5px;\n}\n\n.buttonsContainer {\n  display: flex;\n  justify-content: flex-end;\n  padding-left: 20px;\n}\n\n.buttonsContainer > button {\n  padding: 2px 5px;\n  margin: 0;\n  border: transparent;\n  background-color: white;\n  cursor: pointer;\n}\n\n.break {\n  background-image: url(images/break-icon.svg);\n  background-size: 15px 15px;\n  width: 15px;\n  height: 15px;\n  align-self: baseline;\n}\n\n.addRiderBoxContainer {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: white;\n  /* border: 3px solid black; */\n  top: 100px;\n  left: 50%;\n  min-height: 200px;\n  width: 300px;\n  margin-left: -150px;\n  box-shadow: 1px 5px 10px grey;\n}\n\n.addRiderBoxContainer > button {\n  background-color: white;\n  padding: 5px 20px;\n  border: 1px solid black;\n}\n\n.dropdownBikeSelector {\n  width: 150px;\n}\n\n.bikeVisibleInfo {\n  display: grid;\n  grid-template-columns: 100px 150px auto auto;\n  padding-top: 10px;\n  padding-left: 10px;\n  border-bottom: 1px solid #cbcbcb;\n  align-content: center;\n}\n.bikeEditButton {\n  width: 80px;\n  justify-self: end;\n}\n\n.breakTimer {\n  align-self: flex-start;\n  margin-left: 10px;\n}\n\n.menuBox {\n  background-color: black;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  width: 33vw;\n  height: 100vh;\n  top: 0;\n  right: 0;\n  border: 1px solid black;\n  color: white;\n  font-size: 34px;\n  padding: 20px;\n}\n\n.menuBox > * {\n  text-decoration: none;\n  color: white;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.closeMenu {\n  width: 30px;\n  align-self: flex-end;\n}\n\n.bikesContainer {\n  margin: 20px 30px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/bikesPage-load.js":
/*!***************************************!*\
  !*** ./src/scripts/bikesPage-load.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadBikesPage": () => (/* binding */ loadBikesPage),
/* harmony export */   "bikes": () => (/* binding */ bikes)
/* harmony export */ });
/* harmony import */ var _images_arrow_down_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/arrow-down.svg */ "./src/images/arrow-down.svg");


// Array for bikes
let bikes = [];

// Bike Factory Function
const Bike = (number, model, status) => {
    let bikeStatus = status;
    let details;
    let detailsShowing = false;

    const getStatus = () => bikeStatus;
    const areDetailsShowing = () => detailsShowing;

    const toggleStatus = () => {
        if(bikeStatus == "Out of Action") {
            bikeStatus = "In Action";
        }
        else {
            bikeStatus = "Out of Action";
        } 
    }

    const toggleDetails = () => {
        if(detailsShowing) {
            detailsShowing = false;
        }
        else {
            detailsShowing = true;
        }
    }

    const changeDetails = (newDetails) => {
        details = newDetails;
    }

    return {number, model, getStatus, toggleStatus, toggleDetails, changeDetails, areDetailsShowing}
};

// Create some bikes
const M900 = Bike("M900", "Zoomo Zero", "Out of Action");
const Z895456 = Bike("Z895456", "Zoomo Zero", "In Action");
const Z895488 = Bike("Z895488", "Zoomo Zero", "Out of Action");
const Z895490 = Bike("Z895490", "Zoomo Zero", "In Action");
const Z895493 = Bike("Z895493", "Zoomo Zero", "In Action");
const Z896360 = Bike("Z896360", "Zoomo Zero", "In Action");
const Z896699 = Bike("Z896699", "Zoomo Zero", "In Action");
const Z897530 = Bike("Z897530", "Zoomo Zero", "In Action");
const Z897531 = Bike("Z897531", "Zoomo Zero", "In Action");
const Z897556 = Bike("Z897556", "Zoomo Zero", "In Action");
const Z897643 = Bike("Z897643", "Zoomo Zero", "In Action");
const Z897677 = Bike("Z897677", "Zoomo Zero", "In Action");
const Z897798 = Bike("Z897798", "Zoomo Zero", "In Action");
const Z897832 = Bike("Z897832", "Zoomo Zero", "In Action");
const Z898055 = Bike("Z898055", "Zoomo Zero", "Out of Action");
const Z898202 = Bike("Z898202", "Zoomo Zero", "In Action");
const Z898242 = Bike("Z898242", "Zoomo Zero", "In Action");
const Z898281 = Bike("Z898281", "Zoomo Zero", "In Action");
const Z898477 = Bike("Z898477", "Zoomo Zero", "In Action");
const Z899317 = Bike("Z899317", "Zoomo Zero", "In Action");

bikes.push(M900, Z895456, Z895488, Z895490, Z895493, Z896360, Z896699,
    Z897530, Z897531, Z897556, Z897643, Z897677, Z897798, Z897832,
    Z898055, Z898202, Z898242, Z898281, Z898477, Z899317);


function loadBikesPage() {

    // Empty main so we can populate it with the bikes
    document.querySelector('#main').style.display = "none";

    // Create container for the bikes
    let bikesContainer = document.querySelector('.bikesContainer');
    bikesContainer.innerHTML = "";
    bikesContainer.style.display = "inherit";

    // Sort bikes by status (In action on top)
    sortBikesByStatus(bikes);

    //Create each bike listing
    bikes.forEach(function(bike) {
        listBike(bike);
    
    });

    document.querySelector('.pageTitle').textContent = "BIKES";

    document.querySelector('.plusBox').style.display = "none";
}

// List bike info
function listBike(bike) {
    let bikesContainer = document.querySelector('.bikesContainer');

    let bikeInfoBox = document.createElement('div');
    bikeInfoBox.id = `bikeInfoBox-${bike.number}`;

    let visibleInfo = document.createElement('div');
    visibleInfo.classList.add('bikeVisibleInfo');

    let bikeID = document.createElement('p');
    bikeID.textContent = bike.number;

    let bikeModel = document.createElement('p');
    bikeModel.textContent = bike.model;

    let bikeStatus = document.createElement('p');
    bikeStatus.textContent = bike.getStatus();

    let editButton = document.createElement('button');
    editButton.classList.add("bikeEditButton");
    editButton.id = `edit-${bike.number}`;
    editButton.textContent = "details";

    visibleInfo.appendChild(bikeID);
    visibleInfo.appendChild(bikeModel);
    visibleInfo.appendChild(bikeStatus);
    visibleInfo.appendChild(editButton);

    bikeInfoBox.appendChild(visibleInfo);

    bikesContainer.appendChild(bikeInfoBox); 

    editButton.addEventListener("click", function() {
        bike.toggleDetails();
        if(bike.areDetailsShowing())
            openBikeDetails(bike);
        else
        document.querySelector('.editDetails').remove();
    });
}

// Sort bikes by status (In action on top)
function sortBikesByStatus(bikesArray) {
    let bikesSorted = bikes.sort( function(a, b) {
        if(a.getStatus() < b.getStatus())
        {
            return -1;
        }
        if(a.getStatus() > b.getStatus())
        {
            return 1;
        }
        return 0;
    });
}

// Show details of the bike
function openBikeDetails(bike) {
    
    let bikeInfoBox = document.querySelector(`#bikeInfoBox-${bike.number}`);
    let editDetails = document.createElement('div');
    editDetails.classList.add('editDetails');
    let changeStatusButton = document.createElement('button');
    changeStatusButton.textContent = "Change status";
    let detailsBox = document.createElement('input');
    detailsBox.placeholder = "more details...";

    editDetails.appendChild(changeStatusButton);
    editDetails.appendChild(detailsBox);
    bikeInfoBox.appendChild(editDetails);

    changeStatusButton.addEventListener('click', function() {
        bike.toggleStatus();
        loadBikesPage();
    });

}



/***/ }),

/***/ "./src/fonts/ObjectSans-Bold.woff2":
/*!*****************************************!*\
  !*** ./src/fonts/ObjectSans-Bold.woff2 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc4eabdf0c4bacb232b1.woff2";

/***/ }),

/***/ "./src/fonts/ObjectSans-Regular.woff2":
/*!********************************************!*\
  !*** ./src/fonts/ObjectSans-Regular.woff2 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46b02213509c5971a4b7.woff2";

/***/ }),

/***/ "./src/fonts/RobotoFlex[GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght].ttf":
/*!****************************************************************************************************!*\
  !*** ./src/fonts/RobotoFlex[GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght].ttf ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7d5a05b06c537c78e29.ttf";

/***/ }),

/***/ "./src/images/X.svg":
/*!**************************!*\
  !*** ./src/images/X.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "800c2bfaad8caf3c07c0.svg";

/***/ }),

/***/ "./src/images/arrow-down.svg":
/*!***********************************!*\
  !*** ./src/images/arrow-down.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a0c7fe00a0275333d28.svg";

/***/ }),

/***/ "./src/images/break-icon.svg":
/*!***********************************!*\
  !*** ./src/images/break-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa86fcef82580bc71cd3.svg";

/***/ }),

/***/ "./src/images/logo.jpeg":
/*!******************************!*\
  !*** ./src/images/logo.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70fed88d756db3d724ae.jpeg";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48b212b9a14fafa573ca.svg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _images_X_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/X.svg */ "./src/images/X.svg");
/* harmony import */ var _images_logo_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/logo.jpeg */ "./src/images/logo.jpeg");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _bikesPage_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bikesPage-load */ "./src/scripts/bikesPage-load.js");






// Insert logo on the header
const logo = new Image();
logo.src = _images_logo_jpeg__WEBPACK_IMPORTED_MODULE_2__;

document.querySelector('.logo').appendChild(logo);

logo.style.maxWidth = "150px";
logo.style.height = "auto";

// Insert plus sign 
const plus = new Image();
plus.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_3__;
plus.classList.add('plus');

document.querySelector('.plusBox').appendChild(plus);

// HTML elements
const availList = document.getElementById('available');
const onARideList = document.getElementById('onARide');
const onABreakList = document.getElementById('onABreak');

// Array with all the Rider Objects
let riders = [];

// Array with available riders
let ridersAvailable = [];

// Array with riders on a ride
let ridersOnARide = [];

// Array with riders on break
let ridersOnBreak = [];

// Rider Factory Function
const Rider = (name, bikeNumber, riderID) => {
    let onARide = false;
    let onBreak = false;
    let bike = bikeNumber;
    let detailsShowing = false;
    let breakStartTime;
    let breakEndTime;
    let hadBreak = false;
    const getHadBreak = () => hadBreak;
    const getBreakEndTime = () => breakEndTime;
    const isOnARide = () => onARide;
    const isOnBreak = () => onBreak;
    const areDetailsShowing = () => detailsShowing;
    const toggleOnARide = () => {
        if(onARide) {
            onARide = false;
        }
        else {
            onARide = true;
        }
    };
    const toggleOnBreak = () => {
        if(onBreak) {
            onBreak = false;
            hadBreak = true;
        }
        else if(!hadBreak) {
            onBreak = true;
            let now = new Date();
            setBreakStartTime(now);
        }
    }
    const toggleDetails = () => {
        if(detailsShowing) {
            detailsShowing = false;
        }
        else {
            detailsShowing = true;
        }
    }
    const setBreakStartTime = (time) => {
        breakEndTime = time;
        breakEndTime.setMinutes(breakEndTime.getMinutes() + 30);
        // breakEndTime.setSeconds(breakEndTime.getSeconds() + 5);
    }
    const changeBike = (newBike) => {
        bike = newBike;
    }
    return {name, bike, riderID, isOnARide, isOnBreak, areDetailsShowing, getBreakEndTime, getHadBreak, toggleOnARide, toggleOnBreak, toggleDetails, changeBike}
};

// Create some riders
// const joao = AddRider('Joao Monteiro', 'Z822');
// const maria = AddRider('Felix Robins', 'Z822');
// const rui = AddRider('Ronny Joao Feliz Garcia', 'Z522');
// const fausto = AddRider('Declan Rooney', 'Z830');
// const jose = AddRider('Rafee Ahmed', 'Z855');
// const ss = AddRider('Mohammed Rahat', 'Z855');
// const joeese = AddRider('Barna Sagodi', 'Z855');
// const jofse = AddRider('Paul Douglas', 'Z855');
// const joase = AddRider('Ali Savas', 'Z855');
// const jogse = AddRider('Joshua Luke Joseph Samuel', 'Z855');
// const johse = AddRider('Monzer Salman', 'Z855');
// const josje = AddRider('Adam Szabo', 'Z855');
// const joee22se = AddRider('Patel Akhilkumar Pareshbhai', 'Z855');
// const joeqqse = AddRider('Taffari Jackson', 'Z855');
// const josqqe = AddRider('JoseZadi David Guede', 'Z855');

// Clear local storage
// localStorage.clear();
document.querySelector('.logo').onclick = function() { localStorage.clear() };

// Set array lenghts to 0
if(!localStorage.getItem('ridersLength')) {
    localStorage.setItem("ridersLength", 0);
}

if(!localStorage.getItem('ridersAvailableLength')) {
    localStorage.setItem("ridersAvailableLength", 0);
}

if(!localStorage.getItem('ridersOnARideLength')) {
    localStorage.setItem("ridersOnARideLength", 0);
}

if(!localStorage.getItem('ridersOnBreakLength')) {
    localStorage.setItem("ridersOnBreakLength", 0);
}

importFromLocalStorage();

console.log("riders:");
console.log(riders);
console.log("ridersAvailable:");
console.log(ridersAvailable);
console.log("ridersOnARide:");
console.log(ridersOnARide);
console.log("ridersOnBreak:");
console.log(ridersOnBreak);
console.log(localStorage);

// Retrieve info from localstorage

function importFromLocalStorage() {
    for(let i = 0; i < localStorage.getItem('ridersLength'); i++)
    {
        let importedObject= JSON.parse(localStorage.getItem(`riders[${i}]`));
        let importedRider = Rider(importedObject.name, importedObject.bike, importedObject.riderID);
        
        riders.push(importedRider);
        ridersAvailable.push(importedRider.riderID);
        listRider(importedRider);
    }

    // for(let i = 0; i < localStorage.getItem('ridersAvailableLength'); i++)
    // {
    //     ridersAvailable.push(localStorage.getItem(`ridersAvailable[${i}]`));
    // }

    // for(let i = 0; i < localStorage.getItem('ridersOnARideLength'); i++)
    // {
    //     ridersOnARide.push(localStorage.getItem(`ridersOnARide[${i}]`));
    // }

    // for(let i = 0; i < localStorage.getItem('ridersOnBreakLength'); i++)
    // {
    //     ridersOnBreak.push(localStorage.getItem(`ridersOnBreak[${i}]`));
    // }

    refreshRiderRotation();
}

// Update local storage
function updateLocalStorage() {

    // Clear local storage
    localStorage.clear();

    // Save riders array and length of array
    localStorage.setItem("ridersLength", riders.length);

    riders.forEach( function(rider) {
        localStorage.setItem(`riders[${riders.indexOf(rider)}]`, JSON.stringify(rider));
    });

    // Save riders available array and length of array
    localStorage.setItem("ridersAvailableLength", ridersAvailable.length);

    ridersAvailable.forEach( function(riderID) {
        localStorage.setItem(`ridersAvailable[${ridersAvailable.indexOf(riderID)}]`, riderID);
    });

    // Save riders on a ride array and length of array
    localStorage.setItem("ridersOnARideLength", ridersOnARide.length);

    ridersOnARide.forEach( function(riderID) {
        localStorage.setItem(`ridersOnARide[${ridersOnARide.indexOf(riderID)}]`, riderID);
    });

    // Save riders on break array and length of array
    localStorage.setItem("ridersOnBreakLength", ridersOnBreak.length);

    ridersOnBreak.forEach( function(riderID) {
        localStorage.setItem(`ridersOnBreak[${ridersOnBreak.indexOf(riderID)}]`, riderID);
    });
}

// refreshRiderRotation();
function AddRider(riderName, bikeNumber) {

    let uniqueID = 1;
    if(riders.length > 0)
        uniqueID = +riders[riders.length - 1].riderID + 1;

    uniqueID = uniqueID.toString();
    const newRider = Rider(riderName, bikeNumber, uniqueID);
    riders.push(newRider);
    ridersAvailable.push(uniqueID);

    // List Rider
    listRider(newRider);

    updateLocalStorage();

    // localStorage.setItem(`riders[${localStorage.ridersLength}]`, JSON.stringify(newRider));
    // localStorage.setItem(`ridersAvailable[${localStorage.ridersAvailableLength}]`, JSON.stringify(newRider));

    // localStorage.ridersLength = +localStorage.ridersLength + 1;
    // localStorage.ridersAvailableLength = +localStorage.ridersAvailableLength + 1;

    console.log("riders:");
    console.log(riders);
    console.log("ridersAvailable:");
    console.log(ridersAvailable);
    console.log("ridersOnARide:");
    console.log(ridersOnARide);
    console.log("ridersOnBreak:");
    console.log(ridersOnBreak);
    console.log(localStorage);
}

function DeleteRider(uniqueID) {
    // Find rider to delete through ID
    let riderToDelete = riders.find(function(r) {
        return r.riderID == uniqueID;
    });

    // Remove rider from one of the rotation arrays
    if(riderToDelete.isOnARide()) {
        ridersOnARide.splice(ridersOnARide.indexOf(uniqueID), 1);
    }
    else if(riderToDelete.isOnBreak()) {
        ridersOnBreak.splice(ridersOnBreak.indexOf(uniqueID), 1);
    }
    else {
        ridersAvailable.splice(ridersAvailable.indexOf(uniqueID), 1);
    }

    // Remove from main array
    let indexToDelete = riders.indexOf(riderToDelete);
    riders.splice(indexToDelete, 1);

    console.log("riders:");
    console.log(riders);
    console.log("ridersAvailable:");
    console.log(ridersAvailable);
    console.log("ridersOnARide:");
    console.log(ridersOnARide);
    console.log("ridersOnBreak:");
    console.log(ridersOnBreak);
    console.log(localStorage);

    //Refresh rotation
    refreshRiderRotation();

    // Update local storage
    updateLocalStorage();
}

function StartRide(uniqueID) {
    let rider = riders.find(function(r) {
        return r.riderID == uniqueID;
    });

    if(rider.isOnBreak()) {

        rider.toggleOnBreak();

        ridersOnBreak.splice(ridersOnBreak.indexOf(uniqueID), 1);
    }
    else {
        ridersAvailable.splice(ridersAvailable.indexOf(uniqueID), 1);
    }
        
    rider.toggleOnARide();
    
    //Insert rider in on a ride array
    ridersOnARide.push(uniqueID);

    console.log("riders:");
    console.log(riders);
    console.log("ridersAvailable:");
    console.log(ridersAvailable);
    console.log("ridersOnARide:");
    console.log(ridersOnARide);
    console.log("ridersOnBreak:");
    console.log(ridersOnBreak);
    console.log(localStorage);

    refreshRiderRotation();

    updateLocalStorage();
}

function EndRide(uniqueID) {
    let rider = riders.find(function(r) {
        return r.riderID == uniqueID;
    });

    rider.toggleOnARide();

    // Remove rider from On a ride array
    ridersOnARide.splice(ridersOnARide.indexOf(uniqueID), 1);

    // Insert rider on available array
    ridersAvailable.push(uniqueID);

    console.log("riders:");
    console.log(riders);
    console.log("ridersAvailable:");
    console.log(ridersAvailable);
    console.log("ridersOnARide:");
    console.log(ridersOnARide);
    console.log("ridersOnBreak:");
    console.log(ridersOnBreak);
    console.log(localStorage);

    refreshRiderRotation();

    updateLocalStorage();
}

function GoOnBreak(uniqueID) {
    let rider = riders.find(function(r) {
        return r.riderID == uniqueID;
    });

    if(!rider.getHadBreak()) {
        if(rider.isOnARide()) {
            rider.toggleOnARide();
            ridersOnARide.splice(ridersOnARide.indexOf(uniqueID), 1);
            
        }
        else {
            ridersAvailable.splice(ridersAvailable.indexOf(uniqueID), 1);
        }
            
        rider.toggleOnBreak();
    
        ridersOnBreak.push(uniqueID);
    
        refreshRiderRotation();

        updateLocalStorage();
    
        console.log(ridersAvailable);
        console.log(ridersOnARide);
        console.log(ridersOnBreak);
    }
}

function EndBreak(uniqueID) {
    let rider = riders.find(function(r) {
        return r.riderID == uniqueID;
    });

    rider.toggleOnBreak();
    ridersOnBreak.splice(ridersOnBreak.indexOf(uniqueID), 1);

    ridersAvailable.push(uniqueID);
    refreshRiderRotation();

    updateLocalStorage();
}

// Refresh Rider Rotation page
function refreshRiderRotation() {
    availList.innerHTML = "";
    onARideList.innerHTML = "";
    onABreakList.innerHTML = "";

    ridersAvailable.forEach( function(id) {
        let rider = riders.find(function(r) {
            return r.riderID == id;
        });
        listRider(rider);
    });

    ridersOnARide.forEach( function(id) {
        let rider = riders.find(function(r) {
            return r.riderID == id;
        });
        listRider(rider);
    });

    ridersOnBreak.forEach( function(id) {
        let rider = riders.find(function(r) {
            return r.riderID == id;
        });
        listRider(rider);
    });
}

// Create rider list item
function listRider(rider) {

    let listItem = document.createElement('li');
    listItem.id = `li-${rider.riderID}`;

    let riderBox = document.createElement('div');
    riderBox.classList.add('riderBox');

    let span = document.createElement('span');
    span.classList.add('riderNameBox');
    span.id = `nameBox-${rider.riderID}`;
    span.textContent = rider.name;

    riderBox.appendChild(span);

    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttonsContainer');

    if(rider.isOnARide()) {
        let backButton = document.createElement('button');
        backButton.classList.add('back');
        backButton.textContent = 'Back';
        backButton.id = `breakEnd-${rider.riderID}`;

        let breakButton = document.createElement('button');
        breakButton.classList.add('break');
        breakButton.id = `break-${rider.riderID}`;
        if(rider.getHadBreak())
            breakButton.style.opacity = "0.3";

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'X';
        deleteButton.id = `delete-${rider.riderID}`;
        deleteButton.style.order = '3';

        buttonsContainer.appendChild(backButton);
        buttonsContainer.appendChild(breakButton);
        buttonsContainer.appendChild(deleteButton);

        riderBox.appendChild(buttonsContainer);
        listItem.appendChild(riderBox);
        onARideList.appendChild(listItem);
    }
    else if(rider.isOnBreak()) {
        let startButton = document.createElement('button');
        startButton.classList.add('start');
        startButton.textContent = 'Go';
        startButton.id = `start-${rider.riderID}`;

        let backButton = document.createElement('button');
        backButton.classList.add('backFromBreak');
        backButton.textContent = 'Back';
        backButton.id = `breakEnd-${rider.riderID}`;

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'X';
        deleteButton.id = `delete-${rider.riderID}`;
        deleteButton.style.order = '3';

        // Create timer
        let counter = document.createElement('p');
        counter.classList.add('breakTimer');

        let timeNow = new Date();
        let totalSecondsLeft = (rider.getBreakEndTime().getTime() - timeNow.getTime()) / 1000;
        let secondsLeft = Math.floor(totalSecondsLeft % 60);
        let minutesLeft = Math.floor(totalSecondsLeft / 60);
        counter.textContent = `Time left of break: ${minutesLeft}:${secondsLeft}`;

        
        let intervalFunction = setInterval(function() {
            if(!rider.getHadBreak())
                updateCountdown();
        }, 1000);

        function updateCountdown() {
            let timeNow = new Date();
            let totalSecondsLeft = (rider.getBreakEndTime().getTime() - timeNow.getTime()) / 1000;
            let secondsLeft = Math.floor(totalSecondsLeft % 60);
            let minutesLeft = Math.floor(totalSecondsLeft / 60);
            if(secondsLeft<10)
                counter.textContent = `Time left of break: ${minutesLeft}:0${secondsLeft}`;
            else
                counter.textContent = `Time left of break: ${minutesLeft}:${secondsLeft}`;
            if(minutesLeft <= 1)
                counter.style.color = 'red';
            
            if(minutesLeft <= 0 && secondsLeft <= 0) {
                alert(`${rider.name} has finished his break!`);
                EndBreak(rider.riderID);
                clearInterval(intervalFunction);
            }    
        }

        buttonsContainer.appendChild(startButton);
        buttonsContainer.appendChild(backButton);
        buttonsContainer.appendChild(deleteButton);

        riderBox.appendChild(buttonsContainer);
        listItem.appendChild(riderBox);
        listItem.appendChild(counter);
        onABreakList.appendChild(listItem);
    }
    else {
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.id = `delete-${rider.riderID}`;
        deleteButton.textContent = 'X';
    
        let startButton = document.createElement('button');
        startButton.classList.add('start');
        startButton.id = `start-${rider.riderID}`;
        startButton.textContent = 'Go';
    
        let breakButton = document.createElement('button');
        breakButton.classList.add('break');
        breakButton.id = `break-${rider.riderID}`;

        if(rider.getHadBreak())
            breakButton.style.opacity = "0.3";
    
        buttonsContainer.appendChild(startButton);
        buttonsContainer.appendChild(breakButton);
        buttonsContainer.appendChild(deleteButton);
        deleteButton.style.order = '3';
        
        riderBox.appendChild(buttonsContainer);
    
        listItem.appendChild(riderBox);
        
        availList.appendChild(listItem);
    }
    
}

// Save to localStorage

// Input and event listeners
document.addEventListener('click', function(obj) {

    // START Button
    if(obj.target.classList.contains('start')) {

        // Get Rider ID from button's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        // Call Start Ride function
        StartRide(riderID); 
    }
    // Delete Button
    else if(obj.target.classList.contains('delete')) {

        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        DeleteRider(riderID);

        // Get list element and buttons container
        // let listElement = document.querySelector(`#li-${riderID}`);
        // listElement.remove();
    }
    // Back Button
    else if(obj.target.classList.contains('back')) {

        // Get Rider ID from button's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        // Call End Ride function
        EndRide(riderID);
    }
    // Break Button
    else if(obj.target.classList.contains('break')) {
        
        // Get Rider ID from button's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        // Call Go On Break function
        GoOnBreak(riderID);
    }
    // Back from break button
    else if(obj.target.classList.contains('backFromBreak')) {
        
        // Get Rider ID from button's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        // Call End Break function
        EndBreak(riderID);
    }
    // Click on rider
    else if(obj.target.classList.contains('riderNameBox')) {

        // Get Rider ID from element's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        let rider = riders.find(function(r) {
            return r.riderID == riderID;
        });

        if(!rider.areDetailsShowing()) {
            let riderDetails = document.createElement('div');
            riderDetails.classList.add('riderDetails');
            riderDetails.textContent = `Bike number: ${rider.bike}`;
            document.querySelector(`#li-${rider.riderID}`).appendChild(riderDetails);
            rider.toggleDetails();
            
        }
        else {
            document.querySelector('.riderDetails').remove();
            rider.toggleDetails();
        }
    }
    // Click on '+' sign
    else if(obj.target.classList.contains('plus')) {

        // Create container(box)
        let addRiderBoxContainer = document.createElement('div');
        addRiderBoxContainer.classList.add('addRiderBoxContainer');
        document.body.appendChild(addRiderBoxContainer);

        // Title
        let addRiderTitle = document.createElement('p');
        addRiderTitle.textContent = "New Rider:";
        addRiderBoxContainer.appendChild(addRiderTitle);

        // Input box for name
        let inputName = document.createElement('input');
        inputName.type = 'text';
        inputName.placeholder = "Name";
        inputName.classList.add('inputName');
        addRiderBoxContainer.appendChild(inputName);

        // Input box for bike number
        let dropDownMenuBikes = document.createElement('select');
        dropDownMenuBikes.innerHTML = `<option value="" disabled selected>Bike</option>`;
        dropDownMenuBikes.classList.add('dropdownBikeSelector');
        dropDownMenuBikes.name = "bikes"

        // Include all bikes
        _bikesPage_load__WEBPACK_IMPORTED_MODULE_4__.bikes.forEach( function(b) {
            let bikeForSelection = document.createElement('option');
            bikeForSelection.textContent = b.number;
            dropDownMenuBikes.appendChild(bikeForSelection);
        });

        addRiderBoxContainer.appendChild(dropDownMenuBikes);

        // Submit button
        let addRiderButton = document.createElement('button');
        addRiderButton.textContent = "Add rider";
        addRiderButton.classList.add("addRiderButton");
        addRiderBoxContainer.appendChild(addRiderButton); 

        inputName.focus();

        // Close window if clicked outside
        document.addEventListener("click", (evt) => {
            let targetElement = evt.target; // clicked element
        
            do {
                if (targetElement == addRiderBoxContainer) {
                    // This is a click inside. Do nothing, just return.
                    return;
                }
                // Go up the DOM
                targetElement = targetElement.parentNode;
            } while (targetElement);
        
            // This is a click outside.
            addRiderBoxContainer.remove();
        });

        // Submit if 'Enter' is pressed
        document.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
            event.preventDefault();
            document.querySelector('.addRiderButton').click();
        }
  });
        
    }
    // click on 'Add rider' button
    else if(obj.target.classList.contains('addRiderButton')) {

        let addRiderBoxContainer = document.querySelector('.addRiderBoxContainer');
        let riderName = document.querySelector('.inputName').value;
        let bikeNumber = document.querySelector('.dropdownBikeSelector').value;

        if(riderName != '') {
            AddRider(riderName, bikeNumber);
            addRiderBoxContainer.remove();
        }
        else
            alert("Rider needs a name!");
    }
});

let menuButton = document.querySelector('.menuIcon');

menuButton.addEventListener('click', function() {
    console.log("menuuu");

    let menuBox = document.createElement('div');
    menuBox.classList.add('menuBox');
    document.body.appendChild(menuBox);

    let closeMenu = new Image();
    closeMenu.src = _images_X_svg__WEBPACK_IMPORTED_MODULE_1__;
    closeMenu.classList.add('closeMenu');
    menuBox.appendChild(closeMenu);

    let rotationTabButton =document.createElement('a');
    rotationTabButton.textContent = "ROTATION";
    menuBox.appendChild(rotationTabButton);

    let bikesTabButton =document.createElement('a');
    bikesTabButton.textContent = "BIKES";
    menuBox.appendChild(bikesTabButton);

    // Close Menu
    closeMenu.addEventListener('click', function() {
        menuBox.remove();
    });

    // Open Rider Rotation page
    rotationTabButton.addEventListener('click', function() {

        menuBox.remove();

        document.querySelector('.bikesContainer').style.display = "none";
        
        document.querySelector('#main').style.display = "grid";

        document.querySelector('.pageTitle').textContent = "RIDER ROTATION";

        document.querySelector('.plusBox').style.display = "flex";

    });

    // Open Bikes page
    bikesTabButton.addEventListener('click', function() {

        menuBox.remove();

        (0,_bikesPage_load__WEBPACK_IMPORTED_MODULE_4__.loadBikesPage)();
    });
});


function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

// if (storageAvailable('localStorage')) {
//     // Yippee! We can use localStorage awesomeness
//     console.log('yes');
//   }
//   else {
//     // Too bad, no localStorage for us
//     console.log('no');
//   }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDBEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwQ0FBSztBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUEsUUFBUSw4REFBYTtBQUNyQixLQUFLO0FBQ0wsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTSIsInNvdXJjZXMiOlsid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vc3JjL3NjcmlwdHMvYmlrZXNQYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL1JvYm90b0ZsZXhbR1JBRCxYT1BRLFhUUkEsWU9QUSxZVEFTLFlUREUsWVRGSSxZVExDLFlUVUMsb3BzeixzbG50LHdkdGgsd2dodF0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udHMvT2JqZWN0U2Fucy1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZm9udHMvT2JqZWN0U2Fucy1Cb2xkLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2JyZWFrLWljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBGbGV4JztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgMTAwMDtcXG5mb250LXN0cmV0Y2g6IDI1JSAxNTElO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT2JqZWN0IFNhbnMnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDEwMCAxMDAwO1xcbmZvbnQtc3RyZXRjaDogMjUlIDE1MSU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdPYmplY3QgU2FucyBCb2xkJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgMTAwMDtcXG4gIGZvbnQtc3RyZXRjaDogMjUlIDE1MSU7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7ICBcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ09iamVjdCBTYW5zJztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5wYWdlVGl0bGUge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBmb250LWZhbWlseTogJ09iamVjdCBTYW5zJztcXG59XFxuXFxuLnBsdXNCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgbWFyZ2luLXRvcDogLTRweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgd2lkdGg6IDIycHg7XFxufVxcblxcbi5wbHVzIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG59XFxuXFxuLm1lbnVJY29uIHtcXG4gIG1hcmdpbi1yaWdodDogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xcbn1cXG5cXG4jbWFpbiA+IGRpdiA+IHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG51bCB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXgtd2lkdGg6IDUwdnc7XFxufVxcblxcbmxpIHtcXG4gIG1hcmdpbjogM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yaWRlckJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uYnV0dG9uc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLmJ1dHRvbnNDb250YWluZXIgPiBidXR0b24ge1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJyZWFrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxufVxcblxcbi5hZGRSaWRlckJveENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLyogYm9yZGVyOiAzcHggc29saWQgYmxhY2s7ICovXFxuICB0b3A6IDEwMHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgbWluLWhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDVweCAxMHB4IGdyZXk7XFxufVxcblxcbi5hZGRSaWRlckJveENvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kcm9wZG93bkJpa2VTZWxlY3RvciB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5iaWtlVmlzaWJsZUluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTUwcHggYXV0byBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NiY2JjYjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmJpa2VFZGl0QnV0dG9uIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5icmVha1RpbWVyIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLm1lbnVCb3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAzM3Z3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubWVudUJveCA+ICoge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlTWVudSB7XFxuICB3aWR0aDogMzBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYmlrZXNDb250YWluZXIge1xcbiAgbWFyZ2luOiAyMHB4IDMwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLDRDQUE4RztFQUM5RyxxQkFBcUI7QUFDdkIsc0JBQXNCO0FBQ3RCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDRDQUEwQztFQUMxQyxxQkFBcUI7QUFDdkIsc0JBQXNCO0FBQ3RCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDRDQUF1QztFQUN2QyxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseURBQTRDO0VBQzVDLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsU0FBUztFQUNULGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsTUFBTTtFQUNOLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEZsZXgnO1xcbiAgc3JjOiB1cmwoJ2ZvbnRzL1JvYm90b0ZsZXhbR1JBRFxcXFwsWE9QUVxcXFwsWFRSQVxcXFwsWU9QUVxcXFwsWVRBU1xcXFwsWVRERVxcXFwsWVRGSVxcXFwsWVRMQ1xcXFwsWVRVQ1xcXFwsb3BzelxcXFwsc2xudFxcXFwsd2R0aFxcXFwsd2dodF0udHRmJyk7XFxuICBmb250LXdlaWdodDogMTAwIDEwMDA7XFxuZm9udC1zdHJldGNoOiAyNSUgMTUxJTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ09iamVjdCBTYW5zJztcXG4gIHNyYzogdXJsKCdmb250cy9PYmplY3RTYW5zLVJlZ3VsYXIud29mZjInKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgMTAwMDtcXG5mb250LXN0cmV0Y2g6IDI1JSAxNTElO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT2JqZWN0IFNhbnMgQm9sZCc7XFxuICBzcmM6IHVybCgnZm9udHMvT2JqZWN0U2Fucy1Cb2xkLndvZmYyJyk7XFxuICBmb250LXdlaWdodDogMTAwIDEwMDA7XFxuICBmb250LXN0cmV0Y2g6IDI1JSAxNTElO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwgeyAgXFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdPYmplY3QgU2Fucyc7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5sb2dvIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ucGFnZVRpdGxlIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdPYmplY3QgU2Fucyc7XFxufVxcblxcbi5wbHVzQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIG1hcmdpbi10b3A6IC00cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogMjJweDtcXG4gIHdpZHRoOiAyMnB4O1xcbn1cXG5cXG4ucGx1cyB7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcblxcbi5tZW51SWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuI21haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgLyogcGFkZGluZzogMjBweDsgKi9cXG59XFxuXFxuI21haW4gPiBkaXYgPiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxudWwge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiA1MHZ3O1xcbn1cXG5cXG5saSB7XFxuICBtYXJnaW46IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmlkZXJCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmJ1dHRvbnNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5idXR0b25zQ29udGFpbmVyID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5icmVhayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2JyZWFrLWljb24uc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTVweCAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXG59XFxuXFxuLmFkZFJpZGVyQm94Q29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAvKiBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgKi9cXG4gIHRvcDogMTAwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XFxuICBib3gtc2hhZG93OiAxcHggNXB4IDEwcHggZ3JleTtcXG59XFxuXFxuLmFkZFJpZGVyQm94Q29udGFpbmVyID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRyb3Bkb3duQmlrZVNlbGVjdG9yIHtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLmJpa2VWaXNpYmxlSW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxNTBweCBhdXRvIGF1dG87XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2JjYmNiO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4uYmlrZUVkaXRCdXR0b24ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmJyZWFrVGltZXIge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ubWVudUJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDMzdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tZW51Qm94ID4gKiB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xvc2VNZW51IHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5iaWtlc0NvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwcHggMzBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFycm93RG93biBmcm9tICcuLi9pbWFnZXMvYXJyb3ctZG93bi5zdmcnO1xuXG4vLyBBcnJheSBmb3IgYmlrZXNcbmxldCBiaWtlcyA9IFtdO1xuXG4vLyBCaWtlIEZhY3RvcnkgRnVuY3Rpb25cbmNvbnN0IEJpa2UgPSAobnVtYmVyLCBtb2RlbCwgc3RhdHVzKSA9PiB7XG4gICAgbGV0IGJpa2VTdGF0dXMgPSBzdGF0dXM7XG4gICAgbGV0IGRldGFpbHM7XG4gICAgbGV0IGRldGFpbHNTaG93aW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBiaWtlU3RhdHVzO1xuICAgIGNvbnN0IGFyZURldGFpbHNTaG93aW5nID0gKCkgPT4gZGV0YWlsc1Nob3dpbmc7XG5cbiAgICBjb25zdCB0b2dnbGVTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIGlmKGJpa2VTdGF0dXMgPT0gXCJPdXQgb2YgQWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGJpa2VTdGF0dXMgPSBcIkluIEFjdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYmlrZVN0YXR1cyA9IFwiT3V0IG9mIEFjdGlvblwiO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZURldGFpbHMgPSAoKSA9PiB7XG4gICAgICAgIGlmKGRldGFpbHNTaG93aW5nKSB7XG4gICAgICAgICAgICBkZXRhaWxzU2hvd2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0YWlsc1Nob3dpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlRGV0YWlscyA9IChuZXdEZXRhaWxzKSA9PiB7XG4gICAgICAgIGRldGFpbHMgPSBuZXdEZXRhaWxzO1xuICAgIH1cblxuICAgIHJldHVybiB7bnVtYmVyLCBtb2RlbCwgZ2V0U3RhdHVzLCB0b2dnbGVTdGF0dXMsIHRvZ2dsZURldGFpbHMsIGNoYW5nZURldGFpbHMsIGFyZURldGFpbHNTaG93aW5nfVxufTtcblxuLy8gQ3JlYXRlIHNvbWUgYmlrZXNcbmNvbnN0IE05MDAgPSBCaWtlKFwiTTkwMFwiLCBcIlpvb21vIFplcm9cIiwgXCJPdXQgb2YgQWN0aW9uXCIpO1xuY29uc3QgWjg5NTQ1NiA9IEJpa2UoXCJaODk1NDU2XCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTU0ODggPSBCaWtlKFwiWjg5NTQ4OFwiLCBcIlpvb21vIFplcm9cIiwgXCJPdXQgb2YgQWN0aW9uXCIpO1xuY29uc3QgWjg5NTQ5MCA9IEJpa2UoXCJaODk1NDkwXCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTU0OTMgPSBCaWtlKFwiWjg5NTQ5M1wiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk2MzYwID0gQmlrZShcIlo4OTYzNjBcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuY29uc3QgWjg5NjY5OSA9IEJpa2UoXCJaODk2Njk5XCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTc1MzAgPSBCaWtlKFwiWjg5NzUzMFwiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk3NTMxID0gQmlrZShcIlo4OTc1MzFcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuY29uc3QgWjg5NzU1NiA9IEJpa2UoXCJaODk3NTU2XCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTc2NDMgPSBCaWtlKFwiWjg5NzY0M1wiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk3Njc3ID0gQmlrZShcIlo4OTc2NzdcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuY29uc3QgWjg5Nzc5OCA9IEJpa2UoXCJaODk3Nzk4XCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTc4MzIgPSBCaWtlKFwiWjg5NzgzMlwiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk4MDU1ID0gQmlrZShcIlo4OTgwNTVcIiwgXCJab29tbyBaZXJvXCIsIFwiT3V0IG9mIEFjdGlvblwiKTtcbmNvbnN0IFo4OTgyMDIgPSBCaWtlKFwiWjg5ODIwMlwiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk4MjQyID0gQmlrZShcIlo4OTgyNDJcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuY29uc3QgWjg5ODI4MSA9IEJpa2UoXCJaODk4MjgxXCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTg0NzcgPSBCaWtlKFwiWjg5ODQ3N1wiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk5MzE3ID0gQmlrZShcIlo4OTkzMTdcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuXG5iaWtlcy5wdXNoKE05MDAsIFo4OTU0NTYsIFo4OTU0ODgsIFo4OTU0OTAsIFo4OTU0OTMsIFo4OTYzNjAsIFo4OTY2OTksXG4gICAgWjg5NzUzMCwgWjg5NzUzMSwgWjg5NzU1NiwgWjg5NzY0MywgWjg5NzY3NywgWjg5Nzc5OCwgWjg5NzgzMixcbiAgICBaODk4MDU1LCBaODk4MjAyLCBaODk4MjQyLCBaODk4MjgxLCBaODk4NDc3LCBaODk5MzE3KTtcblxuXG5mdW5jdGlvbiBsb2FkQmlrZXNQYWdlKCkge1xuXG4gICAgLy8gRW1wdHkgbWFpbiBzbyB3ZSBjYW4gcG9wdWxhdGUgaXQgd2l0aCB0aGUgYmlrZXNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIHRoZSBiaWtlc1xuICAgIGxldCBiaWtlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iaWtlc0NvbnRhaW5lcicpO1xuICAgIGJpa2VzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgYmlrZXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5oZXJpdFwiO1xuXG4gICAgLy8gU29ydCBiaWtlcyBieSBzdGF0dXMgKEluIGFjdGlvbiBvbiB0b3ApXG4gICAgc29ydEJpa2VzQnlTdGF0dXMoYmlrZXMpO1xuXG4gICAgLy9DcmVhdGUgZWFjaCBiaWtlIGxpc3RpbmdcbiAgICBiaWtlcy5mb3JFYWNoKGZ1bmN0aW9uKGJpa2UpIHtcbiAgICAgICAgbGlzdEJpa2UoYmlrZSk7XG4gICAgXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZVRpdGxlJykudGV4dENvbnRlbnQgPSBcIkJJS0VTXCI7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c0JveCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuLy8gTGlzdCBiaWtlIGluZm9cbmZ1bmN0aW9uIGxpc3RCaWtlKGJpa2UpIHtcbiAgICBsZXQgYmlrZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmlrZXNDb250YWluZXInKTtcblxuICAgIGxldCBiaWtlSW5mb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJpa2VJbmZvQm94LmlkID0gYGJpa2VJbmZvQm94LSR7YmlrZS5udW1iZXJ9YDtcblxuICAgIGxldCB2aXNpYmxlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpc2libGVJbmZvLmNsYXNzTGlzdC5hZGQoJ2Jpa2VWaXNpYmxlSW5mbycpO1xuXG4gICAgbGV0IGJpa2VJRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBiaWtlSUQudGV4dENvbnRlbnQgPSBiaWtlLm51bWJlcjtcblxuICAgIGxldCBiaWtlTW9kZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYmlrZU1vZGVsLnRleHRDb250ZW50ID0gYmlrZS5tb2RlbDtcblxuICAgIGxldCBiaWtlU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJpa2VTdGF0dXMudGV4dENvbnRlbnQgPSBiaWtlLmdldFN0YXR1cygpO1xuXG4gICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJiaWtlRWRpdEJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmlkID0gYGVkaXQtJHtiaWtlLm51bWJlcn1gO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcImRldGFpbHNcIjtcblxuICAgIHZpc2libGVJbmZvLmFwcGVuZENoaWxkKGJpa2VJRCk7XG4gICAgdmlzaWJsZUluZm8uYXBwZW5kQ2hpbGQoYmlrZU1vZGVsKTtcbiAgICB2aXNpYmxlSW5mby5hcHBlbmRDaGlsZChiaWtlU3RhdHVzKTtcbiAgICB2aXNpYmxlSW5mby5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIGJpa2VJbmZvQm94LmFwcGVuZENoaWxkKHZpc2libGVJbmZvKTtcblxuICAgIGJpa2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJpa2VJbmZvQm94KTsgXG5cbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYmlrZS50b2dnbGVEZXRhaWxzKCk7XG4gICAgICAgIGlmKGJpa2UuYXJlRGV0YWlsc1Nob3dpbmcoKSlcbiAgICAgICAgICAgIG9wZW5CaWtlRGV0YWlscyhiaWtlKTtcbiAgICAgICAgZWxzZVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdERldGFpbHMnKS5yZW1vdmUoKTtcbiAgICB9KTtcbn1cblxuLy8gU29ydCBiaWtlcyBieSBzdGF0dXMgKEluIGFjdGlvbiBvbiB0b3ApXG5mdW5jdGlvbiBzb3J0QmlrZXNCeVN0YXR1cyhiaWtlc0FycmF5KSB7XG4gICAgbGV0IGJpa2VzU29ydGVkID0gYmlrZXMuc29ydCggZnVuY3Rpb24oYSwgYikge1xuICAgICAgICBpZihhLmdldFN0YXR1cygpIDwgYi5nZXRTdGF0dXMoKSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmKGEuZ2V0U3RhdHVzKCkgPiBiLmdldFN0YXR1cygpKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuLy8gU2hvdyBkZXRhaWxzIG9mIHRoZSBiaWtlXG5mdW5jdGlvbiBvcGVuQmlrZURldGFpbHMoYmlrZSkge1xuICAgIFxuICAgIGxldCBiaWtlSW5mb0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNiaWtlSW5mb0JveC0ke2Jpa2UubnVtYmVyfWApO1xuICAgIGxldCBlZGl0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXREZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2VkaXREZXRhaWxzJyk7XG4gICAgbGV0IGNoYW5nZVN0YXR1c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNoYW5nZVN0YXR1c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2hhbmdlIHN0YXR1c1wiO1xuICAgIGxldCBkZXRhaWxzQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXRhaWxzQm94LnBsYWNlaG9sZGVyID0gXCJtb3JlIGRldGFpbHMuLi5cIjtcblxuICAgIGVkaXREZXRhaWxzLmFwcGVuZENoaWxkKGNoYW5nZVN0YXR1c0J1dHRvbik7XG4gICAgZWRpdERldGFpbHMuYXBwZW5kQ2hpbGQoZGV0YWlsc0JveCk7XG4gICAgYmlrZUluZm9Cb3guYXBwZW5kQ2hpbGQoZWRpdERldGFpbHMpO1xuXG4gICAgY2hhbmdlU3RhdHVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGJpa2UudG9nZ2xlU3RhdHVzKCk7XG4gICAgICAgIGxvYWRCaWtlc1BhZ2UoKTtcbiAgICB9KTtcblxufVxuXG5leHBvcnQgeyBsb2FkQmlrZXNQYWdlLCBiaWtlcyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuLi9zdHlsZXMuY3NzJztcbmltcG9ydCBtZW51WCBmcm9tICcuLi9pbWFnZXMvWC5zdmcnO1xuaW1wb3J0IGdvcmlsbGFzTG9nbyBmcm9tICcuLi9pbWFnZXMvbG9nby5qcGVnJztcbmltcG9ydCBwbHVzU2lnbiBmcm9tICcuLi9pbWFnZXMvcGx1cy5zdmcnO1xuaW1wb3J0IHsgYmlrZXMsIGxvYWRCaWtlc1BhZ2UgfSBmcm9tICcuL2Jpa2VzUGFnZS1sb2FkJztcblxuLy8gSW5zZXJ0IGxvZ28gb24gdGhlIGhlYWRlclxuY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xubG9nby5zcmMgPSBnb3JpbGxhc0xvZ287XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJykuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbmxvZ28uc3R5bGUubWF4V2lkdGggPSBcIjE1MHB4XCI7XG5sb2dvLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuXG4vLyBJbnNlcnQgcGx1cyBzaWduIFxuY29uc3QgcGx1cyA9IG5ldyBJbWFnZSgpO1xucGx1cy5zcmMgPSBwbHVzU2lnbjtcbnBsdXMuY2xhc3NMaXN0LmFkZCgncGx1cycpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c0JveCcpLmFwcGVuZENoaWxkKHBsdXMpO1xuXG4vLyBIVE1MIGVsZW1lbnRzXG5jb25zdCBhdmFpbExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhaWxhYmxlJyk7XG5jb25zdCBvbkFSaWRlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvbkFSaWRlJyk7XG5jb25zdCBvbkFCcmVha0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb25BQnJlYWsnKTtcblxuLy8gQXJyYXkgd2l0aCBhbGwgdGhlIFJpZGVyIE9iamVjdHNcbmxldCByaWRlcnMgPSBbXTtcblxuLy8gQXJyYXkgd2l0aCBhdmFpbGFibGUgcmlkZXJzXG5sZXQgcmlkZXJzQXZhaWxhYmxlID0gW107XG5cbi8vIEFycmF5IHdpdGggcmlkZXJzIG9uIGEgcmlkZVxubGV0IHJpZGVyc09uQVJpZGUgPSBbXTtcblxuLy8gQXJyYXkgd2l0aCByaWRlcnMgb24gYnJlYWtcbmxldCByaWRlcnNPbkJyZWFrID0gW107XG5cbi8vIFJpZGVyIEZhY3RvcnkgRnVuY3Rpb25cbmNvbnN0IFJpZGVyID0gKG5hbWUsIGJpa2VOdW1iZXIsIHJpZGVySUQpID0+IHtcbiAgICBsZXQgb25BUmlkZSA9IGZhbHNlO1xuICAgIGxldCBvbkJyZWFrID0gZmFsc2U7XG4gICAgbGV0IGJpa2UgPSBiaWtlTnVtYmVyO1xuICAgIGxldCBkZXRhaWxzU2hvd2luZyA9IGZhbHNlO1xuICAgIGxldCBicmVha1N0YXJ0VGltZTtcbiAgICBsZXQgYnJlYWtFbmRUaW1lO1xuICAgIGxldCBoYWRCcmVhayA9IGZhbHNlO1xuICAgIGNvbnN0IGdldEhhZEJyZWFrID0gKCkgPT4gaGFkQnJlYWs7XG4gICAgY29uc3QgZ2V0QnJlYWtFbmRUaW1lID0gKCkgPT4gYnJlYWtFbmRUaW1lO1xuICAgIGNvbnN0IGlzT25BUmlkZSA9ICgpID0+IG9uQVJpZGU7XG4gICAgY29uc3QgaXNPbkJyZWFrID0gKCkgPT4gb25CcmVhaztcbiAgICBjb25zdCBhcmVEZXRhaWxzU2hvd2luZyA9ICgpID0+IGRldGFpbHNTaG93aW5nO1xuICAgIGNvbnN0IHRvZ2dsZU9uQVJpZGUgPSAoKSA9PiB7XG4gICAgICAgIGlmKG9uQVJpZGUpIHtcbiAgICAgICAgICAgIG9uQVJpZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9uQVJpZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCB0b2dnbGVPbkJyZWFrID0gKCkgPT4ge1xuICAgICAgICBpZihvbkJyZWFrKSB7XG4gICAgICAgICAgICBvbkJyZWFrID0gZmFsc2U7XG4gICAgICAgICAgICBoYWRCcmVhayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZighaGFkQnJlYWspIHtcbiAgICAgICAgICAgIG9uQnJlYWsgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBzZXRCcmVha1N0YXJ0VGltZShub3cpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRvZ2dsZURldGFpbHMgPSAoKSA9PiB7XG4gICAgICAgIGlmKGRldGFpbHNTaG93aW5nKSB7XG4gICAgICAgICAgICBkZXRhaWxzU2hvd2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0YWlsc1Nob3dpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNldEJyZWFrU3RhcnRUaW1lID0gKHRpbWUpID0+IHtcbiAgICAgICAgYnJlYWtFbmRUaW1lID0gdGltZTtcbiAgICAgICAgYnJlYWtFbmRUaW1lLnNldE1pbnV0ZXMoYnJlYWtFbmRUaW1lLmdldE1pbnV0ZXMoKSArIDMwKTtcbiAgICAgICAgLy8gYnJlYWtFbmRUaW1lLnNldFNlY29uZHMoYnJlYWtFbmRUaW1lLmdldFNlY29uZHMoKSArIDUpO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VCaWtlID0gKG5ld0Jpa2UpID0+IHtcbiAgICAgICAgYmlrZSA9IG5ld0Jpa2U7XG4gICAgfVxuICAgIHJldHVybiB7bmFtZSwgYmlrZSwgcmlkZXJJRCwgaXNPbkFSaWRlLCBpc09uQnJlYWssIGFyZURldGFpbHNTaG93aW5nLCBnZXRCcmVha0VuZFRpbWUsIGdldEhhZEJyZWFrLCB0b2dnbGVPbkFSaWRlLCB0b2dnbGVPbkJyZWFrLCB0b2dnbGVEZXRhaWxzLCBjaGFuZ2VCaWtlfVxufTtcblxuLy8gQ3JlYXRlIHNvbWUgcmlkZXJzXG4vLyBjb25zdCBqb2FvID0gQWRkUmlkZXIoJ0pvYW8gTW9udGVpcm8nLCAnWjgyMicpO1xuLy8gY29uc3QgbWFyaWEgPSBBZGRSaWRlcignRmVsaXggUm9iaW5zJywgJ1o4MjInKTtcbi8vIGNvbnN0IHJ1aSA9IEFkZFJpZGVyKCdSb25ueSBKb2FvIEZlbGl6IEdhcmNpYScsICdaNTIyJyk7XG4vLyBjb25zdCBmYXVzdG8gPSBBZGRSaWRlcignRGVjbGFuIFJvb25leScsICdaODMwJyk7XG4vLyBjb25zdCBqb3NlID0gQWRkUmlkZXIoJ1JhZmVlIEFobWVkJywgJ1o4NTUnKTtcbi8vIGNvbnN0IHNzID0gQWRkUmlkZXIoJ01vaGFtbWVkIFJhaGF0JywgJ1o4NTUnKTtcbi8vIGNvbnN0IGpvZWVzZSA9IEFkZFJpZGVyKCdCYXJuYSBTYWdvZGknLCAnWjg1NScpO1xuLy8gY29uc3Qgam9mc2UgPSBBZGRSaWRlcignUGF1bCBEb3VnbGFzJywgJ1o4NTUnKTtcbi8vIGNvbnN0IGpvYXNlID0gQWRkUmlkZXIoJ0FsaSBTYXZhcycsICdaODU1Jyk7XG4vLyBjb25zdCBqb2dzZSA9IEFkZFJpZGVyKCdKb3NodWEgTHVrZSBKb3NlcGggU2FtdWVsJywgJ1o4NTUnKTtcbi8vIGNvbnN0IGpvaHNlID0gQWRkUmlkZXIoJ01vbnplciBTYWxtYW4nLCAnWjg1NScpO1xuLy8gY29uc3Qgam9zamUgPSBBZGRSaWRlcignQWRhbSBTemFibycsICdaODU1Jyk7XG4vLyBjb25zdCBqb2VlMjJzZSA9IEFkZFJpZGVyKCdQYXRlbCBBa2hpbGt1bWFyIFBhcmVzaGJoYWknLCAnWjg1NScpO1xuLy8gY29uc3Qgam9lcXFzZSA9IEFkZFJpZGVyKCdUYWZmYXJpIEphY2tzb24nLCAnWjg1NScpO1xuLy8gY29uc3Qgam9zcXFlID0gQWRkUmlkZXIoJ0pvc2VaYWRpIERhdmlkIEd1ZWRlJywgJ1o4NTUnKTtcblxuLy8gQ2xlYXIgbG9jYWwgc3RvcmFnZVxuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHsgbG9jYWxTdG9yYWdlLmNsZWFyKCkgfTtcblxuLy8gU2V0IGFycmF5IGxlbmdodHMgdG8gMFxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyaWRlcnNMZW5ndGgnKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmlkZXJzTGVuZ3RoXCIsIDApO1xufVxuXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JpZGVyc0F2YWlsYWJsZUxlbmd0aCcpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyaWRlcnNBdmFpbGFibGVMZW5ndGhcIiwgMCk7XG59XG5cbmlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmlkZXJzT25BUmlkZUxlbmd0aCcpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyaWRlcnNPbkFSaWRlTGVuZ3RoXCIsIDApO1xufVxuXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JpZGVyc09uQnJlYWtMZW5ndGgnKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmlkZXJzT25CcmVha0xlbmd0aFwiLCAwKTtcbn1cblxuaW1wb3J0RnJvbUxvY2FsU3RvcmFnZSgpO1xuXG5jb25zb2xlLmxvZyhcInJpZGVyczpcIik7XG5jb25zb2xlLmxvZyhyaWRlcnMpO1xuY29uc29sZS5sb2coXCJyaWRlcnNBdmFpbGFibGU6XCIpO1xuY29uc29sZS5sb2cocmlkZXJzQXZhaWxhYmxlKTtcbmNvbnNvbGUubG9nKFwicmlkZXJzT25BUmlkZTpcIik7XG5jb25zb2xlLmxvZyhyaWRlcnNPbkFSaWRlKTtcbmNvbnNvbGUubG9nKFwicmlkZXJzT25CcmVhazpcIik7XG5jb25zb2xlLmxvZyhyaWRlcnNPbkJyZWFrKTtcbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG5cbi8vIFJldHJpZXZlIGluZm8gZnJvbSBsb2NhbHN0b3JhZ2VcblxuZnVuY3Rpb24gaW1wb3J0RnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JpZGVyc0xlbmd0aCcpOyBpKyspXG4gICAge1xuICAgICAgICBsZXQgaW1wb3J0ZWRPYmplY3Q9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHJpZGVyc1ske2l9XWApKTtcbiAgICAgICAgbGV0IGltcG9ydGVkUmlkZXIgPSBSaWRlcihpbXBvcnRlZE9iamVjdC5uYW1lLCBpbXBvcnRlZE9iamVjdC5iaWtlLCBpbXBvcnRlZE9iamVjdC5yaWRlcklEKTtcbiAgICAgICAgXG4gICAgICAgIHJpZGVycy5wdXNoKGltcG9ydGVkUmlkZXIpO1xuICAgICAgICByaWRlcnNBdmFpbGFibGUucHVzaChpbXBvcnRlZFJpZGVyLnJpZGVySUQpO1xuICAgICAgICBsaXN0UmlkZXIoaW1wb3J0ZWRSaWRlcik7XG4gICAgfVxuXG4gICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyaWRlcnNBdmFpbGFibGVMZW5ndGgnKTsgaSsrKVxuICAgIC8vIHtcbiAgICAvLyAgICAgcmlkZXJzQXZhaWxhYmxlLnB1c2gobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHJpZGVyc0F2YWlsYWJsZVske2l9XWApKTtcbiAgICAvLyB9XG5cbiAgICAvLyBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JpZGVyc09uQVJpZGVMZW5ndGgnKTsgaSsrKVxuICAgIC8vIHtcbiAgICAvLyAgICAgcmlkZXJzT25BUmlkZS5wdXNoKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGByaWRlcnNPbkFSaWRlWyR7aX1dYCkpO1xuICAgIC8vIH1cblxuICAgIC8vIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmlkZXJzT25CcmVha0xlbmd0aCcpOyBpKyspXG4gICAgLy8ge1xuICAgIC8vICAgICByaWRlcnNPbkJyZWFrLnB1c2gobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHJpZGVyc09uQnJlYWtbJHtpfV1gKSk7XG4gICAgLy8gfVxuXG4gICAgcmVmcmVzaFJpZGVyUm90YXRpb24oKTtcbn1cblxuLy8gVXBkYXRlIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcblxuICAgIC8vIENsZWFyIGxvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuICAgIC8vIFNhdmUgcmlkZXJzIGFycmF5IGFuZCBsZW5ndGggb2YgYXJyYXlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJpZGVyc0xlbmd0aFwiLCByaWRlcnMubGVuZ3RoKTtcblxuICAgIHJpZGVycy5mb3JFYWNoKCBmdW5jdGlvbihyaWRlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcmlkZXJzWyR7cmlkZXJzLmluZGV4T2YocmlkZXIpfV1gLCBKU09OLnN0cmluZ2lmeShyaWRlcikpO1xuICAgIH0pO1xuXG4gICAgLy8gU2F2ZSByaWRlcnMgYXZhaWxhYmxlIGFycmF5IGFuZCBsZW5ndGggb2YgYXJyYXlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJpZGVyc0F2YWlsYWJsZUxlbmd0aFwiLCByaWRlcnNBdmFpbGFibGUubGVuZ3RoKTtcblxuICAgIHJpZGVyc0F2YWlsYWJsZS5mb3JFYWNoKCBmdW5jdGlvbihyaWRlcklEKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGByaWRlcnNBdmFpbGFibGVbJHtyaWRlcnNBdmFpbGFibGUuaW5kZXhPZihyaWRlcklEKX1dYCwgcmlkZXJJRCk7XG4gICAgfSk7XG5cbiAgICAvLyBTYXZlIHJpZGVycyBvbiBhIHJpZGUgYXJyYXkgYW5kIGxlbmd0aCBvZiBhcnJheVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmlkZXJzT25BUmlkZUxlbmd0aFwiLCByaWRlcnNPbkFSaWRlLmxlbmd0aCk7XG5cbiAgICByaWRlcnNPbkFSaWRlLmZvckVhY2goIGZ1bmN0aW9uKHJpZGVySUQpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHJpZGVyc09uQVJpZGVbJHtyaWRlcnNPbkFSaWRlLmluZGV4T2YocmlkZXJJRCl9XWAsIHJpZGVySUQpO1xuICAgIH0pO1xuXG4gICAgLy8gU2F2ZSByaWRlcnMgb24gYnJlYWsgYXJyYXkgYW5kIGxlbmd0aCBvZiBhcnJheVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmlkZXJzT25CcmVha0xlbmd0aFwiLCByaWRlcnNPbkJyZWFrLmxlbmd0aCk7XG5cbiAgICByaWRlcnNPbkJyZWFrLmZvckVhY2goIGZ1bmN0aW9uKHJpZGVySUQpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHJpZGVyc09uQnJlYWtbJHtyaWRlcnNPbkJyZWFrLmluZGV4T2YocmlkZXJJRCl9XWAsIHJpZGVySUQpO1xuICAgIH0pO1xufVxuXG4vLyByZWZyZXNoUmlkZXJSb3RhdGlvbigpO1xuZnVuY3Rpb24gQWRkUmlkZXIocmlkZXJOYW1lLCBiaWtlTnVtYmVyKSB7XG5cbiAgICBsZXQgdW5pcXVlSUQgPSAxO1xuICAgIGlmKHJpZGVycy5sZW5ndGggPiAwKVxuICAgICAgICB1bmlxdWVJRCA9ICtyaWRlcnNbcmlkZXJzLmxlbmd0aCAtIDFdLnJpZGVySUQgKyAxO1xuXG4gICAgdW5pcXVlSUQgPSB1bmlxdWVJRC50b1N0cmluZygpO1xuICAgIGNvbnN0IG5ld1JpZGVyID0gUmlkZXIocmlkZXJOYW1lLCBiaWtlTnVtYmVyLCB1bmlxdWVJRCk7XG4gICAgcmlkZXJzLnB1c2gobmV3UmlkZXIpO1xuICAgIHJpZGVyc0F2YWlsYWJsZS5wdXNoKHVuaXF1ZUlEKTtcblxuICAgIC8vIExpc3QgUmlkZXJcbiAgICBsaXN0UmlkZXIobmV3UmlkZXIpO1xuXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcmlkZXJzWyR7bG9jYWxTdG9yYWdlLnJpZGVyc0xlbmd0aH1dYCwgSlNPTi5zdHJpbmdpZnkobmV3UmlkZXIpKTtcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcmlkZXJzQXZhaWxhYmxlWyR7bG9jYWxTdG9yYWdlLnJpZGVyc0F2YWlsYWJsZUxlbmd0aH1dYCwgSlNPTi5zdHJpbmdpZnkobmV3UmlkZXIpKTtcblxuICAgIC8vIGxvY2FsU3RvcmFnZS5yaWRlcnNMZW5ndGggPSArbG9jYWxTdG9yYWdlLnJpZGVyc0xlbmd0aCArIDE7XG4gICAgLy8gbG9jYWxTdG9yYWdlLnJpZGVyc0F2YWlsYWJsZUxlbmd0aCA9ICtsb2NhbFN0b3JhZ2UucmlkZXJzQXZhaWxhYmxlTGVuZ3RoICsgMTtcblxuICAgIGNvbnNvbGUubG9nKFwicmlkZXJzOlwiKTtcbiAgICBjb25zb2xlLmxvZyhyaWRlcnMpO1xuICAgIGNvbnNvbGUubG9nKFwicmlkZXJzQXZhaWxhYmxlOlwiKTtcbiAgICBjb25zb2xlLmxvZyhyaWRlcnNBdmFpbGFibGUpO1xuICAgIGNvbnNvbGUubG9nKFwicmlkZXJzT25BUmlkZTpcIik7XG4gICAgY29uc29sZS5sb2cocmlkZXJzT25BUmlkZSk7XG4gICAgY29uc29sZS5sb2coXCJyaWRlcnNPbkJyZWFrOlwiKTtcbiAgICBjb25zb2xlLmxvZyhyaWRlcnNPbkJyZWFrKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xufVxuXG5mdW5jdGlvbiBEZWxldGVSaWRlcih1bmlxdWVJRCkge1xuICAgIC8vIEZpbmQgcmlkZXIgdG8gZGVsZXRlIHRocm91Z2ggSURcbiAgICBsZXQgcmlkZXJUb0RlbGV0ZSA9IHJpZGVycy5maW5kKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHIucmlkZXJJRCA9PSB1bmlxdWVJRDtcbiAgICB9KTtcblxuICAgIC8vIFJlbW92ZSByaWRlciBmcm9tIG9uZSBvZiB0aGUgcm90YXRpb24gYXJyYXlzXG4gICAgaWYocmlkZXJUb0RlbGV0ZS5pc09uQVJpZGUoKSkge1xuICAgICAgICByaWRlcnNPbkFSaWRlLnNwbGljZShyaWRlcnNPbkFSaWRlLmluZGV4T2YodW5pcXVlSUQpLCAxKTtcbiAgICB9XG4gICAgZWxzZSBpZihyaWRlclRvRGVsZXRlLmlzT25CcmVhaygpKSB7XG4gICAgICAgIHJpZGVyc09uQnJlYWsuc3BsaWNlKHJpZGVyc09uQnJlYWsuaW5kZXhPZih1bmlxdWVJRCksIDEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmlkZXJzQXZhaWxhYmxlLnNwbGljZShyaWRlcnNBdmFpbGFibGUuaW5kZXhPZih1bmlxdWVJRCksIDEpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBmcm9tIG1haW4gYXJyYXlcbiAgICBsZXQgaW5kZXhUb0RlbGV0ZSA9IHJpZGVycy5pbmRleE9mKHJpZGVyVG9EZWxldGUpO1xuICAgIHJpZGVycy5zcGxpY2UoaW5kZXhUb0RlbGV0ZSwgMSk7XG5cbiAgICBjb25zb2xlLmxvZyhcInJpZGVyczpcIik7XG4gICAgY29uc29sZS5sb2cocmlkZXJzKTtcbiAgICBjb25zb2xlLmxvZyhcInJpZGVyc0F2YWlsYWJsZTpcIik7XG4gICAgY29uc29sZS5sb2cocmlkZXJzQXZhaWxhYmxlKTtcbiAgICBjb25zb2xlLmxvZyhcInJpZGVyc09uQVJpZGU6XCIpO1xuICAgIGNvbnNvbGUubG9nKHJpZGVyc09uQVJpZGUpO1xuICAgIGNvbnNvbGUubG9nKFwicmlkZXJzT25CcmVhazpcIik7XG4gICAgY29uc29sZS5sb2cocmlkZXJzT25CcmVhayk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcblxuICAgIC8vUmVmcmVzaCByb3RhdGlvblxuICAgIHJlZnJlc2hSaWRlclJvdGF0aW9uKCk7XG5cbiAgICAvLyBVcGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiBTdGFydFJpZGUodW5pcXVlSUQpIHtcbiAgICBsZXQgcmlkZXIgPSByaWRlcnMuZmluZChmdW5jdGlvbihyKSB7XG4gICAgICAgIHJldHVybiByLnJpZGVySUQgPT0gdW5pcXVlSUQ7XG4gICAgfSk7XG5cbiAgICBpZihyaWRlci5pc09uQnJlYWsoKSkge1xuXG4gICAgICAgIHJpZGVyLnRvZ2dsZU9uQnJlYWsoKTtcblxuICAgICAgICByaWRlcnNPbkJyZWFrLnNwbGljZShyaWRlcnNPbkJyZWFrLmluZGV4T2YodW5pcXVlSUQpLCAxKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJpZGVyc0F2YWlsYWJsZS5zcGxpY2UocmlkZXJzQXZhaWxhYmxlLmluZGV4T2YodW5pcXVlSUQpLCAxKTtcbiAgICB9XG4gICAgICAgIFxuICAgIHJpZGVyLnRvZ2dsZU9uQVJpZGUoKTtcbiAgICBcbiAgICAvL0luc2VydCByaWRlciBpbiBvbiBhIHJpZGUgYXJyYXlcbiAgICByaWRlcnNPbkFSaWRlLnB1c2godW5pcXVlSUQpO1xuXG4gICAgY29uc29sZS5sb2coXCJyaWRlcnM6XCIpO1xuICAgIGNvbnNvbGUubG9nKHJpZGVycyk7XG4gICAgY29uc29sZS5sb2coXCJyaWRlcnNBdmFpbGFibGU6XCIpO1xuICAgIGNvbnNvbGUubG9nKHJpZGVyc0F2YWlsYWJsZSk7XG4gICAgY29uc29sZS5sb2coXCJyaWRlcnNPbkFSaWRlOlwiKTtcbiAgICBjb25zb2xlLmxvZyhyaWRlcnNPbkFSaWRlKTtcbiAgICBjb25zb2xlLmxvZyhcInJpZGVyc09uQnJlYWs6XCIpO1xuICAgIGNvbnNvbGUubG9nKHJpZGVyc09uQnJlYWspO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG5cbiAgICByZWZyZXNoUmlkZXJSb3RhdGlvbigpO1xuXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIEVuZFJpZGUodW5pcXVlSUQpIHtcbiAgICBsZXQgcmlkZXIgPSByaWRlcnMuZmluZChmdW5jdGlvbihyKSB7XG4gICAgICAgIHJldHVybiByLnJpZGVySUQgPT0gdW5pcXVlSUQ7XG4gICAgfSk7XG5cbiAgICByaWRlci50b2dnbGVPbkFSaWRlKCk7XG5cbiAgICAvLyBSZW1vdmUgcmlkZXIgZnJvbSBPbiBhIHJpZGUgYXJyYXlcbiAgICByaWRlcnNPbkFSaWRlLnNwbGljZShyaWRlcnNPbkFSaWRlLmluZGV4T2YodW5pcXVlSUQpLCAxKTtcblxuICAgIC8vIEluc2VydCByaWRlciBvbiBhdmFpbGFibGUgYXJyYXlcbiAgICByaWRlcnNBdmFpbGFibGUucHVzaCh1bmlxdWVJRCk7XG5cbiAgICBjb25zb2xlLmxvZyhcInJpZGVyczpcIik7XG4gICAgY29uc29sZS5sb2cocmlkZXJzKTtcbiAgICBjb25zb2xlLmxvZyhcInJpZGVyc0F2YWlsYWJsZTpcIik7XG4gICAgY29uc29sZS5sb2cocmlkZXJzQXZhaWxhYmxlKTtcbiAgICBjb25zb2xlLmxvZyhcInJpZGVyc09uQVJpZGU6XCIpO1xuICAgIGNvbnNvbGUubG9nKHJpZGVyc09uQVJpZGUpO1xuICAgIGNvbnNvbGUubG9nKFwicmlkZXJzT25CcmVhazpcIik7XG4gICAgY29uc29sZS5sb2cocmlkZXJzT25CcmVhayk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcblxuICAgIHJlZnJlc2hSaWRlclJvdGF0aW9uKCk7XG5cbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn1cblxuZnVuY3Rpb24gR29PbkJyZWFrKHVuaXF1ZUlEKSB7XG4gICAgbGV0IHJpZGVyID0gcmlkZXJzLmZpbmQoZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gci5yaWRlcklEID09IHVuaXF1ZUlEO1xuICAgIH0pO1xuXG4gICAgaWYoIXJpZGVyLmdldEhhZEJyZWFrKCkpIHtcbiAgICAgICAgaWYocmlkZXIuaXNPbkFSaWRlKCkpIHtcbiAgICAgICAgICAgIHJpZGVyLnRvZ2dsZU9uQVJpZGUoKTtcbiAgICAgICAgICAgIHJpZGVyc09uQVJpZGUuc3BsaWNlKHJpZGVyc09uQVJpZGUuaW5kZXhPZih1bmlxdWVJRCksIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByaWRlcnNBdmFpbGFibGUuc3BsaWNlKHJpZGVyc0F2YWlsYWJsZS5pbmRleE9mKHVuaXF1ZUlEKSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICByaWRlci50b2dnbGVPbkJyZWFrKCk7XG4gICAgXG4gICAgICAgIHJpZGVyc09uQnJlYWsucHVzaCh1bmlxdWVJRCk7XG4gICAgXG4gICAgICAgIHJlZnJlc2hSaWRlclJvdGF0aW9uKCk7XG5cbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHJpZGVyc0F2YWlsYWJsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJpZGVyc09uQVJpZGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhyaWRlcnNPbkJyZWFrKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEVuZEJyZWFrKHVuaXF1ZUlEKSB7XG4gICAgbGV0IHJpZGVyID0gcmlkZXJzLmZpbmQoZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gci5yaWRlcklEID09IHVuaXF1ZUlEO1xuICAgIH0pO1xuXG4gICAgcmlkZXIudG9nZ2xlT25CcmVhaygpO1xuICAgIHJpZGVyc09uQnJlYWsuc3BsaWNlKHJpZGVyc09uQnJlYWsuaW5kZXhPZih1bmlxdWVJRCksIDEpO1xuXG4gICAgcmlkZXJzQXZhaWxhYmxlLnB1c2godW5pcXVlSUQpO1xuICAgIHJlZnJlc2hSaWRlclJvdGF0aW9uKCk7XG5cbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn1cblxuLy8gUmVmcmVzaCBSaWRlciBSb3RhdGlvbiBwYWdlXG5mdW5jdGlvbiByZWZyZXNoUmlkZXJSb3RhdGlvbigpIHtcbiAgICBhdmFpbExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBvbkFSaWRlTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG9uQUJyZWFrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgcmlkZXJzQXZhaWxhYmxlLmZvckVhY2goIGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGxldCByaWRlciA9IHJpZGVycy5maW5kKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgIHJldHVybiByLnJpZGVySUQgPT0gaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0UmlkZXIocmlkZXIpO1xuICAgIH0pO1xuXG4gICAgcmlkZXJzT25BUmlkZS5mb3JFYWNoKCBmdW5jdGlvbihpZCkge1xuICAgICAgICBsZXQgcmlkZXIgPSByaWRlcnMuZmluZChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICByZXR1cm4gci5yaWRlcklEID09IGlkO1xuICAgICAgICB9KTtcbiAgICAgICAgbGlzdFJpZGVyKHJpZGVyKTtcbiAgICB9KTtcblxuICAgIHJpZGVyc09uQnJlYWsuZm9yRWFjaCggZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgbGV0IHJpZGVyID0gcmlkZXJzLmZpbmQoZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgcmV0dXJuIHIucmlkZXJJRCA9PSBpZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGxpc3RSaWRlcihyaWRlcik7XG4gICAgfSk7XG59XG5cbi8vIENyZWF0ZSByaWRlciBsaXN0IGl0ZW1cbmZ1bmN0aW9uIGxpc3RSaWRlcihyaWRlcikge1xuXG4gICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS5pZCA9IGBsaS0ke3JpZGVyLnJpZGVySUR9YDtcblxuICAgIGxldCByaWRlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZGVyQm94LmNsYXNzTGlzdC5hZGQoJ3JpZGVyQm94Jyk7XG5cbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3JpZGVyTmFtZUJveCcpO1xuICAgIHNwYW4uaWQgPSBgbmFtZUJveC0ke3JpZGVyLnJpZGVySUR9YDtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gcmlkZXIubmFtZTtcblxuICAgIHJpZGVyQm94LmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgbGV0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnNDb250YWluZXInKTtcblxuICAgIGlmKHJpZGVyLmlzT25BUmlkZSgpKSB7XG4gICAgICAgIGxldCBiYWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYmFjaycpO1xuICAgICAgICBiYWNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0JhY2snO1xuICAgICAgICBiYWNrQnV0dG9uLmlkID0gYGJyZWFrRW5kLSR7cmlkZXIucmlkZXJJRH1gO1xuXG4gICAgICAgIGxldCBicmVha0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBicmVha0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdicmVhaycpO1xuICAgICAgICBicmVha0J1dHRvbi5pZCA9IGBicmVhay0ke3JpZGVyLnJpZGVySUR9YDtcbiAgICAgICAgaWYocmlkZXIuZ2V0SGFkQnJlYWsoKSlcbiAgICAgICAgICAgIGJyZWFrQnV0dG9uLnN0eWxlLm9wYWNpdHkgPSBcIjAuM1wiO1xuXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pZCA9IGBkZWxldGUtJHtyaWRlci5yaWRlcklEfWA7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5vcmRlciA9ICczJztcblxuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tCdXR0b24pO1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJyZWFrQnV0dG9uKTtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIHJpZGVyQm94LmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChyaWRlckJveCk7XG4gICAgICAgIG9uQVJpZGVMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9XG4gICAgZWxzZSBpZihyaWRlci5pc09uQnJlYWsoKSkge1xuICAgICAgICBsZXQgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3RhcnQnKTtcbiAgICAgICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnR28nO1xuICAgICAgICBzdGFydEJ1dHRvbi5pZCA9IGBzdGFydC0ke3JpZGVyLnJpZGVySUR9YDtcblxuICAgICAgICBsZXQgYmFja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBiYWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JhY2tGcm9tQnJlYWsnKTtcbiAgICAgICAgYmFja0J1dHRvbi50ZXh0Q29udGVudCA9ICdCYWNrJztcbiAgICAgICAgYmFja0J1dHRvbi5pZCA9IGBicmVha0VuZC0ke3JpZGVyLnJpZGVySUR9YDtcblxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBkZWxldGVCdXR0b24uaWQgPSBgZGVsZXRlLSR7cmlkZXIucmlkZXJJRH1gO1xuICAgICAgICBkZWxldGVCdXR0b24uc3R5bGUub3JkZXIgPSAnMyc7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRpbWVyXG4gICAgICAgIGxldCBjb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoJ2JyZWFrVGltZXInKTtcblxuICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB0b3RhbFNlY29uZHNMZWZ0ID0gKHJpZGVyLmdldEJyZWFrRW5kVGltZSgpLmdldFRpbWUoKSAtIHRpbWVOb3cuZ2V0VGltZSgpKSAvIDEwMDA7XG4gICAgICAgIGxldCBzZWNvbmRzTGVmdCA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzTGVmdCAlIDYwKTtcbiAgICAgICAgbGV0IG1pbnV0ZXNMZWZ0ID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHNMZWZ0IC8gNjApO1xuICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gYFRpbWUgbGVmdCBvZiBicmVhazogJHttaW51dGVzTGVmdH06JHtzZWNvbmRzTGVmdH1gO1xuXG4gICAgICAgIFxuICAgICAgICBsZXQgaW50ZXJ2YWxGdW5jdGlvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYoIXJpZGVyLmdldEhhZEJyZWFrKCkpXG4gICAgICAgICAgICAgICAgdXBkYXRlQ291bnRkb3duKCk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNvdW50ZG93bigpIHtcbiAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGxldCB0b3RhbFNlY29uZHNMZWZ0ID0gKHJpZGVyLmdldEJyZWFrRW5kVGltZSgpLmdldFRpbWUoKSAtIHRpbWVOb3cuZ2V0VGltZSgpKSAvIDEwMDA7XG4gICAgICAgICAgICBsZXQgc2Vjb25kc0xlZnQgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kc0xlZnQgJSA2MCk7XG4gICAgICAgICAgICBsZXQgbWludXRlc0xlZnQgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kc0xlZnQgLyA2MCk7XG4gICAgICAgICAgICBpZihzZWNvbmRzTGVmdDwxMClcbiAgICAgICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gYFRpbWUgbGVmdCBvZiBicmVhazogJHttaW51dGVzTGVmdH06MCR7c2Vjb25kc0xlZnR9YDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gYFRpbWUgbGVmdCBvZiBicmVhazogJHttaW51dGVzTGVmdH06JHtzZWNvbmRzTGVmdH1gO1xuICAgICAgICAgICAgaWYobWludXRlc0xlZnQgPD0gMSlcbiAgICAgICAgICAgICAgICBjb3VudGVyLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKG1pbnV0ZXNMZWZ0IDw9IDAgJiYgc2Vjb25kc0xlZnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGAke3JpZGVyLm5hbWV9IGhhcyBmaW5pc2hlZCBoaXMgYnJlYWshYCk7XG4gICAgICAgICAgICAgICAgRW5kQnJlYWsocmlkZXIucmlkZXJJRCk7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbEZ1bmN0aW9uKTtcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH1cblxuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrQnV0dG9uKTtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIHJpZGVyQm94LmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChyaWRlckJveCk7XG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xuICAgICAgICBvbkFCcmVha0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pZCA9IGBkZWxldGUtJHtyaWRlci5yaWRlcklEfWA7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICBcbiAgICAgICAgbGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0Jyk7XG4gICAgICAgIHN0YXJ0QnV0dG9uLmlkID0gYHN0YXJ0LSR7cmlkZXIucmlkZXJJRH1gO1xuICAgICAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9ICdHbyc7XG4gICAgXG4gICAgICAgIGxldCBicmVha0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBicmVha0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdicmVhaycpO1xuICAgICAgICBicmVha0J1dHRvbi5pZCA9IGBicmVhay0ke3JpZGVyLnJpZGVySUR9YDtcblxuICAgICAgICBpZihyaWRlci5nZXRIYWRCcmVhaygpKVxuICAgICAgICAgICAgYnJlYWtCdXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMC4zXCI7XG4gICAgXG4gICAgICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJyZWFrQnV0dG9uKTtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICBkZWxldGVCdXR0b24uc3R5bGUub3JkZXIgPSAnMyc7XG4gICAgICAgIFxuICAgICAgICByaWRlckJveC5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcbiAgICBcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQocmlkZXJCb3gpO1xuICAgICAgICBcbiAgICAgICAgYXZhaWxMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9XG4gICAgXG59XG5cbi8vIFNhdmUgdG8gbG9jYWxTdG9yYWdlXG5cbi8vIElucHV0IGFuZCBldmVudCBsaXN0ZW5lcnNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24ob2JqKSB7XG5cbiAgICAvLyBTVEFSVCBCdXR0b25cbiAgICBpZihvYmoudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3RhcnQnKSkge1xuXG4gICAgICAgIC8vIEdldCBSaWRlciBJRCBmcm9tIGJ1dHRvbidzIGlkXG4gICAgICAgIGxldCByaWRlcklEID0gb2JqLnRhcmdldC5pZC5zdWJzdHJpbmcob2JqLnRhcmdldC5pZC5pbmRleE9mKCctJykgKzEpO1xuXG4gICAgICAgIC8vIENhbGwgU3RhcnQgUmlkZSBmdW5jdGlvblxuICAgICAgICBTdGFydFJpZGUocmlkZXJJRCk7IFxuICAgIH1cbiAgICAvLyBEZWxldGUgQnV0dG9uXG4gICAgZWxzZSBpZihvYmoudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcblxuICAgICAgICBsZXQgcmlkZXJJRCA9IG9iai50YXJnZXQuaWQuc3Vic3RyaW5nKG9iai50YXJnZXQuaWQuaW5kZXhPZignLScpICsxKTtcblxuICAgICAgICBEZWxldGVSaWRlcihyaWRlcklEKTtcblxuICAgICAgICAvLyBHZXQgbGlzdCBlbGVtZW50IGFuZCBidXR0b25zIGNvbnRhaW5lclxuICAgICAgICAvLyBsZXQgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGktJHtyaWRlcklEfWApO1xuICAgICAgICAvLyBsaXN0RWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gICAgLy8gQmFjayBCdXR0b25cbiAgICBlbHNlIGlmKG9iai50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdiYWNrJykpIHtcblxuICAgICAgICAvLyBHZXQgUmlkZXIgSUQgZnJvbSBidXR0b24ncyBpZFxuICAgICAgICBsZXQgcmlkZXJJRCA9IG9iai50YXJnZXQuaWQuc3Vic3RyaW5nKG9iai50YXJnZXQuaWQuaW5kZXhPZignLScpICsxKTtcblxuICAgICAgICAvLyBDYWxsIEVuZCBSaWRlIGZ1bmN0aW9uXG4gICAgICAgIEVuZFJpZGUocmlkZXJJRCk7XG4gICAgfVxuICAgIC8vIEJyZWFrIEJ1dHRvblxuICAgIGVsc2UgaWYob2JqLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2JyZWFrJykpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIEdldCBSaWRlciBJRCBmcm9tIGJ1dHRvbidzIGlkXG4gICAgICAgIGxldCByaWRlcklEID0gb2JqLnRhcmdldC5pZC5zdWJzdHJpbmcob2JqLnRhcmdldC5pZC5pbmRleE9mKCctJykgKzEpO1xuXG4gICAgICAgIC8vIENhbGwgR28gT24gQnJlYWsgZnVuY3Rpb25cbiAgICAgICAgR29PbkJyZWFrKHJpZGVySUQpO1xuICAgIH1cbiAgICAvLyBCYWNrIGZyb20gYnJlYWsgYnV0dG9uXG4gICAgZWxzZSBpZihvYmoudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYmFja0Zyb21CcmVhaycpKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBHZXQgUmlkZXIgSUQgZnJvbSBidXR0b24ncyBpZFxuICAgICAgICBsZXQgcmlkZXJJRCA9IG9iai50YXJnZXQuaWQuc3Vic3RyaW5nKG9iai50YXJnZXQuaWQuaW5kZXhPZignLScpICsxKTtcblxuICAgICAgICAvLyBDYWxsIEVuZCBCcmVhayBmdW5jdGlvblxuICAgICAgICBFbmRCcmVhayhyaWRlcklEKTtcbiAgICB9XG4gICAgLy8gQ2xpY2sgb24gcmlkZXJcbiAgICBlbHNlIGlmKG9iai50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyaWRlck5hbWVCb3gnKSkge1xuXG4gICAgICAgIC8vIEdldCBSaWRlciBJRCBmcm9tIGVsZW1lbnQncyBpZFxuICAgICAgICBsZXQgcmlkZXJJRCA9IG9iai50YXJnZXQuaWQuc3Vic3RyaW5nKG9iai50YXJnZXQuaWQuaW5kZXhPZignLScpICsxKTtcblxuICAgICAgICBsZXQgcmlkZXIgPSByaWRlcnMuZmluZChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICByZXR1cm4gci5yaWRlcklEID09IHJpZGVySUQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCFyaWRlci5hcmVEZXRhaWxzU2hvd2luZygpKSB7XG4gICAgICAgICAgICBsZXQgcmlkZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByaWRlckRldGFpbHMuY2xhc3NMaXN0LmFkZCgncmlkZXJEZXRhaWxzJyk7XG4gICAgICAgICAgICByaWRlckRldGFpbHMudGV4dENvbnRlbnQgPSBgQmlrZSBudW1iZXI6ICR7cmlkZXIuYmlrZX1gO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpLSR7cmlkZXIucmlkZXJJRH1gKS5hcHBlbmRDaGlsZChyaWRlckRldGFpbHMpO1xuICAgICAgICAgICAgcmlkZXIudG9nZ2xlRGV0YWlscygpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlkZXJEZXRhaWxzJykucmVtb3ZlKCk7XG4gICAgICAgICAgICByaWRlci50b2dnbGVEZXRhaWxzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQ2xpY2sgb24gJysnIHNpZ25cbiAgICBlbHNlIGlmKG9iai50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbHVzJykpIHtcblxuICAgICAgICAvLyBDcmVhdGUgY29udGFpbmVyKGJveClcbiAgICAgICAgbGV0IGFkZFJpZGVyQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZFJpZGVyQm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZFJpZGVyQm94Q29udGFpbmVyJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkUmlkZXJCb3hDb250YWluZXIpO1xuXG4gICAgICAgIC8vIFRpdGxlXG4gICAgICAgIGxldCBhZGRSaWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhZGRSaWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJOZXcgUmlkZXI6XCI7XG4gICAgICAgIGFkZFJpZGVyQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFJpZGVyVGl0bGUpO1xuXG4gICAgICAgIC8vIElucHV0IGJveCBmb3IgbmFtZVxuICAgICAgICBsZXQgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXROYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIGlucHV0TmFtZS5wbGFjZWhvbGRlciA9IFwiTmFtZVwiO1xuICAgICAgICBpbnB1dE5hbWUuY2xhc3NMaXN0LmFkZCgnaW5wdXROYW1lJyk7XG4gICAgICAgIGFkZFJpZGVyQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0TmFtZSk7XG5cbiAgICAgICAgLy8gSW5wdXQgYm94IGZvciBiaWtlIG51bWJlclxuICAgICAgICBsZXQgZHJvcERvd25NZW51QmlrZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgZHJvcERvd25NZW51QmlrZXMuaW5uZXJIVE1MID0gYDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5CaWtlPC9vcHRpb24+YDtcbiAgICAgICAgZHJvcERvd25NZW51QmlrZXMuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25CaWtlU2VsZWN0b3InKTtcbiAgICAgICAgZHJvcERvd25NZW51QmlrZXMubmFtZSA9IFwiYmlrZXNcIlxuXG4gICAgICAgIC8vIEluY2x1ZGUgYWxsIGJpa2VzXG4gICAgICAgIGJpa2VzLmZvckVhY2goIGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgICAgIGxldCBiaWtlRm9yU2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBiaWtlRm9yU2VsZWN0aW9uLnRleHRDb250ZW50ID0gYi5udW1iZXI7XG4gICAgICAgICAgICBkcm9wRG93bk1lbnVCaWtlcy5hcHBlbmRDaGlsZChiaWtlRm9yU2VsZWN0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkUmlkZXJCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcERvd25NZW51QmlrZXMpO1xuXG4gICAgICAgIC8vIFN1Ym1pdCBidXR0b25cbiAgICAgICAgbGV0IGFkZFJpZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFJpZGVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgcmlkZXJcIjtcbiAgICAgICAgYWRkUmlkZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFJpZGVyQnV0dG9uXCIpO1xuICAgICAgICBhZGRSaWRlckJveENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRSaWRlckJ1dHRvbik7IFxuXG4gICAgICAgIGlucHV0TmFtZS5mb2N1cygpO1xuXG4gICAgICAgIC8vIENsb3NlIHdpbmRvdyBpZiBjbGlja2VkIG91dHNpZGVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRFbGVtZW50ID0gZXZ0LnRhcmdldDsgLy8gY2xpY2tlZCBlbGVtZW50XG4gICAgICAgIFxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50ID09IGFkZFJpZGVyQm94Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBjbGljayBpbnNpZGUuIERvIG5vdGhpbmcsIGp1c3QgcmV0dXJuLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEdvIHVwIHRoZSBET01cbiAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfSB3aGlsZSAodGFyZ2V0RWxlbWVudCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGNsaWNrIG91dHNpZGUuXG4gICAgICAgICAgICBhZGRSaWRlckJveENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3VibWl0IGlmICdFbnRlcicgaXMgcHJlc3NlZFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRSaWRlckJ1dHRvbicpLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgfSk7XG4gICAgICAgIFxuICAgIH1cbiAgICAvLyBjbGljayBvbiAnQWRkIHJpZGVyJyBidXR0b25cbiAgICBlbHNlIGlmKG9iai50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRSaWRlckJ1dHRvbicpKSB7XG5cbiAgICAgICAgbGV0IGFkZFJpZGVyQm94Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFJpZGVyQm94Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCByaWRlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXROYW1lJykudmFsdWU7XG4gICAgICAgIGxldCBiaWtlTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQmlrZVNlbGVjdG9yJykudmFsdWU7XG5cbiAgICAgICAgaWYocmlkZXJOYW1lICE9ICcnKSB7XG4gICAgICAgICAgICBBZGRSaWRlcihyaWRlck5hbWUsIGJpa2VOdW1iZXIpO1xuICAgICAgICAgICAgYWRkUmlkZXJCb3hDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgYWxlcnQoXCJSaWRlciBuZWVkcyBhIG5hbWUhXCIpO1xuICAgIH1cbn0pO1xuXG5sZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51SWNvbicpO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJtZW51dXVcIik7XG5cbiAgICBsZXQgbWVudUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVCb3guY2xhc3NMaXN0LmFkZCgnbWVudUJveCcpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUJveCk7XG5cbiAgICBsZXQgY2xvc2VNZW51ID0gbmV3IEltYWdlKCk7XG4gICAgY2xvc2VNZW51LnNyYyA9IG1lbnVYO1xuICAgIGNsb3NlTWVudS5jbGFzc0xpc3QuYWRkKCdjbG9zZU1lbnUnKTtcbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKGNsb3NlTWVudSk7XG5cbiAgICBsZXQgcm90YXRpb25UYWJCdXR0b24gPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICByb3RhdGlvblRhYkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUk9UQVRJT05cIjtcbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKHJvdGF0aW9uVGFiQnV0dG9uKTtcblxuICAgIGxldCBiaWtlc1RhYkJ1dHRvbiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGJpa2VzVGFiQnV0dG9uLnRleHRDb250ZW50ID0gXCJCSUtFU1wiO1xuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoYmlrZXNUYWJCdXR0b24pO1xuXG4gICAgLy8gQ2xvc2UgTWVudVxuICAgIGNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtZW51Qm94LnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gT3BlbiBSaWRlciBSb3RhdGlvbiBwYWdlXG4gICAgcm90YXRpb25UYWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBtZW51Qm94LnJlbW92ZSgpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iaWtlc0NvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJykuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlVGl0bGUnKS50ZXh0Q29udGVudCA9IFwiUklERVIgUk9UQVRJT05cIjtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c0JveCcpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgIH0pO1xuXG4gICAgLy8gT3BlbiBCaWtlcyBwYWdlXG4gICAgYmlrZXNUYWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBtZW51Qm94LnJlbW92ZSgpO1xuXG4gICAgICAgIGxvYWRCaWtlc1BhZ2UoKTtcbiAgICB9KTtcbn0pO1xuXG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIHZhciBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIHZhciB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG4vLyBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbi8vICAgICAvLyBZaXBwZWUhIFdlIGNhbiB1c2UgbG9jYWxTdG9yYWdlIGF3ZXNvbWVuZXNzXG4vLyAgICAgY29uc29sZS5sb2coJ3llcycpO1xuLy8gICB9XG4vLyAgIGVsc2Uge1xuLy8gICAgIC8vIFRvbyBiYWQsIG5vIGxvY2FsU3RvcmFnZSBmb3IgdXNcbi8vICAgICBjb25zb2xlLmxvZygnbm8nKTtcbi8vICAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==