/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		19: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Production Setup
// Papertrail = add to here
// var serverSetup = 'production';
var serverSetup = 'staging';
// var serverSetup = 'development';
// var serverSetup = 'local';

var configVariables = {
  production: {
    stage: 'production',
    REDIS_URL: 'redis://localhost:6379',
    MONGO_URL: 'mongodb//localhost:27017/limechat?retryWrites=true&w=majority',
    PORT: int(process.env.PORT) || 4200,
    COOKIE_SECRET: 'limechatneedStogrow100xby2020',
    VERBOSE: bool(process.env.VERBOSE) || false, // Log 200s?
    CONCURRENCY: int(process.env.CONCURRENCY) || 1, // Number of Cluster processes to fork in Server
    WORKER_CONCURRENCY: int(process.env.WORKER_CONCURRENCY) || 2, // Number of Cluster processes to fork in Worker
    THRIFTY: bool(process.env.THRIFTY) || false, // Web process also executes job queue?
    VIEW_CACHE: bool(process.env.VIEW_CACHE) || true, // Cache rendered views?
    MONGO_CACHE: int(process.env.MONGO_CACHE) || 10000, // LRU cache for mongo queries
    APP_INSTANCE_COUNT: 1,
    APP_MAX_MEMORY: 512
  },
  staging: {
    stage: 'production',
    REDIS_URL: 'redis://localhost:6379',
    MONGO_URL: 'mongodb://limechat:limechat123@ds027835.mlab.com:27835/limechat',
    PORT: int(process.env.PORT) || 4200,
    COOKIE_SECRET: 'limechatneedStogrow100xby2020',
    VERBOSE: bool(process.env.VERBOSE) || false, // Log 200s?
    CONCURRENCY: int(process.env.CONCURRENCY) || 1, // Number of Cluster processes to fork in Server
    WORKER_CONCURRENCY: int(process.env.WORKER_CONCURRENCY) || 2, // Number of Cluster processes to fork in Worker
    THRIFTY: bool(process.env.THRIFTY) || false, // Web process also executes job queue?
    VIEW_CACHE: bool(process.env.VIEW_CACHE) || true, // Cache rendered views?
    MONGO_CACHE: int(process.env.MONGO_CACHE) || 10000, // LRU cache for mongo queries
    APP_INSTANCE_COUNT: 1,
    APP_MAX_MEMORY: 512
  },
  development: {
    stage: 'production',
    REDIS_URL: 'redis://localhost:6379',
    MONGO_URL: 'mongodb//localhost:27017/limechat?retryWrites=true&w=majority',
    PORT: int(process.env.PORT) || 4200,
    COOKIE_SECRET: 'limechatneedStogrow100xby2020',
    VERBOSE: bool(process.env.VERBOSE) || false, // Log 200s?
    CONCURRENCY: int(process.env.CONCURRENCY) || 1, // Number of Cluster processes to fork in Server
    WORKER_CONCURRENCY: int(process.env.WORKER_CONCURRENCY) || 2, // Number of Cluster processes to fork in Worker
    THRIFTY: bool(process.env.THRIFTY) || false, // Web process also executes job queue?
    VIEW_CACHE: bool(process.env.VIEW_CACHE) || true, // Cache rendered views?
    MONGO_CACHE: int(process.env.MONGO_CACHE) || 10000, // LRU cache for mongo queries
    APP_INSTANCE_COUNT: 1,
    APP_MAX_MEMORY: 512
  },
  local: {
    stage: 'production',
    REDIS_URL: 'redis://localhost:6379',
    MONGO_URL: 'mongodb//localhost:27017/limechat?retryWrites=true&w=majority',
    PORT: int(process.env.PORT) || 4200,
    COOKIE_SECRET: 'limechatneedStogrow100xby2020',
    VERBOSE: bool(process.env.VERBOSE) || false, // Log 200s?
    CONCURRENCY: int(process.env.CONCURRENCY) || 1, // Number of Cluster processes to fork in Server
    WORKER_CONCURRENCY: int(process.env.WORKER_CONCURRENCY) || 2, // Number of Cluster processes to fork in Worker
    THRIFTY: bool(process.env.THRIFTY) || false, // Web process also executes job queue?
    VIEW_CACHE: bool(process.env.VIEW_CACHE) || true, // Cache rendered views?
    MONGO_CACHE: int(process.env.MONGO_CACHE) || 10000, // LRU cache for mongo queries
    APP_INSTANCE_COUNT: 1,
    APP_MAX_MEMORY: 512
  },
  test: {
    stage: 'production',
    REDIS_URL: 'redis://localhost:6379',
    MONGO_URL: 'mongodb//localhost:27017/limechat?retryWrites=true&w=majority',
    PORT: int(process.env.PORT) || 8080,
    COOKIE_SECRET: 'limechatneedStogrow100xby2020',
    VERBOSE: bool(process.env.VERBOSE) || false, // Log 200s?
    CONCURRENCY: int(process.env.CONCURRENCY) || 1, // Number of Cluster processes to fork in Server
    WORKER_CONCURRENCY: int(process.env.WORKER_CONCURRENCY) || 2, // Number of Cluster processes to fork in Worker
    THRIFTY: bool(process.env.THRIFTY) || false, // Web process also executes job queue?
    VIEW_CACHE: bool(process.env.VIEW_CACHE) || true, // Cache rendered views?
    MONGO_CACHE: int(process.env.MONGO_CACHE) || 10000, // LRU cache for mongo queries
    APP_INSTANCE_COUNT: 1,
    APP_MAX_MEMORY: 512
  }
};

exports.default = configVariables[serverSetup];


function bool(str) {
  if (str == void 0) return false;
  return str.toLowerCase() === 'true';
}

function int(str) {
  if (!str) return 0;
  return parseInt(str, 10);
}

function float(str) {
  if (!str) return 0;
  return parseFloat(str, 10);
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"STATUS_SUCCESS_OK":200,"STATUS_SUCCESS_CREATED":201,"PERMANENT_REDIRECT":301,"TEMPORARY_REDIRECT":302,"NOT_FOUND":404,"INTERNAL_SERVER_ERROR":500}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-notification-system-redux");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initial State
var initialState = {};

// Import Actions


var AppReducer = function AppReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    // case HANDLE_TOGGLE_SIDEBAR_STATUS:
    //   return {
    //     ...state,
    //     isShowSideBar: action.isShowSideBar
    //   };

    default:
      return state;
  }
};

/* Selectors */
// Main App

//Network

// export const getVenueList = state => state.app.venues;

// Export Reducer
exports.default = AppReducer;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _reactHelmet = __webpack_require__(14);

var _Header = __webpack_require__(38);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(39);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_Header2.default, {});

var _ref2 = _jsx(_Footer2.default, {});

