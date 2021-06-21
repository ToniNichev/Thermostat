/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server": 0
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ssr-server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/loadable-manifest.json":
/*!*************************************!*\
  !*** ./dist/loadable-manifest.json ***!
  \*************************************/
/*! exports provided: @babel/runtime/helpers/asyncToGenerator, @babel/runtime/regenerator, regenerator-runtime, ./arrayLikeToArray.js, ./arrayWithHoles.js, @babel/runtime/helpers/defineProperty, ./iterableToArrayLimit.js, ./nonIterableRest.js, @babel/runtime/helpers/slicedToArray, ./unsupportedIterableToArray.js, !!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src/index.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./styles.scss, ../AddFlagPopup, ./styles.scss, ../BulletPoint, ../EditDelete, ../GeneralPopup, ../../../components/Home, ../RangeSlider, ../TemperatureBar, ../ToggleSwitch, ../../containers/EventsManager, ../../utils/Poster, ../../utils/getParams, ../../../components/Header, ./home.png, ../../../components/Setup, ../../../components/About, undefined, ./assertThisInitialized.js, @babel/runtime/helpers/classCallCheck, @babel/runtime/helpers/createClass, @babel/runtime/helpers/esm/extends, @babel/runtime/helpers/esm/inheritsLoose, @babel/runtime/helpers/esm/objectWithoutPropertiesLoose, ./setPrototypeOf.js, @babel/runtime/helpers/getPrototypeOf, @babel/runtime/helpers/inherits, @babel/runtime/helpers/possibleConstructorReturn, @babel/runtime/helpers/typeof, ansi-html, ansi-regex, ../../../node_modules/css-loader/dist/runtime/api.js, ../../../node_modules/css-loader/dist/runtime/getUrl.js, events, history, hoist-non-react-statics, ./html4-entities, ./html5-entities, html-entities, ./surrogate-pairs, ./xml-entities, loglevel, mini-create-react-context, punycode, object-assign, prop-types/checkPropTypes, ./factoryWithTypeCheckers, prop-types, ./lib/ReactPropTypesSecret, ./decode, ./encode, querystring, ./cjs/react-dom.development.js, react-dom, ./cjs/react-is.development.js, react-is, react-loadable, react-router-dom, react-router, isarray, path-to-regexp, ./cjs/react.development.js, react, resolve-pathname, ./cjs/scheduler-tracing.development.js, ./cjs/scheduler.development.js, scheduler, scheduler/tracing, sockjs-client/dist/sockjs, strip-ansi, !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js, tiny-invariant, tiny-warning, url, ./util, value-equal, ./BaseClient, ./clients/SockJSClient, /Users/toninichev/Cloud/workspace/arduino/Thermostat/web/node_modules/webpack-dev-server/client/index.js?http://localhost:8000, ./overlay, ./socket, ./utils/createSocketUrl, ./getCurrentScriptSource, ./utils/log, ./utils/reloadApp, ./utils/sendMessage, ./../../webpack/buildin/global.js, ./../../../webpack/buildin/module.js, /Users/toninichev/Cloud/workspace/arduino/Thermostat/web/node_modules/webpack/hot/dev-server.js, ./emitter, ./log-apply-result, ./log, ./components/App, ../../../components/Loading, ./ComponentList, ./PageData, ../../containers/PageLayout, ../../fonts/aclonica/aclonica-regular.woff2, ./src/index.js, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"@babel/runtime/helpers/asyncToGenerator\":[{\"id\":\"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\",\"name\":\"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\",\"file\":\"0-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/0-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\",\"name\":\"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\",\"file\":\"0-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/0-bundle.js.map\"}],\"@babel/runtime/regenerator\":[{\"id\":\"./node_modules/@babel/runtime/regenerator/index.js\",\"name\":\"./node_modules/@babel/runtime/regenerator/index.js\",\"file\":\"0-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/0-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/regenerator/index.js\",\"name\":\"./node_modules/@babel/runtime/regenerator/index.js\",\"file\":\"0-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/0-bundle.js.map\"}],\"regenerator-runtime\":[{\"id\":\"./node_modules/regenerator-runtime/runtime.js\",\"name\":\"./node_modules/regenerator-runtime/runtime.js\",\"file\":\"0-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/0-bundle.js\"},{\"id\":\"./node_modules/regenerator-runtime/runtime.js\",\"name\":\"./node_modules/regenerator-runtime/runtime.js\",\"file\":\"0-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/0-bundle.js.map\"}],\"./arrayLikeToArray.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js.map\"}],\"./arrayWithHoles.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js.map\"}],\"@babel/runtime/helpers/defineProperty\":[{\"id\":\"./node_modules/@babel/runtime/helpers/defineProperty.js\",\"name\":\"./node_modules/@babel/runtime/helpers/defineProperty.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/defineProperty.js\",\"name\":\"./node_modules/@babel/runtime/helpers/defineProperty.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/defineProperty.js\",\"name\":\"./node_modules/@babel/runtime/helpers/defineProperty.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/defineProperty.js\",\"name\":\"./node_modules/@babel/runtime/helpers/defineProperty.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"}],\"./iterableToArrayLimit.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"name\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"name\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"name\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"name\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"name\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"name\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js.map\"}],\"./nonIterableRest.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"name\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"name\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"name\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"name\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"name\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"name\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js.map\"}],\"@babel/runtime/helpers/slicedToArray\":[{\"id\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js.map\"}],\"./unsupportedIterableToArray.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js.map\"}],\"!!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src/index.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./styles.scss\":[{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/AddFlagPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/AddFlagPopup/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BulletPoint/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BulletPoint/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/EditDelete/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/EditDelete/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/RangeSlider/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/RangeSlider/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/TemperatureBar/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/TemperatureBar/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ToggleSwitch/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ToggleSwitch/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/AddFlagPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/AddFlagPopup/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BulletPoint/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BulletPoint/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/EditDelete/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/EditDelete/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/RangeSlider/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/RangeSlider/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/TemperatureBar/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/TemperatureBar/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ToggleSwitch/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ToggleSwitch/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/AddFlagPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/AddFlagPopup/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BulletPoint/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BulletPoint/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/EditDelete/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/EditDelete/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/RangeSlider/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/RangeSlider/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/TemperatureBar/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/TemperatureBar/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ToggleSwitch/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ToggleSwitch/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/AddFlagPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/AddFlagPopup/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BulletPoint/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BulletPoint/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/EditDelete/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/EditDelete/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/RangeSlider/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/RangeSlider/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/TemperatureBar/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/TemperatureBar/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ToggleSwitch/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ToggleSwitch/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Header/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Header/styles.scss\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Header/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Header/styles.scss\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Setup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Setup/styles.scss\",\"file\":\"3-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/3-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Setup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Setup/styles.scss\",\"file\":\"3-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/3-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/About/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/About/styles.scss\",\"file\":\"4-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/4-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/About/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/About/styles.scss\",\"file\":\"4-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/4-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/App/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/App/styles.scss\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Loading/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Loading/styles.scss\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/containers/PageLayout/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/containers/PageLayout/styles.scss\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/App/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/App/styles.scss\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Loading/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Loading/styles.scss\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/containers/PageLayout/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/containers/PageLayout/styles.scss\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"../AddFlagPopup\":[{\"id\":\"./src/components/AddFlagPopup/index.js\",\"name\":\"./src/components/AddFlagPopup/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/AddFlagPopup/index.js\",\"name\":\"./src/components/AddFlagPopup/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/AddFlagPopup/index.js\",\"name\":\"./src/components/AddFlagPopup/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/AddFlagPopup/index.js\",\"name\":\"./src/components/AddFlagPopup/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"}],\"./styles.scss\":[{\"id\":\"./src/components/AddFlagPopup/styles.scss\",\"name\":\"./src/components/AddFlagPopup/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/BulletPoint/styles.scss\",\"name\":\"./src/components/BulletPoint/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/EditDelete/styles.scss\",\"name\":\"./src/components/EditDelete/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/GeneralPopup/styles.scss\",\"name\":\"./src/components/GeneralPopup/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/Home/styles.scss\",\"name\":\"./src/components/Home/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/RangeSlider/styles.scss\",\"name\":\"./src/components/RangeSlider/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/TemperatureBar/styles.scss\",\"name\":\"./src/components/TemperatureBar/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/ToggleSwitch/styles.scss\",\"name\":\"./src/components/ToggleSwitch/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/AddFlagPopup/styles.scss\",\"name\":\"./src/components/AddFlagPopup/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/BulletPoint/styles.scss\",\"name\":\"./src/components/BulletPoint/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/EditDelete/styles.scss\",\"name\":\"./src/components/EditDelete/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/GeneralPopup/styles.scss\",\"name\":\"./src/components/GeneralPopup/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/Home/styles.scss\",\"name\":\"./src/components/Home/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/RangeSlider/styles.scss\",\"name\":\"./src/components/RangeSlider/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/TemperatureBar/styles.scss\",\"name\":\"./src/components/TemperatureBar/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/ToggleSwitch/styles.scss\",\"name\":\"./src/components/ToggleSwitch/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/AddFlagPopup/styles.scss\",\"name\":\"./src/components/AddFlagPopup/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/BulletPoint/styles.scss\",\"name\":\"./src/components/BulletPoint/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/EditDelete/styles.scss\",\"name\":\"./src/components/EditDelete/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/GeneralPopup/styles.scss\",\"name\":\"./src/components/GeneralPopup/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/Home/styles.scss\",\"name\":\"./src/components/Home/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/RangeSlider/styles.scss\",\"name\":\"./src/components/RangeSlider/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/TemperatureBar/styles.scss\",\"name\":\"./src/components/TemperatureBar/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/ToggleSwitch/styles.scss\",\"name\":\"./src/components/ToggleSwitch/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/AddFlagPopup/styles.scss\",\"name\":\"./src/components/AddFlagPopup/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./src/components/BulletPoint/styles.scss\",\"name\":\"./src/components/BulletPoint/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./src/components/EditDelete/styles.scss\",\"name\":\"./src/components/EditDelete/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./src/components/GeneralPopup/styles.scss\",\"name\":\"./src/components/GeneralPopup/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./src/components/Home/styles.scss\",\"name\":\"./src/components/Home/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./src/components/RangeSlider/styles.scss\",\"name\":\"./src/components/RangeSlider/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./src/components/TemperatureBar/styles.scss\",\"name\":\"./src/components/TemperatureBar/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./src/components/ToggleSwitch/styles.scss\",\"name\":\"./src/components/ToggleSwitch/styles.scss\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./src/components/GeneralPopup/styles.scss\",\"name\":\"./src/components/GeneralPopup/styles.scss\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js\"},{\"id\":\"./src/components/Header/styles.scss\",\"name\":\"./src/components/Header/styles.scss\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js\"},{\"id\":\"./src/components/GeneralPopup/styles.scss\",\"name\":\"./src/components/GeneralPopup/styles.scss\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js.map\"},{\"id\":\"./src/components/Header/styles.scss\",\"name\":\"./src/components/Header/styles.scss\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js.map\"},{\"id\":\"./src/components/Setup/styles.scss\",\"name\":\"./src/components/Setup/styles.scss\",\"file\":\"3-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/3-bundle.js\"},{\"id\":\"./src/components/Setup/styles.scss\",\"name\":\"./src/components/Setup/styles.scss\",\"file\":\"3-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/3-bundle.js.map\"},{\"id\":\"./src/components/About/styles.scss\",\"name\":\"./src/components/About/styles.scss\",\"file\":\"4-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/4-bundle.js\"},{\"id\":\"./src/components/About/styles.scss\",\"name\":\"./src/components/About/styles.scss\",\"file\":\"4-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/4-bundle.js.map\"},{\"id\":\"./src/components/App/styles.scss\",\"name\":\"./src/components/App/styles.scss\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./src/components/Loading/styles.scss\",\"name\":\"./src/components/Loading/styles.scss\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./src/containers/PageLayout/styles.scss\",\"name\":\"./src/containers/PageLayout/styles.scss\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./src/components/App/styles.scss\",\"name\":\"./src/components/App/styles.scss\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"},{\"id\":\"./src/components/Loading/styles.scss\",\"name\":\"./src/components/Loading/styles.scss\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"},{\"id\":\"./src/containers/PageLayout/styles.scss\",\"name\":\"./src/containers/PageLayout/styles.scss\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"../BulletPoint\":[{\"id\":\"./src/components/BulletPoint/index.js\",\"name\":\"./src/components/BulletPoint/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/BulletPoint/index.js\",\"name\":\"./src/components/BulletPoint/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/BulletPoint/index.js\",\"name\":\"./src/components/BulletPoint/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/BulletPoint/index.js\",\"name\":\"./src/components/BulletPoint/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"}],\"../EditDelete\":[{\"id\":\"./src/components/EditDelete/index.js\",\"name\":\"./src/components/EditDelete/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/EditDelete/index.js\",\"name\":\"./src/components/EditDelete/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/EditDelete/index.js\",\"name\":\"./src/components/EditDelete/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/EditDelete/index.js\",\"name\":\"./src/components/EditDelete/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"}],\"../GeneralPopup\":[{\"id\":\"./src/components/GeneralPopup/index.js\",\"name\":\"./src/components/GeneralPopup/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/GeneralPopup/index.js\",\"name\":\"./src/components/GeneralPopup/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/GeneralPopup/index.js\",\"name\":\"./src/components/GeneralPopup/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/GeneralPopup/index.js\",\"name\":\"./src/components/GeneralPopup/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./src/components/GeneralPopup/index.js\",\"name\":\"./src/components/GeneralPopup/index.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js\"},{\"id\":\"./src/components/GeneralPopup/index.js\",\"name\":\"./src/components/GeneralPopup/index.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js.map\"}],\"../../../components/Home\":[{\"id\":\"./src/components/Home/index.js\",\"name\":\"./src/components/Home/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/Home/index.js\",\"name\":\"./src/components/Home/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/Home/index.js\",\"name\":\"./src/components/Home/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/Home/index.js\",\"name\":\"./src/components/Home/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"}],\"../RangeSlider\":[{\"id\":\"./src/components/RangeSlider/index.js\",\"name\":\"./src/components/RangeSlider/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/RangeSlider/index.js\",\"name\":\"./src/components/RangeSlider/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/RangeSlider/index.js\",\"name\":\"./src/components/RangeSlider/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/RangeSlider/index.js\",\"name\":\"./src/components/RangeSlider/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"}],\"../TemperatureBar\":[{\"id\":\"./src/components/TemperatureBar/index.js\",\"name\":\"./src/components/TemperatureBar/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/TemperatureBar/index.js\",\"name\":\"./src/components/TemperatureBar/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/TemperatureBar/index.js\",\"name\":\"./src/components/TemperatureBar/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/TemperatureBar/index.js\",\"name\":\"./src/components/TemperatureBar/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"}],\"../ToggleSwitch\":[{\"id\":\"./src/components/ToggleSwitch/index.js\",\"name\":\"./src/components/ToggleSwitch/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/components/ToggleSwitch/index.js\",\"name\":\"./src/components/ToggleSwitch/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/components/ToggleSwitch/index.js\",\"name\":\"./src/components/ToggleSwitch/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/components/ToggleSwitch/index.js\",\"name\":\"./src/components/ToggleSwitch/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"}],\"../../containers/EventsManager\":[{\"id\":\"./src/containers/EventsManager/index.js\",\"name\":\"./src/containers/EventsManager/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/containers/EventsManager/index.js\",\"name\":\"./src/containers/EventsManager/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/containers/EventsManager/index.js\",\"name\":\"./src/containers/EventsManager/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/containers/EventsManager/index.js\",\"name\":\"./src/containers/EventsManager/index.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./src/containers/EventsManager/index.js\",\"name\":\"./src/containers/EventsManager/index.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js\"},{\"id\":\"./src/containers/EventsManager/index.js\",\"name\":\"./src/containers/EventsManager/index.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js.map\"}],\"../../utils/Poster\":[{\"id\":\"./src/utils/Poster.js\",\"name\":\"./src/utils/Poster.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/utils/Poster.js\",\"name\":\"./src/utils/Poster.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/utils/Poster.js\",\"name\":\"./src/utils/Poster.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/utils/Poster.js\",\"name\":\"./src/utils/Poster.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./src/utils/Poster.js\",\"name\":\"./src/utils/Poster.js\",\"file\":\"3-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/3-bundle.js\"},{\"id\":\"./src/utils/Poster.js\",\"name\":\"./src/utils/Poster.js\",\"file\":\"3-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/3-bundle.js.map\"}],\"../../utils/getParams\":[{\"id\":\"./src/utils/getParams.js\",\"name\":\"./src/utils/getParams.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js\"},{\"id\":\"./src/utils/getParams.js\",\"name\":\"./src/utils/getParams.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js\"},{\"id\":\"./src/utils/getParams.js\",\"name\":\"./src/utils/getParams.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/1-bundle.js.map\"},{\"id\":\"./src/utils/getParams.js\",\"name\":\"./src/utils/getParams.js\",\"file\":\"1.80a18c608c39afdf0804.hot-update.js.map\",\"publicPath\":\"http://localhost:8000/dist/1.80a18c608c39afdf0804.hot-update.js.map\"},{\"id\":\"./src/utils/getParams.js\",\"name\":\"./src/utils/getParams.js\",\"file\":\"3-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/3-bundle.js\"},{\"id\":\"./src/utils/getParams.js\",\"name\":\"./src/utils/getParams.js\",\"file\":\"3-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/3-bundle.js.map\"}],\"../../../components/Header\":[{\"id\":\"./src/components/Header/index.js\",\"name\":\"./src/components/Header/index.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js\"},{\"id\":\"./src/components/Header/index.js\",\"name\":\"./src/components/Header/index.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/2-bundle.js.map\"}],\"./home.png\":[{\"id\":\"./src/components/Setup/home.png\",\"name\":\"./src/components/Setup/home.png\",\"file\":\"3-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/3-bundle.js\"},{\"id\":\"./src/components/Setup/home.png\",\"name\":\"./src/components/Setup/home.png\",\"file\":\"3-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/3-bundle.js.map\"}],\"../../../components/Setup\":[{\"id\":\"./src/components/Setup/index.js\",\"name\":\"./src/components/Setup/index.js\",\"file\":\"3-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/3-bundle.js\"},{\"id\":\"./src/components/Setup/index.js\",\"name\":\"./src/components/Setup/index.js\",\"file\":\"3-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/3-bundle.js.map\"}],\"../../../components/About\":[{\"id\":\"./src/components/About/index.js\",\"name\":\"./src/components/About/index.js\",\"file\":\"4-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/4-bundle.js\"},{\"id\":\"./src/components/About/index.js\",\"name\":\"./src/components/About/index.js\",\"file\":\"4-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/4-bundle.js.map\"}],\"undefined\":[{\"id\":1,\"name\":null,\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\",\"name\":\"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":1,\"name\":null,\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"},{\"id\":\"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\",\"name\":\"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./assertThisInitialized.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\",\"name\":\"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\",\"name\":\"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/classCallCheck\":[{\"id\":\"./node_modules/@babel/runtime/helpers/classCallCheck.js\",\"name\":\"./node_modules/@babel/runtime/helpers/classCallCheck.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/classCallCheck.js\",\"name\":\"./node_modules/@babel/runtime/helpers/classCallCheck.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/createClass\":[{\"id\":\"./node_modules/@babel/runtime/helpers/createClass.js\",\"name\":\"./node_modules/@babel/runtime/helpers/createClass.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/createClass.js\",\"name\":\"./node_modules/@babel/runtime/helpers/createClass.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/esm/extends\":[{\"id\":\"./node_modules/@babel/runtime/helpers/esm/extends.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/extends.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/esm/extends.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/extends.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/esm/inheritsLoose\":[{\"id\":\"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose\":[{\"id\":\"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./setPrototypeOf.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\",\"name\":\"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\",\"name\":\"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/getPrototypeOf\":[{\"id\":\"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\",\"name\":\"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\",\"name\":\"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/inherits\":[{\"id\":\"./node_modules/@babel/runtime/helpers/inherits.js\",\"name\":\"./node_modules/@babel/runtime/helpers/inherits.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/inherits.js\",\"name\":\"./node_modules/@babel/runtime/helpers/inherits.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/possibleConstructorReturn\":[{\"id\":\"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\",\"name\":\"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\",\"name\":\"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/typeof\":[{\"id\":\"./node_modules/@babel/runtime/helpers/typeof.js\",\"name\":\"./node_modules/@babel/runtime/helpers/typeof.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/typeof.js\",\"name\":\"./node_modules/@babel/runtime/helpers/typeof.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"ansi-html\":[{\"id\":\"./node_modules/ansi-html/index.js\",\"name\":\"./node_modules/ansi-html/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/ansi-html/index.js\",\"name\":\"./node_modules/ansi-html/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"ansi-regex\":[{\"id\":\"./node_modules/ansi-regex/index.js\",\"name\":\"./node_modules/ansi-regex/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/ansi-regex/index.js\",\"name\":\"./node_modules/ansi-regex/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"../../../node_modules/css-loader/dist/runtime/api.js\":[{\"id\":\"./node_modules/css-loader/dist/runtime/api.js\",\"name\":\"./node_modules/css-loader/dist/runtime/api.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/runtime/api.js\",\"name\":\"./node_modules/css-loader/dist/runtime/api.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"../../../node_modules/css-loader/dist/runtime/getUrl.js\":[{\"id\":\"./node_modules/css-loader/dist/runtime/getUrl.js\",\"name\":\"./node_modules/css-loader/dist/runtime/getUrl.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/runtime/getUrl.js\",\"name\":\"./node_modules/css-loader/dist/runtime/getUrl.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"events\":[{\"id\":\"./node_modules/events/events.js\",\"name\":\"./node_modules/events/events.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/events/events.js\",\"name\":\"./node_modules/events/events.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"history\":[{\"id\":\"./node_modules/history/esm/history.js\",\"name\":\"./node_modules/history/esm/history.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/history/esm/history.js\",\"name\":\"./node_modules/history/esm/history.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"hoist-non-react-statics\":[{\"id\":\"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\",\"name\":\"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\",\"name\":\"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./html4-entities\":[{\"id\":\"./node_modules/html-entities/lib/html4-entities.js\",\"name\":\"./node_modules/html-entities/lib/html4-entities.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/html-entities/lib/html4-entities.js\",\"name\":\"./node_modules/html-entities/lib/html4-entities.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./html5-entities\":[{\"id\":\"./node_modules/html-entities/lib/html5-entities.js\",\"name\":\"./node_modules/html-entities/lib/html5-entities.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/html-entities/lib/html5-entities.js\",\"name\":\"./node_modules/html-entities/lib/html5-entities.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"html-entities\":[{\"id\":\"./node_modules/html-entities/lib/index.js\",\"name\":\"./node_modules/html-entities/lib/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/html-entities/lib/index.js\",\"name\":\"./node_modules/html-entities/lib/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./surrogate-pairs\":[{\"id\":\"./node_modules/html-entities/lib/surrogate-pairs.js\",\"name\":\"./node_modules/html-entities/lib/surrogate-pairs.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/html-entities/lib/surrogate-pairs.js\",\"name\":\"./node_modules/html-entities/lib/surrogate-pairs.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./xml-entities\":[{\"id\":\"./node_modules/html-entities/lib/xml-entities.js\",\"name\":\"./node_modules/html-entities/lib/xml-entities.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/html-entities/lib/xml-entities.js\",\"name\":\"./node_modules/html-entities/lib/xml-entities.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"loglevel\":[{\"id\":\"./node_modules/loglevel/lib/loglevel.js\",\"name\":\"./node_modules/loglevel/lib/loglevel.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/loglevel/lib/loglevel.js\",\"name\":\"./node_modules/loglevel/lib/loglevel.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"mini-create-react-context\":[{\"id\":\"./node_modules/mini-create-react-context/dist/esm/index.js\",\"name\":\"./node_modules/mini-create-react-context/dist/esm/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/mini-create-react-context/dist/esm/index.js\",\"name\":\"./node_modules/mini-create-react-context/dist/esm/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"punycode\":[{\"id\":\"./node_modules/node-libs-browser/node_modules/punycode/punycode.js\",\"name\":\"./node_modules/node-libs-browser/node_modules/punycode/punycode.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/node-libs-browser/node_modules/punycode/punycode.js\",\"name\":\"./node_modules/node-libs-browser/node_modules/punycode/punycode.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"object-assign\":[{\"id\":\"./node_modules/object-assign/index.js\",\"name\":\"./node_modules/object-assign/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/object-assign/index.js\",\"name\":\"./node_modules/object-assign/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"prop-types/checkPropTypes\":[{\"id\":\"./node_modules/prop-types/checkPropTypes.js\",\"name\":\"./node_modules/prop-types/checkPropTypes.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/prop-types/checkPropTypes.js\",\"name\":\"./node_modules/prop-types/checkPropTypes.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./factoryWithTypeCheckers\":[{\"id\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"name\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"name\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"prop-types\":[{\"id\":\"./node_modules/prop-types/index.js\",\"name\":\"./node_modules/prop-types/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/prop-types/index.js\",\"name\":\"./node_modules/prop-types/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./lib/ReactPropTypesSecret\":[{\"id\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"name\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"name\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./decode\":[{\"id\":\"./node_modules/querystring-es3/decode.js\",\"name\":\"./node_modules/querystring-es3/decode.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/querystring-es3/decode.js\",\"name\":\"./node_modules/querystring-es3/decode.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./encode\":[{\"id\":\"./node_modules/querystring-es3/encode.js\",\"name\":\"./node_modules/querystring-es3/encode.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/querystring-es3/encode.js\",\"name\":\"./node_modules/querystring-es3/encode.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"querystring\":[{\"id\":\"./node_modules/querystring-es3/index.js\",\"name\":\"./node_modules/querystring-es3/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/querystring-es3/index.js\",\"name\":\"./node_modules/querystring-es3/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./cjs/react-dom.development.js\":[{\"id\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"name\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"name\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"react-dom\":[{\"id\":\"./node_modules/react-dom/index.js\",\"name\":\"./node_modules/react-dom/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-dom/index.js\",\"name\":\"./node_modules/react-dom/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./cjs/react-is.development.js\":[{\"id\":\"./node_modules/react-is/cjs/react-is.development.js\",\"name\":\"./node_modules/react-is/cjs/react-is.development.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-is/cjs/react-is.development.js\",\"name\":\"./node_modules/react-is/cjs/react-is.development.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"react-is\":[{\"id\":\"./node_modules/react-is/index.js\",\"name\":\"./node_modules/react-is/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-is/index.js\",\"name\":\"./node_modules/react-is/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"react-loadable\":[{\"id\":\"./node_modules/react-loadable/lib/index.js\",\"name\":\"./node_modules/react-loadable/lib/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-loadable/lib/index.js\",\"name\":\"./node_modules/react-loadable/lib/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"react-router-dom\":[{\"id\":\"./node_modules/react-router-dom/esm/react-router-dom.js\",\"name\":\"./node_modules/react-router-dom/esm/react-router-dom.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-router-dom/esm/react-router-dom.js\",\"name\":\"./node_modules/react-router-dom/esm/react-router-dom.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"react-router\":[{\"id\":\"./node_modules/react-router/esm/react-router.js\",\"name\":\"./node_modules/react-router/esm/react-router.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-router/esm/react-router.js\",\"name\":\"./node_modules/react-router/esm/react-router.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"isarray\":[{\"id\":\"./node_modules/react-router/node_modules/isarray/index.js\",\"name\":\"./node_modules/react-router/node_modules/isarray/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-router/node_modules/isarray/index.js\",\"name\":\"./node_modules/react-router/node_modules/isarray/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"path-to-regexp\":[{\"id\":\"./node_modules/react-router/node_modules/path-to-regexp/index.js\",\"name\":\"./node_modules/react-router/node_modules/path-to-regexp/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-router/node_modules/path-to-regexp/index.js\",\"name\":\"./node_modules/react-router/node_modules/path-to-regexp/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./cjs/react.development.js\":[{\"id\":\"./node_modules/react/cjs/react.development.js\",\"name\":\"./node_modules/react/cjs/react.development.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/react/cjs/react.development.js\",\"name\":\"./node_modules/react/cjs/react.development.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"react\":[{\"id\":\"./node_modules/react/index.js\",\"name\":\"./node_modules/react/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/react/index.js\",\"name\":\"./node_modules/react/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"resolve-pathname\":[{\"id\":\"./node_modules/resolve-pathname/esm/resolve-pathname.js\",\"name\":\"./node_modules/resolve-pathname/esm/resolve-pathname.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/resolve-pathname/esm/resolve-pathname.js\",\"name\":\"./node_modules/resolve-pathname/esm/resolve-pathname.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./cjs/scheduler-tracing.development.js\":[{\"id\":\"./node_modules/scheduler/cjs/scheduler-tracing.development.js\",\"name\":\"./node_modules/scheduler/cjs/scheduler-tracing.development.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/scheduler/cjs/scheduler-tracing.development.js\",\"name\":\"./node_modules/scheduler/cjs/scheduler-tracing.development.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./cjs/scheduler.development.js\":[{\"id\":\"./node_modules/scheduler/cjs/scheduler.development.js\",\"name\":\"./node_modules/scheduler/cjs/scheduler.development.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/scheduler/cjs/scheduler.development.js\",\"name\":\"./node_modules/scheduler/cjs/scheduler.development.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"scheduler\":[{\"id\":\"./node_modules/scheduler/index.js\",\"name\":\"./node_modules/scheduler/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/scheduler/index.js\",\"name\":\"./node_modules/scheduler/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"scheduler/tracing\":[{\"id\":\"./node_modules/scheduler/tracing.js\",\"name\":\"./node_modules/scheduler/tracing.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/scheduler/tracing.js\",\"name\":\"./node_modules/scheduler/tracing.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"sockjs-client/dist/sockjs\":[{\"id\":\"./node_modules/sockjs-client/dist/sockjs.js\",\"name\":\"./node_modules/sockjs-client/dist/sockjs.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/sockjs-client/dist/sockjs.js\",\"name\":\"./node_modules/sockjs-client/dist/sockjs.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"strip-ansi\":[{\"id\":\"./node_modules/strip-ansi/index.js\",\"name\":\"./node_modules/strip-ansi/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/strip-ansi/index.js\",\"name\":\"./node_modules/strip-ansi/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"!../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\":[{\"id\":\"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\",\"name\":\"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\",\"name\":\"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"tiny-invariant\":[{\"id\":\"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\",\"name\":\"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\",\"name\":\"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"tiny-warning\":[{\"id\":\"./node_modules/tiny-warning/dist/tiny-warning.esm.js\",\"name\":\"./node_modules/tiny-warning/dist/tiny-warning.esm.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/tiny-warning/dist/tiny-warning.esm.js\",\"name\":\"./node_modules/tiny-warning/dist/tiny-warning.esm.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"url\":[{\"id\":\"./node_modules/url/url.js\",\"name\":\"./node_modules/url/url.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/url/url.js\",\"name\":\"./node_modules/url/url.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./util\":[{\"id\":\"./node_modules/url/util.js\",\"name\":\"./node_modules/url/util.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/url/util.js\",\"name\":\"./node_modules/url/util.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"value-equal\":[{\"id\":\"./node_modules/value-equal/esm/value-equal.js\",\"name\":\"./node_modules/value-equal/esm/value-equal.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/value-equal/esm/value-equal.js\",\"name\":\"./node_modules/value-equal/esm/value-equal.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./BaseClient\":[{\"id\":\"./node_modules/webpack-dev-server/client/clients/BaseClient.js\",\"name\":\"./node_modules/webpack-dev-server/client/clients/BaseClient.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/clients/BaseClient.js\",\"name\":\"./node_modules/webpack-dev-server/client/clients/BaseClient.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./clients/SockJSClient\":[{\"id\":\"./node_modules/webpack-dev-server/client/clients/SockJSClient.js\",\"name\":\"./node_modules/webpack-dev-server/client/clients/SockJSClient.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/clients/SockJSClient.js\",\"name\":\"./node_modules/webpack-dev-server/client/clients/SockJSClient.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"/Users/toninichev/Cloud/workspace/arduino/Thermostat/web/node_modules/webpack-dev-server/client/index.js?http://localhost:8000\":[{\"id\":\"./node_modules/webpack-dev-server/client/index.js?http://localhost:8000\",\"name\":\"./node_modules/webpack-dev-server/client/index.js?http://localhost:8000\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/index.js?http://localhost:8000\",\"name\":\"./node_modules/webpack-dev-server/client/index.js?http://localhost:8000\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./overlay\":[{\"id\":\"./node_modules/webpack-dev-server/client/overlay.js\",\"name\":\"./node_modules/webpack-dev-server/client/overlay.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/overlay.js\",\"name\":\"./node_modules/webpack-dev-server/client/overlay.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./socket\":[{\"id\":\"./node_modules/webpack-dev-server/client/socket.js\",\"name\":\"./node_modules/webpack-dev-server/client/socket.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/socket.js\",\"name\":\"./node_modules/webpack-dev-server/client/socket.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./utils/createSocketUrl\":[{\"id\":\"./node_modules/webpack-dev-server/client/utils/createSocketUrl.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/createSocketUrl.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/utils/createSocketUrl.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/createSocketUrl.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./getCurrentScriptSource\":[{\"id\":\"./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./utils/log\":[{\"id\":\"./node_modules/webpack-dev-server/client/utils/log.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/log.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/utils/log.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/log.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./utils/reloadApp\":[{\"id\":\"./node_modules/webpack-dev-server/client/utils/reloadApp.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/reloadApp.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/utils/reloadApp.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/reloadApp.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./utils/sendMessage\":[{\"id\":\"./node_modules/webpack-dev-server/client/utils/sendMessage.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/sendMessage.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/utils/sendMessage.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/sendMessage.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./../../webpack/buildin/global.js\":[{\"id\":\"./node_modules/webpack/buildin/global.js\",\"name\":\"./node_modules/webpack/buildin/global.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack/buildin/global.js\",\"name\":\"./node_modules/webpack/buildin/global.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./../../../webpack/buildin/module.js\":[{\"id\":\"./node_modules/webpack/buildin/module.js\",\"name\":\"./node_modules/webpack/buildin/module.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack/buildin/module.js\",\"name\":\"./node_modules/webpack/buildin/module.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"/Users/toninichev/Cloud/workspace/arduino/Thermostat/web/node_modules/webpack/hot/dev-server.js\":[{\"id\":\"./node_modules/webpack/hot/dev-server.js\",\"name\":\"./node_modules/webpack/hot/dev-server.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack/hot/dev-server.js\",\"name\":\"./node_modules/webpack/hot/dev-server.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./emitter\":[{\"id\":\"./node_modules/webpack/hot/emitter.js\",\"name\":\"./node_modules/webpack/hot/emitter.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack/hot/emitter.js\",\"name\":\"./node_modules/webpack/hot/emitter.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./log-apply-result\":[{\"id\":\"./node_modules/webpack/hot/log-apply-result.js\",\"name\":\"./node_modules/webpack/hot/log-apply-result.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack/hot/log-apply-result.js\",\"name\":\"./node_modules/webpack/hot/log-apply-result.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./log\":[{\"id\":\"./node_modules/webpack/hot/log.js\",\"name\":\"./node_modules/webpack/hot/log.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack/hot/log.js\",\"name\":\"./node_modules/webpack/hot/log.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./components/App\":[{\"id\":\"./src/components/App/index.js\",\"name\":\"./src/components/App/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./src/components/App/index.js\",\"name\":\"./src/components/App/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"../../../components/Loading\":[{\"id\":\"./src/components/Loading/index.js\",\"name\":\"./src/components/Loading/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./src/components/Loading/index.js\",\"name\":\"./src/components/Loading/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./ComponentList\":[{\"id\":\"./src/containers/PageLayout/ComponentList/index.js\",\"name\":\"./src/containers/PageLayout/ComponentList/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./src/containers/PageLayout/ComponentList/index.js\",\"name\":\"./src/containers/PageLayout/ComponentList/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./PageData\":[{\"id\":\"./src/containers/PageLayout/PageData/index.js\",\"name\":\"./src/containers/PageLayout/PageData/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./src/containers/PageLayout/PageData/index.js\",\"name\":\"./src/containers/PageLayout/PageData/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"../../containers/PageLayout\":[{\"id\":\"./src/containers/PageLayout/index.js\",\"name\":\"./src/containers/PageLayout/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./src/containers/PageLayout/index.js\",\"name\":\"./src/containers/PageLayout/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"../../fonts/aclonica/aclonica-regular.woff2\":[{\"id\":\"./src/fonts/aclonica/aclonica-regular.woff2\",\"name\":\"./src/fonts/aclonica/aclonica-regular.woff2\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./src/fonts/aclonica/aclonica-regular.woff2\",\"name\":\"./src/fonts/aclonica/aclonica-regular.woff2\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}],\"./src/index.js\":[{\"id\":\"./src/index.js\",\"name\":\"./src/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js\"},{\"id\":\"./src/index.js\",\"name\":\"./src/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://localhost:8000/dist/main-bundle.js.map\"}]}");

/***/ }),

