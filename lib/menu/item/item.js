import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { onlyUpdateForPropTypes } from 'recompose';
import Button from '../../button';
import styles from '../../../src/menu/item/item.styles.scss';

var Item = function Item(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      name = _ref.name,
      selected = _ref.selected;

  var classes = classnames(styles.item, className, babelHelpers.defineProperty({}, styles.selected, selected));

  return React.createElement(
    Button,
    { style: style, className: classes, large: true, name: 'MENU-ITEM-' + name },
    children
  );
};

Item.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  selected: PropTypes.bool
};

Item.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  name: undefined,
  selected: false
};

export default onlyUpdateForPropTypes(Item);