var App = exports.App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var contentSegment = void 0;
      contentSegment = this.props.children;
      return _jsx(_react2.default.Fragment, {}, void 0, _jsx(_reactHelmet.Helmet, {
        title: 'Limechat AI'
      }), _ref, contentSegment, _ref2);
    }
  }]);

  return App;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = undefined;
exports.default = callApi;

var _isomorphicFetch = __webpack_require__(34);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

function callApi(endpoint) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
  var body = arguments[2];

  var token = typeof window === 'undefined' ? '' : window.localStorage.getItem('token');
  var headers = {};
  headers['content-type'] = 'application/json';
  if (token && token !== '') {
    headers.Authorization = 'Bearer ' + token;
  }
  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
    headers: headers,
    method: method,
    body: JSON.stringify(body)
  }).then(function (response) {
    return response.json().then(function (json) {
      return { json: json, response: response };
    });
  }).then(function (_ref) {
    var json = _ref.json,
        response = _ref.response;

    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  }).then(function (response) {
    return response;
  }, function (error) {
    return error;
  });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
//import WOW from 'wowjs';
// Webpack Requirements


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _raven = __webpack_require__(18);

var _raven2 = _interopRequireDefault(_raven);

var _compression = __webpack_require__(19);

var _compression2 = _interopRequireDefault(_compression);

var _mongoose = __webpack_require__(4);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = __webpack_require__(20);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(21);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _chalk = __webpack_require__(22);

var _chalk2 = _interopRequireDefault(_chalk);

var _webpack = __webpack_require__(10);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(24);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = __webpack_require__(25);

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _store = __webpack_require__(26);

var _reactRedux = __webpack_require__(6);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(36);

var _reactRouter = __webpack_require__(1);

var _reactHelmet = __webpack_require__(14);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routes = __webpack_require__(37);

var _routes2 = _interopRequireDefault(_routes);

var _auth = __webpack_require__(41);

var _auth2 = _interopRequireDefault(_auth);

var _main = __webpack_require__(47);

var _main2 = _interopRequireDefault(_main);

var _post = __webpack_require__(49);

var _post2 = _interopRequireDefault(_post);

var _blog = __webpack_require__(52);

var _blog2 = _interopRequireDefault(_blog);

var _lead = __webpack_require__(55);

var _lead2 = _interopRequireDefault(_lead);

var _fetchData = __webpack_require__(58);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _webpackConfig = __webpack_require__(60);

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _path = __webpack_require__(64);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize the Express App
var app = new _express2.default();
// React And Redux Setup


// Import required modules

// Apply body Parser and server public assets and routes
_mongoose2.default.Promise = global.Promise;

var dbOptions = {
  reconnectTries: 300, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 50 // Maintain up to 10 socket connections
};

// MongoDB Connection
_mongoose2.default.connect(_config2.default.MONGO_URL, dbOptions, function (error) {
  console.log('DB Connection Open');
  console.log('DB - ' + _config2.default.MONGO_URL);
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
});

if (process.env.NODE_ENV === 'development') {

  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
  app.use((0, _webpackHotMiddleware2.default)(compiler));
}

app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json({ limit: '20mb' }));
app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../static')));
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist/desktop')));

app.use('/api', _post2.default);
app.use('/api', _blog2.default);
app.use('/api', _auth2.default);
app.use('/api', _main2.default);
app.use('/api', _lead2.default);

// Render Initial HTML
var renderDesktopFullPage = function renderDesktopFullPage(html, initialState) {

  var head = _reactHelmet2.default.rewind();
  // Import Manifests
  var assetsManifest = process.env.webpackDesktopAssets && JSON.parse(process.env.webpackDesktopAssets);
  var chunkManifest = process.env.webpackDesktopChunkAssets && JSON.parse(process.env.webpackDesktopChunkAssets);

  // TODO: Production marker for style sheet change
  // ${process.env.NODE_ENV === 'production' ? `<link rel='stylesheet' href='${assetsManifest['/app.css']}' />` : ''}

  return '\n    <!doctype html>\n    <html>\n      <head>\n      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n  <!-- Required meta tags -->\n\n  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n  <!-- Favicon -->\n  <link rel="shortcut icon" href="/assets/logo/logo-icon.svg">\n  <!-- Bootstrap CSS -->\n  <link rel="stylesheet" href="/assets/bootstrap.min.css">\n  <!-- Magnific Popup -->\n  <link rel="stylesheet" type="text/css" href="/assets/magnific-popup.css">\n  <!-- Typography CSS -->\n  <link rel="stylesheet" href="/assets/typography.css">\n  <!-- Style CSS -->\n  <link rel="stylesheet" href="/assets/style.css">\n  <link rel="stylesheet" href="/assets/daterangepicker.css">\n\n  <!-- Responsive CSS -->\n\n  <link\n    rel="stylesheet"\n    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.3.0/animate.css"\n  />\n<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js"></script>\n\n<!--  <link-->\n<!--    rel="stylesheet"-->\n<!--    href="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js"-->\n<!--  />-->\n  <link rel="stylesheet" href="/assets/responsive.css">\n\n  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>\n\n    <link rel="stylesheet" href="https://owlcarousel2.github.io/OwlCarousel2/assets/owlcarousel/assets/owl.carousel.min.css">\n    <link rel="stylesheet" href="https://owlcarousel2.github.io/OwlCarousel2/assets/owlcarousel/assets/owl.theme.default.min.css">\n    <script src="https://owlcarousel2.github.io/OwlCarousel2/assets/owlcarousel/owl.carousel.js"></script>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>\n  \t\t  ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n      </head>\n      <body>\n        ' + html + '\n      </body>\n       <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          window._vmMobile = ' + JSON.stringify(false) + ';\n          window._vmDesktop = ' + JSON.stringify(true) + ';\n\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n           (function(){\n            new WOW().init();\n            })()\n        </script>\n\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['app.js'] : '/app.js') + '\'></script>\n<script src="./assets/jquery-3.3.1.min.js"></script>\n<!-- popper -->\n<script src="/assets/popper.min.js"></script>\n<!-- bootstrap -->\n<script src="/assets/bootstrap.min.js"></script>\n<!-- Owl Carousel -->\n<script src="/assets/owl.carousel.min.js"></script>\n<!-- main -->\n<script src="/assets/main.js"></script>\n<!--custom -->\n<script src="/assets/custom.js"></script>\n    </html>\n  ';
};

// Render Initial HTML

// <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js'}'></script>
// <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js'}'></script>

var renderDesktopError = function renderDesktopError(err) {
  var softTab = '&#32;&#32;&#32;&#32;';
  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
  return renderDesktopFullPage('Server Error' + errTrace, {});
};

