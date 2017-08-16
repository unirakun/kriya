import React from 'react'
import classnames from 'classnames'
import Tooltip from '../tooltip'
import styles from '../../../src/tooltip/hoc/tooltip.styles.scss'

export default (config = {
  left: true,
  top: false,
  right: false,
  bottom: false,
  className: '',
}) => text => Component => (props) => {
  const { left, top, right, bottom, className } = config
  const classes = classnames(
    styles.component,
    className,
  )

  const tooltipClasses = classnames(
    styles.tooltip,
    {
      [styles.left]: left,
      [styles.top]: top,
      [styles.right]: right,
      [styles.bottom]: bottom,
    },
  )

  return (
    <div className={classes}>
      <Component {...props} />
      <Tooltip className={tooltipClasses} {...config} >{text}</Tooltip>
    </div>
  )
}
