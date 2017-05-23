import { createStore, combineReducers, compose } from 'redux'
import { reducer as form } from 'redux-form'
import ui from './ui'

const store = createStore(
  combineReducers({
    form,
    ui,
  }),
  compose(
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),

)

export default store