/***/ "./expressMiddlewares/cookiesManagement.js":
/*!*************************************************!*\
  !*** ./expressMiddlewares/cookiesManagement.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function cookiesManagement(req, res, next) {
  // example of adding/reading cookie
  var cookie = req.cookies.testCookie;

  if (cookie === undefined) {
    // no: set a new cookie
    var randomNumber = new Date().toDateString();
    res.cookie('testCookie', randomNumber, {
      maxAge: 900000,
      httpOnly: true
    });
    console.log('cookie created successfully');
  } else {
    // cookie was already present 
    console.log('cookie exists', cookie);
  }

  next(); // !Importat to continue execution.
}

/* harmony default export */ __webpack_exports__["default"] = (cookiesManagement);

/***/ }),

/***/ "./expressMiddlewares/requestDataFromAPI.js":
/*!**************************************************!*\
  !*** ./expressMiddlewares/requestDataFromAPI.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_containers_PageLayout_PageData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/containers/PageLayout/PageData */ "./src/containers/PageLayout/PageData/index.js");
/* harmony import */ var _src_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/queries */ "./src/queries/index.js");





var requestDataFromAPI = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res, next) {
    var result, templateName;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _src_queries__WEBPACK_IMPORTED_MODULE_3__["default"].getFeatureFlags();

          case 2:
            result = _context.sent;
            templateName = _src_containers_PageLayout_PageData__WEBPACK_IMPORTED_MODULE_2__["default"][req.url].template;
            req.templateName = templateName;
            req.apiData = result;
            next(); // continue once the data is available.

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function requestDataFromAPI(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (requestDataFromAPI);

/***/ }),

