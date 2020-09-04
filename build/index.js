(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_tomatoe_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/tomatoe.svg */ "./src/images/tomatoe.svg");
/* harmony import */ var _images_popcorn_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/popcorn.svg */ "./src/images/popcorn.svg");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon */ "./src/icon.js");









function Edit(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      isSelected = _ref.isSelected,
      setAttributes = _ref.setAttributes;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      embedError = _useState4[0],
      setEmbedError = _useState4[1];
  /**
   * Scrape movie information
   * @param {string} url The URL of the movie
   */


  var scrapeMovieData = function scrapeMovieData(movie_url) {
    setLoading(true);
    setEmbedError(''); // ajax request action

    var action = 'gutentomatoes_action';
    var plugin_action = 'scrape_url';
    var nonce = document.getElementById('gutentomatoes_nonce').value; // ajax request data

    var data = {
      nonce: nonce,
      movie_url: movie_url,
      action: action,
      plugin_action: plugin_action
    };
    jQuery.post(ajaxurl, data, function (response) {
      setLoading(false);

      if (response.status !== 'success') {
        // set alert message
        var alertMessage = '';

        switch (response.data) {
          case 'invalid_url':
            alertMessage = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Please, use a valid Rotten Tomatoes URL', 'gutentomatoes');
            break;

          case 'no_html':
            alertMessage = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('We were unable to get the necessary information. Please, try to use a different URL.', 'gutentomatoes');
            break;

          case 'no_schema_found':
            alertMessage = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('We were unable to get the necessary information. Please, try to use a different URL.', 'gutentomatoes');
            break;

          default:
            break;
        } // set alert message


        setEmbedError(alertMessage);
        return;
      }

      setAttributes({
        moviePoster: response.data.poster,
        movieName: response.data.name,
        movieTomatometer: response.data.tomatometer,
        movieReviewCount: response.data.review_count,
        movieCriticsConsensus: response.data.critics_consensus,
        movieAudienceScore: response.data.audience_score,
        movieUserRatingsCount: response.data.user_ratings_count
      });
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: className
  }, isLoading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Placeholder"], {
    isColumnLayout: true,
    className: "gutentomato-movie--loading"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Spinner"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Getting data from Rotten Tomatoes...', 'gutentomatoes'))), attributes.movieName && !isLoading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gutentomato-movie"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    className: "gutentomato-movie__poster",
    src: attributes.moviePoster,
    alt: "".concat(attributes.movieName, " poster")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", {
    className: "gutentomato-movie__name"
  }, attributes.movieName), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h4", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Critics Consensus', 'gutentomatoes')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: "gutentomato-movie__critics-consensus"
  }, attributes.movieCriticsConsensus), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gutentomato-movie__scores-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "col col--tomatometer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    src: _images_tomatoe_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "tomatoe icon"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "gutentomato-movie__score"
  }, attributes.movieTomatometer), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Tomatometer', 'gutentomatoes')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Total Count:', 'gutentomatoes'), ' ', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "gutentomato-movie__count"
  }, attributes.movieReviewCount))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "col col--audience"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    src: _images_popcorn_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "popcorn icon"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "gutentomato-movie__audience-score"
  }, attributes.movieAudienceScore), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Audience Score', 'gutentomatoes')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('User Ratings:', 'gutentomatoes'), ' ', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "gutentomato-movie__user-ratings-count"
  }, attributes.movieUserRatingsCount)))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    href: attributes.movieURL,
    className: "gutentomato-movie__url",
    target: "_blank",
    rel: "nofollow noopener noreferrer"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Learn more on Rotten Tomatoes', 'gutentomatoes')))), (isSelected || !attributes.movieURL) && !attributes.moviePoster && !isLoading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Placeholder"], {
    icon: _icon__WEBPACK_IMPORTED_MODULE_7__["default"],
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Rotten Tomatoes Movie URL', 'gutentomatoes'),
    instructions: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Paste a link to the content you want to display on your site.', 'gutentomatoes')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("form", {
    onSubmit: function onSubmit() {
      return parseURL(attributes.movieURL);
    },
    className: "gutentomato-movie__form"
  }, embedError && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: "gutentomato-movie__error-message"
  }, embedError), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    value: attributes.movieURL || '',
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enter movie URL to embed here...', 'gutentomatoes'),
    onChange: function onChange(val) {
      setAttributes({
        movieURL: val
      });
    },
    disabled: isLoading,
    type: "url",
    required: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    isPrimary: true,
    disabled: isLoading,
    onClick: function onClick() {
      return scrapeMovieData(attributes.movieURL);
    }
  }, "Embed"))));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "20",
  height: "20",
  fill: "white"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M3.42267 5.48624C-0.68959 9.52151 1.42753 14.3993 2.585 15.9946C7.73522 22.1236 16.1409 19.6963 18.9309 15.1316C19.6264 13.9333 22.2258 7.32067 15.4283 3.73535L3.42267 5.48624Z",
  fill: "#F93208"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M6.2655 5.25707L6.96349 3.96262L11.1133 3.22656L12.7377 4.57178L6.2655 5.25707Z",
  fill: "#F93208"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M6.23957 0.77173L7.54973 0L8.53684 2.26131C9.09088 1.33765 10.5514 -0.122276 12.1801 1.57931C11.4894 1.76391 11.0821 2.14253 11.0495 2.81768C13.262 2.20853 15.6283 3.28702 15.9491 4.14579C14.3493 3.51556 11.9032 5.66175 9.84686 4.48676C9.84817 6.68467 8.00365 6.91709 6.9394 6.98137C7.24282 6.25151 7.75618 5.52136 7.15473 4.79194C6.04183 5.98563 5.12789 6.35041 2.30896 5.47388C3.02129 5.2286 4.47736 3.80993 5.88054 3.80481C4.89079 3.44441 4.08511 3.49993 3.27811 3.58933C3.70426 3.01067 5.05295 1.36922 7.45991 2.35108L6.23957 0.77173Z",
  fill: "#02902E"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/images/popcorn.svg":
