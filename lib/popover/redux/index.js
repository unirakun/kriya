'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popover = require('./popover.actions');

Object.keys(_popover).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _popover[key];
    }
  });
});

var _popover2 = require('./popover.selectors');

Object.keys(_popover2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _popover2[key];
    }
  });
});

var _popover3 = require('./popover');

var _popover4 = _interopRequireDefault(_popover3);

var actions = _interopRequireWildcard(_popover);

var selectors = _interopRequireWildcard(_popover2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_popover4.default, actions, selectors);

exports.default = _popover4.default;