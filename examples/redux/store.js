import { createStore, combineReducers, compose } from 'redux'
import { reducer as form } from 'redux-form'

const store = createStore(
  combineReducers({
    form,
  }),
  compose(
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

export default store
