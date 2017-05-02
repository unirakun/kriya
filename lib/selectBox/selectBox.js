'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = require('recompose');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _selectBoxStyles = require('../../src/selectBox/selectBox.styles.scss');

var _selectBoxStyles2 = _interopRequireDefault(_selectBoxStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SelectBox = function SelectBox(_ref) {
  var className = _ref.className,
      style = _ref.style,
      name = _ref.name,
      label = _ref.label,
      required = _ref.required,
      selectProps = _objectWithoutProperties(_ref, ['className', 'style', 'name', 'label', 'required']);

  var classes = (0, _classnames2.default)(_selectBoxStyles2.default.select, className);

  return _react2.default.createElement(
    'div',
    { className: classes, style: style },
    label && _react2.default.createElement(
      'label',
      { htmlFor: name },
      label,
      required && '*'
    ),
    _react2.default.createElement(_reactSelect2.default, _extends({
      simpleValue: true
    }, selectProps))
  );
};

SelectBox.propTypes = {
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  name: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    value: _react.PropTypes.string,
    label: _react.PropTypes.string
  })),
  onChange: _react.PropTypes.func
};

SelectBox.defaultProps = {
  label: undefined,
  value: undefined,
  required: false,
  className: '',
  style: {},
  options: [],
  onChange: undefined
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(SelectBox);