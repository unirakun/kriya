'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var OPEN_TOAST = exports.OPEN_TOAST = 'OPEN_TOAST';
var open = exports.open = function open(payload) {
  return { type: OPEN_TOAST, payload: payload };
};

var CLOSE_TOAST = exports.CLOSE_TOAST = 'CLOSE_TOAST';
var close = exports.close = function close() {
  return { type: CLOSE_TOAST };
};

var REMOVE_TOAST = exports.REMOVE_TOAST = 'REMOVE_TOAST';
var remove = exports.remove = function remove() {
  return { type: REMOVE_TOAST };
};