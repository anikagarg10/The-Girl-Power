exports.ids = [16];
exports.modules = {

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(65);

var _moment2 = _interopRequireDefault(_moment);

var _apiCaller = __webpack_require__(16);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _reactBootstrapDaterangepicker = __webpack_require__(67);

var _reactBootstrapDaterangepicker2 = _interopRequireDefault(_reactBootstrapDaterangepicker);

var _reactBootstrap = __webpack_require__(66);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {FormControl, FormGroup, InputGroup} from 'react-bootstrap';
// import DateRangePicker from 'react-bootstrap-daterangepicker';


var inputStyle = {
  height: '2.5em',
  width: '100%',
  border: '1px solid',
  borderRadius: '5px',
  backgroundColor: '#fff'
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

var BlogCreate = function (_Component) {
  _inherits(BlogCreate, _Component);

  function BlogCreate(props) {
    _classCallCheck(this, BlogCreate);

    var _this = _possibleConstructorReturn(this, (BlogCreate.__proto__ || Object.getPrototypeOf(BlogCreate)).call(this, props));

    _this.handleChange = function (keyName, keyValue) {
      var blog = _this.state.blog;
      blog[keyName] = keyValue;
      _this.setState({
        blog: blog
      });
    };

    _this.isValidBlog = function (blog) {
      var isValid = true;
      if (!!!blog.url || blog.url === '') {
        window.alert('Please enter valid url');
        isValid = false;
      } else if (!!!blog.img || blog.img === '') {
        window.alert('Please enter image url');
        isValid = false;
      } else if (!!!blog.name || blog.name === '') {
        window.alert('Please enter name');
        isValid = false;
      }

      return isValid;
    };

    _this.handleCreate = function () {
      var blog = _lodash2.default.clone(_this.state.blog);
      if (!_this.isValidBlog(blog)) {
        return;
      }
      console.log('creating', blog);
      _this.setState({
        isCreating: true
      });
      (0, _apiCaller2.default)('blogs/new', 'post', { blog: blog }).then(function (res) {
        console.log('res, create', res);
        if (res.status === 'Success') {
          _this.setState({
            isCreating: false
          });
          console.log('done');
        } else {
          _this.setState({
            isCreating: false
          });
          console.log(res);
        }
      });
    };

    _this.state = {
      blog: {
        url: '',
        img: '',
        name: '',
        date: (0, _moment2.default)(),
        text: ''
      },
      selectDate: (0, _moment2.default)(),
      isCreating: false
    };
    return _this;
  }

  _createClass(BlogCreate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }

    // handleDateLabelChange = (event, picker) => {
    //     if(picker.startDate < moment()) {
    //         console.log('Please Select Valid Date');
    //     } else {
    //         this.setState({
    //             selectDate: picker.startDate,
    //         });
    //     }
    // };

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // let SelectionDate = this.state.selectDate.format('DD MMM YYYY');
      // let SelectionDateLabel = `${SelectionDate}`;
      return _jsx("div", {}, void 0, _jsx("div", {
        style: { background: 'rgba(180, 221, 127, 0.8)', opacity: '0.5', height: '200px', display: 'flex', alignItems: 'center' }
      }, void 0, _jsx("div", {
        className: "text-center container page-width",
        style: { fontSize: '26px',
          fontWeight: '600',
          lineHeight: '1.5',
          letterSpacing: '1.4px',
          color: '#000' }
      }, void 0, "Create Your Blog")), _jsx("div", {
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
        value: this.state.blog.url,
        onChange: function onChange(e) {
          return _this2.handleChange('url', e.target.value);
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
        value: this.state.blog.img,
        onChange: function onChange(e) {
          return _this2.handleChange('img', e.target.value);
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
        value: this.state.blog.name,
        onChange: function onChange(e) {
          return _this2.handleChange('name', e.target.value);
        }
      }))), _jsx("div", {
        className: "row",
        style: { marginTop: '20px' }
      }, void 0, _ref4, _jsx("div", {
        className: 'col-xs-12 col-sm-12 col-md-6 col-lg-9'
      }, void 0, _jsx(_reactBootstrapDaterangepicker2.default, {
        startDate: this.state.blog.date ? this.state.blog.date : (0, _moment2.default)(),
        onEvent: function onEvent(event, picker) {
          return _this2.handleChange('date', picker.startDate);
        },
        autoApply: true,
        timePicker: true,
        singleDatePicker: true
      }, void 0, _jsx(_reactBootstrap.FormGroup, {}, void 0, _jsx(_reactBootstrap.InputGroup, {}, void 0, _jsx("input", {
        type: 'text',
        value: (0, _moment2.default)(this.state.blog.date ? new Date(this.state.blog.date) : new Date()).format('DD MMM YYYY : HH:mm A')
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
        value: this.state.blog.text,
        onChange: function onChange(e) {
          return _this2.handleChange('text', e.target.value);
        }
      }))), _jsx("div", {
        style: { display: 'flex', justifyContent: 'center' }
      }, void 0, _jsx(_reactBootstrap.Button, {
        disabled: this.state.isCreating,
        onClick: function onClick() {
          return _this2.state.isCreating ? null : _this2.handleCreate();
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
      }, void 0, this.state.isCreating ? 'Creating' : 'Create'))))));
    }
  }]);

  return BlogCreate;
}(_react.Component);

exports.default = BlogCreate;

/***/ })

};;