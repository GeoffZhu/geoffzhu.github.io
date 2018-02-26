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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
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
__vue_options__.__file = "/front-end/weex-learn/todo-list/src/add.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-750a1304"
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
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrp": {
    "flexDirection": "column",
    "backgroundColor": "#f0efe9"
  },
  "form-item": {
    "flexDirection": "row",
    "paddingLeft": "30",
    "paddingRight": "30",
    "marginTop": "40"
  },
  "input": {
    "flex": 1,
    "fontSize": "28",
    "backgroundColor": "rgba(0,0,0,0)",
    "color": "#3e434f"
  },
  "textarea": {
    "flex": 1,
    "fontSize": "26",
    "backgroundColor": "rgba(0,0,0,0)",
    "color": "#3e434f"
  },
  "b-btn-wrp": {
    "position": "absolute",
    "bottom": "60",
    "left": "75",
    "width": "600",
    "height": "80",
    "backgroundColor": "#50e3a4",
    "flexDirection": "row",
    "alignItems": "center",
    "borderRadius": "12"
  },
  "b-btn": {
    "flex": 1,
    "textAlign": "center",
    "fontSize": "28",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navbar = __webpack_require__(0);

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = weex.requireModule('storage'); //
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

var navigator = weex.requireModule('navigator');

exports.default = {
  name: 'add',
  components: { navbar: _navbar2.default },
  data: function data() {
    return {
      name: '',
      desc: ''
    };
  },

  methods: {
    onAdd: function onAdd() {
      var _this = this;

      var todoEvents = void 0;
      storage.getItem('todoEvents', function (e) {
        if (e.result === 'success') {
          todoEvents = JSON.parse(e.data);
        } else {
          todoEvents = [];
        }
        todoEvents.push({
          name: _this.name,
          desc: _this.desc
        });
        storage.setItem('todoEvents', JSON.stringify(todoEvents), function (e) {
          if (e.result === 'success') {
            navigator.pop({
              animated: 'true'
            });
          }
        });
      });
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrp"]
  }, [_c('navbar', {
    attrs: {
      "title": "添加事件"
    }
  }), _c('div', {
    staticClass: ["form-item"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入事件名称",
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        _vm.name = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["form-item"]
  }, [_c('textarea', {
    staticClass: ["textarea"],
    attrs: {
      "type": "text",
      "placeholder": "请输入事件内容",
      "value": (_vm.desc)
    },
    on: {
      "input": function($event) {
        _vm.desc = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["b-btn-wrp"]
  }, [_c('text', {
    staticClass: ["b-btn"],
    on: {
      "click": _vm.onAdd
    }
  }, [_vm._v("完成")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);