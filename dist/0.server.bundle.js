exports.ids = [0];
exports.modules = {

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = Banner;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx("div", {
  className: "col-lg-6"
}, void 0, _jsx("div", {
  className: "banner-text"
}, void 0, _jsx("h2", {
  className: "font-weight-bold  mb-3 "
}, void 0, "Deliver Delightful Customer Experiences"), _jsx("p", {
  className: " mb-4 "
}, void 0, "Reduce Support Cost by 50%"), _jsx("div", {
  className: "desktop text-left"
}, void 0, _jsx(_reactRouter.Link, {
  className: "button",
  to: "/get-demo"
}, void 0, "Get Demo"))));

var _ref2 = _jsx("img", {
  className: "img-fluid banner-person",
  src: "https://ik.imagekit.io/m52sq26n4h/Sales__2_.svg",
  alt: "img"
});

var _ref3 = _jsx("div", {
  className: "mobile container text-center"
}, void 0, _jsx(_reactRouter.Link, {
  className: "button",
  to: "/get-demo"
}, void 0, "Get Demo"));

function Banner(props) {
  return _jsx("div", {
    className: "banner"
  }, void 0, _jsx("div", {
    className: "container-fluid"
  }, void 0, _jsx("div", {
    className: "row"
  }, void 0, _ref, _jsx("div", {
    className: "col-lg-6"
  }, void 0, _jsx("div", {
    className: "banner-type wow fadeInRight",
    style: { visibility: 'visible', animationName: 'fadeInRight' }
  }, void 0, _ref2)))), _ref3);
}

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FaqTile = __webpack_require__(110);

var _FaqTile2 = _interopRequireDefault(_FaqTile);

var _reactRouter = __webpack_require__(1);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SalesAutomation = function (_Component) {
  _inherits(SalesAutomation, _Component);

  function SalesAutomation(props) {
    _classCallCheck(this, SalesAutomation);

    var _this = _possibleConstructorReturn(this, (SalesAutomation.__proto__ || Object.getPrototypeOf(SalesAutomation)).call(this, props));

    _this.handleIndexChange = function (val) {
      _this.setState({
        index: val
      });
    };

    _this.state = {
      index: 0
    };
    return _this;
  }

  _createClass(SalesAutomation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _jsx("section", {
        className: "iq-tab horizontal gray-bg"
      }, void 0, _jsx("div", {
        className: "container"
      }, void 0, _jsx("div", {
        className: "row"
      }, void 0, _jsx("div", {
        className: "col-12 col-lg-4 col-md-6"
      }, void 0, _jsx("ul", {
        id: "pills-tab2",
        className: "nav nav-pills tabs-left justify-content-center",
        role: "tablist",
        style: { borderRadius: '15px' }
      }, void 0, this.props.faqs && this.props.faqs.map(function (faq, index) {
        return _jsx("li", {
          className: "nav-item col-12",
          style: { marginBottom: '10px' }
        }, void 0, _jsx("a", {
          href: "#tab-" + faq._id,
          onClick: function onClick() {
            return _this2.handleIndexChange(index);
          },
          id: faq._id,
          className: _this2.state.index === index ? 'nav-link active show' : 'nav-link',
          "data-toggle": "pill",
          role: "tab",
          "aria-controls": faq._id,
          "area-selected": "false",
          style: { fontSize: '13px' }
        }, void 0, faq.text));
      }))), _jsx("div", {
        className: "col-12 col-lg-8 col-md-6"
      }, void 0, _jsx("div", {
        className: "tab-content mt-4",
        style: { display: 'flex', justifyContent: 'center' }
      }, void 0, this.props.faqs && this.props.faqs.map(function (faq, index) {
        return _jsx("div", {
          id: "tab-" + faq._id,
          className: _this2.state.index === index ? 'tab-pane active' : 'tab-pane',
          style: { justifyContent: 'center' }
        }, void 0, _jsx("img", {
          src: faq.imgUrl,
          style: { width: '100%' }
        }));
      }))))));
    }
  }]);

  return SalesAutomation;
}(_react.Component);

