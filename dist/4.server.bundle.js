exports.ids = [4];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = Banner;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx("div", {
    className: "banner-header"
}, void 0, "About Us");

function Banner(props) {
    return _jsx("div", {
        className: "container page-width blogs-card-top"
    }, void 0, _jsx("div", {
        className: "text-center",
        style: { marginTop: '60px' }
    }, void 0, _ref));
}

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = Journey;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx("div", {
  className: "col-lg-6 col-md-6 text-left align-self-center"
}, void 0, _jsx("h2", {
  className: "mt-3 font-weight-bold wow fadeInDown",
  "data-wow-delay": "0.5s"
}, void 0, "Journey"), _jsx("p", {
  className: "mt-3 "
}, void 0, "We started off as a team of two college students at IIT Delhi ready to take on the world and build the company of our dreams. But we didn\u2019t know how to build a business. All we knew was tech, and we were damn good at that. Our specialisation was in Natural Language Processing and Chatbot Design. But the world already had enough chatbots companies. Right? We couldn\u2019t have been more far from the truth. The current wave of companies had it all wrong. Chatbots aren\u2019t supposed to be a dumb click based machine or a simple live agent interface. They are supposed to have a life of their own. A smart chatbot should understand the user, feel the user, and personalise itself to the user\u2019s wishes. It should figure out what works best for me, just like my barber at the salon, cause nobody wants to spend their time and effort to figure out what's best for them. It became clear what we had to do from that moment on. We had to bring the AI back into the smart agent world and give the online brands the chatbot they deserved. Now we enable brands to kick back in style as the fresh new kid on the block, LimeChat, takes care of their hard work."));

function Journey(props) {
  return _jsx("div", {
    className: "banner"
  }, void 0, _jsx("div", {
    className: "container-fluid"
  }, void 0, _jsx("div", {
    className: "row flex-row-reverse"
  }, void 0, _jsx("div", {
    className: "col-lg-6 col-md-6 ",
    style: { display: 'flex' }
  }, void 0, _jsx("img", {
    src: "https://ik.imagekit.io/m52sq26n4h/10.png",
    className: "img-fluid iq-pr-50",
    alt: "",
    style: { alignSelf: 'center' }
  })), _ref)));
}

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = CompanyVision;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  name: 'Company’s Vision',
  url: '/lime02.svg',
  details: 'Personalise the art of selling to each online customer\n'
}, {
  name: 'Company’s Mission',
  url: '/lime02.svg',
  details: 'To enable brands to give world class customer experience and make online shopping hassle free and on-demand'
}, {
  name: 'Company’s Values',
  url: '/lime02.svg',
  details: 'A line about the company’s values'
}];

var _ref = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-sm-12'
}, void 0, _jsx('div', {
  className: 'title-box'
}, void 0, _jsx('h2', {
  className: 'title font-weight-bold 5s'
}, void 0, 'Vision'))));

var _ref2 = _jsx('div', {
  className: 'future-img'
}, void 0, _jsx('img', {
  src: 'https://ik.imagekit.io/m52sq26n4h/01.png',
  className: 'img-fluid mb-4',
  alt: ''
}));

var _ref3 = _jsx('h4', {}, void 0, 'Company\u2019s Vision');

var _ref4 = _jsx('p', {
  className: 'mb-0'
}, void 0, ' To create a world where consumers can interact and transact with online brands in a seamless and frictionless manner');

var _ref5 = _jsx('div', {
  className: 'future-img'
}, void 0, _jsx('img', {
  src: 'https://ik.imagekit.io/m52sq26n4h/02.png',
  className: 'img-fluid mb-4',
  alt: ''
}));

var _ref6 = _jsx('h4', {}, void 0, 'Company\u2019s Mission');

var _ref7 = _jsx('p', {
  className: 'mb-0'
}, void 0, ' To enable internet-first brands to give world-class personalized customer experience at reasonable cost through chatbots');

