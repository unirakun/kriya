import React from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';
import classnames from 'classnames';
import { onlyUpdateForPropTypes } from 'recompose';
import Icon from '../icon';
import styles from '../../src/button/button.styles.scss';

var Button = function Button(_ref) {
  var _classnames;

  var onClick = _ref.onClick,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      large = _ref.large,
      primary = _ref.primary,
      secondary = _ref.secondary,
      flat = _ref.flat,
      disabled = _ref.disabled,
      ink = _ref.ink,
      title = _ref.title,
      href = _ref.href,
      targetBlank = _ref.targetBlank,
      iconLeft = _ref.iconLeft,
      iconRight = _ref.iconRight,
      type = _ref.type;

  var classes = classnames(styles.button, className, (_classnames = {}, babelHelpers.defineProperty(_classnames, styles.primary, primary && !flat), babelHelpers.defineProperty(_classnames, styles.secondary, secondary && !flat), babelHelpers.defineProperty(_classnames, styles.disabled, disabled), babelHelpers.defineProperty(_classnames, styles.large, large), babelHelpers.defineProperty(_classnames, styles.flat, flat), babelHelpers.defineProperty(_classnames, styles.primaryFlat, flat && primary), babelHelpers.defineProperty(_classnames, styles.secondaryFlat, flat && secondary), _classnames));

  /* define props */
  var iconProps = { primary: primary, secondary: secondary, disabled: disabled };
  var linkProps = { href: href, target: targetBlank ? '_blank' : '' };
  var commonProps = {
    className: classes,
    style: style,
    disabled: disabled,
    title: title,
    onClick: onClick
  };

  /* content of component (Button or Link) */
  var childrenComponent = [];
  if (ink && !disabled && !flat) childrenComponent.push(React.createElement(Ink, { key: 'ink' }));
  if (iconLeft) {
    childrenComponent.push(React.createElement(
      Icon,
      babelHelpers.extends({ key: 'l', className: styles.iconLeft }, iconProps),
      iconLeft
    ));
  }
  if (children) childrenComponent.push(children);
  if (iconRight) {
    childrenComponent.push(React.createElement(
      Icon,
      babelHelpers.extends({ key: 'r', className: styles.iconRight }, iconProps),
      iconRight
    ));
  }

  return !href ? React.createElement(
    'button',
    babelHelpers.extends({}, commonProps, { type: type }),
    childrenComponent
  ) : React.createElement(
    'a',
    babelHelpers.extends({}, linkProps, commonProps),
    childrenComponent
  );
};

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
  type: PropTypes.string
};

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
  type: undefined
};

export default onlyUpdateForPropTypes(Button);