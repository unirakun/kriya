'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAction = exports.initState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _card = require('./card.actions');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initState = exports.initState = {};
var initAction = exports.initAction = { type: 'UNKOWN' };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initAction,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _card.OPEN:
      return _extends({}, state, _defineProperty({}, payload, true));
    case _card.CLOSE:
      return _extends({}, state, _defineProperty({}, payload, false));
    case _card.TOGGLE:
      return _extends({}, state, _defineProperty({}, payload, !state[payload]));
    case _card.OPEN_ALL:
      return Object.keys(state).reduce(function (acc, next) {
        return _extends({}, acc, _defineProperty({}, next, true));
      }, {});
    case _card.CLOSE_ALL:
      return Object.keys(state).reduce(function (acc, next) {
        return _extends({}, acc, _defineProperty({}, next, false));
      }, {});
    default:
      return state;
  }
};