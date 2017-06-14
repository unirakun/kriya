'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAction = exports.initState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _popover = require('./popover.actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initState = exports.initState = {};
var initAction = exports.initAction = { type: 'UNKNOWN' };

exports.default = function () {
  var _extends2;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initAction,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _popover.OPEN_POPOVER:
      return _extends({}, state, (_extends2 = {}, _defineProperty(_extends2, payload.code, true), _defineProperty(_extends2, 'contents', payload.contents), _extends2));
    case _popover.CLOSE_POPOVER:
      return (0, _omit2.default)(state, [payload]);
    default:
      return state;
  }
};