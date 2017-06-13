import { combineReducers } from 'redux'
import tabs from './tabs'
import { reducer as popover } from '../../../src/popover'

export default combineReducers({
  tabs,
  popover,
})
