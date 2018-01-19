import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import styles from '../../../src/input/checkbox/checkbox.styles.scss'

const Checkbox = ({ style, className, input, disabled }) => {
  const classes = classnames(
    styles.checkbox,
    className,
    { [styles.checked]: input.checked, [styles.disabled]: disabled },
  )

  const onClick = () => {
    if (!disabled) input.onChange(!input.checked)
  }

  return (
    <div style={style} className={classes} onClick={onClick}>
      <div className={styles.back} />
      <div className={styles.ball} />
    </div>
  )
}

Checkbox.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  input: PropTypes.shape({
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  }).isRequired,
  disabled: PropTypes.bool,
}

Checkbox.defaultProps = {
  style: {},
  className: '',
  input: {},
  disabled: false,
}

export default onlyUpdateForPropTypes(Checkbox)
