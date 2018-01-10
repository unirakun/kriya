'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = require('recompose');

var _buttonStyles = require('../../../src/toast/button/button.styles.scss');

var _buttonStyles2 = _interopRequireDefault(_buttonStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var style = _ref.style,
      className = _ref.className,
      text = _ref.text,
      onClick = _ref.onClick,
      type = _ref.type;

  if (!text) return null;
  var classes = (0, _classnames2.default)(_buttonStyles2.default.button, _buttonStyles2.default[type], className);
  return _react2.default.createElement(
    'button',
    { style: style, className: classes, onClick: onClick },
    text
  );
};

Button.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  text: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(['default', 'success', 'warning', 'error'])
};

Button.defaultProps = {
  style: {},
  className: '',
  text: '',
  onClick: undefined,
  type: 'default'
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Button);