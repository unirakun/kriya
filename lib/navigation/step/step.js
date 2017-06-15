import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../../../src/navigation/step/step.styles.scss';

var Step = function Step(_ref) {
  var _classnames;

  var className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      onClick = _ref.onClick,
      last = _ref.last;

  var classes = classnames(styles.step, className, (_classnames = {}, babelHelpers.defineProperty(_classnames, styles.last, last), babelHelpers.defineProperty(_classnames, styles.intermediate, !last), _classnames));

  return React.createElement(
    'div',
    { style: style, className: classes },
    React.createElement(
      'button',
      { onClick: onClick },
      children
    ),
    last || React.createElement(
      'div',
      { className: styles.separator },
      ' /'
    )
  );
};

Step.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  last: PropTypes.bool
};

Step.defaultProps = {
  className: '',
  style: {},
  onClick: undefined,
  last: false
};

export default Step;