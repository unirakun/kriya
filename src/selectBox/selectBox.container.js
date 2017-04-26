import { connect } from 'react-redux'
import { change, formValueSelector } from 'redux-form'
import Component from './selectBox'

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

export default connect(mapStateToProps, mapDispatchToProps)(Component)
