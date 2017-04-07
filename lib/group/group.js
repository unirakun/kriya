'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _recompose = require('recompose');

var _groupStyles = require('../../src/group/group.styles.scss');

var _groupStyles2 = _interopRequireDefault(_groupStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Group = function Group(_ref) {
  var _classnames;

  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      vertical = _ref.vertical;

  var classes = (0, _classnames3.default)(_groupStyles2.default.group, className, (_classnames = {}, _defineProperty(_classnames, _groupStyles2.default.vertical, vertical), _defineProperty(_classnames, _groupStyles2.default.horizontal, !vertical), _classnames));
  return _react2.default.createElement(
    'div',
    { style: style, className: classes },
    children
  );
};

Group.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  vertical: _react.PropTypes.bool
};

Group.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  vertical: false
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Group);