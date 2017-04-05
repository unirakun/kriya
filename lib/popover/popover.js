'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _recompose = require('recompose');

var _popoverStyles = require('../../src/popover/popover.styles.scss');

var _popoverStyles2 = _interopRequireDefault(_popoverStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Popover = function Popover(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      onClose = _ref.onClose,
      print = _ref.print;

  var classes = (0, _classnames3.default)(_popoverStyles2.default.popover, className, _defineProperty({}, _popoverStyles2.default.print, print));

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    _react2.default.createElement(
      'div',
      { style: style, className: classes, onClick: onClose },
      _react2.default.cloneElement(children, { print: print, onClose: onClose })
    )
  );
};

Popover.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node.isRequired,
  onClose: _react.PropTypes.func,
  print: _react.PropTypes.bool
};

Popover.defaultProps = {
  style: {},
  className: '',
  onClose: undefined,
  print: false
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Popover);