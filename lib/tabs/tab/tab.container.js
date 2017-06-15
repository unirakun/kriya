'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = exports.mapStateToProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _redux = require('../redux');

var _tab = require('./tab');

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state, _ref) {
  var code = _ref.code;

  return _extends({
    activated: (0, _redux.isActivated)(state)(code)
  }, (0, _redux.getTab)(state)(code));
};

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var code = _ref2.code;

  return {
    onClick: function onClick() {
      return dispatch({ type: 'TAB_CLICKED', payload: code });
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_tab2.default);