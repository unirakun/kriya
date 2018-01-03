import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/toast/toast.styles.scss'

const onClick = (fn, handler) => () => fn(handler)

const Toast = ({ style, className, title, button, print, position, type, remove }) => {
  const classes = classnames(
    styles.toast,
    className,
    styles[position],
    styles[type],
    { [styles.print]: print })

  return (
    <div style={style} className={classes}>
      <span className={styles.text}>{title}</span>
      {button && button.text && <button onClick={onClick(remove, button.handler)}>
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
  remove: PropTypes.func,
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
  remove: undefined,
}

export default onlyUpdateForPropTypes(Toast)
