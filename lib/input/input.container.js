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
      placeholder = _ref.placeholder,
      label = _ref.label,
      withoutLabel = _ref.withoutLabel;

  var submitErrors = (0, _reduxForm.getFormSubmitErrors)(form)(state);
  var value = (0, _reduxForm.formValueSelector)(form)(state, name);

  return {
    value: value,
    error: submitErrors ? submitErrors[name] : undefined,
    label: !withoutLabel && (label || placeholder),
    hiddenLabel: !label && (!value || Array.isArray(value) && value.length === 0)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var form = _ref2.form,
      name = _ref2.name,
      type = _ref2.type;

  if (type !== 'selectbox') return {};

  return {
    onChange: function onChange(value) {
      return dispatch((0, _reduxForm.change)(form, name, value));
    },
    onInputChange: function onInputChange(value) {
      return dispatch((0, _reduxForm.change)(form, 'INPUT_SEARCH_' + name, value));
    }
  };
};

exports.default = (0, _helpers.formInjector)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_input2.default));