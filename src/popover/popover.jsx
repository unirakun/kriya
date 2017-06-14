import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/popover/popover.styles.scss'

const Popover = ({ style, className, children, onClose, print, contents }) => {
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
      {React.cloneElement(children, { print, onClose, ...contents })}
    </div>
  )
}

Popover.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  print: PropTypes.bool,
  contents: PropTypes.object,
}

Popover.defaultProps = {
  style: {},
  className: '',
  onClose: undefined,
  print: false,
  contents: undefined,
}

export default onlyUpdateForPropTypes(Popover)
