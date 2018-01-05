'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _recompose = require('recompose');

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

var _toast = require('./toast');

var _toast2 = _interopRequireDefault(_toast);

var _redux = require('./redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, (0, _redux.getToast)(state));
};
var mapDisptachToProps = function mapDisptachToProps(dispatch) {
  return {
    remove: function remove() {
      return dispatch((0, _redux.remove)());
    }
  };
};
exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(mapStateToProps, mapDisptachToProps), (0, _hoc2.default)(10000000))(_toast2.default);