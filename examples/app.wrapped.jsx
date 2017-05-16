/* eslint-disable import/first */
// - For webpack
import 'isomorphic-fetch'
import 'babel-polyfill'
import './global.scss'
// - END / For webpack
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './app'
/* eslint-enable import/first */

const Wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Wrapper