/*!********************************!*\
  !*** ./src/images/popcorn.svg ***!
  \********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgPopcorn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "popcorn_svg__a",
  d: "M.018.125h59.584v79.857H.018z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(10.112)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "popcorn_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#popcorn_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M2.531 19.099c.23 4.896 12.358 8.777 27.27 8.692 13.023-.074 23.886-3.15 26.548-7.19a3.902 3.902 0 00-2.388-1.262 3.903 3.903 0 00-3.266-4.189 3.905 3.905 0 00-3.854-4.657c-.048.001-.096.007-.144.009.137-.403.215-.834.212-1.284a3.905 3.905 0 00-3.926-3.882 3.89 3.89 0 00-1.4.271A3.901 3.901 0 0038.4 3.544a3.903 3.903 0 00-3.894-3.42 3.895 3.895 0 00-3.08 1.54A3.89 3.89 0 0028.531.399a3.905 3.905 0 00-3.692 5.107c-.88.163-1.654.62-2.22 1.266a3.904 3.904 0 00-3.79-2.891 3.902 3.902 0 00-3.657 2.61 3.903 3.903 0 00-2.442 3.64c.002.366.058.718.154 1.054a3.884 3.884 0 00-1.584-.328 3.903 3.903 0 00-3.664 2.626 3.876 3.876 0 00-1.662-.365 3.904 3.904 0 00-3.882 3.927 3.88 3.88 0 00.536 1.947c-.034.034-.064.072-.097.108",
  fill: "#F9D320",
  mask: "url(#popcorn_svg__b)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M50.974 68.158c-1.146 1.74-3.374 3.543-5.705 4.745l3.985-40.418c2.535-.814 5.01-1.893 6.832-3.441l-5.112 39.114zm-9.67 6.43c-3.859 1.278-6.103 1.673-9.314 1.989l.5-41.534c3.548-.101 8.14-.582 12.053-1.417l-3.24 40.963zm-23.006 0L15.06 33.627c3.912.835 8.504 1.316 12.052 1.417l.5 41.534c-3.211-.316-5.455-.711-9.314-1.988zm-9.67-6.43L3.517 29.044c1.823 1.548 4.297 2.627 6.832 3.441l3.985 40.418c-2.331-1.202-4.558-3.005-5.704-4.745zm42.06-54.547a3.913 3.913 0 01.007 1.538 3.902 3.902 0 013.266 4.189c.944.125 1.781.587 2.388 1.261-2.661 4.041-13.525 7.117-26.548 7.192-14.911.085-27.04-3.796-27.27-8.692.033-.036.063-.074.097-.108a3.894 3.894 0 01-.471-1.294C.729 19.052-.135 20.145.017 21.736c.015.212 6.317 45.335 6.317 45.335C7.061 74.217 17.439 79.929 29.801 80c12.362-.07 22.74-5.783 23.467-12.93 0 0 6.302-45.122 6.317-45.334.302-3.183-3.422-6.072-8.897-8.125z",
  fill: "#DB382A",
  mask: "url(#popcorn_svg__b)"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M25.171 33.626l3.239 40.963c3.859 1.277 6.102 1.672 9.314 1.988l-.5-41.534c-3.549-.101-8.14-.582-12.053-1.417M42.101 76.577c3.212-.316 5.455-.711 9.314-1.988l3.239-40.963c-3.912.835-8.504 1.316-12.052 1.417l-.5 41.534M55.38 72.903c2.332-1.202 4.559-3.005 5.705-4.745l5.112-39.114c-1.822 1.548-4.296 2.627-6.831 3.441L55.38 72.903M13.628 29.044l5.112 39.114c1.146 1.74 3.373 3.543 5.704 4.745L20.46 32.485c-2.535-.814-5.009-1.893-6.831-3.441",
  fill: "#FFFFFE"
}));

function SvgPopcorn(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 80,
    height: 80
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucy9Ub21hdG9tZXRlciAmYW1wOyBBUy9wb3Bjb3JuX3JlZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMC4wMTc4NDM4NjYyIDAuMTI0OTA3MDYzIDU5LjYwMTkzMDcgMC4xMjQ5MDcwNjMgNTkuNjAxOTMwNyA3OS45ODIxNTYxIDAuMDE3ODQzODY2MiA3OS45ODIxNTYxIj48L3BvbHlnb24+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iSWNvbnMvVG9tYXRvbWV0ZXItJmFtcDstQVMvcG9wY29ybl9yZWQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cC0yIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5IiBmaWxsPSIjMDAwMDAwIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiPjwvcmVjdD4KICAgICAgICAgICAgPGcgaWQ9IlJUX0F1ZGllbmNlX1JlZFBvcGNvcm5fUkdCLSgyKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMTExNTI0LCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjUzMTE1MjQyLDE5LjA5ODg4NDggQzIuNzYxNjM1NjksMjMuOTk1MjQxNiAxNC44ODkyMTkzLDI3Ljg3NjI4MjUgMjkuODAwNzQzNSwyNy43OTEyMjY4IEM0Mi44MjM3OTE4LDI3LjcxNjg3NzMgNTMuNjg3NDM0OSwyNC42NDExODk2IDU2LjM0ODU1MDIsMjAuNjAwNDQ2MSBDNTUuNzQyMTU2MSwxOS45MjY1NDI4IDU0LjkwNDY4NCwxOS40NjQzODY2IDUzLjk2MTMzODMsMTkuMzM5MTgyMiBDNTMuOTcxNDQ5OCwxOS4yMjAyMjMgNTMuOTc3OTkyNiwxOS4xMDAzNzE3IDUzLjk3NzM5NzgsMTguOTc4NzM2MSBDNTMuOTY2Mzk0MSwxNy4wNDIzNzkyIDUyLjU0NjAyMjMsMTUuNDQ3NzMyMyA1MC42OTUzMTYsMTUuMTUwMzM0NiBDNTAuNzQ0MDg5MiwxNC44OTk5MjU3IDUwLjc2OTY2NTQsMTQuNjQwODkyMiA1MC43NjgxNzg0LDE0LjM3NTkxMDggQzUwLjc1NTk4NTEsMTIuMjE5NDc5NiA0OC45OTc3Njk1LDEwLjQ4MTQ4NyA0Ni44NDEzMzgzLDEwLjQ5MzY4MDMgQzQ2Ljc5MjU2NTEsMTAuNDkzOTc3NyA0Ni43NDQ5ODE0LDEwLjQ5OTkyNTcgNDYuNjk2NTA1NiwxMC41MDIwMDc0IEM0Ni44MzQ0OTgxLDEwLjA5ODczNjEgNDYuOTExODIxNiw5LjY2NzgwNjY5IDQ2LjkwOTQ0MjQsOS4yMTc4NDM4NyBDNDYuODk2OTUxNyw3LjA2MTQxMjY0IDQ1LjEzOTAzMzUsNS4zMjM0MjAwNyA0Mi45ODI2MDIyLDUuMzM1NjEzMzggQzQyLjQ4NzczMjMsNS4zMzg1ODczNiA0Mi4wMTY5NTE3LDUuNDM3MDI2MDIgNDEuNTgyMTU2MSw1LjYwNzQzNDk0IEM0MC45NjUzNTMyLDQuNDQ2Mzk0MDUgMzkuNzgxMTE1MiwzLjYzNzE3NDcyIDM4LjQwMDI5NzQsMy41NDM3OTE4MiBDMzguMTU5NzAyNiwxLjYwNzQzNDk0IDM2LjUwNTU3NjIsMC4xMTM2MDU5NDggMzQuNTA2MTcxLDAuMTI0ODQzMzY3IEMzMy4yNDc4ODEsMC4xMzIwNDQ2MSAzMi4xMzUwMTg2LDAuNzM2MzU2ODc3IDMxLjQyNjMxOTcsMS42NjQ1MzUzMiBDMzAuNzA3NTA5MywwLjg4MjM3OTE4MiAyOS42NzczMjM0LDAuMzkxNjcyODYyIDI4LjUzMTQ0OTgsMC4zOTgyMTU2MTMgQzI2LjM3NTAxODYsMC40MTA0MDg5MjIgMjQuNjM3MDI2LDIuMTY4NjI0NTQgMjQuNjQ5MjE5Myw0LjMyNDc1ODM2IEMyNC42NTE1OTg1LDQuNzM2NjU0MjggMjQuNzE4NTEzLDUuMTMyNDkwNzEgMjQuODM4NjYxNyw1LjUwNDUzNTMyIEMyMy45NTg2NjE3LDUuNjY3ODA2NjkgMjMuMTg0ODMyNyw2LjEyNTIwNDQ2IDIyLjYxOTE4MjIsNi43NzE0NDk4MSBDMjIuMTcwMTExNSw1LjA5ODg4NDc2IDIwLjY0Mjk3NCwzLjg2OTczOTc4IDE4LjgyOTczOTgsMy44Nzk4NTEzIEMxNy4xMzU3NjIxLDMuODg5NjY1NDMgMTUuNzA0MDg5Miw0Ljk3ODczNjA2IDE1LjE3MjM0Miw2LjQ4OTgxNDEzIEMxMy43MzMyMzQyLDcuMDcxODIxNTYgMTIuNzIwMjk3NCw4LjQ4MzU2ODc3IDEyLjcyOTgxNDEsMTAuMTMwMjYwMiBDMTIuNzMxODk1OSwxMC40OTYwNTk1IDEyLjc4NzgwNjcsMTAuODQ4MTc4NCAxMi44ODM4NjYyLDExLjE4MzY0MzEgQzEyLjM5ODUxMywxMC45NzEzMDExIDExLjg2MzQ5NDQsMTAuODUyMzQyIDExLjI5OTYyODMsMTAuODU1NjEzNCBDOS41OTk0MDUyLDEwLjg2NTQyNzUgOC4xNjMyNzEzOCwxMS45NjIyMzA1IDcuNjM1OTg1MTMsMTMuNDgyMjMwNSBDNy4xMzA0MDg5MiwxMy4yNDcyODYyIDYuNTY4MzI3MTQsMTMuMTEzNzU0NiA1Ljk3MzgyOSwxMy4xMTczMjM0IEMzLjgxNzM5Nzc3LDEzLjEyOTUxNjcgMi4wNzkxMDc4MSwxNC44ODc0MzQ5IDIuMDkxNTMxNjIsMTcuMDQzODY2MiBDMi4wOTU0NjQ2OCwxNy43NTQ5NDQyIDIuMjkyNjM5NDEsMTguNDE4NzM2MSAyLjYyODEwNDA5LDE4Ljk5MDkyOTQgQzIuNTkzOTAzMzUsMTkuMDI1NDI3NSAyLjU2Mzg2NjE3LDE5LjA2MzE5NyAyLjUzMTE1MjQyLDE5LjA5ODg4NDgiIGlkPSJGaWxsLTEiIGZpbGw9IiNGOUQzMjAiIG1hc2s9InVybCgjbWFzay0yKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01MC45NzM2ODAzLDY4LjE1NzYyMDggQzQ5LjgyNzUwOTMsNjkuODk4MjkgNDcuNjAwMjk3NCw3MS43MDA4MTc4IDQ1LjI2OTI5MzcsNzIuOTAyNjAyMiBMNDkuMjU0MTI2NCwzMi40ODUzNTMyIEM1MS43ODk0NDI0LDMxLjY3MDc4MDcgNTQuMjYzNDk0NCwzMC41OTE1MjQyIDU2LjA4NTk0OCwyOS4wNDM4NjYyIEw1MC45NzM2ODAzLDY4LjE1NzYyMDggWiBNNDEuMzAzNzkxOCw3NC41ODg1NTAyIEMzNy40NDUwNTU4LDc1Ljg2NTU3NjIgMzUuMjAxNDg3LDc2LjI2MTQxMjYgMzEuOTg5NTkxMSw3Ni41NzY2NTQzIEwzMi40OTAxMTE1LDM1LjA0MzI3MTQgQzM2LjAzODM2NDMsMzQuOTQxNTYxMyA0MC42MzAxODU5LDM0LjQ2MDY2OTEgNDQuNTQyNzUwOSwzMy42MjU1NzYyIEw0MS4zMDM3OTE4LDc0LjU4ODU1MDIgWiBNMTguMjk4MjksNzQuNTg4NTUwMiBMMTUuMDU5NjI4MywzMy42MjU1NzYyIEMxOC45NzE4OTU5LDM0LjQ2MDY2OTEgMjMuNTYzNzE3NSwzNC45NDE1NjEzIDI3LjExMTk3MDMsMzUuMDQzMjcxNCBMMjcuNjEyNDkwNyw3Ni41NzY2NTQzIEMyNC40MDA1OTQ4LDc2LjI2MTQxMjYgMjIuMTU3MzIzNCw3NS44NjU1NzYyIDE4LjI5ODI5LDc0LjU4ODU1MDIgWiBNOC42Mjg2OTg4OCw2OC4xNTc2MjA4IEwzLjUxNjEzMzgzLDI5LjA0Mzg2NjIgQzUuMzM4NTg3MzYsMzAuNTkxNTI0MiA3LjgxMjYzOTQxLDMxLjY3MDc4MDcgMTAuMzQ3OTU1NCwzMi40ODUzNTMyIEwxNC4zMzI3ODgxLDcyLjkwMjYwMjIgQzEyLjAwMTc4NDQsNzEuNzAwODE3OCA5Ljc3NDU3MjQ5LDY5Ljg5ODI5IDguNjI4Njk4ODgsNjguMTU3NjIwOCBaIE01MC42ODc4ODEsMTMuNjExMDAzNyBDNTAuNzM4NDM4NywxMy44NTc4NDM5IDUwLjc2NjY5MTQsMTQuMTEzMDExMiA1MC43NjgxNzg0LDE0LjM3NTAxODYgQzUwLjc2OTY2NTQsMTQuNjQgNTAuNzQ0MDg5MiwxNC44OTkwMzM1IDUwLjY5NTAxODYsMTUuMTQ5NDQyNCBDNTIuNTQ2MDIyMywxNS40NDY1NDI4IDUzLjk2NjM5NDEsMTcuMDQxMTg5NiA1My45NzczOTc4LDE4Ljk3Nzg0MzkgQzUzLjk3Nzk5MjYsMTkuMDk5MTgyMiA1My45NzE0NDk4LDE5LjIxOTMzMDkgNTMuOTYxMzM4MywxOS4zMzc5OTI2IEM1NC45MDQ2ODQsMTkuNDYzMTk3IDU1Ljc0MjE1NjEsMTkuOTI1MzUzMiA1Ni4zNDg1NTAyLDIwLjU5OTI1NjUgQzUzLjY4NzczMjMsMjQuNjQwMjk3NCA0Mi44MjM3OTE4LDI3LjcxNTk4NTEgMjkuODAxMDQwOSwyNy43OTA2MzIgQzE0Ljg4OTUxNjcsMjcuODc1OTg1MSAyLjc2MTkzMzA5LDIzLjk5NTI0MTYgMi41MzExNTI0MiwxOS4wOTg1ODc0IEMyLjU2Mzg2NjE3LDE5LjA2MzE5NyAyLjU5MzkwMzM1LDE5LjAyNTEzMDEgMi42MjgxMDQwOSwxOC45OTA5Mjk0IEMyLjM5NzkxODIyLDE4LjU5ODM2NDMgMi4yMzkxMDc4MSwxOC4xNjA4OTIyIDIuMTU3MDI2MDIsMTcuNjk2NjU0MyBDMC43MjkyMTkzMzEsMTkuMDUxODk1OSAtMC4xMzQ3MjExOSwyMC4xNDQ1MzUzIDAuMDE3MjQ5MDcwNiwyMS43MzU2MTM0IEMwLjAzMTgyMTU2MTMsMjEuOTQ4MjUyOCA2LjMzMzk3NzcsNjcuMDcwOTI5NCA2LjMzMzk3NzcsNjcuMDcwOTI5NCBDNy4wNjExMTUyNCw3NC4yMTczOTc4IDE3LjQzODgxMDQsNzkuOTI5MjE5MyAyOS44MDEwNDA5LDgwIEM0Mi4xNjMyNzE0LDc5LjkyOTIxOTMgNTIuNTQxMjYzOSw3NC4yMTczOTc4IDUzLjI2ODEwNDEsNjcuMDcwOTI5NCBDNTMuMjY4MTA0MSw2Ny4wNzA5Mjk0IDU5LjU3MDI2MDIsMjEuOTQ4MjUyOCA1OS41ODQ4MzI3LDIxLjczNTYxMzQgQzU5Ljg4NjY5MTQsMTguNTUzMTU5OSA1Ni4xNjI5NzQsMTUuNjY0MjM3OSA1MC42ODc4ODEsMTMuNjExMDAzNyBMNTAuNjg3ODgxLDEzLjYxMTAwMzcgWiIgaWQ9IkZpbGwtMyIgZmlsbD0iI0RCMzgyQSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUuMDU5NjI4MywzMy42MjU1NzYyIEwxOC4yOTgyOSw3NC41ODg1NTAyIEMyMi4xNTczMjM0LDc1Ljg2NTU3NjIgMjQuNDAwNTk0OCw3Ni4yNjE0MTI2IDI3LjYxMjQ5MDcsNzYuNTc2NjU0MyBMMjcuMTExOTcwMywzNS4wNDMyNzE0IEMyMy41NjM3MTc1LDM0Ljk0MTU2MTMgMTguOTcxODk1OSwzNC40NjA2NjkxIDE1LjA1OTYyODMsMzMuNjI1NTc2MiIgaWQ9IkZpbGwtNSIgZmlsbD0iI0ZGRkZGRSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTMxLjk4OTU5MTEsNzYuNTc2NjU0MyBDMzUuMjAxNDg3LDc2LjI2MTQxMjYgMzcuNDQ0NzU4NCw3NS44NjU1NzYyIDQxLjMwMzc5MTgsNzQuNTg4NTUwMiBMNDQuNTQyNDUzNSwzMy42MjU1NzYyIEM0MC42MzAxODU5LDM0LjQ2MDY2OTEgMzYuMDM4MzY0MywzNC45NDE1NjEzIDMyLjQ5MDExMTUsMzUuMDQzMjcxNCBMMzEuOTg5NTkxMSw3Ni41NzY2NTQzIiBpZD0iRmlsbC02IiBmaWxsPSIjRkZGRkZFIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDUuMjY5MjkzNyw3Mi45MDI2MDIyIEM0Ny42MDAyOTc0LDcxLjcwMDgxNzggNDkuODI3NTA5Myw2OS44OTgyOSA1MC45NzMzODI5LDY4LjE1NzYyMDggTDU2LjA4NTk0OCwyOS4wNDM4NjYyIEM1NC4yNjM0OTQ0LDMwLjU5MTUyNDIgNTEuNzg5NDQyNCwzMS42NzA3ODA3IDQ5LjI1NDEyNjQsMzIuNDg1MzUzMiBMNDUuMjY5MjkzNyw3Mi45MDI2MDIyIiBpZD0iRmlsbC03IiBmaWxsPSIjRkZGRkZFIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMy41MTYxMzM4MywyOS4wNDM4NjYyIEw4LjYyODQwMTQ5LDY4LjE1NzYyMDggQzkuNzc0NTcyNDksNjkuODk4MjkgMTIuMDAxNzg0NCw3MS43MDA4MTc4IDE0LjMzMjc4ODEsNzIuOTAyNjAyMiBMMTAuMzQ3OTU1NCwzMi40ODUzNTMyIEM3LjgxMjYzOTQxLDMxLjY3MDc4MDcgNS4zMzg1ODczNiwzMC41OTE1MjQyIDMuNTE2MTMzODMsMjkuMDQzODY2MiIgaWQ9IkZpbGwtOCIgZmlsbD0iI0ZGRkZGRSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");


/***/ }),

