exports.ids = [3];
exports.modules = {

/***/ 119:
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
}, void 0, _jsx("h5", {
  className: "main-color mb-3 wow tada",
  "data-wow-delay": "3s"
}, void 0, "India's First Level 3 Chatbot Technology"), _jsx("h1", {
  className: "font-weight-bold mb-3 wow fadeIn",
  "data-wow-delay": "0.5s"
}, void 0, "Smarter and Effective Conversations")), _jsx("div", {
  className: "desktop text-left"
}, void 0, _jsx(_reactRouter.Link, {
  className: "button",
  to: "/get-demo"
}, void 0, "Get Demo")));

var _ref2 = _jsx("img", {
  className: "img-fluid banner-person",
  src: "https://ik.imagekit.io/m52sq26n4h/technology_banner.svg",
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
    className: "banner",
    style: { paddingBottom: 0 }
  }, void 0, _jsx("div", {
    className: "container-fluid"
  }, void 0, _jsx("div", {
    className: "row"
  }, void 0, _ref, _jsx("div", {
    className: "col-lg-6"
  }, void 0, _jsx("div", {
    className: "banner-type ",
    style: { visibility: 'visible', animationName: 'fadeInRight' }
  }, void 0, _ref2)))), _ref3);
}

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = Level3Chatbot;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  details: 'This consists of the user\'s preferences, personal details, chat history ,and purchasing history',
  url: 'https://ik.imagekit.io/m52sq26n4h/userprofile.svg',
  name: 'User Profile'
}, {
  details: 'This comprises of the specific task the user wants completed and its supporting details',
  url: 'https://ik.imagekit.io/m52sq26n4h/usergoal.svg',
  name: 'User Goal'
}, {
  details: 'What has been said so far contains many contextual clues to clarify the user goal',
  url: 'https://ik.imagekit.io/m52sq26n4h/conversationhistory.svg',
  name: 'Conversation History'
}, {
  details: 'Based on the user profile and goal, words can have different interpretations',
  url: 'https://ik.imagekit.io/m52sq26n4h/worldKnowledgeicon.svg',
  name: 'World Knowledge'
}];

var _ref = _jsx('p', {
  className: 'sub-title '
}, void 0, 'Level 3 chatbots can understand context.');

function Level3Chatbot(props) {
  return _jsx(_react2.default.Fragment, {}, void 0, _jsx('div', {
    className: 'container',
    style: { margin: 'auto' }
  }, void 0, _jsx('div', {
    className: 'row'
  }, void 0, _jsx('div', {
    className: 'col-sm-12'
  }, void 0, _jsx('div', {
    className: 'title-box',
    style: { margin: 0 }
  }, void 0, _jsx('h2', {
    className: 'title font-weight-bold ',
    style: { paddingTop: '60px' }
  }, void 0, 'What is a Level 3 Chatbot?'), _ref)))), _jsx('div', {
    className: 'container '
  }, void 0, _jsx('div', {
    className: 'row'
  }, void 0, items.map(function (item) {
    return _jsx('div', {
      className: 'col-lg-3 col-md-6'
    }, void 0, _jsx('div', {
      className: 'future-services text-center wow slideInUp animated',
      'data-wow-duration': '0.5s',
      style: { visibility: 'visible', animationDuration: '0.5s', minHeight: '370px' }
    }, void 0, _jsx('div', {
      className: 'future-img'
    }, void 0, _jsx('img', {
      src: item.url,
      className: 'img-fluid mb-4',
      alt: ''
    })), _jsx('p', {
      className: 'title font-weight-bold',
      style: { marginBottom: '0px' }
    }, void 0, item.name), _jsx('p', {
      className: 'mb-0'
    }, void 0, item.details)));
  }))));
}

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = AboutTech;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _framerMotion = __webpack_require__(68);

var _ScrollContext = __webpack_require__(122);

var _ScrollContext2 = _interopRequireDefault(_ScrollContext);

var _reactLazyload = __webpack_require__(69);

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('img', {
  src: 'https://ik.imagekit.io/m52sq26n4h/contextual-assistant.svg',
  className: 'img-fluid ',
  alt: ''
});

