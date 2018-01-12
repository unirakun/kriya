'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAction = exports.initState = undefined;

var _toast = require('./toast.actions');

var initState = exports.initState = {};
var initAction = exports.initAction = { type: 'UNKNOWN' };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initAction,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _toast.CREATE_TOAST:
      return payload;
    case _toast.REMOVE_TOAST:
      return initState;
    default:
      return state;
  }
};