/***/ "./src/images/tomatoe.svg":
/*!********************************!*\
  !*** ./src/images/tomatoe.svg ***!
  \********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgTomatoe; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "tomatoe_svg__a",
  d: "M0 .247h77.083v63.468H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(1.328 16.266)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "tomatoe_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#tomatoe_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M77.014 27.043C76.242 14.674 69.952 5.42 60.488.247c.053.301-.215.678-.52.545-6.19-2.708-16.693 6.056-24.031 1.466.055 1.647-.267 9.682-11.585 10.148-.268.011-.415-.262-.246-.455 1.514-1.726 3.042-6.097.845-8.428-4.706 4.217-7.44 5.804-16.463 3.71C2.711 13.274-.562 21.542.08 31.841c1.311 21.025 21.005 33.044 40.837 31.806 19.83-1.236 37.408-15.58 36.097-36.604",
  fill: "#FA320A",
  mask: "url(#tomatoe_svg__b)"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M42.2 11.465c4.075-.971 15.796-.095 19.551 4.887.225.299-.092.864-.455.705-6.19-2.708-16.693 6.056-24.032 1.467.056 1.647-.266 9.682-11.585 10.148-.267.01-.414-.262-.245-.455 1.514-1.727 3.042-6.098.845-8.428-5.127 4.594-7.906 6.07-19.032 3.062-.364-.098-.24-.683.147-.83 2.103-.804 6.867-4.324 11.374-5.876a15.308 15.308 0 012.549-.657c-4.963-.444-7.2-1.134-10.356-.658a.392.392 0 01-.367-.627c4.253-5.478 12.088-7.132 16.922-4.222-2.98-3.692-5.314-6.636-5.314-6.636l5.53-3.142 3.948 8.82c4.114-6.078 11.768-6.639 15.001-2.326.192.256-.008.62-.328.613-2.633-.064-4.082 2.33-4.192 4.15l.039.005",
  fill: "#00912D"
}));

function SvgTomatoe(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 80,
    height: 80
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucy9Ub21hdG9tZXRlciAmYW1wOyBBUy9mcmVzaDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMC4wMDAxMDkxMDAxMDIgMC4yNDY5NzA5NTQgNzcuMDgyNzgzNyAwLjI0Njk3MDk1NCA3Ny4wODI3ODM3IDYzLjcxNDUyMjggMC4wMDAxMDkxMDAxMDIgNjMuNzE0NTIyOCI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Ikljb25zL1RvbWF0b21ldGVyLSZhbXA7LUFTL2ZyZXNoIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMiIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj48L3JlY3Q+CiAgICAgICAgICAgIDxnIGlkPSJSVF9GcmVzaF9Ub21hdG9fUkdCLSgxKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4zMjc4MDEsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE2LjI2NTU2MCkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03Ny4wMTM3NzU5LDI3LjA0MjY1NTYgQzc2LjI0MjMyMzcsMTQuNjc0MTkwOSA2OS45NTIxOTkyLDUuNDIwNDE0OTQgNjAuNDg3NjM0OSwwLjI0Njk3MDk1NCBDNjAuNTQxNDEwOCwwLjU0ODM4MTc0MyA2MC4yNzMxOTUsMC45MjUxNDUyMjggNTkuOTY3ODAwOCwwLjc5MTcwMTI0NSBDNTMuNzc3MjYxNCwtMS45MTYzNDg1NSA0My4yNzUzNTI3LDYuODQ3ODAwODMgMzUuOTM2NTk3NSwyLjI1ODI1NzI2IEMzNS45OTE3MDEyLDMuOTA1Mzk0MTkgMzUuNjcwMDQxNSwxMS45NDAyNDkgMjQuMzUxNTM1MywxMi40MDYzMDcxIEMyNC4wODQzMTU0LDEyLjQxNzI2MTQgMjMuOTM3MjYxNCwxMi4xNDQzOTgzIDI0LjEwNjIyNDEsMTEuOTUxMjAzMyBDMjUuNjE5OTE3LDEwLjIyNDczMDMgMjcuMTQ4MjE1OCw1Ljg1MzYwOTk2IDI0Ljk1MDcwNTQsMy41MjMzMTk1IEMyMC4yNDQ2NDczLDcuNzQwNDE0OTQgMTcuNTExNzAxMiw5LjMyNzQ2ODg4IDguNDg4Mjk4NzYsNy4yMzMxOTUwMiBDMi43MTEwMzczNCwxMy4yNzQwMjQ5IC0wLjU2MjY1NTYwMiwyMS41NDE5MDg3IDAuMDgsMzEuODQxMzI3OCBDMS4zOTEyMDMzMiw1Mi44NjYzOSAyMS4wODQ4MTMzLDY0Ljg4NDY0NzMgNDAuOTE2NTE0NSw2My42NDcxMzY5IEM2MC43NDY4ODgsNjIuNDEwNjIyNCA3OC4zMjUzMTEyLDQ4LjA2NzcxNzggNzcuMDEzNzc1OSwyNy4wNDI2NTU2IiBpZD0iRmlsbC0xIiBmaWxsPSIjRkEzMjBBIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00MC44NzE3MDEyLDExLjQ2NDg5NjMgQzQ0Ljk0NjcyMiwxMC40OTM2MSA1Ni42Njc4ODM4LDExLjM3MDI5MDUgNjAuNDIzMjM2NSwxNi4zNTE4NjcyIEM2MC42NDg2MzA3LDE2LjY1MDYyMjQgNjAuMzMxMjg2MywxNy4yMTU5MzM2IDU5Ljk2NzgwMDgsMTcuMDU3MjYxNCBDNTMuNzc3MjYxNCwxNC4zNDkyMTE2IDQzLjI3NTM1MjcsMjMuMTEzMzYxIDM1LjkzNjU5NzUsMTguNTIzODE3NCBDMzUuOTkxNzAxMiwyMC4xNzA5NTQ0IDM1LjY3MDA0MTUsMjguMjA1ODA5MSAyNC4zNTE1MzUzLDI4LjY3MTg2NzIgQzI0LjA4NDMxNTQsMjguNjgyODIxNiAyMy45MzcyNjE0LDI4LjQwOTk1ODUgMjQuMTA2MjI0MSwyOC4yMTY3NjM1IEMyNS42MTk5MTcsMjYuNDkwMjkwNSAyNy4xNDc4ODM4LDIyLjExOTE3MDEgMjQuOTUwNzA1NCwxOS43ODg4Nzk3IEMxOS44MjQzOTgzLDI0LjM4MjczODYgMTcuMDQ1MzExMiwyNS44NTg5MjEyIDUuOTE5MDA0MTUsMjIuODUxNDUyMyBDNS41NTQ4NTQ3NywyMi43NTMxOTUgNS42NzkwMDQxNSwyMi4xNjc5NjY4IDYuMDY2MzkwMDQsMjIuMDIwMjQ5IEM4LjE2OTI5NDYxLDIxLjIxNjU5NzUgMTIuOTMzNDQ0LDE3LjY5NjU5NzUgMTcuNDQwNjYzOSwxNi4xNDUwNjIyIEMxOC4yOTg3NTUyLDE1Ljg0OTk1ODUgMTkuMTU0MTkwOSwxNS42MjA5MTI5IDE5Ljk4OTA0NTYsMTUuNDg3ODAwOCBDMTUuMDI2MzksMTUuMDQ0MzE1NCAxMi43ODkzNzc2LDE0LjM1NDE5MDkgOS42MzI4NjMwNywxNC44MzAyMDc1IEM5LjI4Njk3MDk1LDE0Ljg4MjMyMzcgOS4wNTE5NTAyMSwxNC40Nzk2NjggOS4yNjYzOTAwNCwxNC4yMDM0ODU1IEMxMy41MTkzMzYxLDguNzI1MzExMiAyMS4zNTQwMjQ5LDcuMDcwODcxMzcgMjYuMTg3ODgzOCw5Ljk4MTA3ODg0IEMyMy4yMDgyOTg4LDYuMjg5MTI4NjMgMjAuODc0MzU2OCwzLjM0NDczMDI5IDIwLjg3NDM1NjgsMy4zNDQ3MzAyOSBMMjYuNDA0NjQ3MywwLjIwMzQ4NTQ3NyBDMjYuNDA0NjQ3MywwLjIwMzQ4NTQ3NyAyOC42ODk0NjA2LDUuMzA4MjE1NzcgMzAuMzUxODY3Miw5LjAyMzQwMjQ5IEMzNC40NjU3MjYxLDIuOTQ1MDYyMjQgNDIuMTE5ODM0LDIuMzg0MDY2MzkgNDUuMzUzNjkyOSw2LjY5Njc2MzQ5IEM0NS41NDU1NjAyLDYuOTUzMDI5MDUgNDUuMzQ1MDYyMiw3LjMxNzUxMDM3IDQ1LjAyNDczMDMsNy4zMDk4NzU1MiBDNDIuMzkyNjk3MSw3LjI0NTgwOTEzIDQwLjk0MzQwMjUsOS42Mzk4MzQwMiA0MC44MzM1MjcsMTEuNDYwNTgwOSBMNDAuODcxNzAxMiwxMS40NjQ4OTYzIiBpZD0iRmlsbC00IiBmaWxsPSIjMDA5MTJEIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/icon.js");






Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('create-block/gutentomatoes', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Rotten Tomatoes', 'gutentomatoes'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Use this block to add Rotten Tomatoes movie ratings to your posts or pages', 'gutentomatoes'),
  category: 'embed',
  icon: _icon__WEBPACK_IMPORTED_MODULE_5__["default"],
  supports: {
    html: false
  },
  attributes: {
    movieURL: {
      type: 'string',
      source: 'attribute',
      selector: '.gutentomato-movie__url',
      attribute: 'href'
    },
    moviePoster: {
      type: 'string',
      source: 'attribute',
      selector: '.gutentomato-movie__poster',
      attribute: 'src'
    },
    movieName: {
      type: 'string',
      source: 'text',
      selector: '.gutentomato-movie__name'
    },
    movieTomatometer: {
      type: 'string',
      source: 'text',
      selector: '.gutentomato-movie__score'
    },
    movieReviewCount: {
      type: 'string',
      source: 'text',
      selector: '.gutentomato-movie__count'
    },
    movieCriticsConsensus: {
      type: 'string',
      source: 'text',
      selector: '.gutentomato-movie__critics-consensus'
    },
    movieAudienceScore: {
      type: 'string',
      source: 'text',
      selector: '.gutentomato-movie__audience-score'
    },
    movieUserRatingsCount: {
      type: 'string',
      source: 'text',
      selector: '.gutentomato-movie__user-ratings-count'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_tomatoe_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/tomatoe.svg */ "./src/images/tomatoe.svg");
