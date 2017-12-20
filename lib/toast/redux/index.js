'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toast = require('./toast.actions');

Object.keys(_toast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toast[key];
    }
  });
});

var _toast2 = require('./toast.selectors');

Object.keys(_toast2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toast2[key];
    }
  });
});

var _toast3 = require('./toast');

var _toast4 = _interopRequireDefault(_toast3);

var actions = _interopRequireWildcard(_toast);

var selectors = _interopRequireWildcard(_toast2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_toast4.default, actions, selectors);

exports.default = _toast4.default;