import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { onlyUpdateForPropTypes } from 'recompose';
import styles from '../../src/popover/popover.styles.scss';

var Popover = function Popover(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      onClose = _ref.onClose,
      print = _ref.print,
      contents = _ref.contents;

  var classes = classnames(styles.popover, className, babelHelpers.defineProperty({}, styles.print, print));

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    React.createElement(
      'div',
      { style: style, className: classes, onClick: onClose },
      React.cloneElement(children, babelHelpers.extends({ print: print, onClose: onClose }, contents))
    )
  );
};

Popover.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  print: PropTypes.bool,
  contents: PropTypes.object
};

Popover.defaultProps = {
  style: {},
  className: '',
  onClose: undefined,
  print: false,
  contents: undefined
};

export default onlyUpdateForPropTypes(Popover);