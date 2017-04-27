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

var _reactImgFallback = require('react-img-fallback');

var _reactImgFallback2 = _interopRequireDefault(_reactImgFallback);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _avatarStyles = require('../../src/avatar/avatar.styles.scss');

var _avatarStyles2 = _interopRequireDefault(_avatarStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(_ref) {
  var style = _ref.style,
      className = _ref.className,
      picture = _ref.picture,
      isMale = _ref.isMale,
      onClick = _ref.onClick;

  var classes = (0, _classnames2.default)(_avatarStyles2.default.avatar, className);

  var fallback = _react2.default.createElement(
    _icon2.default,
    { className: _avatarStyles2.default.icon, primary: true },
    'avatar_' + (isMale ? 'man' : 'woman')
  );

  return _react2.default.createElement(
    'div',
    { style: style, className: classes, onClick: onClick },
    _react2.default.createElement(_reactImgFallback2.default, {
      className: _avatarStyles2.default.img,
      src: picture,
      alt: 'avatar',
      fallback: fallback
    })
  );
};

Avatar.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  picture: _propTypes2.default.string,
  isMale: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

Avatar.defaultProps = {
  style: {},
  className: '',
  picture: undefined,
  isMale: false,
  onClick: undefined
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Avatar);