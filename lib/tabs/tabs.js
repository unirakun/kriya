import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForPropTypes } from 'recompose';
import classnames from 'classnames';
import styles from '../../src/tabs/tabs.styles.scss';
import Tab from './tab';

var Tabs = function Tabs(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      tabs = _ref.tabs;

  var classes = classnames(styles.tabs, className);

  return React.createElement(
    'div',
    { style: style, className: classes },
    tabs ? tabs.map(function (code) {
      return React.createElement(Tab, { key: code, code: code });
    }) : children
  );
};

Tabs.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  tabs: PropTypes.arrayOf(PropTypes.string)
};

Tabs.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  tabs: undefined
};

export default onlyUpdateForPropTypes(Tabs);