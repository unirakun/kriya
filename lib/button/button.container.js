'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var name = _ref.name,
      href = _ref.href,
      type = _ref.type,
      _onClick = _ref.onClick;

  return {
    onClick: function onClick(e) {
      if (_onClick) _onClick();
      if (!href && type !== 'submit') e.preventDefault();
      e.stopPropagation();
      dispatch({ type: 'BTN_CLICKED_' + name });
    }
  };
};

var ConnectedComponent = (0, _reactRedux.connect)(undefined, mapDispatchToProps)(_button2.default);
ConnectedComponent.propTypes = {
  name: _propTypes2.default.string.isRequired
};

exports.default = ConnectedComponent;