import { connect } from 'react-redux'
import { change, formValueSelector } from 'redux-form'
import { formInjector } from '../helpers'
import Component from './input'

const mapStateToProps = (state, { form, name }) => {
  return {
    value: formValueSelector(form)(state, name),
  }
}

const mapDispatchToProps = (dispatch, { form, name }) => {
  return {
    onChange: value => dispatch(change(form, name, value)),
  }
}

export default formInjector(connect(mapStateToProps, mapDispatchToProps)(Component))
