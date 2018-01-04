'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _redux = require('../redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var _onClick = _ref.onClick;

  return {
    onClick: function onClick() {
      if (_onClick) _onClick();
      dispatch((0, _redux.remove)());
    }
  };
};
exports.default = (0, _reactRedux.connect)(undefined, mapDispatchToProps)(_button2.default);