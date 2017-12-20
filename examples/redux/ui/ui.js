import { combineReducers } from 'redux'
import { reducer as bottomSheets } from '../../../src/bottomSheets'
import { reducer as popover } from '../../../src/popover'
import { reducer as toast } from '../../../src/toast'
import tabs from './tabs'

export default combineReducers({
  bottomSheets,
  popover,
  tabs,
  toast,
})
