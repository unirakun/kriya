import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/toast/toast.styles.scss'

const Toast = ({ style, className, title, button, print, close, delay, position, type }) => {
  let timeout = null
  const classes = classnames(styles.toast, className, {
    [styles.top]: position === 'top',
    [styles.bottom]: position === 'bottom',
    [styles.print]: print,
    [styles.success]: type === 'success',
    [styles.warning]: type === 'warning',
    [styles.error]: type === 'error',
  })

  if (print) timeout = setTimeout(close, delay)

  const onClose = (handler) => {
    clearTimeout(timeout)
    return close(handler)
  }

  return (
    <div style={style} className={classes}>
      <span className={styles.text}>{title}</span>
      {button &&
      <button onClick={() => onClose(button.handler)}>
        {button.text}
      </button>}
    </div>
  )
}

Toast.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  print: PropTypes.bool,
  title: PropTypes.string,
  button: PropTypes.object,
  close: PropTypes.func,
  delay: PropTypes.number,
  position: PropTypes.oneOf(['top', 'bottom']),
  type: PropTypes.oneOf(['', 'success', 'warning', 'error']),
}

Toast.defaultProps = {
  style: {},
  className: '',
  print: false,
  title: '',
  button: {},
  close: undefined,
  delay: 3000,
  position: 'bottom',
  type: '',
}

export default onlyUpdateForPropTypes(Toast)
