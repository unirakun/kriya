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

var _recompose = require('recompose');

var _tooltipStyles = require('../../src/tooltip/tooltip.styles.scss');

var _tooltipStyles2 = _interopRequireDefault(_tooltipStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tooltip = function Tooltip(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      show = _ref.show;

  var classes = (0, _classnames3.default)(_tooltipStyles2.default.tooltip, className, _defineProperty({}, _tooltipStyles2.default.show, show));

  return _react2.default.createElement(
    'div',
    { style: style, className: classes },
    children
  );
};

Tooltip.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  show: _propTypes2.default.bool
};

Tooltip.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  show: false
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Tooltip);