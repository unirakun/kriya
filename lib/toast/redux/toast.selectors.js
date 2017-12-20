"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getCurrentToast = exports.getCurrentToast = function getCurrentToast(state) {
  return state.ui.toast[0];
};