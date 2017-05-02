"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getCards = exports.getCards = function getCards(state) {
  return state.ui.cards;
};
var getCard = exports.getCard = function getCard(state) {
  return function (id) {
    return getCards(state)[id];
  };
};

var isOpened = exports.isOpened = function isOpened(state) {
  return function (id) {
    return getCard(state)(id);
  };
};