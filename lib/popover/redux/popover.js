import { OPEN_POPOVER, CLOSE_POPOVER } from './popover.actions';

export var initState = {};
export var initAction = { type: 'UNKNOWN' };

export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initAction,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case OPEN_POPOVER:
      return babelHelpers.extends({}, state, babelHelpers.defineProperty({}, payload.code, { print: true, contents: payload.contents }));
    case CLOSE_POPOVER:
      return babelHelpers.extends({}, state, babelHelpers.defineProperty({}, payload, babelHelpers.extends({}, state[payload], { print: false })));
    default:
      return state;
  }
});