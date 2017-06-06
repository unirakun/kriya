import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import { format } from 'date-fns'
import styles from './day.styles.scss'

const Day = ({ style, className, children, secondary, selected }) => {
  const classes = classnames(
    styles.day,
    className,
    {
      [styles.secondary]: secondary,
      [styles.selected]: selected,
    },
  )

  return (
    <div style={style} className={classes}>
      {format(children, 'DD')}
    </div>
  )
}

Day.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.datetime,
  secondary: PropTypes.bool,
  selected: PropTypes.bool,
}

Day.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  secondary: false,
  selected: false,
}

export default onlyUpdateForPropTypes(Day)
