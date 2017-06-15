'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = undefined;

var _reactRedux = require('react-redux');

var _redux = require('./redux');

var _tabs = require('./tabs');

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state, ownProps) {
  if (ownProps.children) return {};

  return {
    tabs: (0, _redux.getKeys)(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_tabs2.default);