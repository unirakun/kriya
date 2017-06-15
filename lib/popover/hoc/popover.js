import React from 'react';
import Popover from '../popover.container';

export default (function (config) {
  return function (Component) {
    return function (props) {
      return React.createElement(
        Popover,
        config,
        React.createElement(Component, props)
      );
    };
  };
});