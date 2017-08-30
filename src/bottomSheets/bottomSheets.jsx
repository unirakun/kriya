import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/bottomSheets/bottomSheets.styles.scss'

const BottomSheets = ({ style, className, children, toggle, print, header, contents }) => {
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
    <div style={style} className={classes}>
      <div className={classSheets}>
        <div className={styles.header} onClick={toggle}>{header}</div>
        <hr className={styles.separator} />
        <div className={styles.content}>
          {React.cloneElement(children, { print, ...contents })}
        </div>
      </div>
    </div>
  )
}

BottomSheets.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  toggle: PropTypes.func,
  print: PropTypes.bool,
  header: PropTypes.object,
  contents: PropTypes.object,
}

BottomSheets.defaultProps = {
  style: {},
  className: '',
  toggle: undefined,
  print: false,
  header: undefined,
  contents: undefined,
}

export default onlyUpdateForPropTypes(BottomSheets)
