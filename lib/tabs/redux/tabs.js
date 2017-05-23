'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAction = exports.initState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _tabs = require('./tabs.actions');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initState = exports.initState = { data: {}, keys: [], activated: undefined };
var initAction = exports.initAction = { type: 'UNKNOWN' };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initAction,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _tabs.ADD_TAB:
      return _extends({}, state, {
        keys: [].concat(_toConsumableArray(state.keys), [payload.code]),
        data: _extends({}, state.data, _defineProperty({}, payload.code, payload))
      });
    case _tabs.ACTIVATE_TAB:
      return _extends({}, state, { activated: payload });
    case _tabs.RESET_TABS:
      return initState;
    default:
      return state;
  }
};