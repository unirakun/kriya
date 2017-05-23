import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import Ink from 'react-ink'
import classnames from 'classnames'
import styles from '../../../src/tabs/tab/tab.styles.scss'

const Tab = ({ style, className, label, activated, onClick }) => {
  const classes = classnames(
    styles.tab,
    className,
    {
      [styles.activated]: activated,
    },
  )

  return (
    <div style={style} className={classes} onClick={onClick}>
      <Ink style={{ zIndex: 2 }} />
      {label}
      {activated && <div className={styles.border} />}
    </div>
  )
}

Tab.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  label: PropTypes.string,
  activated: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

Tab.defaultProps = {
  style: {},
  className: '',
  label: '',
  activated: false,
}

export default onlyUpdateForPropTypes(Tab)
