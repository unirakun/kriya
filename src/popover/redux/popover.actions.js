export const OPEN_POPOVER = 'OPEN_POPOVER'
export const openPopover = (code, contents) =>
  ({ type: OPEN_POPOVER, payload: { code, contents } })

export const CLOSE_POPOVER = 'CLOSE_POPOVER'
export const closePopover = code => ({ type: CLOSE_POPOVER, payload: code })
