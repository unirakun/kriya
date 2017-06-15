export var OPEN = 'CARD_OPEN';
export var open = function open(name) {
  return { type: OPEN, payload: name };
};

export var CLOSE = 'CARD_CLOSE';
export var close = function close(name) {
  return { type: CLOSE, payload: name };
};

export var TOGGLE = 'CARD_TOGGLE';
export var toggle = function toggle(name) {
  return { type: TOGGLE, payload: name };
};

export var CLOSE_ALL = 'CARD_CLOSE_ALL';
export var closeAll = function closeAll() {
  return { type: CLOSE_ALL };
};

export var OPEN_ALL = 'CARD_OPEN_ALL';
export var openAll = function openAll() {
  return { type: OPEN_ALL };
};