export var ADD_STEP = 'NAVIGATION_ADD_STEP';
export var addStep = function addStep(step) {
  return { type: ADD_STEP, payload: step };
};

export var RESET_STEPS = 'NAVIGATION_RESET_STEPS';
export var resetSteps = function resetSteps() {
  return { type: RESET_STEPS };
};

export var CLICKED = 'NAVIGATION_CLICKED';
export var click = function click(number) {
  return { type: CLICKED, payload: number };
};