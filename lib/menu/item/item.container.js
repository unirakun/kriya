'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRouteFound = function isRouteFound(result, title) {
  return result && result.title === title;
};

var mapStateToProps = function mapStateToProps(state, _ref) {
  var title = _ref.title;

  // We are looking top down the result tree
  var result = state.router.result;
  var selected = isRouteFound(result, title);
  while (result && !selected) {
    result = result.parent;
    selected = isRouteFound(result, title);
  }

  return {
    selected: selected
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_item2.default);