exports.default = SalesAutomation;

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = FaqTile;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _framerMotion = __webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var openStyle = {
    height: '80px'
};

var closeStyle = {
    height: '0.2px'
};
var transitionStyle = {
    oveflow: 'hidden'
};

function FaqTile(props) {
    return _jsx(_framerMotion.motion.div, {
        className: 'faq-tile',
        style: { width: '22%', paddingLeft: '12px', boxShadow: '' + (props.faq.isActive ? '0px 6px 20px 10px rgba(0, 0, 0, 0.2)' : '0px 6px 8px rgba(0, 0, 0, 0.2)') },
        onClick: function onClick() {
            return props.handleActiveFaq(props.faq._id);
        }
    }, void 0, _jsx('div', {
        className: 'faq-heading',
        style: { fontSize: '20px' }
    }, void 0, props.faq.text));
}

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import OwlCarousel from 'react-owl-carousel';
// import { Link } from "react-router";

var items = [{
  url: '/assets/images/freshdesk.svg',
  name: 'Freshdesk',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
}, {
  url: '/assets/images/freshdesk.svg',
  name: 'Freshdesk',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
}, {
  url: '/assets/images/freshdesk.svg',
  name: 'Freshdesk',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
}, {
  url: '/assets/images/freshdesk.svg',
  name: 'Freshdesk',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
}, {
  url: '/assets/images/freshdesk.svg',
  name: 'Freshdesk',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
}, {
  url: '/assets/images/freshdesk.svg',
  name: 'Freshdesk',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
}, {
  url: '/assets/images/freshdesk.svg',
  name: 'Freshdesk',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
}, {
  url: '/assets/images/freshdesk.svg',
  name: 'Freshdesk',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
}];

var _ref = _jsx('div', {
  className: 'title-box'
}, void 0, _jsx('h2', {
  className: 'title font-weight-bold '
}, void 0, 'Connections Made Easy'));

var _ref2 = _jsx('div', {
  className: 'col-12'
}, void 0, _jsx('div', {
  className: 'title-box'
}, void 0, _jsx('p', {
  className: 'sub-title'
}, void 0, 'Multiple Channels in One Setup')));

var _ref3 = _jsx('div', {
  className: 'clients-box'
}, void 0, _jsx('img', {
  className: 'img-fluid client-img',
  src: 'https://ik.imagekit.io/m52sq26n4h/messanger.svg'
}));

var _ref4 = _jsx('div', {
  className: 'clients-box'
}, void 0, _jsx('img', {
  className: 'img-fluid client-img',
  src: 'https://ik.imagekit.io/m52sq26n4h/Twitter_Icon.svg'
}));

var _ref5 = _jsx('div', {
  className: 'clients-box'
}, void 0, _jsx('img', {
  className: 'img-fluid client-img',
  src: 'https://ik.imagekit.io/m52sq26n4h/mail.svg'
}));

var _ref6 = _jsx('div', {
  className: 'clients-box'
}, void 0, _jsx('img', {
  className: 'img-fluid client-img',
  src: 'https://ik.imagekit.io/m52sq26n4h/insta.svg'
}));

var _ref7 = _jsx('div', {
  className: 'clients-box'
}, void 0, _jsx('img', {
  className: 'img-fluid client-img',
  src: 'https://ik.imagekit.io/m52sq26n4h/whtaspp.svg'
}));

var _ref8 = _jsx('div', {
  className: 'clients-box'
}, void 0, _jsx('img', {
  className: 'img-fluid client-img',
  src: 'https://ik.imagekit.io/m52sq26n4h/web.svg'
}));

