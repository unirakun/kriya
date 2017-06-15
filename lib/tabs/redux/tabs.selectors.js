export var getTabs = function getTabs(state) {
  return state.ui.tabs;
};
export var getActivated = function getActivated(state) {
  return getTabs(state).activated;
};
export var isActivated = function isActivated(state) {
  return function (code) {
    return getActivated(state) === code;
  };
};
export var getData = function getData(state) {
  return getTabs(state).data;
};
export var getTab = function getTab(state) {
  return function (code) {
    return getData(state)[code];
  };
};
export var getKeys = function getKeys(state) {
  return getTabs(state).keys;
};