import { connect } from 'react-redux';
import { clickHeader, clickFooter } from './menu.actions';
import Component from './menu';

export var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onHeaderClick: function onHeaderClick() {
      return dispatch(clickHeader());
    },
    onFooterClick: function onFooterClick() {
      return dispatch(clickFooter());
    }
  };
};

export default connect(undefined, mapDispatchToProps)(Component);