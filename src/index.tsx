import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Actions, reducer } from './app/redux'
import { AppContainer } from './app/App.container'

const store = createStore(reducer)

window.addEventListener('keypress', event => {
  if (event.key === 'Enter')
    store.dispatch(Actions.freeze())
})

ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('root')
)

// If you want your mobileApp to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