var renderDesktopNotFound = function renderDesktopNotFound(initialStore) {
  var initHtml = '<div class="container">\n<div class="row">\n      <div class="col-md-12">\n        <div class="error-template text-center" style="margin-top: 220px;">\n          <h1 style="font-size: 40px; color: #fff; text-transform: uppercase;">404 ERROR!</h1>\n          <div class="error-details">\n            <p class="text-uppercase" style="font-size: 18px; color: #fff;">The link you followed is probably broken or the page has been removed.</p>\n            <a href="/" class="text-uppercase">\n              <img src="https://venuemonk-images.s3.amazonaws.com/images/404-down-arrow.png" alt="404 page home link button" width=\'200\' />\n              <p style="color: #fff; position: absolute; bottom: 90; left 0; width: 100%;">Return to Home Page</p>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>';
  return renderDesktopFullPage(initHtml, initialStore);
};

app.enable('trust proxy');

app.use("*", function (req, res, next) {
  var hostname = req.hostname,
      originalUrl = req.originalUrl,
      protocol = req.protocol,
      method = req.method;

  console.log((method === "GET" ? _chalk2.default.getReq(method) : _chalk2.default.postReq(method)) + '  ' + protocol + '://' + hostname + ':' + _config2.default.PORT + originalUrl);
  next();
});

// Server Side Rendering based on routes matched by React-router.
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  var initialState = {};
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
    if (err) {
      return res.status(500).end(renderDesktopError(err));
    }

    if (redirectLocation) {
      return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }
    var store = (0, _store.configureStore)(initialState);
    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
        store: store
      }, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps)));
      var finalState = store.getState();
      if (finalState && finalState.app && finalState.app.isPageNotFound) {
        res.set('Content-Type', 'text/html').status(404).end(renderDesktopNotFound(finalState));
      } else if (finalState && finalState.app && finalState.app.isPageRedirect && finalState.app.redirectUrl && finalState.app.redirectUrl !== '') {
        res.redirect(finalState.app.redirectStatus !== '' ? finalState.app.redirectStatus : 301, '' + finalState.app.redirectUrl + renderProps.location.search);
      } else {
        res.set('X-Cache', 'MISS').set('Content-Type', 'text/html').status(200).end(renderDesktopFullPage(initialView, finalState));
      }
    }).catch(function (error) {
      return next(error);
    });
  });
});

// start app
app.listen(_config2.default.PORT, function (error) {
  if (!error) {
    console.log('MERN is running on port: ' + _config2.default.PORT + '! Build something amazing!'); // eslint-disable-line
  }
});

exports.default = app;
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("raven");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _chalk = __webpack_require__(23);

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    error: _chalk2.default.red,
    success: _chalk2.default.green,
    getReq: _chalk2.default.magenta,
    postReq: _chalk2.default.cyan
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _redux = __webpack_require__(11);

var _reduxThunk = __webpack_require__(27);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _DevTools = __webpack_require__(28);

var _DevTools2 = _interopRequireDefault(_DevTools);

var _reducers = __webpack_require__(32);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Main store function
 */
function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Middleware and store enhancers
  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
  }

  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

  // For hot reloading reducers
  if (false) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', function () {
      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = __webpack_require__(29);

var _reduxDevtoolsLogMonitor = __webpack_require__(30);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(31);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
  toggleVisibilityKey: 'ctrl-h',
  changePositionKey: 'ctrl-w'
}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-log-monitor");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-dock-monitor");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reactNotificationSystemRedux = __webpack_require__(12);

var _AppReducer = __webpack_require__(13);

