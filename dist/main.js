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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Roboto Flex';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 100 1000;\nfont-stretch: 25% 151%;\n}\n\n@font-face {\n  font-family: 'Object Sans';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 100 1000;\nfont-stretch: 25% 151%;\n}\n\n@font-face {\n  font-family: 'Object Sans Bold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 100 1000;\n  font-stretch: 25% 151%;\n}\n\n*, *:before, *::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {  \n  margin: 0;\n  padding: 0;\n  font-family: 'Object Sans';\n  box-sizing: border-box;\n  background-color: white;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: white;\n    color: black;\n    font-size: 2rem;\n}\n\n.logo {\n  margin-left: 20px;\n}\n\n.pageTitle {\n  margin-left: 20px;\n  font-family: 'Object Sans';\n}\n\n.plusBox {\n  display: flex;\n  font-size: 50px;\n  cursor: pointer;\n  margin-left: 30px;\n  margin-top: -4px;\n  border: 2px solid black;\n  height: 22px;\n  width: 22px;\n}\n\n.plus {\n  width: 12px;\n  height: 12px;\n  margin-left: 3px;\n  margin-top: 3px;\n}\n\n.menuIcon {\n  margin-right: 25px;\n  cursor: pointer;\n  margin-left: auto;\n}\n\n#main {\n  display: grid;\n  justify-content: end;\n  grid-template-columns: 50% 50%;\n  /* padding: 20px; */\n}\n\n#main > div > p {\n  text-align: center;\n  font-size: 22px;\n}\n\nul {\n  margin: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  /* align-items: center; */\n  border-radius: 10px;\n  max-width: 50vw;\n}\n\nli {\n  margin: 3px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  border: 1px solid black;\n  list-style-type: none;\n  cursor: pointer;\n  height: 100%;\n  padding:  6px 6px 2px 6px;\n}\n\n.riderBox {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  /* padding: 5px; */\n}\n\n.riderDetails {\n  /* padding: 5px; */\n}\n\n.buttonsContainer {\n  display: flex;\n  justify-content: flex-end;\n  padding-left: 20px;\n}\n\n.buttonsContainer > button {\n  padding: 2px 5px;\n  margin: 0;\n  border: transparent;\n  background-color: white;\n  cursor: pointer;\n}\n\n.break {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 15px 15px;\n  width: 15px;\n  height: 15px;\n  align-self: baseline;\n}\n\n.addRiderBoxContainer {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: white;\n  border: 10px solid black;\n  top: calc(50vh - 100px);\n  left: 50%;\n  min-height: 200px;\n  width: 300px;\n  margin-left: -150px;\n  box-shadow: 4px 4px 12px 0px grey;\n}\n\n.addRiderBoxContainer > button {\n  background-color: white;\n  padding: 5px 20px;\n  border: 1px solid black;\n}\n\n.dropdownBikeSelector {\n  width: 150px;\n}\n\n.bikeVisibleInfo {\n  display: grid;\n  grid-template-columns: 100px 150px auto auto;\n  padding-top: 10px;\n  padding-left: 10px;\n  border-bottom: 1px solid #cbcbcb;\n  align-content: center;\n}\n.bikeEditButton {\n  width: 80px;\n  justify-self: end;\n}\n\n.menuBox {\n  background-color: black;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  width: 33vw;\n  height: 100vh;\n  top: 0;\n  right: -33vw;\n  border: 1px solid black;\n  color: white;\n  font-size: 2.3rem;\n  padding: 20px;\n  transition: transform 300ms ease-in-out;\n}\n\n.menuBox.opened {\n  transform: translate(-33vw, 0);\n}\n\n.menuBox.closed {\n  transform: translate(33vw, 0);\n}\n\n\n.menuBox > * {\n  text-decoration: none;\n  color: white;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.closeMenu {\n  width: 25px;\n  align-self: flex-end;\n}\n\n.bikesContainer {\n  margin: 20px 30px;\n}\n\n.riders-tab-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-tab {\n  font-size: 2.2rem;\n  margin-left: .5rem;\n  padding-top: 6px;\n}\n\n.riders-tab-container > * {\n  margin-left: 1rem;\n  padding-top: 1rem;\n  font-size: 1rem;\n  text-decoration: none;\n}\n\n.breakTimer {\n  position: relative;\n  top: -19px;\n  font-size: .7rem;\n}\n\n.timer-circle {\n  background: -webkit-linear-gradient(left, skyBlue 50%, #eee 50%);\n  border-radius: 100%;\n  height: calc(var(--size) * 1px);\n  width: calc(var(--size) * 1px);\n  position: relative;\n  -webkit-animation: time calc(var(--duration) * 1s) steps(1000, start) infinite;\n    -webkit-mask: radial-gradient(transparent 50%,#000 50%);\n    mask: radial-gradient(transparent 50%,#000 50%);\n}\n.mask {\n  border-radius: 100% 0 0 100% / 50% 0 0 50%;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 50%;\n  -webkit-animation: mask calc(var(--duration) * 1s) steps(500, start) infinite;\n  -webkit-transform-origin: 100% 50%;\n}\n@-webkit-keyframes time {\n  100% {\n      -webkit-transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes mask {\n  0% {\n      background: #eee;\n      -webkit-transform: rotate(0deg);\n  }\n  50% {\n      background: #eee;\n      -webkit-transform: rotate(-180deg);\n  }\n  50.01% {\n      background: skyBlue;\n      -webkit-transform: rotate(0deg);\n  }\n  100% {\n      background: skyBlue;\n      -webkit-transform: rotate(-180deg);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Roboto Flex';\n  src: url('fonts/RobotoFlex[GRAD\\,XOPQ\\,XTRA\\,YOPQ\\,YTAS\\,YTDE\\,YTFI\\,YTLC\\,YTUC\\,opsz\\,slnt\\,wdth\\,wght].ttf');\n  font-weight: 100 1000;\nfont-stretch: 25% 151%;\n}\n\n@font-face {\n  font-family: 'Object Sans';\n  src: url('fonts/ObjectSans-Regular.woff2');\n  font-weight: 100 1000;\nfont-stretch: 25% 151%;\n}\n\n@font-face {\n  font-family: 'Object Sans Bold';\n  src: url('fonts/ObjectSans-Bold.woff2');\n  font-weight: 100 1000;\n  font-stretch: 25% 151%;\n}\n\n*, *:before, *::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {  \n  margin: 0;\n  padding: 0;\n  font-family: 'Object Sans';\n  box-sizing: border-box;\n  background-color: white;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: white;\n    color: black;\n    font-size: 2rem;\n}\n\n.logo {\n  margin-left: 20px;\n}\n\n.pageTitle {\n  margin-left: 20px;\n  font-family: 'Object Sans';\n}\n\n.plusBox {\n  display: flex;\n  font-size: 50px;\n  cursor: pointer;\n  margin-left: 30px;\n  margin-top: -4px;\n  border: 2px solid black;\n  height: 22px;\n  width: 22px;\n}\n\n.plus {\n  width: 12px;\n  height: 12px;\n  margin-left: 3px;\n  margin-top: 3px;\n}\n\n.menuIcon {\n  margin-right: 25px;\n  cursor: pointer;\n  margin-left: auto;\n}\n\n#main {\n  display: grid;\n  justify-content: end;\n  grid-template-columns: 50% 50%;\n  /* padding: 20px; */\n}\n\n#main > div > p {\n  text-align: center;\n  font-size: 22px;\n}\n\nul {\n  margin: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  /* align-items: center; */\n  border-radius: 10px;\n  max-width: 50vw;\n}\n\nli {\n  margin: 3px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  border: 1px solid black;\n  list-style-type: none;\n  cursor: pointer;\n  height: 100%;\n  padding:  6px 6px 2px 6px;\n}\n\n.riderBox {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  /* padding: 5px; */\n}\n\n.riderDetails {\n  /* padding: 5px; */\n}\n\n.buttonsContainer {\n  display: flex;\n  justify-content: flex-end;\n  padding-left: 20px;\n}\n\n.buttonsContainer > button {\n  padding: 2px 5px;\n  margin: 0;\n  border: transparent;\n  background-color: white;\n  cursor: pointer;\n}\n\n.break {\n  background-image: url(images/break-icon.svg);\n  background-size: 15px 15px;\n  width: 15px;\n  height: 15px;\n  align-self: baseline;\n}\n\n.addRiderBoxContainer {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: white;\n  border: 10px solid black;\n  top: calc(50vh - 100px);\n  left: 50%;\n  min-height: 200px;\n  width: 300px;\n  margin-left: -150px;\n  box-shadow: 4px 4px 12px 0px grey;\n}\n\n.addRiderBoxContainer > button {\n  background-color: white;\n  padding: 5px 20px;\n  border: 1px solid black;\n}\n\n.dropdownBikeSelector {\n  width: 150px;\n}\n\n.bikeVisibleInfo {\n  display: grid;\n  grid-template-columns: 100px 150px auto auto;\n  padding-top: 10px;\n  padding-left: 10px;\n  border-bottom: 1px solid #cbcbcb;\n  align-content: center;\n}\n.bikeEditButton {\n  width: 80px;\n  justify-self: end;\n}\n\n.menuBox {\n  background-color: black;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  width: 33vw;\n  height: 100vh;\n  top: 0;\n  right: -33vw;\n  border: 1px solid black;\n  color: white;\n  font-size: 2.3rem;\n  padding: 20px;\n  transition: transform 300ms ease-in-out;\n}\n\n.menuBox.opened {\n  transform: translate(-33vw, 0);\n}\n\n.menuBox.closed {\n  transform: translate(33vw, 0);\n}\n\n\n.menuBox > * {\n  text-decoration: none;\n  color: white;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.closeMenu {\n  width: 25px;\n  align-self: flex-end;\n}\n\n.bikesContainer {\n  margin: 20px 30px;\n}\n\n.riders-tab-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-tab {\n  font-size: 2.2rem;\n  margin-left: .5rem;\n  padding-top: 6px;\n}\n\n.riders-tab-container > * {\n  margin-left: 1rem;\n  padding-top: 1rem;\n  font-size: 1rem;\n  text-decoration: none;\n}\n\n.breakTimer {\n  position: relative;\n  top: -19px;\n  font-size: .7rem;\n}\n\n.timer-circle {\n  background: -webkit-linear-gradient(left, skyBlue 50%, #eee 50%);\n  border-radius: 100%;\n  height: calc(var(--size) * 1px);\n  width: calc(var(--size) * 1px);\n  position: relative;\n  -webkit-animation: time calc(var(--duration) * 1s) steps(1000, start) infinite;\n    -webkit-mask: radial-gradient(transparent 50%,#000 50%);\n    mask: radial-gradient(transparent 50%,#000 50%);\n}\n.mask {\n  border-radius: 100% 0 0 100% / 50% 0 0 50%;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 50%;\n  -webkit-animation: mask calc(var(--duration) * 1s) steps(500, start) infinite;\n  -webkit-transform-origin: 100% 50%;\n}\n@-webkit-keyframes time {\n  100% {\n      -webkit-transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes mask {\n  0% {\n      background: #eee;\n      -webkit-transform: rotate(0deg);\n  }\n  50% {\n      background: #eee;\n      -webkit-transform: rotate(-180deg);\n  }\n  50.01% {\n      background: skyBlue;\n      -webkit-transform: rotate(0deg);\n  }\n  100% {\n      background: skyBlue;\n      -webkit-transform: rotate(-180deg);\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./src/scripts/bikes.js":
/*!******************************!*\
  !*** ./src/scripts/bikes.js ***!
  \******************************/
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

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "riders": () => (/* binding */ riders),
/* harmony export */   "ridersAvailable": () => (/* binding */ ridersAvailable),
/* harmony export */   "ridersOnARide": () => (/* binding */ ridersOnARide),
/* harmony export */   "ridersOnBreak": () => (/* binding */ ridersOnBreak)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _images_X_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/X.svg */ "./src/images/X.svg");
/* harmony import */ var _images_logo_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/logo.jpeg */ "./src/images/logo.jpeg");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _bikes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bikes */ "./src/scripts/bikes.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "./src/scripts/storage.js");







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
            setBreakEndTime(now);
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
    const setBreakEndTime = (time) => {
        breakStartTime = time;
        breakEndTime = time;
        // breakEndTime.setMinutes(breakStartTime.getMinutes() + 30);
        breakEndTime.setSeconds(breakStartTime.getSeconds() + 60);
    }
    const changeBike = (newBike) => {
        bike = newBike;
    }
    return {name, bike, riderID, isOnARide, isOnBreak, areDetailsShowing, getBreakEndTime, getHadBreak, toggleOnARide, toggleOnBreak, toggleDetails, changeBike}
};

