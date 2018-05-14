import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './App'
import createStore from './store'

const store = createStore({})

const renderApp = () => {
  render(
    <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
  )
}
renderApp()
