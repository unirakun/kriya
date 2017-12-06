import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import styles from './popovers.styles.scss'

const Awesome = ({ style, className, print, description }) => {
  const classes = classnames(
    styles.popover,
    className,
    {
      [styles.print]: print,
    },
  )

  return (
    <div style={style} className={classes} onClick={(e) => { e.stopPropagation() }}>
      <h1>
        AWESOME
      </h1>
      <p>{description}</p>
    </div>
  )
}

Awesome.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  print: PropTypes.bool.isRequired,
  description: PropTypes.string,
}

Awesome.defaultProps = {
  style: {},
  className: '',
  description: '',
}

export default onlyUpdateForPropTypes(Awesome)
