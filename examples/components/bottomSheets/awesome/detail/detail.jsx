import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import styles from './detail.styles.scss'

const Detail = ({ style, className, print, content }) => {
  const classes = classnames(
    styles.bottomSheets,
    className,
    {
      [styles.print]: print,
    },
  )

  return (
    <div style={style} className={classes}>
      <p>static content</p>
      <p>custom when open action: {content}</p>
    </div>
  )
}

Detail.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  print: PropTypes.bool.isRequired,
  content: PropTypes.string,
}

Detail.defaultProps = {
  style: {},
  className: '',
  content: '',
}

export default onlyUpdateForPropTypes(Detail)
