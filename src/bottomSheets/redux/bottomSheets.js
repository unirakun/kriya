import { OPEN_BOTTOMSHEETS, CLOSE_BOTTOMSHEETS, TOGGLE_BOTTOMSHEETS } from './bottomSheets.actions'

export const initState = { }
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, { type, payload } = initAction) => {
  switch (type) {
    case OPEN_BOTTOMSHEETS:
      return { ...state, [payload.code]: { print: true, contents: payload.contents } }
    case CLOSE_BOTTOMSHEETS:
      return { ...state, [payload]: { ...state[payload], print: false } }
    case TOGGLE_BOTTOMSHEETS:
      return {
        ...state,
        [payload]: { ...state[payload], print: !(state[payload] && state[payload].print) },
      }
    default: return state
  }
}
