'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _recompose = require('recompose');

var _toastStyles = require('../../src/toast/toast.styles.scss');

var _toastStyles2 = _interopRequireDefault(_toastStyles);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Toast = function Toast(_ref) {
  var style = _ref.style,
      className = _ref.className,
      title = _ref.title,
      button = _ref.button,
      print = _ref.print,
      position = _ref.position,
      type = _ref.type;

  var classes = (0, _classnames3.default)(_toastStyles2.default.toast, className, _toastStyles2.default[position], _toastStyles2.default[type], _defineProperty({}, _toastStyles2.default.print, print));

  return _react2.default.createElement(
    'div',
    { style: style, className: classes },
    _react2.default.createElement(
      'span',
      { className: _toastStyles2.default.text },
      title
    ),
    button && _react2.default.createElement(_button2.default, _extends({}, button, { type: type }))
  );
};

Toast.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  print: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  button: _propTypes2.default.object,
  position: _propTypes2.default.oneOf(['top', 'bottom']),
  type: _propTypes2.default.oneOf(['', 'success', 'warning', 'error'])
};

Toast.defaultProps = {
  style: {},
  className: '',
  print: false,
  title: '',
  button: {},
  position: 'bottom',
  type: ''
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Toast);