/***/ "./expressMiddlewares/thermostatServices/index.js":
/*!********************************************************!*\
  !*** ./expressMiddlewares/thermostatServices/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./expressMiddlewares/thermostatServices/services.js");




var dispatch = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res) {
    var action;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            action = req.params[0];
            _context.t0 = action;
            _context.next = _context.t0 === 'get-data' ? 4 : 7;
            break;

          case 4:
            _context.next = 6;
            return Object(_services__WEBPACK_IMPORTED_MODULE_2__["getReadings"])(req, res);

          case 6:
            return _context.abrupt("break", 7);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function dispatch(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (dispatch);

/***/ }),

/***/ "./expressMiddlewares/thermostatServices/services.js":
/*!***********************************************************!*\
  !*** ./expressMiddlewares/thermostatServices/services.js ***!
  \***********************************************************/
/*! exports provided: getReadings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReadings", function() { return getReadings; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/queries */ "./src/queries/index.js");




var sendResponse = function sendResponse(res, responseString) {
  res.status(200).set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', '*').send(responseString);
};

var getReadings = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _src_queries__WEBPACK_IMPORTED_MODULE_2__["default"].getThermostatData();

          case 2:
            response = _context.sent;
            sendResponse(res, response);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getReadings(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/components/About/index.js":
/*!***************************************!*\
  !*** ./src/components/About/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/About/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);


var ls = [];

for (var i = 0; i < 20450; i++) {
  ls.push(i);
}

var AboutContainer = function AboutContainer() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var endTime = new Date();
    var benchmark = parseFloat((endTime.getTime() - startTime.getTime()) * 0.001).toFixed(2);
    alert("Download time:   ".concat(benchmark, " sec"));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper
  }, ls.map(function (i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.element
    }, "$", i, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footer
  }, "END"));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutContainer);

/***/ }),

