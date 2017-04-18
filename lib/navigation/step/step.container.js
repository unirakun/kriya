'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _redux = require('../redux');

var _step = require('./step');

var _step2 = _interopRequireDefault(_step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var last = _ref.last,
      number = _ref.number;

  if (last) return {};

  return {
    onClick: function onClick() {
      return dispatch((0, _redux.click)(number));
    }
  };
};

exports.default = (0, _reactRedux.connect)(undefined, mapDispatchToProps)(_step2.default);