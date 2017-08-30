'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _redux = require('./redux');

var _bottomSheets = require('./bottomSheets');

var _bottomSheets2 = _interopRequireDefault(_bottomSheets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, _ref) {
  var code = _ref.code;

  var bottomSheets = (0, _redux.get)(state)[code];
  if (!bottomSheets) return {};
  return bottomSheets;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var closable = _ref2.closable,
      code = _ref2.code;

  if (!closable) return {};

  return {
    toggle: function toggle() {
      return dispatch((0, _redux.toggle)(code));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_bottomSheets2.default);