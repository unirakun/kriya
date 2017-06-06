import { connect } from 'react-redux'
import { change, formValueSelector, getFormSubmitErrors } from 'redux-form'
import { formInjector } from '../helpers'
import Component from './input'

const mapStateToProps = (state, { form, name, type }) => {
  if (type !== 'selectbox') return {}

  const submitErrors = getFormSubmitErrors(form)(state)
  return {
    value: formValueSelector(form)(state, name),
    error: submitErrors ? submitErrors[name] : undefined,
  }
}

const mapDispatchToProps = (dispatch, { form, name, type }) => {
  if (type !== 'selectbox') return {}

  return {
    onChange: value => dispatch(change(form, name, value)),
    onInputChange: value => dispatch(change(form, name, value)),
  }
}

export default formInjector(connect(mapStateToProps, mapDispatchToProps)(Component))
