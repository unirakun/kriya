'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var OPEN = exports.OPEN = 'CARD_OPEN';
var open = exports.open = function open(name) {
  return { type: OPEN, payload: name };
};

var CLOSE = exports.CLOSE = 'CARD_CLOSE';
var close = exports.close = function close(name) {
  return { type: CLOSE, payload: name };
};

var TOGGLE = exports.TOGGLE = 'CARD_TOGGLE';
var toggle = exports.toggle = function toggle(name) {
  return { type: TOGGLE, payload: name };
};

var CLOSE_ALL = exports.CLOSE_ALL = 'CARD_CLOSE_ALL';
var closeAll = exports.closeAll = function closeAll() {
  return { type: CLOSE_ALL };
};

var OPEN_ALL = exports.OPEN_ALL = 'CARD_OPEN_ALL';
var openAll = exports.openAll = function openAll() {
  return { type: OPEN_ALL };
};