var _ref9 = _jsx('div', {
  className: 'clients-box'
}, void 0, _jsx('img', {
  className: 'img-fluid client-img',
  src: 'https://ik.imagekit.io/m52sq26n4h/Facebook_icon.svg'
}));

var _ref10 = _jsx('div', {
  className: 'col-12'
}, void 0, _jsx('div', {
  className: 'title-box'
}, void 0, _jsx('p', {
  className: 'sub-title'
}, void 0, 'All Integrations Packed In One Platform')));

var _ref11 = _jsx('div', {
  className: 'col-lg-3 col-md-6'
}, void 0, _jsx('div', {
  className: 'future-services text-center wow slideInUp animated animated'
}, void 0, _jsx('div', {
  className: 'future-img'
}, void 0, _jsx('img', {
  src: 'https://ik.imagekit.io/m52sq26n4h/01.png',
  className: 'img-fluid mb-4',
  alt: ''
})), _jsx('p', {
  className: 'mb-0'
}, void 0, 'Missed Sales due to poor ', _jsx('br', {}), ' pre-sales customer engagement')));

var Connections = function (_Component) {
  _inherits(Connections, _Component);

  function Connections(props) {
    _classCallCheck(this, Connections);

    var _this = _possibleConstructorReturn(this, (Connections.__proto__ || Object.getPrototypeOf(Connections)).call(this, props));

    _this.toggleButton = function (val) {
      _this.setState({
        screen: val
      });
    };

    _this.state = {
      screen: 'channel'
    };
    return _this;
  }

  _createClass(Connections, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window && window.$) {
        $('.owl-carousel').each(function () {
          var $carousel = $(this);
          $carousel.owlCarousel({
            items: 6,
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>'],
            responsiveClass: true,
            responsive: {
              // breakpoint from 0 up
              0: {
                items: 1
              },
              // breakpoint from 480 up
              480: {
                items: 2
              },
              // breakpoint from 786 up
              786: {
                items: 3
              },
              // breakpoint from 1023 up
              1023: {
                items: 5
              },
              1199: {
                items: 6
              }
            }
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _jsx('section', {
        className: 'how-it-works conection-shap'
      }, void 0, _jsx('div', {
        className: 'container',
        style: { marginTop: 0 }
      }, void 0, _jsx('div', {
        className: 'row'
      }, void 0, _jsx('div', {
        className: 'col-sm-12'
      }, void 0, _jsx('div', {
        className: 'text-center',
        style: { marginTop: '40px', marginBottom: '40px' }
      }, void 0, _ref))), _jsx('div', {
        className: 'row'
      }, void 0, _jsx('div', {
        className: 'col-lg-12 text-center'
      }, void 0, _jsx('div', {
        onClick: function onClick() {
          return _this2.toggleButton('channel');
        },
        className: this.state.screen === 'channel' ? 'button' + ' active-btn new-active-btn' : 'button new-disable-btn',
        style: { marginRight: '10px', marginBottom: '10px' }
      }, void 0, 'Channels'), _jsx('div', {
        onClick: function onClick() {
          return _this2.toggleButton('integration');
        },
        className: this.state.screen !== 'channel' ? 'button' + ' active-btn new-active-btn' : 'button new-disable-btn'
      }, void 0, 'Integration'))), _jsx('div', {
        style: this.state.screen === 'channel' ? { display: 'block' } : { display: 'none' }
      }, void 0, _jsx('div', {
        className: 'row pt-5'
      }, void 0, _ref2, _jsx('div', {
        className: 'col-sm-12'
      }, void 0, _jsx('div', {
        className: 'owl-carousel'
      }, void 0, _jsx('div', {
        className: 'item',
        style: { padding: '25px' }
      }, void 0, _ref3), _jsx('div', {
        className: 'item',
        style: { padding: '25px' }
      }, void 0, _ref4), _jsx('div', {
        className: 'item',
        style: { padding: '25px' }
      }, void 0, _ref5), _jsx('div', {
        className: 'item',
        style: { padding: '25px' }
      }, void 0, _ref6), _jsx('div', {
        className: 'item',
        style: { padding: '25px' }
      }, void 0, _ref7), _jsx('div', {
        className: 'item',
        style: { padding: '25px' }
      }, void 0, _ref8), _jsx('div', {
        className: 'item',
        style: { padding: '25px' }
      }, void 0, _ref9))))), _jsx('div', {
        style: this.state.screen !== 'channel' ? { display: 'block' } : { display: 'none' }
      }, void 0, _jsx('div', {
        className: 'row pt-5'
      }, void 0, _ref10, items.map(function (item) {
        return _ref11;
      })))));
    }
  }]);

  return Connections;
}(_react.Component);

exports.default = Connections;

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = Engagement;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  stat: '35',
  details: 'Increase in Conversion rate'
}, {
  stat: '50',
  details: 'Savings in Customer Support'
}, {
  stat: '23',
  details: 'Increase in Customer Retention'
}, {
  stat: '18',
  details: 'Increase in Average Order Value'
}];

