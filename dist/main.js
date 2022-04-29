"use strict";
(self["webpackChunkrider_rotation"] = self["webpackChunkrider_rotation"] || []).push([["main"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Roboto Flex';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 100 1000;\nfont-stretch: 25% 151%;\n}\n\n@font-face {\n  font-family: 'Object Sans';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 100 1000;\nfont-stretch: 25% 151%;\n}\n\n@font-face {\n  font-family: 'Object Sans Bold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 100 1000;\n  font-stretch: 25% 151%;\n}\n\n:root {\n  --fs-big: clamp(1.4rem, 1.8vw, 8rem);\n  --fs-normal: clamp(1.2rem, 1.4vw, 5rem);\n  --fs-small: clamp(1rem, 1vw, 3rem);\n}\n\n*, *:before, *::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {  \n  margin: 0;\n  padding: 0;\n  font-family: 'Object Sans';\n  box-sizing: border-box;\n  background-color: white;\n}\n\nheader {\n  padding-top: 2vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1vw;\n  margin-left: 1vw;\n}\n\nli a {\n  text-decoration: none;\n}\n\nbody {\n  display: flex;\n  background-color: rgba(246, 245, 245, 1);\n}\n\n.menu {\n  width: 15vw;\n  min-height: 100vh;\n  border-top-right-radius: 1vw;\n  background-color: white;\n}\n\n.logoContainer {\n  display: grid;\n  place-items: center;\n  padding: 1em;\n}\n\n.logoContainer > img {\n  width: 100%;\n}\n\n.menu > ul {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  margin-top: 1em;\n  gap: .8em;\n  max-height: 500px;\n}\n\n.menu > ul > li {\n  flex-shrink: 0;\n}\n\n#ridersButtonListItem {\n  flex: 1 0 auto;\n}\n\n.navLink {\n  color: rgba(88, 88, 88, 1);\n  font-size: var(--fs-big);\n  cursor: pointer;\n  margin-left: 1em;\n}\n\n.logo {\n  margin-left: 10px;\n}\n\n.navListContainer {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  max-height: 64vh;\n  max-width: 100%;\n  background-color: rgba(246, 245, 245, 1);\n  margin: .3em .6em;\n  border-radius: 8px;\n  overflow-x: hidden;\n}\n\n.navListContainer > a {\n  margin: 0;\n  padding: .4em;\n  border-bottom: 1px solid rgba(234, 234, 234, 1);\n  font-size: var(--fs-small);\n  max-width: 10em;\n}\n\n.main {\n  display: grid;\n  grid-template-rows: 12vh 1fr;\n  width: 85vw;\n}\n\n.pageTitle {\n  font-family: 'Object Sans';\n}\n\n.addNewButton{\n  display: flex;\n  font-size: 50px;\n  cursor: pointer;\n  width: 3em;\n  height: 1em;\n  background-color: rgba(80, 160, 255, 1);\n  border-radius: .2em;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 .3em;\n}\n\n.addNewButton > div {\n  color: white;\n  font-size: var(--fs-normal);\n  margin-top: 3px;\n}\n\n.plus {\n  width: 14px;\n  height: 14px;\n}\n\n.contentRotation {\n  display: grid;\n  justify-content: end;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 5fr 1fr;\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 1vw 1vw 2vw;\n  gap: 1vw;\n}\n\n.contentRotation > div {\n  background-color: white;\n  border-radius: 1vw;\n  padding: 2vw 1vw;\n}\n\n#onABreakSection {\n  grid-column: 1 / 3;\n}\n\n.contentRotation > div > p {\n  text-align: center;\n  font-size: 22px;\n}\n\n.rotationList {\n  margin: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  /* align-items: center; */\n  border-radius: 10px;\n  max-width: 50vw;\n}\n\n.rotationList > li {\n  margin: 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  background-color: rgb(245, 243, 243);\n  border-radius: 6px;\n  list-style-type: none;\n  cursor: pointer;\n  height: 100%;\n  padding:  6px 6px 2px 6px;\n  font-size: 1.4rem;\n}\n\n.riderBox {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  /* padding: 5px; */\n}\n\n.riderDetails {\n  /* padding: 5px; */\n}\n\n.buttonsContainer {\n  display: flex;\n  justify-content: flex-end;\n  padding-left: 20px;\n}\n\n.buttonsContainer > button {\n  padding: 2px 5px;\n  margin: 0;\n  border: transparent;\n  background-color: rgb(245, 243, 243);\n  cursor: pointer;\n}\n\n.break {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 15px 15px;\n  width: 15px;\n  height: 15px;\n  align-self: baseline;\n}\n\n.addRiderBoxContainer {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: white;\n  border: 10px solid black;\n  top: calc(50vh - 100px);\n  left: 50%;\n  min-height: 200px;\n  width: 300px;\n  margin-left: -150px;\n  box-shadow: 4px 4px 12px 0px grey;\n}\n\n.addRiderBoxContainer > button {\n  background-color: white;\n  padding: 5px 20px;\n  border: 1px solid black;\n}\n\n.dropdownBikeSelector {\n  width: 150px;\n}\n\n.bikeVisibleInfo {\n  display: grid;\n  grid-template-columns: 100px 150px auto auto;\n  padding-top: 10px;\n  padding-left: 10px;\n  border-bottom: 1px solid #cbcbcb;\n  align-content: center;\n}\n.bikeEditButton {\n  width: 80px;\n  justify-self: end;\n}\n\n.bikesContainer {\n  margin: 20px 30px;\n}\n\n.menu-tab {\n  font-size: 2.2rem;\n  margin-left: .5rem;\n  padding-top: 6px;\n}\n\n.breakTimer {\n  position: relative;\n  top: -19px;\n  font-size: .7rem;\n}\n\n.timer-circle {\n  background: -webkit-linear-gradient(left, skyBlue 50%, #eee 50%);\n  border-radius: 100%;\n  height: calc(var(--size) * 1px);\n  width: calc(var(--size) * 1px);\n  position: relative;\n  -webkit-animation: time calc(var(--duration) * 1s) steps(1000, start) infinite;\n    -webkit-mask: radial-gradient(transparent 50%,#000 50%);\n    mask: radial-gradient(transparent 50%,#000 50%);\n}\n.mask {\n  border-radius: 100% 0 0 100% / 50% 0 0 50%;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 50%;\n  -webkit-animation: mask calc(var(--duration) * 1s) steps(500, start) infinite;\n  -webkit-transform-origin: 100% 50%;\n}\n@-webkit-keyframes time {\n  100% {\n      -webkit-transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes mask {\n  0% {\n      background: #eee;\n      -webkit-transform: rotate(0deg);\n  }\n  50% {\n      background: #eee;\n      -webkit-transform: rotate(-180deg);\n  }\n  50.01% {\n      background: skyBlue;\n      -webkit-transform: rotate(0deg);\n  }\n  100% {\n      background: skyBlue;\n      -webkit-transform: rotate(-180deg);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Roboto Flex';\n  src: url('fonts/RobotoFlex[GRAD\\,XOPQ\\,XTRA\\,YOPQ\\,YTAS\\,YTDE\\,YTFI\\,YTLC\\,YTUC\\,opsz\\,slnt\\,wdth\\,wght].ttf');\n  font-weight: 100 1000;\nfont-stretch: 25% 151%;\n}\n\n@font-face {\n  font-family: 'Object Sans';\n  src: url('fonts/ObjectSans-Regular.woff2');\n  font-weight: 100 1000;\nfont-stretch: 25% 151%;\n}\n\n@font-face {\n  font-family: 'Object Sans Bold';\n  src: url('fonts/ObjectSans-Bold.woff2');\n  font-weight: 100 1000;\n  font-stretch: 25% 151%;\n}\n\n:root {\n  --fs-big: clamp(1.4rem, 1.8vw, 8rem);\n  --fs-normal: clamp(1.2rem, 1.4vw, 5rem);\n  --fs-small: clamp(1rem, 1vw, 3rem);\n}\n\n*, *:before, *::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {  \n  margin: 0;\n  padding: 0;\n  font-family: 'Object Sans';\n  box-sizing: border-box;\n  background-color: white;\n}\n\nheader {\n  padding-top: 2vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1vw;\n  margin-left: 1vw;\n}\n\nli a {\n  text-decoration: none;\n}\n\nbody {\n  display: flex;\n  background-color: rgba(246, 245, 245, 1);\n}\n\n.menu {\n  width: 15vw;\n  min-height: 100vh;\n  border-top-right-radius: 1vw;\n  background-color: white;\n}\n\n.logoContainer {\n  display: grid;\n  place-items: center;\n  padding: 1em;\n}\n\n.logoContainer > img {\n  width: 100%;\n}\n\n.menu > ul {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  margin-top: 1em;\n  gap: .8em;\n  max-height: 500px;\n}\n\n.menu > ul > li {\n  flex-shrink: 0;\n}\n\n#ridersButtonListItem {\n  flex: 1 0 auto;\n}\n\n.navLink {\n  color: rgba(88, 88, 88, 1);\n  font-size: var(--fs-big);\n  cursor: pointer;\n  margin-left: 1em;\n}\n\n.logo {\n  margin-left: 10px;\n}\n\n.navListContainer {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  max-height: 64vh;\n  max-width: 100%;\n  background-color: rgba(246, 245, 245, 1);\n  margin: .3em .6em;\n  border-radius: 8px;\n  overflow-x: hidden;\n}\n\n.navListContainer > a {\n  margin: 0;\n  padding: .4em;\n  border-bottom: 1px solid rgba(234, 234, 234, 1);\n  font-size: var(--fs-small);\n  max-width: 10em;\n}\n\n.main {\n  display: grid;\n  grid-template-rows: 12vh 1fr;\n  width: 85vw;\n}\n\n.pageTitle {\n  font-family: 'Object Sans';\n}\n\n.addNewButton{\n  display: flex;\n  font-size: 50px;\n  cursor: pointer;\n  width: 3em;\n  height: 1em;\n  background-color: rgba(80, 160, 255, 1);\n  border-radius: .2em;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 .3em;\n}\n\n.addNewButton > div {\n  color: white;\n  font-size: var(--fs-normal);\n  margin-top: 3px;\n}\n\n.plus {\n  width: 14px;\n  height: 14px;\n}\n\n.contentRotation {\n  display: grid;\n  justify-content: end;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 5fr 1fr;\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 1vw 1vw 2vw;\n  gap: 1vw;\n}\n\n.contentRotation > div {\n  background-color: white;\n  border-radius: 1vw;\n  padding: 2vw 1vw;\n}\n\n#onABreakSection {\n  grid-column: 1 / 3;\n}\n\n.contentRotation > div > p {\n  text-align: center;\n  font-size: 22px;\n}\n\n.rotationList {\n  margin: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  /* align-items: center; */\n  border-radius: 10px;\n  max-width: 50vw;\n}\n\n.rotationList > li {\n  margin: 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  background-color: rgb(245, 243, 243);\n  border-radius: 6px;\n  list-style-type: none;\n  cursor: pointer;\n  height: 100%;\n  padding:  6px 6px 2px 6px;\n  font-size: 1.4rem;\n}\n\n.riderBox {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  /* padding: 5px; */\n}\n\n.riderDetails {\n  /* padding: 5px; */\n}\n\n.buttonsContainer {\n  display: flex;\n  justify-content: flex-end;\n  padding-left: 20px;\n}\n\n.buttonsContainer > button {\n  padding: 2px 5px;\n  margin: 0;\n  border: transparent;\n  background-color: rgb(245, 243, 243);\n  cursor: pointer;\n}\n\n.break {\n  background-image: url(images/break-icon.svg);\n  background-size: 15px 15px;\n  width: 15px;\n  height: 15px;\n  align-self: baseline;\n}\n\n.addRiderBoxContainer {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: white;\n  border: 10px solid black;\n  top: calc(50vh - 100px);\n  left: 50%;\n  min-height: 200px;\n  width: 300px;\n  margin-left: -150px;\n  box-shadow: 4px 4px 12px 0px grey;\n}\n\n.addRiderBoxContainer > button {\n  background-color: white;\n  padding: 5px 20px;\n  border: 1px solid black;\n}\n\n.dropdownBikeSelector {\n  width: 150px;\n}\n\n.bikeVisibleInfo {\n  display: grid;\n  grid-template-columns: 100px 150px auto auto;\n  padding-top: 10px;\n  padding-left: 10px;\n  border-bottom: 1px solid #cbcbcb;\n  align-content: center;\n}\n.bikeEditButton {\n  width: 80px;\n  justify-self: end;\n}\n\n.bikesContainer {\n  margin: 20px 30px;\n}\n\n.menu-tab {\n  font-size: 2.2rem;\n  margin-left: .5rem;\n  padding-top: 6px;\n}\n\n.breakTimer {\n  position: relative;\n  top: -19px;\n  font-size: .7rem;\n}\n\n.timer-circle {\n  background: -webkit-linear-gradient(left, skyBlue 50%, #eee 50%);\n  border-radius: 100%;\n  height: calc(var(--size) * 1px);\n  width: calc(var(--size) * 1px);\n  position: relative;\n  -webkit-animation: time calc(var(--duration) * 1s) steps(1000, start) infinite;\n    -webkit-mask: radial-gradient(transparent 50%,#000 50%);\n    mask: radial-gradient(transparent 50%,#000 50%);\n}\n.mask {\n  border-radius: 100% 0 0 100% / 50% 0 0 50%;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 50%;\n  -webkit-animation: mask calc(var(--duration) * 1s) steps(500, start) infinite;\n  -webkit-transform-origin: 100% 50%;\n}\n@-webkit-keyframes time {\n  100% {\n      -webkit-transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes mask {\n  0% {\n      background: #eee;\n      -webkit-transform: rotate(0deg);\n  }\n  50% {\n      background: #eee;\n      -webkit-transform: rotate(-180deg);\n  }\n  50.01% {\n      background: skyBlue;\n      -webkit-transform: rotate(0deg);\n  }\n  100% {\n      background: skyBlue;\n      -webkit-transform: rotate(-180deg);\n  }\n}"],"sourceRoot":""}]);
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
    if (bikeStatus == "Out of Action") {
      bikeStatus = "In Action";
    } else {
      bikeStatus = "Out of Action";
    }
  };

  const toggleDetails = () => {
    if (detailsShowing) {
      detailsShowing = false;
    } else {
      detailsShowing = true;
    }
  };

  const changeDetails = (newDetails) => {
    details = newDetails;
  };

  return {
    number,
    model,
    getStatus,
    toggleStatus,
    toggleDetails,
    changeDetails,
    areDetailsShowing,
  };
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

bikes.push(
  M900,
  Z895456,
  Z895488,
  Z895490,
  Z895493,
  Z896360,
  Z896699,
  Z897530,
  Z897531,
  Z897556,
  Z897643,
  Z897677,
  Z897798,
  Z897832,
  Z898055,
  Z898202,
  Z898242,
  Z898281,
  Z898477,
  Z899317
);

function loadBikesPage() {
  document.querySelector(".pageTitle").textContent = "BIKES";
  document.querySelector(".content").remove();
  listAllBikes();
}

// List bike info
function listAllBikes() {
  let content = document.createElement("div");
  content.classList.add("contentBikes", "content");
  document.querySelector(".main").appendChild(content);

  const list = document.createElement("ul");

  bikes.forEach((bike) => {
    const listItem = document.createElement("li");
    listItem.textContent = bike.number;
    list.appendChild(listItem);
  });

  content.appendChild(list);
}

// Sort bikes by status (In action on top)
function sortBikesByStatus(bikesArray) {
  let bikesSorted = bikes.sort(function (a, b) {
    if (a.getStatus() < b.getStatus()) {
      return -1;
    }
    if (a.getStatus() > b.getStatus()) {
      return 1;
    }
    return 0;
  });
}

// Show details of the bike
function openBikeDetails(bike) {
  let bikeInfoBox = document.querySelector(`#bikeInfoBox-${bike.number}`);
  let editDetails = document.createElement("div");
  editDetails.classList.add("editDetails");
  let changeStatusButton = document.createElement("button");
  changeStatusButton.textContent = "Change status";
  let detailsBox = document.createElement("input");
  detailsBox.placeholder = "more details...";

  editDetails.appendChild(changeStatusButton);
  editDetails.appendChild(detailsBox);
  bikeInfoBox.appendChild(editDetails);

  changeStatusButton.addEventListener("click", function () {
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _images_logo_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo.jpeg */ "./src/images/logo.jpeg");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _riders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./riders */ "./src/scripts/riders.js");
/* harmony import */ var _bikes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bikes */ "./src/scripts/bikes.js");
/* harmony import */ var _rotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rotation */ "./src/scripts/rotation.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage */ "./src/scripts/storage.js");








//#region MENU

// Menu variables
let ridersTabOpen = false;
let bikesTabOpen = false;
let currentPage = "Bikes";

// Insert logo
const logo = new Image();
logo.src = _images_logo_jpeg__WEBPACK_IMPORTED_MODULE_1__;

document.querySelector(".logoContainer").appendChild(logo);

let rotationTabButton = document.querySelector("#rotationButton");
let ridersTabButton = document.querySelector("#ridersButton");
let bikesTabButton = document.querySelector("#bikesButton");

// Open Rider Rotation page
rotationTabButton.addEventListener("click", function () {
  (0,_rotation__WEBPACK_IMPORTED_MODULE_5__.loadRotationPage)();
  _riders__WEBPACK_IMPORTED_MODULE_3__.riders.forEach((rider) => (0,_rotation__WEBPACK_IMPORTED_MODULE_5__.addRiderToRotation)(rider.riderID));
});

// Open Riders Page
const ridersTabContainer = document.createElement("div");

ridersTabButton.addEventListener("click", function () {
  if (!ridersTabOpen) {
    ridersTabButton.appendChild(ridersTabContainer);
    ridersTabContainer.classList.add("navListContainer");
    let seeAllRidersButton = document.createElement("a");
    seeAllRidersButton.textContent = "All Riders";
    seeAllRidersButton.style = "text-align: center";
    seeAllRidersButton.addEventListener("click", () => {
      (0,_riders__WEBPACK_IMPORTED_MODULE_3__.loadRidersPage)();
    }); // Open riders page
    ridersTabContainer.appendChild(seeAllRidersButton);
    _riders__WEBPACK_IMPORTED_MODULE_3__.riders.forEach(function (rider) {
      let riderListing = document.createElement("a");
      riderListing.textContent = rider.name;
      ridersTabContainer.appendChild(riderListing);
    });
    ridersTabOpen = true;
  } else {
    ridersTabContainer.innerHTML = "";
    ridersTabContainer.remove();
    ridersTabOpen = false;
  }
});

// Open Bikes page
let bikesTabContainer = document.createElement("div");

bikesTabButton.addEventListener("click", function () {
  if (!bikesTabOpen) {
    bikesTabButton.appendChild(bikesTabContainer);
    bikesTabContainer.classList.add("navListContainer");
    let seeAllBikesButton = document.createElement("a");
    seeAllBikesButton.textContent = "All Bikes";
    seeAllBikesButton.style = "text-align: center";
    seeAllBikesButton.addEventListener("click", () => {
      (0,_bikes__WEBPACK_IMPORTED_MODULE_4__.loadBikesPage)();
    }); // Open bikes page
    bikesTabContainer.appendChild(seeAllBikesButton);
    _bikes__WEBPACK_IMPORTED_MODULE_4__.bikes.forEach((bike) => {
      let bikeListing = document.createElement("a");
      bikeListing.textContent = bike.number;
      bikesTabContainer.appendChild(bikeListing);
    });
    bikesTabOpen = true;
  } else {
    bikesTabContainer.innerHTML = "";
    bikesTabContainer.remove();
    bikesTabOpen = false;
  }
});

//#endregion MENU

// Insert plus sign
const plus = new Image();
plus.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_2__;
plus.classList.add("plus");

const addNewButton = document.querySelector(".addNewButton");
addNewButton.appendChild(plus);
const addNewButtonLabel = document.createElement("div");
addNewButtonLabel.textContent = "Add New";
addNewButton.appendChild(addNewButtonLabel);

if (currentPage === "Rotation") {
  // const availList = document.getElementById("available");
  // const onARideList = document.getElementById("onARide");
  // const onABreakList = document.getElementById("onABreak");

  _riders__WEBPACK_IMPORTED_MODULE_3__.riders.forEach((rider) => (0,_rotation__WEBPACK_IMPORTED_MODULE_5__.addRiderToRotation)(rider.riderID));
} else if (currentPage === "Riders") {
  (0,_riders__WEBPACK_IMPORTED_MODULE_3__.loadRidersPage)();
} else if (currentPage === "Bikes") {
  (0,_bikes__WEBPACK_IMPORTED_MODULE_4__.loadBikesPage)();
}

// localStorage.clear();

// Retrieve info from localstorage
// for (let i = 0; i < localStorage.getItem("ridersLength"); i++) {
//   let importedObject = importRider(i);

//   let importedRider = Rider(
//     importedObject.name,
//     importedObject.bike,
//     importedObject.riderID
//   );

//   riders.push(importedRider);
//   ridersAvailable.push(importedRider.riderID);
//   listRider(importedRider);
// }

// Input and event listeners
document.addEventListener("click", function (obj) {
  // START Button
  if (obj.target.classList.contains("start")) {
    // Get Rider ID from button's id
    let riderID = obj.target.id.substring(obj.target.id.indexOf("-") + 1);

    console.log("start ride " + riderID);

    // Call Start Ride function
    (0,_rotation__WEBPACK_IMPORTED_MODULE_5__.StartRide)(riderID);
  }
  // Delete Button
  else if (obj.target.classList.contains("delete")) {
    // Get Rider ID from button's id
    let riderID = obj.target.id.substring(obj.target.id.indexOf("-") + 1);

    // Call Delete RIder function
    (0,_rotation__WEBPACK_IMPORTED_MODULE_5__.DeleteRider)(riderID);
  }
  // Back Button
  else if (obj.target.classList.contains("back")) {
    // Get Rider ID from button's id
    let riderID = obj.target.id.substring(obj.target.id.indexOf("-") + 1);

    // Call End Ride function
    (0,_rotation__WEBPACK_IMPORTED_MODULE_5__.EndRide)(riderID);
  }
  // Break Button
  else if (obj.target.classList.contains("break")) {
    // Get Rider ID from button's id
    let riderID = obj.target.id.substring(obj.target.id.indexOf("-") + 1);

    // Call Go On Break function
    (0,_rotation__WEBPACK_IMPORTED_MODULE_5__.GoOnBreak)(riderID);
  }
  // Back from break button
  else if (obj.target.classList.contains("backFromBreak")) {
    // Get Rider ID from button's id
    let riderID = obj.target.id.substring(obj.target.id.indexOf("-") + 1);

    // Call End Break function
    (0,_rotation__WEBPACK_IMPORTED_MODULE_5__.EndBreak)(riderID);
  }
  // Click on rider
  else if (obj.target.classList.contains("riderNameBox")) {
    // Get Rider ID from element's id
    let riderID = obj.target.id.substring(obj.target.id.indexOf("-") + 1);

    let rider = _riders__WEBPACK_IMPORTED_MODULE_3__.riders.find(function (r) {
      return r.riderID == riderID;
    });

    if (!rider.areDetailsShowing()) {
      let riderDetails = document.createElement("div");
      riderDetails.classList.add("riderDetails");
      riderDetails.textContent = `Bike number: ${rider.bike}`;
      document.querySelector(`#li-${rider.riderID}`).appendChild(riderDetails);
      rider.toggleDetails();
    } else {
      document.querySelector(".riderDetails").remove();
      rider.toggleDetails();
    }
  }
  // Click on '+' sign
  else if (obj.target.classList.contains("plus")) {
    // Create container(box)
    let addRiderBoxContainer = document.createElement("div");
    addRiderBoxContainer.classList.add("addRiderBoxContainer");
    document.body.appendChild(addRiderBoxContainer);

    // Title
    let addRiderTitle = document.createElement("p");
    addRiderTitle.textContent = "New Rider:";
    addRiderBoxContainer.appendChild(addRiderTitle);

    // Input box for name
    let inputName = document.createElement("input");
    inputName.type = "text";
    inputName.placeholder = "Name";
    inputName.classList.add("inputName");
    addRiderBoxContainer.appendChild(inputName);

    // Input box for bike number
    let dropDownMenuBikes = document.createElement("select");
    dropDownMenuBikes.innerHTML = `<option value="" disabled selected>Bike</option>`;
    dropDownMenuBikes.classList.add("dropdownBikeSelector");
    dropDownMenuBikes.name = "bikes";

    // Include all bikes
    _bikes__WEBPACK_IMPORTED_MODULE_4__.bikes.forEach(function (b) {
      let bikeForSelection = document.createElement("option");
      bikeForSelection.textContent = b.number;
      dropDownMenuBikes.appendChild(bikeForSelection);
    });

    addRiderBoxContainer.appendChild(dropDownMenuBikes);

    // Submit button
    let addRiderButton = document.createElement("button");
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
    document.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector(".addRiderButton").click();
      }
    });
  }
  // click on 'Add rider' button
  else if (obj.target.classList.contains("addRiderButton")) {
    let addRiderBoxContainer = document.querySelector(".addRiderBoxContainer");
    let riderName = document.querySelector(".inputName").value;
    let bikeNumber = document.querySelector(".dropdownBikeSelector").value;

    if (riderName != "") {
      AddRider(riderName, bikeNumber);
      addRiderBoxContainer.remove();
    } else alert("Rider needs a name!");
  }
});

