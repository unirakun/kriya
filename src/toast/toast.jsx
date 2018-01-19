import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/toast/toast.styles.scss'
import Button from '../button'

const Toast = ({ style, className, title, button, print, position, type, onClick }) => {
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
        <Button
          name={`TOAST_${type}`}
          primary
          flat
          {...button}
          onClick={onClick && onClick(button)}
        >
          {button.text}
        </Button>
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
  type: PropTypes.oneOf(['default', 'success', 'warning', 'error']),
  onClick: PropTypes.func,
}

Toast.defaultProps = {
  style: {},
  className: '',
  print: false,
  title: '',
  button: undefined,
  position: 'bottom',
  type: 'default',
  onClick: undefined,
}

export default onlyUpdateForPropTypes(Toast)
