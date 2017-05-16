'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = undefined;

var _reactRedux = require('react-redux');

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRouteFound = function isRouteFound(result, title) {
  if (!result) return false;
  if (Array.isArray(title)) return !!title.find(function (t) {
    return result.title === t;
  });
  return result.title === title;
};

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state, _ref) {
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