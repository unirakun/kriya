export const CREATE_TOAST = 'CREATE_TOAST'
export const create = payload => ({ type: CREATE_TOAST, payload })

export const REMOVE_TOAST = 'REMOVE_TOAST'
export const remove = () => ({ type: REMOVE_TOAST })
