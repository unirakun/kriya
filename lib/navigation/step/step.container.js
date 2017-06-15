import { connect } from 'react-redux';
import { click } from '../redux';
import Component from './step';

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var last = _ref.last,
      number = _ref.number;

  if (last) return {};

  return {
    onClick: function onClick() {
      return dispatch(click(number));
    }
  };
};

export default connect(undefined, mapDispatchToProps)(Component);