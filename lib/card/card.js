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

var _cardStyles = require('../../src/card/card.styles.scss');

var _cardStyles2 = _interopRequireDefault(_cardStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Card = function Card(_ref) {
  var style = _ref.style,
      className = _ref.className,
      closed = _ref.closed,
      children = _ref.children,
      closeElm = _ref.closeElm,
      onClick = _ref.onClick;

  var classes = (0, _classnames3.default)(_cardStyles2.default.card, className, _defineProperty({}, _cardStyles2.default.closed, closed));

  var enhancedChildren = children;
  if (!closeElm && children) enhancedChildren = _react2.default.cloneElement(children, { closed: closed });

  return _react2.default.createElement(
    'div',
    { style: style, className: classes, onClick: onClick },
    closed || enhancedChildren,
    closed && (closeElm || enhancedChildren)
  );
};

Card.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  closed: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  closeElm: _propTypes2.default.node,
  onClick: _propTypes2.default.func
};

Card.defaultProps = {
  style: {},
  className: '',
  closed: false,
  children: undefined,
  closeElm: undefined,
  onClick: undefined
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Card);