import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import Select from 'kriya-select'
import Checkbox from './checkbox'
import KriyaField from './field'
import styles from '../../src/input/input.styles.scss'

const getComponent = (type) => {
  switch (type) {
    case 'select': return 'select'
    case 'textarea': return 'textarea'
    case 'checkbox': return Checkbox
    default: return KriyaField
  }
}

const validateRequired = requiredMessage => value => (value ? undefined : requiredMessage || 'required')

const types = [
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'search',
  'select',
  'selectbox',
  'tel',
  'text',
  'textarea',
  'time',
  'url',
  'week',
]

const Input = ({
  className, style,
  type, name, label,
  placeholder, disabled,
  required, options, value, hiddenLabel,
  asynch, creatable, loadOptions,
  error, requiredMessage,
  ...selectboxProps
 }) => {
  const classes = classnames(
    styles.input,
    {
      [styles.showLabel]: !hiddenLabel,
    },
    styles[`type-${type}`],
    className,
  )

  const commonProps = { name, placeholder, disabled }

  let SelectComponent = Select
  if (asynch) SelectComponent = Select.Async
  if (creatable) SelectComponent = Select.Creatable

  const select = (
    <SelectComponent
      value={value}
      options={options}
      loadOptions={loadOptions}
      className={classnames({ [styles.error]: !!error })}
      {...commonProps}
      {...selectboxProps}
    />
  )

  const validate = []
  if (required) validate.push(validateRequired(requiredMessage))
  const field = (
    <Field
      className={classnames({ [styles.error]: !!error, [styles.field]: type !== 'checkbox' })}
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
      {label && <label htmlFor={name}>
        {label}{required && <div className={styles.mandatory}>&nbsp;*</div>}
      </label>}
      {type === 'selectbox' ? select : field}
      {type === 'select' && <i className={classnames(styles.arrow, 'mdv-expand_more')} />}
      <div className={styles.errorMsg}>{error}</div>
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  hiddenLabel: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
  ]),
  asynch: PropTypes.bool,
  creatable: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.oneOf(types),
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
  requiredMessage: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  label: undefined,
  value: undefined,
  asynch: false,
  hiddenLabel: false,
  creatable: false,
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
  requiredMessage: '',
}

export default onlyUpdateForPropTypes(Input)
