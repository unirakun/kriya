import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../../../src/input/checkbox/checkbox.styles.scss';

var Checkbox = function Checkbox(_ref) {
  var style = _ref.style,
      className = _ref.className,
      input = _ref.input;

  var classes = classnames(styles.checkbox, className, babelHelpers.defineProperty({}, styles.checked, input.checked));

  var onClick = function onClick() {
    input.onChange(!input.checked);
  };

  return React.createElement(
    'div',
    { style: style, className: classes, onClick: onClick },
    React.createElement('div', { className: styles.back }),
    React.createElement('div', { className: styles.ball })
  );
};

Checkbox.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  input: PropTypes.shape({
    checked: PropTypes.bool,
    onChange: PropTypes.func
  }).isRequired
};

Checkbox.defaultProps = {
  style: {},
  className: '',
  input: {}
};

export default Checkbox;