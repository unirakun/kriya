import { ADD_TAB, ACTIVATE_TAB, RESET_TABS } from './tabs.actions';

export var initState = { data: {}, keys: [], activated: undefined };
export var initAction = { type: 'UNKNOWN' };

export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initAction,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case ADD_TAB:
      return babelHelpers.extends({}, state, {
        keys: [].concat(babelHelpers.toConsumableArray(state.keys), [payload.code]),
        data: babelHelpers.extends({}, state.data, babelHelpers.defineProperty({}, payload.code, payload))
      });
    case ACTIVATE_TAB:
      return babelHelpers.extends({}, state, { activated: payload });
    case RESET_TABS:
      return initState;
    default:
      return state;
  }
});