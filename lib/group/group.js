import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { onlyUpdateForPropTypes } from 'recompose';
import styles from '../../src/group/group.styles.scss';

var Group = function Group(_ref) {
  var _classnames;

  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      vertical = _ref.vertical;

  var classes = classnames(styles.group, className, (_classnames = {}, babelHelpers.defineProperty(_classnames, styles.vertical, vertical), babelHelpers.defineProperty(_classnames, styles.horizontal, !vertical), _classnames));
  return React.createElement(
    'div',
    { style: style, className: classes },
    children
  );
};

Group.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  vertical: PropTypes.bool
};

Group.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  vertical: false
};

export default onlyUpdateForPropTypes(Group);