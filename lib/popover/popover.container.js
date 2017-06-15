'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _redux = require('./redux');

var _popover = require('./popover');

var _popover2 = _interopRequireDefault(_popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, _ref) {
  var code = _ref.code;

  var popover = (0, _redux.getPopover)(state)[code];
  if (!popover) return {};
  return popover;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var closable = _ref2.closable,
      code = _ref2.code;

  if (!closable) return {};

  return {
    onClose: function onClose() {
      return dispatch((0, _redux.closePopover)(code));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_popover2.default);