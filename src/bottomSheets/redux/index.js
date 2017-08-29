import bottomSheets from './bottomSheets'
import * as actions from './bottomSheets.actions'
import * as selectors from './bottomSheets.selectors'

Object.assign(bottomSheets, actions, selectors)

export * from './bottomSheets.actions'
export * from './bottomSheets.selectors'
export default bottomSheets
