import { connect } from 'react-redux';
import Component from './item';

var isRouteFound = function isRouteFound(result, title) {
  if (!result) return false;
  if (Array.isArray(title)) return !!title.find(function (t) {
    return result.title === t;
  });
  return result.title === title;
};

export var mapStateToProps = function mapStateToProps(state, _ref) {
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

export default connect(mapStateToProps)(Component);