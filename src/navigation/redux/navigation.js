import { ADD_STEP, RESET_STEPS } from './navigation.actions'

export const initState = []
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, { type, payload } = initAction) => {
  switch (type) {
    case ADD_STEP: return [...state, payload]
    case RESET_STEPS: return initState
    default: return state
  }
}
