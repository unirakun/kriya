import { connect } from 'react-redux'
import { change, formValueSelector, getFormSubmitErrors } from 'redux-form'
import { formInjector } from '../helpers'
import Component from './input'

const mapStateToProps = (state, { form, name, placeholder, label, withoutLabel }) => {
  const submitErrors = getFormSubmitErrors(form)(state)
  const value = formValueSelector(form)(state, name)

  return {
    value,
    error: submitErrors ? submitErrors[name] : undefined,
    label: !withoutLabel && (label || placeholder),
    hiddenLabel: !label && (!value || (Array.isArray(value) && value.length === 0)),
  }
}

const mapDispatchToProps = (dispatch, { form, name, type }) => {
  if (type !== 'selectbox') return {}

  return {
    onChange: value => dispatch(change(form, name, value)),
    onInputChange: value => dispatch(change(form, `INPUT_SEARCH_${name}`, value)),
  }
}

export default formInjector(connect(mapStateToProps, mapDispatchToProps)(Component))
