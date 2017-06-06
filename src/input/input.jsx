import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import Select from 'kriya-select'
import Checkbox from './checkbox'
import KriyaField from './field'
import Datepicker from './datepicker'
import styles from '../../src/input/input.styles.scss'

const getComponent = (type) => {
  switch (type) {
    case 'select': return 'select'
    case 'textarea': return 'textarea'
    case 'checkbox': return Checkbox
    case 'date': return Datepicker
    default: return KriyaField
  }
}

const validateRequired = value => (value ? undefined : 'required')

const Input = ({
   className, style,
   type, name, label,
   placeholder, disabled,
   required, options, value,
   asynch, loadOptions,
   error,
   ...selectboxProps
 }) => {
  const classes = classnames(
    styles.input,
    styles[`type-${type}`],
    className,
  )

  const commonProps = { name, placeholder, disabled }

  const SelectComponent = asynch ? Select.Async : Select
  const select = (
    <SelectComponent
      simpleValue
      value={value}
      options={options}
      loadOptions={loadOptions}
      className={classnames({ [styles.error]: !!error })}
      {...commonProps}
      {...selectboxProps}
    />
  )

  const validate = []
  if (required) validate.push(validateRequired)
  const field = (
    <Field
      className={type === 'checkbox' ? '' : styles.field}
      component={getComponent(type)}
      {...commonProps}
      validate={validate}
      type={type}
    >
      {type === 'select' ? options.map(o => <option key={o.value} value={o.value}>{o.label}</option>) : null}
    </Field>
  )

  return (
    <div className={classes} style={style}>
      {label && <label htmlFor={name}>{label}{required && '*'}</label>}
      {type === 'selectbox' ? select : field}
      {type === 'select' && <i className={classnames(styles.arrow, 'mdv-expand_more')} />}
    </div>
  )
}

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
    label: PropTypes.string,
  })),
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  loadOptions: PropTypes.func,
  error: PropTypes.any,
}

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
  error: false,
}

export default onlyUpdateForPropTypes(Input)
