import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from './Counter'

import './styles.css'

const log = console.log

const initialState = { count: 0 }

function reducer(state = initialState, action) {
  log(`action`, action)
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}

const store = createStore(reducer)
console.log(`done`, store.getState())

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
