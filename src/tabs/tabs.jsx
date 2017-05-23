import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import styles from '../../src/tabs/tabs.styles.scss'
import Tab from './tab'

const Tabs = ({ style, className, children, tabs }) => {
  const classes = classnames(
    styles.tabs,
    className,
  )

  return (
    <div style={style} className={classes}>
      {tabs ?
        tabs.map(code => (
          <Tab key={code} code={code} />
        ))
        : children
      }
    </div>
  )
}

Tabs.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  tabs: PropTypes.arrayOf(PropTypes.string),
}

Tabs.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  tabs: undefined,
}

export default onlyUpdateForPropTypes(Tabs)
