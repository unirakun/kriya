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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }