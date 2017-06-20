import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducer as form } from 'redux-form'
import { routerForBrowser, initializeCurrentLocation } from 'redux-little-router'
import sagas from '../sagas'
import ui from './ui'
import router from './router'

const sagaMiddleware = createSagaMiddleware()

const {
  reducer,
  enhancer,
  middleware,
} = routerForBrowser({ routes: router, basename: '' })

const store = createStore(
  combineReducers({
    form,
    ui,
    router: reducer,
  }),
  compose(
    enhancer,
    applyMiddleware(sagaMiddleware, middleware),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),

)

sagaMiddleware.run(sagas)

const initialLocation = store.getState().router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation))
}

export default store
