import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/bottomSheets/bottomSheets.styles.scss'

const BottomSheets = ({ style, className, children, onClose, print, contents }) => {
  const classes = classnames(
    styles.bottomSheets,
    className,
  )

  const classSheets = classnames(
    styles.sheets,
    {
      [styles.print]: print,
    },
  )

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div style={style} className={classes} onClick={onClose}>
      <div className={classSheets}>
        <div className={styles.header}>HEADER</div>
        <div className={styles.content}>
          {React.cloneElement(children, { print, onClose, ...contents })}
        </div>
      </div>
    </div>
  )
}

BottomSheets.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  print: PropTypes.bool,
  contents: PropTypes.object,
}

BottomSheets.defaultProps = {
  style: {},
  className: '',
  onClose: undefined,
  print: false,
  contents: undefined,
}

export default onlyUpdateForPropTypes(BottomSheets)