/***/ "./src/components/About/styles.scss":
/*!******************************************!*\
  !*** ./src/components/About/styles.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"About-wrapper--1QYIH","footer":"About-footer--2PmVl"};

/***/ }),

/***/ "./src/components/AddFlagPopup/index.js":
/*!**********************************************!*\
  !*** ./src/components/AddFlagPopup/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./src/components/AddFlagPopup/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_getParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/getParams */ "./src/utils/getParams.js");
/* harmony import */ var _containers_EventsManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../containers/EventsManager */ "./src/containers/EventsManager/index.js");
/* harmony import */ var _utils_Poster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/Poster */ "./src/utils/Poster.js");








var addFlag = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(closePopup) {
    var flag, searchResult, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            flag = {
              "group": document.getElementById('addFeatureFlag').querySelector("input.group").value,
              "flagName": document.getElementById('addFeatureFlag').querySelector("input.flagName").value,
              "value": document.getElementById('addFeatureFlag').querySelector("input.value").value
            };
            _context.next = 3;
            return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_6__["Poster"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_4__["apiUrl"], "/find"), {
              'flagName': flag.flagName
            });

          case 3:
            searchResult = _context.sent;

            if (!(searchResult.length > 0)) {
              _context.next = 8;
              break;
            }

            _containers_EventsManager__WEBPACK_IMPORTED_MODULE_5__["default"].callEvent('showPopup')("Flag with name: ".concat(flag.flagName, " already exists!"));
            _context.next = 12;
            break;

          case 8:
            _context.next = 10;
            return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_6__["Poster"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_4__["apiUrl"], "/add"), flag);

          case 10:
            result = _context.sent;
            closePopup();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addFlag(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Renderer = function Renderer(_ref2) {
  var closePopup = _ref2.closePopup;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "addFeatureFlag",
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.modal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.modalContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    onClick: function onClick() {
      closePopup();
    },
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.close
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flagProperties
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "FLAG NAME"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: "flagName",
    type: "text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "GROOUP"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: "group",
    type: "text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "VALUE"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: "value",
    type: "text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: function onClick() {
      addFlag(closePopup);
    }
  }, "ADD FLAG")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Renderer);

