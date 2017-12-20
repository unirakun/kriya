import { OPEN_TOAST, CLOSE_TOAST, REMOVE_TOAST } from './toast.actions'

export const initState = []
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, { type, payload } = initAction) => {
  switch (type) {
    case OPEN_TOAST:
      return [...state, { print: true, ...payload }]
    case CLOSE_TOAST: {
      return state.map((item, idx) => {
        if (idx === 0) return { ...item, print: false }
        return item
      })
    }
    case REMOVE_TOAST: {
      return [...state].slice(1)
    }
    default: return state
  }
}
