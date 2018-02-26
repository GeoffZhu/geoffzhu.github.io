// { "framework": "Vue"} 

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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/front-end/weex-learn/todo-list/src/component/navbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8f6e2156"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "navbar": {
    "height": "88",
    "backgroundColor": "#50e3a4",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "is-ios": {
    "height": "128",
    "paddingTop": "40"
  },
  "navbar-title": {
    "color": "#FFFFFF",
    "fontSize": "32"
  },
  "navbar-icon": {
    "color": "#FFFFFF",
    "fontSize": "36"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');

exports.default = {
  name: 'navbar',
  data: function data() {
    return {
      platform: weex.config.env.platform.toLowerCase()
    };
  },

  props: {
    showBack: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      required: true
    }
  },
  beforeCreate: function beforeCreate() {
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('http://at.alicdn.com/t/font_571013_3jfs8b3sidxwdn29.ttf')"
    });
  },

  methods: {
    onBack: function onBack() {
      navigator.pop({
        animated: 'true'
      });
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["navbar"],
    class: [_vm.platform === 'ios' ? 'is-ios' : '']
  }, [(_vm.showBack) ? _c('text', {
    staticClass: ["iconfont", "navbar-icon"],
    on: {
      "click": _vm.onBack
    }
  }, [_vm._v("")]) : _c('text', {
    staticClass: ["navbar-title"]
  }), _c('text', {
    staticClass: ["navbar-title"]
  }, [_vm._v(_vm._s(_vm.title))]), _c('text', {
    staticClass: ["navbar-title"]
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(24)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/front-end/weex-learn/todo-list/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-615d48ef"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "wrp": {
    "backgroundColor": "#f0efe9"
  },
  "title": {
    "fontSize": "24",
    "paddingTop": "20",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "paddingRight": "20",
    "color": "#3e434f"
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navbar = __webpack_require__(0);

var _navbar2 = _interopRequireDefault(_navbar);

var _tabbar = __webpack_require__(15);

var _tabbar2 = _interopRequireDefault(_tabbar);

var _eventItem = __webpack_require__(19);

var _eventItem2 = _interopRequireDefault(_eventItem);

var _utils = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var storage = weex.requireModule('storage');
var navigator = weex.requireModule('navigator');

exports.default = {
  components: { navbar: _navbar2.default, tabBar: _tabbar2.default, eventItem: _eventItem2.default },
  data: function data() {
    return {
      todoEvents: [],
      doneEvents: []
    };
  },
  created: function created() {
    if (weex.config.env.platform === 'Web') {
      this.onShow();
    }
  },

  methods: {
    onFinish: function onFinish(event, index) {
      this.todoEvents.splice(index, 1);
      this.doneEvents.push(event);
    },
    onAdd: function onAdd() {
      if (weex.config.env.platform === 'Web') {
        this.onHide();
      }
      navigator.push({
        url: (0, _utils.getEntryUrl)('add'),
        animated: 'true'
      });
    },
    onEventClick: function onEventClick(event) {
      if (weex.config.env.platform === 'Web') {
        this.onHide();
      }
      storage.setItem('curEvent', JSON.stringify(event));
      navigator.push({
        url: (0, _utils.getEntryUrl)('detail'),
        animated: 'true'
      });
    },
    onClear: function onClear() {
      this.todoEvents = [];
      this.doneEvents = [];
    },
    onHide: function onHide() {
      storage.setItem('todoEvents', JSON.stringify(this.todoEvents));
      storage.setItem('doneEvents', JSON.stringify(this.doneEvents));
    },
    onShow: function onShow() {
      var _this = this;

      storage.getItem('todoEvents', function (e) {
        if (e.result === 'success') {
          _this.todoEvents = JSON.parse(e.data);
        } else {
          _this.todoEvents = [];
        }
      });
      storage.getItem('doneEvents', function (e) {
        if (e.result === 'success') {
          _this.doneEvents = JSON.parse(e.data);
        } else {
          _this.doneEvents = [];
        }
      });
    }
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(16)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/front-end/weex-learn/todo-list/src/component/tabbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-546a14a3"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "color": "#3e434f"
  },
  "tabbar-wrp": {
    "position": "absolute",
    "bottom": 0,
    "left": 0,
    "width": "750",
    "height": "88",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "alignItems": "center",
    "borderTopWidth": "2",
    "borderColor": "#e2e2e2"
  },
  "tabbar-item": {
    "flex": 1,
    "textAlign": "center",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "tabbar-text": {
    "fontSize": "24",
    "color": "#3e434f"
  },
  "tabbar-icon": {
    "fontSize": "44"
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'tabbar',
  beforeCreate: function beforeCreate() {
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('http://at.alicdn.com/t/font_571013_3jfs8b3sidxwdn29.ttf')"
    });
  },

  methods: {
    onAdd: function onAdd() {
      this.$emit('onAdd');
    },
    onClear: function onClear() {
      this.$emit('onClear');
    }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tabbar-wrp"]
  }, [_c('div', {
    staticClass: ["tabbar-item"],
    on: {
      "click": _vm.onAdd
    }
  }, [_c('text', {
    staticClass: ["iconfont", "tabbar-icon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["tabbar-text"]
  }, [_vm._v("添加")])]), _c('div', {
    staticClass: ["tabbar-item"],
    on: {
      "click": _vm.onClear
    }
  }, [_c('text', {
    staticClass: ["iconfont", "tabbar-icon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["tabbar-text"]
  }, [_vm._v("清空")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(20)
)

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(22)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/front-end/weex-learn/todo-list/src/component/event-item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-301b542b"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "color": "#3e434f"
  },
  "event": {
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingLeft": "20",
    "paddingRight": "20",
    "height": "80"
  },
  "label": {
    "color": "#3e434f",
    "fontSize": "28"
  },
  "evnet-btn-wrp": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "btn": {
    "borderRadius": "10",
    "fontSize": "24",
    "paddingLeft": "18",
    "paddingRight": "18",
    "paddingTop": "2",
    "paddingBottom": "2",
    "backgroundColor": "#50e3a4",
    "color": "#ffffff"
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'event-item',
  props: {
    showFinishButton: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number,
      required: true
    },
    event: {
      type: Object,
      required: true
    }
  },
  beforeCreate: function beforeCreate() {
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('http://at.alicdn.com/t/font_571013_3jfs8b3sidxwdn29.ttf')"
    });
  },

  methods: {
    onFinish: function onFinish(event, index) {
      this.$emit('onClickFinishButton', event, index);
    }
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["event"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v(_vm._s(_vm.event.name))]), _c('div', {
    staticClass: ["evnet-btn-wrp"]
  }, [(_vm.showFinishButton) ? _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.onFinish(_vm.event, _vm.index)
      }
    }
  }, [_vm._v("完成")]) : _vm._e(), _c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEntryUrl = getEntryUrl;
function getEntryUrl(name) {
  if (weex.config.env.platform === 'Web') {
    return './' + name + '.html';
  } else {
    var arr = weex.config.bundleUrl.split('/');
    arr.pop();
    arr.push(name + '.js');
    return arr.join('/');
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrp"],
    on: {
      "viewappear": _vm.onShow,
      "viewdisappear": _vm.onHide
    }
  }, [_c('navbar', {
    attrs: {
      "title": "待办清单",
      "showBack": false
    }
  }), (_vm.todoEvents.length > 0) ? _c('text', {
    staticClass: ["title"]
  }, [_vm._v("待办事件")]) : _vm._e(), _c('div', {
    staticClass: ["evnets-wrp"]
  }, _vm._l((_vm.todoEvents), function(event, index) {
    return _c('event-item', {
      key: event.name,
      attrs: {
        "event": event,
        "index": index
      },
      on: {
        "onClickFinishButton": _vm.onFinish
      },
      nativeOn: {
        "click": function($event) {
          _vm.onEventClick(event)
        }
      }
    })
  })), (_vm.doneEvents.length > 0) ? _c('text', {
    staticClass: ["title"]
  }, [_vm._v("已办事件")]) : _vm._e(), _c('div', {
    staticClass: ["evnets-wrp"]
  }, _vm._l((_vm.doneEvents), function(event, index) {
    return _c('event-item', {
      key: event.name,
      attrs: {
        "event": event,
        "index": index,
        "showFinishButton": false
      },
      nativeOn: {
        "click": function($event) {
          _vm.onEventClick(event)
        }
      }
    })
  })), _c('tab-bar', {
    on: {
      "onAdd": _vm.onAdd,
      "onClear": _vm.onClear
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);