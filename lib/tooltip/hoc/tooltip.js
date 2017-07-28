'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _tooltipStyles = require('../../../src/tooltip/hoc/tooltip.styles.scss');

var _tooltipStyles2 = _interopRequireDefault(_tooltipStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    left: true,
    top: false,
    right: false,
    bottom: false,
    className: ''
  };
  return function (text) {
    return function (Component) {
      return function (props) {
        var _classnames;

        var left = config.left,
            top = config.top,
            right = config.right,
            bottom = config.bottom,
            className = config.className;

        var classes = (0, _classnames3.default)(_tooltipStyles2.default.component, className);

        var tooltipClasses = (0, _classnames3.default)(_tooltipStyles2.default.tooltip, (_classnames = {}, _defineProperty(_classnames, _tooltipStyles2.default.left, left), _defineProperty(_classnames, _tooltipStyles2.default.top, top), _defineProperty(_classnames, _tooltipStyles2.default.right, right), _defineProperty(_classnames, _tooltipStyles2.default.bottom, bottom), _classnames));

        return _react2.default.createElement(
          'div',
          { className: classes },
          _react2.default.createElement(Component, props),
          _react2.default.createElement(
            _tooltip2.default,
            _extends({ className: tooltipClasses }, config),
            text
          )
        );
      };
    };
  };
};