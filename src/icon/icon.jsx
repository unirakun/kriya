import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/icon/icon.styles.scss'

const labelFactory = htmlFor => label => <label htmlFor={htmlFor}>{label}</label>

const Icon = ({
  style, className, children,
  labelLeft, labelRight,
  primary, secondary, disabled,
  prefix,
  noColor /* set to true to print the native icon color */,
}) => {
  const classes = classnames(
    styles.icon,
    className,
    {
      [styles.primary]: primary,
      [styles.secondary]: secondary,
      [styles.disabled]: disabled,
      [styles.colored]: !noColor,
    },
  )

  const iconCode = `${prefix}${children}`

  // Icon from icomoon have different path (up to 13) to handle colors
  // We inject all of them
  const iconComponent = (
    <i name={iconCode} className={iconCode}>
      {
        Array.from(new Array(13), (x, i) => i + 1)
          .map(i => <span key={i} className={`path${i}`} />)
      }
    </i>
  )

  // Label component
  const label = labelFactory(iconCode)

  // Final component
  return (
    <div style={style} className={classes}>
      {labelLeft && label(labelLeft)}
      {iconComponent}
      {labelRight && label(labelRight)}
    </div>
  )
}

Icon.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string,
  prefix: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  noColor: PropTypes.bool,
}

Icon.defaultProps = {
  style: {},
  className: '',
  labelRight: undefined,
  labelLeft: undefined,
  primary: false,
  secondary: false,
  disabled: false,
  noColor: false,
}

export default onlyUpdateForPropTypes(Icon)
