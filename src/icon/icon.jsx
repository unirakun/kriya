import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../src/icon/icon.styles.scss'

const labelFactory = code => label => <span id={code} aria-hidden="true">{label}</span>

const Icon = ({
  style, className, children,
  labelLeft, labelRight,
  primary, secondary, disabled,
  prefix,
  title,
  nbPath,
  iconColor, /* set to true to print the native icon color */
  alt, /* alternative text to vocalise the icon (only if no labelLeft or labelRight) */
}) => {
  const classes = classnames(
    styles.icon,
    className,
    {
      [styles.primary]: primary,
      [styles.secondary]: secondary,
      [styles.disabled]: disabled,
      [styles.inheritColor]: !iconColor,
    },
  )

  const iconCode = `${prefix}${children}`

  // Icon from icomoon have different path (up to 13) to handle colors
  // We inject all of them
  const iconComponent = (
    <i
      name={iconCode}
      className={iconCode}
      title={title}
      aria-hidden="true"
    >
      {
        Array.from(new Array(nbPath), (x, i) => i + 1)
          .map(i => <span key={i} className={`path${i}`} />)
      }
    </i>
  )

  // Label component
  const label = labelFactory(iconCode, alt)

  // Final component
  return (
    <div style={style} className={classes}>
      {!alt && labelLeft && label(labelLeft)}
      {iconComponent}
      {!alt && labelRight && label(labelRight)}
      {alt && <span className={styles.srOnly}>{alt}</span>}
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
  iconColor: PropTypes.bool,
  title: PropTypes.string,
  nbPath: PropTypes.number,
  alt: PropTypes.string,
}

Icon.defaultProps = {
  style: {},
  className: '',
  labelRight: undefined,
  labelLeft: undefined,
  primary: false,
  secondary: false,
  disabled: false,
  iconColor: false,
  title: undefined,
  nbPath: 13, /* choose arbitrary */
  alt: undefined,
}

export default onlyUpdateForPropTypes(Icon)
