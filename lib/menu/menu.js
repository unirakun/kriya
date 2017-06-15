import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { onlyUpdateForPropTypes } from 'recompose';
import styles from '../../src/menu/menu.styles.scss';

var Menu = function Menu(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      header = _ref.header,
      footer = _ref.footer,
      onHeaderClick = _ref.onHeaderClick,
      onFooterClick = _ref.onFooterClick;

  var classes = classnames(styles.menu, className);

  return React.createElement(
    'div',
    { style: style, className: classes },
    header && React.createElement(
      'div',
      { className: styles.header, onClick: onHeaderClick },
      header
    ),
    React.createElement('div', { className: styles.sep }),
    React.createElement(
      'div',
      { className: styles.items },
      children
    ),
    footer && React.createElement(
      'div',
      { className: styles.footer, onClick: onFooterClick },
      footer
    )
  );
};

Menu.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  header: PropTypes.node,
  footer: PropTypes.node,
  onFooterClick: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired
};

Menu.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  header: undefined,
  footer: undefined
};

export default onlyUpdateForPropTypes(Menu);