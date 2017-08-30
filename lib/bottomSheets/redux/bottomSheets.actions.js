'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var OPEN_BOTTOMSHEETS = exports.OPEN_BOTTOMSHEETS = 'OPEN_BOTTOMSHEETS';
var open = exports.open = function open(code, contents) {
  return { type: OPEN_BOTTOMSHEETS, payload: { code: code, contents: contents } };
};

var CLOSE_BOTTOMSHEETS = exports.CLOSE_BOTTOMSHEETS = 'CLOSE_BOTTOMSHEETS';
var close = exports.close = function close(code) {
  return { type: CLOSE_BOTTOMSHEETS, payload: code };
};

var TOGGLE_BOTTOMSHEETS = exports.TOGGLE_BOTTOMSHEETS = 'TOGGLE_BOTTOMSHEETS';
var toggle = exports.toggle = function toggle(code) {
  return { type: TOGGLE_BOTTOMSHEETS, payload: code };
};