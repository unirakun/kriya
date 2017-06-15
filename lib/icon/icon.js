import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { onlyUpdateForPropTypes } from 'recompose';
import styles from '../../src/icon/icon.styles.scss';

var labelFactory = function labelFactory(htmlFor) {
  return function (label) {
    return React.createElement(
      'label',
      { htmlFor: htmlFor },
      label
    );
  };
};

var Icon = function Icon(_ref) {
  var _classnames;

  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      labelLeft = _ref.labelLeft,
      labelRight = _ref.labelRight,
      primary = _ref.primary,
      secondary = _ref.secondary,
      disabled = _ref.disabled,
      prefix = _ref.prefix,
      title = _ref.title,
      noColor = _ref.noColor;

  var classes = classnames(styles.icon, className, (_classnames = {}, babelHelpers.defineProperty(_classnames, styles.primary, primary), babelHelpers.defineProperty(_classnames, styles.secondary, secondary), babelHelpers.defineProperty(_classnames, styles.disabled, disabled), babelHelpers.defineProperty(_classnames, styles.colored, !noColor), _classnames));

  var iconCode = '' + prefix + children;

  // Icon from icomoon have different path (up to 13) to handle colors
  // We inject all of them
  var iconComponent = React.createElement(
    'i',
    { name: iconCode, className: iconCode, title: title },
    Array.from(new Array(13), function (x, i) {
      return i + 1;
    }).map(function (i) {
      return React.createElement('span', { key: i, className: 'path' + i });
    })
  );

  // Label component
  var label = labelFactory(iconCode);

  // Final component
  return React.createElement(
    'div',
    { style: style, className: classes },
    labelLeft && label(labelLeft),
    iconComponent,
    labelRight && label(labelRight)
  );
};

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
  title: PropTypes.string
};

Icon.defaultProps = {
  style: {},
  className: '',
  labelRight: undefined,
  labelLeft: undefined,
  primary: false,
  secondary: false,
  disabled: false,
  noColor: false,
  title: undefined
};

export default onlyUpdateForPropTypes(Icon);