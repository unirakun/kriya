'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tabsStyles = require('../../src/tabs/tabs.styles.scss');

var _tabsStyles2 = _interopRequireDefault(_tabsStyles);

var _tab = require('./tab');

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function Tabs(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      tabs = _ref.tabs;

  var classes = (0, _classnames2.default)(_tabsStyles2.default.tabs, className);

  return _react2.default.createElement(
    'div',
    { style: style, className: classes },
    tabs ? tabs.map(function (code) {
      return _react2.default.createElement(_tab2.default, { key: code, code: code });
    }) : children
  );
};

Tabs.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.string)
};

Tabs.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  tabs: undefined
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Tabs);