var _AppReducer2 = _interopRequireDefault(_AppReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combine all reducers into one root reducer
exports.default = (0, _redux.combineReducers)({
  app: _AppReducer2.default,
  toasts: _reactNotificationSystemRedux.reducer
});

// Import Reducers
/**
 * Root Reducer
 */

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactRouter = __webpack_require__(1);

var _apiCaller = __webpack_require__(16);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _ToastAdd = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userNotify = userNotify;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactNotificationSystemRedux = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function userNotify(msg, msgtype) {
  var notificationOpts = {
    message: msg,
    position: 'tc',
    autoDismiss: 2,
    level: msgtype
  };

  var shortlistNotificationOpts = {
    message: msg,
    position: 'tc',
    autoDismiss: 3,
    level: msgtype
  };

  switch (_lodash2.default.lowerCase(msgtype)) {
    case 'warning':
      return (0, _reactNotificationSystemRedux.warning)(notificationOpts);

    case 'danger':
      return (0, _reactNotificationSystemRedux.error)(notificationOpts);

    case 'error':
      return (0, _reactNotificationSystemRedux.error)(notificationOpts);

    case 'info':
      return (0, _reactNotificationSystemRedux.info)(notificationOpts);

    case 'success':
      return (0, _reactNotificationSystemRedux.success)(notificationOpts);

    case 'shortlist':
      return (0, _reactNotificationSystemRedux.info)(shortlistNotificationOpts);

    default:
      return (0, _reactNotificationSystemRedux.show)(notificationOpts);
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); // eslint-disable global-require


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

var _AuthWrapper = __webpack_require__(40);

var _AuthWrapper2 = _interopRequireDefault(_AuthWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require.ensure polyfill for node
if (false) {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
 https://github.com/reactjs/react-router/issues/2182 and
 https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */

if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  __webpack_require__(15);
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/

exports.default = _jsx(_reactRouter.Route, {
  path: '/',
  component: _App2.default
}, void 0, _jsx(_reactRouter.IndexRoute, {
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(1).then((function (require) {
      cb(null, __webpack_require__(72).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/admin/login',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(11).then((function (require) {
      cb(null, __webpack_require__(74).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/admin/case-study/create',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(18).then((function (require) {
      cb(null, __webpack_require__(75).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/admin/case-study/:url/edit',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(17).then((function (require) {
      cb(null, __webpack_require__(76).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/blog/:url',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(6).then((function (require) {
      cb(null, __webpack_require__(77).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/admin/blog/create',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(16).then((function (require) {
      cb(null, __webpack_require__(78).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/admin/blog/:url/edit',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(15).then((function (require) {
      cb(null, __webpack_require__(79).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/about-us',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(4).then((function (require) {
      cb(null, __webpack_require__(80).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/contact-us',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(14).then((function (require) {
      cb(null, __webpack_require__(81).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/sales-support',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(0).then((function (require) {
      cb(null, __webpack_require__(82).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/terms-service',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(9).then((function (require) {
      cb(null, __webpack_require__(83).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/privacy-policy',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(10).then((function (require) {
      cb(null, __webpack_require__(84).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/customer-support',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(2).then((function (require) {
      cb(null, __webpack_require__(85).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/technology',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(3).then((function (require) {
      cb(null, __webpack_require__(86).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/case-studies',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(7).then((function (require) {
      cb(null, __webpack_require__(87).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/blogs',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(8).then((function (require) {
      cb(null, __webpack_require__(88).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/get-demo',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(13).then((function (require) {
      cb(null, __webpack_require__(89).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/case-study/:url',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(5).then((function (require) {
      cb(null, __webpack_require__(90).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '*',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* require.ensure */(12).then((function (require) {
      cb(null, __webpack_require__(91).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}));

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = Header;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx("img", {
  src: "/assets/logo/logo_green.svg",
  className: "img-fluid logo",
  alt: "img"
});

var _ref2 = _jsx("img", {
  src: "/assets/logo/logo_white.svg",
  className: "img-fluid logo-white",
  alt: "img"
});

var _ref3 = _jsx("button", {
  className: "navbar-toggler",
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarSupportedContent",
  "aria-controls": "navbarSupportedContent",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation"
}, void 0, _jsx("span", {
  className: "navbar-toggler-icon"
}));

var _ref4 = _jsx("div", {
  className: "collapse navbar-collapse",
  id: "navbarSupportedContent"
}, void 0, _jsx("ul", {
  className: "navbar-nav ml-auto"
}, void 0, _jsx("li", {
  className: "nav-item dropdown"
}, void 0, _jsx(_reactRouter.Link, {
  className: "nav-link dropdown-toggle",
  to: "#",
  id: "navbarDropdown",
  role: "button",
  "data-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, void 0, "Product"), _jsx("div", {
  className: "dropdown-menu dropdown-menu-mobile-margin",
  "aria-labelledby": "navbarDropdown",
  "data-toggle": "collapse",
  "data-target": "#navbarSupportedContent"
}, void 0, _jsx(_reactRouter.Link, {
  className: "dropdown-item",
  to: "/sales-support"
}, void 0, "Sales Support"), _jsx(_reactRouter.Link, {
  className: "dropdown-item",
  to: "/customer-support"
}, void 0, "Customer Support"))), _jsx("li", {
  className: "nav-item dropdown"
}, void 0, _jsx(_reactRouter.Link, {
  className: "nav-link dropdown-toggle",
  to: "/about-us",
  id: "navbarDropdown",
  role: "button",
  "data-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, void 0, "About Us"), _jsx("div", {
  className: "dropdown-menu dropdown-menu-mobile-margin",
  "aria-labelledby": "navbarDropdown",
  "data-toggle": "collapse",
  "data-target": "#navbarSupportedContent"
}, void 0, _jsx(_reactRouter.Link, {
  className: "dropdown-item",
  to: "/about-us"
}, void 0, "About Us"), _jsx(_reactRouter.Link, {
  className: "dropdown-item",
  to: "/technology"
}, void 0, "Technology"))), _jsx("li", {
  className: "nav-item dropdown"
}, void 0, _jsx(_reactRouter.Link, {
  className: "nav-link dropdown-toggle",
  to: "resources.html",
  id: "navbarDropdown",
  role: "button",
  "data-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, void 0, "Resources"), _jsx("div", {
  className: "dropdown-menu dropdown-menu-mobile-margin",
  "aria-labelledby": "navbarDropdown",
  "data-toggle": "collapse",
  "data-target": "#navbarSupportedContent"
}, void 0, _jsx(_reactRouter.Link, {
  className: "dropdown-item",
  to: "/case-studies"
}, void 0, "Case Study"), _jsx(_reactRouter.Link, {
  className: "dropdown-item",
  to: "/blogs"
}, void 0, "Blog "))), _jsx("li", {
  className: "nav-item",
  "data-toggle": "collapse",
  "data-target": "#navbarSupportedContent"
}, void 0, _jsx(_reactRouter.Link, {
  className: "nav-link",
  to: "/get-demo"
}, void 0, "Get Demo"))));

function Header(props) {
  return _jsx("header", {
    className: ""
  }, void 0, _jsx("div", {
    className: "container-fluid main-header"
  }, void 0, _jsx("div", {
    className: "row"
  }, void 0, _jsx("div", {
    className: "col-sm-12"
  }, void 0, _jsx("nav", {
    className: "navbar navbar-expand-lg navbar-light"
  }, void 0, _jsx(_reactRouter.Link, {
    className: "navbar-brand",
    to: "/"
  }, void 0, _ref, _ref2), _ref3, _ref4)))));
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = Footer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx("span", {
  className: "nav-link"
}, void 0, "53, Sector 14, Faridabad, Haryana,", _jsx("br", {}), " India-121007");

var _ref2 = _jsx("a", {
  href: "https://www.facebook.com/limechat/?ref=py_c"
}, void 0, _jsx("img", {
  src: "https://ik.imagekit.io/m52sq26n4h/facebook_white.svg"
}));

var _ref3 = _jsx(_reactRouter.Link, {
  className: "nav-link",
  href: "/case-studies"
}, void 0, "FAQs");

var _ref4 = _jsx(_reactRouter.Link, {
  className: "nav-link",
  href: "/faqs"
}, void 0, "Case Studies");

var _ref5 = _jsx(_reactRouter.Link, {
  className: "nav-link",
  href: "/customer-support"
}, void 0, "Customer Support");

var _ref6 = _jsx(_reactRouter.Link, {
  className: "nav-link",
  href: "/privacy-policy"
}, void 0, "Privacy Policy");

var _ref7 = _jsx(_reactRouter.Link, {
  className: "nav-link",
  href: "/terms-service"
}, void 0, "Terms of Service");

var _ref8 = _jsx(_reactRouter.Link, {
  className: "nav-link",
  href: "/customer-support"
}, void 0, " Disclaimer");

var _ref9 = _jsx(_reactRouter.Link, {
  className: "nav-link",
  href: "/technology"
}, void 0, " Technology");

var _ref10 = _jsx(_reactRouter.Link, {
  className: "nav-link",
  href: "/contact-us"
}, void 0, " Contact Us");

var _ref11 = _jsx(_reactRouter.Link, {
  className: "nav-link",
  href: "/get-demo"
}, void 0, " Get Demo");

var _ref12 = _jsx("hr", {
  className: "pt-5"
});

var _ref13 = _jsx("div", {
  className: "pt-3"
}, void 0, _jsx("div", {
  className: "row justify-content-center"
}, void 0, _jsx("div", {
  className: "col-auto"
}, void 0, _jsx("h6", {
  className: "text-white iq-font-18"
}, void 0, _jsx("span", {}, void 0, " An Intelligence Company"), _jsx("a", {
  href: "https://limechat.ai/"
}, void 0, " "))), _jsx("div", {
  className: "col-auto"
}, void 0, _jsx("h6", {
  className: "text-white iq-font-18"
}, void 0, _jsx("span", {}, void 0, " \xA9 Copyright 2020, LimeChat"), _jsx("a", {
  href: "https://limechat.ai/"
}, void 0, " ")))));

function Footer(props) {
  return _jsx("footer", {
    id: "contact",
    className: "main-bg pt-5 pb-5"
  }, void 0, _jsx("div", {
    className: "container",
    style: { margin: '20px auto' }
  }, void 0, _jsx("div", {
    className: "row"
  }, void 0, _jsx("div", {
    className: "col-auto",
    style: { width: '100%' }
  }, void 0, _jsx("ul", {
    className: "nav footer-menu mobile-footer-menu desktop-footer-menu",
    style: { width: '100%', display: 'flex', flexWrap: 'wrap' }
  }, void 0, _jsx("li", {
    className: "nav-item mobile-full-width",
    style: { marginTop: '20px' }
  }, void 0, _jsx("div", {
    className: "footer-logo"
  }, void 0, _jsx(_reactRouter.Link, {
    to: "#"
  }, void 0, _jsx("img", {
    style: { paddingLeft: '1rem' },
    src: "/assets/logo/logo_white.svg",
    className: "img-fluid logo-white",
    alt: "img"
  }))), _jsx("ul", {
    style: { textDecoration: "none", listStyleType: "none" }
  }, void 0, _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _ref), _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _jsx(_reactRouter.Link, {
    className: "nav-link",
    href: "#"
  }, void 0, _ref2, _jsx("a", {
    href: "https://twitter.com/LimeChatAI"
  }, void 0, _jsx("img", {
    style: { paddingLeft: "10px" },
    src: "https://ik.imagekit.io/m52sq26n4h/twitter_white.svg"
  })), _jsx("a", {
    href: "#"
  }, void 0, _jsx("img", {
    style: { paddingLeft: "10px" },
    src: "https://ik.imagekit.io/m52sq26n4h/youtube_white.svg"
  })), " ")))), _jsx("li", {
    className: "nav-item text-left ",
    style: { marginTop: '20px' }
  }, void 0, _jsx("span", {
    className: "nav-link ",
    style: { fontWeight: "bold", color: '#fff' }
  }, void 0, "QUICK LINKS"), _jsx("ul", {
    style: { textDecoration: "none", listStyleType: "none" }
  }, void 0, _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _jsx(_reactRouter.Link, {
    style: { padding: '.5rem 0.8rem' },
    className: "nav-link",
    href: "/blog"
  }, void 0, "Blogs")), _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _ref3), _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _ref4))), _jsx("li", {
    className: "nav-item text-left ",
    style: { marginTop: '20px' }
  }, void 0, _jsx("span", {
    className: "nav-link ",
    style: { fontWeight: "bold", color: '#fff' }
  }, void 0, "PRODUCT"), _jsx("ul", {
    style: { textDecoration: "none", listStyleType: "none" }
  }, void 0, _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _jsx(_reactRouter.Link, {
    style: { padding: '.5rem 0.8rem' },
    className: "nav-link",
    href: "/sales-support"
  }, void 0, "Sales Support")), _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _ref5))), _jsx("li", {
    className: "nav-item text-left ",
    style: { marginTop: '20px' }
  }, void 0, _jsx("span", {
    className: "nav-link ",
    style: { fontWeight: "bold", color: '#fff' }
  }, void 0, "LEGAL"), _jsx("ul", {
    style: { textDecoration: "none", listStyleType: "none" }
  }, void 0, _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _jsx(_reactRouter.Link, {
    style: { padding: '.5rem 0.8rem' },
    className: "nav-link",
    href: "/sales-support"
  }, void 0, "GDPR")), _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _ref6), _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _ref7), _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _ref8))), _jsx("li", {
    className: "nav-item text-left ",
    style: { marginTop: '20px' }
  }, void 0, _jsx("span", {
    className: "nav-link ",
    style: { fontWeight: "bold", color: '#fff' }
  }, void 0, "OUR COMPANY"), _jsx("ul", {
    style: { textDecoration: "none", listStyleType: "none" }
  }, void 0, _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _jsx(_reactRouter.Link, {
    style: { padding: '.5rem 0.8rem' },
    className: "nav-link",
    href: "/about-us"
  }, void 0, "About Us")), _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _ref9), _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _ref10), _jsx("li", {
    style: { textDecoration: "none", color: "white" }
  }, void 0, _ref11)))))), _ref12, _ref13));
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _reactRouter = __webpack_require__(1);

__webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthWrapper = function (_Component) {
  _inherits(AuthWrapper, _Component);

  function AuthWrapper(props) {
    _classCallCheck(this, AuthWrapper);

    return _possibleConstructorReturn(this, (AuthWrapper.__proto__ || Object.getPrototypeOf(AuthWrapper)).call(this, props));
  }

  _createClass(AuthWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {}
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AuthWrapper;
}(_react.Component);

function mapStateToProps(state, props) {
  return {};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(AuthWrapper);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var _authHandler = __webpack_require__(42);

var _authHandler2 = _interopRequireDefault(_authHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();

router.route('/login').post(function (req, res) {
  var user = req.body;
  _authHandler2.default.attemptLogin(user, function (err, post) {
    if (err) {
      res.status(500);
      res.json({
        status: 'Error',
        data: err
      });
    } else {
      res.status(200);
      res.json({
        status: 'Success',
        data: post
      });
    }
  });
});

exports.default = router;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _jsonwebtoken = __webpack_require__(43);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _async = __webpack_require__(5);

var _async2 = _interopRequireDefault(_async);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _bcryptNodejs = __webpack_require__(44);

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

var _user = __webpack_require__(45);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateHash(password) {
  return _bcryptNodejs2.default.hashSync(password, _bcryptNodejs2.default.genSaltSync(8), null);
}

function validPassword(entered_password, stored_password) {
  return _bcryptNodejs2.default.compareSync(entered_password, stored_password);
}

function attemptLogin(creds, next) {
  var inputCreds = creds;
  var model = {};
  _async2.default.series([function (cb) {
    var filters = {};
    filters.query = {
      email: { $eq: inputCreds.email }
    };
    filters.selectFrom = {};
    _user2.default.getObjectByQuery(filters, function (err, user) {
      if (err) {
        return cb(err);
      } else {
        if (!user) {
          model.isUserFound = false;
          model.message = 'No User Found';
        } else if (!validPassword(inputCreds.password, user.password)) {
          model.isUserFound = true;
          model.message = 'Oops! Wrong Password';
        } else {
          var newUser = {
            _id: user._id,
            name: user.name,
            email: user.email
          };
          var token = _jsonwebtoken2.default.sign(newUser, _config2.default.COOKIE_SECRET);
          model.isUserFound = true;
          model.user = user;
          model.token = token;
          model.message = 'Logged In';
        }
        return cb();
      }
    });
  }], function (err) {
    if (err) {
      return next(err);
    } else {
      return next(null, model);
    }
  });
}

exports.default = {
  attemptLogin: attemptLogin
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(46);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAllObjects(filters, next) {
  var query = filters.query ? filters.query : {};
  var selectFrom = filters.selectFrom ? filters.selectFrom : {};
  var sortBy = filters.sortBy ? filters.sortBy : { _id: -1 };
  var pageNum = filters.pageNum ? filters.pageNum : 1;
  var pageSize = filters.pageSize ? filters.pageSize : 50;
  _user2.default.find(query).select(selectFrom).sort(sortBy).skip((pageNum - 1) * pageSize).limit(parseInt(pageSize)).lean().exec(function (err, objects) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, objects);
    }
  });
}

function getAllObjectsCount(filters, next) {
  var query = filters.query ? filters.query : {};
  _user2.default.count(query, function (err, count) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, count);
    }
  });
}

function getObjectById(_ref, next) {
  var id = _ref.id,
      selectFrom = _ref.selectFrom;

  _user2.default.findById(id).select(selectFrom ? selectFrom : {}).exec(function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, object);
    }
  });
}

function getObjectByQuery(_ref2, next) {
  var query = _ref2.query,
      selectFrom = _ref2.selectFrom;

  _user2.default.findOne(query).select(selectFrom ? selectFrom : {}).exec(function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, object);
    }
  });
}

function updateObjectById(id, updatedObject, next) {
  _user2.default.findById(id, function (err, object) {
    if (err) {
      return next(err);
    }
    for (var prop in updatedObject) {
      object[prop] = updatedObject[prop];
    }
    object.save(function (err, savedObject) {
      if (err) {
        return next(err);
      } else {
        return next(null, savedObject);
      }
    });
  });
}

function deleteObject(objectId, next) {
  _user2.default.findByIdAndRemove(objectId, function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, objectId);
    }
  });
}

function addObject(object, next) {
  var objectModel = new _user2.default(object);
  objectModel.save(function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, object);
    }
  });
}

exports.default = {
  getAllObjects: getAllObjects,
  getAllObjectsCount: getAllObjectsCount,
  getObjectById: getObjectById,
  updateObjectById: updateObjectById,
  deleteObject: deleteObject,
  addObject: addObject,
  getObjectByQuery: getObjectByQuery
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(4);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  password: String
});

userSchema.set('versionKey', false);

exports.default = _mongoose2.default.model('User', userSchema);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var _nodemailer = __webpack_require__(48);

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transporter = _nodemailer2.default.createTransport({
  service: 'gmail',
  auth: {
    user: 'admin@wavicletech.com',
    pass: 'kitvjqhiiidrytsw'
  }
});

var router = new _express.Router();

router.route('/contact-us').post(function (req, res) {
  var mailOptions = {
    from: 'admin@wavicletech.com', // sender address
    to: 'admin@wavicletech.com', // list of receivers
    subject: 'Contact Us from Limechat.ai', // Subject line
    html: '<p>Hi this is a test message!</p>' // plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).json({
        status: 'Error',
        data: {
          message: err
        }
      });
    } else {
      res.status(200).json({
        status: 'Success',
        data: {
          message: 'Sent'
        }
      });
    }
  });
});

