import { connect } from 'react-redux'
import { change, formValueSelector, getFormSyncErrors, getFormMeta } from 'redux-form'
import Component from './input'

const mapStateToProps = (state, { form, name, placeholder, label, withoutLabel, forceTouch }) => {
  const error = getFormSyncErrors(form)(state)
  const value = formValueSelector(form)(state, name)

  const meta = getFormMeta(form)(state)
  const isTouched = forceTouch || (meta && meta[name] && meta[name].touched)

  return {
    value,
    error: isTouched && error ? error[name] : undefined,
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

export default connect(mapStateToProps, mapDispatchToProps)(Component)
