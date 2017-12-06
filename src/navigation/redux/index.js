import navigation from './navigation'
import * as actions from './navigation.actions'
import * as selectors from './navigation.selectors'

Object.assign(navigation, actions, selectors)

export * from './navigation.actions'
export * from './navigation.selectors'
export default navigation