// localStorage.clear();

// Retrieve info from localstorage
for(let i = 0; i < localStorage.getItem('ridersLength'); i++)
{
    let importedObject = (0,_storage__WEBPACK_IMPORTED_MODULE_5__.importRider)(i);

    let importedRider = Rider(importedObject.name, importedObject.bike, importedObject.riderID);

    riders.push(importedRider);
    ridersAvailable.push(importedRider.riderID);
    listRider(importedRider);
}

refreshRiderRotation();

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

    (0,_storage__WEBPACK_IMPORTED_MODULE_5__.updateLocalStorage)();

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
    (0,_storage__WEBPACK_IMPORTED_MODULE_5__.updateLocalStorage)();
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

    (0,_storage__WEBPACK_IMPORTED_MODULE_5__.updateLocalStorage)();
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

    (0,_storage__WEBPACK_IMPORTED_MODULE_5__.updateLocalStorage)();
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

        (0,_storage__WEBPACK_IMPORTED_MODULE_5__.updateLocalStorage)();
    
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

    (0,_storage__WEBPACK_IMPORTED_MODULE_5__.updateLocalStorage)();
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
        counter.id = `breakTimer-${rider.id}`;

        let timeNow = new Date();
        let totalSecondsLeft = (rider.getBreakEndTime().getTime() - timeNow.getTime()) / 1000;
        let secondsLeft = Math.floor(totalSecondsLeft % 60);
        let minutesLeft = Math.floor(totalSecondsLeft / 60);
        counter.textContent = `${minutesLeft}:0${secondsLeft}`;

        let timerCircle = document.createElement('div');
        timerCircle.classList.add('timer-circle');
        timerCircle.style = `--duration: ${totalSecondsLeft};--size: 30;`;
        let circleMask = document.createElement('div');
        circleMask.classList.add('mask');

        let intervalFunction = setInterval(function() {
            if(!rider.getHadBreak())
                updateCountdown(rider);
        }, 1000);
        
        buttonsContainer.appendChild(startButton);
        buttonsContainer.appendChild(backButton);
        buttonsContainer.appendChild(deleteButton);

        riderBox.appendChild(buttonsContainer);
        listItem.appendChild(riderBox);
        timerCircle.appendChild(circleMask);
        listItem.appendChild(timerCircle);
        listItem.appendChild(counter);

        // listItem.appendChild(counter);
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

        // Get Rider ID from button's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        // Call Delete RIder function
        DeleteRider(riderID);

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
        _bikes__WEBPACK_IMPORTED_MODULE_4__.bikes.forEach( function(b) {
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
    

    let closeMenu = new Image();
    closeMenu.src = _images_X_svg__WEBPACK_IMPORTED_MODULE_1__;
    closeMenu.classList.add('closeMenu');
    menuBox.appendChild(closeMenu);

    let rotationTabButton = document.createElement('a');
    rotationTabButton.textContent = "ROTATION";
    rotationTabButton.classList.add('menu-tab');
    menuBox.appendChild(rotationTabButton);

    
    let ridersTabButton = document.createElement('a');
    ridersTabButton.textContent = "RIDERS";
    ridersTabButton.classList.add('menu-tab');
    menuBox.appendChild(ridersTabButton);

    let ridersTabContainer = document.createElement('div');
    ridersTabContainer.classList.add('riders-tab-container');
    ridersTabButton.appendChild(ridersTabContainer);

    let bikesTabButton = document.createElement('a');
    bikesTabButton.textContent = "BIKES";
    bikesTabButton.classList.add('menu-tab');
    menuBox.appendChild(bikesTabButton);

    document.body.appendChild(menuBox);

    setTimeout( function() {
        menuBox.classList.add('opened');
    }, 10);
    
    // Close Menu
    closeMenu.addEventListener('click', function() {
        menuBox.classList.add('closed');
        setTimeout( function() {
            menuBox.remove();
        }, 200);
        
    });

    // Open Rider Rotation page
    rotationTabButton.addEventListener('click', function() {

        menuBox.classList.add('closed');
        setTimeout( function() {
            menuBox.remove();
        }, 200);

        document.querySelector('.bikesContainer').style.display = "none";
        
        document.querySelector('#main').style.display = "grid";

        document.querySelector('.pageTitle').textContent = "RIDER ROTATION";

        document.querySelector('.plusBox').style.display = "flex";

    });

    ridersTabButton.addEventListener('click', function() {
        if(!ridersTabContainer.classList.contains('opened')) {
            ridersTabContainer.classList.add('opened');

            riders.forEach( function(rider) {
                let riderListing = document.createElement('a');
                riderListing.textContent = rider.name;
                ridersTabContainer.appendChild(riderListing);
            });
        }
        else {
            ridersTabContainer.classList.remove('opened');
            ridersTabContainer.innerHTML = '';
        }
        
    });

    // Open Bikes page
    bikesTabButton.addEventListener('click', function() {

        menuBox.classList.add('closed');
        setTimeout( function() {
            menuBox.remove();
        }, 200);

        (0,_bikes__WEBPACK_IMPORTED_MODULE_4__.loadBikesPage)();
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

function updateCountdown(rider) {
    let timeNow = new Date();
    let totalSecondsLeft = (rider.getBreakEndTime().getTime() - timeNow.getTime()) / 1000;
    let secondsLeft = Math.floor(totalSecondsLeft % 60);
    let minutesLeft = Math.floor(totalSecondsLeft / 60);
    let counter = document.querySelector(`#breakTimer-${rider.id}`);

    if(secondsLeft<10)
        counter.textContent = `${minutesLeft}:0${secondsLeft}`;
    else
        counter.textContent = `${minutesLeft}:${secondsLeft}`;
    if(minutesLeft <= 1)
        counter.style.color = 'red';
    
    if(minutesLeft <= 0 && secondsLeft <= 0) {
        alert(`${rider.name} has finished his break!`);
        EndBreak(rider.riderID);
        // clearInterval(intervalFunction);
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



/***/ }),

/***/ "./src/scripts/storage.js":
/*!********************************!*\
  !*** ./src/scripts/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "importRider": () => (/* binding */ importRider),
/* harmony export */   "updateLocalStorage": () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/scripts/index.js");


function importRider(index) {

    let importedObject= JSON.parse(localStorage.getItem(`riders[${index}]`));
    
    return importedObject;
}

// Update local storage
function updateLocalStorage() {

    // Clear local storage
    localStorage.clear();

    // Save riders array and length of array
    localStorage.setItem("ridersLength", _index__WEBPACK_IMPORTED_MODULE_0__.riders.length);

    _index__WEBPACK_IMPORTED_MODULE_0__.riders.forEach( function(rider) {
        localStorage.setItem(`riders[${_index__WEBPACK_IMPORTED_MODULE_0__.riders.indexOf(rider)}]`, JSON.stringify(rider));
    });

    // Save riders available array and length of array
    localStorage.setItem("ridersAvailableLength", _index__WEBPACK_IMPORTED_MODULE_0__.ridersAvailable.length);

    _index__WEBPACK_IMPORTED_MODULE_0__.ridersAvailable.forEach( function(riderID) {
        localStorage.setItem(`ridersAvailable[${_index__WEBPACK_IMPORTED_MODULE_0__.ridersAvailable.indexOf(riderID)}]`, riderID);
    });

    // Save riders on a ride array and length of array
    localStorage.setItem("ridersOnARideLength", _index__WEBPACK_IMPORTED_MODULE_0__.ridersOnARide.length);

    _index__WEBPACK_IMPORTED_MODULE_0__.ridersOnARide.forEach( function(riderID) {
        localStorage.setItem(`ridersOnARide[${_index__WEBPACK_IMPORTED_MODULE_0__.ridersOnARide.indexOf(riderID)}]`, riderID);
    });

    // Save riders on break array and length of array
    localStorage.setItem("ridersOnBreakLength", _index__WEBPACK_IMPORTED_MODULE_0__.ridersOnBreak.length);

    _index__WEBPACK_IMPORTED_MODULE_0__.ridersOnBreak.forEach( function(riderID) {
        localStorage.setItem(`ridersOnBreak[${_index__WEBPACK_IMPORTED_MODULE_0__.ridersOnBreak.indexOf(riderID)}]`, riderID);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZmlEOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLFlBQVk7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFlBQVk7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1VFckJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vLi9zcmMvc2NyaXB0cy9iaWtlcy5qcyIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vc3JjL3NjcmlwdHMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy9Sb2JvdG9GbGV4W0dSQUQsWE9QUSxYVFJBLFlPUFEsWVRBUyxZVERFLFlURkksWVRMQyxZVFVDLG9wc3osc2xudCx3ZHRoLHdnaHRdLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnRzL09iamVjdFNhbnMtUmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImZvbnRzL09iamVjdFNhbnMtQm9sZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImltYWdlcy9icmVhay1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gRmxleCc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogMTAwIDEwMDA7XFxuZm9udC1zdHJldGNoOiAyNSUgMTUxJTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ09iamVjdCBTYW5zJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgMTAwMDtcXG5mb250LXN0cmV0Y2g6IDI1JSAxNTElO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT2JqZWN0IFNhbnMgQm9sZCc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogMTAwIDEwMDA7XFxuICBmb250LXN0cmV0Y2g6IDI1JSAxNTElO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwgeyAgXFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdPYmplY3QgU2Fucyc7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLnBhZ2VUaXRsZSB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiAnT2JqZWN0IFNhbnMnO1xcbn1cXG5cXG4ucGx1c0JveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDIycHg7XFxuICB3aWR0aDogMjJweDtcXG59XFxuXFxuLnBsdXMge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG4ubWVudUljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbiNtYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG4gIC8qIHBhZGRpbmc6IDIwcHg7ICovXFxufVxcblxcbiNtYWluID4gZGl2ID4gcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbnVsIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1heC13aWR0aDogNTB2dztcXG59XFxuXFxubGkge1xcbiAgbWFyZ2luOiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAgNnB4IDZweCAycHggNnB4O1xcbn1cXG5cXG4ucmlkZXJCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIHBhZGRpbmc6IDVweDsgKi9cXG59XFxuXFxuLnJpZGVyRGV0YWlscyB7XFxuICAvKiBwYWRkaW5nOiA1cHg7ICovXFxufVxcblxcbi5idXR0b25zQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uYnV0dG9uc0NvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnJlYWsge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTVweCAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXG59XFxuXFxuLmFkZFJpZGVyQm94Q29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDEwcHggc29saWQgYmxhY2s7XFxuICB0b3A6IGNhbGMoNTB2aCAtIDEwMHB4KTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTJweCAwcHggZ3JleTtcXG59XFxuXFxuLmFkZFJpZGVyQm94Q29udGFpbmVyID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRyb3Bkb3duQmlrZVNlbGVjdG9yIHtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLmJpa2VWaXNpYmxlSW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxNTBweCBhdXRvIGF1dG87XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2JjYmNiO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4uYmlrZUVkaXRCdXR0b24ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLm1lbnVCb3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAzM3Z3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAtMzN2dztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyLjNyZW07XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWVudUJveC5vcGVuZWQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMzdncsIDApO1xcbn1cXG5cXG4ubWVudUJveC5jbG9zZWQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzN2dywgMCk7XFxufVxcblxcblxcbi5tZW51Qm94ID4gKiB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xvc2VNZW51IHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5iaWtlc0NvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwcHggMzBweDtcXG59XFxuXFxuLnJpZGVycy10YWItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWVudS10YWIge1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICBwYWRkaW5nLXRvcDogNnB4O1xcbn1cXG5cXG4ucmlkZXJzLXRhYi1jb250YWluZXIgPiAqIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5icmVha1RpbWVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTE5cHg7XFxuICBmb250LXNpemU6IC43cmVtO1xcbn1cXG5cXG4udGltZXItY2lyY2xlIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHNreUJsdWUgNTAlLCAjZWVlIDUwJSk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXNpemUpICogMXB4KTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLXNpemUpICogMXB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0aW1lIGNhbGModmFyKC0tZHVyYXRpb24pICogMXMpIHN0ZXBzKDEwMDAsIHN0YXJ0KSBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1tYXNrOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQgNTAlLCMwMDAgNTAlKTtcXG4gICAgbWFzazogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50IDUwJSwjMDAwIDUwJSk7XFxufVxcbi5tYXNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgMCAwIDEwMCUgLyA1MCUgMCAwIDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogNTAlO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG1hc2sgY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAxcykgc3RlcHMoNTAwLCBzdGFydCkgaW5maW5pdGU7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGltZSB7XFxuICAxMDAlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBtYXNrIHtcXG4gIDAlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICA1MCUge1xcbiAgICAgIGJhY2tncm91bmQ6ICNlZWU7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gIH1cXG4gIDUwLjAxJSB7XFxuICAgICAgYmFja2dyb3VuZDogc2t5Qmx1ZTtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgICAgYmFja2dyb3VuZDogc2t5Qmx1ZTtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQiw0Q0FBOEc7RUFDOUcscUJBQXFCO0FBQ3ZCLHNCQUFzQjtBQUN0Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw0Q0FBMEM7RUFDMUMscUJBQXFCO0FBQ3ZCLHNCQUFzQjtBQUN0Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiw0Q0FBdUM7RUFDdkMscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtC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QUNoQixrQ0FBa0M7RUFDdEM7RUFDQTtNQUNJLG1CQUFtQjtNQUNuQiwrQkFBK0I7RUFDbkM7RUFDQTtNQUNJLG1CQUFtQjtNQUNuQixrQ0FBa0M7RUFDdEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEZsZXgnO1xcbiAgc3JjOiB1cmwoJ2ZvbnRzL1JvYm90b0ZsZXhbR1JBRFxcXFwsWE9QUVxcXFwsWFRSQVxcXFwsWU9QUVxcXFwsWVRBU1xcXFwsWVRERVxcXFwsWVRGSVxcXFwsWVRMQ1xcXFwsWVRVQ1xcXFwsb3BzelxcXFwsc2xudFxcXFwsd2R0aFxcXFwsd2dodF0udHRmJyk7XFxuICBmb250LXdlaWdodDogMTAwIDEwMDA7XFxuZm9udC1zdHJldGNoOiAyNSUgMTUxJTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ09iamVjdCBTYW5zJztcXG4gIHNyYzogdXJsKCdmb250cy9PYmplY3RTYW5zLVJlZ3VsYXIud29mZjInKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgMTAwMDtcXG5mb250LXN0cmV0Y2g6IDI1JSAxNTElO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT2JqZWN0IFNhbnMgQm9sZCc7XFxuICBzcmM6IHVybCgnZm9udHMvT2JqZWN0U2Fucy1Cb2xkLndvZmYyJyk7XFxuICBmb250LXdlaWdodDogMTAwIDEwMDA7XFxuICBmb250LXN0cmV0Y2g6IDI1JSAxNTElO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwgeyAgXFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdPYmplY3QgU2Fucyc7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLnBhZ2VUaXRsZSB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiAnT2JqZWN0IFNhbnMnO1xcbn1cXG5cXG4ucGx1c0JveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDIycHg7XFxuICB3aWR0aDogMjJweDtcXG59XFxuXFxuLnBsdXMge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG4ubWVudUljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbiNtYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG4gIC8qIHBhZGRpbmc6IDIwcHg7ICovXFxufVxcblxcbiNtYWluID4gZGl2ID4gcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbnVsIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1heC13aWR0aDogNTB2dztcXG59XFxuXFxubGkge1xcbiAgbWFyZ2luOiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAgNnB4IDZweCAycHggNnB4O1xcbn1cXG5cXG4ucmlkZXJCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIHBhZGRpbmc6IDVweDsgKi9cXG59XFxuXFxuLnJpZGVyRGV0YWlscyB7XFxuICAvKiBwYWRkaW5nOiA1cHg7ICovXFxufVxcblxcbi5idXR0b25zQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uYnV0dG9uc0NvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnJlYWsge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9icmVhay1pY29uLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxufVxcblxcbi5hZGRSaWRlckJveENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIGJsYWNrO1xcbiAgdG9wOiBjYWxjKDUwdmggLSAxMDBweCk7XFxuICBsZWZ0OiA1MCU7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDEycHggMHB4IGdyZXk7XFxufVxcblxcbi5hZGRSaWRlckJveENvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kcm9wZG93bkJpa2VTZWxlY3RvciB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5iaWtlVmlzaWJsZUluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTUwcHggYXV0byBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NiY2JjYjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmJpa2VFZGl0QnV0dG9uIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5tZW51Qm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzN2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0b3A6IDA7XFxuICByaWdodDogLTMzdnc7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1lbnVCb3gub3BlbmVkIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zM3Z3LCAwKTtcXG59XFxuXFxuLm1lbnVCb3guY2xvc2VkIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMzdncsIDApO1xcbn1cXG5cXG5cXG4ubWVudUJveCA+ICoge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlTWVudSB7XFxuICB3aWR0aDogMjVweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYmlrZXNDb250YWluZXIge1xcbiAgbWFyZ2luOiAyMHB4IDMwcHg7XFxufVxcblxcbi5yaWRlcnMtdGFiLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1lbnUtdGFiIHtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG59XFxuXFxuLnJpZGVycy10YWItY29udGFpbmVyID4gKiB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uYnJlYWtUaW1lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0xOXB4O1xcbiAgZm9udC1zaXplOiAuN3JlbTtcXG59XFxuXFxuLnRpbWVyLWNpcmNsZSB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCBza3lCbHVlIDUwJSwgI2VlZSA1MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1zaXplKSAqIDFweCk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1zaXplKSAqIDFweCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdGltZSBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIDFzKSBzdGVwcygxMDAwLCBzdGFydCkgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtbWFzazogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50IDUwJSwjMDAwIDUwJSk7XFxuICAgIG1hc2s6IHJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCA1MCUsIzAwMCA1MCUpO1xcbn1cXG4ubWFzayB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlIDAgMCAxMDAlIC8gNTAlIDAgMCA1MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtYXNrIGNhbGModmFyKC0tZHVyYXRpb24pICogMXMpIHN0ZXBzKDUwMCwgc3RhcnQpIGluZmluaXRlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHRpbWUge1xcbiAgMTAwJSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbWFzayB7XFxuICAwJSB7XFxuICAgICAgYmFja2dyb3VuZDogI2VlZTtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxuICB9XFxuICA1MC4wMSUge1xcbiAgICAgIGJhY2tncm91bmQ6IHNreUJsdWU7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAgIGJhY2tncm91bmQ6IHNreUJsdWU7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFycm93RG93biBmcm9tICcuLi9pbWFnZXMvYXJyb3ctZG93bi5zdmcnO1xuXG4vLyBBcnJheSBmb3IgYmlrZXNcbmxldCBiaWtlcyA9IFtdO1xuXG4vLyBCaWtlIEZhY3RvcnkgRnVuY3Rpb25cbmNvbnN0IEJpa2UgPSAobnVtYmVyLCBtb2RlbCwgc3RhdHVzKSA9PiB7XG4gICAgbGV0IGJpa2VTdGF0dXMgPSBzdGF0dXM7XG4gICAgbGV0IGRldGFpbHM7XG4gICAgbGV0IGRldGFpbHNTaG93aW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBiaWtlU3RhdHVzO1xuICAgIGNvbnN0IGFyZURldGFpbHNTaG93aW5nID0gKCkgPT4gZGV0YWlsc1Nob3dpbmc7XG5cbiAgICBjb25zdCB0b2dnbGVTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIGlmKGJpa2VTdGF0dXMgPT0gXCJPdXQgb2YgQWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGJpa2VTdGF0dXMgPSBcIkluIEFjdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYmlrZVN0YXR1cyA9IFwiT3V0IG9mIEFjdGlvblwiO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZURldGFpbHMgPSAoKSA9PiB7XG4gICAgICAgIGlmKGRldGFpbHNTaG93aW5nKSB7XG4gICAgICAgICAgICBkZXRhaWxzU2hvd2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0YWlsc1Nob3dpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlRGV0YWlscyA9IChuZXdEZXRhaWxzKSA9PiB7XG4gICAgICAgIGRldGFpbHMgPSBuZXdEZXRhaWxzO1xuICAgIH1cblxuICAgIHJldHVybiB7bnVtYmVyLCBtb2RlbCwgZ2V0U3RhdHVzLCB0b2dnbGVTdGF0dXMsIHRvZ2dsZURldGFpbHMsIGNoYW5nZURldGFpbHMsIGFyZURldGFpbHNTaG93aW5nfVxufTtcblxuLy8gQ3JlYXRlIHNvbWUgYmlrZXNcbmNvbnN0IE05MDAgPSBCaWtlKFwiTTkwMFwiLCBcIlpvb21vIFplcm9cIiwgXCJPdXQgb2YgQWN0aW9uXCIpO1xuY29uc3QgWjg5NTQ1NiA9IEJpa2UoXCJaODk1NDU2XCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTU0ODggPSBCaWtlKFwiWjg5NTQ4OFwiLCBcIlpvb21vIFplcm9cIiwgXCJPdXQgb2YgQWN0aW9uXCIpO1xuY29uc3QgWjg5NTQ5MCA9IEJpa2UoXCJaODk1NDkwXCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTU0OTMgPSBCaWtlKFwiWjg5NTQ5M1wiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk2MzYwID0gQmlrZShcIlo4OTYzNjBcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuY29uc3QgWjg5NjY5OSA9IEJpa2UoXCJaODk2Njk5XCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTc1MzAgPSBCaWtlKFwiWjg5NzUzMFwiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk3NTMxID0gQmlrZShcIlo4OTc1MzFcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuY29uc3QgWjg5NzU1NiA9IEJpa2UoXCJaODk3NTU2XCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTc2NDMgPSBCaWtlKFwiWjg5NzY0M1wiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk3Njc3ID0gQmlrZShcIlo4OTc2NzdcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuY29uc3QgWjg5Nzc5OCA9IEJpa2UoXCJaODk3Nzk4XCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTc4MzIgPSBCaWtlKFwiWjg5NzgzMlwiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk4MDU1ID0gQmlrZShcIlo4OTgwNTVcIiwgXCJab29tbyBaZXJvXCIsIFwiT3V0IG9mIEFjdGlvblwiKTtcbmNvbnN0IFo4OTgyMDIgPSBCaWtlKFwiWjg5ODIwMlwiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk4MjQyID0gQmlrZShcIlo4OTgyNDJcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuY29uc3QgWjg5ODI4MSA9IEJpa2UoXCJaODk4MjgxXCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTg0NzcgPSBCaWtlKFwiWjg5ODQ3N1wiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk5MzE3ID0gQmlrZShcIlo4OTkzMTdcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuXG5iaWtlcy5wdXNoKE05MDAsIFo4OTU0NTYsIFo4OTU0ODgsIFo4OTU0OTAsIFo4OTU0OTMsIFo4OTYzNjAsIFo4OTY2OTksXG4gICAgWjg5NzUzMCwgWjg5NzUzMSwgWjg5NzU1NiwgWjg5NzY0MywgWjg5NzY3NywgWjg5Nzc5OCwgWjg5NzgzMixcbiAgICBaODk4MDU1LCBaODk4MjAyLCBaODk4MjQyLCBaODk4MjgxLCBaODk4NDc3LCBaODk5MzE3KTtcblxuXG5mdW5jdGlvbiBsb2FkQmlrZXNQYWdlKCkge1xuXG4gICAgLy8gRW1wdHkgbWFpbiBzbyB3ZSBjYW4gcG9wdWxhdGUgaXQgd2l0aCB0aGUgYmlrZXNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIHRoZSBiaWtlc1xuICAgIGxldCBiaWtlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iaWtlc0NvbnRhaW5lcicpO1xuICAgIGJpa2VzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgYmlrZXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5oZXJpdFwiO1xuXG4gICAgLy8gU29ydCBiaWtlcyBieSBzdGF0dXMgKEluIGFjdGlvbiBvbiB0b3ApXG4gICAgc29ydEJpa2VzQnlTdGF0dXMoYmlrZXMpO1xuXG4gICAgLy9DcmVhdGUgZWFjaCBiaWtlIGxpc3RpbmdcbiAgICBiaWtlcy5mb3JFYWNoKGZ1bmN0aW9uKGJpa2UpIHtcbiAgICAgICAgbGlzdEJpa2UoYmlrZSk7XG4gICAgXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZVRpdGxlJykudGV4dENvbnRlbnQgPSBcIkJJS0VTXCI7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c0JveCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuLy8gTGlzdCBiaWtlIGluZm9cbmZ1bmN0aW9uIGxpc3RCaWtlKGJpa2UpIHtcbiAgICBsZXQgYmlrZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmlrZXNDb250YWluZXInKTtcblxuICAgIGxldCBiaWtlSW5mb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJpa2VJbmZvQm94LmlkID0gYGJpa2VJbmZvQm94LSR7YmlrZS5udW1iZXJ9YDtcblxuICAgIGxldCB2aXNpYmxlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpc2libGVJbmZvLmNsYXNzTGlzdC5hZGQoJ2Jpa2VWaXNpYmxlSW5mbycpO1xuXG4gICAgbGV0IGJpa2VJRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBiaWtlSUQudGV4dENvbnRlbnQgPSBiaWtlLm51bWJlcjtcblxuICAgIGxldCBiaWtlTW9kZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYmlrZU1vZGVsLnRleHRDb250ZW50ID0gYmlrZS5tb2RlbDtcblxuICAgIGxldCBiaWtlU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJpa2VTdGF0dXMudGV4dENvbnRlbnQgPSBiaWtlLmdldFN0YXR1cygpO1xuXG4gICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJiaWtlRWRpdEJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmlkID0gYGVkaXQtJHtiaWtlLm51bWJlcn1gO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcImRldGFpbHNcIjtcblxuICAgIHZpc2libGVJbmZvLmFwcGVuZENoaWxkKGJpa2VJRCk7XG4gICAgdmlzaWJsZUluZm8uYXBwZW5kQ2hpbGQoYmlrZU1vZGVsKTtcbiAgICB2aXNpYmxlSW5mby5hcHBlbmRDaGlsZChiaWtlU3RhdHVzKTtcbiAgICB2aXNpYmxlSW5mby5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIGJpa2VJbmZvQm94LmFwcGVuZENoaWxkKHZpc2libGVJbmZvKTtcblxuICAgIGJpa2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJpa2VJbmZvQm94KTsgXG5cbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYmlrZS50b2dnbGVEZXRhaWxzKCk7XG4gICAgICAgIGlmKGJpa2UuYXJlRGV0YWlsc1Nob3dpbmcoKSlcbiAgICAgICAgICAgIG9wZW5CaWtlRGV0YWlscyhiaWtlKTtcbiAgICAgICAgZWxzZVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdERldGFpbHMnKS5yZW1vdmUoKTtcbiAgICB9KTtcbn1cblxuLy8gU29ydCBiaWtlcyBieSBzdGF0dXMgKEluIGFjdGlvbiBvbiB0b3ApXG5mdW5jdGlvbiBzb3J0QmlrZXNCeVN0YXR1cyhiaWtlc0FycmF5KSB7XG4gICAgbGV0IGJpa2VzU29ydGVkID0gYmlrZXMuc29ydCggZnVuY3Rpb24oYSwgYikge1xuICAgICAgICBpZihhLmdldFN0YXR1cygpIDwgYi5nZXRTdGF0dXMoKSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmKGEuZ2V0U3RhdHVzKCkgPiBiLmdldFN0YXR1cygpKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuLy8gU2hvdyBkZXRhaWxzIG9mIHRoZSBiaWtlXG5mdW5jdGlvbiBvcGVuQmlrZURldGFpbHMoYmlrZSkge1xuICAgIFxuICAgIGxldCBiaWtlSW5mb0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNiaWtlSW5mb0JveC0ke2Jpa2UubnVtYmVyfWApO1xuICAgIGxldCBlZGl0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXREZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2VkaXREZXRhaWxzJyk7XG4gICAgbGV0IGNoYW5nZVN0YXR1c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNoYW5nZVN0YXR1c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2hhbmdlIHN0YXR1c1wiO1xuICAgIGxldCBkZXRhaWxzQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXRhaWxzQm94LnBsYWNlaG9sZGVyID0gXCJtb3JlIGRldGFpbHMuLi5cIjtcblxuICAgIGVkaXREZXRhaWxzLmFwcGVuZENoaWxkKGNoYW5nZVN0YXR1c0J1dHRvbik7XG4gICAgZWRpdERldGFpbHMuYXBwZW5kQ2hpbGQoZGV0YWlsc0JveCk7XG4gICAgYmlrZUluZm9Cb3guYXBwZW5kQ2hpbGQoZWRpdERldGFpbHMpO1xuXG4gICAgY2hhbmdlU3RhdHVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGJpa2UudG9nZ2xlU3RhdHVzKCk7XG4gICAgICAgIGxvYWRCaWtlc1BhZ2UoKTtcbiAgICB9KTtcblxufVxuXG5leHBvcnQgeyBsb2FkQmlrZXNQYWdlLCBiaWtlcyB9OyIsImltcG9ydCAnLi4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgbWVudVggZnJvbSAnLi4vaW1hZ2VzL1guc3ZnJztcbmltcG9ydCBnb3JpbGxhc0xvZ28gZnJvbSAnLi4vaW1hZ2VzL2xvZ28uanBlZyc7XG5pbXBvcnQgcGx1c1NpZ24gZnJvbSAnLi4vaW1hZ2VzL3BsdXMuc3ZnJztcbmltcG9ydCB7IGJpa2VzLCBsb2FkQmlrZXNQYWdlIH0gZnJvbSAnLi9iaWtlcyc7XG5pbXBvcnQgeyBpbXBvcnRSaWRlciwgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuLy8gSW5zZXJ0IGxvZ28gb24gdGhlIGhlYWRlclxuY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xubG9nby5zcmMgPSBnb3JpbGxhc0xvZ287XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJykuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbmxvZ28uc3R5bGUubWF4V2lkdGggPSBcIjE1MHB4XCI7XG5sb2dvLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuXG4vLyBJbnNlcnQgcGx1cyBzaWduIFxuY29uc3QgcGx1cyA9IG5ldyBJbWFnZSgpO1xucGx1cy5zcmMgPSBwbHVzU2lnbjtcbnBsdXMuY2xhc3NMaXN0LmFkZCgncGx1cycpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c0JveCcpLmFwcGVuZENoaWxkKHBsdXMpO1xuXG4vLyBIVE1MIGVsZW1lbnRzXG5jb25zdCBhdmFpbExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhaWxhYmxlJyk7XG5jb25zdCBvbkFSaWRlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvbkFSaWRlJyk7XG5jb25zdCBvbkFCcmVha0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb25BQnJlYWsnKTtcblxuLy8gQXJyYXkgd2l0aCBhbGwgdGhlIFJpZGVyIE9iamVjdHNcbmxldCByaWRlcnMgPSBbXTtcblxuLy8gQXJyYXkgd2l0aCBhdmFpbGFibGUgcmlkZXJzXG5sZXQgcmlkZXJzQXZhaWxhYmxlID0gW107XG5cbi8vIEFycmF5IHdpdGggcmlkZXJzIG9uIGEgcmlkZVxubGV0IHJpZGVyc09uQVJpZGUgPSBbXTtcblxuLy8gQXJyYXkgd2l0aCByaWRlcnMgb24gYnJlYWtcbmxldCByaWRlcnNPbkJyZWFrID0gW107XG5cbi8vIFJpZGVyIEZhY3RvcnkgRnVuY3Rpb25cbmNvbnN0IFJpZGVyID0gKG5hbWUsIGJpa2VOdW1iZXIsIHJpZGVySUQpID0+IHtcbiAgICBsZXQgb25BUmlkZSA9IGZhbHNlO1xuICAgIGxldCBvbkJyZWFrID0gZmFsc2U7XG4gICAgbGV0IGJpa2UgPSBiaWtlTnVtYmVyO1xuICAgIGxldCBkZXRhaWxzU2hvd2luZyA9IGZhbHNlO1xuICAgIGxldCBicmVha1N0YXJ0VGltZTtcbiAgICBsZXQgYnJlYWtFbmRUaW1lO1xuICAgIGxldCBoYWRCcmVhayA9IGZhbHNlO1xuICAgIGNvbnN0IGdldEhhZEJyZWFrID0gKCkgPT4gaGFkQnJlYWs7XG4gICAgY29uc3QgZ2V0QnJlYWtFbmRUaW1lID0gKCkgPT4gYnJlYWtFbmRUaW1lO1xuICAgIGNvbnN0IGlzT25BUmlkZSA9ICgpID0+IG9uQVJpZGU7XG4gICAgY29uc3QgaXNPbkJyZWFrID0gKCkgPT4gb25CcmVhaztcbiAgICBjb25zdCBhcmVEZXRhaWxzU2hvd2luZyA9ICgpID0+IGRldGFpbHNTaG93aW5nO1xuICAgIGNvbnN0IHRvZ2dsZU9uQVJpZGUgPSAoKSA9PiB7XG4gICAgICAgIGlmKG9uQVJpZGUpIHtcbiAgICAgICAgICAgIG9uQVJpZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9uQVJpZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCB0b2dnbGVPbkJyZWFrID0gKCkgPT4ge1xuICAgICAgICBpZihvbkJyZWFrKSB7XG4gICAgICAgICAgICBvbkJyZWFrID0gZmFsc2U7XG4gICAgICAgICAgICBoYWRCcmVhayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZighaGFkQnJlYWspIHtcbiAgICAgICAgICAgIG9uQnJlYWsgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBzZXRCcmVha0VuZFRpbWUobm93KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0b2dnbGVEZXRhaWxzID0gKCkgPT4ge1xuICAgICAgICBpZihkZXRhaWxzU2hvd2luZykge1xuICAgICAgICAgICAgZGV0YWlsc1Nob3dpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGFpbHNTaG93aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzZXRCcmVha0VuZFRpbWUgPSAodGltZSkgPT4ge1xuICAgICAgICBicmVha1N0YXJ0VGltZSA9IHRpbWU7XG4gICAgICAgIGJyZWFrRW5kVGltZSA9IHRpbWU7XG4gICAgICAgIC8vIGJyZWFrRW5kVGltZS5zZXRNaW51dGVzKGJyZWFrU3RhcnRUaW1lLmdldE1pbnV0ZXMoKSArIDMwKTtcbiAgICAgICAgYnJlYWtFbmRUaW1lLnNldFNlY29uZHMoYnJlYWtTdGFydFRpbWUuZ2V0U2Vjb25kcygpICsgNjApO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VCaWtlID0gKG5ld0Jpa2UpID0+IHtcbiAgICAgICAgYmlrZSA9IG5ld0Jpa2U7XG4gICAgfVxuICAgIHJldHVybiB7bmFtZSwgYmlrZSwgcmlkZXJJRCwgaXNPbkFSaWRlLCBpc09uQnJlYWssIGFyZURldGFpbHNTaG93aW5nLCBnZXRCcmVha0VuZFRpbWUsIGdldEhhZEJyZWFrLCB0b2dnbGVPbkFSaWRlLCB0b2dnbGVPbkJyZWFrLCB0b2dnbGVEZXRhaWxzLCBjaGFuZ2VCaWtlfVxufTtcblxuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbi8vIFJldHJpZXZlIGluZm8gZnJvbSBsb2NhbHN0b3JhZ2VcbmZvcihsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmlkZXJzTGVuZ3RoJyk7IGkrKylcbntcbiAgICBsZXQgaW1wb3J0ZWRPYmplY3QgPSBpbXBvcnRSaWRlcihpKTtcblxuICAgIGxldCBpbXBvcnRlZFJpZGVyID0gUmlkZXIoaW1wb3J0ZWRPYmplY3QubmFtZSwgaW1wb3J0ZWRPYmplY3QuYmlrZSwgaW1wb3J0ZWRPYmplY3QucmlkZXJJRCk7XG5cbiAgICByaWRlcnMucHVzaChpbXBvcnRlZFJpZGVyKTtcbiAgICByaWRlcnNBdmFpbGFibGUucHVzaChpbXBvcnRlZFJpZGVyLnJpZGVySUQpO1xuICAgIGxpc3RSaWRlcihpbXBvcnRlZFJpZGVyKTtcbn1cblxucmVmcmVzaFJpZGVyUm90YXRpb24oKTtcblxuZnVuY3Rpb24gQWRkUmlkZXIocmlkZXJOYW1lLCBiaWtlTnVtYmVyKSB7XG5cbiAgICBsZXQgdW5pcXVlSUQgPSAxO1xuICAgIGlmKHJpZGVycy5sZW5ndGggPiAwKVxuICAgICAgICB1bmlxdWVJRCA9ICtyaWRlcnNbcmlkZXJzLmxlbmd0aCAtIDFdLnJpZGVySUQgKyAxO1xuXG4gICAgdW5pcXVlSUQgPSB1bmlxdWVJRC50b1N0cmluZygpO1xuICAgIGNvbnN0IG5ld1JpZGVyID0gUmlkZXIocmlkZXJOYW1lLCBiaWtlTnVtYmVyLCB1bmlxdWVJRCk7XG4gICAgcmlkZXJzLnB1c2gobmV3UmlkZXIpO1xuICAgIHJpZGVyc0F2YWlsYWJsZS5wdXNoKHVuaXF1ZUlEKTtcblxuICAgIC8vIExpc3QgUmlkZXJcbiAgICBsaXN0UmlkZXIobmV3UmlkZXIpO1xuXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcmlkZXJzWyR7bG9jYWxTdG9yYWdlLnJpZGVyc0xlbmd0aH1dYCwgSlNPTi5zdHJpbmdpZnkobmV3UmlkZXIpKTtcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcmlkZXJzQXZhaWxhYmxlWyR7bG9jYWxTdG9yYWdlLnJpZGVyc0F2YWlsYWJsZUxlbmd0aH1dYCwgSlNPTi5zdHJpbmdpZnkobmV3UmlkZXIpKTtcblxuICAgIC8vIGxvY2FsU3RvcmFnZS5yaWRlcnNMZW5ndGggPSArbG9jYWxTdG9yYWdlLnJpZGVyc0xlbmd0aCArIDE7XG4gICAgLy8gbG9jYWxTdG9yYWdlLnJpZGVyc0F2YWlsYWJsZUxlbmd0aCA9ICtsb2NhbFN0b3JhZ2UucmlkZXJzQXZhaWxhYmxlTGVuZ3RoICsgMTtcblxuICAgIGNvbnNvbGUubG9nKFwicmlkZXJzOlwiKTtcbiAgICBjb25zb2xlLmxvZyhyaWRlcnMpO1xuICAgIGNvbnNvbGUubG9nKFwicmlkZXJzQXZhaWxhYmxlOlwiKTtcbiAgICBjb25zb2xlLmxvZyhyaWRlcnNBdmFpbGFibGUpO1xuICAgIGNvbnNvbGUubG9nKFwicmlkZXJzT25BUmlkZTpcIik7XG4gICAgY29uc29sZS5sb2cocmlkZXJzT25BUmlkZSk7XG4gICAgY29uc29sZS5sb2coXCJyaWRlcnNPbkJyZWFrOlwiKTtcbiAgICBjb25zb2xlLmxvZyhyaWRlcnNPbkJyZWFrKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xufVxuXG5mdW5jdGlvbiBEZWxldGVSaWRlcih1bmlxdWVJRCkge1xuICAgIC8vIEZpbmQgcmlkZXIgdG8gZGVsZXRlIHRocm91Z2ggSURcbiAgICBsZXQgcmlkZXJUb0RlbGV0ZSA9IHJpZGVycy5maW5kKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHIucmlkZXJJRCA9PSB1bmlxdWVJRDtcbiAgICB9KTtcblxuICAgIC8vIFJlbW92ZSByaWRlciBmcm9tIG9uZSBvZiB0aGUgcm90YXRpb24gYXJyYXlzXG4gICAgaWYocmlkZXJUb0RlbGV0ZS5pc09uQVJpZGUoKSkge1xuICAgICAgICByaWRlcnNPbkFSaWRlLnNwbGljZShyaWRlcnNPbkFSaWRlLmluZGV4T2YodW5pcXVlSUQpLCAxKTtcbiAgICB9XG4gICAgZWxzZSBpZihyaWRlclRvRGVsZXRlLmlzT25CcmVhaygpKSB7XG4gICAgICAgIHJpZGVyc09uQnJlYWsuc3BsaWNlKHJpZGVyc09uQnJlYWsuaW5kZXhPZih1bmlxdWVJRCksIDEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmlkZXJzQXZhaWxhYmxlLnNwbGljZShyaWRlcnNBdmFpbGFibGUuaW5kZXhPZih1bmlxdWVJRCksIDEpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBmcm9tIG1haW4gYXJyYXlcbiAgICBsZXQgaW5kZXhUb0RlbGV0ZSA9IHJpZGVycy5pbmRleE9mKHJpZGVyVG9EZWxldGUpO1xuICAgIHJpZGVycy5zcGxpY2UoaW5kZXhUb0RlbGV0ZSwgMSk7XG5cbiAgICBjb25zb2xlLmxvZyhcInJpZGVyczpcIik7XG4gICAgY29uc29sZS5sb2cocmlkZXJzKTtcbiAgICBjb25zb2xlLmxvZyhcInJpZGVyc0F2YWlsYWJsZTpcIik7XG4gICAgY29uc29sZS5sb2cocmlkZXJzQXZhaWxhYmxlKTtcbiAgICBjb25zb2xlLmxvZyhcInJpZGVyc09uQVJpZGU6XCIpO1xuICAgIGNvbnNvbGUubG9nKHJpZGVyc09uQVJpZGUpO1xuICAgIGNvbnNvbGUubG9nKFwicmlkZXJzT25CcmVhazpcIik7XG4gICAgY29uc29sZS5sb2cocmlkZXJzT25CcmVhayk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcblxuICAgIC8vUmVmcmVzaCByb3RhdGlvblxuICAgIHJlZnJlc2hSaWRlclJvdGF0aW9uKCk7XG5cbiAgICAvLyBVcGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiBTdGFydFJpZGUodW5pcXVlSUQpIHtcbiAgICBsZXQgcmlkZXIgPSByaWRlcnMuZmluZChmdW5jdGlvbihyKSB7XG4gICAgICAgIHJldHVybiByLnJpZGVySUQgPT0gdW5pcXVlSUQ7XG4gICAgfSk7XG5cbiAgICBpZihyaWRlci5pc09uQnJlYWsoKSkge1xuXG4gICAgICAgIHJpZGVyLnRvZ2dsZU9uQnJlYWsoKTtcblxuICAgICAgICByaWRlcnNPbkJyZWFrLnNwbGljZShyaWRlcnNPbkJyZWFrLmluZGV4T2YodW5pcXVlSUQpLCAxKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJpZGVyc0F2YWlsYWJsZS5zcGxpY2UocmlkZXJzQXZhaWxhYmxlLmluZGV4T2YodW5pcXVlSUQpLCAxKTtcbiAgICB9XG4gICAgICAgIFxuICAgIHJpZGVyLnRvZ2dsZU9uQVJpZGUoKTtcbiAgICBcbiAgICAvL0luc2VydCByaWRlciBpbiBvbiBhIHJpZGUgYXJyYXlcbiAgICByaWRlcnNPbkFSaWRlLnB1c2godW5pcXVlSUQpO1xuXG4gICAgY29uc29sZS5sb2coXCJyaWRlcnM6XCIpO1xuICAgIGNvbnNvbGUubG9nKHJpZGVycyk7XG4gICAgY29uc29sZS5sb2coXCJyaWRlcnNBdmFpbGFibGU6XCIpO1xuICAgIGNvbnNvbGUubG9nKHJpZGVyc0F2YWlsYWJsZSk7XG4gICAgY29uc29sZS5sb2coXCJyaWRlcnNPbkFSaWRlOlwiKTtcbiAgICBjb25zb2xlLmxvZyhyaWRlcnNPbkFSaWRlKTtcbiAgICBjb25zb2xlLmxvZyhcInJpZGVyc09uQnJlYWs6XCIpO1xuICAgIGNvbnNvbGUubG9nKHJpZGVyc09uQnJlYWspO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG5cbiAgICByZWZyZXNoUmlkZXJSb3RhdGlvbigpO1xuXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIEVuZFJpZGUodW5pcXVlSUQpIHtcbiAgICBsZXQgcmlkZXIgPSByaWRlcnMuZmluZChmdW5jdGlvbihyKSB7XG4gICAgICAgIHJldHVybiByLnJpZGVySUQgPT0gdW5pcXVlSUQ7XG4gICAgfSk7XG5cbiAgICByaWRlci50b2dnbGVPbkFSaWRlKCk7XG5cbiAgICAvLyBSZW1vdmUgcmlkZXIgZnJvbSBPbiBhIHJpZGUgYXJyYXlcbiAgICByaWRlcnNPbkFSaWRlLnNwbGljZShyaWRlcnNPbkFSaWRlLmluZGV4T2YodW5pcXVlSUQpLCAxKTtcblxuICAgIC8vIEluc2VydCByaWRlciBvbiBhdmFpbGFibGUgYXJyYXlcbiAgICByaWRlcnNBdmFpbGFibGUucHVzaCh1bmlxdWVJRCk7XG5cbiAgICBjb25zb2xlLmxvZyhcInJpZGVyczpcIik7XG4gICAgY29uc29sZS5sb2cocmlkZXJzKTtcbiAgICBjb25zb2xlLmxvZyhcInJpZGVyc0F2YWlsYWJsZTpcIik7XG4gICAgY29uc29sZS5sb2cocmlkZXJzQXZhaWxhYmxlKTtcbiAgICBjb25zb2xlLmxvZyhcInJpZGVyc09uQVJpZGU6XCIpO1xuICAgIGNvbnNvbGUubG9nKHJpZGVyc09uQVJpZGUpO1xuICAgIGNvbnNvbGUubG9nKFwicmlkZXJzT25CcmVhazpcIik7XG4gICAgY29uc29sZS5sb2cocmlkZXJzT25CcmVhayk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcblxuICAgIHJlZnJlc2hSaWRlclJvdGF0aW9uKCk7XG5cbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn1cblxuZnVuY3Rpb24gR29PbkJyZWFrKHVuaXF1ZUlEKSB7XG4gICAgbGV0IHJpZGVyID0gcmlkZXJzLmZpbmQoZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gci5yaWRlcklEID09IHVuaXF1ZUlEO1xuICAgIH0pO1xuXG4gICAgaWYoIXJpZGVyLmdldEhhZEJyZWFrKCkpIHtcbiAgICAgICAgaWYocmlkZXIuaXNPbkFSaWRlKCkpIHtcbiAgICAgICAgICAgIHJpZGVyLnRvZ2dsZU9uQVJpZGUoKTtcbiAgICAgICAgICAgIHJpZGVyc09uQVJpZGUuc3BsaWNlKHJpZGVyc09uQVJpZGUuaW5kZXhPZih1bmlxdWVJRCksIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByaWRlcnNBdmFpbGFibGUuc3BsaWNlKHJpZGVyc0F2YWlsYWJsZS5pbmRleE9mKHVuaXF1ZUlEKSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICByaWRlci50b2dnbGVPbkJyZWFrKCk7XG4gICAgXG4gICAgICAgIHJpZGVyc09uQnJlYWsucHVzaCh1bmlxdWVJRCk7XG4gICAgXG4gICAgICAgIHJlZnJlc2hSaWRlclJvdGF0aW9uKCk7XG5cbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHJpZGVyc0F2YWlsYWJsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJpZGVyc09uQVJpZGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhyaWRlcnNPbkJyZWFrKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEVuZEJyZWFrKHVuaXF1ZUlEKSB7XG4gICAgbGV0IHJpZGVyID0gcmlkZXJzLmZpbmQoZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gci5yaWRlcklEID09IHVuaXF1ZUlEO1xuICAgIH0pO1xuXG4gICAgcmlkZXIudG9nZ2xlT25CcmVhaygpO1xuICAgIHJpZGVyc09uQnJlYWsuc3BsaWNlKHJpZGVyc09uQnJlYWsuaW5kZXhPZih1bmlxdWVJRCksIDEpO1xuXG4gICAgcmlkZXJzQXZhaWxhYmxlLnB1c2godW5pcXVlSUQpO1xuICAgIHJlZnJlc2hSaWRlclJvdGF0aW9uKCk7XG5cbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn1cblxuLy8gUmVmcmVzaCBSaWRlciBSb3RhdGlvbiBwYWdlXG5mdW5jdGlvbiByZWZyZXNoUmlkZXJSb3RhdGlvbigpIHtcbiAgICBhdmFpbExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBvbkFSaWRlTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG9uQUJyZWFrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgcmlkZXJzQXZhaWxhYmxlLmZvckVhY2goIGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGxldCByaWRlciA9IHJpZGVycy5maW5kKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgIHJldHVybiByLnJpZGVySUQgPT0gaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0UmlkZXIocmlkZXIpO1xuICAgIH0pO1xuXG4gICAgcmlkZXJzT25BUmlkZS5mb3JFYWNoKCBmdW5jdGlvbihpZCkge1xuICAgICAgICBsZXQgcmlkZXIgPSByaWRlcnMuZmluZChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICByZXR1cm4gci5yaWRlcklEID09IGlkO1xuICAgICAgICB9KTtcbiAgICAgICAgbGlzdFJpZGVyKHJpZGVyKTtcbiAgICB9KTtcblxuICAgIHJpZGVyc09uQnJlYWsuZm9yRWFjaCggZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgbGV0IHJpZGVyID0gcmlkZXJzLmZpbmQoZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgcmV0dXJuIHIucmlkZXJJRCA9PSBpZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGxpc3RSaWRlcihyaWRlcik7XG4gICAgfSk7XG59XG5cbi8vIENyZWF0ZSByaWRlciBsaXN0IGl0ZW1cbmZ1bmN0aW9uIGxpc3RSaWRlcihyaWRlcikge1xuXG4gICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS5pZCA9IGBsaS0ke3JpZGVyLnJpZGVySUR9YDtcblxuICAgIGxldCByaWRlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZGVyQm94LmNsYXNzTGlzdC5hZGQoJ3JpZGVyQm94Jyk7XG5cbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3JpZGVyTmFtZUJveCcpO1xuICAgIHNwYW4uaWQgPSBgbmFtZUJveC0ke3JpZGVyLnJpZGVySUR9YDtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gcmlkZXIubmFtZTtcblxuICAgIHJpZGVyQm94LmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgbGV0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnNDb250YWluZXInKTtcblxuICAgIGlmKHJpZGVyLmlzT25BUmlkZSgpKSB7XG4gICAgICAgIGxldCBiYWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYmFjaycpO1xuICAgICAgICBiYWNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0JhY2snO1xuICAgICAgICBiYWNrQnV0dG9uLmlkID0gYGJyZWFrRW5kLSR7cmlkZXIucmlkZXJJRH1gO1xuXG4gICAgICAgIGxldCBicmVha0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBicmVha0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdicmVhaycpO1xuICAgICAgICBicmVha0J1dHRvbi5pZCA9IGBicmVhay0ke3JpZGVyLnJpZGVySUR9YDtcbiAgICAgICAgaWYocmlkZXIuZ2V0SGFkQnJlYWsoKSlcbiAgICAgICAgICAgIGJyZWFrQnV0dG9uLnN0eWxlLm9wYWNpdHkgPSBcIjAuM1wiO1xuXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pZCA9IGBkZWxldGUtJHtyaWRlci5yaWRlcklEfWA7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5vcmRlciA9ICczJztcblxuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tCdXR0b24pO1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJyZWFrQnV0dG9uKTtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIHJpZGVyQm94LmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChyaWRlckJveCk7XG4gICAgICAgIG9uQVJpZGVMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9XG4gICAgZWxzZSBpZihyaWRlci5pc09uQnJlYWsoKSkge1xuICAgICAgICBsZXQgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3RhcnQnKTtcbiAgICAgICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnR28nO1xuICAgICAgICBzdGFydEJ1dHRvbi5pZCA9IGBzdGFydC0ke3JpZGVyLnJpZGVySUR9YDtcblxuICAgICAgICBsZXQgYmFja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBiYWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JhY2tGcm9tQnJlYWsnKTtcbiAgICAgICAgYmFja0J1dHRvbi50ZXh0Q29udGVudCA9ICdCYWNrJztcbiAgICAgICAgYmFja0J1dHRvbi5pZCA9IGBicmVha0VuZC0ke3JpZGVyLnJpZGVySUR9YDtcblxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBkZWxldGVCdXR0b24uaWQgPSBgZGVsZXRlLSR7cmlkZXIucmlkZXJJRH1gO1xuICAgICAgICBkZWxldGVCdXR0b24uc3R5bGUub3JkZXIgPSAnMyc7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRpbWVyXG4gICAgICAgIGxldCBjb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoJ2JyZWFrVGltZXInKTtcbiAgICAgICAgY291bnRlci5pZCA9IGBicmVha1RpbWVyLSR7cmlkZXIuaWR9YDtcblxuICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB0b3RhbFNlY29uZHNMZWZ0ID0gKHJpZGVyLmdldEJyZWFrRW5kVGltZSgpLmdldFRpbWUoKSAtIHRpbWVOb3cuZ2V0VGltZSgpKSAvIDEwMDA7XG4gICAgICAgIGxldCBzZWNvbmRzTGVmdCA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzTGVmdCAlIDYwKTtcbiAgICAgICAgbGV0IG1pbnV0ZXNMZWZ0ID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHNMZWZ0IC8gNjApO1xuICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gYCR7bWludXRlc0xlZnR9OjAke3NlY29uZHNMZWZ0fWA7XG5cbiAgICAgICAgbGV0IHRpbWVyQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpbWVyQ2lyY2xlLmNsYXNzTGlzdC5hZGQoJ3RpbWVyLWNpcmNsZScpO1xuICAgICAgICB0aW1lckNpcmNsZS5zdHlsZSA9IGAtLWR1cmF0aW9uOiAke3RvdGFsU2Vjb25kc0xlZnR9Oy0tc2l6ZTogMzA7YDtcbiAgICAgICAgbGV0IGNpcmNsZU1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2lyY2xlTWFzay5jbGFzc0xpc3QuYWRkKCdtYXNrJyk7XG5cbiAgICAgICAgbGV0IGludGVydmFsRnVuY3Rpb24gPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKCFyaWRlci5nZXRIYWRCcmVhaygpKVxuICAgICAgICAgICAgICAgIHVwZGF0ZUNvdW50ZG93bihyaWRlcik7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgICBcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja0J1dHRvbik7XG4gICAgICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICByaWRlckJveC5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQocmlkZXJCb3gpO1xuICAgICAgICB0aW1lckNpcmNsZS5hcHBlbmRDaGlsZChjaXJjbGVNYXNrKTtcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGltZXJDaXJjbGUpO1xuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjb3VudGVyKTtcblxuICAgICAgICAvLyBsaXN0SXRlbS5hcHBlbmRDaGlsZChjb3VudGVyKTtcbiAgICAgICAgb25BQnJlYWtMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgICBkZWxldGVCdXR0b24uaWQgPSBgZGVsZXRlLSR7cmlkZXIucmlkZXJJRH1gO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgXG4gICAgICAgIGxldCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdGFydCcpO1xuICAgICAgICBzdGFydEJ1dHRvbi5pZCA9IGBzdGFydC0ke3JpZGVyLnJpZGVySUR9YDtcbiAgICAgICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnR28nO1xuICAgIFxuICAgICAgICBsZXQgYnJlYWtCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnJlYWtCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnJlYWsnKTtcbiAgICAgICAgYnJlYWtCdXR0b24uaWQgPSBgYnJlYWstJHtyaWRlci5yaWRlcklEfWA7XG5cbiAgICAgICAgaWYocmlkZXIuZ2V0SGFkQnJlYWsoKSlcbiAgICAgICAgICAgIGJyZWFrQnV0dG9uLnN0eWxlLm9wYWNpdHkgPSBcIjAuM1wiO1xuICAgIFxuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChicmVha0J1dHRvbik7XG4gICAgICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnN0eWxlLm9yZGVyID0gJzMnO1xuICAgICAgICBcbiAgICAgICAgcmlkZXJCb3guYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XG4gICAgXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHJpZGVyQm94KTtcbiAgICAgICAgXG4gICAgICAgIGF2YWlsTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfVxuICAgIFxufVxuXG4vLyBJbnB1dCBhbmQgZXZlbnQgbGlzdGVuZXJzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKG9iaikge1xuXG4gICAgLy8gU1RBUlQgQnV0dG9uXG4gICAgaWYob2JqLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXJ0JykpIHtcblxuICAgICAgICAvLyBHZXQgUmlkZXIgSUQgZnJvbSBidXR0b24ncyBpZFxuICAgICAgICBsZXQgcmlkZXJJRCA9IG9iai50YXJnZXQuaWQuc3Vic3RyaW5nKG9iai50YXJnZXQuaWQuaW5kZXhPZignLScpICsxKTtcblxuICAgICAgICAvLyBDYWxsIFN0YXJ0IFJpZGUgZnVuY3Rpb25cbiAgICAgICAgU3RhcnRSaWRlKHJpZGVySUQpOyBcbiAgICB9XG4gICAgLy8gRGVsZXRlIEJ1dHRvblxuICAgIGVsc2UgaWYob2JqLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XG5cbiAgICAgICAgLy8gR2V0IFJpZGVyIElEIGZyb20gYnV0dG9uJ3MgaWRcbiAgICAgICAgbGV0IHJpZGVySUQgPSBvYmoudGFyZ2V0LmlkLnN1YnN0cmluZyhvYmoudGFyZ2V0LmlkLmluZGV4T2YoJy0nKSArMSk7XG5cbiAgICAgICAgLy8gQ2FsbCBEZWxldGUgUklkZXIgZnVuY3Rpb25cbiAgICAgICAgRGVsZXRlUmlkZXIocmlkZXJJRCk7XG5cbiAgICB9XG4gICAgLy8gQmFjayBCdXR0b25cbiAgICBlbHNlIGlmKG9iai50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdiYWNrJykpIHtcblxuICAgICAgICAvLyBHZXQgUmlkZXIgSUQgZnJvbSBidXR0b24ncyBpZFxuICAgICAgICBsZXQgcmlkZXJJRCA9IG9iai50YXJnZXQuaWQuc3Vic3RyaW5nKG9iai50YXJnZXQuaWQuaW5kZXhPZignLScpICsxKTtcblxuICAgICAgICAvLyBDYWxsIEVuZCBSaWRlIGZ1bmN0aW9uXG4gICAgICAgIEVuZFJpZGUocmlkZXJJRCk7XG4gICAgfVxuICAgIC8vIEJyZWFrIEJ1dHRvblxuICAgIGVsc2UgaWYob2JqLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2JyZWFrJykpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIEdldCBSaWRlciBJRCBmcm9tIGJ1dHRvbidzIGlkXG4gICAgICAgIGxldCByaWRlcklEID0gb2JqLnRhcmdldC5pZC5zdWJzdHJpbmcob2JqLnRhcmdldC5pZC5pbmRleE9mKCctJykgKzEpO1xuXG4gICAgICAgIC8vIENhbGwgR28gT24gQnJlYWsgZnVuY3Rpb25cbiAgICAgICAgR29PbkJyZWFrKHJpZGVySUQpO1xuICAgIH1cbiAgICAvLyBCYWNrIGZyb20gYnJlYWsgYnV0dG9uXG4gICAgZWxzZSBpZihvYmoudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYmFja0Zyb21CcmVhaycpKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBHZXQgUmlkZXIgSUQgZnJvbSBidXR0b24ncyBpZFxuICAgICAgICBsZXQgcmlkZXJJRCA9IG9iai50YXJnZXQuaWQuc3Vic3RyaW5nKG9iai50YXJnZXQuaWQuaW5kZXhPZignLScpICsxKTtcblxuICAgICAgICAvLyBDYWxsIEVuZCBCcmVhayBmdW5jdGlvblxuICAgICAgICBFbmRCcmVhayhyaWRlcklEKTtcbiAgICB9XG4gICAgLy8gQ2xpY2sgb24gcmlkZXJcbiAgICBlbHNlIGlmKG9iai50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyaWRlck5hbWVCb3gnKSkge1xuXG4gICAgICAgIC8vIEdldCBSaWRlciBJRCBmcm9tIGVsZW1lbnQncyBpZFxuICAgICAgICBsZXQgcmlkZXJJRCA9IG9iai50YXJnZXQuaWQuc3Vic3RyaW5nKG9iai50YXJnZXQuaWQuaW5kZXhPZignLScpICsxKTtcblxuICAgICAgICBsZXQgcmlkZXIgPSByaWRlcnMuZmluZChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICByZXR1cm4gci5yaWRlcklEID09IHJpZGVySUQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCFyaWRlci5hcmVEZXRhaWxzU2hvd2luZygpKSB7XG4gICAgICAgICAgICBsZXQgcmlkZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByaWRlckRldGFpbHMuY2xhc3NMaXN0LmFkZCgncmlkZXJEZXRhaWxzJyk7XG4gICAgICAgICAgICByaWRlckRldGFpbHMudGV4dENvbnRlbnQgPSBgQmlrZSBudW1iZXI6ICR7cmlkZXIuYmlrZX1gO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpLSR7cmlkZXIucmlkZXJJRH1gKS5hcHBlbmRDaGlsZChyaWRlckRldGFpbHMpO1xuICAgICAgICAgICAgcmlkZXIudG9nZ2xlRGV0YWlscygpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlkZXJEZXRhaWxzJykucmVtb3ZlKCk7XG4gICAgICAgICAgICByaWRlci50b2dnbGVEZXRhaWxzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQ2xpY2sgb24gJysnIHNpZ25cbiAgICBlbHNlIGlmKG9iai50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbHVzJykpIHtcblxuICAgICAgICAvLyBDcmVhdGUgY29udGFpbmVyKGJveClcbiAgICAgICAgbGV0IGFkZFJpZGVyQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZFJpZGVyQm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZFJpZGVyQm94Q29udGFpbmVyJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkUmlkZXJCb3hDb250YWluZXIpO1xuXG4gICAgICAgIC8vIFRpdGxlXG4gICAgICAgIGxldCBhZGRSaWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhZGRSaWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJOZXcgUmlkZXI6XCI7XG4gICAgICAgIGFkZFJpZGVyQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFJpZGVyVGl0bGUpO1xuXG4gICAgICAgIC8vIElucHV0IGJveCBmb3IgbmFtZVxuICAgICAgICBsZXQgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXROYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIGlucHV0TmFtZS5wbGFjZWhvbGRlciA9IFwiTmFtZVwiO1xuICAgICAgICBpbnB1dE5hbWUuY2xhc3NMaXN0LmFkZCgnaW5wdXROYW1lJyk7XG4gICAgICAgIGFkZFJpZGVyQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0TmFtZSk7XG5cbiAgICAgICAgLy8gSW5wdXQgYm94IGZvciBiaWtlIG51bWJlclxuICAgICAgICBsZXQgZHJvcERvd25NZW51QmlrZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgZHJvcERvd25NZW51QmlrZXMuaW5uZXJIVE1MID0gYDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5CaWtlPC9vcHRpb24+YDtcbiAgICAgICAgZHJvcERvd25NZW51QmlrZXMuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25CaWtlU2VsZWN0b3InKTtcbiAgICAgICAgZHJvcERvd25NZW51QmlrZXMubmFtZSA9IFwiYmlrZXNcIlxuXG4gICAgICAgIC8vIEluY2x1ZGUgYWxsIGJpa2VzXG4gICAgICAgIGJpa2VzLmZvckVhY2goIGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgICAgIGxldCBiaWtlRm9yU2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBiaWtlRm9yU2VsZWN0aW9uLnRleHRDb250ZW50ID0gYi5udW1iZXI7XG4gICAgICAgICAgICBkcm9wRG93bk1lbnVCaWtlcy5hcHBlbmRDaGlsZChiaWtlRm9yU2VsZWN0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkUmlkZXJCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcERvd25NZW51QmlrZXMpO1xuXG4gICAgICAgIC8vIFN1Ym1pdCBidXR0b25cbiAgICAgICAgbGV0IGFkZFJpZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFJpZGVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgcmlkZXJcIjtcbiAgICAgICAgYWRkUmlkZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFJpZGVyQnV0dG9uXCIpO1xuICAgICAgICBhZGRSaWRlckJveENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRSaWRlckJ1dHRvbik7IFxuXG4gICAgICAgIGlucHV0TmFtZS5mb2N1cygpO1xuXG4gICAgICAgIC8vIENsb3NlIHdpbmRvdyBpZiBjbGlja2VkIG91dHNpZGVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRFbGVtZW50ID0gZXZ0LnRhcmdldDsgLy8gY2xpY2tlZCBlbGVtZW50XG4gICAgICAgIFxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50ID09IGFkZFJpZGVyQm94Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBjbGljayBpbnNpZGUuIERvIG5vdGhpbmcsIGp1c3QgcmV0dXJuLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEdvIHVwIHRoZSBET01cbiAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfSB3aGlsZSAodGFyZ2V0RWxlbWVudCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGNsaWNrIG91dHNpZGUuXG4gICAgICAgICAgICBhZGRSaWRlckJveENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3VibWl0IGlmICdFbnRlcicgaXMgcHJlc3NlZFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRSaWRlckJ1dHRvbicpLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgfSk7XG4gICAgICAgIFxuICAgIH1cbiAgICAvLyBjbGljayBvbiAnQWRkIHJpZGVyJyBidXR0b25cbiAgICBlbHNlIGlmKG9iai50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRSaWRlckJ1dHRvbicpKSB7XG5cbiAgICAgICAgbGV0IGFkZFJpZGVyQm94Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFJpZGVyQm94Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCByaWRlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXROYW1lJykudmFsdWU7XG4gICAgICAgIGxldCBiaWtlTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQmlrZVNlbGVjdG9yJykudmFsdWU7XG5cbiAgICAgICAgaWYocmlkZXJOYW1lICE9ICcnKSB7XG4gICAgICAgICAgICBBZGRSaWRlcihyaWRlck5hbWUsIGJpa2VOdW1iZXIpO1xuICAgICAgICAgICAgYWRkUmlkZXJCb3hDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgYWxlcnQoXCJSaWRlciBuZWVkcyBhIG5hbWUhXCIpO1xuICAgIH1cbn0pO1xuXG5sZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51SWNvbicpO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJtZW51dXVcIik7XG5cbiAgICBsZXQgbWVudUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVCb3guY2xhc3NMaXN0LmFkZCgnbWVudUJveCcpO1xuICAgIFxuXG4gICAgbGV0IGNsb3NlTWVudSA9IG5ldyBJbWFnZSgpO1xuICAgIGNsb3NlTWVudS5zcmMgPSBtZW51WDtcbiAgICBjbG9zZU1lbnUuY2xhc3NMaXN0LmFkZCgnY2xvc2VNZW51Jyk7XG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChjbG9zZU1lbnUpO1xuXG4gICAgbGV0IHJvdGF0aW9uVGFiQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHJvdGF0aW9uVGFiQnV0dG9uLnRleHRDb250ZW50ID0gXCJST1RBVElPTlwiO1xuICAgIHJvdGF0aW9uVGFiQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiJyk7XG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChyb3RhdGlvblRhYkJ1dHRvbik7XG5cbiAgICBcbiAgICBsZXQgcmlkZXJzVGFiQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHJpZGVyc1RhYkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUklERVJTXCI7XG4gICAgcmlkZXJzVGFiQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiJyk7XG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChyaWRlcnNUYWJCdXR0b24pO1xuXG4gICAgbGV0IHJpZGVyc1RhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZGVyc1RhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyaWRlcnMtdGFiLWNvbnRhaW5lcicpO1xuICAgIHJpZGVyc1RhYkJ1dHRvbi5hcHBlbmRDaGlsZChyaWRlcnNUYWJDb250YWluZXIpO1xuXG4gICAgbGV0IGJpa2VzVGFiQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGJpa2VzVGFiQnV0dG9uLnRleHRDb250ZW50ID0gXCJCSUtFU1wiO1xuICAgIGJpa2VzVGFiQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiJyk7XG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChiaWtlc1RhYkJ1dHRvbik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnVCb3gpO1xuXG4gICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgIG1lbnVCb3guY2xhc3NMaXN0LmFkZCgnb3BlbmVkJyk7XG4gICAgfSwgMTApO1xuICAgIFxuICAgIC8vIENsb3NlIE1lbnVcbiAgICBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbWVudUJveC5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtZW51Qm94LnJlbW92ZSgpO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgICBcbiAgICB9KTtcblxuICAgIC8vIE9wZW4gUmlkZXIgUm90YXRpb24gcGFnZVxuICAgIHJvdGF0aW9uVGFiQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgbWVudUJveC5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtZW51Qm94LnJlbW92ZSgpO1xuICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iaWtlc0NvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJykuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlVGl0bGUnKS50ZXh0Q29udGVudCA9IFwiUklERVIgUk9UQVRJT05cIjtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c0JveCcpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgIH0pO1xuXG4gICAgcmlkZXJzVGFiQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCFyaWRlcnNUYWJDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuZWQnKSkge1xuICAgICAgICAgICAgcmlkZXJzVGFiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wZW5lZCcpO1xuXG4gICAgICAgICAgICByaWRlcnMuZm9yRWFjaCggZnVuY3Rpb24ocmlkZXIpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmlkZXJMaXN0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgIHJpZGVyTGlzdGluZy50ZXh0Q29udGVudCA9IHJpZGVyLm5hbWU7XG4gICAgICAgICAgICAgICAgcmlkZXJzVGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZGVyTGlzdGluZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJpZGVyc1RhYkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuZWQnKTtcbiAgICAgICAgICAgIHJpZGVyc1RhYkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KTtcblxuICAgIC8vIE9wZW4gQmlrZXMgcGFnZVxuICAgIGJpa2VzVGFiQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgbWVudUJveC5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtZW51Qm94LnJlbW92ZSgpO1xuICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgIGxvYWRCaWtlc1BhZ2UoKTtcbiAgICB9KTtcbn0pO1xuXG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIHZhciBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIHZhciB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGRvd24ocmlkZXIpIHtcbiAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRvdGFsU2Vjb25kc0xlZnQgPSAocmlkZXIuZ2V0QnJlYWtFbmRUaW1lKCkuZ2V0VGltZSgpIC0gdGltZU5vdy5nZXRUaW1lKCkpIC8gMTAwMDtcbiAgICBsZXQgc2Vjb25kc0xlZnQgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kc0xlZnQgJSA2MCk7XG4gICAgbGV0IG1pbnV0ZXNMZWZ0ID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHNMZWZ0IC8gNjApO1xuICAgIGxldCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2JyZWFrVGltZXItJHtyaWRlci5pZH1gKTtcblxuICAgIGlmKHNlY29uZHNMZWZ0PDEwKVxuICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gYCR7bWludXRlc0xlZnR9OjAke3NlY29uZHNMZWZ0fWA7XG4gICAgZWxzZVxuICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gYCR7bWludXRlc0xlZnR9OiR7c2Vjb25kc0xlZnR9YDtcbiAgICBpZihtaW51dGVzTGVmdCA8PSAxKVxuICAgICAgICBjb3VudGVyLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgXG4gICAgaWYobWludXRlc0xlZnQgPD0gMCAmJiBzZWNvbmRzTGVmdCA8PSAwKSB7XG4gICAgICAgIGFsZXJ0KGAke3JpZGVyLm5hbWV9IGhhcyBmaW5pc2hlZCBoaXMgYnJlYWshYCk7XG4gICAgICAgIEVuZEJyZWFrKHJpZGVyLnJpZGVySUQpO1xuICAgICAgICAvLyBjbGVhckludGVydmFsKGludGVydmFsRnVuY3Rpb24pO1xuICAgIH0gICAgXG59XG5cbi8vIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuLy8gICAgIC8vIFlpcHBlZSEgV2UgY2FuIHVzZSBsb2NhbFN0b3JhZ2UgYXdlc29tZW5lc3Ncbi8vICAgICBjb25zb2xlLmxvZygneWVzJyk7XG4vLyAgIH1cbi8vICAgZWxzZSB7XG4vLyAgICAgLy8gVG9vIGJhZCwgbm8gbG9jYWxTdG9yYWdlIGZvciB1c1xuLy8gICAgIGNvbnNvbGUubG9nKCdubycpO1xuLy8gICB9XG5cbmV4cG9ydCB7IHJpZGVycywgcmlkZXJzQXZhaWxhYmxlLCByaWRlcnNPbkFSaWRlLCByaWRlcnNPbkJyZWFrIH07IiwiaW1wb3J0IHsgcmlkZXJzLCByaWRlcnNBdmFpbGFibGUsIHJpZGVyc09uQVJpZGUsIHJpZGVyc09uQnJlYWsgfSBmcm9tICcuL2luZGV4JztcblxuZnVuY3Rpb24gaW1wb3J0UmlkZXIoaW5kZXgpIHtcblxuICAgIGxldCBpbXBvcnRlZE9iamVjdD0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgcmlkZXJzWyR7aW5kZXh9XWApKTtcbiAgICBcbiAgICByZXR1cm4gaW1wb3J0ZWRPYmplY3Q7XG59XG5cbi8vIFVwZGF0ZSBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoKSB7XG5cbiAgICAvLyBDbGVhciBsb2NhbCBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbiAgICAvLyBTYXZlIHJpZGVycyBhcnJheSBhbmQgbGVuZ3RoIG9mIGFycmF5XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyaWRlcnNMZW5ndGhcIiwgcmlkZXJzLmxlbmd0aCk7XG5cbiAgICByaWRlcnMuZm9yRWFjaCggZnVuY3Rpb24ocmlkZXIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHJpZGVyc1ske3JpZGVycy5pbmRleE9mKHJpZGVyKX1dYCwgSlNPTi5zdHJpbmdpZnkocmlkZXIpKTtcbiAgICB9KTtcblxuICAgIC8vIFNhdmUgcmlkZXJzIGF2YWlsYWJsZSBhcnJheSBhbmQgbGVuZ3RoIG9mIGFycmF5XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyaWRlcnNBdmFpbGFibGVMZW5ndGhcIiwgcmlkZXJzQXZhaWxhYmxlLmxlbmd0aCk7XG5cbiAgICByaWRlcnNBdmFpbGFibGUuZm9yRWFjaCggZnVuY3Rpb24ocmlkZXJJRCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcmlkZXJzQXZhaWxhYmxlWyR7cmlkZXJzQXZhaWxhYmxlLmluZGV4T2YocmlkZXJJRCl9XWAsIHJpZGVySUQpO1xuICAgIH0pO1xuXG4gICAgLy8gU2F2ZSByaWRlcnMgb24gYSByaWRlIGFycmF5IGFuZCBsZW5ndGggb2YgYXJyYXlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJpZGVyc09uQVJpZGVMZW5ndGhcIiwgcmlkZXJzT25BUmlkZS5sZW5ndGgpO1xuXG4gICAgcmlkZXJzT25BUmlkZS5mb3JFYWNoKCBmdW5jdGlvbihyaWRlcklEKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGByaWRlcnNPbkFSaWRlWyR7cmlkZXJzT25BUmlkZS5pbmRleE9mKHJpZGVySUQpfV1gLCByaWRlcklEKTtcbiAgICB9KTtcblxuICAgIC8vIFNhdmUgcmlkZXJzIG9uIGJyZWFrIGFycmF5IGFuZCBsZW5ndGggb2YgYXJyYXlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJpZGVyc09uQnJlYWtMZW5ndGhcIiwgcmlkZXJzT25CcmVhay5sZW5ndGgpO1xuXG4gICAgcmlkZXJzT25CcmVhay5mb3JFYWNoKCBmdW5jdGlvbihyaWRlcklEKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGByaWRlcnNPbkJyZWFrWyR7cmlkZXJzT25CcmVhay5pbmRleE9mKHJpZGVySUQpfV1gLCByaWRlcklEKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgaW1wb3J0UmlkZXIsIHVwZGF0ZUxvY2FsU3RvcmFnZSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==