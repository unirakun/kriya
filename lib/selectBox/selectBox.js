'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  name: _propTypes2.default.string.isRequired,
  form: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.string,
    label: _propTypes2.default.string
  })),
  onChange: _propTypes2.default.func
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