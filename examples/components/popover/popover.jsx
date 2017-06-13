import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from './popover.styles.scss'

const Popover = ({ style, className, onClick }) => {
  const classes = classnames(
    styles.popover,
    className,
  )

  return (
    <div
      className={classes}
      style={style}
    >
      <div className={styles.button} name="AWESOME" onClick={onClick}>OPEN AWESOME POPOVER</div>
    </div>
  )
}

Popover.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

Popover.defaultProps = {
  style: {},
  className: '',
}

export default onlyUpdateForPropTypes(Popover)
