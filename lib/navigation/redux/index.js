'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navigation = require('./navigation.actions');

Object.keys(_navigation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _navigation[key];
    }
  });
});

var _navigation2 = require('./navigation.selectors');

Object.keys(_navigation2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _navigation2[key];
    }
  });
});

var _navigation3 = require('./navigation');

var _navigation4 = _interopRequireDefault(_navigation3);

var actions = _interopRequireWildcard(_navigation);

var selectors = _interopRequireWildcard(_navigation2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_navigation4.default, actions, selectors);

exports.default = _navigation4.default;