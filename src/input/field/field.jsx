import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import styles from '../../../src/input/input.styles.scss'

const Field = ({ input, placeholder, type, meta: { touched, error, submitFailed } }) => {
  const classes = classnames(
    styles.field,
    {
      [styles.error]: (touched || submitFailed) && error,
    },
  )

  return (
    <input className={classes} {...input} placeholder={placeholder} type={type} />
  )
}

Field.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    submitFailed: PropTypes.bool,
  }).isRequired,
}

Field.defaultProps = {
  placeholder: undefined,
}

export default onlyUpdateForPropTypes(Field)
