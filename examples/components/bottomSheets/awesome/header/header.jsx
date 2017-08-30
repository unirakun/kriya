import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import styles from './header.styles.scss'

const Detail = ({ style, className, print }) => {
  const classes = classnames(
    styles.header,
    className,
    {
      [styles.print]: print,
    },
  )

  return (
    <div style={style} className={classes}>
      Awesome Header
    </div>
  )
}

Detail.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  print: PropTypes.bool.isRequired,
}

Detail.defaultProps = {
  style: {},
  className: '',
}

export default onlyUpdateForPropTypes(Detail)
