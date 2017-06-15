import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { onlyUpdateForPropTypes } from 'recompose';
import Step from './step';
import styles from '../../src/navigation/navigation.styles.scss';

var Navigation = function Navigation(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children;

  var classes = classnames(styles.navigation, className);

  return React.createElement(
    'div',
    { style: style, className: classes },
    children.map(function (step, index) {
      return React.createElement(
        Step,
        {
          key: index // eslint-disable-line react/no-array-index-key
          , number: index,
          last: index === children.length - 1
        },
        step
      );
    })
  );
};

Navigation.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.string).isRequired
};

Navigation.defaultProps = {
  style: {},
  className: ''
};

export default onlyUpdateForPropTypes(Navigation);