var _ref2 = _jsx('div', {
  className: 'col-md-6 text-left align-self-center'
}, void 0, _jsx('div', {
  className: 'ml-3 mt-3'
}, void 0, _jsx('h3', {
  className: 'font-weight-bold wow fadeIn',
  'data-wow-delay': '0.5s'
}, void 0, 'Contextual Assistant'), _jsx('p', {
  className: 'mt-3 wow fadeIn',
  'data-wow-delay': '1s'
}, void 0, 'LimeChat assistants have the ability to quickly identify what your customers want from contextual information and create a tailored experience every time. Our technology helps to automate workflows and create conversational dialogues with ease. With 100s of built-in API integrations, integration with your backend systems is a breeze.')));

var _ref3 = _jsx('div', {
  className: 'col-md-6 text-left align-self-center'
}, void 0, _jsx('div', {
  className: 'ml-3 mt-3'
}, void 0, _jsx('h3', {
  className: 'font-weight-bold wow fadeIn',
  'data-wow-delay': '0.5s'
}, void 0, 'Natural Language Understanding (NLU)'), _jsx('p', {
  className: 'mt-3 wow fadeIn',
  'data-wow-delay': '1s'
}, void 0, ' LimeChat assistants have the ability to quickly identify what your customers want from contextual information and create a tailored experience every time. Our tech- -nology helps to automate workflows and create conversational dialogues with ease. With 100s of built-in API integrations, integration with your backend systems is a breeze.')));

var _ref4 = _jsx('img', {
  src: 'https://ik.imagekit.io/m52sq26n4h/nlu.svg',
  className: 'img-fluid ',
  alt: ''
});

var _ref5 = _jsx('img', {
  src: 'https://ik.imagekit.io/m52sq26n4h/continous-learning.svg',
  className: 'img-fluid ',
  alt: ''
});

var _ref6 = _jsx('div', {
  className: 'col-md-6 text-left align-self-center'
}, void 0, _jsx('div', {
  className: 'ml-3 mt-3'
}, void 0, _jsx('h3', {
  className: 'font-weight-bold wow fadeIn',
  'data-wow-delay': '0.5s'
}, void 0, 'Continous Learning'), _jsx('p', {
  className: 'mt-3 wow fadeIn',
  'data-wow-delay': '1s'
}, void 0, ' LimeChat assistants have the ability to quickly identify what your customers want from contextual information and create a tailored experience every time. Our technology helps to automate workflows and create conversational dialogues with ease. With 100s of built-in API integrations, integration with your backend systems is a breeze.')));

function AboutTech(props) {
  return _jsx(_ScrollContext2.default.Consumer, {}, void 0, function (context) {
    console.log('scroll', context.scrollPercentage);
    return _jsx('div', {}, void 0, _jsx('section', {
      className: 'finding-shap'
    }, void 0, _jsx('div', {
      className: 'container'
    }, void 0, _jsx('div', {
      className: 'row'
    }, void 0, _jsx('div', {
      className: 'col-md-6'
    }, void 0, _jsx('div', {
      className: 'fully-dedicated',
      style: { textAlign: 'center' }
    }, void 0, _ref)), _ref2))), _jsx('section', {
      className: 'finding-shap'
    }, void 0, _jsx('div', {
      className: 'container',
      style: { marginTop: 0 }
    }, void 0, _jsx('div', {
      className: 'row'
    }, void 0, _ref3, _jsx('div', {
      className: 'col-md-6'
    }, void 0, _jsx('div', {
      className: 'fully-dedicated',
      style: { textAlign: 'center' }
    }, void 0, _ref4))))), _jsx('section', {
      className: 'finding-shap'
    }, void 0, _jsx('div', {
      className: 'container',
      style: { marginTop: 0 }
    }, void 0, _jsx('div', {
      className: 'row'
    }, void 0, _jsx('div', {
      className: 'col-md-6'
    }, void 0, _jsx('div', {
      className: 'fully-dedicated',
      style: { textAlign: 'center' }
    }, void 0, _ref5)), _ref6))));
  });
}

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrollContext = _react2.default.createContext({
  scrollPercentage: 0,
  isMovingUp: true,
  isMovingDowm: false
});
exports.default = ScrollContext;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = HandleSegment;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
    img1: 'https://ik.imagekit.io/m52sq26n4h/check-circle.svg',
    header: 'ABBREVIATIONS',
    img2: 'https://ik.imagekit.io/m52sq26n4h/Rectangle__1_.svg',
    text1: 'INPUT',
    text2: 'Abbreviations <strong>r osm</strong>',
    text3: '<strong>I am gt. wbu?</strong>',
    text4: 'OUTPUT',
    text5: 'Abbreviations <strong>are awesome</strong>',
    text6: '<strong>i am great. what about you?</strong>'
}, {
    img1: 'https://ik.imagekit.io/m52sq26n4h/check-circle.svg',
    header: 'TYPOS',
    img2: 'https://ik.imagekit.io/m52sq26n4h/Rectangle__1_.svg',
    text1: 'INPUT',
    text2: '<strong>Im</strong> only human.',
    text3: 'I can make <strong>mistacks</strong>',
    text4: 'OUTPUT',
    text5: '<strong>I am</strong> only human.',
    text6: 'I can make <strong>mistakes</strong>'
}, {
    img1: 'https://ik.imagekit.io/m52sq26n4h/check-circle.svg',
    header: 'EMOJIS',
    img2: 'https://ik.imagekit.io/m52sq26n4h/Rectangle__1_.svg',
    text1: 'INPUT',
    text2: 'Emojis are cool',
    img3: 'https://ik.imagekit.io/m52sq26n4h/1F60E.svg',
    text3: 'I love',
    img4: "https://ik.imagekit.io/m52sq26n4h/2764.svg",
    text4: 'them',
    text5: 'OUTPUT',
    text6: 'Emoji are cool: <strong>Cool_emoji</strong>',
    text7: 'I love: <strong>heart_emoji</strong> them'
}];

