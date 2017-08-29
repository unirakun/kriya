export const OPEN_BOTTOMSHEETS = 'OPEN_BOTTOMSHEETS'
export const open = (code, contents) => ({ type: OPEN_BOTTOMSHEETS, payload: { code, contents } })

export const CLOSE_BOTTOMSHEETS = 'CLOSE_BOTTOMSHEETS'
export const close = code => ({ type: CLOSE_BOTTOMSHEETS, payload: code })

export const TOGGLE_BOTTOMSHEETS = 'TOGGLE_BOTTOMSHEETS'
export const toggle = code => ({ type: TOGGLE_BOTTOMSHEETS, payload: code })