var _ref8 = _jsx('div', {
  className: 'future-img'
}, void 0, _jsx('img', {
  src: 'https://ik.imagekit.io/m52sq26n4h/03_1_.png',
  className: 'img-fluid mb-4',
  alt: ''
}));

var _ref9 = _jsx('h4', {}, void 0, 'Company\u2019s Values');

var _ref10 = _jsx('li', {}, void 0, _jsx('strong', {}, void 0, 'Open Communication'), ' - Do not censor yourself while communicating with team-mates');

var _ref11 = _jsx('li', {}, void 0, _jsx('strong', {}, void 0, ' Do not fear failure '), '- Carry out experiments and learn quickly');

var _ref12 = _jsx('li', {}, void 0, ' ', _jsx('strong', {}, void 0, 'Collaborative environment'), ' - Help out your team-mates however you can');

var _ref13 = _jsx('li', {}, void 0, ' ', _jsx('strong', {}, void 0, 'Take Ownership'));

function CompanyVision(props) {
  return _jsx('section', {
    className: 'how-it-works conection-shap'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _ref, _jsx('div', {
    className: 'row'
  }, void 0, _jsx('div', {
    className: 'col-lg-4 col-md-4'
  }, void 0, _jsx('div', {
    className: 'future-services text-center wow slideInUp',
    'data-wow-duration': '0.5s',
    style: { visibility: 'visible', animationDuration: '0.5s', animationName: 'none', minHeight: '450px' }
  }, void 0, _ref2, _ref3, _ref4)), _jsx('div', {
    className: 'col-lg-4 col-md-4'
  }, void 0, _jsx('div', {
    className: 'future-services text-center wow slideInUp',
    'data-wow-duration': '1s',
    style: { visibility: 'visible', animationDuration: '1s', animationName: 'none', minHeight: '450px' }
  }, void 0, _ref5, _ref6, _ref7)), _jsx('div', {
    className: 'col-lg-4 col-md-4'
  }, void 0, _jsx('div', {
    className: 'future-services text-center wow slideInUp',
    'data-wow-duration': '1.5s',
    style: { visibility: 'visible', animationDuration: '1.5s', animationName: 'none', minHeight: '450px' }
  }, void 0, _ref8, _ref9, _jsx('p', {
    className: 'mb-0'
  }, void 0, _jsx('ul', {
    style: { listStyleType: "none", textAlign: "initial" }
  }, void 0, _ref10, _ref11, _ref12, _ref13)))))));
}

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = TeamMembers;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MemberCard = __webpack_require__(107);

var _MemberCard2 = _interopRequireDefault(_MemberCard);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  img: 'https://ik.imagekit.io/m52sq26n4h/nikhil_gupta.svg',
  name: 'Nikhil Gupta',
  designation: 'Co-founder',
  details: 'Computer science from IIT Delhi',
  linkedinid: 'https://www.linkedin.com/in/nikhilgupta1997/'
}, {
  img: 'https://ik.imagekit.io/m52sq26n4h/aniket_bajpai.svg',
  name: 'Aniket Bajpai',
  designation: 'Co-founder',
  details: 'Computer science from IIT Delhi',
  linkedinid: 'https://www.linkedin.com/in/aniket-bajpai-b6b215b2/'
}, {
  img: 'https://ik.imagekit.io/m52sq26n4h/parth_porwal.svg',
  name: 'Parth Porwal',
  designation: 'Lead SD Engineer',
  details: 'IIT Delhi',
  linkedinid: 'https://www.linkedin.com/in/parth-porwal-98b93418b/'
}, {
  img: 'https://ik.imagekit.io/m52sq26n4h/sushant_rathi.svg',
  name: 'Sushant Rathi',
  designation: 'Lead NLP Engineer',
  details: 'IIT Delhi',
  linkedinid: 'https://www.linkedin.com/in/sushant-rathi-b84307156/'
}, {
  img: 'https://ik.imagekit.io/m52sq26n4h/akshay_mm.svg',
  name: 'Akshay M M',
  designation: 'Business Development Manager',
  details: 'IIM Bangalore',
  linkedinid: 'https://www.linkedin.com/in/akshay-m-m-1512bb185/'

}, {
  img: 'https://ik.imagekit.io/m52sq26n4h/saurav_musunuru.svg',
  name: 'Saurav Musunuru',
  designation: 'Lead Backend Engineer',
  details: 'IIT Delhi',
  linkedinid: 'http://www.linkedin.com/in/saurav-musunuru'

}, {
  img: 'https://ik.imagekit.io/m52sq26n4h/siddharth_jindal_pic.svg',
  name: 'Siddharth Jindal',
  designation: 'ML Scientist',
  details: 'IIT Kanpur',
  linkedinid: 'https://www.linkedin.com/in/siddjin/'

}, {
  img: 'https://ik.imagekit.io/m52sq26n4h/sachin_mohan.svg',
  name: 'Sachin Mohan',
  designation: 'ML Scientist',
  details: 'IET',
  linkedinid: 'https://www.linkedin.com/in/sachin-mohan-b619a9152/'

}];

