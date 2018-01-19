'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _checkboxStyles = require('../../../src/input/checkbox/checkbox.styles.scss');

var _checkboxStyles2 = _interopRequireDefault(_checkboxStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Checkbox = function Checkbox(_ref) {
  var _classnames;

  var style = _ref.style,
      className = _ref.className,
      input = _ref.input,
      rest = _objectWithoutProperties(_ref, ['style', 'className', 'input']);

  var classes = (0, _classnames3.default)(_checkboxStyles2.default.checkbox, className, (_classnames = {}, _defineProperty(_classnames, _checkboxStyles2.default.checked, input.checked), _defineProperty(_classnames, _checkboxStyles2.default.disabled, rest.disabled), _classnames));

  var onClick = function onClick() {
    if (!rest.disabled) input.onChange(!input.checked);
  };

  return _react2.default.createElement(
    'div',
    { style: style, className: classes, onClick: onClick },
    _react2.default.createElement('div', { className: _checkboxStyles2.default.back }),
    _react2.default.createElement('div', { className: _checkboxStyles2.default.ball })
  );
};

Checkbox.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  input: _propTypes2.default.shape({
    checked: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
  }).isRequired
};

Checkbox.defaultProps = {
  style: {},
  className: '',
  input: {}
};

exports.default = Checkbox;