'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

var _selectBox = require('./selectBox');

var _selectBox2 = _interopRequireDefault(_selectBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, _ref) {
  var form = _ref.form,
      name = _ref.name;

  return {
    value: (0, _reduxForm.formValueSelector)(form)(state, name)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var form = _ref2.form,
      name = _ref2.name;

  return {
    onChange: function onChange(value) {
      return dispatch((0, _reduxForm.change)(form, name, value));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_selectBox2.default);