var _ref = _jsx('section', {
  className: 'main-bg counter'
}, void 0, _jsx('div', {
  className: 'container'
}, void 0, _jsx('div', {
  className: 'row iq-counter3 text-center'
}, void 0, _jsx('div', {
  className: 'col-lg-3 col-md-6 col-sm-12'
}, void 0, _jsx('div', {
  className: 'iq-counter iq-pt-30 iq-rmb-30'
}, void 0, _jsx('span', {
  className: 'timer text-white',
  'data-to': 35,
  'data-speed': 5000
}, void 0, '35'), _jsx('h6', {
  className: 'mt-3 text-white'
}, void 0, 'Increase in Conversion Rate'))), _jsx('div', {
  className: 'col-lg-3 col-md-6 col-sm-12'
}, void 0, _jsx('div', {
  className: 'iq-counter iq-pt-30 iq-rmb-30'
}, void 0, _jsx('span', {
  className: 'timer text-white',
  'data-to': 50,
  'data-speed': 5000
}, void 0, '50'), _jsx('h6', {
  className: 'mt-3 text-white'
}, void 0, 'Savings in Customer Support'))), _jsx('div', {
  className: 'col-lg-3 col-md-6 col-sm-12'
}, void 0, _jsx('div', {
  className: 'iq-counter iq-pt-30 iq-rmb-30'
}, void 0, _jsx('span', {
  className: 'timer text-white',
  'data-to': 23,
  'data-speed': 5000
}, void 0, '23'), _jsx('h6', {
  className: 'mt-3 text-white'
}, void 0, 'Increase in Customer Retention'))), _jsx('div', {
  className: 'col-lg-3 col-md-6 col-sm-12'
}, void 0, _jsx('div', {
  className: 'iq-counter iq-pt-30'
}, void 0, _jsx('span', {
  className: 'timer text-white',
  'data-to': 18,
  'data-speed': 5000
}, void 0, '18'), _jsx('h6', {
  className: 'mt-3 text-white'
}, void 0, 'Increase in Average Order Value'))))));

function Engagement(props) {
  return _jsx(_react2.default.Fragment, {}, void 0, _jsx('section', {
    className: 'how-it-works conection-shap'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _jsx('div', {
    className: 'row'
  }, void 0, _jsx('div', {
    className: 'col-sm-12'
  }, void 0, _jsx('div', {
    className: 'title-box'
  }, void 0, _jsx('h2', {
    className: 'title font-weight-bold',
    style: { paddingTop: '60px' }
  }, void 0, 'Reduce Costs and Increase Engagement'))))), _ref));
}

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = Analytics;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx("div", {
    className: "title-box"
}, void 0, _jsx("h2", {
    className: "title font-weight-bold "
}, void 0, "Analytics"));

