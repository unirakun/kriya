'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = require('./tabs.container');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabs).default;
  }
});

var _tab = require('./tab');

Object.defineProperty(exports, 'Tab', {
  enumerable: true,
  get: function get() {
    return _tab.Tab;
  }
});

var _redux = require('./redux');

Object.keys(_redux).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _redux[key];
    }
  });
});
Object.defineProperty(exports, 'reducer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_redux).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }