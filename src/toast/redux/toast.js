import { CREATE_TOAST, REMOVE_TOAST } from './toast.actions'

export const initState = {}
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, { type, payload } = initAction) => {
  switch (type) {
    case CREATE_TOAST:
      return { ...payload, print: true }
    case REMOVE_TOAST:
      return initState
    default: return state
  }
}
