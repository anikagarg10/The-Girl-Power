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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _pm = __webpack_require__(2);

var _pm2 = _interopRequireDefault(_pm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_config2.default.stage === 'production') {
  _pm2.default.connect(function () {
    _pm2.default.start({
      script: 'chatbot.js',
      exec_mode: 'cluster', // ----> https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#schema
      instances: _config2.default.APP_INSTANCE_COUNT,
      max_memory_restart: _config2.default.APP_MAX_MEMORY + 'M', // Auto-restart if process takes more than XXmo
      env: { // If needed declare some environment variables
        "NODE_ENV": "production"
      },
      post_update: ["npm install"] // Commands to execute once we do a pull from Keymetrics
    }, function () {
      _pm2.default.interact(_config2.default.PM2_PRIVATE_KEY, _config2.default.PM2_PUBLIC_KEY, _config2.default.PM2_MACHINE_NAME, function () {
        // Display logs in standard output
        _pm2.default.launchBus(function (err, bus) {
          console.log('[PM2] Log streaming started');

          bus.on('log:out', function (packet) {
            console.log('[App:%s] %s', packet.process.name, packet.data);
          });

          bus.on('log:err', function (packet) {
            console.error('[App:%s][Err] %s', packet.process.name, packet.data);
          });
        });
      });
    });
  });
} else {
  _pm2.default.connect(function () {
    _pm2.default.start({
      script: 'chatbot.js',
      exec_mode: 'cluster', // ----> https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#schema
      instances: _config2.default.APP_INSTANCE_COUNT,
      max_memory_restart: _config2.default.APP_MAX_MEMORY + 'M', // Auto-restart if process takes more than XXmo
      env: { // If needed declare some environment variables
        "NODE_ENV": "production"
      },
      post_update: ["npm install"] // Commands to execute once we do a pull from Keymetrics
    }, function () {
      _pm2.default.interact(_config2.default.PM2_PRIVATE_KEY, _config2.default.PM2_PUBLIC_KEY, _config2.default.PM2_MACHINE_NAME, function () {
        // Display logs in standard output
        _pm2.default.launchBus(function (err, bus) {
          console.log('[PM2] Log streaming started');

          bus.on('log:out', function (packet) {
            console.log('[App:%s] %s', packet.process.name, packet.data);
          });

          bus.on('log:err', function (packet) {
            console.error('[App:%s][Err] %s', packet.process.name, packet.data);
          });
        });
      });
    });
  });
}

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("pm2");

/***/ })
/******/ ]);