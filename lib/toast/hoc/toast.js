'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDelay = undefined;

var _recompose = require('recompose');

var timer = null;

var addDelay = exports.addDelay = function addDelay(prevProps, props, defaultDelay) {
  var print = props.print,
      code = props.code,
      remove = props.remove,
      delay = props.delay;

  if (prevProps.code !== code && print) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(remove, delay || defaultDelay);
  }
};

exports.default = function (defaultDelay) {
  return function (Component) {
    return (0, _recompose.lifecycle)({
      componentDidUpdate: function componentDidUpdate(prevProps) {
        return addDelay(prevProps, this.props, defaultDelay);
      }
    })(Component);
  };
};