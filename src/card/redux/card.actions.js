export const OPEN = 'CARD_OPEN'
export const open = name => ({ type: OPEN, payload: name })

export const CLOSE = 'CARD_CLOSE'
export const close = name => ({ type: CLOSE, payload: name })

export const TOGGLE = 'CARD_TOGGLE'
export const toggle = name => ({ type: TOGGLE, payload: name })

export const CLOSE_ALL = 'CARD_CLOSE_ALL'
export const closeAll = () => ({ type: CLOSE_ALL })

export const OPEN_ALL = 'CARD_OPEN_ALL'
export const openAll = () => ({ type: OPEN_ALL })
