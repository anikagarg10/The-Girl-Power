exports.ids = [17];
exports.modules = {

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _apiCaller = __webpack_require__(16);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _reactBootstrap = __webpack_require__(66);

var _reactBootstrapDaterangepicker = __webpack_require__(67);

var _reactBootstrapDaterangepicker2 = _interopRequireDefault(_reactBootstrapDaterangepicker);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = __webpack_require__(65);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var inputStyle = {
  height: '2.5em',
  border: '1px solid',
  borderRadius: '5px',
  backgroundColor: '#fff',
  width: '100%'
};

var textareaStyle = {
  backgroundColor: '#fff',
  minHeight: '10em',
  width: '100%',
  border: '1px solid',
  borderRadius: '5px'
};

var _ref = _jsx("div", {
  className: 'col-xs-12 col-sm-12 col-md-6 col-lg-3'
}, void 0, "Url");

var _ref2 = _jsx("div", {
  className: 'col-xs-12 col-sm-12 col-md-6 col-lg-3'
}, void 0, "Image");

var _ref3 = _jsx("div", {
  className: 'col-xs-12 col-sm-12 col-md-6 col-lg-3'
}, void 0, "Name");

var _ref4 = _jsx("div", {
  className: 'col-xs-12 col-sm-12 col-md-6 col-lg-3'
}, void 0, "Date");

var _ref5 = _jsx("i", {
  className: "fa fa-calendar",
  "aria-hidden": "true"
});

var _ref6 = _jsx("div", {
  className: 'col-xs-12 col-sm-12 col-md-6 col-lg-3'
}, void 0, "Text");

var ArticleUpdate = function (_Component) {
  _inherits(ArticleUpdate, _Component);

  function ArticleUpdate(props) {
    _classCallCheck(this, ArticleUpdate);

    var _this = _possibleConstructorReturn(this, (ArticleUpdate.__proto__ || Object.getPrototypeOf(ArticleUpdate)).call(this, props));

    _this.fetch = function (url) {
      (0, _apiCaller2.default)("posts/url/" + url, 'get').then(function (res) {
        console.log('res', res);
        if (res.status === 'Success') {
          _this.setState({
            post: res.data.post
          });
        } else {
          console.log(res);
        }
      });
    };

    _this.handleChange = function (keyName, keyValue) {
      var post = _this.state.post;
      post[keyName] = keyValue;
      _this.setState({
        post: post
      });
    };

    _this.isValidPost = function (post) {
      var isValid = true;
      if (!!!post.url || post.url === '') {
        window.alert('Please enter valid url');
        isValid = false;
      } else if (!!!post.img || post.img === '') {
        window.alert('Please enter image url');
        isValid = false;
      } else if (!!!post.name || post.name === '') {
        window.alert('Please enter name');
        isValid = false;
      }

      return isValid;
    };

    _this.handleUpdate = function () {
      var post = _lodash2.default.clone(_this.state.post);
      console.log(post);
      if (!_this.isValidPost(post)) {
        return;
      }
      delete post._id;
      post.date = (0, _moment2.default)(post.date).toISOString();
      _this.setState({
        isUpdating: true
      });
      (0, _apiCaller2.default)("posts/" + _this.state.post._id + "/update", 'post', { post: post }).then(function (res) {
        _this.setState({
          isUpdating: false
        });
        if (res.status === 'Success') {
          console.log('done');
        } else {
          console.log(res);
        }
      });
    };

    _this.state = {
      url: '',
      post: {},
      isUpdating: false
    };
    return _this;
  }

  _createClass(ArticleUpdate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var url = this.props.params.url;
      window.scrollTo(0, 0);
      this.setState({
        url: url
      }, function () {
        _this2.fetch(_this2.state.url, function (err, data) {
          if (err) {
            console.log(err);
          } else {
            _this2.setState({
              post: data
            });
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log('state', this.state);
      console.log('props', this.props);
      return _jsx("div", {}, void 0, _jsx("div", {
        style: {
          background: 'rgba(180, 221, 127, 0.8)',
          opacity: '0.5',
          height: '200px',
          display: 'flex',
          alignItems: 'center'
        }
      }, void 0, _jsx("div", {
        className: "text-center container page-width",
        style: {
          fontSize: '26px',
          fontWeight: '600',
          lineHeight: '1.5',
          letterSpacing: '1.4px',
          color: '#000'
        }
      }, void 0, "Edit Your Article")), _jsx("div", {
        className: "container page-width"
      }, void 0, _jsx("div", {
        className: "row"
      }, void 0, _jsx("div", {
        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        style: { marginTop: '44px', paddingBottom: '60px' }
      }, void 0, _jsx("div", {
        className: "row",
        style: { marginTop: '25px' }
      }, void 0, _ref, _jsx("div", {
        className: 'col-xs-12 col-sm-12 col-md-6 col-lg-9'
      }, void 0, _jsx("input", {
        style: inputStyle,
        className: 'lm-input',
        type: "text",
        value: this.state.post.url,
        onChange: function onChange(e) {
          return _this3.handleChange('url', e.target.value);
        }
      }))), _jsx("div", {
        className: "row",
        style: { marginTop: '20px' }
      }, void 0, _ref2, _jsx("div", {
        className: 'col-xs-12 col-sm-12 col-md-6 col-lg-9'
      }, void 0, _jsx("input", {
        style: inputStyle,
        className: 'lm-input',
        type: "text",
        value: this.state.post.img,
        onChange: function onChange(e) {
          return _this3.handleChange('img', e.target.value);
        }
      }))), _jsx("div", {
        className: "row",
        style: { marginTop: '20px' }
      }, void 0, _ref3, _jsx("div", {
        className: 'col-xs-12 col-sm-12 col-md-6 col-lg-9'
      }, void 0, _jsx("input", {
        style: inputStyle,
        className: 'lm-input',
        type: "text",
        value: this.state.post.name,
        onChange: function onChange(e) {
          return _this3.handleChange('name', e.target.value);
        }
      }))), _jsx("div", {
        className: "row",
        style: { marginTop: '20px' }
      }, void 0, _ref4, _jsx("div", {
        className: 'col-xs-12 col-sm-12 col-md-6 col-lg-9'
      }, void 0, _jsx(_reactBootstrapDaterangepicker2.default, {
        onEvent: function onEvent(event, picker) {
          return _this3.handleChange('date', picker.startDate);
        },
        autoApply: true,
        timePicker: true,
        singleDatePicker: true
      }, void 0, _jsx(_reactBootstrap.FormGroup, {}, void 0, _jsx(_reactBootstrap.InputGroup, {}, void 0, _jsx("input", {
        type: 'text',
        value: (0, _moment2.default)(new Date(this.state.post.date)).format('DD MMM YYYY : HH:mm A')
      }), _jsx(_reactBootstrap.InputGroup.Addon, {
        style: { borderRadius: "0px" }
      }, void 0, _ref5)))))), _jsx("div", {
        className: "row",
        style: { marginTop: '20px' }
      }, void 0, _ref6, _jsx("div", {
        className: 'col-xs-12 col-sm-12 col-md-6 col-lg-9'
      }, void 0, _jsx("textarea", {
        style: textareaStyle,
        className: 'lm-input',
        value: this.state.post.text,
        onChange: function onChange(e) {
          return _this3.handleChange('text', e.target.value);
        }
      }))), _jsx("div", {
        style: { display: 'flex', justifyContent: 'center' }
      }, void 0, _jsx(_reactBootstrap.Button, {
        disabled: this.state.isUpdating,
        onClick: function onClick() {
          return _this3.state.isUpdating ? null : _this3.handleUpdate();
        },
        style: {
          marginTop: '15px',
          cursor: 'pointer',
          background: 'rgb(126, 203, 32)',
          borderRadius: '4px',
          padding: '10px',
          color: 'rgb(255, 255, 255)',
          textAlign: 'center',
          width: '30%'

        }
      }, void 0, this.state.isUpdating ? 'Updating' : 'Update'))))));
    }
  }]);

  return ArticleUpdate;
}(_react.Component);

exports.default = ArticleUpdate;

/***/ })

};;