/***/ }),

/***/ "./src/components/AddFlagPopup/styles.scss":
/*!*************************************************!*\
  !*** ./src/components/AddFlagPopup/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"modal":"AddFlagPopup-modal--38NfN","modalContent":"AddFlagPopup-modalContent--1rWTn","close":"AddFlagPopup-close--1iry3"};

/***/ }),

/***/ "./src/components/App/index.js":
/*!*************************************!*\
  !*** ./src/components/App/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/PageLayout */ "./src/containers/PageLayout/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./src/components/App/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);





var client = function client(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "*",
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_PageLayout__WEBPACK_IMPORTED_MODULE_2__["default"], props);
    }
  })));
};

var context = {};

var server = function server(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["StaticRouter"], {
    location: props.url,
    context: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "*",
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_PageLayout__WEBPACK_IMPORTED_MODULE_2__["default"], props);
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var req = _ref.req;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.appWrapper
  }, typeof window == 'undefined' ? server(req) : client(req));
});

/***/ }),

/***/ "./src/components/App/styles.scss":
/*!****************************************!*\
  !*** ./src/components/App/styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"appWrapper":"App-appWrapper--GtBHA"};

/***/ }),

/***/ "./src/components/BulletPoint/index.js":
/*!*********************************************!*\
  !*** ./src/components/BulletPoint/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/BulletPoint/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_EventsManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/EventsManager */ "./src/containers/EventsManager/index.js");




var toggleSelect = function toggleSelect(element, flagName) {
  if (element.target.className.search('BulletPoint-flagBuletSelected')) {
    element.target.className = _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flagBuletSelected;
    _containers_EventsManager__WEBPACK_IMPORTED_MODULE_2__["default"].callEvent('setSelectedList')(flagName);
  } else {
    element.target.className = _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flagBuletEditable;
    _containers_EventsManager__WEBPACK_IMPORTED_MODULE_2__["default"].callEvent('unsetSelectedList')(flagName);
  }
};

var BulletPoint = function BulletPoint(_ref) {
  var status = _ref.status,
      flagName = _ref.flagName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flagBuletEditable,
    onClick: function onClick(element) {
      toggleSelect(element, flagName);
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flagBulet
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.spacing
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BulletPoint);

/***/ }),

/***/ "./src/components/BulletPoint/styles.scss":
/*!************************************************!*\
  !*** ./src/components/BulletPoint/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"flagBulet":"BulletPoint-flagBulet--2XWfE","flagBuletEditable":"BulletPoint-flagBuletEditable--2C1I3","flagBuletSelected":"BulletPoint-flagBuletSelected--xCvyU","spacing":"BulletPoint-spacing--33w1y"};

/***/ }),

/***/ "./src/components/EditDelete/index.js":
/*!********************************************!*\
  !*** ./src/components/EditDelete/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/EditDelete/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_EventsManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/EventsManager */ "./src/containers/EventsManager/index.js");
/* harmony import */ var _GeneralPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GeneralPopup */ "./src/components/GeneralPopup/index.js");





var deleteFlags = function deleteFlags() {
  var list = _containers_EventsManager__WEBPACK_IMPORTED_MODULE_2__["default"].callEvent('getSelectedList')();

  for (var index in list) {
    console.log(">>>", index);
  }
};

var EditDelete = function EditDelete(_ref) {
  var flagEditable = _ref.flagEditable,
      editFlag = _ref.editFlag;

  if (!flagEditable) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick() {
        editFlag();
      }
    }, "EDIT");
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.deleteButton,
      onClick: function onClick() {
        deleteFlags();
      }
    }, "DELETE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick() {
        editFlag();
      }
    }, "CANCEL"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (EditDelete);

/***/ }),

/***/ "./src/components/EditDelete/styles.scss":
/*!***********************************************!*\
  !*** ./src/components/EditDelete/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"deleteButton":"EditDelete-deleteButton--s7f0_"};

/***/ }),

/***/ "./src/components/GeneralPopup/index.js":
/*!**********************************************!*\
  !*** ./src/components/GeneralPopup/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/components/GeneralPopup/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_EventsManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/EventsManager */ "./src/containers/EventsManager/index.js");





var Renderer = function Renderer(_ref) {
  var showPopup = _ref.showPopup;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(showPopup),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      popupVisible = _useState2[0],
      setPopupVisible = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      message = _useState4[0],
      setMessage = _useState4[1];

  function closePopup() {
    setPopupVisible(false);
  }

  function showPopupFunc(message) {
    setMessage(message);
    setPopupVisible(true);
  } // register global showPopup to be called by other components


  _containers_EventsManager__WEBPACK_IMPORTED_MODULE_3__["default"].registerEvent('showPopup', showPopupFunc);
  return popupVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "addFeatureFlag",
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    onClick: function onClick() {
      closePopup();
    },
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.close
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message
  }, message))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Renderer);

/***/ }),

/***/ "./src/components/GeneralPopup/styles.scss":
/*!*************************************************!*\
  !*** ./src/components/GeneralPopup/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"modal":"GeneralPopup-modal--OnTgp","modalContent":"GeneralPopup-modalContent--1NTQT","close":"GeneralPopup-close--3VIzC","message":"GeneralPopup-message--3VEhO"};

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/components/Header/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GeneralPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GeneralPopup */ "./src/components/GeneralPopup/index.js");
/* harmony import */ var _containers_EventsManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/EventsManager */ "./src/containers/EventsManager/index.js");





var selectedFlagsList = [];

var getSelectedList = function getSelectedList() {
  return selectedFlagsList;
};

var setSelectedList = function setSelectedList(id) {
  selectedFlagsList[id] = true;
};

var unsetSelectedList = function unsetSelectedList(id) {
  delete selectedFlagsList[id];
};

_containers_EventsManager__WEBPACK_IMPORTED_MODULE_4__["default"].registerEvent('getSelectedList', getSelectedList);
_containers_EventsManager__WEBPACK_IMPORTED_MODULE_4__["default"].registerEvent('setSelectedList', setSelectedList);
_containers_EventsManager__WEBPACK_IMPORTED_MODULE_4__["default"].registerEvent('unsetSelectedList', unsetSelectedList);

var Header = function Header(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, title, " ", "Webpack React Tutorial", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/home"
  }, "FLAGS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/setup"
  }, "SETTINGS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/about"
  }, "ABOUT")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GeneralPopup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    showPopup: false
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/Header/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"Header-wrapper--2UICB","active":"Header-active--15lr3"};

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.scss */ "./src/components/Home/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ToggleSwitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ToggleSwitch */ "./src/components/ToggleSwitch/index.js");
/* harmony import */ var _BulletPoint__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../BulletPoint */ "./src/components/BulletPoint/index.js");
/* harmony import */ var _AddFlagPopup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../AddFlagPopup */ "./src/components/AddFlagPopup/index.js");
/* harmony import */ var _utils_Poster__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/Poster */ "./src/utils/Poster.js");
/* harmony import */ var _EditDelete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../EditDelete */ "./src/components/EditDelete/index.js");
/* harmony import */ var _utils_getParams__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/getParams */ "./src/utils/getParams.js");
/* harmony import */ var _RangeSlider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../RangeSlider */ "./src/components/RangeSlider/index.js");
/* harmony import */ var _TemperatureBar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../TemperatureBar */ "./src/components/TemperatureBar/index.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }












var Home = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Home);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "setThermostatsValue", function (e) {
      _this.changeRange = e; //console.log("@@@#@#@#:",e );
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "fetchData", function () {
      fetch("".concat("http://localhost", ":").concat("8081", "/thermostat-services/get-data")).then(function (response) {
        return response.json();
      }).then(function (data) {
        //this.setState({thermostats: data});
        console.log(data);

        for (var i = 0; i < 10; i++) {
          var id = data[i].id;
          var curentTemp = data[i].curentTemp;

          _this.changeRange[i](id, curentTemp);
        }

        setTimeout(function () {
          _this.fetchData();
        }, 2000);
      });
    });

    _this.getThermostatsSettings();

    _this.changeRange = [];
    _this.addFlagVisible = false;
    _this.state = {
      addFlagVisible: false,
      flagEditable: false,
      thermostats: []
    };

    _this.fetchData();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Home, [{
    key: "addFlag",
    value: function addFlag() {
      this.setState({
        addFlagVisible: true
      });
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this.setState({
        addFlagVisible: false
      });
      this.getThermostatsSettings();
    }
  }, {
    key: "getThermostatsSettings",
    value: function () {
      var _getThermostatsSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof window == 'undefined')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_14__["Poster"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_16__["apiUrl"], "/get"), {});

              case 4:
                result = _context.sent;

                if (JSON.stringify(result) !== JSON.stringify(window.__API_DATA__)) {
                  window.__API_DATA__ = result;
                  this.forceUpdate();
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getThermostatsSettings() {
        return _getThermostatsSettings.apply(this, arguments);
      }

      return getThermostatsSettings;
    }()
  }, {
    key: "editFlag",
    value: function editFlag() {
      this.setState({
        flagEditable: !this.state.flagEditable
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var Thermostats = typeof global.__API_DATA__ !== 'undefined' ? global.__API_DATA__ : window.__API_DATA__;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.wrapper
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.leftRail
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.title
      }, "Thermostats"), Thermostats.map(function (flag, id) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          key: flag.flagName,
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.flagWrapper
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_BulletPoint__WEBPACK_IMPORTED_MODULE_12__["default"], {
          flagName: flag.flagName,
          status: _this2.state.flagEditable
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.flagName
        }, flag.flagName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.flagValue
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ToggleSwitch__WEBPACK_IMPORTED_MODULE_11__["default"], {
          featureFlagName: flag.flagName,
          val: flag.value
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_RangeSlider__WEBPACK_IMPORTED_MODULE_17__["default"], {
          SliderId: "1",
          Min: "16",
          Max: "40",
          SetRangeValue: _this2.setThermostatsValue
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_RangeSlider__WEBPACK_IMPORTED_MODULE_17__["default"], {
          SliderId: "2",
          Min: "0",
          Max: "50",
          SetRangeValue: function SetRangeValue() {},
          onChangeCallback: _this2.onChangeCallback
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_TemperatureBar__WEBPACK_IMPORTED_MODULE_18__["default"], {
          temp: typeof _this2.state.thermostats[id] == 'undefined' ? 0 : _this2.state.thermostats[id].curentTemp
        }), "ID: ", id);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.rightRail
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: this.state.flagEditable ? _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.addButtonHidden : _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.addButtonVisible,
        onClick: function onClick() {
          _this2.addFlag();
        }
      }, "ADD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_EditDelete__WEBPACK_IMPORTED_MODULE_15__["default"], {
        flagEditable: this.state.flagEditable,
        editFlag: function editFlag() {
          _this2.editFlag();
        }
      })), this.state.addFlagVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_AddFlagPopup__WEBPACK_IMPORTED_MODULE_13__["default"], {
        closePopup: function closePopup() {
          _this2.closePopup();
        }
      }) : null);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Home/styles.scss":
