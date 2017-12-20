'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _toast = require('./toast');

var _toast2 = _interopRequireDefault(_toast);

var _redux = require('./redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, _ref) {
  var position = _ref.position;

  return _extends({}, (0, _redux.getCurrentToast)(state), {
    position: position
  });
};
var mapDisptachToProps = function mapDisptachToProps(dispatch) {
  return {
    close: function close(handler) {
      if (handler) handler();
      dispatch((0, _redux.close)());
      return setTimeout(function () {
        return dispatch((0, _redux.remove)());
      }, 1000);
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDisptachToProps)(_toast2.default);