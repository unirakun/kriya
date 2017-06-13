import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import styles from './popovers.styles.scss'

const Awesome = ({ style, className, print, contents }) => {
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
      <p>{contents && contents.description}</p>
    </div>
  )
}

Awesome.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  print: PropTypes.bool.isRequired,
  contents: PropTypes.object,
}

Awesome.defaultProps = {
  style: {},
  className: '',
  contents: undefined,
}

export default onlyUpdateForPropTypes(Awesome)
