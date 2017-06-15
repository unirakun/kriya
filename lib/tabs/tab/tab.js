import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForPropTypes } from 'recompose';
import Ink from 'react-ink';
import classnames from 'classnames';
import styles from '../../../src/tabs/tab/tab.styles.scss';

var Tab = function Tab(_ref) {
  var style = _ref.style,
      className = _ref.className,
      label = _ref.label,
      activated = _ref.activated,
      onClick = _ref.onClick;

  var classes = classnames(styles.tab, className, babelHelpers.defineProperty({}, styles.activated, activated));

  return React.createElement(
    'div',
    { style: style, className: classes, onClick: onClick },
    React.createElement(Ink, { style: { zIndex: 2 } }),
    label,
    activated && React.createElement('div', { className: styles.border })
  );
};

Tab.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  label: PropTypes.string,
  activated: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

Tab.defaultProps = {
  style: {},
  className: '',
  label: '',
  activated: false
};

export default onlyUpdateForPropTypes(Tab);