router.route('/demo-signup').post(function (req, res) {
  var lead = req.body.lead;
  var text = 'Hi, ' + (lead.first_name ? lead.first_name : '') + ' ' + (lead.last_name ? lead.last_name : '') + ' is looking to hire your service. His/Her email id is ' + lead.email + ' and phone is ' + lead.phone + '. S(he) is ' + lead.jobTitle + ' from ' + lead.country + '. They left a message: ' + lead.message;
  var mailOptions = {
    from: 'admin@wavicletech.com', // sender address
    to: 'ritwiksahoovm@gmail.com', // list of receivers
    subject: 'Contact Us from Limechat.ai', // Subject line
    html: '<p>' + text + '</p>' // plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).json({
        status: 'Error',
        data: {
          message: err
        }
      });
    } else {
      res.status(200).json({
        status: 'Success',
        data: {
          message: 'Sent'
        }
      });
    }
  });
});

exports.default = router;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var _responseStatus = __webpack_require__(8);

var _responseStatus2 = _interopRequireDefault(_responseStatus);

var _post = __webpack_require__(50);

var _post2 = _interopRequireDefault(_post);

var _async = __webpack_require__(5);

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();

router.route('/posts/list').post(function (req, res) {
  var filter = {};
  filter.query = {};
  var model = {};
  _async2.default.series([function (cb) {
    filter.pageNum = req.body.pageNum;
    filter.pageSize = req.body.pageSize;
    filter.sortBy = {};
    _post2.default.getAllObjects(filter, function (err, posts) {
      if (err) {
        return cb(err);
      } else {
        model.posts = posts;
        return cb();
      }
    });
  }, function (cb) {
    _post2.default.getAllObjectsCount(filter, function (err, postCount) {
      if (err) {
        return cb(err);
      } else {
        model.postCount = postCount;
        return cb();
      }
    });
  }], function (err) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR).json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK).json({
        status: "Success",
        data: {
          posts: model.posts,
          count: model.postCount
        }
      });
    }
  });
});

