export const ADD_TAB = 'ADD_TAB'
export const add = tab => ({ type: ADD_TAB, payload: tab })

export const ACTIVATE_TAB = 'ACTIVATE_TAB'
export const activate = code => ({ type: ACTIVATE_TAB, payload: code })

export const RESET_TABS = 'RESET_TABS'
export const reset = () => ({ type: RESET_TABS })
