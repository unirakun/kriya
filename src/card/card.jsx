import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/card/card.styles.scss'

const Card = ({ style, className, closed, children, closeElm, onClick }) => {
  const classes = classnames(
    styles.card,
    className,
    {
      [styles.closed]: closed,
    },
  )

  let enhancedChildren = children
  if (!closeElm && children) enhancedChildren = React.cloneElement(children, { closed })

  return (
    <div style={style} className={classes} onClick={onClick}>
      {closed || enhancedChildren}
      {closed && (closeElm || enhancedChildren)}
    </div>
  )
}

Card.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  closed: PropTypes.bool,
  children: PropTypes.node,
  closeElm: PropTypes.node,
  onClick: PropTypes.func,
}

Card.defaultProps = {
  style: {},
  className: '',
  closed: false,
  children: undefined,
  closeElm: undefined,
  onClick: undefined,
}

export default onlyUpdateForPropTypes(Card)
