import { combineReducers } from 'redux'
import tabs from './tabs'
import { reducer as popover } from '../../../src/popover'
import { reducer as bottomSheets } from '../../../src/bottomSheets'

export default combineReducers({
  tabs,
  bottomSheets,
  popover,
})
