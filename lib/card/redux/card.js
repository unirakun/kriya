import { OPEN, CLOSE, TOGGLE, OPEN_ALL, CLOSE_ALL } from './card.actions';

export var initState = {};
export var initAction = { type: 'UNKOWN' };

export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initAction,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case OPEN:
      return babelHelpers.extends({}, state, babelHelpers.defineProperty({}, payload, true));
    case CLOSE:
      return babelHelpers.extends({}, state, babelHelpers.defineProperty({}, payload, false));
    case TOGGLE:
      return babelHelpers.extends({}, state, babelHelpers.defineProperty({}, payload, !state[payload]));
    case OPEN_ALL:
      return Object.keys(state).reduce(function (acc, next) {
        return babelHelpers.extends({}, acc, babelHelpers.defineProperty({}, next, true));
      }, {});
    case CLOSE_ALL:
      return Object.keys(state).reduce(function (acc, next) {
        return babelHelpers.extends({}, acc, babelHelpers.defineProperty({}, next, false));
      }, {});
    default:
      return state;
  }
});