/*!*****************************************!*\
  !*** ./src/components/Home/styles.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"title":"Home-title--kAgyA","wrapper":"Home-wrapper--3avi5","flagWrapper":"Home-flagWrapper--2aGak","leftRail":"Home-leftRail--1B5Fn","rightRail":"Home-rightRail--EYNWw","addButtonVisible":"Home-addButtonVisible--2yIBN","addButtonHidden":"Home-addButtonHidden--12snn","flagValue":"Home-flagValue--3PPSE"};

/***/ }),

/***/ "./src/components/Loading/index.js":
/*!*****************************************!*\
  !*** ./src/components/Loading/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var styles = __webpack_require__(/*! ./styles.scss */ "./src/components/Loading/styles.scss");
/**
 * HELPER COMPONENT TO DISPLAY LOADING ... AND HANDLE ERRORS WHEN COMPONENTS LOADS DYNAMICALLY 
 * @param {} props 
 */


var Loading = function Loading(props) {
  if (props.error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.wrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Error loading component!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, props.error.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.error.stack), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: props.retry
    }, "Retry")));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/components/Loading/styles.scss":
/*!********************************************!*\
  !*** ./src/components/Loading/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"Loading-wrapper--2uAUn"};

/***/ }),

/***/ "./src/components/RangeSlider/index.js":
/*!*********************************************!*\
  !*** ./src/components/RangeSlider/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/RangeSlider/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);



var RangeSlider = function RangeSlider(_ref) {
  var onChangeCallback = _ref.onChangeCallback,
      SliderId = _ref.SliderId,
      Min = _ref.Min,
      Max = _ref.Max,
      SetRangeValue = _ref.SetRangeValue;
  var beginDrag = false;
  var val = 0;
  var min = parseFloat(Min);
  var max = parseFloat(Max);
  var ratio = 360 / (max - min);

  var setValue = function setValue(v) {
    console.log(">> setValue called:", v);
    var m = parseFloat(min); //const a = Math.round(((angle / ratio) * 100) / 100);

    var rotateAngle = 360 / (360 / v);
    val = v;
    if (typeof document == 'undefined') return;
    document.querySelectorAll('.label')[SliderId].innerText = val;
    document.querySelectorAll('.circle > .dot')[SliderId].style.transform = "rotate(".concat(rotateAngle, "deg)");
  };

  SetRangeValue(setValue); // pass setValue to be accessed from parent component.

  var mouseMoveAction = function mouseMoveAction(e) {
    if (beginDrag == false) return;
    var center_x = document.querySelectorAll('.circle')[SliderId].offsetWidth / 2 + document.querySelectorAll('.circle')[SliderId].offsetLeft;
    var center_y = document.querySelectorAll('.circle')[SliderId].offsetHeight / 2 + document.querySelectorAll('.circle')[SliderId].offsetTop;
    var eventObj;
    if (e.touches) eventObj = e.touches[0];else eventObj = e;
    var pos_x = eventObj.pageX;
    var pos_y = eventObj.pageY;
    var delta_y = center_y - pos_y;
    var delta_x = center_x - pos_x;
    var angle = Math.atan2(delta_y, delta_x) * (180 / Math.PI); // Calculate Angle between circle center and mouse pos

    angle -= 90;
    if (angle < 0) angle = 360 + angle; // Always show angle positive

    angle = Math.round(angle);
    document.querySelectorAll('.circle > .dot')[SliderId].style.transform = "rotate(".concat(angle, "deg)");
    var m = parseFloat(min);
    var a = Math.round(angle / ratio * 100 / 100);
    val = m + a;
    document.querySelectorAll('.label')[SliderId].innerText = val;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.querySelectorAll('.circle > .dot')[SliderId].addEventListener('touchstart', function (e) {
      beginDrag = true;
    });
    document.querySelectorAll('.circle > .dot')[SliderId].addEventListener('touchend', function (e) {
      beginDrag = false;
    });
    console.log("TEST   : ", SliderId);
    document.querySelectorAll('.circle > .dot')[SliderId].addEventListener('mousedown', function (e) {
      beginDrag = true;
    });
    document.querySelectorAll('.circle > .dot')[SliderId].addEventListener('mouseup', function (e) {
      beginDrag = false;
    });
    document.addEventListener('mousemove', function (e) {
      mouseMoveAction(e);
    });
    document.addEventListener('touchmove', function (e) {
      mouseMoveAction(e);
    }); //setValue(28);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.temperatureText
  }, "128.34"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.circle, 'circle'].join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label, 'label'].join(' ')
  }, " -- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dot, 'dot'].join(' ')
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RangeSlider);

/***/ }),

/***/ "./src/components/RangeSlider/styles.scss":
/*!************************************************!*\
  !*** ./src/components/RangeSlider/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"RangeSlider-wrapper--3QGS7","circle":"RangeSlider-circle--2KOVY","dot":"RangeSlider-dot--3wtkV","label":"RangeSlider-label--2RwQB"};

/***/ }),

/***/ "./src/components/Setup/index.js":
/*!***************************************!*\
  !*** ./src/components/Setup/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./src/components/Setup/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_Poster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Poster */ "./src/utils/Poster.js");
/* harmony import */ var _utils_getParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/getParams */ "./src/utils/getParams.js");







var setupDatabase = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_4__["default"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_5__["apiUrl"], "/setup"), {});

          case 2:
            result = _context.sent;
            console.log(result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function setupDatabase() {
    return _ref.apply(this, arguments);
  };
}();

var dropDatabase = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_4__["default"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_5__["apiUrl"], "/dropdb"), {});

          case 2:
            result = _context2.sent;
            console.log(result);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function dropDatabase() {
    return _ref2.apply(this, arguments);
  };
}();

function Greetings(_ref3) {
  var props = _ref3.props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: function onClick() {
      dropDatabase();
    }
  }, "DROP DATABASE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: function onClick() {
      setupDatabase();
    }
  }, "CREATE DATABASE")));
}

/* harmony default export */ __webpack_exports__["default"] = (Greetings);

/***/ }),

/***/ "./src/components/Setup/styles.scss":
/*!******************************************!*\
  !*** ./src/components/Setup/styles.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"Setup-wrapper--2579Y"};

/***/ }),

/***/ "./src/components/TemperatureBar/index.js":
/*!************************************************!*\
  !*** ./src/components/TemperatureBar/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/TemperatureBar/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Poster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Poster */ "./src/utils/Poster.js");
/* harmony import */ var _utils_getParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/getParams */ "./src/utils/getParams.js");





var handleTemperatureChange = function handleTemperatureChange(event) {
  console.log(event.target.value);
};

var TemperatureBar = function TemperatureBar(_ref) {
  var temp = _ref.temp;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Curent Temperature: "), temp);
};

/* harmony default export */ __webpack_exports__["default"] = (TemperatureBar);

/***/ }),

/***/ "./src/components/TemperatureBar/styles.scss":
/*!***************************************************!*\
  !*** ./src/components/TemperatureBar/styles.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"label":"TemperatureBar-label--2-Bh7"};

/***/ }),

/***/ "./src/components/ToggleSwitch/index.js":
/*!**********************************************!*\
  !*** ./src/components/ToggleSwitch/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./src/components/ToggleSwitch/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_Poster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Poster */ "./src/utils/Poster.js");
/* harmony import */ var _utils_getParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/getParams */ "./src/utils/getParams.js");







var switchToggled = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(featureFlagName) {
    var flag, postData, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            flag = findFlagByName(featureFlagName);
            flag.value = flag.value === 'on' ? 'off' : 'on';
            postData = {
              updateFlag: {
                "flagName": featureFlagName
              },
              newFlagData: flag
            };
            console.log(">>>", _utils_getParams__WEBPACK_IMPORTED_MODULE_5__["apiUrl"]);
            _context.next = 6;
            return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_4__["Poster"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_5__["apiUrl"], "/update"), postData);

          case 6:
            result = _context.sent;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function switchToggled(_x) {
    return _ref.apply(this, arguments);
  };
}();

var findFlagByName = function findFlagByName(flagName) {
  var flags = window.__API_DATA__;
  var result;
  flags.forEach(function (element) {
    if (element.flagName == flagName) {
      result = element;
    }
  });
  return result;
};

var Renderer = function Renderer(_ref2) {
  var featureFlagName = _ref2.featureFlagName,
      val = _ref2.val;
  var checked = val === 'on' ? 'checked' : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a["switch"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: featureFlagName,
    onChange: function onChange() {
      switchToggled(featureFlagName);
    },
    type: "checkbox",
    defaultChecked: checked
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slider
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Renderer);

/***/ }),

/***/ "./src/components/ToggleSwitch/styles.scss":
/*!*************************************************!*\
  !*** ./src/components/ToggleSwitch/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"switch":"ToggleSwitch-switch--x-dXs","input":"ToggleSwitch-input--2upUx","slider":"ToggleSwitch-slider--16u3Q","round":"ToggleSwitch-round--3-huU"};

/***/ }),

