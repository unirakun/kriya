'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = require('recompose');

var _inputStyles = require('../../src/input/input.styles.scss');

var _inputStyles2 = _interopRequireDefault(_inputStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getComponent = function getComponent(type) {
  switch (type) {
    case 'select':
      return 'select';
    case 'textarea':
      return 'textarea';
    default:
      return 'input';
  }
};

var Input = function Input(_ref) {
  var className = _ref.className,
      style = _ref.style,
      type = _ref.type,
      name = _ref.name,
      label = _ref.label,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      required = _ref.required,
      options = _ref.options;

  var classes = (0, _classnames2.default)(_inputStyles2.default.input, _inputStyles2.default['type-' + type], className);

  return _react2.default.createElement(
    'div',
    { className: classes, style: style },
    label && _react2.default.createElement(
      'label',
      { htmlFor: name },
      label,
      required && '*'
    ),
    _react2.default.createElement(
      _reduxForm.Field,
      {
        className: _inputStyles2.default.field,
        name: name,
        component: getComponent(type),
        type: type,
        placeholder: placeholder,
        disabled: disabled,
        required: required
      },
      type === 'select' ? options.map(function (o) {
        return _react2.default.createElement(
          'option',
          { key: o.id, value: o.id },
          o.label
        );
      }) : null
    ),
    type === 'select' && _react2.default.createElement('i', { className: (0, _classnames2.default)(_inputStyles2.default.arrow, 'mdv-expand_more') })
  );
};

Input.propTypes = {
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  placeholder: _react.PropTypes.string,
  name: _react.PropTypes.string.isRequired,
  label: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(['input', 'checkbox', 'textarea', 'radio', 'select', 'number']),
  disabled: _react.PropTypes.bool,
  required: _react.PropTypes.bool,
  options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.string,
    label: _react.PropTypes.string
  }))
};

Input.defaultProps = {
  type: 'input',
  label: undefined,
  disabled: false,
  required: false,
  placeholder: '',
  className: '',
  style: {},
  options: []
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Input);