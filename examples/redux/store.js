import { createStore, combineReducers, compose } from 'redux'
import { reducer as form } from 'redux-form'

const uiState = {
  tabs: {
    keys: ['CHOOSE', 'FIND', 'DONE'],
    activated: 'FIND',
    data: {
      CHOOSE: {
        code: 'CHOOSE',
        label: 'Choose',
      },
      FIND: {
        code: 'FIND',
        label: 'Find',
      },
      DONE: {
        code: 'DONE',
        label: 'Done !',
      },
    },
  },
}

const store = createStore(
  combineReducers({
    form,
    ui: (state = uiState) => state,
  }),
  compose(
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),

)

export default store
