import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/tooltip/tooltip.styles.scss'

const Tooltip = ({
  style, className,
  children,
  show,
}) => {
  const classes = classnames(
    styles.tooltip,
    className,
    {
      [styles.show]: show,
    },
  )

  return (
    <div style={style} className={classes}>
      {children}
    </div>
  )
}

Tooltip.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  show: PropTypes.bool,
}

Tooltip.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  show: false,
}

export default onlyUpdateForPropTypes(Tooltip)
