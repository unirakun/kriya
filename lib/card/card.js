import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { onlyUpdateForPropTypes } from 'recompose';
import styles from '../../src/card/card.styles.scss';

var Card = function Card(_ref) {
  var style = _ref.style,
      className = _ref.className,
      closed = _ref.closed,
      children = _ref.children,
      closeElm = _ref.closeElm,
      onClick = _ref.onClick;

  var classes = classnames(styles.card, className, babelHelpers.defineProperty({}, styles.closed, closed));

  var enhancedChildren = children;
  if (!closeElm && children) enhancedChildren = React.cloneElement(children, { closed: closed });

  return React.createElement(
    'div',
    { style: style, className: classes, onClick: onClick },
    closed || enhancedChildren,
    closed && (closeElm || enhancedChildren)
  );
};

Card.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  closed: PropTypes.bool,
  children: PropTypes.node,
  closeElm: PropTypes.node,
  onClick: PropTypes.func
};

Card.defaultProps = {
  style: {},
  className: '',
  closed: false,
  children: undefined,
  closeElm: undefined,
  onClick: undefined
};

export default onlyUpdateForPropTypes(Card);