// Nikhil Gupta
// Designation - Co-Founder
// College - IIT Delhi
// LinkedIn - https://www.linkedin.com/in/nikhilgupta1997/
// Email - nikhil@limechat.ai

// 2) Aniket Bajpai
// Designation - Co-Founder
// College - IIT Delhi
// LinkedIn - https://www.linkedin.com/in/aniket-bajpai-b6b215b2/
// Email - aniket@limechat.ai

// 3) Sushant Rathi
// Designation - Lead NLP Engineer
// College - IIT Delhi
// LinkedIn - https://www.linkedin.com/in/sushant-rathi-b84307156/
// Email - rathisushant5@gmail.com

// 4) Parth Porwal
// Designation - Lead SD Engineer
// College - IIT Delhi
// LinkedIn - https://www.linkedin.com/in/parth-porwal-98b93418b/
// Email - parth.porwal287@gmail.com

// 5) Saurav Musunuru
// Designation - Lead Backend Engineer
// College - IIT Delhi
// LinkedIn - www.linkedin.com/in/saurav-musunuru
// Email - musunurusaurav@gmail.com

// 6) Siddharth Jindal
// Designation - ML Scientist
// College - IIT Kanpur
// LinkedIn - https://www.linkedin.com/in/siddjin/
// Email - sidharath01@gmail.com

// 7) Sachin Mohan
// Designation - ML Scientist
// College - IET
// LinkedIn - https://www.linkedin.com/in/sachin-mohan-b619a9152/
// Email - sachinmohan409@gmail.com

// 8) Akshay M M
// Designation - Business Development Manager
// College - IIM Bangalore
// LinkedIn - https://www.linkedin.com/in/akshay-m-m-1512bb185/
// Email - akshay.mm19@iimb.ac.in


var _ref = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-sm-12'
}, void 0, _jsx('div', {
  className: 'title-box'
}, void 0, _jsx('h2', {
  className: 'title font-weight-bold 5s'
}, void 0, 'Team Members'))));

function TeamMembers(props) {
  return _jsx('div', {
    className: 'container-fluid'
  }, void 0, _ref, _jsx('div', {
    className: 'row',
    style: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }
  }, void 0, items.map(function (item) {
    return _jsx(_MemberCard2.default, {
      item: item
    });
  })));
}

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = Journey;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx("li", {}, void 0, _jsx("a", {
    href: "javascript:void(0)",
    className: "fab fa-facebook-f icon-hover"
}));

var _ref2 = _jsx("li", {}, void 0, _jsx("a", {
    href: "javascript:void(0)",
    className: "fab fa-twitter icon1-hover"
}, void 0, " "));

var _ref3 = _jsx("li", {}, void 0, _jsx("a", {
    href: "javascript:void(0)",
    className: "fab fa-google icon2-hover"
}));