var _ref = _jsx('div', {
    className: 'row'
}, void 0, _jsx('div', {
    className: 'col-sm-12'
}, void 0, _jsx('div', {
    className: 'title-box'
}, void 0, _jsx('h2', {
    className: 'title font-weight-bold '
}, void 0, 'We can handle it all!'))));

function HandleSegment(props) {
    return _jsx('div', {
        className: 'container page-width technology-support-handle-segment-wrapper',
        style: { marginTop: 0 }
    }, void 0, _ref, _jsx('div', {
        style: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }
    }, void 0, items.map(function (item) {
        return _jsx('div', {
            className: 'col-xs-12 col-sm-12 col-md-4 col-lg-4',
            style: {
                borderRadius: '6px',
                backgroundColor: '#EAF8DB',
                boxShadow: '0px 5px 3px rgba(0, 0, 0, 0.16), 0px 8px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease-in-out',
                marginBottom: '30px',
                maxWidth: '300px',
                margin: '30px',
                padding: '0px',
                textAlign: 'center',
                color: '#000'
            }
        }, void 0, _jsx('div', {
            className: 'future-services text-center wow slideInUp',
            'data-wow-duration': '0.5s',
            style: { visibility: 'visible', animationDuration: '0.5s' }
        }, void 0, _jsx('div', {
            style: { marginBottom: '10px' }
        }, void 0, _jsx('img', {
            src: item.img1,
            alt: ''
        })), _jsx('div', {
            style: { marginBottom: '10px', fontSize: '18px', fontWeight: '600' }
        }, void 0, item.header), _jsx('div', {
            style: { marginBottom: '10px' }
        }, void 0, _jsx('img', {
            src: item.img2,
            alt: ''
        })), _jsx('div', {
            style: { marginBottom: '10px', fontSize: '15px', fontWeight: '600' }
        }, void 0, item.text1), _jsx('div', {
            style: { marginBottom: '10px', fontSize: '15px' },
            dangerouslySetInnerHTML: { __html: item.text2 }
        }), _jsx('div', {
            style: { marginBottom: '10px', fontSize: '15px' },
            dangerouslySetInnerHTML: { __html: item.text3 }
        }), _jsx('div', {
            style: { marginBottom: '10px', fontSize: '15px', fontWeight: '600' }
        }, void 0, item.text4), _jsx('div', {
            style: { marginBottom: '10px', fontSize: '15px' },
            dangerouslySetInnerHTML: { __html: item.text5 }
        }), _jsx('div', {
            style: { marginBottom: '10px', fontSize: '15px' },
            dangerouslySetInnerHTML: { __html: item.text6 }
        })));
    })));
}

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = HowItBetter;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  details: 'This consists of the user\'s preferences, personal details, chat history ,and purchasing history',
  url: '/userprofile.svg',
  name: 'User Profile'
}, {
  details: 'This comprises of the specific task the user wants completed and its supporting details',
  url: '/usergoal.svg',
  name: 'User Goal'
}, {
  details: 'What has been said so far contains many contextual clues to clarify the user goal',
  url: '/conversationhistory.svg',
  name: 'Conversation History'
}, {
  details: 'Based on the user profile and goal, words can have different interpretations',
  url: '/worldKnowledgeicon.svg',
  name: 'World Knowledge'
}];

