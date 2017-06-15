import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { onlyUpdateForPropTypes } from 'recompose';
import ImgFallback from 'react-img-fallback';
import Icon from '../icon';
import styles from '../../src/avatar/avatar.styles.scss';

var Avatar = function Avatar(_ref) {
  var style = _ref.style,
      className = _ref.className,
      picture = _ref.picture,
      isMale = _ref.isMale,
      onClick = _ref.onClick;

  var classes = classnames(styles.avatar, className);

  var fallback = React.createElement(
    Icon,
    { className: styles.icon, primary: true },
    'avatar_' + (isMale ? 'man' : 'woman')
  );

  return React.createElement(
    'div',
    { style: style, className: classes, onClick: onClick },
    React.createElement(ImgFallback, {
      className: styles.img,
      src: picture,
      alt: 'avatar',
      fallback: fallback
    })
  );
};

Avatar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  picture: PropTypes.string,
  isMale: PropTypes.bool,
  onClick: PropTypes.func
};

Avatar.defaultProps = {
  style: {},
  className: '',
  picture: undefined,
  isMale: false,
  onClick: undefined
};

export default onlyUpdateForPropTypes(Avatar);