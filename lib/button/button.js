'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactInk = require('react-ink');

var _reactInk2 = _interopRequireDefault(_reactInk);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _recompose = require('recompose');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _buttonStyles = require('../../src/button/button.styles.scss');

var _buttonStyles2 = _interopRequireDefault(_buttonStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = function Button(_ref) {
  var _classnames;

  var onClick = _ref.onClick,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      large = _ref.large,
      primary = _ref.primary,
      secondary = _ref.secondary,
      flat = _ref.flat,
      disabled = _ref.disabled,
      ink = _ref.ink,
      title = _ref.title,
      href = _ref.href,
      targetBlank = _ref.targetBlank,
      iconLeft = _ref.iconLeft,
      iconRight = _ref.iconRight;

  var classes = (0, _classnames3.default)(_buttonStyles2.default.button, className, (_classnames = {}, _defineProperty(_classnames, _buttonStyles2.default.primary, primary && !flat), _defineProperty(_classnames, _buttonStyles2.default.secondary, secondary && !flat), _defineProperty(_classnames, _buttonStyles2.default.disabled, disabled), _defineProperty(_classnames, _buttonStyles2.default.large, large), _defineProperty(_classnames, _buttonStyles2.default.flat, flat), _defineProperty(_classnames, _buttonStyles2.default.primaryFlat, flat && primary), _defineProperty(_classnames, _buttonStyles2.default.secondaryFlat, flat && secondary), _classnames));

  /* define props */
  var iconProps = { primary: primary, secondary: secondary, disabled: disabled };
  var linkProps = { href: href, target: targetBlank ? '_blank' : '' };
  var commonProps = {
    className: classes,
    style: style,
    disabled: disabled,
    title: title
  };

  /* content of component (Button or Link) */
  var childrenComponent = [];
  if (ink && !disabled && !flat) childrenComponent.push(_react2.default.createElement(_reactInk2.default, { key: 'ink' }));
  if (iconLeft) {
    childrenComponent.push(_react2.default.createElement(
      _icon2.default,
      _extends({ key: 'l', className: _buttonStyles2.default.iconLeft }, iconProps),
      iconLeft
    ));
  }
  if (children) childrenComponent.push(children);
  if (iconRight) {
    childrenComponent.push(_react2.default.createElement(
      _icon2.default,
      _extends({ key: 'r', className: _buttonStyles2.default.iconRight }, iconProps),
      iconRight
    ));
  }

  return !href ? _react2.default.createElement(
    'button',
    _extends({}, commonProps, { onClick: onClick }),
    childrenComponent
  ) : _react2.default.createElement(
    'a',
    _extends({}, linkProps, commonProps, { onClick: onClick }),
    childrenComponent
  );
};

Button.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  large: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  flat: _propTypes2.default.bool,
  ink: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  title: _propTypes2.default.string,
  href: _propTypes2.default.string,
  targetBlank: _propTypes2.default.bool,
  iconLeft: _propTypes2.default.string,
  iconRight: _propTypes2.default.string
};

Button.defaultProps = {
  className: '',
  style: {},
  large: false,
  primary: false,
  secondary: false,
  disabled: false,
  flat: false,
  ink: true,
  children: undefined,
  title: '',
  href: undefined,
  targetBlank: false,
  iconLeft: undefined,
  iconRight: undefined
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Button);