var _ref2 = _jsx("div", {
    className: "wow swing",
    "data-wow-delay": "0.5s",
    "data-wow-iteration": "2"
}, void 0, _jsx("img", {
    src: "https://ik.imagekit.io/m52sq26n4h/ordervaluemetrics.svg",
    width: "50px",
    height: "60px",
    alt: ""
}));

var _ref3 = _jsx("h6", {}, void 0, "Order Value Metrics");

var _ref4 = _jsx("div", {
    className: "wow swing",
    "data-wow-delay": "0.5s",
    "data-wow-iteration": "2"
}, void 0, _jsx("img", {
    src: "https://ik.imagekit.io/m52sq26n4h/useranalysis.svg",
    width: "50px",
    height: "60px",
    alt: ""
}));

var _ref5 = _jsx("h6", {}, void 0, "User Analysis");

var _ref6 = _jsx("div", {
    className: "wow swing",
    "data-wow-delay": "0.5s",
    "data-wow-iteration": "2"
}, void 0, _jsx("img", {
    src: "https://ik.imagekit.io/m52sq26n4h/messageanalysis.svg",
    width: "50px",
    height: "60px",
    alt: ""
}));

var _ref7 = _jsx("h6", {}, void 0, "Message Analysis");

var _ref8 = _jsx("div", {
    className: "wow swing",
    "data-wow-delay": "0.5s",
    "data-wow-iteration": "2"
}, void 0, _jsx("img", {
    src: "https://ik.imagekit.io/m52sq26n4h/goalcompletion.svg",
    width: "50px",
    height: "60px",
    alt: ""
}));

var _ref9 = _jsx("h6", {}, void 0, "Goal Completion");

var _ref10 = _jsx("div", {
    className: "mobile-margin wow bounceInRight",
    "data-wow-delay": "0.5s"
}, void 0, _jsx("img", {
    className: "desktop-mobile-image-width",
    src: "https://ik.imagekit.io/m52sq26n4h/Analytics.svg",
    alt: ""
}));

function Analytics(props) {
    return _jsx("section", {
        className: "how-it-works conection-shap"
    }, void 0, _jsx("div", {
        className: "container page-width sales-support-analytics-wrapper",
        style: { marginTop: 0 }
    }, void 0, _jsx("div", {
        className: "text-center"
    }, void 0, _ref, _jsx("div", {
        className: "row"
    }, void 0, _jsx("div", {
        className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
        style: { fontSize: '18px' }
    }, void 0, _jsx("div", {
        className: "row"
    }, void 0, _jsx("div", {
        className: "col-6 col-sm-6 col-md-6 col-lg-6",
        style: { padding: '10px', marginBottom: '10px' }
    }, void 0, _ref2, _ref3), _jsx("div", {
        className: "col-6 col-sm-6 col-md-6 col-lg-6 ",
        style: { padding: '10px', marginBottom: '10px' }
    }, void 0, _ref4, _ref5)), _jsx("div", {
        className: "row"
    }, void 0, _jsx("div", {
        className: "col-6 col-sm-6 col-md-6 col-lg-6 ",
        style: { padding: '10px', marginBottom: '10px' }
    }, void 0, _ref6, _ref7), _jsx("div", {
        className: "col-6 col-sm-6 col-md-6 col-lg-6 ",
        style: { padding: '10px', marginBottom: '10px' }
    }, void 0, _ref8, _ref9))), _jsx("div", {
        className: " col-xs-12 col-sm-12 col-md-6 col-lg-6",
        style: { display: 'flex', alignSelf: 'end' }
    }, void 0, _ref10)))));
}

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = CounterSegment;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx("section", {
  className: "main-bg counter "
}, void 0, _jsx("div", {
  className: "container"
}, void 0, _jsx("div", {
  className: "row iq-counter3 text-center"
}, void 0, _jsx("div", {
  className: "col-lg-3 col-md-6 col-sm-12"
}, void 0, _jsx("div", {
  className: "iq-counter iq-pt-30 iq-rmb-30"
}, void 0, _jsx("span", {
  className: "timer text-white"
}, void 0, "35%"), _jsx("h6", {
  className: "mt-3 text-white"
}, void 0, "Increase in Conversion Rate"))), _jsx("div", {
  className: "col-lg-3 col-md-6 col-sm-12"
}, void 0, _jsx("div", {
  className: "iq-counter iq-pt-30 iq-rmb-30"
}, void 0, _jsx("span", {
  className: "timer text-white"
}, void 0, "50%"), _jsx("h6", {
  className: "mt-3 text-white"
}, void 0, "Savings in Customer Support"))), _jsx("div", {
  className: "col-lg-3 col-md-6 col-sm-12"
}, void 0, _jsx("div", {
  className: "iq-counter iq-pt-30 iq-rmb-30"
}, void 0, _jsx("span", {
  className: "timer text-white"
}, void 0, "23%"), _jsx("h6", {
  className: "mt-3 text-white"
}, void 0, "Increase in Customer Retention"))), _jsx("div", {
  className: "col-lg-3 col-md-6 col-sm-12"
}, void 0, _jsx("div", {
  className: "iq-counter iq-pt-30"
}, void 0, _jsx("span", {
  className: "timer text-white"
}, void 0, "18%"), _jsx("h6", {
  className: "mt-3 text-white"
}, void 0, "Increase in Average Order Value"))))));

