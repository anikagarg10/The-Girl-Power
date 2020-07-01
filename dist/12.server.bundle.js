exports.ids = [12];
exports.modules = {

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx("div", {
  id: "loading-center"
}, void 0, _jsx("img", {
  src: "./error_files/loader.gif",
  alt: "loder"
}));

var _ref2 = _jsx("section", {
  className: "main-content"
}, void 0, _jsx("div", {
  className: "error-box"
}, void 0, _jsx("div", {
  className: "container"
}, void 0, _jsx("div", {
  className: "row"
}, void 0, _jsx("div", {
  className: "col-sm-12"
}, void 0, _jsx("div", {
  className: "error text-center"
}, void 0, _jsx("img", {
  src: "./error_files/error-404.png",
  className: "img-fluid",
  alt: "image"
}), _jsx("br", {}), _jsx("h2", {
  className: "mt-4 wow tada",
  "data-wow-delay": "0.5s"
}, void 0, "Sorry the page not found"), _jsx(_reactRouter.Link, {
  to: "/",
  className: "button mt-5 mr-2"
}, void 0, "Go to Home Page")))))));

var errorPage = function (_Component) {
  _inherits(errorPage, _Component);

  function errorPage() {
    _classCallCheck(this, errorPage);

    var _this = _possibleConstructorReturn(this, (errorPage.__proto__ || Object.getPrototypeOf(errorPage)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(errorPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return _jsx("div", {}, void 0, _jsx("div", {
        id: "loading",
        style: { display: 'none' }
      }, void 0, _ref), _ref2);
    }
  }]);

  return errorPage;
}(_react.Component);

exports.default = errorPage;

/***/ })

};;