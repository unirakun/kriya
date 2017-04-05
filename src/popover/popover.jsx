import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/popover/popover.styles.scss'

const Popover = ({ style, className, children, onClose, print }) => {
  const classes = classnames(
    styles.popover,
    className,
    {
      [styles.print]: print,
    },
  )

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div style={style} className={classes} onClick={onClose}>
      {React.cloneElement(children, { print, onClose })}
    </div>
  )
}

Popover.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  print: PropTypes.bool,
}

Popover.defaultProps = {
  style: {},
  className: '',
  onClose: undefined,
  print: false,
}

export default onlyUpdateForPropTypes(Popover)
