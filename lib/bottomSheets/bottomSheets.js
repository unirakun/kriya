'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _recompose = require('recompose');

var _bottomSheetsStyles = require('../../src/bottomSheets/bottomSheets.styles.scss');

var _bottomSheetsStyles2 = _interopRequireDefault(_bottomSheetsStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BottomSheets = function BottomSheets(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      toggle = _ref.toggle,
      print = _ref.print,
      header = _ref.header,
      contents = _ref.contents;

  var classes = (0, _classnames3.default)(_bottomSheetsStyles2.default.bottomSheets, className);

  var classSheets = (0, _classnames3.default)(_bottomSheetsStyles2.default.sheets, _defineProperty({}, _bottomSheetsStyles2.default.print, print));

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    _react2.default.createElement(
      'div',
      { style: style, className: classes },
      _react2.default.createElement(
        'div',
        { className: classSheets },
        _react2.default.createElement(
          'div',
          { className: _bottomSheetsStyles2.default.header, onClick: toggle },
          header
        ),
        _react2.default.createElement('hr', { className: _bottomSheetsStyles2.default.separator }),
        _react2.default.createElement(
          'div',
          { className: _bottomSheetsStyles2.default.content },
          _react2.default.cloneElement(children, _extends({ print: print }, contents))
        )
      )
    )
  );
};

BottomSheets.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  toggle: _propTypes2.default.func,
  print: _propTypes2.default.bool,
  header: _propTypes2.default.object,
  contents: _propTypes2.default.object
};

BottomSheets.defaultProps = {
  style: {},
  className: '',
  toggle: undefined,
  print: false,
  header: undefined,
  contents: undefined
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(BottomSheets);