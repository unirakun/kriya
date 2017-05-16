'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = undefined;

var _reactRedux = require('react-redux');

var _menu = require('./menu.actions');

var _menu2 = require('./menu');

var _menu3 = _interopRequireDefault(_menu2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onHeaderClick: function onHeaderClick() {
      return dispatch((0, _menu.clickHeader)());
    },
    onFooterClick: function onFooterClick() {
      return dispatch((0, _menu.clickFooter)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(undefined, mapDispatchToProps)(_menu3.default);