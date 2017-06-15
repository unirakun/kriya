'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var OPEN_POPOVER = exports.OPEN_POPOVER = 'OPEN_POPOVER';
var openPopover = exports.openPopover = function openPopover(code, contents) {
  return { type: OPEN_POPOVER, payload: { code: code, contents: contents } };
};

var CLOSE_POPOVER = exports.CLOSE_POPOVER = 'CLOSE_POPOVER';
var closePopover = exports.closePopover = function closePopover(code) {
  return { type: CLOSE_POPOVER, payload: code };
};