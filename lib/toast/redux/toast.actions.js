'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CREATE_TOAST = exports.CREATE_TOAST = 'CREATE_TOAST';

var action = function action(type) {
  return function (title, options) {
    return { type: CREATE_TOAST, payload: _extends({ title: title, type: type }, options) };
  };
};

var create = exports.create = function create(title, options) {
  return action()(title, options);
};
var types = ['success', 'warning', 'error'];
types.forEach(function (type) {
  create[type] = action(type);
});

var REMOVE_TOAST = exports.REMOVE_TOAST = 'REMOVE_TOAST';
var remove = exports.remove = function remove() {
  return { type: REMOVE_TOAST };
};