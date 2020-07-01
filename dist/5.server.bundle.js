exports.ids = [5];
exports.modules = {

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _framerMotion = __webpack_require__(68);

var _reactLazyload = __webpack_require__(69);

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

var _moment = __webpack_require__(65);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx("ul", {
  className: "media-box mt-4"
}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "#"
}, void 0, _jsx("i", {
  className: "fab fa-facebook-f"
}))), _jsx("li", {}, void 0, _jsx("a", {
  href: "#"
}, void 0, _jsx("i", {
  className: "fab fa-twitter"
}))), _jsx("li", {}, void 0, _jsx("a", {
  href: "#"
}, void 0, _jsx("i", {
  className: "fab fa-google"
}))));

var _ref2 = _jsx("li", {}, void 0, "By: ", _jsx("a", {
  href: "#"
}, void 0, "Admin"));

var ContentSegment = function (_Component) {
  _inherits(ContentSegment, _Component);

  function ContentSegment(props) {
    _classCallCheck(this, ContentSegment);

    return _possibleConstructorReturn(this, (ContentSegment.__proto__ || Object.getPrototypeOf(ContentSegment)).call(this, props));
  }

  _createClass(ContentSegment, [{
    key: "render",
    value: function render() {
      return _jsx("div", {
        className: "main-content",
        style: { padding: '90px 0' }
      }, void 0, _jsx("section", {
        className: "pt-0",
        style: { padding: 0 }
      }, void 0, _jsx("div", {
        className: "blogdetailbox"
      }, void 0, _jsx("div", {
        className: "container"
      }, void 0, _jsx("div", {
        className: "row"
      }, void 0, _jsx("div", {
        className: "col-lg-12 re-mtb-30"
      }, void 0, _jsx("div", {
        className: "iq-blogbox"
      }, void 0, _jsx("div", {
        className: "iq-blog-entry"
      }, void 0, _jsx("div", {
        className: "row"
      }, void 0, _jsx("div", {
        className: "col-md-2 text-center"
      }, void 0, _jsx("span", {
        className: "date main-bg"
      }, void 0, (0, _moment2.default)(this.props.post.date).format('DD'), _jsx("small", {}, void 0, (0, _moment2.default)(this.props.post.date).format('MMM'))), _ref), _jsx("div", {
        className: "col-md-10"
      }, void 0, _jsx("div", {
        className: "iq-entry-image"
      }, void 0, _jsx("img", {
        className: "img-fluid wow fadeInUp",
        "data-wow-duration": "1.0s",
        src: this.props.post.img,
        alt: "image",
        style: { visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp', borderRadius: '5px' }
      })), _jsx("div", {
        className: "iq-blog-detail "
      }, void 0, _jsx("div", {
        className: "iq-entry-title wow fadeInUp",
        "data-wow-duration": "1.0s",
        style: { visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp', marginBottom: '50px', marginTop: '80px' }
      }, void 0, _jsx("h5", {}, void 0, this.props.post.name), _jsx("div", {
        className: "blog-box"
      }, void 0, _jsx("ul", {}, void 0, _ref2, _jsx("li", {}, void 0, (0, _moment2.default)(new Date(this.props.post.date)).format('DD MM YYYY')))))), _jsx("div", {
        className: "iq-detail-box mt-4"
      }, void 0, _jsx("p", {}, void 0, this.props.post.text))))))))))));
    }
  }]);

  return ContentSegment;
}(_react.Component);

exports.default = ContentSegment;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = Banner;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(65);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Banner(props) {
    return _jsx('div', {
        className: 'container page-width blogs-card-top '
    }, void 0, _jsx('div', {
        className: 'text-center article-banner-wrapper-1',
        style: { marginTop: '100px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }
    }, void 0, _jsx('div', {
        style: {
            color: '#000',
            opacity: '0.87',
            width: '100%'
        }
    }, void 0, (0, _moment2.default)(new Date(props.post.date)).format('DD MMM YYYY')), _jsx('div', {
        className: 'article-banner-wrapper-1',
        style: {
            width: '70%',
            marginTop: '20px',
            color: '#000'
        }
    }, void 0, props.post.name)));
}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentSegment = __webpack_require__(125);

var _ContentSegment2 = _interopRequireDefault(_ContentSegment);

var _Banner = __webpack_require__(126);

var _Banner2 = _interopRequireDefault(_Banner);

var _Loader = __webpack_require__(92);

var _Loader2 = _interopRequireDefault(_Loader);

var _apiCaller = __webpack_require__(16);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx("div", {}, void 0, _jsx(_Loader2.default, {}));

var ArticlePage = function (_Component) {
    _inherits(ArticlePage, _Component);

    function ArticlePage() {
        _classCallCheck(this, ArticlePage);

        var _this = _possibleConstructorReturn(this, (ArticlePage.__proto__ || Object.getPrototypeOf(ArticlePage)).call(this));

        _this.fetchArticle = function (url) {
            (0, _apiCaller2.default)("posts/url/" + url, 'get').then(function (res) {
                console.log(res);
                if (res.status === 'Success') {
                    _this.setState({
                        isLoading: false,
                        post: res.data.post
                    });
                }
            });
        };

        _this.state = {
            isLoading: true,
            post: {}
        };
        return _this;
    }

    _createClass(ArticlePage, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var url = this.props.params.url;
            console.log(url);
            window.scrollTo(0, 0);
            this.fetchArticle(url);
        }
    }, {
        key: "render",
        value: function render() {
            return _jsx("div", {
                className: "",
                style: { minHeight: '450px', backgroundColor: '#fff' }
            }, void 0, this.state.isLoading && _lodash2.default.isEmpty(this.state.post) ? _ref : _jsx("div", {}, void 0, _jsx(_ContentSegment2.default, {
                post: this.state.post
            })));
        }
    }]);

    return ArticlePage;
}(_react.Component);

exports.default = ArticlePage;

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = Loader;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx("div", {
  id: "loading"
}, void 0, _jsx("div", {
  id: "loading-center"
}, void 0, _jsx("img", {
  src: "/assets/loader.gif",
  alt: "loder"
})));

function Loader(props) {
  return _ref;
}

/***/ })

};;