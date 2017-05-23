'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_TAB = exports.ADD_TAB = 'ADD_TAB';
var add = exports.add = function add(tab) {
  return { type: ADD_TAB, payload: tab };
};

var ACTIVATE_TAB = exports.ACTIVATE_TAB = 'ACTIVATE_TAB';
var activate = exports.activate = function activate(code) {
  return { type: ACTIVATE_TAB, payload: code };
};

var RESET_TABS = exports.RESET_TABS = 'RESET_TABS';
var reset = exports.reset = function reset() {
  return { type: RESET_TABS };
};