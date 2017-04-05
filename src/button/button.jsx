import React, { PropTypes } from 'react'
import Ink from 'react-ink'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import Icon from '../icon'
import styles from '../../src/button/button.styles.scss'

const Button = ({
  onClick,
  className,
  style,
  children,
  large,
  primary,
  secondary,
  flat,
  disabled,
  ink,
  title,
  href,
  targetBlank,
  iconLeft,
  iconRight,
}) => {
  const classes = classnames(
    styles.button,
    className,
    {
      [styles.primary]: primary && !flat,
      [styles.secondary]: secondary && !flat,
      [styles.disabled]: disabled,
      [styles.large]: large,
      [styles.flat]: flat,
      [styles.primaryFlat]: flat && primary,
      [styles.secondaryFlat]: flat && secondary,
    },
  )

  /* define props */
  const iconProps = { primary, secondary, disabled }
  const linkProps = { href, target: targetBlank ? '_blank' : '' }
  const commonProps = {
    className: classes,
    style,
    disabled,
    title,
  }

  /* content of component (Button or Link) */
  const childrenComponent = []
  if (ink && !disabled && !flat) childrenComponent.push(<Ink key="ink" />)
  if (iconLeft) {
    childrenComponent.push(
      <Icon key="l" className={styles.iconLeft} {...iconProps}>
        {iconLeft}
      </Icon>,
    )
  }
  if (children) childrenComponent.push(children)
  if (iconRight) {
    childrenComponent.push(
      <Icon key="r" className={styles.iconRight} {...iconProps}>
        {iconRight}
      </Icon>,
    )
  }

  return (
    !href ?
      <button {...commonProps} onClick={onClick}>{childrenComponent}</button> :
      <a {...linkProps} {...commonProps}>{childrenComponent}</a>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  large: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  ink: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
  href: PropTypes.string,
  targetBlank: PropTypes.bool,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
}

Button.defaultProps = {
  className: '',
  style: {},
  large: false,
  primary: false,
  secondary: false,
  disabled: false,
  flat: false,
  ink: true,
  children: undefined,
  title: '',
  href: undefined,
  targetBlank: false,
  iconLeft: undefined,
  iconRight: undefined,
}

export default onlyUpdateForPropTypes(Button)
