'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = require('./tabs.actions');

Object.keys(_tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tabs[key];
    }
  });
});

var _tabs2 = require('./tabs.selectors');

Object.keys(_tabs2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tabs2[key];
    }
  });
});

var _tabs3 = require('./tabs');

var _tabs4 = _interopRequireDefault(_tabs3);

var actions = _interopRequireWildcard(_tabs);

var selectors = _interopRequireWildcard(_tabs2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_tabs4.default, actions, selectors);

exports.default = _tabs4.default;