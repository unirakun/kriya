import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import Select from 'react-select'
import styles from '../../src/selectBox/selectBox.styles.scss'

const SelectBox = ({ className, style, name, label, required, ...selectProps }) => {
  const classes = classnames(
    styles.select,
    className,
  )

  return (
    <div className={classes} style={style}>
      {label && <label htmlFor={name}>{label}{required && '*'}</label>}
      <Select
        simpleValue
        {...selectProps}
      />
    </div>
  )
}

SelectBox.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  onChange: PropTypes.func,
}

SelectBox.defaultProps = {
  label: undefined,
  value: undefined,
  required: false,
  className: '',
  style: {},
  options: [],
  onChange: undefined,
}

export default onlyUpdateForPropTypes(SelectBox)
