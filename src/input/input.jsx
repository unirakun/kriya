import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/input/input.styles.scss'

const getComponent = (type) => {
  switch (type) {
    case 'select': return 'select'
    case 'textarea': return 'textarea'
    default: return 'input'
  }
}

const Input = ({
  className, style,
  type, name,
  label, placeholder,
  disabled,
  required,
  options,
}) => {
  const classes = classnames(
    styles.input,
    styles[`type-${type}`],
    className,
  )

  return (
    <div className={classes} style={style}>
      {label && <label htmlFor={name}>{label}{required && '*'}</label>}
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
          options.map(o => <option key={o.id} value={o.id}>{o.label}</option>)
          : null
        }
      </Field>
      {type === 'select' &&
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
  type: PropTypes.oneOf(['input', 'checkbox', 'textarea', 'radio', 'select', 'number']),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
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