function Journey(props) {
    return _jsx("div", {
        className: "col-sm-12 col-lg-4 col-md-6 mt-5 wow fadeIn",
        "data-wow-delay": "0.5s"
    }, void 0, _jsx("div", {
        className: "iq-team wow slideInUp",
        "data-wow-duration": "0.5s",
        style: { visibility: 'visible', animationDuration: '0.5s', animationName: 'none', borderRadius: '5px' }
    }, void 0, _jsx("div", {
        className: "iq-team-img"
    }, void 0, _jsx("img", {
        src: props.item.img,
        className: "img-fluid center-block"
    })), _jsx("div", {
        className: "iq-team-info text-center"
    }, void 0, _jsx("h4", {
        style: { paddingBottom: '10px' }
    }, void 0, props.item.name), _jsx("div", {
        className: "team-post iq-tw-5"
    }, void 0, props.item.designation), _jsx("div", {
        className: "team-post iq-tw-5"
    }, void 0, props.item.details)), _jsx("div", {
        className: "share"
    }, void 0, _jsx("ul", {}, void 0, _ref, _ref2, _ref3, _jsx("li", {}, void 0, _jsx("a", {
        href: props.item.linkedinid,
        className: "fab fa-linkedlin icon3-hover"
    }))))))

    // <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 "
    //     style={{
    //         // borderRadius: '5px',
    //         textAlign: 'center', maxWidth: '320px'
    //     }}>
    //     <div
    //         style={{
    //             background: `url(${props.item.img})`,
    //             textAlign: 'center',
    //             borderRadius: '10px'

    //         }}
    //     >
    //         <div className={'member-wrapper'} style={{
    //             boxShadow: '0px -6px 4px rgba(0, 0, 0, 0.2), 0px 6px 8px rgba(0, 0, 0, 0.2)'
    //         }}>
    //             <div className={'member-data'} style={{ backgroundColor: '#fff' }}>
    //                 <div style={{ marginTop: '10px' }}>
    //                     {/* <img style={{ borderRadius: '10px', width: '100%' }} src={props.item.img} alt="" /> */}
    //                 </div>
    //                 <div style={{ fontSize: '1.5em', marginTop: '10px', color: '#000' }}>
    //                     {props.item.name}
    //                 </div>
    //                 <div style={{ fontSize: '1.2em', marginTop: '5px', marginBottom: '5px', color: '#7ECB20' }}>
    //                     {props.item.designation}
    //                 </div>
    //                 <div style={{ fontSize: '1.0em', marginBottom: '15px', color: '#000' }}>
    //                     {props.item.details}
    //                 </div>
    //                 <div style={{ marginBottom: '15px' }}>
    //                     <img src="twitter.svg" width="30px" style={{ marginRight: '15px' }} alt="" />
    //                     <img src="mail.svg" width="30px" alt="" />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    ;
}

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Banner = __webpack_require__(103);

var _Banner2 = _interopRequireDefault(_Banner);

var _Journey = __webpack_require__(104);

var _Journey2 = _interopRequireDefault(_Journey);

var _CompanyVision = __webpack_require__(105);

var _CompanyVision2 = _interopRequireDefault(_CompanyVision);

var _TeamMembers = __webpack_require__(106);

var _TeamMembers2 = _interopRequireDefault(_TeamMembers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_Journey2.default, {});

var _ref2 = _jsx(_CompanyVision2.default, {});

var _ref3 = _jsx(_TeamMembers2.default, {});

var AboutUs = function (_Component) {
    _inherits(AboutUs, _Component);

    function AboutUs() {
        _classCallCheck(this, AboutUs);

        var _this = _possibleConstructorReturn(this, (AboutUs.__proto__ || Object.getPrototypeOf(AboutUs)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(AboutUs, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            return _jsx(_react2.default.Fragment, {}, void 0, _ref, _ref2, _jsx("section", {
                className: "how-it-works-new conection-shap-new"
            }, void 0, _jsx("div", {
                className: "container",
                style: { marginTop: '10px' }
            }, void 0, _ref3)));
        }
    }]);

    return AboutUs;
}(_react.Component);

exports.default = AboutUs;

/***/ })

};;