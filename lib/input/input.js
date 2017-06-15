import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import classnames from 'classnames';
import { onlyUpdateForPropTypes } from 'recompose';
import Select from 'kriya-select';
import Checkbox from './checkbox';
import KriyaField from './field';
import styles from '../../src/input/input.styles.scss';

var getComponent = function getComponent(type) {
  switch (type) {
    case 'select':
      return 'select';
    case 'textarea':
      return 'textarea';
    case 'checkbox':
      return Checkbox;
    default:
      return KriyaField;
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
      selectboxProps = babelHelpers.objectWithoutProperties(_ref, ['className', 'style', 'type', 'name', 'label', 'placeholder', 'disabled', 'required', 'options', 'value', 'asynch', 'loadOptions', 'error']);

  var classes = classnames(styles.input, styles['type-' + type], className);

  var commonProps = { name: name, placeholder: placeholder, disabled: disabled };

  var SelectComponent = asynch ? Select.Async : Select;
  var select = React.createElement(SelectComponent, babelHelpers.extends({
    simpleValue: true,
    value: value,
    options: options,
    loadOptions: loadOptions,
    className: classnames(babelHelpers.defineProperty({}, styles.error, !!error))
  }, commonProps, selectboxProps));

  var validate = [];
  if (required) validate.push(validateRequired);
  var field = React.createElement(
    Field,
    babelHelpers.extends({
      className: type === 'checkbox' ? '' : styles.field,
      component: getComponent(type)
    }, commonProps, {
      validate: validate,
      type: type
    }),
    type === 'select' ? options.map(function (o) {
      return React.createElement(
        'option',
        { key: o.value, value: o.value },
        o.label
      );
    }) : null
  );

  return React.createElement(
    'div',
    { className: classes, style: style },
    label && React.createElement(
      'label',
      { htmlFor: name },
      label,
      required && '*'
    ),
    type === 'selectbox' ? select : field,
    type === 'select' && React.createElement('i', { className: classnames(styles.arrow, 'mdv-expand_more') })
  );
};

Input.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  asynch: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(['input', 'checkbox', 'textarea', 'radio', 'select', 'selectbox', 'number']),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string
  })),
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  loadOptions: PropTypes.func,
  error: PropTypes.any
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

export default onlyUpdateForPropTypes(Input);