'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _recompose = require('recompose');

var _iconStyles = require('../../src/icon/icon.styles.scss');

var _iconStyles2 = _interopRequireDefault(_iconStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var labelFactory = function labelFactory(htmlFor) {
  return function (label) {
    return _react2.default.createElement(
      'label',
      { htmlFor: htmlFor },
      label
    );
  };
};

var Icon = function Icon(_ref) {
  var _classnames;

  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      labelLeft = _ref.labelLeft,
      labelRight = _ref.labelRight,
      primary = _ref.primary,
      secondary = _ref.secondary,
      disabled = _ref.disabled,
      prefix = _ref.prefix,
      noColor = _ref.noColor;

  var classes = (0, _classnames3.default)(_iconStyles2.default.icon, className, (_classnames = {}, _defineProperty(_classnames, _iconStyles2.default.primary, primary), _defineProperty(_classnames, _iconStyles2.default.secondary, secondary), _defineProperty(_classnames, _iconStyles2.default.disabled, disabled), _defineProperty(_classnames, _iconStyles2.default.colored, !noColor), _classnames));

  var iconCode = '' + prefix + children;

  // Icon from icomoon have different path (up to 13) to handle colors
  // We inject all of them
  var iconComponent = _react2.default.createElement(
    'i',
    { name: iconCode, className: iconCode },
    Array.from(new Array(13), function (x, i) {
      return i + 1;
    }).map(function (i) {
      return _react2.default.createElement('span', { key: i, className: 'path' + i });
    })
  );

  // Label component
  var label = labelFactory(iconCode);

  // Final component
  return _react2.default.createElement(
    'div',
    { style: style, className: classes },
    labelLeft && label(labelLeft),
    iconComponent,
    labelRight && label(labelRight)
  );
};

Icon.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  children: _react.PropTypes.string.isRequired,
  labelLeft: _react.PropTypes.string,
  labelRight: _react.PropTypes.string,
  prefix: _react.PropTypes.string.isRequired,
  primary: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  noColor: _react.PropTypes.bool
};

Icon.defaultProps = {
  style: {},
  className: '',
  labelRight: undefined,
  labelLeft: undefined,
  primary: false,
  secondary: false,
  disabled: false,
  noColor: false
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Icon);