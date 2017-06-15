import { connect } from 'react-redux';
import { open, isOpened } from './redux';
import Component from './card';

var mapStateToProps = function mapStateToProps(state, _ref) {
  var name = _ref.name;

  return {
    closed: !isOpened(state)(name)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var name = _ref2.name,
      _onClick = _ref2.onClick;

  return {
    onClick: function onClick(closed) {
      return function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (_onClick) _onClick(e);
        if (closed) dispatch(open(name));
      };
    }
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  return babelHelpers.extends({}, stateProps, dispatchProps, {
    onClick: dispatchProps.onClick(stateProps.closed)
  }, ownProps);
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component);