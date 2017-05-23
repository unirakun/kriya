export const getTabs = state => state.ui.tabs
export const getActivated = state => getTabs(state).activated
export const isActivated = state => code => (getActivated(state) === code)
export const getData = state => getTabs(state).data
export const getTab = state => code => getData(state)[code]
export const getKeys = state => getTabs(state).keys
