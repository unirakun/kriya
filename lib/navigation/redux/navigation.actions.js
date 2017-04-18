'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_STEP = exports.ADD_STEP = 'NAVIGATION_ADD_STEP';
var addStep = exports.addStep = function addStep(step) {
  return { type: ADD_STEP, payload: step };
};

var RESET_STEPS = exports.RESET_STEPS = 'NAVIGATION_RESET_STEPS';
var resetSteps = exports.resetSteps = function resetSteps() {
  return { type: RESET_STEPS };
};

var CLICKED = exports.CLICKED = 'NAVIGATION_CLICKED';
var click = exports.click = function click(number) {
  return { type: CLICKED, payload: number };
};