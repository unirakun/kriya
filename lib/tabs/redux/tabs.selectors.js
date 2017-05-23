"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getTabs = exports.getTabs = function getTabs(state) {
  return state.ui.tabs;
};
var getActivated = exports.getActivated = function getActivated(state) {
  return getTabs(state).activated;
};
var isActivated = exports.isActivated = function isActivated(state) {
  return function (code) {
    return getActivated(state) === code;
  };
};
var getData = exports.getData = function getData(state) {
  return getTabs(state).data;
};
var getTab = exports.getTab = function getTab(state) {
  return function (code) {
    return getData(state)[code];
  };
};
var getKeys = exports.getKeys = function getKeys(state) {
  return getTabs(state).keys;
};