import { connect } from 'react-redux';
import { getNavigation } from './redux';
import Component from './navigation';

var mapStateToProps = function mapStateToProps(state) {
  return {
    children: getNavigation(state)
  };
};

export default connect(mapStateToProps)(Component);