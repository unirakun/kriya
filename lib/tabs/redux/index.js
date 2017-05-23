'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = require('./tabs');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabs).default;
  }
});

var _tabs2 = require('./tabs.actions');

Object.keys(_tabs2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tabs2[key];
    }
  });
});

var _tabs3 = require('./tabs.selectors');

Object.keys(_tabs3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tabs3[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }