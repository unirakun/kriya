import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForPropTypes } from 'recompose';
import classnames from 'classnames';
import styles from '../../../src/input/input.styles.scss';

var Field = function Field(_ref) {
  var input = _ref.input,
      placeholder = _ref.placeholder,
      type = _ref.type,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      submitFailed = _ref$meta.submitFailed;

  var classes = classnames(styles.field, babelHelpers.defineProperty({}, styles.error, (touched || submitFailed) && error));

  return React.createElement('input', babelHelpers.extends({ className: classes }, input, { placeholder: placeholder, type: type }));
};

Field.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    submitFailed: PropTypes.bool
  }).isRequired
};

Field.defaultProps = {
  placeholder: undefined
};

export default onlyUpdateForPropTypes(Field);