exports.ids = [14];
exports.modules = {

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _isEmail = __webpack_require__(70);

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isNumeric = __webpack_require__(71);

var _isNumeric2 = _interopRequireDefault(_isNumeric);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _apiCaller = __webpack_require__(16);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('p', {
  className: 'mt-3 mb-4'
}, void 0, 'We have great things to show you. Request a demo now!');

var _ref2 = _jsx('i', {
  className: 'fa fa-phone'
});

var _ref3 = _jsx('i', {
  className: 'fa fa-envelope'
});

var _ref4 = _jsx('li', {}, void 0, _jsx('i', {
  className: 'fas fa-map-marker-alt'
}), _jsx('p', {
  className: 'mt-3'
}, void 0, 'LimeChat Technologies Limited', _jsx('br', {}), '8th Floor, Cello Triumph, Delhi ', _jsx('br', {}), ' India'));

var _ref5 = _jsx('div', {
  className: 'col-sm-12'
}, void 0);

var _ref6 = _jsx('label', {
  className: 'mb-2'
}, void 0, 'First Name');

var _ref7 = _jsx('label', {
  className: 'mb-2'
}, void 0, 'Last Name');

var _ref8 = _jsx('label', {
  className: 'mb-2'
}, void 0, 'Email');

var _ref9 = _jsx('label', {
  className: 'mb-2'
}, void 0, 'Country');

var _ref10 = _jsx('datalist', {
  id: 'Country'
}, void 0, _jsx('option', {
  value: ' India'
}));

var _ref11 = _jsx('label', {
  className: 'mb-2'
}, void 0, 'Company Name');

var _ref12 = _jsx('label', {
  className: 'mb-2'
}, void 0, 'Job Title');

var _ref13 = _jsx('label', {
  className: 'mb-2'
}, void 0, 'Phone');

var _ref14 = _jsx('label', {
  className: 'mb-2'
}, void 0, 'Message');

var ContactUs = function (_Component) {
  _inherits(ContactUs, _Component);

  function ContactUs() {
    _classCallCheck(this, ContactUs);

    var _this = _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).call(this));

    _this.handleChange = function (keyName, Value) {
      var demo = _this.state.demo;
      demo[keyName] = Value;
      _this.setState({
        demo: demo
      });
    };

    _this.isValidForm = function (demo) {
      var isValid = true;
      if (!!!demo.firstName || demo.firstName === '') {
        window.alert('Please enter valid first name');
        isValid = false;
      } else if (!!demo.phone && (!(0, _isNumeric2.default)(demo.phone) || !(demo.phone.length === 10))) {
        window.alert('Please enter valid phone');
        isValid = false;
      } else if (!!!demo.email || demo.email === '' || !(0, _isEmail2.default)(demo.email)) {
        window.alert('Please enter valid email');
        isValid = false;
      }

      return isValid;
    };

    _this.handleSubmit = function () {
      var demo = _lodash2.default.clone(_this.state.demo);
      if (!_this.isValidForm(demo)) {
        return false;
      }
      _this.setState({
        isSendingLead: true
      });
      (0, _apiCaller2.default)('leads/new', 'post', {
        lead: demo
      }).then(function (res) {
        _this.setState({
          isSendingLead: false
        });
        if (res.status === 'Success') {} else {}
      });
    };

    _this.state = {
      demo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        jobTitle: '',
        country: ''
      },
      isSendingLead: false
    };
    return _this;
  }

  _createClass(ContactUs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _jsx('section', {
        className: 'iq-login-regi'
      }, void 0, _jsx('div', {
        className: 'container'
      }, void 0, _jsx('div', {
        className: 'row align-items-center'
      }, void 0, _jsx('div', {
        className: 'col-lg-6 col-sm-12 mb-5',
        style: { textAlign: 'center' }
      }, void 0, _jsx('div', {
        style: {
          padding: '15px 10px',
          borderRadius: '10px',
          color: '#fff',
          background: 'linear-gradient(to' + ' right, rgba(117, 205, 111, 1) 0%, rgba(70, 200, 148, 1) 100%)'
        }
      }, void 0, _jsx('h2', {
        className: 'mt-3',
        style: { color: '#fff' }
      }, void 0, 'Contact Us'), _ref, _jsx('div', {
        className: 'contact-bg'
      }, void 0, _jsx('h3', {
        style: { color: '#fff' }
      }, void 0, 'Our Office Info'), _jsx('div', {
        className: 'row'
      }, void 0, _jsx('div', {
        className: 'col-sm-12'
      }, void 0, _jsx('ul', {
        className: 'iq-contact text-white'
      }, void 0, _jsx('li', {}, void 0, _ref2, _jsx('p', {
        style: { marginBottom: '0.5rem' }
      }, void 0, '+91 123 4563 789')), _jsx('li', {}, void 0, _ref3, _jsx('p', {
        style: { marginBottom: '0.5rem' }
      }, void 0, 'xyz@gmail.com')), _ref4)), _ref5)))), _jsx('div', {
        className: 'col-lg-6 col-sm-12'
      }, void 0, _jsx('div', {
        className: 'iq-login register-box'
      }, void 0, _jsx('div', {
        className: 'contact-form'
      }, void 0, _jsx('div', {
        className: 'row'
      }, void 0, _jsx('div', {
        className: 'col-lg-6 col-sm-12'
      }, void 0, _jsx('div', {
        className: 'form-group',
        style: { marginBottom: '10px' }
      }, void 0, _ref6, _jsx('input', {
        value: this.state.demo.firstName,
        onChange: function onChange(e) {
          return _this2.handleChange('firstName', e.target.value);
        },
        type: 'text',
        className: 'form-control',
        placeholder: 'First Name',
        required: 'required',
        name: 'name',
        id: 'name'
      }))), _jsx('div', {
        className: 'col-lg-6 col-sm-12'
      }, void 0, _jsx('div', {
        className: 'form-group',
        style: { marginBottom: '10px' }
      }, void 0, _ref7, _jsx('input', {
        value: this.state.demo.lastName,
        type: 'text',
        onChange: function onChange(e) {
          return _this2.handleChange('lastName', e.target.value);
        },
        name: 'name',
        className: 'form-control',
        id: 'name',
        placeholder: 'Last Name'
      }))), _jsx('div', {
        className: 'col-lg-12 col-sm-12'
      }, void 0, _jsx('div', {
        className: 'form-group',
        style: { marginBottom: '10px' }
      }, void 0, _ref8, _jsx('input', {
        type: 'text',
        value: this.state.demo.email,
        onChange: function onChange(e) {
          return _this2.handleChange('email', e.target.value);
        },
        className: 'form-control',
        placeholder: 'Your Email',
        name: 'email',
        id: 'email',
        required: 'required'
      }))), _jsx('div', {
        className: 'col-lg-12 col-sm-12'
      }, void 0, _jsx('div', {
        className: 'form-group',
        style: { marginBottom: '10px' }
      }, void 0, _ref9, _jsx('input', {
        className: 'form-control',
        list: 'Country',
        value: this.state.demo.country,
        onChange: function onChange(e) {
          return _this2.handleChange('country', e.target.value);
        },
        name: 'Countries',
        placeholder: ' Country'
      }), _ref10)), _jsx('div', {
        className: 'col-lg-12 col-sm-12'
      }, void 0, _jsx('div', {
        className: 'form-group',
        style: { marginBottom: '10px' }
      }, void 0, _ref11, _jsx('input', {
        type: 'text',
        name: 'company',
        className: 'form-control',
        id: 'jobtitle',
        placeholder: 'Company Name',
        value: this.state.demo.company,
        onChange: function onChange(e) {
          return _this2.handleChange('company', e.target.value);
        }
      }))), _jsx('div', {
        className: 'col-lg-12 col-sm-12'
      }, void 0, _jsx('div', {
        className: 'form-group',
        style: { marginBottom: '10px' }
      }, void 0, _ref12, _jsx('input', {
        type: 'text',
        name: 'phone',
        className: 'form-control',
        id: 'jobtitle',
        placeholder: 'Job Title',
        value: this.state.demo.jobTitle,
        onChange: function onChange(e) {
          return _this2.handleChange('jobTitle', e.target.value);
        }
      }))), _jsx('div', {
        className: 'col-lg-12 col-sm-12'
      }, void 0, _jsx('div', {
        className: 'form-group',
        style: { marginBottom: '10px' }
      }, void 0, _ref13, _jsx('input', {
        type: 'number',
        name: 'phone',
        className: 'form-control',
        id: 'phone',
        placeholder: 'Your Phone Number',
        value: this.state.demo.phone,
        onChange: function onChange(e) {
          return _this2.handleChange('phone', e.target.value);
        }
      }))), _jsx('div', {
        className: 'col-lg-12 col-sm-12'
      }, void 0, _jsx('div', {
        className: 'form-group section-field textarea wow fadeInUp',
        'data-wow-duration': '2.5s',
        style: {
          visibility: 'hidden',
          animationDuration: '2.5s',
          animationName: 'none',
          marginBottom: '10px'
        }
      }, void 0, _ref14, _jsx('textarea', {
        className: 'input-message w-100',
        name: 'message',
        id: 'message',
        placeholder: 'Type Your Message Here',
        rows: 5,
        defaultValue: "",
        value: this.state.demo.message,
        onChange: function onChange(e) {
          return _this2.handleChange('message', e.target.value);
        }
      }), _jsx('button', {
        disabled: this.state.isSendingLead,
        onClick: function onClick() {
          return _this2.handleSubmit();
        },
        className: 'button mobile-full-width wow fadeInUp',
        'data-wow-duration': '1.0s',
        style: {
          visibility: 'hidden',
          animationDuration: '1s',
          animationName: 'none',
          marginBottom: 0,
          width: '100%'
        }
      }, void 0, this.state.isSendingLead ? 'Sending.....' : 'Send' + ' Message'))))))))));
    }
  }]);

  return ContactUs;
}(_react.Component);

exports.default = ContactUs;

/***/ })

};;