// create an entry of postin db
router.route('/posts/new').post(function (req, res) {
  var post = req.body.post;
  _post2.default.addObject(post, function (err, saved) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          post: saved
        }
      });
    }
  });
});

// read for single entry
router.route('/posts/url/:url').get(function (req, res) {
  var filters = {};
  filters.query = {
    url: { $eq: req.params.url }
  };
  _post2.default.getObjectByQuery(filters, function (err, post) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          post: post
        }
      });
    }
  });
});

// read for single entry
router.route('/posts/:id').get(function (req, res) {
  var postId = req.params.id;
  var filters = {};
  filters.id = postId;
  _post2.default.getObjectById(filters, function (err, post) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          post: post
        }
      });
    }
  });
});

// update with id
router.route('/posts/:id/update').post(function (req, res) {
  var postId = req.params.id;
  var post = req.body.post;
  _post2.default.updateObjectById(postId, post, function (err, updated) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          post: updated
        }
      });
    }
  });
});

// delete by id
router.route('/posts/:id/remove').post(function (req, res) {
  var postId = req.params.id;
  _post2.default.deleteObject(postId, function (err, updated) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          post: updated
        }
      });
    }
  });
});
exports.default = router;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _post = __webpack_require__(51);

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAllObjects(filters, next) {
  var query = filters.query ? filters.query : {};
  var selectFrom = filters.selectFrom ? filters.selectFrom : {};
  var sortBy = filters.sortBy ? filters.sortBy : { _id: -1 };
  var pageNum = filters.pageNum ? filters.pageNum : 1;
  var pageSize = filters.pageSize ? filters.pageSize : 50;
  _post2.default.find(query).select(selectFrom).sort(sortBy).skip((pageNum - 1) * pageSize).limit(parseInt(pageSize)).lean().exec(function (err, objects) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, objects);
    }
  });
}