function CounterSegment(props) {
  return _jsx(_react2.default.Fragment, {}, void 0, _jsx("section", {
    className: "how-it-works conection-shap"
  }, void 0, _jsx("div", {
    className: "container",
    style: { marginTop: 0 }
  }, void 0, _jsx("div", {
    className: "row"
  }, void 0, _jsx("div", {
    className: "col-sm-12"
  }, void 0, _jsx("div", {
    className: "title-box",
    style: { margin: 0 }
  }, void 0, _jsx("h2", {
    className: "title font-weight-bold",
    style: { margin: 0 }
  }, void 0, "Reduce Costs and Increase Engagement"))))), _ref));
}

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Banner = __webpack_require__(108);

var _Banner2 = _interopRequireDefault(_Banner);

var _SalesAutomation = __webpack_require__(109);

var _SalesAutomation2 = _interopRequireDefault(_SalesAutomation);

var _Connections = __webpack_require__(111);

var _Connections2 = _interopRequireDefault(_Connections);

var _Engagement = __webpack_require__(112);

var _Engagement2 = _interopRequireDefault(_Engagement);

var _Analytics = __webpack_require__(113);

var _Analytics2 = _interopRequireDefault(_Analytics);

var _reactLazyload = __webpack_require__(69);

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

var _CounterSegment = __webpack_require__(114);

var _CounterSegment2 = _interopRequireDefault(_CounterSegment);

var _AccordionList = __webpack_require__(93);

