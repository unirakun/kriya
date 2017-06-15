'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _redux = require('./redux');

var _navigation = require('./navigation');

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    children: (0, _redux.getNavigation)(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_navigation2.default);