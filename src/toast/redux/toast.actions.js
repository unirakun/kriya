export const CREATE_TOAST = 'CREATE_TOAST'

const action = type =>
  (title, options) =>
  ({ type: CREATE_TOAST, payload: { title, type, ...options } })

export const create = (title, options) => action()(title, options)
const types = ['success', 'warning', 'error']
types.forEach((type) => { create[type] = action(type) })

export const REMOVE_TOAST = 'REMOVE_TOAST'
export const remove = () => ({ type: REMOVE_TOAST })
