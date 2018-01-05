import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/toast/toast.styles.scss'
import Button from './button'

const Toast = ({ style, className, title, button, print, position, type }) => {
  const classes = classnames(
    styles.toast,
    className,
    styles[position],
    styles[type],
    { [styles.print]: print },
  )

  return (
    <div style={style} className={classes}>
      <span className={styles.text}>{title}</span>
      {button && (
        <Button {...button} type={type} />
      )}
    </div>
  )
}

Toast.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  print: PropTypes.bool,
  title: PropTypes.string,
  button: PropTypes.object,
  position: PropTypes.oneOf(['top', 'bottom']),
  type: PropTypes.oneOf(['', 'success', 'warning', 'error']),
}

Toast.defaultProps = {
  style: {},
  className: '',
  print: false,
  title: '',
  button: {},
  position: 'bottom',
  type: '',
}

export default onlyUpdateForPropTypes(Toast)
