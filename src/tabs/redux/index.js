import tabs from './tabs'
import * as actions from './tabs.actions'
import * as selectors from './tabs.selectors'

Object.assign(tabs, actions, selectors)

export * from './tabs.actions'
export * from './tabs.selectors'
export default tabs

