import popover from './popover'
import * as actions from './popover.actions'
import * as selectors from './popover.selectors'

Object.assign(popover, actions, selectors)

export * from './popover.actions'
export * from './popover.selectors'
export default popover

