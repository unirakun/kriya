export const OPEN_TOAST = 'OPEN_TOAST'
export const open = payload => ({ type: OPEN_TOAST, payload })

export const CLOSE_TOAST = 'CLOSE_TOAST'
export const close = () => ({ type: CLOSE_TOAST })

export const REMOVE_TOAST = 'REMOVE_TOAST'
export const remove = () => ({ type: REMOVE_TOAST })
