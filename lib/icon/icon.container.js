import { connect } from 'react-redux';
import Component from './icon';

var defaultPrefix = '';

var mapStateToProps = function mapStateToProps(state) {
  var prefix = state && state.config && state.config.icon && state.config.icon.prefix || defaultPrefix;

  return {
    prefix: prefix
  };
};

export default connect(mapStateToProps)(Component);