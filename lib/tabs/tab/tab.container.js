import { connect } from 'react-redux';
import { isActivated, getTab } from '../redux';
import Component from './tab';

export var mapStateToProps = function mapStateToProps(state, _ref) {
  var code = _ref.code;

  return babelHelpers.extends({
    activated: isActivated(state)(code)
  }, getTab(state)(code));
};

export var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var code = _ref2.code;

  return {
    onClick: function onClick() {
      return dispatch({ type: 'TAB_CLICKED', payload: code });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);