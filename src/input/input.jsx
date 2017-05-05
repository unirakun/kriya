import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import Select from 'react-select'
import styles from '../../src/input/input.styles.scss'

const getComponent = (type) => {
  switch (type) {
    case 'select':
      return 'select'
    case 'textarea':
      return 'textarea'
    default:
      return 'input'
  }
}

const Input = ({
                 className, style,
                 type, name,
                 label, placeholder,
                 disabled,
                 required,
                 options,
                 ...restProps
               }) => {
  const classes = classnames(
    styles.input,
    styles[`type-${type}`],
    className,
  )

  // Field from redux-form
  const Field = (
    <Field
      className={styles.field}
      name={name}
      component={getComponent(type)}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
    >
      {type === 'select' ?
        options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)
        : null
      }
    </Field>
  )

  // SelectBox from kriya-select
  const SelectBox = (
    <Select
      simpleValue
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      options={options}
      {...restProps}
    />
  )

  return (
    <div className={classes} style={style}>
      {label && <label htmlFor={name}>{label}{required && '*'}</label>}
      {
        type === 'selectbox' ? SelectBox : Field
      }
      {
        type === 'select' &&
        <i className={classnames(styles.arrow, 'mdv-expand_more')} />
      }
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(['input', 'checkbox', 'textarea', 'radio', 'select', 'selectbox', 'number']),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
}

Input.defaultProps = {
  type: 'input',
  label: undefined,
  disabled: false,
  required: false,
  placeholder: '',
  className: '',
  style: {},
  options: [],
}

export default onlyUpdateForPropTypes(Input)
