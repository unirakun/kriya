'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _inputStyles = require('../../../src/input/input.styles.scss');

var _inputStyles2 = _interopRequireDefault(_inputStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Field = function Field(_ref) {
  var input = _ref.input,
      placeholder = _ref.placeholder,
      type = _ref.type,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      submitFailed = _ref$meta.submitFailed,
      rest = _objectWithoutProperties(_ref, ['input', 'placeholder', 'type', 'meta']);

  var classes = (0, _classnames3.default)(_inputStyles2.default.field, _defineProperty({}, _inputStyles2.default.error, (touched || submitFailed) && error));

  return _react2.default.createElement('input', _extends({ className: classes }, input, { placeholder: placeholder, type: type }, rest));
};

Field.propTypes = {
  input: _propTypes2.default.object.isRequired,
  placeholder: _propTypes2.default.string,
  type: _propTypes2.default.string.isRequired,
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool,
    error: _propTypes2.default.string,
    submitFailed: _propTypes2.default.bool
  }).isRequired
};

Field.defaultProps = {
  placeholder: undefined
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Field);