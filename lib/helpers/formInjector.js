import React from 'react';
import PropTypes from 'prop-types';

export default (function (WrappedComponent) {
  var Wrapper = function Wrapper(props, _ref) {
    var _reduxForm = _ref._reduxForm;
    return React.createElement(WrappedComponent, babelHelpers.extends({}, props, { form: _reduxForm.form }));
  };
  Wrapper.contextTypes = {
    _reduxForm: PropTypes.object
  };

  return Wrapper;
});