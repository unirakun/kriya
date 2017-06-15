export var OPEN_POPOVER = 'OPEN_POPOVER';
export var openPopover = function openPopover(code, contents) {
  return { type: OPEN_POPOVER, payload: { code: code, contents: contents } };
};

export var CLOSE_POPOVER = 'CLOSE_POPOVER';
export var closePopover = function closePopover(code) {
  return { type: CLOSE_POPOVER, payload: code };
};