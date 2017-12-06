'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bottomSheets = require('../bottomSheets.container');

var _bottomSheets2 = _interopRequireDefault(_bottomSheets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  return function (Component) {
    return function (props) {
      return _react2.default.createElement(
        _bottomSheets2.default,
        config,
        _react2.default.createElement(Component, props)
      );
    };
  };
};