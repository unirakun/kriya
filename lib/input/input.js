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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _recompose = require('recompose');

var _kriyaSelect = require('kriya-select');

var _kriyaSelect2 = _interopRequireDefault(_kriyaSelect);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

var _inputStyles = require('../../src/input/input.styles.scss');

var _inputStyles2 = _interopRequireDefault(_inputStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getComponent = function getComponent(type) {
  switch (type) {
    case 'select':
      return 'select';
    case 'textarea':
      return 'textarea';
    case 'checkbox':
      return _checkbox2.default;
    default:
      return _field2.default;
  }
};

var validateRequired = function validateRequired(value) {
  return value ? undefined : 'required';
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
      value = _ref.value,
      asynch = _ref.asynch,
      loadOptions = _ref.loadOptions,
      error = _ref.error,
      selectboxProps = _objectWithoutProperties(_ref, ['className', 'style', 'type', 'name', 'label', 'placeholder', 'disabled', 'required', 'options', 'value', 'asynch', 'loadOptions', 'error']);

  var classes = (0, _classnames3.default)(_inputStyles2.default.input, _inputStyles2.default['type-' + type], className);

  var commonProps = { name: name, placeholder: placeholder, disabled: disabled };

  var SelectComponent = asynch ? _kriyaSelect2.default.Async : _kriyaSelect2.default;
  var select = _react2.default.createElement(SelectComponent, _extends({
    value: value,
    options: options,
    loadOptions: loadOptions,
    className: (0, _classnames3.default)(_defineProperty({}, _inputStyles2.default.error, !!error))
  }, commonProps, selectboxProps));

  var validate = [];
  if (required) validate.push(validateRequired);
  var field = _react2.default.createElement(
    _reduxForm.Field,
    _extends({
      className: type === 'checkbox' ? '' : _inputStyles2.default.field,
      component: getComponent(type)
    }, commonProps, {
      validate: validate,
      type: type
    }),
    type === 'select' ? options.map(function (o) {
      return _react2.default.createElement(
        'option',
        { key: o.value, value: o.value },
        o.label
      );
    }) : null
  );

  return _react2.default.createElement(
    'div',
    { className: classes, style: style },
    label && _react2.default.createElement(
      'label',
      { htmlFor: name },
      label,
      required && '*'
    ),
    type === 'selectbox' ? select : field,
    type === 'select' && _react2.default.createElement('i', { className: (0, _classnames3.default)(_inputStyles2.default.arrow, 'mdv-expand_more') })
  );
};

Input.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  asynch: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['input', 'checkbox', 'textarea', 'radio', 'select', 'selectbox', 'number', 'date']),
  disabled: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    label: _propTypes2.default.string
  })),
  onChange: _propTypes2.default.func,
  onInputChange: _propTypes2.default.func,
  loadOptions: _propTypes2.default.func,
  error: _propTypes2.default.any
};

Input.defaultProps = {
  type: 'input',
  label: undefined,
  value: undefined,
  asynch: false,
  disabled: false,
  required: false,
  placeholder: '',
  className: '',
  style: {},
  options: [],
  onChange: undefined,
  onInputChange: undefined,
  loadOptions: undefined,
  error: false
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Input);