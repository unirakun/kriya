import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import forRoute from '../../helpers/router'
import styles from './popover.styles.scss'

const Popover = ({ style, className, onClickAwesome, onClickNormal }) => {
  const classes = classnames(
    styles.popover,
    className,
  )

  return (
    <div
      className={classes}
      style={style}
    >
      <div className={styles.awesome} name="AWESOME" onClick={onClickAwesome}>OPEN AWESOME POPOVER</div>
      <div className={styles.normal} name="NORMAL" onClick={onClickNormal}>OPEN JUST NORMAL POPOVER</div>
    </div>
  )
}

Popover.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  onClickAwesome: PropTypes.func.isRequired,
  onClickNormal: PropTypes.func.isRequired,
}

Popover.defaultProps = {
  style: {},
  className: '',
}

export default forRoute('POPOVER')(onlyUpdateForPropTypes(Popover))
