'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultPrefix = '';

var mapStateToProps = function mapStateToProps(state) {
  var prefix = state && state.config && state.config.icon && state.config.icon.prefix || defaultPrefix;

  return {
    prefix: prefix
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_icon2.default);