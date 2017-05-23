import { ADD_TAB, ACTIVATE_TAB, RESET_TABS } from './tabs.actions'

export const initState = { data: {}, keys: [], activated: undefined }
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, { type, payload } = initAction) => {
  switch (type) {
    case ADD_TAB: return {
      ...state,
      keys: [...state.keys, payload.code],
      data: { ...state.data, [payload.code]: payload },
    }
    case ACTIVATE_TAB: return { ...state, activated: payload }
    case RESET_TABS: return initState
    default: return state
  }
}
