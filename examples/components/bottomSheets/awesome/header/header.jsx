import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import styles from './header.styles.scss'

const Header = ({ style, className }) => {
  const classes = classnames(
    styles.header,
    className,
  )

  return (
    <div style={style} className={classes}>
      Awesome Header
    </div>
  )
}

Header.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
}

Header.defaultProps = {
  style: {},
  className: '',
}

export default onlyUpdateForPropTypes(Header)
