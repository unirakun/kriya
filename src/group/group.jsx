import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/group/group.styles.scss'

const Group = ({ style, className, children, vertical }) => {
  const classes = classnames(
    styles.group,
    className,
    {
      [styles.vertical]: vertical,
      [styles.horizontal]: !vertical,
    },
  )
  return (
    <div style={style} className={classes}>
      {children}
    </div>
  )
}

Group.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  vertical: PropTypes.bool,
}

Group.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  vertical: false,
}

export default onlyUpdateForPropTypes(Group)
