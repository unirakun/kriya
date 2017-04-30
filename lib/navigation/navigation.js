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

var _step = require('./step');

var _step2 = _interopRequireDefault(_step);

var _navigationStyles = require('../../src/navigation/navigation.styles.scss');

var _navigationStyles2 = _interopRequireDefault(_navigationStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children;

  var classes = (0, _classnames2.default)(_navigationStyles2.default.navigation, className);

  return _react2.default.createElement(
    'div',
    { style: style, className: classes },
    children.map(function (step, index) {
      return _react2.default.createElement(
        _step2.default,
        {
          key: index // eslint-disable-line react/no-array-index-key
          , number: index,
          last: index === children.length - 1
        },
        step
      );
    })
  );
};

Navigation.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired
};

Navigation.defaultProps = {
  style: {},
  className: ''
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Navigation);