var _ref = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-sm-12'
}, void 0, _jsx('div', {
  className: 'title-box'
}, void 0, _jsx('h2', {
  className: 'title font-weight-bold '
}, void 0, 'How Level 3 is better than Level 2'))));

var _ref2 = _jsx('div', {
  className: 'col-10'
}, void 0, _jsx('h4', {
  className: 'tech-how-it-better-body-header'
}, void 0, 'Gracefully Handle Any Goal'), _jsx('div', {
  className: 'tech-how-it-better-body-text'
}, void 0, 'The assistant will identify and smartly complete user goals. For highly complex queries it will handle seem-less human handoff'));

var _ref3 = _jsx('div', {
  className: 'col-10'
}, void 0, _jsx('h4', {
  className: 'tech-how-it-better-body-header'
}, void 0, 'Extract Contextual Data'), _jsx('div', {
  className: 'tech-how-it-better-body-text'
}, void 0, 'Language can contain a lot of relevant structured data (e.g. dates, cities) that needs to be extracted from unstructured text.'));

var _ref4 = _jsx('div', {
  className: 'col-10'
}, void 0, _jsx('h4', {
  className: 'tech-how-it-better-body-header'
}, void 0, 'Disambiguation'), _jsx('div', {
  className: 'tech-how-it-better-body-text'
}, void 0, 'Human languages usually contain a lot of ambiguity. It is important to remove uncertainty using contextual features.'));

var _ref5 = _jsx('div', {
  className: 'col-10'
}, void 0, _jsx('h4', {
  className: 'tech-how-it-better-body-header'
}, void 0, 'Read/Write Contextual Data'), _jsx('div', {
  className: 'tech-how-it-better-body-text'
}, void 0, 'The assistant should maintain contextual data in a database via APIs, to avoid restarting user chats from scratch every time.'));

var _ref6 = _jsx('div', {
  className: 'col-10'
}, void 0, _jsx('h4', {
  className: 'tech-how-it-better-body-header'
}, void 0, 'Change of Context'), _jsx('div', {
  className: 'tech-how-it-better-body-text'
}, void 0, 'The user might at any point in time change their mind. This can affect any type of contextual data or lead to a change of user goal'));

var _ref7 = _jsx('div', {
  className: 'col-10'
}, void 0, _jsx('h4', {
  className: 'tech-how-it-better-body-header'
}, void 0, 'Business Logic'), _jsx('div', {
  className: 'tech-how-it-better-body-text'
}, void 0, 'Companies have personalised systems to integrate with, unique products to sell, and specific rules with which to address the user'));

var _ref8 = _jsx('img', {
  className: 'desktop-mobile-image-width',
  src: 'https://ik.imagekit.io/m52sq26n4h/whyislevel3techspecial.svg',
  alt: ''
});

var _ref9 = _jsx('img', {
  className: 'desktop-mobile-image-width',
  src: 'https://ik.imagekit.io/m52sq26n4h/Chat_breakdwon.svg',
  alt: ''
});

