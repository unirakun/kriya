import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import router from 'hoc-little-router'
import Awesome from './awesome'
import styles from './bottomSheets.styles.scss'

const BottomSheets = ({ style, className, onClick }) => {
  const classes = classnames(
    styles.bottomSheets,
    className,
  )

  return (
    <div
      className={classes}
      style={style}
    >
      <div className={styles.awesome} name="AWESOME" onClick={onClick}>OPEN BOTTOMSHEETS</div>
      {/* BOTTOM SHEETS container */}
      <Awesome />
    </div>
  )
}

BottomSheets.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

BottomSheets.defaultProps = {
  style: {},
  className: '',
}

export default router('BOTTOMSHEETS')(onlyUpdateForPropTypes(BottomSheets))