// });

// function storageAvailable(type) {
//     var storage;
//     try {
//         storage = window[type];
//         var x = '__storage_test__';
//         storage.setItem(x, x);
//         storage.removeItem(x);
//         return true;
//     }
//     catch(e) {
//         return e instanceof DOMException && (
//             // everything except Firefox
//             e.code === 22 ||
//             // Firefox
//             e.code === 1014 ||
//             // test name field too, because code might not be present
//             // everything except Firefox
//             e.name === 'QuotaExceededError' ||
//             // Firefox
//             e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//             // acknowledge QuotaExceededError only if there's something already stored
//             (storage && storage.length !== 0);
//     }
// }

// if (storageAvailable('localStorage')) {
//     // Yippee! We can use localStorage awesomeness
//     console.log('yes');
//   }
//   else {
//     // Too bad, no localStorage for us
//     console.log('no');
//   }


/***/ }),

/***/ "./src/scripts/riders.js":
/*!*******************************!*\
  !*** ./src/scripts/riders.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "riders": () => (/* binding */ riders),
/* harmony export */   "createRider": () => (/* binding */ createRider),
/* harmony export */   "deleteRider": () => (/* binding */ deleteRider),
/* harmony export */   "importRiders": () => (/* binding */ importRiders),
/* harmony export */   "updateDatabase": () => (/* binding */ updateDatabase),
/* harmony export */   "loadRidersPage": () => (/* binding */ loadRidersPage)
/* harmony export */ });
// Rider Factory Function
const Rider = (name, riderID) => {
  let onARide = false;
  let onBreak = false;
  //   let bike = bikeNumber;
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
    if (onARide) {
      onARide = false;
    } else {
      onARide = true;
    }
  };
  const toggleOnBreak = () => {
    if (onBreak) {
      onBreak = false;
      hadBreak = true;
    } else if (!hadBreak) {
      onBreak = true;
      let now = new Date();
      setBreakEndTime(now);
    }
  };
  const toggleDetails = () => {
    if (detailsShowing) {
      detailsShowing = false;
    } else {
      detailsShowing = true;
    }
  };
  const setBreakEndTime = (time) => {
    breakStartTime = time;
    breakEndTime = time;
    breakEndTime.setMinutes(breakStartTime.getMinutes() + 30);
    // breakEndTime.setSeconds(breakStartTime.getSeconds() + 60);
  };
  return {
    name,
    riderID,
    isOnARide,
    isOnBreak,
    areDetailsShowing,
    getBreakEndTime,
    getHadBreak,
    toggleOnARide,
    toggleOnBreak,
    toggleDetails,
  };
};

// Array with all the Rider Objects
let riders = [];

// fake data
const joao = Rider("000", 0);
const joaoss = Rider("111", 1);
const jon = Rider("222", 2);

riders.push(joao, joaoss, jon);

function createRider(riderName) {
  let uniqueID = 1;
  if (riders.length > 0) uniqueID = +riders[riders.length - 1].riderID + 1;

  uniqueID = uniqueID.toString();
  const newRider = Rider(riderName, uniqueID);
  riders.push(newRider);

  // Add rider to database.
}

function deleteRider(riderID) {}

function importRiders() {
  // import from database and add it to riders.
}

function updateDatabase() {
  //update database with the riders on the riders array.
}

function listAllRiders() {
  let content = document.createElement("div");
  content.classList.add("contentRiders", "content");
  document.querySelector(".main").appendChild(content);

  const list = document.createElement("ul");

  riders.forEach((rider) => {
    const listItem = document.createElement("li");
    listItem.textContent = rider.name;
    list.appendChild(listItem);
  });

  content.appendChild(list);
}

function loadRidersPage() {
  document.querySelector(".pageTitle").textContent = "RIDERS";
  document.querySelector(".content").remove();
  listAllRiders();
}




/***/ }),

/***/ "./src/scripts/rotation.js":
/*!*********************************!*\
  !*** ./src/scripts/rotation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadRotationPage": () => (/* binding */ loadRotationPage),
/* harmony export */   "ridersAvailable": () => (/* binding */ ridersAvailable),
/* harmony export */   "ridersOnARide": () => (/* binding */ ridersOnARide),
/* harmony export */   "ridersOnBreak": () => (/* binding */ ridersOnBreak),
/* harmony export */   "addRiderToRotation": () => (/* binding */ addRiderToRotation),
/* harmony export */   "StartRide": () => (/* binding */ StartRide),
/* harmony export */   "EndRide": () => (/* binding */ EndRide),
/* harmony export */   "GoOnBreak": () => (/* binding */ GoOnBreak),
/* harmony export */   "EndBreak": () => (/* binding */ EndBreak),
/* harmony export */   "DeleteRider": () => (/* binding */ DeleteRider)
/* harmony export */ });
/* harmony import */ var _riders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./riders */ "./src/scripts/riders.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/scripts/storage.js");



