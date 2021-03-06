import { compose, createStore, applyMiddleware } from 'redux'
import { devTools } from 'redux-devtools'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from './reducers'

const reducer = combineReducers(reducers)

const middleware = [
  applyMiddleware(thunk),
  // Provides support for DevTools
  devTools()
]

const finalCreateStore = compose(...middleware)(createStore)

export default (initialState) => {
  const store = reducer(initialState)
  return finalCreateStore(reducer, store)
}
