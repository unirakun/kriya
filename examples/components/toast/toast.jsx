import React from 'react'
import PropTypes from 'prop-types'
import router from 'hoc-little-router'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from './toast.styles.scss'

const ToastExample = ({ style, className, onClick }) => {
  const classes = classnames(
    styles.example,
    className,
  )

  return (
    <div style={style} className={classes} >
      <div className={styles.button} onClick={() => onClick({ title: 'Default' })}>default</div>
      <div className={styles.button} onClick={() => onClick({ title: 'Success', type: 'success' })}>success</div>
      <div className={styles.button} onClick={() => onClick({ title: 'Warning', type: 'warning' })}>warning</div>
      <div className={styles.button} onClick={() => onClick({ title: 'Error', type: 'error' })}>error</div>
      <div className={styles.button} onClick={() => onClick({ title: 'With handler', button: { text: 'handler', handler: () => alert('custom handler') } })}>with button and handler</div>
    </div>
  )
}

ToastExample.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

ToastExample.defaultProps = {
  style: {},
  className: '',
  position: '',
  type: '',
}

export default router('TOAST')(onlyUpdateForPropTypes(ToastExample))