// Array with available riders
let ridersAvailable = [];

// Array with riders on a ride
let ridersOnARide = [];

// Array with riders on break
let ridersOnBreak = [];

function addRiderToRotation(riderID) {
  let riderToAdd = _riders__WEBPACK_IMPORTED_MODULE_0__.riders.find((rider) => rider.riderID == riderID);

  ridersAvailable.push(riderToAdd.riderID);

  refreshRiderRotation();
  // updateLocalStorage();

  console.log("riders:");
  console.log(_riders__WEBPACK_IMPORTED_MODULE_0__.riders);
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
  let riderToDelete = _riders__WEBPACK_IMPORTED_MODULE_0__.riders.find(function (r) {
    return r.riderID == uniqueID;
  });

  // Remove rider from one of the rotation arrays
  if (riderToDelete.isOnARide()) {
    ridersOnARide.splice(ridersOnARide.indexOf(uniqueID), 1);
  } else if (riderToDelete.isOnBreak()) {
    ridersOnBreak.splice(ridersOnBreak.indexOf(uniqueID), 1);
  } else {
    ridersAvailable.splice(ridersAvailable.indexOf(uniqueID), 1);
  }

  // Remove from main array
  let indexToDelete = _riders__WEBPACK_IMPORTED_MODULE_0__.riders.indexOf(riderToDelete);
  _riders__WEBPACK_IMPORTED_MODULE_0__.riders.splice(indexToDelete, 1);

  console.log("riders:");
  console.log(_riders__WEBPACK_IMPORTED_MODULE_0__.riders);
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
  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
}

function StartRide(uniqueID) {
  let rider = _riders__WEBPACK_IMPORTED_MODULE_0__.riders.find(function (r) {
    return r.riderID == uniqueID;
  });

  if (rider.isOnBreak()) {
    rider.toggleOnBreak();

    ridersOnBreak.splice(ridersOnBreak.indexOf(uniqueID), 1);
  } else {
    ridersAvailable.splice(ridersAvailable.indexOf(uniqueID), 1);
  }

  rider.toggleOnARide();

  //Insert rider in on a ride array
  ridersOnARide.push(uniqueID);

  console.log("riders:");
  console.log(_riders__WEBPACK_IMPORTED_MODULE_0__.riders);
  console.log("ridersAvailable:");
  console.log(ridersAvailable);
  console.log("ridersOnARide:");
  console.log(ridersOnARide);
  console.log("ridersOnBreak:");
  console.log(ridersOnBreak);
  console.log(localStorage);

  refreshRiderRotation();

  //   updateLocalStorage();
}

function EndRide(uniqueID) {
  let rider = _riders__WEBPACK_IMPORTED_MODULE_0__.riders.find(function (r) {
    return r.riderID == uniqueID;
  });

  rider.toggleOnARide();

  // Remove rider from On a ride array
  ridersOnARide.splice(ridersOnARide.indexOf(uniqueID), 1);

  // Insert rider on available array
  ridersAvailable.push(uniqueID);

  console.log("riders:");
  console.log(_riders__WEBPACK_IMPORTED_MODULE_0__.riders);
  console.log("ridersAvailable:");
  console.log(ridersAvailable);
  console.log("ridersOnARide:");
  console.log(ridersOnARide);
  console.log("ridersOnBreak:");
  console.log(ridersOnBreak);
  console.log(localStorage);

  refreshRiderRotation();

  //   updateLocalStorage();
}

function GoOnBreak(uniqueID) {
  let rider = _riders__WEBPACK_IMPORTED_MODULE_0__.riders.find(function (r) {
    return r.riderID == uniqueID;
  });

  if (!rider.getHadBreak()) {
    if (rider.isOnARide()) {
      rider.toggleOnARide();
      ridersOnARide.splice(ridersOnARide.indexOf(uniqueID), 1);
    } else {
      ridersAvailable.splice(ridersAvailable.indexOf(uniqueID), 1);
    }

    rider.toggleOnBreak();

    ridersOnBreak.push(uniqueID);

    refreshRiderRotation();

    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();

    console.log(ridersAvailable);
    console.log(ridersOnARide);
    console.log(ridersOnBreak);
  }
}

function EndBreak(uniqueID) {
  let rider = _riders__WEBPACK_IMPORTED_MODULE_0__.riders.find(function (r) {
    return r.riderID == uniqueID;
  });

  rider.toggleOnBreak();
  ridersOnBreak.splice(ridersOnBreak.indexOf(uniqueID), 1);

  ridersAvailable.push(uniqueID);
  refreshRiderRotation();

  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
}

// Refresh Rider Rotation page
function refreshRiderRotation() {
  const availableList = document.querySelector("#available");
  const onARideList = document.querySelector("#onARide");
  const onABreakList = document.querySelector("#onABreak");

  availableList.innerHTML = "";
  onARideList.innerHTML = "";
  onABreakList.innerHTML = "";

  ridersAvailable.forEach(function (id) {
    let rider = _riders__WEBPACK_IMPORTED_MODULE_0__.riders.find(function (r) {
      return r.riderID == id;
    });
    listRider(rider);
  });

  ridersOnARide.forEach(function (id) {
    let rider = _riders__WEBPACK_IMPORTED_MODULE_0__.riders.find(function (r) {
      return r.riderID == id;
    });
    listRider(rider);
  });

  ridersOnBreak.forEach(function (id) {
    let rider = _riders__WEBPACK_IMPORTED_MODULE_0__.riders.find(function (r) {
      return r.riderID == id;
    });
    listRider(rider);
  });
}

