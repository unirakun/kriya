import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { onlyUpdateForPropTypes } from 'recompose';
import styles from '../../src/number/number.styles.scss';

var Number = function Number(_ref) {
  var _classnames;

  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      primary = _ref.primary,
      secondary = _ref.secondary,
      reverse = _ref.reverse,
      large = _ref.large,
      map = _ref.map;

  var classes = classnames(styles.number, className, (_classnames = {}, babelHelpers.defineProperty(_classnames, styles.map, map), babelHelpers.defineProperty(_classnames, styles.primary, primary && !secondary), babelHelpers.defineProperty(_classnames, styles.secondary, secondary), babelHelpers.defineProperty(_classnames, styles.reverse, reverse), babelHelpers.defineProperty(_classnames, styles.large, large), _classnames));

  return React.createElement(
    'div',
    { style: style, className: classes },
    children
  );
};

Number.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  large: PropTypes.bool,
  map: PropTypes.bool,
  reverse: PropTypes.bool
};

Number.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  primary: true,
  secondary: false,
  large: false,
  reverse: false,
  map: false
};

export default onlyUpdateForPropTypes(Number);