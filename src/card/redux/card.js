import {
  OPEN,
  CLOSE,
  TOGGLE,
  OPEN_ALL,
  CLOSE_ALL,
} from './card.actions'

export const initState = {}
export const initAction = { type: 'UNKOWN' }

export default (state = initState, { type, payload } = initAction) => {
  switch (type) {
    case OPEN: return { ...state, [payload]: true }
    case CLOSE: return { ...state, [payload]: false }
    case TOGGLE: return { ...state, [payload]: !state[payload] }
    case OPEN_ALL:
      return Object.keys(state)
        .reduce(
          (acc, next) => ({ ...acc, [next]: true }),
          {},
        )
    case CLOSE_ALL:
      return Object.keys(state)
        .reduce(
          (acc, next) => ({ ...acc, [next]: false }),
          {},
        )
    default: return state
  }
}
