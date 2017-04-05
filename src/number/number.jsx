import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/number/number.styles.scss'

const Number = ({
  style, className,
  children,
  primary, secondary, reverse,
  large, map,
}) => {
  const classes = classnames(
    styles.number,
    className,
    {
      [styles.map]: map,
      [styles.primary]: primary && !secondary,
      [styles.secondary]: secondary,
      [styles.reverse]: reverse,
      [styles.large]: large,
    },
  )

  return (
    <div style={style} className={classes}>
      {children}
    </div>
  )
}

Number.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  large: PropTypes.bool,
  map: PropTypes.bool,
  reverse: PropTypes.bool,
}

Number.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  primary: true,
  secondary: false,
  large: false,
  reverse: false,
  map: false,
}

export default onlyUpdateForPropTypes(Number)
