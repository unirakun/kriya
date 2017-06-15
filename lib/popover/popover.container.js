import { connect } from 'react-redux';
import { closePopover, getPopover } from './redux';
import Component from './popover';

var mapStateToProps = function mapStateToProps(state, _ref) {
  var code = _ref.code;

  var popover = getPopover(state)[code];
  if (!popover) return {};
  return popover;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var closable = _ref2.closable,
      code = _ref2.code;

  if (!closable) return {};

  return {
    onClose: function onClose() {
      return dispatch(closePopover(code));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);