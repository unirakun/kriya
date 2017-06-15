'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAction = exports.initState = undefined;

var _navigation = require('./navigation.actions');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initState = exports.initState = [];
var initAction = exports.initAction = { type: 'UNKNOWN' };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initAction,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _navigation.ADD_STEP:
      return [].concat(_toConsumableArray(state), [payload]);
    case _navigation.RESET_STEPS:
      return initState;
    default:
      return state;
  }
};