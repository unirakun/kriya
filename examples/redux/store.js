import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducer as form } from 'redux-form'
import { router } from '@k-redux-router/core'
import sagas from '../sagas'
import config from './config'
import ui from './ui'
import routes from './router'

// eslint-disable-next-line no-underscore-dangle, no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const { init, middleware, reducer } = router(routes, { getState: state => state.router })

const store = createStore(
  combineReducers({
    config,
    form,
    ui,
    router: reducer,
  }),
  undefined,
  composeEnhancers(
    applyMiddleware(sagaMiddleware, middleware),
  ),

)

sagaMiddleware.run(sagas)

store.dispatch(init())

export default store
