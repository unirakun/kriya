import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'

const Detail = ({ style, className, content }) => {

  return (
    <div style={style} className={className}>
      <p>static content</p>
      <p>custom when open action: {content}</p>
    </div>
  )
}

Detail.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  content: PropTypes.string,
}

Detail.defaultProps = {
  style: {},
  className: '',
  content: '',
}

export default onlyUpdateForPropTypes(Detail)
