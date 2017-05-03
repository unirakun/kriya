import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/menu/menu.styles.scss'

const Menu = ({ style, className, children, header, footer }) => {
  const classes = classnames(
    styles.menu,
    className,
  )

  return (
    <div style={style} className={classes}>
      {header}
      <div className={styles.sep} />
      <div className={styles.items}>{children}</div>
      <div className={styles.footer}>{footer}</div>
    </div>
  )
}

Menu.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  header: PropTypes.node,
  footer: PropTypes.node,
}

Menu.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  header: undefined,
  footer: undefined,
}

export default onlyUpdateForPropTypes(Menu)