// Create rider list item
function listRider(rider) {
  const onARideList = document.querySelector("#onARide");
  const availableList = document.querySelector("#available");
  const onABreakList = document.querySelector("#onABreak");

  let listItem = document.createElement("li");
  listItem.id = `li-${rider.riderID}`;

  let riderBox = document.createElement("div");
  riderBox.classList.add("riderBox");

  let span = document.createElement("span");
  span.classList.add("riderNameBox");
  span.id = `nameBox-${rider.riderID}`;
  span.textContent = rider.name;

  riderBox.appendChild(span);

  let buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttonsContainer");

  if (rider.isOnARide()) {
    let backButton = document.createElement("button");
    backButton.classList.add("back");
    backButton.textContent = "Back";
    backButton.id = `breakEnd-${rider.riderID}`;

    let breakButton = document.createElement("button");
    breakButton.classList.add("break");
    breakButton.id = `break-${rider.riderID}`;
    if (rider.getHadBreak()) breakButton.style.opacity = "0.3";

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "X";
    deleteButton.id = `delete-${rider.riderID}`;
    deleteButton.style.order = "3";

    buttonsContainer.appendChild(backButton);
    buttonsContainer.appendChild(breakButton);
    buttonsContainer.appendChild(deleteButton);

    riderBox.appendChild(buttonsContainer);
    listItem.appendChild(riderBox);
    onARideList.appendChild(listItem);
  } else if (rider.isOnBreak()) {
    let startButton = document.createElement("button");
    startButton.classList.add("start");
    startButton.textContent = "Go";
    startButton.id = `start-${rider.riderID}`;

    let backButton = document.createElement("button");
    backButton.classList.add("backFromBreak");
    backButton.textContent = "Back";
    backButton.id = `breakEnd-${rider.riderID}`;

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "X";
    deleteButton.id = `delete-${rider.riderID}`;
    deleteButton.style.order = "3";

    // Create timer
    let counter = document.createElement("p");
    counter.classList.add("breakTimer");
    counter.id = `breakTimer-${rider.id}`;

    let timeNow = new Date();
    let totalSecondsLeft =
      (rider.getBreakEndTime().getTime() - timeNow.getTime()) / 1000;
    let secondsLeft = Math.floor(totalSecondsLeft % 60);
    let minutesLeft = Math.floor(totalSecondsLeft / 60);
    counter.textContent = `${minutesLeft}:0${secondsLeft}`;

    let timerCircle = document.createElement("div");
    timerCircle.classList.add("timer-circle");
    timerCircle.style = `--duration: ${totalSecondsLeft};--size: 30;`;
    let circleMask = document.createElement("div");
    circleMask.classList.add("mask");

    let intervalFunction = setInterval(function () {
      if (!rider.getHadBreak()) updateCountdown(rider);
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
  } else {
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.id = `delete-${rider.riderID}`;
    deleteButton.textContent = "X";

    let startButton = document.createElement("button");
    startButton.classList.add("start");
    startButton.id = `start-${rider.riderID}`;
    startButton.textContent = "Go";

    let breakButton = document.createElement("button");
    breakButton.classList.add("break");
    breakButton.id = `break-${rider.riderID}`;

    if (rider.getHadBreak()) breakButton.style.opacity = "0.3";

    buttonsContainer.appendChild(startButton);
    buttonsContainer.appendChild(breakButton);
    buttonsContainer.appendChild(deleteButton);
    deleteButton.style.order = "3";

    riderBox.appendChild(buttonsContainer);

    listItem.appendChild(riderBox);

    availableList.appendChild(listItem);
  }
}

function loadRotationPage() {
  document.querySelector(".content").remove();
  document.querySelector(".pageTitle").textContent = "RIDER ROTATION";

  const content = document.createElement("div");
  content.classList.add("content", "contentRotation");

  document.querySelector(".main").appendChild(content);

  const onARideContainer = document.createElement("div");
  const availableContainer = document.createElement("div");
  const onABreakContainer = document.createElement("div");

  content.appendChild(onARideContainer);
  content.appendChild(availableContainer);
  content.appendChild(onABreakContainer);

  // ON A RIDE
  const onARideLabel = document.createElement("p");
  onARideLabel.textContent = "On a ride";
  onARideContainer.appendChild(onARideLabel);

  const onARideList = document.createElement("ul");
  onARideList.classList.add("rotationList");
  onARideList.id = "onARide";
  onARideContainer.appendChild(onARideList);

  // AVAILABLE
  const availableLabel = document.createElement("p");
  availableLabel.textContent = "Available";
  availableContainer.appendChild(availableLabel);

  const availableList = document.createElement("ul");
  availableList.classList.add("rotationList");
  availableList.id = "available";
  availableContainer.appendChild(availableList);

  // ON A BREAK
  onABreakContainer.id = "onABreakSection";
  const onABreakLabel = document.createElement("p");
  onABreakLabel.textContent = "On Break";
  onABreakContainer.appendChild(onABreakLabel);

  const onABreakList = document.createElement("ul");
  onABreakList.classList.add("rotationList");
  onABreakList.id = "onABreak";
  onABreakContainer.appendChild(onABreakList);
}

function updateCountdown(rider) {
  let timeNow = new Date();
  let totalSecondsLeft =
    (rider.getBreakEndTime().getTime() - timeNow.getTime()) / 1000;
  let secondsLeft = Math.floor(totalSecondsLeft % 60);
  let minutesLeft = Math.floor(totalSecondsLeft / 60);
  let counter = document.querySelector(`#breakTimer-${rider.id}`);

  if (secondsLeft < 10) counter.textContent = `${minutesLeft}:0${secondsLeft}`;
  else counter.textContent = `${minutesLeft}:${secondsLeft}`;
  if (minutesLeft <= 1) counter.style.color = "red";

  if (minutesLeft <= 0 && secondsLeft <= 0) {
    alert(`${rider.name} has finished his break!`);
    EndBreak(rider.riderID);
    // clearInterval(intervalFunction);
  }
}




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

module.exports = __webpack_require__.p + "b1bab8ac6dd4ac270048.svg";

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

module.exports = __webpack_require__.p + "653819c47d0f80955e0a.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxN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SUFBSSxrREFBYztBQUNsQix1Q0FBdUMsa0RBQWMsUUFBUTtBQUM3RCxLQUFLOztBQUVMO0FBQ0Esa0RBQWtELDBEQUFzQjs7QUFFeEUsSUFBSSwyREFBdUI7QUFDM0IsZ0RBQWdELDJEQUF1QixVQUFVO0FBQ2pGLEtBQUs7O0FBRUw7QUFDQSxnREFBZ0Qsd0RBQW9COztBQUVwRSxJQUFJLHlEQUFxQjtBQUN6Qiw4Q0FBOEMseURBQXFCLFVBQVU7QUFDN0UsS0FBSzs7QUFFTDtBQUNBLGdEQUFnRCx3REFBb0I7O0FBRXBFLElBQUkseURBQXFCO0FBQ3pCLDhDQUE4Qyx5REFBcUIsVUFBVTtBQUM3RSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi8uL3NyYy9zY3JpcHRzL2Jpa2VzLmpzIiwid2VicGFjazovL3JpZGVyLXJvdGF0aW9uLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vLi9zcmMvc2NyaXB0cy9yaWRlcnMuanMiLCJ3ZWJwYWNrOi8vcmlkZXItcm90YXRpb24vLi9zcmMvc2NyaXB0cy9yb3RhdGlvbi5qcyIsIndlYnBhY2s6Ly9yaWRlci1yb3RhdGlvbi8uL3NyYy9zY3JpcHRzL3N0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL1JvYm90b0ZsZXhbR1JBRCxYT1BRLFhUUkEsWU9QUSxZVEFTLFlUREUsWVRGSSxZVExDLFlUVUMsb3BzeixzbG50LHdkdGgsd2dodF0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udHMvT2JqZWN0U2Fucy1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZm9udHMvT2JqZWN0U2Fucy1Cb2xkLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2JyZWFrLWljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBGbGV4JztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgMTAwMDtcXG5mb250LXN0cmV0Y2g6IDI1JSAxNTElO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT2JqZWN0IFNhbnMnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDEwMCAxMDAwO1xcbmZvbnQtc3RyZXRjaDogMjUlIDE1MSU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdPYmplY3QgU2FucyBCb2xkJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgMTAwMDtcXG4gIGZvbnQtc3RyZXRjaDogMjUlIDE1MSU7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZnMtYmlnOiBjbGFtcCgxLjRyZW0sIDEuOHZ3LCA4cmVtKTtcXG4gIC0tZnMtbm9ybWFsOiBjbGFtcCgxLjJyZW0sIDEuNHZ3LCA1cmVtKTtcXG4gIC0tZnMtc21hbGw6IGNsYW1wKDFyZW0sIDF2dywgM3JlbSk7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7ICBcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ09iamVjdCBTYW5zJztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmctdG9wOiAydnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDF2dztcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbmxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NiwgMjQ1LCAyNDUsIDEpO1xcbn1cXG5cXG4ubWVudSB7XFxuICB3aWR0aDogMTV2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDF2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubG9nb0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmxvZ29Db250YWluZXIgPiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tZW51ID4gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgZ2FwOiAuOGVtO1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxufVxcblxcbi5tZW51ID4gdWwgPiBsaSB7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuI3JpZGVyc0J1dHRvbkxpc3RJdGVtIHtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbn1cXG5cXG4ubmF2TGluayB7XFxuICBjb2xvcjogcmdiYSg4OCwgODgsIDg4LCAxKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtYmlnKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxufVxcblxcbi5sb2dvIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ubmF2TGlzdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiA2NHZoO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDYsIDI0NSwgMjQ1LCAxKTtcXG4gIG1hcmdpbjogLjNlbSAuNmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4ubmF2TGlzdENvbnRhaW5lciA+IGEge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogLjRlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIzNCwgMjM0LCAyMzQsIDEpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mcy1zbWFsbCk7XFxuICBtYXgtd2lkdGg6IDEwZW07XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEydmggMWZyO1xcbiAgd2lkdGg6IDg1dnc7XFxufVxcblxcbi5wYWdlVGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdPYmplY3QgU2Fucyc7XFxufVxcblxcbi5hZGROZXdCdXR0b257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDNlbTtcXG4gIGhlaWdodDogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgMTYwLCAyNTUsIDEpO1xcbiAgYm9yZGVyLXJhZGl1czogLjJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwIC4zZW07XFxufVxcblxcbi5hZGROZXdCdXR0b24gPiBkaXYge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mcy1ub3JtYWwpO1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG4ucGx1cyB7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMTRweDtcXG59XFxuXFxuLmNvbnRlbnRSb3RhdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVmciAxZnI7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwIDF2dyAxdncgMnZ3O1xcbiAgZ2FwOiAxdnc7XFxufVxcblxcbi5jb250ZW50Um90YXRpb24gPiBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBwYWRkaW5nOiAydncgMXZ3O1xcbn1cXG5cXG4jb25BQnJlYWtTZWN0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLmNvbnRlbnRSb3RhdGlvbiA+IGRpdiA+IHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4ucm90YXRpb25MaXN0IHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1heC13aWR0aDogNTB2dztcXG59XFxuXFxuLnJvdGF0aW9uTGlzdCA+IGxpIHtcXG4gIG1hcmdpbjogNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0MywgMjQzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6ICA2cHggNnB4IDJweCA2cHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLnJpZGVyQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBwYWRkaW5nOiA1cHg7ICovXFxufVxcblxcbi5yaWRlckRldGFpbHMge1xcbiAgLyogcGFkZGluZzogNXB4OyAqL1xcbn1cXG5cXG4uYnV0dG9uc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLmJ1dHRvbnNDb250YWluZXIgPiBidXR0b24ge1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDMsIDI0Myk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5icmVhayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbn1cXG5cXG4uYWRkUmlkZXJCb3hDb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCBibGFjaztcXG4gIHRvcDogY2FsYyg1MHZoIC0gMTAwcHgpO1xcbiAgbGVmdDogNTAlO1xcbiAgbWluLWhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMnB4IDBweCBncmV5O1xcbn1cXG5cXG4uYWRkUmlkZXJCb3hDb250YWluZXIgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZHJvcGRvd25CaWtlU2VsZWN0b3Ige1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uYmlrZVZpc2libGVJbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDE1MHB4IGF1dG8gYXV0bztcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYmNiY2I7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5iaWtlRWRpdEJ1dHRvbiB7XFxuICB3aWR0aDogODBweDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uYmlrZXNDb250YWluZXIge1xcbiAgbWFyZ2luOiAyMHB4IDMwcHg7XFxufVxcblxcbi5tZW51LXRhYiB7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiA2cHg7XFxufVxcblxcbi5icmVha1RpbWVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTE5cHg7XFxuICBmb250LXNpemU6IC43cmVtO1xcbn1cXG5cXG4udGltZXItY2lyY2xlIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHNreUJsdWUgNTAlLCAjZWVlIDUwJSk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXNpemUpICogMXB4KTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLXNpemUpICogMXB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0aW1lIGNhbGModmFyKC0tZHVyYXRpb24pICogMXMpIHN0ZXBzKDEwMDAsIHN0YXJ0KSBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1tYXNrOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQgNTAlLCMwMDAgNTAlKTtcXG4gICAgbWFzazogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50IDUwJSwjMDAwIDUwJSk7XFxufVxcbi5tYXNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgMCAwIDEwMCUgLyA1MCUgMCAwIDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogNTAlO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG1hc2sgY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAxcykgc3RlcHMoNTAwLCBzdGFydCkgaW5maW5pdGU7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGltZSB7XFxuICAxMDAlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBtYXNrIHtcXG4gIDAlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICA1MCUge1xcbiAgICAgIGJhY2tncm91bmQ6ICNlZWU7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gIH1cXG4gIDUwLjAxJSB7XFxuICAgICAgYmFja2dyb3VuZDogc2t5Qmx1ZTtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgICAgYmFja2dyb3VuZDogc2t5Qmx1ZTtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQiw0Q0FBOEc7RUFDOUcscUJBQXFCO0FBQ3ZCLHNCQUFzQjtBQUN0Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw0Q0FBMEM7RUFDMUMscUJBQXFCO0FBQ3ZCLHNCQUFzQjtBQUN0Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiw0Q0FBdUM7RUFDdkMscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix3Q0FBd0M7RUFDeEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLCtDQUErQztFQUMvQywwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5REFBNEM7RUFDNUMsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnRUFBZ0U7RUFDaEUsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLDhFQUE4RTtJQUM1RSx1REFBdUQ7SUFDdkQsK0NBQStDO0FBQ25EO0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDViw2RUFBNkU7RUFDN0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRTtNQUNJLGlDQUFpQztFQUNyQztBQUNGO0FBQ0E7RUFDRTtNQUNJLGdCQUFnQjtNQUNoQiwrQkFBK0I7RUFDbkM7RUFDQTtNQUNJLGdCQUFnQjtNQUNoQixrQ0FBa0M7RUFDdEM7RUFDQTtNQUNJLG1CQUFtQjtNQUNuQiwrQkFBK0I7RUFDbkM7RUFDQTtNQUNJLG1CQUFtQjtNQUNuQixrQ0FBa0M7RUFDdEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEZsZXgnO1xcbiAgc3JjOiB1cmwoJ2ZvbnRzL1JvYm90b0ZsZXhbR1JBRFxcXFwsWE9QUVxcXFwsWFRSQVxcXFwsWU9QUVxcXFwsWVRBU1xcXFwsWVRERVxcXFwsWVRGSVxcXFwsWVRMQ1xcXFwsWVRVQ1xcXFwsb3BzelxcXFwsc2xudFxcXFwsd2R0aFxcXFwsd2dodF0udHRmJyk7XFxuICBmb250LXdlaWdodDogMTAwIDEwMDA7XFxuZm9udC1zdHJldGNoOiAyNSUgMTUxJTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ09iamVjdCBTYW5zJztcXG4gIHNyYzogdXJsKCdmb250cy9PYmplY3RTYW5zLVJlZ3VsYXIud29mZjInKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgMTAwMDtcXG5mb250LXN0cmV0Y2g6IDI1JSAxNTElO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT2JqZWN0IFNhbnMgQm9sZCc7XFxuICBzcmM6IHVybCgnZm9udHMvT2JqZWN0U2Fucy1Cb2xkLndvZmYyJyk7XFxuICBmb250LXdlaWdodDogMTAwIDEwMDA7XFxuICBmb250LXN0cmV0Y2g6IDI1JSAxNTElO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWZzLWJpZzogY2xhbXAoMS40cmVtLCAxLjh2dywgOHJlbSk7XFxuICAtLWZzLW5vcm1hbDogY2xhbXAoMS4ycmVtLCAxLjR2dywgNXJlbSk7XFxuICAtLWZzLXNtYWxsOiBjbGFtcCgxcmVtLCAxdncsIDNyZW0pO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwgeyAgXFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdPYmplY3QgU2Fucyc7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nLXRvcDogMnZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxdnc7XFxuICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG5saSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDYsIDI0NSwgMjQ1LCAxKTtcXG59XFxuXFxuLm1lbnUge1xcbiAgd2lkdGg6IDE1dnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxvZ29Db250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5sb2dvQ29udGFpbmVyID4gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWVudSA+IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGdhcDogLjhlbTtcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG4ubWVudSA+IHVsID4gbGkge1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbiNyaWRlcnNCdXR0b25MaXN0SXRlbSB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLm5hdkxpbmsge1xcbiAgY29sb3I6IHJnYmEoODgsIDg4LCA4OCwgMSk7XFxuICBmb250LXNpemU6IHZhcigtLWZzLWJpZyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLm5hdkxpc3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogNjR2aDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ2LCAyNDUsIDI0NSwgMSk7XFxuICBtYXJnaW46IC4zZW0gLjZlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLm5hdkxpc3RDb250YWluZXIgPiBhIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IC40ZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMzQsIDIzNCwgMjM0LCAxKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtc21hbGwpO1xcbiAgbWF4LXdpZHRoOiAxMGVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMnZoIDFmcjtcXG4gIHdpZHRoOiA4NXZ3O1xcbn1cXG5cXG4ucGFnZVRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT2JqZWN0IFNhbnMnO1xcbn1cXG5cXG4uYWRkTmV3QnV0dG9ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAzZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDE2MCwgMjU1LCAxKTtcXG4gIGJvcmRlci1yYWRpdXM6IC4yZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAuM2VtO1xcbn1cXG5cXG4uYWRkTmV3QnV0dG9uID4gZGl2IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtbm9ybWFsKTtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG59XFxuXFxuLnBsdXMge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxufVxcblxcbi5jb250ZW50Um90YXRpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1ZnIgMWZyO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMCAxdncgMXZ3IDJ2dztcXG4gIGdhcDogMXZ3O1xcbn1cXG5cXG4uY29udGVudFJvdGF0aW9uID4gZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgcGFkZGluZzogMnZ3IDF2dztcXG59XFxuXFxuI29uQUJyZWFrU2VjdGlvbiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbi5jb250ZW50Um90YXRpb24gPiBkaXYgPiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLnJvdGF0aW9uTGlzdCB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXgtd2lkdGg6IDUwdnc7XFxufVxcblxcbi5yb3RhdGlvbkxpc3QgPiBsaSB7XFxuICBtYXJnaW46IDZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDMsIDI0Myk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAgNnB4IDZweCAycHggNnB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5yaWRlckJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogcGFkZGluZzogNXB4OyAqL1xcbn1cXG5cXG4ucmlkZXJEZXRhaWxzIHtcXG4gIC8qIHBhZGRpbmc6IDVweDsgKi9cXG59XFxuXFxuLmJ1dHRvbnNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5idXR0b25zQ29udGFpbmVyID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQzLCAyNDMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnJlYWsge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9icmVhay1pY29uLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxufVxcblxcbi5hZGRSaWRlckJveENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIGJsYWNrO1xcbiAgdG9wOiBjYWxjKDUwdmggLSAxMDBweCk7XFxuICBsZWZ0OiA1MCU7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDEycHggMHB4IGdyZXk7XFxufVxcblxcbi5hZGRSaWRlckJveENvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kcm9wZG93bkJpa2VTZWxlY3RvciB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5iaWtlVmlzaWJsZUluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTUwcHggYXV0byBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NiY2JjYjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmJpa2VFZGl0QnV0dG9uIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5iaWtlc0NvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwcHggMzBweDtcXG59XFxuXFxuLm1lbnUtdGFiIHtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG59XFxuXFxuLmJyZWFrVGltZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMTlweDtcXG4gIGZvbnQtc2l6ZTogLjdyZW07XFxufVxcblxcbi50aW1lci1jaXJjbGUge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgc2t5Qmx1ZSA1MCUsICNlZWUgNTAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tc2l6ZSkgKiAxcHgpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tc2l6ZSkgKiAxcHgpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHRpbWUgY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAxcykgc3RlcHMoMTAwMCwgc3RhcnQpIGluZmluaXRlO1xcbiAgICAtd2Via2l0LW1hc2s6IHJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCA1MCUsIzAwMCA1MCUpO1xcbiAgICBtYXNrOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQgNTAlLCMwMDAgNTAlKTtcXG59XFxuLm1hc2sge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAwIDAgMTAwJSAvIDUwJSAwIDAgNTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiA1MCU7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbWFzayBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIDFzKSBzdGVwcyg1MDAsIHN0YXJ0KSBpbmZpbml0ZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyB0aW1lIHtcXG4gIDEwMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIG1hc2sge1xcbiAgMCUge1xcbiAgICAgIGJhY2tncm91bmQ6ICNlZWU7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgICAgYmFja2dyb3VuZDogI2VlZTtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbiAgfVxcbiAgNTAuMDElIHtcXG4gICAgICBiYWNrZ3JvdW5kOiBza3lCbHVlO1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiBza3lCbHVlO1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhcnJvd0Rvd24gZnJvbSBcIi4uL2ltYWdlcy9hcnJvdy1kb3duLnN2Z1wiO1xuXG4vLyBBcnJheSBmb3IgYmlrZXNcbmxldCBiaWtlcyA9IFtdO1xuXG4vLyBCaWtlIEZhY3RvcnkgRnVuY3Rpb25cbmNvbnN0IEJpa2UgPSAobnVtYmVyLCBtb2RlbCwgc3RhdHVzKSA9PiB7XG4gIGxldCBiaWtlU3RhdHVzID0gc3RhdHVzO1xuICBsZXQgZGV0YWlscztcbiAgbGV0IGRldGFpbHNTaG93aW5nID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4gYmlrZVN0YXR1cztcbiAgY29uc3QgYXJlRGV0YWlsc1Nob3dpbmcgPSAoKSA9PiBkZXRhaWxzU2hvd2luZztcblxuICBjb25zdCB0b2dnbGVTdGF0dXMgPSAoKSA9PiB7XG4gICAgaWYgKGJpa2VTdGF0dXMgPT0gXCJPdXQgb2YgQWN0aW9uXCIpIHtcbiAgICAgIGJpa2VTdGF0dXMgPSBcIkluIEFjdGlvblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBiaWtlU3RhdHVzID0gXCJPdXQgb2YgQWN0aW9uXCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZURldGFpbHMgPSAoKSA9PiB7XG4gICAgaWYgKGRldGFpbHNTaG93aW5nKSB7XG4gICAgICBkZXRhaWxzU2hvd2luZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXRhaWxzU2hvd2luZyA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYW5nZURldGFpbHMgPSAobmV3RGV0YWlscykgPT4ge1xuICAgIGRldGFpbHMgPSBuZXdEZXRhaWxzO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbnVtYmVyLFxuICAgIG1vZGVsLFxuICAgIGdldFN0YXR1cyxcbiAgICB0b2dnbGVTdGF0dXMsXG4gICAgdG9nZ2xlRGV0YWlscyxcbiAgICBjaGFuZ2VEZXRhaWxzLFxuICAgIGFyZURldGFpbHNTaG93aW5nLFxuICB9O1xufTtcblxuLy8gQ3JlYXRlIHNvbWUgYmlrZXNcbmNvbnN0IE05MDAgPSBCaWtlKFwiTTkwMFwiLCBcIlpvb21vIFplcm9cIiwgXCJPdXQgb2YgQWN0aW9uXCIpO1xuY29uc3QgWjg5NTQ1NiA9IEJpa2UoXCJaODk1NDU2XCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTU0ODggPSBCaWtlKFwiWjg5NTQ4OFwiLCBcIlpvb21vIFplcm9cIiwgXCJPdXQgb2YgQWN0aW9uXCIpO1xuY29uc3QgWjg5NTQ5MCA9IEJpa2UoXCJaODk1NDkwXCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTU0OTMgPSBCaWtlKFwiWjg5NTQ5M1wiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk2MzYwID0gQmlrZShcIlo4OTYzNjBcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuY29uc3QgWjg5NjY5OSA9IEJpa2UoXCJaODk2Njk5XCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTc1MzAgPSBCaWtlKFwiWjg5NzUzMFwiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk3NTMxID0gQmlrZShcIlo4OTc1MzFcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuY29uc3QgWjg5NzU1NiA9IEJpa2UoXCJaODk3NTU2XCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTc2NDMgPSBCaWtlKFwiWjg5NzY0M1wiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk3Njc3ID0gQmlrZShcIlo4OTc2NzdcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuY29uc3QgWjg5Nzc5OCA9IEJpa2UoXCJaODk3Nzk4XCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTc4MzIgPSBCaWtlKFwiWjg5NzgzMlwiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk4MDU1ID0gQmlrZShcIlo4OTgwNTVcIiwgXCJab29tbyBaZXJvXCIsIFwiT3V0IG9mIEFjdGlvblwiKTtcbmNvbnN0IFo4OTgyMDIgPSBCaWtlKFwiWjg5ODIwMlwiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk4MjQyID0gQmlrZShcIlo4OTgyNDJcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuY29uc3QgWjg5ODI4MSA9IEJpa2UoXCJaODk4MjgxXCIsIFwiWm9vbW8gWmVyb1wiLCBcIkluIEFjdGlvblwiKTtcbmNvbnN0IFo4OTg0NzcgPSBCaWtlKFwiWjg5ODQ3N1wiLCBcIlpvb21vIFplcm9cIiwgXCJJbiBBY3Rpb25cIik7XG5jb25zdCBaODk5MzE3ID0gQmlrZShcIlo4OTkzMTdcIiwgXCJab29tbyBaZXJvXCIsIFwiSW4gQWN0aW9uXCIpO1xuXG5iaWtlcy5wdXNoKFxuICBNOTAwLFxuICBaODk1NDU2LFxuICBaODk1NDg4LFxuICBaODk1NDkwLFxuICBaODk1NDkzLFxuICBaODk2MzYwLFxuICBaODk2Njk5LFxuICBaODk3NTMwLFxuICBaODk3NTMxLFxuICBaODk3NTU2LFxuICBaODk3NjQzLFxuICBaODk3Njc3LFxuICBaODk3Nzk4LFxuICBaODk3ODMyLFxuICBaODk4MDU1LFxuICBaODk4MjAyLFxuICBaODk4MjQyLFxuICBaODk4MjgxLFxuICBaODk4NDc3LFxuICBaODk5MzE3XG4pO1xuXG5mdW5jdGlvbiBsb2FkQmlrZXNQYWdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VUaXRsZVwiKS50ZXh0Q29udGVudCA9IFwiQklLRVNcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLnJlbW92ZSgpO1xuICBsaXN0QWxsQmlrZXMoKTtcbn1cblxuLy8gTGlzdCBiaWtlIGluZm9cbmZ1bmN0aW9uIGxpc3RBbGxCaWtlcygpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50QmlrZXNcIiwgXCJjb250ZW50XCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICBiaWtlcy5mb3JFYWNoKChiaWtlKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBiaWtlLm51bWJlcjtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0KTtcbn1cblxuLy8gU29ydCBiaWtlcyBieSBzdGF0dXMgKEluIGFjdGlvbiBvbiB0b3ApXG5mdW5jdGlvbiBzb3J0QmlrZXNCeVN0YXR1cyhiaWtlc0FycmF5KSB7XG4gIGxldCBiaWtlc1NvcnRlZCA9IGJpa2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBpZiAoYS5nZXRTdGF0dXMoKSA8IGIuZ2V0U3RhdHVzKCkpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGEuZ2V0U3RhdHVzKCkgPiBiLmdldFN0YXR1cygpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0pO1xufVxuXG4vLyBTaG93IGRldGFpbHMgb2YgdGhlIGJpa2VcbmZ1bmN0aW9uIG9wZW5CaWtlRGV0YWlscyhiaWtlKSB7XG4gIGxldCBiaWtlSW5mb0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNiaWtlSW5mb0JveC0ke2Jpa2UubnVtYmVyfWApO1xuICBsZXQgZWRpdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlZGl0RGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZWRpdERldGFpbHNcIik7XG4gIGxldCBjaGFuZ2VTdGF0dXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjaGFuZ2VTdGF0dXNCdXR0b24udGV4dENvbnRlbnQgPSBcIkNoYW5nZSBzdGF0dXNcIjtcbiAgbGV0IGRldGFpbHNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRldGFpbHNCb3gucGxhY2Vob2xkZXIgPSBcIm1vcmUgZGV0YWlscy4uLlwiO1xuXG4gIGVkaXREZXRhaWxzLmFwcGVuZENoaWxkKGNoYW5nZVN0YXR1c0J1dHRvbik7XG4gIGVkaXREZXRhaWxzLmFwcGVuZENoaWxkKGRldGFpbHNCb3gpO1xuICBiaWtlSW5mb0JveC5hcHBlbmRDaGlsZChlZGl0RGV0YWlscyk7XG5cbiAgY2hhbmdlU3RhdHVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgYmlrZS50b2dnbGVTdGF0dXMoKTtcbiAgICBsb2FkQmlrZXNQYWdlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBsb2FkQmlrZXNQYWdlLCBiaWtlcyB9O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGdvcmlsbGFzTG9nbyBmcm9tIFwiLi4vaW1hZ2VzL2xvZ28uanBlZ1wiO1xuaW1wb3J0IHBsdXNTaWduIGZyb20gXCIuLi9pbWFnZXMvcGx1cy5zdmdcIjtcbmltcG9ydCB7XG4gIHJpZGVycyxcbiAgY3JlYXRlUmlkZXIsXG4gIGRlbGV0ZVJpZGVyLFxuICBpbXBvcnRSaWRlcnMsXG4gIHVwZGF0ZURhdGFiYXNlLFxuICBsb2FkUmlkZXJzUGFnZSxcbn0gZnJvbSBcIi4vcmlkZXJzXCI7XG5pbXBvcnQgeyBiaWtlcywgbG9hZEJpa2VzUGFnZSB9IGZyb20gXCIuL2Jpa2VzXCI7XG5pbXBvcnQge1xuICBsb2FkUm90YXRpb25QYWdlLFxuICBhZGRSaWRlclRvUm90YXRpb24sXG4gIHJpZGVyc0F2YWlsYWJsZSxcbiAgcmlkZXJzT25CcmVhayxcbiAgcmlkZXJzT25BUmlkZSxcbiAgU3RhcnRSaWRlLFxuICBHb09uQnJlYWssXG4gIEVuZFJpZGUsXG4gIEVuZEJyZWFrLFxuICBEZWxldGVSaWRlcixcbn0gZnJvbSBcIi4vcm90YXRpb25cIjtcbmltcG9ydCB7IGltcG9ydFJpZGVyLCB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbi8vI3JlZ2lvbiBNRU5VXG5cbi8vIE1lbnUgdmFyaWFibGVzXG5sZXQgcmlkZXJzVGFiT3BlbiA9IGZhbHNlO1xubGV0IGJpa2VzVGFiT3BlbiA9IGZhbHNlO1xubGV0IGN1cnJlbnRQYWdlID0gXCJCaWtlc1wiO1xuXG4vLyBJbnNlcnQgbG9nb1xuY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xubG9nby5zcmMgPSBnb3JpbGxhc0xvZ287XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nb0NvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChsb2dvKTtcblxubGV0IHJvdGF0aW9uVGFiQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb3RhdGlvbkJ1dHRvblwiKTtcbmxldCByaWRlcnNUYWJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZGVyc0J1dHRvblwiKTtcbmxldCBiaWtlc1RhYkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmlrZXNCdXR0b25cIik7XG5cbi8vIE9wZW4gUmlkZXIgUm90YXRpb24gcGFnZVxucm90YXRpb25UYWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgbG9hZFJvdGF0aW9uUGFnZSgpO1xuICByaWRlcnMuZm9yRWFjaCgocmlkZXIpID0+IGFkZFJpZGVyVG9Sb3RhdGlvbihyaWRlci5yaWRlcklEKSk7XG59KTtcblxuLy8gT3BlbiBSaWRlcnMgUGFnZVxuY29uc3QgcmlkZXJzVGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxucmlkZXJzVGFiQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGlmICghcmlkZXJzVGFiT3Blbikge1xuICAgIHJpZGVyc1RhYkJ1dHRvbi5hcHBlbmRDaGlsZChyaWRlcnNUYWJDb250YWluZXIpO1xuICAgIHJpZGVyc1RhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2TGlzdENvbnRhaW5lclwiKTtcbiAgICBsZXQgc2VlQWxsUmlkZXJzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgc2VlQWxsUmlkZXJzQnV0dG9uLnRleHRDb250ZW50ID0gXCJBbGwgUmlkZXJzXCI7XG4gICAgc2VlQWxsUmlkZXJzQnV0dG9uLnN0eWxlID0gXCJ0ZXh0LWFsaWduOiBjZW50ZXJcIjtcbiAgICBzZWVBbGxSaWRlcnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvYWRSaWRlcnNQYWdlKCk7XG4gICAgfSk7IC8vIE9wZW4gcmlkZXJzIHBhZ2VcbiAgICByaWRlcnNUYWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VlQWxsUmlkZXJzQnV0dG9uKTtcbiAgICByaWRlcnMuZm9yRWFjaChmdW5jdGlvbiAocmlkZXIpIHtcbiAgICAgIGxldCByaWRlckxpc3RpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIHJpZGVyTGlzdGluZy50ZXh0Q29udGVudCA9IHJpZGVyLm5hbWU7XG4gICAgICByaWRlcnNUYWJDb250YWluZXIuYXBwZW5kQ2hpbGQocmlkZXJMaXN0aW5nKTtcbiAgICB9KTtcbiAgICByaWRlcnNUYWJPcGVuID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByaWRlcnNUYWJDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICByaWRlcnNUYWJDb250YWluZXIucmVtb3ZlKCk7XG4gICAgcmlkZXJzVGFiT3BlbiA9IGZhbHNlO1xuICB9XG59KTtcblxuLy8gT3BlbiBCaWtlcyBwYWdlXG5sZXQgYmlrZXNUYWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5iaWtlc1RhYkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBpZiAoIWJpa2VzVGFiT3Blbikge1xuICAgIGJpa2VzVGFiQnV0dG9uLmFwcGVuZENoaWxkKGJpa2VzVGFiQ29udGFpbmVyKTtcbiAgICBiaWtlc1RhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2TGlzdENvbnRhaW5lclwiKTtcbiAgICBsZXQgc2VlQWxsQmlrZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBzZWVBbGxCaWtlc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWxsIEJpa2VzXCI7XG4gICAgc2VlQWxsQmlrZXNCdXR0b24uc3R5bGUgPSBcInRleHQtYWxpZ246IGNlbnRlclwiO1xuICAgIHNlZUFsbEJpa2VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsb2FkQmlrZXNQYWdlKCk7XG4gICAgfSk7IC8vIE9wZW4gYmlrZXMgcGFnZVxuICAgIGJpa2VzVGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlZUFsbEJpa2VzQnV0dG9uKTtcbiAgICBiaWtlcy5mb3JFYWNoKChiaWtlKSA9PiB7XG4gICAgICBsZXQgYmlrZUxpc3RpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGJpa2VMaXN0aW5nLnRleHRDb250ZW50ID0gYmlrZS5udW1iZXI7XG4gICAgICBiaWtlc1RhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChiaWtlTGlzdGluZyk7XG4gICAgfSk7XG4gICAgYmlrZXNUYWJPcGVuID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBiaWtlc1RhYkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGJpa2VzVGFiQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIGJpa2VzVGFiT3BlbiA9IGZhbHNlO1xuICB9XG59KTtcblxuLy8jZW5kcmVnaW9uIE1FTlVcblxuLy8gSW5zZXJ0IHBsdXMgc2lnblxuY29uc3QgcGx1cyA9IG5ldyBJbWFnZSgpO1xucGx1cy5zcmMgPSBwbHVzU2lnbjtcbnBsdXMuY2xhc3NMaXN0LmFkZChcInBsdXNcIik7XG5cbmNvbnN0IGFkZE5ld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkTmV3QnV0dG9uXCIpO1xuYWRkTmV3QnV0dG9uLmFwcGVuZENoaWxkKHBsdXMpO1xuY29uc3QgYWRkTmV3QnV0dG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYWRkTmV3QnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBOZXdcIjtcbmFkZE5ld0J1dHRvbi5hcHBlbmRDaGlsZChhZGROZXdCdXR0b25MYWJlbCk7XG5cbmlmIChjdXJyZW50UGFnZSA9PT0gXCJSb3RhdGlvblwiKSB7XG4gIC8vIGNvbnN0IGF2YWlsTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXZhaWxhYmxlXCIpO1xuICAvLyBjb25zdCBvbkFSaWRlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25BUmlkZVwiKTtcbiAgLy8gY29uc3Qgb25BQnJlYWtMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbkFCcmVha1wiKTtcblxuICByaWRlcnMuZm9yRWFjaCgocmlkZXIpID0+IGFkZFJpZGVyVG9Sb3RhdGlvbihyaWRlci5yaWRlcklEKSk7XG59IGVsc2UgaWYgKGN1cnJlbnRQYWdlID09PSBcIlJpZGVyc1wiKSB7XG4gIGxvYWRSaWRlcnNQYWdlKCk7XG59IGVsc2UgaWYgKGN1cnJlbnRQYWdlID09PSBcIkJpa2VzXCIpIHtcbiAgbG9hZEJpa2VzUGFnZSgpO1xufVxuXG4vLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuLy8gUmV0cmlldmUgaW5mbyBmcm9tIGxvY2Fsc3RvcmFnZVxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJpZGVyc0xlbmd0aFwiKTsgaSsrKSB7XG4vLyAgIGxldCBpbXBvcnRlZE9iamVjdCA9IGltcG9ydFJpZGVyKGkpO1xuXG4vLyAgIGxldCBpbXBvcnRlZFJpZGVyID0gUmlkZXIoXG4vLyAgICAgaW1wb3J0ZWRPYmplY3QubmFtZSxcbi8vICAgICBpbXBvcnRlZE9iamVjdC5iaWtlLFxuLy8gICAgIGltcG9ydGVkT2JqZWN0LnJpZGVySURcbi8vICAgKTtcblxuLy8gICByaWRlcnMucHVzaChpbXBvcnRlZFJpZGVyKTtcbi8vICAgcmlkZXJzQXZhaWxhYmxlLnB1c2goaW1wb3J0ZWRSaWRlci5yaWRlcklEKTtcbi8vICAgbGlzdFJpZGVyKGltcG9ydGVkUmlkZXIpO1xuLy8gfVxuXG4vLyBJbnB1dCBhbmQgZXZlbnQgbGlzdGVuZXJzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKG9iaikge1xuICAvLyBTVEFSVCBCdXR0b25cbiAgaWYgKG9iai50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RhcnRcIikpIHtcbiAgICAvLyBHZXQgUmlkZXIgSUQgZnJvbSBidXR0b24ncyBpZFxuICAgIGxldCByaWRlcklEID0gb2JqLnRhcmdldC5pZC5zdWJzdHJpbmcob2JqLnRhcmdldC5pZC5pbmRleE9mKFwiLVwiKSArIDEpO1xuXG4gICAgY29uc29sZS5sb2coXCJzdGFydCByaWRlIFwiICsgcmlkZXJJRCk7XG5cbiAgICAvLyBDYWxsIFN0YXJ0IFJpZGUgZnVuY3Rpb25cbiAgICBTdGFydFJpZGUocmlkZXJJRCk7XG4gIH1cbiAgLy8gRGVsZXRlIEJ1dHRvblxuICBlbHNlIGlmIChvYmoudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZVwiKSkge1xuICAgIC8vIEdldCBSaWRlciBJRCBmcm9tIGJ1dHRvbidzIGlkXG4gICAgbGV0IHJpZGVySUQgPSBvYmoudGFyZ2V0LmlkLnN1YnN0cmluZyhvYmoudGFyZ2V0LmlkLmluZGV4T2YoXCItXCIpICsgMSk7XG5cbiAgICAvLyBDYWxsIERlbGV0ZSBSSWRlciBmdW5jdGlvblxuICAgIERlbGV0ZVJpZGVyKHJpZGVySUQpO1xuICB9XG4gIC8vIEJhY2sgQnV0dG9uXG4gIGVsc2UgaWYgKG9iai50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmFja1wiKSkge1xuICAgIC8vIEdldCBSaWRlciBJRCBmcm9tIGJ1dHRvbidzIGlkXG4gICAgbGV0IHJpZGVySUQgPSBvYmoudGFyZ2V0LmlkLnN1YnN0cmluZyhvYmoudGFyZ2V0LmlkLmluZGV4T2YoXCItXCIpICsgMSk7XG5cbiAgICAvLyBDYWxsIEVuZCBSaWRlIGZ1bmN0aW9uXG4gICAgRW5kUmlkZShyaWRlcklEKTtcbiAgfVxuICAvLyBCcmVhayBCdXR0b25cbiAgZWxzZSBpZiAob2JqLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJicmVha1wiKSkge1xuICAgIC8vIEdldCBSaWRlciBJRCBmcm9tIGJ1dHRvbidzIGlkXG4gICAgbGV0IHJpZGVySUQgPSBvYmoudGFyZ2V0LmlkLnN1YnN0cmluZyhvYmoudGFyZ2V0LmlkLmluZGV4T2YoXCItXCIpICsgMSk7XG5cbiAgICAvLyBDYWxsIEdvIE9uIEJyZWFrIGZ1bmN0aW9uXG4gICAgR29PbkJyZWFrKHJpZGVySUQpO1xuICB9XG4gIC8vIEJhY2sgZnJvbSBicmVhayBidXR0b25cbiAgZWxzZSBpZiAob2JqLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJiYWNrRnJvbUJyZWFrXCIpKSB7XG4gICAgLy8gR2V0IFJpZGVyIElEIGZyb20gYnV0dG9uJ3MgaWRcbiAgICBsZXQgcmlkZXJJRCA9IG9iai50YXJnZXQuaWQuc3Vic3RyaW5nKG9iai50YXJnZXQuaWQuaW5kZXhPZihcIi1cIikgKyAxKTtcblxuICAgIC8vIENhbGwgRW5kIEJyZWFrIGZ1bmN0aW9uXG4gICAgRW5kQnJlYWsocmlkZXJJRCk7XG4gIH1cbiAgLy8gQ2xpY2sgb24gcmlkZXJcbiAgZWxzZSBpZiAob2JqLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJyaWRlck5hbWVCb3hcIikpIHtcbiAgICAvLyBHZXQgUmlkZXIgSUQgZnJvbSBlbGVtZW50J3MgaWRcbiAgICBsZXQgcmlkZXJJRCA9IG9iai50YXJnZXQuaWQuc3Vic3RyaW5nKG9iai50YXJnZXQuaWQuaW5kZXhPZihcIi1cIikgKyAxKTtcblxuICAgIGxldCByaWRlciA9IHJpZGVycy5maW5kKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4gci5yaWRlcklEID09IHJpZGVySUQ7XG4gICAgfSk7XG5cbiAgICBpZiAoIXJpZGVyLmFyZURldGFpbHNTaG93aW5nKCkpIHtcbiAgICAgIGxldCByaWRlckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcmlkZXJEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJyaWRlckRldGFpbHNcIik7XG4gICAgICByaWRlckRldGFpbHMudGV4dENvbnRlbnQgPSBgQmlrZSBudW1iZXI6ICR7cmlkZXIuYmlrZX1gO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpLSR7cmlkZXIucmlkZXJJRH1gKS5hcHBlbmRDaGlsZChyaWRlckRldGFpbHMpO1xuICAgICAgcmlkZXIudG9nZ2xlRGV0YWlscygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZGVyRGV0YWlsc1wiKS5yZW1vdmUoKTtcbiAgICAgIHJpZGVyLnRvZ2dsZURldGFpbHMoKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2xpY2sgb24gJysnIHNpZ25cbiAgZWxzZSBpZiAob2JqLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwbHVzXCIpKSB7XG4gICAgLy8gQ3JlYXRlIGNvbnRhaW5lcihib3gpXG4gICAgbGV0IGFkZFJpZGVyQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRSaWRlckJveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWRkUmlkZXJCb3hDb250YWluZXJcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRSaWRlckJveENvbnRhaW5lcik7XG5cbiAgICAvLyBUaXRsZVxuICAgIGxldCBhZGRSaWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWRkUmlkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiTmV3IFJpZGVyOlwiO1xuICAgIGFkZFJpZGVyQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFJpZGVyVGl0bGUpO1xuXG4gICAgLy8gSW5wdXQgYm94IGZvciBuYW1lXG4gICAgbGV0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dE5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0TmFtZS5wbGFjZWhvbGRlciA9IFwiTmFtZVwiO1xuICAgIGlucHV0TmFtZS5jbGFzc0xpc3QuYWRkKFwiaW5wdXROYW1lXCIpO1xuICAgIGFkZFJpZGVyQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0TmFtZSk7XG5cbiAgICAvLyBJbnB1dCBib3ggZm9yIGJpa2UgbnVtYmVyXG4gICAgbGV0IGRyb3BEb3duTWVudUJpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBkcm9wRG93bk1lbnVCaWtlcy5pbm5lckhUTUwgPSBgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPkJpa2U8L29wdGlvbj5gO1xuICAgIGRyb3BEb3duTWVudUJpa2VzLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bkJpa2VTZWxlY3RvclwiKTtcbiAgICBkcm9wRG93bk1lbnVCaWtlcy5uYW1lID0gXCJiaWtlc1wiO1xuXG4gICAgLy8gSW5jbHVkZSBhbGwgYmlrZXNcbiAgICBiaWtlcy5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgICBsZXQgYmlrZUZvclNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBiaWtlRm9yU2VsZWN0aW9uLnRleHRDb250ZW50ID0gYi5udW1iZXI7XG4gICAgICBkcm9wRG93bk1lbnVCaWtlcy5hcHBlbmRDaGlsZChiaWtlRm9yU2VsZWN0aW9uKTtcbiAgICB9KTtcblxuICAgIGFkZFJpZGVyQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3BEb3duTWVudUJpa2VzKTtcblxuICAgIC8vIFN1Ym1pdCBidXR0b25cbiAgICBsZXQgYWRkUmlkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFJpZGVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgcmlkZXJcIjtcbiAgICBhZGRSaWRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkUmlkZXJCdXR0b25cIik7XG4gICAgYWRkUmlkZXJCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUmlkZXJCdXR0b24pO1xuXG4gICAgaW5wdXROYW1lLmZvY3VzKCk7XG5cbiAgICAvLyBDbG9zZSB3aW5kb3cgaWYgY2xpY2tlZCBvdXRzaWRlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgIGxldCB0YXJnZXRFbGVtZW50ID0gZXZ0LnRhcmdldDsgLy8gY2xpY2tlZCBlbGVtZW50XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT0gYWRkUmlkZXJCb3hDb250YWluZXIpIHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGEgY2xpY2sgaW5zaWRlLiBEbyBub3RoaW5nLCBqdXN0IHJldHVybi5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gR28gdXAgdGhlIERPTVxuICAgICAgICB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgfSB3aGlsZSAodGFyZ2V0RWxlbWVudCk7XG5cbiAgICAgIC8vIFRoaXMgaXMgYSBjbGljayBvdXRzaWRlLlxuICAgICAgYWRkUmlkZXJCb3hDb250YWluZXIucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBTdWJtaXQgaWYgJ0VudGVyJyBpcyBwcmVzc2VkXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUmlkZXJCdXR0b25cIikuY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyBjbGljayBvbiAnQWRkIHJpZGVyJyBidXR0b25cbiAgZWxzZSBpZiAob2JqLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhZGRSaWRlckJ1dHRvblwiKSkge1xuICAgIGxldCBhZGRSaWRlckJveENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUmlkZXJCb3hDb250YWluZXJcIik7XG4gICAgbGV0IHJpZGVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXROYW1lXCIpLnZhbHVlO1xuICAgIGxldCBiaWtlTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bkJpa2VTZWxlY3RvclwiKS52YWx1ZTtcblxuICAgIGlmIChyaWRlck5hbWUgIT0gXCJcIikge1xuICAgICAgQWRkUmlkZXIocmlkZXJOYW1lLCBiaWtlTnVtYmVyKTtcbiAgICAgIGFkZFJpZGVyQm94Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH0gZWxzZSBhbGVydChcIlJpZGVyIG5lZWRzIGEgbmFtZSFcIik7XG4gIH1cbn0pO1xuXG4vLyB9KTtcblxuLy8gZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4vLyAgICAgdmFyIHN0b3JhZ2U7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbi8vICAgICAgICAgdmFyIHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4vLyAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbi8vICAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9XG4vLyAgICAgY2F0Y2goZSkge1xuLy8gICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4vLyAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4vLyAgICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4vLyAgICAgICAgICAgICAvLyBGaXJlZm94XG4vLyAgICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbi8vICAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuLy8gICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuLy8gICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuLy8gICAgICAgICAgICAgLy8gRmlyZWZveFxuLy8gICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuLy8gICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbi8vICAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuLy8gICAgIC8vIFlpcHBlZSEgV2UgY2FuIHVzZSBsb2NhbFN0b3JhZ2UgYXdlc29tZW5lc3Ncbi8vICAgICBjb25zb2xlLmxvZygneWVzJyk7XG4vLyAgIH1cbi8vICAgZWxzZSB7XG4vLyAgICAgLy8gVG9vIGJhZCwgbm8gbG9jYWxTdG9yYWdlIGZvciB1c1xuLy8gICAgIGNvbnNvbGUubG9nKCdubycpO1xuLy8gICB9XG4iLCIvLyBSaWRlciBGYWN0b3J5IEZ1bmN0aW9uXG5jb25zdCBSaWRlciA9IChuYW1lLCByaWRlcklEKSA9PiB7XG4gIGxldCBvbkFSaWRlID0gZmFsc2U7XG4gIGxldCBvbkJyZWFrID0gZmFsc2U7XG4gIC8vICAgbGV0IGJpa2UgPSBiaWtlTnVtYmVyO1xuICBsZXQgZGV0YWlsc1Nob3dpbmcgPSBmYWxzZTtcbiAgbGV0IGJyZWFrU3RhcnRUaW1lO1xuICBsZXQgYnJlYWtFbmRUaW1lO1xuICBsZXQgaGFkQnJlYWsgPSBmYWxzZTtcbiAgY29uc3QgZ2V0SGFkQnJlYWsgPSAoKSA9PiBoYWRCcmVhaztcbiAgY29uc3QgZ2V0QnJlYWtFbmRUaW1lID0gKCkgPT4gYnJlYWtFbmRUaW1lO1xuICBjb25zdCBpc09uQVJpZGUgPSAoKSA9PiBvbkFSaWRlO1xuICBjb25zdCBpc09uQnJlYWsgPSAoKSA9PiBvbkJyZWFrO1xuICBjb25zdCBhcmVEZXRhaWxzU2hvd2luZyA9ICgpID0+IGRldGFpbHNTaG93aW5nO1xuICBjb25zdCB0b2dnbGVPbkFSaWRlID0gKCkgPT4ge1xuICAgIGlmIChvbkFSaWRlKSB7XG4gICAgICBvbkFSaWRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQVJpZGUgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdG9nZ2xlT25CcmVhayA9ICgpID0+IHtcbiAgICBpZiAob25CcmVhaykge1xuICAgICAgb25CcmVhayA9IGZhbHNlO1xuICAgICAgaGFkQnJlYWsgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIWhhZEJyZWFrKSB7XG4gICAgICBvbkJyZWFrID0gdHJ1ZTtcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgc2V0QnJlYWtFbmRUaW1lKG5vdyk7XG4gICAgfVxuICB9O1xuICBjb25zdCB0b2dnbGVEZXRhaWxzID0gKCkgPT4ge1xuICAgIGlmIChkZXRhaWxzU2hvd2luZykge1xuICAgICAgZGV0YWlsc1Nob3dpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGV0YWlsc1Nob3dpbmcgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2V0QnJlYWtFbmRUaW1lID0gKHRpbWUpID0+IHtcbiAgICBicmVha1N0YXJ0VGltZSA9IHRpbWU7XG4gICAgYnJlYWtFbmRUaW1lID0gdGltZTtcbiAgICBicmVha0VuZFRpbWUuc2V0TWludXRlcyhicmVha1N0YXJ0VGltZS5nZXRNaW51dGVzKCkgKyAzMCk7XG4gICAgLy8gYnJlYWtFbmRUaW1lLnNldFNlY29uZHMoYnJlYWtTdGFydFRpbWUuZ2V0U2Vjb25kcygpICsgNjApO1xuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgcmlkZXJJRCxcbiAgICBpc09uQVJpZGUsXG4gICAgaXNPbkJyZWFrLFxuICAgIGFyZURldGFpbHNTaG93aW5nLFxuICAgIGdldEJyZWFrRW5kVGltZSxcbiAgICBnZXRIYWRCcmVhayxcbiAgICB0b2dnbGVPbkFSaWRlLFxuICAgIHRvZ2dsZU9uQnJlYWssXG4gICAgdG9nZ2xlRGV0YWlscyxcbiAgfTtcbn07XG5cbi8vIEFycmF5IHdpdGggYWxsIHRoZSBSaWRlciBPYmplY3RzXG5sZXQgcmlkZXJzID0gW107XG5cbi8vIGZha2UgZGF0YVxuY29uc3Qgam9hbyA9IFJpZGVyKFwiMDAwXCIsIDApO1xuY29uc3Qgam9hb3NzID0gUmlkZXIoXCIxMTFcIiwgMSk7XG5jb25zdCBqb24gPSBSaWRlcihcIjIyMlwiLCAyKTtcblxucmlkZXJzLnB1c2goam9hbywgam9hb3NzLCBqb24pO1xuXG5mdW5jdGlvbiBjcmVhdGVSaWRlcihyaWRlck5hbWUpIHtcbiAgbGV0IHVuaXF1ZUlEID0gMTtcbiAgaWYgKHJpZGVycy5sZW5ndGggPiAwKSB1bmlxdWVJRCA9ICtyaWRlcnNbcmlkZXJzLmxlbmd0aCAtIDFdLnJpZGVySUQgKyAxO1xuXG4gIHVuaXF1ZUlEID0gdW5pcXVlSUQudG9TdHJpbmcoKTtcbiAgY29uc3QgbmV3UmlkZXIgPSBSaWRlcihyaWRlck5hbWUsIHVuaXF1ZUlEKTtcbiAgcmlkZXJzLnB1c2gobmV3UmlkZXIpO1xuXG4gIC8vIEFkZCByaWRlciB0byBkYXRhYmFzZS5cbn1cblxuZnVuY3Rpb24gZGVsZXRlUmlkZXIocmlkZXJJRCkge31cblxuZnVuY3Rpb24gaW1wb3J0UmlkZXJzKCkge1xuICAvLyBpbXBvcnQgZnJvbSBkYXRhYmFzZSBhbmQgYWRkIGl0IHRvIHJpZGVycy5cbn1cblxuZnVuY3Rpb24gdXBkYXRlRGF0YWJhc2UoKSB7XG4gIC8vdXBkYXRlIGRhdGFiYXNlIHdpdGggdGhlIHJpZGVycyBvbiB0aGUgcmlkZXJzIGFycmF5LlxufVxuXG5mdW5jdGlvbiBsaXN0QWxsUmlkZXJzKCkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRSaWRlcnNcIiwgXCJjb250ZW50XCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICByaWRlcnMuZm9yRWFjaCgocmlkZXIpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IHJpZGVyLm5hbWU7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH0pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGlzdCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRSaWRlcnNQYWdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VUaXRsZVwiKS50ZXh0Q29udGVudCA9IFwiUklERVJTXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5yZW1vdmUoKTtcbiAgbGlzdEFsbFJpZGVycygpO1xufVxuXG5leHBvcnQge1xuICByaWRlcnMsXG4gIGNyZWF0ZVJpZGVyLFxuICBkZWxldGVSaWRlcixcbiAgaW1wb3J0UmlkZXJzLFxuICB1cGRhdGVEYXRhYmFzZSxcbiAgbG9hZFJpZGVyc1BhZ2UsXG59O1xuIiwiaW1wb3J0IHsgcmlkZXJzIH0gZnJvbSBcIi4vcmlkZXJzXCI7XG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbi8vIEFycmF5IHdpdGggYXZhaWxhYmxlIHJpZGVyc1xubGV0IHJpZGVyc0F2YWlsYWJsZSA9IFtdO1xuXG4vLyBBcnJheSB3aXRoIHJpZGVycyBvbiBhIHJpZGVcbmxldCByaWRlcnNPbkFSaWRlID0gW107XG5cbi8vIEFycmF5IHdpdGggcmlkZXJzIG9uIGJyZWFrXG5sZXQgcmlkZXJzT25CcmVhayA9IFtdO1xuXG5mdW5jdGlvbiBhZGRSaWRlclRvUm90YXRpb24ocmlkZXJJRCkge1xuICBsZXQgcmlkZXJUb0FkZCA9IHJpZGVycy5maW5kKChyaWRlcikgPT4gcmlkZXIucmlkZXJJRCA9PSByaWRlcklEKTtcblxuICByaWRlcnNBdmFpbGFibGUucHVzaChyaWRlclRvQWRkLnJpZGVySUQpO1xuXG4gIHJlZnJlc2hSaWRlclJvdGF0aW9uKCk7XG4gIC8vIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuXG4gIGNvbnNvbGUubG9nKFwicmlkZXJzOlwiKTtcbiAgY29uc29sZS5sb2cocmlkZXJzKTtcbiAgY29uc29sZS5sb2coXCJyaWRlcnNBdmFpbGFibGU6XCIpO1xuICBjb25zb2xlLmxvZyhyaWRlcnNBdmFpbGFibGUpO1xuICBjb25zb2xlLmxvZyhcInJpZGVyc09uQVJpZGU6XCIpO1xuICBjb25zb2xlLmxvZyhyaWRlcnNPbkFSaWRlKTtcbiAgY29uc29sZS5sb2coXCJyaWRlcnNPbkJyZWFrOlwiKTtcbiAgY29uc29sZS5sb2cocmlkZXJzT25CcmVhayk7XG4gIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG59XG5cbmZ1bmN0aW9uIERlbGV0ZVJpZGVyKHVuaXF1ZUlEKSB7XG4gIC8vIEZpbmQgcmlkZXIgdG8gZGVsZXRlIHRocm91Z2ggSURcbiAgbGV0IHJpZGVyVG9EZWxldGUgPSByaWRlcnMuZmluZChmdW5jdGlvbiAocikge1xuICAgIHJldHVybiByLnJpZGVySUQgPT0gdW5pcXVlSUQ7XG4gIH0pO1xuXG4gIC8vIFJlbW92ZSByaWRlciBmcm9tIG9uZSBvZiB0aGUgcm90YXRpb24gYXJyYXlzXG4gIGlmIChyaWRlclRvRGVsZXRlLmlzT25BUmlkZSgpKSB7XG4gICAgcmlkZXJzT25BUmlkZS5zcGxpY2UocmlkZXJzT25BUmlkZS5pbmRleE9mKHVuaXF1ZUlEKSwgMSk7XG4gIH0gZWxzZSBpZiAocmlkZXJUb0RlbGV0ZS5pc09uQnJlYWsoKSkge1xuICAgIHJpZGVyc09uQnJlYWsuc3BsaWNlKHJpZGVyc09uQnJlYWsuaW5kZXhPZih1bmlxdWVJRCksIDEpO1xuICB9IGVsc2Uge1xuICAgIHJpZGVyc0F2YWlsYWJsZS5zcGxpY2UocmlkZXJzQXZhaWxhYmxlLmluZGV4T2YodW5pcXVlSUQpLCAxKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBmcm9tIG1haW4gYXJyYXlcbiAgbGV0IGluZGV4VG9EZWxldGUgPSByaWRlcnMuaW5kZXhPZihyaWRlclRvRGVsZXRlKTtcbiAgcmlkZXJzLnNwbGljZShpbmRleFRvRGVsZXRlLCAxKTtcblxuICBjb25zb2xlLmxvZyhcInJpZGVyczpcIik7XG4gIGNvbnNvbGUubG9nKHJpZGVycyk7XG4gIGNvbnNvbGUubG9nKFwicmlkZXJzQXZhaWxhYmxlOlwiKTtcbiAgY29uc29sZS5sb2cocmlkZXJzQXZhaWxhYmxlKTtcbiAgY29uc29sZS5sb2coXCJyaWRlcnNPbkFSaWRlOlwiKTtcbiAgY29uc29sZS5sb2cocmlkZXJzT25BUmlkZSk7XG4gIGNvbnNvbGUubG9nKFwicmlkZXJzT25CcmVhazpcIik7XG4gIGNvbnNvbGUubG9nKHJpZGVyc09uQnJlYWspO1xuICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xuXG4gIC8vUmVmcmVzaCByb3RhdGlvblxuICByZWZyZXNoUmlkZXJSb3RhdGlvbigpO1xuXG4gIC8vIFVwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiBTdGFydFJpZGUodW5pcXVlSUQpIHtcbiAgbGV0IHJpZGVyID0gcmlkZXJzLmZpbmQoZnVuY3Rpb24gKHIpIHtcbiAgICByZXR1cm4gci5yaWRlcklEID09IHVuaXF1ZUlEO1xuICB9KTtcblxuICBpZiAocmlkZXIuaXNPbkJyZWFrKCkpIHtcbiAgICByaWRlci50b2dnbGVPbkJyZWFrKCk7XG5cbiAgICByaWRlcnNPbkJyZWFrLnNwbGljZShyaWRlcnNPbkJyZWFrLmluZGV4T2YodW5pcXVlSUQpLCAxKTtcbiAgfSBlbHNlIHtcbiAgICByaWRlcnNBdmFpbGFibGUuc3BsaWNlKHJpZGVyc0F2YWlsYWJsZS5pbmRleE9mKHVuaXF1ZUlEKSwgMSk7XG4gIH1cblxuICByaWRlci50b2dnbGVPbkFSaWRlKCk7XG5cbiAgLy9JbnNlcnQgcmlkZXIgaW4gb24gYSByaWRlIGFycmF5XG4gIHJpZGVyc09uQVJpZGUucHVzaCh1bmlxdWVJRCk7XG5cbiAgY29uc29sZS5sb2coXCJyaWRlcnM6XCIpO1xuICBjb25zb2xlLmxvZyhyaWRlcnMpO1xuICBjb25zb2xlLmxvZyhcInJpZGVyc0F2YWlsYWJsZTpcIik7XG4gIGNvbnNvbGUubG9nKHJpZGVyc0F2YWlsYWJsZSk7XG4gIGNvbnNvbGUubG9nKFwicmlkZXJzT25BUmlkZTpcIik7XG4gIGNvbnNvbGUubG9nKHJpZGVyc09uQVJpZGUpO1xuICBjb25zb2xlLmxvZyhcInJpZGVyc09uQnJlYWs6XCIpO1xuICBjb25zb2xlLmxvZyhyaWRlcnNPbkJyZWFrKTtcbiAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcblxuICByZWZyZXNoUmlkZXJSb3RhdGlvbigpO1xuXG4gIC8vICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIEVuZFJpZGUodW5pcXVlSUQpIHtcbiAgbGV0IHJpZGVyID0gcmlkZXJzLmZpbmQoZnVuY3Rpb24gKHIpIHtcbiAgICByZXR1cm4gci5yaWRlcklEID09IHVuaXF1ZUlEO1xuICB9KTtcblxuICByaWRlci50b2dnbGVPbkFSaWRlKCk7XG5cbiAgLy8gUmVtb3ZlIHJpZGVyIGZyb20gT24gYSByaWRlIGFycmF5XG4gIHJpZGVyc09uQVJpZGUuc3BsaWNlKHJpZGVyc09uQVJpZGUuaW5kZXhPZih1bmlxdWVJRCksIDEpO1xuXG4gIC8vIEluc2VydCByaWRlciBvbiBhdmFpbGFibGUgYXJyYXlcbiAgcmlkZXJzQXZhaWxhYmxlLnB1c2godW5pcXVlSUQpO1xuXG4gIGNvbnNvbGUubG9nKFwicmlkZXJzOlwiKTtcbiAgY29uc29sZS5sb2cocmlkZXJzKTtcbiAgY29uc29sZS5sb2coXCJyaWRlcnNBdmFpbGFibGU6XCIpO1xuICBjb25zb2xlLmxvZyhyaWRlcnNBdmFpbGFibGUpO1xuICBjb25zb2xlLmxvZyhcInJpZGVyc09uQVJpZGU6XCIpO1xuICBjb25zb2xlLmxvZyhyaWRlcnNPbkFSaWRlKTtcbiAgY29uc29sZS5sb2coXCJyaWRlcnNPbkJyZWFrOlwiKTtcbiAgY29uc29sZS5sb2cocmlkZXJzT25CcmVhayk7XG4gIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG5cbiAgcmVmcmVzaFJpZGVyUm90YXRpb24oKTtcblxuICAvLyAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiBHb09uQnJlYWsodW5pcXVlSUQpIHtcbiAgbGV0IHJpZGVyID0gcmlkZXJzLmZpbmQoZnVuY3Rpb24gKHIpIHtcbiAgICByZXR1cm4gci5yaWRlcklEID09IHVuaXF1ZUlEO1xuICB9KTtcblxuICBpZiAoIXJpZGVyLmdldEhhZEJyZWFrKCkpIHtcbiAgICBpZiAocmlkZXIuaXNPbkFSaWRlKCkpIHtcbiAgICAgIHJpZGVyLnRvZ2dsZU9uQVJpZGUoKTtcbiAgICAgIHJpZGVyc09uQVJpZGUuc3BsaWNlKHJpZGVyc09uQVJpZGUuaW5kZXhPZih1bmlxdWVJRCksIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByaWRlcnNBdmFpbGFibGUuc3BsaWNlKHJpZGVyc0F2YWlsYWJsZS5pbmRleE9mKHVuaXF1ZUlEKSwgMSk7XG4gICAgfVxuXG4gICAgcmlkZXIudG9nZ2xlT25CcmVhaygpO1xuXG4gICAgcmlkZXJzT25CcmVhay5wdXNoKHVuaXF1ZUlEKTtcblxuICAgIHJlZnJlc2hSaWRlclJvdGF0aW9uKCk7XG5cbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcblxuICAgIGNvbnNvbGUubG9nKHJpZGVyc0F2YWlsYWJsZSk7XG4gICAgY29uc29sZS5sb2cocmlkZXJzT25BUmlkZSk7XG4gICAgY29uc29sZS5sb2cocmlkZXJzT25CcmVhayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gRW5kQnJlYWsodW5pcXVlSUQpIHtcbiAgbGV0IHJpZGVyID0gcmlkZXJzLmZpbmQoZnVuY3Rpb24gKHIpIHtcbiAgICByZXR1cm4gci5yaWRlcklEID09IHVuaXF1ZUlEO1xuICB9KTtcblxuICByaWRlci50b2dnbGVPbkJyZWFrKCk7XG4gIHJpZGVyc09uQnJlYWsuc3BsaWNlKHJpZGVyc09uQnJlYWsuaW5kZXhPZih1bmlxdWVJRCksIDEpO1xuXG4gIHJpZGVyc0F2YWlsYWJsZS5wdXNoKHVuaXF1ZUlEKTtcbiAgcmVmcmVzaFJpZGVyUm90YXRpb24oKTtcblxuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn1cblxuLy8gUmVmcmVzaCBSaWRlciBSb3RhdGlvbiBwYWdlXG5mdW5jdGlvbiByZWZyZXNoUmlkZXJSb3RhdGlvbigpIHtcbiAgY29uc3QgYXZhaWxhYmxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXZhaWxhYmxlXCIpO1xuICBjb25zdCBvbkFSaWRlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb25BUmlkZVwiKTtcbiAgY29uc3Qgb25BQnJlYWtMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvbkFCcmVha1wiKTtcblxuICBhdmFpbGFibGVMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIG9uQVJpZGVMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIG9uQUJyZWFrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHJpZGVyc0F2YWlsYWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgIGxldCByaWRlciA9IHJpZGVycy5maW5kKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4gci5yaWRlcklEID09IGlkO1xuICAgIH0pO1xuICAgIGxpc3RSaWRlcihyaWRlcik7XG4gIH0pO1xuXG4gIHJpZGVyc09uQVJpZGUuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICBsZXQgcmlkZXIgPSByaWRlcnMuZmluZChmdW5jdGlvbiAocikge1xuICAgICAgcmV0dXJuIHIucmlkZXJJRCA9PSBpZDtcbiAgICB9KTtcbiAgICBsaXN0UmlkZXIocmlkZXIpO1xuICB9KTtcblxuICByaWRlcnNPbkJyZWFrLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgbGV0IHJpZGVyID0gcmlkZXJzLmZpbmQoZnVuY3Rpb24gKHIpIHtcbiAgICAgIHJldHVybiByLnJpZGVySUQgPT0gaWQ7XG4gICAgfSk7XG4gICAgbGlzdFJpZGVyKHJpZGVyKTtcbiAgfSk7XG59XG5cbi8vIENyZWF0ZSByaWRlciBsaXN0IGl0ZW1cbmZ1bmN0aW9uIGxpc3RSaWRlcihyaWRlcikge1xuICBjb25zdCBvbkFSaWRlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb25BUmlkZVwiKTtcbiAgY29uc3QgYXZhaWxhYmxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXZhaWxhYmxlXCIpO1xuICBjb25zdCBvbkFCcmVha0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29uQUJyZWFrXCIpO1xuXG4gIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlzdEl0ZW0uaWQgPSBgbGktJHtyaWRlci5yaWRlcklEfWA7XG5cbiAgbGV0IHJpZGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmlkZXJCb3guY2xhc3NMaXN0LmFkZChcInJpZGVyQm94XCIpO1xuXG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZChcInJpZGVyTmFtZUJveFwiKTtcbiAgc3Bhbi5pZCA9IGBuYW1lQm94LSR7cmlkZXIucmlkZXJJRH1gO1xuICBzcGFuLnRleHRDb250ZW50ID0gcmlkZXIubmFtZTtcblxuICByaWRlckJveC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICBsZXQgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNDb250YWluZXJcIik7XG5cbiAgaWYgKHJpZGVyLmlzT25BUmlkZSgpKSB7XG4gICAgbGV0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImJhY2tcIik7XG4gICAgYmFja0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQmFja1wiO1xuICAgIGJhY2tCdXR0b24uaWQgPSBgYnJlYWtFbmQtJHtyaWRlci5yaWRlcklEfWA7XG5cbiAgICBsZXQgYnJlYWtCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJyZWFrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJicmVha1wiKTtcbiAgICBicmVha0J1dHRvbi5pZCA9IGBicmVhay0ke3JpZGVyLnJpZGVySUR9YDtcbiAgICBpZiAocmlkZXIuZ2V0SGFkQnJlYWsoKSkgYnJlYWtCdXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMC4zXCI7XG5cbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICBkZWxldGVCdXR0b24uaWQgPSBgZGVsZXRlLSR7cmlkZXIucmlkZXJJRH1gO1xuICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5vcmRlciA9IFwiM1wiO1xuXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrQnV0dG9uKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJyZWFrQnV0dG9uKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICByaWRlckJveC5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChyaWRlckJveCk7XG4gICAgb25BUmlkZUxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9IGVsc2UgaWYgKHJpZGVyLmlzT25CcmVhaygpKSB7XG4gICAgbGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3RhcnRcIik7XG4gICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSBcIkdvXCI7XG4gICAgc3RhcnRCdXR0b24uaWQgPSBgc3RhcnQtJHtyaWRlci5yaWRlcklEfWA7XG5cbiAgICBsZXQgYmFja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYmFja0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYmFja0Zyb21CcmVha1wiKTtcbiAgICBiYWNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJCYWNrXCI7XG4gICAgYmFja0J1dHRvbi5pZCA9IGBicmVha0VuZC0ke3JpZGVyLnJpZGVySUR9YDtcblxuICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5pZCA9IGBkZWxldGUtJHtyaWRlci5yaWRlcklEfWA7XG4gICAgZGVsZXRlQnV0dG9uLnN0eWxlLm9yZGVyID0gXCIzXCI7XG5cbiAgICAvLyBDcmVhdGUgdGltZXJcbiAgICBsZXQgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvdW50ZXIuY2xhc3NMaXN0LmFkZChcImJyZWFrVGltZXJcIik7XG4gICAgY291bnRlci5pZCA9IGBicmVha1RpbWVyLSR7cmlkZXIuaWR9YDtcblxuICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdG90YWxTZWNvbmRzTGVmdCA9XG4gICAgICAocmlkZXIuZ2V0QnJlYWtFbmRUaW1lKCkuZ2V0VGltZSgpIC0gdGltZU5vdy5nZXRUaW1lKCkpIC8gMTAwMDtcbiAgICBsZXQgc2Vjb25kc0xlZnQgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kc0xlZnQgJSA2MCk7XG4gICAgbGV0IG1pbnV0ZXNMZWZ0ID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHNMZWZ0IC8gNjApO1xuICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSBgJHttaW51dGVzTGVmdH06MCR7c2Vjb25kc0xlZnR9YDtcblxuICAgIGxldCB0aW1lckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGltZXJDaXJjbGUuY2xhc3NMaXN0LmFkZChcInRpbWVyLWNpcmNsZVwiKTtcbiAgICB0aW1lckNpcmNsZS5zdHlsZSA9IGAtLWR1cmF0aW9uOiAke3RvdGFsU2Vjb25kc0xlZnR9Oy0tc2l6ZTogMzA7YDtcbiAgICBsZXQgY2lyY2xlTWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2lyY2xlTWFzay5jbGFzc0xpc3QuYWRkKFwibWFza1wiKTtcblxuICAgIGxldCBpbnRlcnZhbEZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFyaWRlci5nZXRIYWRCcmVhaygpKSB1cGRhdGVDb3VudGRvd24ocmlkZXIpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrQnV0dG9uKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICByaWRlckJveC5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChyaWRlckJveCk7XG4gICAgdGltZXJDaXJjbGUuYXBwZW5kQ2hpbGQoY2lyY2xlTWFzayk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGltZXJDaXJjbGUpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xuXG4gICAgLy8gbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY291bnRlcik7XG4gICAgb25BQnJlYWtMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiKTtcbiAgICBkZWxldGVCdXR0b24uaWQgPSBgZGVsZXRlLSR7cmlkZXIucmlkZXJJRH1gO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgbGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3RhcnRcIik7XG4gICAgc3RhcnRCdXR0b24uaWQgPSBgc3RhcnQtJHtyaWRlci5yaWRlcklEfWA7XG4gICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSBcIkdvXCI7XG5cbiAgICBsZXQgYnJlYWtCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJyZWFrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJicmVha1wiKTtcbiAgICBicmVha0J1dHRvbi5pZCA9IGBicmVhay0ke3JpZGVyLnJpZGVySUR9YDtcblxuICAgIGlmIChyaWRlci5nZXRIYWRCcmVhaygpKSBicmVha0J1dHRvbi5zdHlsZS5vcGFjaXR5ID0gXCIwLjNcIjtcblxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnJlYWtCdXR0b24pO1xuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICBkZWxldGVCdXR0b24uc3R5bGUub3JkZXIgPSBcIjNcIjtcblxuICAgIHJpZGVyQm94LmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQocmlkZXJCb3gpO1xuXG4gICAgYXZhaWxhYmxlTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFJvdGF0aW9uUGFnZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLnJlbW92ZSgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VUaXRsZVwiKS50ZXh0Q29udGVudCA9IFwiUklERVIgUk9UQVRJT05cIjtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiLCBcImNvbnRlbnRSb3RhdGlvblwiKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgY29uc3Qgb25BUmlkZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGF2YWlsYWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG9uQUJyZWFrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG9uQVJpZGVDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGF2YWlsYWJsZUNvbnRhaW5lcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQob25BQnJlYWtDb250YWluZXIpO1xuXG4gIC8vIE9OIEEgUklERVxuICBjb25zdCBvbkFSaWRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgb25BUmlkZUxhYmVsLnRleHRDb250ZW50ID0gXCJPbiBhIHJpZGVcIjtcbiAgb25BUmlkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChvbkFSaWRlTGFiZWwpO1xuXG4gIGNvbnN0IG9uQVJpZGVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBvbkFSaWRlTGlzdC5jbGFzc0xpc3QuYWRkKFwicm90YXRpb25MaXN0XCIpO1xuICBvbkFSaWRlTGlzdC5pZCA9IFwib25BUmlkZVwiO1xuICBvbkFSaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKG9uQVJpZGVMaXN0KTtcblxuICAvLyBBVkFJTEFCTEVcbiAgY29uc3QgYXZhaWxhYmxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYXZhaWxhYmxlTGFiZWwudGV4dENvbnRlbnQgPSBcIkF2YWlsYWJsZVwiO1xuICBhdmFpbGFibGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYXZhaWxhYmxlTGFiZWwpO1xuXG4gIGNvbnN0IGF2YWlsYWJsZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGF2YWlsYWJsZUxpc3QuY2xhc3NMaXN0LmFkZChcInJvdGF0aW9uTGlzdFwiKTtcbiAgYXZhaWxhYmxlTGlzdC5pZCA9IFwiYXZhaWxhYmxlXCI7XG4gIGF2YWlsYWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhdmFpbGFibGVMaXN0KTtcblxuICAvLyBPTiBBIEJSRUFLXG4gIG9uQUJyZWFrQ29udGFpbmVyLmlkID0gXCJvbkFCcmVha1NlY3Rpb25cIjtcbiAgY29uc3Qgb25BQnJlYWtMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBvbkFCcmVha0xhYmVsLnRleHRDb250ZW50ID0gXCJPbiBCcmVha1wiO1xuICBvbkFCcmVha0NvbnRhaW5lci5hcHBlbmRDaGlsZChvbkFCcmVha0xhYmVsKTtcblxuICBjb25zdCBvbkFCcmVha0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIG9uQUJyZWFrTGlzdC5jbGFzc0xpc3QuYWRkKFwicm90YXRpb25MaXN0XCIpO1xuICBvbkFCcmVha0xpc3QuaWQgPSBcIm9uQUJyZWFrXCI7XG4gIG9uQUJyZWFrQ29udGFpbmVyLmFwcGVuZENoaWxkKG9uQUJyZWFrTGlzdCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZG93bihyaWRlcikge1xuICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XG4gIGxldCB0b3RhbFNlY29uZHNMZWZ0ID1cbiAgICAocmlkZXIuZ2V0QnJlYWtFbmRUaW1lKCkuZ2V0VGltZSgpIC0gdGltZU5vdy5nZXRUaW1lKCkpIC8gMTAwMDtcbiAgbGV0IHNlY29uZHNMZWZ0ID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHNMZWZ0ICUgNjApO1xuICBsZXQgbWludXRlc0xlZnQgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kc0xlZnQgLyA2MCk7XG4gIGxldCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2JyZWFrVGltZXItJHtyaWRlci5pZH1gKTtcblxuICBpZiAoc2Vjb25kc0xlZnQgPCAxMCkgY291bnRlci50ZXh0Q29udGVudCA9IGAke21pbnV0ZXNMZWZ0fTowJHtzZWNvbmRzTGVmdH1gO1xuICBlbHNlIGNvdW50ZXIudGV4dENvbnRlbnQgPSBgJHttaW51dGVzTGVmdH06JHtzZWNvbmRzTGVmdH1gO1xuICBpZiAobWludXRlc0xlZnQgPD0gMSkgY291bnRlci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG5cbiAgaWYgKG1pbnV0ZXNMZWZ0IDw9IDAgJiYgc2Vjb25kc0xlZnQgPD0gMCkge1xuICAgIGFsZXJ0KGAke3JpZGVyLm5hbWV9IGhhcyBmaW5pc2hlZCBoaXMgYnJlYWshYCk7XG4gICAgRW5kQnJlYWsocmlkZXIucmlkZXJJRCk7XG4gICAgLy8gY2xlYXJJbnRlcnZhbChpbnRlcnZhbEZ1bmN0aW9uKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBsb2FkUm90YXRpb25QYWdlLFxuICByaWRlcnNBdmFpbGFibGUsXG4gIHJpZGVyc09uQVJpZGUsXG4gIHJpZGVyc09uQnJlYWssXG4gIGFkZFJpZGVyVG9Sb3RhdGlvbixcbiAgU3RhcnRSaWRlLFxuICBFbmRSaWRlLFxuICBHb09uQnJlYWssXG4gIEVuZEJyZWFrLFxuICBEZWxldGVSaWRlcixcbn07XG4iLCJpbXBvcnQgeyByaWRlcnMsIHJpZGVyc0F2YWlsYWJsZSwgcmlkZXJzT25BUmlkZSwgcmlkZXJzT25CcmVhayB9IGZyb20gJy4vaW5kZXgnO1xuXG5mdW5jdGlvbiBpbXBvcnRSaWRlcihpbmRleCkge1xuXG4gICAgbGV0IGltcG9ydGVkT2JqZWN0PSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGByaWRlcnNbJHtpbmRleH1dYCkpO1xuICAgIFxuICAgIHJldHVybiBpbXBvcnRlZE9iamVjdDtcbn1cblxuLy8gVXBkYXRlIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcblxuICAgIC8vIENsZWFyIGxvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuICAgIC8vIFNhdmUgcmlkZXJzIGFycmF5IGFuZCBsZW5ndGggb2YgYXJyYXlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJpZGVyc0xlbmd0aFwiLCByaWRlcnMubGVuZ3RoKTtcblxuICAgIHJpZGVycy5mb3JFYWNoKCBmdW5jdGlvbihyaWRlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcmlkZXJzWyR7cmlkZXJzLmluZGV4T2YocmlkZXIpfV1gLCBKU09OLnN0cmluZ2lmeShyaWRlcikpO1xuICAgIH0pO1xuXG4gICAgLy8gU2F2ZSByaWRlcnMgYXZhaWxhYmxlIGFycmF5IGFuZCBsZW5ndGggb2YgYXJyYXlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJpZGVyc0F2YWlsYWJsZUxlbmd0aFwiLCByaWRlcnNBdmFpbGFibGUubGVuZ3RoKTtcblxuICAgIHJpZGVyc0F2YWlsYWJsZS5mb3JFYWNoKCBmdW5jdGlvbihyaWRlcklEKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGByaWRlcnNBdmFpbGFibGVbJHtyaWRlcnNBdmFpbGFibGUuaW5kZXhPZihyaWRlcklEKX1dYCwgcmlkZXJJRCk7XG4gICAgfSk7XG5cbiAgICAvLyBTYXZlIHJpZGVycyBvbiBhIHJpZGUgYXJyYXkgYW5kIGxlbmd0aCBvZiBhcnJheVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmlkZXJzT25BUmlkZUxlbmd0aFwiLCByaWRlcnNPbkFSaWRlLmxlbmd0aCk7XG5cbiAgICByaWRlcnNPbkFSaWRlLmZvckVhY2goIGZ1bmN0aW9uKHJpZGVySUQpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHJpZGVyc09uQVJpZGVbJHtyaWRlcnNPbkFSaWRlLmluZGV4T2YocmlkZXJJRCl9XWAsIHJpZGVySUQpO1xuICAgIH0pO1xuXG4gICAgLy8gU2F2ZSByaWRlcnMgb24gYnJlYWsgYXJyYXkgYW5kIGxlbmd0aCBvZiBhcnJheVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmlkZXJzT25CcmVha0xlbmd0aFwiLCByaWRlcnNPbkJyZWFrLmxlbmd0aCk7XG5cbiAgICByaWRlcnNPbkJyZWFrLmZvckVhY2goIGZ1bmN0aW9uKHJpZGVySUQpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHJpZGVyc09uQnJlYWtbJHtyaWRlcnNPbkJyZWFrLmluZGV4T2YocmlkZXJJRCl9XWAsIHJpZGVySUQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBpbXBvcnRSaWRlciwgdXBkYXRlTG9jYWxTdG9yYWdlIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9