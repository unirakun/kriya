import React from 'react'
import PropTypes from 'prop-types'

export default (WrappedComponent) => {
  const Wrapper = (props, { _reduxForm }) => <WrappedComponent {...props} form={_reduxForm.form} />
  Wrapper.contextTypes = {
    _reduxForm: PropTypes.object,
  }

  return Wrapper
}
