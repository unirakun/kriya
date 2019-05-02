import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import forRoute from '../../helpers/router'
import styles from './toast.styles.scss'


const ToastExample = ({
  style,
  className,
  onClickDefault,
  onClickError,
  onClickButton,
  onClickSuccess,
  onClickWarning }) => {
  const classes = classnames(
    styles.example,
    className,
  )

  return (
    <div style={style} className={classes} >
      <div className={styles.button} onClick={onClickDefault}>default</div>
      <div className={styles.button} onClick={onClickSuccess}>success</div>
      <div className={styles.button} onClick={onClickWarning}>warning</div>
      <div className={styles.button} onClick={onClickError}>error</div>
      <div className={styles.button} onClick={onClickButton}>button</div>
    </div>
  )
}

ToastExample.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  onClickDefault: PropTypes.func.isRequired,
  onClickSuccess: PropTypes.func.isRequired,
  onClickError: PropTypes.func.isRequired,
  onClickWarning: PropTypes.func.isRequired,
  onClickButton: PropTypes.func.isRequired,
}

ToastExample.defaultProps = {
  style: {},
  className: '',
  position: '',
  type: '',
}

export default forRoute('TOAST')(onlyUpdateForPropTypes(ToastExample))