/***/ "./src/connectors/database/mongodb.js":
/*!********************************************!*\
  !*** ./src/connectors/database/mongodb.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);


 //import assert from 'assert';
// Connection URL

var url = "mongodb://localhost:".concat("27017"); // Database Name

var dbName = "sparkjs-thermostat";

var connect = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var db, client;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            db = null;
            _context.prev = 1;
            _context.next = 4;
            return mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect(url);

          case 4:
            client = _context.sent;
            db = client.db(dbName);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log("Error connectiong to Mongo DB!");
            console.log(_context.t0.stack);

          case 12:
            return _context.abrupt("return", db);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function connect() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = ({
  add: function () {
    var _add = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(docObject, collectionName) {
      var result, db;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return connect();

            case 3:
              db = _context2.sent;
              _context2.next = 6;
              return db.collection(collectionName).insert(docObject);

            case 6:
              result = _context2.sent;
              return _context2.abrupt("return", result);

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0.stack);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    function add(_x, _x2) {
      return _add.apply(this, arguments);
    }

    return add;
  }(),
  find: function () {
    var _find = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(searchObject, collectionName) {
      var client, result, db;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return connect();

            case 3:
              db = _context3.sent;
              _context3.next = 6;
              return db.collection(collectionName).find(searchObject).toArray();

            case 6:
              result = _context3.sent;
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0.stack);

            case 12:
              if (client) client.close();
              return _context3.abrupt("return", result);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }));

    function find(_x3, _x4) {
      return _find.apply(this, arguments);
    }

    return find;
  }(),
  update: function () {
    var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(searchObject, newObject, collectionName) {
      var client, result, db;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect(url);

            case 3:
              client = _context4.sent;
              console.log("Connected correctly to server");
              db = client.db(dbName);
              _context4.next = 8;
              return db.collection(collectionName).update(searchObject, newObject).toArray();

            case 8:
              result = _context4.sent;
              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0.stack);

            case 14:
              // Close connection
              if (client) client.close();
              return _context4.abrupt("return", result);

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 11]]);
    }));

    function update(_x5, _x6, _x7) {
      return _update.apply(this, arguments);
    }

    return update;
  }(),
  dropDB: function () {
    var _dropDB = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
      var db;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return connect();

            case 3:
              db = _context5.sent;
              db.dropDatabase();
              _context5.next = 10;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0.stack);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 7]]);
    }));

    function dropDB() {
      return _dropDB.apply(this, arguments);
    }

    return dropDB;
  }()
});

/***/ }),

/***/ "./src/containers/EventsManager/index.js":
/*!***********************************************!*\
  !*** ./src/containers/EventsManager/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isFrontEnd = function isFrontEnd() {
  if (typeof window == 'undefined') ;
};

var app_events;

if (typeof window === 'undefined') {
  if (typeof global.__APP_EVENTS__ == 'undefined') global.__APP_EVENTS__ = {};
  app_events = global.__APP_EVENTS__;
} else {
  if (typeof window.__APP_EVENTS__ == 'undefined') window.__APP_EVENTS__ = {};
  app_events = window.__APP_EVENTS__;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  registerEvent: function registerEvent(eventName, eventAction) {
    if (typeof app_events[eventName] == 'undefined') {
      app_events[eventName] = eventAction;
      return true;
    }

    return false;
  },
  callEvent: function callEvent(eventName) {
    //debugger;
    //return app_events;
    //return app_events[eventName];
    return app_events[eventName]; //return app_events;
  }
});

/***/ }),

/***/ "./src/containers/PageLayout/ComponentList/index.js":
/*!**********************************************************!*\
  !*** ./src/containers/PageLayout/ComponentList/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Loading */ "./src/components/Loading/index.js");


/* Components */

var Header = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../components/Header */ "./src/components/Header/index.js"));
  },
  modules: ['../../../components/Header'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../../../components/Header */ "./src/components/Header/index.js")];
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var Home = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../components/Home */ "./src/components/Home/index.js"));
  },
  modules: ['../../../components/Home'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../../../components/Home */ "./src/components/Home/index.js")];
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var About = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../components/About */ "./src/components/About/index.js"));
  },
  modules: ['../../../components/About'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../../../components/About */ "./src/components/About/index.js")];
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var Setup = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../components/Setup */ "./src/components/Setup/index.js"));
  },
  modules: ['../../../components/Setup'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../../../components/Setup */ "./src/components/Setup/index.js")];
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  Home: Home,
  About: About,
  Setup: Setup,
  Header: Header
});

/***/ }),

/***/ "./src/containers/PageLayout/PageData/index.js":
/*!*****************************************************!*\
  !*** ./src/containers/PageLayout/PageData/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  '/about': {
    template: "Html",
    layout: [{
      span: 12,
      components: [{
        name: "Header",
        props: {}
      }]
    }, {
      span: 12,
      components: [{
        name: "About",
        props: {}
      }]
    }]
  },
  '/home': {
    template: "Html",
    layout: [{
      span: 12,
      components: [{
        name: "Header",
        props: {}
      }]
    }, {
      span: 12,
      components: [{
        name: "Home",
        props: {}
      }]
    }]
  },
  '/setup': {
    template: "Html",
    layout: [{
      span: 12,
      components: [{
        name: "Header",
        props: {}
      }]
    }, {
      span: 12,
      components: [{
        name: "Setup",
        props: {}
      }]
    }]
  },
  '/other-template': {
    template: "OtherHtml",
    layout: [{
      span: 12,
      components: [{
        name: "Greetings",
        props: {}
      }]
    }]
  }
});

/***/ }),

/***/ "./src/containers/PageLayout/index.js":
/*!********************************************!*\
  !*** ./src/containers/PageLayout/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ComponentList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ComponentList */ "./src/containers/PageLayout/ComponentList/index.js");
/* harmony import */ var _PageData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PageData */ "./src/containers/PageLayout/PageData/index.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var styles = __webpack_require__(/*! ./styles.scss */ "./src/containers/PageLayout/styles.scss");

var PageLayout = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(PageLayout, _Component);

  var _super = _createSuper(PageLayout);

  function PageLayout(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PageLayout);

    return _super.call(this, props);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PageLayout, [{
    key: "render",
    value: function render() {
      var url = this.props.location.pathname;
      var page = _PageData__WEBPACK_IMPORTED_MODULE_7__["default"][url];
      var allLayout = page.layout.map(function (layoutList) {
        var layout = layoutList.components.map(function (component, id, components) {
          var componentName = component.name;
          var props = component.props;
          var ChildComponent = _ComponentList__WEBPACK_IMPORTED_MODULE_6__["default"][componentName];

          if (typeof ChildComponent === 'undefined') {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
              key: "{id}",
              className: styles.error
            }, "Can't find ", componentName, " component!");
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ChildComponent, {
            key: componentName,
            props: props
          });
        });
        return layout;
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: styles.app
      }, allLayout);
    }
  }]);

  return PageLayout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PageLayout);

/***/ }),

/***/ "./src/containers/PageLayout/styles.scss":
/*!***********************************************!*\
  !*** ./src/containers/PageLayout/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"error":"PageLayout-error--1JXBd","wrapper":"PageLayout-wrapper--2x-cs"};

/***/ }),

/***/ "./src/queries/index.js":
/*!******************************!*\
  !*** ./src/queries/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connectors/database/mongodb */ "./src/connectors/database/mongodb.js");



var collectionName = 'thermostat';
/* harmony default export */ __webpack_exports__["default"] = ({
  findFeatureFlagByName: function () {
    var _findFeatureFlagByName = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(flagName) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].find({
                flagName: flagName
              }, collectionName);

            case 2:
              result = _context.sent;
              return _context.abrupt("return", result);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function findFeatureFlagByName(_x) {
      return _findFeatureFlagByName.apply(this, arguments);
    }

    return findFeatureFlagByName;
  }(),
  getThermostatData: function () {
    var _getThermostatData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(url) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].find({}, collectionName);

            case 2:
              result = _context2.sent;
              return _context2.abrupt("return", result);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function getThermostatData(_x2) {
      return _getThermostatData.apply(this, arguments);
    }

    return getThermostatData;
  }(),
  getFeatureFlags: function () {
    var _getFeatureFlags = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].find({}, collectionName);

            case 2:
              result = _context3.sent;
              console.log(result);
              return _context3.abrupt("return", result);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function getFeatureFlags() {
      return _getFeatureFlags.apply(this, arguments);
    }

    return getFeatureFlags;
  }(),
  updateFeatureFlag: function () {
    var _updateFeatureFlag = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(searchObject, newObject) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              delete newObject._id;
              _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].update(searchObject, newObject, collectionName, function (result) {
                return true;
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function updateFeatureFlag(_x3, _x4) {
      return _updateFeatureFlag.apply(this, arguments);
    }

    return updateFeatureFlag;
  }(),
  addFeatureFlag: function () {
    var _addFeatureFlag = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(flagData) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].add(flagData, collectionName, function () {
                return true;
              });

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function addFeatureFlag(_x5) {
      return _addFeatureFlag.apply(this, arguments);
    }

    return addFeatureFlag;
  }(),
  dropdb: function () {
    var _dropdb = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              result = _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].dropDB();
              return _context6.abrupt("return", result);

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function dropdb() {
      return _dropdb.apply(this, arguments);
    }

    return dropdb;
  }(),
  setup: function () {
    var _setup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
      var obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].dropDB();
              obj = [{
                "ThermostatName": "Living Room",
                "group": "My home",
                "id": "1",
                "humidity": "0",
                "curentTemp": "0",
                "requiredTemp": "0",
                "mode": "0"
              }, {
                "ThermostatName": "Bedroom",
                "group": "My home",
                "id": "2",
                "humidity": "0",
                "curentTemp": "0",
                "requiredTemp": "0",
                "mode": "0"
              }];
              _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].add(obj, collectionName, function () {});

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function setup() {
      return _setup.apply(this, arguments);
    }

    return setup;
  }()
});

/***/ }),

/***/ "./src/templates/Html.js":
/*!*******************************!*\
  !*** ./src/templates/Html.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var publicPath = "".concat("http://localhost", ":").concat("8000", "/dist/");

var Html = function Html(_ref) {
  var content = _ref.content,
      cssBundles = _ref.cssBundles,
      jsBundles = _ref.jsBundles,
      apiData = _ref.apiData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", null, "var startTime = new Date();"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Server Side Rendering and Bundle Splitting"), // don't add this to DEV since there, it will be served from Webpack-dev-server
   false && /*#__PURE__*/false, cssBundles.map(function (bundle) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      href: "".concat(bundle.publicPath),
      rel: "stylesheet",
      as: "style",
      media: "screen, projection",
      type: "text/css",
      charSet: "UTF-8"
    });
  }), jsBundles.map(function (_ref2) {
    var file = _ref2.file;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      src: "".concat(publicPath).concat(file)
    }, file);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__API_DATA__=".concat(JSON.stringify(apiData))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    "cz-shortcut-listen": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "".concat(publicPath, "main-bundle.js")
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Html);

/***/ }),

/***/ "./src/templates/OtherHtml.js":
/*!************************************!*\
  !*** ./src/templates/OtherHtml.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var publicPath = "".concat("http://localhost", ":").concat("8000", "/dist/");

var Html = function Html(_ref) {
  var content = _ref.content,
      cssBundles = _ref.cssBundles,
      jsBundles = _ref.jsBundles,
      apiData = _ref.apiData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Other Template"), // don't add this to DEV since there it will be served from Webpack-dev-server
   false && /*#__PURE__*/false, cssBundles.map(function (bundle) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      href: "".concat(bundle.publicPath),
      rel: "stylesheet",
      as: "style",
      media: "screen, projection",
      type: "text/css",
      charSet: "UTF-8"
    });
  }), jsBundles.map(function (_ref2) {
    var file = _ref2.file;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      src: "".concat(publicPath).concat(file)
    }, file);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__API_DATA__=".concat(JSON.stringify(apiData))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    "cz-shortcut-listen": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "".concat(publicPath, "main-bundle.js")
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Html);

