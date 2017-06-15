import { ADD_STEP, RESET_STEPS } from './navigation.actions';

export var initState = [];
export var initAction = { type: 'UNKNOWN' };

export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initAction,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case ADD_STEP:
      return [].concat(babelHelpers.toConsumableArray(state), [payload]);
    case RESET_STEPS:
      return initState;
    default:
      return state;
  }
});