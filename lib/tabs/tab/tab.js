'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _reactInk = require('react-ink');

var _reactInk2 = _interopRequireDefault(_reactInk);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _tabStyles = require('../../../src/tabs/tab/tab.styles.scss');

var _tabStyles2 = _interopRequireDefault(_tabStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tab = function Tab(_ref) {
  var style = _ref.style,
      className = _ref.className,
      label = _ref.label,
      activated = _ref.activated,
      onClick = _ref.onClick;

  var classes = (0, _classnames3.default)(_tabStyles2.default.tab, className, _defineProperty({}, _tabStyles2.default.activated, activated));

  return _react2.default.createElement(
    'div',
    { style: style, className: classes, onClick: onClick },
    _react2.default.createElement(_reactInk2.default, { style: { zIndex: 2 } }),
    label,
    activated && _react2.default.createElement('div', { className: _tabStyles2.default.border })
  );
};

Tab.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  activated: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired
};

Tab.defaultProps = {
  style: {},
  className: '',
  label: '',
  activated: false
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Tab);