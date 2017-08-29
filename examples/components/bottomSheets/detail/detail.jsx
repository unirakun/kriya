import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import styles from './detail.styles.scss'

const Detail = ({ style, className, print, description }) => {
  const classes = classnames(
    styles.bottomSheets,
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

Detail.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  print: PropTypes.bool.isRequired,
  description: PropTypes.string,
}

Detail.defaultProps = {
  style: {},
  className: '',
  description: '',
}

export default onlyUpdateForPropTypes(Detail)
