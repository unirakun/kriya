'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = require('redux-form');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = require('recompose');

var _kriyaSelect = require('kriya-select');

var _kriyaSelect2 = _interopRequireDefault(_kriyaSelect);

var _inputStyles = require('../../src/input/input.styles.scss');

var _inputStyles2 = _interopRequireDefault(_inputStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getComponent = function getComponent(type) {
  switch (type) {
    case 'select':
      return 'select';
    case 'textarea':
      return 'textarea';
    default:
      return 'input';
  }
};

var Input = function Input(_ref) {
  var className = _ref.className,
      style = _ref.style,
      type = _ref.type,
      name = _ref.name,
      label = _ref.label,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      required = _ref.required,
      options = _ref.options,
      selectboxProps = _objectWithoutProperties(_ref, ['className', 'style', 'type', 'name', 'label', 'placeholder', 'disabled', 'required', 'options']);

  var classes = (0, _classnames2.default)(_inputStyles2.default.input, _inputStyles2.default['type-' + type], className);

  return _react2.default.createElement(
    'div',
    { className: classes, style: style },
    label && _react2.default.createElement(
      'label',
      { htmlFor: name },
      label,
      required && '*'
    ),
    type === 'selectbox' ? _react2.default.createElement(_kriyaSelect2.default, _extends({
      simpleValue: true,
      name: name,
      placeholder: placeholder,
      disabled: disabled,
      required: required,
      options: options
    }, selectboxProps)) : _react2.default.createElement(
      _reduxForm.Field,
      {
        className: _inputStyles2.default.field,
        name: name,
        component: getComponent(type),
        type: type,
        placeholder: placeholder,
        disabled: disabled,
        required: required
      },
      type === 'select' ? options.map(function (o) {
        return _react2.default.createElement(
          'option',
          { key: o.value, value: o.value },
          o.label
        );
      }) : null
    ),
    type === 'select' && _react2.default.createElement('i', { className: (0, _classnames2.default)(_inputStyles2.default.arrow, 'mdv-expand_more') })
  );
};

Input.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['input', 'checkbox', 'textarea', 'radio', 'select', 'selectbox', 'number']),
  disabled: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.string, label: _propTypes2.default.string
  })),
  onChange: _propTypes2.default.func
};

Input.defaultProps = {
  type: 'input',
  label: undefined,
  value: undefined,
  disabled: false,
  required: false,
  placeholder: '',
  className: '',
  style: {},
  options: [],
  onChange: undefined
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Input);