/* harmony import */ var _images_popcorn_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/popcorn.svg */ "./src/images/popcorn.svg");




function Save(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, attributes.movieURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(className, " gutentomato-movie")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    className: "gutentomato-movie__poster",
    src: attributes.moviePoster,
    alt: "".concat(attributes.movieName, " poster")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: "gutentomato-movie__name"
  }, attributes.movieName), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Critics Consensus', 'gutentomatoes')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "gutentomato-movie__critics-consensus"
  }, attributes.movieCriticsConsensus), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gutentomato-movie__scores-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col col--tomatometer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: _images_tomatoe_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "tomatoe icon"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "gutentomato-movie__score"
  }, attributes.movieTomatometer), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tomatometer', 'gutentomatoes')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Total Count:', 'gutentomatoes'), ' ', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "gutentomato-movie__count"
  }, attributes.movieReviewCount))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col col--audience"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: _images_popcorn_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "popcorn icon"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "gutentomato-movie__audience-score"
  }, attributes.movieAudienceScore), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Audience Score', 'gutentomatoes')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('User Ratings:', 'gutentomatoes'), ' ', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "gutentomato-movie__user-ratings-count"
  }, attributes.movieUserRatingsCount)))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: attributes.movieURL,
    className: "gutentomato-movie__url",
    target: "_blank",
    rel: "nofollow noopener noreferrer"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Learn more on Rotten Tomatoes', 'gutentomatoes')))));
}

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map