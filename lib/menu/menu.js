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

var _menuStyles = require('../../src/menu/menu.styles.scss');

var _menuStyles2 = _interopRequireDefault(_menuStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      header = _ref.header,
      footer = _ref.footer,
      onHeaderClick = _ref.onHeaderClick,
      onFooterClick = _ref.onFooterClick;

  var classes = (0, _classnames2.default)(_menuStyles2.default.menu, className);

  return _react2.default.createElement(
    'div',
    { style: style, className: classes },
    header && _react2.default.createElement(
      'div',
      { className: _menuStyles2.default.header, onClick: onHeaderClick },
      header
    ),
    _react2.default.createElement('div', { className: _menuStyles2.default.sep }),
    _react2.default.createElement(
      'div',
      { className: _menuStyles2.default.items },
      children
    ),
    footer && _react2.default.createElement(
      'div',
      { className: _menuStyles2.default.footer, onClick: onFooterClick },
      footer
    )
  );
};

Menu.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  header: _propTypes2.default.node,
  footer: _propTypes2.default.node,
  onFooterClick: _propTypes2.default.func.isRequired,
  onHeaderClick: _propTypes2.default.func.isRequired
};

Menu.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  header: undefined,
  footer: undefined
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Menu);