var _AccordionList2 = _interopRequireDefault(_AccordionList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var accordions = [{
  title: 'Qualify leads',
  img: 'https://ik.imagekit.io/m52sq26n4h/Qualify_Leads.svg'
}, {
  title: 'Personalised Delivery',
  img: 'https://ik.imagekit.io/m52sq26n4h/Personalised-D2.png'
}, {
  title: 'Product Information',
  img: 'https://ik.imagekit.io/m52sq26n4h/Product_Information.svg'
}, {
  title: 'Personalised Discounts',
  img: 'https://ik.imagekit.io/m52sq26n4h/Personalised_Discounts.svg'
}, {
  title: 'Social Proof and Reviews',
  img: 'https://ik.imagekit.io/m52sq26n4h/Social_Proof_and_Reviews.svg'
}, {
  title: 'Insightful Up-Selling',
  img: 'https://ik.imagekit.io/m52sq26n4h/Insightful_Up-Selling.svg'
}, {
  title: 'Insightful Cross-Selling',
  img: 'https://ik.imagekit.io/m52sq26n4h/Insightful_Cross-Selling.svg'
}];

var _ref = _jsx(_AccordionList2.default, {
  accordions: accordions
});

var _ref2 = _jsx(_CounterSegment2.default, {});

var _ref3 = _jsx(_Connections2.default, {});

var _ref4 = _jsx(_Analytics2.default, {});

var SalesSupport = function (_Component) {
  _inherits(SalesSupport, _Component);

  function SalesSupport(props) {
    _classCallCheck(this, SalesSupport);

    var _this = _possibleConstructorReturn(this, (SalesSupport.__proto__ || Object.getPrototypeOf(SalesSupport)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(SalesSupport, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // window.scrollTo(0, 0);
      // window.particlesJS.load('particles-js', '/particles.json', function () {
      //     console.log('callback - particles.js config loaded');
      // });

    }
  }, {
    key: "render",
    value: function render() {
      return _jsx("div", {
        className: ""
      }, void 0, _jsx(_Banner2.default, {
        handleDemo: this.props.toggleDemoPopup
      }), _jsx("section", {
        className: "wow slideInRight",
        "data-wow-delay": "0.5s"
      }, void 0, _jsx("div", {
        className: "col-lg-12 container",
        style: { maxWidth: '900px', marginTop: 0 }
      }, void 0, _ref)), _jsx("section", {
        className: "wow slideInLeft",
        "data-wow-delay": "0.5s",
        style: { padding: 0, backgroundColor: '#eff0f3' }
      }, void 0, _ref2), _ref3, _ref4);
    }
  }]);

  return SalesSupport;
}(_react.Component);

exports.default = SalesSupport;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AccordionItem = __webpack_require__(94);

var _AccordionItem2 = _interopRequireDefault(_AccordionItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccordionList = function (_React$Component) {
    _inherits(AccordionList, _React$Component);

    function AccordionList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AccordionList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AccordionList.__proto__ || Object.getPrototypeOf(AccordionList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            activeAccordion: 0
        }, _this.headerClick = function (index) {
            return _this.setState(function (prev) {
                return {
                    activeAccordion: prev.activeAccordion === index ? -1 : index
                };
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AccordionList, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var accordionElement = this.props.accordions.map(function (item, index) {
                return _jsx(_AccordionItem2.default, {
                    accordion: item,
                    isOpen: _this2.state.activeAccordion === index,
                    onHeaderClick: _this2.headerClick.bind(null, index)
                }, item.title);
            });

            return _jsx("div", {
                className: "accordion__list"
            }, void 0, accordionElement);
        }
    }]);

    return AccordionList;
}(_react2.default.Component);

exports.default = AccordionList;

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccordionItem = function (_React$Component) {
    _inherits(AccordionItem, _React$Component);

    function AccordionItem() {
        _classCallCheck(this, AccordionItem);

        return _possibleConstructorReturn(this, (AccordionItem.__proto__ || Object.getPrototypeOf(AccordionItem)).apply(this, arguments));
    }

    _createClass(AccordionItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                accordion = _props.accordion,
                onHeaderClick = _props.onHeaderClick,
                isOpen = _props.isOpen;

            return _jsx('div', {
                className: 'accordion__item accordion-part'
            }, void 0, _jsx('div', {
                className: 'accordion-part__header ' + (isOpen ? 'accordion-part__header_opened' : ''),
                onClick: onHeaderClick
            }, void 0, accordion.title), _jsx('div', {
                className: 'accordion-part__body accordion-transition ' + (isOpen ? 'active-accordion' : '')
            }, void 0, _jsx('p', {
                className: 'accordion-part__text text-center'
            }, void 0, _jsx('img', {
                className: 'accordion-img',
                src: accordion.img
            }))));
        }
    }]);

    return AccordionItem;
}(_react2.default.Component);

exports.default = AccordionItem;

/***/ })

};;