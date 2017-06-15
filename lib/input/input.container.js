import { connect } from 'react-redux';
import { change, formValueSelector, getFormSubmitErrors } from 'redux-form';
import { formInjector } from '../helpers';
import Component from './input';

var mapStateToProps = function mapStateToProps(state, _ref) {
  var form = _ref.form,
      name = _ref.name,
      type = _ref.type;

  if (type !== 'selectbox') return {};

  var submitErrors = getFormSubmitErrors(form)(state);
  return {
    value: formValueSelector(form)(state, name),
    error: submitErrors ? submitErrors[name] : undefined
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var form = _ref2.form,
      name = _ref2.name,
      type = _ref2.type;

  if (type !== 'selectbox') return {};

  return {
    onChange: function onChange(value) {
      return dispatch(change(form, name, value));
    },
    onInputChange: function onInputChange(value) {
      return dispatch(change(form, name, value));
    }
  };
};

export default formInjector(connect(mapStateToProps, mapDispatchToProps)(Component));