/***/ }),

/***/ "./src/templates/TemplateList/index.js":
/*!*********************************************!*\
  !*** ./src/templates/TemplateList/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Html.js */ "./src/templates/Html.js");
/* harmony import */ var _OtherHtml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OtherHtml.js */ "./src/templates/OtherHtml.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  Html: _Html_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  OtherHtml: _OtherHtml_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/utils/Poster.js":
/*!*****************************!*\
  !*** ./src/utils/Poster.js ***!
  \*****************************/
/*! exports provided: Poster, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poster", function() { return Poster; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var Poster = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var url,
        data,
        response,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
            data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _context.next = 4;
            return fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'text/plain'
              },
              body: JSON.stringify(data)
            });

          case 4:
            response = _context.sent;
            return _context.abrupt("return", response.json());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function Poster() {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (Poster);

/***/ }),

/***/ "./src/utils/getParams.js":
/*!********************************!*\
  !*** ./src/utils/getParams.js ***!
  \********************************/
/*! exports provided: url, apiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return apiUrl; });
var url = "http://localhost";
var apiUrl = "".concat("http://localhost", ":").concat("8081", "/services");

/***/ }),

/***/ "./ssr-server.js":
/*!***********************!*\
  !*** ./ssr-server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! https */ "https");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/components/App */ "./src/components/App/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _dist_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dist/loadable-manifest.json */ "./dist/loadable-manifest.json");
var _dist_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dist/loadable-manifest.json */ "./dist/loadable-manifest.json", 1);
/* harmony import */ var react_loadable_webpack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loadable/webpack */ "react-loadable/webpack");
/* harmony import */ var react_loadable_webpack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_loadable_webpack__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_templates_TemplateList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/templates/TemplateList */ "./src/templates/TemplateList/index.js");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _expressMiddlewares_cookiesManagement__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./expressMiddlewares/cookiesManagement */ "./expressMiddlewares/cookiesManagement.js");
/* harmony import */ var _expressMiddlewares_requestDataFromAPI__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./expressMiddlewares/requestDataFromAPI */ "./expressMiddlewares/requestDataFromAPI.js");
/* harmony import */ var _expressMiddlewares_thermostatServices__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./expressMiddlewares/thermostatServices */ "./expressMiddlewares/thermostatServices/index.js");
/* harmony import */ var _src_queries__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/queries */ "./src/queries/index.js");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_18__);
















var publicPath = "".concat("http://localhost", ":").concat("8000", "/dist/"); // import pageData from './expressMiddlewares/pageData';




var _process$env = Object({"APP_NAME":"Webpack React Tutorial","APP_HOST":"http://localhost","SERVER_PORT":"8081","ASSETS_SERVER_PORT":"8000","ENVIRONMENT":"development","DB_DATABASE_NAME":"sparkjs-thermostat","DB_DATABASE_PORT":"27017"}),
    APP_HOST = _process$env.APP_HOST,
    SERVER_PORT = _process$env.SERVER_PORT,
    ENVIRONMENT = _process$env.ENVIRONMENT;

var ThermostatData = function ThermostatData(id, thermostatName, group, humidity, curentTemp, mode, requiredTemp) {
  return {
    id: id,
    thermostatName: thermostatName,
    group: group,
    humidity: humidity,
    curentTemp: curentTemp,
    requiredTemp: requiredTemp,
    mode: mode
  };
};

var thermostatsData = [];
/*
for(let i = 0; i < 10; i ++) {
  ThermostatData.id = i + 1;
  thermostatsData.push(ThermostatData(0, '', '', 0, 0, 0, 0));
}
*/

console.log("SERVER_PORT: ", SERVER_PORT);
var app = new express__WEBPACK_IMPORTED_MODULE_4___default.a();
app.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.json());
app.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded({
  xtended: true
}));
app.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.text());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_18___default.a.text({
  type: 'text/*'
}));
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_13___default()());
app.use('/server-build', express__WEBPACK_IMPORTED_MODULE_4___default.a["static"]('./server-build'));
app.use('/dist', express__WEBPACK_IMPORTED_MODULE_4___default.a["static"]('dist')); // to serve frontent prod static files

app.use('/favicon.ico', express__WEBPACK_IMPORTED_MODULE_4___default.a["static"]('./static-assets/favicon.ico'));

function response(req, res, apiData, templateName) {
  // make APP data available for SSR and browser.
  global.__API_DATA__ = apiData;
  var Html = _src_templates_TemplateList__WEBPACK_IMPORTED_MODULE_12__["default"][templateName]; // Prepare to get list of all modules that have to be loaded for this route

  var modules = [];
  react_dom_server__WEBPACK_IMPORTED_MODULE_11___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_loadable__WEBPACK_IMPORTED_MODULE_8___default.a.Capture, {
    report: function report(moduleName) {
      return modules.push(moduleName);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
    req: req
  })));
  console.log(">>> Extract CSS and JS bundles"); // Extract CSS and JS bundles

  var bundles = Object(react_loadable_webpack__WEBPACK_IMPORTED_MODULE_10__["getBundles"])(_dist_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_9__, modules);
  var cssBundles = bundles.filter(function (bundle) {
    return bundle && bundle.file.split('.').pop() === 'css';
  });
  var jsBundles = bundles.filter(function (bundle) {
    return bundle && bundle.file.split('.').pop() === 'js';
  });
  var allJS = jsBundles.map(function (_ref) {
    var publicPath = _ref.publicPath;
    return "<script src='".concat(publicPath, "'></script>");
  }).join("\n"); // don't add this to DEV since there, it will be served from Webpack-dev-server

  var mainCSS = "";
  var allCSS = '';

  if (false) {}

  var HTML_content = react_dom_server__WEBPACK_IMPORTED_MODULE_11___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
    req: req
  }));
  var html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Html, {
    content: HTML_content,
    cssBundles: cssBundles,
    jsBundles: jsBundles,
    apiData: apiData
  });
  res.status(200);
  res.send("<!doctype html>\n".concat(react_dom_server__WEBPACK_IMPORTED_MODULE_11___default.a.renderToStaticMarkup(html)));
  res.end();
} // adding cookie middleware


app.use(_expressMiddlewares_cookiesManagement__WEBPACK_IMPORTED_MODULE_14__["default"]);
app.get('/Robots.txt', function (req, res) {
  res.send("\n  User-agent: * Disallow: /\n  ");
});
app.get('/thermostat-services/*', /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_expressMiddlewares_thermostatServices__WEBPACK_IMPORTED_MODULE_16__["default"])(req, res);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}());
app.post('/services/get', /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(req, res) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _src_queries__WEBPACK_IMPORTED_MODULE_17__["default"].getFeatureFlags();

          case 2:
            result = _context2.sent;
            res.status(200).set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', '*').send(result);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}());
app.post('/services/find', /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(req, res) {
    var flagData, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            flagData = JSON.parse(req.body);
            _context3.next = 3;
            return _src_queries__WEBPACK_IMPORTED_MODULE_17__["default"].findFeatureFlagByName(flagData.flagName);

          case 3:
            result = _context3.sent;
            res.status(200).set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', '*').send(result);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}());
app.post('/services/update', /*#__PURE__*/function () {
  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(req, res) {
    var flagData, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            flagData = JSON.parse(req.body);
            _context4.next = 3;
            return _src_queries__WEBPACK_IMPORTED_MODULE_17__["default"].updateFeatureFlag(flagData.updateFlag, flagData.newFlagData);

          case 3:
            result = _context4.sent;
            res.status(200).set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', '*').send(" 12345 ");

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}());
app.post('/services/add', /*#__PURE__*/function () {
  var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(req, res) {
    var flagData, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            flagData = JSON.parse(req.body);
            _context5.next = 3;
            return _src_queries__WEBPACK_IMPORTED_MODULE_17__["default"].addFeatureFlag(flagData);

          case 3:
            result = _context5.sent;
            res.status(200).set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', '*').send(" 12345 ");

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}());
app.post('/services/setup', /*#__PURE__*/function () {
  var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _src_queries__WEBPACK_IMPORTED_MODULE_17__["default"].setup();
            res.status(200).set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', '*').send('{"status": "sucess"}');

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}());
app.post('/services/dropdb', /*#__PURE__*/function () {
  var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(req, res) {
    var respond;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            respond = _src_queries__WEBPACK_IMPORTED_MODULE_17__["default"].dropdb();
            res.status(200).set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', '*').send(respond);

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}()); // All page requests

app.get('/services/data', /*#__PURE__*/function () {
  var _ref9 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(req, res) {
    var response, data, thermostats, offset, i, id, humidity, curentTemp;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            response = "#@$[1,4,68.54,28.56]";
            data = JSON.parse(req.query.data);
            thermostats = data[0];
            console.log(">>>", data);
            offset = 1;

            for (i = 0; i < thermostats; i++) {
              offset = i * 3;
              id = data[offset];
              humidity = data[offset + 1];
              curentTemp = data[offset + 2];
              thermostatsData[i].id = id;
              thermostatsData[i].humidity = humidity;
              thermostatsData[i].curentTemp = curentTemp;
            } //const response = JSON.stringify(thermostatsData);


            res.status(200).set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', '*').send(response);

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}()); // All page requests

app.get('/*', _expressMiddlewares_requestDataFromAPI__WEBPACK_IMPORTED_MODULE_15__["default"], function (req, res, next) {
  console.log("@@#@#@@");
  response(req, res, req.apiData, req.templateName);
});
react_loadable__WEBPACK_IMPORTED_MODULE_8___default.a.preloadAll().then(function () {
  if (ENVIRONMENT == 'development') {
    // use plain http for development
    app.listen(SERVER_PORT, function () {
      console.log("\uD83D\uDE0E Server is listening on port ".concat(SERVER_PORT));
    });
  } else {
    // https requests might be too much of a work for Arduino
    app.listen(SERVER_PORT, function () {
      console.log("\uD83D\uDE0E Server is listening on port ".concat(SERVER_PORT));
    }); // we will pass the 'app' to 'https' server

    /*
    https.createServer({
      // replace with certificate location
      key: fs.readFileSync('/Users/toninichev/.getssl/toni-develops.com/toni-develops.com.key'),
      cert: fs.readFileSync('/Users/toninichev/.getssl/toni-develops.com/toni-develops.com.crt')
    }, app)
    .listen(SERVER_PORT);
    */
  }
});

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "react-loadable/webpack":
/*!*****************************************!*\
  !*** external "react-loadable/webpack" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable/webpack");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=server-bundle.js.map