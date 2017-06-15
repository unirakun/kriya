'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _redux = require('./redux');

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, _ref) {
  var name = _ref.name;

  return {
    closed: !(0, _redux.isOpened)(state)(name)
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
        if (closed) dispatch((0, _redux.open)(name));
      };
    }
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, stateProps, dispatchProps, {
    onClick: dispatchProps.onClick(stateProps.closed)
  }, ownProps);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(_card2.default);