function HowItBetter(props) {
  return _jsx(_react2.default.Fragment, {}, void 0, _jsx('div', {
    className: 'container',
    style: { marginTop: '30px' }
  }, void 0, _ref, _jsx('div', {
    className: 'row tech-how-it-better-body-wrapper'
  }, void 0, _jsx('div', {
    className: 'col-12 col-sm-12 col-md-6 col-lg-6 tech-how-it-better-order-1'
  }, void 0, _jsx('div', {
    className: 'row pb-5'
  }, void 0, _jsx('div', {
    className: 'col-2 tech-how-it-better-number ',
    style: { color: '#7ECB20', opacity: '0.5', fontSize: '118px',
      fontWeight: 600 }
  }, void 0, '1'), _ref2)), _jsx('div', {
    className: 'col-12 col-sm-12 col-md-6 col-lg-6 tech-how-it-better-order-4'
  }, void 0, _jsx('div', {
    className: 'row pb-5'
  }, void 0, _jsx('div', {
    className: 'col-2 tech-how-it-better-number ',
    style: { color: '#7ECB20', opacity: '0.5', fontSize: '118px',
      fontWeight: 600 }
  }, void 0, '4'), _ref3)), _jsx('div', {
    className: 'col-12 col-sm-12 col-md-6 col-lg-6 tech-how-it-better-order-2'
  }, void 0, _jsx('div', {
    className: 'row pb-5'
  }, void 0, _jsx('div', {
    className: 'col-2 tech-how-it-better-number ',
    style: { color: '#7ECB20', opacity: '0.5', fontSize: '118px',
      fontWeight: 600 }
  }, void 0, '2'), _ref4)), _jsx('div', {
    className: 'col-12 col-sm-12 col-md-6 col-lg-6 tech-how-it-better-order-5'
  }, void 0, _jsx('div', {
    className: 'row pb-5'
  }, void 0, _jsx('div', {
    className: 'col-2 tech-how-it-better-number ',
    style: { color: '#7ECB20', opacity: '0.5', fontSize: '118px',
      fontWeight: 600 }
  }, void 0, '5'), _ref5)), _jsx('div', {
    className: 'col-12 col-sm-12 col-md-6 col-lg-6 tech-how-it-better-order-3'
  }, void 0, _jsx('div', {
    className: 'row pb-5'
  }, void 0, _jsx('div', {
    className: 'col-2 tech-how-it-better-number ',
    style: { color: '#7ECB20', opacity: '0.5', fontSize: '118px',
      fontWeight: 600 }
  }, void 0, '3'), _ref6)), _jsx('div', {
    className: 'col-12 col-sm-12 col-md-6 col-lg-6 tech-how-it-better-order-6'
  }, void 0, _jsx('div', {
    className: 'row pb-5'
  }, void 0, _jsx('div', {
    className: 'col-2 tech-how-it-better-number ',
    style: { color: '#7ECB20', opacity: '0.5', fontSize: '118px',
      fontWeight: 600 }
  }, void 0, '6'), _ref7)), _jsx('div', {
    className: 'col-lg-12 ',
    style: { textAlign: 'center', marginTop: '20px', marginBottom: '20px' }
  }, void 0, _ref8)), _jsx('div', {
    className: 'row'
  }, void 0, _jsx('div', {
    className: 'col-sm-12 '
  }, void 0, _jsx('div', {
    className: 'title-box'
  }, void 0, _jsx('h2', {
    className: 'title font-weight-bold ',
    style: { paddingTop: '90px' }
  }, void 0, 'Chat Breakdown'))), _jsx('div', {
    className: 'col-sm-12',
    style: { textAlign: 'center', marginTop: '20px', marginBottom: '20px' }
  }, void 0, _jsx('div', {
    className: 'future-services text-center wow slideInUp animated',
    'data-wow-duration': '0.5s',
    style: { visibility: 'visible', animationDuration: '0.5s' }
  }, void 0, _ref9)))));
}

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Banner = __webpack_require__(119);

var _Banner2 = _interopRequireDefault(_Banner);

var _Level3Chatbot = __webpack_require__(120);

var _Level3Chatbot2 = _interopRequireDefault(_Level3Chatbot);

var _AboutTech = __webpack_require__(121);

var _AboutTech2 = _interopRequireDefault(_AboutTech);

var _HandleSegment = __webpack_require__(123);

var _HandleSegment2 = _interopRequireDefault(_HandleSegment);

var _HowItBetter = __webpack_require__(124);

var _HowItBetter2 = _interopRequireDefault(_HowItBetter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_AboutTech2.default, {});

var _ref2 = _jsx(_Level3Chatbot2.default, {});

var _ref3 = _jsx(_HowItBetter2.default, {});

var _ref4 = _jsx(_HandleSegment2.default, {});

var TechnologySupport = function (_Component) {
    _inherits(TechnologySupport, _Component);

    function TechnologySupport() {
        _classCallCheck(this, TechnologySupport);

        var _this = _possibleConstructorReturn(this, (TechnologySupport.__proto__ || Object.getPrototypeOf(TechnologySupport)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(TechnologySupport, [{
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
                className: "wow fadeIn",
                "data-wow-delay": "0.5s",
                style: { padding: 0 }
            }, void 0, _ref), _jsx("section", {
                className: "wow slideInLeft",
                "data-wow-delay": "0.5s",
                style: { padding: '1px 0' }
            }, void 0, _ref2), _jsx("section", {
                className: "wow slideInRight",
                "data-wow-delay": "0.5s",
                style: { padding: '1px 0' }
            }, void 0, _ref3), _jsx("div", {
                style: { display: 'inline-flex', backgroundColor: '#fff', width: '100%' }
            }, void 0, _ref4));
        }
    }]);

    return TechnologySupport;
}(_react.Component);

exports.default = TechnologySupport;

/***/ })

};;