function getAllObjectsCount(filters, next) {
  var query = filters.query ? filters.query : {};
  _post2.default.count(query, function (err, count) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, count);
    }
  });
}

function getObjectById(filters, next) {
  _post2.default.findById(filters.id).select(filters.selectFrom ? filters.selectFrom : {}).exec(function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, object);
    }
  });
}

function getObjectByQuery(filters, next) {
  _post2.default.findOne(filters.query).select(filters.selectFrom ? filters.selectFrom : {}).exec(function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, object);
    }
  });
}

function updateObjectById(id, updatedObject, next) {
  _post2.default.findById(id, function (err, object) {
    if (err) {
      return next(err);
    }
    for (var prop in updatedObject) {
      object[prop] = updatedObject[prop];
    }
    object.save(function (err, savedObject) {
      if (err) {
        return next(err);
      } else {
        return next(null, savedObject);
      }
    });
  });
}

function deleteObject(objectId, next) {
  _post2.default.findByIdAndRemove(objectId, function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, objectId);
    }
  });
}

function addObject(object, next) {
  var objectModel = new _post2.default(object);
  objectModel.save(function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, object);
    }
  });
}

exports.default = {
  getAllObjects: getAllObjects,
  getAllObjectsCount: getAllObjectsCount,
  getObjectById: getObjectById,
  updateObjectById: updateObjectById,
  deleteObject: deleteObject,
  addObject: addObject,
  getObjectByQuery: getObjectByQuery
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(4);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var postSchema = new Schema({
  url: String,
  img: String,
  name: String,
  date: Date,
  text: String
});

postSchema.set('versionKey', false);

exports.default = _mongoose2.default.model('Post', postSchema);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var _responseStatus = __webpack_require__(8);

var _responseStatus2 = _interopRequireDefault(_responseStatus);

var _blog = __webpack_require__(53);

var _blog2 = _interopRequireDefault(_blog);

var _async = __webpack_require__(5);

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();

router.route('/blogs/list').post(function (req, res) {
  var filter = {};
  filter.query = {};
  var model = {};
  _async2.default.series([function (cb) {
    filter.pageNum = req.body.pageNum;
    filter.pageSize = req.body.pageSize;
    filter.sortBy = {};
    _blog2.default.getAllObjects(filter, function (err, blogs) {
      if (err) {
        return cb(err);
      } else {
        model.blogs = blogs;
        return cb();
      }
    });
  }, function (cb) {
    _blog2.default.getAllObjectsCount(filter, function (err, blogCount) {
      if (err) {
        return cb(err);
      } else {
        model.blogCount = blogCount;
        return cb();
      }
    });
  }], function (err) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR).json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK).json({
        status: "Success",
        data: {
          blogs: model.blogs,
          count: model.blogCount
        }
      });
    }
  });
});

// create an entry of blogin db
router.route('/blogs/new').post(function (req, res) {
  var blog = req.body.blog;
  _blog2.default.addObject(blog, function (err, saved) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          blog: saved
        }
      });
    }
  });
});

// read for single entry
router.route('/blogs/url/:url').get(function (req, res) {
  var filters = {};
  filters.query = {
    url: { $eq: req.params.url }
  };
  _blog2.default.getObjectByQuery(filters, function (err, blog) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          blog: blog
        }
      });
    }
  });
});

// read for single entry
router.route('/blogs/:id').get(function (req, res) {
  var blogId = req.params.id;
  var filters = {};
  filters.id = blogId;
  _blog2.default.getObjectById(filters, function (err, blog) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          blog: blog
        }
      });
    }
  });
});

// update with id
router.route('/blogs/:id/update').post(function (req, res) {
  var blogId = req.params.id;
  var blog = req.body.blog;
  _blog2.default.updateObjectById(blogId, blog, function (err, updated) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          blog: updated
        }
      });
    }
  });
});

// delete by id
router.route('/blogs/:id/remove').post(function (req, res) {
  var blogId = req.params.id;
  _blog2.default.deleteObject(blogId, function (err, updated) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          blog: updated
        }
      });
    }
  });
});
exports.default = router;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blog = __webpack_require__(54);

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAllObjects(filters, next) {
  var query = filters.query ? filters.query : {};
  var selectFrom = filters.selectFrom ? filters.selectFrom : {};
  var sortBy = filters.sortBy ? filters.sortBy : { _id: -1 };
  var pageNum = filters.pageNum ? filters.pageNum : 1;
  var pageSize = filters.pageSize ? filters.pageSize : 50;
  _blog2.default.find(query).select(selectFrom).sort(sortBy).skip((pageNum - 1) * pageSize).limit(parseInt(pageSize)).lean().exec(function (err, objects) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, objects);
    }
  });
}

function getAllObjectsCount(filters, next) {
  var query = filters.query ? filters.query : {};
  _blog2.default.count(query, function (err, count) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, count);
    }
  });
}

function getObjectById(filters, next) {
  _blog2.default.findById(filters.id).select(filters.selectFrom ? filters.selectFrom : {}).exec(function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, object);
    }
  });
}

function getObjectByQuery(filters, next) {
  _blog2.default.findOne(filters.query).select(filters.selectFrom ? filters.selectFrom : {}).exec(function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, object);
    }
  });
}

function updateObjectById(id, updatedObject, next) {
  _blog2.default.findById(id, function (err, object) {
    if (err) {
      return next(err);
    }
    for (var prop in updatedObject) {
      object[prop] = updatedObject[prop];
    }
    object.save(function (err, savedObject) {
      if (err) {
        return next(err);
      } else {
        return next(null, savedObject);
      }
    });
  });
}

function deleteObject(objectId, next) {
  _blog2.default.findByIdAndRemove(objectId, function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, objectId);
    }
  });
}

function addObject(object, next) {
  var objectModel = new _blog2.default(object);
  objectModel.save(function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, object);
    }
  });
}

