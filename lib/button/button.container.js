import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Component from './button';

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var name = _ref.name,
      href = _ref.href,
      type = _ref.type;

  return {
    onClick: function onClick(e) {
      if (!href && type !== 'submit') e.preventDefault();
      e.stopPropagation();
      dispatch({ type: 'BTN_CLICKED_' + name });
    }
  };
};

var ConnectedComponent = connect(undefined, mapDispatchToProps)(Component);
ConnectedComponent.propTypes = {
  name: PropTypes.string.isRequired
};

export default ConnectedComponent;