export var ADD_TAB = 'ADD_TAB';
export var add = function add(tab) {
  return { type: ADD_TAB, payload: tab };
};

export var ACTIVATE_TAB = 'ACTIVATE_TAB';
export var activate = function activate(code) {
  return { type: ACTIVATE_TAB, payload: code };
};

export var RESET_TABS = 'RESET_TABS';
export var reset = function reset() {
  return { type: RESET_TABS };
};