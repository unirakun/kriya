'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

var _helpers = require('../helpers');

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, _ref) {
  var form = _ref.form,
      name = _ref.name,
      type = _ref.type;

  return type === 'selectbox' ? {
    value: (0, _reduxForm.formValueSelector)(form)(state, name)
  } : {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var form = _ref2.form,
      name = _ref2.name,
      type = _ref2.type;

  return type === 'selectbox' ? {
    onChange: function onChange(value) {
      return dispatch((0, _reduxForm.change)(form, name, value));
    }
  } : {};
};

exports.default = (0, _helpers.formInjector)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_input2.default));