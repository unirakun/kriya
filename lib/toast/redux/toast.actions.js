'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CREATE_TOAST = exports.CREATE_TOAST = 'CREATE_TOAST';
var create = exports.create = function create(payload) {
  return { type: CREATE_TOAST, payload: payload };
};

var REMOVE_TOAST = exports.REMOVE_TOAST = 'REMOVE_TOAST';
var remove = exports.remove = function remove() {
  return { type: REMOVE_TOAST };
};