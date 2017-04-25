'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _reactRedux = require('react-redux');

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var name = _ref.name,
      href = _ref.href;

  return {
    onClick: function onClick(e) {
      if (!href) e.preventDefault();
      e.stopPropagation();
      dispatch({ type: 'BTN_CLICKED_' + name });
    }
  };
};

var ConnectedComponent = (0, _reactRedux.connect)(undefined, mapDispatchToProps)(_button2.default);
ConnectedComponent.propTypes = {
  name: _react.PropTypes.string.isRequired
};

exports.default = ConnectedComponent;