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

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _itemStyles = require('../../../src/menu/item/item.styles.scss');

var _itemStyles2 = _interopRequireDefault(_itemStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      name = _ref.name;

  var classes = (0, _classnames2.default)(_itemStyles2.default.item, className);

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
  name: _propTypes2.default.string
};

Item.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  name: undefined
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Item);