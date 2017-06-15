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

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _itemStyles = require('../../../src/menu/item/item.styles.scss');

var _itemStyles2 = _interopRequireDefault(_itemStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Item = function Item(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      name = _ref.name,
      selected = _ref.selected;

  var classes = (0, _classnames3.default)(_itemStyles2.default.item, className, _defineProperty({}, _itemStyles2.default.selected, selected));

  return _react2.default.createElement(
    _button2.default,
    { style: style, className: classes, large: true, name: 'MENU-ITEM-' + name },
    children
  );
};

Item.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  name: _propTypes2.default.string,
  selected: _propTypes2.default.bool
};

Item.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  name: undefined,
  selected: false
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Item);