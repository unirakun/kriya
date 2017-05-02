import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import Step from './step'
import styles from '../../src/navigation/navigation.styles.scss'

const Navigation = ({ style, className, children }) => {
  const classes = classnames(
    styles.navigation,
    className,
  )

  return (
    <div style={style} className={classes}>
      {children.map((step, index) => (
        <Step
          key={index} // eslint-disable-line react/no-array-index-key
          number={index}
          last={index === children.length - 1}
        >
          {step}
        </Step>
      ))}
    </div>
  )
}

Navigation.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Navigation.defaultProps = {
  style: {},
  className: '',
}

export default onlyUpdateForPropTypes(Navigation)
