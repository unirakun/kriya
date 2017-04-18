'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _stepStyles = require('../../../src/navigation/step/step.styles.scss');

var _stepStyles2 = _interopRequireDefault(_stepStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Step = function Step(_ref) {
  var _classnames;

  var className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      onClick = _ref.onClick,
      last = _ref.last;

  var classes = (0, _classnames3.default)(_stepStyles2.default.step, className, (_classnames = {}, _defineProperty(_classnames, _stepStyles2.default.last, last), _defineProperty(_classnames, _stepStyles2.default.intermediate, !last), _classnames));

  return _react2.default.createElement(
    'div',
    { style: style, className: classes },
    _react2.default.createElement(
      'button',
      { onClick: onClick },
      children
    ),
    last || _react2.default.createElement(
      'div',
      { className: _stepStyles2.default.separator },
      ' /'
    )
  );
};

Step.propTypes = {
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  children: _react.PropTypes.node.isRequired,
  onClick: _react.PropTypes.func,
  last: _react.PropTypes.bool
};

Step.defaultProps = {
  className: '',
  style: {},
  onClick: undefined,
  last: false
};

exports.default = Step;