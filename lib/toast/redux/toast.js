'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAction = exports.initState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _toast = require('./toast.actions');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initState = exports.initState = [];
var initAction = exports.initAction = { type: 'UNKNOWN' };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initAction,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _toast.OPEN_TOAST:
      return [].concat(_toConsumableArray(state), [_extends({ print: true }, payload)]);
    case _toast.CLOSE_TOAST:
      {
        return state.map(function (item, idx) {
          if (idx === 0) return _extends({}, item, { print: false });
          return item;
        });
      }
    case _toast.REMOVE_TOAST:
      {
        return [].concat(_toConsumableArray(state)).slice(1);
      }
    default:
      return state;
  }
};