'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _recompose = require('recompose');

var _numberStyles = require('../../src/number/number.styles.scss');

var _numberStyles2 = _interopRequireDefault(_numberStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Number = function Number(_ref) {
  var _classnames;

  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      primary = _ref.primary,
      secondary = _ref.secondary,
      reverse = _ref.reverse,
      large = _ref.large,
      map = _ref.map;

  var classes = (0, _classnames3.default)(_numberStyles2.default.number, className, (_classnames = {}, _defineProperty(_classnames, _numberStyles2.default.map, map), _defineProperty(_classnames, _numberStyles2.default.primary, primary && !secondary), _defineProperty(_classnames, _numberStyles2.default.secondary, secondary), _defineProperty(_classnames, _numberStyles2.default.reverse, reverse), _defineProperty(_classnames, _numberStyles2.default.large, large), _classnames));

  return _react2.default.createElement(
    'div',
    { style: style, className: classes },
    children
  );
};

Number.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  primary: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  large: _react.PropTypes.bool,
  map: _react.PropTypes.bool,
  reverse: _react.PropTypes.bool
};

Number.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  primary: true,
  secondary: false,
  large: false,
  reverse: false,
  map: false
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Number);