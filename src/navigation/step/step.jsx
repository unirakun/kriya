import React, { PropTypes } from 'react'
import classnames from 'classnames'
import styles from '../../../src/navigation/step/step.styles.scss'

const Step = ({ className, style, children, onClick, last }) => {
  const classes = classnames(
    styles.step,
    className,
    {
      [styles.last]: last,
      [styles.intermediate]: !last,
    },
  )

  return (
    <div style={style} className={classes}>
      <button onClick={onClick}>
        {children}
      </button>
      {last || <div className={styles.separator}> /</div>}
    </div>
  )
}

Step.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  last: PropTypes.bool,
}

Step.defaultProps = {
  className: '',
  style: {},
  onClick: undefined,
  last: false,
}

export default Step
