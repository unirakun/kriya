import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app.wrapped'

/* eslint-env browser */

// DEV_MODE
global.DEV_MODE = true

const myRender = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app'),
  )
}

myRender()
if (module.hot) {
  module.hot.accept('./app', myRender)
}