exports.default = {
  getAllObjects: getAllObjects,
  getAllObjectsCount: getAllObjectsCount,
  getObjectById: getObjectById,
  updateObjectById: updateObjectById,
  deleteObject: deleteObject,
  addObject: addObject,
  getObjectByQuery: getObjectByQuery
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(4);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var blogSchema = new Schema({
  url: String,
  img: String,
  name: String,
  date: Date,
  text: String
});

blogSchema.set('versionKey', false);

exports.default = _mongoose2.default.model('Blog', blogSchema);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var _responseStatus = __webpack_require__(8);

var _responseStatus2 = _interopRequireDefault(_responseStatus);

var _lead = __webpack_require__(56);

var _lead2 = _interopRequireDefault(_lead);

var _async = __webpack_require__(5);

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();

router.route('/leads/list').post(function (req, res) {
  var filter = {};
  filter.query = {};
  var model = {};
  _async2.default.series([function (cb) {
    filter.pageNum = req.body.pageNum;
    filter.pageSize = req.body.pageSize;
    filter.sortBy = {};
    _lead2.default.getAllObjects(filter, function (err, leads) {
      if (err) {
        return cb(err);
      } else {
        model.leads = leads;
        return cb();
      }
    });
  }, function (cb) {
    _lead2.default.getAllObjectsCount(filter, function (err, leadCount) {
      if (err) {
        return cb(err);
      } else {
        model.leadCount = leadCount;
        return cb();
      }
    });
  }], function (err) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR).json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK).json({
        status: "Success",
        data: {
          leads: model.leads,
          count: model.leadCount
        }
      });
    }
  });
});

// create an entry of leadin db
router.route('/leads/new').post(function (req, res) {
  var lead = req.body.lead;
  _lead2.default.addObject(lead, function (err, saved) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          lead: saved
        }
      });
    }
  });
});

// read for single entry
router.route('/leads/url/:url').get(function (req, res) {
  var filters = {};
  filters.query = {
    url: { $eq: req.params.url }
  };
  _lead2.default.getObjectByQuery(filters, function (err, lead) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          lead: lead
        }
      });
    }
  });
});

// read for single entry
router.route('/leads/:id').get(function (req, res) {
  var leadId = req.params.id;
  var filters = {};
  filters.id = leadId;
  _lead2.default.getObjectById(filters, function (err, lead) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          lead: lead
        }
      });
    }
  });
});

// update with id
router.route('/leads/:id/update').post(function (req, res) {
  var leadId = req.params.id;
  var lead = req.body.lead;
  _lead2.default.updateObjectById(leadId, lead, function (err, updated) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          lead: updated
        }
      });
    }
  });
});

// delete by id
router.route('/leads/:id/remove').post(function (req, res) {
  var leadId = req.params.id;
  _lead2.default.deleteObject(leadId, function (err, updated) {
    if (err) {
      res.status(_responseStatus2.default.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(_responseStatus2.default.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          lead: updated
        }
      });
    }
  });
});
exports.default = router;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lead = __webpack_require__(57);

var _lead2 = _interopRequireDefault(_lead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAllObjects(filters, next) {
  var query = filters.query ? filters.query : {};
  var selectFrom = filters.selectFrom ? filters.selectFrom : {};
  var sortBy = filters.sortBy ? filters.sortBy : { _id: -1 };
  var pageNum = filters.pageNum ? filters.pageNum : 1;
  var pageSize = filters.pageSize ? filters.pageSize : 50;
  _lead2.default.find(query).select(selectFrom).sort(sortBy).skip((pageNum - 1) * pageSize).limit(parseInt(pageSize)).lean().exec(function (err, objects) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, objects);
    }
  });
}

function getAllObjectsCount(filters, next) {
  var query = filters.query ? filters.query : {};
  _lead2.default.count(query, function (err, count) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, count);
    }
  });
}

function getObjectById(filters, next) {
  _lead2.default.findById(filters.id).select(filters.selectFrom ? filters.selectFrom : {}).exec(function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, object);
    }
  });
}

function getObjectByQuery(filters, next) {
  _lead2.default.findOne(filters.query).select(filters.selectFrom ? filters.selectFrom : {}).exec(function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, object);
    }
  });
}

function updateObjectById(id, updatedObject, next) {
  _lead2.default.findById(id, function (err, object) {
    if (err) {
      return next(err);
    }
    for (var prop in updatedObject) {
      object[prop] = updatedObject[prop];
    }
    object.save(function (err, savedObject) {
      if (err) {
        return next(err);
      } else {
        return next(null, savedObject);
      }
    });
  });
}

function deleteObject(objectId, next) {
  _lead2.default.findByIdAndRemove(objectId, function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, objectId);
    }
  });
}

function addObject(object, next) {
  var objectModel = new _lead2.default(object);
  objectModel.save(function (err, object) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return next(null, object);
    }
  });
}

exports.default = {
  getAllObjects: getAllObjects,
  getAllObjectsCount: getAllObjectsCount,
  getObjectById: getObjectById,
  updateObjectById: updateObjectById,
  deleteObject: deleteObject,
  addObject: addObject,
  getObjectByQuery: getObjectByQuery
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(4);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var leadSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
  jobTitle: String,
  company: String,
  country: String
});

leadSchema.set('versionKey', false);

exports.default = _mongoose2.default.model('Lead', leadSchema);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchComponentData = fetchComponentData;

var _promiseUtils = __webpack_require__(59);

function fetchComponentData(store, components, params) {
  var needs = components.reduce(function (prev, current) {
    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
  }, []);
  return (0, _promiseUtils.sequence)(needs, function (need) {
    return store.dispatch(need(params, store.getState()));
  });
} /*
  Utility function to fetch required data for component to render in server side.
  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
  */

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequence = sequence;
/**
 * Throw an array to it and a function which can generate promises
 * and it will call them sequentially, one after another
 */
function sequence(items, consumer) {
  var results = [];
  var runner = function runner() {
    var item = items.shift();
    if (item) {
      return consumer(item).then(function (result) {
        results.push(result);
      }).then(runner);
    }
    return Promise.resolve(results);
  };

  return runner();
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var webpack = __webpack_require__(10);
var cssnext = __webpack_require__(61);
var postcssFocus = __webpack_require__(62);
var postcssReporter = __webpack_require__(63);

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/desktop/index.js'],
    vendor: ['react', 'react-dom']
  },

  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: 'http://localhost:8080/'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['client', 'node_modules']
  },

  module: {
    rules: [{
      test: /\.s?css$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]__[local]__[hash:base64:5]',
          modules: true,
          importLoaders: 1,
          sourceMap: true
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: function plugins() {
            return [postcssFocus(), cssnext({
              browsers: ['last 2 versions', 'IE > 10']
            }), postcssReporter({
              clearMessages: true
            })];
          }
        }
      }]
    }, {
      test: /\.css$/,
      include: /node_modules/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.jsx*$/,
      exclude: [/node_modules/, /.+\.config.js/],
      use: 'babel-loader'
    }, {
      test: /\.(jpe?g|gif|png|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }]
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.js'
  }), new webpack.DefinePlugin({
    'process.env': {
      CLIENT: JSON.stringify(true),
      'NODE_ENV': JSON.stringify('development')
    }
  })]
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("postcss-cssnext");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("postcss-focus");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("postcss-reporter");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-daterangepicker");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isNumeric");

/***/ }),
/* 72 */,
/* 73 */
/***/ (function(module, exports) {

module.exports = require("react-text-loop");

/***/ })
/******/ ]);